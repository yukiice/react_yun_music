/* eslint-disable jsx-a11y/anchor-has-content */
import React, { memo } from 'react'
import { AlbumWrapper } from "./styled";
import { getSizeImage } from "@/common/common";
export default memo(function AlbumCover(props) {
    const { info, size = 100, width = 110, bgp = "-570px" } = props
    return (
        <AlbumWrapper size={size} width={width} bgp={bgp}>
            <div className="album-image">
                <img src={getSizeImage(info.picUrl, size)} alt="" />
                <a href="/todo" className="cover sprite_covor"></a>
            </div>
            <div className="album-info">
                <div className="name">
                    {info.name}
                </div>
                <div className="artist text-nowrap">
                    {info.artist.name}
                </div>
            </div>
        </AlbumWrapper>
    )
})
