import React, { Component, Fragment } from 'react'
import BottomMenu from '@/components/BottomMenu'

const menu = [{
    title: '首页',
    icon: '',
    path: '/'
},{
    title: '分类',
    icon: '',
    path: '/category'
},{
    title: '我的',
    icon: '',
    path: '/user'
}]
class Layout extends Component {
    constructor(props){
        super(props);
    }
    render () {
        let {children, isShowBottom=true} = this.props;
        let _children = [];
        if(children.$$typeof){ 
            //不具名插槽
            _children.push(children);
        } else{ 
            //具名插槽
            _children = Object.values(children);
        }
        return (
            <div>
                {_children.map((item,i)=>(<Fragment key={item+i}>{item}</Fragment>))}
                {isShowBottom && <BottomMenu />}
                {/* {isShowBottom && <BottomMenu2 menu={menu} />} */}
            </div>
        )
    }
}

export default Layout