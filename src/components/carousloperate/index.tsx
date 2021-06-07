import React, { Component } from 'react';
import {Drawer,Form,Input} from 'antd';
import Avatar from '../../components/avatar'
import './index.css'
interface  CarouselOperateProp{
    visible: boolean;
    id?: number,
    closeUpdateOperate: any
}

class CarouselOperate extends Component<CarouselOperateProp> {
    updateImage = () => {

    }
    render() {
        const title = (this.props.id ? '创建' : '修改') + '轮播图设置'
        return (
            <div>
                <Drawer
                    width = {'30%'}
                    title= {title}
                    placement="right"
                    visible={this.props.visible}
                    onClose = {this.props.closeUpdateOperate}
                >
                    <Form name="basic" >
                        <Form.Item label="标题" name="title">
                            <Input />
                        </Form.Item>

                        <Form.Item  name="imgUrl">
                            <Avatar 
                                imgUrl = {'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'} 
                                updateImg = {this.updateImage}
                                isCircle = {false}
                                width= {'200px'}
                                />
                        </Form.Item>
                    </Form>
                </Drawer>
            </div>
        );
    }
}

export default CarouselOperate;