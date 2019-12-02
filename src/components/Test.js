import React, { Component } from 'react'

const FooA = Cmp => props => {
    return (
        <div style={{border: '1px solid red'}}>
            <Cmp {...props} />
        </div>
    )
}

@FooA
class Test extends Component{
    render(){
        return (
            <div>hello react</div>
        )
    }
}
export default Test;