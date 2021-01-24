import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { RankingWrapper } from "./style";
import { changeTopListAction } from "../../store/actionCreators";
import TopRanking from '@/components/Top-Ranking';
import CardCommonHeader from '@/components/Card-Common-Header'
export default memo(function Ranking() {
    const { upList, originalList, newList } = useSelector(state => ({
        
        upList: state.recommend.get('upList'),
        originalList: state.recommend.get('originalList'),
        newList: state.recommend.get('newList')
    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeTopListAction(0))
        dispatch(changeTopListAction(2))
        dispatch(changeTopListAction(3))
    }, [dispatch])
    return (
        <RankingWrapper>
            <CardCommonHeader title="榜单" ></CardCommonHeader>
            <div className="tops">
                <TopRanking info={upList}></TopRanking>
                <TopRanking info={originalList}></TopRanking>
                <TopRanking info={newList}></TopRanking>
            </div>
        </RankingWrapper>
    )
})
