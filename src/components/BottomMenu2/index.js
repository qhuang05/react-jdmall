import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
import { WingBlank } from 'antd-mobile'

export default class MenuBar extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        let {menu} = this.props;
        let {pathname} = window.location;
        return (
            <div className="menu-bar">
                <div className="flex flex-x-full">
                    {
                        menu.map((item, i) => {
                            return (
                                <Link to={item.path} key={i} className={item.path==pathname ? 'active' : ''}>
                                    <div className="menu-item">{item.title}</div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
