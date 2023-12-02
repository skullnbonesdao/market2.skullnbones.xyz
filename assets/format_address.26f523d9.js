import{a9 as ee,aI as te,Z as ae,bc as oe,a0 as ne,cc as se,c1 as ie,n as O,Y as m,b7 as x,ay as k,cR as C,cQ as A,ak as E,bh as le,ah as re,c6 as ue,cz as ce}from"./index.a7873fdf.js";import{_ as fe}from"./plugin-vue_export-helper.21dcd24c.js";import{H as de,u as ve,I as he,J as H,K as me,a as ge,F as pe,b as ye,L as Te,M as _e,N as be,c as Se,O as Pe,P as I,R as we,t as M,v as Oe,S as q,T as xe}from"./use-checkbox.575c4f80.js";const ke=["src"],Ce=ee({__name:"AsssetIcon",props:{url:{type:String},size:{default:"xs"}},setup(e){const s=e;return(l,i)=>(te(),ae(se,{size:e.size},{default:oe(()=>[ne("img",{src:s.url,alt:"asset_image"},null,8,ke)]),_:1},8,["size"]))}});var Ie=fe(Ce,[["__scopeId","data-v-e3311ea0"]]),Me=ie({name:"QTooltip",inheritAttrs:!1,props:{...de,...ve,...he,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:H},self:{type:String,default:"top middle",validator:H},offset:{type:Array,default:()=>[14,14],validator:me},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...ge],setup(e,{slots:s,emit:l,attrs:i}){let r,u;const g=re(),{proxy:{$q:a}}=g,c=O(null),v=O(!1),z=m(()=>q(e.anchor,a.lang.rtl)),D=m(()=>q(e.self,a.lang.rtl)),L=m(()=>e.persistent!==!0),{registerTick:Q,removeTick:j}=pe(),{registerTimeout:h}=ye(),{transitionProps:B,transitionStyle:N}=Te(e),{localScrollTarget:T,changeScrollEvent:R,unconfigureScrollTarget:W}=_e(e,P),{anchorEl:o,canShow:$,anchorEvents:f}=be({showing:v,configureAnchorEl:Z}),{show:V,hide:p}=Se({showing:v,canShow:$,handleShow:J,handleHide:K,hideOnRouteChange:L,processOnMount:!0});Object.assign(f,{delayShow:U,delayHide:Y});const{showPortal:_,hidePortal:b,renderPortal:F}=Pe(g,c,X,"tooltip");if(a.platform.is.mobile===!0){const t={anchorEl:o,innerRef:c,onClickOutside(n){return p(n),n.target.classList.contains("q-dialog__backdrop")&&ce(n),!0}},y=m(()=>e.modelValue===null&&e.persistent!==!0&&v.value===!0);x(y,n=>{(n===!0?xe:I)(t)}),k(()=>{I(t)})}function J(t){_(),Q(()=>{u=new MutationObserver(()=>d()),u.observe(c.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),d(),P()}),r===void 0&&(r=x(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,d)),h(()=>{_(!0),l("show",t)},e.transitionDuration)}function K(t){j(),b(),S(),h(()=>{b(!0),l("hide",t)},e.transitionDuration)}function S(){u!==void 0&&(u.disconnect(),u=void 0),r!==void 0&&(r(),r=void 0),W(),C(f,"tooltipTemp")}function d(){we({targetEl:c.value,offset:e.offset,anchorEl:o.value,anchorOrigin:z.value,selfOrigin:D.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function U(t){if(a.platform.is.mobile===!0){M(),document.body.classList.add("non-selectable");const y=o.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[y,w,"delayHide","passiveCapture"]);A(f,"tooltipTemp",n)}h(()=>{V(t)},e.delay)}function Y(t){a.platform.is.mobile===!0&&(C(f,"tooltipTemp"),M(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),h(()=>{p(t)},e.hideDelay)}function Z(){if(e.noParentEvent===!0||o.value===null)return;const t=a.platform.is.mobile===!0?[[o.value,"touchstart","delayShow","passive"]]:[[o.value,"mouseenter","delayShow","passive"],[o.value,"mouseleave","delayHide","passive"]];A(f,"anchor",t)}function P(){if(o.value!==null||e.scrollTarget!==void 0){T.value=Oe(o.value,e.scrollTarget);const t=e.noParentEvent===!0?d:p;R(T.value,t)}}function G(){return v.value===!0?E("div",{...i,ref:c,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",i.class],style:[i.style,N.value],role:"tooltip"},ue(s.default)):null}function X(){return E(le,B.value,G)}return k(S),Object.assign(g.proxy,{updatePosition:d}),F}});function qe(e,s=6){if(e){const l=e==null?void 0:e.substring(0,s),i=e==null?void 0:e.substring(e.length-s);return`${l}[...]${i}`}return"error"}export{Ie as A,Me as Q,qe as f};
