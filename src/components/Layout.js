import React, { Component } from 'react'
import TabBar from './TabBar'

class Layout extends Component {
    constructor(props){
        super(props);
    }
    render () {
        let {children} = this.props;
        return (
            <div>
                {children}
                <TabBar />
            </div>
        )
    }
}

export default Layout