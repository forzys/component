import{r as s,f as S,a as o,j as A}from"./index-8c235a32.js";import{b as $,a as P}from"./useUpdate-c9de0b2a.js";function j(){const e=s.useRef(0),t=s.useRef(null),[i,c]=s.useState({x:0,y:0,width:0,height:0,top:0,bottom:0,left:0,right:0}),u=s.useMemo(()=>new ResizeObserver(f=>{const r=f[0];r&&(cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>t.current&&c(r.contentRect)))}),[]);return s.useEffect(()=>(t.current&&u.observe(t.current),()=>{u==null||u.disconnect(),e.current&&cancelAnimationFrame(e.current)}),[t.current]),[t,i]}const F=e=>{var i;const[t]=e;return Array.isArray(e)?((i=e.find(c=>!c.disabled))==null?void 0:i.value)??(t==null?void 0:t.value)??t??null:null},D=s.memo(e=>{var y;const[t,i]=s.useState({width:0,height:0,translate:[0,0]}),[c,u]=$({init:e.init||F(e.options),value:e.value,onChange:e.onChange}),[f,r]=s.useState(!1),[g,b]=j(),m=S("seg"),h=s.useRef({}),R=s.useRef();s.useLayoutEffect(()=>{R.current?!f&&r(!0):(R.current=!0,r(!1))},[]),s.useEffect(()=>{if(c in h.current&&g.current){const n=h.current[c],l=n.getBoundingClientRect(),a=n.offsetWidth/l.width,d=l.width*a||0,x=l.height*a||0,v=4,E=b.width-n.parentElement.offsetLeft+v-d,N=n.parentElement.offsetLeft-v;i({width:d,height:x,translate:[t.dir==="rtl"?E:N,n.parentElement.offsetTop-v]})}},[c,b]);const w=P(()=>({width:t==null?void 0:t.width,height:t==null?void 0:t.height,transform:`translate(${t.translate[0]}px, ${t.translate[1]}px)`}),[t]),C=s.useCallback(n=>{var l;u(n.value),(l=e==null?void 0:e.onChange)==null||l.call(e,n.value,n)},[]);return o("div",{className:e.className,children:A("div",{className:"segment",ref:g,onClick:n=>n.stopPropagation(),style:e==null?void 0:e.style,children:[o("span",{className:"segment-active",style:w}),(y=e.options)==null?void 0:y.map((n,l)=>{const a=typeof n=="string"?{label:n,value:n}:n;return A("div",{className:"segment-item",children:[o("input",{name:m,disabled:e.disabled||a.disabled||void 0,type:"radio",value:a.value,id:`${m}-${a.value}`,className:"segment-item-input",checked:c===a.value,onChange:C.bind(null,a)}),o("label",{className:"segment-item-label",style:{"--segment-font":e.fontSize},"data-active":c===a.value&&!(e.disabled||a.disabled)||void 0,"data-disabled":e.disabled||a.disabled||void 0,htmlFor:`${m}-${a.value}`,ref:d=>h.current[a.value]=d,children:a.label})]},a.value)})]})})});export{D as S};
