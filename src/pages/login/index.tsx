


import { CSSProperties, useEffect, useState } from 'react' 
import Timing from '@/components/timing' 
import Stretch from '@/components/stretch' 
import Progress from '@/components/icons/progress' 
import Screen from '@/components/icons/screen' 
import Search from '@/components/icons/search' 
import Weather from '@/components/icons/weather' 
import Loading from '@/components/icons/loading' 
import Symbol from '@/components/icons/symbol' 
import Official from '@/components/icons/official' 
import Configure from '@/components/icons/configure' 
import Media from '@/components/icons/media' 
import Spining from '@/components/spining' 
import Figure from '@/components/figure' 
// import Segmented from '@/components/segment' 
import { useMemoize, useMemoizedFn, useFullscreen, useCreation } from '@/common/hooks' 
import { useFetch, apis } from '@/request/index'



interface CustomCSS extends CSSProperties {
    '--status-color'?: string;
}

interface CustomState {
    // a?: number;
    loading?: boolean|number;
    name?: string;
    mode?: string|number|undefined;
    date?: string; 
    days?: string|number|null;
}

export default ()=>{
    const [http] = useFetch()
    const [isFull, onToggle] = useFullscreen()
    const [state, setState] = useState<CustomState>({ loading: true  })
    
    useEffect(()=>{ 
        const holiday = String(apis.holiday).replace('$var', '2023');
 
        http?.get(holiday).then((res: any)=>{
            const now = new Date().valueOf(); 
            const arrs = res?.days?.map((i: any)=> {
                const tamp = new Date(i?.date).valueOf();
                return {...i, diff: Math.abs(now - tamp)}
            }).sort((a:any, b:any)=>a.diff - b.diff)

            const days = arrs?.slice(0, 2)?.map((i:CustomState, index:number)=>[!!index && <span />, i?.name, i?.date])
            state.days = days
            return setState({ ...state,  days: days })
        });

        setTimeout(()=>{
            setState({ ...state,  loading: false })
        }, 3000)
    },[])

    const onChange = useMemoizedFn(()=>{
        console.log({ state })  
        // return state.a
    })

    const getNowData = () => {
        return Math.random()
    }

    const nowData = useCreation(() => getNowData(), []);

 
    const onModeChange =()=>{
        // 点击切换模式
        if(!!state.mode){
            document.body.classList.remove("dark-mode")
        } else{
            document.body.classList.add("dark-mode");
        } 
        state.mode = !!state.mode ? 0 : 1
    }

  
    return (
        <Stretch onChange={onChange} open={false} style={{ padding: 48 }} id="draw" className="frosted">
            <Spining loading={state?.loading}> 
                <div style={{display:'flex'}}>

                    <div style={{ width: 700, textAlign:'left' }}> 
                        <div>
                            <div>
                                <span className='badge-status' style={{ '--status-color': 'rgba(73, 227, 221, 1)'} as CustomCSS} />
                                <span> 当前日期 ： </span>
                                <Timing date />
                            </div> 
                        </div>
                        <div>
                            <span className='badge-status' style={{ '--status-color': '#1677ff'} as CustomCSS} />
                            <span> 当前时间 ： </span> 
                            <Timing time /> 
                        </div> 
                        <div>
                            <span className='badge-status' style={{ '--status-color': '#1677ff'} as CustomCSS} />
                            <span> 最近假期 ： </span> 
                            <span style={{display:'inline-flex', gap: 6}}> {[state.days] } </span> 
                        </div>
                

                        <div>正常的函数： {getNowData()}</div>
                        <div>useCreation包裹后的： {nowData}</div>
    
                        <div style={{ display:'flex', gap: 24, alignItems:'center'}}> 
                            <Loading type="1" /> 
                            <Loading type="2" /> 
                        </div>
                        <div style={{ display:'flex', gap: 24, alignItems:'center'}}> 
                            <Search search />
                            <Search find />
                            <Search history />
                            <Search zoomIn />
                            <Search zoomOut />
                        </div>

                        <div style={{ display:'flex', gap: 24, alignItems:'center'}}> 
                            <Symbol close />
                            <Symbol check  />
                            <Symbol  minus  />
                            <Symbol  plus  />  
                            <Symbol  exclamation  />  
                        </div>

                        <div style={{ display:'flex', gap: 24, alignItems:'center'}}> 
                            <Configure setting  /> 
                            <Configure pic  /> 
                            <Configure like  /> 
                            <Configure copy  /> 
                            <Configure  delete  /> 
                            <Configure  power  /> 
                            <Configure  application  /> 
                            <Configure  lock  /> 
                            <Configure  unlock  /> 
                        </div>

                        <div style={{ display:'flex', gap: 24, alignItems:'center'}}> 
                            <Official  email  /> 
                            <Official  schedule  />   
                            <Official  word  />   
                            <Official  split  />   
                            <Official  text  />   
                            <Official  focus  />   
                        </div>

                        <div style={{ display:'flex', gap: 24, alignItems:'center'}}> 
                            <div onClick={onModeChange}>
                                <Weather sun />
                            </div>  
                            <div onClick={onModeChange}>
                                <Weather moon />
                            </div>
                        </div>

                        <div style={{ display:'flex', gap: 24, alignItems:'center'}}> 
                            <Screen screen-full />  
                            <Screen screen-off />   
                            <Screen screenshot />   
                        </div>


                        <div style={{ display:'flex', gap: 24, alignItems:'center'}}> 
                            <Media voice-message />  
                            <Media broadcast />  
                            <Media camera />  
                            <Media pause />  
                            <Media play />  
                            <Media replay />  
                            <Media voice />  
                            <Media voice-off />  
                            <Media volumn />  
                            <Media volumn-down />  
                            <Media volumn-up />  
                            <Media volumn-mute />  
                            <Media video />
                        </div> 

                        <div className='spinner-ico2' style={{ display:'flex', gap: 24, alignItems:'center'}}>
                            
                            <Progress /> 
                    

                      
                        </div> 
                    </div>

                    <div>
                        <Figure img="https://image.zhangxinxu.com/image/study/nature/11.jpg" title="美女写真 by title cover" />
                    </div>
                    
                </div>
               
            </Spining> 
        </Stretch>  
    )
}