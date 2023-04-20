


import  { useState, useMemo, useRef, useEffect } from "react"
import useCreation from "./useUpdate";

export function useObserver() {
    const ids = useRef(0);
    const ref = useRef(null);
  
    const [rect, setRect] = useState({
        x: 0,
        y: 0,

        width: 0,
        height: 0,

        top: 0,
        bottom: 0,

        left: 0,
        right: 0, 
    });
  
    const observer = useCreation(() => {
        return new ResizeObserver((entries) => {
            const entry = entries[0];
            if (entry) {
                cancelAnimationFrame(ids.current);
                ids.current = requestAnimationFrame(() => ref.current && setRect(entry.contentRect));
            }
        }); 
    }, []);

    useEffect(() => {
        ref.current && observer.observe(ref.current);
        return () => {
            observer?.disconnect();
            ids.current && cancelAnimationFrame(ids.current);
        }
    }, [ref.current]);
  
    return useCreation(()=>[ref, rect],[rect]);
}
