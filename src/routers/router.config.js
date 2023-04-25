


 

const routers = [
    {
        path: "/",
        component: '@/pages/login/index',
    },
    {
        path: "/summary",
        component: '@/pages/summary/index',
    },
    {
        path: "*", 
		component: '@/pages/404.jsx'
    },
]


export default routers