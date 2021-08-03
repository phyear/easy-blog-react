import React from 'react';
import { Menu, Dropdown, Avatar, Col, Row,Badge, Button, Space,  Image} from 'antd';
import {Link} from 'react-router-dom'

import {LogoutOutlined,BellOutlined} from '@ant-design/icons'

import {querySetting} from '../../utils/api'
import {handlerUrl} from '../../utils/urlutil'
import {get} from '../../utils/storageUtil'
import {MINIO_DOMAIN} from '../../constant'


type navbarProps = {
    isManager: boolean
}
class NavBar extends React.Component<navbarProps>{
    state = {
        siteName:'',
        logo:'',
        current:'article',
        user: null
    }

    selectMenu = e => {
        this.setState({ current: e.key });
      };

    componentDidMount(){
        const _this = this;
        querySetting().then(res => {
            _this.setState(res)
        })
       const user =  get('user');
       if(user != null){
         _this.setState({user:user})
       }
    }

    render(){
        const menu = (
            <Menu>
              <Menu.Item icon={<LogoutOutlined />}>
                 退出
              </Menu.Item>
            </Menu>
          );

          const navbarMenu = 
            ( 
                <Menu mode="horizontal" onClick = {this.selectMenu} style = {{height:'64px', lineHeight:'64px',border:'none'}} selectedKeys = {[this.state.current]}>
                   <Menu.Item key = 'article' style = {{border:'none', boxShadow:'none'}}>
                       文章
                    </Menu.Item>    
                   <Menu.Item key = 'articletype' style = {{ border:'none', boxShadow:'none'}}>
                       分类
                    </Menu.Item>    
                </Menu>
               )
          
          const  logo = handlerUrl(MINIO_DOMAIN,this.state.logo);
          const isManager = this.props.isManager;
        return (
            <div style={{position:'fixed',top:'0px',width:'100%',background:'#fff',borderBottom: '1px solid #eee',zIndex:11,boxShadow:'0 2px 4px 0 rgb(15 19 88 / 12%)'}}>
            <Row justify="start" align="middle">
                <Col xs={24} md={3}>
                    <div style={{color:'black',height:'64px', lineHeight:'64px', textAlign:'center'}}>
                        <Link to= {isManager === true ? '/manager' : '/article'}>
                            {
                              ( <Image 
                                width="64px"
                                height="64px"
                                preview = {false}
                                src = {logo}/> )
                            }
                        </Link>
                </div> 
                </Col>
                <Col xs = {0} md= {18}>
                 {
                     isManager === true?  (<p></p>) : navbarMenu 
                 }
                 </Col>
                <Col xs = {0} md= {3} >
                    <Space size='middle'>
                     {
                        this.state.user != null ? (
                            <span style = {{display:'flex'}}>
                                <Badge size="default" count={100} overflowCount={99}>
                                 <Button type= 'text' icon= {<BellOutlined />} size="large"/>
                                </Badge>
                                <Dropdown overlay={menu} placement = "bottomCenter">
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="aa" />
                                </Dropdown>
                            </span>
                        ) : (
                         <span style = {{display:'flex'}} >
                            <Button type ="text" style = {{color:'#40a9ff'}}>登录</Button>
                            <Button type ="text" style = {{color:'#ffc53d'}}>注册</Button>
                         </span>
                        )
                     }
                    </Space>
                </Col>
            </Row>
        </div> 
        )
    }
}

export default NavBar;