import { CHANGE_TOP_BANNERS,GET_HOT_RECOMMENDS } from "./constants";

import { getTopBanners,getHotRecommends } from "@/api/recommend";


// 首页轮播图
export const getTopBannersAction = (topBanners) => ({
    type: CHANGE_TOP_BANNERS,
    topBanners
})


export const changeBannersAction = (dispatch) => {
    getTopBanners().then(res => {
        console.log(res);
        dispatch(getTopBannersAction(res.banners))
    }).catch(err => {
        console.log(err)
    })
}


// 热门数据
export const getHotRecommendsAction = (hotRecommends) => ({
    type: GET_HOT_RECOMMENDS,
    hotRecommends
})
export const changeHotRecommendsAction =(dispatch=>{
    getHotRecommends({
            limit:8
    }).then(res=>{
        dispatch(getHotRecommendsAction(res.result))
    }).catch(err => {
        console.log(err);
    })

})

