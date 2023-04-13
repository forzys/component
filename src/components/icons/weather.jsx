

import { useFindIcon  } from '@/common/hooks' 

export default (props)=>{

    const onFindIcon = useFindIcon(['sun','moon'], props)
 
    // const [close, check, plus, minus] = [['M14 14L34 34','M14 34L34 14'],['M10 24L20 34L40 14'], ['M24.0605 10L24.0239 38', 'M10 24L38 24'], ['M10.5 24L38.5 24']]

    return onFindIcon(
        <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" fill="none" stroke="#fff" stroke-dasharray="2, 15.28"  stroke-width="3" />
            <circle cx="24" cy="24" r="15" fill="#fff" stroke="#fff" stroke-width="2" stroke-linecap="round" />
        </svg>,
 
        <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <path d="M16.8657 7.46924C16.3036 9.21181 16 11.0705 16 13C16 22.9411 24.0589 31 34 31C36.5346 31 38.9468 30.4762 41.1343 29.5308C38.8006 36.766 32.0116 42 24 42C14.0589 42 6 33.9411 6 24C6 16.5935 10.4734 10.2317 16.8657 7.46924Z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
            {/* <path d="M31.6605 1041L31 18H41" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/> */}
        </svg>,
 
    )

}