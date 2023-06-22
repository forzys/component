import { useMemo } from "react"

 
export const useFetch = () => {

    const http = useMemo(()=>{
        return { 
            get: (url, option = {})=> new Promise((resolve)=>{ 
                const { data = {}, type= 'json' } = option
                const params = Object?.keys(data)?.reduce((summ, item)=>summ + `${item}=${data[item]}`, '');
                const path = url.includes('?') ? url + '&' + params : url + '?' + params
 
                return fetch(path)
                ?.then((res)=> res[type]())
                ?.then((res)=>{ resolve(res) });
            }),

            post:()=>{}, 
        }
    },[]);

    return [http];
}