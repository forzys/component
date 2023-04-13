





import { useRef, useLayoutEffect } from 'react'
 
  
export default (props) => {
    const [baseWidth, baseHeight] = [960, 540]
    const [draw, drawing, ref] = [useRef(null), useRef(null), useRef(props.onChange)];
	 
    const onRateChange = () => {
        if(draw?.current) {
            const baseRate = parseFloat((baseWidth / baseHeight).toFixed(5));
            const initRate = parseFloat((window?.innerWidth / window?.innerHeight)?.toFixed(5));
            const scale = {}
            if (initRate > baseRate) {
                scale.width  = ((window?.innerHeight * baseRate) / baseWidth).toFixed(5)
                scale.height = (window?.innerHeight / baseHeight).toFixed(5)
                draw.current.style.transform = `scale(${scale?.width}, ${scale?.height}) translate(-50%, -50%)`
            } else {
                scale.height = ((window?.innerWidth / baseRate) / baseHeight).toFixed(5)
                scale.width  = (window?.innerWidth / baseWidth).toFixed(5)
                draw.current.style.transform = `scale(${scale?.width}, ${scale?.height}) translate(-50%, -50%)`
            }
        }
    }

    const resize = () => {
        clearTimeout(drawing?.current);
        drawing.current = setTimeout(onRateChange, 200)
    }

    useLayoutEffect(()=>{
        if(props.open !== false){
            onRateChange();
            window.addEventListener('resize', resize);
        }
        return ()=> window.removeEventListener('resize', resize)
    },[props.open])

    console.log({ props, TEST: Object.is(ref.current, props.onChange) })


    return (
        <div id={props?.id} onClick={props.onChange} className={props?.className} ref={draw} style={{ width: baseWidth, height: baseHeight, ...props?.style }}>
            {props?.children}
        </div>
    )
}
  