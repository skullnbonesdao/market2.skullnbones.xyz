import{e as F,Q as U,h as R,i as H}from"./use-checkbox.575c4f80.js";import{A as Y,f as z,Q as V}from"./format_address.26f523d9.js";import{cA as j,c1 as G,cB as O,Y as g,ak as x,cP as W,ah as Z,a9 as P,aI as k,Z as p,bc as s,a0 as m,H as _,a7 as t,cb as S,n as h,A as y,ch as $,D as J,a6 as q,aC as K,ay as L,ca as b}from"./index.a7873fdf.js";import{Q as X}from"./QCard.7e337558.js";import{a as w,b as ee,Q as ae,c as te}from"./QTr.457191d0.js";import{Q as le}from"./QPage.194e49f2.js";import{_ as se}from"./PairIcon.5114f028.js";import{P as I}from"./PirceElement.7dddce4e.js";import{Q as re}from"./QSeparator.2fec6f8c.js";import{_ as ne}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-dark.63606109.js";const oe={...j,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},B=50,N=2*B,E=N*Math.PI,ie=Math.round(E*1e3)/1e3;var ce=G({name:"QCircularProgress",props:{...oe,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:l}){const{proxy:{$q:i}}=Z(),c=O(e),u=g(()=>{const o=(i.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(i.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-o}deg)`:`rotate3d(0, 0, 1, ${o-90}deg)`}}),r=g(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),a=g(()=>N/(1-e.thickness/2)),d=g(()=>`${a.value/2} ${a.value/2} ${a.value} ${a.value}`),f=g(()=>F(e.value,e.min,e.max)),Q=g(()=>E*(1-(f.value-e.min)/(e.max-e.min))),n=g(()=>e.thickness/2*a.value);function v({thickness:o,offset:C,color:A,cls:T,rounded:D}){return x("circle",{class:"q-circular-progress__"+T+(A!==void 0?` text-${A}`:""),style:r.value,fill:"transparent",stroke:"currentColor","stroke-width":o,"stroke-dasharray":ie,"stroke-dashoffset":C,"stroke-linecap":D,cx:a.value,cy:a.value,r:B})}return()=>{const o=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&o.push(x("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:B-n.value/2,cx:a.value,cy:a.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&o.push(v({cls:"track",thickness:n.value,offset:0,color:e.trackColor})),o.push(v({cls:"circle",thickness:n.value,offset:Q.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const C=[x("svg",{class:"q-circular-progress__svg",style:u.value,viewBox:d.value,"aria-hidden":"true"},o)];return e.showValue===!0&&C.push(x("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},l.default!==void 0?l.default():[x("div",f.value)])),x("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:c.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:f.value},W(l.internal,C))}}});const ue={style:{width:"100px"},class:"col text-subtitle2 text-right"},de=P({__name:"AssetElement",props:["mint","value"],setup(e){const l=e;return(i,c)=>(k(),p(S,{color:"primary",dense:"",class:"row items-center"},{default:s(()=>[m("div",ue,_(e.value??"-"),1),t(re,{vertical:"",class:"q-ma-xs"}),t(Y,{width:"20px",height:"20px",url:"sa_files/webp/"+l.mint+".webp"},null,8,["url"])]),_:1}))}});var me=ne(de,[["__scopeId","data-v-4d4f89f4"]]);function fe(e){const l=Date.now(),i=new Date(e),c=l-i,u=Math.floor(c/864e5),r=Math.floor(c%864e5/36e5),a=Math.round(c%864e5%36e5/6e4);return u+"d, "+r+"h, "+a+"min"}const ve={class:"col text-caption",style:{width:"100px"}},_e={class:"text-weight-thin"},he={class:"row"},ge=m("div",{class:"text-caption q-mr-sm text-weight-light"},[m("div",{class:""},"Maker:"),m("div",{class:""},"Taker:")],-1),ye={class:"text-caption"},we=P({__name:"ExplorerTable",props:{data:{type:[]}},setup(e){const l=h({rowsPerPage:0}),i=e,c=h([{name:"info",label:"Info",align:"left",sortable:!0},{name:"accounts",label:"Accounts",align:"left",field:"accounts"},{name:"side",label:"Side",align:"left",field:"side",sortable:!0,style:"width: 50px"},{name:"fee",align:"left",label:"Fee",style:"width: 100px",field:u=>{var r;return((r=u.fee)==null?void 0:r.toFixed(2))??0},sortable:!0},{name:"size",align:"center",label:"Size",field:"size",sortable:!0},{name:"volume",align:"center",label:"Volume",field:"volume",sortable:!0},{name:"price",align:"center",label:"Price",field:u=>u.price.toFixed(2),sortable:!0}]);return(u,r)=>(k(),p(ae,{flat:"",rows:i.data,columns:c.value,pagination:l.value,"rows-per-page-options":[0],"row-key":"name"},{body:s(a=>[t(ee,{props:a,class:""},{default:s(()=>[t(w,{key:"info",props:a},{default:s(()=>[t(S,{class:"row items-center",color:"primary"},{default:s(()=>[t(se,{currency:y($).find(d=>d.mint===a.row.currency),asset_image_url:"sa_files/webp/"+a.row.asset+".webp",class:"q-mr-sm",size:"lg"},null,8,["currency","asset_image_url"]),m("div",ve,[m("div",_e,_(y(z)(a.row.signature,5)),1),m("div",null,_(y(fe)(a.row.timestamp)),1)]),t(S,{color:"secondary",class:"q-ml-md",size:"sm",icon:"link",href:"https://solscan.io/tx/"+a.row.signature,target:"_blank"},null,8,["href"])]),_:2},1024)]),_:2},1032,["props"]),t(w,{key:"accounts",props:a},{default:s(()=>[m("div",he,[ge,m("div",ye,[m("div",null,_(y(z)(a.row.maker??"",3)),1),m("div",null,_(y(z)(a.row.taker??"",3)),1)])])]),_:2},1032,["props"]),t(w,{key:"side",props:a},{default:s(()=>[t(U,{class:J(a.row.side=="BUY"?"buy":"sell")},{default:s(()=>[q(_(a.row.side),1)]),_:2},1032,["class"])]),_:2},1032,["props"]),t(w,{class:"text-overline",key:"fee",props:a},{default:s(()=>[q(_((a.row.fee/a.row.volume*100).toFixed(1))+"% ",1)]),_:2},1032,["props"]),t(w,{class:"text-overline",key:"size",props:a},{default:s(()=>[t(me,{mint:a.row.asset,value:a.row.size},null,8,["mint","value"])]),_:2},1032,["props"]),t(w,{class:"text-overline",key:"volume",props:a},{default:s(()=>{var d;return[t(I,{label:(d=y($).find(f=>f.mint==a.row.currency))==null?void 0:d.name,value:a.row.volume},null,8,["label","value"])]}),_:2},1032,["props"]),t(w,{class:"text-overline",key:"price",props:a},{default:s(()=>{var d;return[t(I,{label:(d=y($).find(f=>f.mint==a.row.currency))==null?void 0:d.name,value:a.row.price},null,8,["label","value"])]}),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination"]))}}),xe={class:""},M=6e4,Ae=P({__name:"ExplorerPage",setup(e){const l=h(),i=h(0),c=h(),u=h("Signature"),r=h(),a=h(["Signature","Asset","Currency","Player"]),d=async()=>{await b().api_client.trades.getTrades(null,null,50).then(n=>l.value=n)};K(async()=>{await d(),c.value=setInterval(f,1e3)}),L(()=>{clearInterval(c.value),c.value=null});async function f(){i.value>=100?await d().then(()=>{i.value=0}):i.value+=1e3/M*100}async function Q(){switch(l.value=null,u.value){case"Signature":await b().api_client.trades.search("signature",r.value,50).then(n=>l.value=n);break;case"Asset":await b().api_client.trades.search("asset",r.value,50).then(n=>l.value=n);break;case"Currency":await b().api_client.trades.search("currency",r.value,50).then(n=>l.value=n);break;case"Player":await b().api_client.trades.search("maker_and_taker",r.value,50).then(n=>l.value=n);break}}return(n,v)=>(k(),p(le,{class:"row q-pa-sm justify-center"},{default:s(()=>[m("div",xe,[t(X,{square:"",flat:"",class:"row"},{default:s(()=>[t(R,{class:"col-2",square:"",filled:"",modelValue:u.value,"onUpdate:modelValue":v[0]||(v[0]=o=>u.value=o),options:a.value,label:"Search for:"},null,8,["modelValue","options"]),t(H,{modelValue:r.value,"onUpdate:modelValue":v[1]||(v[1]=o=>r.value=o),square:"",filled:"",class:"col"},null,8,["modelValue"]),t(S,{color:"secondary",square:"",size:"md",icon:"fa-solid fa-paper-plane",onClick:v[2]||(v[2]=o=>Q())},{default:s(()=>[t(V,null,{default:s(()=>[q("Send request")]),_:1})]),_:1}),t(S,{size:"md",flat:"",square:""},{default:s(()=>[t(ce,{value:i.value,size:"sm",color:"white"},null,8,["value"]),t(V,null,{default:s(()=>[q("Reload every "+_(M/1e3)+"s",1)]),_:1})]),_:1})]),_:1}),l.value?(k(),p(we,{key:1,class:"q-mt-sm",data:l.value},null,8,["data"])):(k(),p(te,{key:0,class:"full-width q-ma-md",size:"xl",color:"secondary"}))])]),_:1}))}});export{Ae as default};
