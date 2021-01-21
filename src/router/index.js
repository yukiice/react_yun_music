import Discover from '@/views/Discover'
import Friend from '@/views/Friend'
import Mine from '@/views/Mine'
import DownLoad from '@/views/DownLoad'
import Musician from '@/views/Musician'
import Shop from '@/views/Shop'

// 子路由
import NewSong from '@/views/Discover/components/NewSong'
import Radio from '@/views/Discover/components/Radio'
import Recommend from '@/views/Discover/components/Recommend'
import Ranking from '@/views/Discover/components/Ranking'
import Singer from '@/views/Discover/components/Singer'

import { Redirect } from 'react-router-dom'

const routes = [
    // 根路径
    {
        path: '/',
        exact: true,
        render: () => (
            <Redirect to="/discover"></Redirect>
        )
    },
    {
        path: '/discover',
        component: Discover,
        routes: [
            {
                path: '/discover',
                exact: true,
                render: () => (
                    <Redirect to="/discover/recommend"></Redirect>
                )
            },
            {
                path: '/discover/recommend',
                component: Recommend
            },
            {
                path: '/discover/radio',
                component: Radio,
            },
            {
                path: '/discover/singer',
                component:Singer,
            },
            {
                path:'/discover/ranking',
                component:Ranking,
            },
            {
                path:'/discover/newsong',
                component:NewSong
            }
        ]
    },
    {
        path: '/friend',
        component: Friend
    },
    {
        path: '/mine',
        component: Mine
    },
    {
        path: '/download',
        component: DownLoad
    },
    {
        path: '/musician',
        component: Musician
    },
    {
        path: '/shop',
        component: Shop
    }
]

export default routes