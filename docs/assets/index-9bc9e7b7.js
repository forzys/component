import{r as X,u as Q,a as L,j as V}from"./index-6e141e2b.js";import{I as fe,a as ge,B as j,G as me,T as Z}from"./index-c2bb4f8f.js";import{u as ye}from"./useUpdate-633cd78d.js";import{b as we,c as oe}from"./apis-4d01c9c8.js";import{C as be}from"./index-b302c2d4.js";function ke(i){if(!i||typeof window>"u")return;const t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=i,document.head.appendChild(t),i}function J(i,t,n,o){function u(d){return d instanceof n?d:new n(function(B){B(d)})}return new(n||(n=Promise))(function(d,B){function p(f){try{k(o.next(f))}catch(v){B(v)}}function b(f){try{k(o.throw(f))}catch(v){B(v)}}function k(f){f.done?d(f.value):u(f.value).then(p,b)}k((o=o.apply(i,t||[])).next())})}function Te(i,t,n,o){var v;o=o||function(C,x,O,y,w){var T=x.split(`
`),E=Math.max(y-3,0),H=Math.min(T.length,y+3),z=w(O),D=T.slice(E,H).map(function(R,A){var W=A+E+1;return(W==y?" >> ":"    ")+W+"| "+R}).join(`
`);throw C.path=z,C.message=(z||"ejs")+":"+y+`
`+D+`

`+C.message,C},t=t||function(r){return r==null?"":String(r).replace(d,B)};var u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function B(r){return u[r]||r}var p=1,b=`<!-- prettier-ignore -->
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
`,k=void 0;try{let r=function(C){C!=null&&(f+=C)};var f="";return r(`<!-- prettier-ignore -->
<video 
  class="tp-video"
  crossorigin="anonymous"
  webkit-playsinline
  playsinline
  src="`),p=7,r(t(i.src)),r(`" 
  `),p=8,(v=i==null?void 0:i.controlOptions)!=null&&v.nativeControls&&r(" controls "),r(` 
  `),p=9,i.autoplay&&r(" autoplay "),r(` 
  `),p=10,i.muted&&r(" muted "),r(` 
  `),p=11,i.airplay&&r(" airplay "),r(` 
  `),p=12,i.airplay&&r(' x-webkit-airplay="allow" '),r(` 
  `),p=13,i.preload&&(r(' src="'),r(t(i.preload)),r('" ')),r(` 
  `),p=14,i.poster&&(r(' poster="'),r(t(i.poster)),r('" ')),r(` 
  `),p=15,i.volume&&(r(' src="'),r(t(i.volume)),r('" ')),r(` 
  `),p=16,i.playbackSpeed&&(r(' src="'),r(t(i.playbackSpeed)),r('" ')),r(` 
  `),p=17,i.anonymous&&(r(' src="'),r(t(i.anonymous)),r('" ')),r(` 
>
  你的浏览器不支持 video 标签，换个浏览器试试？
</video>
<!-- 水印 -->
<div class="tp-watermark" style="display: none"></div>
`),p=23,f}catch(r){o(r,b,k,p,t)}}ke(`.tp-watermark {
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
`);var Se='<svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M44.14 11.437a23.03 23.03 0 00-16.352-6.77 23.025 23.025 0 00-16.347 6.77 22.992 22.992 0 00-4.956 7.352 22.963 22.963 0 00-1.818 9c0 3.122.61 6.152 1.818 9.004a22.976 22.976 0 004.956 7.348 22.996 22.996 0 007.348 4.955 22.963 22.963 0 009 1.819 22.96 22.96 0 009.004-1.819 23.037 23.037 0 007.348-4.955 22.976 22.976 0 004.955-7.348 22.967 22.967 0 001.819-9.004c0-3.119-.611-6.148-1.819-9a22.992 22.992 0 00-4.955-7.352z" stroke-opacity=".6" stroke="#FFF" fill="#1B2337" opacity=".6"/><path d="M23.524 37.109a1.68 1.68 0 01-1.684 0 1.683 1.683 0 01-.84-1.456V20.349c0-.6.32-1.158.84-1.456a1.68 1.68 0 011.684 0l13.251 7.65a1.684 1.684 0 010 2.914L23.524 37.11z" fill="#FFF"/></g></svg>',Be='<svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M49.498 18.917a23.2 23.2 0 00-5-7.419 23.238 23.238 0 00-16.5-6.832 23.234 23.234 0 00-16.496 6.832 23.2 23.2 0 00-5 7.419 23.17 23.17 0 00-1.835 9.081c0 3.15.616 6.208 1.835 9.085a23.184 23.184 0 005 7.415 23.204 23.204 0 007.415 5 23.17 23.17 0 009.081 1.835c3.15 0 6.208-.616 9.085-1.835a23.245 23.245 0 007.415-5 23.184 23.184 0 005-7.415 23.175 23.175 0 001.835-9.085 23.17 23.17 0 00-1.835-9.081" stroke-opacity=".6" stroke="#FFF" fill="#1B2337" opacity=".6"/><path d="M21.467 37.333V18.667h4.2v18.666h-4.2zm13.066-18.666v18.666h-4.2V18.667h4.2z" fill="#FFF"/></g></svg>',Me='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white"><path d="M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8zM20.576 16q0 1.344-.768 2.528t-2.016 1.664q-.16.096-.448.096-.448 0-.8-.32t-.32-.832q0-.384.192-.64t.544-.448.608-.384.512-.64.192-1.024-.192-1.024-.512-.64-.608-.384-.544-.448-.192-.64q0-.48.32-.832t.8-.32q.288 0 .448.096 1.248.48 2.016 1.664T20.576 16zm4.576 0q0 2.72-1.536 5.056t-4 3.36q-.256.096-.448.096-.48 0-.832-.352t-.32-.8q0-.704.672-1.056 1.024-.512 1.376-.8 1.312-.96 2.048-2.4T22.848 16t-.736-3.104-2.048-2.4q-.352-.288-1.376-.8-.672-.352-.672-1.056 0-.448.32-.8t.8-.352q.224 0 .48.096 2.496 1.056 4 3.36T25.152 16z"/></svg>',_e='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white"><path d="M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8zM20.576 16q0 1.344-.768 2.528t-2.016 1.664q-.16.096-.448.096-.448 0-.8-.32t-.32-.832q0-.384.192-.64t.544-.448.608-.384.512-.64.192-1.024-.192-1.024-.512-.64-.608-.384-.544-.448-.192-.64q0-.48.32-.832t.8-.32q.288 0 .448.096 1.248.48 2.016 1.664T20.576 16z"/></svg>',Ce='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white"><path d="M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8z"/></svg>',Le='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 33" fill="white"><path d="M6.667 28H1.334c-.8 0-1.333-.533-1.333-1.333v-5.333c0-.8.533-1.333 1.333-1.333s1.333.533 1.333 1.333v4h4c.8 0 1.333.533 1.333 1.333S7.467 28 6.667 28zm24 0h-5.333c-.8 0-1.333-.533-1.333-1.333s.533-1.333 1.333-1.333h4v-4c0-.8.533-1.333 1.333-1.333S32 20.534 32 21.334v5.333c0 .8-.533 1.333-1.333 1.333zm0-16c-.8 0-1.333-.533-1.333-1.333v-4h-4c-.8 0-1.333-.533-1.333-1.333s.533-1.333 1.333-1.333h5.333c.8 0 1.333.533 1.333 1.333v5.333c0 .8-.533 1.333-1.333 1.333zM1.333 12C.533 12 0 11.467 0 10.667V5.334c0-.8.533-1.333 1.333-1.333h5.333c.8 0 1.333.533 1.333 1.333s-.533 1.333-1.333 1.333h-4v4c0 .8-.533 1.333-1.333 1.333z"/></svg>',$e='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 33" fill="white"><path d="M24.965 24.38H6.833a2.482 2.482 0 01-2.478-2.478V10.096a2.482 2.482 0 012.478-2.478h18.132a2.482 2.482 0 012.478 2.478v11.806a2.481 2.481 0 01-2.478 2.478zM6.833 10.097v11.806h18.134l-.002-11.806H6.833zM2.478 28.928H8.43a1.238 1.238 0 100-2.477H2.478v-5.802a1.239 1.239 0 10-2.477 0v5.802a2.481 2.481 0 002.478 2.478zm28.283-9.516c-.684 0-1.238.554-1.238 1.238v5.801h-5.951a1.237 1.237 0 100 2.477h5.951a2.48 2.48 0 002.478-2.478v-5.801c0-.683-.554-1.238-1.239-1.238zM0 5.55v5.802a1.238 1.238 0 002.476 0V5.55h5.952a1.238 1.238 0 100-2.476H2.477A2.48 2.48 0 00-.001 5.55zm32 5.8V5.549a2.48 2.48 0 00-2.478-2.478h-5.951a1.237 1.237 0 100 2.476h5.951v5.801c0 .683.554 1.237 1.238 1.237a1.235 1.235 0 001.239-1.236z"/></svg>',ze='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 28" fill="white"><path d="M28.633 17.104c.035.21.026.463-.026.76s-.14.598-.262.904c-.122.306-.271.581-.445.825s-.367.419-.576.524c-.209.105-.393.157-.55.157s-.332-.035-.524-.105c-.175-.052-.393-.1-.655-.144s-.528-.052-.799-.026-.541.083-.812.17-.502.236-.694.445c-.419.437-.664.934-.734 1.493s.009 1.092.236 1.598c.175.349.148.699-.079 1.048-.105.14-.271.284-.498.432s-.476.284-.747.406-.555.218-.851.288c-.297.07-.559.105-.786.105-.157 0-.306-.061-.445-.183s-.236-.253-.288-.393h-.026c-.192-.541-.52-1.009-.982-1.402s-1-.589-1.611-.589c-.594 0-1.131.197-1.611.589s-.816.851-1.009 1.375c-.087.21-.218.362-.393.458s-.367.144-.576.144c-.244 0-.52-.044-.825-.131s-.611-.197-.917-.327c-.306-.131-.581-.284-.825-.458s-.428-.349-.55-.524c-.087-.122-.135-.266-.144-.432s.057-.397.197-.694c.192-.402.266-.86.223-1.375s-.266-.991-.668-1.428c-.244-.262-.541-.432-.891-.511s-.681-.109-.995-.092a4.358 4.358 0 00-1.127.21c-.244.07-.489.052-.734-.052-.192-.07-.371-.231-.537-.485a5.48 5.48 0 01-.746-1.781c-.07-.323-.087-.59-.052-.799.052-.384.227-.629.524-.734.524-.21.995-.555 1.415-1.035s.629-1.017.629-1.611c0-.611-.21-1.144-.629-1.598s-.891-.786-1.415-.996c-.157-.052-.288-.179-.393-.38s-.157-.406-.157-.616c0-.227.035-.48.105-.76s.162-.55.275-.812.244-.502.393-.72c.148-.218.31-.38.485-.485.14-.087.275-.122.406-.105s.275.052.432.105c.524.21 1.07.275 1.637.197s1.07-.327 1.506-.747c.21-.209.362-.467.458-.773s.157-.607.183-.904c.026-.297.026-.568 0-.812s-.048-.419-.065-.524c-.035-.105-.066-.227-.092-.367s-.013-.262.039-.367c.105-.244.293-.458.563-.642s.563-.336.878-.458c.314-.122.62-.214.917-.275s.533-.092.707-.092c.227 0 .406.074.537.223s.223.301.275.458c.192.471.507.886.943 1.244s.952.537 1.546.537c.611 0 1.153-.17 1.624-.511s.803-.773.996-1.297c.07-.14.179-.284.327-.432s.301-.223.458-.223c.244 0 .511.035.799.105s.572.166.851.288c.279.122.537.279.773.472s.423.402.563.629c.087.14.113.293.079.458s-.07.284-.105.354c-.227.506-.297 1.039-.21 1.598s.341 1.048.76 1.467c.419.419.934.651 1.546.694s1.179-.057 1.703-.301c.14-.087.31-.122.511-.105s.371.096.511.236c.262.244.493.616.694 1.113s.336 1 .406 1.506c.035.297-.013.528-.144.694s-.266.275-.406.327c-.542.192-1.004.528-1.388 1.009s-.576 1.026-.576 1.637c0 .594.162 1.113.485 1.559s.747.764 1.27.956c.122.07.227.14.314.21.192.157.323.358.393.602zm-12.182 2.358c.786 0 1.528-.149 2.227-.445s1.305-.707 1.821-1.231c.515-.524.921-1.131 1.218-1.821s.445-1.428.445-2.214-.148-1.524-.445-2.214-.703-1.292-1.218-1.808c-.515-.515-1.122-.921-1.821-1.218s-1.441-.445-2.227-.445c-.786 0-1.524.148-2.214.445s-1.292.703-1.808 1.218c-.515.515-.921 1.118-1.218 1.808s-.445 1.428-.445 2.214.149 1.524.445 2.214.703 1.297 1.218 1.821 1.118.934 1.808 1.231 1.428.445 2.214.445z"/></svg>',He='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white"><path d="M22 16L11.895 5.4 10 7.387 18.211 16 10 24.612l1.895 1.988 8.211-8.613z"/></svg>',qe='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm11 15H5c-1.654 0-3-1.346-3-3V9c0-1.654 1.346-3 3-3h3a1 1 0 010 2H5c-.551 0-1 .449-1 1v16c0 .552.449 1 1 1h22a1 1 0 001-1V9c0-.551-.448-1-1-1H16a1 1 0 010-2h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zm-3-17.5a1.5 1.5 0 103.001-.001A1.5 1.5 0 0024 10.5zM15 4a1 1 0 01-1 1h-4a1 1 0 010-2h4a1 1 0 011 1z"/></svg>',Ee='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"/></svg>',Oe='<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"/></svg>';const P={play:Se,pause:Be,volumeUp:Me,volumeDown:_e,volumeOff:Ce,full:Le,fullWeb:$e,setting:ze,right:He,camera:qe,loading:Oe,airplay:Ee};function Ae(i,t,n,o){o=o||function(r,C,x,O,y){var w=C.split(`
`),T=Math.max(O-3,0),E=Math.min(w.length,O+3),H=y(x),z=w.slice(T,E).map(function(D,R){var A=R+T+1;return(A==O?" >> ":"    ")+A+"| "+D}).join(`
`);throw r.path=H,r.message=(H||"ejs")+":"+O+`
`+z+`

`+r.message,r},t=t||function(v){return v==null?"":String(v).replace(d,B)};var u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function B(v){return u[v]||v}var p=1,b=`<!-- 控制面板 -->

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
`,k=void 0;try{let v=function(r){r!=null&&(f+=r)};var f="";return v(`<!-- 控制面板 -->

<!-- 播放按钮 -->
<div class="tp-play-icon"></div>
<!-- 底部控制栏 -->
<div class="tp-control-bar">
  <!-- 进度条 -->
  <input type="range" class="tp-seek-slider" min="0" max="100" step="any" value="0" />
  <span class="tp-play-time-tip">0.0s</span>

  <!-- 播放时间 -->
  `),p=12,i.playTime&&(v(`
  <span class="tp-play-time">00:00 / 00:00</span>
  `),p=14),v(`

  <!-- 音量控制 -->
  `),p=17,i.volumeControl&&(v(`
  <div class="tp-volume-bar">
    <i class="tp-volume-icon"></i>
    <input type="range" class="tp-volume-slider" min="0" max="1" step="0.01" value="`),p=20,v(t(i.volume)),v(`" />
  </div>
  `),p=22),v(`

  <!-- 全屏 -->
  `),p=25,i.fullScreenControl&&(v(`
  <i class="tp-fullscreen"></i>
  `),p=27),v(`
</div>
<!-- 加载动画 -->
<div class="tp-loading"></div>
`),p=31,f}catch(v){o(v,b,k,p,t)}}const re=(i,t)=>{let n=null;return(...o)=>{n||(n=setTimeout(()=>{i(...o),n=null},t))}},ae=(i,t)=>{const n=Math.pow(10,t??0);if(i<59.9)return`${i.toFixed(1)}s`;const o=Math.floor(i/60),u=Math.floor(i%60*n)/n;return`${o}:${u<10?`0${u}`:u}`},se=/mobile/i.test(window.navigator.userAgent),le=i=>{if(i=i||0,i===0||i===1/0||i.toString()==="NaN")return"00:00";const t=d=>d<10?"0"+d:""+d,n=Math.floor(i/3600),o=Math.floor((i-n*3600)/60),u=Math.floor(i-n*3600-o*60);return(n>0?[n,o,u]:[o,u]).map(t).join(":")};class Pe{constructor(t){this.disableAutoHide=!1,this.playRaf=0,this.initControls=()=>{this.controlElement=document.createElement("div"),this.controlElement.className="tp-control-panel",this.controlElement.innerHTML=Ae(Object.assign(Object.assign({},this.player.options.controlOptions||{}),{volume:this.player.options.volume})),!this.controlOptions.manualMount&&!this.controlOptions.nativeControls&&this.mountTarget.appendChild(this.controlElement),this.loading=this.controlElement.querySelector(".tp-loading"),this.loading.innerHTML=P.loading,this.loading.style.opacity="0",this.bottomControlBar=this.controlElement.querySelector(".tp-control-bar"),this.bottomControlBar.addEventListener("mousedown",n=>n.stopPropagation()),this.initPlayButton(),this.initSeekBar(),this.initVolumeButton(),this.initFullScreenButton()},this.initPlayButton=()=>{this.playButton=this.controlElement.querySelector(".tp-play-icon"),this.playButton.innerHTML=P.play,this.playButton.addEventListener("click",this.player.togglePlay)},this.initSeekBar=()=>{this.seekBar=this.controlElement.querySelector(".tp-seek-slider");let n=!1;const o=d=>{d.stopPropagation(),n=!this.player.video.paused,this.player.pause()},u=d=>{d.stopPropagation(),n&&this.player.play()};this.seekBar.addEventListener("mousedown",o),this.seekBar.addEventListener("mouseup",u),this.seekBar.addEventListener("touchstart",o),this.seekBar.addEventListener("touchend",u),this.seekBar.addEventListener("touchmove",d=>d.stopPropagation()),this.seekBar.addEventListener("input",this.onSeeking),this.playTime=this.controlElement.querySelector(".tp-play-time")},this.initVolumeButton=()=>{const n=this.player.options.volume?this.player.options.volume>1?this.player.options.volume/100:this.player.options.volume:1;this.player.video.volume=n,this.controlOptions.volumeControl&&(this.muteButton=this.controlElement.querySelector(".tp-volume-icon"),this.muteButton.addEventListener("click",this.player.mute),this.switchVolumeIcon(),this.volumeSlider=this.controlElement.querySelector(".tp-volume-slider"),this.volumeSlider.addEventListener("input",re(this.onVolumeChange,100)),this.volumeControlBar=this.controlElement.querySelector(".tp-volume-bar"))},this.initFullScreenButton=()=>{this.fullScreenButton=this.controlElement.querySelector(".tp-fullscreen"),this.fullScreenButton&&(this.fullScreenButton.addEventListener("click",this.player.toggleFullScreen),this.fullScreenButton.innerHTML=P.fullWeb)},this.watchControlResize=()=>{new ResizeObserver(re(o=>{for(const u of o){if(!u.contentBoxSize)return;const{inlineSize:d,blockSize:B}=u.contentBoxSize[0];B<40||d<40?this.playButton.style.display="none":this.playButton.style.display="grid",B<75||d<60?this.bottomControlBar.style.display="none":this.bottomControlBar.style.display="flex",B<100||d<100?this.playButton.style.scale="0.5":this.playButton.style.scale="1",this.fullScreenButton&&d<200?this.fullScreenButton.style.display="none":this.fullScreenButton&&(this.fullScreenButton.style.display="block"),this.playTime&&d<330?this.playTime.style.display="none":this.playTime&&(this.playTime.style.display="block"),this.volumeControlBar&&d<400?this.volumeControlBar.style.display="none":this.volumeControlBar&&(this.volumeControlBar.style.display="flex")}},30)).observe(this.controlElement)},this.initControlsEvent=()=>{this.player.on("waiting",this.onWaiting),this.player.on("timeupdate",this.onTimeupdate),this.player.on("playing",this.onPlaying),this.player.on("canplay",()=>this.toggleLoading(!1)),this.player.on("seeked",()=>this.onSeeked),this.player.on("loadedmetadata",this.initTimeTip),this.player.on("pause",this.setAutoHide),this.player.on("play",this.setAutoHide),this.initMountTargetEvent(),this.watchControlResize()},this.initTimeTip=()=>{const n=this.controlElement.querySelector(".tp-play-time-tip"),o=this.player.duration;let u=!1,d=!1;this.seekBar.addEventListener("input",b=>{const k=b.target;n.textContent=ae(+k.value/100*o),se&&u&&!d&&(n.style.display="block")});const B=b=>{const k=this.seekBar.clientWidth;let f=0;if(b instanceof MouseEvent){n.style.display="block",f=b.offsetX;const v=f/k*o;n.textContent=ae(v)}if(b instanceof TouchEvent){const v=b.touches[0];let C=b.target.getBoundingClientRect();f=v.clientX-C.left,u=!0}(f<0||f>k)&&(n.style.display="none",d=!0),d=!1,n.style.left=f-n.clientWidth/2+10+"px"};this.seekBar.addEventListener("touchmove",B),this.seekBar.addEventListener("mousemove",B);const p=()=>{setTimeout(()=>{n.style.display="none",u=!1},100)};this.seekBar.addEventListener("mouseleave",p),this.seekBar.addEventListener("touchend",p)},this.initMountTargetEvent=()=>{se&&this.mountTarget.addEventListener("touchstart",this.setAutoHide),this.mountTarget.addEventListener("click",this.setAutoHide),this.mountTarget.addEventListener("mousemove",this.setAutoHide)},this.removeMountTargetEvent=()=>{},this.setAutoHide=()=>{this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(()=>{!this.player.paused&&this.hide()},2*1e3)},this.show=()=>{this.mountTarget.classList.remove("tp-hide-controller")},this.hide=()=>{this.mountTarget.classList.add("tp-hide-controller")},this.toggle=()=>{this.mountTarget.classList.contains("tp-hide-controller")?this.show():this.hide()},this.updateSeekBar=n=>{this.seekBar.value=((this.player.video.currentTime-this.player.clipStart)/this.player.duration*100).toString(),!n&&(this.playRaf=window.requestAnimationFrame(()=>this.updateSeekBar()))},this.onSeeking=n=>{n.preventDefault(),n.stopPropagation();const o=n.target,u=Number(parseFloat(o.value)/100*this.player.duration)+Number(this.player.clipStart);this.player.seek(u)},this.onSeeked=()=>{this.playRaf&&cancelAnimationFrame(this.playRaf),this.updateSeekBar(!0)},this.onTimeupdate=()=>{if(!this.playTime&&!this.controlOptions.manualMount)return;const o=+this.seekBar.value*this.player.duration*.01;this.playTime&&(this.playTime.textContent=`${le(o<0?0:o)} / ${le(this.player.duration)}`);const u=this.player.video.currentTime;!this.player.handleVideoEndByOuter&&this.player.clipEnd&&u>=this.player.clipEnd-.1&&(this.player.pause(),this.player.seek(Number(this.player.clipStart)),this.updateSeekBar(!0),this.player.options.loop&&this.player.play())},this.onVolumeChange=n=>{const o=n.target;this.player.volume(Number(o.value))},this.onWaiting=()=>{this.player.paused||(this.player.paused=!0),this.toggleLoading(!0)},this.onPlaying=()=>{this.player.paused&&(this.player.paused=!1),this.toggleLoading(!1)},this.switchVolumeIcon=()=>{this.controlOptions.volumeControl&&(this.player.video.muted||this.player.video.volume===0?this.muteButton.innerHTML=P.volumeOff:this.player.video.volume>0&&this.player.video.volume<1?this.muteButton.innerHTML=P.volumeDown:this.muteButton.innerHTML=P.volumeUp)},this.destroy=()=>{clearTimeout(this.autoHideTimer)},this.player=t,this.controlOptions=t.options.controlOptions||{},this.mountTarget=this.controlOptions.mountTarget||this.player.videoContainer,this.initControls(),this.initControlsEvent()}setVisible(t){t?this.show():this.hide()}toggleLoading(t){t?(this.loading.style.opacity="1",this.playButton.style.opacity="0"):(this.loading.style.opacity="0",this.playButton.style.opacity="1")}}var I;(function(i){i.audioprocess="audioprocess",i.canplay="canplay",i.canplaythrough="canplaythrough",i.complete="complete",i.durationchange="durationchange",i.emptied="emptied",i.ended="ended",i.loadeddata="loadeddata",i.loadedmetadata="loadedmetadata",i.pause="pause",i.play="play",i.playing="playing",i.progress="progress",i.ratechange="ratechange",i.seeked="seeked",i.seeking="seeking",i.stalled="stalled",i.suspend="suspend",i.timeupdate="timeupdate",i.volumechange="volumechange",i.waiting="waiting",i.error="error",i.abort="abort",i.loadstart="loadstart",i.mozaudioavailable="mozaudioavailable"})(I||(I={}));var U;(function(i){i.destroy="destroy",i.resize="resize",i.screenshot="screenshot"})(U||(U={}));class xe{constructor(t){this.events={},this.player=t,this.videoEvents=Object.keys(I).map(n=>I[n]),this.playerEvents=Object.keys(U).map(n=>U[n])}type(t){return this.playerEvents.indexOf(t)!==-1?"player":this.videoEvents.indexOf(t)!==-1?"video":(console.error(`${t} 事件不存在，请查看下文档`),null)}on(t,n){const o=this.type(t);if(o&&typeof n!="function")return console.error(`${t} 事件的回调函数必须是一个函数`);this.events[t]||(this.events[t]=[]),this.events[t].push(n),o==="video"&&this.player.video.addEventListener(t,n),o==="player"&&this.events[t].push(n)}off(t,n){if(this.type(t)&&this.events[t]&&this.events[t].length){const o=this.events[t].indexOf(n);if(o===-1)return;this.events[t].splice(o,1),this.type(t)==="video"&&this.player.video.removeEventListener(t,n)}}emit(t,n){!this.events[t]||!this.events[t].length||this.events[t].forEach(o=>{o(n)})}once(t,n){const o=(...u)=>{n(...u),this.off(t,o)};this.on(t,o)}}class De{constructor(t){this.paused=!0,this.videoType="auto",this.duration=0,this.handleVideoEndByOuter=!1,this.onLoadedMetadata=()=>{this.duration=this.clipEnd-this.clipStart||this.video.duration,this.controller.onTimeupdate()},this.onPlay=()=>{this.paused=!1;const n=this.controller.playButton;n&&(n.innerHTML=P.pause),this.controller.updateSeekBar()},this.onPause=()=>{this.paused=!0;const n=this.controller.playButton;n&&(n.innerHTML=P.play),cancelAnimationFrame(this.controller.playRaf)},this.play=()=>J(this,void 0,void 0,function*(){yield this.video.play()}),this.pause=()=>J(this,void 0,void 0,function*(){yield this.video.pause()}),this.togglePlay=n=>J(this,void 0,void 0,function*(){this.video.paused?yield this.play():yield this.pause()}),this.seek=n=>{this.video.currentTime=Number(n)},this.mute=()=>{this.video.muted=!this.video.muted,this.controller.volumeSlider.value=this.video.muted?"0":this.video.volume+"",this.controller.muteButton.innerHTML=this.video.muted?P.volumeOff:P.volumeUp},this.toggleFullScreen=()=>{document.fullscreenElement?document.exitFullscreen():this.videoContainer.requestFullscreen()},this.handleWaterMarkShow=n=>{this.waterMark&&(this.waterMark.style.display=n?"block":"none")},this.mountController=n=>{this.options.controlOptions.nativeControls||(this.controller.removeMountTargetEvent(),this.controller.mountTarget=n,this.controller.initMountTargetEvent(),n.appendChild(this.controller.controlElement))},this.cutVideo=(n,o)=>{this.clipStart=n,this.clipEnd=o,this.duration=o-n,this.seek(n),this.controller.initTimeTip(),this.controller.updateSeekBar(!0)},this.destroy=()=>{this.pause(),this.video.src="",this.container.innerHTML="",this.controller.destroy()},this.container=t.container,this.options=t,this.clipStart=t.clipStart||0,this.clipEnd=t.clipEnd||0,this.handleVideoEndByOuter=t.handleVideoEndByOuter||!1,this.setup()}setup(){this.videoContainer=document.createElement("div"),this.videoContainer.className="tp-container",this.videoContainer.style.width=this.options.width||"100%",this.videoContainer.style.height=this.options.height||"100%",this.videoContainer.innerHTML=Te(this.options),this.container.innerHTML="",this.container.appendChild(this.videoContainer),this.video=this.videoContainer.querySelector("video"),this.waterMark=this.videoContainer.querySelector(".tp-watermark"),this.waterMark.style.backgroundImage=`url(${this.options.waterMarkUrl})`,this.events=new xe(this),this.initVideo(),this.controller=new Pe(this),this.handleWaterMarkShow(this.options.waterMarkShow),this.seek(this.clipStart)}initVideo(){this.initMSE(this.video,this.options.type),this.on("play",this.onPlay),this.on("pause",this.onPause),this.on("ended",()=>{this.clipEnd||(this.options.loop?(!this.paused&&this.seek(this.clipStart),this.play()):(!this.paused&&this.seek(this.clipStart),this.pause()),this.controller.updateSeekBar(!0))}),this.on("loadedmetadata",this.onLoadedMetadata)}on(t,n){this.events.on(t,n)}once(t,n){this.events.once(t,n)}emit(t,n){this.events.emit(t,n)}off(t,n){this.events.off(t,n)}initMSE(t,n){switch(this.videoType=n,n==="hls"&&(this.videoType="hls",(t.canPlayType("application/x-mpegURL")||t.canPlayType("application/vnd.apple.mpegURL"))&&(this.videoType="normal"),/.mp4(#|\?|$)/i.exec(t.src)&&(this.videoType="normal")),n==="auto"&&(/m3u8(#|\?|$)/i.exec(t.src)&&(this.videoType="hls"),/.flv(#|\?|$)/i.exec(t.src)&&(this.videoType="flv"),/.mpd(#|\?|$)/i.exec(t.src)&&(this.videoType="dash"),this.videoType="normal"),this.videoType){case"flv":console.error("暂不支持 flv 格式视频");break;case"dash":console.error("暂不支持 dash 格式视频");break}console.log(`🚀🚀🚀 MSE: 预设播放模式：${n},实际播放模式：${this.videoType}, 视频链接：${t.src}`)}volume(t){let n=parseFloat(t||0);return isNaN(n)||(n=Math.max(n,0),n=Math.min(n,1),this.video.volume=n,this.video.muted&&(this.video.muted=!1),this.controller.switchVolumeIcon()),this.video.volume}}var ee={};function pe(i){return i}function Re(i){return!1}function ne(){}ne.prototype={chain:function(i,t){var n=this[i];if(!n)throw new Error("unknown hook "+i);n===pe?this[i]=t:this[i]=function(o){return t(n(o))}},set:function(i,t){if(!this[i])throw new Error("unknown hook "+i);this[i]=t},addNoop:function(i){this[i]=pe},addFalse:function(i){this[i]=Re}};ee.HookCollection=ne;function Y(){}Y.prototype={set:function(i,t){this["s_"+i]=t},get:function(i){return this["s_"+i]}};ee.Converter=function(){var i=this.hooks=new ne;i.addNoop("plainLinkText"),i.addNoop("preConversion"),i.addNoop("postConversion");var t,n,o,u;this.makeHtml=function(e){if(t)throw new Error("Recursive call to converter.makeHtml");return t=new Y,n=new Y,o=[],u=0,e=i.preConversion(e),e=e.replace(/~/g,"~T"),e=e.replace(/\$/g,"~D"),e=e.replace(/\r\n/g,`
`),e=e.replace(/\r/g,`
`),e=`

`+e+`

`,e=ie(e),e=e.replace(/^[ \t]+$/mg,""),e=B(e),e=d(e),e=b(e),e=ue(e),e=e.replace(/~D/g,"$$"),e=e.replace(/~T/g,"~"),e=i.postConversion(e),o=n=t=null,e};function d(e){return e=e.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,function(h,a,s,l,S,c){return a=a.toLowerCase(),t.set(a,te(s)),S?l:(c&&n.set(a,c.replace(/"/g,"&quot;")),"")}),e}function B(e){return e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,p),e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,p),e=e.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,p),e=e.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,p),e=e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,p),e}function p(e,h){var a=h;return a=a.replace(/^\n+/,""),a=a.replace(/\n+$/g,""),a=`

~K`+(o.push(a)-1)+`K

`,a}function b(e,h){e=O(e);var a=`<hr />
`;return e=e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,a),e=e.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,a),e=e.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,a),e=y(e),e=E(e),e=A(e),e=B(e),e=W(e,h),e}function k(e){return e=z(e),e=f(e),e=ce(e),e=C(e),e=v(e),e=he(e),e=e.replace(/~P/g,"://"),e=te(e),e=R(e),e=e.replace(/  +\n/g,` <br>
`),e}function f(e){var h=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi;return e=e.replace(h,function(a){var s=a.replace(/(.)<\/?code>(?=.)/g,"$1`");return s=F(s,a.charAt(1)=="!"?"\\`*_/":"\\`*_"),s}),e}function v(e){return e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,r),e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,r),e=e.replace(/(\[([^\[\]]+)\])()()()()()/g,r),e}function r(e,h,a,s,l,S,c,g){g==null&&(g="");var q=h,m=a.replace(/:\/\//g,"~P"),_=s.toLowerCase(),M=l,$=g;if(M=="")if(_==""&&(_=m.toLowerCase().replace(/ ?\n/g," ")),M="#"+_,t.get(_)!=null)M=t.get(_),n.get(_)!=null&&($=n.get(_));else if(q.search(/\(\s*\)$/m)>-1)M="";else return q;M=ve(M),M=F(M,"*_");var N='<a href="'+M+'"';return $!=""&&($=$.replace(/"/g,"&quot;"),$=F($,"*_"),N+=' title="'+$+'"'),N+=">"+m+"</a>",N}function C(e){return e=e.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,x),e=e.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,x),e}function x(e,h,a,s,l,S,c,g){var q=h,m=a,_=s.toLowerCase(),M=l,$=g;if($||($=""),M=="")if(_==""&&(_=m.toLowerCase().replace(/ ?\n/g," ")),M="#"+_,t.get(_)!=null)M=t.get(_),n.get(_)!=null&&($=n.get(_));else return q;m=F(m.replace(/"/g,"&quot;"),"*_[]()"),M=F(M,"*_");var N='<img src="'+M+'" alt="'+m+'"';return $=$.replace(/"/g,"&quot;"),$=F($,"*_"),N+=' title="'+$+'"',N+=" />",N}function O(e){return e=e.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(h,a){return"<h1>"+k(a)+`</h1>

`}),e=e.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(h,a){return"<h2>"+k(a)+`</h2>

`}),e=e.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(h,a,s){var l=a.length;return"<h"+l+">"+k(s)+"</h"+l+`>

`}),e}function y(e){e+="~0";var h=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return u?e=e.replace(h,function(a,s,l){var S=s,c=l.search(/[*+-]/g)>-1?"ul":"ol",g=T(S,c);return g=g.replace(/\s+$/,""),g="<"+c+">"+g+"</"+c+`>
`,g}):(h=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,e=e.replace(h,function(a,s,l,S){var c=s,g=l,q=S.search(/[*+-]/g)>-1?"ul":"ol",m=T(g,q);return m=c+"<"+q+`>
`+m+"</"+q+`>
`,m})),e=e.replace(/~0/,""),e}var w={ol:"\\d+[.]",ul:"[*+-]"};function T(e,h){u++,e=e.replace(/\n{2,}$/,`
`),e+="~0";var a=w[h],s=new RegExp("(^[ \\t]*)("+a+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+a+")[ \\t]+))","gm"),l=!1;return e=e.replace(s,function(S,c,g,q){var m=q,_=/\n\n$/.test(m),M=_||m.search(/\n{2,}/)>-1;return M||l?m=b(K(m),!0):(m=y(K(m)),m=m.replace(/\n$/,""),m=k(m)),l=_,"<li>"+m+`</li>
`}),e=e.replace(/~0/g,""),u--,e}function E(e){return e+="~0",e=e.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(h,a,s){var l=a,S=s;return l=D(K(l)),l=ie(l),l=l.replace(/^\n+/g,""),l=l.replace(/\n+$/g,""),l="<pre><code>"+l+`
</code></pre>`,`

`+l+`

`+S}),e=e.replace(/~0/,""),e}function H(e){return e=e.replace(/(^\n+|\n+$)/g,""),`

~K`+(o.push(e)-1)+`K

`}function z(e){return e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(h,a,s,l,S){var c=l;return c=c.replace(/^([ \t]*)/g,""),c=c.replace(/[ \t]*$/g,""),c=D(c),c=c.replace(/:\/\//g,"~P"),a+"<code>"+c+"</code>"}),e}function D(e){return e=e.replace(/&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=F(e,"*_{}[]\\",!1),e}function R(e){return e=e.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g,"$1<strong>$3</strong>$4"),e=e.replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g,"$1<em>$3</em>$4"),e}function A(e){return e=e.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(h,a){var s=a;return s=s.replace(/^[ \t]*>[ \t]?/gm,"~0"),s=s.replace(/~0/g,""),s=s.replace(/^[ \t]+$/gm,""),s=b(s),s=s.replace(/(^|\n)/g,"$1  "),s=s.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(l,S){var c=S;return c=c.replace(/^  /mg,"~0"),c=c.replace(/~0/g,""),c}),H(`<blockquote>
`+s+`
</blockquote>`)}),e}function W(e,h){e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var a=e.split(/\n{2,}/g),s=[],l=/~K(\d+)K/,S=a.length,c=0;c<S;c++){var g=a[c];l.test(g)?s.push(g):/\S/.test(g)&&(g=k(g),g=g.replace(/^([ \t]*)/g,"<p>"),g+="</p>",s.push(g))}if(!h){S=s.length;for(var c=0;c<S;c++)for(var q=!0;q;)q=!1,s[c]=s[c].replace(/~K(\d+)K/g,function(_,M){return q=!0,o[M]})}return s.join(`

`)}function te(e){return e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?\$!])/gi,"&lt;"),e}function ce(e){return e=e.replace(/\\(\\)/g,G),e=e.replace(/\\([`*_{}\[\]()>#+-.!])/g,G),e}function he(e){e=e.replace(/(^|\s)(https?|ftp)(:\/\/[-A-Z0-9+&@#\/%?=~_|\[\]\(\)!:,\.;]*[-A-Z0-9+&@#\/%=~_|\[\]])($|\W)/gi,"$1<$2$3>$4");var h=function(a,s){return'<a href="'+s+'">'+i.plainLinkText(s)+"</a>"};return e=e.replace(/<((https?|ftp):[^'">\s]+)>/gi,h),e}function ue(e){return e=e.replace(/~E(\d+)E/g,function(h,a){var s=parseInt(a);return String.fromCharCode(s)}),e}function K(e){return e=e.replace(/^(\t|[ ]{1,4})/gm,"~0"),e=e.replace(/~0/g,""),e}function ie(e){if(!/\t/.test(e))return e;var h=["    ","   ","  "," "],a=0,s;return e.replace(/[\n\t]/g,function(l,S){return l===`
`?(a=S+1,l):(s=(S-a)%4,a=S+1,h[s])})}var de=/(?:["'*()[\]:]|~D)/g;function ve(e){if(!e)return"";var h=e.length;return e.replace(de,function(a,s){return a=="~D"?"%24":a==":"&&(s==h-1||/[0-9\/]/.test(e.charAt(s+1)))?":":"%"+a.charCodeAt(0).toString(16)})}function F(e,h,a){var s="(["+h.replace(/([\[\]\\])/g,"\\$1")+"])";a&&(s="\\\\"+s);var l=new RegExp(s,"g");return e=e.replace(l,G),e}function G(e,h){var a=h.charCodeAt(0);return"~E"+a+"E"}};const Fe=ee;const Ke=X.memo(i=>{var k,f,v,r,C,x,O;console.log({Markdown:Fe,TinyPlayer:De});const[t]=we(),[n,o,{navigate:u}]=ye({loading:!0});X.useLayoutEffect(()=>{const y=String(oe.holiday).replace("$var","2023");t==null||t.get(y).then(w=>{var E;const T=(E=w==null?void 0:w.days)==null?void 0:E.reduce((H,z)=>(H[z.name]=H[z.name]||[],z.isOffDay&&H[z.name].push(z.date),H),{});o({days:T,holiday:Object.keys(T)})})},[]);const d=X.useCallback(async y=>{const w=await t.get(oe.analysis,{data:{url:y}});n.tp&&w.data&&(n.tp.options.poster=w.data.cover,n.tp.options.src=w.data.url,n.tp.setup()),o({analysis:w.data?w.data:{}})},[]),B=Q(()=>{const y=n.input||"",w=/http[s]?:\/\/[\w.]+[\w\/]*[\w.]*\??[\w=&:\-\+\%]*[/]*/,[T]=(y==null?void 0:y.match(w))||[];T&&d(T)}),p=Q(y=>{var T;const w=(T=y==null?void 0:y.target)==null?void 0:T.value;n.input=w}),b=Q((y,w)=>{var E,H,z,D;const T=R=>{let A=document.createElement("a");document.body.append(A),A.click(),R&&setTimeout(()=>{const W=window.open(R,"_blank","noopener=yes,noreferrer=yes");W.opener=null},200),A.remove()};switch(w.type){case"1":T((E=n==null?void 0:n.analysis)==null?void 0:E.url);break;case"2":T((H=n==null?void 0:n.analysis)==null?void 0:H.cover);break;case"3":T((D=(z=n==null?void 0:n.analysis)==null?void 0:z.music)==null?void 0:D.url);break}});return L("div",{className:"main",children:V(be,{children:[V("div",{style:{textAlign:"left",paddingBottom:12,fontSize:13},children:[L("span",{children:"目前支持 皮皮虾/抖音/微视/快手/6间房/哔哩哔哩/微博/绿洲/度小视/开眼/陌陌/皮皮搞笑/全民k歌/逗拍/虎牙/新片场/哔哩哔哩/Acfun/美拍/西瓜视频/火山小视频/网易云Mlog/好看视频/QQ小世界 图集解析仅抖音/快手/微博/皮皮虾/最右/皮皮搞笑可用，哔哩哔哩/6间房/微博仅支持下载无法去除水印"}),L("p",{style:{color:"red",fontWeight:600},children:"注意： 个人项目 请勿商用！！！"})]}),L(fe,{placeholder:"请粘贴分享链接",before:L(ge,{fontSize:"18px",search:!0}),after:L(j,{type:"text",style:{borderRadius:0},onClick:B,children:"Search"}),wrapStyle:{width:"80%"},style:{paddingRight:"4rem"},onChange:p,afterClass:"btn-search"}),L("div",{style:{marginTop:20}}),L("div",{id:"tiny-player",style:{maxHeight:390}}),V(me,{style:{marginTop:12},children:[L(Z,{disabled:!!((k=n==null?void 0:n.analysis)!=null&&k.url),label:L("div",{children:" 没有内容 "}),children:L(j,{disabled:!((f=n==null?void 0:n.analysis)!=null&&f.url),type:"1",onClick:b,children:"下载视频"})}),L(Z,{disabled:!!((v=n==null?void 0:n.analysis)!=null&&v.cover),label:L("div",{children:" 没有内容 "}),children:L(j,{disabled:!((r=n==null?void 0:n.analysis)!=null&&r.cover),type:"2",onClick:b,children:"下载封面"})}),L(Z,{disabled:!!((x=(C=n==null?void 0:n.analysis)==null?void 0:C.music)!=null&&x.url),label:L("div",{children:" 没有内容 "}),children:L(j,{disabled:!((O=n==null?void 0:n.analysis)!=null&&O.music.url),type:"3",onClick:b,children:"下载音频"})})]})]})})});export{Ke as default};
