






import { useFindIcon  } from '@/common/hooks' 

export default (props)=>{
    const onFindIcon = useFindIcon(['voice-message','broadcast','camera','pause','play','replay','voice', 'voice-off','volumn','volumn-down','volumn-up','volumn-mute','video'], props)
  
    return onFindIcon( 
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
                <path d="M17 25.8994C18.1046 25.8994 19 25.004 19 23.8994C19 22.7948 18.1046 21.8994 17 21.8994C15.8954 21.8994 15 22.7948 15 23.8994C15 25.004 15.8954 25.8994 17 25.8994Z" fill="#fff"/>
                <path d="M21.9497 28.8492C23.2165 27.5825 24 25.8325 24 23.8995C24 21.9665 23.2165 20.2165 21.9497 18.9497" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
                <path d="M26.8994 33.799C29.4329 31.2655 30.9999 27.7655 30.9999 23.8995C30.9999 20.0335 29.4329 16.5335 26.8994 14" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            </svg>, 

            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="#fff" fill="none" stroke-width="2" stroke-linecap="round" stroke-dasharray="34.54" stroke-dashoffset="17.27" />
                <circle cx="24" cy="24" r="14" stroke="#fff" fill="none" stroke-width="2" stroke-linecap="round" stroke-dasharray="21.98" stroke-dashoffset="10.99" />
                <circle cx="24" cy="24" r="6" stroke="#fff" fill="none" stroke-width="2" stroke-linecap="round" stroke-dasharray="37.68" stroke-dashoffset="0" />
            </svg>, 
            
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <path d="M15 12L18 6H30L33 12H15Z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
                <rect x="4" y="12" width="40" height="30" rx="3" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
                <path d="M24 35C28.4183 35 32 31.4183 32 27C32 22.5817 28.4183 19 24 19C19.5817 19 16 22.5817 16 27C16 31.4183 19.5817 35 24 35Z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
            </svg>,

            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22"  stroke="#fff" stroke-width="2" stroke-linecap="round" />
                <path d="M19 18V30" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
                <path d="M29 18V30" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            </svg>,

            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22"  stroke="#fff" stroke-width="2" stroke-linecap="round" />
                <path d="M20 24V17.0718L26 20.5359L32 24L26 27.4641L20 30.9282V24Z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
            </svg>,

            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <path d="M21 24V18L26 21L31 24L26 27L21 30V24Z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
                <path d="M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.6141 12.9301 6 17 6 17" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
                <path d="M6 9V17H14" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            </svg>,

            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <rect x="17" y="4" width="14" height="27" rx="7" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
                <path d="M9 23C9 31.2843 15.7157 38 24 38C32.2843 38 39 31.2843 39 23" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
                <path d="M24 38V44" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            </svg>, 

            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <rect x="17" y="4" width="14" height="27" rx="7" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
                <path d="M9 23C9 31.2843 15.7157 38 24 38C25.7532 38 27.4361 37.6992 29 37.1465M39 23C39 25.1333 38.5547 27.1626 37.7519 29" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
                <path d="M24 38V44" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
                <path d="M42 42L6 6" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            </svg>,

            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <path d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
                <path d="M32 15L32 15C32.6232 15.5565 33.1881 16.1797 33.6841 16.8588C35.1387 18.8504 36 21.3223 36 24C36 26.6545 35.1535 29.1067 33.7218 31.0893C33.2168 31.7885 32.6391 32.4293 32 33" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            </svg>,

            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <path d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
                <path d="M32 24H44" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            </svg>, 

            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <path d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
                <path d="M32 24H44" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
                <path d="M38 18V30" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            </svg>,

            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <path d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
                <path d="M40.7348 20.2858L32.2495 28.7711" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
                <path d="M32.2496 20.2858L40.7349 28.7711" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            </svg>,

            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
                <path d="M20.5 28V21.9378L25.75 24.9689L31 28L25.75 31.0311L20.5 34.0622V28Z" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
                <path d="M6 15H42" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
                <path d="M33 6L27 15" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
                <path d="M21 6L15 15" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"/>
            </svg>

    ) 
}

