var D=Object.defineProperty;var c=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var p=(e,a,t)=>a in e?D(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,A=(e,a)=>{for(var t in a||(a={}))_.call(a,t)&&p(e,t,a[t]);if(c)for(var t of c(a))f.call(a,t)&&p(e,t,a[t]);return e};import{N as C}from"./index.164275760638421.js";import{_ as h}from"./index.1642757606384.js";import{i as v,m as b,t as g,r as n,q as d,D as u,F,I as s,$ as x,Z as y,S as w,B as k,C as N}from"./vendor.1642757606384.js";const I=v({name:"funNoticeBar",components:{NoticeBar:C},setup(){const e=b({noticeList:["\u{1F389}\u{1F389}\u{1F525}\u57FA\u4E8Evue3.x \u3001Typescript\u3001vite\u3001Element plus\u7B49","\u9002\u914D\u624B\u673A\u3001\u5E73\u677F\u3001pc\u7684\u540E\u53F0\u5F00\u6E90\u514D\u8D39\u6A21\u677F\u5E93\uFF08vue2.x\u8BF7\u5207\u6362vue-prev-admin\u5206\u652F\uFF09","\u4ED3\u5E93\u5730\u5740\uFF1Ahttps://gitee.com/lyt-top/vue-next-admin","\u6F14\u793A\u5730\u5740\uFF1Ahttps://lyt-top.gitee.io/vue-next-admin-preview/#/login"],tableData:[{a1:"mode",a2:"\u901A\u77E5\u680F\u6A21\u5F0F\uFF0C\u7528\u4E8E\u53F3\u4FA7 icon \u56FE\u6807\u70B9\u51FB",a3:"string",a4:"closeable / link",a5:""},{a1:"text",a2:"\u901A\u77E5\u6587\u672C\u5185\u5BB9\uFF0Cscrollable \u4E3A false \u65F6\u751F\u6548",a3:"string",a4:"",a5:""},{a1:"color",a2:"\u901A\u77E5\u6587\u672C\u989C\u8272",a3:"string",a4:"",a5:"#e6a23c"},{a1:"background",a2:"\u901A\u77E5\u80CC\u666F\u8272",a3:"string",a4:"",a5:"#fdf6ec"},{a1:"size",a2:"\u5B57\u4F53\u5927\u5C0F\uFF0C\u5355\u4F4Dpx",a3:"number / string",a4:"",a5:"14"},{a1:"height",a2:"\u901A\u77E5\u680F\u9AD8\u5EA6\uFF0C\u5355\u4F4Dpx",a3:"number / string",a4:"",a5:"40"},{a1:"delay",a2:"\u52A8\u753B\u5EF6\u8FDF\u65F6\u95F4 (s)",a3:"number / string",a4:"",a5:"1"},{a1:"speed",a2:"\u6EDA\u52A8\u901F\u7387 (px/s)",a3:"number / string",a4:"",a5:"100"},{a1:"scrollable",a2:"\u662F\u5426\u5F00\u542F\u5782\u76F4\u6EDA\u52A8",a3:"boolean",a4:"true",a5:"false"},{a1:"leftIcon",a2:"\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u56FE\u6807",a3:"string",a4:"",a5:""},{a1:"rightIcon",a2:"\u81EA\u5B9A\u4E49\u53F3\u4FA7\u56FE\u6807",a3:"string",a4:"",a5:""}],tableData1:[{a1:"close",a2:"\u901A\u77E5\u680F\u6A21\u5F0F\uFF08mode\uFF09closeable \u65F6\u56DE\u8C03\u4E8B\u4EF6",a3:"function",a4:""},{a1:"link",a2:"\u901A\u77E5\u680F\u6A21\u5F0F\uFF08mode\uFF09link \u65F6\u56DE\u8C03\u4E8B\u4EF6",a3:"function",a4:""}]});return A({},g(e))}}),$={class:"notice-bar-container"};function T(e,a,t,j,L,z){const r=n("NoticeBar"),l=n("el-card"),m=n("el-carousel-item"),B=n("el-carousel"),o=n("el-table-column"),E=n("el-table");return s(),d("div",$,[u(l,{shadow:"hover",header:"\u6EDA\u52A8\u901A\u77E5\u680F\uFF1A\u9ED8\u8BA4"},{default:F(()=>[u(r,{text:`\u{1F389}\u{1F389}\u{1F525}\u57FA\u4E8Evue3.x \u3001Typescript\u3001vite\u3001Element plus\u7B49\uFF0C\u9002\u914D\u624B\u673A\u3001\u5E73\u677F\u3001pc\r
				\u7684\u540E\u53F0\u5F00\u6E90\u514D\u8D39\u6A21\u677F\u5E93\uFF08vue2.x\u8BF7\u5207\u6362vue-prev-admin\u5206\u652F\uFF09\uFF0C\u4ED3\u5E93\u5730\u5740\uFF1Ahttps://gitee.com/lyt-top/vue-next-admin`})]),_:1}),u(l,{shadow:"hover",header:"\u6EDA\u52A8\u901A\u77E5\u680F\uFF1A\u8BBE\u7F6E\u6837\u5F0F",class:"mt15"},{default:F(()=>[u(r,{text:`\u{1F389}\u{1F389}\u{1F525}\u57FA\u4E8Evue3.x \u3001Typescript\u3001vite\u3001Element plus\u7B49\uFF0C\u9002\u914D\u624B\u673A\u3001\u5E73\u677F\u3001pc\r
				\u7684\u540E\u53F0\u5F00\u6E90\u514D\u8D39\u6A21\u677F\u5E93\uFF08vue2.x\u8BF7\u5207\u6362vue-prev-admin\u5206\u652F\uFF09\uFF0C\u4ED3\u5E93\u5730\u5740\uFF1Ahttps://gitee.com/lyt-top/vue-next-admin`,leftIcon:"iconfont icon-tongzhi2",rightIcon:"elementArrowRight",background:"#ecf5ff",color:"#409eff"})]),_:1}),u(l,{shadow:"hover",header:"\u6EDA\u52A8\u901A\u77E5\u680F\uFF1A\u642D\u914D NoticeBar \u548C Carousel \u8D70\u9A6C\u706F \u7EC4\u4EF6\u53EF\u4EE5\u5B9E\u73B0\u5782\u76F4\u6EDA\u52A8\u7684\u6548\u679C",class:"mt15"},{default:F(()=>[u(r,{scrollable:!0},{default:F(()=>[u(B,{height:"40px",direction:"vertical",autoplay:!0,"indicator-position":"none",interval:3e3},{default:F(()=>[(s(!0),d(x,null,y(e.noticeList,i=>(s(),w(m,{key:i},{default:F(()=>[k(N(i),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),u(l,{shadow:"hover",header:"\u6EDA\u52A8\u901A\u77E5\u680F\uFF1A\u53C2\u6570",class:"mt15"},{default:F(()=>[u(E,{data:e.tableData,style:{width:"100%"}},{default:F(()=>[u(o,{prop:"a1",label:"\u53C2\u6570"}),u(o,{prop:"a2",label:"\u8BF4\u660E"}),u(o,{prop:"a3",label:"\u7C7B\u578B"}),u(o,{prop:"a4",label:"\u53EF\u9009\u503C"}),u(o,{prop:"a5",label:"\u9ED8\u8BA4\u503C"})]),_:1},8,["data"])]),_:1}),u(l,{shadow:"hover",header:"\u56FE\u6807\u9009\u62E9\u5668(\u5BBD\u5EA6\u81EA\u52A8)\uFF1A\u4E8B\u4EF6",class:"mt15"},{default:F(()=>[u(E,{data:e.tableData1,style:{width:"100%"}},{default:F(()=>[u(o,{prop:"a1",label:"\u4E8B\u4EF6\u540D\u79F0"}),u(o,{prop:"a2",label:"\u8BF4\u660E"}),u(o,{prop:"a3",label:"\u7C7B\u578B"}),u(o,{prop:"a4",label:"\u56DE\u8C03\u53C2\u6570"})]),_:1},8,["data"])]),_:1})])}var Z=h(I,[["render",T]]);export{Z as default};
