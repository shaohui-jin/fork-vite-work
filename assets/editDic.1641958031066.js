var A=Object.defineProperty;var C=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var V=(l,u,a)=>u in l?A(l,u,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[u]=a,D=(l,u)=>{for(var a in u||(u={}))U.call(u,a)&&V(l,a,u[a]);if(C)for(var a of C(u))M.call(u,a)&&V(l,a,u[a]);return l};import{_ as R}from"./index.1641958031066.js";import{m as z,t as $,r as n,q as g,D as e,F as o,I as c,x as h,$ as j,Z as I,S as F,B as w}from"./vendor.1641958031066.js";const L={name:"systemEditDic",setup(){const l=z({isShowDialog:!1,ruleForm:{dicName:"",fieldName:"",status:!0,list:[{id:Math.random(),label:"",value:""}],describe:"",fieldNameList:[]}}),u=s=>{s.fieldName==="SYS_UERINFO"?s.list=[{id:Math.random(),label:"sex",value:"1"},{id:Math.random(),label:"sex",value:"0"}]:s.list=[{id:Math.random(),label:"role",value:"admin"},{id:Math.random(),label:"role",value:"common"},{id:Math.random(),label:"roleName",value:"\u8D85\u7EA7\u7BA1\u7406\u5458"},{id:Math.random(),label:"roleName",value:"\u666E\u901A\u7528\u6237"}],l.ruleForm=s,l.isShowDialog=!0},a=()=>{l.isShowDialog=!1};return D({openDialog:u,closeDialog:a,onCancel:()=>{a()},onSubmit:()=>{a()},onAddRow:()=>{l.ruleForm.list.push({id:Math.random(),label:"",value:""})},onDelRow:s=>{l.ruleForm.list.splice(s,1)}},$(l))}},P={class:"system-edit-dic-container"},q=h("span",{class:"ml10"},"\u5B57\u6BB5",-1),O={class:"dialog-footer"},T=w("\u53D6 \u6D88"),Y=w("\u4FEE \u6539");function Z(l,u,a,i,x,E){const f=n("el-alert"),s=n("el-input"),m=n("el-form-item"),d=n("el-col"),v=n("el-switch"),y=n("elementPlus"),b=n("el-icon"),p=n("el-button"),N=n("elementDelete"),B=n("el-row"),S=n("el-form"),k=n("el-dialog");return c(),g("div",P,[e(k,{title:"\u4FEE\u6539\u5B57\u5178",modelValue:l.isShowDialog,"onUpdate:modelValue":u[4]||(u[4]=t=>l.isShowDialog=t),width:"769px"},{footer:o(()=>[h("span",O,[e(p,{onClick:i.onCancel,size:"small"},{default:o(()=>[T]),_:1},8,["onClick"]),e(p,{type:"primary",onClick:i.onSubmit,size:"small"},{default:o(()=>[Y]),_:1},8,["onClick"])])]),default:o(()=>[e(f,{title:"\u534A\u6210\u54C1\uFF0C\u4EA4\u4E92\u8FC7\u4E8E\u590D\u6742\uFF0C\u8BF7\u81EA\u884C\u6269\u5C55\uFF01",type:"warning",closable:!1,class:"mb20"}),e(S,{model:l.ruleForm,size:"small","label-width":"90px"},{default:o(()=>[e(B,{gutter:35},{default:o(()=>[e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(m,{label:"\u5B57\u5178\u540D\u79F0"},{default:o(()=>[e(s,{modelValue:l.ruleForm.dicName,"onUpdate:modelValue":u[0]||(u[0]=t=>l.ruleForm.dicName=t),placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(m,{label:"\u5B57\u6BB5\u540D"},{default:o(()=>[e(s,{modelValue:l.ruleForm.fieldName,"onUpdate:modelValue":u[1]||(u[1]=t=>l.ruleForm.fieldName=t),placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D\uFF0C\u62FC\u63A5 ruleForm.list",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[e(m,{label:"\u5B57\u5178\u72B6\u6001"},{default:o(()=>[e(v,{modelValue:l.ruleForm.status,"onUpdate:modelValue":u[2]||(u[2]=t=>l.ruleForm.status=t),"inline-prompt":"","active-text":"\u542F","inactive-text":"\u7981"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[(c(!0),g(j,null,I(l.ruleForm.list,(t,r)=>(c(),F(B,{gutter:35,key:r},{default:o(()=>[e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(m,{prop:`list[${r}].label`},{label:o(()=>[r===0?(c(),F(p,{key:0,type:"primary",circle:"",size:"mini",onClick:i.onAddRow},{default:o(()=>[e(b,null,{default:o(()=>[e(y)]),_:1})]),_:1},8,["onClick"])):(c(),F(p,{key:1,type:"danger",circle:"",size:"mini",onClick:_=>i.onDelRow(r)},{default:o(()=>[e(b,null,{default:o(()=>[e(N)]),_:1})]),_:2},1032,["onClick"])),q]),default:o(()=>[e(s,{modelValue:t.label,"onUpdate:modelValue":_=>t.label=_,style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(m,{label:"\u5C5E\u6027",prop:`list[${r}].value`},{default:o(()=>[e(s,{modelValue:t.value,"onUpdate:modelValue":_=>t.value=_,style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165\u5C5E\u6027\u503C"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[e(m,{label:"\u5B57\u5178\u63CF\u8FF0"},{default:o(()=>[e(s,{modelValue:l.ruleForm.describe,"onUpdate:modelValue":u[3]||(u[3]=t=>l.ruleForm.describe=t),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u63CF\u8FF0",maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}var K=R(L,[["render",Z]]);export{K as default};
