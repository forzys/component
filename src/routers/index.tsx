



import React, { Suspense } from 'react'
// * 导入所有router
import { Navigate, useRoutes, createBrowserRouter, RouterProvider } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { RouteItem } from "@/interface/interface"
import Spining from '@/components/spining' 
import Routes from './router.config'

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


function Loader(routers: RouteItem[]): RouteObject[] {
    return routers?.map((item: RouteItem)=> {
        const component = (item.component || '@/pages/404').replace('@', '..');
        console.log({ component })
        return {
            path: item?.path,
            element: LazyLoad(React.lazy(() => import(component  /* @vite-ignore */))),
            // component: item.component,
            children: Array.isArray(item?.children) ? Loader(item?.children) : undefined
        }
    })
}

const router = createBrowserRouter(Loader(Routes));

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