import{a as F,b as G,Q as D}from"./QSpace.89799b81.js";import{d as ee,Q as ae,a as f,b as re}from"./QTr.bd7638c2.js";import{a9 as q,n as k,aI as u,Z as g,bc as r,a6 as S,H as p,_ as te,$ as T,a0 as v,aC as le,b7 as se,ca as j,ch as m,ci as A,d1 as Y,d5 as P,a7 as a,aO as H,A as _,M as Z,cl as oe,cc as ie,cb as ne}from"./index.cc281973.js";import{Q as h,i as ue,p as ce}from"./use-checkbox.e88489ea.js";import{Q as de}from"./QImg.c941d4b8.js";import{Q as me}from"./QSeparator.82e4c099.js";import{Q as ye}from"./QPage.ee9af3ad.js";import{P as x}from"./PirceElement.784ad424.js";import{_ as J}from"./MarketPriceChangeElement.718fd651.js";import"./QResizeObserver.e988a0e0.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./use-dark.7e1235ce.js";var W=(s=>(s.Access="access",s.Collectible="collectible",s.Currency="currency",s.Memories="memories",s.Resource="resource",s.Ship="ship",s.Story="story",s.Structure="structure",s))(W||{});const be=q({__name:"RarityBadge",props:["rarity"],setup(s){const c=k(s.rarity.slice(0,1)[0]);return(Q,U)=>s.rarity=="uncommon"?(u(),g(h,{key:0,floating:"",color:"red",class:"text-uppercase"},{default:r(()=>[S(p(c.value),1)]),_:1})):s.rarity=="common"?(u(),g(h,{key:1,floating:"",color:"grey",class:"text-uppercase"},{default:r(()=>[S(p(c.value),1)]),_:1})):s.rarity=="rare"?(u(),g(h,{key:2,floating:"",color:"blue",class:"text-uppercase"},{default:r(()=>[S(p(c.value),1)]),_:1})):s.rarity=="anomaly"?(u(),g(h,{key:3,floating:"",color:"teal",class:"text-uppercase"},{default:r(()=>[S(p(c.value),1)]),_:1})):s.rarity=="epic"?(u(),g(h,{key:4,floating:"",color:"green",class:"text-uppercase"},{default:r(()=>[S(p(c.value),1)]),_:1})):s.rarity=="legendary"?(u(),g(h,{key:5,floating:"",color:"orange",class:"text-uppercase"},{default:r(()=>[S(p(c.value),1)]),_:1})):te("",!0)}}),fe={class:"row"},_e={class:"col"},K=q({__name:"MarketTrendElement",props:["percentage","currency"],setup(s){return(V,c)=>(u(),T("div",fe,[v("div",_e,p(s.percentage==0?"-":s.percentage),1)]))}}),ge={key:0,class:"row"},pe=v("div",{class:"text-body1 text-weight-light q-mr-md"},"Timeframe:",-1),ve={class:"text-h6"},ke={class:"text-subtitle2"},we={class:"row"},Se={class:"row"},Ae={class:"col"},Ee=q({__name:"TablePage",setup(s){const V=k({rowsPerPage:0}),c=k("day"),Q=k(),U=k(!0),X=[{name:"image",required:!0,label:"",field:"image",align:"left",sortable:!0,style:"width: 50px"},{name:"name",required:!0,label:"Asset",field:"name",align:"left",sortable:!0},{name:"market_atlas",required:!0,label:"Market [ATLAS]",align:"center",sortable:!0,field:o=>o.market.atlas},{name:"market_usdc",required:!0,label:"Market [USDC]",align:"center",sortable:!0,field:o=>o.market.usdc},{name:"buy_orders_atlas",required:!0,label:"BUY [ATLAS]",align:"right",sortable:!0,style:"width: 100px",field:o=>o.orderbok.buy.atlas},{name:"buy_orders_usdc",required:!0,label:"BUY [USDC]",align:"right",sortable:!0,style:"width: 100px",field:o=>o.orderbok.buy.usdc},{name:"spread",required:!0,label:"Spread",align:"center",sortable:!0,style:"width: 20px"},{name:"sell_orders_atlas",required:!0,label:"Sell [ATLAS]",align:"left",sortable:!0,style:"width: 100px",field:o=>o.orderbok.sell.atlas},{name:"sell_orders_usdc",required:!0,label:"SELL [USDC]",align:"left",sortable:!0,style:"width: 100px",field:o=>o.orderbok.sell.usdc}],B=k([]),L=k(W.Ship);le(async()=>{await E()}),se(()=>L.value,async()=>{await E()});async function E(){var e,t,n,y,C,w,$,N,O,I,R,z;U.value=!0,B.value=[];const o=await j().api_client.trades.getPrices(((e=m.find(i=>i.type==A.USDC))==null?void 0:e.mint)??"none"),d=await j().api_client.trades.getPrices(((t=m.find(i=>i.type==A.ATLAS))==null?void 0:t.mint)??"none");for(const i of Y().raw.filter(l=>l.attributes.itemType==L.value))B.value.push({name:i.name.toString(),mint:i.mint.toString(),attributes:i.attributes,symbol:i.symbol,url:"sa_files/webp/"+i.mint.toString()+".webp",market:{atlas:((n=d.find(l=>l.asset==i.mint.toString()))==null?void 0:n.price)??void 0,usdc:((y=o.find(l=>l.asset==i.mint.toString()))==null?void 0:y.price)??void 0},orderbok:{buy:{atlas:(w=P().order_book_service.getBuyOrdersByCurrencyAndItem(((C=m.find(l=>l.name=="ATLAS"))==null?void 0:C.mint)??"",i.mint).sort((l,b)=>l.price-b.price).reverse()[0])==null?void 0:w.uiPrice,usdc:(N=P().order_book_service.getBuyOrdersByCurrencyAndItem((($=m.find(l=>l.name=="USDC"))==null?void 0:$.mint)??"",i.mint).sort((l,b)=>l.price-b.price).reverse()[0])==null?void 0:N.uiPrice},sell:{atlas:(I=P().order_book_service.getSellOrdersByCurrencyAndItem(((O=m.find(l=>l.name=="ATLAS"))==null?void 0:O.mint)??"",i.mint).sort((l,b)=>l.price-b.price)[0])==null?void 0:I.uiPrice,usdc:(z=P().order_book_service.getSellOrdersByCurrencyAndItem(((R=m.find(l=>l.name=="USDC"))==null?void 0:R.mint)??"",i.mint).sort((l,b)=>l.price-b.price)[0])==null?void 0:z.uiPrice}}}),B.value.sort((l,b)=>(l.orderbok.buy.usdc??0)-(b.orderbok.buy.usdc??0));U.value=!1}function M(o,d){return o-d<0?((o-d)/d).toFixed(2)+"%":0}return(o,d)=>(u(),g(ye,{class:"row q-pa-sm justify-center"},{default:r(()=>[v("div",null,[a(G,{align:"justify",modelValue:L.value,"onUpdate:modelValue":d[0]||(d[0]=e=>L.value=e)},{default:r(()=>[(u(!0),T(Z,null,H(_(Y)().get_itemTypes,e=>(u(),g(F,{name:e,label:e,key:e},null,8,["name","label"]))),128))]),_:1},8,["modelValue"]),U.value?(u(),T("div",ge,[a(D),a(ee,{class:"row",color:"primary",size:"3rem"}),a(D)])):(u(),g(ae,{key:1,flat:"",bordered:"",title:"Treats",rows:B.value,columns:X,"row-key":"index",pagination:V.value,"rows-per-page-options":[0],filter:Q.value},{top:r(()=>[pe,a(G,{"active-bg-color":"primary",dense:"",modelValue:c.value,"onUpdate:modelValue":d[1]||(d[1]=e=>c.value=e)},{default:r(()=>[(u(),T(Z,null,H(["day","week","month","year"],e=>a(F,{name:e,label:e,key:e},null,8,["name","label"])),64))]),_:1},8,["modelValue"]),a(D),a(ue,{filled:"",dense:"",modelValue:Q.value,"onUpdate:modelValue":d[2]||(d[2]=e=>Q.value=e)},{after:r(()=>[a(oe,{size:"sm",name:"fa-solid fa-magnifying-glass"})]),_:1},8,["modelValue"])]),body:r(e=>[a(re,{props:e},{default:r(()=>[a(f,{key:"image",props:e},{default:r(()=>[a(ce,{side:"",class:"row"},{default:r(()=>[a(ie,{rounded:"",size:"48px"},{default:r(()=>[a(de,{height:"50px",fetchpriority:"low",src:e.row.url},null,8,["src"]),a(be,{rarity:e.row.attributes.rarity},null,8,["rarity"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"]),a(f,{key:"name",props:e},{default:r(()=>[v("div",ve,p(e.row.symbol),1),v("div",ke,p(e.row.name),1)]),_:2},1032,["props"]),a(f,{key:"market_atlas",props:e,class:""},{default:r(()=>{var t,n;return[v("div",we,[a(x,{label:"ATLAS",value:(t=e.row.market)==null?void 0:t.atlas},null,8,["value"]),a(J,{class:"col",timespan:c.value,asset:e.row.mint,currency:(n=_(m).find(y=>y.type==_(A).ATLAS))==null?void 0:n.mint,disable_timespan:"true"},null,8,["timespan","asset","currency"])])]}),_:2},1032,["props"]),a(f,{key:"market_usdc",props:e,class:""},{default:r(()=>{var t,n;return[v("div",Se,[a(x,{label:"USDC",value:(t=e.row.market)==null?void 0:t.usdc},null,8,["value"]),a(J,{class:"col",timespan:c.value,asset:e.row.mint,currency:(n=_(m).find(y=>y.type==_(A).USDC))==null?void 0:n.mint,disable_timespan:"true"},null,8,["timespan","asset","currency"])])]}),_:2},1032,["props"]),a(f,{key:"buy_orders_atlas",props:e,class:"buy"},{default:r(()=>{var t;return[a(x,{class:"",label:"ATLAS",value:(t=e.row.orderbok.buy)==null?void 0:t.sell},null,8,["value"])]}),_:2},1032,["props"]),a(f,{key:"buy_orders_usdc",props:e,class:"buy"},{default:r(()=>{var t;return[a(x,{label:"USDC",value:(t=e.row.orderbok.buy)==null?void 0:t.usdc},null,8,["value"])]}),_:2},1032,["props"]),a(f,{key:"spread",class:"market",props:e},{default:r(()=>[a(ne,{class:"text-caption",color:"primary"},{default:r(()=>{var t,n,y,C;return[v("div",Ae,[a(K,{currency:_(m).find(w=>w.type==_(A).ATLAS),percentage:M((t=e.row.orderbok.buy)==null?void 0:t.atlas,(n=e.row.orderbok.sell)==null?void 0:n.atlas)},null,8,["currency","percentage"]),a(me),a(K,{currency:_(m).find(w=>w.type==_(A).USDC),percentage:M((y=e.row.orderbok.buy)==null?void 0:y.usdc,(C=e.row.orderbok.sell)==null?void 0:C.usdc)},null,8,["currency","percentage"])])]}),_:2},1024)]),_:2},1032,["props"]),a(f,{key:"sell_orders_atlas",props:e,class:"sell"},{default:r(()=>{var t;return[a(x,{label:"ATLAS",value:(t=e.row.orderbok.sell)==null?void 0:t.atlas},null,8,["value"])]}),_:2},1032,["props"]),a(f,{key:"sell_orders_usdc",props:e,class:"sell"},{default:r(()=>{var t,n;return[a(x,{label:"USDC",value:(n=(t=e.row.orderbok)==null?void 0:t.sell)==null?void 0:n.usdc},null,8,["value"])]}),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","pagination","filter"]))])]),_:1}))}});export{Ee as default};
