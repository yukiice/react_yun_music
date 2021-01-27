/* eslint-disable jsx-a11y/anchor-has-content */
import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { getSizeImage, getPlaySong, formatDate } from "@/common/common";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Slider } from "antd";
import { PlaybarWrapper, Operator, Control, PlayInfo } from "./style";
import { changeSongDetailAction } from "./store/actionCreators";

export default memo(function AudioPlay() {
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isChange, setIsChange] = useState(false)
    const [isPlay, setIsPlay] = useState(false)
    const { currentSong } = useSelector(state => ({
        currentSong: state.player.get('currentSong')
    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeSongDetailAction(1810316957))
    }, [dispatch])





    // 对数据进行处理
    const duration = currentSong[0] && currentSong[0].dt
    const showDuration = formatDate(duration, "mm:ss")
    const showCurrentTime = formatDate(currentTime, "mm:ss")

    // ref
    const audioRef = useRef()
    // 第一次进来后获得音乐数据
    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong[0] && currentSong[0].id)
    }, [currentSong])




    // 播放音乐
    const playMusic = useCallback(() => {
        setIsPlay(!isPlay)
        isPlay ? audioRef.current.pause() : audioRef.current.play()
    }, [isPlay])

    // 时间更新
    const timeUpdate = (e) => {
        !isChange && (
            setProgress(currentTime / duration * 100) &&
            setCurrentTime(e.target.currentTime * 1000)
        )
    }



    const slideChange = useCallback((value) => {
        // 处理时间
        const nowTimes = value / 100 * duration
        setCurrentTime(nowTimes)
        setProgress(value)


    }, [duration])
    const slideAfterChange = useCallback((value) => {

        const nowTimes = value / 100 * duration / 1000
        audioRef.current.currentTime = (nowTimes)
        setCurrentTime(nowTimes * 1000)
        setIsChange(false)
        !isPlay && playMusic()
    }, [duration, isPlay, playMusic])
    return (
        <PlaybarWrapper className="sprite_player">
            <div className="content wrap-v2">
                {/* 播放器控制 */}
                <Control isPlaying={isPlay}>
                    <button className="sprite_player prev"></button>
                    <button className="sprite_player play" onClick={() => playMusic()}></button>
                    <button className="sprite_player next"></button>
                </Control>
                {/* 播放器封面 */}
                <PlayInfo>
                    <div className="image">
                        <a href="/#">
                            <img src={getSizeImage(currentSong[0] && currentSong[0].al.picUrl, 35)} alt="" />
                        </a>
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-name">{currentSong[0] && currentSong[0].name}</span>
                            <span className="singer-name">{currentSong[0] && currentSong[0].ar[0].name}</span>
                        </div>
                        <div className="progress">
                            <Slider defaultValue={0} value={progress} onChange={slideChange} onAfterChange={slideAfterChange} />
                            {/* 时间轴 */}
                            <div className="time">
                                <span className="now-time">
                                    {showCurrentTime}
                                </span>
                                <span className="divider">
                                    /
                        </span>
                                <span className="duration">
                                    {showDuration}
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
            <audio ref={audioRef} onTimeUpdate={timeUpdate}></audio>
        </PlaybarWrapper>
    )
})
