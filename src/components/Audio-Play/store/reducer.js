import { Map } from "immutable";

import * as actionTypes from "./contants";

const initialState = Map({
  currentSong: [],
  playList: [],
  currentSongIndex: 0,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_SONG_DETAIL:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENTSONG_INDEX:
      return state.set("currentSongIndex", action.currentSongIndex);
    default:
      return state;
  }
}
