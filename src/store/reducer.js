import { combineReducers } from "redux";

import { reducer as recommendReducer } from "@/views/Discover/components/Recommend/store";

import { reducer as playerReducer } from "@/components/Audio-Play/store";

const reducer = combineReducers({
    recommend: recommendReducer,
    player: playerReducer
})

export default reducer