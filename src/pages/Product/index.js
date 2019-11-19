import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Request from '../../utils/request';
import { Tabs, WhiteSpace } from 'antd-mobile';
import Content1 from './index1.js'
import Content2 from './index2.js'
import Content3 from './index3.js'

class ProductListPage extends Component {
    constructor(props) {
        super(props);
    }
    renderContent = (tab, index) =>{
        console.log(index);
        return (
            <Content2 />
        )
    } 
    render() {
        const tabs = [
            { title: '1st Tab', index: 1},
            { title: '2nd Tab', index: 2},
            { title: '3rd Tab', index: 3 }
        ];

        return (
            <div>
                <Tabs tabs={tabs} tabBarPosition='top'>
                    {this.renderContent}
                </Tabs>
            </div>
        );
    }
}

export default ProductListPage;