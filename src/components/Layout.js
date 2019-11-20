import React, { Component, Fragment } from 'react'
import TabBar from './TabBar';

class Layout extends Component {
    constructor(props){
        super(props);
    }
    render () {
        let {children, isShowTab=true} = this.props;
        let _children = [];
        if(children.$$typeof){ //不具名插槽
            _children.push(children);
        } else{ //具名插槽
            _children = Object.values(children);
        }
        return (
            <div style={{'paddingBottom': isShowTab ? '66px' : ''}}>
                {_children.map((item,index)=>(<Fragment key={item+index}>{item}</Fragment>))}
                {isShowTab && <TabBar />}
            </div>
        )
    }
}

export default Layout