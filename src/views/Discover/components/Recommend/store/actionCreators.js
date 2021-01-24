import { CHANGE_TOP_BANNERS, GET_NEW_ALBUM, GET_HOT_RECOMMENDS } from "./constants";

import { getTopBanners, getHotRecommends, getNewAlbums } from "@/api/recommend";


// 首页轮播图
export const getTopBannersAction = (topBanners) => ({
    type: CHANGE_TOP_BANNERS,
    topBanners
})


export const changeBannersAction = (dispatch) => {
    getTopBanners().then(res => {
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
export const changeHotRecommendsAction = (
    dispatch => {
        getHotRecommends({
            limit: 8
        }).then(res => {
            dispatch(getHotRecommendsAction(res.result))
        }).catch(err => {
            console.log(err);
        })

    }
)

export const getAlbumsAction = (albums) => ({
    type: GET_NEW_ALBUM,
    albums
})
export const changeAlbumsAction = (dispatch) => {
    getNewAlbums({
        limit: 10
    }).then(res => {
        dispatch(getAlbumsAction(res.albums))
    }).catch(err => {
        console.log(err);
    })

}




