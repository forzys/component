



import { useMemo, useCallback } from "react";

const weeks = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
 
export const useTimeAuto = () => { 
    const appendZero = (obj) => obj < 10 ? "0" + obj : obj;

    const date = useMemo(()=>{
		const now = new Date()
        const day = now.getDay()
        const week = weeks[day];
        const arrs = [appendZero(now.getMonth() + 1), appendZero(now.getDate()), now.getFullYear()]
        const date = arrs?.join('/');
        return [date, week];
    },[])

    const timeout = useCallback((fn, delay, count = 1)  => {
        let [timer,counts, stime] = [null, count, +new Date()]
        const loop = () => {
            const etime = +new Date();
            if (stime + delay <= etime) {
                if(counts === 0){ return cancelAnimationFrame(timer) }
                if(counts > 0){ counts = Math.floor(counts) - 1 }
                fn();
                stime = +new Date();
            }
            timer = requestAnimationFrame(loop);
        }
        timer = requestAnimationFrame(loop);
        return ()=> cancelAnimationFrame(timer);
    },[])

	return [date, { timeout, appendZero }]
}

export default useTimeAuto