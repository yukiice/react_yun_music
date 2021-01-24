import React, { memo } from 'react'
import CardCommonHeader from '../../../../../../components/Card-Common-Header';
import { NewAlbumWrapper } from "./style";
export default memo(function NewAlbum() {
    return (
        <NewAlbumWrapper>
            <CardCommonHeader title="新碟上架"></CardCommonHeader>
        </NewAlbumWrapper>
    )
})
