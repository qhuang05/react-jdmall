import React, { Component } from 'react'
import {connect} from 'react-redux'
import Layout from '../../components/Layout'
import {logout} from '../../actions/user'

class UserPage extends Component {
    render() {
        let {user, logout} = this.props;
        return (
            <Layout>
                UserPage, Hello {user.username}
                <button onClick={logout}>退出</button>
            </Layout>
        )
    }
}

export default connect(
    state=>({
        user: state.user
    }), 
    {logout}
)(UserPage)