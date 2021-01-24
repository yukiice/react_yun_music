
import * as actionTypes from './constants'
import { Map } from "immutable";

const initialState = Map({
    topBanners: [],
    albums: [],
    hotRecommends: [],
    newList:{},
    originalList:{},
    upList:{}
})


function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return state.set('topBanners', action.topBanners)
        case actionTypes.GET_HOT_RECOMMENDS:
            return state.set('hotRecommends', action.hotRecommends)
        case actionTypes.GET_NEW_ALBUM:
            return state.set("albums", action.albums);
        case actionTypes.CHANGE_UP_RANKING:
            return state.set('upList', action.upList)
            case actionTypes.CHANGE_ORIGINAL_RANKING:
                return state.set('originalList', action.originalList)
                case actionTypes.CHANGE_NEW_RANKING:
                    return state.set('newList', action.newList)
        default:
            return state;
    }
}

export default reducer