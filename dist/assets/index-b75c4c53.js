import{c as t,n as e,t as l,I as a,g as i,w as s}from"./index-9049bcee.js";import{d as r,r as n,g as c,o,f as u,i as d,j as m,F as f,p as v,l as p,t as x,y as b,x as g,_ as h}from"./index-a2c9be68.js";import{u as k}from"./use-placeholder-609597bf.js";import{H as T,B as w}from"./constant-999c8888.js";import"./on-popup-reopen-ff3749db.js";const[y,_]=t("nav-bar");const j=s(r({name:y,props:{title:String,fixed:Boolean,zIndex:e,border:l,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean},emits:["click-left","click-right"],setup(t,{emit:e,slots:l}){const s=n(),r=k(s,_),o=t=>e("click-left",t),u=t=>e("click-right",t),d=()=>{const{title:e,fixed:r,border:n,zIndex:d}=t,m=i(d),f=t.leftArrow||t.leftText||l.left,v=t.rightText||l.right;return c("div",{ref:s,style:m,class:[_({fixed:r}),{[w]:n,"van-safe-area-top":t.safeAreaInsetTop}]},[c("div",{class:_("content")},[f&&c("div",{class:[_("left"),T],onClick:o},[l.left?l.left():[t.leftArrow&&c(a,{class:_("arrow"),name:"arrow-left"},null),t.leftText&&c("span",{class:_("text")},[t.leftText])]]),c("div",{class:[_("title"),"van-ellipsis"]},[l.title?l.title():e]),v&&c("div",{class:[_("right"),T],onClick:u},[l.right?l.right():c("span",{class:_("text")},[t.rightText])])])])};return()=>t.fixed&&t.placeholder?r(d):d()}})),I={class:"my-album-box"},A=["onClick"],B=["src"],C={class:"album-item-content"},S={class:"album-item-title"},z={class:"album-item-date"},$={key:0,class:"current-album-box"},D={class:"current-album-box-list"},F=["src"],H=h(r({__name:"index",setup(t){const e=[{title:"我的",icon:"",date:"2011-22-11",children:[{url:""},{url:""},{url:""},{url:""},{url:""}]},{title:"我的",icon:"",date:"2011-22-11",children:[{url:""}]},{title:"我的",icon:"",date:"2011-22-11",children:[{url:""}]},{title:"我的",icon:"",date:"2011-22-11",children:[{url:""}]},{title:"我的",icon:"",date:"2011-22-11",children:[{url:""}]},{title:"我的",icon:"",date:"2011-22-11",children:[{url:""}]},{title:"我的",icon:"",date:"2011-22-11",children:[{url:""}]}],l=n(null);return o((()=>{})),u((()=>{})),(t,a)=>{const i=j;return x(),d("div",I,[m(" 主相册 "),(x(),d(f,null,v(e,((t,e)=>p("div",{key:t.title,onClick:e=>{return a=t,void(l.value=a);var a},class:g((e%2?"album-item-left":"album-item-right")+" album-item")},[p("img",{class:"album-item-icon",src:`@/assets/images/album/${t.icon}`,alt:""},null,8,B),p("div",C,[p("div",S,b(t.title),1),p("div",z,b(t.date),1)])],10,A))),64)),m(" 子相册 "),l.value?(x(),d("div",$,[c(i,{title:l.value?l.value.title:"","left-text":"返回","left-arrow":"",onClickLeft:a[0]||(a[0]=t=>{l.value=null})},null,8,["title"]),p("div",D,[(x(!0),d(f,null,v(l.value.children,((t,e)=>(x(),d("img",{key:t.url,class:g((e%2?"current-album-list-left":"current-album-list-right")+" current-album-list-icon"),src:`@/assets/images/album/${t.url}`,alt:""},null,10,F)))),128))])])):m("v-if",!0)])}}}),[["__scopeId","data-v-884a3ac5"],["__file","D:/代码仓库/王思雨/新建文件夹/wangsiyv/src/pages/album/index.vue"]]);export{H as default};
