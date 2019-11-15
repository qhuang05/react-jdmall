const initial = {
    isLogin: false,
    username: null
}
export const userReducer = (state=initial, action) => {
    let _state;
    switch(action.type){
        case 'LoginSuccess':
            _state = {isLogin: true, username: action.payload};
            localStorage.setItem('userInfo', JSON.stringify(_state));
            return _state;
        case 'LoginFailure':
        case 'Logout':
            _state = {isLogin:false, username: null};
            localStorage.removeItem('userInfo');
            return _state;
        default:
            return state;
    }
}