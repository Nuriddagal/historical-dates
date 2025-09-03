(()=>{"use strict";var e,t={539:(e,t,o)=>{var r=o(4848),n=o(5338),i=o(7581);o(4620),o(9687),o(6321);const a=i.DU`
  :root {
    --primary-color: #5D5FEF;
    --secondary-color: #EF5DA8;
    --second-primary: #42567A;
    --primary-font: 'PT Sans', sans-serif;
    --secondary-font: "Bebas Neue", sans-serif;
  }
  /* Сброс стилей */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: var(--primary-font);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     line-height: 1.4;
    letter-spacing: 0;
    background-color: #e5e5e5;
    color: var(--secondary-color);
    text-rendering: optimizeLegibility;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }
`,s=i.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;var l=o(6540),c=o(3325),A=o(150);o(1583),o(3535),o(6709);const d=i.Ay.div`
  --nav-size: 32px;
  --nav-border: 2px;
  --nav-color: #42567a;
  --nav-bg-hover: #42567a;
  --nav-color-hover: #fff;
  --nav-bottom-mobile: 10px;
  --nav-bottom-desktop: 25%;
  --divider-color: #42567a50;

  width: 100%;
  height: 100vh;
  position: relative;
  margin: auto;

  .custom-prev,
  .custom-next,
  [class*='custom-prev-'],
  [class*='custom-next-'] {
    position: absolute;
    z-index: 11;
    color: var(--nav-color);
    width: var(--nav-size);
    height: var(--nav-size);
    border: var(--nav-border) solid var(--nav-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    transition: background-color 0.2s ease, color 0.2s ease, opacity 0.2s ease,
      transform 0.15s ease;
    user-select: none;
    bottom: var(--nav-bottom-mobile);
    top: auto;
    margin-top: 0;
    cursor: pointer;
    /* accessibility focus */
    &:focus {
      outline: 3px solid rgba(66, 86, 122, 0.12);
      outline-offset: 4px;
    }
  }

  @media (min-width: 1024px) {
    width: 70%;
    border-right: 1px solid var(--divider-color);
    border-left: 1px solid var(--divider-color);

    &::after {
      content: '';
      position: absolute;
      width: 1px;
      height: 100%;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--divider-color);
    }
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      top: 50%;
      transform: translateY(-50%);
      background-color: var(--divider-color);
    }

    .custom-prev,
    .custom-next,
    [class*='custom-prev-'],
    [class*='custom-next-'] {
      bottom: var(--nav-bottom-desktop);
    }
  }

  .custom-next,
  [class*='custom-next-'] {
    left: 52px;
    @media (min-width: 1024px) {
      left: 77px;
    }
  }
  .custom-prev,
  [class*='custom-prev-'] {
    left: 10px;
    @media (min-width: 1024px) {
      left: 25px;
    }
  }

  .custom-next.swiper-button-disabled,
  .custom-prev.swiper-button-disabled,
  [class*='custom-next-'].swiper-button-disabled,
  [class*='custom-prev-'].swiper-button-disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .custom-prev::after,
  .custom-next::after,
  [class*='custom-prev-']::after,
  [class*='custom-next-']::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 10px;
    height: 10px;
    border-top: 2px solid var(--nav-color);
    border-right: 2px solid var(--nav-color);
    pointer-events: none;
  }
  .custom-prev::after,
  [class*='custom-prev-']::after {
    transform: translate(-50%, -50%) rotate(-135deg);
  }

  .custom-prev:hover,
  .custom-next:hover,
  [class*='custom-prev-']:hover,
  [class*='custom-next-']:hover {
    background-color: var(--nav-bg-hover);
    color: var(--nav-color-hover);
  }

  .custom-bullets {
    position: absolute;
    bottom: 32px;
    z-index: 10;
  }

  & .swiper-pagination-bullet {
    background: rgba(66, 86, 122, 0.35);
    opacity: 1;
  }
  & .swiper-pagination-bullet-active {
    background: var(--nav-color);
  }
`,p=(0,i.Ay)(c.RC)`
  width: 100%;
  height: fit-content;
`,u=i.Ay.div`
  .swiper-pagination-bullet {
    background: rgba(66, 86, 122, 0.35);
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: #42567a;
  }
`,f=i.Ay.div`
  position: absolute;
  bottom: 52px;
  left: 15px;
  color: #42567a;
  font-weight: bold;
  font-size: 16px;

  @media (min-width: 1024px) {
    left: 25px;
    bottom: 30%;
  }
`,v=i.Ay.p`
  position: absolute;
  top: 30%;
  text-align: center;
  width: 100%;
  font-family: var(--primary-font);
  font-weight: 600;
  font-size: 58px;
  user-select: none;

  @media (min-width: 1024px) {
    transform: translateY(-50%);
    font-size: 150px;
    top: 50%;
  }
`,g=i.Ay.span`
  color: var(--primary-color);
  margin-right: 50px;
`,m=i.Ay.span`
  color: var(--secondary-color);
`,x=i.I4.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .swiper-pagination-horizontal {
    width: 400px;
    height: 400px;
  }
`,h=i.I4.div`
  position: relative;
  box-sizing: border-box;
  transform-origin: 50%;

  &::before {
    content: '';
    position: absolute;
    left: 51.43%;
    top: 50%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    border: 1px solid var(--second-primary, #cfcfcf);
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 0;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.02),
      transparent 60%
    );
  }

  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #42567a;
    position: absolute;
    transform: translate(-50%, -50%);
    pointer-events: auto;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: #fff;
    transition: all 0.1s;
    opacity: 1;

    &::after {
      content: attr(data-index);
      font-size: 18px;
      display: none;
    }

    .bullet-label {
      content: attr(data-name);
      position: absolute;
      left: 130%;
      font-variant: small-caps;
      font-size: 20px;
      opacity: 0;
    }
  }

  .swiper-pagination-bullet-active,
  .swiper-pagination-bullet-active.active-bullet {
    width: 40px;
    height: 40px;
    background-color: #e5e5e5;
    border: 1px solid #42567a;
    color: #42567a;
    font-weight: bold;
  }

  .swiper-pagination-bullet-active::after,
  .swiper-pagination-bullet-active.active-bullet::after {
    display: block;
  }

  .swiper-pagination-bullet-active,
  .swiper-pagination-bullet-active.active-bullet {
    .bullet-label {
      transition: opacity ease-in-out 2s;
      opacity: 1;
    }
  }

  .swiper-pagination-bullet:hover,
  .swiper-pagination-bullet.inactive-bullet:hover {
    width: 40px;
    height: 40px;
    background-color: #e5e5e5;
    border: 1px solid #42567a;
    color: #42567a;
    font-weight: bold;

    &::after {
      display: block;
    }
  }
`,b=({pagRef:e,classNameSuffix:t})=>(0,r.jsx)(x,{children:(0,r.jsx)(h,{ref:e,className:`pagination-circle-${t}`})});var y=o(5880);const w=i.I4.p`
  font-family: var(--secondary-font);
  color: var(--primaty-color);
  width: 100%;
`,B=i.I4.p`
  font-family: var(--primary-font);
  color: var(--second-primary);
`,j=i.I4.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 250px;
  width: 250px;
`,E=({year:e,description:t})=>(0,r.jsxs)(j,{className:"event-wrap",children:[(0,r.jsx)(w,{children:e}),(0,r.jsx)(B,{children:t})]}),Y=i.Ay.div`
  width: 100%;
  position: absolute;
  top: 50%;
  z-index: 20;
  @media (min-width: 1024px) {
    top: auto;
    bottom: 5%;
  }
  .event-prev,
  .event-next {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 1px 1px 10px gray;
    opacity: 1;
    @media (max-width: 1024px) {
      opacity: 0;
    }
    top: 50%;
    transform: rotateY(-50%);
  }
  .event-next {
    right: 20px;
  }
  .event-prev {
    left: 20px;
  }
  .event-prev::after,
  .event-next::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 30%;
    width: 10px;
    height: 10px;
    border-top: 2px solid #3877ee;
    border-right: 2px solid #3877ee;
    transform: rotate(45deg);
    font-size: 18px;
    font-weight: bold;
  }
  .event-prev::after {
    transform: rotate(-135deg);
    left: 12px;
  }
  .event-prev.swiper-button-disabled,
  .event-next.swiper-button-disabled {
    transition: opacity ease 0.3s;
    opacity: 0;
  }
`,k=i.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`,C=i.Ay.div`
  display: block;
  width: 80%;
  height: 1px;
  background-color: var(--second-primary);
  @media (min-width: 1024px) {
    display: none;
  }
`,G=i.Ay.p`
  width: 80%;
  text-align: start;
  font-variant: small-caps;
  font-size: 18px;
  font-weight: 600;
  color: var(--second-primary);
  @media (min-width: 1024px) {
    display: none;
  }
`,z=(0,i.Ay)(c.RC)`
  @media (min-width: 1024px) {
    width: 90%;
  }
  width: 100%;
  margin-top: 15px;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`,I=({data:e,name:t})=>{const o=(0,l.useRef)(null),n=(0,l.useRef)([]);return(0,l.useLayoutEffect)(()=>{const t=JSON.stringify(n.current)!==JSON.stringify(e);if(!o.current||!t)return;const r=o.current.querySelectorAll(".name, .devider");y.Ay.fromTo(r,{y:30,opacity:0},{y:0,opacity:1,duration:1,ease:"power2.out",clearProps:"transform, opacity"});const i=Array.from(o.current.querySelectorAll(".event-wrap"));i.length>0&&(y.Ay.killTweensOf(i),y.Ay.fromTo(i,{y:30,opacity:0},{y:0,opacity:1,duration:1,ease:"power2.out",clearProps:"transform, opacity"})),n.current=e},[e]),e.length?(0,r.jsxs)(Y,{ref:o,children:[(0,r.jsxs)(k,{children:[(0,r.jsx)(G,{className:"name",children:t}),(0,r.jsx)(C,{className:"devider"})]}),(0,r.jsx)(z,{modules:[A.U1,A.Vx],freeMode:!0,spaceBetween:20,navigation:{enabled:!0,prevEl:".event-prev",nextEl:".event-next"},slidesOffsetBefore:25,slidesOffsetAfter:25,breakpoints:{320:{slidesPerView:1.5},768:{slidesPerView:2},1024:{slidesPerView:3}},children:e.map(e=>(0,r.jsx)(c.qr,{children:(0,r.jsx)(E,{year:e.year,description:e.description})},e.id))}),(0,r.jsx)("button",{type:"button",className:"event-prev"}),(0,r.jsx)("button",{type:"button",className:"event-next"})]}):(0,r.jsx)("div",{children:"Loading"})};const N=i.I4.div`
  position: absolute;
  top: 10%;
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  margin-top: auto;
`,M=i.I4.h1`
  width: fit-content;
  font-size: 24px;
  font-weight: bold;
  margin-left: 30px;
  color: var(--second-primary);
  @media (min-width: 1024px) {
    font-size: 58px;
  }
`,R=i.I4.span`
  display: none;
  width: 3px;
  height: 100%;
  background: linear-gradient(to bottom, #3877ee, #ef5da8);
  @media (min-width: 1024px) {
    display: block;
  }
`,P=({sliderId:e})=>{const{rangeArr:t,dateArr:o,currentEnd:n,currentRange:i,currentStart:a,setCurrentEnd:s,setCurrentRange:x,setCurrentStart:h,loading:w,error:B}=function(){const[e,t]=(0,l.useState)([]),[o,r]=(0,l.useState)([]),[n,i]=(0,l.useState)(!0),[a,s]=(0,l.useState)(null),[c,A]=(0,l.useState)(0),[d,p]=(0,l.useState)(0),[u,f]=(0,l.useState)("");return(0,l.useEffect)(()=>{(()=>{var e,o,n,a;e=this,o=void 0,a=function*(){var e,o,n;const[a,s]=yield Promise.all([fetch("https://68b199a2a860fe41fd5efb5e.mockapi.io/api/hisdate/dateRange").then(e=>e.json()),fetch("https://68b199a2a860fe41fd5efb5e.mockapi.io/api/hisdate/historicalEvents").then(e=>e.json()).finally(()=>i(!1))]);t(a),r(s),A((null===(e=a[0])||void 0===e?void 0:e.dateStart)||0),p((null===(o=a[0])||void 0===o?void 0:o.dateEnd)||0),f((null===(n=a[0])||void 0===n?void 0:n.name)||"")},new((n=void 0)||(n=Promise))(function(t,r){function i(e){try{l(a.next(e))}catch(e){r(e)}}function s(e){try{l(a.throw(e))}catch(e){r(e)}}function l(e){var o;e.done?t(e.value):(o=e.value,o instanceof n?o:new n(function(e){e(o)})).then(i,s)}l((a=a.apply(e,o||[])).next())})})()},[]),{rangeArr:e,dateArr:o,loading:n,error:a,currentEnd:d,currentRange:u,currentStart:c,setCurrentEnd:p,setCurrentRange:f,setCurrentStart:A}}(),[j,E]=(0,l.useState)(1),Y=(0,l.useRef)(null),k=(0,l.useRef)(null),C=(0,l.useRef)(null),[G,z]=(0,l.useState)(window.innerWidth>=1024),P=t.map(e=>e.name),{setupBullets:S}=((e,t,o,r)=>{var n,i;const a=null!==(n=null==r?void 0:r.ringDiameter)&&void 0!==n?n:400,s=null!==(i=null==r?void 0:r.anchorAngle)&&void 0!==i?i:-60,c=(0,l.useCallback)(r=>{const n=e.current;if(!n)return;const i=Array.from(n.querySelectorAll(".swiper-pagination-bullet"));if(!i.length)return;const l=i.length,c=a/2,A=360/l;i.forEach((e,o)=>{var r;if(e.setAttribute("data-index",`${o+1}`),!e.querySelector(".bullet-label")){const n=null!==(r=t[o])&&void 0!==r?r:"",i=document.createElement("span");i.className="bullet-label",i.textContent=n,e.appendChild(i)}const n=A*o*Math.PI/180,i=c+c*Math.cos(n),a=c+c*Math.sin(n);e.style.left=`${i}px`,e.style.top=`${a}px`,y.Ay.set(e,{rotation:0}),e.style.pointerEvents="auto",e.style.cursor="pointer"});const d={val:s-A*r.activeIndex};y.Ay.set(n,{rotation:d.val,transformOrigin:"50% 50%"}),i.forEach(e=>y.Ay.set(e,{rotation:-d.val}));const p=(e,t=.6)=>{const o=((s-A*e-d.val+180)%360+360)%360-180;d.val=Math.round(1e3*(d.val+o))/1e3,y.Ay.to(n,{rotation:d.val,duration:t,ease:"power2.out",onUpdate:()=>{var e;const t=null!==(e=y.Ay.getProperty(n,"rotation"))&&void 0!==e?e:d.val;i.forEach(e=>y.Ay.set(e,{rotation:-t}))}})};i.forEach((e,t)=>{e.__customClick&&e.removeEventListener("click",e.__customClick);const o=e=>{e.stopPropagation(),r.animating||(r.params.loop?r.slideToLoop(t,600,!0):r.slideTo(t,600,!0),p(t,.6))};e.addEventListener("click",o),e.__customClick=o});const u=()=>{p(r.activeIndex),o(r.activeIndex+1),i.forEach((e,t)=>{t===r.activeIndex?(e.classList.add("active-bullet"),e.classList.remove("inactive-bullet")):(e.classList.remove("active-bullet"),e.classList.add("inactive-bullet"))})};r.on("slideChange",u),r.on("destroy",()=>{i.forEach(e=>{e.__customClick&&(e.removeEventListener("click",e.__customClick),delete e.__customClick)}),r.off("slideChange",u)})},[e,t,o,a,s]);return{setupBullets:c}})(k,P,E,{ringDiameter:400}),Q=(e,t,o)=>{y.Ay.to({val:e},{val:t,duration:1,ease:"power2.out",onUpdate:function(){o(Math.round(this.targets()[0].val))}})};return(0,l.useEffect)(()=>{const e=()=>z(window.innerWidth>=1024);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),!t.length||w?(0,r.jsx)("p",{children:"Loading..."}):(0,r.jsxs)(d,{children:[(0,r.jsxs)(N,{children:[(0,r.jsx)(R,{})," ",(0,r.jsxs)(M,{children:["Исторические",(0,r.jsx)("br",{})," даты"]})]}),(0,r.jsxs)(v,{children:[(0,r.jsx)(g,{children:a}),(0,r.jsx)(m,{children:n})]}),G&&(0,r.jsx)(b,{classNameSuffix:e,pagRef:k}),(0,r.jsx)(p,{modules:[A.dK,A.Vx],pagination:{clickable:!0,el:G?`.pagination-circle-${e}`:`.custom-bullets-${e}`},navigation:{prevEl:`.custom-prev-${e}`,nextEl:`.custom-next-${e}`},onInit:S,onSlideChange:e=>{const o=t[e.activeIndex];x(o.name),Q(a,o.dateStart,h),Q(n,o.dateEnd,s)},onSwiper:e=>Y.current=e,children:t.map(e=>(0,r.jsx)(c.qr,{},e.id))}),(0,r.jsx)(I,{data:o.filter(e=>e.name===i),name:i}),(0,r.jsx)(u,{className:`custom-bullets-${e} swiper-pagination`}),(0,r.jsxs)(f,{ref:C,className:"custom-fraction",children:[j," / ",t.length]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{type:"button",className:`custom-prev custom-prev-${e}`}),(0,r.jsx)("button",{type:"button",className:`custom-next custom-next-${e}`})]})]})};(0,n.createRoot)(document.getElementById("root")).render((0,r.jsx)(()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{}),(0,r.jsxs)(s,{children:[(0,r.jsx)(P,{sliderId:"first"}),(0,r.jsx)(P,{sliderId:"second"}),(0,r.jsx)(P,{sliderId:"third"})]})]}),{}))},6085:e=>{e.exports="data:application/font-woff;charset=utf-8;base64, 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"}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var i=o[e]={id:e,exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,o,n,i)=>{if(!o){var a=1/0;for(A=0;A<e.length;A++){for(var[o,n,i]=e[A],s=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every(e=>r.O[e](o[l]))?o.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(A--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var A=e.length;A>0&&e[A-1][2]>i;A--)e[A]=e[A-1];e[A]=[o,n,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.p="/",(()=>{r.b=document.baseURI||self.location.href;var e={792:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,i,[a,s,l]=o,c=0;if(a.some(t=>0!==e[t])){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var A=l(r)}for(t&&t(o);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(A)},o=self.webpackChunkhistorical_date=self.webpackChunkhistorical_date||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),r.nc=void 0;var n=r.O(void 0,[480],()=>r(539));n=r.O(n)})();
//# sourceMappingURL=main.fc341b65e0257e0b14af.js.map