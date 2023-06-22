



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
 
    const onSegmentChange = useMemoizedFn((item: SegmentType)=>{
        const pre = '/' 
        // const home = 'home'
        const value = pre + item.value 
        navigate(value)
    })

    console.log({ props })

    return (
        <>
         <header className='header'> 
            <Segment 
                fontSize="0.8rem"
                options={[
                    {label: 'Home',     value: 'home'},
                    {label: 'Component',value: 'component'},
                    {label: 'Wallpaper',  value: 'wallpaper'},
                ]}
                onChange={onSegmentChange}
            />
        </header> 

        <Outlet />
        </>
       
    )
})