import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../actions/user'
import { NavBar, Icon, WingBlank } from 'antd-mobile'
import styles from './index.module.scss'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            usernameClear: false,
            password: '',
            passwordClear: false
        }
    }
    change = (key, value) => {
        this.setState((nextState, nextProps)=>{
            return {
                [key]: value
            }
        })
    }
    showClose = (key, value) =>{
        this.setState({
            [key+'Clear']: value
        })
    }
    render() {
        let { user, login, location } = this.props;
        let { username, password, usernameClear, passwordClear } = this.state;
        if (user.isLogin) {
            return (
                <Redirect to={location.state || '/userCenter'} />
            )
        } else {
            return (
                <>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => window.history.back()}
                    >京东登录注册
                    </NavBar>
                    <WingBlank>
                        <div style={{marginTop: '20px', paddingLeft: '15px', paddingRight: '15px'}}>
                            <div className={`flex flex-x-full flex-y-center ${styles['form-item']}`}>
                                <input 
                                    type="text" 
                                    placeholder="用户名/邮箱/手机号" 
                                    value={username} 
                                    onChange={e=>this.change('username', e.target.value)} 
                                    onFocus={e=>this.showClose('username', true)} 
                                    onBlur={e=>this.showClose('username', false)} 
                                />
                                {/* {usernameClear && <a onClick={e=>this.change('username', '')}><Icon type="cross" /></a>} */}
                                <a onClick={e=>this.change('username', '')} style={{'visibility': `${usernameClear ? 'visible' : 'hidden'}`}}><Icon type="cross" /></a>
                            </div>
                            <div className={`flex flex-x-full flex-y-center flex-1 ${styles['form-item']}`}>
                                <div className="flex flex-x-full flex-y-center" style={{width: '100%', paddingRight: '10px'}}>
                                    <input 
                                        type="password" 
                                        placeholder="请输入密码" 
                                        value={password} 
                                        onChange={e=>this.change('password', e.target.value)} 
                                        onFocus={e=>this.showClose('password', true)} 
                                        onBlur={e=>this.showClose('password', false)} 
                                    />
                                    {/* {passwordClear && <a onClick={e=>this.change('password', '')}><Icon type="cross" /></a>} */}
                                    <a onClick={e=>this.change('password', '')} style={{'visibility': `${passwordClear ? 'visible' : 'hidden'}`}}><Icon type="cross" /></a>
                                </div>
                                <div className={styles['forgot-pwd']}>忘记密码</div>
                            </div>
                            <button className={styles['login-btn']} onClick={e=>login(username, password)}>登录</button>
                        </div>
                    </WingBlank>
                </>
            )
        }
    }
}

// mapStateToProps, mapDispatchToProps
export default connect(
    state => ({
        user: state.user
    }),
    { login }
)(LoginPage)