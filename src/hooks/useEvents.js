



import { useState, useEffect, useRef,useMemo, useCallback } from 'react';


export function useHover() {
    const ref = useRef(null);
    const [hovered, setHovered] = useState(false);
  
    const onMouseEnter = useCallback(() => setHovered(true), []);
    const onMouseLeave = useCallback(() => setHovered(false), []);

    useEffect(() => {
        if(ref.current) {
            ref.current.addEventListener('mouseenter', onMouseEnter);
            ref.current.addEventListener('mouseleave', onMouseLeave);

            return () => {
                ref.current?.removeEventListener('mouseenter', onMouseEnter);
                ref.current?.removeEventListener('mouseleave', onMouseLeave);
            };
        }
        return undefined;
    }, []);

    return [ref, hovered]
}

 


export const useClick = (sure)=>{
    const point = useRef(null);

    const id = useMemo(()=> Math.floor(Math.random() * 100000) ,[])

    const onGetClickPoint = useCallback((e) => {
        point.current = { x: e.pageX, y: e.pageY } 
        console.log(id, point.current)
        setTimeout(()=> point.current = null, 100);
    },[]);

    useEffect(()=>{
        !!sure && document.documentElement.addEventListener('click', onGetClickPoint, true);
        return ()=>{
            document.documentElement.removeEventListener('click', onGetClickPoint, true)
        };
    },[])

    return point.current
}



