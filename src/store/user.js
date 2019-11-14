const initial = {
    isLogin: false,
    username: null
}
export const userReducer = (state=initial, action) => {
    switch(action.type){
        case 'LoginSuccess':
            return {isLogin:true, username: action.payload}
        case 'LoginFailure':
        case 'Logout':
            return {isLogin:false, username: null}
        default:
            return state;
    }
}