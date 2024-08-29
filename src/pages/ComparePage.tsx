import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Product } from '../ApiHooks/useGetProduct';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { removeCompare } from '../store/CompareSlice';
import { toast } from 'react-toastify';
import ProductListModal from '../components/Modal/ProductListModal';

const CompareProductsPage: React.FC = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const compareList:Product [] = useSelector((state: RootState) => state.compare.compareList);
  const dispatch = useDispatch();


  const handleremove = (product: Product) => {
    dispatch(removeCompare(product));
    toast.success('Product removed from comparison');
  };

  return (
    <div className="comparison-container">
  <h1>Product Comparison</h1>
  <table className="comparison-table">
    <thead>
      <tr>
        <th>Attributes</th>
        {compareList.map((product: Product) => (
          <th 
          
          key={product.id}>{product.title}</th>
        ))}
        {compareList.length !== 4 && (
          <th >
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setModalOpen(true)}
            >
              Add more products
            </Button>
          </th>
        )}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{color:"red",fontWeight:600}}>Brand</td>
        {compareList.map((product: Product) => (
          <td key={`brand-${product.id}`}>{product.brand}</td>
        ))}
        {compareList.length !== 4 && <td></td>}
      </tr>
      <tr>
        <td style={{color:"red",fontWeight:600}}>Price</td>
        {compareList.map((product: Product) => (
          <td key={`price-${product.id}`}>{product.price}</td>
        ))}
        {compareList.length !== 4 && <td></td>}
      </tr>
      <tr>
        <td style={{color:"red",fontWeight:600}}>Category</td>
        {compareList.map((product: Product) => (
          <td  key={`category-${product.id}`}>{product.category}</td>
        ))}
        {compareList.length !== 4 && <td></td>}
      </tr>
      <tr>
        <td style={{color:"red",fontWeight:600}}>Discount</td>
        {compareList.map((product: Product) => (
          <td key={`discount-${product.id}`}>{product.discountPercentage}</td>
        ))}
        {compareList.length !== 4 && <td></td>}
      </tr>
      <tr>
        <td>Remove</td>
        {compareList.map((product: Product) => (
          <td key={`remove-${product.id}`}>
            <Button
              type="primary"
              danger
              onClick={() => handleremove(product)}
            >
              Remove
            </Button>
          </td>
        ))}
        {compareList.length !== 4 && <td></td>}
      </tr>
    </tbody>
  </table>
  <ProductListModal
    open={modalOpen}
    close={() => setModalOpen(false)} 
  
  />
</div>

  );
};

export default CompareProductsPage;
