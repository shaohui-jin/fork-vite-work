var c=Object.defineProperty;var n=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var f=(t,a,e)=>a in t?c(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,m=(t,a)=>{for(var e in a||(a={}))d.call(a,e)&&f(t,e,a[e]);if(n)for(var e of n(a))u.call(a,e)&&f(t,e,a[e]);return t};import{i as g,P as h,m as p,L as v,o as w,R as _,t as L,a9 as x,w as l,q as I,x as y,v as $,M as k,n as B,I as C}from"./vendor.1642757606384.js";import{_ as R,u as V}from"./index.1642757606384.js";const b=g({name:"layoutIfameView",setup(){const t=h(),a=V(),e=p({iframeLoading:!0,iframeUrl:""}),s=()=>{e.iframeUrl=t.meta.isLink,B(()=>{e.iframeLoading=!0;const r=document.getElementById("iframe");if(!r)return!1;r.onload=()=>{e.iframeLoading=!1}})},o=v(()=>{let{isTagsview:r}=a.state.themeConfig.themeConfig,{isTagsViewCurrenFull:i}=a.state.tagsViewRoutes;return i?"1px":r?"85px":"51px"});return w(()=>{s()}),_(()=>t.path,()=>{s()}),m({setIframeHeight:o},L(e))}}),S=["src"];function T(t,a,e,s,o,r){const i=x("loading");return l((C(),I("div",{class:"layout-view-bg-white flex mt1",style:k({height:`calc(100vh - ${t.setIframeHeight}`,border:"none"})},[l(y("iframe",{src:t.iframeUrl,frameborder:"0",height:"100%",width:"100%",id:"iframe"},null,8,S),[[$,!t.iframeLoading]])],4)),[[i,t.iframeLoading]])}var E=R(b,[["render",T]]);export{E as default};