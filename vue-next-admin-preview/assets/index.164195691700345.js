var f=Object.defineProperty;var _=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var p=(e,t,o)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))A.call(t,o)&&p(e,o,t[o]);if(_)for(var o of _(t))D.call(t,o)&&p(e,o,t[o]);return e};import{_ as F}from"./index.1641956917003.js";import{m as E,t as k,r as n,q as h,D as s,F as u,I as i,S as l,O as S,B as x}from"./vendor.1641956917003.js";const N={name:"pagesSteps",setup(){const e=E({stepsActive:1});return d({onNextSteps:()=>{e.stepsActive++>2&&(e.stepsActive=1)}},k(e))}},b={class:"steps-container"},y=x(" \u4E0B\u4E00\u6B65 ");function g(e,t,o,m,T,w){const c=n("SvgIcon"),a=n("el-step"),B=n("el-steps"),r=n("el-result"),C=n("el-button"),v=n("el-card");return i(),h("div",b,[s(v,{shadow:"hover",header:"element-plus \u6B65\u9AA4\u6761"},{default:u(()=>[s(B,{active:e.stepsActive},{default:u(()=>[s(a,{title:"\u7B2C\u4E00\u6B65"},{icon:u(()=>[s(c,{name:"iconfont icon-0_round_solid"})]),_:1}),s(a,{title:"\u7B2C\u4E8C\u6B65"},{icon:u(()=>[s(c,{name:"iconfont icon-2_round_solid"})]),_:1}),s(a,{title:"\u7B2C\u4E09\u6B65"},{icon:u(()=>[s(c,{name:"iconfont icon-3_round_solid"})]),_:1})]),_:1},8,["active"]),e.stepsActive===1?(i(),l(r,{key:0,icon:"success",title:"\u6210\u529F\u63D0\u793A",subTitle:"\u8BF7\u6839\u636E\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C"})):e.stepsActive===2?(i(),l(r,{key:1,icon:"warning",title:"\u8B66\u544A\u63D0\u793A",subTitle:"\u8BF7\u6839\u636E\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C"})):e.stepsActive===3?(i(),l(r,{key:2,icon:"error",title:"\u9519\u8BEF\u63D0\u793A",subTitle:"\u8BF7\u6839\u636E\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C"})):S("",!0),s(C,{onClick:m.onNextSteps,size:"small",class:"mt15",type:"primary"},{default:u(()=>[s(c,{name:"iconfont icon-step"}),y]),_:1},8,["onClick"])]),_:1})])}var j=F(N,[["render",g]]);export{j as default};