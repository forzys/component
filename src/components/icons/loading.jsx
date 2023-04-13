

import { useFindIcon  } from '@/common/hooks' 

export default (props)=>{

    const onFindIcon = useFindIcon(['1','2'], { [props.type] : true })
  
    return onFindIcon(
        <svg className='spinner-icon' width="36" height="36" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>, 

        <svg  viewBox="0 0 48 48"  fill="currentColor" width="36" height="36">
             <circle cx="24" cy="24" r="22" fill="none" stroke="#fff" stroke-dasharray="2, 15.28"  stroke-width="2" />
        </svg> 
    )
}