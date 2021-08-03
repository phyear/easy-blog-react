import React, { Component } from 'react';
import {Button, Drawer,Form,Input, Switch, message} from 'antd';
import Avatar from '../../components/avatar'
import './index.css'
import {queryCarouseSettingById, updateCarouseSetting} from '../../utils/api';
import { FormInstance } from 'antd/lib/form';
import {MINIO_DOMAIN} from '../../constant'

interface  CarouselOperateProp{
    visible: boolean;
    id?: number,
    closeUpdateOperate: any
}

class CarouselOperate extends Component<CarouselOperateProp> {
    formRef = React.createRef<FormInstance>();

    updateImage = (url:string) => {
        this.formRef.current!.setFieldsValue({url:url})
    }
    
    componentDidMount(){
        const _this = this;
        const id = _this.props.id;
        if(id != null){
            queryCarouseSettingById(id)
            .then((res) => {
                _this.formRef.current.setFieldsValue(res);
            })
        }
    }

    save = () => { 
      const value =  this.formRef.current!.getFieldsValue();
      message.loading('正在保存...',0.7)
      .then(res => {
        updateCarouseSetting(value).then(() => {
            message.success('保存成功')
            window.location.reload();
            this.props.closeUpdateOperate();
          }).catch(err => {
            message.warning('保存失败') 
          })
      })
    }

    render() {
        const title = (this.props.id == null ? '创建' : '修改') + '轮播图设置'
        return (
            <div>
                <Drawer
                    width = {'30%'}
                    title= {title}
                    placement="right"
                    visible={this.props.visible}
                    onClose = {this.props.closeUpdateOperate}
                >
                    <Form name="updateCarousel" ref = {this.formRef}>
                        <Form.Item label="标题" name="title">
                            <Input />
                        </Form.Item>
                        <Form.Item label="编号" name="id" style = {{display:'none'}}>
                        <Input  />
                        </Form.Item>
                        <Form.Item label="是否启用" name="enable" valuePropName="checked">
                         <Switch />
                        </Form.Item>
                        <Form.Item  name="url">
                            <Avatar 
                                action = {'/api/v1/upload'}
                                updateImg = {this.updateImage}
                                isCircle = {false}
                                isDomain = {true}
                                domain = {MINIO_DOMAIN}
                                width= {'200px'}
                                />
                        </Form.Item>

                        <Form.Item >
                            <Button type = "primary" onClick = {this.save}>修改</Button>
                        </Form.Item>
                    </Form>
                </Drawer>
            </div>
        );
    }
}

export default CarouselOperate;