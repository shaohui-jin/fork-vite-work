var A=Object.defineProperty;var E=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var C=(s,o,n)=>o in s?A(s,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[o]=n,D=(s,o)=>{for(var n in o||(o={}))R.call(o,n)&&C(s,n,o[n]);if(E)for(var n of E(o))S.call(o,n)&&C(s,n,o[n]);return s};import{_ as T,u as z}from"./index.1641958031066.js";import O from"./addMenu.1641958031066.js";import j from"./editMenu.1641958031066.js";import{l as F,m as $,L as I,t as L,r as u,q as N,D as e,F as t,E as V,b as q,I as G,x as m,C as _,B as d}from"./vendor.1641958031066.js";import"./index.16419580310666.js";import"./getStyleSheets.1641958031066.js";const H={name:"systemMenu",components:{AddMenu:O,EditMenu:j},setup(){const s=z(),o=F(),n=F(),a=$({}),p=I(()=>s.state.routesList.routesList);return D({addMenuRef:o,editMenuRef:n,onOpenAddMenu:()=>{o.value.openDialog()},onOpenEditMenu:i=>{n.value.openDialog(i)},menuTableData:p,onTabelRowDel:i=>{V.confirm(`\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u8DEF\u7531\uFF1A${i.path}, \u662F\u5426\u7EE7\u7EED?`,"\u63D0\u793A",{confirmButtonText:"\u5220\u9664",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{q.success("\u5220\u9664\u6210\u529F")}).catch(()=>{})}},L(a))}},J={class:"system-menu-container"},K={class:"system-menu-search mb15"},P=d(" \u67E5\u8BE2 "),Q=d(" \u65B0\u589E\u83DC\u5355 "),U={class:"ml10"},W=d("\u65B0\u589E"),X=d("\u4FEE\u6539"),Y=d("\u5220\u9664");function Z(s,o,n,a,p,M){const f=u("el-input"),h=u("elementSearch"),i=u("el-icon"),r=u("el-button"),v=u("elementFolderAdd"),b=u("SvgIcon"),c=u("el-table-column"),x=u("el-tag"),y=u("el-table"),B=u("el-card"),g=u("AddMenu"),k=u("EditMenu");return G(),N("div",J,[e(B,{shadow:"hover"},{default:t(()=>[m("div",K,[e(f,{size:"small",placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",style:{"max-width":"180px"}}),e(r,{size:"small",type:"primary",class:"ml10"},{default:t(()=>[e(i,null,{default:t(()=>[e(h)]),_:1}),P]),_:1}),e(r,{size:"small",type:"success",class:"ml10",onClick:a.onOpenAddMenu},{default:t(()=>[e(i,null,{default:t(()=>[e(v)]),_:1}),Q]),_:1},8,["onClick"])]),e(y,{data:a.menuTableData,style:{width:"100%"},"row-key":"path","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:t(()=>[e(c,{label:"\u83DC\u5355\u540D\u79F0","show-overflow-tooltip":""},{default:t(l=>[e(b,{name:l.row.meta.icon},null,8,["name"]),m("span",U,_(s.$t(l.row.meta.title)),1)]),_:1}),e(c,{prop:"path",label:"\u8DEF\u7531\u8DEF\u5F84","show-overflow-tooltip":""}),e(c,{label:"\u7EC4\u4EF6\u8DEF\u5F84","show-overflow-tooltip":""},{default:t(l=>[m("span",null,_(l.row.component),1)]),_:1}),e(c,{label:"\u6743\u9650\u6807\u8BC6","show-overflow-tooltip":""},{default:t(l=>[m("span",null,_(l.row.meta.roles),1)]),_:1}),e(c,{label:"\u6392\u5E8F","show-overflow-tooltip":"",width:"80"},{default:t(l=>[d(_(l.$index),1)]),_:1}),e(c,{label:"\u7C7B\u578B","show-overflow-tooltip":"",width:"80"},{default:t(l=>[e(x,{type:"success",size:"small"},{default:t(()=>[d(_(l.row.xx)+"\u83DC\u5355",1)]),_:2},1024)]),_:1}),e(c,{label:"\u64CD\u4F5C","show-overflow-tooltip":"",width:"140"},{default:t(l=>[e(r,{size:"mini",type:"text",onClick:w=>a.onOpenAddMenu(l.row)},{default:t(()=>[W]),_:2},1032,["onClick"]),e(r,{size:"mini",type:"text",onClick:w=>a.onOpenEditMenu(l.row)},{default:t(()=>[X]),_:2},1032,["onClick"]),e(r,{size:"mini",type:"text",onClick:w=>a.onTabelRowDel(l.row)},{default:t(()=>[Y]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1}),e(g,{ref:"addMenuRef"},null,512),e(k,{ref:"editMenuRef"},null,512)])}var ae=T(H,[["render",Z]]);export{ae as default};
