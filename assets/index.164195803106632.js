var m=Object.defineProperty;var i=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var l=(e,t,s)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,d=(e,t)=>{for(var s in t||(t={}))x.call(t,s)&&l(e,s,t[s]);if(i)for(var s of i(t))g.call(t,s)&&l(e,s,t[s]);return e};import{_ as v}from"./index.1641958031066.js";import{m as w,t as F,r as o,q as c,D as r,F as u,I as n,$ as C,Z as b,S as $,x as _,C as k}from"./vendor.1641958031066.js";const B={name:"FunGridLayout",setup(){const e=w({layouts:[{x:0,y:0,w:2,h:2,i:"0"},{x:2,y:0,w:2,h:4,i:"1"},{x:4,y:0,w:2,h:5,i:"2"},{x:6,y:0,w:2,h:3,i:"3"},{x:8,y:0,w:2,h:3,i:"4"},{x:10,y:0,w:2,h:3,i:"5"},{x:0,y:5,w:2,h:5,i:"6"}]});return d({},F(e))}},D={class:"grid-layout-container"},E={class:"w100 h100 flex"},j={class:"flex-margin font14"};function A(e,t,s,I,L,N){const y=o("el-alert"),p=o("grid-item"),h=o("grid-layout"),f=o("el-card");return n(),c("div",D,[r(f,{shadow:"hover",header:"vue-grid-layout \u62D6\u62FD\u5E03\u5C40\u6F14\u793A"},{default:u(()=>[r(y,{title:"\u611F\u8C22\u4F18\u79C0\u7684 `vue-grid-layout`\uFF0C\u9879\u76EE\u5730\u5740\uFF1Ahttps://github.com/jbaysolutions/vue-grid-layout",type:"success",closable:!1,class:"mb15"}),r(h,{layout:e.layouts,"onUpdate:layout":t[0]||(t[0]=a=>e.layouts=a),"col-num":12,"row-height":30,"is-draggable":!0,"is-resizable":!0,"is-mirrored":!1,"vertical-compact":!0,margin:[10,10],"use-css-transforms":!0},{default:u(()=>[(n(!0),c(C,null,b(e.layouts,a=>(n(),$(p,{x:a.x,y:a.y,w:a.w,h:a.h,i:a.i,key:a.i},{default:u(()=>[_("div",E,[_("span",j,k(a.i),1)])]),_:2},1032,["x","y","w","h","i"]))),128))]),_:1},8,["layout"])]),_:1})])}var z=v(B,[["render",A],["__scopeId","data-v-dfd321c2"]]);export{z as default};
