var p=Object.defineProperty;var n=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var u=(t,e,s)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,l=(t,e)=>{for(var s in e||(e={}))c.call(e,s)&&u(t,s,e[s]);if(n)for(var s of n(e))d.call(e,s)&&u(t,s,e[s]);return t};import{i as f,P as h,m as _,L as g,o as v,t as C,q as w,x as a,C as m,M as x,I as y}from"./vendor.1641955709982.js";import{_ as F,u as V}from"./index.1641955709982.js";const $=f({name:"paramsCommonDetails",setup(){const t=h(),e=V(),s=_({params:{}}),o=g(()=>{let{isTagsview:r}=e.state.themeConfig.themeConfig,{isTagsViewCurrenFull:i}=e.state.tagsViewRoutes;return i?"30px":r?"114px":"80px"});return v(()=>{s.params=t}),l({setViewHeight:o},C(s))}}),D={class:"flex-margin color-primary"},q=a("div",null,"paramsCommonDetails",-1),B={class:"mt10 mb10"};function R(t,e,s,o,r,i){return y(),w("div",{class:"layout-view-bg-white flex",style:x({height:`calc(100vh - ${t.setViewHeight}`})},[a("div",D,[q,a("div",B,"\u8DEF\u5F84\uFF1Apath: "+m(t.params.path),1),a("div",null,"\u53C2\u6570\uFF1Aquery: "+m(t.params.query),1)])],4)}var k=F($,[["render",R]]);export{k as default};
