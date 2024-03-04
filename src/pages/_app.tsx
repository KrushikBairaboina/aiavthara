import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import type { AppProps } from 'next/app';
import Top from "@/pages/components/home/top";
import theme from './theme/themeConfig';
import Sidebar from "@/pages/components/home/sidebar";

const { Header, Content, Sider } = Layout;

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={theme}>
    <Layout>
      <Header style={{ backgroundColor: "white" }}>
        <Top theme={"light"} />
      </Header>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={240} style={{ backgroundColor: "white" }}>
          <Sidebar />
        </Sider>
        <Layout>
          <Content>
            <Component {...pageProps} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </ConfigProvider>
);

export default App;
