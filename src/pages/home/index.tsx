import React, { Component } from 'react';
import {Row, Col} from 'antd';
const buildElement = (name:string, components:any) => {
    const Compnent = components[name];
     return (
          <Compnent fullscreen={false} />
     );
}

class Home extends Component {

    render() {
        const data = [
            {
                name:"Calendar",
                md:16,
                xs:24,
                components: require('antd')
            }
        ]
        return (
           <div style = {{padding:'20px'}}>
               <Row>
                  {
                      data.map(item => (
                          <Col md = {item.md} xs = {item.xs}>
                            {buildElement(item.name,item.components)}
                          </Col>
                      ))
                      }
               </Row>
           </div>
        );
    }
}

export default Home;