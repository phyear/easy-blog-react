import React, { Component } from 'react';
import {Card, Row, Col} from 'antd';
import CarouselOperate from '../../../components/carousloperate'
import { DeleteTwoTone,EditOutlined, PlusOutlined} from '@ant-design/icons';
import {listCarouseSetting,deleteCarouseSetting} from '../../../utils/api';
import {handlerUrl} from '../../../utils/urlutil';
import {MINIO_DOMAIN} from '../../../constant'

class CarouselSetiing extends Component {
    state = {
        data:[],
        visible:false,
        id:null
    }

    updateInfo = (id:number) => {
         this.setState({visible: !this.state.visible, id:id})
    }

    delete = (id:number,index:number) => {
        const _this = this;
        deleteCarouseSetting(id).then(res => {
            let list = this.state.data
            list.splice(index, 1)
            _this.setState({
                data: list
            })
        })
    }

    closeUpdateOperate = () => {
        this.setState({visible: !this.state.visible, id:null });
    }

    componentDidMount(){
        listCarouseSetting({}).then(res => {
            this.setState({
                data:res
            })
        })
    }
         
    render() {
        const {Meta} = Card;
        const datas = this.state.data;
        return (
            <div>
                {
                  this.state.visible ? 
                  <CarouselOperate visible = {this.state.visible} id={this.state.id} closeUpdateOperate = {this.closeUpdateOperate} />
                : <div></div>
                }
                <Row gutter={16}>
                  <Col xs = {{span: 24}} md ={{span: 6 }} key = {'start'}>
                    <Card>
                       <div style = {{textAlign:'center', fontSize:'40px'}}>
                        <PlusOutlined onClick = { () => this.updateInfo(null)} />
                       </div>
                    </Card>
                  </Col>  
                {
                 datas.map((data,index) => (
                   <Col xs = {{span: 24}} md ={{span: 6 }} key = {data.id}>
                        <Card
                        cover={
                        <img 
                            style = {{maxHeight:'200px'}}
                            alt="example"
                            src={handlerUrl(MINIO_DOMAIN,data.url)}
                        />
                        }
                        actions={[
                            <EditOutlined key="setting" onClick = { () => this.updateInfo(data.id)} />,
                            <DeleteTwoTone key="delete" onClick = { () => this.delete(data.id,index)} />,
                            ]}
                        >
                        <Meta
                        title={data.title}
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