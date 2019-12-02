import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import classnames from 'classnames'
import SvgIcon from '@/components/SvgIcon'
import { SearchBar, WingBlank, Icon } from 'antd-mobile'
import './index.scss'
import {InjectUnmount} from '@/utils/injectUnmount.js'

@InjectUnmount
class JDSearchBar extends Component {
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
        // this.setState = (state, callback) => {
        //     return;
        // }
    }
    render() {
        let {isHistory} = this.props;
        let {keywords, curIndex} = this.state;
        return (
            <div className="search-bar" flag={this.props.flag}>
                <WingBlank>
                    <div className={classnames('flex', 'flex-y-center')}>
                        {isHistory ? 
                            <Link style={{'paddingRight': '10px'}} onClick={()=>window.history.back()}>
                                <Icon type="left" />
                            </Link> : <Link style={{'paddingRight': '10px'}} to="/category">
                                <SvgIcon iconClass="menu" size="18px" />
                            </Link>}
                        <SearchBar 
                            className="flex-1" 
                            placeholder={keywords[curIndex]}
                        />
                        <div style={{'paddingLeft': '10px'}}>
                            <Link to="/login">登录</Link>
                        </div>
                    </div>
                </WingBlank>
            </div>
        )
    }
}

export default JDSearchBar