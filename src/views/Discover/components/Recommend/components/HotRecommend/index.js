import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { RecommendWrapper } from "./style";
import CardCommonHeader from '@/components/Card-Common-Header'
import { changeHotRecommendsAction } from "../../store/actionCreators";
import SongsCover from '../../../../../../components/Songs-Cover';

function HotRecommend() {

    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.recommend.get('hotRecommends')
    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeHotRecommendsAction)
    }, [dispatch])

    return (
        <RecommendWrapper>
            <CardCommonHeader title={'热门推荐'} keywords={['华语', '流行', '民谣', '摇滚', '电子']}></CardCommonHeader>
            <div className="recommend-list">
                {
                    hotRecommends.map(item=>{
                        return (
                           <SongsCover key={item.id} info={item}></SongsCover>
                        )
                    })
                }
            </div>
        </RecommendWrapper>
    )
}
export default memo(HotRecommend)
