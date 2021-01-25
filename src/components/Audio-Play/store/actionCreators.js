import { getSongDetail } from "@/api/player";
import * as actionTypes from './contants'
const getSongDetailAction = currentSong => ({
    type: actionTypes.GET_SONG_DETAIL,
    currentSong
})

export const changeSongDetailAction = ids => {
    return dispatch => {
        getSongDetail(
            {
                ids
            }
        ).then(res => {
            dispatch(getSongDetailAction(res.songs))
        }).catch(err => {
            console.log(err)
        })
    }
}