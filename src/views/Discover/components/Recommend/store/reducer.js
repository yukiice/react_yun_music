
import * as actionTypes from './constants'
import { Map } from "immutable";

const initialState = Map({
    topBanners: [],
    hotRecommends: []
})


function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return state.set('topBanners', action.topBanners)

        case actionTypes.GET_HOT_RECOMMENDS:
            return state.set('hotRecommends', action.hotRecommends)
        default:
            return state;
    }
}

export default reducer