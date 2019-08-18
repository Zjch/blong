import Basics from '../../views/Home/HomePage/Basics';
import Advance from '../../views/Home/HomePage/Advance';
import Trifles from '../../views/Home/HomePage/Trifles';

const HomeRouters = [
    {
        path: '/home/',
        exact: true,
        meta: {
            title: '基础学习'
        },
        component: Basics
    },
    {
        path: '/home/advance/',
        meta: {
            title: '技能进阶'
        },
        component: Advance
    },
    {
        path: '/home/trifles/',
        meta: {
            title: '琐事'
        },
        component: Trifles
    }
]

export default HomeRouters;