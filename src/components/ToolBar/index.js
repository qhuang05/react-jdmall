import React, { Component } from 'react'
import SvgIcon from '@/components/SvgIcon';
import './index.scss'

export default class ToolBar extends Component {
    constructor(props){
        super(props);
    }
    gotoTop = () => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.pageYOffset = 0;
    }
    render() {
        return (
            <div className="tool-bar">
                <a onClick={ this.gotoTop }>
                    <SvgIcon iconClass="goTop" size="24px" />
                </a>
            </div>
        )
    }
}
