import React, { memo } from 'react'
import { SongsCoverWrapper } from "./style";
import { getSizeImage, getCount } from "@/common/common";
function SongsCover(props) {
    const { info, right } = props;
    return (
        <SongsCoverWrapper right={right}>
            <div className="cover-top">
                <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt="" />
                <div className="cover sprite_covor">
                    <div className="info sprite_covor">
                        <span>
                            <i className="sprite_icon erji"></i>
                            {getCount(info.playCount)}
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="cover-bottom text-nowrap">
                {info.name}
            </div>
            <div className="cover-source">
                by {info.copywriter || info.creator.nickname}
            </div>
        </SongsCoverWrapper>
    )
}

export default memo(SongsCover)
