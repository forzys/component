
const routers = [
    {
        path: "/", 
        component: '@/layout/index.tsx',
        // imm: import('@/layout/index'),
        children:[
            { 
                index: true,
            
                component: '@/pages/home/index.tsx',
                // component: import('@/pages/home/index'),
            }, 
            {
                path: "/home",  
                // index: true,
                component: '@/pages/home/index.tsx',
                // imm: import('@/pages/home/index'),
         
            }, 
            {
                path: "/component",
                component: '@/pages/component/index.tsx',
                // imm: import('@/pages/component/index'),
        
            },
            {
                path: "/wallpaper",
                component: '@/pages/wallpaper/index.tsx',
                // imm: import('@/pages/wallpaper/index'),
            },
            {
                path: "/summary",
                component: '@/pages/summary/index.tsx',
                // imm: import('@/pages/summary/index'),
            },
        ]
    },
    
    {
        path: "*", 
		component: '@/pages/404.jsx',
        // imm: import('@/pages/404.jsx'),
    },
]


export default routers