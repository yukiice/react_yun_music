
import * as actionTypes from './constants'
import { Map } from "immutable";

const initialState = Map({
    topBanners: [],
    albums: [],
    hotRecommends: [],

})


function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return state.set('topBanners', action.topBanners)
        case actionTypes.GET_HOT_RECOMMENDS:
            return state.set('hotRecommends', action.hotRecommends)
            case actionTypes.GET_NEW_ALBUM:
                return state.set("albums", action.albums);
        default:
            return state;
    }
}

export default reducer