import{r as t,a as e,d as n,c as a,g as o,z as s,A as r,B as l,C as c}from"./index-a2c9be68.js";const i=t=>null!=t,u=t=>"function"==typeof t,d=t=>null!==t&&"object"==typeof t,f=t=>d(t)&&u(t.then)&&u(t.catch),p=t=>"number"==typeof t||/^\d+(\.\d+)?$/.test(t),g=()=>!!y&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());function m(){}const v=Object.assign,y="undefined"!=typeof window;function b(t,e){const n=e.split(".");let a=t;return n.forEach((t=>{var e;a=d(a)&&null!=(e=a[t])?e:""})),a}const h=null,$=[Number,String],x={type:Boolean,default:!0},C=t=>({type:$,default:t}),j=t=>({type:String,default:t});function w(t){if(i(t))return p(t)?`${t}px`:String(t)}function S(t){const e={};return void 0!==t&&(e.zIndex=+t),e}const z=/-(\w)/g,P=t=>t.replace(z,((t,e)=>e.toUpperCase())),A=(t,e,n)=>Math.min(Math.max(t,e),n),{hasOwnProperty:O}=Object.prototype;function E(t,e){return Object.keys(e).forEach((n=>{!function(t,e,n){const a=e[n];i(a)&&(O.call(t,n)&&d(a)?t[n]=E(Object(t[n]),a):t[n]=a)}(t,e,n)})),t}const k=t("zh-CN"),B=e({"zh-CN":{name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(t,e)=>`${t}年${e}月`,rangePrompt:t=>`最多选择 ${t} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:t=>`${t}折`,condition:t=>`满${t}元可用`},vanCouponCell:{title:"优惠券",count:t=>`${t}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",postal:"邮政编码",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",postalEmpty:"邮政编码不正确",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}}});var I={messages:()=>B[k.value],use(t,e){k.value=t,this.add({[t]:e})},add(t={}){E(B,t)}};function L(t){const e=P(t)+".";return(t,...n)=>{const a=I.messages(),o=b(a,e+t)||b(a,t);return u(o)?o(...n):o}}function N(t,e){return e?"string"==typeof e?` ${t}--${e}`:Array.isArray(e)?e.reduce(((e,n)=>e+N(t,n)),""):Object.keys(e).reduce(((n,a)=>n+(e[a]?N(t,a):"")),""):""}function V(t){return(e,n)=>(e&&"string"!=typeof e&&(n=e,e=""),`${e=e?`${t}__${e}`:t}${N(e,n)}`)}function Z(t){const e=`van-${t}`;return[e,V(e),L(e)]}function M(t){return t.install=e=>{const{name:n}=t;n&&(e.component(n,t),e.component(P(`-${n}`),t))},t}const[T,_]=Z("badge");const D=M(n({name:T,props:{dot:Boolean,max:$,tag:j("div"),color:String,offset:Array,content:$,showZero:x,position:j("top-right")},setup(t,{slots:e}){const n=()=>{if(e.content)return!0;const{content:n,showZero:a}=t;return i(n)&&""!==n&&(a||0!==n&&"0"!==n)},s=()=>{const{dot:a,max:o,content:s}=t;if(!a&&n())return e.content?e.content():i(o)&&p(s)&&+s>o?`${o}+`:s},r=a((()=>{const n={background:t.color};if(t.offset){const[a,o]=t.offset;e.default?(n.top=w(o),n.right="number"==typeof a?w(-a):a.startsWith("-")?a.replace("-",""):`-${a}`):(n.marginTop=w(o),n.marginLeft=w(a))}return n})),l=()=>{if(n()||t.dot)return o("div",{class:_([t.position,{dot:t.dot,fixed:!!e.default}]),style:r.value},[s()])};return()=>{if(e.default){const{tag:n}=t;return o(n,{class:_("wrapper")},{default:()=>[e.default(),l()]})}return l()}}}));let R=2e3;const U=()=>++R,[W,q]=Z("config-provider"),F=Symbol(W);n({name:W,props:{tag:j("div"),zIndex:Number,themeVars:Object,iconPrefix:String},setup(t,{slots:e}){const n=a((()=>{if(t.themeVars)return function(t){const e={};return Object.keys(t).forEach((n=>{var a;e[`--van-${a=n,a.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,"")}`]=t[n]})),e}(t.themeVars)}));return s(F,t),r((()=>{var e;void 0!==t.zIndex&&(e=t.zIndex,R=e)})),()=>o(t.tag,{class:q(),style:n.value},{default:()=>{var t;return[null==(t=e.default)?void 0:t.call(e)]}})}});const[G,H]=Z("icon");const J=M(n({name:G,props:{dot:Boolean,tag:j("i"),name:String,size:$,badge:$,color:String,badgeProps:Object,classPrefix:String},setup(t,{slots:e}){const n=l(F,null),s=a((()=>t.classPrefix||(null==n?void 0:n.iconPrefix)||H()));return()=>{const{tag:n,dot:a,name:r,size:l,badge:i,color:u}=t,d=(t=>null==t?void 0:t.includes("/"))(r);return o(D,c({dot:a,tag:n,class:[s.value,d?"":`${s.value}-${r}`],style:{color:u,fontSize:w(l)},content:i},t.badgeProps),{default:()=>{var t;return[null==(t=e.default)?void 0:t.call(e),d&&o("img",{class:H("image"),src:r},null)]}})}}}));export{D as B,J as I,A as a,j as b,Z as c,g as d,v as e,U as f,S as g,f as h,i,m as j,d as k,C as m,$ as n,x as t,h as u,M as w};
