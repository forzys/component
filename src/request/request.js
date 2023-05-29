import { useMemo } from "react"

 
export const useFetch = () => {

    const http = useMemo(()=>{
        return { 
            get: (url, option)=> new Promise((resolve)=>{
                return fetch(url)
                ?.then((res)=> res?.json())
                ?.then((res)=>{ resolve(res) });
            }),

            post:()=>{}, 
        }
    },[]);

    return [http];
}