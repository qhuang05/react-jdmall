import React, { Component } from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';
import SvgIcon from '../SvgIcon';
import { SearchBar, WingBlank } from 'antd-mobile';

export default class JDSearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            keywords: ['怡宝矿泉水', '双11热卖', '热水壶'],
            curIndex: 0
        }
    }
    componentDidMount(){
        this.sTimer = setInterval(()=>{
            let _curIndex = this.state.curIndex;
            _curIndex = _curIndex>=this.state.keywords.length-1 ? 0 : _curIndex++;
            this.setState((nextState, props)=>({curIndex: _curIndex}));
        }, 3000);
    }
    componentWillMount(){
        clearInterval(this.sTimer);
    }
    render() {
        let {keywords, curIndex} = this.state;
        return (
            <>
                <WingBlank>
                    <div className={classnames('flex', 'flex-y-center', styles['search-bar'])}>
                        <div style={{'paddingRight': '10px'}}>
                            <SvgIcon iconClass="menu" size="18px" />
                        </div>
                        <SearchBar 
                            className="flex-1" 
                            placeholder={keywords[curIndex]}
                        />
                        <div style={{'paddingLeft': '10px'}}>
                            <a>登录</a>
                        </div>
                    </div>
                </WingBlank>
            </>
        )
    }
}
