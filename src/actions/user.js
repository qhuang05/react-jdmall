import Request from '../utils/request';

export const login = name => async (dispatch) => {
    let ret = await Request({
        method: 'post',
        url: '/user/login',
        data: {username: name}
    });
    console.log('login', ret);
    dispatch({ type: 'LoginSuccess', username: ret.data});
}