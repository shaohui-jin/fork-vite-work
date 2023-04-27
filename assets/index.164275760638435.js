var _=Object.defineProperty;var B=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var F=(s,e,i)=>e in s?_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i,M=(s,e)=>{for(var i in e||(e={}))I.call(e,i)&&F(s,i,e[i]);if(B)for(var i of B(e))P.call(e,i)&&F(s,i,e[i]);return s};import{_ as b}from"./index.1642757606384.js";import{I as d,q as o,x as n,y as g,M as l,a8 as T,O as y,B as C,C as u,w as V,v as D,m as E,t as O,r as w,D as c,F as k}from"./vendor.1642757606384.js";const R={name:"dragVerify",props:{isPassing:{type:Boolean,default:!1},width:{type:Number,default:250},height:{type:Number,default:40},text:{type:String,default:"swiping to the right side"},successText:{type:String,default:"success"},background:{type:String,default:"#eee"},progressBarBg:{type:String,default:"#76c61d"},completedBg:{type:String,default:"#76c61d"},circle:{type:Boolean,default:!1},radius:{type:String,default:"4px"},handlerIcon:{type:String},successIcon:{type:String},handlerBg:{type:String,default:"#fff"},textSize:{type:String,default:"14px"},textColor:{type:String,default:"#333"}},mounted:function(){const s=this.$refs.dragVerify;s.style.setProperty("--textColor",this.textColor),s.style.setProperty("--width",Math.floor(this.width/2)+"px"),s.style.setProperty("--pwidth",-Math.floor(this.width/2)+"px"),console.log(this.$slots)},computed:{handlerStyle:function(){return{width:this.height+"px",height:this.height+"px",background:this.handlerBg}},message:function(){return this.isPassing?this.successText:this.text},dragVerifyStyle:function(){return{width:this.width+"px",height:this.height+"px",lineHeight:this.height+"px",background:this.background,borderRadius:this.circle?this.height/2+"px":this.radius}},progressBarStyle:function(){return{background:this.progressBarBg,height:this.height+"px",borderRadius:this.circle?this.height/2+"px 0 0 "+this.height/2+"px":this.radius}},textStyle:function(){return{height:this.height+"px",width:this.width+"px",fontSize:this.textSize}}},data(){return{isMoving:!1,x:0,isOk:!1}},methods:{dragStart:function(s){this.isPassing||(this.isMoving=!0,this.x=s.pageX||s.touches[0].pageX),this.$emit("handlerMove")},dragMoving:function(s){if(this.isMoving&&!this.isPassing){var e=(s.pageX||s.touches[0].pageX)-this.x,i=this.$refs.handler;e>0&&e<=this.width-this.height?(i.style.left=e+"px",this.$refs.progressBar.style.width=e+this.height/2+"px"):e>this.width-this.height&&(i.style.left=this.width-this.height+"px",this.$refs.progressBar.style.width=this.width-this.height/2+"px",this.passVerify())}},dragFinish:function(s){if(this.isMoving&&!this.isPassing){var e=(s.pageX||s.changedTouches[0].pageX)-this.x;if(e<this.width-this.height){this.isOk=!0;var i=this;setTimeout(function(){i.$refs.handler.style.left="0",i.$refs.progressBar.style.width="0",i.isOk=!1},500),this.$emit("passfail")}else{var h=this.$refs.handler;h.style.left=this.width-this.height+"px",this.$refs.progressBar.style.width=this.width-this.height/2+"px",this.passVerify()}this.isMoving=!1}},passVerify:function(){this.$emit("update:isPassing",!0),this.isMoving=!1;var s=this.$refs.handler;s.children[0].className=this.successIcon,this.$refs.progressBar.style.background=this.completedBg,this.$refs.message.style["-webkit-text-fill-color"]="unset",this.$refs.message.style.animation="slidetounlock2 3s infinite",this.$refs.message.style.color="#fff",this.$emit("passcallback")},reset:function(){const s=this.$options.data();for(const h in s)Object.prototype.hasOwnProperty.call(s,h)&&(this[h]=s[h]);var e=this.$refs.handler,i=this.$refs.message;e.style.left="0",this.$refs.progressBar.style.width="0",e.children[0].className=this.handlerIcon,i.style["-webkit-text-fill-color"]="transparent",i.style.animation="slidetounlock 3s infinite",i.style.color=this.background}}};function A(s,e,i,h,a,t){return d(),o("div",{ref:"dragVerify",class:"drag_verify",style:l(t.dragVerifyStyle),onMousemove:e[2]||(e[2]=(...r)=>t.dragMoving&&t.dragMoving(...r)),onMouseup:e[3]||(e[3]=(...r)=>t.dragFinish&&t.dragFinish(...r)),onMouseleave:e[4]||(e[4]=(...r)=>t.dragFinish&&t.dragFinish(...r)),onTouchmove:e[5]||(e[5]=(...r)=>t.dragMoving&&t.dragMoving(...r)),onTouchend:e[6]||(e[6]=(...r)=>t.dragFinish&&t.dragFinish(...r))},[n("div",{class:g(["dv_progress_bar",{goFirst2:a.isOk}]),ref:"progressBar",style:l(t.progressBarStyle)},null,6),n("div",{class:"dv_text",style:l(t.textStyle),ref:"message"},[s.$slots.textBefore?T(s.$slots,"textBefore",{key:0},void 0,!0):y("",!0),C(" "+u(t.message)+" ",1),s.$slots.textAfter?T(s.$slots,"textAfter",{key:1},void 0,!0):y("",!0)],4),n("div",{class:g(["dv_handler dv_handler_bg",{goFirst:a.isOk}]),onMousedown:e[0]||(e[0]=(...r)=>t.dragStart&&t.dragStart(...r)),onTouchstart:e[1]||(e[1]=(...r)=>t.dragStart&&t.dragStart(...r)),ref:"handler",style:l(t.handlerStyle)},[n("i",{class:g(i.handlerIcon)},null,2)],38)],36)}var N=b(R,[["render",A],["__scopeId","data-v-495af628"]]);const X={name:"dragVerify",props:{isPassing:{type:Boolean,default:!1},width:{type:Number,default:250},height:{type:Number,default:40},text:{type:String,default:"swiping to the right side"},successText:{type:String,default:"success"},background:{type:String,default:"#eee"},progressBarBg:{type:String,default:"#76c61d"},completedBg:{type:String,default:"#76c61d"},circle:{type:Boolean,default:!1},radius:{type:String,default:"4px"},handlerIcon:{type:String},successIcon:{type:String},handlerBg:{type:String,default:"#fff"},textSize:{type:String,default:"14px"},textColor:{type:String,default:"#333"},imgsrc:{type:String},barWidth:{type:Number,default:70},barHeight:{type:Number,default:40},barRadius:{type:Number,default:2},showRefresh:{type:Boolean,default:!1},refreshIcon:{type:String},showTips:{type:Boolean,default:!0},successTip:{type:String,default:"\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u8D85\u8FC780%\u7528\u6237"},failTip:{type:String,default:"\u9A8C\u8BC1\u672A\u901A\u8FC7\uFF0C\u62D6\u52A8\u6ED1\u5757\u5C06\u60AC\u6D6E\u56FE\u50CF\u6B63\u786E\u5408\u5E76"},diffWidth:{type:Number,default:20}},mounted:function(){const s=this.$refs.dragVerify;s.style.setProperty("--textColor",this.textColor),s.style.setProperty("--width",Math.floor(this.width/2)+"px"),s.style.setProperty("--pwidth",-Math.floor(this.width/2)+"px")},computed:{handlerStyle:function(){return{width:this.height+"px",height:this.height+"px",background:this.handlerBg}},message:function(){return this.isPassing?"":this.text},successMessage:function(){return this.isPassing?this.successText:""},dragVerifyStyle:function(){return console.log(this.width,"width"),{width:this.width+"px",height:this.height+"px",lineHeight:this.height+"px",background:this.background,borderRadius:this.circle?this.height/2+"px":this.radius}},dragVerifyImgStyle:function(){return{width:this.width+"px",position:"relative",overflow:"hidden"}},progressBarStyle:function(){return{background:this.progressBarBg,height:this.height+"px",borderRadius:this.circle?this.height/2+"px 0 0 "+this.height/2+"px":this.radius}},textStyle:function(){return{height:this.height+"px",width:this.width+"px",fontSize:this.textSize}}},data(){return{isMoving:!1,x:0,isOk:!1,isKeep:!1,movebarStyle:{},clipbarStyle:{},showBar:!1,clipBarx:0,showErrorTip:!1}},methods:{checkimgLoaded:function(){var s=this.barWidth,e=this.barHeight,i=this.$refs.checkImg.height,h=Math.floor(this.width/2),a=25,t=20,r=h+Math.ceil(Math.random()*(h-s)),f=a+Math.floor(Math.random()*(i-e-a-t));this.clipbarStyle={width:s+"px",height:e+"px",top:f+"px",left:r+"px","border-radius":this.barRadius+"px"},this.clipBarx=r;var m=this.imgsrc,v=this.width;this.movebarStyle={background:`url(${m})`,"background-position":`-${r}px -${f}px`,"background-size":`${v}px`,width:s+"px",height:e+"px",top:f+"px","border-radius":this.barRadius+"px"}},dragStart:function(s){this.isPassing||(this.isMoving=!0,this.x=s.pageX||s.touches[0].pageX),this.showBar=!0,this.showErrorTip=!1,this.$emit("handlerMove")},dragMoving:function(s){if(this.isMoving&&!this.isPassing){var e=(s.pageX||s.touches[0].pageX)-this.x,i=this.$refs.handler;i.style.left=e+"px",this.$refs.progressBar.style.width=e+this.height/2+"px",this.$refs.moveBar.style.left=e+"px"}},dragFinish:function(s){if(this.isMoving&&!this.isPassing){var e=(s.pageX||s.changedTouches[0].pageX)-this.x;if(Math.abs(e-this.clipBarx)>this.diffWidth){this.isOk=!0;var i=this;setTimeout(function(){i.$refs.handler.style.left="0",i.$refs.progressBar.style.width="0",i.$refs.moveBar.style.left="0",i.isOk=!1},500),this.showErrorTip=!0,this.$emit("passfail")}else this.passVerify();this.isMoving=!1}},passVerify:function(){this.$emit("update:isPassing",!0),this.isMoving=!1;var s=this.$refs.handler;s.children[0].className=this.successIcon,this.$refs.progressBar.style.background=this.completedBg,this.$refs.message.style["-webkit-text-fill-color"]="unset",this.$refs.message.style.animation="slidetounlock2 3s infinite",this.$refs.progressBar.style.color="#fff",this.$refs.progressBar.style.fontSize=this.textSize,this.isKeep=!0,setTimeout(()=>{this.$refs.moveBar.style.left=this.clipBarx+"px",setTimeout(()=>{this.isKeep=!1},200)},100),this.$emit("passcallback")},reset:function(){this.reImg(),this.checkimgLoaded()},reImg:function(){this.$emit("update:isPassing",!1);const s=this.$options.data();for(const h in s)Object.prototype.hasOwnProperty.call(s,h)&&(this[h]=s[h]);var e=this.$refs.handler,i=this.$refs.message;e.style.left="0",this.$refs.progressBar.style.width="0",e.children[0].className=this.handlerIcon,i.style["-webkit-text-fill-color"]="transparent",i.style.animation="slidetounlock 3s infinite",i.style.color=this.background},refreshimg:function(){this.$emit("refresh")}},watch:{imgsrc:{immediate:!1,handler:function(){this.reImg()}}}},z={class:"drag-verify-container"},L=["src"],W={key:0,class:"refresh"},H={key:1,class:"tips success"},j={key:2,class:"tips danger"};function K(s,e,i,h,a,t){return d(),o("div",z,[n("div",{style:l(t.dragVerifyImgStyle)},[n("img",{ref:"checkImg",src:i.imgsrc,onLoad:e[0]||(e[0]=(...r)=>t.checkimgLoaded&&t.checkimgLoaded(...r)),style:{width:"100%"},alt:""},null,40,L),V(n("div",{class:g(["move-bar",{goFirst:a.isOk,goKeep:a.isKeep}]),style:l(a.movebarStyle),ref:"moveBar"},null,6),[[D,a.showBar]]),n("div",{class:"clip-bar",style:l(a.clipbarStyle),ref:"clipBar"},null,4),i.showRefresh&&!i.isPassing?(d(),o("div",W,[n("i",{class:g(i.refreshIcon),onClick:e[1]||(e[1]=(...r)=>t.refreshimg&&t.refreshimg(...r))},null,2)])):y("",!0),i.showTips&&i.isPassing?(d(),o("div",H,u(i.successTip),1)):y("",!0),i.showTips&&!i.isPassing&&a.showErrorTip?(d(),o("div",j,u(i.failTip),1)):y("",!0)],4),n("div",{ref:"dragVerify",class:"drag_verify",style:l(t.dragVerifyStyle),onMousemove:e[4]||(e[4]=(...r)=>t.dragMoving&&t.dragMoving(...r)),onMouseup:e[5]||(e[5]=(...r)=>t.dragFinish&&t.dragFinish(...r)),onMouseleave:e[6]||(e[6]=(...r)=>t.dragFinish&&t.dragFinish(...r)),onTouchmove:e[7]||(e[7]=(...r)=>t.dragMoving&&t.dragMoving(...r)),onTouchend:e[8]||(e[8]=(...r)=>t.dragFinish&&t.dragFinish(...r))},[n("div",{class:g(["dv_progress_bar",{goFirst2:a.isOk}]),ref:"progressBar",style:l(t.progressBarStyle)},u(t.successMessage),7),n("div",{class:"dv_text",style:l(t.textStyle),ref:"message"},u(t.message),5),n("div",{class:g(["dv_handler dv_handler_bg",{goFirst:a.isOk}]),onMousedown:e[2]||(e[2]=(...r)=>t.dragStart&&t.dragStart(...r)),onTouchstart:e[3]||(e[3]=(...r)=>t.dragStart&&t.dragStart(...r)),ref:"handler",style:l(t.handlerStyle)},[n("i",{class:g(i.handlerIcon)},null,2)],38)],36)])}var $=b(X,[["render",K],["__scopeId","data-v-3cc93469"]]);const U={name:"dragVerifyImgChip",props:{isPassing:{type:Boolean,default:!1},width:{type:Number,default:250},height:{type:Number,default:40},text:{type:String,default:"swiping to the right side"},successText:{type:String,default:"success"},background:{type:String,default:"#eee"},progressBarBg:{type:String,default:"#76c61d"},completedBg:{type:String,default:"#76c61d"},circle:{type:Boolean,default:!1},radius:{type:String,default:"4px"},handlerIcon:{type:String},successIcon:{type:String},handlerBg:{type:String,default:"#fff"},textSize:{type:String,default:"14px"},textColor:{type:String,default:"#333"},imgsrc:{type:String},barWidth:{type:Number,default:40},barRadius:{type:Number,default:8},showRefresh:{type:Boolean,default:!1},refreshIcon:{type:String},showTips:{type:Boolean,default:!0},successTip:{type:String,default:"\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u8D85\u8FC780%\u7528\u6237"},failTip:{type:String,default:"\u9A8C\u8BC1\u672A\u901A\u8FC7\uFF0C\u62D6\u52A8\u6ED1\u5757\u5C06\u60AC\u6D6E\u56FE\u50CF\u6B63\u786E\u5408\u5E76"},diffWidth:{type:Number,default:20}},mounted:function(){const s=this.$refs.dragVerify;s.style.setProperty("--textColor",this.textColor),s.style.setProperty("--width",Math.floor(this.width/2)+"px"),s.style.setProperty("--pwidth",-Math.floor(this.width/2)+"px")},computed:{handlerStyle:function(){return{width:this.height+"px",height:this.height+"px",background:this.handlerBg}},message:function(){return this.isPassing?"":this.text},successMessage:function(){return this.isPassing?this.successText:""},dragVerifyStyle:function(){return{width:this.width+"px",height:this.height+"px",lineHeight:this.height+"px",background:this.background,borderRadius:this.circle?this.height/2+"px":this.radius}},dragVerifyImgStyle:function(){return{width:this.width+"px",position:"relative",overflow:"hidden"}},progressBarStyle:function(){return{background:this.progressBarBg,height:this.height+"px",borderRadius:this.circle?this.height/2+"px 0 0 "+this.height/2+"px":this.radius}},textStyle:function(){return{height:this.height+"px",width:this.width+"px",fontSize:this.textSize}}},data(){return{isMoving:!1,x:0,isOk:!1,isKeep:!1,clipBarx:0,showErrorTip:!1}},methods:{draw:function(s,e,i,h){var a=this.barWidth,t=this.barRadius;const r=Math.PI;s.beginPath(),s.moveTo(e,i),s.arc(e+a/2,i-t+2,t,.72*r,2.26*r),s.lineTo(e+a,i),s.arc(e+a+t-2,i+a/2,t,1.21*r,2.78*r),s.lineTo(e+a,i+a),s.lineTo(e,i+a),s.arc(e+t-2,i+a/2,t+.4,2.76*r,1.24*r,!0),s.lineTo(e,i),s.lineWidth=2,s.fillStyle="rgba(255, 255, 255, 0.8)",s.strokeStyle="rgba(255, 255, 255, 0.8)",s.stroke(),s[h](),s.globalCompositeOperation="destination-over"},checkimgLoaded:function(){var s=this.barWidth,e=this.$refs.checkImg.height,i=this.$refs.checkImg.width,h=Math.floor(this.width/2),a=25,t=20,r=h+Math.ceil(Math.random()*(h-s-this.barRadius-5)),f=a+Math.floor(Math.random()*(e-s-a-t));this.$refs.maincanvas.setAttribute("width",i),this.$refs.maincanvas.setAttribute("height",e),this.$refs.maincanvas.style.display="block";var m=this.$refs.maincanvas.getContext("2d");this.draw(m,r,f,"fill"),this.clipBarx=r;var v=this.$refs.movecanvas;v.setAttribute("width",i),v.setAttribute("height",e),this.$refs.movecanvas.style.display="block";const S=s+this.barRadius*2+3;var x=this.$refs.movecanvas.getContext("2d");x.clearRect(0,0,i,e),this.draw(x,r,f,"clip"),x.drawImage(this.$refs.checkImg,0,0,i,e);var f=f-this.barRadius*2-1;const p=x.getImageData(r,f,S,S);v.setAttribute("width",S),v.setAttribute("height",e),x.putImageData(p,0,f)},dragStart:function(s){this.isPassing||(this.isMoving=!0,this.x=s.pageX||s.touches[0].pageX),this.showBar=!0,this.showErrorTip=!1,this.$emit("handlerMove")},dragMoving:function(s){if(this.isMoving&&!this.isPassing){var e=(s.pageX||s.touches[0].pageX)-this.x,i=this.$refs.handler;i.style.left=e+"px",this.$refs.progressBar.style.width=e+this.height/2+"px",this.$refs.movecanvas.style.left=e+"px"}},dragFinish:function(s){if(this.isMoving&&!this.isPassing){var e=(s.pageX||s.changedTouches[0].pageX)-this.x;if(Math.abs(e-this.clipBarx)>this.diffWidth){this.isOk=!0;var i=this;setTimeout(function(){i.$refs.handler.style.left="0",i.$refs.progressBar.style.width="0",i.$refs.movecanvas.style.left="0",i.isOk=!1},500),this.$emit("passfail"),this.showErrorTip=!0}else this.passVerify();this.isMoving=!1}},passVerify:function(){this.$emit("update:isPassing",!0),this.isMoving=!1;var s=this.$refs.handler;s.children[0].className=this.successIcon,this.$refs.progressBar.style.background=this.completedBg,this.$refs.message.style["-webkit-text-fill-color"]="unset",this.$refs.message.style.animation="slidetounlock2 3s infinite",this.$refs.progressBar.style.color="#fff",this.$refs.progressBar.style.fontSize=this.textSize,this.isKeep=!0,setTimeout(()=>{this.$refs.movecanvas.style.left=this.clipBarx+"px",setTimeout(()=>{this.isKeep=!1,this.$refs.maincanvas.style.display="none",this.$refs.movecanvas.style.display="none"},200)},100),this.$emit("passcallback")},reset:function(){this.reImg(),this.checkimgLoaded()},reImg:function(){this.$emit("update:isPassing",!1);const s=this.$options.data();for(const h in s)Object.prototype.hasOwnProperty.call(s,h)&&(this[h]=s[h]);var e=this.$refs.handler,i=this.$refs.message;e.style.left="0",this.$refs.progressBar.style.width="0",e.children[0].className=this.handlerIcon,i.style["-webkit-text-fill-color"]="transparent",i.style.animation="slidetounlock 3s infinite",i.style.color=this.background,this.$refs.movecanvas.style.left="0px"},refreshimg:function(){this.$emit("refresh")}},watch:{imgsrc:{immediate:!1,handler:function(){this.reImg()}}}},Z={class:"drag-verify-container"},q=["src"],G={ref:"maincanvas",class:"main-canvas"},Q={key:0,class:"refresh"},Y={key:1,class:"tips success"},J={key:2,class:"tips danger"};function ee(s,e,i,h,a,t){return d(),o("div",Z,[n("div",{style:l(t.dragVerifyImgStyle)},[n("img",{ref:"checkImg",crossOrigin:"anonymous",src:i.imgsrc,onLoad:e[0]||(e[0]=(...r)=>t.checkimgLoaded&&t.checkimgLoaded(...r)),style:{width:"100%"},alt:""},null,40,q),n("canvas",G,null,512),n("canvas",{ref:"movecanvas",class:g([{goFirst:a.isOk,goKeep:a.isKeep},"move-canvas"])},null,2),i.showRefresh&&!i.isPassing?(d(),o("div",Q,[n("i",{class:g(i.refreshIcon),onClick:e[1]||(e[1]=(...r)=>t.refreshimg&&t.refreshimg(...r))},null,2)])):y("",!0),i.showTips&&i.isPassing?(d(),o("div",Y,u(i.successTip),1)):y("",!0),i.showTips&&!i.isPassing&&a.showErrorTip?(d(),o("div",J,u(i.failTip),1)):y("",!0)],4),n("div",{ref:"dragVerify",class:"drag_verify",style:l(t.dragVerifyStyle),onMousemove:e[4]||(e[4]=(...r)=>t.dragMoving&&t.dragMoving(...r)),onMouseup:e[5]||(e[5]=(...r)=>t.dragFinish&&t.dragFinish(...r)),onMouseleave:e[6]||(e[6]=(...r)=>t.dragFinish&&t.dragFinish(...r)),onTouchmove:e[7]||(e[7]=(...r)=>t.dragMoving&&t.dragMoving(...r)),onTouchend:e[8]||(e[8]=(...r)=>t.dragFinish&&t.dragFinish(...r))},[n("div",{class:g(["dv_progress_bar",{goFirst2:a.isOk}]),ref:"progressBar",style:l(t.progressBarStyle)},u(t.successMessage),7),n("div",{class:"dv_text",style:l(t.textStyle),ref:"message"},u(t.message),5),n("div",{class:g(["dv_handler dv_handler_bg",{goFirst:a.isOk}]),onMousedown:e[2]||(e[2]=(...r)=>t.dragStart&&t.dragStart(...r)),onTouchstart:e[3]||(e[3]=(...r)=>t.dragStart&&t.dragStart(...r)),ref:"handler",style:l(t.handlerStyle)},[n("i",{class:g(i.handlerIcon)},null,2)],38)],36)])}var se=b(U,[["render",ee],["__scopeId","data-v-30ca048b"]]);const te={name:"dragVerify",props:{isPassing:{type:Boolean,default:!1},width:{type:Number,default:250},height:{type:Number,default:40},text:{type:String,default:"swiping to the right side"},successText:{type:String,default:"success"},background:{type:String,default:"#eee"},progressBarBg:{type:String,default:"#76c61d"},completedBg:{type:String,default:"#76c61d"},circle:{type:Boolean,default:!1},radius:{type:String,default:"4px"},handlerIcon:{type:String},successIcon:{type:String},handlerBg:{type:String,default:"#fff"},textSize:{type:String,default:"14px"},textColor:{type:String,default:"#333"},imgsrc:{type:String},showTips:{type:Boolean,default:!0},successTip:{type:String,default:"\u9A8C\u8BC1\u901A\u8FC7"},failTip:{type:String,default:"\u9A8C\u8BC1\u5931\u8D25"},diffDegree:{type:Number,default:10},minDegree:{type:Number,default:90},maxDegree:{type:Number,default:270}},mounted:function(){const s=this.$refs.dragVerify;s.style.setProperty("--textColor",this.textColor),s.style.setProperty("--width",Math.floor(this.width/2)+"px"),s.style.setProperty("--pwidth",-Math.floor(this.width/2)+"px")},computed:{handlerStyle:function(){return{width:this.height+"px",height:this.height+"px",background:this.handlerBg}},message:function(){return this.isPassing?"":this.text},successMessage:function(){return this.isPassing?this.successText:""},dragVerifyStyle:function(){return{width:this.width+"px",height:this.height+"px",lineHeight:this.height+"px",background:this.background,borderRadius:this.circle?this.height/2+"px":this.radius}},dragVerifyImgStyle:function(){return{width:this.width+"px",height:this.width+"px",position:"relative",overflow:"hidden","border-radius":"50%"}},progressBarStyle:function(){return{background:this.progressBarBg,height:this.height+"px",borderRadius:this.circle?this.height/2+"px 0 0 "+this.height/2+"px":this.radius}},textStyle:function(){return{height:this.height+"px",width:this.width+"px",fontSize:this.textSize}},factor:function(){return this.minDegree==this.maxDegree?Math.floor(1+Math.random()*6)/10+1:1}},data(){return{isMoving:!1,x:0,isOk:!1,showBar:!1,showErrorTip:!1,ranRotate:0,cRotate:0,imgStyle:{}}},methods:{checkimgLoaded:function(){var s=this.minDegree,e=this.maxDegree,i=Math.floor(s+Math.random()*(e-s));this.ranRotate=i,console.log("\u65CB\u8F6C"+i),this.imgStyle={transform:`rotateZ(${i}deg)`}},dragStart:function(s){this.isPassing||(this.isMoving=!0,this.x=s.pageX||s.touches[0].pageX),this.showBar=!0,this.showErrorTip=!1,this.$emit("handlerMove")},dragMoving:function(s){if(this.isMoving&&!this.isPassing){var e=(s.pageX||s.touches[0].pageX)-this.x;console.log(e,"_x");var i=this.$refs.handler;i.style.left=e+"px",this.$refs.progressBar.style.width=e+this.height/2+"px";var h=Math.ceil(e/(this.width-this.height)*this.maxDegree*this.factor);console.log(h,"cRotate"),this.cRotate=h;var a=this.ranRotate-h;this.imgStyle={transform:`rotateZ(${a}deg)`}}},dragFinish:function(s){if(this.isMoving&&!this.isPassing){if(Math.abs(this.ranRotate-this.cRotate)>this.diffDegree){this.isOk=!0,this.imgStyle={transform:`rotateZ(${this.ranRotate}deg)`};var e=this;setTimeout(function(){e.$refs.handler.style.left="0",e.$refs.progressBar.style.width="0",e.isOk=!1},500),this.showErrorTip=!0,this.$emit("passfail")}else this.passVerify();this.isMoving=!1}},passVerify:function(){this.$emit("update:isPassing",!0),this.isMoving=!1;var s=this.$refs.handler;s.children[0].className=this.successIcon,this.$refs.progressBar.style.background=this.completedBg,this.$refs.message.style["-webkit-text-fill-color"]="unset",this.$refs.message.style.animation="slidetounlock2 3s infinite",this.$refs.progressBar.style.color="#fff",this.$refs.progressBar.style.fontSize=this.textSize,this.$emit("passcallback")},reset:function(){this.reImg(),this.checkimgLoaded()},reImg:function(){this.$emit("update:isPassing",!1);const s=this.$options.data();for(const h in s)Object.prototype.hasOwnProperty.call(s,h)&&(this[h]=s[h]);var e=this.$refs.handler,i=this.$refs.message;e.style.left="0",this.$refs.progressBar.style.width="0",e.children[0].className=this.handlerIcon,i.style["-webkit-text-fill-color"]="transparent",i.style.animation="slidetounlock 3s infinite",i.style.color=this.background},refreshimg:function(){this.$emit("refresh")}},watch:{imgsrc:{immediate:!1,handler:function(){this.reImg()}}}},ie={class:"drag-verify-container"},re=["src"],ae={key:0,class:"tips success"},he={key:1,class:"tips danger"};function ne(s,e,i,h,a,t){return d(),o("div",ie,[n("div",{style:l(t.dragVerifyImgStyle)},[n("img",{ref:"checkImg",src:i.imgsrc,class:g(["check-img",{goOrigin:a.isOk}]),onLoad:e[0]||(e[0]=(...r)=>t.checkimgLoaded&&t.checkimgLoaded(...r)),style:l(a.imgStyle),alt:""},null,46,re),i.showTips&&i.isPassing?(d(),o("div",ae,u(i.successTip),1)):y("",!0),i.showTips&&!i.isPassing&&a.showErrorTip?(d(),o("div",he,u(i.failTip),1)):y("",!0)],4),n("div",{ref:"dragVerify",class:"drag_verify",style:l(t.dragVerifyStyle),onMousemove:e[3]||(e[3]=(...r)=>t.dragMoving&&t.dragMoving(...r)),onMouseup:e[4]||(e[4]=(...r)=>t.dragFinish&&t.dragFinish(...r)),onMouseleave:e[5]||(e[5]=(...r)=>t.dragFinish&&t.dragFinish(...r)),onTouchmove:e[6]||(e[6]=(...r)=>t.dragMoving&&t.dragMoving(...r)),onTouchend:e[7]||(e[7]=(...r)=>t.dragFinish&&t.dragFinish(...r))},[n("div",{class:g(["dv_progress_bar",{goFirst2:a.isOk}]),ref:"progressBar",style:l(t.progressBarStyle)},u(t.successMessage),7),n("div",{class:"dv_text",style:l(t.textStyle),ref:"message"},u(t.message),5),n("div",{class:g(["dv_handler dv_handler_bg",{goFirst:a.isOk}]),onMousedown:e[1]||(e[1]=(...r)=>t.dragStart&&t.dragStart(...r)),onTouchstart:e[2]||(e[2]=(...r)=>t.dragStart&&t.dragStart(...r)),ref:"handler",style:l(t.handlerStyle)},[n("i",{class:g(i.handlerIcon)},null,2)],38)],36)])}var le=b(te,[["render",ne],["__scopeId","data-v-170d5aca"]]);const ge={name:"funDragVerify",components:{DragVerify:N,DragVerifyImg:$,DragVerifyImgChip:se,DragVerifyImgRotate:le},setup(){const s=E({isPassingOne:!1,isPassingTwo:!1,isPassingThree:!1,isPassingFour:!1,imgTwo:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1813762643,1914315241&fm=26&gp=0.jpg",imgThree:"https://img1.baidu.com/it/u=2813520958,2218166536&fm=26&fmt=auto&gp=0.jpg"});return M({},O(s))}},de={class:"dragVerify-container"};function oe(s,e,i,h,a,t){const r=w("el-alert"),f=w("DragVerify"),m=w("el-card"),v=w("DragVerifyImg"),S=w("DragVerifyImgChip"),x=w("DragVerifyImgRotate");return d(),o("div",de,[c(m,{shadow:"hover",header:"\u9A8C\u8BC1\u5668\uFF1A\u57FA\u672C\u6ED1\u5757\u9A8C\u8BC1\u7EC4\u4EF6"},{default:k(()=>[c(r,{title:"\u611F\u8C22\u4F18\u79C0\u7684 `vue-drag-verify`\uFF0C\u9879\u76EE\u5730\u5740\uFF1Ahttps://github.com/yimijianfang/vue-drag-verify",type:"success",closable:!1,class:"mb15"}),c(f,{isPassing:s.isPassingOne,"onUpdate:isPassing":e[0]||(e[0]=p=>s.isPassingOne=p),text:"\u8BF7\u6309\u4F4F\u6ED1\u5757\u62D6\u52A8",successText:"\u9A8C\u8BC1\u901A\u8FC7",handlerIcon:"el-icon-d-arrow-right",successIcon:"el-icon-circle-check"},null,8,["isPassing"])]),_:1}),c(m,{shadow:"hover",header:"\u9A8C\u8BC1\u5668\uFF1A\u56FE\u7247\u6ED1\u5757\u7EC4\u4EF6",class:"mt15"},{default:k(()=>[c(r,{title:"\u611F\u8C22\u4F18\u79C0\u7684 `vue-drag-verify`\uFF0C\u9879\u76EE\u5730\u5740\uFF1Ahttps://github.com/yimijianfang/vue-drag-verify",type:"success",closable:!1,class:"mb15"}),c(v,{imgsrc:s.imgTwo,isPassing:s.isPassingTwo,"onUpdate:isPassing":e[1]||(e[1]=p=>s.isPassingTwo=p),showRefresh:!0,text:"\u8BF7\u6309\u4F4F\u6ED1\u5757\u62D6\u52A8",successText:"\u9A8C\u8BC1\u901A\u8FC7",handlerIcon:"el-icon-d-arrow-right",successIcon:"el-icon-circle-check"},null,8,["imgsrc","isPassing"])]),_:1}),c(m,{shadow:"hover",header:"\u9A8C\u8BC1\u5668\uFF1A\u56FE\u7247\u6ED1\u5757\u7EC4\u4EF6(\u62FC\u56FE)",class:"mt15"},{default:k(()=>[c(r,{title:"\u611F\u8C22\u4F18\u79C0\u7684 `vue-drag-verify`\uFF0C\u9879\u76EE\u5730\u5740\uFF1Ahttps://github.com/yimijianfang/vue-drag-verify",type:"success",closable:!1,class:"mb15"}),c(S,{imgsrc:s.imgThree,isPassing:s.isPassingThree,"onUpdate:isPassing":e[2]||(e[2]=p=>s.isPassingThree=p),showRefresh:!0,text:"\u8BF7\u6309\u4F4F\u6ED1\u5757\u62D6\u52A8",successText:"\u9A8C\u8BC1\u901A\u8FC7",handlerIcon:"el-icon-d-arrow-right",successIcon:"el-icon-circle-check"},null,8,["imgsrc","isPassing"])]),_:1}),c(m,{shadow:"hover",header:"\u9A8C\u8BC1\u5668\uFF1A\u65CB\u8F6C\u56FE\u7247\u6ED1\u5757\u7EC4\u4EF6",class:"mt15"},{default:k(()=>[c(r,{title:"\u611F\u8C22\u4F18\u79C0\u7684 `vue-drag-verify`\uFF0C\u9879\u76EE\u5730\u5740\uFF1Ahttps://github.com/yimijianfang/vue-drag-verify",type:"success",closable:!1,class:"mb15"}),c(x,{imgsrc:s.imgThree,isPassing:s.isPassingFour,"onUpdate:isPassing":e[3]||(e[3]=p=>s.isPassingFour=p),showRefresh:!0,text:"\u8BF7\u6309\u4F4F\u6ED1\u5757\u62D6\u52A8",successText:"\u9A8C\u8BC1\u901A\u8FC7",handlerIcon:"el-icon-d-arrow-right",successIcon:"el-icon-circle-check"},null,8,["imgsrc","isPassing"])]),_:1})])}var ye=b(ge,[["render",oe]]);export{ye as default};
