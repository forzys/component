import { memo, useState } from 'react'
 
import { useMemoizedFn, useHover } from '@/common/hooks'
import './index.css' 
 
export default memo((props)=>{
    const [hoverRef, hovered] = useHover();
 
    return (
        <div className='card' style={props.style}> 
            <div className='card-header' style={props.headerStyle}>
                {props.title}
            </div>
            <div className='card-body' style={props.bodyStyle}>
                {props.children}
            </div> 
        </div>
    )
})