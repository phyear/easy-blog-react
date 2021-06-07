import React, { Component } from 'react';
import { Table} from 'antd';
class ArticleList extends Component {
    state = {
        page:1,
        size:10
    }
    render() {
        const paginationProps = {
            showSizeChanger: true,
            showQuickJumper: false,
            showTotal: () => `共${1}条`,
            pageSize: this.state.size,
            current: this.state.page,
            total: 1000
          };
      
        const dataSource = [
            {
              id: '1',
              title: '胡彦斌',
              updateTime: '2019-12-11',
            },
          ];

          const columns = [
            {
              title: '标题',
              dataIndex: 'title',
              key: 'title',
            },
            {
              title: '更新时间',
              dataIndex: 'updateTime',
              key: 'updateTime',
            },
          ];
          
        return (
            <div style={{padding:'20px'}}>
                <Table dataSource = {dataSource} columns = {columns} pagination = {paginationProps} />
            </div>
        );
    }
}

export default ArticleList;