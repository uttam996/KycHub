import { Button } from 'antd';
import { Product } from '../ApiHooks/useGetProduct';
import { useDispatch, useSelector } from 'react-redux';
import { addCompare } from '../store/CompareSlice';
import { toast } from 'react-toastify';
import { RootState, store } from '../store/store';




export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a: Product, b: Product) => a.title.localeCompare(b.title),
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    // sorter: (a: Product, b: Product) => a.brand.localeCompare(b.brand),
  },
  {
    title: 'Price',
    dataIndex: 'price',
    sorter: (a: Product, b: Product) => a.price - b.price,
  },
  {
    title: 'Category',
    dataIndex: 'category',
    sorter: (a: Product, b: Product) => a.category.localeCompare(b.category),
  },
  {
    title: 'Discount',
    dataIndex: 'discount',
    sorter: (a: Product, b: Product) => a.discountPercentage - b.discountPercentage,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (_: any, data: Product) => <RenderCompareButton {...data} />,
  },
];

const RenderCompareButton = (data: any) => {
  const list = useSelector((state: RootState) => state.compare.compareList);
  const isExist = list.find((item: any) => item.id === data.id) ? true : false;
  const dispatch = useDispatch();

  const handleAdd = () => {
    const list: Product[] = store.getState().compare.compareList
    if (list?.length >= 4) {
      toast.error('You can compare only 4 products');
      return;
    }

    dispatch(addCompare(data));
    toast.success('Product added to comparison');

  }

  return (
    <Button type="primary"
      disabled={isExist}

      onClick={() => {
        console.log("Compare button clicked");
        console.log(data);
        handleAdd();
      }}
    >
      Compare
    </Button>
  );
}



