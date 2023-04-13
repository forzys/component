




import React, { useMemo, useState } from "react"
import './index.css'

const Segmented = React.memo((props)=>{
    const [active, setActive] = useState(null)
   
    const segment = useMemo(()=>{ 
        return props.options?.map((i, j)=>{
            return (
                <label 
                    className={["segmented-item", i.value === active && 'segmented-item-selected segmented-motion-appear-active' ].join(' ')}
                    onClick={()=>{
                        setActive(i.value);
                        props.onChange()
                    }}
                >
                    <div>{i?.name}</div>
                </label> 
            )
        })
    },[props.options, active])

    return (
        <div className="segmented">
            <div className="segmented-group">
                {[segment]}
            </div> 
        </div>
    )
})

export default Segmented