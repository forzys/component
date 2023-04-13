
import { useFindIcon  } from '@/common/hooks' 
 
export default (props)=> {
    const onFindIcon = useFindIcon(['screen-full', 'screen-off', 'screenshot'], props)
  
    return onFindIcon(
        <svg className="spinner-icon" width="36" height="36" viewBox="0 0 48 48" fill="none"> 
            <path d="M33 6H42V15" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M42 33V42H33" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M15 42H6V33" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M6 15V6H15" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
        </svg>,
        <svg className="spinner-icon" width="36" height="36" viewBox="0 0 48 48" fill="none">
            <path d="M33 6V15H42" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M15 6V15H6" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M15 42V33H6" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M33 42V33H41.8995" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
        </svg>,
        <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <path d="M16 6H8C6.89543 6 6 6.89543 6 8V16" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M16 42H8C6.89543 42 6 41.1046 6 40V32" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M32 42H40C41.1046 42 42 41.1046 42 40V32" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M32 6H40C41.1046 6 42 6.89543 42 8V16" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <rect x="14" y="14" width="20" height="20" rx="2" fill="none" stroke="#fff" stroke-width="2"/>
        </svg>,
        <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <path d="M4 18.9653C4.5888 18.4073 5.19522 17.8786 5.8174 17.3792C17.0371 8.37423 33.3821 8.90292 44 18.9653" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M38 25.799C30.268 18.067 17.732 18.067 10 25.799" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path d="M32 32.3137C27.5817 27.8954 20.4183 27.8954 16 32.3137" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C25.3807 40 26.5 38.8807 26.5 37.5C26.5 36.1193 25.3807 35 24 35C22.6193 35 21.5 36.1193 21.5 37.5C21.5 38.8807 22.6193 40 24 40Z" fill="#fff"/>
        </svg>,

    )


    
}




