
 

import { memo } from 'react'
import { useFindIcon } from '@/common/hooks' 

export default memo((props)=>{
    const onFindIcon = useFindIcon(props)
    return onFindIcon({
        progress:[
            <circle cx="24" cy="24" r="22"  
                style={{ 
                    fill: 'transparent', 
                    strokeWidth:2,
                    stroke: '#1677ff',
                    strokeLinecap:'round',
                    strokeDasharray:'38px, 8',
                    strokeDashoffset: 180,
                }} 
            />,
        ],
        a:[
            <polygon points="50,38 41,50 59,50" 
                style={{
                    stroke: 'transparent',
                    fill: '#1677ff',
                    strokeWidth:1,
                    filter: 'blur(0.1px)',
                    transform: 'scale(1) translateY(5%)'
                }}
            />
        ]
    })
})