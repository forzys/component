

import { BrowserRouter } from "react-router-dom";
import Router from "@/routers/index";


export default (props)=>{ 
    console.log({ props, Router })
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    )
}