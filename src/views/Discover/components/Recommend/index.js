import React, { memo, useEffect } from 'react'
import { connect } from "react-redux";
import { changeBannersAction } from "./store/actionCreators";


function Recommend(props) {
    const {getBanners,topBanners} = props;
    useEffect(() => {
        getBanners();
    }, [getBanners])
    return (
        <div>
        {
            topBanners.length
        }
        </div>
    )
}

const mapStateToProps = state => ({
    topBanners: state.recommend.topBanners
})

const mapDispatchToProps = dispatch => ({
    getBanners() {
        dispatch(changeBannersAction)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
