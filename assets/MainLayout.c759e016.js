import{u as ft,a as vt,T as mt,Q as He,b as Se,C as De}from"./ClosePopup.e625127c.js";import{bY as ht,bZ as Qe,b_ as gt,b$ as bt,c0 as yt,c1 as X,ao as Ce,c2 as A,c3 as ne,n as h,Y as i,b7 as _,ay as Ee,c4 as wt,ak as S,ah as se,aC as Fe,av as Pe,be as re,c5 as ze,c6 as Ue,aK as Ne,c7 as _t,c8 as pt,r as te,aG as xt,c9 as kt,a9 as ue,aI as W,Z as pe,bc as w,a6 as H,H as qe,ca as x,$ as Y,a7 as n,cb as F,cc as Ke,a0 as P,A as R,cd as ge,M as Te,ce as G,cf as Oe,cg as St,ch as be,bE as ae,ci as Ct,cj as qt,ck as Tt,cl as je,cm as Ae,cn as $t,aQ as Lt,co as Vt,aO as Bt,_ as Me,cp as Qt,cq as Pt}from"./index.a7873fdf.js";import{Q as xe}from"./QResizeObserver.01edb41a.js";import{Q as oe}from"./QImg.fa57cf12.js";import{u as zt,a as Ot,b as At,c as Mt,d as It,e as le,f as Rt,g as ye,Q as ke,h as Ge,i as Wt,j as Ye,k as Ht,l as Dt,m as Et,n as Ft,o as Ut,p as Ie,q as Nt}from"./use-checkbox.575c4f80.js";import{u as Kt,a as jt}from"./use-dark.63606109.js";import{T as we,Q as Gt}from"./QScrollObserver.d99446ef.js";/* empty css                       */import{Q as Z}from"./QCardSection.58e15823.js";import{Q as Ze}from"./QCard.7e337558.js";import{h as Yt}from"./handle_confirmation.ee149452.js";const Re=ht([Qe("instruction"),ft("amount"),Qe("decimals")]);function Zt(e,b,s,c,o,l,v=[],p=yt){const d=vt([{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:b,isSigner:!1,isWritable:!1},{pubkey:s,isSigner:!1,isWritable:!0}],c,v),u=gt.Buffer.alloc(Re.span);return Re.encode({instruction:mt.TransferChecked,amount:BigInt(o),decimals:l},u),new bt({keys:d,programId:p,data:u})}var Xt=X({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:b,emit:s}){const{proxy:{$q:c}}=se(),o=Ce(ne,A);if(o===A)return console.error("QHeader needs to be child of QLayout"),A;const l=h(parseInt(e.heightHint,10)),v=h(!0),p=i(()=>e.reveal===!0||o.view.value.indexOf("H")>-1||c.platform.is.ios&&o.isContainer.value===!0),d=i(()=>{if(e.modelValue!==!0)return 0;if(p.value===!0)return v.value===!0?l.value:0;const r=l.value-o.scroll.value.position;return r>0?r:0}),u=i(()=>e.modelValue!==!0||p.value===!0&&v.value!==!0),a=i(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),B=i(()=>"q-header q-layout__section--marginal "+(p.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),Q=i(()=>{const r=o.rows.value.top,T={};return r[0]==="l"&&o.left.space===!0&&(T[c.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),r[2]==="r"&&o.right.space===!0&&(T[c.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),T});function C(r,T){o.update("header",r,T)}function y(r,T){r.value!==T&&(r.value=T)}function z({height:r}){y(l,r),C("size",r)}function q(r){a.value===!0&&y(v,!0),s("focusin",r)}_(()=>e.modelValue,r=>{C("space",r),y(v,!0),o.animate()}),_(d,r=>{C("offset",r)}),_(()=>e.reveal,r=>{r===!1&&y(v,e.modelValue)}),_(v,r=>{o.animate(),s("reveal",r)}),_(o.scroll,r=>{e.reveal===!0&&y(v,r.direction==="up"||r.position<=e.revealOffset||r.position-r.inflectionPoint<100)});const g={};return o.instances.header=g,e.modelValue===!0&&C("size",l.value),C("space",e.modelValue),C("offset",d.value),Ee(()=>{o.instances.header===g&&(o.instances.header=void 0,C("size",0),C("offset",0),C("space",!1))}),()=>{const r=wt(b.default,[]);return e.elevated===!0&&r.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(S(xe,{debounce:0,onResize:z})),S("header",{class:B.value,style:Q.value,onFocusin:q},r)}}});const We=150;var Jt=X({name:"QDrawer",inheritAttrs:!1,props:{...zt,...Kt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ot,"onLayout","miniState"],setup(e,{slots:b,emit:s,attrs:c}){const o=se(),{proxy:{$q:l}}=o,v=jt(e,l),{preventBodyScroll:p}=Rt(),{registerTimeout:d,removeTimeout:u}=At(),a=Ce(ne,A);if(a===A)return console.error("QDrawer needs to be child of QLayout"),A;let B,Q=null,C;const y=h(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),z=i(()=>e.mini===!0&&y.value!==!0),q=i(()=>z.value===!0?e.miniWidth:e.width),g=h(e.showIfAbove===!0&&y.value===!1?!0:e.modelValue===!0),r=i(()=>e.persistent!==!0&&(y.value===!0||Xe.value===!0));function T(t,f){if(D(),t!==!1&&a.animate(),V(0),y.value===!0){const $=a.instances[J.value];$!==void 0&&$.belowBreakpoint===!0&&$.hide(!1),M(1),a.isContainer.value!==!0&&p(!0)}else M(0),t!==!1&&ve(!1);d(()=>{t!==!1&&ve(!0),f!==!0&&s("show",t)},We)}function m(t,f){K(),t!==!1&&a.animate(),M(0),V(U.value*q.value),me(),f!==!0?d(()=>{s("hide",t)},We):u()}const{show:k,hide:L}=Mt({showing:g,hideOnRouteChange:r,handleShow:T,handleHide:m}),{addToHistory:D,removeFromHistory:K}=It(g,L,r),E={belowBreakpoint:y,hide:L},O=i(()=>e.side==="right"),U=i(()=>(l.lang.rtl===!0?-1:1)*(O.value===!0?1:-1)),$e=h(0),N=h(!1),ie=h(!1),Le=h(q.value*U.value),J=i(()=>O.value===!0?"left":"right"),ce=i(()=>g.value===!0&&y.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:q.value:0),de=i(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(O.value?"R":"L")>-1||l.platform.is.ios===!0&&a.isContainer.value===!0),j=i(()=>e.overlay===!1&&g.value===!0&&y.value===!1),Xe=i(()=>e.overlay===!0&&g.value===!0&&y.value===!1),Je=i(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&N.value===!1?" hidden":"")),et=i(()=>({backgroundColor:`rgba(0,0,0,${$e.value*.4})`})),Ve=i(()=>O.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),tt=i(()=>O.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),at=i(()=>{const t={};return a.header.space===!0&&Ve.value===!1&&(de.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&tt.value===!1&&(de.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),lt=i(()=>{const t={width:`${q.value}px`,transform:`translateX(${Le.value}px)`};return y.value===!0?t:Object.assign(t,at.value)}),ot=i(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),nt=i(()=>`q-drawer q-drawer--${e.side}`+(ie.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(v.value===!0?" q-drawer--dark q-dark":"")+(N.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(y.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${z.value===!0?"mini":"standard"}`+(de.value===!0||j.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Ve.value===!0?" q-drawer--top-padding":""))),st=i(()=>{const t=l.lang.rtl===!0?e.side:J.value;return[[we,ct,void 0,{[t]:!0,mouse:!0}]]}),rt=i(()=>{const t=l.lang.rtl===!0?J.value:e.side;return[[we,Be,void 0,{[t]:!0,mouse:!0}]]}),ut=i(()=>{const t=l.lang.rtl===!0?J.value:e.side;return[[we,Be,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function fe(){dt(y,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}_(y,t=>{t===!0?(B=g.value,g.value===!0&&L(!1)):e.overlay===!1&&e.behavior!=="mobile"&&B!==!1&&(g.value===!0?(V(0),M(0),me()):k(!1))}),_(()=>e.side,(t,f)=>{a.instances[f]===E&&(a.instances[f]=void 0,a[f].space=!1,a[f].offset=0),a.instances[t]=E,a[t].size=q.value,a[t].space=j.value,a[t].offset=ce.value}),_(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&fe()}),_(()=>e.behavior+e.breakpoint,fe),_(a.isContainer,t=>{g.value===!0&&p(t!==!0),t===!0&&fe()}),_(a.scrollbarWidth,()=>{V(g.value===!0?0:void 0)}),_(ce,t=>{I("offset",t)}),_(j,t=>{s("onLayout",t),I("space",t)}),_(O,()=>{V()}),_(q,t=>{V(),he(e.miniToOverlay,t)}),_(()=>e.miniToOverlay,t=>{he(t,q.value)}),_(()=>l.lang.rtl,()=>{V()}),_(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(it(),a.animate())}),_(z,t=>{s("miniState",t)});function V(t){t===void 0?Pe(()=>{t=g.value===!0?0:q.value,V(U.value*t)}):(a.isContainer.value===!0&&O.value===!0&&(y.value===!0||Math.abs(t)===q.value)&&(t+=U.value*a.scrollbarWidth.value),Le.value=t)}function M(t){$e.value=t}function ve(t){const f=t===!0?"remove":a.isContainer.value!==!0?"add":"";f!==""&&document.body.classList[f]("q-body--drawer-toggle")}function it(){Q!==null&&clearTimeout(Q),o.proxy&&o.proxy.$el&&o.proxy.$el.classList.add("q-drawer--mini-animate"),ie.value=!0,Q=setTimeout(()=>{Q=null,ie.value=!1,o&&o.proxy&&o.proxy.$el&&o.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ct(t){if(g.value!==!1)return;const f=q.value,$=le(t.distance.x,0,f);if(t.isFinal===!0){$>=Math.min(75,f)===!0?k():(a.animate(),M(0),V(U.value*f)),N.value=!1;return}V((l.lang.rtl===!0?O.value!==!0:O.value)?Math.max(f-$,0):Math.min(0,$-f)),M(le($/f,0,1)),t.isFirst===!0&&(N.value=!0)}function Be(t){if(g.value!==!0)return;const f=q.value,$=t.direction===e.side,ee=(l.lang.rtl===!0?$!==!0:$)?le(t.distance.x,0,f):0;if(t.isFinal===!0){Math.abs(ee)<Math.min(75,f)===!0?(a.animate(),M(1),V(0)):L(),N.value=!1;return}V(U.value*ee),M(le(1-ee/f,0,1)),t.isFirst===!0&&(N.value=!0)}function me(){p(!1),ve(!0)}function I(t,f){a.update(e.side,t,f)}function dt(t,f){t.value!==f&&(t.value=f)}function he(t,f){I("size",t===!0?e.miniWidth:f)}return a.instances[e.side]=E,he(e.miniToOverlay,q.value),I("space",j.value),I("offset",ce.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!0),Fe(()=>{s("onLayout",j.value),s("miniState",z.value),B=e.showIfAbove===!0;const t=()=>{(g.value===!0?T:m)(!1,!0)};if(a.totalWidth.value!==0){Pe(t);return}C=_(a.totalWidth,()=>{C(),C=void 0,g.value===!1&&e.showIfAbove===!0&&y.value===!1?k(!1):t()})}),Ee(()=>{C!==void 0&&C(),Q!==null&&(clearTimeout(Q),Q=null),g.value===!0&&me(),a.instances[e.side]===E&&(a.instances[e.side]=void 0,I("size",0),I("offset",0),I("space",!1))}),()=>{const t=[];y.value===!0&&(e.noSwipeOpen===!1&&t.push(re(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),st.value)),t.push(ze("div",{ref:"backdrop",class:Je.value,style:et.value,"aria-hidden":"true",onClick:L},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>ut.value)));const f=z.value===!0&&b.mini!==void 0,$=[S("div",{...c,key:""+f,class:[ot.value,c.class]},f===!0?b.mini():Ue(b.default))];return e.elevated===!0&&g.value===!0&&$.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(ze("aside",{ref:"content",class:nt.value,style:lt.value},$,"contentclose",e.noSwipeClose!==!0&&y.value===!0,()=>rt.value)),S("div",{class:"q-drawer-container"},t)}}}),ea=X({name:"QPageContainer",setup(e,{slots:b}){const{proxy:{$q:s}}=se(),c=Ce(ne,A);if(c===A)return console.error("QPageContainer needs to be child of QLayout"),A;Ne(_t,!0);const o=i(()=>{const l={};return c.header.space===!0&&(l.paddingTop=`${c.header.size}px`),c.right.space===!0&&(l[`padding${s.lang.rtl===!0?"Left":"Right"}`]=`${c.right.size}px`),c.footer.space===!0&&(l.paddingBottom=`${c.footer.size}px`),c.left.space===!0&&(l[`padding${s.lang.rtl===!0?"Right":"Left"}`]=`${c.left.size}px`),l});return()=>S("div",{class:"q-page-container",style:o.value},Ue(b.default))}}),ta=X({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:b,emit:s}){const{proxy:{$q:c}}=se(),o=h(null),l=h(c.screen.height),v=h(e.container===!0?0:c.screen.width),p=h({position:0,direction:"down",inflectionPoint:0}),d=h(0),u=h(pt.value===!0?0:ye()),a=i(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),B=i(()=>e.container===!1?{minHeight:c.screen.height+"px"}:null),Q=i(()=>u.value!==0?{[c.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),C=i(()=>u.value!==0?{[c.lang.rtl===!0?"right":"left"]:0,[c.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function y(m){if(e.container===!0||document.qScrollPrevented!==!0){const k={position:m.position.top,direction:m.direction,directionChanged:m.directionChanged,inflectionPoint:m.inflectionPoint.top,delta:m.delta.top};p.value=k,e.onScroll!==void 0&&s("scroll",k)}}function z(m){const{height:k,width:L}=m;let D=!1;l.value!==k&&(D=!0,l.value=k,e.onScrollHeight!==void 0&&s("scrollHeight",k),g()),v.value!==L&&(D=!0,v.value=L),D===!0&&e.onResize!==void 0&&s("resize",m)}function q({height:m}){d.value!==m&&(d.value=m,g())}function g(){if(e.container===!0){const m=l.value>d.value?ye():0;u.value!==m&&(u.value=m)}}let r=null;const T={instances:{},view:i(()=>e.view),isContainer:i(()=>e.container),rootRef:o,height:l,containerHeight:d,scrollbarWidth:u,totalWidth:i(()=>v.value+u.value),rows:i(()=>{const m=e.view.toLowerCase().split(" ");return{top:m[0].split(""),middle:m[1].split(""),bottom:m[2].split("")}}),header:te({size:0,offset:0,space:!1}),right:te({size:300,offset:0,space:!1}),footer:te({size:0,offset:0,space:!1}),left:te({size:300,offset:0,space:!1}),scroll:p,animate(){r!==null?clearTimeout(r):document.body.classList.add("q-body--layout-animate"),r=setTimeout(()=>{r=null,document.body.classList.remove("q-body--layout-animate")},155)},update(m,k,L){T[m][k]=L}};if(Ne(ne,T),ye()>0){let L=function(){m=null,k.classList.remove("hide-scrollbar")},D=function(){if(m===null){if(k.scrollHeight>c.screen.height)return;k.classList.add("hide-scrollbar")}else clearTimeout(m);m=setTimeout(L,300)},K=function(E){m!==null&&E==="remove"&&(clearTimeout(m),L()),window[`${E}EventListener`]("resize",D)},m=null;const k=document.body;_(()=>e.container!==!0?"add":"remove",K),e.container!==!0&&K("add"),xt(()=>{K("remove")})}return()=>{const m=kt(b.default,[S(Gt,{onScroll:y}),S(xe,{onResize:z})]),k=S("div",{class:a.value,style:B.value,ref:e.container===!0?void 0:o,tabindex:-1},m);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:o},[S(xe,{onResize:q}),S("div",{class:"absolute-full",style:Q.value},[S("div",{class:"scroll",style:C.value},[k])])]):k}}});const aa=ue({__name:"TpsElement",setup(e){const b=h(),s=h(0),c=async function(){b.value=await x().connection.getRecentPerformanceSamples(1),s.value=o(b.value),setTimeout(c,1e4)};c();function o(l){return l[0].numTransactions/l[0].samplePeriodSecs}return(l,v)=>(W(),pe(ke,{color:"secondary",class:"q-mx-sm"},{default:w(()=>[H("TPS: "+qe(s.value.toFixed(0)),1)]),_:1}))}}),la=P("span",{class:"text-weight-bold"},"RogueMarket",-1),oa=P("br",null,null,-1),na=P("br",null,null,-1),sa=P("br",null,null,-1),ra={class:"row"},ua={class:"text-center text-grey-6"},ia=ue({__name:"BuyACoffee",setup(e){const b=h(!1),s=h("ATLAS"),c=h(["ATLAS","POLIS","SOL"]),o=h(0),l=h(!1);async function v(){var d;if(l.value=!0,!G().publicKey.value){Oe.create({color:"yellow",textColor:"black",message:"Wallet not connected!"});return}const p=new St;switch((d=be.find(u=>u.symbol==s.value))==null?void 0:d.type){case Ct.SOL:p.add(qt.transfer({fromPubkey:G().publicKey.value,toPubkey:new ae(ge),lamports:o.value*Tt}));break;default:const u=(await x().connection.getParsedTokenAccountsByOwner(G().publicKey.value,{mint:new ae(be.find(B=>B.symbol==s.value).mint)})).value[0],a=(await x().connection.getParsedTokenAccountsByOwner(ge,{mint:new ae(be.find(B=>B.symbol==s.value).mint)})).value[0];console.log(u),console.log(a),p.add(Zt(u.pubkey,new ae(u.account.data.parsed.info.mint.toString()),a.pubkey,G().publicKey.value,BigInt(o.value*Math.pow(10,u.account.data.parsed.info.tokenAmount.decimals)),u.account.data.parsed.info.tokenAmount.decimals));break}try{const u=await G().sendTransaction(p,x().connection);await Yt(u)}catch(u){Oe.create({color:"red",message:`${u}`,timeout:5e3})}l.value=!1}return(p,d)=>(W(),Y(Te,null,[n(F,{flat:"",square:"",icon:"fa-solid fa-mug-hot",label:"Buy a Coffee",onClick:d[0]||(d[0]=u=>b.value=!0)}),n(Ye,{modelValue:b.value,"onUpdate:modelValue":d[4]||(d[4]=u=>b.value=u)},{default:w(()=>[n(Ze,{flat:"",class:"q-pa-sm"},{default:w(()=>[n(He,null,{default:w(()=>[n(Ke,{size:"xl"},{default:w(()=>[n(oe,{src:"rm_logo.png"})]),_:1}),n(Se,null,{default:w(()=>[la,H(" Donation ")]),_:1}),re(n(F,{flat:"",round:"",dense:"",icon:"close"},null,512),[[De]])]),_:1}),n(Z,{class:"text-subtitle1"},{default:w(()=>[H(" Hey mate! "),oa,H("Love the experience on RogueMarket? "),na,H(" Help us keep it that way! "),sa,H(" Your support ensures everyone can trade freely. \u2764\uFE0F ")]),_:1}),n(Z,null,{default:w(()=>[P("div",ra,[n(Ge,{filled:"",class:"col",square:"",modelValue:s.value,"onUpdate:modelValue":d[1]||(d[1]=u=>s.value=u),options:c.value,label:"Currency"},null,8,["modelValue","options"]),n(Wt,{filled:"",square:"",class:"col",label:"Amount",type:"number",modelValue:o.value,"onUpdate:modelValue":d[2]||(d[2]=u=>o.value=u)},null,8,["modelValue"]),n(F,{disable:o.value<=0,square:"",color:"primary",icon:"send",onClick:d[3]||(d[3]=u=>v())},null,8,["disable"])])]),_:1}),n(Z,{class:"col items-center"},{default:w(()=>[P("div",ua,qe(R(ge).toString()),1)]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}});var _e=X({name:"QToggle",props:{...Ht,icon:String,iconColor:String},emits:Dt,setup(e){function b(s,c){const o=i(()=>(s.value===!0?e.checkedIcon:c.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),l=i(()=>s.value===!0?e.iconColor:null);return()=>[S("div",{class:"q-toggle__track"}),S("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},o.value!==void 0?[S(je,{name:o.value,color:l.value})]:void 0)]}return Et("toggle",b)}});const ca=P("img",{src:"logo.png"},null,-1),da=P("span",{class:"text-weight-bold"},"RogueMarket",-1),fa=ue({__name:"SettingsButton",setup(e){const b=h(!1);h("ATLAS"),h(["ATLAS","POLIS","SOL"]);const s=h(x().rpc_selected.name),c=h(Ae.map(o=>o.name));return _(()=>s.value,()=>{x().rpc_selected=Ae.find(o=>o.name==s.value),x().connection=new $t(x().rpc_selected.url)}),(o,l)=>(W(),Y(Te,null,[n(F,{flat:"",square:"",icon:"fa-solid fa-sliders",onClick:l[0]||(l[0]=v=>b.value=!0)}),n(Ye,{modelValue:b.value,"onUpdate:modelValue":l[5]||(l[5]=v=>b.value=v)},{default:w(()=>[n(Ze,{flat:"",class:"q-pa-sm"},{default:w(()=>[n(He,null,{default:w(()=>[n(Ke,null,{default:w(()=>[ca]),_:1}),n(Se,null,{default:w(()=>[da,H(" Settings")]),_:1}),re(n(F,{flat:"",round:"",dense:"",icon:"close"},null,512),[[De]])]),_:1}),n(Z,{class:"text-subtitle1"},{default:w(()=>[n(_e,{class:"full-width",label:"Enable grid-orders [beta]",modelValue:R(x)().settings.enable_grid_orders,"onUpdate:modelValue":l[1]||(l[1]=v=>R(x)().settings.enable_grid_orders=v)},null,8,["modelValue"]),n(_e,{class:"full-width",label:"Always show drawer",modelValue:R(x)().settings.always_show_drawer,"onUpdate:modelValue":l[2]||(l[2]=v=>R(x)().settings.always_show_drawer=v)},null,8,["modelValue"]),n(_e,{class:"full-width",label:"Load TradingView Chart",modelValue:R(x)().settings.enable_tv_chart,"onUpdate:modelValue":l[3]||(l[3]=v=>R(x)().settings.enable_tv_chart=v)},null,8,["modelValue"]),n(Ge,{filled:"",modelValue:s.value,"onUpdate:modelValue":l[4]||(l[4]=v=>s.value=v),options:c.value,label:"RPC"},null,8,["modelValue","options"])]),_:1}),n(Z)]),_:1})]),_:1},8,["modelValue"])],64))}}),va="2.0.0",ma={class:"row full-width items-center",style:{"padding-right":"0"}},ha={class:"row items-center justify-center q-gutter-y-xs"},ga={class:"col absolute-bottom items-center justify-center row q-mb-sm q-gutter-y-sm"},ba={key:0,class:"text-weight-thin text-body2"},ya={key:0,class:"absolute-full flex flex-center"},Ba=ue({__name:"MainLayout",setup(e){const b=i(()=>[{icon:"fa-solid fa-house",text:"Home",to:"/"},{icon:"fa-solid fa-arrow-trend-up",text:"Market-UI",to:"/market/"+Qt().selected_symbol},{icon:"fa-solid fa-table",text:"Market-Table",to:"/table"},{icon:"fa-solid fa-wallet",text:"Wallet",to:"/wallet"},{icon:"fa-solid fa-compass",text:"Explorer",to:"/explorer"},{icon:"fa-solid fa-circle-info",text:"About",to:"/about"}]),s=h(),c=h(va),o=h(!0),l=h(!x().settings.always_show_drawer);function v(){x().settings.always_show_drawer||(l.value=!l.value)}return _(()=>x().settings.always_show_drawer,()=>{x().settings.always_show_drawer?l.value=!1:l.value=!0}),Fe(async()=>{const p=await x().connection.getSlot(),d=await x().api_client.cursor.getCursor();s.value=d[0].block_num/p}),(p,d)=>{const u=Lt("router-view");return W(),pe(ta,{view:"lHh Lpr lff",class:"bg-image-dark"},{default:w(()=>[n(Xt,{class:"row q-pa-xs"},{default:w(()=>[P("div",ma,[n(Se,{class:"row items-center"}),n(aa),n(ia),n(F,{flat:"",icon:"fa-brands fa-discord",target:"_blank",href:"https://discord.gg/m6e5UfwCjM"}),n(F,{flat:"",icon:"fa-brands fa-github",target:"_blank",href:"https://github.com/skullnbonesdao/market.skullnbones.xyz"}),n(fa),n(R(Vt),{dark:""})])]),_:1}),n(Jt,{"show-if-above":"",modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=a=>o.value=a),mini:l.value,onMouseover:d[1]||(d[1]=a=>v()),onMouseout:d[2]||(d[2]=a=>v()),width:200,bordered:"",breakpoint:500,class:"q-gutter-y-md"},{default:w(()=>[P("div",ha,[n(oe,{width:"100px",fit:"cover",src:"rm_logo.png"}),n(oe,{class:"q-mx-xs",width:"100px",fit:"contain",src:"sa-powered_by_the_people.png"})]),n(Ft,{padding:""},{default:w(()=>[(W(!0),Y(Te,null,Bt(b.value,a=>re((W(),pe(Ut,{to:a.to,key:a.text,clickable:"","show-if-above":""},{default:w(()=>[n(Ie,{avatar:""},{default:w(()=>[n(je,{size:"sm",name:a.icon},null,8,["name"])]),_:2},1024),n(Ie,null,{default:w(()=>[H(qe(a.text),1)]),_:2},1024)]),_:2},1032,["to"])),[[Pt]])),128))]),_:1}),P("div",ga,[l.value?Me("",!0):(W(),Y("div",ba," Driven by ")),n(oe,{src:"streamingfast.png"}),n(Nt,{value:s.value,size:l.value?"":"25px"},{default:w(()=>[l.value?Me("",!0):(W(),Y("div",ya,[n(ke,{label:(s.value*100).toFixed(2)+"%"},null,8,["label"])]))]),_:1},8,["value","size"]),n(ke,{class:"",label:c.value},null,8,["label"])])]),_:1},8,["modelValue","mini"]),n(ea,null,{default:w(()=>[n(u)]),_:1})]),_:1})}}});export{Ba as default};
