



import React, { Suspense } from 'react'
// * 导入所有router
import { Navigate, useRoutes, createBrowserRouter, RouterProvider } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { RouteItem } from "@/interface/interface"
import Spining from '@/components/spining' 
import Routes from './router.config'

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
       element: <Login />,
   },
]

// const Routes:RouteItem[] = require('./router.config');
// import Login from "@/pages/login/index"
// import PageError from "@/pages/404"

function LazyLoad(Component: React.LazyExoticComponent<any>): React.ReactNode {
    return (
        <Suspense fallback={<Spining />}>
            <Component />
        </Suspense>
    )
}


// function Loader(routers: RouteItem[]): RouteObject[] {
//     return routers?.map((item: RouteItem)=> {
//         const component = (item.component || '@/pages/404').replace('@', '..');
//         console.log({ component, item })
//         return {
//             path: item?.path,
//             element: item?.element,
//             // element: LazyLoad(React.lazy(() => import(component))),
//             // component: item.component,
//             children: Array.isArray(item?.children) ? Loader(item?.children) : undefined
//         }
//     })
// }
 
// console.log({ Routes })

const router = createBrowserRouter( 
    routers
    // Loader(Routes) 
    );

// const onRouters = (routers:RouteItem[]) => { 
//     return routers?.map((item: RouteItem)=>{
//         return  {
//             // ...item,
//             path: item?.path,
//             element: item?.element 
//             //  <Element />
//         }
//     }) 
// }
// const item = onRouters(rootRouter)

export default () => {
    // console.log({ router }); 
    // console.log({ Routes });

    return <RouterProvider router={router} />
    // return <RouterProvider router={router} />
}