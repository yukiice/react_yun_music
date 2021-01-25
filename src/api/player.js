import request from '@/services'


// 获取歌曲详情
export function getSongDetail(params){
    return request({
        url:'/song/detail',
        params
    })
}