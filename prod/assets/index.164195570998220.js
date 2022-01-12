var b=Object.defineProperty;var d=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var f=(e,n,o)=>n in e?b(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,m=(e,n)=>{for(var o in n||(n={}))w.call(n,o)&&f(e,o,n[o]);if(d)for(var o of d(n))S.call(n,o)&&f(e,o,n[o]);return e};import{i as k,l as u,m as x,o as W,t as T,n as _,r as I,w as $,v as B,I as a,q as r,x as p,y as O,O as h,C,a8 as R,S as A,M as y}from"./vendor.1641955709982.js";import{_ as N}from"./index.1641955709982.js";const z=k({name:"noticeBar",props:{mode:{type:String,default:()=>""},text:{type:String,default:()=>""},color:{type:String,default:()=>"var(--color-warning)"},background:{type:String,default:()=>"var(--color-warning-light-9)"},size:{type:[Number,String],default:()=>14},height:{type:[Number,String],default:()=>40},delay:{type:[Number,String],default:()=>1},speed:{type:[Number,String],default:()=>100},scrollable:{type:Boolean,default:()=>!1},leftIcon:{type:String,default:()=>""},rightIcon:{type:String,default:()=>""}},setup(e,{emit:n}){const o=u(),i=u(),t=x({order:1,oneTime:"",twoTime:"",warpOWidth:"",textOWidth:"",isMode:!1}),l=()=>{_(()=>{t.warpOWidth=o.value.offsetWidth,t.textOWidth=i.value.offsetWidth,document.styleSheets[0].insertRule(`@keyframes oneAnimation {0% {left: 0px;} 100% {left: -${t.textOWidth}px;}}`),document.styleSheets[0].insertRule(`@keyframes twoAnimation {0% {left: ${t.warpOWidth}px;} 100% {left: -${t.textOWidth}px;}}`),s(),setTimeout(()=>{c()},e.delay*1e3)})},s=()=>{t.oneTime=t.textOWidth/e.speed,t.twoTime=(t.textOWidth+t.warpOWidth)/e.speed},c=()=>{t.order===1?(i.value.style.cssText=`animation: oneAnimation ${t.oneTime}s linear; opactity: 1;}`,t.order=2):i.value.style.cssText=`animation: twoAnimation ${t.twoTime}s linear infinite; opacity: 1;`},g=()=>{i.value.addEventListener("animationend",()=>{c()},!1)},v=()=>{if(!e.mode)return!1;e.mode==="closeable"?(t.isMode=!0,n("close")):e.mode==="link"&&n("link")};return W(()=>{if(e.scrollable)return!1;l(),g()}),m({noticeBarWarpRef:o,noticeBarTextRef:i,onRightIconClick:v},T(t))}}),M={class:"notice-bar-warp-text-box",ref:"noticeBarWarpRef"},j={key:1,class:"notice-bar-warp-slot"};function D(e,n,o,i,t,l){const s=I("SvgIcon");return $((a(),r("div",{class:"notice-bar",style:y({background:e.background,height:`${e.height}px`})},[p("div",{class:"notice-bar-warp",style:y({color:e.color,fontSize:`${e.size}px`})},[e.leftIcon?(a(),r("i",{key:0,class:O(["notice-bar-warp-left-icon",e.leftIcon])},null,2)):h("",!0),p("div",M,[e.scrollable?(a(),r("div",j,[R(e.$slots,"default",{},void 0,!0)])):(a(),r("div",{key:0,class:"notice-bar-warp-text",ref:"noticeBarTextRef"},C(e.text),513))],512),e.rightIcon?(a(),A(s,{key:1,name:e.rightIcon,class:"notice-bar-warp-right-icon",onClick:e.onRightIconClick},null,8,["name","onClick"])):h("",!0)],4)],4)),[[B,!e.isMode]])}var L=N(z,[["render",D],["__scopeId","data-v-49b652ba"]]);export{L as N};
