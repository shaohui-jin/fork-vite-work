var y=Object.defineProperty;var i=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var d=(t,o,e)=>o in t?y(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,m=(t,o)=>{for(var e in o||(o={}))F.call(o,e)&&d(t,e,o[e]);if(i)for(var e of i(o))g.call(o,e)&&d(t,e,o[e]);return t};import{_}from"./index.1682602826682.js";import{i as w,m as h,p as E,t as S,r as a,I as p,q as f,S as $,O as b,l as A,D as u,F as C,B as D}from"./vendor.1682602826682.js";const G=w({name:"screenShortComponent",setup(t,{emit:o}){const e=h({screenshotStatus:!1}),s=()=>{e.screenshotStatus=!0,c()},r=n=>{e.screenshotStatus=n},l=n=>{o("getBase64",n)},c=()=>{if(!e.screenshotStatus)return!1;window.addEventListener("keydown",n=>{n.keyCode===27&&r()})};return E(()=>{window.removeEventListener("keydown",()=>{})}),m({openScreenshot:s,destroyComponent:r,getImageData:l,onMonitorKeyup:c},S(e))}});function I(t,o,e,s,r,l){const c=a("screen-short");return p(),f("div",null,[t.screenshotStatus?(p(),$(c,{key:0,onDestroyComponent:t.destroyComponent,onGetImageData:t.getImageData},null,8,["onDestroyComponent","onGetImageData"])):b("",!0)])}var x=_(G,[["render",I]]);const N={name:"screenShort",components:{ScreenShort:x},setup(){const t=A(),o=h({});return m({screenShortRef:t,onScreenShortClick:()=>{t.value.openScreenshot()},onGetBase64:r=>{console.log(r)}},S(o))}},R=D(" \u70B9\u51FB\u622A\u5C4F ");function V(t,o,e,s,r,l){const c=a("el-alert"),n=a("ScreenShort"),v=a("SvgIcon"),k=a("el-button"),B=a("el-card");return p(),f("div",null,[u(B,{shadow:"hover",header:"web\u7AEF\u81EA\u5B9A\u4E49\u622A\u5C4F\u6F14\u793A"},{default:C(()=>[u(c,{title:"\u611F\u8C22\u4F18\u79C0\u7684 `vue-web-screen-shot`\uFF0C\u9879\u76EE\u5730\u5740\uFF1Ahttps://github.com/likaia/screen-shot",type:"success",closable:!1,class:"mb15"}),u(n,{ref:"screenShortRef",onGetBase64:s.onGetBase64},null,8,["onGetBase64"]),u(k,{type:"primary",size:"small",onClick:s.onScreenShortClick},{default:C(()=>[u(v,{name:"elementCrop"}),R]),_:1},8,["onClick"])]),_:1})])}var z=_(N,[["render",V]]);export{z as default};