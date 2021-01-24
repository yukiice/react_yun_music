import request from "@/services";


// 顶部轮播图数据
export function getTopBanners() {
    return request({
        url: '/banner'
    })
}

// 热门数据
export function getHotRecommends(params){
    return request({
        url:'/personalized',
        params
    })
}

export function getNewAlbums(params) {
    return request({
      url: "/top/album",
      params
    })
  }

