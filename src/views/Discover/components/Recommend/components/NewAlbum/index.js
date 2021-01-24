import React, { memo, useEffect, useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Carousel } from "antd";
import CardCommonHeader from '../../../../../../components/Card-Common-Header';
import { NewAlbumWrapper } from "./style";
import { changeAlbumsAction } from "../../store/actionCreators";
import AlbumCover from '../../../../../../components/Album-Cover';
export default memo(function NewAlbum() {
    const { albums } = useSelector(state => ({
        albums: state.recommend.get('albums')
    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeAlbumsAction)
    }, [dispatch])

    // 定义轮播图的ref
    const bannerRef = useRef()
    return (
        <NewAlbumWrapper>
            <CardCommonHeader title="新碟上架"></CardCommonHeader>
            <div className="content">
                <button className="arrow arrow-left sprite_02" onClick={() => bannerRef.current.prev()}></button>
                <div className="album">
                    <Carousel dots={false} ref={bannerRef}>
                        {
                            [0, 1].map((item, index) => {
                                return (
                                    <div key={index} className="page">
                                        {albums.slice(item * 5, (item + 1) * 5).map(items => {
                                            return (
                                                <AlbumCover key={items.id} info={items} size={100} width={110} bgp="-570px"></AlbumCover>
                                            )
                                        })}
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <button className="arrow arrow-right sprite_02" onClick={() => bannerRef.current.next()}></button>

            </div>
        </NewAlbumWrapper>
    )
})
