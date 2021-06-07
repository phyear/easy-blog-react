import React, { Component } from 'react';
import { Tabs } from 'antd';
import CarouselSetiing from './carouselsetting'
import SiteSetting from './sitesetting'

const {TabPane} = Tabs;
class SiteManagerPage extends Component {
    render() {
        return (
            <div style = {{padding:'20px'}}>
                <Tabs defaultActiveKey="1" >
                <TabPane tab="站点信息" key="1">
                    <SiteSetting/>
                </TabPane>
                <TabPane tab="轮播图管理" key="2">
                    <CarouselSetiing/>
                </TabPane>
            </Tabs>
            </div>
        );
    }
}

export default SiteManagerPage;