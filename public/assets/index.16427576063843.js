import{S as e,r as d}from"./index.1642757606384.js";const h=["admin"],u=["btn.add","btn.del","btn.edit","btn.link"],m="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1813762643,1914315241&fm=26&gp=0.jpg",r=["common"],l=["btn.add","btn.link"],p="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=317673774,2961727727&fm=26&gp=0.jpg";function j({username:t,password:o,captcha:f}){return new Promise(async(i,b)=>{let s=t==="admin",a=s?h:r,c=s?u:l;const n={username:t,photo:s?m:p,time:new Date().getTime(),roles:a,authBtnList:c};e.set("userInfo",n),i(n)})}function k(){return new Promise((t,o)=>{e.clear(),d(),t()})}export{j as a,k as s};