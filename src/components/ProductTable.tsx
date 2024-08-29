import { Pagination, Table } from 'antd';
import { useGetProduct } from '../ApiHooks/useGetProduct';
import { useState } from 'react';
import { columns } from '../columns/product.column';

export const ProductTable = () => {

  const [limit , setLimit] = useState(10)
  const [skip , setSkip] = useState(0)

  const { products, isError, isLoading } = useGetProduct({
    limit: limit,
    skip: skip
  })

  if (isError) {
    return <div>{
      isError?.message
    }</div>
  }




  return <>
  
  <Table columns={columns} dataSource={
    products?.products.map((product) => ({
      ...product,
      key: product?.meta?.barcode,
      name: product?.title,
      brand: product?.brand,
      price: product?.price,
      catefory: product?.category,
      discount: product?.discountPercentage,
    })

    )} loading={isLoading}  
    pagination={false}
    style={{height: "700px", overflowY: "scroll"}}
    />
    <Pagination current={skip} onChange={(
      page , pageSize
    )=>{
      setLimit(pageSize)
      setSkip(page)
      
    }} total={products?.total} />
  </>;

}
