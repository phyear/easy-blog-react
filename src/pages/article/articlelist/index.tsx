import React, { Component } from 'react';
import { Table,Space, message} from 'antd';
import { pageArticle,deleteArtcle} from '../../../utils/api' 
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { RouteComponentProps } from 'react-router-dom';

class ArticleList extends Component<RouteComponentProps> {
    state = {
        page:1,
        size:10,
        datas:[],
        total: 0
    }
    
    componentDidMount(){
      this.getDatas(this.state.page, this.state.size, {});
    }
    
    getDatas = (page:number, size:number, params) => {
      var urlParams = "?page=" +page +"&size="+size;
      const _this = this;
      pageArticle(urlParams,params).then(res => {
        _this.setState({
          page:res.pageNum,
          size:res.pageSize,
          datas: res.list,
          total: res.total
        });
      })
    }
    
    delete = (id:number) => {
      deleteArtcle(id).then(res => {
        message.success("删除成功");
        window.location.reload();
      }).catch(err => {
        message.error("删除失败")
      })
    }
    
    update = (id:number) => {
      this.props.history.push({
        pathname:"/manager/article",
        state:{id:id}
      })
    }

    render() {
        const paginationProps = {
            showSizeChanger: true,
            showQuickJumper: false,
            showTotal: () => `共${this.state.total}条`,
            pageSize: this.state.size,
            current: this.state.page,
            total: this.state.total
          };
      
        const dataSource = this.state.datas;

          const columns = [
            {
              title: '编号',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: '标题',
              dataIndex: 'title',
              key: 'title',
            },
            {
              title: '更新时间',
              dataIndex: 'lastUpdateDate',
              key: 'lastUpdateDate',
            },
            {
              title: '操作',
              key: 'action',
              render: (text, record) => (
                <Space size="middle">
                  <EditOutlined style ={{color:'#1890ff'}}  onClick = {()=> this.update(record.id)} />
                  <DeleteOutlined style ={{color:'red'}} onClick = {()=> this.delete(record.id)} />
                </Space>
              ),
            }
          ];
          
        return (
            <div style={{padding:'20px'}}>
                <Table dataSource = {dataSource} columns = {columns} pagination = {paginationProps} rowKey = {re => re.id} />
            </div>
        );
    }
}

export default ArticleList;