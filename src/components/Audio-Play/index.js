/* eslint-disable jsx-a11y/anchor-has-content */
import React, { memo, useEffect } from 'react'
import { getSizeImage,formatMinuteSecond } from "@/common/common";
import { useSelector, useDispatch,shallowEqual } from "react-redux";
import { Slider } from "antd";
import { PlaybarWrapper, Operator, Control, PlayInfo } from "./style";
import { changeSongDetailAction } from "./store/actionCreators";

export default memo(function AudioPlay() {
    const {currentSong} = useSelector(state => ({
        currentSong: state.player.get('currentSong')
    }),shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeSongDetailAction(1810316957))
    }, [dispatch])
    return (
        <PlaybarWrapper className="sprite_player">
            <div className="content wrap-v2">
                {/* 播放器控制 */}
                <Control>
                    <button className="sprite_player prev"></button>
                    <button className="sprite_player play"></button>
                    <button className="sprite_play next"></button>
                </Control>
                {/* 播放器封面 */}
                <PlayInfo>
                    <div className="image">
                        <a href="/#">
                            <img src={getSizeImage(currentSong[0] && currentSong[0].al.picUrl,35)} alt="" />
                        </a>
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-name">{currentSong[0] && currentSong[0].name}</span>
                            <span className="singer-name">{currentSong[0] && currentSong[0].ar[0].name}</span>
                        </div>
                        <div className="progress">
                            <Slider defaultValue={0} />
                            {/* 时间轴 */}
                            <div className="time">
                                <span className="now-time">
                                    02:30
                        </span>
                                <span className="divider">
                                    /
                        </span>
                                <span className="duration">
                                    {formatMinuteSecond(currentSong[0] && currentSong[0].dt)}
                        </span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator>
                    <div className="left">
                        <button className="sprite_playbar btn favor"></button>
                        <button className="sprite_playbar btn share"></button>
                    </div>
                    <div className="right sprite_playbar">
                        <button className="sprite_playbar btn volume"></button>
                        <button className="sprite_playbar btn loop"></button>
                        <button className="sprite_playbar btn playlist"></button>

                    </div>
                </Operator>

            </div>
        </PlaybarWrapper>
    )
})
