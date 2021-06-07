import React, { Component } from 'react';
import { Form, Input, Row, Col, Button} from 'antd';
import Avatar from '../../components/avatar'
import { FormInstance } from 'antd/lib/form';
import { LoadingOutlined,FormOutlined,RedoOutlined} from '@ant-design/icons';
import './index.css'

class UserSetting extends Component {
    formRef = React.createRef<FormInstance>();
    
    state = {
       imgUrl:'',
       userName:'',
       saveStatus:false
    }
    
    save = () => {
        this.setState({saveStatus:true});
         console.log(this.formRef.current?.getFieldsValue(['userName']))
    }
    updateImage = (url:string) => {
        console.log(url);
        this.setState({imgUrl:url});
    }

    render() {
        return (
           <Row > 
              <Col xs= {24} style = {{padding:'10px', borderBottom:'1px solid #eee'}}>
                <Button type="text" 
                    icon = { this.state.saveStatus ? <LoadingOutlined/> : <FormOutlined />}
                    onClick = {this.save}
                    >
                 Save
                </Button>
                <Button type="text" icon = { <RedoOutlined />}>
                 cancel
                </Button>
              </Col>
              <Col style={{padding:'20px'}} xs= {24} md= {14}>
                <Form name="basic" ref = {this.formRef}>
                    <Form.Item  name="imgUrl">
                        <Avatar imgUrl = {'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'} updateImg = {this.updateImage}/>
                    </Form.Item>
                    <Form.Item label="用户名" name="userName">
                        <Input />
                    </Form.Item>
                </Form>
              </Col>
           </Row>
        );
    }
}

export default UserSetting;