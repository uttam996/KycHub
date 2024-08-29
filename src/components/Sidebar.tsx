import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';
import { LaptopOutlined, UserOutlined } from '@ant-design/icons';



const items2 = [{
  key: '1',
  icon: <UserOutlined />,
  label: 'Products',
  path:"/"
},{
  key: '2',
  icon: <LaptopOutlined />,
  label: 'Compare',
  path:"/compare"
}];
const Sidebar: React.FC = () => {
 const location = useLocation();

 

  return (
    <Sider style={{ background: "red" }} width={200}>
      <Menu
        mode="inline"
        selectedKeys={[
          items2.find((item) => item.path === location.pathname)?.key || '1',
        ]}
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {items2.map((item) => (
          <Menu.Item key={item.key}
          
          icon={item.icon}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}
  

 


export default Sidebar;
