import{r as a,u as A,c as Z,d as _,j as u,o as U,a as e,e as H,L as F,R as Y,S as q}from"./index-d47d5f8f.js";import{B as x,S,M as f,C as b,D as v,I as $,u as J,a as K,b as X,G as y,c as T,O as D,W as I,d as L}from"./apis-aed9e273.js";import{S as O}from"./index-7bb045d6.js";import{a as Q,u as z,b as ee}from"./useUpdate-79dd3dc7.js";function te(){const[t,l]=a.useState(!1);return a.useEffect(()=>{const n=()=>{l(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",n),()=>{document.removeEventListener("fullscreenchange",n)}},[]),[t,()=>{t?document.exitFullscreen():document.documentElement.requestFullscreen()}]}function j(){const t=a.useRef(null),[l,o]=a.useState(!1),n=a.useCallback(()=>o(!0),[]),r=a.useCallback(()=>o(!1),[]);return a.useEffect(()=>{if(t.current)return t.current.addEventListener("mouseenter",n),t.current.addEventListener("mouseleave",r),()=>{var i,d;(i=t.current)==null||i.removeEventListener("mouseenter",n),(d=t.current)==null||d.removeEventListener("mouseleave",r)}},[]),[t,l]}function ne(t){const l=a.useRef(null),o=a.useRef(null),n=a.useMemo(()=>Math.floor(Math.random()*1e5),[]);return a.useEffect(()=>{const r=i=>{o.current={x:i.pageX,y:i.pageY},console.log(n,o.current),setTimeout(()=>o.current=null,100)};return document.documentElement.addEventListener("click",r,!0),()=>{document.documentElement.removeEventListener("click",r,!0)}},[l.current]),o.current}function G(t){const{total:l,siblings:o=1,boundaries:n=1,page:r,init:i=1,onChange:d}=t,[c,p]=a.useMemo(()=>[Math.max(Math.trunc(l),0),"dots"],[l]),[g,N]=Q({value:r,onChange:d,init:i,final:i}),h=A((s,m)=>{const k=m-s+1;return Array.from({length:k},(M,R)=>R+s)}),E=a.useMemo(()=>{const s=m=>{m<=0&&N(1),m>c&&N(c),m<=c&&m>0&&N(m)};return{page:s,first:()=>s(1),last:()=>s(c),next:()=>s(g+1),prev:()=>s(g-1)}},[c,g]);return{range:a.useMemo(()=>{if(o*2+3+n*2>=c)return h(1,c);const m=Math.max(g-o,n),k=Math.min(g+o,c-n),M=m>n+2,R=k<c-(n+1);if(!M&&R){const B=o*2+n+2;return[...h(1,B),p,...h(c-(n-1),c)]}if(M&&!R){const B=n+1+2*o;return[...h(1,n),p,...h(c-B,c)]}return[...h(1,n),p,...h(m,k),p,...h(c-n+1,c)]},[c,o,g]),active:g,...E}}const W=a.memo(t=>{const[l,o]=Z(),[n,r]=a.useState("");return a.useLayoutEffect(()=>{const i=o.timeout(()=>{const[d,c]=[new Date,o==null?void 0:o.appendZero];r(c(d.getHours())+":"+c(d.getMinutes())+":"+c(d.getSeconds()))},1e3,-1);return()=>i()},[o]),t!=null&&t.time?n:l==null?void 0:l.join("  | ")});function V(t){const l=a.useRef(),[o,n]=a.useState(!1);return a.useLayoutEffect(()=>(n(!0),l.current=t.target?typeof t.target=="string"?document.querySelector(target):target:document.createElement("div"),!t.target&&document.body.appendChild(l.current),()=>!t.target&&document.body.removeChild(l==null?void 0:l.current)),[t.target]),o?_.createPortal(u("div",{className:t.className,ref:t.innerRef,children:[" ",t.children," "]}),l.current):null}const le=a.memo(t=>{var d;const[l,o]=a.useState(!1),n=a.useRef({}),r=a.useRef(null),i=ne();return a.useLayoutEffect(()=>{if(!t.open&&l&&setTimeout(()=>{n.current.transform=null,o(!1)},250),t.open&&!l){const c=U(r.current);n.current.transform=i?`${(i==null?void 0:i.x)-c.left/1.4}px ${(i==null?void 0:i.y)-c.top/3}px`:"50% 50%",o(!0)}},[t.open,l]),e(V,{children:u("div",{className:"modal-root",children:[t.open&&e("div",{className:"modal-mask"}),e("div",{className:"modal-wrap",style:{display:t.open||l?void 0:"none"},onClick:t.onClose,children:e("div",{role:"dialog",ref:r,className:H("dialog",t.open?"fade-appear":"fade-leave"),style:{transformOrigin:(d=n==null?void 0:n.current)==null?void 0:d.transform},children:u("div",{className:"modal-content",onClick:c=>c==null?void 0:c.stopPropagation(),children:[u(x,{className:"modal-close",onClick:t.onClose,children:[" ",e(S,{close:!0})," "]}),e("div",{className:"modal-header",children:e("div",{className:"modal-title",children:"Image title"})}),e("div",{className:"modal-body",children:e("img",{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",style:{width:"100%"}})}),e("div",{className:"modal-footer"})]})})})]})})});const re=a.memo(t=>{const[l,o]=a.useState(!1),n=A(r=>{o(!!r)});return u("figure",{children:[e("span",{children:e("img",{src:[t==null?void 0:t.img,t.src]})}),u("figcaption",{style:{fontSize:16,padding:"0 6px"},children:[e(f,{picture:!0}),e("span",{className:"name",children:"image"}),e("span",{className:"info",children:[t==null?void 0:t.title,t.children]}),e(b,{onClick:n.bind(null,!0),expand:!0,fontSize:"18px",strokeWidth:"3",style:{cursor:"pointer"}})]}),e(le,{open:l,onClose:n.bind(null,!1)})]})});const oe=a.memo(t=>{const[l,o]=a.useState(t.init),n=a.useCallback(r=>{var i,d,c;r.stopPropagation(),t.disabled||((i=t.onChange)==null||i.call(t,!l),(d=t.onSwitch)==null||d.call(t,!l),(c=t.onChecked)==null||c.call(t,!l),o(!l))},[l,t.disabled]);return u("button",{role:"switch",onClick:n,"data-disabled":t.disabled,className:H("btn-switch",l&&"switch-checked"),children:[e("div",{className:"switch-handle",children:e("span",{className:"action",children:e(F,{className:"spinner-icon",type:"1",fontSize:"14px",color:"#1677ff"})})}),u("div",{className:"switch-inner",children:[e("span",{className:"inner-checked",children:"1"}),e("span",{className:"inner-uncheck",children:"0"})]})]})});const ae=a.memo(t=>{const[l,o]=z({}),[n,r]=j(),i=a.useRef(null),d=a.useRef(null);a.useLayoutEffect(()=>{if(n.current&&r&&!t.disabled){const p=n.current,g=i.current,N=p.getBoundingClientRect(),h=g.getBoundingClientRect(),E=p.offsetWidth/N.width,C=g.offsetWidth/h.width,s=N.width*E||0,m=h.width*C||0,k=4;o({opacity:1,hovered:!0,top:p.offsetTop-h.height-k,left:p.offsetLeft+s/2-m/2})}n.current&&!r&&!t.disabled&&(o({opacity:0}),d.current&&clearTimeout(d.current),d.current=setTimeout(()=>{o({hovered:!1})},300))},[r,t.disabled]);const c=a.useMemo(()=>({transitionProperty:"opacity",transitionDuration:"250ms",transitionTimingFunction:"ease",opacity:l.opacity,top:l.top,left:l.left,zIndex:300}),[l]);return u(Y.Fragment,{children:[e("span",{ref:n,children:t.children}),!t.disabled&&!!(r||l.hovered)&&e("div",{ref:i,className:"tooltip",style:c,children:t.label})]})});const ie=a.memo(t=>{var o;const l=G({total:t.total});return u("div",{className:"pagination-group","data-disabled":t.disabled,onClick:n=>n==null?void 0:n.stopPropagation(),children:[e(x,{disabled:l.active<=1,onClick:()=>l.prev(),children:e(v,{left:!0,strokeWidth:"3",color:"#000",thems:"#fff"})}),(o=l==null?void 0:l.range)==null?void 0:o.map((n,r)=>n==="dots"?e("div",{className:"pagination-dots",children:e(S,{more:!0,thems:"#000",color:"#000"})},"dot"+r):e(x,{className:l.active===n&&"active",onClick:()=>l.page(n),children:u("span",{children:[" ",n," "]})},"page"+n)),e(x,{disabled:l.active===t.total,onClick:()=>l.next(),children:e(v,{right:!0,strokeWidth:"3",color:"#000"})})]})});const ce=a.memo(t=>{var C;const[l,o]=j(),[n,r]=z({}),[i,d]=z({}),c=a.useRef(null),p=A(()=>{if(o&&t.clearable)return console.log("clear");console.log("open")});a.useLayoutEffect(()=>{if(l.current&&(n!=null&&n.open)&&!t.disabled){const m=l.current.getBoundingClientRect(),k=4;d({opacity:1,hovered:!0,width:m.width-4,top:m.top+m.height+k,left:m.left+2})}return l.current&&!n.open&&!t.disabled&&(d({opacity:0}),c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{d({hovered:!1})},300)),()=>{n.timer&&clearTimeout(n.timer)}},[n==null?void 0:n.open,t.disabled]);const g=A(()=>{console.log("open",l.current),r({open:!n.open})}),N=()=>{n.open&&r({open:!1})},h=A(s=>{console.log("click",s),r({active:s.label})}),E=a.useMemo(()=>({transitionProperty:"all",transitionDuration:"350ms",transitionTimingFunction:"ease",opacity:i.opacity,transform:i.opacity?"scaleY(1)":"scaleY(0.8)",transformOrigin:"0% 0%",overflow:"hidden",zIndex:300,width:i.width,top:i.top,left:i.left}),[i]);return console.log("HOVERD:",o),u("div",{onClick:s=>s.stopPropagation(),ref:l,children:[e($,{placeholder:"please select",type:"search",after:e(x,{type:"text",compact:!0,onClick:p,children:o&&t.clearable?e(S,{"close-o":!0,thems:"rgba(0,0,0,0.45)",color:"#ccc",fontSize:"13px"}):e(S,{down:!0,color:"rgba(0,0,0,0.25)"})}),readOnly:!0,inputClass:"select-input",onBlur:N,open:(n==null?void 0:n.open)||void 0,onClick:g,value:(n==null?void 0:n.active)||""}),e(V,{children:e("div",{className:"select-dropdown",style:{display:n!=null&&n.open||i!=null&&i.hovered?"block":"none",...E},children:e("div",{style:{maxHeight:"13rem",display:"flex"},children:u("div",{style:{position:"relative",width:"100%",flex:1},children:[e("style",{children:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}),e("div",{className:"select-box","data-radix-scroll-area-viewport":!0,style:{overflow:"scroll"},children:e("div",{style:{display:"table",minWidth:"100%"},children:e("div",{style:{display:"flex",width:"100%",flexDirection:"column",padding:"0.25rem"},children:(C=t.option)==null?void 0:C.map(s=>{var m;return e("div",{className:"select-item","data-disabled":s.disabled||void 0,"data-active":((m=String(n.active))==null?void 0:m.includes(s.value))||void 0,onClick:s.disabled?void 0:h.bind(null,s),children:e("span",{children:s.label})},s.value||s.label)})})})})]})})})})]})}),he=a.memo(t=>{const[l]=J(),[o,n]=te(),[r,i,{navigate:d}]=z({loading:!0}),c=G({total:20,init:1});a.useEffect(()=>{const C=String(K.holiday).replace("$var","2023");l==null||l.get(C).then(s=>{var R,B;const m=new Date().valueOf(),k=(R=s==null?void 0:s.days)==null?void 0:R.map(w=>{const P=new Date(w==null?void 0:w.date).valueOf();return{...w,diff:Math.abs(m-P)}}).sort((w,P)=>w.diff-P.diff),M=(B=k==null?void 0:k.slice(0,2))==null?void 0:B.map((w,P)=>[!!P&&e("span",{},P),w==null?void 0:w.name,w==null?void 0:w.date]);return r.days=M,i({...r,days:M})}),setTimeout(()=>{i({...r,loading:!1})},3e3)},[]);const p=A(()=>{console.log({state:r})}),g=()=>Math.random(),N=ee(()=>g(),[]),h=()=>{c.next(),r.mode?document.body.classList.remove("dark-mode"):document.body.classList.add("dark-mode"),r.mode=r.mode?0:1},E=()=>{d("/summary"),console.log({props:t,navigate:d})};return console.log("First:::",r),e(X,{onChange:p,open:!1,style:{padding:48},id:"draw",className:"frosted",children:e(q,{loading:r==null?void 0:r.loading,children:u("div",{style:{display:"flex"},children:[u("div",{style:{width:700,textAlign:"left"},children:[e("div",{children:u("div",{children:[e("span",{className:"badge-status",style:{"--status-color":"rgba(73, 227, 221, 1)"}}),e("span",{children:" 当前日期 ： "}),e(W,{date:!0})]})}),u("div",{children:[e("span",{className:"badge-status",style:{"--status-color":"#1677ff"}}),e("span",{children:" 当前时间 ： "}),e(W,{time:!0})]}),u("div",{children:[e("span",{className:"badge-status",style:{"--status-color":"#1677ff"}}),e("span",{children:" 最近假期 ： "}),u("span",{style:{display:"inline-flex",gap:6},children:[" ",[r.days]," "]})]}),u("div",{children:["正常的函数： ",g()]}),u("div",{children:["useCreation包裹后的： ",N]}),u(y,{style:{marginBottom:24},children:[e(oe,{}),e(O,{fontSize:"0.5rem",options:[{label:"apple",value:"apple"},{label:"funct",value:"funct",disabled:!0},{label:"badge",value:"badge"},{label:"statu",value:"statu"},{label:"align",value:"align"}]}),e(ae,{label:u("div",{children:[" Hello ",e("br",{})," Hover "]}),children:e(x,{children:"Hello Hover"})})]}),e(y,{style:{marginBottom:24},children:e(ie,{total:12})}),u(y,{style:{marginBottom:24},children:[e($,{placeholder:"2323",before:[e(O,{fontSize:"0.1rem",options:["apple","funct"]}),e(T,{fontSize:"18px",search:!0})].find((C,s)=>+((r==null?void 0:r.inputType)==="segment")===s),after:e(x,{type:"text",compact:!0,onClick:()=>i({inputType:(r==null?void 0:r.inputType)==="segment"?"search":"segment"}),children:["Search","Segment"].find((C,s)=>+((r==null?void 0:r.inputType)==="segment")===s)}),value:(r==null?void 0:r.input)||"",onChange:C=>{var s;return i({input:(s=C==null?void 0:C.target)==null?void 0:s.value})}}),e(ce,{clearable:!0,option:[{label:"list1",value:"list1"},{label:"list2",value:"list2",disabled:1},{label:"list3",value:"list3"},{label:"list4",value:"list4",disabled:1},{label:"list5",value:"list5"},{label:"list6",value:"list6"},{label:"list7",value:"list7"}]})]}),u(y,{children:[e(F,{className:"spinner-icon",type:"1"}),e(F,{type:"3",className:"spinner-zoom"}),e(F,{type:"2",className:"spinner-icon2 ",fontSize:"22px"})]}),u(y,{children:[e(T,{search:!0}),e(T,{find:!0}),e(T,{history:!0}),e(T,{zoomIn:!0}),e(T,{zoomOut:!0})]}),u(y,{children:[e(S,{close:!0}),e(S,{"close-o":!0}),e(S,{check:!0}),e(S,{minus:!0}),e(S,{plus:!0}),e(S,{exclamation:!0}),e(S,{more:!0})]}),u(y,{children:[e(b,{system:!0}),e(b,{setting:!0}),e(b,{like:!0}),e(b,{tips:!0}),e(b,{copy:!0}),e(b,{delete:!0}),e(b,{power:!0}),e(b,{application:!0}),e(b,{lock:!0}),e(b,{unlock:!0}),e(b,{expand:!0}),e(b,{scanning:!0}),e(b,{wifi:!0})]}),u(y,{children:[e(D,{email:!0}),e(D,{schedule:!0}),e(D,{word:!0}),e(D,{text:!0}),e(D,{log:!0}),e(D,{notes:!0}),e(D,{label:!0})]}),u(y,{children:[e("div",{onClick:h,children:e(I,{sun:!0})}),e("div",{onClick:h,children:e(I,{moon:!0})}),e("div",{style:{position:"relative"},children:e(I,{plan:!0})})]}),u(y,{children:[e(y,{onClick:n,children:o?e(L,{"screen-off":!0}):e(L,{"screen-full":!0})}),e(L,{screenshot:!0}),e(L,{focus:!0})]}),u(y,{children:[e(f,{picture:!0}),e(f,{album:!0}),e(f,{"voice-message":!0}),e(f,{broadcast:!0}),e(f,{camera:!0}),e(f,{pause:!0}),e(f,{play:!0}),e(f,{replay:!0}),e(f,{voice:!0}),e(f,{"voice-off":!0}),e(f,{volumn:!0}),e(f,{"volumn-down":!0}),e(f,{"volumn-up":!0}),e(f,{"volumn-mute":!0}),e(f,{video:!0})]}),u(y,{children:[e(v,{ring:!0}),e(v,{"caret-up":!0}),e(v,{"caret-down":!0}),e(v,{"caret-left":!0}),e(v,{"caret-right":!0}),e(v,{"arraw-left":!0}),e(v,{"arraw-right":!0}),e(v,{"arraw-down":!0}),e(v,{"arraw-up":!0}),e(v,{left:!0}),e(v,{right:!0}),e(v,{up:!0}),e(v,{down:!0})]})]}),u("div",{children:[e(re,{title:"774×1186 131 KB",img:"https://t8.baidu.com/it/u=3297273922,3348521994&fm=218&app=126&size=f242,150&n=0&f=JPEG&fmt=auto?s=BA81A14C8BA0BD4308F5D10B0000E0C1&sec=1681491600&t=0a363ddbfcfc830e10038a0ed04be108"}),u(y,{children:[e(x,{onClick:E,children:" Go to Summary"}),e(x,{type:"text",children:" AAAA"}),e(x,{type:"primary",children:" BBBB"}),e(x,{type:"danger",children:" CCCC"}),e(x,{type:"primary",outline:!0,children:" BBBB"}),e(x,{type:"danger",outline:!0,children:" CCCC"})]})]})]})})})});export{he as default};
