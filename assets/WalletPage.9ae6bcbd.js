import{Q as Z,a as se,b as Ke}from"./QSpace.cc1c2bf1.js";import{Q as Kt}from"./QPage.91f8ffd6.js";import{bZ as J,cr as Wt,bE as L,bY as ie,b_ as ue,b$ as ce,c0 as Y,de as We,df as $e,cj as we,a9 as K,aI as C,Z as M,bc as f,a7 as n,cl as tt,a0 as _,H as S,A as V,cb as D,n as k,Y as m,ay as Ot,cV as jt,d9 as Gt,db as _e,ak as q,c5 as Ht,ah as at,c1 as lt,b7 as X,cz as Yt,c6 as Zt,dg as Oe,$ as O,be as nt,M as Te,cg as he,ce as x,ca as G,cf as xe,cc as Xt,a6 as U,dh as ke,ck as Jt,cd as je,aC as Ce,cp as B,ch as z,ci as R,_ as j,D as st,aQ as ea,aO as ta,d1 as aa}from"./index.7b8c3ebc.js";import{d as ot,b as rt,a as $,C as oe,Q as it,c as la}from"./QTr.b463bd52.js";import{U as na,e as H,V as sa,W as oa,i as Se,j as ut,h as ra,Q as ia}from"./use-checkbox.20f6f05e.js";import{Q as ee}from"./QCard.1989531c.js";import{f as ua,A as qe}from"./format_address.e828904a.js";import{e as ct,u as Be,a as Le,T as Me,Q as dt,b as mt,C as vt}from"./ClosePopup.5000a0cf.js";import{T as ca,h as Ae}from"./handle_confirmation.cf5ba9a5.js";import{a as da,u as ma}from"./use-dark.b9101fba.js";import{Q as ft}from"./QCardSection.b0227917.js";import{_ as va}from"./plugin-vue_export-helper.21dcd24c.js";import"./QResizeObserver.18cca494.js";import"./QSeparator.99e3f41f.js";const fa=a=>{const s=J(a),{encode:r,decode:o}=ct(s),e=s;return e.decode=(l,v)=>!!o(l,v),e.encode=(l,v,d)=>{const i=Number(l);return r(i,v,d)},e},Ge=a=>{const s=Wt(32,a),{encode:r,decode:o}=ct(s),e=s;return e.decode=(l,v)=>{const d=o(l,v);return new L(d)},e.encode=(l,v,d)=>{const i=l.toBuffer();return r(i,v,d)},e};class ba extends Error{constructor(s){super(s)}}class pa extends ba{constructor(){super(...arguments),this.name="TokenOwnerOffCurveError"}}const He=ie([J("instruction"),Be("amount")]);function ya(a,s,r,o,e=[],l=Y){const v=Le([{pubkey:a,isSigner:!1,isWritable:!0},{pubkey:s,isSigner:!1,isWritable:!0}],r,e),d=ue.Buffer.alloc(He.span);return He.encode({instruction:Me.Burn,amount:BigInt(o)},d),new ce({keys:v,programId:l,data:d})}const Ye=ie([J("instruction")]);function Ze(a,s,r,o=[],e=Y){const l=Le([{pubkey:a,isSigner:!1,isWritable:!0},{pubkey:s,isSigner:!1,isWritable:!0}],r,o),v=ue.Buffer.alloc(Ye.span);return Ye.encode({instruction:Me.CloseAccount},v),new ce({keys:l,programId:e,data:v})}const _a=ie([We("mintAuthorityOption"),Ge("mintAuthority"),Be("supply"),J("decimals"),fa("isInitialized"),We("freezeAuthorityOption"),Ge("freezeAuthority")]);_a.span;async function re(a,s,r=!1,o=Y,e=$e){if(!r&&!L.isOnCurve(s.toBuffer()))throw new pa;const[l]=await L.findProgramAddress([s.toBuffer(),o.toBuffer(),a.toBuffer()],e);return l}function ka(a,s,r,o,e=Y,l=$e){return ga(a,s,r,o,ue.Buffer.alloc(0),e,l)}function ga(a,s,r,o,e,l=Y,v=$e){const d=[{pubkey:a,isSigner:!0,isWritable:!0},{pubkey:s,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:o,isSigner:!1,isWritable:!1},{pubkey:we.programId,isSigner:!1,isWritable:!1},{pubkey:l,isSigner:!1,isWritable:!1}];return new ce({keys:d,programId:v,data:e})}const Xe=ie([J("instruction"),Be("amount")]);function wa(a,s,r,o,e=[],l=Y){const v=Le([{pubkey:a,isSigner:!1,isWritable:!0},{pubkey:s,isSigner:!1,isWritable:!0}],r,e),d=ue.Buffer.alloc(Xe.span);return Xe.encode({instruction:Me.Transfer,amount:BigInt(o)},d),new ce({keys:v,programId:l,data:d})}const ge=K({__name:"SolscanLink",props:["address"],setup(a){return(s,r)=>(C(),M(D,{class:"full-width",square:"",color:"primary",size:"sm",icon:"link",target:"_blank",href:"https://solscan.io/account/"+a.address},{default:f(()=>[n(tt),_("div",null,S(V(ua)(a.address)),1)]),_:1},8,["href"]))}}),Je="q-slider__marker-labels",ha=a=>({value:a}),xa=({marker:a})=>q("div",{key:a.value,style:a.style,class:a.classes},a.label),bt=[34,37,40,33,39,38],Ca={...ma,...na,min:{type:Number,default:0},max:{type:Number,default:100},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:a=>a>=0},snap:Boolean,vertical:Boolean,reverse:Boolean,hideSelection:Boolean,color:String,markerLabelsClass:String,label:Boolean,labelColor:String,labelTextColor:String,labelAlways:Boolean,switchLabelSide:Boolean,markers:[Boolean,Number],markerLabels:[Boolean,Array,Object,Function],switchMarkerLabelsSide:Boolean,trackImg:String,trackColor:String,innerTrackImg:String,innerTrackColor:String,selectionColor:String,selectionImg:String,thumbSize:{type:String,default:"20px"},trackSize:{type:String,default:"4px"},disable:Boolean,readonly:Boolean,dense:Boolean,tabindex:[String,Number],thumbColor:String,thumbPath:{type:String,default:"M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"}},Sa=["pan","update:modelValue","change"];function Aa({updateValue:a,updatePosition:s,getDragging:r,formAttrs:o}){const{props:e,emit:l,slots:v,proxy:{$q:d}}=at(),i=da(e,d),b=sa(o),u=k(!1),c=k(!1),p=k(!1),h=k(!1),I=m(()=>e.vertical===!0?"--v":"--h"),de=m(()=>"-"+(e.switchLabelSide===!0?"switched":"standard")),P=m(()=>e.vertical===!0?e.reverse===!0:e.reverse!==(d.lang.rtl===!0)),N=m(()=>isNaN(e.innerMin)===!0||e.innerMin<e.min?e.min:e.innerMin),Q=m(()=>isNaN(e.innerMax)===!0||e.innerMax>e.max?e.max:e.innerMax),A=m(()=>e.disable!==!0&&e.readonly!==!0&&N.value<Q.value),F=m(()=>(String(e.step).trim().split(".")[1]||"").length),W=m(()=>e.step===0?1:e.step),pt=m(()=>A.value===!0?e.tabindex||0:-1),te=m(()=>e.max-e.min),Ve=m(()=>Q.value-N.value),ae=m(()=>ve(N.value)),me=m(()=>ve(Q.value)),le=m(()=>e.vertical===!0?P.value===!0?"bottom":"top":P.value===!0?"right":"left"),Ie=m(()=>e.vertical===!0?"height":"width"),yt=m(()=>e.vertical===!0?"width":"height"),De=m(()=>e.vertical===!0?"vertical":"horizontal"),_t=m(()=>{const t={role:"slider","aria-valuemin":N.value,"aria-valuemax":Q.value,"aria-orientation":De.value,"data-step":e.step};return e.disable===!0?t["aria-disabled"]="true":e.readonly===!0&&(t["aria-readonly"]="true"),t}),kt=m(()=>`q-slider q-slider${I.value} q-slider--${u.value===!0?"":"in"}active inline no-wrap `+(e.vertical===!0?"row":"column")+(e.disable===!0?" disabled":" q-slider--enabled"+(A.value===!0?" q-slider--editable":""))+(p.value==="both"?" q-slider--focus":"")+(e.label||e.labelAlways===!0?" q-slider--label":"")+(e.labelAlways===!0?" q-slider--label-always":"")+(i.value===!0?" q-slider--dark":"")+(e.dense===!0?" q-slider--dense q-slider--dense"+I.value:""));function ne(t){const y="q-slider__"+t;return`${y} ${y}${I.value} ${y}${I.value}${de.value}`}function ze(t){const y="q-slider__"+t;return`${y} ${y}${I.value}`}const gt=m(()=>{const t=e.selectionColor||e.color;return"q-slider__selection absolute"+(t!==void 0?` text-${t}`:"")}),wt=m(()=>ze("markers")+" absolute overflow-hidden"),ht=m(()=>ze("track-container")),xt=m(()=>ne("pin")),Ct=m(()=>ne("label")),St=m(()=>ne("text-container")),At=m(()=>ne("marker-labels-container")+(e.markerLabelsClass!==void 0?` ${e.markerLabelsClass}`:"")),$t=m(()=>"q-slider__track relative-position no-outline"+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),Tt=m(()=>{const t={[yt.value]:e.trackSize};return e.trackImg!==void 0&&(t.backgroundImage=`url(${e.trackImg}) !important`),t}),qt=m(()=>"q-slider__inner absolute"+(e.innerTrackColor!==void 0?` bg-${e.innerTrackColor}`:"")),Fe=m(()=>{const t=me.value-ae.value,y={[le.value]:`${100*ae.value}%`,[Ie.value]:t===0?"2px":`${100*t}%`};return e.innerTrackImg!==void 0&&(y.backgroundImage=`url(${e.innerTrackImg}) !important`),y});function Bt(t){const{min:y,max:g,step:w}=e;let T=y+t*(g-y);if(w>0){const E=(T-y)%w;T+=(Math.abs(E)>=w/2?(E<0?-1:1)*w:0)-E}return F.value>0&&(T=parseFloat(T.toFixed(F.value))),H(T,N.value,Q.value)}function ve(t){return te.value===0?0:(t-e.min)/te.value}function Lt(t,y){const g=jt(t),w=e.vertical===!0?H((g.top-y.top)/y.height,0,1):H((g.left-y.left)/y.width,0,1);return H(P.value===!0?1-w:w,ae.value,me.value)}const Pe=m(()=>Gt(e.markers)===!0?e.markers:W.value),Ne=m(()=>{const t=[],y=Pe.value,g=e.max;let w=e.min;do t.push(w),w+=y;while(w<g);return t.push(g),t}),Qe=m(()=>{const t=` ${Je}${I.value}-`;return Je+`${t}${e.switchMarkerLabelsSide===!0?"switched":"standard"}${t}${P.value===!0?"rtl":"ltr"}`}),fe=m(()=>e.markerLabels===!1?null:Vt(e.markerLabels).map((t,y)=>({index:y,value:t.value,label:t.label||t.value,classes:Qe.value+(t.classes!==void 0?" "+t.classes:""),style:{...Re(t.value),...t.style||{}}}))),Ee=m(()=>({markerList:fe.value,markerMap:It.value,classes:Qe.value,getStyle:Re})),Mt=m(()=>{const t=Ve.value===0?"2px":100*Pe.value/Ve.value;return{...Fe.value,backgroundSize:e.vertical===!0?`2px ${t}%`:`${t}% 2px`}});function Vt(t){if(t===!1)return null;if(t===!0)return Ne.value.map(ha);if(typeof t=="function")return Ne.value.map(g=>{const w=t(g);return _e(w)===!0?{...w,value:g}:{value:g,label:w}});const y=({value:g})=>g>=e.min&&g<=e.max;return Array.isArray(t)===!0?t.map(g=>_e(g)===!0?g:{value:g}).filter(y):Object.keys(t).map(g=>{const w=t[g],T=Number(g);return _e(w)===!0?{...w,value:T}:{value:T,label:w}}).filter(y)}function Re(t){return{[le.value]:`${100*(t-e.min)/te.value}%`}}const It=m(()=>{if(e.markerLabels===!1)return null;const t={};return fe.value.forEach(y=>{t[y.value]=y}),t});function Dt(){if(v["marker-label-group"]!==void 0)return v["marker-label-group"](Ee.value);const t=v["marker-label"]||xa;return fe.value.map(y=>t({marker:y,...Ee.value}))}const zt=m(()=>[[ca,Ft,void 0,{[De.value]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function Ft(t){t.isFinal===!0?(h.value!==void 0&&(s(t.evt),t.touch===!0&&a(!0),h.value=void 0,l("pan","end")),u.value=!1,p.value=!1):t.isFirst===!0?(h.value=r(t.evt),s(t.evt),a(),u.value=!0,l("pan","start")):(s(t.evt),a())}function Ue(){p.value=!1}function Pt(t){s(t,r(t)),a(),c.value=!0,u.value=!0,document.addEventListener("mouseup",be,!0)}function be(){c.value=!1,u.value=!1,a(!0),Ue(),document.removeEventListener("mouseup",be,!0)}function Nt(t){s(t,r(t)),a(!0)}function Qt(t){bt.includes(t.keyCode)&&a(!0)}function Et(t){if(e.vertical===!0)return null;const y=d.lang.rtl!==e.reverse?1-t:t;return{transform:`translateX(calc(${2*y-1} * ${e.thumbSize} / 2 + ${50-100*y}%))`}}function Rt(t){const y=m(()=>c.value===!1&&(p.value===t.focusValue||p.value==="both")?" q-slider--focus":""),g=m(()=>`q-slider__thumb q-slider__thumb${I.value} q-slider__thumb${I.value}-${P.value===!0?"rtl":"ltr"} absolute non-selectable`+y.value+(t.thumbColor.value!==void 0?` text-${t.thumbColor.value}`:"")),w=m(()=>({width:e.thumbSize,height:e.thumbSize,[le.value]:`${100*t.ratio.value}%`,zIndex:p.value===t.focusValue?2:void 0})),T=m(()=>t.labelColor.value!==void 0?` text-${t.labelColor.value}`:""),E=m(()=>Et(t.ratio.value)),pe=m(()=>"q-slider__text"+(t.labelTextColor.value!==void 0?` text-${t.labelTextColor.value}`:""));return()=>{const ye=[q("svg",{class:"q-slider__thumb-shape absolute-full",viewBox:"0 0 20 20","aria-hidden":"true"},[q("path",{d:e.thumbPath})]),q("div",{class:"q-slider__focus-ring fit"})];return(e.label===!0||e.labelAlways===!0)&&(ye.push(q("div",{class:xt.value+" absolute fit no-pointer-events"+T.value},[q("div",{class:Ct.value,style:{minWidth:e.thumbSize}},[q("div",{class:St.value,style:E.value},[q("span",{class:pe.value},t.label.value)])])])),e.name!==void 0&&e.disable!==!0&&b(ye,"push")),q("div",{class:g.value,style:w.value,...t.getNodeData()},ye)}}function Ut(t,y,g,w){const T=[];e.innerTrackColor!=="transparent"&&T.push(q("div",{key:"inner",class:qt.value,style:Fe.value})),e.selectionColor!=="transparent"&&T.push(q("div",{key:"selection",class:gt.value,style:t.value})),e.markers!==!1&&T.push(q("div",{key:"marker",class:wt.value,style:Mt.value})),w(T);const E=[Ht("div",{key:"trackC",class:ht.value,tabindex:y.value,...g.value},[q("div",{class:$t.value,style:Tt.value},T)],"slide",A.value,()=>zt.value)];if(e.markerLabels!==!1){const pe=e.switchMarkerLabelsSide===!0?"unshift":"push";E[pe](q("div",{key:"markerL",class:At.value},Dt()))}return E}return Ot(()=>{document.removeEventListener("mouseup",be,!0)}),{state:{active:u,focus:p,preventFocus:c,dragging:h,editable:A,classes:kt,tabindex:pt,attributes:_t,step:W,decimals:F,trackLen:te,innerMin:N,innerMinRatio:ae,innerMax:Q,innerMaxRatio:me,positionProp:le,sizeProp:Ie,isReversed:P},methods:{onActivate:Pt,onMobileClick:Nt,onBlur:Ue,onKeyup:Qt,getContent:Ut,getThumbRenderFn:Rt,convertRatioToModel:Bt,convertModelToRatio:ve,getDraggingRatio:Lt}}}const $a=()=>({});var Ta=lt({name:"QSlider",props:{...Ca,modelValue:{required:!0,default:null,validator:a=>typeof a=="number"||a===null},labelValue:[String,Number]},emits:Sa,setup(a,{emit:s}){const{proxy:{$q:r}}=at(),{state:o,methods:e}=Aa({updateValue:I,updatePosition:P,getDragging:de,formAttrs:oa(a)}),l=k(null),v=k(0),d=k(0);function i(){d.value=a.modelValue===null?o.innerMin.value:H(a.modelValue,o.innerMin.value,o.innerMax.value)}X(()=>`${a.modelValue}|${o.innerMin.value}|${o.innerMax.value}`,i),i();const b=m(()=>e.convertModelToRatio(d.value)),u=m(()=>o.active.value===!0?v.value:b.value),c=m(()=>{const A={[o.positionProp.value]:`${100*o.innerMinRatio.value}%`,[o.sizeProp.value]:`${100*(u.value-o.innerMinRatio.value)}%`};return a.selectionImg!==void 0&&(A.backgroundImage=`url(${a.selectionImg}) !important`),A}),p=e.getThumbRenderFn({focusValue:!0,getNodeData:$a,ratio:u,label:m(()=>a.labelValue!==void 0?a.labelValue:d.value),thumbColor:m(()=>a.thumbColor||a.color),labelColor:m(()=>a.labelColor),labelTextColor:m(()=>a.labelTextColor)}),h=m(()=>o.editable.value!==!0?{}:r.platform.is.mobile===!0?{onClick:e.onMobileClick}:{onMousedown:e.onActivate,onFocus:N,onBlur:e.onBlur,onKeydown:Q,onKeyup:e.onKeyup});function I(A){d.value!==a.modelValue&&s("update:modelValue",d.value),A===!0&&s("change",d.value)}function de(){return l.value.getBoundingClientRect()}function P(A,F=o.dragging.value){const W=e.getDraggingRatio(A,F);d.value=e.convertRatioToModel(W),v.value=a.snap!==!0||a.step===0?W:e.convertModelToRatio(d.value)}function N(){o.focus.value=!0}function Q(A){if(!bt.includes(A.keyCode))return;Yt(A);const F=([34,33].includes(A.keyCode)?10:1)*o.step.value,W=([34,37,40].includes(A.keyCode)?-1:1)*(o.isReversed.value===!0?-1:1)*(a.vertical===!0?-1:1)*F;d.value=H(parseFloat((d.value+W).toFixed(o.decimals.value)),o.innerMin.value,o.innerMax.value),I()}return()=>{const A=e.getContent(c,o.tabindex,h,F=>{F.push(p())});return q("div",{ref:l,class:o.classes.value+(a.modelValue===null?" q-slider--no-value":""),...o.attributes.value,"aria-valuenow":a.modelValue},A)}}}),qa=lt({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(a,{slots:s}){const r=m(()=>{const o=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(e=>a[e]===!0).map(e=>`q-btn-group--${e}`).join(" ");return`q-btn-group row no-wrap${o.length!==0?" "+o:""}`+(a.spread===!0?" q-btn-group--spread":" inline")});return()=>q("div",{class:r.value},Zt(s.default))}});const Ba=_("span",{class:"text-weight-bold"},"Send Token",-1),La={class:"text-body1"},Ma={class:"text-overline",style:{width:"500px"}},Va={class:"col"},Ia=K({__name:"SendTokenButton",props:["mint","decimals","amount","disabled","name"],setup(a){const s=k(!1),r=a,o=k(""),e=k(0),l=k(0);Oe(()=>l.value,()=>{e.value=parseFloat((l.value/10*r.amount).toFixed(r.decimals))}),Oe(()=>e.value,()=>{l.value=e.value/r.amount*100/10});async function v(){const d=new he,i=await re(new L(r.mint),new L(o.value));console.log(i);const b=await re(new L(r.mint),x().publicKey.value);await G().connection.getAccountInfo(i)===null&&d.add(ka(x().publicKey.value,i,new L(o.value),new L(r.mint))),d.add(wa(b,i,x().publicKey.value,e.value*Math.pow(10,r.decimals)));try{const c=await x().sendTransaction(d,G().connection);await Ae(c)}catch(c){xe.create({color:"red",message:`${c}`,timeout:5e3})}}return(d,i)=>(C(),O(Te,null,[n(D,{disable:a.disabled,square:"",color:"secondary",size:"sm",icon:"send",onClick:i[0]||(i[0]=b=>s.value=!0)},null,8,["disable"]),n(ut,{modelValue:s.value,"onUpdate:modelValue":i[5]||(i[5]=b=>s.value=b)},{default:f(()=>[n(ee,null,{default:f(()=>[n(dt,{class:"q-mt-md"},{default:f(()=>[n(qe,{size:"xl",url:"sa_files/webp/"+a.mint+".webp"},null,8,["url"]),n(mt,null,{default:f(()=>[Ba,_("div",La,S(a.name),1),_("div",Ma,S(a.mint),1)]),_:1}),nt(n(D,{flat:"",round:"",dense:"",icon:"close"},null,512),[[vt]])]),_:1}),n(ft,{class:"q-gutter-y-sm"},{default:f(()=>[_("div",null,[n(Se,{filled:"",square:"",label:"Receiver",modelValue:o.value,"onUpdate:modelValue":i[1]||(i[1]=b=>o.value=b)},null,8,["modelValue"])]),n(qa,{push:"",class:"row full-width"},{default:f(()=>[_("div",Va,[n(Se,{filled:"",square:"",class:"col",label:"Amount",modelValue:e.value,"onUpdate:modelValue":i[2]||(i[2]=b=>e.value=b),hint:"Max: "+a.amount},null,8,["modelValue","hint"]),n(Ta,{class:"q-px-lg",modelValue:l.value,"onUpdate:modelValue":i[3]||(i[3]=b=>l.value=b),min:0,max:10,color:"secondary","track-size":"10px",markers:"","marker-labels":b=>`${10*b}%`},null,8,["modelValue","marker-labels"])]),n(D,{square:"",color:"primary",icon:"send",onClick:i[4]||(i[4]=b=>v())})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),Da=_("span",{class:"text-weight-bold"},"Close/Burn Account",-1),za={class:"text-overline"},Fa=_("div",{class:"row q-gutter-x-sm"},[_("div",{class:""},"Closing Token-Accounts will recover the fee!")],-1),Pa={class:"row q-gutter-x-sm"},Na=_("div",{class:""},"Amount left:",-1),Qa={class:""},Ea={class:"q-ma-md text-right text-weight-light"},Ra=K({__name:"EditTokenButton",props:["mint","decimals","amount"],setup(a){const s=k(!1),r=a;k(""),k(0);async function o(){const l=new he,v=await re(new L(r.mint),x().publicKey.value);l.add(ya(v,new L(r.mint),x().publicKey.value,r.amount*Math.pow(10,r.decimals))),l.add(Ze(v,x().publicKey.value,x().publicKey.value)),l.add(we.transfer({fromPubkey:x().publicKey.value,toPubkey:new L(je),lamports:ke}));try{const d=await x().sendTransaction(l,G().connection);await Ae(d)}catch(d){xe.create({color:"red",message:`${d}`,timeout:5e3})}}async function e(){const l=new he,v=await re(new L(r.mint),x().publicKey.value);l.add(Ze(v,x().publicKey.value,x().publicKey.value)),l.add(we.transfer({fromPubkey:x().publicKey.value,toPubkey:new L(je),lamports:ke}));try{const d=await x().sendTransaction(l,G().connection);await Ae(d)}catch(d){xe.create({color:"red",message:`${d}`,timeout:5e3})}}return(l,v)=>(C(),O(Te,null,[n(D,{square:"",color:"primary",size:"sm",icon:"edit",onClick:v[0]||(v[0]=d=>s.value=!0)}),n(ut,{modelValue:s.value,"onUpdate:modelValue":v[3]||(v[3]=d=>s.value=d)},{default:f(()=>[n(ee,null,{default:f(()=>[n(dt,{class:"q-mt-md"},{default:f(()=>[n(Xt,null,{default:f(()=>[n(tt,{name:"edit"})]),_:1}),n(mt,null,{default:f(()=>[Da,_("div",za,S(a.mint),1)]),_:1}),nt(n(D,{flat:"",round:"",dense:"",icon:"close"},null,512),[[vt]])]),_:1}),n(ft,{class:"q-gutter-y-md col justify-around"},{default:f(()=>[Fa,_("div",Pa,[Na,_("div",Qa,S(a.amount),1)]),n(D,{square:"",disabled:a.amount==0,class:"full-width",color:"red",onClick:v[1]||(v[1]=d=>o())},{default:f(()=>[U(" Burn and close Account (+0.00193428 SOL) ")]),_:1},8,["disabled"]),n(D,{square:"",disabled:a.amount>0,class:"full-width",color:"orange",onClick:v[2]||(v[2]=d=>e())},{default:f(()=>[U(" Close Account (+0.00193428 SOL)")]),_:1},8,["disabled"])]),_:1}),_("div",Ea," fee: "+S(V(ke)/V(Jt))+"\u25CE ",1)]),_:1})]),_:1},8,["modelValue"])],64))}}),Ua={key:0,class:"row"},Ka=_("div",{class:"col-2 q-table__title"},"Accounts",-1),Wa={class:"text-subtitle1"},Oa={class:"row items-center justify-end q-gutter-x-sm"},ja={class:"row items-center justify-end q-gutter-x-sm"},Ga=K({__name:"WalletAccountsTable",props:["tab"],setup(a){const s=a;k();const r=k(["name","type","action","amount","market_usdc","market_atlas"]),o=[{name:"image",label:"",align:"left",required:!0},{name:"name",label:"Name",align:"left",sortable:!0,required:!0,field:i=>i.staratlas.name},{name:"type",label:"Type",align:"left",sortable:!0,field:i=>i.staratlas.attributes.itemType},{name:"account",label:"Account",align:"left",sortable:!0,field:i=>i.pubkey},{name:"mint",label:"Mint",align:"left",sortable:!0,field:i=>i.info.mint},{name:"owner",align:"left",label:"Owner",sortable:!0,field:i=>i.info.owner},{name:"decimals",label:"Decimals",sortable:!0,field:i=>{var b;return(b=i.info.tokenAmount)==null?void 0:b.decimals}},{name:"amount",label:"Amount",align:"right",sortable:!0,field:i=>{var b;return(b=i.info.tokenAmount)==null?void 0:b.uiAmount}},{name:"market_usdc",label:"Market [USDC]",align:"right",field:i=>{var b;return(b=i.info.tokenAmount)==null?void 0:b.uiAmount}},{name:"market_atlas",label:"Market [ATLAS]",align:"right",field:i=>{var b;return(b=i.info.tokenAmount)==null?void 0:b.uiAmount}},{label:"",align:"right",name:"action"}];Ce(async()=>{await B().update_accounts()}),X(()=>x().publicKey.value,async()=>{await B().update_accounts()});const e=k({rowsPerPage:0}),l=k([]),v=k([]);Ce(async()=>{var i,b;l.value=await G().api_client.trades.getPrices(((i=z.find(u=>u.type==R.USDC))==null?void 0:i.mint)??"none"),v.value=await G().api_client.trades.getPrices(((b=z.find(u=>u.type==R.ATLAS))==null?void 0:b.mint)??"none"),await B().update_accounts()});function d(){return s.tab=="all"?B().get_account_map_staratlas:B().get_account_map_staratlas.filter(i=>{var b;return((b=i.staratlas.attributes.itemType)==null?void 0:b.toLowerCase())==s.tab})}return(i,b)=>(C(),M(ee,{flat:""},{default:f(()=>[V(B)().is_loading?(C(),O("div",Ua,[n(Z),n(ot,{class:"row",color:"primary",size:"3rem"}),n(Z)])):j("",!0),n(it,{color:"primary",dark:"",flat:"",square:"","virtual-scroll":"",pagination:e.value,"onUpdate:pagination":b[1]||(b[1]=u=>e.value=u),"rows-per-page-options":[0],"visible-columns":r.value,title:"Accounts",rows:d(),columns:o,"row-key":"name"},{top:f(u=>[Ka,n(Z),n(ra,{modelValue:r.value,"onUpdate:modelValue":b[0]||(b[0]=c=>r.value=c),multiple:"",borderless:"",dense:"","options-dense":"","display-value":i.$q.lang.table.columns,"emit-value":"","map-options":"",options:o,"option-value":"name",style:{"min-width":"150px"}},null,8,["modelValue","display-value"]),n(D,{flat:"",round:"",dense:"",icon:u.inFullscreen?"fullscreen_exit":"fullscreen",onClick:u.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),body:f(u=>[n(rt,{props:u},{default:f(()=>[n($,{key:"image",props:u},{default:f(()=>[n(qe,{size:"xl",url:"sa_files/webp/"+u.row.info.mint+".webp"},null,8,["url"])]),_:2},1032,["props"]),n($,{key:"name",props:u},{default:f(()=>[_("div",Wa,S(u.row.staratlas.name??"-"),1)]),_:2},1032,["props"]),n($,{key:"type",props:u},{default:f(()=>[U(S(u.row.staratlas.attributes.itemType??"-"),1)]),_:2},1032,["props"]),n($,{key:"account",props:u},{default:f(()=>[n(ge,{address:u.row.pubkey},null,8,["address"])]),_:2},1032,["props"]),n($,{key:"owner",props:u},{default:f(()=>[n(ge,{address:u.row.info.owner},null,8,["address"])]),_:2},1032,["props"]),n($,{key:"mint",props:u,class:""},{default:f(()=>[n(ge,{address:u.row.info.mint},null,8,["address"])]),_:2},1032,["props"]),n($,{key:"decimals",props:u},{default:f(()=>{var c;return[U(S((c=u.row.info.tokenAmount)==null?void 0:c.decimals),1)]}),_:2},1032,["props"]),n($,{key:"amount",class:"text-subtitle1 text-bold",props:u},{default:f(()=>{var c,p;return[_("div",{class:st(((c=u.row.info.tokenAmount)==null?void 0:c.uiAmount)==0?"text-yellow":"")},S((p=u.row.info.tokenAmount)==null?void 0:p.uiAmount.toFixed(0)),3)]}),_:2},1032,["props"]),n($,{key:"market_usdc",class:"text-subtitle1 text-bold",props:u},{default:f(()=>{var c,p;return[_("div",Oa,[_("div",null,S(((((c=l.value.find(h=>h.asset==u.row.info.mint))==null?void 0:c.price)??0)*((p=u.row.info.tokenAmount)==null?void 0:p.uiAmount.toFixed(0))).toFixed(2)),1),n(oe,{currency:V(z).find(h=>h.type==V(R).USDC)},null,8,["currency"])])]}),_:2},1032,["props"]),n($,{key:"market_atlas",class:"text-subtitle1 text-bold",props:u},{default:f(()=>{var c,p;return[_("div",ja,[_("div",null,S(((((c=v.value.find(h=>h.asset==u.row.info.mint))==null?void 0:c.price)??0)*((p=u.row.info.tokenAmount)==null?void 0:p.uiAmount.toFixed(0))).toFixed(2)),1),n(oe,{currency:V(z).find(h=>h.type==V(R).ATLAS)},null,8,["currency"])])]}),_:2},1032,["props"]),n($,{key:"action",props:u,class:"q-gutter-x-sm"},{default:f(()=>[n(Ra,{amount:u.row.info.tokenAmount.uiAmount,mint:u.row.info.mint,decimals:u.row.info.tokenAmount.decimals},null,8,["amount","mint","decimals"]),n(Ia,{disabled:u.row.info.tokenAmount.uiAmount==0,mint:u.row.info.mint,decimals:u.row.info.tokenAmount.decimals,amount:u.row.info.tokenAmount.uiAmount,name:u.row.staratlas.name},null,8,["disabled","mint","decimals","amount","name"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["pagination","visible-columns","rows"])]),_:1}))}}),Ha=K({__name:"WalletAccountInput",setup(a){const s=k("");X(()=>x().publicKey.value,()=>{B().input_wallet=x().publicKey.value.toString()});async function r(){s.value.length?await B().update_accounts(new L(s.value)):await B().update_accounts()}return(o,e)=>(C(),M(ee,{square:"",flat:"",class:"row"},{default:f(()=>[n(Se,{label:"Wallet-Address",modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l),clearable:"","clear-icon":"close",square:"",filled:"",class:"col"},null,8,["modelValue"]),n(D,{onClick:e[1]||(e[1]=l=>{r().then(()=>{V(B)().input_wallet=s.value})}),color:"secondary",square:"",size:"md",icon:"fa-solid fa-paper-plane"},{default:f(()=>[n(la,null,{default:f(()=>[U("Query wallet")]),_:1})]),_:1})]),_:1}))}});const Ya={class:"row items-center q-gutter-x-xs justify-end"},Za={class:"row items-center q-gutter-x-xs justify-end"},Xa={class:"row items-center q-gutter-x-xs justify-end"},Ja=K({__name:"WalletAccountHistoryTable",props:["data"],setup(a){const s=k({rowsPerPage:0}),r=k([{name:"timestamp",label:"Timestamp",align:"left",field:"timestamp",sortable:!0},{name:"info",align:"left",field:"info",sortable:!0},{name:"side",label:"Side",align:"left",field:"side",sortable:!0},{name:"fee",align:"right",label:"Fee",field:o=>{var e;return((e=o.fee)==null?void 0:e.toFixed(2))??0},sortable:!0},{name:"size",align:"right",label:"Size",field:"volume",sortable:!0},{name:"volume",align:"right",label:"Volume",field:"volume",sortable:!0},{name:"price",align:"right",label:"Price",field:o=>o.price.toFixed(2),sortable:!0}]);return(o,e)=>(C(),M(it,{rows:a.data,dense:"",square:"",flat:"","virtual-scroll":"",columns:r.value,pagination:s.value,"rows-per-page-options":[0],"virtual-scroll-sticky-size-start":48,"row-key":"name","hide-bottom":""},{body:f(l=>[n(rt,{props:l},{default:f(()=>[n($,{key:"timestamp",props:l},{default:f(()=>[U(S(l.row.timestamp),1)]),_:2},1032,["props"]),n($,{key:"info",props:l},{default:f(()=>[n(D,{flat:"",size:"sm",icon:"link",href:"https://solscan.io/tx/"+l.row.signature,target:"_blank"},null,8,["href"])]),_:2},1032,["props"]),n($,{key:"side",props:l},{default:f(()=>[n(ia,{class:st(l.row.side=="BUY"?"buy":"sell")},{default:f(()=>[U(S(l.row.side),1)]),_:2},1032,["class"])]),_:2},1032,["props"]),n($,{key:"fee",props:l},{default:f(()=>[U(S((l.row.fee/l.row.volume*100).toFixed(1)??0)+"% ",1)]),_:2},1032,["props"]),n($,{key:"size",props:l},{default:f(()=>[_("div",Ya,[_("div",null,S(l.row.size??0),1),n(qe,{style:{width:"10px",height:"10px"},url:"sa_files/webp/"+l.row.asset+".webp"},null,8,["url"])])]),_:2},1032,["props"]),n($,{key:"volume",props:l},{default:f(()=>[_("div",Za,[_("div",null,S(l.row.volume??0),1),n(oe,{style:{width:"14px",height:"14px"},currency:V(z).find(v=>v.mint===l.row.currency)},null,8,["currency"])])]),_:2},1032,["props"]),n($,{key:"price",props:l,class:""},{default:f(()=>[_("div",Xa,[_("div",null,S(l.row.price??0),1),n(oe,{style:{width:"14px",height:"14px"},currency:V(z).find(v=>v.mint===l.row.currency)},null,8,["currency"])])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination"]))}});const el={key:0,class:"row"},tl={key:1},al={key:2,class:"text-center text-body2 q-pa-sm"},et=1e6,ll=K({__name:"WalletAccountHistory",setup(a){const s=k(),r=k([]),o=k(!1);X(()=>x().publicKey.value,async()=>{await e(x().publicKey.value.toString())}),X(()=>B().input_wallet,async()=>{await e(B().input_wallet)}),Ce(async()=>{B().input_wallet?await e(B().input_wallet):await e(x().publicKey.value.toString())});async function e(v){var d,i,b,u;o.value=!0,s.value=await G().api_client.trades.search("maker_and_taker",v,et),r.value=[],r.value.push({name:"USDC [buy]",data:(d=s.value)==null?void 0:d.filter(c=>{var p;return c.currency==((p=z.find(h=>h.type==R.USDC))==null?void 0:p.mint)}).filter(c=>{var p;return(p=c.side)==null?void 0:p.includes("BUY")}).map(c=>[c.timestamp,c.price,c.volume]),axisName:"USDC"}),r.value.push({name:"USDC [sell]",data:(i=s.value)==null?void 0:i.filter(c=>{var p;return c.currency==((p=z.find(h=>h.type==R.USDC))==null?void 0:p.mint)}).filter(c=>{var p;return(p=c.side)==null?void 0:p.includes("SELL")}).map(c=>[c.timestamp,c.price,c.volume]),axisName:"USDC"}),r.value.push({name:"ATLAS [buy]",data:(b=s.value)==null?void 0:b.filter(c=>{var p;return c.currency==((p=z.find(h=>h.type==R.ATLAS))==null?void 0:p.mint)}).filter(c=>{var p;return(p=c.side)==null?void 0:p.includes("BUY")}).map(c=>[c.timestamp,c.price,c.volume])}),r.value.push({name:"ATLAS [sell]",data:(u=s.value)==null?void 0:u.filter(c=>{var p;return c.currency==((p=z.find(h=>h.type==R.ATLAS))==null?void 0:p.mint)}).filter(c=>{var p;return(p=c.side)==null?void 0:p.includes("SELL")}).map(c=>[c.timestamp,c.price,c.volume])}),o.value=!1}const l={colors:["#3976ea","#3976ea","#b2b2b2","#b2b2b2"],chart:{height:350,type:"bubble",toolbar:{show:!1},foreColor:"#ffffff"},dataLabels:{enabled:!1},fill:{opacity:.8},xaxis:{type:"datetime"},yaxis:[{title:{text:"USDC [buy]"},seriesName:"USDC [buy]"},{title:{text:"USDC [sell]"},seriesName:"USDC [sell]"},{title:{text:"ATLAS [buy]"},seriesName:"ATLAS [buy]",opposite:!0},{title:{text:"ATLAS [sell]"},seriesName:"ATLAS [sell]",opposite:!0}]};return(v,d)=>{const i=ea("apexchart");return C(),M(ee,{flat:""},{default:f(()=>[o.value?(C(),O("div",el,[n(Z),n(ot,{class:"row q-pa-sm",color:"primary",size:"3rem"}),n(Z)])):j("",!0),s.value?(C(),O("div",tl,[o.value?j("",!0):(C(),M(i,{key:0,class:"chart",type:"scatter",height:"350",options:l,series:r.value},null,8,["series"])),o.value?j("",!0):(C(),M(Ja,{key:1,data:s.value},null,8,["data"])),_("div",{class:"text-center text-orange-4 text-weight-thin text-right q-mr-md"}," Limited to: "+S(et))])):(C(),O("div",al,"No data"))]),_:1})}}});var nl=va(ll,[["__scopeId","data-v-4836eefe"]]);const sl={style:{width:"80vw"}},gl=K({__name:"WalletPage",setup(a){const s=k("account"),r=k("all");return(o,e)=>(C(),M(Kt,{class:"row q-pa-sm justify-center"},{default:f(()=>[_("div",sl,[n(Ha,{class:"q-mb-sm"}),n(Ke,{align:"justify",modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l)},{default:f(()=>[n(se,{name:"account",label:"Accounts"}),n(se,{name:"activity",label:"Market Activity"})]),_:1},8,["modelValue"]),s.value=="account"?(C(),M(Ke,{key:0,align:"justify",modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=l=>r.value=l)},{default:f(()=>[n(se,{name:"all",label:"All",class:"bg-secondary"}),(C(!0),O(Te,null,ta(V(aa)().get_itemTypes,l=>(C(),M(se,{name:l,label:l,key:l},null,8,["name","label"]))),128))]),_:1},8,["modelValue"])):j("",!0),s.value=="account"?(C(),M(Ga,{key:1,tab:r.value,dark:""},null,8,["tab"])):j("",!0),s.value=="activity"?(C(),M(nl,{key:2})):j("",!0)])]),_:1}))}});export{gl as default};
