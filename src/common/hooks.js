


import React from 'react' 
import { useTimeAuto } from  '@/hooks/useTimeAuto'
import { useFullscreen } from  '@/hooks/useFullscreen'
import { useMemoize, useMemoizedFn } from  '@/hooks/useMemoize'
import { useCreation, useUpdate } from  '@/hooks/useCreation'



export { useTimeAuto, useFullscreen,  useMemoize, useMemoizedFn, useCreation, useUpdate } 
// import { useMemo, useCallback, useRef } from "react";

// const weeks = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')

// export const useTimeAuto = () => { 
//     const appendZero = (obj) => obj < 10 ? "0" + obj : obj;

//     const date = useMemo(()=>{
// 		const now = new Date()
//         const day = now.getDay()
//         const week = weeks[day];
//         const arrs = [appendZero(now.getMonth() + 1), appendZero(now.getDate()), now.getFullYear()]
//         const date = arrs?.join('/');
//         return [date, week];
//     },[])

//     const timeout = useCallback((fn, delay, count = 1)  => {
//         let [timer,counts, stime] = [null, count, +new Date()]
//         const loop = () => {
//             const etime = +new Date();
//             if (stime + delay <= etime) {
//                 if(counts === 0){ return }
//                 if(counts > 0){ counts = Math.floor(counts) - 1 }
//                 fn();
//                 stime = +new Date();
//             }
//             timer = requestAnimationFrame(loop);
//         }
//         timer = requestAnimationFrame(loop);
//         return ()=> cancelAnimationFrame(timer);
//     },[])

// 	return [date, { timeout, appendZero }]
// }

// /**
//  * 缓存函数返回的结果
//  * 再次调用函数时参数一致直接返回结果
//  */
// export const useMemoize = (fn) => new Proxy(fn, {
//     caches: new Map(),
//     apply(target, arg, args) {
//         const cache = args.toString();
//         if (!this.caches.has(cache)){
//             this.caches.set(cache, target.apply(arg, args))
//         }
//         return this.caches.get(cache)
//     },
// })
 

// /**
//  *  缓存函数
//  *  再次调用函数保持函数引用不变 且能获取最新状态
//  */
// export const useMemoizedFn = (fn) =>{
//     const initFn = useRef(null); 
//     const memoFn = useRef(null); 
//     initFn.current = useMemo(() => fn, [fn]); 
//     if (!memoFn.current) {
//         memoFn.current = function (...args) {
//             return initFn.current.apply(this, args);
//         }
//     }
//     return memoFn.current;
// } 

 
// export const useFullscreen = ()=>{
//     const [isFullscreen, setIsFullscreen] = useState(false);
//     useEffect(() => {
//         const handleFullscreenChange = () => {
//           setIsFullscreen(!!document.fullscreenElement);
//         };
    
//         document.addEventListener('fullscreenchange', handleFullscreenChange);
    
//         return () => {
//           document.removeEventListener('fullscreenchange', handleFullscreenChange);
//         };
//     }, []);


//     const toggleFullscreen = () => {
//         if (isFullscreen) {
//           document.exitFullscreen();
//         } else {
//           document.documentElement.requestFullscreen();
//         }
//     };


//     return [isFullscreen, toggleFullscreen];
// }



export const useFindIcon = (args, deps = {})=>{
 
    return useMemoizedFn((...arg)=>{
        const index = args?.findIndex(k=> deps[k])
        const param = arg[index > 0 ? index : 0];
        return <i>{param}</i> 
    })
}