import React, { Component } from 'react';
import { Form, Input,Button, message} from 'antd';
import Avatar from '../../../components/avatar';
import {querySetting, updateSetting} from '../../../utils/api';
import { FormInstance } from 'antd/lib/form';
import {MINIO_DOMAIN} from '../../../constant'


const {TextArea } = Input;
class SiteSetting extends Component {
    formRef = React.createRef<FormInstance>();

    updateImage = (logo:string) => {
        this.formRef.current!.setFieldsValue({logo:logo})
    }
    
    componentDidMount(){
        const _this = this;
        querySetting().then((res) => {
            _this.formRef.current!.setFieldsValue(res);
        })
    }

    save = () => {
      const value =  this.formRef.current!.getFieldsValue();
      message.loading('正在保存...',0.7)
      .then(res => {
        updateSetting(value).then(() => {
            message.success('保存成功')
            window.location.reload()
          }).catch(err => {
            message.warning('保存失败') 
          })
      })
      
    }

    render() {
        return (
            <div>
              <Form name="basic" ref = {this.formRef}>
                    <Form.Item  name="logo">
                        <Avatar 
                         action = {'/api/v1/upload'}
                         updateImg = {this.updateImage}
                         isDomain = {true}
                         domain = {MINIO_DOMAIN}
                         />
                    </Form.Item>
                    <Form.Item label="编号" name="id" style = {{display:'none'}}>
                        <Input  />
                    </Form.Item>
                    <Form.Item label="网站名称" name="siteName">
                        <Input  />
                    </Form.Item>
                    <Form.Item label="描述" name="introduction">
                        <TextArea />
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary" htmlType="submit" onClick = {this.save}>
                        修改
                    </Button>
                    </Form.Item>
                </Form>  
            </div>
        );
    }
}

export default SiteSetting;