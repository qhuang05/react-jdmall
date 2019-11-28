import Request from '@/utils/request'

export const getBannerList = () => async dispatch =>{
    const resData = await Request({
        method: 'get',
        url: '/api/test?type=banner',
    });
    dispatch({
        type: 'GetBannerList',
        payload: resData.data
    })
}

export const getMenuPanel = () => async dispatch =>{
    const resData = await Request({
        method: 'get',
        url: '/api/test?type=menu',
    });
    dispatch({
        type: 'GetMenuPanel',
        payload: resData.data
    })
}

export const getSecondKills = () => async dispatch =>{
    const resData = await Request({
        method: 'get',
        url: '/api/test?type=seckill',
    });
    dispatch({
        type: 'GetSecondKills',
        payload: resData.data
    })
}