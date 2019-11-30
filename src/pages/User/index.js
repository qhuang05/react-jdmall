import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Layout from '../Layout'
import {logout} from '../../actions/user'

class UserPage extends Component {
    _logout = async ()=>{
        await this.props.logout();
        return <Redirect to="/login" />
    }
    render() {
        let {user} = this.props;
        return (
            <Layout>
                UserPage, Hello {user.username}
                <button onClick={this._logout}>退出</button>
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