
import { memo } from "react";
import { classes } from '@/common/common' 
import { useMemoizedFn } from "@/common/hooks";
import './index.css'  

export default memo((props)=>{
    const onClick = useMemoizedFn((e)=>{
        e.stopPropagation();
        props?.onClick?.(e)
    });

    return (
        <button
            role={props.role}
            data-compact={props.compact || undefined}
            data-text={props.type === 'text' || undefined}
            data-disabled={props?.disabled || undefined}
            className={classes('btn-item', props.className) }
            onClick={onClick}
        >
            {props.children}
        </button>
    )
})