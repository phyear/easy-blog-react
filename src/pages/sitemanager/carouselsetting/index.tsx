import React, { Component } from 'react';
import {Card, Row, Col} from 'antd';
import CarouselOperate from '../../../components/carousloperate'
import { SettingOutlined,EditOutlined,EllipsisOutlined} from '@ant-design/icons';

class CarouselSetiing extends Component {
    state = {
        data:[
            {
             id:1,
             titile:'Carousel走马灯',
             imgUrl:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
          },
          {
            id:2,
            titile:'Carousel走马灯',
            imgUrl:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
         }, {
            id:3,
            titile:'Carousel走马灯',
            imgUrl:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
         }, {
            id:4,
            titile:'Carousel走马灯',
            imgUrl:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
         }, {
            id:5,
            titile:'Carousel走马灯',
            imgUrl:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
         }, {
            id:6,
            titile:'Carousel走马灯',
            imgUrl:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
         },{
            id:7,
            titile:'Carousel走马灯',
            imgUrl:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
         }
        ],
        visible:false,
        id:1
    }

    updateInfo = (id:number) => {
         this.setState({visible: !this.state.visible})
    }

    closeUpdateOperate = () => {
        this.setState({visible: !this.state.visible, id:null });
    }
         
    render() {
        const {Meta} = Card;
        const datas = this.state.data;
        return (
            <div>
                <CarouselOperate visible = {this.state.visible} id={this.state.id} closeUpdateOperate = {this.closeUpdateOperate} />
                <Row gutter={16}>
                {
                 datas.map(data => (
                   <Col xs = {{span: 24}} md ={{span: 4 }} key = {data.id}>
                        <Card
                        cover={
                        <img
                            alt="example"
                            src={data.imgUrl}
                        />
                        }
                        actions={[
                            <SettingOutlined key="setting" onClick = { () => this.updateInfo(data.id)} />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                            ]}
                        >
                        <Meta
                        title={data.titile}
                        />
                    </Card>
                   </Col>
                 ))
               }
                </Row>
                
            </div>
        );
    }
}

export default CarouselSetiing;