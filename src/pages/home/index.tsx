import { memo, useLayoutEffect } from "react"; 
import Input from '@/components/input'
import Button from '@/components/button'
import { Search } from '@/components/icons' 
import Stretch from '@/components/stretch' 

import TinyPlayer from '@/assets/index.min.js'



export default memo((props)=>{ 
    // console.log({ a: 'HOME', props, player });
 
    useLayoutEffect(()=>{
        const tp = new TinyPlayer({
            container: document.querySelector('#tiny-player'), // 挂载节点
            poster: 'https://tiny-player.vercel.app/movie.png', // 封面地址
            controls: true, // 是否显示控制栏
            loop: true, // 循环播放
            volume: 0.9, // 音量
            autoplay: false, // 自动播放
            controlOptions: {
              playTime: true, // 是否显示播放时间
              volumeControl: true, // 是否显示音量控制条
              fullScreenControl: true, // 是否显示全屏按钮
              mountTarget: null, // 挂载目标节点
              nativeControls: false, // 是否使用原生控制条
            },
            preload: 'metadata', // 预加载
            src: 'https://tiny-player.vercel.app/movie.mp4', // 视频地址
            type: 'auto', // 视频类型
            waterMarkShow: true, // 是否显示水印
            waterMarkUrl: 'https://assets.fedtop.com/picbed/202306091010648.png',
            // clipStart: 6, // 视频片段的开始时间
            // clipEnd: 12, // 视频片段的结束时间
            width: '500px', // 自定义宽度
            // height: '300px', // 自定义高度
            // "...":'...' // 开发中。。。
        })

        console.log({ tp  })
    },[])
 
    return (
        <div className="content"> 
            <Stretch open={false} style={{ padding: 48 }} className="frosted"> 
                <Input
                    placeholder="请粘贴分享链接" 
                    before={<Search fontSize="18px" search />} 
                    after={
                        <Button type="text" compact>
                            Search
                        </Button>
                    } 
                    wrapStyle={{ width: '80%', }}
                    // value={state?.input || ''}
                    // onChange={(e: any)=>setState({ input: e?.target?.value })}
                /> 

                <div style={{marginTop: 20}}>
                    
                </div>

                <div id="tiny-player" />
            </Stretch>
          
        
        </div>
    )
})