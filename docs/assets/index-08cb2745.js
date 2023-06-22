import{r as X,u as Q,a as $,j as ne}from"./index-1fb61688.js";import{u as ve,a as fe,b as ge,I as me,c as ye,B as j,G as we}from"./apis-59ddbd94.js";import{u as be}from"./useUpdate-8e83da98.js";function ke(n){if(!n||typeof window>"u")return;const i=document.createElement("style");return i.setAttribute("type","text/css"),i.innerHTML=n,document.head.appendChild(i),n}function V(n,i,t,o){function d(v){return v instanceof t?v:new t(function(k){k(v)})}return new(t||(t=Promise))(function(v,k){function c(f){try{g(o.next(f))}catch(l){k(l)}}function w(f){try{g(o.throw(f))}catch(l){k(l)}}function g(f){f.done?v(f.value):d(f.value).then(c,w)}g((o=o.apply(n,i||[])).next())})}function Te(n,i,t,o){var l;o=o||function(M,E,L,C,z){var H=E.split(`
`),P=Math.max(C-3,0),x=Math.min(H.length,C+3),D=z(L),F=H.slice(P,x).map(function(N,R){var W=R+P+1;return(W==C?" >> ":"    ")+W+"| "+N}).join(`
`);throw M.path=D,M.message=(D||"ejs")+":"+C+`
`+F+`

`+M.message,M},i=i||function(r){return r==null?"":String(r).replace(v,k)};var d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},v=/[&<>'"]/g;function k(r){return d[r]||r}var c=1,w=`<!-- prettier-ignore -->
<video 
  class="tp-video"
  crossorigin="anonymous"
  webkit-playsinline
  playsinline
  src="<%= locals.src %>" 
  <% if(locals?.controlOptions?.nativeControls){ %> controls <% } %> 
  <% if(locals.autoplay){ %> autoplay <% } %> 
  <% if(locals.muted){ %> muted <% } %> 
  <% if(locals.airplay){ %> airplay <% } %> 
  <% if(locals.airplay){ %> x-webkit-airplay="allow" <% } %> 
  <% if(locals.preload){ %> src="<%= locals.preload %>" <% } %> 
  <% if(locals.poster){ %> poster="<%= locals.poster %>" <% } %> 
  <% if(locals.volume){ %> src="<%= locals.volume %>" <% } %> 
  <% if(locals.playbackSpeed){ %> src="<%= locals.playbackSpeed %>" <% } %> 
  <% if(locals.anonymous){ %> src="<%= locals.anonymous %>" <% } %> 
>
  你的浏览器不支持 video 标签，换个浏览器试试？
</video>
<!-- 水印 -->
<div class="tp-watermark" style="display: none"></div>
`,g=void 0;try{let r=function(M){M!=null&&(f+=M)};var f="";return r(`<!-- prettier-ignore -->
<video 
  class="tp-video"
  crossorigin="anonymous"
  webkit-playsinline
  playsinline
  src="`),c=7,r(i(n.src)),r(`" 
  `),c=8,(l=n==null?void 0:n.controlOptions)!=null&&l.nativeControls&&r(" controls "),r(` 
  `),c=9,n.autoplay&&r(" autoplay "),r(` 
  `),c=10,n.muted&&r(" muted "),r(` 
  `),c=11,n.airplay&&r(" airplay "),r(` 
  `),c=12,n.airplay&&r(' x-webkit-airplay="allow" '),r(` 
  `),c=13,n.preload&&(r(' src="'),r(i(n.preload)),r('" ')),r(` 
  `),c=14,n.poster&&(r(' poster="'),r(i(n.poster)),r('" ')),r(` 
  `),c=15,n.volume&&(r(' src="'),r(i(n.volume)),r('" ')),r(` 
  `),c=16,n.playbackSpeed&&(r(' src="'),r(i(n.playbackSpeed)),r('" ')),r(` 
  `),c=17,n.anonymous&&(r(' src="'),r(i(n.anonymous)),r('" ')),r(` 
>
  你的浏览器不支持 video 标签，换个浏览器试试？
</video>
<!-- 水印 -->
<div class="tp-watermark" style="display: none"></div>
`),c=23,f}catch(r){o(r,w,g,c,i)}}ke(`.tp-watermark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 100%;
  pointer-events: none; }

.tp-hide-controller .tp-control-panel {
  display: none; }

.tp-control-panel {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0; }
  .tp-control-panel .tp-play-icon,
  .tp-control-panel .tp-loading {
    color: white;
    cursor: pointer;
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    box-sizing: border-box;
    display: grid;
    place-content: center; }
    .tp-control-panel .tp-play-icon svg,
    .tp-control-panel .tp-loading svg {
      width: 50px;
      height: 50px; }

@keyframes tp-loading {
  0% {
    transform: rotate(0deg); }
  100% {
    transform: rotate(360deg); } }
  .tp-control-panel .tp-loading {
    pointer-events: none;
    background-color: rgba(255, 255, 255, 0.4); }
    .tp-control-panel .tp-loading svg {
      animation: tp-loading 1s infinite;
      width: 40px;
      height: 40px; }
  .tp-control-panel .tp-control-bar {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 35px;
    user-select: none;
    transition: all 0.3s ease;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.4));
    color: white;
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    gap: 8px;
    justify-content: space-between;
    align-items: center; }
    .tp-control-panel .tp-control-bar .tp-seek-slider {
      width: 100%;
      flex: 1; }
    .tp-control-panel .tp-control-bar .tp-volume-bar {
      width: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center; }
    .tp-control-panel .tp-control-bar .tp-volume-icon,
    .tp-control-panel .tp-control-bar .tp-fullscreen {
      display: inline-block;
      width: 20px;
      height: 20px;
      text-align: center;
      color: white; }
    .tp-control-panel .tp-control-bar .tp-volume-slider {
      width: 60px; }
    .tp-control-panel .tp-control-bar .tp-play-time {
      font-family: Menlo, Courier New, Consolas, Lucida Console, Courier, monospace;
      font-size: 14px;
      text-align: center;
      user-select: none;
      min-width: 120px; }
    .tp-control-panel .tp-control-bar .tp-play-time-tip {
      display: none;
      width: 50px;
      text-align: center;
      position: absolute;
      top: -30px;
      left: -10px;
      pointer-events: none;
      background-color: #000;
      color: #fff;
      padding: 5px;
      border-radius: 4px;
      font-size: 14px; }
      .tp-control-panel .tp-control-bar .tp-play-time-tip::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: #000 transparent transparent transparent; }

.tp-control-bar input[type='range'] {
  height: 20px;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  margin: 10px 0;
  cursor: pointer; }
  .tp-control-bar input[type='range']:focus {
    outline: none; }
  .tp-control-bar input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    box-shadow: 0px 0px 0px #000000;
    background: #d3d3d3;
    border-radius: 1px;
    border: 0px solid #000000; }
  .tp-control-bar input[type='range']::-moz-range-track {
    width: 100%;
    height: 4px;
    box-shadow: 0px 0px 0px #000000;
    background: #d3d3d3;
    border-radius: 1px;
    border: 0px solid #000000; }
  .tp-control-bar input[type='range']::-ms-track {
    width: 100%;
    height: 4px;
    box-shadow: 0px 0px 0px #000000;
    background: #d3d3d3;
    border-radius: 1px;
    border: 0px solid #000000; }
  .tp-control-bar input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #0163a5;
    height: 12px;
    width: 12px;
    border-radius: 20px;
    margin-top: -4px;
    background-color: #fff;
    border: 1px solid transparent;
    border-image: linear-gradient(#fff, #fff) 0 fill/4 12 4 0/0px 0px 0 3000px; }
  .tp-control-bar input[type='range']::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #0163a5;
    height: 12px;
    width: 12px;
    border-radius: 20px;
    margin-top: -4px;
    background-color: #fff;
    border: 1px solid transparent;
    border-image: linear-gradient(#fff, #fff) 0 fill/4 12 4 0/0px 0px 0 3000px; }
  .tp-control-bar input[type='range']::-ms-thumb {
    -webkit-appearance: none;
    appearance: none;
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #0163a5;
    height: 12px;
    width: 12px;
    border-radius: 20px;
    margin-top: -4px;
    background-color: #fff;
    border: 1px solid transparent;
    border-image: linear-gradient(#fff, #fff) 0 fill/4 12 4 0/0px 0px 0 3000px; }
  .tp-control-bar input[type='range']::-webkit-slider-container {
    overflow: hidden; }

.tp-container {
  position: relative;
  overflow: hidden; }

.tp-video {
  width: 100%;
  height: 100%;
  transform: translate(0px, 0px); }
`);var Se='<svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M44.14 11.437a23.03 23.03 0 00-16.352-6.77 23.025 23.025 0 00-16.347 6.77 22.992 22.992 0 00-4.956 7.352 22.963 22.963 0 00-1.818 9c0 3.122.61 6.152 1.818 9.004a22.976 22.976 0 004.956 7.348 22.996 22.996 0 007.348 4.955 22.963 22.963 0 009 1.819 22.96 22.96 0 009.004-1.819 23.037 23.037 0 007.348-4.955 22.976 22.976 0 004.955-7.348 22.967 22.967 0 001.819-9.004c0-3.119-.611-6.148-1.819-9a22.992 22.992 0 00-4.955-7.352z" stroke-opacity=".6" stroke="#FFF" fill="#1B2337" opacity=".6"/><path d="M23.524 37.109a1.68 1.68 0 01-1.684 0 1.683 1.683 0 01-.84-1.456V20.349c0-.6.32-1.158.84-1.456a1.68 1.68 0 011.684 0l13.251 7.65a1.684 1.684 0 010 2.914L23.524 37.11z" fill="#FFF"/></g></svg>',Me='<svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M49.498 18.917a23.2 23.2 0 00-5-7.419 23.238 23.238 0 00-16.5-6.832 23.234 23.234 0 00-16.496 6.832 23.2 23.2 0 00-5 7.419 23.17 23.17 0 00-1.835 9.081c0 3.15.616 6.208 1.835 9.085a23.184 23.184 0 005 7.415 23.204 23.204 0 007.415 5 23.17 23.17 0 009.081 1.835c3.15 0 6.208-.616 9.085-1.835a23.245 23.245 0 007.415-5 23.184 23.184 0 005-7.415 23.175 23.175 0 001.835-9.085 23.17 23.17 0 00-1.835-9.081" stroke-opacity=".6" stroke="#FFF" fill="#1B2337" opacity=".6"/><path d="M21.467 37.333V18.667h4.2v18.666h-4.2zm13.066-18.666v18.666h-4.2V18.667h4.2z" fill="#FFF"/></g></svg>',Be='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white"><path d="M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8zM20.576 16q0 1.344-.768 2.528t-2.016 1.664q-.16.096-.448.096-.448 0-.8-.32t-.32-.832q0-.384.192-.64t.544-.448.608-.384.512-.64.192-1.024-.192-1.024-.512-.64-.608-.384-.544-.448-.192-.64q0-.48.32-.832t.8-.32q.288 0 .448.096 1.248.48 2.016 1.664T20.576 16zm4.576 0q0 2.72-1.536 5.056t-4 3.36q-.256.096-.448.096-.48 0-.832-.352t-.32-.8q0-.704.672-1.056 1.024-.512 1.376-.8 1.312-.96 2.048-2.4T22.848 16t-.736-3.104-2.048-2.4q-.352-.288-1.376-.8-.672-.352-.672-1.056 0-.448.32-.8t.8-.352q.224 0 .48.096 2.496 1.056 4 3.36T25.152 16z"/></svg>',_e='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white"><path d="M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8zM20.576 16q0 1.344-.768 2.528t-2.016 1.664q-.16.096-.448.096-.448 0-.8-.32t-.32-.832q0-.384.192-.64t.544-.448.608-.384.512-.64.192-1.024-.192-1.024-.512-.64-.608-.384-.544-.448-.192-.64q0-.48.32-.832t.8-.32q.288 0 .448.096 1.248.48 2.016 1.664T20.576 16z"/></svg>',Ce='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white"><path d="M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8z"/></svg>',Le='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 33" fill="white"><path d="M6.667 28H1.334c-.8 0-1.333-.533-1.333-1.333v-5.333c0-.8.533-1.333 1.333-1.333s1.333.533 1.333 1.333v4h4c.8 0 1.333.533 1.333 1.333S7.467 28 6.667 28zm24 0h-5.333c-.8 0-1.333-.533-1.333-1.333s.533-1.333 1.333-1.333h4v-4c0-.8.533-1.333 1.333-1.333S32 20.534 32 21.334v5.333c0 .8-.533 1.333-1.333 1.333zm0-16c-.8 0-1.333-.533-1.333-1.333v-4h-4c-.8 0-1.333-.533-1.333-1.333s.533-1.333 1.333-1.333h5.333c.8 0 1.333.533 1.333 1.333v5.333c0 .8-.533 1.333-1.333 1.333zM1.333 12C.533 12 0 11.467 0 10.667V5.334c0-.8.533-1.333 1.333-1.333h5.333c.8 0 1.333.533 1.333 1.333s-.533 1.333-1.333 1.333h-4v4c0 .8-.533 1.333-1.333 1.333z"/></svg>',ze='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 33" fill="white"><path d="M24.965 24.38H6.833a2.482 2.482 0 01-2.478-2.478V10.096a2.482 2.482 0 012.478-2.478h18.132a2.482 2.482 0 012.478 2.478v11.806a2.481 2.481 0 01-2.478 2.478zM6.833 10.097v11.806h18.134l-.002-11.806H6.833zM2.478 28.928H8.43a1.238 1.238 0 100-2.477H2.478v-5.802a1.239 1.239 0 10-2.477 0v5.802a2.481 2.481 0 002.478 2.478zm28.283-9.516c-.684 0-1.238.554-1.238 1.238v5.801h-5.951a1.237 1.237 0 100 2.477h5.951a2.48 2.48 0 002.478-2.478v-5.801c0-.683-.554-1.238-1.239-1.238zM0 5.55v5.802a1.238 1.238 0 002.476 0V5.55h5.952a1.238 1.238 0 100-2.476H2.477A2.48 2.48 0 00-.001 5.55zm32 5.8V5.549a2.48 2.48 0 00-2.478-2.478h-5.951a1.237 1.237 0 100 2.476h5.951v5.801c0 .683.554 1.237 1.238 1.237a1.235 1.235 0 001.239-1.236z"/></svg>',He='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 28" fill="white"><path d="M28.633 17.104c.035.21.026.463-.026.76s-.14.598-.262.904c-.122.306-.271.581-.445.825s-.367.419-.576.524c-.209.105-.393.157-.55.157s-.332-.035-.524-.105c-.175-.052-.393-.1-.655-.144s-.528-.052-.799-.026-.541.083-.812.17-.502.236-.694.445c-.419.437-.664.934-.734 1.493s.009 1.092.236 1.598c.175.349.148.699-.079 1.048-.105.14-.271.284-.498.432s-.476.284-.747.406-.555.218-.851.288c-.297.07-.559.105-.786.105-.157 0-.306-.061-.445-.183s-.236-.253-.288-.393h-.026c-.192-.541-.52-1.009-.982-1.402s-1-.589-1.611-.589c-.594 0-1.131.197-1.611.589s-.816.851-1.009 1.375c-.087.21-.218.362-.393.458s-.367.144-.576.144c-.244 0-.52-.044-.825-.131s-.611-.197-.917-.327c-.306-.131-.581-.284-.825-.458s-.428-.349-.55-.524c-.087-.122-.135-.266-.144-.432s.057-.397.197-.694c.192-.402.266-.86.223-1.375s-.266-.991-.668-1.428c-.244-.262-.541-.432-.891-.511s-.681-.109-.995-.092a4.358 4.358 0 00-1.127.21c-.244.07-.489.052-.734-.052-.192-.07-.371-.231-.537-.485a5.48 5.48 0 01-.746-1.781c-.07-.323-.087-.59-.052-.799.052-.384.227-.629.524-.734.524-.21.995-.555 1.415-1.035s.629-1.017.629-1.611c0-.611-.21-1.144-.629-1.598s-.891-.786-1.415-.996c-.157-.052-.288-.179-.393-.38s-.157-.406-.157-.616c0-.227.035-.48.105-.76s.162-.55.275-.812.244-.502.393-.72c.148-.218.31-.38.485-.485.14-.087.275-.122.406-.105s.275.052.432.105c.524.21 1.07.275 1.637.197s1.07-.327 1.506-.747c.21-.209.362-.467.458-.773s.157-.607.183-.904c.026-.297.026-.568 0-.812s-.048-.419-.065-.524c-.035-.105-.066-.227-.092-.367s-.013-.262.039-.367c.105-.244.293-.458.563-.642s.563-.336.878-.458c.314-.122.62-.214.917-.275s.533-.092.707-.092c.227 0 .406.074.537.223s.223.301.275.458c.192.471.507.886.943 1.244s.952.537 1.546.537c.611 0 1.153-.17 1.624-.511s.803-.773.996-1.297c.07-.14.179-.284.327-.432s.301-.223.458-.223c.244 0 .511.035.799.105s.572.166.851.288c.279.122.537.279.773.472s.423.402.563.629c.087.14.113.293.079.458s-.07.284-.105.354c-.227.506-.297 1.039-.21 1.598s.341 1.048.76 1.467c.419.419.934.651 1.546.694s1.179-.057 1.703-.301c.14-.087.31-.122.511-.105s.371.096.511.236c.262.244.493.616.694 1.113s.336 1 .406 1.506c.035.297-.013.528-.144.694s-.266.275-.406.327c-.542.192-1.004.528-1.388 1.009s-.576 1.026-.576 1.637c0 .594.162 1.113.485 1.559s.747.764 1.27.956c.122.07.227.14.314.21.192.157.323.358.393.602zm-12.182 2.358c.786 0 1.528-.149 2.227-.445s1.305-.707 1.821-1.231c.515-.524.921-1.131 1.218-1.821s.445-1.428.445-2.214-.148-1.524-.445-2.214-.703-1.292-1.218-1.808c-.515-.515-1.122-.921-1.821-1.218s-1.441-.445-2.227-.445c-.786 0-1.524.148-2.214.445s-1.292.703-1.808 1.218c-.515.515-.921 1.118-1.218 1.808s-.445 1.428-.445 2.214.149 1.524.445 2.214.703 1.297 1.218 1.821 1.118.934 1.808 1.231 1.428.445 2.214.445z"/></svg>',$e='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white"><path d="M22 16L11.895 5.4 10 7.387 18.211 16 10 24.612l1.895 1.988 8.211-8.613z"/></svg>',qe='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm11 15H5c-1.654 0-3-1.346-3-3V9c0-1.654 1.346-3 3-3h3a1 1 0 010 2H5c-.551 0-1 .449-1 1v16c0 .552.449 1 1 1h22a1 1 0 001-1V9c0-.551-.448-1-1-1H16a1 1 0 010-2h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zm-3-17.5a1.5 1.5 0 103.001-.001A1.5 1.5 0 0024 10.5zM15 4a1 1 0 01-1 1h-4a1 1 0 010-2h4a1 1 0 011 1z"/></svg>',Ee='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"/></svg>',Oe='<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"/></svg>';const q={play:Se,pause:Me,volumeUp:Be,volumeDown:_e,volumeOff:Ce,full:Le,fullWeb:ze,setting:He,right:$e,camera:qe,loading:Oe,airplay:Ee};function Ae(n,i,t,o){o=o||function(r,M,E,L,C){var z=M.split(`
`),H=Math.max(L-3,0),P=Math.min(z.length,L+3),x=C(E),D=z.slice(H,P).map(function(F,N){var R=N+H+1;return(R==L?" >> ":"    ")+R+"| "+F}).join(`
`);throw r.path=x,r.message=(x||"ejs")+":"+L+`
`+D+`

`+r.message,r},i=i||function(l){return l==null?"":String(l).replace(v,k)};var d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},v=/[&<>'"]/g;function k(l){return d[l]||l}var c=1,w=`<!-- 控制面板 -->

<!-- 播放按钮 -->
<div class="tp-play-icon"></div>
<!-- 底部控制栏 -->
<div class="tp-control-bar">
  <!-- 进度条 -->
  <input type="range" class="tp-seek-slider" min="0" max="100" step="any" value="0" />
  <span class="tp-play-time-tip">0.0s</span>

  <!-- 播放时间 -->
  <% if(locals.playTime){ %>
  <span class="tp-play-time">00:00 / 00:00</span>
  <% } %>

  <!-- 音量控制 -->
  <% if(locals.volumeControl){ %>
  <div class="tp-volume-bar">
    <i class="tp-volume-icon"></i>
    <input type="range" class="tp-volume-slider" min="0" max="1" step="0.01" value="<%= locals.volume %>" />
  </div>
  <% } %>

  <!-- 全屏 -->
  <% if(locals.fullScreenControl){ %>
  <i class="tp-fullscreen"></i>
  <% } %>
</div>
<!-- 加载动画 -->
<div class="tp-loading"></div>
`,g=void 0;try{let l=function(r){r!=null&&(f+=r)};var f="";return l(`<!-- 控制面板 -->

<!-- 播放按钮 -->
<div class="tp-play-icon"></div>
<!-- 底部控制栏 -->
<div class="tp-control-bar">
  <!-- 进度条 -->
  <input type="range" class="tp-seek-slider" min="0" max="100" step="any" value="0" />
  <span class="tp-play-time-tip">0.0s</span>

  <!-- 播放时间 -->
  `),c=12,n.playTime&&(l(`
  <span class="tp-play-time">00:00 / 00:00</span>
  `),c=14),l(`

  <!-- 音量控制 -->
  `),c=17,n.volumeControl&&(l(`
  <div class="tp-volume-bar">
    <i class="tp-volume-icon"></i>
    <input type="range" class="tp-volume-slider" min="0" max="1" step="0.01" value="`),c=20,l(i(n.volume)),l(`" />
  </div>
  `),c=22),l(`

  <!-- 全屏 -->
  `),c=25,n.fullScreenControl&&(l(`
  <i class="tp-fullscreen"></i>
  `),c=27),l(`
</div>
<!-- 加载动画 -->
<div class="tp-loading"></div>
`),c=31,f}catch(l){o(l,w,g,c,i)}}const ie=(n,i)=>{let t=null;return(...o)=>{t||(t=setTimeout(()=>{n(...o),t=null},i))}},oe=(n,i)=>{const t=Math.pow(10,i??0);if(n<59.9)return`${n.toFixed(1)}s`;const o=Math.floor(n/60),d=Math.floor(n%60*t)/t;return`${o}:${d<10?`0${d}`:d}`},re=/mobile/i.test(window.navigator.userAgent),ae=n=>{if(n=n||0,n===0||n===1/0||n.toString()==="NaN")return"00:00";const i=v=>v<10?"0"+v:""+v,t=Math.floor(n/3600),o=Math.floor((n-t*3600)/60),d=Math.floor(n-t*3600-o*60);return(t>0?[t,o,d]:[o,d]).map(i).join(":")};class Pe{constructor(i){this.disableAutoHide=!1,this.playRaf=0,this.initControls=()=>{this.controlElement=document.createElement("div"),this.controlElement.className="tp-control-panel",this.controlElement.innerHTML=Ae(Object.assign(Object.assign({},this.player.options.controlOptions||{}),{volume:this.player.options.volume})),!this.controlOptions.manualMount&&!this.controlOptions.nativeControls&&this.mountTarget.appendChild(this.controlElement),this.loading=this.controlElement.querySelector(".tp-loading"),this.loading.innerHTML=q.loading,this.loading.style.opacity="0",this.bottomControlBar=this.controlElement.querySelector(".tp-control-bar"),this.bottomControlBar.addEventListener("mousedown",t=>t.stopPropagation()),this.initPlayButton(),this.initSeekBar(),this.initVolumeButton(),this.initFullScreenButton()},this.initPlayButton=()=>{this.playButton=this.controlElement.querySelector(".tp-play-icon"),this.playButton.innerHTML=q.play,this.playButton.addEventListener("click",this.player.togglePlay)},this.initSeekBar=()=>{this.seekBar=this.controlElement.querySelector(".tp-seek-slider");let t=!1;const o=v=>{v.stopPropagation(),t=!this.player.video.paused,this.player.pause()},d=v=>{v.stopPropagation(),t&&this.player.play()};this.seekBar.addEventListener("mousedown",o),this.seekBar.addEventListener("mouseup",d),this.seekBar.addEventListener("touchstart",o),this.seekBar.addEventListener("touchend",d),this.seekBar.addEventListener("touchmove",v=>v.stopPropagation()),this.seekBar.addEventListener("input",this.onSeeking),this.playTime=this.controlElement.querySelector(".tp-play-time")},this.initVolumeButton=()=>{const t=this.player.options.volume?this.player.options.volume>1?this.player.options.volume/100:this.player.options.volume:1;this.player.video.volume=t,this.controlOptions.volumeControl&&(this.muteButton=this.controlElement.querySelector(".tp-volume-icon"),this.muteButton.addEventListener("click",this.player.mute),this.switchVolumeIcon(),this.volumeSlider=this.controlElement.querySelector(".tp-volume-slider"),this.volumeSlider.addEventListener("input",ie(this.onVolumeChange,100)),this.volumeControlBar=this.controlElement.querySelector(".tp-volume-bar"))},this.initFullScreenButton=()=>{this.fullScreenButton=this.controlElement.querySelector(".tp-fullscreen"),this.fullScreenButton&&(this.fullScreenButton.addEventListener("click",this.player.toggleFullScreen),this.fullScreenButton.innerHTML=q.fullWeb)},this.watchControlResize=()=>{new ResizeObserver(ie(o=>{for(const d of o){if(!d.contentBoxSize)return;const{inlineSize:v,blockSize:k}=d.contentBoxSize[0];k<40||v<40?this.playButton.style.display="none":this.playButton.style.display="grid",k<75||v<60?this.bottomControlBar.style.display="none":this.bottomControlBar.style.display="flex",k<100||v<100?this.playButton.style.scale="0.5":this.playButton.style.scale="1",this.fullScreenButton&&v<200?this.fullScreenButton.style.display="none":this.fullScreenButton&&(this.fullScreenButton.style.display="block"),this.playTime&&v<330?this.playTime.style.display="none":this.playTime&&(this.playTime.style.display="block"),this.volumeControlBar&&v<400?this.volumeControlBar.style.display="none":this.volumeControlBar&&(this.volumeControlBar.style.display="flex")}},30)).observe(this.controlElement)},this.initControlsEvent=()=>{this.player.on("waiting",this.onWaiting),this.player.on("timeupdate",this.onTimeupdate),this.player.on("playing",this.onPlaying),this.player.on("canplay",()=>this.toggleLoading(!1)),this.player.on("seeked",()=>this.onSeeked),this.player.on("loadedmetadata",this.initTimeTip),this.player.on("pause",this.setAutoHide),this.player.on("play",this.setAutoHide),this.initMountTargetEvent(),this.watchControlResize()},this.initTimeTip=()=>{const t=this.controlElement.querySelector(".tp-play-time-tip"),o=this.player.duration;let d=!1,v=!1;this.seekBar.addEventListener("input",w=>{const g=w.target;t.textContent=oe(+g.value/100*o),re&&d&&!v&&(t.style.display="block")});const k=w=>{const g=this.seekBar.clientWidth;let f=0;if(w instanceof MouseEvent){t.style.display="block",f=w.offsetX;const l=f/g*o;t.textContent=oe(l)}if(w instanceof TouchEvent){const l=w.touches[0];let M=w.target.getBoundingClientRect();f=l.clientX-M.left,d=!0}(f<0||f>g)&&(t.style.display="none",v=!0),v=!1,t.style.left=f-t.clientWidth/2+10+"px"};this.seekBar.addEventListener("touchmove",k),this.seekBar.addEventListener("mousemove",k);const c=()=>{setTimeout(()=>{t.style.display="none",d=!1},100)};this.seekBar.addEventListener("mouseleave",c),this.seekBar.addEventListener("touchend",c)},this.initMountTargetEvent=()=>{re&&this.mountTarget.addEventListener("touchstart",this.setAutoHide),this.mountTarget.addEventListener("click",this.setAutoHide),this.mountTarget.addEventListener("mousemove",this.setAutoHide)},this.removeMountTargetEvent=()=>{},this.setAutoHide=()=>{this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(()=>{!this.player.paused&&this.hide()},2*1e3)},this.show=()=>{this.mountTarget.classList.remove("tp-hide-controller")},this.hide=()=>{this.mountTarget.classList.add("tp-hide-controller")},this.toggle=()=>{this.mountTarget.classList.contains("tp-hide-controller")?this.show():this.hide()},this.updateSeekBar=t=>{this.seekBar.value=((this.player.video.currentTime-this.player.clipStart)/this.player.duration*100).toString(),!t&&(this.playRaf=window.requestAnimationFrame(()=>this.updateSeekBar()))},this.onSeeking=t=>{t.preventDefault(),t.stopPropagation();const o=t.target,d=Number(parseFloat(o.value)/100*this.player.duration)+Number(this.player.clipStart);this.player.seek(d)},this.onSeeked=()=>{this.playRaf&&cancelAnimationFrame(this.playRaf),this.updateSeekBar(!0)},this.onTimeupdate=()=>{if(!this.playTime&&!this.controlOptions.manualMount)return;const o=+this.seekBar.value*this.player.duration*.01;this.playTime&&(this.playTime.textContent=`${ae(o<0?0:o)} / ${ae(this.player.duration)}`);const d=this.player.video.currentTime;!this.player.handleVideoEndByOuter&&this.player.clipEnd&&d>=this.player.clipEnd-.1&&(this.player.pause(),this.player.seek(Number(this.player.clipStart)),this.updateSeekBar(!0),this.player.options.loop&&this.player.play())},this.onVolumeChange=t=>{const o=t.target;this.player.volume(Number(o.value))},this.onWaiting=()=>{this.player.paused||(this.player.paused=!0),this.toggleLoading(!0)},this.onPlaying=()=>{this.player.paused&&(this.player.paused=!1),this.toggleLoading(!1)},this.switchVolumeIcon=()=>{this.controlOptions.volumeControl&&(this.player.video.muted||this.player.video.volume===0?this.muteButton.innerHTML=q.volumeOff:this.player.video.volume>0&&this.player.video.volume<1?this.muteButton.innerHTML=q.volumeDown:this.muteButton.innerHTML=q.volumeUp)},this.destroy=()=>{clearTimeout(this.autoHideTimer)},this.player=i,this.controlOptions=i.options.controlOptions||{},this.mountTarget=this.controlOptions.mountTarget||this.player.videoContainer,this.initControls(),this.initControlsEvent()}setVisible(i){i?this.show():this.hide()}toggleLoading(i){i?(this.loading.style.opacity="1",this.playButton.style.opacity="0"):(this.loading.style.opacity="0",this.playButton.style.opacity="1")}}var I;(function(n){n.audioprocess="audioprocess",n.canplay="canplay",n.canplaythrough="canplaythrough",n.complete="complete",n.durationchange="durationchange",n.emptied="emptied",n.ended="ended",n.loadeddata="loadeddata",n.loadedmetadata="loadedmetadata",n.pause="pause",n.play="play",n.playing="playing",n.progress="progress",n.ratechange="ratechange",n.seeked="seeked",n.seeking="seeking",n.stalled="stalled",n.suspend="suspend",n.timeupdate="timeupdate",n.volumechange="volumechange",n.waiting="waiting",n.error="error",n.abort="abort",n.loadstart="loadstart",n.mozaudioavailable="mozaudioavailable"})(I||(I={}));var U;(function(n){n.destroy="destroy",n.resize="resize",n.screenshot="screenshot"})(U||(U={}));class xe{constructor(i){this.events={},this.player=i,this.videoEvents=Object.keys(I).map(t=>I[t]),this.playerEvents=Object.keys(U).map(t=>U[t])}type(i){return this.playerEvents.indexOf(i)!==-1?"player":this.videoEvents.indexOf(i)!==-1?"video":(console.error(`${i} 事件不存在，请查看下文档`),null)}on(i,t){const o=this.type(i);if(o&&typeof t!="function")return console.error(`${i} 事件的回调函数必须是一个函数`);this.events[i]||(this.events[i]=[]),this.events[i].push(t),o==="video"&&this.player.video.addEventListener(i,t),o==="player"&&this.events[i].push(t)}off(i,t){if(this.type(i)&&this.events[i]&&this.events[i].length){const o=this.events[i].indexOf(t);if(o===-1)return;this.events[i].splice(o,1),this.type(i)==="video"&&this.player.video.removeEventListener(i,t)}}emit(i,t){!this.events[i]||!this.events[i].length||this.events[i].forEach(o=>{o(t)})}once(i,t){const o=(...d)=>{t(...d),this.off(i,o)};this.on(i,o)}}class se{constructor(i){this.paused=!0,this.videoType="auto",this.duration=0,this.handleVideoEndByOuter=!1,this.onLoadedMetadata=()=>{this.duration=this.clipEnd-this.clipStart||this.video.duration,this.controller.onTimeupdate()},this.onPlay=()=>{this.paused=!1;const t=this.controller.playButton;t&&(t.innerHTML=q.pause),this.controller.updateSeekBar()},this.onPause=()=>{this.paused=!0;const t=this.controller.playButton;t&&(t.innerHTML=q.play),cancelAnimationFrame(this.controller.playRaf)},this.play=()=>V(this,void 0,void 0,function*(){yield this.video.play()}),this.pause=()=>V(this,void 0,void 0,function*(){yield this.video.pause()}),this.togglePlay=t=>V(this,void 0,void 0,function*(){this.video.paused?yield this.play():yield this.pause()}),this.seek=t=>{this.video.currentTime=Number(t)},this.mute=()=>{this.video.muted=!this.video.muted,this.controller.volumeSlider.value=this.video.muted?"0":this.video.volume+"",this.controller.muteButton.innerHTML=this.video.muted?q.volumeOff:q.volumeUp},this.toggleFullScreen=()=>{document.fullscreenElement?document.exitFullscreen():this.videoContainer.requestFullscreen()},this.handleWaterMarkShow=t=>{this.waterMark&&(this.waterMark.style.display=t?"block":"none")},this.mountController=t=>{this.options.controlOptions.nativeControls||(this.controller.removeMountTargetEvent(),this.controller.mountTarget=t,this.controller.initMountTargetEvent(),t.appendChild(this.controller.controlElement))},this.cutVideo=(t,o)=>{this.clipStart=t,this.clipEnd=o,this.duration=o-t,this.seek(t),this.controller.initTimeTip(),this.controller.updateSeekBar(!0)},this.destroy=()=>{this.pause(),this.video.src="",this.container.innerHTML="",this.controller.destroy()},this.container=i.container,this.options=i,this.clipStart=i.clipStart||0,this.clipEnd=i.clipEnd||0,this.handleVideoEndByOuter=i.handleVideoEndByOuter||!1,this.setup()}setup(){this.videoContainer=document.createElement("div"),this.videoContainer.className="tp-container",this.videoContainer.style.width=this.options.width||"100%",this.videoContainer.style.height=this.options.height||"100%",this.videoContainer.innerHTML=Te(this.options),this.container.innerHTML="",this.container.appendChild(this.videoContainer),this.video=this.videoContainer.querySelector("video"),this.waterMark=this.videoContainer.querySelector(".tp-watermark"),this.waterMark.style.backgroundImage=`url(${this.options.waterMarkUrl})`,this.events=new xe(this),this.initVideo(),this.controller=new Pe(this),this.handleWaterMarkShow(this.options.waterMarkShow),this.seek(this.clipStart)}initVideo(){this.initMSE(this.video,this.options.type),this.on("play",this.onPlay),this.on("pause",this.onPause),this.on("ended",()=>{this.clipEnd||(this.options.loop?(!this.paused&&this.seek(this.clipStart),this.play()):(!this.paused&&this.seek(this.clipStart),this.pause()),this.controller.updateSeekBar(!0))}),this.on("loadedmetadata",this.onLoadedMetadata)}on(i,t){this.events.on(i,t)}once(i,t){this.events.once(i,t)}emit(i,t){this.events.emit(i,t)}off(i,t){this.events.off(i,t)}initMSE(i,t){switch(this.videoType=t,t==="hls"&&(this.videoType="hls",(i.canPlayType("application/x-mpegURL")||i.canPlayType("application/vnd.apple.mpegURL"))&&(this.videoType="normal"),/.mp4(#|\?|$)/i.exec(i.src)&&(this.videoType="normal")),t==="auto"&&(/m3u8(#|\?|$)/i.exec(i.src)&&(this.videoType="hls"),/.flv(#|\?|$)/i.exec(i.src)&&(this.videoType="flv"),/.mpd(#|\?|$)/i.exec(i.src)&&(this.videoType="dash"),this.videoType="normal"),this.videoType){case"flv":console.error("暂不支持 flv 格式视频");break;case"dash":console.error("暂不支持 dash 格式视频");break}console.log(`🚀🚀🚀 MSE: 预设播放模式：${t},实际播放模式：${this.videoType}, 视频链接：${i.src}`)}volume(i){let t=parseFloat(i||0);return isNaN(t)||(t=Math.max(t,0),t=Math.min(t,1),this.video.volume=t,this.video.muted&&(this.video.muted=!1),this.controller.switchVolumeIcon()),this.video.volume}}var J={};function le(n){return n}function De(n){return!1}function Y(){}Y.prototype={chain:function(n,i){var t=this[n];if(!t)throw new Error("unknown hook "+n);t===le?this[n]=i:this[n]=function(o){return i(t(o))}},set:function(n,i){if(!this[n])throw new Error("unknown hook "+n);this[n]=i},addNoop:function(n){this[n]=le},addFalse:function(n){this[n]=De}};J.HookCollection=Y;function Z(){}Z.prototype={set:function(n,i){this["s_"+n]=i},get:function(n){return this["s_"+n]}};J.Converter=function(){var n=this.hooks=new Y;n.addNoop("plainLinkText"),n.addNoop("preConversion"),n.addNoop("postConversion");var i,t,o,d;this.makeHtml=function(e){if(i)throw new Error("Recursive call to converter.makeHtml");return i=new Z,t=new Z,o=[],d=0,e=n.preConversion(e),e=e.replace(/~/g,"~T"),e=e.replace(/\$/g,"~D"),e=e.replace(/\r\n/g,`
`),e=e.replace(/\r/g,`
`),e=`

`+e+`

`,e=te(e),e=e.replace(/^[ \t]+$/mg,""),e=k(e),e=v(e),e=w(e),e=he(e),e=e.replace(/~D/g,"$$"),e=e.replace(/~T/g,"~"),e=n.postConversion(e),o=t=i=null,e};function v(e){return e=e.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,function(u,a,s,p,b,h){return a=a.toLowerCase(),i.set(a,ee(s)),b?p:(h&&t.set(a,h.replace(/"/g,"&quot;")),"")}),e}function k(e){return e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,c),e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,c),e=e.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,c),e=e.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,c),e=e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,c),e}function c(e,u){var a=u;return a=a.replace(/^\n+/,""),a=a.replace(/\n+$/g,""),a=`

~K`+(o.push(a)-1)+`K

`,a}function w(e,u){e=L(e);var a=`<hr />
`;return e=e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,a),e=e.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,a),e=e.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,a),e=C(e),e=P(e),e=R(e),e=k(e),e=W(e,u),e}function g(e){return e=D(e),e=f(e),e=pe(e),e=M(e),e=l(e),e=ce(e),e=e.replace(/~P/g,"://"),e=ee(e),e=N(e),e=e.replace(/  +\n/g,` <br>
`),e}function f(e){var u=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi;return e=e.replace(u,function(a){var s=a.replace(/(.)<\/?code>(?=.)/g,"$1`");return s=O(s,a.charAt(1)=="!"?"\\`*_/":"\\`*_"),s}),e}function l(e){return e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,r),e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,r),e=e.replace(/(\[([^\[\]]+)\])()()()()()/g,r),e}function r(e,u,a,s,p,b,h,m){m==null&&(m="");var _=u,y=a.replace(/:\/\//g,"~P"),S=s.toLowerCase(),T=p,B=m;if(T=="")if(S==""&&(S=y.toLowerCase().replace(/ ?\n/g," ")),T="#"+S,i.get(S)!=null)T=i.get(S),t.get(S)!=null&&(B=t.get(S));else if(_.search(/\(\s*\)$/m)>-1)T="";else return _;T=de(T),T=O(T,"*_");var A='<a href="'+T+'"';return B!=""&&(B=B.replace(/"/g,"&quot;"),B=O(B,"*_"),A+=' title="'+B+'"'),A+=">"+y+"</a>",A}function M(e){return e=e.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,E),e=e.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,E),e}function E(e,u,a,s,p,b,h,m){var _=u,y=a,S=s.toLowerCase(),T=p,B=m;if(B||(B=""),T=="")if(S==""&&(S=y.toLowerCase().replace(/ ?\n/g," ")),T="#"+S,i.get(S)!=null)T=i.get(S),t.get(S)!=null&&(B=t.get(S));else return _;y=O(y.replace(/"/g,"&quot;"),"*_[]()"),T=O(T,"*_");var A='<img src="'+T+'" alt="'+y+'"';return B=B.replace(/"/g,"&quot;"),B=O(B,"*_"),A+=' title="'+B+'"',A+=" />",A}function L(e){return e=e.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(u,a){return"<h1>"+g(a)+`</h1>

`}),e=e.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(u,a){return"<h2>"+g(a)+`</h2>

`}),e=e.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(u,a,s){var p=a.length;return"<h"+p+">"+g(s)+"</h"+p+`>

`}),e}function C(e){e+="~0";var u=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return d?e=e.replace(u,function(a,s,p){var b=s,h=p.search(/[*+-]/g)>-1?"ul":"ol",m=H(b,h);return m=m.replace(/\s+$/,""),m="<"+h+">"+m+"</"+h+`>
`,m}):(u=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,e=e.replace(u,function(a,s,p,b){var h=s,m=p,_=b.search(/[*+-]/g)>-1?"ul":"ol",y=H(m,_);return y=h+"<"+_+`>
`+y+"</"+_+`>
`,y})),e=e.replace(/~0/,""),e}var z={ol:"\\d+[.]",ul:"[*+-]"};function H(e,u){d++,e=e.replace(/\n{2,}$/,`
`),e+="~0";var a=z[u],s=new RegExp("(^[ \\t]*)("+a+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+a+")[ \\t]+))","gm"),p=!1;return e=e.replace(s,function(b,h,m,_){var y=_,S=/\n\n$/.test(y),T=S||y.search(/\n{2,}/)>-1;return T||p?y=w(K(y),!0):(y=C(K(y)),y=y.replace(/\n$/,""),y=g(y)),p=S,"<li>"+y+`</li>
`}),e=e.replace(/~0/g,""),d--,e}function P(e){return e+="~0",e=e.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(u,a,s){var p=a,b=s;return p=F(K(p)),p=te(p),p=p.replace(/^\n+/g,""),p=p.replace(/\n+$/g,""),p="<pre><code>"+p+`
</code></pre>`,`

`+p+`

`+b}),e=e.replace(/~0/,""),e}function x(e){return e=e.replace(/(^\n+|\n+$)/g,""),`

~K`+(o.push(e)-1)+`K

`}function D(e){return e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(u,a,s,p,b){var h=p;return h=h.replace(/^([ \t]*)/g,""),h=h.replace(/[ \t]*$/g,""),h=F(h),h=h.replace(/:\/\//g,"~P"),a+"<code>"+h+"</code>"}),e}function F(e){return e=e.replace(/&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=O(e,"*_{}[]\\",!1),e}function N(e){return e=e.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g,"$1<strong>$3</strong>$4"),e=e.replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g,"$1<em>$3</em>$4"),e}function R(e){return e=e.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(u,a){var s=a;return s=s.replace(/^[ \t]*>[ \t]?/gm,"~0"),s=s.replace(/~0/g,""),s=s.replace(/^[ \t]+$/gm,""),s=w(s),s=s.replace(/(^|\n)/g,"$1  "),s=s.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(p,b){var h=b;return h=h.replace(/^  /mg,"~0"),h=h.replace(/~0/g,""),h}),x(`<blockquote>
`+s+`
</blockquote>`)}),e}function W(e,u){e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var a=e.split(/\n{2,}/g),s=[],p=/~K(\d+)K/,b=a.length,h=0;h<b;h++){var m=a[h];p.test(m)?s.push(m):/\S/.test(m)&&(m=g(m),m=m.replace(/^([ \t]*)/g,"<p>"),m+="</p>",s.push(m))}if(!u){b=s.length;for(var h=0;h<b;h++)for(var _=!0;_;)_=!1,s[h]=s[h].replace(/~K(\d+)K/g,function(S,T){return _=!0,o[T]})}return s.join(`

`)}function ee(e){return e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?\$!])/gi,"&lt;"),e}function pe(e){return e=e.replace(/\\(\\)/g,G),e=e.replace(/\\([`*_{}\[\]()>#+-.!])/g,G),e}function ce(e){e=e.replace(/(^|\s)(https?|ftp)(:\/\/[-A-Z0-9+&@#\/%?=~_|\[\]\(\)!:,\.;]*[-A-Z0-9+&@#\/%=~_|\[\]])($|\W)/gi,"$1<$2$3>$4");var u=function(a,s){return'<a href="'+s+'">'+n.plainLinkText(s)+"</a>"};return e=e.replace(/<((https?|ftp):[^'">\s]+)>/gi,u),e}function he(e){return e=e.replace(/~E(\d+)E/g,function(u,a){var s=parseInt(a);return String.fromCharCode(s)}),e}function K(e){return e=e.replace(/^(\t|[ ]{1,4})/gm,"~0"),e=e.replace(/~0/g,""),e}function te(e){if(!/\t/.test(e))return e;var u=["    ","   ","  "," "],a=0,s;return e.replace(/[\n\t]/g,function(p,b){return p===`
`?(a=b+1,p):(s=(b-a)%4,a=b+1,u[s])})}var ue=/(?:["'*()[\]:]|~D)/g;function de(e){if(!e)return"";var u=e.length;return e.replace(ue,function(a,s){return a=="~D"?"%24":a==":"&&(s==u-1||/[0-9\/]/.test(e.charAt(s+1)))?":":"%"+a.charCodeAt(0).toString(16)})}function O(e,u,a){var s="(["+u.replace(/([\[\]\\])/g,"\\$1")+"])";a&&(s="\\\\"+s);var p=new RegExp(s,"g");return e=e.replace(p,G),e}function G(e,u){var a=u.charCodeAt(0);return"~E"+a+"E"}};const Fe=J,je=X.memo(n=>{console.log({Markdown:Fe,TinyPlayer:se});const[i]=ve(),[t,o,{navigate:d}]=be({loading:!0});X.useLayoutEffect(()=>{t.tp=new se({container:document.querySelector("#tiny-player"),poster:"https://tiny-player.vercel.app/movie.png",preload:"metadata",type:"auto",waterMarkShow:!0,width:"80%"})},[]);const v=X.useCallback(async g=>{const f=await i.get(fe.analysis,{data:{url:g}});t.tp&&(t.analysis=f.data,t.tp.options.poster=f.data.cover,t.tp.options.src=f.data.url,t.tp.setup())},[]),k=Q(()=>{const g=t.input,f=/http[s]?:\/\/[\w.]+[\w\/]*[\w.]*\??[\w=&:\-\+\%]*[/]*/,[l]=(g==null?void 0:g.match(f))||[];v(l)}),c=Q(g=>{var l;const f=(l=g==null?void 0:g.target)==null?void 0:l.value;t.input=f}),w=Q((g,f)=>{var r,M,E,L;console.log({info:f});const l=C=>{let z=document.createElement("a");document.body.append(z),z.click(),C&&setTimeout(()=>{const H=window.open(C,"_blank","noopener=yes,noreferrer=yes");H.opener=null},200),z.remove()};switch(f.type){case"1":l((r=t==null?void 0:t.analysis)==null?void 0:r.url);break;case"2":l((M=t==null?void 0:t.analysis)==null?void 0:M.cover);break;case"3":l((L=(E=t==null?void 0:t.analysis)==null?void 0:E.music)==null?void 0:L.url);break}});return $("div",{className:"content",children:ne(ge,{open:!1,style:{padding:48,paddingTop:24},className:"frosted",children:[$("div",{style:{textAlign:"left",paddingBottom:12,fontSize:13},children:"目前支持 皮皮虾/抖音/微视/快手/6间房/哔哩哔哩/微博/绿洲/度小视/开眼/陌陌/皮皮搞笑/全民k歌/逗拍/虎牙/新片场/哔哩哔哩/Acfun/美拍/西瓜视频/火山小视频/网易云Mlog/好看视频/QQ小世界 图集解析仅抖音/快手/微博/皮皮虾/最右/皮皮搞笑可用，哔哩哔哩/6间房/微博仅支持下载无法去除水印"}),$(me,{placeholder:"请粘贴分享链接",before:$(ye,{fontSize:"18px",search:!0}),after:$(j,{type:"text",compact:!0,onClick:k,children:"Search"}),wrapStyle:{width:"80%"},style:{paddingRight:"4rem"},onChange:c}),$("div",{style:{marginTop:20}}),$("div",{id:"tiny-player",style:{maxHeight:390}}),ne(we,{style:{marginTop:12},children:[$(j,{type:"1",onClick:w,children:"下载视频"}),$(j,{type:"2",onClick:w,children:"下载封面"}),$(j,{type:"3",onClick:w,children:"下载音频"})]})]})})});export{je as default};
