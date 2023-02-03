import{n as a,t as e,u as o,c as t,e as s,g as n,i,w as l,b as r,f as c,I as d}from"./index-9049bcee.js";import{e as u,f as v,w as p,r as f,d as m,g as x,T as w,h,v as y,c as b,o as k,b as I,z as g,J as O,F as z,n as C,C as L,i as S,j,l as B,p as A,k as P,K as _,t as V,y as E,q as R,s as D,_ as T}from"./index-a2c9be68.js";import{e as X,h as q,b as H,P as $}from"./on-popup-reopen-ff3749db.js";import{u as F,p as K,a as N}from"./use-touch-2d4a93cc.js";import{c as J}from"./interceptor-caed257a.js";import{H as U}from"./constant-999c8888.js";const Y={show:Boolean,zIndex:a,overlay:e,duration:a,teleport:[String,Object],lockScroll:e,lazyRender:e,beforeClose:Function,overlayStyle:Object,overlayClass:o,transitionAppear:Boolean,closeOnClickOverlay:e};let G=0;const M="van-overflow-hidden";function Q(a){const e=f(!1);return p(a,(a=>{a&&(e.value=a)}),{immediate:!0}),a=>()=>e.value?a():null}const[W,Z]=t("overlay");const aa=l(m({name:W,props:{show:Boolean,zIndex:a,duration:a,className:o,lockScroll:e,lazyRender:e,customStyle:Object},setup(a,{slots:e}){const o=f(),t=Q((()=>a.show||!a.lazyRender))((()=>{var t;const l=s(n(a.zIndex),a.customStyle);return i(a.duration)&&(l.animationDuration=`${a.duration}s`),h(x("div",{ref:o,style:l,class:[Z(),a.className]},[null==(t=e.default)?void 0:t.call(e)]),[[y,a.show]])}));return H("touchmove",(e=>{a.lockScroll&&K(e,!0)}),{target:o}),()=>x(w,{name:"van-fade",appear:!0},{default:t})}})),ea=s({},Y,{round:Boolean,position:r("center"),closeIcon:r("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:r("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[oa,ta]=t("popup");const sa=l(m({name:oa,inheritAttrs:!1,props:ea,emits:["open","close","opened","closed","keydown","update:show","click-overlay","click-close-icon"],setup(a,{emit:e,attrs:o,slots:t}){let s,n;const l=f(),r=f(),m=Q((()=>a.show||!a.lazyRender)),S=b((()=>{const e={zIndex:l.value};if(i(a.duration)){e["center"===a.position?"animationDuration":"transitionDuration"]=`${a.duration}s`}return e})),j=()=>{s||(s=!0,l.value=void 0!==a.zIndex?+a.zIndex:c(),e("open"))},B=()=>{s&&J(a.beforeClose,{done(){s=!1,e("close"),e("update:show",!1)}})},A=o=>{e("click-overlay",o),a.closeOnClickOverlay&&B()},P=()=>{if(a.overlay)return x(aa,{show:a.show,class:a.overlayClass,zIndex:l.value,duration:a.duration,customStyle:a.overlayStyle,role:a.closeOnClickOverlay?"button":void 0,tabindex:a.closeOnClickOverlay?0:void 0,onClick:A},{default:t["overlay-content"]})},_=a=>{e("click-close-icon",a),B()},V=()=>{if(a.closeable)return x(d,{role:"button",tabindex:0,name:a.closeIcon,class:[ta("close-icon",a.closeIconPosition),U],classPrefix:a.iconPrefix,onClick:_},null)},E=()=>e("opened"),R=()=>e("closed"),D=a=>e("keydown",a),T=m((()=>{var e;const{round:s,position:n,safeAreaInsetTop:i,safeAreaInsetBottom:l}=a;return h(x("div",L({ref:r,style:S.value,role:"dialog",tabindex:0,class:[ta({round:s,[n]:n}),{"van-safe-area-top":i,"van-safe-area-bottom":l}],onKeydown:D},o),[null==(e=t.default)?void 0:e.call(t),V()]),[[y,a.show]])})),Y=()=>{const{position:e,transition:o,transitionAppear:t}=a;return x(w,{name:o||("center"===e?"van-fade":`van-popup-slide-${e}`),appear:t,onAfterEnter:E,onAfterLeave:R},{default:T})};return p((()=>a.show),(a=>{a&&!s&&(j(),0===o.tabindex&&C((()=>{var a;null==(a=r.value)||a.focus()}))),!a&&s&&(s=!1,e("close"))})),N({popupRef:r}),function(a,e){const o=F(),t=e=>{o.move(e);const t=o.deltaY.value>0?"10":"01",s=q(e.target,a.value),{scrollHeight:n,offsetHeight:i,scrollTop:l}=s;let r="11";0===l?r=i>=n?"00":"01":l+i>=n&&(r="10"),"11"===r||!o.isVertical()||parseInt(r,2)&parseInt(t,2)||K(e,!0)},s=()=>{document.addEventListener("touchstart",o.start),document.addEventListener("touchmove",t,{passive:!1}),G||document.body.classList.add(M),G++},n=()=>{G&&(document.removeEventListener("touchstart",o.start),document.removeEventListener("touchmove",t),G--,G||document.body.classList.remove(M))},i=()=>e()&&n();X((()=>e()&&s())),u(i),v(i),p(e,(a=>{a?s():n()}))}(r,(()=>a.show&&a.lockScroll)),H("popstate",(()=>{a.closeOnPopstate&&(B(),n=!1)})),k((()=>{a.show&&j()})),I((()=>{n&&(e("update:show",!0),n=!1)})),u((()=>{a.show&&a.teleport&&(B(),n=!0)})),g($,(()=>a.show)),()=>a.teleport?x(O,{to:a.teleport},{default:()=>[P(),Y()]}):x(z,null,[P(),Y()])}})),na=a=>(R("data-v-1e79ffa8"),a=a(),D(),a),ia={class:"my-personalInformation-box"},la=_('<div class="avatar-information" data-v-1e79ffa8><div class="avatar-information-icon" data-v-1e79ffa8></div><div class="avatar-information-center" data-v-1e79ffa8><div class="avatar-information-name" data-v-1e79ffa8>XXXX</div><div class="avatar-information-test" data-v-1e79ffa8>wwwwwwwwwwwww</div></div></div>',1),ra={class:"list-information"},ca={class:"list-information-box-card"},da={class:"list-information-box-item"},ua={class:"item-text"},va=na((()=>B("div",null,null,-1))),pa={class:"list-information-box-item item-interval"},fa={class:"item-text"},ma={class:"item-text-value"},xa=na((()=>B("div",{class:"item-text"},"访问地址",-1))),wa={class:"item-icon"},ha=na((()=>B("div",{class:"list-information-popup"},[B("div",{class:"list-information-popup-title"},"访问地址"),B("div",{class:"list-information-popup-icon"}),B("a",{class:"list-information-popup-link",href:""},"https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")],-1))),ya=T(m({__name:"index",setup(a){const e=f(!1),o=[{source:"微信",text:"账号",textValue:"xxxxxxxxx",accessLink:"ccccc"},{source:"qq",text:"账号",textValue:"xxxxxxxxx",accessLink:""},{source:"微博",text:"账号",textValue:"xxxxxxxxx",accessLink:"ccccc"},{source:"抖音",text:"账号",textValue:"xxxxxxxxx",accessLink:"ccccc"}];return(a,t)=>{const s=d,n=sa;return V(),S("div",ia,[j(" 头像信息 "),la,j(" 列表信息 "),B("div",ra,[(V(),S(z,null,A(o,(a=>B("div",{key:a.source,class:"list-information-box"},[B("div",ca,[B("div",da,[B("div",ua,E(a.source),1),va]),B("div",pa,[B("div",fa,E(a.text),1),B("div",ma,E(a.textValue),1)]),a.accessLink?(V(),S("div",{key:0,class:"list-information-box-item item-interval",onClick:t[0]||(t[0]=a=>{e.value=!0})},[xa,B("div",wa,[x(s,{name:"arrow"})])])):j("v-if",!0)])]))),64))]),j(" 弹出信息 "),x(n,{show:e.value,"onUpdate:show":t[1]||(t[1]=a=>e.value=a),position:"bottom",style:{height:"300px"}},{default:P((()=>[ha])),_:1},8,["show"])])}}}),[["__scopeId","data-v-1e79ffa8"],["__file","D:/代码仓库/王思雨/新建文件夹/wangsiyv/src/pages/personalInformation/index.vue"]]);export{ya as default};
