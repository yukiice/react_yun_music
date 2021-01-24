import React, { memo} from 'react'
// 组件
import TopBanner from './components/TopBanners/TopBanners'
import HotRecommend from './components/HotRecommend'
import {RecommendWrapper,Content,RecommendLeft,RecommendRight} from './style'
import NewAlbum from './components/NewAlbum'
import Ranking from './components/Ranking'
function Recommend() {
    // const {getBanners,topBanners} = props;
    // const { topBanners } = useSelector(state => ({
    //     topBanners: state.recommend.get('topBanners')
    // }))
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(changeBannersAction)
    // }, [dispatch])
    return (
        <RecommendWrapper>
            {/* {
                topBanners.length
            } */} 
            <TopBanner></TopBanner>
        <Content>
            <RecommendLeft>
                <HotRecommend></HotRecommend>
                <NewAlbum></NewAlbum>
                <Ranking></Ranking>
            </RecommendLeft>
            <RecommendRight></RecommendRight>
        </Content>
        </RecommendWrapper>
    )
}

export default memo(Recommend)
// const mapStateToProps = state => ({
//     topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//     getBanners() {
//         dispatch(changeBannersAction)
//     }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
