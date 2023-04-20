




// * 导入所有router
// const metaRouters = import.meta.globEager("src/pages/*.tsx");



import { Navigate, useRoutes } from "react-router-dom";

import { lazy } from "react";

import { RouteItem } from "@/interface/interface"

import Routes from './router.config'

// const Routes:RouteItem[] = require('./router.config');
import Login from "@/pages/login/index"

export const rootRouter: RouteItem[] = [
    {
		path: "/", 
        element: <Login />
        // component: '/login/index',
	},
    ...Routes,
    {
		path: "*",
		component: '/404'
	}
]


const onRouters = (routers:RouteItem[]) => { 
    return routers?.map((item: RouteItem)=>{
        return  {
            // ...item,
            path: item?.path,
            element: item?.element 
            //  <Element />
        }
    }) 
}

const item = onRouters(rootRouter)

export default ()=>{
  
    const items = useRoutes( item  );

    return items
}