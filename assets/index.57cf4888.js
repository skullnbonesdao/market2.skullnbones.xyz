import{bE as R,b_ as D}from"./index.a7873fdf.js";var V={exports:{}};(function(s){var a=Object.prototype.hasOwnProperty,r="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(r=!1));function t(u,i,l){this.fn=u,this.context=i,this.once=l||!1}function e(u,i,l,f,b){if(typeof l!="function")throw new TypeError("The listener must be a function");var h=new t(l,f||u,b),p=r?r+i:i;return u._events[p]?u._events[p].fn?u._events[p]=[u._events[p],h]:u._events[p].push(h):(u._events[p]=h,u._eventsCount++),u}function o(u,i){--u._eventsCount===0?u._events=new n:delete u._events[i]}function c(){this._events=new n,this._eventsCount=0}c.prototype.eventNames=function(){var i=[],l,f;if(this._eventsCount===0)return i;for(f in l=this._events)a.call(l,f)&&i.push(r?f.slice(1):f);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(l)):i},c.prototype.listeners=function(i){var l=r?r+i:i,f=this._events[l];if(!f)return[];if(f.fn)return[f.fn];for(var b=0,h=f.length,p=new Array(h);b<h;b++)p[b]=f[b].fn;return p},c.prototype.listenerCount=function(i){var l=r?r+i:i,f=this._events[l];return f?f.fn?1:f.length:0},c.prototype.emit=function(i,l,f,b,h,p){var y=r?r+i:i;if(!this._events[y])return!1;var d=this._events[y],_=arguments.length,g,v;if(d.fn){switch(d.once&&this.removeListener(i,d.fn,void 0,!0),_){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,l),!0;case 3:return d.fn.call(d.context,l,f),!0;case 4:return d.fn.call(d.context,l,f,b),!0;case 5:return d.fn.call(d.context,l,f,b,h),!0;case 6:return d.fn.call(d.context,l,f,b,h,p),!0}for(v=1,g=new Array(_-1);v<_;v++)g[v-1]=arguments[v];d.fn.apply(d.context,g)}else{var A=d.length,x;for(v=0;v<A;v++)switch(d[v].once&&this.removeListener(i,d[v].fn,void 0,!0),_){case 1:d[v].fn.call(d[v].context);break;case 2:d[v].fn.call(d[v].context,l);break;case 3:d[v].fn.call(d[v].context,l,f);break;case 4:d[v].fn.call(d[v].context,l,f,b);break;default:if(!g)for(x=1,g=new Array(_-1);x<_;x++)g[x-1]=arguments[x];d[v].fn.apply(d[v].context,g)}}return!0},c.prototype.on=function(i,l,f){return e(this,i,l,f,!1)},c.prototype.once=function(i,l,f){return e(this,i,l,f,!0)},c.prototype.removeListener=function(i,l,f,b){var h=r?r+i:i;if(!this._events[h])return this;if(!l)return o(this,h),this;var p=this._events[h];if(p.fn)p.fn===l&&(!b||p.once)&&(!f||p.context===f)&&o(this,h);else{for(var y=0,d=[],_=p.length;y<_;y++)(p[y].fn!==l||b&&!p[y].once||f&&p[y].context!==f)&&d.push(p[y]);d.length?this._events[h]=d.length===1?d[0]:d:o(this,h)}return this},c.prototype.removeAllListeners=function(i){var l;return i?(l=r?r+i:i,this._events[l]&&o(this,l)):(this._events=new n,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=r,c.EventEmitter=c,s.exports=c})(V);var L=V.exports,B=globalThis&&globalThis.__extends||function(){var s=function(a,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},s(a,r)};return function(a,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(a,r);function n(){this.constructor=a}a.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),G=function(s){B(a,s);function a(){return s!==null&&s.apply(this,arguments)||this}return a}(L);function J(s){if(s.length>=255)throw new TypeError("Alphabet too long");for(var a=new Uint8Array(256),r=0;r<a.length;r++)a[r]=255;for(var n=0;n<s.length;n++){var t=s.charAt(n),e=t.charCodeAt(0);if(a[e]!==255)throw new TypeError(t+" is ambiguous");a[e]=n}var o=s.length,c=s.charAt(0),u=Math.log(o)/Math.log(256),i=Math.log(256)/Math.log(o);function l(h){if(h instanceof Uint8Array||(ArrayBuffer.isView(h)?h=new Uint8Array(h.buffer,h.byteOffset,h.byteLength):Array.isArray(h)&&(h=Uint8Array.from(h))),!(h instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(h.length===0)return"";for(var p=0,y=0,d=0,_=h.length;d!==_&&h[d]===0;)d++,p++;for(var g=(_-d)*i+1>>>0,v=new Uint8Array(g);d!==_;){for(var A=h[d],x=0,T=g-1;(A!==0||x<y)&&T!==-1;T--,x++)A+=256*v[T]>>>0,v[T]=A%o>>>0,A=A/o>>>0;if(A!==0)throw new Error("Non-zero carry");y=x,d++}for(var E=g-y;E!==g&&v[E]===0;)E++;for(var W=c.repeat(p);E<g;++E)W+=s.charAt(v[E]);return W}function f(h){if(typeof h!="string")throw new TypeError("Expected String");if(h.length===0)return new Uint8Array;for(var p=0,y=0,d=0;h[p]===c;)y++,p++;for(var _=(h.length-p)*u+1>>>0,g=new Uint8Array(_);h[p];){var v=a[h.charCodeAt(p)];if(v===255)return;for(var A=0,x=_-1;(v!==0||A<d)&&x!==-1;x--,A++)v+=o*g[x]>>>0,g[x]=v%256>>>0,v=v/256>>>0;if(v!==0)throw new Error("Non-zero carry");d=A,p++}for(var T=_-d;T!==_&&g[T]===0;)T++;for(var E=new Uint8Array(y+(_-T)),W=y;T!==_;)E[W++]=g[T++];return E}function b(h){var p=f(h);if(p)return p;throw new Error("Non-base"+o+" character")}return{encode:l,decodeUnsafe:f,decode:b}}var Q=J;const X=Q,Y="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";var m=X(Y),Z=globalThis&&globalThis.__extends||function(){var s=function(a,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},s(a,r)};return function(a,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(a,r);function n(){this.constructor=a}a.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),z=globalThis&&globalThis.__assign||function(){return z=Object.assign||function(s){for(var a,r=1,n=arguments.length;r<n;r++){a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(s[t]=a[t])}return s},z.apply(this,arguments)},P=globalThis&&globalThis.__awaiter||function(s,a,r,n){function t(e){return e instanceof r?e:new r(function(o){o(e)})}return new(r||(r=Promise))(function(e,o){function c(l){try{i(n.next(l))}catch(f){o(f)}}function u(l){try{i(n.throw(l))}catch(f){o(f)}}function i(l){l.done?e(l.value):t(l.value).then(c,u)}i((n=n.apply(s,a||[])).next())})},M=globalThis&&globalThis.__generator||function(s,a){var r={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},n,t,e,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(i){return function(l){return u([i,l])}}function u(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(r=0)),r;)try{if(n=1,t&&(e=i[0]&2?t.return:i[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,i[1])).done)return e;switch(t=0,e&&(i=[i[0]&2,e.value]),i[0]){case 0:case 1:e=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(e=r.trys,!(e=e.length>0&&e[e.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!e||i[1]>e[0]&&i[1]<e[3])){r.label=i[1];break}if(i[0]===6&&r.label<e[1]){r.label=e[1],e=i;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(i);break}e[2]&&r.ops.pop(),r.trys.pop();continue}i=a.call(s,r)}catch(l){i=[6,l],t=0}finally{n=e=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},F=globalThis&&globalThis.__read||function(s,a){var r=typeof Symbol=="function"&&s[Symbol.iterator];if(!r)return s;var n=r.call(s),t,e=[],o;try{for(;(a===void 0||a-- >0)&&!(t=n.next()).done;)e.push(t.value)}catch(c){o={error:c}}finally{try{t&&!t.done&&(r=n.return)&&r.call(n)}finally{if(o)throw o.error}}return e},ee=function(s){Z(a,s);function a(r,n){var t=s.call(this)||this;if(t._handleMessage=function(e){if(t._injectedProvider&&e.source===window||e.origin===t._providerUrl.origin&&e.source===t._popup){if(e.data.method==="connected"){var o=new R(e.data.params.publicKey);(!t._publicKey||!t._publicKey.equals(o))&&(t._publicKey&&!t._publicKey.equals(o)&&t._handleDisconnect(),t._publicKey=o,t._autoApprove=!!e.data.params.autoApprove,t.emit("connect",t._publicKey))}else if(e.data.method==="disconnected")t._handleDisconnect();else if((e.data.result||e.data.error)&&t._responsePromises.has(e.data.id)){var c=F(t._responsePromises.get(e.data.id),2),u=c[0],i=c[1];e.data.result?u(e.data.result):i(new Error(e.data.error))}}},t._handleConnect=function(){return t._handlerAdded||(t._handlerAdded=!0,window.addEventListener("message",t._handleMessage),window.addEventListener("beforeunload",t.disconnect)),t._injectedProvider?new Promise(function(e){t._sendRequest("connect",{}),e()}):(window.name="parent",t._popup=window.open(t._providerUrl.toString(),"_blank","location,resizable,width=460,height=675"),new Promise(function(e){t.once("connect",e)}))},t._handleDisconnect=function(){t._handlerAdded&&(t._handlerAdded=!1,window.removeEventListener("message",t._handleMessage),window.removeEventListener("beforeunload",t.disconnect)),t._publicKey&&(t._publicKey=null,t.emit("disconnect")),t._responsePromises.forEach(function(e,o){var c=F(e,2);c[0];var u=c[1];t._responsePromises.delete(o),u("Wallet disconnected")})},t._sendRequest=function(e,o){return P(t,void 0,void 0,function(){var c,u=this;return M(this,function(i){if(e!=="connect"&&!this.connected)throw new Error("Wallet not connected");return c=this._nextRequestId,++this._nextRequestId,[2,new Promise(function(l,f){u._responsePromises.set(c,[l,f]),u._injectedProvider?u._injectedProvider.postMessage({jsonrpc:"2.0",id:c,method:e,params:z({network:u._network},o)}):(u._popup.postMessage({jsonrpc:"2.0",id:c,method:e,params:o},u._providerUrl.origin),u.autoApprove||u._popup.focus())})]})})},t.connect=function(){return t._popup&&t._popup.close(),t._handleConnect()},t.disconnect=function(){return P(t,void 0,void 0,function(){return M(this,function(e){switch(e.label){case 0:return this._injectedProvider?[4,this._sendRequest("disconnect",{})]:[3,2];case 1:e.sent(),e.label=2;case 2:return this._popup&&this._popup.close(),this._handleDisconnect(),[2]}})})},t.sign=function(e,o){return P(t,void 0,void 0,function(){var c,u,i;return M(this,function(l){switch(l.label){case 0:if(!(e instanceof Uint8Array))throw new Error("Data must be an instance of Uint8Array");return[4,this._sendRequest("sign",{data:e,display:o})];case 1:return c=l.sent(),u=m.decode(c.signature),i=new R(c.publicKey),[2,{signature:u,publicKey:i}]}})})},t.signTransaction=function(e){return P(t,void 0,void 0,function(){var o,c,u;return M(this,function(i){switch(i.label){case 0:return[4,this._sendRequest("signTransaction",{message:m.encode(e.serializeMessage())})];case 1:return o=i.sent(),c=m.decode(o.signature),u=new R(o.publicKey),e.addSignature(u,c),[2,e]}})})},t.signAllTransactions=function(e){return P(t,void 0,void 0,function(){var o,c,u;return M(this,function(i){switch(i.label){case 0:return[4,this._sendRequest("signAllTransactions",{messages:e.map(function(l){return m.encode(l.serializeMessage())})})];case 1:return o=i.sent(),c=o.signatures.map(function(l){return m.decode(l)}),u=new R(o.publicKey),e=e.map(function(l,f){return l.addSignature(u,c[f]),l}),[2,e]}})})},t.signAndSendTransaction=function(e,o){return o===void 0&&(o={}),P(t,void 0,void 0,function(){var c,u,i;return M(this,function(l){switch(l.label){case 0:return[4,this._sendRequest("signAndSendTransaction",z({transaction:m.encode(e.serialize({requireAllSignatures:!1,verifySignatures:!1}))},o))];case 1:return c=l.sent(),u=c.publicKey,i=c.signature,[2,{publicKey:new R(u),signature:i}]}})})},te(r))t._injectedProvider=r;else if(ne(r))t._providerUrl=new URL(r),t._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:n}).toString();else throw new Error("provider parameter must be an injected provider or a URL string.");return t._network=n,t._publicKey=null,t._autoApprove=!1,t._popup=null,t._handlerAdded=!1,t._nextRequestId=1,t._responsePromises=new Map,t}return Object.defineProperty(a.prototype,"publicKey",{get:function(){return this._publicKey},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"connected",{get:function(){return this._publicKey!==null},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"autoApprove",{get:function(){return this._autoApprove},enumerable:!1,configurable:!0}),a}(L);function ne(s){return typeof s=="string"}function te(s){return re(s)&&ie(s.postMessage)}function re(s){return typeof s=="object"&&s!==null}function ie(s){return typeof s=="function"}var oe=globalThis&&globalThis.__extends||function(){var s=function(a,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},s(a,r)};return function(a,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(a,r);function n(){this.constructor=a}a.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),O=globalThis&&globalThis.__awaiter||function(s,a,r,n){function t(e){return e instanceof r?e:new r(function(o){o(e)})}return new(r||(r=Promise))(function(e,o){function c(l){try{i(n.next(l))}catch(f){o(f)}}function u(l){try{i(n.throw(l))}catch(f){o(f)}}function i(l){l.done?e(l.value):t(l.value).then(c,u)}i((n=n.apply(s,a||[])).next())})},j=globalThis&&globalThis.__generator||function(s,a){var r={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},n,t,e,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(i){return function(l){return u([i,l])}}function u(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(r=0)),r;)try{if(n=1,t&&(e=i[0]&2?t.return:i[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,i[1])).done)return e;switch(t=0,e&&(i=[i[0]&2,e.value]),i[0]){case 0:case 1:e=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(e=r.trys,!(e=e.length>0&&e[e.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!e||i[1]>e[0]&&i[1]<e[3])){r.label=i[1];break}if(i[0]===6&&r.label<e[1]){r.label=e[1],e=i;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(i);break}e[2]&&r.ops.pop(),r.trys.pop();continue}i=a.call(s,r)}catch(l){i=[6,l],t=0}finally{n=e=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},ae=function(s){oe(a,s);function a(r,n,t){var e=s.call(this)||this;return e._instance=null,e.handleMessage=function(o){},e._sendRequest=function(o,c){return O(e,void 0,void 0,function(){var u,i;return j(this,function(l){switch(l.label){case 0:return!((u=this._instance)===null||u===void 0)&&u.sendRequest?[4,this._instance.sendRequest(o,c)]:[3,2];case 1:return[2,l.sent()];case 2:return!((i=this._instance)===null||i===void 0)&&i._sendRequest?[4,this._instance._sendRequest(o,c)]:[3,4];case 3:return[2,l.sent()];case 4:throw new Error("Unsupported version of `@project-serum/sol-wallet-adapter`")}})})},e._handleConnect=function(){e.emit("connect")},e._handleDisconnect=function(){window.clearInterval(e._pollTimer),e.emit("disconnect")},e._network=n,e._provider=t,e}return Object.defineProperty(a.prototype,"publicKey",{get:function(){return this._instance.publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"connected",{get:function(){return this._instance.connected||!1},enumerable:!1,configurable:!0}),a.prototype.connect=function(){return O(this,void 0,void 0,function(){var r=this;return j(this,function(n){switch(n.label){case 0:return this._instance=new ee(this._provider,this._network),this._instance.on("connect",this._handleConnect),this._instance.on("disconnect",this._handleDisconnect),this._pollTimer=window.setInterval(function(){var t,e;((e=(t=r._instance)===null||t===void 0?void 0:t._popup)===null||e===void 0?void 0:e.closed)!==!1&&r._handleDisconnect()},200),[4,this._instance.connect()];case 1:return n.sent(),[2]}})})},a.prototype.disconnect=function(){return O(this,void 0,void 0,function(){return j(this,function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return this._instance.removeAllListeners("connect"),this._instance.removeAllListeners("disconnect"),[4,this._instance.disconnect()];case 1:return r.sent(),[2]}})})},a.prototype.signTransaction=function(r){return O(this,void 0,void 0,function(){var n;return j(this,function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signTransaction",{message:m.encode(r)})];case 1:return n=t.sent(),[2,m.decode(n.signature)]}})})},a.prototype.signAllTransactions=function(r){return O(this,void 0,void 0,function(){var n;return j(this,function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signAllTransactions",{messages:r.map(function(e){return m.encode(e)})})];case 1:return n=t.sent(),[2,n.signatures.map(function(e){return m.decode(e)})]}})})},a.prototype.signAndSendTransaction=function(r,n){return O(this,void 0,void 0,function(){var t;return j(this,function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signAndSendTransaction",{transaction:m.encode(r),options:n})];case 1:return t=e.sent(),[2,t.signature]}})})},a.prototype.signMessage=function(r,n){return n===void 0&&(n="hex"),O(this,void 0,void 0,function(){var t;return j(this,function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.sign(r,n)];case 1:return t=e.sent().signature,[2,Uint8Array.from(t)]}})})},a}(G);let q;const se=new Uint8Array(16);function ce(){if(!q&&(q=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!q))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return q(se)}const w=[];for(let s=0;s<256;++s)w.push((s+256).toString(16).slice(1));function le(s,a=0){return w[s[a+0]]+w[s[a+1]]+w[s[a+2]]+w[s[a+3]]+"-"+w[s[a+4]]+w[s[a+5]]+"-"+w[s[a+6]]+w[s[a+7]]+"-"+w[s[a+8]]+w[s[a+9]]+"-"+w[s[a+10]]+w[s[a+11]]+w[s[a+12]]+w[s[a+13]]+w[s[a+14]]+w[s[a+15]]}const ue=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var $={randomUUID:ue};function fe(s,a,r){if($.randomUUID&&!a&&!s)return $.randomUUID();s=s||{};const n=s.random||(s.rng||ce)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,a){r=r||0;for(let t=0;t<16;++t)a[r+t]=n[t];return a}return le(n)}var de=globalThis&&globalThis.__extends||function(){var s=function(a,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},s(a,r)};return function(a,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(a,r);function n(){this.constructor=a}a.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),H=globalThis&&globalThis.__assign||function(){return H=Object.assign||function(s){for(var a,r=1,n=arguments.length;r<n;r++){a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(s[t]=a[t])}return s},H.apply(this,arguments)},U=globalThis&&globalThis.__awaiter||function(s,a,r,n){function t(e){return e instanceof r?e:new r(function(o){o(e)})}return new(r||(r=Promise))(function(e,o){function c(l){try{i(n.next(l))}catch(f){o(f)}}function u(l){try{i(n.throw(l))}catch(f){o(f)}}function i(l){l.done?e(l.value):t(l.value).then(c,u)}i((n=n.apply(s,a||[])).next())})},K=globalThis&&globalThis.__generator||function(s,a){var r={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},n,t,e,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(i){return function(l){return u([i,l])}}function u(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(r=0)),r;)try{if(n=1,t&&(e=i[0]&2?t.return:i[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,i[1])).done)return e;switch(t=0,e&&(i=[i[0]&2,e.value]),i[0]){case 0:case 1:e=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(e=r.trys,!(e=e.length>0&&e[e.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!e||i[1]>e[0]&&i[1]<e[3])){r.label=i[1];break}if(i[0]===6&&r.label<e[1]){r.label=e[1],e=i;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(i);break}e[2]&&r.ops.pop(),r.trys.pop();continue}i=a.call(s,r)}catch(l){i=[6,l],t=0}finally{n=e=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},N=function(s){de(a,s);function a(r,n){var t=this,e;return t=s.call(this)||this,t._publicKey=null,t._messageHandlers={},t.handleMessage=function(o){if(t._messageHandlers[o.id]){var c=t._messageHandlers[o.id],u=c.resolve,i=c.reject;delete t._messageHandlers[o.id],o.error?i(o.error):u(o.result)}},t._sendMessage=function(o){if(!t.connected)throw new Error("Wallet not connected");return new Promise(function(c,u){var i,l,f=fe();t._messageHandlers[f]={resolve:c,reject:u},(l=(i=t._iframe)===null||i===void 0?void 0:i.contentWindow)===null||l===void 0||l.postMessage({channel:"solflareWalletAdapterToIframe",data:H({id:f},o)},"*")})},t._iframe=r,t._publicKey=new R((e=n==null?void 0:n.toString)===null||e===void 0?void 0:e.call(n)),t}return Object.defineProperty(a.prototype,"publicKey",{get:function(){return this._publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"connected",{get:function(){return!0},enumerable:!1,configurable:!0}),a.prototype.connect=function(){return U(this,void 0,void 0,function(){return K(this,function(r){return[2]})})},a.prototype.disconnect=function(){return U(this,void 0,void 0,function(){return K(this,function(r){switch(r.label){case 0:return[4,this._sendMessage({method:"disconnect"})];case 1:return r.sent(),[2]}})})},a.prototype.signTransaction=function(r){var n;return U(this,void 0,void 0,function(){var t,e;return K(this,function(o){switch(o.label){case 0:if(!this.connected)throw new Error("Wallet not connected");o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this._sendMessage({method:"signTransaction",params:{message:m.encode(r)}})];case 2:return t=o.sent().signature,[2,m.decode(t)];case 3:throw e=o.sent(),new Error(((n=e==null?void 0:e.toString)===null||n===void 0?void 0:n.call(e))||"Failed to sign transaction");case 4:return[2]}})})},a.prototype.signAllTransactions=function(r){var n;return U(this,void 0,void 0,function(){var t,e;return K(this,function(o){switch(o.label){case 0:if(!this.connected)throw new Error("Wallet not connected");o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAllTransactions",params:{messages:r.map(function(c){return m.encode(c)})}})];case 2:return t=o.sent().signatures,[2,t.map(function(c){return m.decode(c)})];case 3:throw e=o.sent(),new Error(((n=e==null?void 0:e.toString)===null||n===void 0?void 0:n.call(e))||"Failed to sign transactions");case 4:return[2]}})})},a.prototype.signAndSendTransaction=function(r,n){var t;return U(this,void 0,void 0,function(){var e,o;return K(this,function(c){switch(c.label){case 0:if(!this.connected)throw new Error("Wallet not connected");c.label=1;case 1:return c.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAndSendTransaction",params:{transaction:m.encode(r),options:n}})];case 2:return e=c.sent(),[2,e];case 3:throw o=c.sent(),new Error(((t=o==null?void 0:o.toString)===null||t===void 0?void 0:t.call(o))||"Failed to sign and send transaction");case 4:return[2]}})})},a.prototype.signMessage=function(r,n){var t;return n===void 0&&(n="hex"),U(this,void 0,void 0,function(){var e,o;return K(this,function(c){switch(c.label){case 0:if(!this.connected)throw new Error("Wallet not connected");c.label=1;case 1:return c.trys.push([1,3,,4]),[4,this._sendMessage({method:"signMessage",params:{data:r,display:n}})];case 2:return e=c.sent(),[2,Uint8Array.from(m.decode(e))];case 3:throw o=c.sent(),new Error(((t=o==null?void 0:o.toString)===null||t===void 0?void 0:t.call(o))||"Failed to sign message");case 4:return[2]}})})},a}(G);function k(s){return s.version===void 0}var he="1.4.1",pe=globalThis&&globalThis.__extends||function(){var s=function(a,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},s(a,r)};return function(a,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(a,r);function n(){this.constructor=a}a.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),C=globalThis&&globalThis.__assign||function(){return C=Object.assign||function(s){for(var a,r=1,n=arguments.length;r<n;r++){a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(s[t]=a[t])}return s},C.apply(this,arguments)},S=globalThis&&globalThis.__awaiter||function(s,a,r,n){function t(e){return e instanceof r?e:new r(function(o){o(e)})}return new(r||(r=Promise))(function(e,o){function c(l){try{i(n.next(l))}catch(f){o(f)}}function u(l){try{i(n.throw(l))}catch(f){o(f)}}function i(l){l.done?e(l.value):t(l.value).then(c,u)}i((n=n.apply(s,a||[])).next())})},I=globalThis&&globalThis.__generator||function(s,a){var r={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},n,t,e,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(i){return function(l){return u([i,l])}}function u(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(r=0)),r;)try{if(n=1,t&&(e=i[0]&2?t.return:i[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,i[1])).done)return e;switch(t=0,e&&(i=[i[0]&2,e.value]),i[0]){case 0:case 1:e=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(e=r.trys,!(e=e.length>0&&e[e.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!e||i[1]>e[0]&&i[1]<e[3])){r.label=i[1];break}if(i[0]===6&&r.label<e[1]){r.label=e[1],e=i;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(i);break}e[2]&&r.ops.pop(),r.trys.pop();continue}i=a.call(s,r)}catch(l){i=[6,l],t=0}finally{n=e=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},ve=globalThis&&globalThis.__values||function(s){var a=typeof Symbol=="function"&&Symbol.iterator,r=a&&s[a],n=0;if(r)return r.call(s);if(s&&typeof s.length=="number")return{next:function(){return s&&n>=s.length&&(s=void 0),{value:s&&s[n++],done:!s}}};throw new TypeError(a?"Object is not iterable.":"Symbol.iterator is not defined.")},ge=function(s){pe(a,s);function a(r){var n=s.call(this)||this;return n._network="mainnet-beta",n._provider=null,n._iframeParams={},n._adapterInstance=null,n._element=null,n._iframe=null,n._connectHandler=null,n._flutterHandlerInterval=null,n._handleEvent=function(t){var e,o,c,u;switch(t.type){case"connect_native_web":{n._collapseIframe(),n._adapterInstance=new ae(n._iframe,n._network,((e=t.data)===null||e===void 0?void 0:e.provider)||n._provider||"https://solflare.com/provider"),n._adapterInstance.on("connect",n._webConnected),n._adapterInstance.on("disconnect",n._webDisconnected),n._adapterInstance.connect(),n._setPreferredAdapter("native_web");return}case"connect":{n._collapseIframe(),n._adapterInstance=new N(n._iframe,((o=t.data)===null||o===void 0?void 0:o.publicKey)||""),n._adapterInstance.connect(),n._setPreferredAdapter((c=t.data)===null||c===void 0?void 0:c.adapter),n._connectHandler&&(n._connectHandler.resolve(),n._connectHandler=null),n.emit("connect",n.publicKey);return}case"disconnect":{n._connectHandler&&(n._connectHandler.reject(),n._connectHandler=null),n._disconnected(),n.emit("disconnect");return}case"accountChanged":{!((u=t.data)===null||u===void 0)&&u.publicKey?(n._adapterInstance=new N(n._iframe,t.data.publicKey),n._adapterInstance.connect(),n.emit("accountChanged",n.publicKey)):n.emit("accountChanged",void 0);return}case"collapse":{n._collapseIframe();return}default:return}},n._handleResize=function(t){t.resizeMode==="full"?t.params.mode==="fullscreen"?n._expandIframe():t.params.mode==="hide"&&n._collapseIframe():t.resizeMode==="coordinates"&&n._iframe&&(n._iframe.style.top=isFinite(t.params.top)?"".concat(t.params.top,"px"):"",n._iframe.style.bottom=isFinite(t.params.bottom)?"".concat(t.params.bottom,"px"):"",n._iframe.style.left=isFinite(t.params.left)?"".concat(t.params.left,"px"):"",n._iframe.style.right=isFinite(t.params.right)?"".concat(t.params.right,"px"):"",n._iframe.style.width=isFinite(t.params.width)?"".concat(t.params.width,"px"):t.params.width,n._iframe.style.height=isFinite(t.params.height)?"".concat(t.params.height,"px"):t.params.height)},n._handleMessage=function(t){var e;if(((e=t.data)===null||e===void 0?void 0:e.channel)==="solflareIframeToWalletAdapter"){var o=t.data.data||{};o.type==="event"?n._handleEvent(o.event):o.type==="resize"?n._handleResize(o):o.type==="response"&&n._adapterInstance&&n._adapterInstance.handleMessage(o)}},n._removeElement=function(){n._flutterHandlerInterval!==null&&(clearInterval(n._flutterHandlerInterval),n._flutterHandlerInterval=null),n._element&&(n._element.remove(),n._element=null)},n._removeDanglingElements=function(){var t,e,o=document.getElementsByClassName("solflare-wallet-adapter-iframe");try{for(var c=ve(o),u=c.next();!u.done;u=c.next()){var i=u.value;i.parentElement&&i.remove()}}catch(l){t={error:l}}finally{try{u&&!u.done&&(e=c.return)&&e.call(c)}finally{if(t)throw t.error}}},n._injectElement=function(){n._removeElement(),n._removeDanglingElements();var t=C(C({},n._iframeParams),{cluster:n._network||"mainnet-beta",origin:window.location.origin||"",title:document.title||"",version:1,sdkVersion:he}),e=n._getPreferredAdapter();e&&(t.adapter=e),n._provider&&(t.provider=n._provider);var o=Object.keys(t).map(function(u){return"".concat(u,"=").concat(encodeURIComponent(t[u]))}).join("&"),c="".concat(a.IFRAME_URL,"?").concat(o);n._element=document.createElement("div"),n._element.className="solflare-wallet-adapter-iframe",n._element.innerHTML=`
      <iframe src='`.concat(c,`' referrerPolicy='strict-origin-when-cross-origin' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>
    `),document.body.appendChild(n._element),n._iframe=n._element.querySelector("iframe"),window.fromFlutter=n._handleMobileMessage,n._flutterHandlerInterval=setInterval(function(){window.fromFlutter=n._handleMobileMessage},100),window.addEventListener("message",n._handleMessage,!1)},n._collapseIframe=function(){n._iframe&&(n._iframe.style.top="",n._iframe.style.right="",n._iframe.style.height="2px",n._iframe.style.width="2px")},n._expandIframe=function(){n._iframe&&(n._iframe.style.top="0px",n._iframe.style.bottom="0px",n._iframe.style.left="0px",n._iframe.style.right="0px",n._iframe.style.width="100%",n._iframe.style.height="100%")},n._getPreferredAdapter=function(){return localStorage&&localStorage.getItem("solflarePreferredWalletAdapter")||null},n._setPreferredAdapter=function(t){localStorage&&t&&localStorage.setItem("solflarePreferredWalletAdapter",t)},n._clearPreferredAdapter=function(){localStorage&&localStorage.removeItem("solflarePreferredWalletAdapter")},n._webConnected=function(){n._connectHandler&&(n._connectHandler.resolve(),n._connectHandler=null),n.emit("connect",n.publicKey)},n._webDisconnected=function(){n._connectHandler&&(n._connectHandler.reject(),n._connectHandler=null),n._disconnected(),n.emit("disconnect")},n._disconnected=function(){window.removeEventListener("message",n._handleMessage,!1),n._removeElement(),n._clearPreferredAdapter(),n._adapterInstance=null},n._handleMobileMessage=function(t){var e,o;(o=(e=n._iframe)===null||e===void 0?void 0:e.contentWindow)===null||o===void 0||o.postMessage({channel:"solflareMobileToIframe",data:t},"*")},r!=null&&r.network&&(n._network=r==null?void 0:r.network),r!=null&&r.provider&&(n._provider=r==null?void 0:r.provider),r!=null&&r.params&&(n._iframeParams=C({},r==null?void 0:r.params)),n}return Object.defineProperty(a.prototype,"publicKey",{get:function(){var r;return((r=this._adapterInstance)===null||r===void 0?void 0:r.publicKey)||null},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"isConnected",{get:function(){var r;return!!(!((r=this._adapterInstance)===null||r===void 0)&&r.connected)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"connected",{get:function(){return this.isConnected},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"autoApprove",{get:function(){return!1},enumerable:!1,configurable:!0}),a.prototype.connect=function(){return S(this,void 0,void 0,function(){var r=this;return I(this,function(n){switch(n.label){case 0:return this.connected?[2]:(this._injectElement(),[4,new Promise(function(t,e){r._connectHandler={resolve:t,reject:e}})]);case 1:return n.sent(),[2]}})})},a.prototype.disconnect=function(){return S(this,void 0,void 0,function(){return I(this,function(r){switch(r.label){case 0:return this._adapterInstance?[4,this._adapterInstance.disconnect()]:[2];case 1:return r.sent(),this._disconnected(),this.emit("disconnect"),[2]}})})},a.prototype.signTransaction=function(r){return S(this,void 0,void 0,function(){var n,t,e,o,c=this;return I(this,function(u){switch(u.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return n=k(r)?r.serializeMessage():r.message.serialize(),[4,this._adapterInstance.signTransaction(n)];case 1:return t=u.sent(),k(r)?r.addSignature(this.publicKey,D.Buffer.from(t)):(e=r.message.staticAccountKeys.slice(0,r.message.header.numRequiredSignatures),o=e.findIndex(function(i){return i.equals(c.publicKey)}),o>=0&&(r.signatures[o]=t)),[2,r]}})})},a.prototype.signAllTransactions=function(r){return S(this,void 0,void 0,function(){var n,t,e,o,c,u,i=this;return I(this,function(l){switch(l.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return n=r.map(function(f){return k(f)?f.serializeMessage():f.message.serialize()}),[4,this._adapterInstance.signAllTransactions(n)];case 1:for(t=l.sent(),e=0;e<r.length;e++)o=r[e],k(o)?o.addSignature(this.publicKey,D.Buffer.from(t[e])):(c=o.message.staticAccountKeys.slice(0,o.message.header.numRequiredSignatures),u=c.findIndex(function(f){return f.equals(i.publicKey)}),u>=0&&(o.signatures[u]=t[e]));return[2,r]}})})},a.prototype.signAndSendTransaction=function(r,n){return S(this,void 0,void 0,function(){var t;return I(this,function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return t=k(r)?r.serialize({verifySignatures:!1,requireAllSignatures:!1}):r.serialize(),[4,this._adapterInstance.signAndSendTransaction(t,n)];case 1:return[2,e.sent()]}})})},a.prototype.signMessage=function(r,n){return n===void 0&&(n="utf8"),S(this,void 0,void 0,function(){return I(this,function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signMessage(r,n)];case 1:return[2,t.sent()]}})})},a.prototype.sign=function(r,n){return n===void 0&&(n="utf8"),S(this,void 0,void 0,function(){return I(this,function(t){switch(t.label){case 0:return[4,this.signMessage(r,n)];case 1:return[2,t.sent()]}})})},a.prototype.detectWallet=function(r){var n;return r===void 0&&(r=10),S(this,void 0,void 0,function(){return I(this,function(t){return window.SolflareApp||((n=window.solflare)===null||n===void 0?void 0:n.isSolflare)?[2,!0]:[2,new Promise(function(e){var o,c;o=setInterval(function(){var u;(window.SolflareApp||((u=window.solflare)===null||u===void 0?void 0:u.isSolflare))&&(clearInterval(o),clearTimeout(c),e(!0))},500),c=setTimeout(function(){clearInterval(o),e(!1)},r*1e3)})]})})},a.IFRAME_URL="https://connect.solflare.com/",a}(L);export{ge as default};
