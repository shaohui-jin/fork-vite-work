var a=Object.defineProperty;var n=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var s=(t,e,o)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,r=(t,e)=>{for(var o in e||(e={}))c.call(e,o)&&s(t,o,e[o]);if(n)for(var o of n(e))d.call(e,o)&&s(t,o,e[o]);return t};import{Q as i}from"./qrcode.1682602826682.js";import{_}from"./index.1682602826682.js";import{i as f,m as p,o as u,t as l,q as m,x as v,I as x,k as C}from"./vendor.1682602826682.js";const h=f({name:"loginScan",setup(){const{proxy:t}=C(),e=p({}),o=()=>{t.$refs.qrCodeRef.innerHTML="",new i(t.$refs.qrCodeRef,{text:"\u53FC\u6BDB\u4F60\u597D",width:260,height:260,colorDark:"#000000",colorLight:"#ffffff"})};return u(()=>{o()}),r({},l(e))}}),g={class:"login-scan-container"},$={ref:"qrCodeRef"};function q(t,e,o,B,R,k){return x(),m("div",g,[v("div",$,null,512)])}var Q=_(h,[["render",q],["__scopeId","data-v-812a53c0"]]);export{Q as default};