import V from"./index.164195570998211.js";import{_ as z,u as D,j as N,c as L}from"./index.1641955709982.js";import{L as $,a8 as I,O as U,r as c,a9 as j,q as i,D as t,F as e,b,I as _,x as s,w as r,B as u}from"./vendor.1641955709982.js";const P={name:"auth",props:{value:{type:String,default:()=>""}},setup(a){const d=D();return{getUserAuthBtnList:$(()=>d.state.userInfos.userInfos.authBtnList.some(o=>o===a.value))}}};function q(a,d,f,o,v,A){return o.getUserAuthBtnList?I(a.$slots,"default",{key:0}):U("",!0)}var M=z(P,[["render",q]]);const O={name:"auths",props:{value:{type:Array,default:()=>[]}},setup(a){const d=D();return{getUserAuthBtnList:$(()=>{let o=!1;return d.state.userInfos.userInfos.authBtnList.map(v=>{a.value.map(A=>{v===A&&(o=!0)})}),o})}}};function T(a,d,f,o,v,A){return o.getUserAuthBtnList?I(a.$slots,"default",{key:0}):U("",!0)}var G=z(O,[["render",T]]);const H={name:"authAll",props:{value:{type:Array,default:()=>[]}},setup(a){const d=D();return{getUserAuthBtnList:$(()=>N(a.value,d.state.userInfos.userInfos.authBtnList))}}};function J(a,d,f,o,v,A){return o.getUserAuthBtnList?I(a.$slots,"default",{key:0}):U("",!0)}var K=z(H,[["render",J]]);function Q(a){return L.state.userInfos.userInfos.authBtnList.some(d=>d===a)}function R(a){let d=!1;return L.state.userInfos.userInfos.authBtnList.map(f=>{a.map(o=>{f===o&&(d=!0)})}),d}function W(a){return N(a,L.state.userInfos.userInfos.authBtnList)}const X={name:"limitsFrontEndBtn",components:{LimitsFrontEndPage:V,Auth:M,Auths:G,AuthAll:K},setup(){return{onAuthClick:()=>{Q("btn.add")?b.success("\u606D\u559C\uFF0C\u60A8\u6709\u6743\u9650\uFF01"):b.error("\u62B1\u6B49\uFF0C\u60A8\u6CA1\u6709\u6743\u9650\uFF01")},onAuthsClick:()=>{R(["btn.add","btn.edit","btn.del","btn.link"])?b.success("\u606D\u559C\uFF0C\u60A8\u6709\u6743\u9650\uFF01"):b.error("\u62B1\u6B49\uFF0C\u60A8\u6CA1\u6709\u6743\u9650\uFF01")},onAuthAllClick:()=>{W(["btn.add","btn.edit","btn.del","btn.link"])?b.success("\u606D\u559C\uFF0C\u60A8\u6709\u6743\u9650\uFF01"):b.error("\u62B1\u6B49\uFF0C\u60A8\u6CA1\u6709\u6743\u9650\uFF01")}}}},Y=u('\u5355\u4E2A\u6743\u9650\u9A8C\u8BC1\uFF08:value="xxx"\uFF09\uFF1A'),Z={class:"flex-warp"},tt={class:"flex-warp-item"},et={class:"flex-warp-item-box"},st=u(" \u65B0\u589E "),ut={class:"flex-warp-item"},lt={class:"flex-warp-item-box"},nt=u(" \u7F16\u8F91 "),at={class:"flex-warp-item"},ot={class:"flex-warp-item-box"},dt=u(" \u5220\u9664 "),it={class:"flex-warp-item"},_t={class:"flex-warp-item-box"},ct=u(" \u8DF3\u8F6C "),rt=u('\u591A\u4E2A\u6743\u9650\u9A8C\u8BC1\uFF0C\u6EE1\u8DB3\u4E00\u4E2A\u5219\u663E\u793A\uFF08:value="[xxx,xxx]"\uFF09\uFF1A'),ft={class:"flex-warp"},ht={class:"flex-warp-item"},mt={class:"flex-warp-item-box"},pt=u(" \u65B0\u589E "),xt={class:"flex-warp-item"},Ft={class:"flex-warp-item-box"},bt=u(" \u7F16\u8F91 "),vt={class:"flex-warp-item"},At={class:"flex-warp-item-box"},wt=u(" \u5220\u9664 "),Ct={class:"flex-warp-item"},yt={class:"flex-warp-item-box"},Bt=u(" \u8DF3\u8F6C "),Et=u('\u591A\u4E2A\u6743\u9650\u9A8C\u8BC1\uFF0C\u5168\u90E8\u6EE1\u8DB3\u5219\u663E\u793A\uFF08:value="[xxx,xxx]"\uFF09\uFF1A'),kt={class:"flex-warp"},zt={class:"flex-warp-item"},gt={class:"flex-warp-item-box"},Dt=u(" \u65B0\u589E "),Lt={class:"flex-warp-item"},$t={class:"flex-warp-item-box"},It=u(" \u7F16\u8F91 "),Ut={class:"flex-warp-item"},jt={class:"flex-warp-item-box"},Nt=u(" \u5220\u9664 "),St={class:"flex-warp-item"},Vt={class:"flex-warp-item-box"},Pt=u(" \u8DF3\u8F6C "),qt=u('\u5355\u4E2A\u6743\u9650\u9A8C\u8BC1\uFF08v-auth="xxx"\uFF09\uFF1A'),Mt={class:"flex-warp"},Ot={class:"flex-warp-item"},Tt={class:"flex-warp-item-box"},Gt=u(" \u65B0\u589E "),Ht={class:"flex-warp-item"},Jt={class:"flex-warp-item-box"},Kt=u(" \u7F16\u8F91 "),Qt={class:"flex-warp-item"},Rt={class:"flex-warp-item-box"},Wt=u(" \u5220\u9664 "),Xt={class:"flex-warp-item"},Yt={class:"flex-warp-item-box"},Zt=u(" \u8DF3\u8F6C "),te=u('\u591A\u4E2A\u6743\u9650\u9A8C\u8BC1\uFF0C\u6EE1\u8DB3\u4E00\u4E2A\u5219\u663E\u793A\uFF08v-auths="[xxx,xxx]"\uFF09\uFF1A'),ee={class:"flex-warp"},se={class:"flex-warp-item"},ue={class:"flex-warp-item-box"},le=u(" \u65B0\u589E "),ne={class:"flex-warp-item"},ae={class:"flex-warp-item-box"},oe=u(" \u7F16\u8F91 "),de={class:"flex-warp-item"},ie={class:"flex-warp-item-box"},_e=u(" \u5220\u9664 "),ce={class:"flex-warp-item"},re={class:"flex-warp-item-box"},fe=u(" \u8DF3\u8F6C "),he=u('\u591A\u4E2A\u6743\u9650\u9A8C\u8BC1\uFF0C\u5168\u90E8\u6EE1\u8DB3\u5219\u663E\u793A\uFF08v-auth-all="[xxx,xxx]"\uFF09\uFF1A'),me={class:"flex-warp"},pe={class:"flex-warp-item"},xe={class:"flex-warp-item-box"},Fe=u(" \u65B0\u589E "),be={class:"flex-warp-item"},ve={class:"flex-warp-item-box"},Ae=u(" \u7F16\u8F91 "),we={class:"flex-warp-item"},Ce={class:"flex-warp-item-box"},ye=u(" \u5220\u9664 "),Be={class:"flex-warp-item"},Ee={class:"flex-warp-item-box"},ke=u(" \u8DF3\u8F6C "),ze=u("auth('xxx')\u3001auths(['xxx','xxx'])\u3001authAll(['xxx','xxx'])\uFF1A"),ge={class:"flex-warp"},De={class:"flex-warp-item"},Le={class:"flex-warp-item-box"},$e=u(" \u65B0\u589E "),Ie={class:"flex-warp-item"},Ue={class:"flex-warp-item-box"},je=u(" \u7F16\u8F91 "),Ne={class:"flex-warp-item"},Se={class:"flex-warp-item-box"},Ve=u(" \u5220\u9664 ");function Pe(a,d,f,o,v,A){const S=c("LimitsFrontEndPage"),h=c("el-row"),m=c("elementDocumentAdd"),l=c("el-icon"),n=c("el-button"),w=c("Auth"),p=c("elementEdit"),x=c("elementDelete"),F=c("elementLink"),C=c("Auths"),y=c("AuthAll"),g=c("el-card"),B=j("auth"),E=j("auths"),k=j("auth-all");return _(),i("div",null,[t(S),t(g,{shadow:"hover",header:"\u6F14\u793A1\uFF1A\u7EC4\u4EF6\u65B9\u5F0F",class:"mt15"},{default:e(()=>[t(h,{class:"mb10",style:{color:"#808080"}},{default:e(()=>[Y]),_:1}),s("div",Z,[t(w,{value:"btn.add"},{default:e(()=>[s("div",tt,[s("div",et,[t(n,{type:"primary",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(m)]),_:1}),st]),_:1})])])]),_:1},8,["value"]),t(w,{value:"btn.edit"},{default:e(()=>[s("div",ut,[s("div",lt,[t(n,{type:"info",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(p)]),_:1}),nt]),_:1})])])]),_:1},8,["value"]),t(w,{value:"btn.del"},{default:e(()=>[s("div",at,[s("div",ot,[t(n,{type:"danger",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(x)]),_:1}),dt]),_:1})])])]),_:1},8,["value"]),t(w,{value:"btn.link"},{default:e(()=>[s("div",it,[s("div",_t,[t(n,{type:"success",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(F)]),_:1}),ct]),_:1})])])]),_:1},8,["value"])]),t(h,{class:"mb10 mt10",style:{color:"#808080"}},{default:e(()=>[rt]),_:1}),s("div",ft,[t(C,{value:["btn.addsss","btn.edit","btn.delsss","btn.linksss"]},{default:e(()=>[s("div",ht,[s("div",mt,[t(n,{type:"primary",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(m)]),_:1}),pt]),_:1})])])]),_:1},8,["value"]),t(C,{value:["btn.add","btn.edit","btn.del","btn.link"]},{default:e(()=>[s("div",xt,[s("div",Ft,[t(n,{type:"info",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(p)]),_:1}),bt]),_:1})])])]),_:1},8,["value"]),t(C,{value:["btn.add","btn.edit","btn.del","btn.link"]},{default:e(()=>[s("div",vt,[s("div",At,[t(n,{type:"danger",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(x)]),_:1}),wt]),_:1})])])]),_:1},8,["value"]),t(C,{value:["btn.add","btn.edit","btn.del","btn.link"]},{default:e(()=>[s("div",Ct,[s("div",yt,[t(n,{type:"success",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(F)]),_:1}),Bt]),_:1})])])]),_:1},8,["value"])]),t(h,{class:"mb10 mt10",style:{color:"#808080"}},{default:e(()=>[Et]),_:1}),s("div",kt,[t(y,{value:["btn.add","btn.edit","btn.del","btn.link"]},{default:e(()=>[s("div",zt,[s("div",gt,[t(n,{type:"primary",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(m)]),_:1}),Dt]),_:1})])])]),_:1},8,["value"]),t(y,{value:["btn.add","btn.edit","btn.del","btn.link"]},{default:e(()=>[s("div",Lt,[s("div",$t,[t(n,{type:"info",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(p)]),_:1}),It]),_:1})])])]),_:1},8,["value"]),t(y,{value:["btn.add","btn.edit","btn.del","btn.link"]},{default:e(()=>[s("div",Ut,[s("div",jt,[t(n,{type:"danger",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(x)]),_:1}),Nt]),_:1})])])]),_:1},8,["value"]),t(y,{value:["btn.add","btn.edit","btn.del","btn.link"]},{default:e(()=>[s("div",St,[s("div",Vt,[t(n,{type:"success",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(F)]),_:1}),Pt]),_:1})])])]),_:1},8,["value"])])]),_:1}),t(g,{shadow:"hover",header:"\u6F14\u793A2\uFF1A\u6307\u4EE4\u65B9\u5F0F\uFF08\u9875\u9762\u521D\u59CB\u5316\u65F6\u6267\u884C\uFF09",class:"mt15"},{default:e(()=>[t(h,{class:"mb10",style:{color:"#808080"}},{default:e(()=>[qt]),_:1}),s("div",Mt,[r((_(),i("div",Ot,[s("div",Tt,[t(n,{type:"primary",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(m)]),_:1}),Gt]),_:1})])])),[[B,"btn.add"]]),r((_(),i("div",Ht,[s("div",Jt,[t(n,{type:"info",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(p)]),_:1}),Kt]),_:1})])])),[[B,"btn.edit"]]),r((_(),i("div",Qt,[s("div",Rt,[t(n,{type:"danger",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(x)]),_:1}),Wt]),_:1})])])),[[B,"btn.del"]]),r((_(),i("div",Xt,[s("div",Yt,[t(n,{type:"success",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(F)]),_:1}),Zt]),_:1})])])),[[B,"btn.link"]])]),t(h,{class:"mb10 mt10",style:{color:"#808080"}},{default:e(()=>[te]),_:1}),s("div",ee,[r((_(),i("div",se,[s("div",ue,[t(n,{type:"primary",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(m)]),_:1}),le]),_:1})])])),[[E,["btn.addsss","btn.edit","btn.delsss","btn.linksss"]]]),r((_(),i("div",ne,[s("div",ae,[t(n,{type:"info",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(p)]),_:1}),oe]),_:1})])])),[[E,["btn.add","btn.edit","btn.del","btn.link"]]]),r((_(),i("div",de,[s("div",ie,[t(n,{type:"danger",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(x)]),_:1}),_e]),_:1})])])),[[E,["btn.add","btn.edit","btn.del","btn.link"]]]),r((_(),i("div",ce,[s("div",re,[t(n,{type:"success",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(F)]),_:1}),fe]),_:1})])])),[[E,["btn.add","btn.edit","btn.del","btn.link"]]])]),t(h,{class:"mb10 mt10",style:{color:"#808080"}},{default:e(()=>[he]),_:1}),s("div",me,[r((_(),i("div",pe,[s("div",xe,[t(n,{type:"primary",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(m)]),_:1}),Fe]),_:1})])])),[[k,["btn.add","btn.edit","btn.del","btn.link"]]]),r((_(),i("div",be,[s("div",ve,[t(n,{type:"info",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(p)]),_:1}),Ae]),_:1})])])),[[k,["btn.add","btn.edit","btn.del","btn.link"]]]),r((_(),i("div",we,[s("div",Ce,[t(n,{type:"danger",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(x)]),_:1}),ye]),_:1})])])),[[k,["btn.add","btn.edit","btn.del","btn.link"]]]),r((_(),i("div",Be,[s("div",Ee,[t(n,{type:"success",size:"small"},{default:e(()=>[t(l,null,{default:e(()=>[t(F)]),_:1}),ke]),_:1})])])),[[k,["btn.add","btn.edit","btn.del","btn.link"]]])])]),_:1}),t(g,{shadow:"hover",header:"\u6F14\u793A3\uFF1A\u51FD\u6570\u65B9\u5F0F\uFF08\u70B9\u51FB\u6309\u94AE\u67E5\u770B\u6709\u65E0\u6743\u9650\uFF0C\u7528\u4E8E\u5224\u65AD\uFF09",class:"mt15"},{default:e(()=>[t(h,{class:"mb10",style:{color:"#808080"}},{default:e(()=>[ze]),_:1}),s("div",ge,[s("div",De,[s("div",Le,[t(n,{type:"primary",size:"small",onClick:o.onAuthClick},{default:e(()=>[t(l,null,{default:e(()=>[t(m)]),_:1}),$e]),_:1},8,["onClick"])])]),s("div",Ie,[s("div",Ue,[t(n,{type:"info",size:"small",onClick:o.onAuthsClick},{default:e(()=>[t(l,null,{default:e(()=>[t(p)]),_:1}),je]),_:1},8,["onClick"])])]),s("div",Ne,[s("div",Se,[t(n,{type:"danger",size:"small",onClick:o.onAuthAllClick},{default:e(()=>[t(l,null,{default:e(()=>[t(x)]),_:1}),Ve]),_:1},8,["onClick"])])])])]),_:1})])}var Te=z(X,[["render",Pe],["__scopeId","data-v-fb2b1dec"]]);export{Te as default};
