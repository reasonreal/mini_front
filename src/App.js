import React from 'react';
import { Layout, Typography, Breadcrumb, Menu, Row, Col } from 'antd';
import './App.css';
import Iframe from 'react-iframe'

const { Title } = Typography;
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className="App">
    <Layout>
      <Header style = {{padding:5, margin:10}}>
        <Title style={{color:'white', float:'left'}} level={3}> DashBoard-AnimalNews</Title>
        </Header>
          <Layout>

          <Sider style={{background: 'lightgray'}}>
            <Menu defaultSelectedKeys={['Dashboard']} mode="inline">
              <Menu.Item key = 'Dashboard'>DashBoard</Menu.Item>
                <SubMenu key = "sub1" title={<span> category </span> }> 
                  <Menu.ItemGroup key='category' title='hospital'>
                    <Menu.Item key='dog'> Option1 </Menu.Item>
                    <Menu.Item key='cat' > Option2 </Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
            </Menu>
          </Sider>
            
            <Layout>
            <Content style = {{padding: '0 50px'}}> 
                <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
              <div style={{background: '#fff', padding:24, minHeight:280}}>컨텐츠 내용</div>
              
              </Content>
              
              <Footer> Footer </Footer>
            </Layout>
          </Layout>
    </Layout>
    </div>
  );
}

export default App;
