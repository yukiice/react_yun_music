import Discover from '@/views/Discover'
import Friend from '@/views/Friend'
import Mine from '@/views/Mine'
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
]

export default routes