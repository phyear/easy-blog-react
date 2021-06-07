import React from 'react';
import { Menu, Dropdown, Avatar, Col, Row,Badge, Button, Space} from 'antd';
import {Link} from 'react-router-dom'

import {LogoutOutlined,BellOutlined} from '@ant-design/icons'

class NavBar extends React.Component{

    render(){
        const menu = (
            <Menu>
              <Menu.Item icon={<LogoutOutlined />}>
                 退出
              </Menu.Item>
            </Menu>
          );
        return (
            <div style={{position:'fixed',top:'0px',width:'100%',background:'#fff',borderBottom: '1px solid #eee',zIndex:11,boxShadow:'0 2px 4px 0 rgb(15 19 88 / 12%)'}}>
            <Row justify="center" align="middle">
                <Col xs={24} md={3}>
                    <div style={{color:'black',height:'64px', lineHeight:'64px', textAlign:'center'}}>
                        <Link to='/manager'>NO_CODE</Link>
                </div> 
                </Col>

                <Col xs = {0} md= {2} offset = {19}>
                    <Space size='large'>
                    <Badge size="default" count={100} overflowCount={99}>
                      <Button type= 'text' icon= {<BellOutlined />} size="large"/>
                    </Badge>
                    <Dropdown overlay={menu} placement = "bottomCenter">
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="aa" />
                    </Dropdown>
                    </Space>
                </Col>
            </Row>
        </div> 
        )
    }
}

export default NavBar;