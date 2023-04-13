

import { useFindIcon  } from '@/common/hooks' 

export default (props)=>{

    const onFindIcon = useFindIcon(['close', 'check', 'minus', 'plus', 'exclamation'], props)
 
    return onFindIcon(
        <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            { [<circle cx="24" cy="24" r="22" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" />] }
            <path d="M29.6567 18.3432L18.343 29.6569" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M18.3433 18.3432L29.657 29.6569" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
        </svg>, 
  
        <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" />
            <path d="M16 24L22 30L34 18" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/> 
        </svg>,

        <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" />
            <path d="M16 24L32 24" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
        </svg>,

        <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" />
            <path d="M24 16V32" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M16 24L32 24" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
        </svg>, 

        <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" />
            <path d="M24 12V26" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <circle r="2" transform="translate(24, 34)" fill="#fff"/>
        </svg>,


        
    )
}