var v=Object.defineProperty;var i=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var l=(e,s,t)=>s in e?v(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,_=(e,s)=>{for(var t in s||(s={}))w.call(s,t)&&l(e,t,s[t]);if(i)for(var t of i(s))x.call(s,t)&&l(e,t,s[t]);return e};import{i as g}from"./getStyleSheets.1641955709982.js";import{_ as y}from"./index.1641955709982.js";import{m as F,o as I,t as S,r as n,q as d,D as u,F as a,I as c,$,Z as A,S as B,x as o,y as L,C as k}from"./vendor.1641955709982.js";const C={name:"pagesAwesome",setup(){const e=F({sheetsIconList:[]}),s=()=>{g.awe().then(t=>e.sheetsIconList=t)};return I(()=>{s()}),_({},S(e))}},E={class:"awesome-container"},j={class:"iconfont-warp"},D={class:"flex-margin"},N={class:"iconfont-warp-value"},V={class:"iconfont-warp-label mt10"};function b(e,s,t,q,z,G){const m=n("el-col"),p=n("el-row"),f=n("el-card");return c(),d("div",E,[u(f,{shadow:"hover",header:`fontawesome \u5B57\u4F53\u56FE\u6807(\u81EA\u52A8\u8F7D\u5165)\uFF1A${e.sheetsIconList.length-24}\u4E2A`},{default:a(()=>[u(p,{class:"iconfont-row"},{default:a(()=>[(c(!0),d($,null,A(e.sheetsIconList,(r,h)=>(c(),B(m,{xs:12,sm:8,md:6,lg:4,xl:2,key:h},{default:a(()=>[o("div",j,[o("div",D,[o("div",N,[o("i",{class:L([r,"fa"])},null,2)]),o("div",V,k(r),1)])])]),_:2},1024))),128))]),_:1})]),_:1},8,["header"])])}var J=y(C,[["render",b],["__scopeId","data-v-0927e5fc"]]);export{J as default};
