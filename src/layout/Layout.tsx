import React from 'react'
import { RouteConfig } from 'src/shared/models/routeModels';
// import {Link }  from 'react-router-dom'
import { Layout  as LayoutType} from 'antd';
import { ReactElement } from 'react';


const Cont=React.lazy(()=>import('./content/Content'))
const Head = React.lazy(() => import('./header/Header'))
const Foot = React.lazy(() => import('./footer/Footer'))

const { Header, Footer, Content } = LayoutType;

const Layout = ({ children }: RouteConfig): ReactElement => {
  return (
    <LayoutType>
      <Header style={{backgroundColor: 'white'}}>
        <Head /></Header>
      <Content style={{height: '70vh',  display: 'flex', justifyContent: 'center'}}> <Cont/></Content>
      <Footer style={{backgroundColor: 'white' }}><Foot/></Footer>
    </LayoutType>
  );
};

export default Layout;
