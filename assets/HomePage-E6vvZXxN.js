import{r as H,j as c,R as C,u as Ue,a as Ye,s as En,g as In,b as Cn}from"./index-ZQBvnV-v.js";function Tn(){const t=[{label:"Profile",target:"profile"},{label:"Internship",target:"internship"},{label:"Project",target:"project"},{label:"Contact",target:"contact"}],[e,n]=H.useState(0),[a,r]=H.useState(!0),i=H.useCallback(()=>{const o=window.scrollY;n(f=>(r(f>o||o<15),o))},[]);H.useEffect(()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}),[i]),H.useEffect(()=>{if(!window.location.hash)return;const o=window.location.hash.replace("#",""),f=document.getElementById(o);f&&window.requestAnimationFrame(()=>{f.scrollIntoView({block:"start",behavior:"smooth"})})},[]);const s=o=>{if(!o)return;const f=document.getElementById(o);f&&(window.history.replaceState(null,"",`${window.location.pathname}${window.location.search}#${o}`),f.scrollIntoView({block:"start",behavior:"smooth"}))};return c.jsx("nav",{className:`site-nav ${a?"site-nav--visible":"site-nav--hidden"}`,"aria-label":"Primary",children:c.jsx("ul",{className:"site-nav__list",children:t.map(o=>c.jsx("li",{className:"site-nav__item",children:c.jsx("button",{className:"site-nav__link",onClick:()=>s(o.target),children:o.label})},o.target))})})}var He={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},re=C.createContext&&C.createContext(He),Fn=["attr","size","title"];function Mn(t,e){if(t==null)return{};var n=Ln(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Ln(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function ot(){return ot=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},ot.apply(this,arguments)}function ie(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function lt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ie(Object(n),!0).forEach(function(a){zn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function zn(t,e,n){return e=Rn(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Rn(t){var e=Dn(t,"string");return typeof e=="symbol"?e:e+""}function Dn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function $e(t){return t&&t.map((e,n)=>C.createElement(e.tag,lt({key:n},e.attr),$e(e.child)))}function tt(t){return e=>C.createElement(Wn,ot({attr:lt({},t.attr)},e),$e(t.child))}function Wn(t){var e=n=>{var{attr:a,size:r,title:i}=t,s=Mn(t,Fn),o=r||n.size||"1em",f;return n.className&&(f=n.className),t.className&&(f=(f?f+" ":"")+t.className),C.createElement("svg",ot({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,s,{className:f,style:lt(lt({color:t.color||n.color},n.style),t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),i&&C.createElement("title",null,i),t.children)};return re!==void 0?C.createElement(re.Consumer,null,n=>e(n)):e(He)}function Un(t){return tt({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},child:[]}]})(t)}function Yn(t){return tt({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"},child:[]}]})(t)}function Hn(t){return tt({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"},child:[]}]})(t)}function $n(){const t=[{id:"email",icon:c.jsx(Un,{size:25}),label:"HaoxiangZhang@link.cuhk.edu.hk",href:"mailto:HaoxiangZhang@link.cuhk.edu.hk"},{id:"github",icon:c.jsx(Hn,{size:25}),label:"https://github.com/Gavin-OP",href:"https://github.com/Gavin-OP"},{id:"linkedin",icon:c.jsx(Yn,{size:25}),label:"https://www.linkedin.com/in/gavin-zhang-op",href:"https://www.linkedin.com/in/gavin-zhang-op"}];return c.jsxs("footer",{id:"contact",className:"site-footer",children:[c.jsx("div",{className:"site-footer__content",children:c.jsx("div",{className:"site-footer__contact",children:c.jsx("ul",{className:"site-footer__list",children:t.map(e=>c.jsx("li",{className:"site-footer__item",children:c.jsxs("a",{className:"site-footer__link",href:e.href,target:e.id==="email"?void 0:"_blank",rel:e.id==="email"?void 0:"noreferrer",children:[e.icon,c.jsx("span",{children:e.label})]})},e.id))})})}),c.jsx("div",{className:"site-footer__bottom",children:c.jsx("p",{className:"site-footer__copyright",children:"© 2022-2024 ZHANG Haoxiang. All rights reserved."})})]})}const Gn=({children:t,showNav:e=!0})=>c.jsxs("div",{className:"main-layout",children:[e&&c.jsx(Tn,{}),c.jsx("main",{className:"main-layout__content",children:t}),c.jsx($n,{})]}),Bn=()=>c.jsxs("section",{id:"profile",className:"profile-hero",children:[c.jsx("div",{className:"profile-hero__spacer"}),c.jsxs("div",{className:"profile-hero__content",children:[c.jsxs("div",{className:"profile-hero__identity",children:[c.jsx("h1",{children:"Gavin"}),c.jsx("h2",{children:"ZHANG Haoxiang"})]}),c.jsxs("div",{className:"profile-hero__intro",children:[c.jsx("p",{className:"profile-hero__tagline",children:"Hi, this is OP."}),c.jsxs("p",{children:["I am a ",c.jsx("span",{children:"Quantitative Finance and Risk Management"})," ","undergraduate at CUHK."]}),c.jsx("p",{children:"Perfectly balanced. Aspire to be Quant."})]})]}),c.jsx("div",{className:"profile-hero__divider"})]});function Vn(t){return tt({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M752.145 0c8.685 0 17.572 3.434 24.237 10.099 13.33 13.33 13.33 35.143 0 48.473L320.126 515.03l449.591 449.591c13.33 13.33 13.33 35.144 0 48.474-13.33 13.33-35.142 13.33-48.472 0L247.418 539.268c-13.33-13.33-13.33-35.144 0-48.474L727.91 10.1C734.575 3.435 743.46.002 752.146.002z"},child:[]}]})(t)}function Xn(t){return tt({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"},child:[]}]})(t)}const se=[{id:1,title:"01",company:"Polymer Capital",position:"Alpha Capture System Intern",details:`Python: .groupby(), .merge(), .assign()
Git: git pull, git branch, git rebase
Docker: docker image, docker run

Database. Data preprocessing. Summary statistics. Alpha generation. Backtesting.`},{id:2,title:"02",company:"FutureX Capital",position:"Investment Research Intern",details:`Markdown: ##, -, **
PowerPoint: ctrl+E, islide
Word: ctrl+C, ctrl+V

Pitch desk, due diligence, and investment research.`},{id:3,title:"03",company:"Zhihu",position:"Business Development Intern",details:`SQL: SELECT *;
R: read.csv()
Excel: ctrl+C ctrl+V

Monitored and analyzed operational data and generated weekly reports.`},{id:4,title:"04",company:"PwC",position:"Summer Intern",details:`Bloomberg: F1 F1
Word: ctrl+F
Excel: ctrl+shift+L, ctrl+shift+> 

Retrieved financial data, validated the accuracy, and audited the risk.`}],oe=3,qn=()=>{const t=Ue(),e=Ye(f=>f.home.internshipIndex),n=H.useMemo(()=>Math.max(se.length-oe,0),[]),a=e<=0,r=e>=n,i=f=>{t(En({index:f,maxIndex:n}))},s=()=>{i(e-1)},o=()=>{i(e+1)};return c.jsxs("section",{id:"internship",className:"internship",children:[c.jsxs("div",{className:"internship__heading",children:[c.jsx("p",{children:"Explore my"}),c.jsx("div",{className:"internship__highlight",children:"internship experiences"})]}),c.jsx("div",{className:"internship__cards-container",children:c.jsx("div",{className:"internship__cards-wrapper",style:{transform:`translateX(-${e*100/oe}%)`},children:se.map(f=>c.jsxs("article",{className:"internship__card",children:[c.jsx("h1",{children:f.title}),c.jsxs("h2",{children:[c.jsx("span",{className:`internship__company-name internship__company-name--${f.id}`,children:f.company}),", ",c.jsx("br",{}),c.jsx("span",{className:"internship__position",children:f.position})]}),c.jsx("div",{className:"internship__details",children:c.jsx("p",{children:f.details})})]},f.id))})}),c.jsxs("div",{className:"internship__button-container",children:[c.jsx("button",{onClick:s,className:"internship__switch-button",disabled:a,"aria-label":"Previous internship cards",children:c.jsx(Vn,{})}),c.jsx("button",{onClick:o,className:"internship__switch-button",disabled:r,"aria-label":"Next internship cards",children:c.jsx(Xn,{})})]}),c.jsx("div",{className:"internship__divider"})]})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Kn(t,e,n){return(e=Qn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function le(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?le(Object(n),!0).forEach(function(a){Kn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Zn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Qn(t){var e=Zn(t,"string");return typeof e=="symbol"?e:e+""}const ce=()=>{};let Bt={},Ge={},Be=null,Ve={mark:ce,measure:ce};try{typeof window<"u"&&(Bt=window),typeof document<"u"&&(Ge=document),typeof MutationObserver<"u"&&(Be=MutationObserver),typeof performance<"u"&&(Ve=performance)}catch{}const{userAgent:fe=""}=Bt.navigator||{},z=Bt,b=Ge,ue=Be,at=Ve;z.document;const M=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",Xe=~fe.indexOf("MSIE")||~fe.indexOf("Trident/");var Jn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ta=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,qe={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},ea={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ke=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],P="classic",dt="duotone",na="sharp",aa="sharp-duotone",Ze=[P,dt,na,aa],ra={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ia={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},sa=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),oa={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},la=["fak","fa-kit","fakd","fa-kit-duotone"],de={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ca=["kit"],fa={kit:{"fa-kit":"fak"}},ua=["fak","fakd"],da={kit:{fak:"fa-kit"}},me={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},rt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ma=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],pa=["fak","fa-kit","fakd","fa-kit-duotone"],ha={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ga={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},ba={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},St={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},ya=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Nt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...ma,...ya],va=["solid","regular","light","thin","duotone","brands"],Qe=[1,2,3,4,5,6,7,8,9,10],xa=Qe.concat([11,12,13,14,15,16,17,18,19,20]),wa=[...Object.keys(ba),...va,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rt.GROUP,rt.SWAP_OPACITY,rt.PRIMARY,rt.SECONDARY].concat(Qe.map(t=>"".concat(t,"x"))).concat(xa.map(t=>"w-".concat(t))),Pa={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const T="___FONT_AWESOME___",jt=16,Je="fa",tn="svg-inline--fa",U="data-fa-i2svg",Et="data-fa-pseudo-element",_a="data-fa-pseudo-element-pending",Vt="data-prefix",Xt="data-icon",pe="fontawesome-i2svg",Aa="async",Oa=["HTML","HEAD","STYLE","SCRIPT"],en=(()=>{try{return!0}catch{return!1}})();function et(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[P]}})}const nn=l({},qe);nn[P]=l(l(l(l({},{"fa-duotone":"duotone"}),qe[P]),de.kit),de["kit-duotone"]);const ka=et(nn),It=l({},oa);It[P]=l(l(l(l({},{duotone:"fad"}),It[P]),me.kit),me["kit-duotone"]);const he=et(It),Ct=l({},St);Ct[P]=l(l({},Ct[P]),da.kit);const qt=et(Ct),Tt=l({},ga);Tt[P]=l(l({},Tt[P]),fa.kit);et(Tt);const Sa=Jn,an="fa-layers-text",Na=ta,ja=l({},ra);et(ja);const Ea=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yt=ea,Ia=[...ca,...wa],K=z.FontAwesomeConfig||{};function Ca(t){var e=b.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ta(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}b&&typeof b.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Ta(Ca(n));r!=null&&(K[a]=r)});const rn={styleDefault:"solid",familyDefault:P,cssPrefix:Je,replacementClass:tn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};K.familyPrefix&&(K.cssPrefix=K.familyPrefix);const V=l(l({},rn),K);V.autoReplaceSvg||(V.observeMutations=!1);const d={};Object.keys(rn).forEach(t=>{Object.defineProperty(d,t,{enumerable:!0,set:function(e){V[t]=e,Z.forEach(n=>n(d))},get:function(){return V[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){V.cssPrefix=t,Z.forEach(e=>e(d))},get:function(){return V.cssPrefix}});z.FontAwesomeConfig=d;const Z=[];function Fa(t){return Z.push(t),()=>{Z.splice(Z.indexOf(t),1)}}const L=jt,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ma(t){if(!t||!M)return;const e=b.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=b.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return b.head.insertBefore(e,a),t}const La="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Q(){let t=12,e="";for(;t-- >0;)e+=La[Math.random()*62|0];return e}function X(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Kt(t){return t.classList?X(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function sn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function za(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(sn(t[n]),'" '),"").trim()}function mt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Zt(t){return t.size!==j.size||t.x!==j.x||t.y!==j.y||t.rotate!==j.rotate||t.flipX||t.flipY}function Ra(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(s," ").concat(o)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:u}}function Da(t){let{transform:e,width:n=jt,height:a=jt,startCentered:r=!1}=t,i="";return r&&Xe?i+="translate(".concat(e.x/L-n/2,"em, ").concat(e.y/L-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/L,"em), calc(-50% + ").concat(e.y/L,"em)) "):i+="translate(".concat(e.x/L,"em, ").concat(e.y/L,"em) "),i+="scale(".concat(e.size/L*(e.flipX?-1:1),", ").concat(e.size/L*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Wa=`:root, :host {
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
}`;function on(){const t=Je,e=tn,n=d.cssPrefix,a=d.replacementClass;let r=Wa;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let ge=!1;function vt(){d.autoAddCss&&!ge&&(Ma(on()),ge=!0)}var Ua={mixout(){return{dom:{css:on,insertCss:vt}}},hooks(){return{beforeDOMElementCreation(){vt()},beforeI2svg(){vt()}}}};const F=z||{};F[T]||(F[T]={});F[T].styles||(F[T].styles={});F[T].hooks||(F[T].hooks={});F[T].shims||(F[T].shims=[]);var E=F[T];const ln=[],cn=function(){b.removeEventListener("DOMContentLoaded",cn),ct=1,ln.map(t=>t())};let ct=!1;M&&(ct=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),ct||b.addEventListener("DOMContentLoaded",cn));function Ya(t){M&&(ct?setTimeout(t,0):ln.push(t))}function nt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?sn(t):"<".concat(e," ").concat(za(n),">").concat(a.map(nt).join(""),"</").concat(e,">")}function be(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var xt=function(e,n,a,r){var i=Object.keys(e),s=i.length,o=n,f,u,m;for(a===void 0?(f=1,m=e[i[0]]):(f=0,m=a);f<s;f++)u=i[f],m=o(m,e[u],u,e);return m};function Ha(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ft(t){const e=Ha(t);return e.length===1?e[0].toString(16):null}function $a(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function ye(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Mt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=ye(e);typeof E.hooks.addPack=="function"&&!a?E.hooks.addPack(t,ye(e)):E.styles[t]=l(l({},E.styles[t]||{}),r),t==="fas"&&Mt("fa",e)}const{styles:J,shims:Ga}=E,fn=Object.keys(qt),Ba=fn.reduce((t,e)=>(t[e]=Object.keys(qt[e]),t),{});let Qt=null,un={},dn={},mn={},pn={},hn={};function Va(t){return~Ia.indexOf(t)}function Xa(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Va(r)?r:null}const gn=()=>{const t=a=>xt(J,(r,i,s)=>(r[s]=xt(i,a,{}),r),{});un=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=i}),a)),dn=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=i}),a)),hn=t((a,r,i)=>{const s=r[2];return a[i]=i,s.forEach(o=>{a[o]=i}),a});const e="far"in J||d.autoFetchSvg,n=xt(Ga,(a,r)=>{const i=r[0];let s=r[1];const o=r[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:o}),a},{names:{},unicodes:{}});mn=n.names,pn=n.unicodes,Qt=pt(d.styleDefault,{family:d.familyDefault})};Fa(t=>{Qt=pt(t.styleDefault,{family:d.familyDefault})});gn();function Jt(t,e){return(un[t]||{})[e]}function qa(t,e){return(dn[t]||{})[e]}function W(t,e){return(hn[t]||{})[e]}function bn(t){return mn[t]||{prefix:null,iconName:null}}function Ka(t){const e=pn[t],n=Jt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function R(){return Qt}const yn=()=>({prefix:null,iconName:null,rest:[]});function Za(t){let e=P;const n=fn.reduce((a,r)=>(a[r]="".concat(d.cssPrefix,"-").concat(r),a),{});return Ze.forEach(a=>{(t.includes(n[a])||t.some(r=>Ba[a].includes(r)))&&(e=a)}),e}function pt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=P}=e,a=ka[n][t];if(n===dt&&!t)return"fad";const r=he[n][t]||he[n][a],i=t in E.styles?t:null;return r||i||null}function Qa(t){let e=[],n=null;return t.forEach(a=>{const r=Xa(d.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function ve(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function ht(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Nt.concat(pa),i=ve(t.filter(g=>r.includes(g))),s=ve(t.filter(g=>!Nt.includes(g))),o=i.filter(g=>(a=g,!Ke.includes(g))),[f=null]=o,u=Za(i),m=l(l({},Qa(s)),{},{prefix:pt(f,{family:u})});return l(l(l({},m),nr({values:t,family:u,styles:J,config:d,canonical:m,givenPrefix:a})),Ja(n,a,m))}function Ja(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?bn(r):{},s=W(a,r);return r=i.iconName||s||r,a=i.prefix||a,a==="far"&&!J.far&&J.fas&&!d.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const tr=Ze.filter(t=>t!==P||t!==dt),er=Object.keys(St).filter(t=>t!==P).map(t=>Object.keys(St[t])).flat();function nr(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:s={}}=t,o=n===dt,f=e.includes("fa-duotone")||e.includes("fad"),u=s.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(f||u||m)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&tr.includes(n)&&(Object.keys(i).find(p=>er.includes(p))||s.autoFetchSvg)){const p=sa.get(n).defaultShortPrefixId;a.prefix=p,a.iconName=W(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=R()||"fas"),a}class ar{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=l(l({},this.definitions[i]||{}),r[i]),Mt(i,r[i]);const s=qt[P][i];s&&Mt(s,r[i]),gn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:s,icon:o}=a[r],f=o[2];e[i]||(e[i]={}),f.length>0&&f.forEach(u=>{typeof u=="string"&&(e[i][u]=o)}),e[i][s]=o}),e}}let xe=[],$={};const B={},rr=Object.keys(B);function ir(t,e){let{mixoutsTo:n}=e;return xe=t,$={},Object.keys(B).forEach(a=>{rr.indexOf(a)===-1&&delete B[a]}),xe.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{$[s]||($[s]=[]),$[s].push(i[s])})}a.provides&&a.provides(B)}),n}function Lt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return($[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function Y(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];($[t]||[]).forEach(i=>{i.apply(null,n)})}function D(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return B[t]?B[t].apply(null,e):void 0}function zt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||R();if(e)return e=W(n,e)||e,be(vn.definitions,n,e)||be(E.styles,n,e)}const vn=new ar,sr=()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,Y("noAuto")},or={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(Y("beforeI2svg",t),D("pseudoElements2svg",t),D("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Ya(()=>{cr({autoReplaceSvgRoot:e}),Y("watch",t)})}},lr={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:W(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=pt(t[0]);return{prefix:n,iconName:W(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(Sa))){const e=ht(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||R(),iconName:W(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=R();return{prefix:e,iconName:W(e,t)||t}}}},O={noAuto:sr,config:d,dom:or,parse:lr,library:vn,findIconDefinition:zt,toHtml:nt},cr=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=b}=t;(Object.keys(E.styles).length>0||d.autoFetchSvg)&&M&&d.autoReplaceSvg&&O.dom.i2svg({node:e})};function gt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>nt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!M)return;const n=b.createElement("div");return n.innerHTML=t.html,n.children}}),t}function fr(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:s}=t;if(Zt(s)&&n.found&&!a.found){const{width:o,height:f}=n,u={x:o/f/2,y:.5};r.style=mt(l(l({},i),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function ur(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:s}),children:a}]}]}function te(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:s,title:o,maskId:f,titleId:u,extra:m,watchable:g=!1}=t,{width:p,height:v}=n.found?n:e,A=ua.includes(a),k=[d.replacementClass,r?"".concat(d.cssPrefix,"-").concat(r):""].filter(S=>m.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(m.classes).join(" ");let y={children:[],attributes:l(l({},m.attributes),{},{"data-prefix":a,"data-icon":r,class:k,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(v)})};const w=A&&!~m.classes.indexOf("fa-fw")?{width:"".concat(p/v*16*.0625,"em")}:{};g&&(y.attributes[U]=""),o&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(u||Q())},children:[o]}),delete y.attributes.title);const x=l(l({},y),{},{prefix:a,iconName:r,main:e,mask:n,maskId:f,transform:i,symbol:s,styles:l(l({},w),m.styles)}),{children:_,attributes:I}=n.found&&e.found?D("generateAbstractMask",x)||{children:[],attributes:{}}:D("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=_,x.attributes=I,s?ur(x):fr(x)}function we(t){const{content:e,width:n,height:a,transform:r,title:i,extra:s,watchable:o=!1}=t,f=l(l(l({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});o&&(f[U]="");const u=l({},s.styles);Zt(r)&&(u.transform=Da({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);const m=mt(u);m.length>0&&(f.style=m);const g=[];return g.push({tag:"span",attributes:f,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function dr(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=mt(a.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:wt}=E;function Rt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(yt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(yt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(yt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const mr={found:!1,width:512,height:512};function pr(t,e){!en&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Dt(t,e){let n=e;return e==="fa"&&d.styleDefault!==null&&(e=R()),new Promise((a,r)=>{if(n==="fa"){const i=bn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&wt[e]&&wt[e][t]){const i=wt[e][t];return a(Rt(i))}pr(t,e),a(l(l({},mr),{},{icon:d.showMissingIcons&&t?D("missingIconAbstract")||{}:{}}))})}const Pe=()=>{},Wt=d.measurePerformance&&at&&at.mark&&at.measure?at:{mark:Pe,measure:Pe},q='FA "6.7.2"',hr=t=>(Wt.mark("".concat(q," ").concat(t," begins")),()=>xn(t)),xn=t=>{Wt.mark("".concat(q," ").concat(t," ends")),Wt.measure("".concat(q," ").concat(t),"".concat(q," ").concat(t," begins"),"".concat(q," ").concat(t," ends"))};var ee={begin:hr,end:xn};const it=()=>{};function _e(t){return typeof(t.getAttribute?t.getAttribute(U):null)=="string"}function gr(t){const e=t.getAttribute?t.getAttribute(Vt):null,n=t.getAttribute?t.getAttribute(Xt):null;return e&&n}function br(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function yr(){return d.autoReplaceSvg===!0?st.replace:st[d.autoReplaceSvg]||st.replace}function vr(t){return b.createElementNS("http://www.w3.org/2000/svg",t)}function xr(t){return b.createElement(t)}function wn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?vr:xr}=e;if(typeof t=="string")return b.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(wn(i,{ceFn:n}))}),a}function wr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const st={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(wn(n),e)}),e.getAttribute(U)===null&&d.keepOriginalSource){let n=b.createComment(wr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Kt(e).indexOf(d.replacementClass))return st.replace(t);const a=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,o)=>(o===d.replacementClass||o.match(a)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>nt(i)).join(`
`);e.setAttribute(U,""),e.innerHTML=r}};function Ae(t){t()}function Pn(t,e){const n=typeof e=="function"?e:it;if(t.length===0)n();else{let a=Ae;d.mutateApproach===Aa&&(a=z.requestAnimationFrame||Ae),a(()=>{const r=yr(),i=ee.begin("mutate");t.map(r),i(),n()})}}let ne=!1;function _n(){ne=!0}function Ut(){ne=!1}let ft=null;function Oe(t){if(!ue||!d.observeMutations)return;const{treeCallback:e=it,nodeCallback:n=it,pseudoElementsCallback:a=it,observeMutationsRoot:r=b}=t;ft=new ue(i=>{if(ne)return;const s=R();X(i).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!_e(o.addedNodes[0])&&(d.searchPseudoElements&&a(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&d.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&_e(o.target)&&~Ea.indexOf(o.attributeName))if(o.attributeName==="class"&&gr(o.target)){const{prefix:f,iconName:u}=ht(Kt(o.target));o.target.setAttribute(Vt,f||s),u&&o.target.setAttribute(Xt,u)}else br(o.target)&&n(o.target)})}),M&&ft.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Pr(){ft&&ft.disconnect()}function _r(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(a[s]=o.join(":").trim()),a},{})),n}function Ar(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=ht(Kt(t));return r.prefix||(r.prefix=R()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=qa(r.prefix,t.innerText)||Jt(r.prefix,Ft(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Or(t){const e=X(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||Q()):(e["aria-hidden"]="true",e.focusable="false")),e}function kr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ke(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Ar(t),i=Or(t),s=Lt("parseNodeAttributes",{},t);let o=e.styleParser?_r(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:i}},s)}const{styles:Sr}=E;function An(t){const e=d.autoReplaceSvg==="nest"?ke(t,{styleParser:!1}):ke(t);return~e.extra.classes.indexOf(an)?D("generateLayersText",t,e):D("generateSvgReplacementMutation",t,e)}function Nr(){return[...la,...Nt]}function Se(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();const n=b.documentElement.classList,a=m=>n.add("".concat(pe,"-").concat(m)),r=m=>n.remove("".concat(pe,"-").concat(m)),i=d.autoFetchSvg?Nr():Ke.concat(Object.keys(Sr));i.includes("fa")||i.push("fa");const s=[".".concat(an,":not([").concat(U,"])")].concat(i.map(m=>".".concat(m,":not([").concat(U,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=X(t.querySelectorAll(s))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const f=ee.begin("onTree"),u=o.reduce((m,g)=>{try{const p=An(g);p&&m.push(p)}catch(p){en||p.name==="MissingIcon"&&console.error(p)}return m},[]);return new Promise((m,g)=>{Promise.all(u).then(p=>{Pn(p,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),m()})}).catch(p=>{f(),g(p)})})}function jr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;An(t).then(n=>{n&&Pn([n],e)})}function Er(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:zt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:zt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const Ir=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=j,symbol:a=!1,mask:r=null,maskId:i=null,title:s=null,titleId:o=null,classes:f=[],attributes:u={},styles:m={}}=e;if(!t)return;const{prefix:g,iconName:p,icon:v}=t;return gt(l({type:"icon"},t),()=>(Y("beforeDOMElementCreation",{iconDefinition:t,params:e}),d.autoA11y&&(s?u["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(o||Q()):(u["aria-hidden"]="true",u.focusable="false")),te({icons:{main:Rt(v),mask:r?Rt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:p,transform:l(l({},j),n),symbol:a,title:s,maskId:i,titleId:o,extra:{attributes:u,styles:m,classes:f}})))};var Cr={mixout(){return{icon:Er(Ir)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Se,t.nodeCallback=jr,t}}},provides(t){t.i2svg=function(e){const{node:n=b,callback:a=()=>{}}=e;return Se(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:s,transform:o,symbol:f,mask:u,maskId:m,extra:g}=n;return new Promise((p,v)=>{Promise.all([Dt(a,s),u.iconName?Dt(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(A=>{let[k,y]=A;p([e,te({icons:{main:k,mask:y},prefix:s,iconName:a,transform:o,symbol:f,maskId:m,title:r,titleId:i,extra:g,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:s}=e;const o=mt(s);o.length>0&&(a.style=o);let f;return Zt(i)&&(f=D("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:a}}}},Tr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return gt({type:"layer"},()=>{Y("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Fr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return gt({type:"counter",content:t},()=>(Y("beforeDOMElementCreation",{content:t,params:e}),dr({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(d.cssPrefix,"-layers-counter"),...a]}})))}}}},Mr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=j,title:a=null,classes:r=[],attributes:i={},styles:s={}}=e;return gt({type:"text",content:t},()=>(Y("beforeDOMElementCreation",{content:t,params:e}),we({content:t,transform:l(l({},j),n),title:a,extra:{attributes:i,styles:s,classes:["".concat(d.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let s=null,o=null;if(Xe){const f=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();s=u.width/f,o=u.height/f}return d.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,we({content:e.innerHTML,width:s,height:o,transform:r,title:a,extra:i,watchable:!0})])}}};const Lr=new RegExp('"',"ug"),Ne=[1105920,1112319],je=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),ia),Pa),ha),Yt=Object.keys(je).reduce((t,e)=>(t[e.toLowerCase()]=je[e],t),{}),zr=Object.keys(Yt).reduce((t,e)=>{const n=Yt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Rr(t){const e=t.replace(Lr,""),n=$a(e,0),a=n>=Ne[0]&&n<=Ne[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ft(r?e[0]:e),isSecondary:a||r}}function Dr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Yt[n]||{})[r]||zr[n]}function Ee(t,e){const n="".concat(_a).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=X(t.children).filter(p=>p.getAttribute(Et)===e)[0],o=z.getComputedStyle(t,e),f=o.getPropertyValue("font-family"),u=f.match(Na),m=o.getPropertyValue("font-weight"),g=o.getPropertyValue("content");if(s&&!u)return t.removeChild(s),a();if(u&&g!=="none"&&g!==""){const p=o.getPropertyValue("content");let v=Dr(f,m);const{value:A,isSecondary:k}=Rr(p),y=u[0].startsWith("FontAwesome");let w=Jt(v,A),x=w;if(y){const _=Ka(A);_.iconName&&_.prefix&&(w=_.iconName,v=_.prefix)}if(w&&!k&&(!s||s.getAttribute(Vt)!==v||s.getAttribute(Xt)!==x)){t.setAttribute(n,x),s&&t.removeChild(s);const _=kr(),{extra:I}=_;I.attributes[Et]=e,Dt(w,v).then(S=>{const Nn=te(l(l({},_),{},{icons:{main:S,mask:yn()},prefix:v,iconName:x,extra:I,watchable:!0})),bt=b.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(bt,t.firstChild):t.appendChild(bt),bt.outerHTML=Nn.map(jn=>nt(jn)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Wr(t){return Promise.all([Ee(t,"::before"),Ee(t,"::after")])}function Ur(t){return t.parentNode!==document.head&&!~Oa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Et)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ie(t){if(M)return new Promise((e,n)=>{const a=X(t.querySelectorAll("*")).filter(Ur).map(Wr),r=ee.begin("searchPseudoElements");_n(),Promise.all(a).then(()=>{r(),Ut(),e()}).catch(()=>{r(),Ut(),n()})})}var Yr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ie,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=b}=e;d.searchPseudoElements&&Ie(n)}}};let Ce=!1;var Hr={mixout(){return{dom:{unwatch(){_n(),Ce=!0}}}},hooks(){return{bootstrap(){Oe(Lt("mutationObserverCallbacks",{}))},noAuto(){Pr()},watch(t){const{observeMutationsRoot:e}=t;Ce?Ut():Oe(Lt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Te=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var $r={mixout(){return{parse:{transform:t=>Te(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Te(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const s={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(o," ").concat(f," ").concat(u)},g={transform:"translate(".concat(i/2*-1," -256)")},p={outer:s,inner:m,path:g};return{tag:"g",attributes:l({},p.outer),children:[{tag:"g",attributes:l({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),p.path)}]}]}}}};const Pt={x:0,y:0,width:"100%",height:"100%"};function Fe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Gr(t){return t.tag==="g"?t.children:[t]}var Br={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?ht(n.split(" ").map(r=>r.trim())):yn();return a.prefix||(a.prefix=R()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:s,transform:o}=e;const{width:f,icon:u}=r,{width:m,icon:g}=i,p=Ra({transform:o,containerWidth:m,iconWidth:f}),v={tag:"rect",attributes:l(l({},Pt),{},{fill:"white"})},A=u.children?{children:u.children.map(Fe)}:{},k={tag:"g",attributes:l({},p.inner),children:[Fe(l({tag:u.tag,attributes:l(l({},u.attributes),p.path)},A))]},y={tag:"g",attributes:l({},p.outer),children:[k]},w="mask-".concat(s||Q()),x="clip-".concat(s||Q()),_={tag:"mask",attributes:l(l({},Pt),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,y]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Gr(g)},_]};return n.push(I,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(w,")")},Pt)}),{children:n,attributes:a}}}},Vr={provides(t){let e=!1;z.matchMedia&&(e=z.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=l(l({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Xr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},qr=[Ua,Cr,Tr,Fr,Mr,Yr,Hr,$r,Br,Vr,Xr];ir(qr,{mixoutsTo:O});O.noAuto;O.config;O.library;O.dom;const Ht=O.parse;O.findIconDefinition;O.toHtml;const Kr=O.icon;O.layer;O.text;O.counter;var _t={exports:{}},At,Me;function Zr(){if(Me)return At;Me=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return At=t,At}var Ot,Le;function Qr(){if(Le)return Ot;Le=1;var t=Zr();function e(){}function n(){}return n.resetWarningCache=e,Ot=function(){function a(s,o,f,u,m,g){if(g!==t){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}a.isRequired=a;function r(){return a}var i={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:r,element:a,elementType:a,instanceOf:r,node:a,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:e};return i.PropTypes=i,i},Ot}var ze;function Jr(){return ze||(ze=1,_t.exports=Qr()()),_t.exports}var ti=Jr();const h=In(ti);function Re(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Re(Object(n),!0).forEach(function(a){G(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ut(t){"@babel/helpers - typeof";return ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ut(t)}function G(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ei(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function ni(t,e){if(t==null)return{};var n=ei(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function $t(t){return ai(t)||ri(t)||ii(t)||si()}function ai(t){if(Array.isArray(t))return Gt(t)}function ri(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ii(t,e){if(t){if(typeof t=="string")return Gt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gt(t,e)}}function Gt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function si(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oi(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,s=t.shake,o=t.flash,f=t.spin,u=t.spinPulse,m=t.spinReverse,g=t.pulse,p=t.fixedWidth,v=t.inverse,A=t.border,k=t.listItem,y=t.flip,w=t.size,x=t.rotation,_=t.pull,I=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":s,"fa-flash":o,"fa-spin":f,"fa-spin-reverse":m,"fa-spin-pulse":u,"fa-pulse":g,"fa-fw":p,"fa-inverse":v,"fa-border":A,"fa-li":k,"fa-flip":y===!0,"fa-flip-horizontal":y==="horizontal"||y==="both","fa-flip-vertical":y==="vertical"||y==="both"},G(e,"fa-".concat(w),typeof w<"u"&&w!==null),G(e,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),G(e,"fa-pull-".concat(_),typeof _<"u"&&_!==null),G(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(I).map(function(S){return I[S]?S:null}).filter(function(S){return S})}function li(t){return t=t-0,t===t}function On(t){return li(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var ci=["style"];function fi(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ui(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=On(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[fi(r)]=i:e[r]=i,e},{})}function kn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return kn(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,u){var m=e.attributes[u];switch(u){case"class":f.attrs.className=m,delete e.attributes.class;break;case"style":f.attrs.style=ui(m);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?f.attrs[u.toLowerCase()]=m:f.attrs[On(u)]=m}return f},{attrs:{}}),i=n.style,s=i===void 0?{}:i,o=ni(n,ci);return r.attrs.style=N(N({},r.attrs.style),s),t.apply(void 0,[e.tag,N(N({},r.attrs),o)].concat($t(a)))}var Sn=!1;try{Sn=!0}catch{}function di(){if(!Sn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function De(t){if(t&&ut(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ht.icon)return Ht.icon(t);if(t===null)return null;if(t&&ut(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function kt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?G({},t,e):{}}var We={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ae=C.forwardRef(function(t,e){var n=N(N({},We),t),a=n.icon,r=n.mask,i=n.symbol,s=n.className,o=n.title,f=n.titleId,u=n.maskId,m=De(a),g=kt("classes",[].concat($t(oi(n)),$t((s||"").split(" ")))),p=kt("transform",typeof n.transform=="string"?Ht.transform(n.transform):n.transform),v=kt("mask",De(r)),A=Kr(m,N(N(N(N({},g),p),v),{},{symbol:i,title:o,titleId:f,maskId:u}));if(!A)return di("Could not find icon",m),null;var k=A.abstract,y={ref:e};return Object.keys(n).forEach(function(w){We.hasOwnProperty(w)||(y[w]=n[w])}),mi(k[0],y)});ae.displayName="FontAwesomeIcon";ae.propTypes={beat:h.bool,border:h.bool,beatFade:h.bool,bounce:h.bool,className:h.string,fade:h.bool,flash:h.bool,mask:h.oneOfType([h.object,h.array,h.string]),maskId:h.string,fixedWidth:h.bool,inverse:h.bool,flip:h.oneOf([!0,!1,"horizontal","vertical","both"]),icon:h.oneOfType([h.object,h.array,h.string]),listItem:h.bool,pull:h.oneOf(["right","left"]),pulse:h.bool,rotation:h.oneOf([0,90,180,270]),shake:h.bool,size:h.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:h.bool,spinPulse:h.bool,spinReverse:h.bool,symbol:h.oneOfType([h.bool,h.string]),title:h.string,titleId:h.string,transform:h.oneOfType([h.string,h.object]),swapOpacity:h.bool};var mi=kn.bind(null,C.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const pi={prefix:"fas",iconName:"images",icon:[576,512,[],"f302","M160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320l-144 0-48 0-80 0c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const hi={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const gi={prefix:"far",iconName:"file-pdf",icon:[512,512,[],"f1c1","M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"]},bi=[{id:"wechat-analysis",title:`WeChat
Usage
Annual
Report`,description:c.jsxs(c.Fragment,{children:["Calculate sentimental score by ",c.jsx("span",{children:"SnowNLP"})," to analyze emotion",c.jsx("br",{}),"contained in WeChat messages daily.",c.jsx("br",{}),c.jsx("br",{}),"So, is it a happy day or a sad day?"]}),imageSrc:"/image/sentiment_score_daily.png",imageAlt:"sentiment score daily",backgroundImage:"/image/wechat_analysis_backgroud.png",actions:[{href:"/20240109",icon:pi,className:"project-showcase__action-button project-showcase__action-button--slide",ariaLabel:"Open project image"}]},{id:"stock-prediction",title:`Stock
Price
Prediction`,description:c.jsxs(c.Fragment,{children:["Use ",c.jsx("span",{children:"CNN, LSTM, and ARIMA "}),"to predict Tesla stock prices.",c.jsx("br",{}),"Prediction? or Classification? or B.........",c.jsx("br",{})]}),imageSrc:"/image/price.png",imageAlt:"Tesla price prediction",actions:[{href:"https://github.com/Gavin-OP/stat4012-group-project",icon:hi,className:"project-showcase__action-button project-showcase__action-button--github",ariaLabel:"Open GitHub repository",external:!0},{href:"/file/Stock_Return_Prediction_with_CNN_and_Attention_based_LSTM_models.pdf",icon:gi,className:"project-showcase__action-button project-showcase__action-button--pdf",ariaLabel:"Open project PDF"}]}],yi=()=>{const t=Ue(),e=Ye(n=>n.home.activeProjectId);return c.jsxs("section",{id:"project",className:"project-showcase",children:[c.jsxs("div",{className:"project-showcase__heading",children:[c.jsx("p",{children:"Explore my"}),c.jsx("div",{className:"project-showcase__highlight",children:"best projects"})]}),c.jsx("div",{className:"project-showcase__cards-container",children:c.jsx("div",{className:"project-showcase__cards-wrapper",children:bi.map(n=>{const a=e===n.id;return c.jsxs("article",{className:`project-showcase__item project-showcase__item--${n.id} ${a?"project-showcase__item--active":""}`,onClick:()=>t(Cn(n.id)),style:n.backgroundImage?{backgroundImage:`url(${n.backgroundImage})`}:void 0,children:[n.backgroundImage?c.jsx("div",{className:"project-showcase__overlay"}):null,c.jsxs("div",{className:"project-showcase__content",children:[c.jsx("p",{className:"project-showcase__small-detail",children:n.title.split(`
`).map(r=>c.jsxs("span",{children:[r,c.jsx("br",{})]},r))}),c.jsxs("div",{className:"project-showcase__detail",children:[c.jsx("p",{className:"project-showcase__active-detail",children:n.description}),c.jsx("div",{className:"project-showcase__image-container",children:c.jsx("div",{className:`project-showcase__image project-showcase__image--${n.id}`,children:c.jsx("img",{src:n.imageSrc,alt:n.imageAlt})})})]})]}),c.jsx("div",{className:"project-showcase__icons",children:n.actions.map(r=>c.jsx("a",{href:r.href,className:r.className,"aria-label":r.ariaLabel,target:r.external?"_blank":void 0,rel:r.external?"noreferrer":void 0,onClick:i=>i.stopPropagation(),children:c.jsx(ae,{icon:r.icon})},r.href))})]},n.id)})})})]})},xi=()=>c.jsx("div",{className:"home-page",children:c.jsxs(Gn,{showNav:!0,children:[c.jsx(Bn,{}),c.jsx(qn,{}),c.jsx(yi,{})]})});export{xi as default};
