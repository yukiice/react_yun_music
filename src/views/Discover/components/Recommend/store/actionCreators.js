import { CHANGE_TOP_BANNERS } from "./constants";

import { getTopBanners } from "@/api/recommend";

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