import React, { memo } from 'react'
import CardCommonHeader from '../../../../../../components/Card-Common-Header';
import { RankingWrapper } from "./style";
export default memo(function Ranking() {
    return (
        <RankingWrapper>
        <CardCommonHeader title="新碟上架"></CardCommonHeader>            
        </RankingWrapper>
    )
})
