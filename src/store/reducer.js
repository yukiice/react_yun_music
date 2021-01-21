import { combineReducers } from "redux";

import { reducer as recommendReducer } from "@/views/Discover/components/Recommend/store";

const reducer = combineReducers({
    recommend:recommendReducer
})

export default reducer