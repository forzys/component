import{r as a,u as l,j as r,F as m,a as e,O as i}from"./index-ef3bfa11.js";import{S as d}from"./index-8c2611de.js";import{u}from"./useUpdate-09c8c271.js";const S=a.memo(c=>{const[p,h,{navigate:t}]=u({loading:!0}),n=l((g,s)=>{t("/"+s.value)}),o=a.useMemo(()=>location.pathname.replace("/",""),[]);return r(m,{children:[e("header",{className:"header",children:e(d,{fontSize:"0.8rem",init:o,options:[{label:"Video",value:"video"},{label:"Component",value:"component"},{label:"Calendar",value:"calendar"},{label:"Theme",value:"theme"}],onChange:n})}),e(i,{})]})});export{S as default};