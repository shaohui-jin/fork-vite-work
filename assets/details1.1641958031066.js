var l=Object.defineProperty;var o=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var n=(s,e,t)=>e in s?l(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,c=(s,e)=>{for(var t in e||(e={}))u.call(e,t)&&n(s,t,e[t]);if(o)for(var t of o(e))g.call(e,t)&&n(s,t,e[t]);return s};import{_ as d,u as p}from"./index.1641958031066.js";import{m as f,L as m,t as h,q as _,M as v,I as x,x as a}from"./vendor.1641958031066.js";const w={name:"pagesFilteringDetails1",setup(){const s=p(),e=f({tagViewHeight:""}),t=m(()=>{let{isTagsview:i}=s.state.themeConfig.themeConfig,{isTagsViewCurrenFull:r}=s.state.tagsViewRoutes;return r?"30px":i?"114px":"80px"});return c({initTagViewHeight:t},h(e))}},V=a("div",{class:"layout-view-bg-white"},[a("div",{class:"w100 h100 flex"},[a("div",{class:"flex-margin color-primary"},"\u6D4B\u8BD5\u754C\u9762")])],-1),B=[V];function y(s,e,t,i,r,C){return x(),_("div",{style:v({height:`calc(100vh - ${i.initTagViewHeight}`})},B,4)}var H=d(w,[["render",y]]);export{H as default};
