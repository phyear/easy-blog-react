import React, { Component } from 'react';
import MyCKEdit from '../../../components/myckedit'
import {Form, Input} from 'antd';

class ArticlePage extends Component {
    render() {
        return (
            <div style = {{padding:'20px'}}>
                 <Form name="basic">
                     <Form.Item label="标题" name="title">
                        <Input />
                     </Form.Item>
                    <Form.Item  name="userName">
                        <MyCKEdit/>
                    </Form.Item>
                 </Form>
            </div>
        );
    }
}

export default ArticlePage;