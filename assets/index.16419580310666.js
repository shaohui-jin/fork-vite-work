var E=Object.defineProperty;var k=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var x=(e,o,t)=>o in e?E(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,L=(e,o)=>{for(var t in o||(o={}))T.call(o,t)&&x(e,t,o[t]);if(k)for(var t of k(o))z.call(o,t)&&x(e,t,o[t]);return e};import{l as B,m as D,L as O,o as R,R as W,t as j,r as d,I as f,q as y,D as h,F as u,S as g,y as p,T as N,w as M,v as U,x as s,C as q,O as _,$ as Z,Z as A,n as G}from"./vendor.1641958031066.js";import{i as b}from"./getStyleSheets.1641958031066.js";import{_ as H}from"./index.1641958031066.js";const J={name:"iconSelector",emits:["update:modelValue","get","clear"],props:{prepend:{type:String,default:()=>"elementPointer"},placeholder:{type:String,default:()=>"\u8BF7\u8F93\u5165\u5185\u5BB9\u641C\u7D22\u56FE\u6807\u6216\u8005\u9009\u62E9\u56FE\u6807"},size:{type:String,default:()=>"small"},title:{type:String,default:()=>"\u8BF7\u9009\u62E9\u56FE\u6807"},type:{type:String,default:()=>"ele"},disabled:{type:Boolean,default:()=>!1},clearable:{type:Boolean,default:()=>!0},emptyDescription:{type:String,default:()=>"\u65E0\u76F8\u5173\u56FE\u6807"},modelValue:String},setup(e,{emit:o}){const t=B(),a=B(),n=D({fontIconPrefix:"",fontIconVisible:!1,fontIconWidth:0,fontIconSearch:"",fontIconTabsIndex:0,fontIconSheetsList:[],fontIconPlaceholder:"",fontIconType:"ali",fontIconShow:!0}),P=()=>{if(!e.modelValue)return!1;n.fontIconSearch="",n.fontIconPlaceholder=e.modelValue},S=()=>{setTimeout(()=>{n.fontIconSheetsList.filter(c=>c===n.fontIconSearch).length<=0&&(n.fontIconSearch="")},300)},v=()=>{if(e.modelValue==="")return!1;n.fontIconPlaceholder=e.modelValue,n.fontIconPrefix=e.modelValue},C=O(()=>{if(!n.fontIconSearch)return n.fontIconSheetsList;let l=n.fontIconSearch.trim().toLowerCase();return n.fontIconSheetsList.filter(c=>{if(c.toLowerCase().indexOf(l)!==-1)return c})}),w=()=>{G(()=>{n.fontIconWidth=t.value.$el.offsetWidth})},V=()=>{window.addEventListener("resize",()=>{w()})},F=async l=>{n.fontIconSheetsList=[],l==="ali"?await b.ali().then(c=>{n.fontIconSheetsList=c.map(m=>`iconfont ${m}`)}):l==="ele"?await b.ele().then(c=>{n.fontIconSheetsList=c}):l==="awe"&&await b.awe().then(c=>{n.fontIconSheetsList=c.map(m=>`fa ${m}`)}),n.fontIconPlaceholder=e.placeholder,v(),a.value.wrap$.scrollTop=0},r=l=>{n.fontIconType=l,F(l)},i=l=>{n.fontIconPlaceholder=l,n.fontIconVisible=!1,n.fontIconPrefix=l,o("get",n.fontIconPrefix),o("update:modelValue",n.fontIconPrefix)},I=()=>{n.fontIconPrefix="",o("clear",n.fontIconPrefix),o("update:modelValue",n.fontIconPrefix)};return R(()=>{var l,c,m;e.type==="all"?((l=e.modelValue)==null?void 0:l.indexOf("iconfont"))>-1?r("ali"):((c=e.modelValue)==null?void 0:c.indexOf("element"))>-1?r("ele"):((m=e.modelValue)==null?void 0:m.indexOf("fa"))>-1?r("awe"):r("ali"):r(e.type),V(),w()}),W(()=>e.modelValue,()=>{v()}),L({inputWidthRef:t,selectorScrollbarRef:a,fontIconSheetsFilterList:C,onColClick:i,onIconChange:r,onClearFontIcon:I,onIconFocus:P,onIconBlur:S},j(n))}},K={class:"icon-selector"},Q={class:"icon-selector-warp"},X={class:"icon-selector-warp-title flex"},Y={class:"flex-auto"},$={key:0,class:"icon-selector-warp-title-tab"},ee={class:"icon-selector-warp-row"},ne={class:"flex-margin"},oe={class:"icon-selector-warp-item-value"};function te(e,o,t,a,n,P){const S=d("SvgIcon"),v=d("el-input"),C=d("el-col"),w=d("el-row"),V=d("el-empty"),F=d("el-scrollbar"),r=d("el-popover");return f(),y("div",K,[h(r,{placement:"bottom",width:e.fontIconWidth,visible:e.fontIconVisible,"onUpdate:visible":o[4]||(o[4]=i=>e.fontIconVisible=i),"popper-class":"icon-selector-popper"},{reference:u(()=>[h(v,{modelValue:e.fontIconSearch,"onUpdate:modelValue":o[0]||(o[0]=i=>e.fontIconSearch=i),placeholder:e.fontIconPlaceholder,clearable:t.clearable,disabled:t.disabled,size:t.size,ref:"inputWidthRef",onClear:a.onClearFontIcon,onFocus:a.onIconFocus,onBlur:a.onIconBlur},{prepend:u(()=>{var i,I;return[(e.fontIconPrefix===""?((i=t.prepend)==null?void 0:i.indexOf("element"))>-1:((I=e.fontIconPrefix)==null?void 0:I.indexOf("element"))>-1)?(f(),g(S,{key:0,name:e.fontIconPrefix===""?t.prepend:e.fontIconPrefix,class:"font14"},null,8,["name"])):(f(),y("i",{key:1,class:p([e.fontIconPrefix===""?t.prepend:e.fontIconPrefix,"font14"])},null,2))]}),_:1},8,["modelValue","placeholder","clearable","disabled","size","onClear","onFocus","onBlur"])]),default:u(()=>[h(N,{name:"el-zoom-in-top"},{default:u(()=>[M(s("div",Q,[s("div",X,[s("div",Y,q(t.title),1),t.type==="all"?(f(),y("div",$,[s("span",{class:p([{"span-active":e.fontIconType==="ali"},"ml10"]),onClick:o[1]||(o[1]=i=>a.onIconChange("ali")),title:"iconfont \u56FE\u6807"},"ali",2),s("span",{class:p([{"span-active":e.fontIconType==="ele"},"ml10"]),onClick:o[2]||(o[2]=i=>a.onIconChange("ele")),title:"elementPlus \u56FE\u6807"},"ele",2),s("span",{class:p([{"span-active":e.fontIconType==="awe"},"ml10"]),onClick:o[3]||(o[3]=i=>a.onIconChange("awe")),title:"fontawesome \u56FE\u6807"},"awe",2)])):_("",!0)]),s("div",ee,[h(F,{ref:"selectorScrollbarRef"},{default:u(()=>[a.fontIconSheetsFilterList.length>0?(f(),g(w,{key:0,gutter:10},{default:u(()=>[(f(!0),y(Z,null,A(a.fontIconSheetsFilterList,(i,I)=>(f(),g(C,{xs:6,sm:4,md:4,lg:4,xl:4,onClick:l=>a.onColClick(i),key:I},{default:u(()=>[s("div",{class:p(["icon-selector-warp-item",{"icon-selector-active":e.fontIconPrefix===i}])},[s("div",ne,[s("div",oe,[h(S,{name:i},null,8,["name"])])])],2)]),_:2},1032,["onClick"]))),128))]),_:1})):_("",!0),a.fontIconSheetsFilterList.length<=0?(f(),g(V,{key:1,"image-size":100,description:t.emptyDescription},null,8,["description"])):_("",!0)]),_:1},512)])],512),[[U,e.fontIconVisible]])]),_:1})]),_:1},8,["width","visible"])])}var se=H(J,[["render",te]]);export{se as I};
