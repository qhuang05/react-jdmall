import React, { Component } from 'react'
import {Icon, Menu} from 'antd-mobile'

const initData = [
    {
        value: '1',
        label: 'Food',
    }, {
        value: '2',
        label: 'Supermarket',
    },
    {
        value: '3',
        label: 'Extra',
        isLeaf: true,
    },
];
export default class SelectFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
    }
    render() {
        const menuEl = (
            <Menu
            className="single-multi-foo-menu"
            data={initData}
            value={['1']}
            level={1}
        //   onChange={this.onChange}
        //   onOk={this.onOk}
        //   onCancel={this.onCancel}
            height={document.documentElement.clientHeight * 0.6}
            multiSelect
        />
        );
        let {isShow} = this.state;
        return (
            <>

                <a onClick={this.handleClick} style={{padding: '20px', display:'inline-block'}}>综合</a>
                    {this.state.show ? menuEl : null}
                <div>
                    综合
                    {isShow ? <Icon type="down" /> : <Icon type="up" />}
                    {isShow ? menuEl : null}
                </div>
            </>
        )
    }
}
