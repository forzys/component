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


export default memo((_props)=>{ 
    // console.log({ a: 'HOME', props, player });
    console.log({ Markdown, TinyPlayer })
 
    const [https] = useFetch()
    const [state, setState, { navigate }] = useUpdate({ loading: true })

  
    useLayoutEffect(()=>{
        state.tp = new TinyPlayer({
            container: document.querySelector('#tiny-player'), // 挂载节点
            poster: 'https://tiny-player.vercel.app/movie.png', // 封面地址
            // controls: true, // 是否显示控制栏
            // loop: true, // 循环播放
            // volume: 0.9, // 音量
            // autoplay: false, // 自动播放
            // controlOptions: {
            //   playTime: true, // 是否显示播放时间
            //   volumeControl: true, // 是否显示音量控制条
            //   fullScreenControl: true, // 是否显示全屏按钮
            //   mountTarget: null, // 挂载目标节点
            //   nativeControls: false, // 是否使用原生控制条
            // },
            preload: 'metadata', // 预加载
            // src: 'https://tiny-player.vercel.app/movie.mp4', // 视频地址
            type: 'auto', // 视频类型
            waterMarkShow: true, // 是否显示水印
            // waterMarkUrl: 'https://assets.fedtop.com/picbed/202306091010648.png',
            // clipStart: 6, // 视频片段的开始时间
            // clipEnd: 12, // 视频片段的结束时间
            width: '80%', // 自定义宽度
            // height: '300px', // 自定义高度
            // "...":'...' // 开发中。。。
        });  
        // console.log({ tp  })
    },[])


    const onGetAnalysis = useCallback(async (url:string):Promise<any>=>{
        const data = await https.get(apis.analysis, { data: { url: url }})
  
        if(state.tp){
            state.analysis = data.data
            state.tp.options.poster = data.data.cover
            state.tp.options.src = data.data.url 
            state.tp.setup() 
        }

    },[])

    const onChange = useMemoizedFn(():any=>{
        const value = state.input
        const regex = /http[s]?:\/\/[\w.]+[\w\/]*[\w.]*\??[\w=&:\-\+\%]*[/]*/
        const [url] = value?.match(regex) || [];
    
        onGetAnalysis(url)
    });

    const onInput = useMemoizedFn((event: React.ChangeEvent<HTMLInputElement>):any=>{
        const value = event?.target?.value
        state.input = value
    })

    const onDownload = useMemoizedFn((event: React.ChangeEvent, info:any):any=>{
        console.log({ info })

        const download = (url: string)=>{ 
            let analysis_a = document.createElement('a')
            document.body.append(analysis_a)
            analysis_a.click();
            url && setTimeout(()=>{
                const newtab: any = window.open(url, '_blank', 'noopener=yes,noreferrer=yes')
                newtab.opener = null; 
            }, 200);
            analysis_a.remove() 
        }

        switch(info.type){
            case '1':
                download(state?.analysis?.url);
                break;
            case '2':
                download(state?.analysis?.cover);
                break;
            case '3':
                download(state?.analysis?.music?.url);
                break; 
        } 
    })
     
 
    return (
        <div className="content"> 
            <Stretch open={false} style={{ padding: 48, paddingTop: 24 }} className="frosted"> 
                <div style={{textAlign:'left', paddingBottom: 12, fontSize: 13}}> 
                    目前支持 皮皮虾/抖音/微视/快手/6间房/哔哩哔哩/微博/绿洲/度小视/开眼/陌陌/皮皮搞笑/全民k歌/逗拍/虎牙/新片场/哔哩哔哩/Acfun/美拍/西瓜视频/火山小视频/网易云Mlog/好看视频/QQ小世界
                    图集解析仅抖音/快手/微博/皮皮虾/最右/皮皮搞笑可用，哔哩哔哩/6间房/微博仅支持下载无法去除水印
                </div>
               
                <Input
                    placeholder="请粘贴分享链接" 
                    before={<Search fontSize="18px" search />} 
                    after={<Button type="text" compact onClick={onChange}>Search</Button>} 
                    wrapStyle={{ width: '80%', }}
                    style={{paddingRight: '4rem'}}
                    onChange={onInput}
                /> 

                <div style={{marginTop: 20}} />

                <div id="tiny-player" style={{maxHeight: 390}} />

                <Group style={{marginTop: 12}}>
                    <Button type='1' onClick={onDownload}>下载视频</Button>
                    <Button type='2' onClick={onDownload}>下载封面</Button>
                    <Button type='3' onClick={onDownload}>下载音频</Button>
                </Group>
               
            </Stretch>
          
        
        </div>
    )
})