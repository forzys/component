import{r as p,a as e,j as r}from"./index-d6a55cd9.js";import{u as g}from"./useUpdate-cf567692.js";import{u as m,a as u,C as h}from"./index-39a06484.js";const b=p.memo(x=>{var y;const[c]=m(),[d,f]=g({loading:!0});return p.useLayoutEffect(()=>{const l=String(u.holiday).replace("$var","2023");c==null||c.get(l).then(a=>{var t;const n=a==null?void 0:a.data,s=(t=n==null?void 0:n.days)==null?void 0:t.reduce((i,o)=>(i[o.name]=i[o.name]||[],o.isOffDay&&i[o.name].push(o.date),i),{});f({days:s,holiday:Object.keys(s||{})})})},[]),e("div",{className:"main",children:r(h,{style:{paddingBottom:0},bodyStyle:{padding:0},children:[r("div",{className:"holiday-header",style:{paddingBottom:12},children:[e("span",{style:{fontSize:16},children:"放假安排"}),e("div",{style:{fontSize:12},children:"国务院公布的全年法定节假日安排"})]}),e(h,{style:{margin:0,paddingTop:0},bodyStyle:{padding:12,paddingBottom:0},children:e("div",{children:(y=d==null?void 0:d.holiday)==null?void 0:y.map(l=>{const a=d==null?void 0:d.days[l],n=a==null?void 0:a.length,s=a[0],t=a[n-1];return r("p",{className:"holiday-row",children:[e("span",{style:{flex:1},children:l}),r("span",{style:{flex:2},children:[s," - ",t]}),e("span",{style:{flex:1},children:n})]},s+t)})})})]})})});export{b as default};