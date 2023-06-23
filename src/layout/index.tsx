



import { useEffect, useState, CSSProperties,memo, useMemo } from 'react' 
import { Outlet } from "react-router-dom";
import Segment from '@/components/segment'
import { useUid, useActive, useObserver, useUpdate, useMemoizedFn } from '@/common/hooks' 
import './index.css'



type SegmentType = {
    label?: string | number
    value?: string | number
}
 

export default memo((props: any)=>{
    const [state, setState, { navigate }] = useUpdate({ loading: true })
 
    const onSegmentChange = useMemoizedFn((_:any, item: SegmentType)=>{
        // 页面跳转
        navigate('/' + item.value)
    });
   
    const init = useMemo(()=>location.pathname.replace('/', ''),[])

    return (
        <>
         <header className='header'> 
            <Segment 
                fontSize="0.8rem"
                init={init}
                options={[
                    {label: 'Video',     value: 'video'},
                    {label: 'Component',value: 'component'},
                    {label: 'Calendar',  value: 'calendar'},
                    {label: 'Theme',  value:'theme'},
                ]}
                onChange={onSegmentChange}
            />
        </header> 

        <Outlet />
        </>
       
    )
})