import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile'
import SvgIcon from '../SvgIcon'

export default class JDSearchBar extends Component {
    render() {
        return (
            <>
                <div className="search-bar flex flex-y-center">
                    <SvgIcon iconClass="menu" />
                    <SearchBar style={{width:'100%', flex:1}} />
                    <span style={{'padding': '0 10px'}}>登录</span>
                </div>
            </>
        )
    }
}
