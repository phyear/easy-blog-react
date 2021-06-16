import React, { Component } from 'react'
import { Row, Col } from 'antd';
import NavBar from '../../components/navbar/index';
import {Route} from 'react-router-dom';
import {ArticleView} from '../../pages'

class FrontLayout extends Component {
    render() {
        return (
            <Row>
               <Col xs = {24} md = {24}>
                   <NavBar isManager= {false}/>
               </Col>
               <Col  xs = {24} md = {24} style = {{marginTop:"64px"}}>
                 <Row justify = 'center'>
                    <Col xs = {24} md = {14}>
                        <Route exact path="/article" component = {ArticleView} ></Route>
                    </Col>

                    <Col xs = {0} md = {6}>

                    </Col>
                 </Row>
               </Col>
            </Row>
        )
    }
}
export default FrontLayout;
