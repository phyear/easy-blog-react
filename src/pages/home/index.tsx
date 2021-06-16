import React, { Component } from 'react';
import {Row, Col} from 'antd';
const buildElement = (name:string, components:any) => {
    const Compnent = components[name];
     return (
          <Compnent/>
     );
}

class Home extends Component {

    render() {
        const data = [
            {
                name:"AccessFlow",
                md:12,
                xs:24,
                components: require('../../components/charts') 
            },
            {
                name:"AccessFlow",
                md:12,
                xs:24,
                components: require('../../components/charts') 
            },
           {
                name:"AccessFlow",
                md:24,
                xs:24,
                components: require('../../components/charts') 
            }
        ]
        const style = {boxShadow:'0px 1px 4px 3px rgba(15,19,88,0.16)',padding:'10px'};

        return (
           <div style = {{padding:'20px'}}>
               <Row gutter={[{xs:16,md:18},{xs:16,md:18}]}>
                  {
                      data.map((item,index) => (
                          <Col md = {item.md} xs = {item.xs} key = {index} >
                             <div  style ={style} >
                                 {buildElement(item.name,item.components)}
                             </div>
                          </Col>
                      ))
                      }
               </Row>
           </div>
        );
    }
}

export default Home;