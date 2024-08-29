import React from 'react';
import { Layout, theme } from 'antd';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CompareProductsPage from './pages/ComparePage';

const { Header, Content, Footer, } = Layout;



const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />

      </Header>
      <Content style={{ padding: '0 2px' }}>
        <Layout style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}>
          <Sidebar />
          <Content style={{ padding: '0 24px', minHeight: "80vh" }}>
            <Routes>

              <Route path="/"
                element={<HomePage />}
              />
              <Route path="/compare"
                element={<CompareProductsPage />}
              />
            </Routes>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;