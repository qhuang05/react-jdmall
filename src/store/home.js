const initial = {
    list: [],
}
export const homeReducer = (state=initial, action) => {
    switch(action.type){
        case 'HomeListCreate':
            state.list.push(action.payload);
            return state;
        default:
            return state;
    }
}