import request from "@/services";

export function getTopBanners() {
    return request({
        url: '/banner'
    })
}