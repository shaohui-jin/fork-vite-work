var V=Object.defineProperty;var p=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var f=(e,o,n)=>o in e?V(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,_=(e,o)=>{for(var n in o||(o={}))$.call(o,n)&&f(e,n,o[n]);if(p)for(var n of p(o))C.call(o,n)&&f(e,n,o[n]);return e};import{_ as I}from"./index.1641955709982.js";import{i as v,m as E,t as F,r as t,q as w,D as l,F as a,I as z,x as B,k as D,B as i}from"./vendor.1641955709982.js";const R=v({name:"pagesFormI18n",setup(){const{proxy:e}=D(),o=E({radio:"zh-cn",form:{}});return _({onRadioChange:()=>{e.$i18n.locale=o.radio}},F(o))}}),U={class:"form-i18n-container"},k={style:{"text-align":"center","margin-top":"15px"}},L=i("\u4E2D\u6587\u7B80\u4F53"),N=i("\u82F1\u6587"),P=i("\u4E2D\u6587\u7E41\u4F53");function j(e,o,n,x,y,A){const r=t("el-radio-button"),c=t("el-radio-group"),s=t("el-input"),d=t("el-form-item"),u=t("el-col"),g=t("el-row"),h=t("el-form"),b=t("el-card");return z(),w("div",U,[l(b,{shadow:"hover",header:"\u8868\u5355\u56FD\u9645\u5316\u6F14\u793A(\u4E0D\u9002\u7528\u4E8E\u52A8\u6001\u9879 form-item)"},{default:a(()=>[B("div",k,[l(c,{modelValue:e.radio,"onUpdate:modelValue":o[0]||(o[0]=m=>e.radio=m),size:"small",onChange:e.onRadioChange},{default:a(()=>[l(r,{label:"zh-cn"},{default:a(()=>[L]),_:1}),l(r,{label:"en"},{default:a(()=>[N]),_:1}),l(r,{label:"zh-tw"},{default:a(()=>[P]),_:1})]),_:1},8,["modelValue","onChange"])]),l(h,{model:e.form,size:"small","label-width":"100px",class:"mt35 mb35"},{default:a(()=>[l(g,{gutter:35},{default:a(()=>[l(u,{xs:24,sm:12,md:8,lg:8,xl:8,class:"mb20"},{default:a(()=>[l(d,{label:e.$t("message.formI18nLabel.name")},{default:a(()=>[l(s,{modelValue:e.form.name,"onUpdate:modelValue":o[1]||(o[1]=m=>e.form.name=m),placeholder:e.$t("message.formI18nPlaceholder.name"),clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),l(u,{xs:24,sm:12,md:8,lg:8,xl:8,class:"mb20"},{default:a(()=>[l(d,{label:e.$t("message.formI18nLabel.email")},{default:a(()=>[l(s,{modelValue:e.form.email,"onUpdate:modelValue":o[2]||(o[2]=m=>e.form.email=m),placeholder:e.$t("message.formI18nPlaceholder.email"),clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),l(u,{xs:24,sm:12,md:8,lg:8,xl:8,class:"mb20"},{default:a(()=>[l(d,{label:e.$t("message.formI18nLabel.autograph")},{default:a(()=>[l(s,{modelValue:e.form.autograph,"onUpdate:modelValue":o[3]||(o[3]=m=>e.form.autograph=m),placeholder:e.$t("message.formI18nPlaceholder.autograph"),clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})])}var H=I(R,[["render",j]]);export{H as default};
