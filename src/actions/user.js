import Request from '../utils/request'
import {Toast} from 'antd-mobile'

export const login = (username, password) => async (dispatch) => {
    let ret = await Request({
        method: 'post',
        url: '/user/login',
        data: {username, password}
    });
    // console.log('login', ret);
    if(ret.code == 'success'){
        dispatch({ 
            type: 'LoginSuccess', 
            payload: {username: ret.data}
        });
    } else{
        dispatch({ 
            type: 'LoginFailure'
        });
        Toast.fail(`登录失败，${ret.msg}`, 2);
    }
}
export const logout = value => {
    return {
        type: 'Logout',
        payload: {}
    }
}