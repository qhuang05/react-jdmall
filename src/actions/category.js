import Request from '@/utils/request'

export const getCategory = () => async dispatch =>{
    const resData = await Request({
        method: 'get',
        url: '/api/test?type=category',
    });
    dispatch({
        type: 'GetCategory',
        payload: resData.data
    })
}
