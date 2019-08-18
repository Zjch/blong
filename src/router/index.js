import Home from '../views/Home/Home'; // 首页
import Message from '../views/Message/Message'; // 留言板
import Personal from '../views/Personal/Personal'; // 履历
import Contact from '../views/Contact/Contact'; // 联系我
import MarkDown from '../views/MarkDown/MarkDown'; // 发布文章

import HomeRouters from './Home/HomeRouter'

const router = [
    {
        path: '/home',
        meta: {
            title: '首页'
        },
        component: Home,
        routes: HomeRouters
    },
    {
        path: '/message/',
        meta: {
            title: '留言板'
        },
        component: Message
    },
    {
        path: '/personal/',
        meta: {
            title: '履历'
        },
        component: Personal
    },
    {
        path: '/contact/',
        meta: {
            title: '联系我'
        },
        component: Contact
    },
    {
        path: '/MarkDown/',
        meta: {
            title: '编辑文章'
        },
        component: MarkDown
    }
]

export default router