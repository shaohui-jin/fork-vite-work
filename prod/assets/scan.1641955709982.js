var a=Object.defineProperty;var n=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;var s=(t,e,o)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,r=(t,e)=>{for(var o in e||(e={}))c.call(e,o)&&s(t,o,e[o]);if(n)for(var o of n(e))i.call(e,o)&&s(t,o,e[o]);return t};import{Q as d}from"./qrcode.1641955709982.js";import{_}from"./index.1641955709982.js";import{i as f,m as p,o as m,t as u,q as l,x as q,I as v,k as x}from"./vendor.1641955709982.js";const g=f({name:"loginScan",setup(){const{proxy:t}=x(),e=p({}),o=()=>{t.$refs.qrcodeRef.innerHTML="",new d(t.$refs.qrcodeRef,{text:"https://qm.qq.com/cgi-bin/qm/qr?k=RdUY97Vx0T0vZ_1OOu-X1yFNkWgDwbjC&jump_from=webapi",width:260,height:260,colorDark:"#000000",colorLight:"#ffffff"})};return m(()=>{o()}),r({},u(e))}}),h={class:"login-scan-container"},k={ref:"qrcodeRef"};function R(t,e,o,$,j,w){return v(),l("div",h,[q("div",k,null,512)])}var I=_(g,[["render",R],["__scopeId","data-v-0c7a22d7"]]);export{I as default};
