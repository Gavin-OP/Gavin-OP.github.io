import{r as A,j as o,R as F,u as Ut,a as $t,s as Cn,g as Tn,b as Fn}from"./index-BDMOJV3N.js";const Ln=14,Mn=8,st=[{label:"Profile",target:"profile"},{label:"Internship",mobileLabel:"Intern",target:"internship"},{label:"Project",target:"project"},{label:"Contact",target:"contact"}];function Rn(){const[e,t]=A.useState(!0),[n,a]=A.useState(!0),[r,i]=A.useState("profile"),s=A.useRef({lastPosition:0,accumulatedDistance:0,direction:null,animationFrame:null});A.useEffect(()=>{const c=s.current;c.lastPosition=window.scrollY;const u=()=>{const g=Math.max(window.scrollY,0),h=g<=Mn,m=g-c.lastPosition;if(a(h),h)c.accumulatedDistance=0,c.direction=null,t(!0);else if(m!==0){const y=m>0?"down":"up";y!==c.direction&&(c.direction=y,c.accumulatedDistance=0),c.accumulatedDistance+=Math.abs(m),c.accumulatedDistance>=Ln&&(t(y==="up"),c.accumulatedDistance=0)}c.lastPosition=g,c.animationFrame=null},d=()=>{c.animationFrame===null&&(c.animationFrame=window.requestAnimationFrame(u))};return window.addEventListener("scroll",d,{passive:!0}),()=>{window.removeEventListener("scroll",d),c.animationFrame!==null&&window.cancelAnimationFrame(c.animationFrame)}},[]),A.useEffect(()=>{const c=st.map(d=>document.getElementById(d.target)).filter(Boolean),u=new IntersectionObserver(d=>{const g=d.filter(h=>h.isIntersecting).sort((h,m)=>m.intersectionRatio-h.intersectionRatio)[0];g&&i(g.target.id)},{rootMargin:"-20% 0px -55%",threshold:[.1,.4]});return c.forEach(d=>u.observe(d)),()=>u.disconnect()},[]),A.useEffect(()=>{if(!window.location.hash)return;const c=window.location.hash.replace("#",""),u=document.getElementById(c);u&&window.requestAnimationFrame(()=>{u.scrollIntoView({block:"start",behavior:"smooth"})})},[]);const l=c=>{if(!c)return;const u=document.getElementById(c);u&&(window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}#${c}`),u.scrollIntoView({block:"start",behavior:"smooth"}))};return o.jsx("nav",{className:["site-nav",e?"site-nav--visible":"site-nav--hidden",n?"site-nav--at-top":"site-nav--scrolled"].join(" "),"aria-label":"Primary",children:o.jsx("ul",{className:"site-nav__list",children:st.map(c=>o.jsx("li",{className:"site-nav__item",children:o.jsxs("button",{className:`site-nav__link ${r===c.target?"site-nav__link--active":""}`,onClick:()=>l(c.target),children:[o.jsx("span",{className:"site-nav__desktop-label",children:c.label}),o.jsx("span",{className:"site-nav__mobile-label",children:c.mobileLabel||c.label})]})},c.target))})})}var Gt={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ot=F.createContext&&F.createContext(Gt),zn=["attr","size","title"];function Dn(e,t){if(e==null)return{};var n=Wn(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Wn(e,t){if(e==null)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}function fe(){return fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},fe.apply(this,arguments)}function lt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lt(Object(n),!0).forEach(function(a){Hn(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Hn(e,t,n){return t=Yn(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yn(e){var t=Un(e,"string");return typeof t=="symbol"?t:t+""}function Un(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Bt(e){return e&&e.map((t,n)=>F.createElement(t.tag,ue({key:n},t.attr),Bt(t.child)))}function ne(e){return t=>F.createElement($n,fe({attr:ue({},e.attr)},t),Bt(e.child))}function $n(e){var t=n=>{var{attr:a,size:r,title:i}=e,s=Dn(e,zn),l=r||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),F.createElement("svg",fe({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,s,{className:c,style:ue(ue({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&F.createElement("title",null,i),e.children)};return ot!==void 0?F.createElement(ot.Consumer,null,n=>t(n)):t(Gt)}function Gn(e){return ne({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},child:[]}]})(e)}function Bn(e){return ne({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"},child:[]}]})(e)}function Vn(e){return ne({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"},child:[]}]})(e)}function Xn(){const e=new Date().getFullYear(),t=[{id:"email",icon:o.jsx(Gn,{size:25}),label:"HaoxiangZhang@link.cuhk.edu.hk",mobileLabel:"HaoxiangZhang@link...",href:"mailto:HaoxiangZhang@link.cuhk.edu.hk"},{id:"github",icon:o.jsx(Vn,{size:25}),label:"https://github.com/Gavin-OP",mobileLabel:"@Gavin-OP",href:"https://github.com/Gavin-OP"},{id:"linkedin",icon:o.jsx(Bn,{size:25}),label:"https://www.linkedin.com/in/gavin-zhang-op",mobileLabel:"/gavin-zhang-op",href:"https://www.linkedin.com/in/gavin-zhang-op"}];return o.jsxs("footer",{id:"contact",className:"site-footer",children:[o.jsxs("div",{className:"site-footer__mobile-signoff",children:[o.jsxs("p",{children:["Perfectly",o.jsx("br",{}),o.jsx("span",{children:"balanced."})]}),o.jsx("p",{children:"Hi, this is OP."})]}),o.jsx("div",{className:"site-footer__content",children:o.jsx("div",{className:"site-footer__contact",children:o.jsx("ul",{className:"site-footer__list",children:t.map(n=>o.jsx("li",{className:"site-footer__item",children:o.jsxs("a",{className:"site-footer__link",href:n.href,target:n.id==="email"?void 0:"_blank",rel:n.id==="email"?void 0:"noreferrer",children:[o.jsxs("span",{className:"site-footer__desktop-contact",children:[n.icon,o.jsx("span",{children:n.label})]}),o.jsxs("span",{className:"site-footer__mobile-contact",children:[o.jsx("strong",{children:n.id}),o.jsx("span",{children:n.mobileLabel}),o.jsx("span",{"aria-hidden":"true",children:"↗"})]})]})},n.id))})})}),o.jsx("div",{className:"site-footer__bottom",children:o.jsxs("p",{className:"site-footer__copyright",children:["© 2022–",e," ZHANG Haoxiang. All rights reserved."]})})]})}const qn=({children:e,showNav:t=!0})=>o.jsxs("div",{className:"main-layout",children:[t&&o.jsx(Rn,{}),o.jsx("main",{className:"main-layout__content",children:e}),o.jsx(Xn,{})]}),Kn=()=>o.jsxs("section",{id:"profile",className:"profile-hero",children:[o.jsx("div",{className:"profile-hero__spacer"}),o.jsxs("div",{className:"profile-hero__mobile-content",children:[o.jsxs("div",{className:"profile-hero__mobile-lockup","aria-label":"Hi, this is OP.",children:[o.jsx("p",{className:"profile-hero__mobile-hi",children:"Hi,"}),o.jsxs("p",{className:"profile-hero__mobile-name",children:["This is ",o.jsx("span",{children:"OP."})]})]}),o.jsx("p",{className:"profile-hero__mobile-real-name",children:"ZHANG Haoxiang · Gavin"}),o.jsxs("div",{className:"profile-hero__mobile-intro",children:[o.jsxs("p",{children:["I am a ",o.jsx("span",{children:"Quantitative Finance and Risk Management"})," ","undergraduate at CUHK."]}),o.jsx("p",{children:"Perfectly balanced. Aspire to be Quant."})]})]}),o.jsxs("div",{className:"profile-hero__content",children:[o.jsxs("div",{className:"profile-hero__identity",children:[o.jsx("h1",{children:"Gavin"}),o.jsx("h2",{children:"ZHANG Haoxiang"})]}),o.jsxs("div",{className:"profile-hero__intro",children:[o.jsx("p",{className:"profile-hero__tagline",children:"Hi, this is OP."}),o.jsxs("p",{children:["I am a ",o.jsx("span",{children:"Quantitative Finance and Risk Management"})," ","undergraduate at CUHK."]}),o.jsx("p",{children:"Perfectly balanced. Aspire to be Quant."})]})]}),o.jsx("div",{className:"profile-hero__divider"})]});function Qn(e){return ne({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M752.145 0c8.685 0 17.572 3.434 24.237 10.099 13.33 13.33 13.33 35.143 0 48.473L320.126 515.03l449.591 449.591c13.33 13.33 13.33 35.144 0 48.474-13.33 13.33-35.142 13.33-48.472 0L247.418 539.268c-13.33-13.33-13.33-35.144 0-48.474L727.91 10.1C734.575 3.435 743.46.002 752.146.002z"},child:[]}]})(e)}function Zn(e){return ne({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"},child:[]}]})(e)}const ie=[{id:1,title:"01",company:"Polymer Capital",position:"Alpha Capture System Intern",details:`Python: .groupby(), .merge(), .assign()
Git: git pull, git branch, git rebase
Docker: docker image, docker run

Database. Data preprocessing. Summary statistics. Alpha generation. Backtesting.`,tools:[{category:"Python",items:".groupby(), .merge(), .assign()"},{category:"Git",items:"git pull, git branch, git rebase"},{category:"Docker",items:"docker image, docker run"}],summary:"Database. Data preprocessing. Summary statistics. Alpha generation. Backtesting."},{id:2,title:"02",company:"FutureX Capital",position:"Investment Research Intern",details:`Markdown: ##, -, **
PowerPoint: ctrl+E, islide
Word: ctrl+C, ctrl+V

Pitch desk, due diligence, and investment research.`,tools:[{category:"Markdown",items:"##, -, **"},{category:"PowerPoint",items:"ctrl+E, islide"},{category:"Word",items:"ctrl+C, ctrl+V"}],summary:"Pitch desk, due diligence, and investment research."},{id:3,title:"03",company:"Zhihu",position:"Business Development Intern",details:`SQL: SELECT *;
R: read.csv()
Excel: ctrl+C ctrl+V

Monitored and analyzed operational data and generated weekly reports.`,tools:[{category:"SQL",items:"SELECT *;"},{category:"R",items:"read.csv()"},{category:"Excel",items:"ctrl+C ctrl+V"}],summary:"Monitored and analyzed operational data and generated weekly reports."},{id:4,title:"04",company:"PwC",position:"Summer Intern",details:`Bloomberg: F1 F1
Word: ctrl+F
Excel: ctrl+shift+L, ctrl+shift+> 

Retrieved financial data, validated the accuracy, and audited the risk.`,tools:[{category:"Bloomberg",items:"F1 F1"},{category:"Word",items:"ctrl+F"},{category:"Excel",items:"ctrl+shift+L, ctrl+shift+>"}],summary:"Retrieved financial data, validated the accuracy, and audited the risk."}],ct=3,Jn=()=>{const e=Ut(),t=$t(h=>h.home.internshipIndex),[n,a]=A.useState(0),r=A.useRef(null),i=A.useMemo(()=>Math.max(ie.length-ct,0),[]),s=t<=0,l=t>=i,c=h=>{e(Cn({index:h,maxIndex:i}))},u=()=>{c(t-1)},d=()=>{c(t+1)},g=()=>{const h=r.current;if(!h||!window.matchMedia("(max-width: 767px)").matches)return;const m=[...h.querySelectorAll(".internship__card")],y=m.reduce((b,x,_)=>Math.abs(x.offsetLeft-h.scrollLeft)<Math.abs(m[b].offsetLeft-h.scrollLeft)?_:b,0);a(b=>b===y?b:y)};return o.jsxs("section",{id:"internship",className:"internship",children:[o.jsxs("div",{className:"internship__heading",children:[o.jsx("p",{children:"Explore my"}),o.jsx("div",{className:"internship__highlight",children:"internship experiences"})]}),o.jsx("div",{ref:r,className:"internship__cards-container",onScroll:g,children:o.jsx("div",{className:"internship__cards-wrapper",style:{transform:`translateX(-${t*100/ct}%)`},children:ie.map(h=>o.jsxs("article",{className:"internship__card",children:[o.jsx("h1",{children:h.title}),o.jsxs("h2",{children:[o.jsx("span",{className:`internship__company-name internship__company-name--${h.id}`,children:h.company}),", ",o.jsx("br",{}),o.jsx("span",{className:"internship__position",children:h.position})]}),o.jsxs("div",{className:"internship__details",children:[o.jsx("p",{className:"internship__desktop-details",children:h.details}),o.jsxs("div",{className:"internship__mobile-details",children:[o.jsx("div",{className:"internship__tools",children:o.jsx("div",{className:"internship__tools-list",children:h.tools.map(m=>o.jsxs("div",{className:"internship__tool-row",children:[o.jsx("span",{className:"internship__tool-badge",children:m.category}),o.jsx("span",{className:"internship__tool-items",children:m.items})]},m.category))})}),o.jsx("p",{className:"internship__summary",children:h.summary})]})]})]},h.id))})}),o.jsxs("div",{className:"internship__button-container",children:[o.jsx("div",{className:"internship__carousel-position",role:"progressbar","aria-label":"Internship carousel position","aria-valuemin":1,"aria-valuemax":ie.length,"aria-valuenow":n+1,children:o.jsx("div",{className:"internship__carousel-position-track","aria-hidden":"true",children:o.jsx("div",{className:"internship__carousel-position-thumb",style:{width:`${100/ie.length}%`,transform:`translateX(${n*100}%)`}})})}),o.jsx("button",{onClick:u,className:"internship__switch-button",disabled:s,"aria-label":"Previous internship cards",children:o.jsx(Qn,{})}),o.jsx("button",{onClick:d,className:"internship__switch-button",disabled:l,"aria-label":"Next internship cards",children:o.jsx(Zn,{})})]}),o.jsx("div",{className:"internship__divider"})]})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function ea(e,t,n){return(t=na(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ft(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ft(Object(n),!0).forEach(function(a){ea(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ft(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function ta(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function na(e){var t=ta(e,"string");return typeof t=="symbol"?t:t+""}const ut=()=>{};let qe={},Vt={},Xt=null,qt={mark:ut,measure:ut};try{typeof window<"u"&&(qe=window),typeof document<"u"&&(Vt=document),typeof MutationObserver<"u"&&(Xt=MutationObserver),typeof performance<"u"&&(qt=performance)}catch{}const{userAgent:dt=""}=qe.navigator||{},D=qe,w=Vt,mt=Xt,se=qt;D.document;const R=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",Kt=~dt.indexOf("MSIE")||~dt.indexOf("Trident/");var aa=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ra=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Qt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},ia={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Zt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],k="classic",pe="duotone",sa="sharp",oa="sharp-duotone",Jt=[k,pe,sa,oa],la={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ca={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},fa=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),ua={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},da=["fak","fa-kit","fakd","fa-kit-duotone"],ht={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ma=["kit"],ha={kit:{"fa-kit":"fak"}},pa=["fak","fakd"],ga={kit:{fak:"fa-kit"}},pt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},oe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ba=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ya=["fak","fa-kit","fakd","fa-kit-duotone"],va={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},xa={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},wa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ee={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},_a=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ie=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...ba,..._a],Pa=["solid","regular","light","thin","duotone","brands"],en=[1,2,3,4,5,6,7,8,9,10],ja=en.concat([11,12,13,14,15,16,17,18,19,20]),Aa=[...Object.keys(wa),...Pa,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oe.GROUP,oe.SWAP_OPACITY,oe.PRIMARY,oe.SECONDARY].concat(en.map(e=>"".concat(e,"x"))).concat(ja.map(e=>"w-".concat(e))),ka={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const L="___FONT_AWESOME___",Ce=16,tn="fa",nn="svg-inline--fa",U="data-fa-i2svg",Te="data-fa-pseudo-element",Oa="data-fa-pseudo-element-pending",Ke="data-prefix",Qe="data-icon",gt="fontawesome-i2svg",Na="async",Sa=["HTML","HEAD","STYLE","SCRIPT"],an=(()=>{try{return!0}catch{return!1}})();function ae(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[k]}})}const rn=f({},Qt);rn[k]=f(f(f(f({},{"fa-duotone":"duotone"}),Qt[k]),ht.kit),ht["kit-duotone"]);const Ea=ae(rn),Fe=f({},ua);Fe[k]=f(f(f(f({},{duotone:"fad"}),Fe[k]),pt.kit),pt["kit-duotone"]);const bt=ae(Fe),Le=f({},Ee);Le[k]=f(f({},Le[k]),ga.kit);const Ze=ae(Le),Me=f({},xa);Me[k]=f(f({},Me[k]),ha.kit);ae(Me);const Ia=aa,sn="fa-layers-text",Ca=ra,Ta=f({},la);ae(Ta);const Fa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],we=ia,La=[...ma,...Aa],Q=D.FontAwesomeConfig||{};function Ma(e){var t=w.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ra(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}w&&typeof w.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const r=Ra(Ma(n));r!=null&&(Q[a]=r)});const on={styleDefault:"solid",familyDefault:k,cssPrefix:tn,replacementClass:nn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Q.familyPrefix&&(Q.cssPrefix=Q.familyPrefix);const X=f(f({},on),Q);X.autoReplaceSvg||(X.observeMutations=!1);const p={};Object.keys(on).forEach(e=>{Object.defineProperty(p,e,{enumerable:!0,set:function(t){X[e]=t,Z.forEach(n=>n(p))},get:function(){return X[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(e){X.cssPrefix=e,Z.forEach(t=>t(p))},get:function(){return X.cssPrefix}});D.FontAwesomeConfig=p;const Z=[];function za(e){return Z.push(e),()=>{Z.splice(Z.indexOf(e),1)}}const z=Ce,E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Da(e){if(!e||!R)return;const t=w.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=w.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return w.head.insertBefore(t,a),e}const Wa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ee(){let e=12,t="";for(;e-- >0;)t+=Wa[Math.random()*62|0];return t}function q(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Je(e){return e.classList?q(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function ln(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ha(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(ln(e[n]),'" '),"").trim()}function ge(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function et(e){return e.size!==E.size||e.x!==E.x||e.y!==E.y||e.rotate!==E.rotate||e.flipX||e.flipY}function Ya(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(s," ").concat(l)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:u}}function Ua(e){let{transform:t,width:n=Ce,height:a=Ce,startCentered:r=!1}=e,i="";return r&&Kt?i+="translate(".concat(t.x/z-n/2,"em, ").concat(t.y/z-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(t.x/z,"em), calc(-50% + ").concat(t.y/z,"em)) "):i+="translate(".concat(t.x/z,"em, ").concat(t.y/z,"em) "),i+="scale(".concat(t.size/z*(t.flipX?-1:1),", ").concat(t.size/z*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var $a=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function cn(){const e=tn,t=nn,n=p.cssPrefix,a=p.replacementClass;let r=$a;if(n!==e||a!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(a))}return r}let yt=!1;function _e(){p.autoAddCss&&!yt&&(Da(cn()),yt=!0)}var Ga={mixout(){return{dom:{css:cn,insertCss:_e}}},hooks(){return{beforeDOMElementCreation(){_e()},beforeI2svg(){_e()}}}};const M=D||{};M[L]||(M[L]={});M[L].styles||(M[L].styles={});M[L].hooks||(M[L].hooks={});M[L].shims||(M[L].shims=[]);var I=M[L];const fn=[],un=function(){w.removeEventListener("DOMContentLoaded",un),de=1,fn.map(e=>e())};let de=!1;R&&(de=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),de||w.addEventListener("DOMContentLoaded",un));function Ba(e){R&&(de?setTimeout(e,0):fn.push(e))}function re(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?ln(e):"<".concat(t," ").concat(Ha(n),">").concat(a.map(re).join(""),"</").concat(t,">")}function vt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Pe=function(t,n,a,r){var i=Object.keys(t),s=i.length,l=n,c,u,d;for(a===void 0?(c=1,d=t[i[0]]):(c=0,d=a);c<s;c++)u=i[c],d=l(d,t[u],u,t);return d};function Va(e){const t=[];let n=0;const a=e.length;for(;n<a;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Re(e){const t=Va(e);return t.length===1?t[0].toString(16):null}function Xa(e,t){const n=e.length;let a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function xt(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function ze(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=xt(t);typeof I.hooks.addPack=="function"&&!a?I.hooks.addPack(e,xt(t)):I.styles[e]=f(f({},I.styles[e]||{}),r),e==="fas"&&ze("fa",t)}const{styles:te,shims:qa}=I,dn=Object.keys(Ze),Ka=dn.reduce((e,t)=>(e[t]=Object.keys(Ze[t]),e),{});let tt=null,mn={},hn={},pn={},gn={},bn={};function Qa(e){return~La.indexOf(e)}function Za(e,t){const n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Qa(r)?r:null}const yn=()=>{const e=a=>Pe(te,(r,i,s)=>(r[s]=Pe(i,a,{}),r),{});mn=e((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=i}),a)),hn=e((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=i}),a)),bn=e((a,r,i)=>{const s=r[2];return a[i]=i,s.forEach(l=>{a[l]=i}),a});const t="far"in te||p.autoFetchSvg,n=Pe(qa,(a,r)=>{const i=r[0];let s=r[1];const l=r[2];return s==="far"&&!t&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});pn=n.names,gn=n.unicodes,tt=be(p.styleDefault,{family:p.familyDefault})};za(e=>{tt=be(e.styleDefault,{family:p.familyDefault})});yn();function nt(e,t){return(mn[e]||{})[t]}function Ja(e,t){return(hn[e]||{})[t]}function Y(e,t){return(bn[e]||{})[t]}function vn(e){return pn[e]||{prefix:null,iconName:null}}function er(e){const t=gn[e],n=nt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function W(){return tt}const xn=()=>({prefix:null,iconName:null,rest:[]});function tr(e){let t=k;const n=dn.reduce((a,r)=>(a[r]="".concat(p.cssPrefix,"-").concat(r),a),{});return Jt.forEach(a=>{(e.includes(n[a])||e.some(r=>Ka[a].includes(r)))&&(t=a)}),t}function be(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=k}=t,a=Ea[n][e];if(n===pe&&!e)return"fad";const r=bt[n][e]||bt[n][a],i=e in I.styles?e:null;return r||i||null}function nr(e){let t=[],n=null;return e.forEach(a=>{const r=Za(p.cssPrefix,a);r?n=r:a&&t.push(a)}),{iconName:n,rest:t}}function wt(e){return e.sort().filter((t,n,a)=>a.indexOf(t)===n)}function ye(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let a=null;const r=Ie.concat(ya),i=wt(e.filter(g=>r.includes(g))),s=wt(e.filter(g=>!Ie.includes(g))),l=i.filter(g=>(a=g,!Zt.includes(g))),[c=null]=l,u=tr(i),d=f(f({},nr(s)),{},{prefix:be(c,{family:u})});return f(f(f({},d),sr({values:e,family:u,styles:te,config:p,canonical:d,givenPrefix:a})),ar(n,a,d))}function ar(e,t,n){let{prefix:a,iconName:r}=n;if(e||!a||!r)return{prefix:a,iconName:r};const i=t==="fa"?vn(r):{},s=Y(a,r);return r=i.iconName||s||r,a=i.prefix||a,a==="far"&&!te.far&&te.fas&&!p.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const rr=Jt.filter(e=>e!==k||e!==pe),ir=Object.keys(Ee).filter(e=>e!==k).map(e=>Object.keys(Ee[e])).flat();function sr(e){const{values:t,family:n,canonical:a,givenPrefix:r="",styles:i={},config:s={}}=e,l=n===pe,c=t.includes("fa-duotone")||t.includes("fad"),u=s.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(c||u||d)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&rr.includes(n)&&(Object.keys(i).find(h=>ir.includes(h))||s.autoFetchSvg)){const h=fa.get(n).defaultShortPrefixId;a.prefix=h,a.iconName=Y(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=W()||"fas"),a}class or{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=f(f({},this.definitions[i]||{}),r[i]),ze(i,r[i]);const s=Ze[k][i];s&&ze(s,r[i]),yn()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:s,icon:l}=a[r],c=l[2];t[i]||(t[i]={}),c.length>0&&c.forEach(u=>{typeof u=="string"&&(t[i][u]=l)}),t[i][s]=l}),t}}let _t=[],G={};const V={},lr=Object.keys(V);function cr(e,t){let{mixoutsTo:n}=t;return _t=e,G={},Object.keys(V).forEach(a=>{lr.indexOf(a)===-1&&delete V[a]}),_t.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{G[s]||(G[s]=[]),G[s].push(i[s])})}a.provides&&a.provides(V)}),n}function De(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(G[e]||[]).forEach(s=>{t=s.apply(null,[t,...a])}),t}function $(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(G[e]||[]).forEach(i=>{i.apply(null,n)})}function H(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return V[e]?V[e].apply(null,t):void 0}function We(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||W();if(t)return t=Y(n,t)||t,vt(wn.definitions,n,t)||vt(I.styles,n,t)}const wn=new or,fr=()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,$("noAuto")},ur={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?($("beforeI2svg",e),H("pseudoElements2svg",e),H("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Ba(()=>{mr({autoReplaceSvgRoot:t}),$("watch",e)})}},dr={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Y(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=be(e[0]);return{prefix:n,iconName:Y(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(p.cssPrefix,"-"))>-1||e.match(Ia))){const t=ye(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||W(),iconName:Y(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=W();return{prefix:t,iconName:Y(t,e)||e}}}},O={noAuto:fr,config:p,dom:ur,parse:dr,library:wn,findIconDefinition:We,toHtml:re},mr=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=w}=e;(Object.keys(I.styles).length>0||p.autoFetchSvg)&&R&&p.autoReplaceSvg&&O.dom.i2svg({node:t})};function ve(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>re(n))}}),Object.defineProperty(e,"node",{get:function(){if(!R)return;const n=w.createElement("div");return n.innerHTML=e.html,n.children}}),e}function hr(e){let{children:t,main:n,mask:a,attributes:r,styles:i,transform:s}=e;if(et(s)&&n.found&&!a.found){const{width:l,height:c}=n,u={x:l/c/2,y:.5};r.style=ge(f(f({},i),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function pr(e){let{prefix:t,iconName:n,children:a,attributes:r,symbol:i}=e;const s=i===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:s}),children:a}]}]}function at(e){const{icons:{main:t,mask:n},prefix:a,iconName:r,transform:i,symbol:s,title:l,maskId:c,titleId:u,extra:d,watchable:g=!1}=e,{width:h,height:m}=n.found?n:t,y=pa.includes(a),b=[p.replacementClass,r?"".concat(p.cssPrefix,"-").concat(r):""].filter(N=>d.classes.indexOf(N)===-1).filter(N=>N!==""||!!N).concat(d.classes).join(" ");let x={children:[],attributes:f(f({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:b,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(m)})};const _=y&&!~d.classes.indexOf("fa-fw")?{width:"".concat(h/m*16*.0625,"em")}:{};g&&(x.attributes[U]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||ee())},children:[l]}),delete x.attributes.title);const P=f(f({},x),{},{prefix:a,iconName:r,main:t,mask:n,maskId:c,transform:i,symbol:s,styles:f(f({},_),d.styles)}),{children:j,attributes:C}=n.found&&t.found?H("generateAbstractMask",P)||{children:[],attributes:{}}:H("generateAbstractIcon",P)||{children:[],attributes:{}};return P.children=j,P.attributes=C,s?pr(P):hr(P)}function Pt(e){const{content:t,width:n,height:a,transform:r,title:i,extra:s,watchable:l=!1}=e,c=f(f(f({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(c[U]="");const u=f({},s.styles);et(r)&&(u.transform=Ua({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);const d=ge(u);d.length>0&&(c.style=d);const g=[];return g.push({tag:"span",attributes:c,children:[t]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function gr(e){const{content:t,title:n,extra:a}=e,r=f(f(f({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ge(a.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:je}=I;function He(e){const t=e[0],n=e[1],[a]=e.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(we.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(we.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(we.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:r}}const br={found:!1,width:512,height:512};function yr(e,t){!an&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ye(e,t){let n=t;return t==="fa"&&p.styleDefault!==null&&(t=W()),new Promise((a,r)=>{if(n==="fa"){const i=vn(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&je[t]&&je[t][e]){const i=je[t][e];return a(He(i))}yr(e,t),a(f(f({},br),{},{icon:p.showMissingIcons&&e?H("missingIconAbstract")||{}:{}}))})}const jt=()=>{},Ue=p.measurePerformance&&se&&se.mark&&se.measure?se:{mark:jt,measure:jt},K='FA "6.7.2"',vr=e=>(Ue.mark("".concat(K," ").concat(e," begins")),()=>_n(e)),_n=e=>{Ue.mark("".concat(K," ").concat(e," ends")),Ue.measure("".concat(K," ").concat(e),"".concat(K," ").concat(e," begins"),"".concat(K," ").concat(e," ends"))};var rt={begin:vr,end:_n};const le=()=>{};function At(e){return typeof(e.getAttribute?e.getAttribute(U):null)=="string"}function xr(e){const t=e.getAttribute?e.getAttribute(Ke):null,n=e.getAttribute?e.getAttribute(Qe):null;return t&&n}function wr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function _r(){return p.autoReplaceSvg===!0?ce.replace:ce[p.autoReplaceSvg]||ce.replace}function Pr(e){return w.createElementNS("http://www.w3.org/2000/svg",e)}function jr(e){return w.createElement(e)}function Pn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Pr:jr}=t;if(typeof e=="string")return w.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){a.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){a.appendChild(Pn(i,{ceFn:n}))}),a}function Ar(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const ce={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Pn(n),t)}),t.getAttribute(U)===null&&p.keepOriginalSource){let n=w.createComment(Ar(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Je(t).indexOf(p.replacementClass))return ce.replace(e);const a=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,l)=>(l===p.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>re(i)).join(`
`);t.setAttribute(U,""),t.innerHTML=r}};function kt(e){e()}function jn(e,t){const n=typeof t=="function"?t:le;if(e.length===0)n();else{let a=kt;p.mutateApproach===Na&&(a=D.requestAnimationFrame||kt),a(()=>{const r=_r(),i=rt.begin("mutate");e.map(r),i(),n()})}}let it=!1;function An(){it=!0}function $e(){it=!1}let me=null;function Ot(e){if(!mt||!p.observeMutations)return;const{treeCallback:t=le,nodeCallback:n=le,pseudoElementsCallback:a=le,observeMutationsRoot:r=w}=e;me=new mt(i=>{if(it)return;const s=W();q(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!At(l.addedNodes[0])&&(p.searchPseudoElements&&a(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&p.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&At(l.target)&&~Fa.indexOf(l.attributeName))if(l.attributeName==="class"&&xr(l.target)){const{prefix:c,iconName:u}=ye(Je(l.target));l.target.setAttribute(Ke,c||s),u&&l.target.setAttribute(Qe,u)}else wr(l.target)&&n(l.target)})}),R&&me.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function kr(){me&&me.disconnect()}function Or(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,r)=>{const i=r.split(":"),s=i[0],l=i.slice(1);return s&&l.length>0&&(a[s]=l.join(":").trim()),a},{})),n}function Nr(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let r=ye(Je(e));return r.prefix||(r.prefix=W()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ja(r.prefix,e.innerText)||nt(r.prefix,Re(e.innerText))),!r.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Sr(e){const t=q(e.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return p.autoA11y&&(n?t["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(a||ee()):(t["aria-hidden"]="true",t.focusable="false")),t}function Er(){return{iconName:null,title:null,titleId:null,prefix:null,transform:E,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Nt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Nr(e),i=Sr(e),s=De("parseNodeAttributes",{},e);let l=t.styleParser?Or(e):[];return f({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:E,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:i}},s)}const{styles:Ir}=I;function kn(e){const t=p.autoReplaceSvg==="nest"?Nt(e,{styleParser:!1}):Nt(e);return~t.extra.classes.indexOf(sn)?H("generateLayersText",e,t):H("generateSvgReplacementMutation",e,t)}function Cr(){return[...da,...Ie]}function St(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();const n=w.documentElement.classList,a=d=>n.add("".concat(gt,"-").concat(d)),r=d=>n.remove("".concat(gt,"-").concat(d)),i=p.autoFetchSvg?Cr():Zt.concat(Object.keys(Ir));i.includes("fa")||i.push("fa");const s=[".".concat(sn,":not([").concat(U,"])")].concat(i.map(d=>".".concat(d,":not([").concat(U,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=q(e.querySelectorAll(s))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();const c=rt.begin("onTree"),u=l.reduce((d,g)=>{try{const h=kn(g);h&&d.push(h)}catch(h){an||h.name==="MissingIcon"&&console.error(h)}return d},[]);return new Promise((d,g)=>{Promise.all(u).then(h=>{jn(h,()=>{a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),c(),d()})}).catch(h=>{c(),g(h)})})}function Tr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;kn(e).then(n=>{n&&jn([n],t)})}function Fr(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:We(t||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:We(r||{})),e(a,f(f({},n),{},{mask:r}))}}const Lr=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=E,symbol:a=!1,mask:r=null,maskId:i=null,title:s=null,titleId:l=null,classes:c=[],attributes:u={},styles:d={}}=t;if(!e)return;const{prefix:g,iconName:h,icon:m}=e;return ve(f({type:"icon"},e),()=>($("beforeDOMElementCreation",{iconDefinition:e,params:t}),p.autoA11y&&(s?u["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(l||ee()):(u["aria-hidden"]="true",u.focusable="false")),at({icons:{main:He(m),mask:r?He(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:h,transform:f(f({},E),n),symbol:a,title:s,maskId:i,titleId:l,extra:{attributes:u,styles:d,classes:c}})))};var Mr={mixout(){return{icon:Fr(Lr)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=St,e.nodeCallback=Tr,e}}},provides(e){e.i2svg=function(t){const{node:n=w,callback:a=()=>{}}=t;return St(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:r,titleId:i,prefix:s,transform:l,symbol:c,mask:u,maskId:d,extra:g}=n;return new Promise((h,m)=>{Promise.all([Ye(a,s),u.iconName?Ye(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[b,x]=y;h([t,at({icons:{main:b,mask:x},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:r,titleId:i,extra:g,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:r,transform:i,styles:s}=t;const l=ge(s);l.length>0&&(a.style=l);let c;return et(i)&&(c=H("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},Rr={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return ve({type:"layer"},()=>{$("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},zr={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=t;return ve({type:"counter",content:e},()=>($("beforeDOMElementCreation",{content:e,params:t}),gr({content:e.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(p.cssPrefix,"-layers-counter"),...a]}})))}}}},Dr={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=E,title:a=null,classes:r=[],attributes:i={},styles:s={}}=t;return ve({type:"text",content:e},()=>($("beforeDOMElementCreation",{content:e,params:t}),Pt({content:e,transform:f(f({},E),n),title:a,extra:{attributes:i,styles:s,classes:["".concat(p.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:r,extra:i}=n;let s=null,l=null;if(Kt){const c=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();s=u.width/c,l=u.height/c}return p.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,Pt({content:t.innerHTML,width:s,height:l,transform:r,title:a,extra:i,watchable:!0})])}}};const Wr=new RegExp('"',"ug"),Et=[1105920,1112319],It=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),ca),ka),va),Ge=Object.keys(It).reduce((e,t)=>(e[t.toLowerCase()]=It[t],e),{}),Hr=Object.keys(Ge).reduce((e,t)=>{const n=Ge[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Yr(e){const t=e.replace(Wr,""),n=Xa(t,0),a=n>=Et[0]&&n<=Et[1],r=t.length===2?t[0]===t[1]:!1;return{value:Re(r?t[0]:t),isSecondary:a||r}}function Ur(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),r=isNaN(a)?"normal":a;return(Ge[n]||{})[r]||Hr[n]}function Ct(e,t){const n="".concat(Oa).concat(t.replace(":","-"));return new Promise((a,r)=>{if(e.getAttribute(n)!==null)return a();const s=q(e.children).filter(h=>h.getAttribute(Te)===t)[0],l=D.getComputedStyle(e,t),c=l.getPropertyValue("font-family"),u=c.match(Ca),d=l.getPropertyValue("font-weight"),g=l.getPropertyValue("content");if(s&&!u)return e.removeChild(s),a();if(u&&g!=="none"&&g!==""){const h=l.getPropertyValue("content");let m=Ur(c,d);const{value:y,isSecondary:b}=Yr(h),x=u[0].startsWith("FontAwesome");let _=nt(m,y),P=_;if(x){const j=er(y);j.iconName&&j.prefix&&(_=j.iconName,m=j.prefix)}if(_&&!b&&(!s||s.getAttribute(Ke)!==m||s.getAttribute(Qe)!==P)){e.setAttribute(n,P),s&&e.removeChild(s);const j=Er(),{extra:C}=j;C.attributes[Te]=t,Ye(_,m).then(N=>{const En=at(f(f({},j),{},{icons:{main:N,mask:xn()},prefix:m,iconName:P,extra:C,watchable:!0})),xe=w.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(xe,e.firstChild):e.appendChild(xe),xe.outerHTML=En.map(In=>re(In)).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function $r(e){return Promise.all([Ct(e,"::before"),Ct(e,"::after")])}function Gr(e){return e.parentNode!==document.head&&!~Sa.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Te)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Tt(e){if(R)return new Promise((t,n)=>{const a=q(e.querySelectorAll("*")).filter(Gr).map($r),r=rt.begin("searchPseudoElements");An(),Promise.all(a).then(()=>{r(),$e(),t()}).catch(()=>{r(),$e(),n()})})}var Br={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Tt,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=w}=t;p.searchPseudoElements&&Tt(n)}}};let Ft=!1;var Vr={mixout(){return{dom:{unwatch(){An(),Ft=!0}}}},hooks(){return{bootstrap(){Ot(De("mutationObserverCallbacks",{}))},noAuto(){kr()},watch(e){const{observeMutationsRoot:t}=e;Ft?$e():Ot(De("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Lt=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var Xr={mixout(){return{parse:{transform:e=>Lt(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Lt(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:r,iconWidth:i}=t;const s={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(u)},g={transform:"translate(".concat(i/2*-1," -256)")},h={outer:s,inner:d,path:g};return{tag:"g",attributes:f({},h.outer),children:[{tag:"g",attributes:f({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:f(f({},n.icon.attributes),h.path)}]}]}}}};const Ae={x:0,y:0,width:"100%",height:"100%"};function Mt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function qr(e){return e.tag==="g"?e.children:[e]}var Kr={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?ye(n.split(" ").map(r=>r.trim())):xn();return a.prefix||(a.prefix=W()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:r,mask:i,maskId:s,transform:l}=t;const{width:c,icon:u}=r,{width:d,icon:g}=i,h=Ya({transform:l,containerWidth:d,iconWidth:c}),m={tag:"rect",attributes:f(f({},Ae),{},{fill:"white"})},y=u.children?{children:u.children.map(Mt)}:{},b={tag:"g",attributes:f({},h.inner),children:[Mt(f({tag:u.tag,attributes:f(f({},u.attributes),h.path)},y))]},x={tag:"g",attributes:f({},h.outer),children:[b]},_="mask-".concat(s||ee()),P="clip-".concat(s||ee()),j={tag:"mask",attributes:f(f({},Ae),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,x]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:qr(g)},j]};return n.push(C,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(_,")")},Ae)}),{children:n,attributes:a}}}},Qr={provides(e){let t=!1;D.matchMedia&&(t=D.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:f(f({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=f(f({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:f(f({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:f(f({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:f(f({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:f(f({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Zr={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},Jr=[Ga,Mr,Rr,zr,Dr,Br,Vr,Xr,Kr,Qr,Zr];cr(Jr,{mixoutsTo:O});O.noAuto;O.config;O.library;O.dom;const Be=O.parse;O.findIconDefinition;O.toHtml;const ei=O.icon;O.layer;O.text;O.counter;var ke={exports:{}},Oe,Rt;function ti(){if(Rt)return Oe;Rt=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Oe=e,Oe}var Ne,zt;function ni(){if(zt)return Ne;zt=1;var e=ti();function t(){}function n(){}return n.resetWarningCache=t,Ne=function(){function a(s,l,c,u,d,g){if(g!==e){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}a.isRequired=a;function r(){return a}var i={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:r,element:a,elementType:a,instanceOf:r,node:a,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i},Ne}var Dt;function ai(){return Dt||(Dt=1,ke.exports=ni()()),ke.exports}var ri=ai();const v=Tn(ri);function Wt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wt(Object(n),!0).forEach(function(a){B(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function he(e){"@babel/helpers - typeof";return he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},he(e)}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ii(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function si(e,t){if(e==null)return{};var n=ii(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Ve(e){return oi(e)||li(e)||ci(e)||fi()}function oi(e){if(Array.isArray(e))return Xe(e)}function li(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ci(e,t){if(e){if(typeof e=="string")return Xe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xe(e,t)}}function Xe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function fi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ui(e){var t,n=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,s=e.shake,l=e.flash,c=e.spin,u=e.spinPulse,d=e.spinReverse,g=e.pulse,h=e.fixedWidth,m=e.inverse,y=e.border,b=e.listItem,x=e.flip,_=e.size,P=e.rotation,j=e.pull,C=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":s,"fa-flash":l,"fa-spin":c,"fa-spin-reverse":d,"fa-spin-pulse":u,"fa-pulse":g,"fa-fw":h,"fa-inverse":m,"fa-border":y,"fa-li":b,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},B(t,"fa-".concat(_),typeof _<"u"&&_!==null),B(t,"fa-rotate-".concat(P),typeof P<"u"&&P!==null&&P!==0),B(t,"fa-pull-".concat(j),typeof j<"u"&&j!==null),B(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(C).map(function(N){return C[N]?N:null}).filter(function(N){return N})}function di(e){return e=e-0,e===e}function On(e){return di(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var mi=["style"];function hi(e){return e.charAt(0).toUpperCase()+e.slice(1)}function pi(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=On(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?t[hi(r)]=i:t[r]=i,t},{})}function Nn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(c){return Nn(e,c)}),r=Object.keys(t.attributes||{}).reduce(function(c,u){var d=t.attributes[u];switch(u){case"class":c.attrs.className=d,delete t.attributes.class;break;case"style":c.attrs.style=pi(d);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?c.attrs[u.toLowerCase()]=d:c.attrs[On(u)]=d}return c},{attrs:{}}),i=n.style,s=i===void 0?{}:i,l=si(n,mi);return r.attrs.style=S(S({},r.attrs.style),s),e.apply(void 0,[t.tag,S(S({},r.attrs),l)].concat(Ve(a)))}var Sn=!1;try{Sn=!0}catch{}function gi(){if(!Sn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ht(e){if(e&&he(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Be.icon)return Be.icon(e);if(e===null)return null;if(e&&he(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Se(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?B({},e,t):{}}var Yt={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},J=F.forwardRef(function(e,t){var n=S(S({},Yt),e),a=n.icon,r=n.mask,i=n.symbol,s=n.className,l=n.title,c=n.titleId,u=n.maskId,d=Ht(a),g=Se("classes",[].concat(Ve(ui(n)),Ve((s||"").split(" ")))),h=Se("transform",typeof n.transform=="string"?Be.transform(n.transform):n.transform),m=Se("mask",Ht(r)),y=ei(d,S(S(S(S({},g),h),m),{},{symbol:i,title:l,titleId:c,maskId:u}));if(!y)return gi("Could not find icon",d),null;var b=y.abstract,x={ref:t};return Object.keys(n).forEach(function(_){Yt.hasOwnProperty(_)||(x[_]=n[_])}),bi(b[0],x)});J.displayName="FontAwesomeIcon";J.propTypes={beat:v.bool,border:v.bool,beatFade:v.bool,bounce:v.bool,className:v.string,fade:v.bool,flash:v.bool,mask:v.oneOfType([v.object,v.array,v.string]),maskId:v.string,fixedWidth:v.bool,inverse:v.bool,flip:v.oneOf([!0,!1,"horizontal","vertical","both"]),icon:v.oneOfType([v.object,v.array,v.string]),listItem:v.bool,pull:v.oneOf(["right","left"]),pulse:v.bool,rotation:v.oneOf([0,90,180,270]),shake:v.bool,size:v.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:v.bool,spinPulse:v.bool,spinReverse:v.bool,symbol:v.oneOfType([v.bool,v.string]),title:v.string,titleId:v.string,transform:v.oneOfType([v.string,v.object]),swapOpacity:v.bool};var bi=Nn.bind(null,F.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const yi={prefix:"fas",iconName:"images",icon:[576,512,[],"f302","M160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320l-144 0-48 0-80 0c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224z"]},vi={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},xi={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const wi={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const _i={prefix:"far",iconName:"file-pdf",icon:[512,512,[],"f1c1","M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"]},T=[{id:"wechat-analysis",title:`WeChat
Usage
Annual
Report`,description:o.jsxs(o.Fragment,{children:["Calculate sentimental score by ",o.jsx("span",{children:"SnowNLP"})," to analyze emotion",o.jsx("br",{}),"contained in WeChat messages daily.",o.jsx("br",{}),o.jsx("br",{}),"So, is it a happy day or a sad day?"]}),imageSrc:"/image/sentiment_score_daily.png",imageAlt:"sentiment score daily",backgroundImage:"/image/wechat_analysis_backgroud.png",actions:[{href:"/20240109",icon:yi,className:"project-showcase__action-button project-showcase__action-button--slide",ariaLabel:"Open project image"}]},{id:"stock-prediction",title:`Stock
Price
Prediction`,description:o.jsxs(o.Fragment,{children:["Use ",o.jsx("span",{children:"CNN, LSTM, and ARIMA "}),"to predict Tesla stock prices.",o.jsx("br",{}),"Prediction? or Classification? or B.........",o.jsx("br",{})]}),imageSrc:"/image/price.png",imageAlt:"Tesla price prediction",actions:[{href:"https://github.com/Gavin-OP/stat4012-group-project",icon:wi,className:"project-showcase__action-button project-showcase__action-button--github",ariaLabel:"Open GitHub repository",external:!0},{href:"/file/Stock_Return_Prediction_with_CNN_and_Attention_based_LSTM_models.pdf",icon:_i,className:"project-showcase__action-button project-showcase__action-button--pdf",ariaLabel:"Open project PDF"}]}],Pi=()=>{const e=Ut(),t=$t(m=>m.home.activeProjectId),[n,a]=A.useState(()=>window.innerWidth<=767),[r,i]=A.useState(0),s=A.useRef(null),l=A.useRef(new Map),c=Math.max(T.findIndex(m=>m.id===t),0),u=T.length>2;A.useEffect(()=>{const m=window.matchMedia("(max-width: 767px)"),y=()=>a(m.matches);return y(),m.addEventListener("change",y),()=>m.removeEventListener("change",y)},[]);const d=m=>{m!==t&&e(Fn(m))},g=m=>{const y=T[m];y&&d(y.id)},h=()=>{if(!n)return;const m=s.current;if(!m)return;const y=T.reduce((b,x,_)=>{const P=l.current.get(x.id),j=l.current.get(T[b].id);return!P||!j?b:Math.abs(P.offsetLeft-m.scrollLeft)<Math.abs(j.offsetLeft-m.scrollLeft)?_:b},0);i(b=>b===y?b:y)};return A.useEffect(()=>{if(!u)return;const m=window.requestAnimationFrame(()=>{const y=s.current,b=l.current.get(t),x=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(y&&b){const _=y.getBoundingClientRect(),j=b.getBoundingClientRect().left-_.left+y.scrollLeft;y.scrollTo({left:j,behavior:x?"auto":"smooth"})}});return()=>window.cancelAnimationFrame(m)},[t,u]),o.jsxs("section",{id:"project",className:"project-showcase",children:[o.jsxs("div",{className:"project-showcase__heading",children:[o.jsx("p",{children:"Explore my"}),o.jsx("div",{className:"project-showcase__highlight",children:"best projects"})]}),o.jsx("div",{ref:s,className:"project-showcase__cards-container",onScroll:h,children:o.jsx("div",{className:"project-showcase__cards-wrapper",children:T.map(m=>{const y=t===m.id;return o.jsxs("article",{ref:b=>{b?l.current.set(m.id,b):l.current.delete(m.id)},className:`project-showcase__item project-showcase__item--${m.id} ${y?"project-showcase__item--active":""}`,onClick:()=>!n&&d(m.id),onKeyDown:b=>{!n&&!y&&(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),d(m.id))},role:!n&&!y?"button":void 0,tabIndex:!n&&!y?0:void 0,"aria-label":!n&&!y?`Open ${m.title.replaceAll(`
`," ")}`:void 0,style:!n&&m.backgroundImage?{backgroundImage:`url(${m.backgroundImage})`}:void 0,children:[m.backgroundImage?o.jsx("div",{className:"project-showcase__overlay"}):null,o.jsxs("div",{className:"project-showcase__content",children:[o.jsx("p",{className:"project-showcase__small-detail",children:m.title.split(`
`).map(b=>o.jsxs("span",{children:[b,o.jsx("br",{})]},b))}),o.jsxs("div",{className:"project-showcase__detail",children:[o.jsx("p",{className:"project-showcase__active-detail","data-title":m.title.replaceAll(`
`," "),children:m.description}),o.jsx("div",{className:"project-showcase__image-container",children:o.jsx("div",{className:`project-showcase__image project-showcase__image--${m.id}`,children:o.jsx("img",{src:m.imageSrc,alt:m.imageAlt})})})]})]}),o.jsx("div",{className:"project-showcase__icons","aria-hidden":n?void 0:!y,children:m.actions.map(b=>o.jsx("a",{href:b.href,className:b.className,"aria-label":b.ariaLabel,target:b.external?"_blank":void 0,rel:b.external?"noreferrer":void 0,tabIndex:n||y?0:-1,onClick:x=>x.stopPropagation(),children:o.jsx(J,{icon:b.icon})},b.href))})]},m.id)})})}),n?o.jsx("div",{className:"project-showcase__position",role:"progressbar","aria-label":"Project carousel position","aria-valuemin":1,"aria-valuemax":T.length,"aria-valuenow":r+1,children:o.jsx("div",{className:"project-showcase__position-track","aria-hidden":"true",children:o.jsx("div",{className:"project-showcase__position-thumb",style:{width:`${100/T.length}%`,transform:`translateX(${r*100}%)`}})})}):u?o.jsxs("div",{className:"project-showcase__controls","aria-label":"Project gallery controls",children:[o.jsx("button",{type:"button",className:"project-showcase__control","aria-label":"Previous project",disabled:c===0,onClick:()=>g(c-1),children:o.jsx(J,{icon:vi})}),o.jsx("button",{type:"button",className:"project-showcase__control","aria-label":"Next project",disabled:c===T.length-1,onClick:()=>g(c+1),children:o.jsx(J,{icon:xi})})]}):null]})},Ai=()=>o.jsx("div",{className:"home-page",children:o.jsxs(qn,{showNav:!0,children:[o.jsx(Kn,{}),o.jsx(Jn,{}),o.jsx(Pi,{})]})});export{Ai as default};
