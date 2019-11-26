const initial = {
    bannerList: [],
    menuPanel: [],
    secondKills: []
}
export const homeReducer = (state=initial, action) => {
    switch(action.type){
        case 'GetBannerList':
            return Object.assign({}, state, {
                bannerList: action.payload
            })
        case 'GetMenuPanel':
            return Object.assign({}, state, {
                menuPanel: action.payload
            }) 
        case 'GetSecondKills':
            return Object.assign({}, state, {
                secondKills: action.payload
            })
        default:
            return state;
    }
}