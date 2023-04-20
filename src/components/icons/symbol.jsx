
import { memo } from 'react' 
import { useFindIcon  } from '@/common/hooks' 

export default memo((props)=>{

    const onFindIcon = useFindIcon(props)
 
    return onFindIcon({ 
            close:[
                <path d="M14 14L34 34"  />,
                <path d="M14 34L34 14" /> 
            ],

            'close-o':[
                <circle cx="24" cy="24" r="22" />,
                <path d="M29.6567 18.3432L18.343 29.6569" />,
                <path d="M18.3433 18.3432L29.657 29.6569" />
            ],
            check:[
                <circle cx="24" cy="24" r="22" />,
                <path d="M16 24L22 30L34 18" />,
            ],
            minus:[
                <circle cx="24" cy="24" r="22" />,
                <path d="M16 24L32 24" />,
            ],
            plus:[
                <circle cx="24" cy="24" r="22" />,
                <path d="M24 16V32" />,
                <path d="M16 24L32 24"  />,
            ],
            exclamation:[
                <circle cx="24" cy="24" r="22" />,
                <path d="M24 12V26" />,
                <circle r="2" transform="translate(24, 34)" fill="#fff"/>,
            ],
        
            'arraw-left':[
                <path d="M5.79889 24H41.7989" />,
                <path d="M17.7988 36L5.79883 24L17.7988 12" />
            ],
            'arraw-right':[
                <path d="M41.9999 24H5.99994" />,
                <path d="M30 12L42 24L30 36" />
            ],
            'back-left':[
                <path d="M31 36L19 24L31 12" />
            ],
            'back-right':[ 
                <path d="M19 12L31 24L19 36" />
            ],
            down:[
                <path d="M36 18L24 30L12 18" />
            ],
            up:[
                <path d="M13 30L25 18L37 30"/>
            ], 
            more: [
                <circle cx="12" cy="24" r="3" />,
                <circle cx="24" cy="24" r="3" />,
                <circle cx="36" cy="24" r="3" />,
            ],
        }   
    )
})