import { memo } from "react"; 
import { Symbol } from '@/components/icons' 
import { usePagination } from '@/common/hooks' 
import Button from '@/components/button'
import './index.css' 


export default memo((props)=>{
    const pagination = usePagination({ total: props.total })
    return (
        <div className="pagination-group" data-disabled={props.disabled} onClick={e=> e?.stopPropagation()}> 
            <Button disabled={pagination.active <= 1} onClick={()=>pagination.prev()}>
                <Symbol back-left strokeWidth="3" color='#000' thems="#fff" />
            </Button>
            {
                pagination?.range?.map((item, index)=>{
                    if(item === 'dots'){
                        return (
                            <div key={'dot'+index} className="pagination-dots">
                                <Symbol more  thems="#000" color="#000" />
                            </div>
                        ) 
                    }
                    return (
                        <Button key={'page'+item}  className={pagination.active === item && 'active'} onClick={()=>pagination.page(item)}>
                            <span> {item} </span>
                        </Button>
                    )
                })
            }
            <Button disabled={pagination.active === props.total} onClick={()=>pagination.next()}>
                <Symbol back-right strokeWidth="3" color ='#000'   />
            </Button>
             
        </div>
    )
})