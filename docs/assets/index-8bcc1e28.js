import{r as z,u as d,a,j as i,L as E}from"./index-d6a55cd9.js";import{I as F,G as L,T as t}from"./index-d93a30a0.js";import{a as M,B as o}from"./media-aad8271b.js";import{u as Q}from"./useUpdate-cf567692.js";import{u as R,a as D,C as H}from"./index-39a06484.js";const O=z.memo(U=>{var y,u,h,m,b,g,f,k,w,x,C;const[A]=R(),[n,p]=Q({loading:!1}),B=z.useCallback(async e=>{p({loading:!0,analysis:{}});const s=(await A.get(D.analysis,{data:{url:e}})).data;p({analysis:s.data?s.data:s,loading:!1})},[]),G=d(()=>{const e=n.input||"",l=/http[s]?:\/\/[\w.]+[\w\/]*[\w.]*\??[\w=&:\-\+\%]*[/]*/,[s]=(e==null?void 0:e.match(l))||[];s&&B(s)}),I=d(e=>{var s;const l=(s=e==null?void 0:e.target)==null?void 0:s.value;n.input=l}),r=d((e,l)=>{var v,S,T,N;const s=j=>{let c=document.createElement("a");document.body.append(c),c.click(),j&&setTimeout(()=>{const _=window.open(j,"_blank","noopener=yes,noreferrer=yes");_.opener=null},200),c.remove()};switch(l.type){case"1":s((v=n==null?void 0:n.analysis)==null?void 0:v.url);break;case"2":s((S=n==null?void 0:n.analysis)==null?void 0:S.cover);break;case"3":s((N=(T=n==null?void 0:n.analysis)==null?void 0:T.music)==null?void 0:N.url);break}});return a("div",{className:"main",children:i(H,{title:"短视频去水印解析",children:[i("div",{style:{textAlign:"left",paddingBottom:12,fontSize:13},children:[a("span",{children:"目前支持 皮皮虾/抖音/微视/快手/6间房/哔哩哔哩/微博/绿洲/度小视/开眼/陌陌/皮皮搞笑/全民k歌/逗拍/虎牙/新片场/哔哩哔哩/Acfun/美拍/西瓜视频/火山小视频/网易云Mlog/好看视频/QQ小世界 图集解析仅抖音/快手/微博/皮皮虾/最右/皮皮搞笑可用，哔哩哔哩/6间房/微博仅支持下载无法去除水印"}),a("p",{style:{color:"red",fontWeight:600},children:"注意： 个人项目 请勿商用！！！"})]}),a(F,{placeholder:"请粘贴分享链接",before:a(M,{fontSize:"18px",search:!0}),after:n!=null&&n.loading?a(E,{className:"spinner-icon",type:"1"}):a(o,{type:"text",style:{borderRadius:0},onClick:G,children:"Search"}),wrapStyle:{width:"80%"},style:{paddingRight:"4rem"},onChange:I,afterClass:"btn-search"}),a("div",{style:{marginTop:20}}),a("div",{id:"tiny-player",style:{maxHeight:390}}),a("div",{className:"tips error",style:{display:(y=n==null?void 0:n.analysis)!=null&&y.msg?"block":"none"},children:(u=n==null?void 0:n.analysis)==null?void 0:u.msg}),a("div",{className:"tips success",style:{display:(h=n==null?void 0:n.analysis)!=null&&h.url?"block":"none"},children:"获取成功 点击下载"}),i(L,{style:{marginTop:12},children:[a(t,{disabled:!((m=n==null?void 0:n.analysis)!=null&&m.url),label:i("font12",{children:[" 获取成功 ",a("br",{})," 点击下载 "]}),children:a(o,{disabled:!((b=n==null?void 0:n.analysis)!=null&&b.url),type:"1",onClick:r,children:"下载视频"})}),a(t,{disabled:!((g=n==null?void 0:n.analysis)!=null&&g.cover),label:i("font12",{children:[" 获取成功 ",a("br",{})," 点击下载 "]}),children:a(o,{disabled:!((f=n==null?void 0:n.analysis)!=null&&f.cover),type:"2",onClick:r,children:"下载封面"})}),a(t,{disabled:!((w=(k=n==null?void 0:n.analysis)==null?void 0:k.music)!=null&&w.url),label:i("font12",{children:[" 获取成功 ",a("br",{})," 点击下载 "]}),children:a(o,{disabled:!((C=(x=n==null?void 0:n.analysis)==null?void 0:x.music)!=null&&C.url),type:"3",onClick:r,children:"下载音频"})})]})]})})});export{O as default};
