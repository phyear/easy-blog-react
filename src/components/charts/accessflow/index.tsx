import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';

class AccessFlow extends Component {
    render() {
        const option = {
            title: {
                text: '每日访问量走势图'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['点赞数', '阅读数']
            },
            dataset:{
                source:[
                    ['2021-06-11',54,13],
                    ['2021-06-12',52,13],
                    ['2021-06-13',5,14],
                    ['2021-06-14',34,25],
                    ['2021-06-16',34,25],
                    ['2021-06-17',34,25],
                    ['2021-06-19',34,25],
                ]
            },
            xAxis: {
                type: 'category',
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name:'点赞数',
                type: 'line',
            },{
                name:'阅读数',
                type: 'line',
            }]
        };

        return (
            <div>
                <ReactEcharts
                  option = {option}
                />
            </div>
        )
    }
}

export default  AccessFlow;
