import React, { Component } from 'react';
import MyCKEdit from '../../../components/myckedit'
import {Form, Input, Button, message} from 'antd';
import { FormInstance } from 'antd/lib/form';
import {editeArticle,queryArtcleById} from '../../../utils/api'
import { RouteComponentProps  } from 'react-router-dom';
interface locationState {
    id:string
}
class ArticlePage extends Component<RouteComponentProps<{},{},locationState>> {
    formRef = React.createRef<FormInstance>();

    changeValue = (content:string) => {
        this.formRef.current!.setFieldsValue({content:content})
    }

    save = () =>{
        const value = this.formRef.current!.getFieldsValue();
        editeArticle(value).then( res => {
            message.success("保存成功")
            this.props.history.push({
                pathname:"/manager/article/operate"})
        }).catch(err => {
            message.success("保存失败")
        })
    }

    componentDidMount(){
        const {id} = this.props.location.state;
        if(id != null){
            const _this = this;
            queryArtcleById(id).then(res => {
                _this.formRef.current!.setFieldsValue(res);
            });
        }
    }

    render() {
        return (
            <div style = {{padding:'20px'}}>
                 <Form name="basic" ref = {this.formRef}>
                     <Form.Item name="id" style = {{display: 'none'}}>
                         <Input />
                     </Form.Item> 
                     <Form.Item label="标题" style={{ marginBottom: 0 }}>
                        <Form.Item name="title" style = {{display: 'inline-block'}}>
                         <Input />
                        </Form.Item> 
                        <Form.Item style = {{display: 'inline-block'}}>
                        <Button type="primary" htmlType="submit" onClick = {this.save}>保存</Button>
                        </Form.Item> 
                     </Form.Item>
                    <Form.Item  name="content" >
                        <MyCKEdit onChangeValue = {this.changeValue} />
                    </Form.Item>
                 </Form>
            </div>
        );
    }
}

export default ArticlePage;