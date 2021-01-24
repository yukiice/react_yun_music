import * as actionTypes from './constants'

import { getTopBanners, getHotRecommends, getNewAlbums, getTopList } from "@/api/recommend";


// 首页轮播图
const getTopBannersAction = (topBanners) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
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
const getHotRecommendsAction = (hotRecommends) => ({
    type: actionTypes.GET_HOT_RECOMMENDS,
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

// 新碟上架
const getAlbumsAction = (albums) => ({
    type: actionTypes.GET_NEW_ALBUM,
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


// 热门列表



const getUpRankingAction = (upList) => ({
    type: actionTypes.CHANGE_UP_RANKING,
    upList
})
const getNewRankingAction = (newList) => ({
    type: actionTypes.CHANGE_NEW_RANKING,
    newList
})
const getOriginalRankingAction = (originalList) => ({
    type: actionTypes.CHANGE_ORIGINAL_RANKING,
    originalList
})


export const changeTopListAction = (idxs) => {
    return dispatch => {
        getTopList({
            idx: idxs
        }).then(res => {
            switch (idxs) {
                case 0:
                    dispatch(getUpRankingAction(res.playlist))
                    break;
                case 2:
                    dispatch(getNewRankingAction(res.playlist))
                    break;
                case 3:
                    dispatch(getOriginalRankingAction(res.playlist))
                    break;
                default:
            }
        }).catch(err => {
            console.log(err);
        })
    }
}









