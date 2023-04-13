

import { useMemo, useRef } from "react";
/**
 * 缓存函数返回的结果
 * 再次调用函数时参数一致直接返回结果
 */
export const useMemoize = (fn) => new Proxy(fn, {
    caches: new Map(),
    apply(target, arg, args) {
        const cache = args.toString();
        if (!this.caches.has(cache)){
            this.caches.set(cache, target.apply(arg, args))
        }
        return this.caches.get(cache)
    },
})


/**
 *  缓存函数
 *  再次调用函数保持函数引用不变 且能获取最新状态
 */
export const useMemoizedFn = (fn) =>{
    const initFn = useRef(null); 
    const memoFn = useRef(null); 
    initFn.current = useMemo(() => fn, [fn]); 
    if (!memoFn.current) {
        memoFn.current = function (...args) {
            return initFn.current.apply(this, args);
        }
    }
    return memoFn.current;
}

export default useMemoize