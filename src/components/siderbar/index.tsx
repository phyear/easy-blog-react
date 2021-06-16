import React from 'react';
import {Menu} from 'antd';
import {UserOutlined,SettingOutlined,InsertRowBelowOutlined,HomeOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

const {SubMenu}  = Menu;

class SiderBar extends React.Component{
    state = {
        collapsed: false,
      };

     toggleSiderBar = () => {
         console.log(this.state.collapsed)
        this.setState({
            collapsed: !this.state.collapsed,
          });
     };

     handlerSelect = (e:any) => {

     }

    render(){
        return (
            <Scrollbars 
            style = {{height:'600px'}}
            >
            <Menu 
                mode = 'inline'
                inlineCollapsed={this.state.collapsed}
                onClick = {this.handlerSelect}
                style = {{height:'600px'}}
                >
                <Menu.Item icon={<HomeOutlined/>} key="/home"><Link to="/manager/home">首页</Link></Menu.Item>
                <Menu.Item icon={<UserOutlined/>} key="/userSetting"><Link to="/manager/userSetting">个人设置</Link></Menu.Item>
                <SubMenu key="/article" icon={<InsertRowBelowOutlined />} title = {'文章管理'}>
                 <Menu.Item icon={<InsertRowBelowOutlined />}  key="/article/operate"><Link to = {{pathname:"/manager/article/operate"}}>文章列表</Link></Menu.Item>
                 <Menu.Item icon={<InsertRowBelowOutlined />}  key="/article/update"><Link to={{pathname:"/manager/article", state:{id:null}}}>创作文章</Link></Menu.Item>
                </SubMenu>
                
                <Menu.Item icon={<SettingOutlined/>}><Link to="/manager/site">站点管理</Link></Menu.Item>
            </Menu>  
            </Scrollbars>
        )
    }
}

export default SiderBar;