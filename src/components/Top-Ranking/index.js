/* eslint-disable jsx-a11y/anchor-has-content */
import React, { memo } from 'react'
import { TopRankingWrapper } from "./style";
import { getSizeImage } from "@/common/common";
export default memo(function TopRanking(props) {
    const {info}  =props
    const {tracks = []} = info

    // 点击后播放
    const playMusic = ()=>{
        console.log('aaaa');
    }
    return (
        <TopRankingWrapper>
            <div className="header">
                <div className="image">
                <img src={getSizeImage(info.coverImgUrl)} alt=""/>
                <a href="/qqq" className="image_cover"></a>
                </div>
                <div className="info">
                <a href="/qqq">{info.name}</a>
                <div>
                    <button className="btn play sprite_02"></button>
                    <button className="btn favor sprite_02"></button>
                </div>
                </div>
            </div>
            <div className="list">
                {
                    tracks.slice(0,10).map((item,index)=>{
                        return (
                            <div key={item.id} className="list-item">
                            <div className="rank">
                            {index + 1}
                            </div>
                            <div className="info">
                            <span className="name text-nowrap">{item.name}</span>
                            <div className="operate">
                            <button className="btn sprite_02 play" onClick={playMusic}></button>
                            <button className="btn sprite_icon2 addto"></button>
                            <button className="btn sprite_02 favor"></button>
                            </div>
                            </div>
                            
                            </div>
                        )
                    })
                }
            </div>
            <div className="footer">
                <a href="/qqq">查看全部&gt;</a>
            </div>
      
        </TopRankingWrapper>
    )
})
