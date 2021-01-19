import Discover from '@/views/Discover'
import Friend from '@/views/Friend'
import Mine from '@/views/Mine'
import DownLoad from '@/views/DownLoad'
import Musician from '@/views/Musician'
import Shop from '@/views/Shop'
const routes = [
    // 根路径
    {
        path:'/',
        exact:true,
        component:Discover
    },
    {
        path:'/friend',
        component:Friend
    },
    {
        path:'/mine',
        component:Mine
    },
    {
        path:'/download',
        component:DownLoad
    },
    {
        path:'/musician',
        component:Musician
    },
    {
        path:'/shop',
        component:Shop
    }
]

export default routes