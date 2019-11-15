import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {login} from '../../actions/user';
import Layout from '../../components/Layout';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: ''
        }
    }
    change = (key, value)=>{
        this.setState({
            [key]: value
        })
    }
    render() {
        let {user, login, location} = this.props;
        let {username} = this.state;
        if(user.isLogin){
            return (
                <Redirect to={location.state || '/userCenter'} />
            )
        } else{
            return (
                <Layout>
                    <input type="text" value={username} onChange={e=>this.change('username', e.target.value)} />
                    <button onClick={e=>login(username)}>登录</button>
                </Layout>
            )
        }
    }
}

export default connect(
    // mapStateToProps
    state => ({
        user: state.user
    }),
    // mapDispatchToProps
    {login}
)(LoginPage)