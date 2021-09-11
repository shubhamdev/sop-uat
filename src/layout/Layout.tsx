import React from 'react'
import { RouteConfig } from 'src/shared/models/routeModels';
import { Layout  as LayoutType} from 'antd';
import { ReactElement } from 'react';
const Head = React.lazy(() => import('./header/Header'))
const Foot = React.lazy(() => import('./footer/Footer'))

const { Header, Footer, Content } = LayoutType;

const Layout = ({ children }: RouteConfig): ReactElement => {
  return (
    <LayoutType>
      <Header style={{backgroundColor: 'white'}}><Head /></Header>
      <Content style={{height: '80vh',  display: 'flex', justifyContent: 'center'}}> {children}</Content>
      <Footer style={{backgroundColor: 'grey'}}><Foot/></Footer>
    </LayoutType>
  );
};

export default Layout;
