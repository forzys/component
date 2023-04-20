import { memo, useState } from "react";
 


import { Symbol } from '@/components/icons' 
import { useUpdate, useHover, useMemoizedFn, useCreation } from "@/common/hooks";
import Input from "@/components/input";
import Button from "@/components/button";

export default memo((props)=>{ 
    // const [hoverRef, hovered] = useHover()
    const [state, setState] = useState(false)

    const After = useCreation(()=>{
        return (
            <Button type="text" compact>
                {[<Symbol down color='rgba(0,0,0,0.25)' />, <Symbol close-o thems="rgba(0,0,0,0.45)" color="#fff" fontSize="13px" />].find((n, i)=> Number(state) === i) }
            </Button>
        )
    },[])
     
    return (
        <div onClick={(e)=> { e.stopPropagation(), setState(!state) }}>
            1
           <Input
                placeholder="2323"
                after={After}
                // value={state?.input || ''}
                // onChange={(e)=>setState({ input: e?.target?.value })}
            />
            rete324ereg
        </div>  
    )
})