import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../actions/user';

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
                <>
                    <input type="text" value={username} onChange={e=>this.change('username', e.target.value)} />
                    <button onClick={e=>login(username)}>登录</button>
                </>
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