var u=Object.defineProperty;var r=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var o=(e,s,t)=>s in e?u(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,c=(e,s)=>{for(var t in s||(s={}))d.call(s,t)&&o(e,t,s[t]);if(r)for(var t of r(s))h.call(s,t)&&o(e,t,s[t]);return e};import{_ as l}from"./index.1641958031066.js";import{m,t as _,r as p,q as f,D as a,F as g,I as v}from"./vendor.1641958031066.js";const x={name:"pagesPreview",setup(){const e=m({url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1813762643,1914315241&fm=26&gp=0.jpg",srcList:["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1813762643,1914315241&fm=26&gp=0.jpg","https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=317673774,2961727727&fm=26&gp=0.jpg","https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"]});return c({},_(e))}},F={class:"preview-container"};function b(e,s,t,j,w,k){const n=p("el-image"),i=p("el-card");return v(),f("div",F,[a(i,{shadow:"hover",header:"element-plus \u5927\u56FE\u9884\u89C8"},{default:g(()=>[a(n,{style:{width:"100px",height:"100px","border-radius":"5px"},src:e.url,"preview-src-list":e.srcList,title:"\u70B9\u51FB\u67E5\u770B\u5927\u56FE\u9884\u89C8"},null,8,["src","preview-src-list"])]),_:1})])}var C=l(x,[["render",b]]);export{C as default};