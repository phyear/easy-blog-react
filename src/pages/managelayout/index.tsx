import React from 'react';
import { Row, Col } from 'antd';
import SiderBar from '../../components/siderbar/index';
import NavBar from '../../components/navbar/index';
import {Route} from 'react-router-dom';
import {UserSetting,Home, ArticlePage, ArticleList,SiteManagerPage} from '../../pages'



const ManagerLayout:React.FC = () => (
    <Row>
         <Col xs = {24} md = {24}>
            <NavBar isManager = {true}/>
        </Col>
        <Col md ={24} style= {{marginTop:'64px'}}>
            <Row>
               <Col xs = {0} md= {3}>
                 <SiderBar/>
               </Col>  
               <Col  xs = {24} md = {21} >
                    <Route exact path="/manager/userSetting" component = {UserSetting} ></Route> 
                    <Route exact path="/manager/home" component = {Home} ></Route>   
                    <Route exact path="/manager/article" component = {ArticlePage} ></Route>  
                    <Route exact path="/manager/article/operate" component = {ArticleList} ></Route> 
                    <Route exact path="/manager/site" component = {SiteManagerPage} ></Route>
               </Col>
            </Row>   
        </Col>
    </Row>
  )

export default ManagerLayout;  