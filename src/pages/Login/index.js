import React, { Component } from 'react'
import {connect} from 'react-redux'

class LoginPage extends Component {
    render() {
        return (
            <div>
                <input type="text" />
                <button onClick="login">登录</button>
            </div>
        )
    }
}

export default connect(
    // mapStateToProps
    state => ({
        user: state.user
    }),
    // mapDispatchToProps
    {}
)(LoginPage)