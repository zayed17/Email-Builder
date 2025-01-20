import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Editor from '../components/Editor';
import Toolbar from '../components/Toolbar';
import Header from '../components/Header';

const { Header: AntHeader, Content, Sider } = Layout;

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <Layout className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <AntHeader className="bg-blue-500 px-4">
        <Header />
      </AntHeader>

      <Layout>
        {/* Sidebar Section */}
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={toggleSidebar}
          trigger={null}
          width={300} // Sidebar width
          className={`bg-gray-200 shadow-md transition-all duration-300 ${
            collapsed ? 'w-16' : 'w-72'
          }`}
        >
          <div
            className={`p-4 border-b border-gray-300 ${
              collapsed ? 'text-center' : 'text-left'
            }`}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={toggleSidebar}
            />
          </div>
          <Toolbar />
        </Sider>

        {/* Main Content Section */}
        <Layout className="p-4">
          <Content
            className="p-6 bg-white rounded-lg shadow-lg overflow-auto h-[calc(100vh-64px)]"
          >
            {/* Editor Section */}
            <Editor />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
