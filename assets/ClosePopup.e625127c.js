import{cr as M,cs as o,b_ as v,ct as E,bE as C,c1 as h,Y as b,ak as A,c6 as m,cu as x,cv as g}from"./index.a7873fdf.js";import{r as y,s as _}from"./use-checkbox.575c4f80.js";const u=e=>{const a=e.decode.bind(e),i=e.encode.bind(e);return{decode:a,encode:i}},S=e=>a=>{const i=M(e,a),{encode:l,decode:t}=u(i),r=i;return r.decode=(s,d)=>{const p=t(s,d);return o(v.Buffer.from(p))},r.encode=(s,d,p)=>{const z=E(s,e);return l(z,d,p)},r},P=S(8);var f;(function(e){e[e.InitializeMint=0]="InitializeMint",e[e.InitializeAccount=1]="InitializeAccount",e[e.InitializeMultisig=2]="InitializeMultisig",e[e.Transfer=3]="Transfer",e[e.Approve=4]="Approve",e[e.Revoke=5]="Revoke",e[e.SetAuthority=6]="SetAuthority",e[e.MintTo=7]="MintTo",e[e.Burn=8]="Burn",e[e.CloseAccount=9]="CloseAccount",e[e.FreezeAccount=10]="FreezeAccount",e[e.ThawAccount=11]="ThawAccount",e[e.TransferChecked=12]="TransferChecked",e[e.ApproveChecked=13]="ApproveChecked",e[e.MintToChecked=14]="MintToChecked",e[e.BurnChecked=15]="BurnChecked",e[e.InitializeAccount2=16]="InitializeAccount2",e[e.SyncNative=17]="SyncNative",e[e.InitializeAccount3=18]="InitializeAccount3",e[e.InitializeMultisig2=19]="InitializeMultisig2",e[e.InitializeMint2=20]="InitializeMint2",e[e.GetAccountDataSize=21]="GetAccountDataSize",e[e.InitializeImmutableOwner=22]="InitializeImmutableOwner",e[e.AmountToUiAmount=23]="AmountToUiAmount",e[e.UiAmountToAmount=24]="UiAmountToAmount",e[e.InitializeMintCloseAuthority=25]="InitializeMintCloseAuthority",e[e.TransferFeeExtension=26]="TransferFeeExtension",e[e.ConfidentialTransferExtension=27]="ConfidentialTransferExtension",e[e.DefaultAccountStateExtension=28]="DefaultAccountStateExtension",e[e.Reallocate=29]="Reallocate",e[e.MemoTransferExtension=30]="MemoTransferExtension",e[e.CreateNativeMint=31]="CreateNativeMint",e[e.InitializeNonTransferableMint=32]="InitializeNonTransferableMint",e[e.InterestBearingMintExtension=33]="InterestBearingMintExtension",e[e.CpiGuardExtension=34]="CpiGuardExtension",e[e.InitializePermanentDelegate=35]="InitializePermanentDelegate",e[e.TransferHookExtension=36]="TransferHookExtension",e[e.MetadataPointerExtension=39]="MetadataPointerExtension"})(f||(f={}));function N(e,a,i){if(i.length){e.push({pubkey:a,isSigner:!1,isWritable:!1});for(const l of i)e.push({pubkey:l instanceof C?l:l.publicKey,isSigner:!0,isWritable:!1})}else e.push({pubkey:a,isSigner:!0,isWritable:!1});return e}var q=h({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:a}){const i=b(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>A("div",{class:i.value},m(a.default))}}),L=h({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:a}){const i=b(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>A("div",{class:i.value,role:"toolbar"},m(a.default))}});function c(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const a=parseInt(e,10);return isNaN(a)?0:a}var K=x({name:"close-popup",beforeMount(e,{value:a}){const i={depth:c(a),handler(l){i.depth!==0&&setTimeout(()=>{const t=y(e);t!==void 0&&_(t,l,i.depth)})},handlerKey(l){g(l,13)===!0&&i.handler(l)}};e.__qclosepopup=i,e.addEventListener("click",i.handler),e.addEventListener("keyup",i.handlerKey)},updated(e,{value:a,oldValue:i}){a!==i&&(e.__qclosepopup.depth=c(a))},beforeUnmount(e){const a=e.__qclosepopup;e.removeEventListener("click",a.handler),e.removeEventListener("keyup",a.handlerKey),delete e.__qclosepopup}});export{K as C,L as Q,f as T,N as a,q as b,u as e,P as u};
