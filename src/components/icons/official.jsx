

import { useFindIcon  } from '@/common/hooks' 

export default (props)=>{
    const onFindIcon = useFindIcon(['email','schedule','word','split', 'text','focus'], props)
  
    return onFindIcon(
        <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <path d="M4 39H44V24V9H24H4V24V39Z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
            <path d="M4 9L24 24L44 9" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M24 9H4V24" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M44 24V9H24" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
        </svg>,

        <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <rect x="4" y="10" width="40" height="30" rx="2" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M25 23L14 23" stroke="#fff" stroke-width="2" stroke-linecap="butt"/>
            <path d="M34 31L14 31" stroke="#fff" stroke-width="2" stroke-linecap="butt"/> 
            <path d="M14 6V14" stroke="#fff" stroke-width="2" stroke-linecap="butt"/>
            <path d="M34 6V14" stroke="#fff" stroke-width="2" stroke-linecap="butt"/>
        </svg>, 

        <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <rect x="6" y="6" width="36" height="36" rx="3" fill="none" stroke="#fff" stroke-width="2"/>
            <path d="M14 16L18 32L24 19L30 32L34 16" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
        </svg>,

        <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <path d="M19 10V7C19 5.89543 19.8954 5 21 5H41C42.1046 5 43 5.89543 43 7V29C43 30.1046 42.1046 31 41 31H37" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <rect x="5" y="18" width="24" height="24" rx="2" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
        </svg>, 

        <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <rect x="6" y="6" width="36" height="36" rx="3" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
            <path d="M16 19V16H32V19" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M22 34H26" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M24 18L24 34" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
        </svg>,

        <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
         
            <path d="M33 6H42V15" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M42 33V42H33" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M15 42H6V33" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M6 15V6H15" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            
            <rect x="14" y="14" width="20" height="20" rx="10" fill="none" stroke="#fff" stroke-width="2"/>
            <circle r="3" transform="matrix(-1 0 0 1 24 24)" fill="#fff"/>
        </svg>
    ) 
}