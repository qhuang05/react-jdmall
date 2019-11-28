import Request from '@/utils/request'

export const getCategory = () => async dispatch =>{
    const resData = await Request({
        method: 'get',
        url: '/api/test?type=category',
    });
    let _data = [];
    for(let i=0; i<30; i++){
        _data.push(resData.data[0]);
    }
    dispatch({
        type: 'GetCategory',
        payload: _data
    })
}
