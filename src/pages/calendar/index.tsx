 
import { memo, useCallback, useLayoutEffect } from "react"; 
import Input from '@/components/input'
import Button from '@/components/button'
import { Search } from '@/components/icons' 
import Stretch from '@/components/stretch' 

import TinyPlayer from '@/assets/TinyPlayer'
import Markdown from '@/assets/Markdown'
import { useMemoizedFn, useFullScreen, useCreation, usePagination, useUpdate } from '@/common/hooks' 
import { useFetch, apis } from '@/request/index'
import Group from "@/components/group";
import Tooltip from '@/components/tooltip'
import Card from "@/components/card";
import './index.css'



export default memo((props)=>{
    const [https] = useFetch()
    const [state, setState, { navigate }] = useUpdate({ loading: true })

  
    useLayoutEffect(()=>{
        // state.tp = new TinyPlayer({
        //     // container: document.querySelector('#tiny-player'), // 挂载节点
        //     poster: 'https://tiny-player.vercel.app/movie.png', // 封面地址 
        //     preload: 'metadata', // 预加载 
        //     type: 'auto', // 视频类型
        //     waterMarkShow: true, // 是否显示水印 
        //     width: '80%', // 自定义宽度 
        // });

        const holiday = String(apis.holiday).replace('$var', '2023');

        https?.get(holiday).then((res: any)=>{
            const days = res?.days?.reduce((summ:any, item:any)=>{ 
                summ[item.name] = summ[item.name] || [];
                
                if(item.isOffDay){
                    summ[item.name].push(item.date)
                }
                return summ 
            },{});

            setState({ days, holiday: Object.keys(days) }) 
        }); 

    },[])
    return (
        <div className="main"> 
           <Card style={{paddingBottom:0}} bodyStyle={{padding: 0}}> 
                <div className="holiday-header" style={{ paddingBottom: 12}}> 
                    <span style={{fontSize: 16}}>放假安排</span>
                    <div style={{fontSize: 12}}>国务院公布的全年法定节假日安排</div> 
                </div>
                
                <Card style={{margin: 0, paddingTop: 0}} bodyStyle={{padding: 12, paddingBottom: 0}}> 
                    <div>
                        {
                            state?.holiday?.map((name: string)=>{
                                const current = state?.days[name] 
                                const length = current?.length
                                const first = current[0]
                                const last =  current[length - 1]
    
                                return (
                                    <p className="holiday-row" key={first+last}>
                                        <span style={{flex: 1}}>{name}</span>
                                        <span style={{flex: 2}}>{first} - {last}</span>
                                        <span style={{flex: 1}}>{length}</span>
                                    </p>
                                )
                            })
                        }
                    </div>
                </Card> 
            </Card>
        
        </div>
    )
})