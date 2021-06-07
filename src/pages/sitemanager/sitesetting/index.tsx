import React, { Component } from 'react';
import { Form, Input,Button} from 'antd';
import Avatar from '../../../components/avatar';
import {querySetting} from '../../../utils/api'

const {TextArea } = Input;
class SiteSetting extends Component {
    state = {
        siteSetting:{}
    }
    updateImage = () => {

    }
    
    componentDidMount(){
        const that = this;
        querySetting().then((res) => {
            that.setState({
                siteSetting: res,
            })
        })
    }

    render() {
        const initDate = this.state.siteSetting;
        console.log(initDate);
        return (
            <div>
              <Form name="basic"  initialValues = {initDate}>
                    <Form.Item  name="imgUrl">
                        <Avatar imgUrl = {'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'} updateImg = {this.updateImage}/>
                    </Form.Item>
                    <Form.Item label="网站名称" name="siteName">
                        <Input />
                    </Form.Item>
                    <Form.Item label="描述" name="desc">
                        <TextArea />
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    </Form.Item>
                </Form>  
            </div>
        );
    }
}

export default SiteSetting;