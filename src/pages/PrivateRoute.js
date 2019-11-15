import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

class PrivateRoute extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { isLogin, path, component:Cmp, ...rest } = this.props;
        if (isLogin) {
            return (
                // <Route path={path} component={Cmp} />
                // <Route {...this.props} />
                <Route path={path} render={props=>(<Cmp {...props} />)} {...rest} />
            )
        } else {
            return (
                <Redirect to={{
                    pathname: '/login',
                    state: path
                }} />
            )
        }
    }
}

export default connect(
    state => ({
        isLogin: state.user.isLogin
    })
)(PrivateRoute);