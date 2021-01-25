import { Map } from 'immutable'

import * as actionTypes from './contants'

const initialState = Map({
    currentSong: []
})

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_SONG_DETAIL:
            return state.set('currentSong', action.currentSong)
        default:
            return state
    }
}