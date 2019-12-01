import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '@/actions/user'
import Layout from '@/pages/Layout'
import classnames from 'classnames'
import styles from './index.module.scss'

class UserPage extends Component {
    _logout = async ()=>{
        await this.props.logout();
        return <Redirect to="/login" />
    }
    render() {
        let {user} = this.props;
        let userInfo = localStorage.getItem('userInfo');
        if(userInfo){
            userInfo = JSON.parse(userInfo);
        }
        return (
            <Layout>
                <div className={classnames('flex flex-row flex-y-center', styles['user-info'])}>
                    <img src="http://storage.360buyimg.com/i.imageUpload/716875616e67303531353434393435303337313336_mid.jpg" />
                    <div className={styles['text']}>
                        Hello, {userInfo.username}
                    </div>
                    <a className={styles['logout']} onClick={this._logout}>退出</a>
                </div>
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