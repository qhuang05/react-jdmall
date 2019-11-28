const initial = {
    category: []
}
export const categoryReducer = (state=initial, action) => {
    switch(action.type){
        case 'GetCategory':
            return {...state, category: action.payload}
        default:
            return state;
    }
}