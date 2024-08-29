import { useEffect, useState } from 'react';

// Define the product type based on the API response
export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: Array<string>;
  brand?: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Array<{
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }>;
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: Array<string>;
  thumbnail: string;
};

// Define the type for the entire product list
export type ProductsList = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

// The fetcher function used by SWR
// const fetcher = (url: string) => fetch(url).then((res) => res.json()) as Promise<ProductsList>;

// // The custom hook with types added
// export const useGetProduct = ({
//   limit,
//   skip,
// }: {
//   limit: number;
//   skip: number;
// }) => {
//   const { data, error } = useSWR<ProductsList>(`https://dummyjson.com/products&page=${skip}&limit=${limit}`, fetcher);

//   return {
//     products: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// };

export const useGetProduct = ({
  limit,
  skip,
}: {
  limit: number;
  skip: number;
}) => {
  const [isError, setIsError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<ProductsList | null>(null);

  useEffect(() => {
    // Fetch the product list
    fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error);
        setIsLoading(false);
      });
  }
  , [limit, skip]);


  return {
    products,
    isLoading,
    isError,
  };



};
