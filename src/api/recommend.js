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
// 新碟上架
export function getNewAlbums(params) {
    return request({
      url: "/top/album",
      params
    })
  }

// 热门列表
export function getTopList(params){
    return request({
        url:'/top/list',
        params,
    })
}
