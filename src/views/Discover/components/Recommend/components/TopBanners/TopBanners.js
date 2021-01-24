import React, { memo, useEffect, useRef, useCallback, useState } from 'react'

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { changeBannersAction } from "../../store/actionCreators";

import { Carousel } from "antd";
import { BannerControl, BannerWrapper, BannerLeft, BannerRight } from "./style";

function TopBanner() {

    // 记录轮播图的位置
    const [currentIndex, setCurrentIndex] = useState(0)


    // 获取轮播图的数据redux
    const { topBanners } = useSelector(state => ({
        topBanners: state.recommend.get('topBanners')
    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeBannersAction)
    }, [dispatch])

    // 通过ref拿到轮播图的前进后退
    const bannerRef = useRef()


    // bannerChange
    const bannerChange = useCallback((from, to) => {
        setCurrentIndex(to)
    }, [])
    const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + `?imageView&blur=40x20`)
    return (
        <BannerWrapper bgImage={bgImage}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel autoplay effect="fade" ref={bannerRef} beforeChange={bannerChange}>
                        {
                            topBanners.map((item, index) => {
                                return (
                                    <div key={index} className="banner-item">
                                        <img src={item.imageUrl} alt={item.typeTitle} className="image" />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={() => bannerRef.current.prev()}></button>
                    <button className="btn right" onClick={() => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper> 
    )
}

export default memo(TopBanner)
