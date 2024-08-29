import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const Navbar: React.FC = () => (
  <Header style={{ position: 'fixed', width: '100%', zIndex: 1 }}>
    <div className="logo" style={{color:"white"}} >MyApp</div>
  </Header>
);

export default Navbar;
