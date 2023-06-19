


 import Login from '@/pages/login/index'
 import Summary from '@/pages/summary/index'
 import NotFound from '@/pages/404.jsx'
 
const routers = [
    {
        path: "/",
        component: '@/pages/login/index',
        element: <Login />,
    },
    {
        path: "/summary",
        component: '@/pages/summary/index',
        element: <Summary />,
    },
    {
        path: "*", 
		component: '@/pages/404.jsx',
        element: <NotFound />,
    },
]


export default routers