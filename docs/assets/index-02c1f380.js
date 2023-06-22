import{r as L,a as v,j as N}from"./index-0f8ab384.js";import{a as A,I as R,b as I,B as W}from"./index-27264a63.js";import"./useUpdate-7a521557.js";function M(i,e,t,o){return new(t||(t=Promise))(function(s,r){function d(l){try{a(o.next(l))}catch(p){r(p)}}function u(l){try{a(o.throw(l))}catch(p){r(p)}}function a(l){var p;l.done?s(l.value):(p=l.value,p instanceof t?p:new t(function(n){n(p)})).then(d,u)}a((o=o.apply(i,e||[])).next())})}var D={name:"tiny-player",version:"1.0.12",description:"",type:"module",types:"./dist/types/index.d.ts",browser:"./dist/index.min.js",module:"./dist/index.js",files:["dist","package.json"],scripts:{dev:"rollup -c -w","dev-w":"cross-env IS_DEV=true node ./custom-dev.js",build:"rollup -c"},homepage:"https://tiny-player.vercel.app",repository:{type:"git",url:"https://github.com/wangrongding/tiny-player"},keywords:["player","video","mp4","hls","flv","m3u8"],author:"荣顶",license:"MIT",devDependencies:{"@rollup/plugin-alias":"^5.0.0","@rollup/plugin-json":"^6.0.0","@rollup/plugin-node-resolve":"^15.0.2",chokidar:"^3.5.3","cross-env":"^7.0.3","hls.js":"^1.4.5",rollup:"^3.20.6","rollup-plugin-delete":"^2.0.0","rollup-plugin-ejs":"^4.0.0","rollup-plugin-scss":"^4.0.0","rollup-plugin-serve":"^2.0.2","rollup-plugin-svg-import":"^2.0.0","rollup-plugin-terser":"^7.0.2","rollup-plugin-typescript2":"^0.34.1",tslib:"^2.5.2",typescript:"^5.0.4"},peerDependencies:{"hls.js":"^1.4.5"}};(function(i){if(!i||typeof window>"u")return;const e=document.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=i,document.head.appendChild(e)})(`.tp-watermark {
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
`);const F='<svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M44.14 11.437a23.03 23.03 0 00-16.352-6.77 23.025 23.025 0 00-16.347 6.77 22.992 22.992 0 00-4.956 7.352 22.963 22.963 0 00-1.818 9c0 3.122.61 6.152 1.818 9.004a22.976 22.976 0 004.956 7.348 22.996 22.996 0 007.348 4.955 22.963 22.963 0 009 1.819 22.96 22.96 0 009.004-1.819 23.037 23.037 0 007.348-4.955 22.976 22.976 0 004.955-7.348 22.967 22.967 0 001.819-9.004c0-3.119-.611-6.148-1.819-9a22.992 22.992 0 00-4.955-7.352z" stroke-opacity=".6" stroke="#FFF" fill="#1B2337" opacity=".6"/><path d="M23.524 37.109a1.68 1.68 0 01-1.684 0 1.683 1.683 0 01-.84-1.456V20.349c0-.6.32-1.158.84-1.456a1.68 1.68 0 011.684 0l13.251 7.65a1.684 1.684 0 010 2.914L23.524 37.11z" fill="#FFF"/></g></svg>',X='<svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M49.498 18.917a23.2 23.2 0 00-5-7.419 23.238 23.238 0 00-16.5-6.832 23.234 23.234 0 00-16.496 6.832 23.2 23.2 0 00-5 7.419 23.17 23.17 0 00-1.835 9.081c0 3.15.616 6.208 1.835 9.085a23.184 23.184 0 005 7.415 23.204 23.204 0 007.415 5 23.17 23.17 0 009.081 1.835c3.15 0 6.208-.616 9.085-1.835a23.245 23.245 0 007.415-5 23.184 23.184 0 005-7.415 23.175 23.175 0 001.835-9.085 23.17 23.17 0 00-1.835-9.081" stroke-opacity=".6" stroke="#FFF" fill="#1B2337" opacity=".6"/><path d="M21.467 37.333V18.667h4.2v18.666h-4.2zm13.066-18.666v18.666h-4.2V18.667h4.2z" fill="#FFF"/></g></svg>',j='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white"><path d="M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8zM20.576 16q0 1.344-.768 2.528t-2.016 1.664q-.16.096-.448.096-.448 0-.8-.32t-.32-.832q0-.384.192-.64t.544-.448.608-.384.512-.64.192-1.024-.192-1.024-.512-.64-.608-.384-.544-.448-.192-.64q0-.48.32-.832t.8-.32q.288 0 .448.096 1.248.48 2.016 1.664T20.576 16zm4.576 0q0 2.72-1.536 5.056t-4 3.36q-.256.096-.448.096-.48 0-.832-.352t-.32-.8q0-.704.672-1.056 1.024-.512 1.376-.8 1.312-.96 2.048-2.4T22.848 16t-.736-3.104-2.048-2.4q-.352-.288-1.376-.8-.672-.352-.672-1.056 0-.448.32-.8t.8-.352q.224 0 .48.096 2.496 1.056 4 3.36T25.152 16z"/></svg>',U='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white"><path d="M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8zM20.576 16q0 1.344-.768 2.528t-2.016 1.664q-.16.096-.448.096-.448 0-.8-.32t-.32-.832q0-.384.192-.64t.544-.448.608-.384.512-.64.192-1.024-.192-1.024-.512-.64-.608-.384-.544-.448-.192-.64q0-.48.32-.832t.8-.32q.288 0 .448.096 1.248.48 2.016 1.664T20.576 16z"/></svg>',V='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white"><path d="M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8z"/></svg>',_='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 33" fill="white"><path d="M24.965 24.38H6.833a2.482 2.482 0 01-2.478-2.478V10.096a2.482 2.482 0 012.478-2.478h18.132a2.482 2.482 0 012.478 2.478v11.806a2.481 2.481 0 01-2.478 2.478zM6.833 10.097v11.806h18.134l-.002-11.806H6.833zM2.478 28.928H8.43a1.238 1.238 0 100-2.477H2.478v-5.802a1.239 1.239 0 10-2.477 0v5.802a2.481 2.481 0 002.478 2.478zm28.283-9.516c-.684 0-1.238.554-1.238 1.238v5.801h-5.951a1.237 1.237 0 100 2.477h5.951a2.48 2.48 0 002.478-2.478v-5.801c0-.683-.554-1.238-1.239-1.238zM0 5.55v5.802a1.238 1.238 0 002.476 0V5.55h5.952a1.238 1.238 0 100-2.476H2.477A2.48 2.48 0 00-.001 5.55zm32 5.8V5.549a2.48 2.48 0 00-2.478-2.478h-5.951a1.237 1.237 0 100 2.476h5.951v5.801c0 .683.554 1.237 1.238 1.237a1.235 1.235 0 001.239-1.236z"/></svg>',G='<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"/></svg>',q=(i,e)=>{let t=null;return(...o)=>{t||(t=setTimeout(()=>{i(...o),t=null},e))}},z=(i,e)=>{const t=Math.pow(10,e??0);if(i<59.9)return`${i.toFixed(1)}s`;const o=Math.floor(i/60),s=Math.floor(i%60*t)/t;return`${o}:${s<10?`0${s}`:s}`},H=/mobile/i.test(window.navigator.userAgent),O=i=>{if((i=i||0)===0||i===1/0||i.toString()==="NaN")return"00:00";const e=Math.floor(i/3600),t=Math.floor((i-3600*e)/60),o=Math.floor(i-3600*e-60*t);return(e>0?[e,t,o]:[t,o]).map(s=>s<10?"0"+s:""+s).join(":")};class J{constructor(e){this.disableAutoHide=!1,this.playRaf=0,this.initControls=()=>{this.controlElement=document.createElement("div"),this.controlElement.className="tp-control-panel",this.controlElement.innerHTML=function(t,o,s,r){r=r||function(n,h,w,c,k){var m=h.split(`
`),y=Math.max(c-3,0),B=Math.min(m.length,c+3),g=k(w),S=m.slice(y,B).map(function(T,E){var f=E+y+1;return(f==c?" >> ":"    ")+f+"| "+T}).join(`
`);throw n.path=g,n.message=(g||"ejs")+":"+c+`
`+S+`

`+n.message,n},o=o||function(n){return n==null?"":String(n).replace(u,a)};var d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},u=/[&<>'"]/g;function a(n){return d[n]||n}var l=1;try{let n=function(h){h!=null&&(p+=h)};var p="";return n(`<!-- 控制面板 -->

<!-- 播放按钮 -->
<div class="tp-play-icon"></div>
<!-- 底部控制栏 -->
<div class="tp-control-bar">
  <!-- 进度条 -->
  <input type="range" class="tp-seek-slider" min="0" max="100" step="any" value="0" />
  <span class="tp-play-time-tip">0.0s</span>

  <!-- 播放时间 -->
  `),l=12,t.playTime&&(n(`
  <span class="tp-play-time">00:00 / 00:00</span>
  `),l=14),n(`

  <!-- 音量控制 -->
  `),l=17,t.volumeControl&&(n(`
  <div class="tp-volume-bar">
    <i class="tp-volume-icon"></i>
    <input type="range" class="tp-volume-slider" min="0" max="1" step="0.01" value="`),l=20,n(o(t.volume)),n(`" />
  </div>
  `),l=22),n(`

  <!-- 全屏 -->
  `),l=25,t.fullScreenControl&&(n(`
  <i class="tp-fullscreen"></i>
  `),l=27),n(`
</div>
<!-- 加载动画 -->
<div class="tp-loading"></div>
`),l=31,p}catch(n){r(n,`<!-- 控制面板 -->

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
`,void 0,l,o)}}(Object.assign(Object.assign({},this.player.options.controlOptions||{}),{volume:this.player.options.volume})),!this.controlOptions.manualMount&&!this.controlOptions.nativeControls&&this.mountTarget.appendChild(this.controlElement),this.loading=this.controlElement.querySelector(".tp-loading"),this.loading.innerHTML=G,this.loading.style.opacity="0",this.bottomControlBar=this.controlElement.querySelector(".tp-control-bar"),this.bottomControlBar.addEventListener("mousedown",t=>t.stopPropagation()),this.initPlayButton(),this.initSeekBar(),this.initVolumeButton(),this.initFullScreenButton()},this.initPlayButton=()=>{this.playButton=this.controlElement.querySelector(".tp-play-icon"),this.playButton.innerHTML=F,this.playButton.addEventListener("click",this.player.togglePlay)},this.initSeekBar=()=>{this.seekBar=this.controlElement.querySelector(".tp-seek-slider");let t=!1;const o=r=>{r.stopPropagation(),t=!this.player.video.paused,this.player.pause()},s=r=>{r.stopPropagation(),t&&this.player.play()};this.seekBar.addEventListener("mousedown",o),this.seekBar.addEventListener("mouseup",s),this.seekBar.addEventListener("touchstart",o),this.seekBar.addEventListener("touchend",s),this.seekBar.addEventListener("touchmove",r=>r.stopPropagation()),this.seekBar.addEventListener("input",this.onSeeking),this.playTime=this.controlElement.querySelector(".tp-play-time")},this.initVolumeButton=()=>{const t=this.player.options.volume?this.player.options.volume>1?this.player.options.volume/100:this.player.options.volume:1;this.player.video.volume=t,this.controlOptions.volumeControl&&(this.muteButton=this.controlElement.querySelector(".tp-volume-icon"),this.muteButton.addEventListener("click",this.player.mute),this.switchVolumeIcon(),this.volumeSlider=this.controlElement.querySelector(".tp-volume-slider"),this.volumeSlider.addEventListener("input",q(this.onVolumeChange,100)),this.volumeControlBar=this.controlElement.querySelector(".tp-volume-bar"))},this.initFullScreenButton=()=>{this.fullScreenButton=this.controlElement.querySelector(".tp-fullscreen"),this.fullScreenButton&&(this.fullScreenButton.addEventListener("click",this.player.toggleFullScreen),this.fullScreenButton.innerHTML=_)},this.watchControlResize=()=>{new ResizeObserver(q(t=>{for(const o of t){if(!o.contentBoxSize)return;const{inlineSize:s,blockSize:r}=o.contentBoxSize[0];this.playButton.style.display=r<40||s<40?"none":"grid",this.bottomControlBar.style.display=r<75||s<60?"none":"flex",this.playButton.style.scale=r<100||s<100?"0.5":"1",this.fullScreenButton&&s<200?this.fullScreenButton.style.display="none":this.fullScreenButton&&(this.fullScreenButton.style.display="block"),this.playTime&&s<330?this.playTime.style.display="none":this.playTime&&(this.playTime.style.display="block"),this.volumeControlBar&&s<400?this.volumeControlBar.style.display="none":this.volumeControlBar&&(this.volumeControlBar.style.display="flex")}},30)).observe(this.controlElement)},this.initControlsEvent=()=>{this.player.on("waiting",this.onWaiting),this.player.on("timeupdate",this.onTimeupdate),this.player.on("playing",this.onPlaying),this.player.on("canplay",()=>this.toggleLoading(!1)),this.player.on("seeked",()=>this.onSeeked),this.player.on("loadedmetadata",this.initTimeTip),this.player.on("pause",this.setAutoHide),this.player.on("play",this.setAutoHide),this.initMountTargetEvent(),this.watchControlResize()},this.initTimeTip=()=>{const t=this.controlElement.querySelector(".tp-play-time-tip"),o=this.player.duration;let s=!1,r=!1;this.seekBar.addEventListener("input",a=>{const l=a.target;t.textContent=z(+l.value/100*o),H&&s&&!r&&(t.style.display="block")});const d=a=>{const l=this.seekBar.clientWidth;let p=0;if(a instanceof MouseEvent){t.style.display="block",p=a.offsetX;const n=p/l*o;t.textContent=z(n)}if(a instanceof TouchEvent){const n=a.touches[0];let h=a.target.getBoundingClientRect();p=n.clientX-h.left,s=!0}(p<0||p>l)&&(t.style.display="none",r=!0),r=!1,t.style.left=p-t.clientWidth/2+10+"px"};this.seekBar.addEventListener("touchmove",d),this.seekBar.addEventListener("mousemove",d);const u=()=>{setTimeout(()=>{t.style.display="none",s=!1},100)};this.seekBar.addEventListener("mouseleave",u),this.seekBar.addEventListener("touchend",u)},this.initMountTargetEvent=()=>{H&&this.mountTarget.addEventListener("touchstart",this.setAutoHide),this.mountTarget.addEventListener("click",this.setAutoHide),this.mountTarget.addEventListener("mousemove",this.setAutoHide)},this.removeMountTargetEvent=()=>{},this.setAutoHide=()=>{this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(()=>{!this.player.paused&&this.hide()},2e3)},this.show=()=>{this.mountTarget.classList.remove("tp-hide-controller")},this.hide=()=>{this.mountTarget.classList.add("tp-hide-controller")},this.toggle=()=>{this.mountTarget.classList.contains("tp-hide-controller")?this.show():this.hide()},this.updateSeekBar=t=>{this.seekBar.value=((this.player.video.currentTime-this.player.clipStart)/this.player.duration*100).toString(),t||(this.playRaf=window.requestAnimationFrame(()=>this.updateSeekBar()))},this.onSeeking=t=>{t.preventDefault(),t.stopPropagation();const o=t.target,s=Number(parseFloat(o.value)/100*this.player.duration)+Number(this.player.clipStart);this.player.seek(s)},this.onSeeked=()=>{this.playRaf&&cancelAnimationFrame(this.playRaf),this.updateSeekBar(!0)},this.onTimeupdate=()=>{if(!this.playTime&&!this.controlOptions.manualMount)return;const t=+this.seekBar.value*this.player.duration*.01;this.playTime&&(this.playTime.textContent=`${O(t<0?0:t)} / ${O(this.player.duration)}`);const o=this.player.video.currentTime;!this.player.handleVideoEndByOuter&&this.player.clipEnd&&o>=this.player.clipEnd-.1&&(this.player.pause(),this.player.seek(Number(this.player.clipStart)),this.updateSeekBar(!0),this.player.options.loop&&this.player.play())},this.onVolumeChange=t=>{const o=t.target;this.player.volume(Number(o.value))},this.onWaiting=()=>{this.player.paused||(this.player.paused=!0),this.toggleLoading(!0)},this.onPlaying=()=>{this.player.paused&&(this.player.paused=!1),this.toggleLoading(!1)},this.switchVolumeIcon=()=>{this.controlOptions.volumeControl&&(this.player.video.muted||this.player.video.volume===0?this.muteButton.innerHTML=V:this.player.video.volume>0&&this.player.video.volume<1?this.muteButton.innerHTML=U:this.muteButton.innerHTML=j)},this.destroy=()=>{clearTimeout(this.autoHideTimer)},this.player=e,this.controlOptions=e.options.controlOptions||{},this.mountTarget=this.controlOptions.mountTarget||this.player.videoContainer,this.initControls(),this.initControlsEvent()}setVisible(e){e?this.show():this.hide()}toggleLoading(e){e?(this.loading.style.opacity="1",this.playButton.style.opacity="0"):(this.loading.style.opacity="0",this.playButton.style.opacity="1")}}var x,b;(function(i){i.audioprocess="audioprocess",i.canplay="canplay",i.canplaythrough="canplaythrough",i.complete="complete",i.durationchange="durationchange",i.emptied="emptied",i.ended="ended",i.loadeddata="loadeddata",i.loadedmetadata="loadedmetadata",i.pause="pause",i.play="play",i.playing="playing",i.progress="progress",i.ratechange="ratechange",i.seeked="seeked",i.seeking="seeking",i.stalled="stalled",i.suspend="suspend",i.timeupdate="timeupdate",i.volumechange="volumechange",i.waiting="waiting",i.error="error",i.abort="abort",i.loadstart="loadstart",i.mozaudioavailable="mozaudioavailable"})(x||(x={})),function(i){i.destroy="destroy",i.resize="resize",i.screenshot="screenshot"}(b||(b={}));class K{constructor(e){this.events={},this.player=e,this.videoEvents=Object.keys(x).map(t=>x[t]),this.playerEvents=Object.keys(b).map(t=>b[t])}type(e){return this.playerEvents.indexOf(e)!==-1?"player":this.videoEvents.indexOf(e)!==-1?"video":(console.error(`${e} 事件不存在，请查看下文档`),null)}on(e,t){const o=this.type(e);if(o&&typeof t!="function")return console.error(`${e} 事件的回调函数必须是一个函数`);this.events[e]||(this.events[e]=[]),this.events[e].push(t),o==="video"&&this.player.video.addEventListener(e,t),o==="player"&&this.events[e].push(t)}off(e,t){if(this.type(e)&&this.events[e]&&this.events[e].length){const o=this.events[e].indexOf(t);if(o===-1)return;this.events[e].splice(o,1),this.type(e)==="video"&&this.player.video.removeEventListener(e,t)}}emit(e,t){this.events[e]&&this.events[e].length&&this.events[e].forEach(o=>{o(t)})}once(e,t){const o=(...s)=>{t(...s),this.off(e,o)};this.on(e,o)}}const{name:$,version:P}=D;console.log(`
 %c ${$} v${P} 
`,"color: white; font-size: 18px; background: linear-gradient(45deg, #ff0000 0%, #0092ff 80%);");class C{constructor(e){this.paused=!0,this.videoType="auto",this.duration=0,this.handleVideoEndByOuter=!1,this.onLoadedMetadata=()=>{this.duration=this.clipEnd-this.clipStart||this.video.duration,this.controller.onTimeupdate()},this.onPlay=()=>{this.paused=!1;const t=this.controller.playButton;t&&(t.innerHTML=X),this.controller.updateSeekBar()},this.onPause=()=>{this.paused=!0;const t=this.controller.playButton;t&&(t.innerHTML=F),cancelAnimationFrame(this.controller.playRaf)},this.play=()=>M(this,void 0,void 0,function*(){yield this.video.play()}),this.pause=()=>M(this,void 0,void 0,function*(){yield this.video.pause()}),this.togglePlay=t=>M(this,void 0,void 0,function*(){this.video.paused?yield this.play():yield this.pause()}),this.seek=t=>{this.video.currentTime=Number(t)},this.mute=()=>{this.video.muted=!this.video.muted,this.controller.volumeSlider.value=this.video.muted?"0":this.video.volume+"",this.controller.muteButton.innerHTML=this.video.muted?V:j},this.toggleFullScreen=()=>{document.fullscreenElement?document.exitFullscreen():this.videoContainer.requestFullscreen()},this.handleWaterMarkShow=t=>{this.waterMark&&(this.waterMark.style.display=t?"block":"none")},this.mountController=t=>{this.options.controlOptions.nativeControls||(this.controller.removeMountTargetEvent(),this.controller.mountTarget=t,this.controller.initMountTargetEvent(),t.appendChild(this.controller.controlElement))},this.cutVideo=(t,o)=>{this.clipStart=t,this.clipEnd=o,this.duration=o-t,this.seek(t),this.controller.initTimeTip(),this.controller.updateSeekBar(!0)},this.destroy=()=>{this.pause(),this.video.src="",this.container.innerHTML="",this.controller.destroy()},this.container=e.container,this.options=e,this.clipStart=e.clipStart||0,this.clipEnd=e.clipEnd||0,this.handleVideoEndByOuter=e.handleVideoEndByOuter||!1,this.setup()}setup(){this.videoContainer=document.createElement("div"),this.videoContainer.className="tp-container",this.videoContainer.style.width=this.options.width||"100%",this.videoContainer.style.height=this.options.height||"100%",this.videoContainer.innerHTML=function(e,t,o,s){var p;s=s||function(n,h,w,c,k){var m=h.split(`
`),y=Math.max(c-3,0),B=Math.min(m.length,c+3),g=k(w),S=m.slice(y,B).map(function(T,E){var f=E+y+1;return(f==c?" >> ":"    ")+f+"| "+T}).join(`
`);throw n.path=g,n.message=(g||"ejs")+":"+c+`
`+S+`

`+n.message,n},t=t||function(n){return n==null?"":String(n).replace(d,u)};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},d=/[&<>'"]/g;function u(n){return r[n]||n}var a=1;try{let n=function(h){h!=null&&(l+=h)};var l="";return n(`<!-- prettier-ignore -->
<video 
  class="tp-video"
  crossorigin="anonymous"
  webkit-playsinline
  playsinline
  src="`),a=7,n(t(e.src)),n(`" 
  `),a=8,(p=e==null?void 0:e.controlOptions)!=null&&p.nativeControls&&n(" controls "),n(` 
  `),a=9,e.autoplay&&n(" autoplay "),n(` 
  `),a=10,e.muted&&n(" muted "),n(` 
  `),a=11,e.airplay&&n(" airplay "),n(` 
  `),a=12,e.airplay&&n(' x-webkit-airplay="allow" '),n(` 
  `),a=13,e.preload&&(n(' src="'),n(t(e.preload)),n('" ')),n(` 
  `),a=14,e.poster&&(n(' poster="'),n(t(e.poster)),n('" ')),n(` 
  `),a=15,e.volume&&(n(' src="'),n(t(e.volume)),n('" ')),n(` 
  `),a=16,e.playbackSpeed&&(n(' src="'),n(t(e.playbackSpeed)),n('" ')),n(` 
  `),a=17,e.anonymous&&(n(' src="'),n(t(e.anonymous)),n('" ')),n(` 
>
  你的浏览器不支持 video 标签，换个浏览器试试？
</video>
<!-- 水印 -->
<div class="tp-watermark" style="display: none"></div>
`),a=23,l}catch(n){s(n,`<!-- prettier-ignore -->
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
`,void 0,a,t)}}(this.options),this.container.innerHTML="",this.container.appendChild(this.videoContainer),this.video=this.videoContainer.querySelector("video"),this.waterMark=this.videoContainer.querySelector(".tp-watermark"),this.waterMark.style.backgroundImage=`url(${this.options.waterMarkUrl})`,this.events=new K(this),this.initVideo(),this.controller=new J(this),this.handleWaterMarkShow(this.options.waterMarkShow),this.seek(this.clipStart)}initVideo(){this.initMSE(this.video,this.options.type),this.on("play",this.onPlay),this.on("pause",this.onPause),this.on("ended",()=>{this.clipEnd||(this.options.loop?(!this.paused&&this.seek(this.clipStart),this.play()):(!this.paused&&this.seek(this.clipStart),this.pause()),this.controller.updateSeekBar(!0))}),this.on("loadedmetadata",this.onLoadedMetadata)}on(e,t){this.events.on(e,t)}once(e,t){this.events.once(e,t)}emit(e,t){this.events.emit(e,t)}off(e,t){this.events.off(e,t)}initMSE(e,t){switch(this.videoType=t,t==="auto"&&(/m3u8(#|\?|$)/i.exec(e.src)&&(this.videoType="hls"),/.flv(#|\?|$)/i.exec(e.src)&&(this.videoType="flv"),/.mpd(#|\?|$)/i.exec(e.src)&&(this.videoType="dash"),this.videoType="normal"),this.videoType){case"flv":console.error("暂不支持 flv 格式视频");break;case"dash":console.error("暂不支持 dash 格式视频")}console.log(`🚀🚀🚀 MSE: 预设播放模式：${t},实际播放模式：${this.videoType}, 视频链接：${e.src}`)}volume(e){let t=parseFloat(e||0);return isNaN(t)||(t=Math.max(t,0),t=Math.min(t,1),this.video.volume=t,this.video.muted&&(this.video.muted=!1),this.controller.switchVolumeIcon()),this.video.volume}}C.title=$,C.version=P;const tt=L.memo(i=>(L.useLayoutEffect(()=>{const e=new C({container:document.querySelector("#tiny-player"),poster:"https://tiny-player.vercel.app/movie.png",controls:!0,loop:!0,volume:.9,autoplay:!1,controlOptions:{playTime:!0,volumeControl:!0,fullScreenControl:!0,mountTarget:null,nativeControls:!1},preload:"metadata",src:"https://tiny-player.vercel.app/movie.mp4",type:"auto",waterMarkShow:!0,waterMarkUrl:"https://assets.fedtop.com/picbed/202306091010648.png",width:"500px"});console.log({tp:e})},[]),v("div",{className:"content",children:N(A,{open:!1,style:{padding:48},className:"frosted",children:[v(R,{placeholder:"请粘贴分享链接",before:v(I,{fontSize:"18px",search:!0}),after:v(W,{type:"text",compact:!0,children:"Search"}),wrapStyle:{width:"80%"}}),v("div",{style:{marginTop:20}}),v("div",{id:"tiny-player"})]})})));export{tt as default};
