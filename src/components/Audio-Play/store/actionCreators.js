import { getSongDetail } from "@/api/player";
import * as actionTypes from "./contants";
const getSongDetailAction = (currentSong) => ({
  type: actionTypes.GET_SONG_DETAIL,
  currentSong,
});
// 改变歌曲列表
const getPlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
});

// 改变index
const getCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENTSONG_INDEX,
  index,
});

export const changeSongDetailAction = (ids) => {
  return (dispatch,getState) => {
    // 根据id查找playlist中是否有这个歌曲
    const playList = getState().getIn(["player", "playList"]);
    const songIndex = playList.findIndex((item) => item.id === ids);

    //  判断是否找到歌曲
    if (songIndex === -1) {
      // 找到了歌曲
      dispatch(getCurrentSongIndexAction(songIndex));
      const song = playList[songIndex];
      dispatch(getSongDetailAction(song));
    } else {
      // 发现里面没有音乐数据
      getSongDetail(ids).then((res) => {
        const song = res.songs && res.songs[0];
        if (!song) return;

        // 将最新请求的歌曲添加到播放列表中
        const newPlayList = [...playList];
        newPlayList.push(song);

        // 更新redux中的值
        dispatch(getPlayListAction(newPlayList));
        dispatch(getCurrentSongIndexAction(newPlayList.length - 1));

        dispatch(getSongDetailAction(song));
      });
    }
    getSongDetail({
      ids,
    })
      .then((res) => {
        dispatch(getSongDetailAction(res.songs));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
