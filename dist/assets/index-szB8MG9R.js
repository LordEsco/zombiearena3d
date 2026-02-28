(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Eh={exports:{}},Xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function wy(){if(u_)return Xo;u_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Xo.Fragment=t,Xo.jsx=i,Xo.jsxs=i,Xo}var f_;function Dy(){return f_||(f_=1,Eh.exports=wy()),Eh.exports}var jt=Dy(),bh={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function Uy(){if(h_)return re;h_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function S(P,Y,_t){this.props=P,this.context=Y,this.refs=y,this.updater=_t||b}S.prototype.isReactComponent={},S.prototype.setState=function(P,Y){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Y,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function w(){}w.prototype=S.prototype;function L(P,Y,_t){this.props=P,this.context=Y,this.refs=y,this.updater=_t||b}var N=L.prototype=new w;N.constructor=L,C(N,S.prototype),N.isPureReactComponent=!0;var k=Array.isArray;function I(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function D(P,Y,_t){var At=_t.ref;return{$$typeof:r,type:P,key:Y,ref:At!==void 0?At:null,props:_t}}function pt(P,Y){return D(P.type,Y,P.props)}function H(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function tt(P){var Y={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(_t){return Y[_t]})}var at=/\/+/g;function lt(P,Y){return typeof P=="object"&&P!==null&&P.key!=null?tt(""+P.key):Y.toString(36)}function $(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(I,I):(P.status="pending",P.then(function(Y){P.status==="pending"&&(P.status="fulfilled",P.value=Y)},function(Y){P.status==="pending"&&(P.status="rejected",P.reason=Y)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function O(P,Y,_t,At,Bt){var nt=typeof P;(nt==="undefined"||nt==="boolean")&&(P=null);var vt=!1;if(P===null)vt=!0;else switch(nt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(P.$$typeof){case r:case t:vt=!0;break;case v:return vt=P._init,O(vt(P._payload),Y,_t,At,Bt)}}if(vt)return Bt=Bt(P),vt=At===""?"."+lt(P,0):At,k(Bt)?(_t="",vt!=null&&(_t=vt.replace(at,"$&/")+"/"),O(Bt,Y,_t,"",function(Kt){return Kt})):Bt!=null&&(H(Bt)&&(Bt=pt(Bt,_t+(Bt.key==null||P&&P.key===Bt.key?"":(""+Bt.key).replace(at,"$&/")+"/")+vt)),Y.push(Bt)),1;vt=0;var bt=At===""?".":At+":";if(k(P))for(var Vt=0;Vt<P.length;Vt++)At=P[Vt],nt=bt+lt(At,Vt),vt+=O(At,Y,_t,nt,Bt);else if(Vt=M(P),typeof Vt=="function")for(P=Vt.call(P),Vt=0;!(At=P.next()).done;)At=At.value,nt=bt+lt(At,Vt++),vt+=O(At,Y,_t,nt,Bt);else if(nt==="object"){if(typeof P.then=="function")return O($(P),Y,_t,At,Bt);throw Y=String(P),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return vt}function B(P,Y,_t){if(P==null)return P;var At=[],Bt=0;return O(P,At,"","",function(nt){return Y.call(_t,nt,Bt++)}),At}function ot(P){if(P._status===-1){var Y=P._result;Y=Y(),Y.then(function(_t){(P._status===0||P._status===-1)&&(P._status=1,P._result=_t)},function(_t){(P._status===0||P._status===-1)&&(P._status=2,P._result=_t)}),P._status===-1&&(P._status=0,P._result=Y)}if(P._status===1)return P._result.default;throw P._result}var ht=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Et={map:B,forEach:function(P,Y,_t){B(P,function(){Y.apply(this,arguments)},_t)},count:function(P){var Y=0;return B(P,function(){Y++}),Y},toArray:function(P){return B(P,function(Y){return Y})||[]},only:function(P){if(!H(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return re.Activity=x,re.Children=Et,re.Component=S,re.Fragment=i,re.Profiler=l,re.PureComponent=L,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,re.__COMPILER_RUNTIME={__proto__:null,c:function(P){return F.H.useMemoCache(P)}},re.cache=function(P){return function(){return P.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(P,Y,_t){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var At=C({},P.props),Bt=P.key;if(Y!=null)for(nt in Y.key!==void 0&&(Bt=""+Y.key),Y)!T.call(Y,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&Y.ref===void 0||(At[nt]=Y[nt]);var nt=arguments.length-2;if(nt===1)At.children=_t;else if(1<nt){for(var vt=Array(nt),bt=0;bt<nt;bt++)vt[bt]=arguments[bt+2];At.children=vt}return D(P.type,Bt,At)},re.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},re.createElement=function(P,Y,_t){var At,Bt={},nt=null;if(Y!=null)for(At in Y.key!==void 0&&(nt=""+Y.key),Y)T.call(Y,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Bt[At]=Y[At]);var vt=arguments.length-2;if(vt===1)Bt.children=_t;else if(1<vt){for(var bt=Array(vt),Vt=0;Vt<vt;Vt++)bt[Vt]=arguments[Vt+2];Bt.children=bt}if(P&&P.defaultProps)for(At in vt=P.defaultProps,vt)Bt[At]===void 0&&(Bt[At]=vt[At]);return D(P,nt,Bt)},re.createRef=function(){return{current:null}},re.forwardRef=function(P){return{$$typeof:d,render:P}},re.isValidElement=H,re.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:ot}},re.memo=function(P,Y){return{$$typeof:p,type:P,compare:Y===void 0?null:Y}},re.startTransition=function(P){var Y=F.T,_t={};F.T=_t;try{var At=P(),Bt=F.S;Bt!==null&&Bt(_t,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(I,ht)}catch(nt){ht(nt)}finally{Y!==null&&_t.types!==null&&(Y.types=_t.types),F.T=Y}},re.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},re.use=function(P){return F.H.use(P)},re.useActionState=function(P,Y,_t){return F.H.useActionState(P,Y,_t)},re.useCallback=function(P,Y){return F.H.useCallback(P,Y)},re.useContext=function(P){return F.H.useContext(P)},re.useDebugValue=function(){},re.useDeferredValue=function(P,Y){return F.H.useDeferredValue(P,Y)},re.useEffect=function(P,Y){return F.H.useEffect(P,Y)},re.useEffectEvent=function(P){return F.H.useEffectEvent(P)},re.useId=function(){return F.H.useId()},re.useImperativeHandle=function(P,Y,_t){return F.H.useImperativeHandle(P,Y,_t)},re.useInsertionEffect=function(P,Y){return F.H.useInsertionEffect(P,Y)},re.useLayoutEffect=function(P,Y){return F.H.useLayoutEffect(P,Y)},re.useMemo=function(P,Y){return F.H.useMemo(P,Y)},re.useOptimistic=function(P,Y){return F.H.useOptimistic(P,Y)},re.useReducer=function(P,Y,_t){return F.H.useReducer(P,Y,_t)},re.useRef=function(P){return F.H.useRef(P)},re.useState=function(P){return F.H.useState(P)},re.useSyncExternalStore=function(P,Y,_t){return F.H.useSyncExternalStore(P,Y,_t)},re.useTransition=function(){return F.H.useTransition()},re.version="19.2.4",re}var d_;function cp(){return d_||(d_=1,bh.exports=Uy()),bh.exports}var _i=cp(),Th={exports:{}},Wo={},Ah={exports:{}},Rh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function Ly(){return p_||(p_=1,(function(r){function t(O,B){var ot=O.length;O.push(B);t:for(;0<ot;){var ht=ot-1>>>1,Et=O[ht];if(0<l(Et,B))O[ht]=B,O[ot]=Et,ot=ht;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var B=O[0],ot=O.pop();if(ot!==B){O[0]=ot;t:for(var ht=0,Et=O.length,P=Et>>>1;ht<P;){var Y=2*(ht+1)-1,_t=O[Y],At=Y+1,Bt=O[At];if(0>l(_t,ot))At<Et&&0>l(Bt,_t)?(O[ht]=Bt,O[At]=ot,ht=At):(O[ht]=_t,O[Y]=ot,ht=Y);else if(At<Et&&0>l(Bt,ot))O[ht]=Bt,O[At]=ot,ht=At;else break t}}return B}function l(O,B){var ot=O.sortIndex-B.sortIndex;return ot!==0?ot:O.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,x=null,g=3,M=!1,b=!1,C=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(O){for(var B=i(p);B!==null;){if(B.callback===null)s(p);else if(B.startTime<=O)s(p),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(p)}}function k(O){if(C=!1,N(O),!b)if(i(m)!==null)b=!0,I||(I=!0,tt());else{var B=i(p);B!==null&&$(k,B.startTime-O)}}var I=!1,F=-1,T=5,D=-1;function pt(){return y?!0:!(r.unstable_now()-D<T)}function H(){if(y=!1,I){var O=r.unstable_now();D=O;var B=!0;try{t:{b=!1,C&&(C=!1,w(F),F=-1),M=!0;var ot=g;try{e:{for(N(O),x=i(m);x!==null&&!(x.expirationTime>O&&pt());){var ht=x.callback;if(typeof ht=="function"){x.callback=null,g=x.priorityLevel;var Et=ht(x.expirationTime<=O);if(O=r.unstable_now(),typeof Et=="function"){x.callback=Et,N(O),B=!0;break e}x===i(m)&&s(m),N(O)}else s(m);x=i(m)}if(x!==null)B=!0;else{var P=i(p);P!==null&&$(k,P.startTime-O),B=!1}}break t}finally{x=null,g=ot,M=!1}B=void 0}}finally{B?tt():I=!1}}}var tt;if(typeof L=="function")tt=function(){L(H)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,lt=at.port2;at.port1.onmessage=H,tt=function(){lt.postMessage(null)}}else tt=function(){S(H,0)};function $(O,B){F=S(function(){O(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(O){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var ot=g;g=B;try{return O()}finally{g=ot}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ot=g;g=O;try{return B()}finally{g=ot}},r.unstable_scheduleCallback=function(O,B,ot){var ht=r.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?ht+ot:ht):ot=ht,O){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=ot+Et,O={id:v++,callback:B,priorityLevel:O,startTime:ot,expirationTime:Et,sortIndex:-1},ot>ht?(O.sortIndex=ot,t(p,O),i(m)===null&&O===i(p)&&(C?(w(F),F=-1):C=!0,$(k,ot-ht))):(O.sortIndex=Et,t(m,O),b||M||(b=!0,I||(I=!0,tt()))),O},r.unstable_shouldYield=pt,r.unstable_wrapCallback=function(O){var B=g;return function(){var ot=g;g=B;try{return O.apply(this,arguments)}finally{g=ot}}}})(Rh)),Rh}var m_;function Ny(){return m_||(m_=1,Ah.exports=Ly()),Ah.exports}var Ch={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function Oy(){if(g_)return Cn;g_=1;var r=cp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Cn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},Cn.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,x=d(v,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,x=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Cn.requestFormReset=function(m){s.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},Cn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Cn.version="19.2.4",Cn}var __;function Py(){if(__)return Ch.exports;__=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ch.exports=Oy(),Ch.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function By(){if(v_)return Wo;v_=1;var r=Ny(),t=cp(),i=Py();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,A=u.child;A;){if(A===a){_=!0,a=u,o=f;break}if(A===o){_=!0,o=u,a=f;break}A=A.sibling}if(!_){for(A=f.child;A;){if(A===a){_=!0,a=f,o=u;break}if(A===o){_=!0,o=f,a=u;break}A=A.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),pt=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case k:return"Suspense";case I:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case L:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:lt(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return lt(e(n))}catch{}}return null}var $=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},ht=[],Et=-1;function P(e){return{current:e}}function Y(e){0>Et||(e.current=ht[Et],ht[Et]=null,Et--)}function _t(e,n){Et++,ht[Et]=e.current,e.current=n}var At=P(null),Bt=P(null),nt=P(null),vt=P(null);function bt(e,n){switch(_t(nt,n),_t(Bt,e),_t(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?N0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=N0(n),e=O0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(At),_t(At,e)}function Vt(){Y(At),Y(Bt),Y(nt)}function Kt(e){e.memoizedState!==null&&_t(vt,e);var n=At.current,a=O0(n,e.type);n!==a&&(_t(Bt,e),_t(At,a))}function $t(e){Bt.current===e&&(Y(At),Y(Bt)),vt.current===e&&(Y(vt),Ho._currentValue=ot)}var Je,_e;function pe(e){if(Je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Je=n&&n[1]||"",_e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Je+e+_e}var Le=!1;function oe(e,n){if(!e||Le)return"";Le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(rt){var it=rt}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(rt){it=rt}e.call(gt.prototype)}}else{try{throw Error()}catch(rt){it=rt}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(rt){if(rt&&it&&typeof rt.stack=="string")return[rt.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],A=f[1];if(_&&A){var z=_.split(`
`),J=A.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===J.length)for(o=z.length-1,u=J.length-1;1<=o&&0<=u&&z[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==J[u]){var ft=`
`+z[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=u);break}}}finally{Le=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?pe(a):""}function Qe(e,n){switch(e.tag){case 26:case 27:case 5:return pe(e.type);case 16:return pe("Lazy");case 13:return e.child!==n&&n!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return oe(e.type,!1);case 11:return oe(e.type.render,!1);case 1:return oe(e.type,!0);case 31:return pe("Activity");default:return""}}function G(e){try{var n="",a=null;do n+=Qe(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var qe=Object.prototype.hasOwnProperty,be=r.unstable_scheduleCallback,Oe=r.unstable_cancelCallback,Wt=r.unstable_shouldYield,U=r.unstable_requestPaint,E=r.unstable_now,q=r.unstable_getCurrentPriorityLevel,dt=r.unstable_ImmediatePriority,xt=r.unstable_UserBlockingPriority,ut=r.unstable_NormalPriority,kt=r.unstable_LowPriority,Ct=r.unstable_IdlePriority,Zt=r.log,te=r.unstable_setDisableYieldValue,Mt=null,St=null;function Nt(e){if(typeof Zt=="function"&&te(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(Mt,e)}catch{}}var Lt=Math.clz32?Math.clz32:W,Ot=Math.log,ce=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ot(e)/ce|0)|0}var Rt=256,Tt=262144,Pt=4194304;function yt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ct(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=yt(o):(_&=A,_!==0?u=yt(_):a||(a=A&~e,a!==0&&(u=yt(a))))):(A=o&~f,A!==0?u=yt(A):_!==0?u=yt(_):a||(a=o&~e,a!==0&&(u=yt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ft(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Be(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Si(e,n,a,o,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,z=e.expirationTimes,J=e.hiddenUpdates;for(a=_&~a;0<a;){var ft=31-Lt(a),gt=1<<ft;A[ft]=0,z[ft]=-1;var it=J[ft];if(it!==null)for(J[ft]=null,ft=0;ft<it.length;ft++){var rt=it[ft];rt!==null&&(rt.lane&=-536870913)}a&=~gt}o!==0&&to(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function to(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Lt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Vs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Lt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function fl(e,n){var a=n&-n;return a=(a&42)!==0?1:ks(a),(a&(e.suspendedLanes|n))!==0?0:a}function ks(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Pi(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:i_(e.type))}function Ws(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var yi=Math.random().toString(36).slice(2),sn="__reactFiber$"+yi,pn="__reactProps$"+yi,Ji="__reactContainer$"+yi,wa="__reactEvents$"+yi,hl="__reactListeners$"+yi,dl="__reactHandles$"+yi,pl="__reactResources$"+yi,fs="__reactMarker$"+yi;function eo(e){delete e[sn],delete e[pn],delete e[wa],delete e[hl],delete e[dl]}function Da(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ji]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=G0(e);e!==null;){if(a=e[sn])return a;e=G0(e)}return n}e=a,a=e.parentNode}return null}function Ua(e){if(e=e[sn]||e[Ji]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function hs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function R(e){var n=e[pl];return n||(n=e[pl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(e){e[fs]=!0}var st=new Set,et={};function Z(e,n){wt(e,n),wt(e+"Capture",n)}function wt(e,n){for(et[e]=n,e=0;e<n.length;e++)st.add(n[e])}var zt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dt={},Xt={};function Yt(e){return qe.call(Xt,e)?!0:qe.call(Dt,e)?!1:zt.test(e)?Xt[e]=!0:(Dt[e]=!0,!1)}function ne(e,n,a){if(Yt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function se(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function It(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ue(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ye(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function je(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ce(e){if(!e._valueTracker){var n=Ye(e)?"checked":"value";e._valueTracker=je(e,n,""+e[n])}}function mn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ye(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Gt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var On=/[\n"\\]/g;function ae(e){return e.replace(On,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pn(e,n,a,o,u,f,_,A){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ue(n)):e.value!==""+ue(n)&&(e.value=""+ue(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?Mi(e,_,ue(n)):a!=null?Mi(e,_,ue(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ue(A):e.removeAttribute("name")}function jn(e,n,a,o,u,f,_,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ce(e);return}a=a!=null?""+ue(a):"",n=n!=null?""+ue(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Ce(e)}function Mi(e,n,a){n==="number"&&Gt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Zn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ue(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Pe(e,n,a){if(n!=null&&(n=""+ue(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ue(a):""}function rn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if($(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ue(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ce(e)}function Bn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var on=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ei(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||on.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function $i(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ei(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Ei(e,f,n[f])}function qs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ax=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(e){return Ax.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ta(){}var xu=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,js=null;function Lp(e){var n=Ua(e);if(n&&(e=n.stateNode)){var a=e[pn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Pn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ae(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[pn]||null;if(!u)throw Error(s(90));Pn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&mn(o)}break t;case"textarea":Pe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Zn(e,!!a.multiple,n,!1)}}}var yu=!1;function Np(e,n,a){if(yu)return e(n,a);yu=!0;try{var o=e(n);return o}finally{if(yu=!1,(Ys!==null||js!==null)&&(nc(),Ys&&(n=Ys,e=js,js=Ys=null,Lp(n),e)))for(n=0;n<e.length;n++)Lp(e[n])}}function no(e,n){var a=e.stateNode;if(a===null)return null;var o=a[pn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(ea)try{var io={};Object.defineProperty(io,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Mu=!1}var La=null,Eu=null,gl=null;function Op(){if(gl)return gl;var e,n=Eu,a=n.length,o,u="value"in La?La.value:La.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return gl=u.slice(e,1<o?1-o:void 0)}function _l(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function vl(){return!0}function Pp(){return!1}function Gn(e){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?vl:Pp,this.isPropagationStopped=Pp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Gn(ds),ao=x({},ds,{view:0,detail:0}),Rx=Gn(ao),bu,Tu,so,Sl=x({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==so&&(so&&e.type==="mousemove"?(bu=e.screenX-so.screenX,Tu=e.screenY-so.screenY):Tu=bu=0,so=e),bu)},movementY:function(e){return"movementY"in e?e.movementY:Tu}}),Bp=Gn(Sl),Cx=x({},Sl,{dataTransfer:0}),wx=Gn(Cx),Dx=x({},ao,{relatedTarget:0}),Au=Gn(Dx),Ux=x({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),Lx=Gn(Ux),Nx=x({},ds,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ox=Gn(Nx),Px=x({},ds,{data:0}),zp=Gn(Px),Bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ix(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Fx[e])?!!n[e]:!1}function Ru(){return Ix}var Hx=x({},ao,{key:function(e){if(e.key){var n=Bx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?_l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gx=Gn(Hx),Vx=x({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=Gn(Vx),kx=x({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),Xx=Gn(kx),Wx=x({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),qx=Gn(Wx),Yx=x({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jx=Gn(Yx),Zx=x({},ds,{newState:0,oldState:0}),Kx=Gn(Zx),Qx=[9,13,27,32],Cu=ea&&"CompositionEvent"in window,ro=null;ea&&"documentMode"in document&&(ro=document.documentMode);var Jx=ea&&"TextEvent"in window&&!ro,Ip=ea&&(!Cu||ro&&8<ro&&11>=ro),Hp=" ",Gp=!1;function Vp(e,n){switch(e){case"keyup":return Qx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zs=!1;function $x(e,n){switch(e){case"compositionend":return kp(n);case"keypress":return n.which!==32?null:(Gp=!0,Hp);case"textInput":return e=n.data,e===Hp&&Gp?null:e;default:return null}}function tS(e,n){if(Zs)return e==="compositionend"||!Cu&&Vp(e,n)?(e=Op(),gl=Eu=La=null,Zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ip&&n.locale!=="ko"?null:n.data;default:return null}}var eS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!eS[e.type]:n==="textarea"}function Wp(e,n,a,o){Ys?js?js.push(o):js=[o]:Ys=o,n=cc(n,"onChange"),0<n.length&&(a=new xl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var oo=null,lo=null;function nS(e){R0(e,0)}function yl(e){var n=hs(e);if(mn(n))return e}function qp(e,n){if(e==="change")return n}var Yp=!1;if(ea){var wu;if(ea){var Du="oninput"in document;if(!Du){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),Du=typeof jp.oninput=="function"}wu=Du}else wu=!1;Yp=wu&&(!document.documentMode||9<document.documentMode)}function Zp(){oo&&(oo.detachEvent("onpropertychange",Kp),lo=oo=null)}function Kp(e){if(e.propertyName==="value"&&yl(lo)){var n=[];Wp(n,lo,e,Su(e)),Np(nS,n)}}function iS(e,n,a){e==="focusin"?(Zp(),oo=n,lo=a,oo.attachEvent("onpropertychange",Kp)):e==="focusout"&&Zp()}function aS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(lo)}function sS(e,n){if(e==="click")return yl(n)}function rS(e,n){if(e==="input"||e==="change")return yl(n)}function oS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:oS;function co(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!qe.call(n,u)||!Kn(e[u],n[u]))return!1}return!0}function Qp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jp(e,n){var a=Qp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Qp(a)}}function $p(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?$p(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function tm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Gt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Gt(e.document)}return n}function Uu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var lS=ea&&"documentMode"in document&&11>=document.documentMode,Ks=null,Lu=null,uo=null,Nu=!1;function em(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nu||Ks==null||Ks!==Gt(o)||(o=Ks,"selectionStart"in o&&Uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),uo&&co(uo,o)||(uo=o,o=cc(Lu,"onSelect"),0<o.length&&(n=new xl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ks)))}function ps(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Qs={animationend:ps("Animation","AnimationEnd"),animationiteration:ps("Animation","AnimationIteration"),animationstart:ps("Animation","AnimationStart"),transitionrun:ps("Transition","TransitionRun"),transitionstart:ps("Transition","TransitionStart"),transitioncancel:ps("Transition","TransitionCancel"),transitionend:ps("Transition","TransitionEnd")},Ou={},nm={};ea&&(nm=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function ms(e){if(Ou[e])return Ou[e];if(!Qs[e])return e;var n=Qs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in nm)return Ou[e]=n[a];return e}var im=ms("animationend"),am=ms("animationiteration"),sm=ms("animationstart"),cS=ms("transitionrun"),uS=ms("transitionstart"),fS=ms("transitioncancel"),rm=ms("transitionend"),om=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function bi(e,n){om.set(e,n),Z(n,[e])}var Ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},li=[],Js=0,Bu=0;function El(){for(var e=Js,n=Bu=Js=0;n<e;){var a=li[n];li[n++]=null;var o=li[n];li[n++]=null;var u=li[n];li[n++]=null;var f=li[n];if(li[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&lm(a,u,f)}}function bl(e,n,a,o){li[Js++]=e,li[Js++]=n,li[Js++]=a,li[Js++]=o,Bu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function zu(e,n,a,o){return bl(e,n,a,o),Tl(e)}function gs(e,n){return bl(e,null,null,n),Tl(e)}function lm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Lt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Tl(e){if(50<No)throw No=0,Yf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var $s={};function hS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,o){return new hS(e,n,a,o)}function Fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function na(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function cm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Al(e,n,a,o,u,f){var _=0;if(o=e,typeof e=="function")Fu(e)&&(_=1);else if(typeof e=="string")_=_y(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Qn(31,a,n,u),e.elementType=D,e.lanes=f,e;case C:return _s(a.children,u,f,n);case y:_=8,u|=24;break;case S:return e=Qn(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case k:return e=Qn(13,a,n,u),e.elementType=k,e.lanes=f,e;case I:return e=Qn(19,a,n,u),e.elementType=I,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:_=10;break t;case w:_=9;break t;case N:_=11;break t;case F:_=14;break t;case T:_=16,o=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Qn(_,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function _s(e,n,a,o){return e=Qn(7,e,o,n),e.lanes=a,e}function Iu(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function um(e){var n=Qn(18,null,null,0);return n.stateNode=e,n}function Hu(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var fm=new WeakMap;function ci(e,n){if(typeof e=="object"&&e!==null){var a=fm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:G(n)},fm.set(e,n),n)}return{value:e,source:n,stack:G(n)}}var tr=[],er=0,Rl=null,fo=0,ui=[],fi=0,Na=null,Bi=1,zi="";function ia(e,n){tr[er++]=fo,tr[er++]=Rl,Rl=e,fo=n}function hm(e,n,a){ui[fi++]=Bi,ui[fi++]=zi,ui[fi++]=Na,Na=e;var o=Bi;e=zi;var u=32-Lt(o)-1;o&=~(1<<u),a+=1;var f=32-Lt(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Bi=1<<32-Lt(n)+u|a<<u|o,zi=f+e}else Bi=1<<f|a<<u|o,zi=e}function Gu(e){e.return!==null&&(ia(e,1),hm(e,1,0))}function Vu(e){for(;e===Rl;)Rl=tr[--er],tr[er]=null,fo=tr[--er],tr[er]=null;for(;e===Na;)Na=ui[--fi],ui[fi]=null,zi=ui[--fi],ui[fi]=null,Bi=ui[--fi],ui[fi]=null}function dm(e,n){ui[fi++]=Bi,ui[fi++]=zi,ui[fi++]=Na,Bi=n.id,zi=n.overflow,Na=e}var Mn=null,Xe=null,Me=!1,Oa=null,hi=!1,ku=Error(s(519));function Pa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ho(ci(n,e)),ku}function pm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[sn]=e,n[pn]=o,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<Po.length;a++)ge(Po[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),jn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),rn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||U0(n.textContent,a)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=ta),n=!0):n=!1,n||Pa(e,!0)}function mm(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:Mn=Mn.return}}function nr(e){if(e!==Mn)return!1;if(!Me)return mm(e),Me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||lh(e.type,e.memoizedProps)),a=!a),a&&Xe&&Pa(e),mm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Xe=H0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Xe=H0(e)}else n===27?(n=Xe,Za(e.type)?(e=dh,dh=null,Xe=e):Xe=n):Xe=Mn?pi(e.stateNode.nextSibling):null;return!0}function vs(){Xe=Mn=null,Me=!1}function Xu(){var e=Oa;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Oa=null),e}function ho(e){Oa===null?Oa=[e]:Oa.push(e)}var Wu=P(null),xs=null,aa=null;function Ba(e,n,a){_t(Wu,n._currentValue),n._currentValue=a}function sa(e){e._currentValue=Wu.current,Y(Wu)}function qu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Yu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var z=0;z<n.length;z++)if(A.context===n[z]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),qu(f.return,a,e),o||(_=null);break t}f=A.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),qu(_,a,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function ir(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var A=u.type;Kn(u.pendingProps.value,_.value)||(e!==null?e.push(A):e=[A])}}else if(u===vt.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ho):e=[Ho])}u=u.return}e!==null&&Yu(n,e,a,o),n.flags|=262144}function Cl(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ss(e){xs=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return gm(xs,e)}function wl(e,n){return xs===null&&Ss(e),gm(e,n)}function gm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},aa===null){if(e===null)throw Error(s(308));aa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else aa=aa.next=n;return a}var dS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},pS=r.unstable_scheduleCallback,mS=r.unstable_NormalPriority,ln={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new dS,data:new Map,refCount:0}}function po(e){e.refCount--,e.refCount===0&&pS(mS,function(){e.controller.abort()})}var mo=null,Zu=0,ar=0,sr=null;function gS(e,n){if(mo===null){var a=mo=[];Zu=0,ar=$f(),sr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Zu++,n.then(_m,_m),n}function _m(){if(--Zu===0&&mo!==null){sr!==null&&(sr.status="fulfilled");var e=mo;mo=null,ar=0,sr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function _S(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var vm=O.S;O.S=function(e,n){e0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&gS(e,n),vm!==null&&vm(e,n)};var ys=P(null);function Ku(){var e=ys.current;return e!==null?e:ke.pooledCache}function Dl(e,n){n===null?_t(ys,ys.current):_t(ys,n.pool)}function xm(){var e=Ku();return e===null?null:{parent:ln._currentValue,pool:e}}var rr=Error(s(460)),Qu=Error(s(474)),Ul=Error(s(542)),Ll={then:function(){}};function Sm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ym(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ta,ta),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Em(e),e;default:if(typeof n.status=="string")n.then(ta,ta);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Em(e),e}throw Es=n,rr}}function Ms(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Es=a,rr):a}}var Es=null;function Mm(){if(Es===null)throw Error(s(459));var e=Es;return Es=null,e}function Em(e){if(e===rr||e===Ul)throw Error(s(483))}var or=null,go=0;function Nl(e){var n=go;return go+=1,or===null&&(or=[]),ym(or,e,n)}function _o(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ol(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function bm(e){function n(j,V){if(e){var K=j.deletions;K===null?(j.deletions=[V],j.flags|=16):K.push(V)}}function a(j,V){if(!e)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function o(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function u(j,V){return j=na(j,V),j.index=0,j.sibling=null,j}function f(j,V,K){return j.index=K,e?(K=j.alternate,K!==null?(K=K.index,K<V?(j.flags|=67108866,V):K):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function _(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,V,K,mt){return V===null||V.tag!==6?(V=Iu(K,j.mode,mt),V.return=j,V):(V=u(V,K),V.return=j,V)}function z(j,V,K,mt){var Qt=K.type;return Qt===C?ft(j,V,K.props.children,mt,K.key):V!==null&&(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===T&&Ms(Qt)===V.type)?(V=u(V,K.props),_o(V,K),V.return=j,V):(V=Al(K.type,K.key,K.props,null,j.mode,mt),_o(V,K),V.return=j,V)}function J(j,V,K,mt){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Hu(K,j.mode,mt),V.return=j,V):(V=u(V,K.children||[]),V.return=j,V)}function ft(j,V,K,mt,Qt){return V===null||V.tag!==7?(V=_s(K,j.mode,mt,Qt),V.return=j,V):(V=u(V,K),V.return=j,V)}function gt(j,V,K){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Iu(""+V,j.mode,K),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return K=Al(V.type,V.key,V.props,null,j.mode,K),_o(K,V),K.return=j,K;case b:return V=Hu(V,j.mode,K),V.return=j,V;case T:return V=Ms(V),gt(j,V,K)}if($(V)||tt(V))return V=_s(V,j.mode,K,null),V.return=j,V;if(typeof V.then=="function")return gt(j,Nl(V),K);if(V.$$typeof===L)return gt(j,wl(j,V),K);Ol(j,V)}return null}function it(j,V,K,mt){var Qt=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Qt!==null?null:A(j,V,""+K,mt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return K.key===Qt?z(j,V,K,mt):null;case b:return K.key===Qt?J(j,V,K,mt):null;case T:return K=Ms(K),it(j,V,K,mt)}if($(K)||tt(K))return Qt!==null?null:ft(j,V,K,mt,null);if(typeof K.then=="function")return it(j,V,Nl(K),mt);if(K.$$typeof===L)return it(j,V,wl(j,K),mt);Ol(j,K)}return null}function rt(j,V,K,mt,Qt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get(K)||null,A(V,j,""+mt,Qt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case M:return j=j.get(mt.key===null?K:mt.key)||null,z(V,j,mt,Qt);case b:return j=j.get(mt.key===null?K:mt.key)||null,J(V,j,mt,Qt);case T:return mt=Ms(mt),rt(j,V,K,mt,Qt)}if($(mt)||tt(mt))return j=j.get(K)||null,ft(V,j,mt,Qt,null);if(typeof mt.then=="function")return rt(j,V,K,Nl(mt),Qt);if(mt.$$typeof===L)return rt(j,V,K,wl(V,mt),Qt);Ol(V,mt)}return null}function Ht(j,V,K,mt){for(var Qt=null,we=null,qt=V,fe=V=0,xe=null;qt!==null&&fe<K.length;fe++){qt.index>fe?(xe=qt,qt=null):xe=qt.sibling;var De=it(j,qt,K[fe],mt);if(De===null){qt===null&&(qt=xe);break}e&&qt&&De.alternate===null&&n(j,qt),V=f(De,V,fe),we===null?Qt=De:we.sibling=De,we=De,qt=xe}if(fe===K.length)return a(j,qt),Me&&ia(j,fe),Qt;if(qt===null){for(;fe<K.length;fe++)qt=gt(j,K[fe],mt),qt!==null&&(V=f(qt,V,fe),we===null?Qt=qt:we.sibling=qt,we=qt);return Me&&ia(j,fe),Qt}for(qt=o(qt);fe<K.length;fe++)xe=rt(qt,j,fe,K[fe],mt),xe!==null&&(e&&xe.alternate!==null&&qt.delete(xe.key===null?fe:xe.key),V=f(xe,V,fe),we===null?Qt=xe:we.sibling=xe,we=xe);return e&&qt.forEach(function(ts){return n(j,ts)}),Me&&ia(j,fe),Qt}function Jt(j,V,K,mt){if(K==null)throw Error(s(151));for(var Qt=null,we=null,qt=V,fe=V=0,xe=null,De=K.next();qt!==null&&!De.done;fe++,De=K.next()){qt.index>fe?(xe=qt,qt=null):xe=qt.sibling;var ts=it(j,qt,De.value,mt);if(ts===null){qt===null&&(qt=xe);break}e&&qt&&ts.alternate===null&&n(j,qt),V=f(ts,V,fe),we===null?Qt=ts:we.sibling=ts,we=ts,qt=xe}if(De.done)return a(j,qt),Me&&ia(j,fe),Qt;if(qt===null){for(;!De.done;fe++,De=K.next())De=gt(j,De.value,mt),De!==null&&(V=f(De,V,fe),we===null?Qt=De:we.sibling=De,we=De);return Me&&ia(j,fe),Qt}for(qt=o(qt);!De.done;fe++,De=K.next())De=rt(qt,j,fe,De.value,mt),De!==null&&(e&&De.alternate!==null&&qt.delete(De.key===null?fe:De.key),V=f(De,V,fe),we===null?Qt=De:we.sibling=De,we=De);return e&&qt.forEach(function(Cy){return n(j,Cy)}),Me&&ia(j,fe),Qt}function Ve(j,V,K,mt){if(typeof K=="object"&&K!==null&&K.type===C&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case M:t:{for(var Qt=K.key;V!==null;){if(V.key===Qt){if(Qt=K.type,Qt===C){if(V.tag===7){a(j,V.sibling),mt=u(V,K.props.children),mt.return=j,j=mt;break t}}else if(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===T&&Ms(Qt)===V.type){a(j,V.sibling),mt=u(V,K.props),_o(mt,K),mt.return=j,j=mt;break t}a(j,V);break}else n(j,V);V=V.sibling}K.type===C?(mt=_s(K.props.children,j.mode,mt,K.key),mt.return=j,j=mt):(mt=Al(K.type,K.key,K.props,null,j.mode,mt),_o(mt,K),mt.return=j,j=mt)}return _(j);case b:t:{for(Qt=K.key;V!==null;){if(V.key===Qt)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(j,V.sibling),mt=u(V,K.children||[]),mt.return=j,j=mt;break t}else{a(j,V);break}else n(j,V);V=V.sibling}mt=Hu(K,j.mode,mt),mt.return=j,j=mt}return _(j);case T:return K=Ms(K),Ve(j,V,K,mt)}if($(K))return Ht(j,V,K,mt);if(tt(K)){if(Qt=tt(K),typeof Qt!="function")throw Error(s(150));return K=Qt.call(K),Jt(j,V,K,mt)}if(typeof K.then=="function")return Ve(j,V,Nl(K),mt);if(K.$$typeof===L)return Ve(j,V,wl(j,K),mt);Ol(j,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,V!==null&&V.tag===6?(a(j,V.sibling),mt=u(V,K),mt.return=j,j=mt):(a(j,V),mt=Iu(K,j.mode,mt),mt.return=j,j=mt),_(j)):a(j,V)}return function(j,V,K,mt){try{go=0;var Qt=Ve(j,V,K,mt);return or=null,Qt}catch(qt){if(qt===rr||qt===Ul)throw qt;var we=Qn(29,qt,null,j.mode);return we.lanes=mt,we.return=j,we}finally{}}}var bs=bm(!0),Tm=bm(!1),za=!1;function Ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ia(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Tl(e),lm(e,null,a),n}return bl(e,o,n,a),Tl(e)}function vo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Vs(e,a)}}function tf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ef=!1;function xo(){if(ef){var e=sr;if(e!==null)throw e}}function So(e,n,a,o){ef=!1;var u=e.updateQueue;za=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var z=A,J=z.next;z.next=null,_===null?f=J:_.next=J,_=z;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==_&&(A===null?ft.firstBaseUpdate=J:A.next=J,ft.lastBaseUpdate=z))}if(f!==null){var gt=u.baseState;_=0,ft=J=z=null,A=f;do{var it=A.lane&-536870913,rt=it!==A.lane;if(rt?(ve&it)===it:(o&it)===it){it!==0&&it===ar&&(ef=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ht=e,Jt=A;it=n;var Ve=a;switch(Jt.tag){case 1:if(Ht=Jt.payload,typeof Ht=="function"){gt=Ht.call(Ve,gt,it);break t}gt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=Jt.payload,it=typeof Ht=="function"?Ht.call(Ve,gt,it):Ht,it==null)break t;gt=x({},gt,it);break t;case 2:za=!0}}it=A.callback,it!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[it]:rt.push(it))}else rt={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?(J=ft=rt,z=gt):ft=ft.next=rt,_|=it;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;rt=A,A=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);ft===null&&(z=gt),u.baseState=z,u.firstBaseUpdate=J,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),Xa|=_,e.lanes=_,e.memoizedState=gt}}function Am(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Rm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Am(a[e],n)}var lr=P(null),Pl=P(0);function Cm(e,n){e=pa,_t(Pl,e),_t(lr,n),pa=e|n.baseLanes}function nf(){_t(Pl,pa),_t(lr,lr.current)}function af(){pa=Pl.current,Y(lr),Y(Pl)}var Jn=P(null),di=null;function Ha(e){var n=e.alternate;_t(nn,nn.current&1),_t(Jn,e),di===null&&(n===null||lr.current!==null||n.memoizedState!==null)&&(di=e)}function sf(e){_t(nn,nn.current),_t(Jn,e),di===null&&(di=e)}function wm(e){e.tag===22?(_t(nn,nn.current),_t(Jn,e),di===null&&(di=e)):Ga()}function Ga(){_t(nn,nn.current),_t(Jn,Jn.current)}function $n(e){Y(Jn),di===e&&(di=null),Y(nn)}var nn=P(0);function Bl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fh(a)||hh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ra=0,le=null,He=null,cn=null,zl=!1,cr=!1,Ts=!1,Fl=0,yo=0,ur=null,vS=0;function $e(){throw Error(s(321))}function rf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Kn(e[a],n[a]))return!1;return!0}function of(e,n,a,o,u,f){return ra=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?hg:Mf,Ts=!1,f=a(o,u),Ts=!1,cr&&(f=Um(n,a,o,u)),Dm(e),f}function Dm(e){O.H=bo;var n=He!==null&&He.next!==null;if(ra=0,cn=He=le=null,zl=!1,yo=0,ur=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&Cl(e)&&(un=!0))}function Um(e,n,a,o){le=e;var u=0;do{if(cr&&(ur=null),yo=0,cr=!1,25<=u)throw Error(s(301));if(u+=1,cn=He=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=dg,f=n(a,o)}while(cr);return f}function xS(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?Mo(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(le.flags|=1024),n}function lf(){var e=Fl!==0;return Fl=0,e}function cf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function uf(e){if(zl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}zl=!1}ra=0,cn=He=le=null,cr=!1,yo=Fl=0,ur=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?le.memoizedState=cn=e:cn=cn.next=e,cn}function an(){if(He===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=cn===null?le.memoizedState:cn.next;if(n!==null)cn=n,He=e;else{if(e===null)throw le.alternate===null?Error(s(467)):Error(s(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},cn===null?le.memoizedState=cn=e:cn=cn.next=e}return cn}function Il(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var n=yo;return yo+=1,ur===null&&(ur=[]),e=ym(ur,e,n),n=le,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?hg:Mf),e}function Hl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mo(e);if(e.$$typeof===L)return En(e)}throw Error(s(438,String(e)))}function ff(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Il(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=pt;return n.index++,a}function oa(e,n){return typeof n=="function"?n(e):n}function Gl(e){var n=an();return hf(n,He,e)}function hf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=_=null,z=null,J=n,ft=!1;do{var gt=J.lane&-536870913;if(gt!==J.lane?(ve&gt)===gt:(ra&gt)===gt){var it=J.revertLane;if(it===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),gt===ar&&(ft=!0);else if((ra&it)===it){J=J.next,it===ar&&(ft=!0);continue}else gt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(A=z=gt,_=f):z=z.next=gt,le.lanes|=it,Xa|=it;gt=J.action,Ts&&a(f,gt),f=J.hasEagerState?J.eagerState:a(f,gt)}else it={lane:gt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(A=z=it,_=f):z=z.next=it,le.lanes|=gt,Xa|=gt;J=J.next}while(J!==null&&J!==n);if(z===null?_=f:z.next=A,!Kn(f,e.memoizedState)&&(un=!0,ft&&(a=sr,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=z,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function df(e){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);Kn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Lm(e,n,a){var o=le,u=an(),f=Me;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Kn((He||u).memoizedState,a);if(_&&(u.memoizedState=a,un=!0),u=u.queue,gf(Pm.bind(null,o,u,e),[e]),u.getSnapshot!==n||_||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,fr(9,{destroy:void 0},Om.bind(null,o,u,a,n),null),ke===null)throw Error(s(349));f||(ra&127)!==0||Nm(o,n,a)}return a}function Nm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Il(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Om(e,n,a,o){n.value=a,n.getSnapshot=o,Bm(n)&&zm(e)}function Pm(e,n,a){return a(function(){Bm(n)&&zm(e)})}function Bm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Kn(e,a)}catch{return!0}}function zm(e){var n=gs(e,2);n!==null&&qn(n,e,2)}function pf(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),Ts){Nt(!0);try{a()}finally{Nt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},n}function Fm(e,n,a,o){return e.baseState=a,hf(e,He,typeof o=="function"?o:oa)}function SS(e,n,a,o,u){if(Xl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Im(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Im(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=O.T,_={};O.T=_;try{var A=a(u,o),z=O.S;z!==null&&z(_,A),Hm(e,n,A)}catch(J){mf(e,n,J)}finally{f!==null&&_.types!==null&&(f.types=_.types),O.T=f}}else try{f=a(u,o),Hm(e,n,f)}catch(J){mf(e,n,J)}}function Hm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Gm(e,n,o)},function(o){return mf(e,n,o)}):Gm(e,n,a)}function Gm(e,n,a){n.status="fulfilled",n.value=a,Vm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Im(e,a)))}function mf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Vm(n),n=n.next;while(n!==o)}e.action=null}function Vm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function km(e,n){return n}function Xm(e,n){if(Me){var a=ke.formState;if(a!==null){t:{var o=le;if(Me){if(Xe){e:{for(var u=Xe,f=hi;u.nodeType!==8;){if(!f){u=null;break e}if(u=pi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Xe=pi(u.nextSibling),o=u.data==="F!";break t}}Pa(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:km,lastRenderedState:n},a.queue=o,a=cg.bind(null,le,o),o.dispatch=a,o=pf(!1),f=yf.bind(null,le,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=SS.bind(null,le,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Wm(e){var n=an();return qm(n,He,e)}function qm(e,n,a){if(n=hf(e,n,km)[0],e=Gl(oa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Mo(n)}catch(_){throw _===rr?Ul:_}else o=n;n=an();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,fr(9,{destroy:void 0},yS.bind(null,u,a),null)),[o,f,e]}function yS(e,n){e.action=n}function Ym(e){var n=an(),a=He;if(a!==null)return qm(n,a,e);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function fr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=le.updateQueue,n===null&&(n=Il(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function jm(){return an().memoizedState}function Vl(e,n,a,o){var u=zn();le.flags|=e,u.memoizedState=fr(1|n,{destroy:void 0},a,o===void 0?null:o)}function kl(e,n,a,o){var u=an();o=o===void 0?null:o;var f=u.memoizedState.inst;He!==null&&o!==null&&rf(o,He.memoizedState.deps)?u.memoizedState=fr(n,f,a,o):(le.flags|=e,u.memoizedState=fr(1|n,f,a,o))}function Zm(e,n){Vl(8390656,8,e,n)}function gf(e,n){kl(2048,8,e,n)}function MS(e){le.flags|=4;var n=le.updateQueue;if(n===null)n=Il(),le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Km(e){var n=an().memoizedState;return MS({ref:n,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Qm(e,n){return kl(4,2,e,n)}function Jm(e,n){return kl(4,4,e,n)}function $m(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function tg(e,n,a){a=a!=null?a.concat([e]):null,kl(4,4,$m.bind(null,n,e),a)}function _f(){}function eg(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&rf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function ng(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&rf(n,o[1]))return o[0];if(o=e(),Ts){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[o,n],o}function vf(e,n,a){return a===void 0||(ra&1073741824)!==0&&(ve&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=i0(),le.lanes|=e,Xa|=e,a)}function ig(e,n,a,o){return Kn(a,n)?a:lr.current!==null?(e=vf(e,a,o),Kn(e,n)||(un=!0),e):(ra&42)===0||(ra&1073741824)!==0&&(ve&261930)===0?(un=!0,e.memoizedState=a):(e=i0(),le.lanes|=e,Xa|=e,n)}function ag(e,n,a,o,u){var f=B.p;B.p=f!==0&&8>f?f:8;var _=O.T,A={};O.T=A,yf(e,!1,n,a);try{var z=u(),J=O.S;if(J!==null&&J(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ft=_S(z,o);Eo(e,n,ft,ni(e))}else Eo(e,n,o,ni(e))}catch(gt){Eo(e,n,{then:function(){},status:"rejected",reason:gt},ni())}finally{B.p=f,_!==null&&A.types!==null&&(_.types=A.types),O.T=_}}function ES(){}function xf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=sg(e).queue;ag(e,u,n,ot,a===null?ES:function(){return rg(e),a(o)})}function sg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function rg(e){var n=sg(e);n.next===null&&(n=e.alternate.memoizedState),Eo(e,n.next.queue,{},ni())}function Sf(){return En(Ho)}function og(){return an().memoizedState}function lg(){return an().memoizedState}function bS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();e=Fa(a);var o=Ia(n,e,a);o!==null&&(qn(o,n,a),vo(o,n,a)),n={cache:ju()},e.payload=n;return}n=n.return}}function TS(e,n,a){var o=ni();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Xl(e)?ug(n,a):(a=zu(e,n,a,o),a!==null&&(qn(a,e,o),fg(a,n,o)))}function cg(e,n,a){var o=ni();Eo(e,n,a,o)}function Eo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xl(e))ug(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,A=f(_,a);if(u.hasEagerState=!0,u.eagerState=A,Kn(A,_))return bl(e,n,u,0),ke===null&&El(),!1}catch{}finally{}if(a=zu(e,n,u,o),a!==null)return qn(a,e,o),fg(a,n,o),!0}return!1}function yf(e,n,a,o){if(o={lane:2,revertLane:$f(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Xl(e)){if(n)throw Error(s(479))}else n=zu(e,a,o,2),n!==null&&qn(n,e,2)}function Xl(e){var n=e.alternate;return e===le||n!==null&&n===le}function ug(e,n){cr=zl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function fg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Vs(e,a)}}var bo={readContext:En,use:Hl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};bo.useEffectEvent=$e;var hg={readContext:En,use:Hl,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:Zm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Vl(4194308,4,$m.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Vl(4194308,4,e,n)},useInsertionEffect:function(e,n){Vl(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var o=e();if(Ts){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=zn();if(a!==void 0){var u=a(n);if(Ts){Nt(!0);try{a(n)}finally{Nt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=TS.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=pf(e);var n=e.queue,a=cg.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:_f,useDeferredValue:function(e,n){var a=zn();return vf(a,e,n)},useTransition:function(){var e=pf(!1);return e=ag.bind(null,le,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=le,u=zn();if(Me){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ke===null)throw Error(s(349));(ve&127)!==0||Nm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Zm(Pm.bind(null,o,f,e),[e]),o.flags|=2048,fr(9,{destroy:void 0},Om.bind(null,o,f,a,n),null),a},useId:function(){var e=zn(),n=ke.identifierPrefix;if(Me){var a=zi,o=Bi;a=(o&~(1<<32-Lt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Fl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=vS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Sf,useFormState:Xm,useActionState:Xm,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=yf.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:ff,useCacheRefresh:function(){return zn().memoizedState=bS.bind(null,le)},useEffectEvent:function(e){var n=zn(),a={impl:e};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Mf={readContext:En,use:Hl,useCallback:eg,useContext:En,useEffect:gf,useImperativeHandle:tg,useInsertionEffect:Qm,useLayoutEffect:Jm,useMemo:ng,useReducer:Gl,useRef:jm,useState:function(){return Gl(oa)},useDebugValue:_f,useDeferredValue:function(e,n){var a=an();return ig(a,He.memoizedState,e,n)},useTransition:function(){var e=Gl(oa)[0],n=an().memoizedState;return[typeof e=="boolean"?e:Mo(e),n]},useSyncExternalStore:Lm,useId:og,useHostTransitionStatus:Sf,useFormState:Wm,useActionState:Wm,useOptimistic:function(e,n){var a=an();return Fm(a,He,e,n)},useMemoCache:ff,useCacheRefresh:lg};Mf.useEffectEvent=Km;var dg={readContext:En,use:Hl,useCallback:eg,useContext:En,useEffect:gf,useImperativeHandle:tg,useInsertionEffect:Qm,useLayoutEffect:Jm,useMemo:ng,useReducer:df,useRef:jm,useState:function(){return df(oa)},useDebugValue:_f,useDeferredValue:function(e,n){var a=an();return He===null?vf(a,e,n):ig(a,He.memoizedState,e,n)},useTransition:function(){var e=df(oa)[0],n=an().memoizedState;return[typeof e=="boolean"?e:Mo(e),n]},useSyncExternalStore:Lm,useId:og,useHostTransitionStatus:Sf,useFormState:Ym,useActionState:Ym,useOptimistic:function(e,n){var a=an();return He!==null?Fm(a,He,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ff,useCacheRefresh:lg};dg.useEffectEvent=Km;function Ef(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var bf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ni(),u=Fa(o);u.payload=n,a!=null&&(u.callback=a),n=Ia(e,u,o),n!==null&&(qn(n,e,o),vo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ni(),u=Fa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(e,u,o),n!==null&&(qn(n,e,o),vo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ni(),o=Fa(a);o.tag=2,n!=null&&(o.callback=n),n=Ia(e,o,a),n!==null&&(qn(n,e,a),vo(n,e,a))}};function pg(e,n,a,o,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!co(a,o)||!co(u,f):!0}function mg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&bf.enqueueReplaceState(n,n.state,null)}function As(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function gg(e){Ml(e)}function _g(e){console.error(e)}function vg(e){Ml(e)}function Wl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function xg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tf(e,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Wl(e,n)},a}function Sg(e){return e=Fa(e),e.tag=3,e}function yg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){xg(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){xg(n,a,o),typeof u!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function AS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ir(n,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return di===null?ic():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Kf(e,o,u)),!1;case 22:return a.flags|=65536,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Kf(e,o,u)),!1}throw Error(s(435,a.tag))}return Kf(e,o,u),ic(),!1}if(Me)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==ku&&(e=Error(s(422),{cause:o}),ho(ci(e,a)))):(o!==ku&&(n=Error(s(423),{cause:o}),ho(ci(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ci(o,a),u=Tf(e.stateNode,o,u),tf(e,u),tn!==4&&(tn=2)),!1;var f=Error(s(520),{cause:o});if(f=ci(f,a),Lo===null?Lo=[f]:Lo.push(f),tn!==4&&(tn=2),n===null)return!0;o=ci(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Tf(a.stateNode,o,e),tf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Wa===null||!Wa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Sg(u),yg(u,e,a,o),tf(a,u),!1}a=a.return}while(a!==null);return!1}var Af=Error(s(461)),un=!1;function bn(e,n,a,o){n.child=e===null?Tm(n,null,a,o):bs(n,e.child,a,o)}function Mg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var A in o)A!=="ref"&&(_[A]=o[A])}else _=o;return Ss(n),o=of(e,n,a,_,f,u),A=lf(),e!==null&&!un?(cf(e,n,u),la(e,n,u)):(Me&&A&&Gu(n),n.flags|=1,bn(e,n,o,u),n.child)}function Eg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Fu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,bg(e,n,f,o,u)):(e=Al(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Of(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:co,a(_,o)&&e.ref===n.ref)return la(e,n,u)}return n.flags|=1,e=na(f,o),e.ref=n.ref,e.return=n,n.child=e}function bg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(co(f,o)&&e.ref===n.ref)if(un=!1,n.pendingProps=o=f,Of(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,la(e,n,u)}return Rf(e,n,a,o,u)}function Tg(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Ag(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Dl(n,f!==null?f.cachePool:null),f!==null?Cm(n,f):nf(),wm(n);else return o=n.lanes=536870912,Ag(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Dl(n,f.cachePool),Cm(n,f),Ga(),n.memoizedState=null):(e!==null&&Dl(n,null),nf(),Ga());return bn(e,n,u,a),n.child}function To(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ag(e,n,a,o,u){var f=Ku();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Dl(n,null),nf(),wm(n),e!==null&&ir(e,n,o,!0),n.childLanes=u,null}function ql(e,n){return n=jl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Rg(e,n,a){return bs(n,e.child,null,a),e=ql(n,n.pendingProps),e.flags|=2,$n(n),n.memoizedState=null,e}function RS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(o.mode==="hidden")return e=ql(n,o),n.lanes=536870912,To(null,e);if(sf(n),(e=Xe)?(e=I0(e,hi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Na!==null?{id:Bi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=um(e),a.return=n,n.child=a,Mn=n,Xe=null)):e=null,e===null)throw Pa(n);return n.lanes=536870912,null}return ql(n,o)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(sf(n),u)if(n.flags&256)n.flags&=-257,n=Rg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||ir(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(o=ke,o!==null&&(_=fl(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,gs(e,_),qn(o,e,_),Af;ic(),n=Rg(e,n,a)}else e=f.treeContext,Xe=pi(_.nextSibling),Mn=n,Me=!0,Oa=null,hi=!1,e!==null&&dm(n,e),n=ql(n,o),n.flags|=4096;return n}return e=na(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Yl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Rf(e,n,a,o,u){return Ss(n),a=of(e,n,a,o,void 0,u),o=lf(),e!==null&&!un?(cf(e,n,u),la(e,n,u)):(Me&&o&&Gu(n),n.flags|=1,bn(e,n,a,u),n.child)}function Cg(e,n,a,o,u,f){return Ss(n),n.updateQueue=null,a=Um(n,o,a,u),Dm(e),o=lf(),e!==null&&!un?(cf(e,n,f),la(e,n,f)):(Me&&o&&Gu(n),n.flags|=1,bn(e,n,a,f),n.child)}function wg(e,n,a,o,u){if(Ss(n),n.stateNode===null){var f=$s,_=a.contextType;typeof _=="object"&&_!==null&&(f=En(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=bf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ju(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?En(_):$s,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Ef(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&bf.enqueueReplaceState(f,f.state,null),So(n,o,f,u),xo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,z=As(a,A);f.props=z;var J=f.context,ft=a.contextType;_=$s,typeof ft=="object"&&ft!==null&&(_=En(ft));var gt=a.getDerivedStateFromProps;ft=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||J!==_)&&mg(n,f,o,_),za=!1;var it=n.memoizedState;f.state=it,So(n,o,f,u),xo(),J=n.memoizedState,A||it!==J||za?(typeof gt=="function"&&(Ef(n,a,gt,o),J=n.memoizedState),(z=za||pg(n,a,z,o,it,J,_))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=_,o=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,$u(e,n),_=n.memoizedProps,ft=As(a,_),f.props=ft,gt=n.pendingProps,it=f.context,J=a.contextType,z=$s,typeof J=="object"&&J!==null&&(z=En(J)),A=a.getDerivedStateFromProps,(J=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==gt||it!==z)&&mg(n,f,o,z),za=!1,it=n.memoizedState,f.state=it,So(n,o,f,u),xo();var rt=n.memoizedState;_!==gt||it!==rt||za||e!==null&&e.dependencies!==null&&Cl(e.dependencies)?(typeof A=="function"&&(Ef(n,a,A,o),rt=n.memoizedState),(ft=za||pg(n,a,ft,o,it,rt,z)||e!==null&&e.dependencies!==null&&Cl(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,rt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,rt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=rt),f.props=o,f.state=rt,f.context=z,o=ft):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Yl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=bs(n,e.child,null,u),n.child=bs(n,null,a,u)):bn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=la(e,n,u),e}function Dg(e,n,a,o){return vs(),n.flags|=256,bn(e,n,a,o),n.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(e){return{baseLanes:e,cachePool:xm()}}function Df(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ei),e}function Ug(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(u?Ha(n):Ga(),(e=Xe)?(e=I0(e,hi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Na!==null?{id:Bi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=um(e),a.return=n,n.child=a,Mn=n,Xe=null)):e=null,e===null)throw Pa(n);return hh(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ga(),u=n.mode,A=jl({mode:"hidden",children:A},u),o=_s(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=wf(a),o.childLanes=Df(e,_,a),n.memoizedState=Cf,To(null,o)):(Ha(n),Uf(n,A))}var z=e.memoizedState;if(z!==null&&(A=z.dehydrated,A!==null)){if(f)n.flags&256?(Ha(n),n.flags&=-257,n=Lf(e,n,a)):n.memoizedState!==null?(Ga(),n.child=e.child,n.flags|=128,n=null):(Ga(),A=o.fallback,u=n.mode,o=jl({mode:"visible",children:o.children},u),A=_s(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,bs(n,e.child,null,a),o=n.child,o.memoizedState=wf(a),o.childLanes=Df(e,_,a),n.memoizedState=Cf,n=To(null,o));else if(Ha(n),hh(A)){if(_=A.nextSibling&&A.nextSibling.dataset,_)var J=_.dgst;_=J,o=Error(s(419)),o.stack="",o.digest=_,ho({value:o,source:null,stack:null}),n=Lf(e,n,a)}else if(un||ir(e,n,a,!1),_=(a&e.childLanes)!==0,un||_){if(_=ke,_!==null&&(o=fl(_,a),o!==0&&o!==z.retryLane))throw z.retryLane=o,gs(e,o),qn(_,e,o),Af;fh(A)||ic(),n=Lf(e,n,a)}else fh(A)?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,Xe=pi(A.nextSibling),Mn=n,Me=!0,Oa=null,hi=!1,e!==null&&dm(n,e),n=Uf(n,o.children),n.flags|=4096);return n}return u?(Ga(),A=o.fallback,u=n.mode,z=e.child,J=z.sibling,o=na(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,J!==null?A=na(J,A):(A=_s(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,To(null,o),o=n.child,A=e.child.memoizedState,A===null?A=wf(a):(u=A.cachePool,u!==null?(z=ln._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=xm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Df(e,_,a),n.memoizedState=Cf,To(e.child,o)):(Ha(n),a=e.child,e=a.sibling,a=na(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function Uf(e,n){return n=jl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function jl(e,n){return e=Qn(22,e,null,n),e.lanes=0,e}function Lf(e,n,a){return bs(n,e.child,null,a),e=Uf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Lg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),qu(e.return,n,a)}function Nf(e,n,a,o,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function Ng(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=nn.current,A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,_t(nn,_),bn(e,n,o,a),o=Me?fo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lg(e,a,n);else if(e.tag===19)Lg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Bl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Nf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Bl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Nf(n,!0,a,null,f,o);break;case"together":Nf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function la(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Xa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ir(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=na(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=na(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Of(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Cl(e)))}function CS(e,n,a){switch(n.tag){case 3:bt(n,n.stateNode.containerInfo),Ba(n,ln,e.memoizedState.cache),vs();break;case 27:case 5:Kt(n);break;case 4:bt(n,n.stateNode.containerInfo);break;case 10:Ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,sf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ug(e,n,a):(Ha(n),e=la(e,n,a),e!==null?e.sibling:null);Ha(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ir(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Ng(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_t(nn,nn.current),o)break;return null;case 22:return n.lanes=0,Tg(e,n,a,n.pendingProps);case 24:Ba(n,ln,e.memoizedState.cache)}return la(e,n,a)}function Og(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!Of(e,a)&&(n.flags&128)===0)return un=!1,CS(e,n,a);un=(e.flags&131072)!==0}else un=!1,Me&&(n.flags&1048576)!==0&&hm(n,fo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ms(n.elementType),n.type=e,typeof e=="function")Fu(e)?(o=As(e,o),n.tag=1,n=wg(null,n,e,o,a)):(n.tag=0,n=Rf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===N){n.tag=11,n=Mg(null,n,e,o,a);break t}else if(u===F){n.tag=14,n=Eg(null,n,e,o,a);break t}}throw n=lt(e)||e,Error(s(306,n,""))}}return n;case 0:return Rf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=As(o,n.pendingProps),wg(e,n,o,u,a);case 3:t:{if(bt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,$u(e,n),So(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Ba(n,ln,o),o!==f.cache&&Yu(n,[ln],a,!0),xo(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Dg(e,n,o,a);break t}else if(o!==u){u=ci(Error(s(424)),n),ho(u),n=Dg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Xe=pi(e.firstChild),Mn=n,Me=!0,Oa=null,hi=!0,a=Tm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(vs(),o===u){n=la(e,n,a);break t}bn(e,n,o,a)}n=n.child}return n;case 26:return Yl(e,n),e===null?(a=W0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,e=n.pendingProps,o=uc(nt.current).createElement(a),o[sn]=n,o[pn]=e,Tn(o,a,e),X(o),n.stateNode=o):n.memoizedState=W0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Kt(n),e===null&&Me&&(o=n.stateNode=V0(n.type,n.pendingProps,nt.current),Mn=n,hi=!0,u=Xe,Za(n.type)?(dh=u,Xe=pi(o.firstChild)):Xe=u),bn(e,n,n.pendingProps.children,a),Yl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((u=o=Xe)&&(o=ay(o,n.type,n.pendingProps,hi),o!==null?(n.stateNode=o,Mn=n,Xe=pi(o.firstChild),hi=!1,u=!0):u=!1),u||Pa(n)),Kt(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,o=f.children,lh(u,f)?o=null:_!==null&&lh(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=of(e,n,xS,null,null,a),Ho._currentValue=u),Yl(e,n),bn(e,n,o,a),n.child;case 6:return e===null&&Me&&((e=a=Xe)&&(a=sy(a,n.pendingProps,hi),a!==null?(n.stateNode=a,Mn=n,Xe=null,e=!0):e=!1),e||Pa(n)),null;case 13:return Ug(e,n,a);case 4:return bt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=bs(n,null,o,a):bn(e,n,o,a),n.child;case 11:return Mg(e,n,n.type,n.pendingProps,a);case 7:return bn(e,n,n.pendingProps,a),n.child;case 8:return bn(e,n,n.pendingProps.children,a),n.child;case 12:return bn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ba(n,n.type,o.value),bn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ss(n),u=En(u),o=o(u),n.flags|=1,bn(e,n,o,a),n.child;case 14:return Eg(e,n,n.type,n.pendingProps,a);case 15:return bg(e,n,n.type,n.pendingProps,a);case 19:return Ng(e,n,a);case 31:return RS(e,n,a);case 22:return Tg(e,n,a,n.pendingProps);case 24:return Ss(n),o=En(ln),e===null?(u=Ku(),u===null&&(u=ke,f=ju(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Ju(n),Ba(n,ln,u)):((e.lanes&a)!==0&&($u(e,n),So(n,null,null,a),xo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ba(n,ln,o)):(o=f.cache,Ba(n,ln,o),o!==u.cache&&Yu(n,[ln],a,!0))),bn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ca(e){e.flags|=4}function Pf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(o0())e.flags|=8192;else throw Es=Ll,Qu}else e.flags&=-16777217}function Pg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!K0(n))if(o0())e.flags|=8192;else throw Es=Ll,Qu}function Zl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Be():536870912,e.lanes|=n,mr|=n)}function Ao(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function We(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function wS(e,n,a){var o=n.pendingProps;switch(Vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),sa(ln),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nr(n)?ca(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Xu())),We(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ca(n),f!==null?(We(n),Pg(n,f)):(We(n),Pf(n,u,null,o,a))):f?f!==e.memoizedState?(ca(n),We(n),Pg(n,f)):(We(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ca(n),We(n),Pf(n,u,e,o,a)),null;case 27:if($t(n),a=nt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return We(n),null}e=At.current,nr(n)?pm(n):(e=V0(u,o,a),n.stateNode=e,ca(n))}return We(n),null;case 5:if($t(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return We(n),null}if(f=At.current,nr(n))pm(n);else{var _=uc(nt.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[sn]=n,f[pn]=o;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Tn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ca(n)}}return We(n),Pf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ca(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=nt.current,nr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Mn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||U0(e.nodeValue,a)),e||Pa(n,!0)}else e=uc(e).createTextNode(o),e[sn]=n,n.stateNode=e}return We(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=nr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[sn]=n}else vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),e=!1}else a=Xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(s(558))}return We(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=nr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[sn]=n}else vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),u=!1}else u=Xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Zl(n,n.updateQueue),We(n),null);case 4:return Vt(),e===null&&ih(n.stateNode.containerInfo),We(n),null;case 10:return sa(n.type),We(n),null;case 19:if(Y(nn),o=n.memoizedState,o===null)return We(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Ao(o,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Bl(e),f!==null){for(n.flags|=128,Ao(o,!1),e=f.updateQueue,n.updateQueue=e,Zl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)cm(a,e),a=a.sibling;return _t(nn,nn.current&1|2),Me&&ia(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>tc&&(n.flags|=128,u=!0,Ao(o,!1),n.lanes=4194304)}else{if(!u)if(e=Bl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Zl(n,e),Ao(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Me)return We(n),null}else 2*E()-o.renderingStartTime>tc&&a!==536870912&&(n.flags|=128,u=!0,Ao(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=nn.current,_t(nn,u?a&1|2:a&1),Me&&ia(n,o.treeForkCount),e):(We(n),null);case 22:case 23:return $n(n),af(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Zl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Y(ys),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),sa(ln),We(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function DS(e,n){switch(Vu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return sa(ln),Vt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(s(340));vs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if($n(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));vs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Y(nn),null;case 4:return Vt(),null;case 10:return sa(n.type),null;case 22:case 23:return $n(n),af(),e!==null&&Y(ys),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return sa(ln),null;case 25:return null;default:return null}}function Bg(e,n){switch(Vu(n),n.tag){case 3:sa(ln),Vt();break;case 26:case 27:case 5:$t(n);break;case 4:Vt();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:Y(nn);break;case 10:sa(n.type);break;case 22:case 23:$n(n),af(),e!==null&&Y(ys);break;case 24:sa(ln)}}function Ro(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(A){Fe(n,n.return,A)}}function Va(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var _=o.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,u=n;var z=a,J=A;try{J()}catch(ft){Fe(u,z,ft)}}}o=o.next}while(o!==f)}}catch(ft){Fe(n,n.return,ft)}}function zg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Rm(n,a)}catch(o){Fe(e,e.return,o)}}}function Fg(e,n,a){a.props=As(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function Co(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Fe(e,n,u)}}function Fi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function Ig(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function Bf(e,n,a){try{var o=e.stateNode;JS(o,e.type,a,n),o[pn]=n}catch(u){Fe(e,e.return,u)}}function Hg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function zf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Hg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ff(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ta));else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Ff(e,n,a),e=e.sibling;e!==null;)Ff(e,n,a),e=e.sibling}function Kl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Kl(e,n,a),e=e.sibling;e!==null;)Kl(e,n,a),e=e.sibling}function Gg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Tn(n,o,a),n[sn]=e,n[pn]=a}catch(f){Fe(e,e.return,f)}}var ua=!1,fn=!1,If=!1,Vg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function US(e,n){if(e=e.containerInfo,rh=_c,e=tm(e),Uu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,A=-1,z=-1,J=0,ft=0,gt=e,it=null;e:for(;;){for(var rt;gt!==a||u!==0&&gt.nodeType!==3||(A=_+u),gt!==f||o!==0&&gt.nodeType!==3||(z=_+o),gt.nodeType===3&&(_+=gt.nodeValue.length),(rt=gt.firstChild)!==null;)it=gt,gt=rt;for(;;){if(gt===e)break e;if(it===a&&++J===u&&(A=_),it===f&&++ft===o&&(z=_),(rt=gt.nextSibling)!==null)break;gt=it,it=gt.parentNode}gt=rt}a=A===-1||z===-1?null:{start:A,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(oh={focusedElem:e,selectionRange:a},_c=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ht=As(a.type,u);e=o.getSnapshotBeforeUpdate(Ht,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){Fe(a,a.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)uh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":uh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function kg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ha(e,a),o&4&&Ro(5,a);break;case 1:if(ha(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Fe(a,a.return,_)}else{var u=As(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Fe(a,a.return,_)}}o&64&&zg(a),o&512&&Co(a,a.return);break;case 3:if(ha(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Rm(e,n)}catch(_){Fe(a,a.return,_)}}break;case 27:n===null&&o&4&&Gg(a);case 26:case 5:ha(e,a),n===null&&o&4&&Ig(a),o&512&&Co(a,a.return);break;case 12:ha(e,a);break;case 31:ha(e,a),o&4&&qg(e,a);break;case 13:ha(e,a),o&4&&Yg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=HS.bind(null,a),ry(e,a))));break;case 22:if(o=a.memoizedState!==null||ua,!o){n=n!==null&&n.memoizedState!==null||fn,u=ua;var f=fn;ua=o,(fn=n)&&!f?da(e,a,(a.subtreeFlags&8772)!==0):ha(e,a),ua=u,fn=f}break;case 30:break;default:ha(e,a)}}function Xg(e){var n=e.alternate;n!==null&&(e.alternate=null,Xg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&eo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Vn=!1;function fa(e,n,a){for(a=a.child;a!==null;)Wg(e,n,a),a=a.sibling}function Wg(e,n,a){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:fn||Fi(a,n),fa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Fi(a,n);var o=Ze,u=Vn;Za(a.type)&&(Ze=a.stateNode,Vn=!1),fa(e,n,a),zo(a.stateNode),Ze=o,Vn=u;break;case 5:fn||Fi(a,n);case 6:if(o=Ze,u=Vn,Ze=null,fa(e,n,a),Ze=o,Vn=u,Ze!==null)if(Vn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Ze!==null&&(Vn?(e=Ze,z0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Er(e)):z0(Ze,a.stateNode));break;case 4:o=Ze,u=Vn,Ze=a.stateNode.containerInfo,Vn=!0,fa(e,n,a),Ze=o,Vn=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),fn||Va(4,a,n),fa(e,n,a);break;case 1:fn||(Fi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Fg(a,n,o)),fa(e,n,a);break;case 21:fa(e,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,fa(e,n,a),fn=o;break;default:fa(e,n,a)}}function qg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Er(e)}catch(a){Fe(n,n.return,a)}}}function Yg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Er(e)}catch(a){Fe(n,n.return,a)}}function LS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Vg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Vg),n;default:throw Error(s(435,e.tag))}}function Ql(e,n){var a=LS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=GS.bind(null,e,o);o.then(u,u)}})}function kn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,_=n,A=_;t:for(;A!==null;){switch(A.tag){case 27:if(Za(A.type)){Ze=A.stateNode,Vn=!1;break t}break;case 5:Ze=A.stateNode,Vn=!1;break t;case 3:case 4:Ze=A.stateNode.containerInfo,Vn=!0;break t}A=A.return}if(Ze===null)throw Error(s(160));Wg(f,_,u),Ze=null,Vn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)jg(n,e),n=n.sibling}var Ti=null;function jg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(n,e),Xn(e),o&4&&(Va(3,e,e.return),Ro(3,e),Va(5,e,e.return));break;case 1:kn(n,e),Xn(e),o&512&&(fn||a===null||Fi(a,a.return)),o&64&&ua&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ti;if(kn(n,e),Xn(e),o&512&&(fn||a===null||Fi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[fs]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Tn(f,o,a),f[sn]=e,X(f),o=f;break t;case"link":var _=j0("link","href",u).get(o+(a.href||""));if(_){for(var A=0;A<_.length;A++)if(f=_[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(A,1);break e}}f=u.createElement(o),Tn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=j0("meta","content",u).get(o+(a.content||""))){for(A=0;A<_.length;A++)if(f=_[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(A,1);break e}}f=u.createElement(o),Tn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[sn]=e,X(f),o=f}e.stateNode=o}else Z0(u,e.type,e.stateNode);else e.stateNode=Y0(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Z0(u,e.type,e.stateNode):Y0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Bf(e,e.memoizedProps,a.memoizedProps)}break;case 27:kn(n,e),Xn(e),o&512&&(fn||a===null||Fi(a,a.return)),a!==null&&o&4&&Bf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,e),Xn(e),o&512&&(fn||a===null||Fi(a,a.return)),e.flags&32){u=e.stateNode;try{Bn(u,"")}catch(Ht){Fe(e,e.return,Ht)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Bf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(If=!0);break;case 6:if(kn(n,e),Xn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Ht){Fe(e,e.return,Ht)}}break;case 3:if(dc=null,u=Ti,Ti=fc(n.containerInfo),kn(n,e),Ti=u,Xn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Er(n.containerInfo)}catch(Ht){Fe(e,e.return,Ht)}If&&(If=!1,Zg(e));break;case 4:o=Ti,Ti=fc(e.stateNode.containerInfo),kn(n,e),Xn(e),Ti=o;break;case 12:kn(n,e),Xn(e);break;case 31:kn(n,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ql(e,o)));break;case 13:kn(n,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($l=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ql(e,o)));break;case 22:u=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,J=ua,ft=fn;if(ua=J||u,fn=ft||z,kn(n,e),fn=ft,ua=J,Xn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||ua||fn||Rs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{A=z.stateNode;var gt=z.memoizedProps.style,it=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Ht){Fe(z,z.return,Ht)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(Ht){Fe(z,z.return,Ht)}}}else if(n.tag===18){if(a===null){z=n;try{var rt=z.stateNode;u?F0(rt,!0):F0(z.stateNode,!1)}catch(Ht){Fe(z,z.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ql(e,a))));break;case 19:kn(n,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ql(e,o)));break;case 30:break;case 21:break;default:kn(n,e),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Hg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=zf(e);Kl(e,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Bn(_,""),a.flags&=-33);var A=zf(e);Kl(e,A,_);break;case 3:case 4:var z=a.stateNode.containerInfo,J=zf(e);Ff(e,J,z);break;default:throw Error(s(161))}}catch(ft){Fe(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Zg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Zg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ha(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)kg(e,n.alternate,n),n=n.sibling}function Rs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Va(4,n,n.return),Rs(n);break;case 1:Fi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Fg(n,n.return,a),Rs(n);break;case 27:zo(n.stateNode);case 26:case 5:Fi(n,n.return),Rs(n);break;case 22:n.memoizedState===null&&Rs(n);break;case 30:Rs(n);break;default:Rs(n)}e=e.sibling}}function da(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:da(u,f,a),Ro(4,f);break;case 1:if(da(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Fe(o,o.return,J)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Am(z[u],A)}catch(J){Fe(o,o.return,J)}}a&&_&64&&zg(f),Co(f,f.return);break;case 27:Gg(f);case 26:case 5:da(u,f,a),a&&o===null&&_&4&&Ig(f),Co(f,f.return);break;case 12:da(u,f,a);break;case 31:da(u,f,a),a&&_&4&&qg(u,f);break;case 13:da(u,f,a),a&&_&4&&Yg(u,f);break;case 22:f.memoizedState===null&&da(u,f,a),Co(f,f.return);break;case 30:break;default:da(u,f,a)}n=n.sibling}}function Hf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&po(a))}function Gf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e))}function Ai(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Kg(e,n,a,o),n=n.sibling}function Kg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(e,n,a,o),u&2048&&Ro(9,n);break;case 1:Ai(e,n,a,o);break;case 3:Ai(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e)));break;case 12:if(u&2048){Ai(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,A=f.onPostCommit;typeof A=="function"&&A(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Fe(n,n.return,z)}}else Ai(e,n,a,o);break;case 31:Ai(e,n,a,o);break;case 13:Ai(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ai(e,n,a,o):wo(e,n):f._visibility&2?Ai(e,n,a,o):(f._visibility|=2,hr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Hf(_,n);break;case 24:Ai(e,n,a,o),u&2048&&Gf(n.alternate,n);break;default:Ai(e,n,a,o)}}function hr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,A=a,z=o,J=_.flags;switch(_.tag){case 0:case 11:case 15:hr(f,_,A,z,u),Ro(8,_);break;case 23:break;case 22:var ft=_.stateNode;_.memoizedState!==null?ft._visibility&2?hr(f,_,A,z,u):wo(f,_):(ft._visibility|=2,hr(f,_,A,z,u)),u&&J&2048&&Hf(_.alternate,_);break;case 24:hr(f,_,A,z,u),u&&J&2048&&Gf(_.alternate,_);break;default:hr(f,_,A,z,u)}n=n.sibling}}function wo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:wo(a,o),u&2048&&Hf(o.alternate,o);break;case 24:wo(a,o),u&2048&&Gf(o.alternate,o);break;default:wo(a,o)}n=n.sibling}}var Do=8192;function dr(e,n,a){if(e.subtreeFlags&Do)for(e=e.child;e!==null;)Qg(e,n,a),e=e.sibling}function Qg(e,n,a){switch(e.tag){case 26:dr(e,n,a),e.flags&Do&&e.memoizedState!==null&&vy(a,Ti,e.memoizedState,e.memoizedProps);break;case 5:dr(e,n,a);break;case 3:case 4:var o=Ti;Ti=fc(e.stateNode.containerInfo),dr(e,n,a),Ti=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Do,Do=16777216,dr(e,n,a),Do=o):dr(e,n,a));break;default:dr(e,n,a)}}function Jg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Uo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,t0(o,e)}Jg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$g(e),e=e.sibling}function $g(e){switch(e.tag){case 0:case 11:case 15:Uo(e),e.flags&2048&&Va(9,e,e.return);break;case 3:Uo(e);break;case 12:Uo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Jl(e)):Uo(e);break;default:Uo(e)}}function Jl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,t0(o,e)}Jg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Va(8,n,n.return),Jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Jl(n));break;default:Jl(n)}e=e.sibling}}function t0(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:po(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else t:for(a=e;Sn!==null;){o=Sn;var u=o.sibling,f=o.return;if(Xg(o),o===a){Sn=null;break t}if(u!==null){u.return=f,Sn=u;break t}Sn=f}}}var NS={getCacheForType:function(e){var n=En(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return En(ln).controller.signal}},OS=typeof WeakMap=="function"?WeakMap:Map,Ne=0,ke=null,me=null,ve=0,ze=0,ti=null,ka=!1,pr=!1,Vf=!1,pa=0,tn=0,Xa=0,Cs=0,kf=0,ei=0,mr=0,Lo=null,Wn=null,Xf=!1,$l=0,e0=0,tc=1/0,ec=null,Wa=null,gn=0,qa=null,gr=null,ma=0,Wf=0,qf=null,n0=null,No=0,Yf=null;function ni(){return(Ne&2)!==0&&ve!==0?ve&-ve:O.T!==null?$f():Pi()}function i0(){if(ei===0)if((ve&536870912)===0||Me){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),ei=e}else ei=536870912;return e=Jn.current,e!==null&&(e.flags|=32),ei}function qn(e,n,a){(e===ke&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(_r(e,0),Ya(e,ve,ei,!1)),Nn(e,a),((Ne&2)===0||e!==ke)&&(e===ke&&((Ne&2)===0&&(Cs|=a),tn===4&&Ya(e,ve,ei,!1)),Ii(e))}function a0(e,n,a){if((Ne&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ft(e,n),u=o?zS(e,n):Zf(e,n,!0),f=o;do{if(u===0){pr&&!o&&Ya(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!PS(a)){u=Zf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var A=e;u=Lo;var z=A.current.memoizedState.isDehydrated;if(z&&(_r(A,_).flags|=256),_=Zf(A,_,!1),_!==2){if(Vf&&!z){A.errorRecoveryDisabledLanes|=f,Cs|=f,u=4;break t}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){_r(e,0),Ya(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ya(o,n,ei,!ka);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=$l+300-E(),10<u)){if(Ya(o,n,ei,!ka),ct(o,0,!0)!==0)break t;ma=n,o.timeoutHandle=P0(s0.bind(null,o,a,Wn,ec,Xf,n,ei,Cs,mr,ka,f,"Throttled",-0,0),u);break t}s0(o,a,Wn,ec,Xf,n,ei,Cs,mr,ka,f,null,-0,0)}}break}while(!0);Ii(e)}function s0(e,n,a,o,u,f,_,A,z,J,ft,gt,it,rt){if(e.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},Qg(n,f,gt);var Ht=(f&62914560)===f?$l-E():(f&4194048)===f?e0-E():0;if(Ht=xy(gt,Ht),Ht!==null){ma=f,e.cancelPendingCommit=Ht(d0.bind(null,e,n,f,a,o,u,_,A,z,ft,gt,null,it,rt)),Ya(e,f,_,!J);return}}d0(e,n,f,a,o,u,_,A,z)}function PS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Kn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(e,n,a,o){n&=~kf,n&=~Cs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Lt(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&to(e,a,n)}function nc(){return(Ne&6)===0?(Oo(0),!1):!0}function jf(){if(me!==null){if(ze===0)var e=me.return;else e=me,aa=xs=null,uf(e),or=null,go=0,e=me;for(;e!==null;)Bg(e.alternate,e),e=e.return;me=null}}function _r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ey(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ma=0,jf(),ke=e,me=a=na(e.current,null),ve=n,ze=0,ti=null,ka=!1,pr=Ft(e,n),Vf=!1,mr=ei=kf=Cs=Xa=tn=0,Wn=Lo=null,Xf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Lt(o),f=1<<u;n|=e[u],o&=~f}return pa=n,El(),a}function r0(e,n){le=null,O.H=bo,n===rr||n===Ul?(n=Mm(),ze=3):n===Qu?(n=Mm(),ze=4):ze=n===Af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,me===null&&(tn=1,Wl(e,ci(n,e.current)))}function o0(){var e=Jn.current;return e===null?!0:(ve&4194048)===ve?di===null:(ve&62914560)===ve||(ve&536870912)!==0?e===di:!1}function l0(){var e=O.H;return O.H=bo,e===null?bo:e}function c0(){var e=O.A;return O.A=NS,e}function ic(){tn=4,ka||(ve&4194048)!==ve&&Jn.current!==null||(pr=!0),(Xa&134217727)===0&&(Cs&134217727)===0||ke===null||Ya(ke,ve,ei,!1)}function Zf(e,n,a){var o=Ne;Ne|=2;var u=l0(),f=c0();(ke!==e||ve!==n)&&(ec=null,_r(e,n)),n=!1;var _=tn;t:do try{if(ze!==0&&me!==null){var A=me,z=ti;switch(ze){case 8:jf(),_=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var J=ze;if(ze=0,ti=null,vr(e,A,z,J),a&&pr){_=0;break t}break;default:J=ze,ze=0,ti=null,vr(e,A,z,J)}}BS(),_=tn;break}catch(ft){r0(e,ft)}while(!0);return n&&e.shellSuspendCounter++,aa=xs=null,Ne=o,O.H=u,O.A=f,me===null&&(ke=null,ve=0,El()),_}function BS(){for(;me!==null;)u0(me)}function zS(e,n){var a=Ne;Ne|=2;var o=l0(),u=c0();ke!==e||ve!==n?(ec=null,tc=E()+500,_r(e,n)):pr=Ft(e,n);t:do try{if(ze!==0&&me!==null){n=me;var f=ti;e:switch(ze){case 1:ze=0,ti=null,vr(e,n,f,1);break;case 2:case 9:if(Sm(f)){ze=0,ti=null,f0(n);break}n=function(){ze!==2&&ze!==9||ke!==e||(ze=7),Ii(e)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Sm(f)?(ze=0,ti=null,f0(n)):(ze=0,ti=null,vr(e,n,f,7));break;case 5:var _=null;switch(me.tag){case 26:_=me.memoizedState;case 5:case 27:var A=me;if(_?K0(_):A.stateNode.complete){ze=0,ti=null;var z=A.sibling;if(z!==null)me=z;else{var J=A.return;J!==null?(me=J,ac(J)):me=null}break e}}ze=0,ti=null,vr(e,n,f,5);break;case 6:ze=0,ti=null,vr(e,n,f,6);break;case 8:jf(),tn=6;break t;default:throw Error(s(462))}}FS();break}catch(ft){r0(e,ft)}while(!0);return aa=xs=null,O.H=o,O.A=u,Ne=a,me!==null?0:(ke=null,ve=0,El(),tn)}function FS(){for(;me!==null&&!Wt();)u0(me)}function u0(e){var n=Og(e.alternate,e,pa);e.memoizedProps=e.pendingProps,n===null?ac(e):me=n}function f0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Cg(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Cg(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:uf(n);default:Bg(a,n),n=me=cm(n,pa),n=Og(a,n,pa)}e.memoizedProps=e.pendingProps,n===null?ac(e):me=n}function vr(e,n,a,o){aa=xs=null,uf(n),or=null,go=0;var u=n.return;try{if(AS(e,u,n,a,ve)){tn=1,Wl(e,ci(a,e.current)),me=null;return}}catch(f){if(u!==null)throw me=u,f;tn=1,Wl(e,ci(a,e.current)),me=null;return}n.flags&32768?(Me||o===1?e=!0:pr||(ve&536870912)!==0?e=!1:(ka=e=!0,(o===2||o===9||o===3||o===6)&&(o=Jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),h0(n,e)):ac(n)}function ac(e){var n=e;do{if((n.flags&32768)!==0){h0(n,ka);return}e=n.return;var a=wS(n.alternate,n,pa);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);tn===0&&(tn=5)}function h0(e,n){do{var a=DS(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);tn=6,me=null}function d0(e,n,a,o,u,f,_,A,z){e.cancelPendingCommit=null;do sc();while(gn!==0);if((Ne&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Bu,Si(e,a,f,_,A,z),e===ke&&(me=ke=null,ve=0),gr=n,qa=e,ma=a,Wf=f,qf=u,n0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,VS(ut,function(){return v0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=B.p,B.p=2,_=Ne,Ne|=4;try{US(e,n,a)}finally{Ne=_,B.p=u,O.T=o}}gn=1,p0(),m0(),g0()}}function p0(){if(gn===1){gn=0;var e=qa,n=gr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=B.p;B.p=2;var u=Ne;Ne|=4;try{jg(n,e);var f=oh,_=tm(e.containerInfo),A=f.focusedElem,z=f.selectionRange;if(_!==A&&A&&A.ownerDocument&&$p(A.ownerDocument.documentElement,A)){if(z!==null&&Uu(A)){var J=z.start,ft=z.end;if(ft===void 0&&(ft=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(ft,A.value.length);else{var gt=A.ownerDocument||document,it=gt&&gt.defaultView||window;if(it.getSelection){var rt=it.getSelection(),Ht=A.textContent.length,Jt=Math.min(z.start,Ht),Ve=z.end===void 0?Jt:Math.min(z.end,Ht);!rt.extend&&Jt>Ve&&(_=Ve,Ve=Jt,Jt=_);var j=Jp(A,Jt),V=Jp(A,Ve);if(j&&V&&(rt.rangeCount!==1||rt.anchorNode!==j.node||rt.anchorOffset!==j.offset||rt.focusNode!==V.node||rt.focusOffset!==V.offset)){var K=gt.createRange();K.setStart(j.node,j.offset),rt.removeAllRanges(),Jt>Ve?(rt.addRange(K),rt.extend(V.node,V.offset)):(K.setEnd(V.node,V.offset),rt.addRange(K))}}}}for(gt=[],rt=A;rt=rt.parentNode;)rt.nodeType===1&&gt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var mt=gt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}_c=!!rh,oh=rh=null}finally{Ne=u,B.p=o,O.T=a}}e.current=n,gn=2}}function m0(){if(gn===2){gn=0;var e=qa,n=gr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=B.p;B.p=2;var u=Ne;Ne|=4;try{kg(e,n.alternate,n)}finally{Ne=u,B.p=o,O.T=a}}gn=3}}function g0(){if(gn===4||gn===3){gn=0,U();var e=qa,n=gr,a=ma,o=n0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,gr=qa=null,_0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Wa=null),Xs(a),n=n.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=B.p,B.p=2,O.T=null;try{for(var f=e.onRecoverableError,_=0;_<o.length;_++){var A=o[_];f(A.value,{componentStack:A.stack})}}finally{O.T=n,B.p=u}}(ma&3)!==0&&sc(),Ii(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Yf?No++:(No=0,Yf=e):No=0,Oo(0)}}function _0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,po(n)))}function sc(){return p0(),m0(),g0(),v0()}function v0(){if(gn!==5)return!1;var e=qa,n=Wf;Wf=0;var a=Xs(ma),o=O.T,u=B.p;try{B.p=32>a?32:a,O.T=null,a=qf,qf=null;var f=qa,_=ma;if(gn=0,gr=qa=null,ma=0,(Ne&6)!==0)throw Error(s(331));var A=Ne;if(Ne|=4,$g(f.current),Kg(f,f.current,_,a),Ne=A,Oo(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{B.p=u,O.T=o,_0(e,n)}}function x0(e,n,a){n=ci(a,n),n=Tf(e.stateNode,n,2),e=Ia(e,n,2),e!==null&&(Nn(e,2),Ii(e))}function Fe(e,n,a){if(e.tag===3)x0(e,e,a);else for(;n!==null;){if(n.tag===3){x0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Wa===null||!Wa.has(o))){e=ci(a,e),a=Sg(2),o=Ia(n,a,2),o!==null&&(yg(a,o,n,e),Nn(o,2),Ii(o));break}}n=n.return}}function Kf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new OS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Vf=!0,u.add(a),e=IS.bind(null,e,n,a),n.then(e,e))}function IS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(ve&a)===a&&(tn===4||tn===3&&(ve&62914560)===ve&&300>E()-$l?(Ne&2)===0&&_r(e,0):kf|=a,mr===ve&&(mr=0)),Ii(e)}function S0(e,n){n===0&&(n=Be()),e=gs(e,n),e!==null&&(Nn(e,n),Ii(e))}function HS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),S0(e,a)}function GS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),S0(e,a)}function VS(e,n){return be(e,n)}var rc=null,xr=null,Qf=!1,oc=!1,Jf=!1,ja=0;function Ii(e){e!==xr&&e.next===null&&(xr===null?rc=xr=e:xr=xr.next=e),oc=!0,Qf||(Qf=!0,XS())}function Oo(e,n){if(!Jf&&oc){Jf=!0;do for(var a=!1,o=rc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Lt(42|e)+1)-1,f&=u&~(_&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,b0(o,f))}else f=ve,f=ct(o,o===ke?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ft(o,f)||(a=!0,b0(o,f));o=o.next}while(a);Jf=!1}}function kS(){y0()}function y0(){oc=Qf=!1;var e=0;ja!==0&&ty()&&(e=ja);for(var n=E(),a=null,o=rc;o!==null;){var u=o.next,f=M0(o,n);f===0?(o.next=null,a===null?rc=u:a.next=u,u===null&&(xr=a)):(a=o,(e!==0||(f&3)!==0)&&(oc=!0)),o=u}gn!==0&&gn!==5||Oo(e),ja!==0&&(ja=0)}function M0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Lt(f),A=1<<_,z=u[_];z===-1?((A&a)===0||(A&o)!==0)&&(u[_]=ie(A,n)):z<=n&&(e.expiredLanes|=A),f&=~A}if(n=ke,a=ve,a=ct(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Oe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ft(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Oe(o),Xs(a)){case 2:case 8:a=xt;break;case 32:a=ut;break;case 268435456:a=Ct;break;default:a=ut}return o=E0.bind(null,e),a=be(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Oe(o),e.callbackPriority=2,e.callbackNode=null,2}function E0(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(sc()&&e.callbackNode!==a)return null;var o=ve;return o=ct(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(a0(e,o,n),M0(e,E()),e.callbackNode!=null&&e.callbackNode===a?E0.bind(null,e):null)}function b0(e,n){if(sc())return null;a0(e,n,!0)}function XS(){ny(function(){(Ne&6)!==0?be(dt,kS):y0()})}function $f(){if(ja===0){var e=ar;e===0&&(e=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),ja=e}return ja}function T0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ml(""+e)}function A0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function WS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=T0((u[pn]||null).action),_=o.submitter;_&&(n=(n=_[pn]||null)?T0(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var A=new xl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ja!==0){var z=_?A0(u,_):new FormData(u);xf(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(A.preventDefault(),z=_?A0(u,_):new FormData(u),xf(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var th=0;th<Pu.length;th++){var eh=Pu[th],qS=eh.toLowerCase(),YS=eh[0].toUpperCase()+eh.slice(1);bi(qS,"on"+YS)}bi(im,"onAnimationEnd"),bi(am,"onAnimationIteration"),bi(sm,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(cS,"onTransitionRun"),bi(uS,"onTransitionStart"),bi(fS,"onTransitionCancel"),bi(rm,"onTransitionEnd"),wt("onMouseEnter",["mouseout","mouseover"]),wt("onMouseLeave",["mouseout","mouseover"]),wt("onPointerEnter",["pointerout","pointerover"]),wt("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function R0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var A=o[_],z=A.instance,J=A.currentTarget;if(A=A.listener,z!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=J;try{f(u)}catch(ft){Ml(ft)}u.currentTarget=null,f=z}else for(_=0;_<o.length;_++){if(A=o[_],z=A.instance,J=A.currentTarget,A=A.listener,z!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=J;try{f(u)}catch(ft){Ml(ft)}u.currentTarget=null,f=z}}}}function ge(e,n){var a=n[wa];a===void 0&&(a=n[wa]=new Set);var o=e+"__bubble";a.has(o)||(C0(n,e,2,!1),a.add(o))}function nh(e,n,a){var o=0;n&&(o|=4),C0(a,e,o,n)}var lc="_reactListening"+Math.random().toString(36).slice(2);function ih(e){if(!e[lc]){e[lc]=!0,st.forEach(function(a){a!=="selectionchange"&&(jS.has(a)||nh(a,!1,e),nh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[lc]||(n[lc]=!0,nh("selectionchange",!1,n))}}function C0(e,n,a,o){switch(i_(n)){case 2:var u=My;break;case 8:u=Ey;break;default:u=vh}a=u.bind(null,n,a,e),u=void 0,!Mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ah(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var A=o.stateNode.containerInfo;if(A===u)break;if(_===4)for(_=o.return;_!==null;){var z=_.tag;if((z===3||z===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;A!==null;){if(_=Da(A),_===null)return;if(z=_.tag,z===5||z===6||z===26||z===27){o=f=_;continue t}A=A.parentNode}}o=o.return}Np(function(){var J=f,ft=Su(a),gt=[];t:{var it=om.get(e);if(it!==void 0){var rt=xl,Ht=e;switch(e){case"keypress":if(_l(a)===0)break t;case"keydown":case"keyup":rt=Gx;break;case"focusin":Ht="focus",rt=Au;break;case"focusout":Ht="blur",rt=Au;break;case"beforeblur":case"afterblur":rt=Au;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=Xx;break;case im:case am:case sm:rt=Lx;break;case rm:rt=qx;break;case"scroll":case"scrollend":rt=Rx;break;case"wheel":rt=jx;break;case"copy":case"cut":case"paste":rt=Ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Fp;break;case"toggle":case"beforetoggle":rt=Kx}var Jt=(n&4)!==0,Ve=!Jt&&(e==="scroll"||e==="scrollend"),j=Jt?it!==null?it+"Capture":null:it;Jt=[];for(var V=J,K;V!==null;){var mt=V;if(K=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||K===null||j===null||(mt=no(V,j),mt!=null&&Jt.push(Bo(V,mt,K))),Ve)break;V=V.return}0<Jt.length&&(it=new rt(it,Ht,null,a,ft),gt.push({event:it,listeners:Jt}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",it&&a!==xu&&(Ht=a.relatedTarget||a.fromElement)&&(Da(Ht)||Ht[Ji]))break t;if((rt||it)&&(it=ft.window===ft?ft:(it=ft.ownerDocument)?it.defaultView||it.parentWindow:window,rt?(Ht=a.relatedTarget||a.toElement,rt=J,Ht=Ht?Da(Ht):null,Ht!==null&&(Ve=c(Ht),Jt=Ht.tag,Ht!==Ve||Jt!==5&&Jt!==27&&Jt!==6)&&(Ht=null)):(rt=null,Ht=J),rt!==Ht)){if(Jt=Bp,mt="onMouseLeave",j="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=Fp,mt="onPointerLeave",j="onPointerEnter",V="pointer"),Ve=rt==null?it:hs(rt),K=Ht==null?it:hs(Ht),it=new Jt(mt,V+"leave",rt,a,ft),it.target=Ve,it.relatedTarget=K,mt=null,Da(ft)===J&&(Jt=new Jt(j,V+"enter",Ht,a,ft),Jt.target=K,Jt.relatedTarget=Ve,mt=Jt),Ve=mt,rt&&Ht)e:{for(Jt=ZS,j=rt,V=Ht,K=0,mt=j;mt;mt=Jt(mt))K++;mt=0;for(var Qt=V;Qt;Qt=Jt(Qt))mt++;for(;0<K-mt;)j=Jt(j),K--;for(;0<mt-K;)V=Jt(V),mt--;for(;K--;){if(j===V||V!==null&&j===V.alternate){Jt=j;break e}j=Jt(j),V=Jt(V)}Jt=null}else Jt=null;rt!==null&&w0(gt,it,rt,Jt,!1),Ht!==null&&Ve!==null&&w0(gt,Ve,Ht,Jt,!0)}}t:{if(it=J?hs(J):window,rt=it.nodeName&&it.nodeName.toLowerCase(),rt==="select"||rt==="input"&&it.type==="file")var we=qp;else if(Xp(it))if(Yp)we=rS;else{we=aS;var qt=iS}else rt=it.nodeName,!rt||rt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?J&&qs(J.elementType)&&(we=qp):we=sS;if(we&&(we=we(e,J))){Wp(gt,we,a,ft);break t}qt&&qt(e,it,J),e==="focusout"&&J&&it.type==="number"&&J.memoizedProps.value!=null&&Mi(it,"number",it.value)}switch(qt=J?hs(J):window,e){case"focusin":(Xp(qt)||qt.contentEditable==="true")&&(Ks=qt,Lu=J,uo=null);break;case"focusout":uo=Lu=Ks=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,em(gt,a,ft);break;case"selectionchange":if(lS)break;case"keydown":case"keyup":em(gt,a,ft)}var fe;if(Cu)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Zs?Vp(e,a)&&(xe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(Ip&&a.locale!=="ko"&&(Zs||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Zs&&(fe=Op()):(La=ft,Eu="value"in La?La.value:La.textContent,Zs=!0)),qt=cc(J,xe),0<qt.length&&(xe=new zp(xe,e,null,a,ft),gt.push({event:xe,listeners:qt}),fe?xe.data=fe:(fe=kp(a),fe!==null&&(xe.data=fe)))),(fe=Jx?$x(e,a):tS(e,a))&&(xe=cc(J,"onBeforeInput"),0<xe.length&&(qt=new zp("onBeforeInput","beforeinput",null,a,ft),gt.push({event:qt,listeners:xe}),qt.data=fe)),WS(gt,e,J,a,ft)}R0(gt,n)})}function Bo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function cc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=no(e,a),u!=null&&o.unshift(Bo(e,u,f)),u=no(e,n),u!=null&&o.push(Bo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function ZS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function w0(e,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var A=a,z=A.alternate,J=A.stateNode;if(A=A.tag,z!==null&&z===o)break;A!==5&&A!==26&&A!==27||J===null||(z=J,u?(J=no(a,f),J!=null&&_.unshift(Bo(a,J,z))):u||(J=no(a,f),J!=null&&_.push(Bo(a,J,z)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var KS=/\r\n?/g,QS=/\u0000|\uFFFD/g;function D0(e){return(typeof e=="string"?e:""+e).replace(KS,`
`).replace(QS,"")}function U0(e,n){return n=D0(n),D0(e)===n}function Ge(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Bn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Bn(e,""+o);break;case"className":se(e,"class",o);break;case"tabIndex":se(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":se(e,a,o);break;case"style":$i(e,o,f);break;case"data":if(n!=="object"){se(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ml(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(e,n,"name",u.name,u,null),Ge(e,n,"formEncType",u.formEncType,u,null),Ge(e,n,"formMethod",u.formMethod,u,null),Ge(e,n,"formTarget",u.formTarget,u,null)):(Ge(e,n,"encType",u.encType,u,null),Ge(e,n,"method",u.method,u,null),Ge(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ml(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ta);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ml(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),ne(e,"popover",o);break;case"xlinkActuate":It(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":It(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":It(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":It(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":It(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":It(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":It(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":It(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":It(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ne(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Tx.get(a)||a,ne(e,a,o))}}function sh(e,n,a,o,u,f){switch(a){case"style":$i(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Bn(e,o):(typeof o=="number"||typeof o=="bigint")&&Bn(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!et.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ne(e,a,o)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(e,n,f,_,a,null)}}u&&Ge(e,n,"srcSet",a.srcSet,a,null),o&&Ge(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var A=f=_=u=null,z=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":u=ft;break;case"type":_=ft;break;case"checked":z=ft;break;case"defaultChecked":J=ft;break;case"value":f=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Ge(e,n,o,ft,a,null)}}jn(e,f,A,z,J,_,u,!1);return;case"select":ge("invalid",e),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":_=A;break;case"multiple":o=A;default:Ge(e,n,u,A,a,null)}n=f,a=_,e.multiple=!!o,n!=null?Zn(e,!!o,n,!1):a!=null&&Zn(e,!!o,a,!0);return;case"textarea":ge("invalid",e),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ge(e,n,_,A,a,null)}rn(e,o,u,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ge(e,n,z,o,a,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<Po.length;o++)ge(Po[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(e,n,J,o,a,null)}return;default:if(qs(n)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&sh(e,n,ft,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Ge(e,n,A,o,a,null))}function JS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,A=null,z=null,J=null,ft=null;for(rt in a){var gt=a[rt];if(a.hasOwnProperty(rt)&&gt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":z=gt;default:o.hasOwnProperty(rt)||Ge(e,n,rt,null,o,gt)}}for(var it in o){var rt=o[it];if(gt=a[it],o.hasOwnProperty(it)&&(rt!=null||gt!=null))switch(it){case"type":f=rt;break;case"name":u=rt;break;case"checked":J=rt;break;case"defaultChecked":ft=rt;break;case"value":_=rt;break;case"defaultValue":A=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==gt&&Ge(e,n,it,rt,o,gt)}}Pn(e,_,A,z,J,ft,f,u);return;case"select":rt=_=A=it=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":rt=z;default:o.hasOwnProperty(f)||Ge(e,n,f,null,o,z)}for(u in o)if(f=o[u],z=a[u],o.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":it=f;break;case"defaultValue":A=f;break;case"multiple":_=f;default:f!==z&&Ge(e,n,u,f,o,z)}n=A,a=_,o=rt,it!=null?Zn(e,!!a,it,!1):!!o!=!!a&&(n!=null?Zn(e,!!a,n,!0):Zn(e,!!a,a?[]:"",!1));return;case"textarea":rt=it=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ge(e,n,A,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":it=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ge(e,n,_,u,o,f)}Pe(e,it,rt);return;case"option":for(var Ht in a)if(it=a[Ht],a.hasOwnProperty(Ht)&&it!=null&&!o.hasOwnProperty(Ht))switch(Ht){case"selected":e.selected=!1;break;default:Ge(e,n,Ht,null,o,it)}for(z in o)if(it=o[z],rt=a[z],o.hasOwnProperty(z)&&it!==rt&&(it!=null||rt!=null))switch(z){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Ge(e,n,z,it,o,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)it=a[Jt],a.hasOwnProperty(Jt)&&it!=null&&!o.hasOwnProperty(Jt)&&Ge(e,n,Jt,null,o,it);for(J in o)if(it=o[J],rt=a[J],o.hasOwnProperty(J)&&it!==rt&&(it!=null||rt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Ge(e,n,J,it,o,rt)}return;default:if(qs(n)){for(var Ve in a)it=a[Ve],a.hasOwnProperty(Ve)&&it!==void 0&&!o.hasOwnProperty(Ve)&&sh(e,n,Ve,void 0,o,it);for(ft in o)it=o[ft],rt=a[ft],!o.hasOwnProperty(ft)||it===rt||it===void 0&&rt===void 0||sh(e,n,ft,it,o,rt);return}}for(var j in a)it=a[j],a.hasOwnProperty(j)&&it!=null&&!o.hasOwnProperty(j)&&Ge(e,n,j,null,o,it);for(gt in o)it=o[gt],rt=a[gt],!o.hasOwnProperty(gt)||it===rt||it==null&&rt==null||Ge(e,n,gt,it,o,rt)}function L0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $S(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,A=u.duration;if(f&&A&&L0(_)){for(_=0,A=u.responseEnd,o+=1;o<a.length;o++){var z=a[o],J=z.startTime;if(J>A)break;var ft=z.transferSize,gt=z.initiatorType;ft&&L0(gt)&&(z=z.responseEnd,_+=ft*(z<A?1:(A-J)/(z-J)))}if(--o,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var rh=null,oh=null;function uc(e){return e.nodeType===9?e:e.ownerDocument}function N0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function O0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function lh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ch=null;function ty(){var e=window.event;return e&&e.type==="popstate"?e===ch?!1:(ch=e,!0):(ch=null,!1)}var P0=typeof setTimeout=="function"?setTimeout:void 0,ey=typeof clearTimeout=="function"?clearTimeout:void 0,B0=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof B0<"u"?function(e){return B0.resolve(null).then(e).catch(iy)}:P0;function iy(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function z0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Er(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")zo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,zo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,A=f.nodeName;f[fs]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&zo(e.ownerDocument.body);a=u}while(a);Er(n)}function F0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function uh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":uh(a),eo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ay(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[fs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function sy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pi(e.nextSibling),e===null))return null;return e}function I0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pi(e.nextSibling),e===null))return null;return e}function fh(e){return e.data==="$?"||e.data==="$~"}function hh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ry(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var dh=null;function H0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return pi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function G0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function V0(e,n,a){switch(n=uc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function zo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);eo(e)}var mi=new Map,k0=new Set;function fc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ga=B.d;B.d={f:oy,r:ly,D:cy,C:uy,L:fy,m:hy,X:py,S:dy,M:my};function oy(){var e=ga.f(),n=nc();return e||n}function ly(e){var n=Ua(e);n!==null&&n.tag===5&&n.type==="form"?rg(n):ga.r(e)}var Sr=typeof document>"u"?null:document;function X0(e,n,a){var o=Sr;if(o&&typeof n=="string"&&n){var u=ae(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),k0.has(u)||(k0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Tn(n,"link",e),X(n),o.head.appendChild(n)))}}function cy(e){ga.D(e),X0("dns-prefetch",e,null)}function uy(e,n){ga.C(e,n),X0("preconnect",e,n)}function fy(e,n,a){ga.L(e,n,a);var o=Sr;if(o&&e&&n){var u='link[rel="preload"][as="'+ae(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ae(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ae(a.imageSizes)+'"]')):u+='[href="'+ae(e)+'"]';var f=u;switch(n){case"style":f=yr(e);break;case"script":f=Mr(e)}mi.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),mi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Fo(f))||n==="script"&&o.querySelector(Io(f))||(n=o.createElement("link"),Tn(n,"link",e),X(n),o.head.appendChild(n)))}}function hy(e,n){ga.m(e,n);var a=Sr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ae(o)+'"][href="'+ae(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Mr(e)}if(!mi.has(f)&&(e=x({rel:"modulepreload",href:e},n),mi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(f)))return}o=a.createElement("link"),Tn(o,"link",e),X(o),a.head.appendChild(o)}}}function dy(e,n,a){ga.S(e,n,a);var o=Sr;if(o&&e){var u=R(o).hoistableStyles,f=yr(e);n=n||"default";var _=u.get(f);if(!_){var A={loading:0,preload:null};if(_=o.querySelector(Fo(f)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=mi.get(f))&&ph(e,a);var z=_=o.createElement("link");X(z),Tn(z,"link",e),z._p=new Promise(function(J,ft){z.onload=J,z.onerror=ft}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,hc(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:A},u.set(f,_)}}}function py(e,n){ga.X(e,n);var a=Sr;if(a&&e){var o=R(a).hoistableScripts,u=Mr(e),f=o.get(u);f||(f=a.querySelector(Io(u)),f||(e=x({src:e,async:!0},n),(n=mi.get(u))&&mh(e,n),f=a.createElement("script"),X(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function my(e,n){ga.M(e,n);var a=Sr;if(a&&e){var o=R(a).hoistableScripts,u=Mr(e),f=o.get(u);f||(f=a.querySelector(Io(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=mi.get(u))&&mh(e,n),f=a.createElement("script"),X(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function W0(e,n,a,o){var u=(u=nt.current)?fc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=yr(a.href),a=R(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=yr(a.href);var f=R(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(Fo(e)))&&!f._p&&(_.instance=f,_.state.loading=5),mi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(e,a),f||gy(u,e,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Mr(a),a=R(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function yr(e){return'href="'+ae(e)+'"'}function Fo(e){return'link[rel="stylesheet"]['+e+"]"}function q0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function gy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),X(n),e.head.appendChild(n))}function Mr(e){return'[src="'+ae(e)+'"]'}function Io(e){return"script[async]"+e}function Y0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ae(a.href)+'"]');if(o)return n.instance=o,X(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),X(o),Tn(o,"style",u),hc(o,a.precedence,e),n.instance=o;case"stylesheet":u=yr(a.href);var f=e.querySelector(Fo(u));if(f)return n.state.loading|=4,n.instance=f,X(f),f;o=q0(a),(u=mi.get(u))&&ph(o,u),f=(e.ownerDocument||e).createElement("link"),X(f);var _=f;return _._p=new Promise(function(A,z){_.onload=A,_.onerror=z}),Tn(f,"link",o),n.state.loading|=4,hc(f,a.precedence,e),n.instance=f;case"script":return f=Mr(a.src),(u=e.querySelector(Io(f)))?(n.instance=u,X(u),u):(o=a,(u=mi.get(f))&&(o=x({},a),mh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),X(u),Tn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,hc(o,a.precedence,e));return n.instance}function hc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var A=o[_];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ph(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function mh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var dc=null;function j0(e,n,a){if(dc===null){var o=new Map,u=dc=new Map;u.set(a,o)}else u=dc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[fs]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var A=o.get(_);A?A.push(f):o.set(_,[f])}}return o}function Z0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function _y(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function K0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function vy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=yr(o.href),f=n.querySelector(Fo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=pc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,X(f);return}f=n.ownerDocument||n,o=q0(o),(u=mi.get(u))&&ph(o,u),f=f.createElement("link"),X(f);var _=f;_._p=new Promise(function(A,z){_.onload=A,_.onerror=z}),Tn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=pc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var gh=0;function xy(e,n){return e.stylesheets&&e.count===0&&gc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&gc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&gh===0&&(gh=62500*$S());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&gc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>gh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var mc=null;function gc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mc=new Map,n.forEach(Sy,e),mc=null,pc.call(e))}function Sy(e,n){if(!(n.state.loading&4)){var a=mc.get(e);if(a)var o=a.get(null);else{a=new Map,mc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=pc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ho={$$typeof:L,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function yy(e,n,a,o,u,f,_,A,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function Q0(e,n,a,o,u,f,_,A,z,J,ft,gt){return e=new yy(e,n,a,_,z,J,ft,gt,A),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),e.current=f,f.stateNode=e,n=ju(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ju(f),e}function J0(e){return e?(e=$s,e):$s}function $0(e,n,a,o,u,f){u=J0(u),o.context===null?o.context=u:o.pendingContext=u,o=Fa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ia(e,o,n),a!==null&&(qn(a,e,n),vo(a,e,n))}function t_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function _h(e,n){t_(e,n),(e=e.alternate)&&t_(e,n)}function e_(e){if(e.tag===13||e.tag===31){var n=gs(e,67108864);n!==null&&qn(n,e,67108864),_h(e,67108864)}}function n_(e){if(e.tag===13||e.tag===31){var n=ni();n=ks(n);var a=gs(e,n);a!==null&&qn(a,e,n),_h(e,n)}}var _c=!0;function My(e,n,a,o){var u=O.T;O.T=null;var f=B.p;try{B.p=2,vh(e,n,a,o)}finally{B.p=f,O.T=u}}function Ey(e,n,a,o){var u=O.T;O.T=null;var f=B.p;try{B.p=8,vh(e,n,a,o)}finally{B.p=f,O.T=u}}function vh(e,n,a,o){if(_c){var u=xh(o);if(u===null)ah(e,n,o,vc,a),a_(e,o);else if(Ty(u,e,n,a,o))o.stopPropagation();else if(a_(e,o),n&4&&-1<by.indexOf(e)){for(;u!==null;){var f=Ua(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=yt(f.pendingLanes);if(_!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var z=1<<31-Lt(_);A.entanglements[1]|=z,_&=~z}Ii(f),(Ne&6)===0&&(tc=E()+500,Oo(0))}}break;case 31:case 13:A=gs(f,2),A!==null&&qn(A,f,2),nc(),_h(f,2)}if(f=xh(o),f===null&&ah(e,n,o,vc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else ah(e,n,o,null,a)}}function xh(e){return e=Su(e),Sh(e)}var vc=null;function Sh(e){if(vc=null,e=Da(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return vc=e,null}function i_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case dt:return 2;case xt:return 8;case ut:case kt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var yh=!1,Ka=null,Qa=null,Ja=null,Go=new Map,Vo=new Map,$a=[],by="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function a_(e,n){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":Go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(n.pointerId)}}function ko(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ua(n),n!==null&&e_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Ty(e,n,a,o,u){switch(n){case"focusin":return Ka=ko(Ka,e,n,a,o,u),!0;case"dragenter":return Qa=ko(Qa,e,n,a,o,u),!0;case"mouseover":return Ja=ko(Ja,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Go.set(f,ko(Go.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Vo.set(f,ko(Vo.get(f)||null,e,n,a,o,u)),!0}return!1}function s_(e){var n=Da(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Ws(e.priority,function(){n_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ws(e.priority,function(){n_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=xh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);xu=o,a.target.dispatchEvent(o),xu=null}else return n=Ua(a),n!==null&&e_(n),e.blockedOn=a,!1;n.shift()}return!0}function r_(e,n,a){xc(e)&&a.delete(n)}function Ay(){yh=!1,Ka!==null&&xc(Ka)&&(Ka=null),Qa!==null&&xc(Qa)&&(Qa=null),Ja!==null&&xc(Ja)&&(Ja=null),Go.forEach(r_),Vo.forEach(r_)}function Sc(e,n){e.blockedOn===n&&(e.blockedOn=null,yh||(yh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ay)))}var yc=null;function o_(e){yc!==e&&(yc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){yc===e&&(yc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Sh(o||a)===null)continue;break}var f=Ua(a);f!==null&&(e.splice(n,3),n-=3,xf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Er(e){function n(z){return Sc(z,e)}Ka!==null&&Sc(Ka,e),Qa!==null&&Sc(Qa,e),Ja!==null&&Sc(Ja,e),Go.forEach(n),Vo.forEach(n);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)s_(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[pn]||null;if(typeof f=="function")_||o_(a);else if(_){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[pn]||null)A=_.formAction;else if(Sh(u)!==null)continue}else A=_.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),o_(a)}}}function l_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Mh(e){this._internalRoot=e}Mc.prototype.render=Mh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ni();$0(a,o,e,n,null,null)},Mc.prototype.unmount=Mh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;$0(e.current,2,null,e,null,null),nc(),n[Ji]=null}};function Mc(e){this._internalRoot=e}Mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Pi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,e),a===0&&s_(e)}};var c_=t.version;if(c_!=="19.2.4")throw Error(s(527,c_,"19.2.4"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Ry={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{Mt=Ec.inject(Ry),St=Ec}catch{}}return Wo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=gg,f=_g,_=vg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Q0(e,1,!1,null,null,a,o,null,u,f,_,l_),e[Ji]=n.current,ih(e),new Mh(n)},Wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=gg,_=_g,A=vg,z=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=Q0(e,1,!0,n,a??null,o,u,z,f,_,A,l_),n.context=J0(null),a=n.current,o=ni(),o=ks(o),u=Fa(o),u.callback=null,Ia(a,u,o),a=o,n.current.lanes=a,Nn(n,a),Ii(n),e[Ji]=n.current,ih(e),new Mc(n)},Wo.version="19.2.4",Wo}var x_;function zy(){if(x_)return Th.exports;x_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Th.exports=By(),Th.exports}var Fy=zy();const Zi=Object.create(null);Zi.open="0";Zi.close="1";Zi.ping="2";Zi.pong="3";Zi.message="4";Zi.upgrade="5";Zi.noop="6";const Jc=Object.create(null);Object.keys(Zi).forEach(r=>{Jc[Zi[r]]=r});const fd={type:"error",data:"parser error"},Uv=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Lv=typeof ArrayBuffer=="function",Nv=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r&&r.buffer instanceof ArrayBuffer,up=({type:r,data:t},i,s)=>Uv&&t instanceof Blob?i?s(t):S_(t,s):Lv&&(t instanceof ArrayBuffer||Nv(t))?i?s(t):S_(new Blob([t]),s):s(Zi[r]+(t||"")),S_=(r,t)=>{const i=new FileReader;return i.onload=function(){const s=i.result.split(",")[1];t("b"+(s||""))},i.readAsDataURL(r)};function y_(r){return r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):new Uint8Array(r.buffer,r.byteOffset,r.byteLength)}let wh;function Iy(r,t){if(Uv&&r.data instanceof Blob)return r.data.arrayBuffer().then(y_).then(t);if(Lv&&(r.data instanceof ArrayBuffer||Nv(r.data)))return t(y_(r.data));up(r,!1,i=>{wh||(wh=new TextEncoder),t(wh.encode(i))})}const M_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",tl=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let r=0;r<M_.length;r++)tl[M_.charCodeAt(r)]=r;const Hy=r=>{let t=r.length*.75,i=r.length,s,l=0,c,h,d,m;r[r.length-1]==="="&&(t--,r[r.length-2]==="="&&t--);const p=new ArrayBuffer(t),v=new Uint8Array(p);for(s=0;s<i;s+=4)c=tl[r.charCodeAt(s)],h=tl[r.charCodeAt(s+1)],d=tl[r.charCodeAt(s+2)],m=tl[r.charCodeAt(s+3)],v[l++]=c<<2|h>>4,v[l++]=(h&15)<<4|d>>2,v[l++]=(d&3)<<6|m&63;return p},Gy=typeof ArrayBuffer=="function",fp=(r,t)=>{if(typeof r!="string")return{type:"message",data:Ov(r,t)};const i=r.charAt(0);return i==="b"?{type:"message",data:Vy(r.substring(1),t)}:Jc[i]?r.length>1?{type:Jc[i],data:r.substring(1)}:{type:Jc[i]}:fd},Vy=(r,t)=>{if(Gy){const i=Hy(r);return Ov(i,t)}else return{base64:!0,data:r}},Ov=(r,t)=>{switch(t){case"blob":return r instanceof Blob?r:new Blob([r]);case"arraybuffer":default:return r instanceof ArrayBuffer?r:r.buffer}},Pv="",ky=(r,t)=>{const i=r.length,s=new Array(i);let l=0;r.forEach((c,h)=>{up(c,!1,d=>{s[h]=d,++l===i&&t(s.join(Pv))})})},Xy=(r,t)=>{const i=r.split(Pv),s=[];for(let l=0;l<i.length;l++){const c=fp(i[l],t);if(s.push(c),c.type==="error")break}return s};function Wy(){return new TransformStream({transform(r,t){Iy(r,i=>{const s=i.length;let l;if(s<126)l=new Uint8Array(1),new DataView(l.buffer).setUint8(0,s);else if(s<65536){l=new Uint8Array(3);const c=new DataView(l.buffer);c.setUint8(0,126),c.setUint16(1,s)}else{l=new Uint8Array(9);const c=new DataView(l.buffer);c.setUint8(0,127),c.setBigUint64(1,BigInt(s))}r.data&&typeof r.data!="string"&&(l[0]|=128),t.enqueue(l),t.enqueue(i)})}})}let Dh;function bc(r){return r.reduce((t,i)=>t+i.length,0)}function Tc(r,t){if(r[0].length===t)return r.shift();const i=new Uint8Array(t);let s=0;for(let l=0;l<t;l++)i[l]=r[0][s++],s===r[0].length&&(r.shift(),s=0);return r.length&&s<r[0].length&&(r[0]=r[0].slice(s)),i}function qy(r,t){Dh||(Dh=new TextDecoder);const i=[];let s=0,l=-1,c=!1;return new TransformStream({transform(h,d){for(i.push(h);;){if(s===0){if(bc(i)<1)break;const m=Tc(i,1);c=(m[0]&128)===128,l=m[0]&127,l<126?s=3:l===126?s=1:s=2}else if(s===1){if(bc(i)<2)break;const m=Tc(i,2);l=new DataView(m.buffer,m.byteOffset,m.length).getUint16(0),s=3}else if(s===2){if(bc(i)<8)break;const m=Tc(i,8),p=new DataView(m.buffer,m.byteOffset,m.length),v=p.getUint32(0);if(v>Math.pow(2,21)-1){d.enqueue(fd);break}l=v*Math.pow(2,32)+p.getUint32(4),s=3}else{if(bc(i)<l)break;const m=Tc(i,l);d.enqueue(fp(c?m:Dh.decode(m),t)),s=0}if(l===0||l>r){d.enqueue(fd);break}}}})}const Bv=4;function dn(r){if(r)return Yy(r)}function Yy(r){for(var t in dn.prototype)r[t]=dn.prototype[t];return r}dn.prototype.on=dn.prototype.addEventListener=function(r,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+r]=this._callbacks["$"+r]||[]).push(t),this};dn.prototype.once=function(r,t){function i(){this.off(r,i),t.apply(this,arguments)}return i.fn=t,this.on(r,i),this};dn.prototype.off=dn.prototype.removeListener=dn.prototype.removeAllListeners=dn.prototype.removeEventListener=function(r,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var i=this._callbacks["$"+r];if(!i)return this;if(arguments.length==1)return delete this._callbacks["$"+r],this;for(var s,l=0;l<i.length;l++)if(s=i[l],s===t||s.fn===t){i.splice(l,1);break}return i.length===0&&delete this._callbacks["$"+r],this};dn.prototype.emit=function(r){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),i=this._callbacks["$"+r],s=1;s<arguments.length;s++)t[s-1]=arguments[s];if(i){i=i.slice(0);for(var s=0,l=i.length;s<l;++s)i[s].apply(this,t)}return this};dn.prototype.emitReserved=dn.prototype.emit;dn.prototype.listeners=function(r){return this._callbacks=this._callbacks||{},this._callbacks["$"+r]||[]};dn.prototype.hasListeners=function(r){return!!this.listeners(r).length};const du=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,i)=>i(t,0),xi=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),jy="arraybuffer";function zv(r,...t){return t.reduce((i,s)=>(r.hasOwnProperty(s)&&(i[s]=r[s]),i),{})}const Zy=xi.setTimeout,Ky=xi.clearTimeout;function pu(r,t){t.useNativeTimers?(r.setTimeoutFn=Zy.bind(xi),r.clearTimeoutFn=Ky.bind(xi)):(r.setTimeoutFn=xi.setTimeout.bind(xi),r.clearTimeoutFn=xi.clearTimeout.bind(xi))}const Qy=1.33;function Jy(r){return typeof r=="string"?$y(r):Math.ceil((r.byteLength||r.size)*Qy)}function $y(r){let t=0,i=0;for(let s=0,l=r.length;s<l;s++)t=r.charCodeAt(s),t<128?i+=1:t<2048?i+=2:t<55296||t>=57344?i+=3:(s++,i+=4);return i}function Fv(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function tM(r){let t="";for(let i in r)r.hasOwnProperty(i)&&(t.length&&(t+="&"),t+=encodeURIComponent(i)+"="+encodeURIComponent(r[i]));return t}function eM(r){let t={},i=r.split("&");for(let s=0,l=i.length;s<l;s++){let c=i[s].split("=");t[decodeURIComponent(c[0])]=decodeURIComponent(c[1])}return t}class nM extends Error{constructor(t,i,s){super(t),this.description=i,this.context=s,this.type="TransportError"}}class hp extends dn{constructor(t){super(),this.writable=!1,pu(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,i,s){return super.emitReserved("error",new nM(t,i,s)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const i=fp(t,this.socket.binaryType);this.onPacket(i)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,i={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(i)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const i=tM(t);return i.length?"?"+i:""}}class iM extends hp{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const i=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let s=0;this._polling&&(s++,this.once("pollComplete",function(){--s||i()})),this.writable||(s++,this.once("drain",function(){--s||i()}))}else i()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const i=s=>{if(this.readyState==="opening"&&s.type==="open"&&this.onOpen(),s.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(s)};Xy(t,this.socket.binaryType).forEach(i),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,ky(t,i=>{this.doWrite(i,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",i=this.query||{};return this.opts.timestampRequests!==!1&&(i[this.opts.timestampParam]=Fv()),!this.supportsBinary&&!i.sid&&(i.b64=1),this.createUri(t,i)}}let Iv=!1;try{Iv=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const aM=Iv;function sM(){}class rM extends iM{constructor(t){if(super(t),typeof location<"u"){const i=location.protocol==="https:";let s=location.port;s||(s=i?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||s!==t.port}}doWrite(t,i){const s=this.request({method:"POST",data:t});s.on("success",i),s.on("error",(l,c)=>{this.onError("xhr post error",l,c)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(i,s)=>{this.onError("xhr poll error",i,s)}),this.pollXhr=t}}class Wi extends dn{constructor(t,i,s){super(),this.createRequest=t,pu(this,s),this._opts=s,this._method=s.method||"GET",this._uri=i,this._data=s.data!==void 0?s.data:null,this._create()}_create(){var t;const i=zv(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");i.xdomain=!!this._opts.xd;const s=this._xhr=this.createRequest(i);try{s.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){s.setDisableHeaderCheck&&s.setDisableHeaderCheck(!0);for(let l in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(l)&&s.setRequestHeader(l,this._opts.extraHeaders[l])}}catch{}if(this._method==="POST")try{s.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{s.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(s),"withCredentials"in s&&(s.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(s.timeout=this._opts.requestTimeout),s.onreadystatechange=()=>{var l;s.readyState===3&&((l=this._opts.cookieJar)===null||l===void 0||l.parseCookies(s.getResponseHeader("set-cookie"))),s.readyState===4&&(s.status===200||s.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof s.status=="number"?s.status:0)},0))},s.send(this._data)}catch(l){this.setTimeoutFn(()=>{this._onError(l)},0);return}typeof document<"u"&&(this._index=Wi.requestsCount++,Wi.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=sM,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Wi.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Wi.requestsCount=0;Wi.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",E_);else if(typeof addEventListener=="function"){const r="onpagehide"in xi?"pagehide":"unload";addEventListener(r,E_,!1)}}function E_(){for(let r in Wi.requests)Wi.requests.hasOwnProperty(r)&&Wi.requests[r].abort()}const oM=(function(){const r=Hv({xdomain:!1});return r&&r.responseType!==null})();class lM extends rM{constructor(t){super(t);const i=t&&t.forceBase64;this.supportsBinary=oM&&!i}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new Wi(Hv,this.uri(),t)}}function Hv(r){const t=r.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||aM))return new XMLHttpRequest}catch{}if(!t)try{return new xi[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Gv=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class cM extends hp{get name(){return"websocket"}doOpen(){const t=this.uri(),i=this.opts.protocols,s=Gv?{}:zv(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(s.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,i,s)}catch(l){return this.emitReserved("error",l)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let i=0;i<t.length;i++){const s=t[i],l=i===t.length-1;up(s,this.supportsBinary,c=>{try{this.doWrite(s,c)}catch{}l&&du(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",i=this.query||{};return this.opts.timestampRequests&&(i[this.opts.timestampParam]=Fv()),this.supportsBinary||(i.b64=1),this.createUri(t,i)}}const Uh=xi.WebSocket||xi.MozWebSocket;class uM extends cM{createSocket(t,i,s){return Gv?new Uh(t,i,s):i?new Uh(t,i):new Uh(t)}doWrite(t,i){this.ws.send(i)}}class fM extends hp{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const i=qy(Number.MAX_SAFE_INTEGER,this.socket.binaryType),s=t.readable.pipeThrough(i).getReader(),l=Wy();l.readable.pipeTo(t.writable),this._writer=l.writable.getWriter();const c=()=>{s.read().then(({done:d,value:m})=>{d||(this.onPacket(m),c())}).catch(d=>{})};c();const h={type:"open"};this.query.sid&&(h.data=`{"sid":"${this.query.sid}"}`),this._writer.write(h).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let i=0;i<t.length;i++){const s=t[i],l=i===t.length-1;this._writer.write(s).then(()=>{l&&du(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const hM={websocket:uM,webtransport:fM,polling:lM},dM=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,pM=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function hd(r){if(r.length>8e3)throw"URI too long";const t=r,i=r.indexOf("["),s=r.indexOf("]");i!=-1&&s!=-1&&(r=r.substring(0,i)+r.substring(i,s).replace(/:/g,";")+r.substring(s,r.length));let l=dM.exec(r||""),c={},h=14;for(;h--;)c[pM[h]]=l[h]||"";return i!=-1&&s!=-1&&(c.source=t,c.host=c.host.substring(1,c.host.length-1).replace(/;/g,":"),c.authority=c.authority.replace("[","").replace("]","").replace(/;/g,":"),c.ipv6uri=!0),c.pathNames=mM(c,c.path),c.queryKey=gM(c,c.query),c}function mM(r,t){const i=/\/{2,9}/g,s=t.replace(i,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&s.splice(0,1),t.slice(-1)=="/"&&s.splice(s.length-1,1),s}function gM(r,t){const i={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(s,l,c){l&&(i[l]=c)}),i}const dd=typeof addEventListener=="function"&&typeof removeEventListener=="function",$c=[];dd&&addEventListener("offline",()=>{$c.forEach(r=>r())},!1);class cs extends dn{constructor(t,i){if(super(),this.binaryType=jy,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(i=t,t=null),t){const s=hd(t);i.hostname=s.host,i.secure=s.protocol==="https"||s.protocol==="wss",i.port=s.port,s.query&&(i.query=s.query)}else i.host&&(i.hostname=hd(i.host).host);pu(this,i),this.secure=i.secure!=null?i.secure:typeof location<"u"&&location.protocol==="https:",i.hostname&&!i.port&&(i.port=this.secure?"443":"80"),this.hostname=i.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=i.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},i.transports.forEach(s=>{const l=s.prototype.name;this.transports.push(l),this._transportsByName[l]=s}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},i),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=eM(this.opts.query)),dd&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},$c.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const i=Object.assign({},this.opts.query);i.EIO=Bv,i.transport=t,this.id&&(i.sid=this.id);const s=Object.assign({},this.opts,{query:i,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](s)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&cs.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const i=this.createTransport(t);i.open(),this.setTransport(i)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",i=>this._onClose("transport close",i))}onOpen(){this.readyState="open",cs.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const i=new Error("server error");i.code=t.data,this._onError(i);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let i=1;for(let s=0;s<this.writeBuffer.length;s++){const l=this.writeBuffer[s].data;if(l&&(i+=Jy(l)),s>0&&i>this._maxPayload)return this.writeBuffer.slice(0,s);i+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,du(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,i,s){return this._sendPacket("message",t,i,s),this}send(t,i,s){return this._sendPacket("message",t,i,s),this}_sendPacket(t,i,s,l){if(typeof i=="function"&&(l=i,i=void 0),typeof s=="function"&&(l=s,s=null),this.readyState==="closing"||this.readyState==="closed")return;s=s||{},s.compress=s.compress!==!1;const c={type:t,data:i,options:s};this.emitReserved("packetCreate",c),this.writeBuffer.push(c),l&&this.once("flush",l),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},i=()=>{this.off("upgrade",i),this.off("upgradeError",i),t()},s=()=>{this.once("upgrade",i),this.once("upgradeError",i)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?s():t()}):this.upgrading?s():t()),this}_onError(t){if(cs.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,i){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),dd&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const s=$c.indexOf(this._offlineEventListener);s!==-1&&$c.splice(s,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,i),this.writeBuffer=[],this._prevBufferLen=0}}}cs.protocol=Bv;class _M extends cs{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let i=this.createTransport(t),s=!1;cs.priorWebsocketSuccess=!1;const l=()=>{s||(i.send([{type:"ping",data:"probe"}]),i.once("packet",x=>{if(!s)if(x.type==="pong"&&x.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",i),!i)return;cs.priorWebsocketSuccess=i.name==="websocket",this.transport.pause(()=>{s||this.readyState!=="closed"&&(v(),this.setTransport(i),i.send([{type:"upgrade"}]),this.emitReserved("upgrade",i),i=null,this.upgrading=!1,this.flush())})}else{const g=new Error("probe error");g.transport=i.name,this.emitReserved("upgradeError",g)}}))};function c(){s||(s=!0,v(),i.close(),i=null)}const h=x=>{const g=new Error("probe error: "+x);g.transport=i.name,c(),this.emitReserved("upgradeError",g)};function d(){h("transport closed")}function m(){h("socket closed")}function p(x){i&&x.name!==i.name&&c()}const v=()=>{i.removeListener("open",l),i.removeListener("error",h),i.removeListener("close",d),this.off("close",m),this.off("upgrading",p)};i.once("open",l),i.once("error",h),i.once("close",d),this.once("close",m),this.once("upgrading",p),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{s||i.open()},200):i.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const i=[];for(let s=0;s<t.length;s++)~this.transports.indexOf(t[s])&&i.push(t[s]);return i}}let vM=class extends _M{constructor(t,i={}){const s=typeof t=="object"?t:i;(!s.transports||s.transports&&typeof s.transports[0]=="string")&&(s.transports=(s.transports||["polling","websocket","webtransport"]).map(l=>hM[l]).filter(l=>!!l)),super(t,s)}};function xM(r,t="",i){let s=r;i=i||typeof location<"u"&&location,r==null&&(r=i.protocol+"//"+i.host),typeof r=="string"&&(r.charAt(0)==="/"&&(r.charAt(1)==="/"?r=i.protocol+r:r=i.host+r),/^(https?|wss?):\/\//.test(r)||(typeof i<"u"?r=i.protocol+"//"+r:r="https://"+r),s=hd(r)),s.port||(/^(http|ws)$/.test(s.protocol)?s.port="80":/^(http|ws)s$/.test(s.protocol)&&(s.port="443")),s.path=s.path||"/";const c=s.host.indexOf(":")!==-1?"["+s.host+"]":s.host;return s.id=s.protocol+"://"+c+":"+s.port+t,s.href=s.protocol+"://"+c+(i&&i.port===s.port?"":":"+s.port),s}const SM=typeof ArrayBuffer=="function",yM=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r.buffer instanceof ArrayBuffer,Vv=Object.prototype.toString,MM=typeof Blob=="function"||typeof Blob<"u"&&Vv.call(Blob)==="[object BlobConstructor]",EM=typeof File=="function"||typeof File<"u"&&Vv.call(File)==="[object FileConstructor]";function dp(r){return SM&&(r instanceof ArrayBuffer||yM(r))||MM&&r instanceof Blob||EM&&r instanceof File}function tu(r,t){if(!r||typeof r!="object")return!1;if(Array.isArray(r)){for(let i=0,s=r.length;i<s;i++)if(tu(r[i]))return!0;return!1}if(dp(r))return!0;if(r.toJSON&&typeof r.toJSON=="function"&&arguments.length===1)return tu(r.toJSON(),!0);for(const i in r)if(Object.prototype.hasOwnProperty.call(r,i)&&tu(r[i]))return!0;return!1}function bM(r){const t=[],i=r.data,s=r;return s.data=pd(i,t),s.attachments=t.length,{packet:s,buffers:t}}function pd(r,t){if(!r)return r;if(dp(r)){const i={_placeholder:!0,num:t.length};return t.push(r),i}else if(Array.isArray(r)){const i=new Array(r.length);for(let s=0;s<r.length;s++)i[s]=pd(r[s],t);return i}else if(typeof r=="object"&&!(r instanceof Date)){const i={};for(const s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=pd(r[s],t));return i}return r}function TM(r,t){return r.data=md(r.data,t),delete r.attachments,r}function md(r,t){if(!r)return r;if(r&&r._placeholder===!0){if(typeof r.num=="number"&&r.num>=0&&r.num<t.length)return t[r.num];throw new Error("illegal attachments")}else if(Array.isArray(r))for(let i=0;i<r.length;i++)r[i]=md(r[i],t);else if(typeof r=="object")for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&(r[i]=md(r[i],t));return r}const AM=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var Ee;(function(r){r[r.CONNECT=0]="CONNECT",r[r.DISCONNECT=1]="DISCONNECT",r[r.EVENT=2]="EVENT",r[r.ACK=3]="ACK",r[r.CONNECT_ERROR=4]="CONNECT_ERROR",r[r.BINARY_EVENT=5]="BINARY_EVENT",r[r.BINARY_ACK=6]="BINARY_ACK"})(Ee||(Ee={}));class RM{constructor(t){this.replacer=t}encode(t){return(t.type===Ee.EVENT||t.type===Ee.ACK)&&tu(t)?this.encodeAsBinary({type:t.type===Ee.EVENT?Ee.BINARY_EVENT:Ee.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let i=""+t.type;return(t.type===Ee.BINARY_EVENT||t.type===Ee.BINARY_ACK)&&(i+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(i+=t.nsp+","),t.id!=null&&(i+=t.id),t.data!=null&&(i+=JSON.stringify(t.data,this.replacer)),i}encodeAsBinary(t){const i=bM(t),s=this.encodeAsString(i.packet),l=i.buffers;return l.unshift(s),l}}class pp extends dn{constructor(t){super(),this.reviver=t}add(t){let i;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");i=this.decodeString(t);const s=i.type===Ee.BINARY_EVENT;s||i.type===Ee.BINARY_ACK?(i.type=s?Ee.EVENT:Ee.ACK,this.reconstructor=new CM(i),i.attachments===0&&super.emitReserved("decoded",i)):super.emitReserved("decoded",i)}else if(dp(t)||t.base64)if(this.reconstructor)i=this.reconstructor.takeBinaryData(t),i&&(this.reconstructor=null,super.emitReserved("decoded",i));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let i=0;const s={type:Number(t.charAt(0))};if(Ee[s.type]===void 0)throw new Error("unknown packet type "+s.type);if(s.type===Ee.BINARY_EVENT||s.type===Ee.BINARY_ACK){const c=i+1;for(;t.charAt(++i)!=="-"&&i!=t.length;);const h=t.substring(c,i);if(h!=Number(h)||t.charAt(i)!=="-")throw new Error("Illegal attachments");s.attachments=Number(h)}if(t.charAt(i+1)==="/"){const c=i+1;for(;++i&&!(t.charAt(i)===","||i===t.length););s.nsp=t.substring(c,i)}else s.nsp="/";const l=t.charAt(i+1);if(l!==""&&Number(l)==l){const c=i+1;for(;++i;){const h=t.charAt(i);if(h==null||Number(h)!=h){--i;break}if(i===t.length)break}s.id=Number(t.substring(c,i+1))}if(t.charAt(++i)){const c=this.tryParse(t.substr(i));if(pp.isPayloadValid(s.type,c))s.data=c;else throw new Error("invalid payload")}return s}tryParse(t){try{return JSON.parse(t,this.reviver)}catch{return!1}}static isPayloadValid(t,i){switch(t){case Ee.CONNECT:return b_(i);case Ee.DISCONNECT:return i===void 0;case Ee.CONNECT_ERROR:return typeof i=="string"||b_(i);case Ee.EVENT:case Ee.BINARY_EVENT:return Array.isArray(i)&&(typeof i[0]=="number"||typeof i[0]=="string"&&AM.indexOf(i[0])===-1);case Ee.ACK:case Ee.BINARY_ACK:return Array.isArray(i)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class CM{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const i=TM(this.reconPack,this.buffers);return this.finishedReconstruction(),i}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function b_(r){return Object.prototype.toString.call(r)==="[object Object]"}const wM=Object.freeze(Object.defineProperty({__proto__:null,Decoder:pp,Encoder:RM,get PacketType(){return Ee}},Symbol.toStringTag,{value:"Module"}));function Di(r,t,i){return r.on(t,i),function(){r.off(t,i)}}const DM=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class kv extends dn{constructor(t,i,s){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=i,s&&s.auth&&(this.auth=s.auth),this._opts=Object.assign({},s),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[Di(t,"open",this.onopen.bind(this)),Di(t,"packet",this.onpacket.bind(this)),Di(t,"error",this.onerror.bind(this)),Di(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...i){var s,l,c;if(DM.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(i.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(i),this;const h={type:Ee.EVENT,data:i};if(h.options={},h.options.compress=this.flags.compress!==!1,typeof i[i.length-1]=="function"){const v=this.ids++,x=i.pop();this._registerAckCallback(v,x),h.id=v}const d=(l=(s=this.io.engine)===null||s===void 0?void 0:s.transport)===null||l===void 0?void 0:l.writable,m=this.connected&&!(!((c=this.io.engine)===null||c===void 0)&&c._hasPingExpired());return this.flags.volatile&&!d||(m?(this.notifyOutgoingListeners(h),this.packet(h)):this.sendBuffer.push(h)),this.flags={},this}_registerAckCallback(t,i){var s;const l=(s=this.flags.timeout)!==null&&s!==void 0?s:this._opts.ackTimeout;if(l===void 0){this.acks[t]=i;return}const c=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let d=0;d<this.sendBuffer.length;d++)this.sendBuffer[d].id===t&&this.sendBuffer.splice(d,1);i.call(this,new Error("operation has timed out"))},l),h=(...d)=>{this.io.clearTimeoutFn(c),i.apply(this,d)};h.withError=!0,this.acks[t]=h}emitWithAck(t,...i){return new Promise((s,l)=>{const c=(h,d)=>h?l(h):s(d);c.withError=!0,i.push(c),this.emit(t,...i)})}_addToQueue(t){let i;typeof t[t.length-1]=="function"&&(i=t.pop());const s={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((l,...c)=>(this._queue[0],l!==null?s.tryCount>this._opts.retries&&(this._queue.shift(),i&&i(l)):(this._queue.shift(),i&&i(null,...c)),s.pending=!1,this._drainQueue())),this._queue.push(s),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const i=this._queue[0];i.pending&&!t||(i.pending=!0,i.tryCount++,this.flags=i.flags,this.emit.apply(this,i.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:Ee.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,i){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,i),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(s=>String(s.id)===t)){const s=this.acks[t];delete this.acks[t],s.withError&&s.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case Ee.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Ee.EVENT:case Ee.BINARY_EVENT:this.onevent(t);break;case Ee.ACK:case Ee.BINARY_ACK:this.onack(t);break;case Ee.DISCONNECT:this.ondisconnect();break;case Ee.CONNECT_ERROR:this.destroy();const s=new Error(t.data.message);s.data=t.data.data,this.emitReserved("connect_error",s);break}}onevent(t){const i=t.data||[];t.id!=null&&i.push(this.ack(t.id)),this.connected?this.emitEvent(i):this.receiveBuffer.push(Object.freeze(i))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const i=this._anyListeners.slice();for(const s of i)s.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const i=this;let s=!1;return function(...l){s||(s=!0,i.packet({type:Ee.ACK,id:t,data:l}))}}onack(t){const i=this.acks[t.id];typeof i=="function"&&(delete this.acks[t.id],i.withError&&t.data.unshift(null),i.apply(this,t.data))}onconnect(t,i){this.id=t,this.recovered=i&&this._pid===i,this._pid=i,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Ee.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const i=this._anyListeners;for(let s=0;s<i.length;s++)if(t===i[s])return i.splice(s,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const i=this._anyOutgoingListeners;for(let s=0;s<i.length;s++)if(t===i[s])return i.splice(s,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const i=this._anyOutgoingListeners.slice();for(const s of i)s.apply(this,t.data)}}}function Zr(r){r=r||{},this.ms=r.min||100,this.max=r.max||1e4,this.factor=r.factor||2,this.jitter=r.jitter>0&&r.jitter<=1?r.jitter:0,this.attempts=0}Zr.prototype.duration=function(){var r=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),i=Math.floor(t*this.jitter*r);r=(Math.floor(t*10)&1)==0?r-i:r+i}return Math.min(r,this.max)|0};Zr.prototype.reset=function(){this.attempts=0};Zr.prototype.setMin=function(r){this.ms=r};Zr.prototype.setMax=function(r){this.max=r};Zr.prototype.setJitter=function(r){this.jitter=r};class gd extends dn{constructor(t,i){var s;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(i=t,t=void 0),i=i||{},i.path=i.path||"/socket.io",this.opts=i,pu(this,i),this.reconnection(i.reconnection!==!1),this.reconnectionAttempts(i.reconnectionAttempts||1/0),this.reconnectionDelay(i.reconnectionDelay||1e3),this.reconnectionDelayMax(i.reconnectionDelayMax||5e3),this.randomizationFactor((s=i.randomizationFactor)!==null&&s!==void 0?s:.5),this.backoff=new Zr({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(i.timeout==null?2e4:i.timeout),this._readyState="closed",this.uri=t;const l=i.parser||wM;this.encoder=new l.Encoder,this.decoder=new l.Decoder,this._autoConnect=i.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var i;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(i=this.backoff)===null||i===void 0||i.setMin(t),this)}randomizationFactor(t){var i;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(i=this.backoff)===null||i===void 0||i.setJitter(t),this)}reconnectionDelayMax(t){var i;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(i=this.backoff)===null||i===void 0||i.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new vM(this.uri,this.opts);const i=this.engine,s=this;this._readyState="opening",this.skipReconnect=!1;const l=Di(i,"open",function(){s.onopen(),t&&t()}),c=d=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",d),t?t(d):this.maybeReconnectOnOpen()},h=Di(i,"error",c);if(this._timeout!==!1){const d=this._timeout,m=this.setTimeoutFn(()=>{l(),c(new Error("timeout")),i.close()},d);this.opts.autoUnref&&m.unref(),this.subs.push(()=>{this.clearTimeoutFn(m)})}return this.subs.push(l),this.subs.push(h),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(Di(t,"ping",this.onping.bind(this)),Di(t,"data",this.ondata.bind(this)),Di(t,"error",this.onerror.bind(this)),Di(t,"close",this.onclose.bind(this)),Di(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(i){this.onclose("parse error",i)}}ondecoded(t){du(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,i){let s=this.nsps[t];return s?this._autoConnect&&!s.active&&s.connect():(s=new kv(this,t,i),this.nsps[t]=s),s}_destroy(t){const i=Object.keys(this.nsps);for(const s of i)if(this.nsps[s].active)return;this._close()}_packet(t){const i=this.encoder.encode(t);for(let s=0;s<i.length;s++)this.engine.write(i[s],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,i){var s;this.cleanup(),(s=this.engine)===null||s===void 0||s.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,i),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const i=this.backoff.duration();this._reconnecting=!0;const s=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(l=>{l?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",l)):t.onreconnect()}))},i);this.opts.autoUnref&&s.unref(),this.subs.push(()=>{this.clearTimeoutFn(s)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const qo={};function eu(r,t){typeof r=="object"&&(t=r,r=void 0),t=t||{};const i=xM(r,t.path||"/socket.io"),s=i.source,l=i.id,c=i.path,h=qo[l]&&c in qo[l].nsps,d=t.forceNew||t["force new connection"]||t.multiplex===!1||h;let m;return d?m=new gd(s,t):(qo[l]||(qo[l]=new gd(s,t)),m=qo[l]),i.query&&!t.query&&(t.query=i.queryKey),m.socket(i.path,t)}Object.assign(eu,{Manager:gd,Socket:kv,io:eu,connect:eu});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mp="183",UM=0,T_=1,LM=2,nu=1,NM=2,el=3,us=0,Yn=1,Ma=2,Ta=0,Gr=1,A_=2,R_=3,C_=4,OM=5,Bs=100,PM=101,BM=102,zM=103,FM=104,IM=200,HM=201,GM=202,VM=203,_d=204,vd=205,kM=206,XM=207,WM=208,qM=209,YM=210,jM=211,ZM=212,KM=213,QM=214,xd=0,Sd=1,yd=2,kr=3,Md=4,Ed=5,bd=6,Td=7,Xv=0,JM=1,$M=2,qi=0,Wv=1,qv=2,Yv=3,jv=4,Zv=5,Kv=6,Qv=7,Jv=300,Hs=301,Xr=302,Lh=303,Nh=304,mu=306,Ad=1e3,Ea=1001,Rd=1002,Rn=1003,tE=1004,Ac=1005,Ln=1006,Oh=1007,Fs=1008,ri=1009,$v=1010,tx=1011,sl=1012,gp=1013,Ki=1014,ki=1015,Ra=1016,_p=1017,vp=1018,rl=1020,ex=35902,nx=35899,ix=1021,ax=1022,Li=1023,Ca=1026,Is=1027,sx=1028,xp=1029,Wr=1030,Sp=1031,yp=1033,iu=33776,au=33777,su=33778,ru=33779,Cd=35840,wd=35841,Dd=35842,Ud=35843,Ld=36196,Nd=37492,Od=37496,Pd=37488,Bd=37489,zd=37490,Fd=37491,Id=37808,Hd=37809,Gd=37810,Vd=37811,kd=37812,Xd=37813,Wd=37814,qd=37815,Yd=37816,jd=37817,Zd=37818,Kd=37819,Qd=37820,Jd=37821,$d=36492,tp=36494,ep=36495,np=36283,ip=36284,ap=36285,sp=36286,eE=3200,rx=0,nE=1,os="",vi="srgb",qr="srgb-linear",lu="linear",Ie="srgb",br=7680,w_=519,iE=512,aE=513,sE=514,Mp=515,rE=516,oE=517,Ep=518,lE=519,D_=35044,U_="300 es",Xi=2e3,ol=2001;function cE(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function cu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function uE(){const r=cu("canvas");return r.style.display="block",r}const L_={};function N_(...r){const t="THREE."+r.shift();console.log(t,...r)}function ox(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ee(...r){r=ox(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ae(...r){r=ox(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function uu(...r){const t=r.join(" ");t in L_||(L_[t]=!0,ee(...r))}function fE(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const hE={[xd]:Sd,[yd]:bd,[Md]:Td,[kr]:Ed,[Sd]:xd,[bd]:yd,[Td]:Md,[Ed]:kr};class Gs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let O_=1234567;const il=Math.PI/180,Yr=180/Math.PI;function Kr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function Se(r,t,i){return Math.max(t,Math.min(i,r))}function bp(r,t){return(r%t+t)%t}function dE(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function pE(r,t,i){return r!==t?(i-r)/(t-r):0}function al(r,t,i){return(1-i)*r+i*t}function mE(r,t,i,s){return al(r,t,1-Math.exp(-i*s))}function gE(r,t=1){return t-Math.abs(bp(r,t*2)-t)}function _E(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function vE(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function xE(r,t){return r+Math.floor(Math.random()*(t-r+1))}function SE(r,t){return r+Math.random()*(t-r)}function yE(r){return r*(.5-Math.random())}function ME(r){r!==void 0&&(O_=r);let t=O_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function EE(r){return r*il}function bE(r){return r*Yr}function TE(r){return(r&r-1)===0&&r!==0}function AE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function RE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function CE(r,t,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+s)/2),v=h((t+s)/2),x=c((t-s)/2),g=h((t-s)/2),M=c((s-t)/2),b=h((s-t)/2);switch(l){case"XYX":r.set(d*v,m*x,m*g,d*p);break;case"YZY":r.set(m*g,d*v,m*x,d*p);break;case"ZXZ":r.set(m*x,m*g,d*v,d*p);break;case"XZX":r.set(d*v,m*b,m*M,d*p);break;case"YXY":r.set(m*M,d*v,m*b,d*p);break;case"ZYZ":r.set(m*b,m*M,d*v,d*p);break;default:ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Hr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const wE={DEG2RAD:il,RAD2DEG:Yr,generateUUID:Kr,clamp:Se,euclideanModulo:bp,mapLinear:dE,inverseLerp:pE,lerp:al,damp:mE,pingpong:gE,smoothstep:_E,smootherstep:vE,randInt:xE,randFloat:SE,randFloatSpread:yE,seededRandom:ME,degToRad:EE,radToDeg:bE,isPowerOfTwo:TE,ceilPowerOfTwo:AE,floorPowerOfTwo:RE,setQuaternionFromProperEuler:CE,normalize:Fn,denormalize:Hr};class Ue{constructor(t=0,i=0){Ue.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],x=s[l+3],g=c[h+0],M=c[h+1],b=c[h+2],C=c[h+3];if(x!==C||m!==g||p!==M||v!==b){let y=m*g+p*M+v*b+x*C;y<0&&(g=-g,M=-M,b=-b,C=-C,y=-y);let S=1-d;if(y<.9995){const w=Math.acos(y),L=Math.sin(w);S=Math.sin(S*w)/L,d=Math.sin(d*w)/L,m=m*S+g*d,p=p*S+M*d,v=v*S+b*d,x=x*S+C*d}else{m=m*S+g*d,p=p*S+M*d,v=v*S+b*d,x=x*S+C*d;const w=1/Math.sqrt(m*m+p*p+v*v+x*x);m*=w,p*=w,v*=w,x*=w}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],x=c[h],g=c[h+1],M=c[h+2],b=c[h+3];return t[i]=d*b+v*x+m*M-p*g,t[i+1]=m*b+v*g+p*x-d*M,t[i+2]=p*b+v*M+d*g-m*x,t[i+3]=v*b-d*x-m*g-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),x=d(c/2),g=m(s/2),M=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=g*v*x+p*M*b,this._y=p*M*x-g*v*b,this._z=p*v*b+g*M*x,this._w=p*v*x-g*M*b;break;case"YXZ":this._x=g*v*x+p*M*b,this._y=p*M*x-g*v*b,this._z=p*v*b-g*M*x,this._w=p*v*x+g*M*b;break;case"ZXY":this._x=g*v*x-p*M*b,this._y=p*M*x+g*v*b,this._z=p*v*b+g*M*x,this._w=p*v*x-g*M*b;break;case"ZYX":this._x=g*v*x-p*M*b,this._y=p*M*x+g*v*b,this._z=p*v*b-g*M*x,this._w=p*v*x+g*M*b;break;case"YZX":this._x=g*v*x+p*M*b,this._y=p*M*x+g*v*b,this._z=p*v*b-g*M*x,this._w=p*v*x-g*M*b;break;case"XZY":this._x=g*v*x-p*M*b,this._y=p*M*x-g*v*b,this._z=p*v*b+g*M*x,this._w=p*v*x+g*M*b;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],x=i[10],g=s+d+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>d&&s>x){const M=2*Math.sqrt(1+s-d-x);this._w=(v-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-s-x);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+x-s-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-c*m,this._y=l*v+h*m+c*d-s*p,this._z=c*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,s=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(P_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(P_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),v=2*(d*i-c*l),x=2*(c*s-h*i);return this.x=i+m*p+h*x-d*v,this.y=s+m*v+d*p-c*x,this.z=l+m*x+c*v-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ph.copy(this).projectOnVector(t),this.sub(Ph)}reflect(t){return this.sub(Ph.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ph=new Q,P_=new Qr;class he{constructor(t,i,s,l,c,h,d,m,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],x=s[7],g=s[2],M=s[5],b=s[8],C=l[0],y=l[3],S=l[6],w=l[1],L=l[4],N=l[7],k=l[2],I=l[5],F=l[8];return c[0]=h*C+d*w+m*k,c[3]=h*y+d*L+m*I,c[6]=h*S+d*N+m*F,c[1]=p*C+v*w+x*k,c[4]=p*y+v*L+x*I,c[7]=p*S+v*N+x*F,c[2]=g*C+M*w+b*k,c[5]=g*y+M*L+b*I,c[8]=g*S+M*N+b*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*h*v-i*d*p-s*c*v+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],x=v*h-d*p,g=d*m-v*c,M=p*c-h*m,b=i*x+s*g+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=x*C,t[1]=(l*p-v*s)*C,t[2]=(d*s-l*h)*C,t[3]=g*C,t[4]=(v*i-l*m)*C,t[5]=(l*c-d*i)*C,t[6]=M*C,t[7]=(s*m-p*i)*C,t[8]=(h*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Bh.makeScale(t,i)),this}rotate(t){return this.premultiply(Bh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Bh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bh=new he,B_=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),z_=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DE(){const r={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ie&&(l.r=Aa(l.r),l.g=Aa(l.g),l.b=Aa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=Vr(l.r),l.g=Vr(l.g),l.b=Vr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===os?lu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return uu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return uu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[qr]:{primaries:t,whitePoint:s,transfer:lu,toXYZ:B_,fromXYZ:z_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:t,whitePoint:s,transfer:Ie,toXYZ:B_,fromXYZ:z_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),r}const Re=DE();function Aa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Tr;class UE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Tr===void 0&&(Tr=cu("canvas")),Tr.width=t.width,Tr.height=t.height;const l=Tr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Tr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=cu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Aa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Aa(i[s]/255)*255):i[s]=Aa(i[s]);return{data:i,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let LE=0;class Tp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=Kr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(zh(l[h].image)):c.push(zh(l[h]))}else c=zh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function zh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?UE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}let NE=0;const Fh=new Q;class Hn extends Gs{constructor(t=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=Ea,l=Ea,c=Ln,h=Fs,d=Li,m=ri,p=Hn.DEFAULT_ANISOTROPY,v=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=Kr(),this.name="",this.source=new Tp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fh).x}get height(){return this.source.getSize(Fh).y}get depth(){return this.source.getSize(Fh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ee(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ad:t.x=t.x-Math.floor(t.x);break;case Ea:t.x=t.x<0?0:1;break;case Rd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ad:t.y=t.y-Math.floor(t.y);break;case Ea:t.y=t.y<0?0:1;break;case Rd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Jv;Hn.DEFAULT_ANISOTROPY=1;class en{constructor(t=0,i=0,s=0,l=1){en.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],v=m[4],x=m[8],g=m[1],M=m[5],b=m[9],C=m[2],y=m[6],S=m[10];if(Math.abs(v-g)<.01&&Math.abs(x-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+C)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,N=(M+1)/2,k=(S+1)/2,I=(v+g)/4,F=(x+C)/4,T=(b+y)/4;return L>N&&L>k?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=I/s,c=F/s):N>k?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=I/l,c=T/l):k<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),s=F/c,l=T/c),this.set(s,l,c,i),this}let w=Math.sqrt((y-b)*(y-b)+(x-C)*(x-C)+(g-v)*(g-v));return Math.abs(w)<.001&&(w=1),this.x=(y-b)/w,this.y=(x-C)/w,this.z=(g-v)/w,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this.w=Se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this.w=Se(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OE extends Gs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new en(0,0,t,i),this.scissorTest=!1,this.viewport=new en(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Hn(l),h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Tp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends OE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class lx extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class PE extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ke{constructor(t,i,s,l,c,h,d,m,p,v,x,g,M,b,C,y){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,v,x,g,M,b,C,y)}set(t,i,s,l,c,h,d,m,p,v,x,g,M,b,C,y){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=v,S[10]=x,S[14]=g,S[3]=M,S[7]=b,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Ar.setFromMatrixColumn(t,0).length(),c=1/Ar.setFromMatrixColumn(t,1).length(),h=1/Ar.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const g=h*v,M=h*x,b=d*v,C=d*x;i[0]=m*v,i[4]=-m*x,i[8]=p,i[1]=M+b*p,i[5]=g-C*p,i[9]=-d*m,i[2]=C-g*p,i[6]=b+M*p,i[10]=h*m}else if(t.order==="YXZ"){const g=m*v,M=m*x,b=p*v,C=p*x;i[0]=g+C*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*x,i[5]=h*v,i[9]=-d,i[2]=M*d-b,i[6]=C+g*d,i[10]=h*m}else if(t.order==="ZXY"){const g=m*v,M=m*x,b=p*v,C=p*x;i[0]=g-C*d,i[4]=-h*x,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*v,i[9]=C-g*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const g=h*v,M=h*x,b=d*v,C=d*x;i[0]=m*v,i[4]=b*p-M,i[8]=g*p+C,i[1]=m*x,i[5]=C*p+g,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,M=h*p,b=d*m,C=d*p;i[0]=m*v,i[4]=C-g*x,i[8]=b*x+M,i[1]=x,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*x+b,i[10]=g-C*x}else if(t.order==="XZY"){const g=h*m,M=h*p,b=d*m,C=d*p;i[0]=m*v,i[4]=-x,i[8]=p*v,i[1]=g*x+C,i[5]=h*v,i[9]=M*x-b,i[2]=b*x-M,i[6]=d*v,i[10]=C*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(BE,t,zE)}lookAt(t,i,s){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),es.crossVectors(s,ii),es.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),es.crossVectors(s,ii)),es.normalize(),Rc.crossVectors(ii,es),l[0]=es.x,l[4]=Rc.x,l[8]=ii.x,l[1]=es.y,l[5]=Rc.y,l[9]=ii.y,l[2]=es.z,l[6]=Rc.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],x=s[5],g=s[9],M=s[13],b=s[2],C=s[6],y=s[10],S=s[14],w=s[3],L=s[7],N=s[11],k=s[15],I=l[0],F=l[4],T=l[8],D=l[12],pt=l[1],H=l[5],tt=l[9],at=l[13],lt=l[2],$=l[6],O=l[10],B=l[14],ot=l[3],ht=l[7],Et=l[11],P=l[15];return c[0]=h*I+d*pt+m*lt+p*ot,c[4]=h*F+d*H+m*$+p*ht,c[8]=h*T+d*tt+m*O+p*Et,c[12]=h*D+d*at+m*B+p*P,c[1]=v*I+x*pt+g*lt+M*ot,c[5]=v*F+x*H+g*$+M*ht,c[9]=v*T+x*tt+g*O+M*Et,c[13]=v*D+x*at+g*B+M*P,c[2]=b*I+C*pt+y*lt+S*ot,c[6]=b*F+C*H+y*$+S*ht,c[10]=b*T+C*tt+y*O+S*Et,c[14]=b*D+C*at+y*B+S*P,c[3]=w*I+L*pt+N*lt+k*ot,c[7]=w*F+L*H+N*$+k*ht,c[11]=w*T+L*tt+N*O+k*Et,c[15]=w*D+L*at+N*B+k*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],v=t[2],x=t[6],g=t[10],M=t[14],b=t[3],C=t[7],y=t[11],S=t[15],w=m*M-p*g,L=d*M-p*x,N=d*g-m*x,k=h*M-p*v,I=h*g-m*v,F=h*x-d*v;return i*(C*w-y*L+S*N)-s*(b*w-y*k+S*I)+l*(b*L-C*k+S*F)-c*(b*N-C*I+y*F)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],x=t[9],g=t[10],M=t[11],b=t[12],C=t[13],y=t[14],S=t[15],w=i*d-s*h,L=i*m-l*h,N=i*p-c*h,k=s*m-l*d,I=s*p-c*d,F=l*p-c*m,T=v*C-x*b,D=v*y-g*b,pt=v*S-M*b,H=x*y-g*C,tt=x*S-M*C,at=g*S-M*y,lt=w*at-L*tt+N*H+k*pt-I*D+F*T;if(lt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/lt;return t[0]=(d*at-m*tt+p*H)*$,t[1]=(l*tt-s*at-c*H)*$,t[2]=(C*F-y*I+S*k)*$,t[3]=(g*I-x*F-M*k)*$,t[4]=(m*pt-h*at-p*D)*$,t[5]=(i*at-l*pt+c*D)*$,t[6]=(y*N-b*F-S*L)*$,t[7]=(v*F-g*N+M*L)*$,t[8]=(h*tt-d*pt+p*T)*$,t[9]=(s*pt-i*tt-c*T)*$,t[10]=(b*I-C*N+S*w)*$,t[11]=(x*N-v*I-M*w)*$,t[12]=(d*D-h*H-m*T)*$,t[13]=(i*H-s*D+l*T)*$,t[14]=(C*L-b*k-y*w)*$,t[15]=(v*k-x*L+g*w)*$,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,v=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,v=h+h,x=d+d,g=c*p,M=c*v,b=c*x,C=h*v,y=h*x,S=d*x,w=m*p,L=m*v,N=m*x,k=s.x,I=s.y,F=s.z;return l[0]=(1-(C+S))*k,l[1]=(M+N)*k,l[2]=(b-L)*k,l[3]=0,l[4]=(M-N)*I,l[5]=(1-(g+S))*I,l[6]=(y+w)*I,l[7]=0,l[8]=(b+L)*F,l[9]=(y-w)*F,l[10]=(1-(g+C))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Ar.set(l[0],l[1],l[2]).length();const d=Ar.set(l[4],l[5],l[6]).length(),m=Ar.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Ri.copy(this);const p=1/h,v=1/d,x=1/m;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=v,Ri.elements[5]*=v,Ri.elements[6]*=v,Ri.elements[8]*=x,Ri.elements[9]*=x,Ri.elements[10]*=x,i.setFromRotationMatrix(Ri),s.x=h,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,h,d=Xi,m=!1){const p=this.elements,v=2*c/(i-t),x=2*c/(s-l),g=(i+t)/(i-t),M=(s+l)/(s-l);let b,C;if(m)b=c/(h-c),C=h*c/(h-c);else if(d===Xi)b=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===ol)b=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Xi,m=!1){const p=this.elements,v=2/(i-t),x=2/(s-l),g=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,C;if(m)b=1/(h-c),C=h/(h-c);else if(d===Xi)b=-2/(h-c),C=-(h+c)/(h-c);else if(d===ol)b=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Ar=new Q,Ri=new Ke,BE=new Q(0,0,0),zE=new Q(1,1,1),es=new Q,Rc=new Q,ii=new Q,F_=new Ke,I_=new Qr;class Ni{constructor(t=0,i=0,s=0,l=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],x=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return F_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(F_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return I_.setFromEuler(this),this.setFromQuaternion(I_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class Ap{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let FE=0;const H_=new Q,Rr=new Qr,_a=new Ke,Cc=new Q,Yo=new Q,IE=new Q,HE=new Qr,G_=new Q(1,0,0),V_=new Q(0,1,0),k_=new Q(0,0,1),X_={type:"added"},GE={type:"removed"},Cr={type:"childadded",child:null},Ih={type:"childremoved",child:null};class _n extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const t=new Q,i=new Ni,s=new Qr,l=new Q(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new he}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ap,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Rr.setFromAxisAngle(t,i),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(t,i){return Rr.setFromAxisAngle(t,i),this.quaternion.premultiply(Rr),this}rotateX(t){return this.rotateOnAxis(G_,t)}rotateY(t){return this.rotateOnAxis(V_,t)}rotateZ(t){return this.rotateOnAxis(k_,t)}translateOnAxis(t,i){return H_.copy(t).applyQuaternion(this.quaternion),this.position.add(H_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(G_,t)}translateY(t){return this.translateOnAxis(V_,t)}translateZ(t){return this.translateOnAxis(k_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Cc.copy(t):Cc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(Yo,Cc,this.up):_a.lookAt(Cc,Yo,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),Rr.setFromRotationMatrix(_a),this.quaternion.premultiply(Rr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(X_),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(GE),Ih.child=t,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_a.multiply(t.parent.matrixWorld)),t.applyMatrix4(_a),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(X_),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,IE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,HE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),v=h(t.images),x=h(t.shapes),g=h(t.skeletons),M=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}_n.DEFAULT_UP=new Q(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wc extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VE={type:"move"};class Hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,s),S=this._getHandJoint(p,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=v.position.distanceTo(x.position),M=.02,b=.005;p.inputState.pinching&&g>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(VE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new wc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function Gh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ye{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=vi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=s,Re.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Re.workingColorSpace){if(t=bp(t,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Gh(h,c,t+1/3),this.g=Gh(h,c,t),this.b=Gh(h,c,t-1/3)}return Re.colorSpaceToWorking(this,l),this}setStyle(t,i=vi){function s(c){c!==void 0&&parseFloat(c)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ee("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=vi){const s=cx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Aa(t.r),this.g=Aa(t.g),this.b=Aa(t.b),this}copyLinearToSRGB(t){return this.r=Vr(t.r),this.g=Vr(t.g),this.b=Vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vi){return Re.workingToColorSpace(Dn.copy(this),t),Math.round(Se(Dn.r*255,0,255))*65536+Math.round(Se(Dn.g*255,0,255))*256+Math.round(Se(Dn.b*255,0,255))}getHexString(t=vi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.workingToColorSpace(Dn.copy(this),i);const s=Dn.r,l=Dn.g,c=Dn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=v<=.5?x/(h+d):x/(2-h-d),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Re.workingColorSpace){return Re.workingToColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=vi){Re.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,s=Dn.g,l=Dn.b;return t!==vi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+i,ns.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ns),t.getHSL(Dc);const s=al(ns.h,Dc.h,i),l=al(ns.s,Dc.s,i),c=al(ns.l,Dc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new ye;ye.NAMES=cx;class Rp{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new ye(t),this.near=i,this.far=s}clone(){return new Rp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class kE extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ci=new Q,va=new Q,Vh=new Q,xa=new Q,wr=new Q,Dr=new Q,W_=new Q,kh=new Q,Xh=new Q,Wh=new Q,qh=new en,Yh=new en,jh=new en;class Ui{constructor(t=new Q,i=new Q,s=new Q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ci.subVectors(t,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ci.subVectors(l,i),va.subVectors(s,i),Vh.subVectors(t,i);const h=Ci.dot(Ci),d=Ci.dot(va),m=Ci.dot(Vh),p=va.dot(va),v=va.dot(Vh),x=h*p-d*d;if(x===0)return c.set(0,0,0),null;const g=1/x,M=(p*m-d*v)*g,b=(h*v-d*m)*g;return c.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,xa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,xa.x),m.addScaledVector(h,xa.y),m.addScaledVector(d,xa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return qh.setScalar(0),Yh.setScalar(0),jh.setScalar(0),qh.fromBufferAttribute(t,i),Yh.fromBufferAttribute(t,s),jh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(qh,c.x),h.addScaledVector(Yh,c.y),h.addScaledVector(jh,c.z),h}static isFrontFacing(t,i,s,l){return Ci.subVectors(s,i),va.subVectors(t,i),Ci.cross(va).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ci.cross(va).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ui.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ui.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;wr.subVectors(l,s),Dr.subVectors(c,s),kh.subVectors(t,s);const m=wr.dot(kh),p=Dr.dot(kh);if(m<=0&&p<=0)return i.copy(s);Xh.subVectors(t,l);const v=wr.dot(Xh),x=Dr.dot(Xh);if(v>=0&&x<=v)return i.copy(l);const g=m*x-v*p;if(g<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(wr,h);Wh.subVectors(t,c);const M=wr.dot(Wh),b=Dr.dot(Wh);if(b>=0&&M<=b)return i.copy(c);const C=M*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Dr,d);const y=v*b-M*x;if(y<=0&&x-v>=0&&M-b>=0)return W_.subVectors(c,l),d=(x-v)/(x-v+(M-b)),i.copy(l).addScaledVector(W_,d);const S=1/(y+C+g);return h=C*S,d=g*S,i.copy(s).addScaledVector(wr,h).addScaledVector(Dr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class cl{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(wi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(wi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=wi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,wi):wi.fromBufferAttribute(c,h),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Uc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Uc.copy(s.boundingBox)),Uc.applyMatrix4(t.matrixWorld),this.union(Uc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jo),Lc.subVectors(this.max,jo),Ur.subVectors(t.a,jo),Lr.subVectors(t.b,jo),Nr.subVectors(t.c,jo),is.subVectors(Lr,Ur),as.subVectors(Nr,Lr),ws.subVectors(Ur,Nr);let i=[0,-is.z,is.y,0,-as.z,as.y,0,-ws.z,ws.y,is.z,0,-is.x,as.z,0,-as.x,ws.z,0,-ws.x,-is.y,is.x,0,-as.y,as.x,0,-ws.y,ws.x,0];return!Zh(i,Ur,Lr,Nr,Lc)||(i=[1,0,0,0,1,0,0,0,1],!Zh(i,Ur,Lr,Nr,Lc))?!1:(Nc.crossVectors(is,as),i=[Nc.x,Nc.y,Nc.z],Zh(i,Ur,Lr,Nr,Lc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Sa=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],wi=new Q,Uc=new cl,Ur=new Q,Lr=new Q,Nr=new Q,is=new Q,as=new Q,ws=new Q,jo=new Q,Lc=new Q,Nc=new Q,Ds=new Q;function Zh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Ds.fromArray(r,c);const d=l.x*Math.abs(Ds.x)+l.y*Math.abs(Ds.y)+l.z*Math.abs(Ds.z),m=t.dot(Ds),p=i.dot(Ds),v=s.dot(Ds);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const hn=new Q,Oc=new Ue;let XE=0;class ji{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=D_,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Oc.fromBufferAttribute(this,i),Oc.applyMatrix3(t),this.setXY(i,Oc.x,Oc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Hr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Fn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Hr(i,this.array)),i}setX(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Hr(i,this.array)),i}setY(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Hr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Hr(i,this.array)),i}setW(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array),c=Fn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==D_&&(t.usage=this.usage),t}}class ux extends ji{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class fx extends ji{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class oi extends ji{constructor(t,i,s){super(new Float32Array(t),i,s)}}const WE=new cl,Zo=new Q,Kh=new Q;class gu{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):WE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zo.subVectors(t,this.center);const i=Zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Zo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zo.copy(t.center).add(Kh)),this.expandByPoint(Zo.copy(t.center).sub(Kh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let qE=0;const gi=new Ke,Qh=new _n,Or=new Q,ai=new cl,Ko=new cl,yn=new Q;class Oi extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=Kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cE(t)?fx:ux)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new he().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,i,s){return gi.makeTranslation(t,i,s),this.applyMatrix4(gi),this}scale(t,i,s){return gi.makeScale(t,i,s),this.applyMatrix4(gi),this}lookAt(t){return Qh.lookAt(t),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new oi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Ko.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ai.min,Ko.min),ai.expandByPoint(yn),yn.addVectors(ai.max,Ko.max),ai.expandByPoint(yn)):(ai.expandByPoint(Ko.min),ai.expandByPoint(Ko.max))}ai.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)yn.fromBufferAttribute(d,p),m&&(Or.fromBufferAttribute(t,p),yn.add(Or)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ji(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let T=0;T<s.count;T++)d[T]=new Q,m[T]=new Q;const p=new Q,v=new Q,x=new Q,g=new Ue,M=new Ue,b=new Ue,C=new Q,y=new Q;function S(T,D,pt){p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,D),x.fromBufferAttribute(s,pt),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,D),b.fromBufferAttribute(c,pt),v.sub(p),x.sub(p),M.sub(g),b.sub(g);const H=1/(M.x*b.y-b.x*M.y);isFinite(H)&&(C.copy(v).multiplyScalar(b.y).addScaledVector(x,-M.y).multiplyScalar(H),y.copy(x).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(H),d[T].add(C),d[D].add(C),d[pt].add(C),m[T].add(y),m[D].add(y),m[pt].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let T=0,D=w.length;T<D;++T){const pt=w[T],H=pt.start,tt=pt.count;for(let at=H,lt=H+tt;at<lt;at+=3)S(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const L=new Q,N=new Q,k=new Q,I=new Q;function F(T){k.fromBufferAttribute(l,T),I.copy(k);const D=d[T];L.copy(D),L.sub(k.multiplyScalar(k.dot(D))).normalize(),N.crossVectors(I,D);const H=N.dot(m[T])<0?-1:1;h.setXYZW(T,L.x,L.y,L.z,H)}for(let T=0,D=w.length;T<D;++T){const pt=w[T],H=pt.start,tt=pt.count;for(let at=H,lt=H+tt;at<lt;at+=3)F(t.getX(at+0)),F(t.getX(at+1)),F(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ji(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new Q,c=new Q,h=new Q,d=new Q,m=new Q,p=new Q,v=new Q,x=new Q;if(t)for(let g=0,M=t.count;g<M;g+=3){const b=t.getX(g+0),C=t.getX(g+1),y=t.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),v.subVectors(h,c),x.subVectors(l,c),v.cross(x),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),d.add(v),m.add(v),p.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),v.subVectors(h,c),x.subVectors(l,c),v.cross(x),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,x=d.normalized,g=new p.constructor(m.length*v);let M=0,b=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?M=m[C]*d.data.stride+d.offset:M=m[C]*v;for(let S=0;S<v;S++)g[b++]=p[M++]}return new ji(g,v,x)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Oi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,x=p.length;v<x;v++){const g=p[v],M=t(g,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let x=0,g=p.length;x<g;x++){const M=p[x];v.push(M.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],x=c[p];for(let g=0,M=x.length;g<M;g++)v.push(x[g].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,v=h.length;p<v;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let YE=0;class Jr extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=Kr(),this.name="",this.type="Material",this.blending=Gr,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_d,this.blendDst=vd,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ee(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(s.blending=this.blending),this.side!==us&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==_d&&(s.blendSrc=this.blendSrc),this.blendDst!==vd&&(s.blendDst=this.blendDst),this.blendEquation!==Bs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==w_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(s.stencilFail=this.stencilFail),this.stencilZFail!==br&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ya=new Q,Jh=new Q,Pc=new Q,ss=new Q,$h=new Q,Bc=new Q,td=new Q;class Cp{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ya)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ya.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Jh.copy(t).add(i).multiplyScalar(.5),Pc.copy(i).sub(t).normalize(),ss.copy(this.origin).sub(Jh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Pc),d=ss.dot(this.direction),m=-ss.dot(Pc),p=ss.lengthSq(),v=Math.abs(1-h*h);let x,g,M,b;if(v>0)if(x=h*m-d,g=h*d-m,b=c*v,x>=0)if(g>=-b)if(g<=b){const C=1/v;x*=C,g*=C,M=x*(x+h*g+2*d)+g*(h*x+g+2*m)+p}else g=c,x=Math.max(0,-(h*g+d)),M=-x*x+g*(g+2*m)+p;else g=-c,x=Math.max(0,-(h*g+d)),M=-x*x+g*(g+2*m)+p;else g<=-b?(x=Math.max(0,-(-h*c+d)),g=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+p):g<=b?(x=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+p):(x=Math.max(0,-(h*c+d)),g=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+p);else g=h>0?-c:c,x=Math.max(0,-(h*g+d)),M=-x*x+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Jh).addScaledVector(Pc,g),M}intersectSphere(t,i){ya.subVectors(t.center,this.origin);const s=ya.dot(this.direction),l=ya.dot(ya)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),v>=0?(c=(t.min.y-g.y)*v,h=(t.max.y-g.y)*v):(c=(t.max.y-g.y)*v,h=(t.min.y-g.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(d=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ya)!==null}intersectTriangle(t,i,s,l,c){$h.subVectors(i,t),Bc.subVectors(s,t),td.crossVectors($h,Bc);let h=this.direction.dot(td),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ss.subVectors(this.origin,t);const m=d*this.direction.dot(Bc.crossVectors(ss,Bc));if(m<0)return null;const p=d*this.direction.dot($h.cross(ss));if(p<0||m+p>h)return null;const v=-d*ss.dot(td);return v<0?null:this.at(v/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hx extends Jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Xv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const q_=new Ke,Us=new Cp,zc=new gu,Y_=new Q,Fc=new Q,Ic=new Q,Hc=new Q,ed=new Q,Gc=new Q,j_=new Q,Vc=new Q;class An extends _n{constructor(t=new Oi,i=new hx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Gc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],x=c[m];v!==0&&(ed.fromBufferAttribute(x,t),h?Gc.addScaledVector(ed,v):Gc.addScaledVector(ed.sub(i),v))}i.add(Gc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),zc.copy(s.boundingSphere),zc.applyMatrix4(c),Us.copy(t.ray).recast(t.near),!(zc.containsPoint(Us.origin)===!1&&(Us.intersectSphere(zc,Y_)===null||Us.origin.distanceToSquared(Y_)>(t.far-t.near)**2))&&(q_.copy(c).invert(),Us.copy(t.ray).applyMatrix4(q_),!(s.boundingBox!==null&&Us.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Us)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,g=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=g.length;b<C;b++){const y=g[b],S=h[y.materialIndex],w=Math.max(y.start,M.start),L=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let N=w,k=L;N<k;N+=3){const I=d.getX(N),F=d.getX(N+1),T=d.getX(N+2);l=kc(this,S,t,s,p,v,x,I,F,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=b,S=C;y<S;y+=3){const w=d.getX(y),L=d.getX(y+1),N=d.getX(y+2);l=kc(this,h,t,s,p,v,x,w,L,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=g.length;b<C;b++){const y=g[b],S=h[y.materialIndex],w=Math.max(y.start,M.start),L=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let N=w,k=L;N<k;N+=3){const I=N,F=N+1,T=N+2;l=kc(this,S,t,s,p,v,x,I,F,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=b,S=C;y<S;y+=3){const w=y,L=y+1,N=y+2;l=kc(this,h,t,s,p,v,x,w,L,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function jE(r,t,i,s,l,c,h,d){let m;if(t.side===Yn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===us,d),m===null)return null;Vc.copy(d),Vc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Vc);return p<i.near||p>i.far?null:{distance:p,point:Vc.clone(),object:r}}function kc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Fc),r.getVertexPosition(m,Ic),r.getVertexPosition(p,Hc);const v=jE(r,t,i,s,Fc,Ic,Hc,j_);if(v){const x=new Q;Ui.getBarycoord(j_,Fc,Ic,Hc,x),l&&(v.uv=Ui.getInterpolatedAttribute(l,d,m,p,x,new Ue)),c&&(v.uv1=Ui.getInterpolatedAttribute(c,d,m,p,x,new Ue)),h&&(v.normal=Ui.getInterpolatedAttribute(h,d,m,p,x,new Q),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new Q,materialIndex:0};Ui.getNormal(Fc,Ic,Hc,g.normal),v.face=g,v.barycoord=x}return v}class ZE extends Hn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=Rn,v=Rn,x,g){super(null,h,d,m,p,v,l,c,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nd=new Q,KE=new Q,QE=new he;class Ps{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=nd.subVectors(s,i).cross(KE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(nd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||QE.getNormalMatrix(t),l=this.coplanarPoint(nd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new gu,JE=new Ue(.5,.5),Xc=new Q;class wp{constructor(t=new Ps,i=new Ps,s=new Ps,l=new Ps,c=new Ps,h=new Ps){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Xi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],v=c[4],x=c[5],g=c[6],M=c[7],b=c[8],C=c[9],y=c[10],S=c[11],w=c[12],L=c[13],N=c[14],k=c[15];if(l[0].setComponents(p-h,M-v,S-b,k-w).normalize(),l[1].setComponents(p+h,M+v,S+b,k+w).normalize(),l[2].setComponents(p+d,M+x,S+C,k+L).normalize(),l[3].setComponents(p-d,M-x,S-C,k-L).normalize(),s)l[4].setComponents(m,g,y,N).normalize(),l[5].setComponents(p-m,M-g,S-y,k-N).normalize();else if(l[4].setComponents(p-m,M-g,S-y,k-N).normalize(),i===Xi)l[5].setComponents(p+m,M+g,S+y,k+N).normalize();else if(i===ol)l[5].setComponents(m,g,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(t){Ls.center.set(0,0,0);const i=JE.distanceTo(t.center);return Ls.radius=.7071067811865476+i,Ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Xc.x=l.normal.x>0?t.max.x:t.min.x,Xc.y=l.normal.y>0?t.max.y:t.min.y,Xc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dx extends Jr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fu=new Q,hu=new Q,Z_=new Ke,Qo=new Cp,Wc=new gu,id=new Q,K_=new Q;class $E extends _n{constructor(t=new Oi,i=new dx){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)fu.fromBufferAttribute(i,l-1),hu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=fu.distanceTo(hu);t.setAttribute("lineDistance",new oi(s,1))}else ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Wc.copy(s.boundingSphere),Wc.applyMatrix4(l),Wc.radius+=c,t.ray.intersectsSphere(Wc)===!1)return;Z_.copy(l).invert(),Qo.copy(t.ray).applyMatrix4(Z_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const M=Math.max(0,h.start),b=Math.min(v.count,h.start+h.count);for(let C=M,y=b-1;C<y;C+=p){const S=v.getX(C),w=v.getX(C+1),L=qc(this,t,Qo,m,S,w,C);L&&i.push(L)}if(this.isLineLoop){const C=v.getX(b-1),y=v.getX(M),S=qc(this,t,Qo,m,C,y,b-1);S&&i.push(S)}}else{const M=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let C=M,y=b-1;C<y;C+=p){const S=qc(this,t,Qo,m,C,C+1,C);S&&i.push(S)}if(this.isLineLoop){const C=qc(this,t,Qo,m,b-1,M,b-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function qc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(fu.fromBufferAttribute(d,l),hu.fromBufferAttribute(d,c),i.distanceSqToSegment(fu,hu,id,K_)>s)return;id.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(id);if(!(p<t.near||p>t.far))return{distance:p,point:K_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const Q_=new Q,J_=new Q;class tb extends $E{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Q_.fromBufferAttribute(i,l),J_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Q_.distanceTo(J_);t.setAttribute("lineDistance",new oi(s,1))}else ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class px extends Hn{constructor(t=[],i=Hs,s,l,c,h,d,m,p,v){super(t,i,s,l,c,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ll extends Hn{constructor(t,i,s=Ki,l,c,h,d=Rn,m=Rn,p,v=Ca,x=1){if(v!==Ca&&v!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,c,h,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class eb extends ll{constructor(t,i=Ki,s=Hs,l,c,h=Rn,d=Rn,m,p=Ca){const v={width:t,height:t,depth:1},x=[v,v,v,v,v,v];super(t,t,i,s,l,c,h,d,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class mx extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ba extends Oi{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],v=[],x=[];let g=0,M=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new oi(p,3)),this.setAttribute("normal",new oi(v,3)),this.setAttribute("uv",new oi(x,2));function b(C,y,S,w,L,N,k,I,F,T,D){const pt=N/F,H=k/T,tt=N/2,at=k/2,lt=I/2,$=F+1,O=T+1;let B=0,ot=0;const ht=new Q;for(let Et=0;Et<O;Et++){const P=Et*H-at;for(let Y=0;Y<$;Y++){const _t=Y*pt-tt;ht[C]=_t*w,ht[y]=P*L,ht[S]=lt,p.push(ht.x,ht.y,ht.z),ht[C]=0,ht[y]=0,ht[S]=I>0?1:-1,v.push(ht.x,ht.y,ht.z),x.push(Y/F),x.push(1-Et/T),B+=1}}for(let Et=0;Et<T;Et++)for(let P=0;P<F;P++){const Y=g+P+$*Et,_t=g+P+$*(Et+1),At=g+(P+1)+$*(Et+1),Bt=g+(P+1)+$*Et;m.push(Y,_t,Bt),m.push(_t,At,Bt),ot+=6}d.addGroup(M,ot,D),M+=ot,g+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ul extends Oi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,x=t/d,g=i/m,M=[],b=[],C=[],y=[];for(let S=0;S<v;S++){const w=S*g-h;for(let L=0;L<p;L++){const N=L*x-c;b.push(N,-w,0),C.push(0,0,1),y.push(L/d),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let w=0;w<d;w++){const L=w+p*S,N=w+p*(S+1),k=w+1+p*(S+1),I=w+1+p*S;M.push(L,N,I),M.push(N,k,I)}this.setIndex(M),this.setAttribute("position",new oi(b,3)),this.setAttribute("normal",new oi(C,3)),this.setAttribute("uv",new oi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ul(t.width,t.height,t.widthSegments,t.heightSegments)}}function jr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function In(r){const t={};for(let i=0;i<r.length;i++){const s=jr(r[i]);for(const l in s)t[l]=s[l]}return t}function nb(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function gx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const ib={clone:jr,merge:In};var ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends Jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ab,this.fragmentShader=sb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jr(t.uniforms),this.uniformsGroups=nb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class rb extends Qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yc extends Jr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rx,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ob extends Jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lb extends Jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Dp extends _n{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const ad=new Ke,$_=new Q,tv=new Q;class _x{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wp,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;$_.setFromMatrixPosition(t.matrixWorld),i.position.copy($_),tv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(tv),i.updateMatrixWorld(),ad.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===ol||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ad)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const jc=new Q,Zc=new Qr,Hi=new Q;class vx extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(jc,Zc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jc,Zc,Hi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(jc,Zc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jc,Zc,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rs=new Q,ev=new Ue,nv=new Ue;class si extends vx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Yr*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,i){return this.getViewBounds(t,ev,nv),i.subVectors(nv,ev)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(il*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class cb extends _x{constructor(){super(new si(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=Yr*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class ub extends Dp{constructor(t,i,s=0,l=Math.PI/3,c=0,h=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.distance=s,this.angle=l,this.penumbra=c,this.decay=h,this.map=null,this.shadow=new cb}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class Up extends vx{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class fb extends _x{constructor(){super(new Up(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hb extends Dp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new fb}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class db extends Dp{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Pr=-90,Br=1;class pb extends _n{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(Pr,Br,t,i);l.layers=this.layers,this.add(l);const c=new si(Pr,Br,t,i);c.layers=this.layers,this.add(c);const h=new si(Pr,Br,t,i);h.layers=this.layers,this.add(h);const d=new si(Pr,Br,t,i);d.layers=this.layers,this.add(d);const m=new si(Pr,Br,t,i);m.layers=this.layers,this.add(m);const p=new si(Pr,Br,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Xi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ol)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,v]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,v),t.setRenderTarget(x,g,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class mb extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const iv=new Ke;class gb{constructor(t,i,s=0,l=1/0){this.ray=new Cp(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Ap,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ae("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return iv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(iv),this}intersectObject(t,i=!0,s=[]){return rp(t,this,s,i),s.sort(av),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)rp(t[l],this,s,i);return s.sort(av),s}}function av(r,t){return r.distance-t.distance}function rp(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)rp(c[h],t,i,!0)}}class _b{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ee("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class vb extends tb{constructor(t=10,i=10,s=4473924,l=8947848){s=new ye(s),l=new ye(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let g=0,M=0,b=-d;g<=i;g++,b+=h){m.push(-d,0,b,d,0,b),m.push(b,0,-d,b,0,d);const C=g===c?s:l;C.toArray(p,M),M+=3,C.toArray(p,M),M+=3,C.toArray(p,M),M+=3,C.toArray(p,M),M+=3}const v=new Oi;v.setAttribute("position",new oi(m,3)),v.setAttribute("color",new oi(p,3));const x=new dx({vertexColors:!0,toneMapped:!1});super(v,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class xb extends Gs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ee("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function sv(r,t,i,s){const l=Sb(s);switch(i){case ix:return r*t;case sx:return r*t/l.components*l.byteLength;case xp:return r*t/l.components*l.byteLength;case Wr:return r*t*2/l.components*l.byteLength;case Sp:return r*t*2/l.components*l.byteLength;case ax:return r*t*3/l.components*l.byteLength;case Li:return r*t*4/l.components*l.byteLength;case yp:return r*t*4/l.components*l.byteLength;case iu:case au:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case su:case ru:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wd:case Ud:return Math.max(r,16)*Math.max(t,8)/4;case Cd:case Dd:return Math.max(r,8)*Math.max(t,8)/2;case Ld:case Nd:case Pd:case Bd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Od:case zd:case Fd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Id:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Gd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Vd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case kd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Xd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Wd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case qd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Yd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case jd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Zd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Kd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Qd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Jd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case $d:case tp:case ep:return Math.ceil(r/4)*Math.ceil(t/4)*16;case np:case ip:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ap:case sp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Sb(r){switch(r){case ri:case $v:return{byteLength:1,components:1};case sl:case tx:case Ra:return{byteLength:2,components:1};case _p:case vp:return{byteLength:2,components:4};case Ki:case gp:case ki:return{byteLength:4,components:1};case ex:case nx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mp}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xx(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function yb(r){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,x=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const v=m.array,x=m.updateRanges;if(r.bindBuffer(p,d),x.length===0)r.bufferSubData(p,0,v);else{x.sort((M,b)=>M.start-b.start);let g=0;for(let M=1;M<x.length;M++){const b=x[g],C=x[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++g,x[g]=C)}x.length=g+1;for(let M=0,b=x.length;M<b;M++){const C=x[M];r.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var Mb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ab=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Db=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ub=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ob=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Wb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jb="gl_FragColor = linearToOutputTexel( gl_FragColor );",$b=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,eT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_T=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ST=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,MT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ET=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,UT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,FT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,WT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,QT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$T=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,aA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,SA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,UA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,BA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$A=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:Mb,alphahash_pars_fragment:Eb,alphamap_fragment:bb,alphamap_pars_fragment:Tb,alphatest_fragment:Ab,alphatest_pars_fragment:Rb,aomap_fragment:Cb,aomap_pars_fragment:wb,batching_pars_vertex:Db,batching_vertex:Ub,begin_vertex:Lb,beginnormal_vertex:Nb,bsdfs:Ob,iridescence_fragment:Pb,bumpmap_pars_fragment:Bb,clipping_planes_fragment:zb,clipping_planes_pars_fragment:Fb,clipping_planes_pars_vertex:Ib,clipping_planes_vertex:Hb,color_fragment:Gb,color_pars_fragment:Vb,color_pars_vertex:kb,color_vertex:Xb,common:Wb,cube_uv_reflection_fragment:qb,defaultnormal_vertex:Yb,displacementmap_pars_vertex:jb,displacementmap_vertex:Zb,emissivemap_fragment:Kb,emissivemap_pars_fragment:Qb,colorspace_fragment:Jb,colorspace_pars_fragment:$b,envmap_fragment:tT,envmap_common_pars_fragment:eT,envmap_pars_fragment:nT,envmap_pars_vertex:iT,envmap_physical_pars_fragment:pT,envmap_vertex:aT,fog_vertex:sT,fog_pars_vertex:rT,fog_fragment:oT,fog_pars_fragment:lT,gradientmap_pars_fragment:cT,lightmap_pars_fragment:uT,lights_lambert_fragment:fT,lights_lambert_pars_fragment:hT,lights_pars_begin:dT,lights_toon_fragment:mT,lights_toon_pars_fragment:gT,lights_phong_fragment:_T,lights_phong_pars_fragment:vT,lights_physical_fragment:xT,lights_physical_pars_fragment:ST,lights_fragment_begin:yT,lights_fragment_maps:MT,lights_fragment_end:ET,logdepthbuf_fragment:bT,logdepthbuf_pars_fragment:TT,logdepthbuf_pars_vertex:AT,logdepthbuf_vertex:RT,map_fragment:CT,map_pars_fragment:wT,map_particle_fragment:DT,map_particle_pars_fragment:UT,metalnessmap_fragment:LT,metalnessmap_pars_fragment:NT,morphinstance_vertex:OT,morphcolor_vertex:PT,morphnormal_vertex:BT,morphtarget_pars_vertex:zT,morphtarget_vertex:FT,normal_fragment_begin:IT,normal_fragment_maps:HT,normal_pars_fragment:GT,normal_pars_vertex:VT,normal_vertex:kT,normalmap_pars_fragment:XT,clearcoat_normal_fragment_begin:WT,clearcoat_normal_fragment_maps:qT,clearcoat_pars_fragment:YT,iridescence_pars_fragment:jT,opaque_fragment:ZT,packing:KT,premultiplied_alpha_fragment:QT,project_vertex:JT,dithering_fragment:$T,dithering_pars_fragment:tA,roughnessmap_fragment:eA,roughnessmap_pars_fragment:nA,shadowmap_pars_fragment:iA,shadowmap_pars_vertex:aA,shadowmap_vertex:sA,shadowmask_pars_fragment:rA,skinbase_vertex:oA,skinning_pars_vertex:lA,skinning_vertex:cA,skinnormal_vertex:uA,specularmap_fragment:fA,specularmap_pars_fragment:hA,tonemapping_fragment:dA,tonemapping_pars_fragment:pA,transmission_fragment:mA,transmission_pars_fragment:gA,uv_pars_fragment:_A,uv_pars_vertex:vA,uv_vertex:xA,worldpos_vertex:SA,background_vert:yA,background_frag:MA,backgroundCube_vert:EA,backgroundCube_frag:bA,cube_vert:TA,cube_frag:AA,depth_vert:RA,depth_frag:CA,distance_vert:wA,distance_frag:DA,equirect_vert:UA,equirect_frag:LA,linedashed_vert:NA,linedashed_frag:OA,meshbasic_vert:PA,meshbasic_frag:BA,meshlambert_vert:zA,meshlambert_frag:FA,meshmatcap_vert:IA,meshmatcap_frag:HA,meshnormal_vert:GA,meshnormal_frag:VA,meshphong_vert:kA,meshphong_frag:XA,meshphysical_vert:WA,meshphysical_frag:qA,meshtoon_vert:YA,meshtoon_frag:jA,points_vert:ZA,points_frag:KA,shadow_vert:QA,shadow_frag:JA,sprite_vert:$A,sprite_frag:t1},Ut={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Vi={basic:{uniforms:In([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:In([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:In([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:In([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:In([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new ye(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:In([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:In([Ut.points,Ut.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:In([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:In([Ut.common,Ut.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:In([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:In([Ut.sprite,Ut.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:In([Ut.common,Ut.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:In([Ut.lights,Ut.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Vi.physical={uniforms:In([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Kc={r:0,b:0,g:0},Ns=new Ni,e1=new Ke;function n1(r,t,i,s,l,c){const h=new ye(0);let d=l===!0?0:1,m,p,v=null,x=0,g=null;function M(w){let L=w.isScene===!0?w.background:null;if(L&&L.isTexture){const N=w.backgroundBlurriness>0;L=t.get(L,N)}return L}function b(w){let L=!1;const N=M(w);N===null?y(h,d):N&&N.isColor&&(y(N,1),L=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,c):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(w,L){const N=M(L);N&&(N.isCubeTexture||N.mapping===mu)?(p===void 0&&(p=new An(new ba(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:jr(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(k,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Ns.copy(L.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(e1.makeRotationFromEuler(Ns)),p.material.toneMapped=Re.getTransfer(N.colorSpace)!==Ie,(v!==N||x!==N.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,v=N,x=N.version,g=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new An(new ul(2,2),new Qi({name:"BackgroundMaterial",uniforms:jr(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Re.getTransfer(N.colorSpace)!==Ie,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||x!==N.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,v=N,x=N.version,g=r.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function y(w,L){w.getRGB(Kc,gx(r)),i.buffers.color.setClear(Kc.r,Kc.g,Kc.b,L,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(w,L=1){h.set(w),d=L,y(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,y(h,d)},render:b,addToRenderList:C,dispose:S}}function i1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function d(H,tt,at,lt,$){let O=!1;const B=x(H,lt,at,tt);c!==B&&(c=B,p(c.object)),O=M(H,lt,at,$),O&&b(H,lt,at,$),$!==null&&t.update($,r.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,N(H,tt,at,lt),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function m(){return r.createVertexArray()}function p(H){return r.bindVertexArray(H)}function v(H){return r.deleteVertexArray(H)}function x(H,tt,at,lt){const $=lt.wireframe===!0;let O=s[tt.id];O===void 0&&(O={},s[tt.id]=O);const B=H.isInstancedMesh===!0?H.id:0;let ot=O[B];ot===void 0&&(ot={},O[B]=ot);let ht=ot[at.id];ht===void 0&&(ht={},ot[at.id]=ht);let Et=ht[$];return Et===void 0&&(Et=g(m()),ht[$]=Et),Et}function g(H){const tt=[],at=[],lt=[];for(let $=0;$<i;$++)tt[$]=0,at[$]=0,lt[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:tt,enabledAttributes:at,attributeDivisors:lt,object:H,attributes:{},index:null}}function M(H,tt,at,lt){const $=c.attributes,O=tt.attributes;let B=0;const ot=at.getAttributes();for(const ht in ot)if(ot[ht].location>=0){const P=$[ht];let Y=O[ht];if(Y===void 0&&(ht==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),ht==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor)),P===void 0||P.attribute!==Y||Y&&P.data!==Y.data)return!0;B++}return c.attributesNum!==B||c.index!==lt}function b(H,tt,at,lt){const $={},O=tt.attributes;let B=0;const ot=at.getAttributes();for(const ht in ot)if(ot[ht].location>=0){let P=O[ht];P===void 0&&(ht==="instanceMatrix"&&H.instanceMatrix&&(P=H.instanceMatrix),ht==="instanceColor"&&H.instanceColor&&(P=H.instanceColor));const Y={};Y.attribute=P,P&&P.data&&(Y.data=P.data),$[ht]=Y,B++}c.attributes=$,c.attributesNum=B,c.index=lt}function C(){const H=c.newAttributes;for(let tt=0,at=H.length;tt<at;tt++)H[tt]=0}function y(H){S(H,0)}function S(H,tt){const at=c.newAttributes,lt=c.enabledAttributes,$=c.attributeDivisors;at[H]=1,lt[H]===0&&(r.enableVertexAttribArray(H),lt[H]=1),$[H]!==tt&&(r.vertexAttribDivisor(H,tt),$[H]=tt)}function w(){const H=c.newAttributes,tt=c.enabledAttributes;for(let at=0,lt=tt.length;at<lt;at++)tt[at]!==H[at]&&(r.disableVertexAttribArray(at),tt[at]=0)}function L(H,tt,at,lt,$,O,B){B===!0?r.vertexAttribIPointer(H,tt,at,$,O):r.vertexAttribPointer(H,tt,at,lt,$,O)}function N(H,tt,at,lt){C();const $=lt.attributes,O=at.getAttributes(),B=tt.defaultAttributeValues;for(const ot in O){const ht=O[ot];if(ht.location>=0){let Et=$[ot];if(Et===void 0&&(ot==="instanceMatrix"&&H.instanceMatrix&&(Et=H.instanceMatrix),ot==="instanceColor"&&H.instanceColor&&(Et=H.instanceColor)),Et!==void 0){const P=Et.normalized,Y=Et.itemSize,_t=t.get(Et);if(_t===void 0)continue;const At=_t.buffer,Bt=_t.type,nt=_t.bytesPerElement,vt=Bt===r.INT||Bt===r.UNSIGNED_INT||Et.gpuType===gp;if(Et.isInterleavedBufferAttribute){const bt=Et.data,Vt=bt.stride,Kt=Et.offset;if(bt.isInstancedInterleavedBuffer){for(let $t=0;$t<ht.locationSize;$t++)S(ht.location+$t,bt.meshPerAttribute);H.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let $t=0;$t<ht.locationSize;$t++)y(ht.location+$t);r.bindBuffer(r.ARRAY_BUFFER,At);for(let $t=0;$t<ht.locationSize;$t++)L(ht.location+$t,Y/ht.locationSize,Bt,P,Vt*nt,(Kt+Y/ht.locationSize*$t)*nt,vt)}else{if(Et.isInstancedBufferAttribute){for(let bt=0;bt<ht.locationSize;bt++)S(ht.location+bt,Et.meshPerAttribute);H.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let bt=0;bt<ht.locationSize;bt++)y(ht.location+bt);r.bindBuffer(r.ARRAY_BUFFER,At);for(let bt=0;bt<ht.locationSize;bt++)L(ht.location+bt,Y/ht.locationSize,Bt,P,Y*nt,Y/ht.locationSize*bt*nt,vt)}}else if(B!==void 0){const P=B[ot];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(ht.location,P);break;case 3:r.vertexAttrib3fv(ht.location,P);break;case 4:r.vertexAttrib4fv(ht.location,P);break;default:r.vertexAttrib1fv(ht.location,P)}}}}w()}function k(){D();for(const H in s){const tt=s[H];for(const at in tt){const lt=tt[at];for(const $ in lt){const O=lt[$];for(const B in O)v(O[B].object),delete O[B];delete lt[$]}}delete s[H]}}function I(H){if(s[H.id]===void 0)return;const tt=s[H.id];for(const at in tt){const lt=tt[at];for(const $ in lt){const O=lt[$];for(const B in O)v(O[B].object),delete O[B];delete lt[$]}}delete s[H.id]}function F(H){for(const tt in s){const at=s[tt];for(const lt in at){const $=at[lt];if($[H.id]===void 0)continue;const O=$[H.id];for(const B in O)v(O[B].object),delete O[B];delete $[H.id]}}}function T(H){for(const tt in s){const at=s[tt],lt=H.isInstancedMesh===!0?H.id:0,$=at[lt];if($!==void 0){for(const O in $){const B=$[O];for(const ot in B)v(B[ot].object),delete B[ot];delete $[O]}delete at[lt],Object.keys(at).length===0&&delete s[tt]}}}function D(){pt(),h=!0,c!==l&&(c=l,p(c.object))}function pt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:D,resetDefaultState:pt,dispose:k,releaseStatesOfGeometry:I,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:y,disableUnusedAttributes:w}}function a1(r,t,i){let s;function l(p){s=p}function c(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,x){x!==0&&(r.drawArraysInstanced(s,p,v,x),i.update(v,s,x))}function d(p,v,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,x);let M=0;for(let b=0;b<x;b++)M+=v[b];i.update(M,s,1)}function m(p,v,x,g){if(x===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],v[b],g[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,v,0,g,0,x);let b=0;for(let C=0;C<x;C++)b+=v[C]*g[C];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function s1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==Li&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const T=F===Ra&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==ri&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ki&&!T)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(ee("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:w,maxVaryings:L,maxFragmentUniforms:N,maxSamples:k,samples:I}}function r1(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Ps,d=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||s!==0||l;return l=g,s=x.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=v(x,g,0)},this.setState=function(x,g,M){const b=x.clippingPlanes,C=x.clipIntersection,y=x.clipShadows,S=r.get(x);if(!l||b===null||b.length===0||c&&!y)c?v(null):p();else{const w=c?0:s,L=w*4;let N=S.clippingState||null;m.value=N,N=v(b,g,L,M);for(let k=0;k!==L;++k)N[k]=i[k];S.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(x,g,M,b){const C=x!==null?x.length:0;let y=null;if(C!==0){if(y=m.value,b!==!0||y===null){const S=M+C*4,w=g.matrixWorldInverse;d.getNormalMatrix(w),(y===null||y.length<S)&&(y=new Float32Array(S));for(let L=0,N=M;L!==C;++L,N+=4)h.copy(x[L]).applyMatrix4(w,d),h.normal.toArray(y,N),y[N+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}const ls=4,rv=[.125,.215,.35,.446,.526,.582],zs=20,o1=256,Jo=new Up,ov=new ye;let sd=null,rd=0,od=0,ld=!1;const l1=new Q;class lv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=l1}=c;sd=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(sd,rd,od),this._renderer.xr.enabled=ld,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Hs||t.mapping===Xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sd=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Ra,format:Li,colorSpace:qr,depthBuffer:!1},l=cv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=c1(c)),this._blurMaterial=f1(c,t,i),this._ggxMaterial=u1(c,t,i)}return l}_compileMaterial(t){const i=new An(new Oi,t);this._renderer.compile(i,Jo)}_sceneToCubeUV(t,i,s,l,c){const m=new si(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor(ov),x.toneMapping=qi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new An(new ba,new hx({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let S=!1;const w=t.background;w?w.isColor&&(y.color.copy(w),t.background=null,S=!0):(y.color.copy(ov),S=!0);for(let L=0;L<6;L++){const N=L%3;N===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[L],c.y,c.z)):N===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[L]));const k=this._cubeSize;zr(l,N*k,L>2?k:0,k,k),x.setRenderTarget(l),S&&x.render(C,m),x.render(t,m)}x.toneMapping=M,x.autoClear=g,t.background=w}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Hs||t.mapping===Xr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=fv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;zr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Jo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-v*v),g=0+p*1.25,M=x*g,{_lodMax:b}=this,C=this._sizeLods[s],y=3*C*(s>b-ls?s-b+ls:0),S=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,zr(c,y,S,3*C,2*C),l.setRenderTarget(c),l.render(d,Jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,zr(t,y,S,3*C,2*C),l.setRenderTarget(t),l.render(d,Jo)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ae("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[l];x.material=p;const g=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*zs-1),C=c/b,y=isFinite(c)?1+Math.floor(v*C):zs;y>zs&&ee(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${zs}`);const S=[];let w=0;for(let F=0;F<zs;++F){const T=F/C,D=Math.exp(-T*T/2);S.push(D),F===0?w+=D:F<y&&(w+=2*D)}for(let F=0;F<S.length;F++)S[F]=S[F]/w;g.envMap.value=t.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=h==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:L}=this;g.dTheta.value=b,g.mipInt.value=L-s;const N=this._sizeLods[l],k=3*N*(l>L-ls?l-L+ls:0),I=4*(this._cubeSize-N);zr(i,k,I,3*N,2*N),m.setRenderTarget(i),m.render(x,Jo)}}function c1(r){const t=[],i=[],s=[];let l=r;const c=r-ls+1+rv.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-ls?m=rv[h-r+ls-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),v=-p,x=1+p,g=[v,v,x,v,x,x,v,v,x,x,v,x],M=6,b=6,C=3,y=2,S=1,w=new Float32Array(C*b*M),L=new Float32Array(y*b*M),N=new Float32Array(S*b*M);for(let I=0;I<M;I++){const F=I%3*2/3-1,T=I>2?0:-1,D=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];w.set(D,C*b*I),L.set(g,y*b*I);const pt=[I,I,I,I,I,I];N.set(pt,S*b*I)}const k=new Oi;k.setAttribute("position",new ji(w,C)),k.setAttribute("uv",new ji(L,y)),k.setAttribute("faceIndex",new ji(N,S)),s.push(new An(k,null)),l>ls&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function cv(r,t,i){const s=new Yi(r,t,i);return s.texture.mapping=mu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function zr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function u1(r,t,i){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:o1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_u(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function f1(r,t,i){const s=new Float32Array(zs),l=new Q(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function uv(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function fv(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function _u(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Sx extends Yi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new px(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ba(5,5,5),c=new Qi({name:"CubemapFromEquirect",uniforms:jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:Ta});c.uniforms.tEquirect.value=i;const h=new An(l,c),d=i.minFilter;return i.minFilter===Fs&&(i.minFilter=Ln),new pb(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function h1(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?h(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Lh||M===Nh)if(t.has(g)){const b=t.get(g).texture;return d(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const C=new Sx(b.height);return C.fromEquirectangularTexture(r,g),t.set(g,C),g.addEventListener("dispose",p),d(C.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const M=g.mapping,b=M===Lh||M===Nh,C=M===Hs||M===Xr;if(b||C){let y=i.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new lv(r)),y=b?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const w=g.image;return b&&w&&w.height>0||C&&w&&m(w)?(s===null&&(s=new lv(r)),y=b?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function d(g,M){return M===Lh?g.mapping=Hs:M===Nh&&(g.mapping=Xr),g}function m(g){let M=0;const b=6;for(let C=0;C<b;C++)g[C]!==void 0&&M++;return M===b}function p(g){const M=g.target;M.removeEventListener("dispose",p);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function d1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&uu("WebGLRenderer: "+s+" extension not supported."),l}}}function p1(r,t,i,s){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",h),delete l[g.id];const M=c.get(g);M&&(t.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const M in g)t.update(g[M],r.ARRAY_BUFFER)}function p(x){const g=[],M=x.index,b=x.attributes.position;let C=0;if(b===void 0)return;if(M!==null){const w=M.array;C=M.version;for(let L=0,N=w.length;L<N;L+=3){const k=w[L+0],I=w[L+1],F=w[L+2];g.push(k,I,I,F,F,k)}}else{const w=b.array;C=b.version;for(let L=0,N=w.length/3-1;L<N;L+=3){const k=L+0,I=L+1,F=L+2;g.push(k,I,I,F,F,k)}}const y=new(b.count>=65535?fx:ux)(g,1);y.version=C;const S=c.get(x);S&&t.remove(S),c.set(x,y)}function v(x){const g=c.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:v}}function m1(r,t,i){let s;function l(g){s=g}let c,h;function d(g){c=g.type,h=g.bytesPerElement}function m(g,M){r.drawElements(s,M,c,g*h),i.update(M,s,1)}function p(g,M,b){b!==0&&(r.drawElementsInstanced(s,M,c,g*h,b),i.update(M,s,b))}function v(g,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,g,0,b);let y=0;for(let S=0;S<b;S++)y+=M[S];i.update(y,s,1)}function x(g,M,b,C){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<g.length;S++)p(g[S]/h,M[S],C[S]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,g,0,C,0,b);let S=0;for(let w=0;w<b;w++)S+=M[w]*C[w];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function g1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Ae("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function _1(r,t,i){const s=new WeakMap,l=new en;function c(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let g=s.get(d);if(g===void 0||g.count!==x){let pt=function(){T.dispose(),s.delete(d),d.removeEventListener("dispose",pt)};var M=pt;g!==void 0&&g.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let N=0;b===!0&&(N=1),C===!0&&(N=2),y===!0&&(N=3);let k=d.attributes.position.count*N,I=1;k>t.maxTextureSize&&(I=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const F=new Float32Array(k*I*4*x),T=new lx(F,k,I,x);T.type=ki,T.needsUpdate=!0;const D=N*4;for(let H=0;H<x;H++){const tt=S[H],at=w[H],lt=L[H],$=k*I*4*H;for(let O=0;O<tt.count;O++){const B=O*D;b===!0&&(l.fromBufferAttribute(tt,O),F[$+B+0]=l.x,F[$+B+1]=l.y,F[$+B+2]=l.z,F[$+B+3]=0),C===!0&&(l.fromBufferAttribute(at,O),F[$+B+4]=l.x,F[$+B+5]=l.y,F[$+B+6]=l.z,F[$+B+7]=0),y===!0&&(l.fromBufferAttribute(lt,O),F[$+B+8]=l.x,F[$+B+9]=l.y,F[$+B+10]=l.z,F[$+B+11]=lt.itemSize===4?l.w:1)}}g={count:x,texture:T,size:new Ue(k,I)},s.set(d,g),d.addEventListener("dispose",pt)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function v1(r,t,i,s,l){let c=new WeakMap;function h(p){const v=l.render.frame,x=p.geometry,g=t.get(p,x);if(c.get(g)!==v&&(t.update(g),c.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==v&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;c.get(M)!==v&&(M.update(),c.set(M,v))}return g}function d(){c=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:d}}const x1={[Wv]:"LINEAR_TONE_MAPPING",[qv]:"REINHARD_TONE_MAPPING",[Yv]:"CINEON_TONE_MAPPING",[jv]:"ACES_FILMIC_TONE_MAPPING",[Kv]:"AGX_TONE_MAPPING",[Qv]:"NEUTRAL_TONE_MAPPING",[Zv]:"CUSTOM_TONE_MAPPING"};function S1(r,t,i,s,l){const c=new Yi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new Yi(t,i,{type:Ra,depthBuffer:!1,stencilBuffer:!1}),d=new Oi;d.setAttribute("position",new oi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new oi([0,2,0,0,2,0],2));const m=new rb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new An(d,m),v=new Up(-1,1,1,-1,0,1);let x=null,g=null,M=!1,b,C=null,y=[],S=!1;this.setSize=function(w,L){c.setSize(w,L),h.setSize(w,L);for(let N=0;N<y.length;N++){const k=y[N];k.setSize&&k.setSize(w,L)}},this.setEffects=function(w){y=w,S=y.length>0&&y[0].isRenderPass===!0;const L=c.width,N=c.height;for(let k=0;k<y.length;k++){const I=y[k];I.setSize&&I.setSize(L,N)}},this.begin=function(w,L){if(M||w.toneMapping===qi&&y.length===0)return!1;if(C=L,L!==null){const N=L.width,k=L.height;(c.width!==N||c.height!==k)&&this.setSize(N,k)}return S===!1&&w.setRenderTarget(c),b=w.toneMapping,w.toneMapping=qi,!0},this.hasRenderPass=function(){return S},this.end=function(w,L){w.toneMapping=b,M=!0;let N=c,k=h;for(let I=0;I<y.length;I++){const F=y[I];if(F.enabled!==!1&&(F.render(w,k,N,L),F.needsSwap!==!1)){const T=N;N=k,k=T}}if(x!==w.outputColorSpace||g!==w.toneMapping){x=w.outputColorSpace,g=w.toneMapping,m.defines={},Re.getTransfer(x)===Ie&&(m.defines.SRGB_TRANSFER="");const I=x1[g];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,w.setRenderTarget(C),w.render(p,v),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const yx=new Hn,op=new ll(1,1),Mx=new lx,Ex=new PE,bx=new px,hv=[],dv=[],pv=new Float32Array(16),mv=new Float32Array(9),gv=new Float32Array(4);function $r(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=hv[l];if(c===void 0&&(c=new Float32Array(l),hv[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function vn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function xn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function vu(r,t){let i=dv[t];i===void 0&&(i=new Int32Array(t),dv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function y1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function M1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2fv(this.addr,t),xn(i,t)}}function E1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;r.uniform3fv(this.addr,t),xn(i,t)}}function b1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4fv(this.addr,t),xn(i,t)}}function T1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;gv.set(s),r.uniformMatrix2fv(this.addr,!1,gv),xn(i,s)}}function A1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;mv.set(s),r.uniformMatrix3fv(this.addr,!1,mv),xn(i,s)}}function R1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;pv.set(s),r.uniformMatrix4fv(this.addr,!1,pv),xn(i,s)}}function C1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function w1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2iv(this.addr,t),xn(i,t)}}function D1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3iv(this.addr,t),xn(i,t)}}function U1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4iv(this.addr,t),xn(i,t)}}function L1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function N1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;r.uniform2uiv(this.addr,t),xn(i,t)}}function O1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;r.uniform3uiv(this.addr,t),xn(i,t)}}function P1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;r.uniform4uiv(this.addr,t),xn(i,t)}}function B1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(op.compareFunction=i.isReversedDepthBuffer()?Ep:Mp,c=op):c=yx,i.setTexture2D(t||c,l)}function z1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Ex,l)}function F1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||bx,l)}function I1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Mx,l)}function H1(r){switch(r){case 5126:return y1;case 35664:return M1;case 35665:return E1;case 35666:return b1;case 35674:return T1;case 35675:return A1;case 35676:return R1;case 5124:case 35670:return C1;case 35667:case 35671:return w1;case 35668:case 35672:return D1;case 35669:case 35673:return U1;case 5125:return L1;case 36294:return N1;case 36295:return O1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return B1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return I1}}function G1(r,t){r.uniform1fv(this.addr,t)}function V1(r,t){const i=$r(t,this.size,2);r.uniform2fv(this.addr,i)}function k1(r,t){const i=$r(t,this.size,3);r.uniform3fv(this.addr,i)}function X1(r,t){const i=$r(t,this.size,4);r.uniform4fv(this.addr,i)}function W1(r,t){const i=$r(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function q1(r,t){const i=$r(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function Y1(r,t){const i=$r(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function j1(r,t){r.uniform1iv(this.addr,t)}function Z1(r,t){r.uniform2iv(this.addr,t)}function K1(r,t){r.uniform3iv(this.addr,t)}function Q1(r,t){r.uniform4iv(this.addr,t)}function J1(r,t){r.uniform1uiv(this.addr,t)}function $1(r,t){r.uniform2uiv(this.addr,t)}function tR(r,t){r.uniform3uiv(this.addr,t)}function eR(r,t){r.uniform4uiv(this.addr,t)}function nR(r,t,i){const s=this.cache,l=t.length,c=vu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=op:h=yx;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function iR(r,t,i){const s=this.cache,l=t.length,c=vu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Ex,c[h])}function aR(r,t,i){const s=this.cache,l=t.length,c=vu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||bx,c[h])}function sR(r,t,i){const s=this.cache,l=t.length,c=vu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Mx,c[h])}function rR(r){switch(r){case 5126:return G1;case 35664:return V1;case 35665:return k1;case 35666:return X1;case 35674:return W1;case 35675:return q1;case 35676:return Y1;case 5124:case 35670:return j1;case 35667:case 35671:return Z1;case 35668:case 35672:return K1;case 35669:case 35673:return Q1;case 5125:return J1;case 36294:return $1;case 36295:return tR;case 36296:return eR;case 35678:case 36198:case 36298:case 36306:case 35682:return nR;case 35679:case 36299:case 36307:return iR;case 35680:case 36300:case 36308:case 36293:return aR;case 36289:case 36303:case 36311:case 36292:return sR}}class oR{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=H1(i.type)}}class lR{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=rR(i.type)}}class cR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const cd=/(\w+)(\])?(\[|\.)?/g;function _v(r,t){r.seq.push(t),r.map[t.id]=t}function uR(r,t,i){const s=r.name,l=s.length;for(cd.lastIndex=0;;){const c=cd.exec(s),h=cd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){_v(i,p===void 0?new oR(d,r,t):new lR(d,r,t));break}else{let x=i.map[d];x===void 0&&(x=new cR(d),_v(i,x)),i=x}}}class ou{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);uR(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function vv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const fR=37297;let hR=0;function dR(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const xv=new he;function pR(r){Re._getMatrix(xv,Re.workingColorSpace,r);const t=`mat3( ${xv.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(r)){case lu:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Sv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+dR(r.getShaderSource(t),d)}else return c}function mR(r,t){const i=pR(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const gR={[Wv]:"Linear",[qv]:"Reinhard",[Yv]:"Cineon",[jv]:"ACESFilmic",[Kv]:"AgX",[Qv]:"Neutral",[Zv]:"Custom"};function _R(r,t){const i=gR[t];return i===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Qc=new Q;function vR(){Re.getLuminanceCoefficients(Qc);const r=Qc.x.toFixed(4),t=Qc.y.toFixed(4),i=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function SR(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function yR(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function nl(r){return r!==""}function yv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const MR=/^[ \t]*#include +<([\w\d./]+)>/gm;function lp(r){return r.replace(MR,bR)}const ER=new Map;function bR(r,t){let i=de[t];if(i===void 0){const s=ER.get(t);if(s!==void 0)i=de[s],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return lp(i)}const TR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ev(r){return r.replace(TR,AR)}function AR(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function bv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const RR={[nu]:"SHADOWMAP_TYPE_PCF",[el]:"SHADOWMAP_TYPE_VSM"};function CR(r){return RR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wR={[Hs]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE",[mu]:"ENVMAP_TYPE_CUBE_UV"};function DR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":wR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const UR={[Xr]:"ENVMAP_MODE_REFRACTION"};function LR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":UR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const NR={[Xv]:"ENVMAP_BLENDING_MULTIPLY",[JM]:"ENVMAP_BLENDING_MIX",[$M]:"ENVMAP_BLENDING_ADD"};function OR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":NR[r.combine]||"ENVMAP_BLENDING_NONE"}function PR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function BR(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=CR(i),p=DR(i),v=LR(i),x=OR(i),g=PR(i),M=xR(i),b=SR(c),C=l.createProgram();let y,S,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(nl).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(nl).join(`
`),S.length>0&&(S+=`
`)):(y=[bv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),S=[bv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qi?"#define TONE_MAPPING":"",i.toneMapping!==qi?de.tonemapping_pars_fragment:"",i.toneMapping!==qi?_R("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,mR("linearToOutputTexel",i.outputColorSpace),vR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(nl).join(`
`)),h=lp(h),h=yv(h,i),h=Mv(h,i),d=lp(d),d=yv(d,i),d=Mv(d,i),h=Ev(h),d=Ev(d),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===U_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===U_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=w+y+h,N=w+S+d,k=vv(l,l.VERTEX_SHADER,L),I=vv(l,l.FRAGMENT_SHADER,N);l.attachShader(C,k),l.attachShader(C,I),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(H){if(r.debug.checkShaderErrors){const tt=l.getProgramInfoLog(C)||"",at=l.getShaderInfoLog(k)||"",lt=l.getShaderInfoLog(I)||"",$=tt.trim(),O=at.trim(),B=lt.trim();let ot=!0,ht=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ot=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,k,I);else{const Et=Sv(l,k,"vertex"),P=Sv(l,I,"fragment");Ae("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+$+`
`+Et+`
`+P)}else $!==""?ee("WebGLProgram: Program Info Log:",$):(O===""||B==="")&&(ht=!1);ht&&(H.diagnostics={runnable:ot,programLog:$,vertexShader:{log:O,prefix:y},fragmentShader:{log:B,prefix:S}})}l.deleteShader(k),l.deleteShader(I),T=new ou(l,C),D=yR(l,C)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let pt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return pt===!1&&(pt=l.getProgramParameter(C,fR)),pt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=hR++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=k,this.fragmentShader=I,this}let zR=0;class FR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new IR(t),i.set(t,s)),s}}class IR{constructor(t){this.id=zR++,this.code=t,this.usedTimes=0}}function HR(r,t,i,s,l,c){const h=new Ap,d=new FR,m=new Set,p=[],v=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,D,pt,H,tt){const at=H.fog,lt=tt.geometry,$=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,B=t.get(T.envMap||$,O),ot=B&&B.mapping===mu?B.image.height:null,ht=M[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&ee("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const Et=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,P=Et!==void 0?Et.length:0;let Y=0;lt.morphAttributes.position!==void 0&&(Y=1),lt.morphAttributes.normal!==void 0&&(Y=2),lt.morphAttributes.color!==void 0&&(Y=3);let _t,At,Bt,nt;if(ht){const Te=Vi[ht];_t=Te.vertexShader,At=Te.fragmentShader}else _t=T.vertexShader,At=T.fragmentShader,d.update(T),Bt=d.getVertexShaderID(T),nt=d.getFragmentShaderID(T);const vt=r.getRenderTarget(),bt=r.state.buffers.depth.getReversed(),Vt=tt.isInstancedMesh===!0,Kt=tt.isBatchedMesh===!0,$t=!!T.map,Je=!!T.matcap,_e=!!B,pe=!!T.aoMap,Le=!!T.lightMap,oe=!!T.bumpMap,Qe=!!T.normalMap,G=!!T.displacementMap,qe=!!T.emissiveMap,be=!!T.metalnessMap,Oe=!!T.roughnessMap,Wt=T.anisotropy>0,U=T.clearcoat>0,E=T.dispersion>0,q=T.iridescence>0,dt=T.sheen>0,xt=T.transmission>0,ut=Wt&&!!T.anisotropyMap,kt=U&&!!T.clearcoatMap,Ct=U&&!!T.clearcoatNormalMap,Zt=U&&!!T.clearcoatRoughnessMap,te=q&&!!T.iridescenceMap,Mt=q&&!!T.iridescenceThicknessMap,St=dt&&!!T.sheenColorMap,Nt=dt&&!!T.sheenRoughnessMap,Lt=!!T.specularMap,Ot=!!T.specularColorMap,ce=!!T.specularIntensityMap,W=xt&&!!T.transmissionMap,Rt=xt&&!!T.thicknessMap,Tt=!!T.gradientMap,Pt=!!T.alphaMap,yt=T.alphaTest>0,ct=!!T.alphaHash,Ft=!!T.extensions;let ie=qi;T.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ie=r.toneMapping);const Be={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:_t,fragmentShader:At,defines:T.defines,customVertexShaderID:Bt,customFragmentShaderID:nt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Kt,batchingColor:Kt&&tt._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&tt.instanceColor!==null,instancingMorph:Vt&&tt.morphTexture!==null,outputColorSpace:vt===null?r.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:qr,alphaToCoverage:!!T.alphaToCoverage,map:$t,matcap:Je,envMap:_e,envMapMode:_e&&B.mapping,envMapCubeUVHeight:ot,aoMap:pe,lightMap:Le,bumpMap:oe,normalMap:Qe,displacementMap:G,emissiveMap:qe,normalMapObjectSpace:Qe&&T.normalMapType===nE,normalMapTangentSpace:Qe&&T.normalMapType===rx,metalnessMap:be,roughnessMap:Oe,anisotropy:Wt,anisotropyMap:ut,clearcoat:U,clearcoatMap:kt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Zt,dispersion:E,iridescence:q,iridescenceMap:te,iridescenceThicknessMap:Mt,sheen:dt,sheenColorMap:St,sheenRoughnessMap:Nt,specularMap:Lt,specularColorMap:Ot,specularIntensityMap:ce,transmission:xt,transmissionMap:W,thicknessMap:Rt,gradientMap:Tt,opaque:T.transparent===!1&&T.blending===Gr&&T.alphaToCoverage===!1,alphaMap:Pt,alphaTest:yt,alphaHash:ct,combine:T.combine,mapUv:$t&&b(T.map.channel),aoMapUv:pe&&b(T.aoMap.channel),lightMapUv:Le&&b(T.lightMap.channel),bumpMapUv:oe&&b(T.bumpMap.channel),normalMapUv:Qe&&b(T.normalMap.channel),displacementMapUv:G&&b(T.displacementMap.channel),emissiveMapUv:qe&&b(T.emissiveMap.channel),metalnessMapUv:be&&b(T.metalnessMap.channel),roughnessMapUv:Oe&&b(T.roughnessMap.channel),anisotropyMapUv:ut&&b(T.anisotropyMap.channel),clearcoatMapUv:kt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:St&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&b(T.sheenRoughnessMap.channel),specularMapUv:Lt&&b(T.specularMap.channel),specularColorMapUv:Ot&&b(T.specularColorMap.channel),specularIntensityMapUv:ce&&b(T.specularIntensityMap.channel),transmissionMapUv:W&&b(T.transmissionMap.channel),thicknessMapUv:Rt&&b(T.thicknessMap.channel),alphaMapUv:Pt&&b(T.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Qe||Wt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!lt.attributes.uv&&($t||Pt),fog:!!at,useFog:T.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||lt.attributes.normal===void 0&&Qe===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:bt,skinning:tt.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:Y,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&pt.length>0,shadowMapType:r.shadowMap.type,toneMapping:ie,decodeVideoTexture:$t&&T.map.isVideoTexture===!0&&Re.getTransfer(T.map.colorSpace)===Ie,decodeVideoTextureEmissive:qe&&T.emissiveMap.isVideoTexture===!0&&Re.getTransfer(T.emissiveMap.colorSpace)===Ie,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ma,flipSided:T.side===Yn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ft&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&T.extensions.multiDraw===!0||Kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Be.vertexUv1s=m.has(1),Be.vertexUv2s=m.has(2),Be.vertexUv3s=m.has(3),m.clear(),Be}function y(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const pt in T.defines)D.push(pt),D.push(T.defines[pt]);return T.isRawShaderMaterial===!1&&(S(D,T),w(D,T),D.push(r.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function S(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function w(T,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),T.push(h.mask)}function L(T){const D=M[T.type];let pt;if(D){const H=Vi[D];pt=ib.clone(H.uniforms)}else pt=T.uniforms;return pt}function N(T,D){let pt=v.get(D);return pt!==void 0?++pt.usedTimes:(pt=new BR(r,D,T,l),p.push(pt),v.set(D,pt)),pt}function k(T){if(--T.usedTimes===0){const D=p.indexOf(T);p[D]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function I(T){d.remove(T)}function F(){d.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:L,acquireProgram:N,releaseProgram:k,releaseShaderCache:I,programs:p,dispose:F}}function GR(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function VR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Tv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Av(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function d(g,M,b,C,y,S){let w=r[t];return w===void 0?(w={id:g.id,object:g,geometry:M,material:b,materialVariant:h(g),groupOrder:C,renderOrder:g.renderOrder,z:y,group:S},r[t]=w):(w.id=g.id,w.object=g,w.geometry=M,w.material=b,w.materialVariant=h(g),w.groupOrder=C,w.renderOrder=g.renderOrder,w.z=y,w.group=S),t++,w}function m(g,M,b,C,y,S){const w=d(g,M,b,C,y,S);b.transmission>0?s.push(w):b.transparent===!0?l.push(w):i.push(w)}function p(g,M,b,C,y,S){const w=d(g,M,b,C,y,S);b.transmission>0?s.unshift(w):b.transparent===!0?l.unshift(w):i.unshift(w)}function v(g,M){i.length>1&&i.sort(g||VR),s.length>1&&s.sort(M||Tv),l.length>1&&l.sort(M||Tv)}function x(){for(let g=t,M=r.length;g<M;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:x,sort:v}}function kR(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new Av,r.set(s,[h])):l>=c.length?(h=new Av,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function XR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new ye};break;case"SpotLight":i={position:new Q,direction:new Q,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[t.id]=i,i}}}function WR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let qR=0;function YR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function jR(r){const t=new XR,i=WR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Q);const l=new Q,c=new Ke,h=new Ke;function d(p){let v=0,x=0,g=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,b=0,C=0,y=0,S=0,w=0,L=0,N=0,k=0,I=0,F=0;p.sort(YR);for(let D=0,pt=p.length;D<pt;D++){const H=p[D],tt=H.color,at=H.intensity,lt=H.distance;let $=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Wr?$=H.shadow.map.texture:$=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=tt.r*at,x+=tt.g*at,g+=tt.b*at;else if(H.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(H.sh.coefficients[O],at);F++}else if(H.isDirectionalLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const B=H.shadow,ot=i.get(H);ot.shadowIntensity=B.intensity,ot.shadowBias=B.bias,ot.shadowNormalBias=B.normalBias,ot.shadowRadius=B.radius,ot.shadowMapSize=B.mapSize,s.directionalShadow[M]=ot,s.directionalShadowMap[M]=$,s.directionalShadowMatrix[M]=H.shadow.matrix,w++}s.directional[M]=O,M++}else if(H.isSpotLight){const O=t.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(tt).multiplyScalar(at),O.distance=lt,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,s.spot[C]=O;const B=H.shadow;if(H.map&&(s.spotLightMap[k]=H.map,k++,B.updateMatrices(H),H.castShadow&&I++),s.spotLightMatrix[C]=B.matrix,H.castShadow){const ot=i.get(H);ot.shadowIntensity=B.intensity,ot.shadowBias=B.bias,ot.shadowNormalBias=B.normalBias,ot.shadowRadius=B.radius,ot.shadowMapSize=B.mapSize,s.spotShadow[C]=ot,s.spotShadowMap[C]=$,N++}C++}else if(H.isRectAreaLight){const O=t.get(H);O.color.copy(tt).multiplyScalar(at),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=O,y++}else if(H.isPointLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const B=H.shadow,ot=i.get(H);ot.shadowIntensity=B.intensity,ot.shadowBias=B.bias,ot.shadowNormalBias=B.normalBias,ot.shadowRadius=B.radius,ot.shadowMapSize=B.mapSize,ot.shadowCameraNear=B.camera.near,ot.shadowCameraFar=B.camera.far,s.pointShadow[b]=ot,s.pointShadowMap[b]=$,s.pointShadowMatrix[b]=H.shadow.matrix,L++}s.point[b]=O,b++}else if(H.isHemisphereLight){const O=t.get(H);O.skyColor.copy(H.color).multiplyScalar(at),O.groundColor.copy(H.groundColor).multiplyScalar(at),s.hemi[S]=O,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ut.LTC_FLOAT_1,s.rectAreaLTC2=Ut.LTC_FLOAT_2):(s.rectAreaLTC1=Ut.LTC_HALF_1,s.rectAreaLTC2=Ut.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==C||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==w||T.numPointShadows!==L||T.numSpotShadows!==N||T.numSpotMaps!==k||T.numLightProbes!==F)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=N+k-I,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=F,T.directionalLength=M,T.pointLength=b,T.spotLength=C,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=w,T.numPointShadows=L,T.numSpotShadows=N,T.numSpotMaps=k,T.numLightProbes=F,s.version=qR++)}function m(p,v){let x=0,g=0,M=0,b=0,C=0;const y=v.matrixWorldInverse;for(let S=0,w=p.length;S<w;S++){const L=p[S];if(L.isDirectionalLight){const N=s.directional[x];N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),x++}else if(L.isSpotLight){const N=s.spot[M];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const N=s.rectArea[b];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(y),h.identity(),c.copy(L.matrixWorld),c.premultiply(y),h.extractRotation(c),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),b++}else if(L.isPointLight){const N=s.point[g];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(y),g++}else if(L.isHemisphereLight){const N=s.hemi[C];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:s}}function Rv(r){const t=new jR(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function h(v){s.push(v)}function d(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function ZR(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new Rv(r),t.set(l,[d])):c>=h.length?(d=new Rv(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const KR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,JR=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],$R=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Cv=new Ke,$o=new Q,ud=new Q;function tC(r,t,i){let s=new wp;const l=new Ue,c=new Ue,h=new en,d=new ob,m=new lb,p={},v=i.maxTextureSize,x={[us]:Yn,[Yn]:us,[Ma]:Ma},g=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:KR,fragmentShader:QR}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new Oi;b.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new An(b,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let S=this.type;this.render=function(I,F,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===NM&&(ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=nu);const D=r.getRenderTarget(),pt=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),tt=r.state;tt.setBlending(Ta),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const at=S!==this.type;at&&F.traverse(function(lt){lt.material&&(Array.isArray(lt.material)?lt.material.forEach($=>$.needsUpdate=!0):lt.material.needsUpdate=!0)});for(let lt=0,$=I.length;lt<$;lt++){const O=I[lt],B=O.shadow;if(B===void 0){ee("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const ot=B.getFrameExtents();l.multiply(ot),c.copy(B.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ot.x),l.x=c.x*ot.x,B.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ot.y),l.y=c.y*ot.y,B.mapSize.y=c.y));const ht=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=ht,B.map===null||at===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===el){if(O.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Yi(l.x,l.y,{format:Wr,type:Ra,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new ll(l.x,l.y,ki),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=Ca,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Rn,B.map.depthTexture.magFilter=Rn}else O.isPointLight?(B.map=new Sx(l.x),B.map.depthTexture=new eb(l.x,Ki)):(B.map=new Yi(l.x,l.y),B.map.depthTexture=new ll(l.x,l.y,Ki)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=Ca,this.type===nu?(B.map.depthTexture.compareFunction=ht?Ep:Mp,B.map.depthTexture.minFilter=Ln,B.map.depthTexture.magFilter=Ln):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Rn,B.map.depthTexture.magFilter=Rn);B.camera.updateProjectionMatrix()}const Et=B.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Et;P++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,P),r.clear();else{P===0&&(r.setRenderTarget(B.map),r.clear());const Y=B.getViewport(P);h.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),tt.viewport(h)}if(O.isPointLight){const Y=B.camera,_t=B.matrix,At=O.distance||Y.far;At!==Y.far&&(Y.far=At,Y.updateProjectionMatrix()),$o.setFromMatrixPosition(O.matrixWorld),Y.position.copy($o),ud.copy(Y.position),ud.add(JR[P]),Y.up.copy($R[P]),Y.lookAt(ud),Y.updateMatrixWorld(),_t.makeTranslation(-$o.x,-$o.y,-$o.z),Cv.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Cv,Y.coordinateSystem,Y.reversedDepth)}else B.updateMatrices(O);s=B.getFrustum(),N(F,T,B.camera,O,this.type)}B.isPointLightShadow!==!0&&this.type===el&&w(B,T),B.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(D,pt,H)};function w(I,F){const T=t.update(C);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Yi(l.x,l.y,{format:Wr,type:Ra})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(F,null,T,g,C,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(F,null,T,M,C,null)}function L(I,F,T,D){let pt=null;const H=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)pt=H;else if(pt=T.isPointLight===!0?m:d,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const tt=pt.uuid,at=F.uuid;let lt=p[tt];lt===void 0&&(lt={},p[tt]=lt);let $=lt[at];$===void 0&&($=pt.clone(),lt[at]=$,F.addEventListener("dispose",k)),pt=$}if(pt.visible=F.visible,pt.wireframe=F.wireframe,D===el?pt.side=F.shadowSide!==null?F.shadowSide:F.side:pt.side=F.shadowSide!==null?F.shadowSide:x[F.side],pt.alphaMap=F.alphaMap,pt.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,pt.map=F.map,pt.clipShadows=F.clipShadows,pt.clippingPlanes=F.clippingPlanes,pt.clipIntersection=F.clipIntersection,pt.displacementMap=F.displacementMap,pt.displacementScale=F.displacementScale,pt.displacementBias=F.displacementBias,pt.wireframeLinewidth=F.wireframeLinewidth,pt.linewidth=F.linewidth,T.isPointLight===!0&&pt.isMeshDistanceMaterial===!0){const tt=r.properties.get(pt);tt.light=T}return pt}function N(I,F,T,D,pt){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&pt===el)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);const at=t.update(I),lt=I.material;if(Array.isArray(lt)){const $=at.groups;for(let O=0,B=$.length;O<B;O++){const ot=$[O],ht=lt[ot.materialIndex];if(ht&&ht.visible){const Et=L(I,ht,D,pt);I.onBeforeShadow(r,I,F,T,at,Et,ot),r.renderBufferDirect(T,null,at,Et,I,ot),I.onAfterShadow(r,I,F,T,at,Et,ot)}}}else if(lt.visible){const $=L(I,lt,D,pt);I.onBeforeShadow(r,I,F,T,at,$,null),r.renderBufferDirect(T,null,at,$,I,null),I.onAfterShadow(r,I,F,T,at,$,null)}}const tt=I.children;for(let at=0,lt=tt.length;at<lt;at++)N(tt[at],F,T,D,pt)}function k(I){I.target.removeEventListener("dispose",k);for(const T in p){const D=p[T],pt=I.target.uuid;pt in D&&(D[pt].dispose(),delete D[pt])}}}function eC(r,t){function i(){let W=!1;const Rt=new en;let Tt=null;const Pt=new en(0,0,0,0);return{setMask:function(yt){Tt!==yt&&!W&&(r.colorMask(yt,yt,yt,yt),Tt=yt)},setLocked:function(yt){W=yt},setClear:function(yt,ct,Ft,ie,Be){Be===!0&&(yt*=ie,ct*=ie,Ft*=ie),Rt.set(yt,ct,Ft,ie),Pt.equals(Rt)===!1&&(r.clearColor(yt,ct,Ft,ie),Pt.copy(Rt))},reset:function(){W=!1,Tt=null,Pt.set(-1,0,0,0)}}}function s(){let W=!1,Rt=!1,Tt=null,Pt=null,yt=null;return{setReversed:function(ct){if(Rt!==ct){const Ft=t.get("EXT_clip_control");ct?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Rt=ct;const ie=yt;yt=null,this.setClear(ie)}},getReversed:function(){return Rt},setTest:function(ct){ct?vt(r.DEPTH_TEST):bt(r.DEPTH_TEST)},setMask:function(ct){Tt!==ct&&!W&&(r.depthMask(ct),Tt=ct)},setFunc:function(ct){if(Rt&&(ct=hE[ct]),Pt!==ct){switch(ct){case xd:r.depthFunc(r.NEVER);break;case Sd:r.depthFunc(r.ALWAYS);break;case yd:r.depthFunc(r.LESS);break;case kr:r.depthFunc(r.LEQUAL);break;case Md:r.depthFunc(r.EQUAL);break;case Ed:r.depthFunc(r.GEQUAL);break;case bd:r.depthFunc(r.GREATER);break;case Td:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Pt=ct}},setLocked:function(ct){W=ct},setClear:function(ct){yt!==ct&&(yt=ct,Rt&&(ct=1-ct),r.clearDepth(ct))},reset:function(){W=!1,Tt=null,Pt=null,yt=null,Rt=!1}}}function l(){let W=!1,Rt=null,Tt=null,Pt=null,yt=null,ct=null,Ft=null,ie=null,Be=null;return{setTest:function(Te){W||(Te?vt(r.STENCIL_TEST):bt(r.STENCIL_TEST))},setMask:function(Te){Rt!==Te&&!W&&(r.stencilMask(Te),Rt=Te)},setFunc:function(Te,Nn,Si){(Tt!==Te||Pt!==Nn||yt!==Si)&&(r.stencilFunc(Te,Nn,Si),Tt=Te,Pt=Nn,yt=Si)},setOp:function(Te,Nn,Si){(ct!==Te||Ft!==Nn||ie!==Si)&&(r.stencilOp(Te,Nn,Si),ct=Te,Ft=Nn,ie=Si)},setLocked:function(Te){W=Te},setClear:function(Te){Be!==Te&&(r.clearStencil(Te),Be=Te)},reset:function(){W=!1,Rt=null,Tt=null,Pt=null,yt=null,ct=null,Ft=null,ie=null,Be=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},x={},g=new WeakMap,M=[],b=null,C=!1,y=null,S=null,w=null,L=null,N=null,k=null,I=null,F=new ye(0,0,0),T=0,D=!1,pt=null,H=null,tt=null,at=null,lt=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,B=0;const ot=r.getParameter(r.VERSION);ot.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(ot)[1]),O=B>=1):ot.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),O=B>=2);let ht=null,Et={};const P=r.getParameter(r.SCISSOR_BOX),Y=r.getParameter(r.VIEWPORT),_t=new en().fromArray(P),At=new en().fromArray(Y);function Bt(W,Rt,Tt,Pt){const yt=new Uint8Array(4),ct=r.createTexture();r.bindTexture(W,ct),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ft=0;Ft<Tt;Ft++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Rt,0,r.RGBA,1,1,Pt,0,r.RGBA,r.UNSIGNED_BYTE,yt):r.texImage2D(Rt+Ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,yt);return ct}const nt={};nt[r.TEXTURE_2D]=Bt(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=Bt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=Bt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=Bt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),vt(r.DEPTH_TEST),h.setFunc(kr),oe(!1),Qe(T_),vt(r.CULL_FACE),pe(Ta);function vt(W){v[W]!==!0&&(r.enable(W),v[W]=!0)}function bt(W){v[W]!==!1&&(r.disable(W),v[W]=!1)}function Vt(W,Rt){return x[W]!==Rt?(r.bindFramebuffer(W,Rt),x[W]=Rt,W===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Rt),W===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Kt(W,Rt){let Tt=M,Pt=!1;if(W){Tt=g.get(Rt),Tt===void 0&&(Tt=[],g.set(Rt,Tt));const yt=W.textures;if(Tt.length!==yt.length||Tt[0]!==r.COLOR_ATTACHMENT0){for(let ct=0,Ft=yt.length;ct<Ft;ct++)Tt[ct]=r.COLOR_ATTACHMENT0+ct;Tt.length=yt.length,Pt=!0}}else Tt[0]!==r.BACK&&(Tt[0]=r.BACK,Pt=!0);Pt&&r.drawBuffers(Tt)}function $t(W){return b!==W?(r.useProgram(W),b=W,!0):!1}const Je={[Bs]:r.FUNC_ADD,[PM]:r.FUNC_SUBTRACT,[BM]:r.FUNC_REVERSE_SUBTRACT};Je[zM]=r.MIN,Je[FM]=r.MAX;const _e={[IM]:r.ZERO,[HM]:r.ONE,[GM]:r.SRC_COLOR,[_d]:r.SRC_ALPHA,[YM]:r.SRC_ALPHA_SATURATE,[WM]:r.DST_COLOR,[kM]:r.DST_ALPHA,[VM]:r.ONE_MINUS_SRC_COLOR,[vd]:r.ONE_MINUS_SRC_ALPHA,[qM]:r.ONE_MINUS_DST_COLOR,[XM]:r.ONE_MINUS_DST_ALPHA,[jM]:r.CONSTANT_COLOR,[ZM]:r.ONE_MINUS_CONSTANT_COLOR,[KM]:r.CONSTANT_ALPHA,[QM]:r.ONE_MINUS_CONSTANT_ALPHA};function pe(W,Rt,Tt,Pt,yt,ct,Ft,ie,Be,Te){if(W===Ta){C===!0&&(bt(r.BLEND),C=!1);return}if(C===!1&&(vt(r.BLEND),C=!0),W!==OM){if(W!==y||Te!==D){if((S!==Bs||N!==Bs)&&(r.blendEquation(r.FUNC_ADD),S=Bs,N=Bs),Te)switch(W){case Gr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case A_:r.blendFunc(r.ONE,r.ONE);break;case R_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case C_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ae("WebGLState: Invalid blending: ",W);break}else switch(W){case Gr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case A_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case R_:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case C_:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",W);break}w=null,L=null,k=null,I=null,F.set(0,0,0),T=0,y=W,D=Te}return}yt=yt||Rt,ct=ct||Tt,Ft=Ft||Pt,(Rt!==S||yt!==N)&&(r.blendEquationSeparate(Je[Rt],Je[yt]),S=Rt,N=yt),(Tt!==w||Pt!==L||ct!==k||Ft!==I)&&(r.blendFuncSeparate(_e[Tt],_e[Pt],_e[ct],_e[Ft]),w=Tt,L=Pt,k=ct,I=Ft),(ie.equals(F)===!1||Be!==T)&&(r.blendColor(ie.r,ie.g,ie.b,Be),F.copy(ie),T=Be),y=W,D=!1}function Le(W,Rt){W.side===Ma?bt(r.CULL_FACE):vt(r.CULL_FACE);let Tt=W.side===Yn;Rt&&(Tt=!Tt),oe(Tt),W.blending===Gr&&W.transparent===!1?pe(Ta):pe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const Pt=W.stencilWrite;d.setTest(Pt),Pt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),qe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?vt(r.SAMPLE_ALPHA_TO_COVERAGE):bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function oe(W){pt!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),pt=W)}function Qe(W){W!==UM?(vt(r.CULL_FACE),W!==H&&(W===T_?r.cullFace(r.BACK):W===LM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):bt(r.CULL_FACE),H=W}function G(W){W!==tt&&(O&&r.lineWidth(W),tt=W)}function qe(W,Rt,Tt){W?(vt(r.POLYGON_OFFSET_FILL),(at!==Rt||lt!==Tt)&&(at=Rt,lt=Tt,h.getReversed()&&(Rt=-Rt),r.polygonOffset(Rt,Tt))):bt(r.POLYGON_OFFSET_FILL)}function be(W){W?vt(r.SCISSOR_TEST):bt(r.SCISSOR_TEST)}function Oe(W){W===void 0&&(W=r.TEXTURE0+$-1),ht!==W&&(r.activeTexture(W),ht=W)}function Wt(W,Rt,Tt){Tt===void 0&&(ht===null?Tt=r.TEXTURE0+$-1:Tt=ht);let Pt=Et[Tt];Pt===void 0&&(Pt={type:void 0,texture:void 0},Et[Tt]=Pt),(Pt.type!==W||Pt.texture!==Rt)&&(ht!==Tt&&(r.activeTexture(Tt),ht=Tt),r.bindTexture(W,Rt||nt[W]),Pt.type=W,Pt.texture=Rt)}function U(){const W=Et[ht];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(W){Ae("WebGLState:",W)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(W){Ae("WebGLState:",W)}}function dt(){try{r.texSubImage2D(...arguments)}catch(W){Ae("WebGLState:",W)}}function xt(){try{r.texSubImage3D(...arguments)}catch(W){Ae("WebGLState:",W)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Ae("WebGLState:",W)}}function kt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Ae("WebGLState:",W)}}function Ct(){try{r.texStorage2D(...arguments)}catch(W){Ae("WebGLState:",W)}}function Zt(){try{r.texStorage3D(...arguments)}catch(W){Ae("WebGLState:",W)}}function te(){try{r.texImage2D(...arguments)}catch(W){Ae("WebGLState:",W)}}function Mt(){try{r.texImage3D(...arguments)}catch(W){Ae("WebGLState:",W)}}function St(W){_t.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),_t.copy(W))}function Nt(W){At.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Lt(W,Rt){let Tt=p.get(Rt);Tt===void 0&&(Tt=new WeakMap,p.set(Rt,Tt));let Pt=Tt.get(W);Pt===void 0&&(Pt=r.getUniformBlockIndex(Rt,W.name),Tt.set(W,Pt))}function Ot(W,Rt){const Pt=p.get(Rt).get(W);m.get(Rt)!==Pt&&(r.uniformBlockBinding(Rt,Pt,W.__bindingPointIndex),m.set(Rt,Pt))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},ht=null,Et={},x={},g=new WeakMap,M=[],b=null,C=!1,y=null,S=null,w=null,L=null,N=null,k=null,I=null,F=new ye(0,0,0),T=0,D=!1,pt=null,H=null,tt=null,at=null,lt=null,_t.set(0,0,r.canvas.width,r.canvas.height),At.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:vt,disable:bt,bindFramebuffer:Vt,drawBuffers:Kt,useProgram:$t,setBlending:pe,setMaterial:Le,setFlipSided:oe,setCullFace:Qe,setLineWidth:G,setPolygonOffset:qe,setScissorTest:be,activeTexture:Oe,bindTexture:Wt,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:te,texImage3D:Mt,updateUBOMapping:Lt,uniformBlockBinding:Ot,texStorage2D:Ct,texStorage3D:Zt,texSubImage2D:dt,texSubImage3D:xt,compressedTexSubImage2D:ut,compressedTexSubImage3D:kt,scissor:St,viewport:Nt,reset:ce}}function nC(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ue,v=new WeakMap;let x;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,E){return M?new OffscreenCanvas(U,E):cu("canvas")}function C(U,E,q){let dt=1;const xt=Wt(U);if((xt.width>q||xt.height>q)&&(dt=q/Math.max(xt.width,xt.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ut=Math.floor(dt*xt.width),kt=Math.floor(dt*xt.height);x===void 0&&(x=b(ut,kt));const Ct=E?b(ut,kt):x;return Ct.width=ut,Ct.height=kt,Ct.getContext("2d").drawImage(U,0,0,ut,kt),ee("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ut+"x"+kt+")."),Ct}else return"data"in U&&ee("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),U;return U}function y(U){return U.generateMipmaps}function S(U){r.generateMipmap(U)}function w(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(U,E,q,dt,xt=!1){if(U!==null){if(r[U]!==void 0)return r[U];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ut=E;if(E===r.RED&&(q===r.FLOAT&&(ut=r.R32F),q===r.HALF_FLOAT&&(ut=r.R16F),q===r.UNSIGNED_BYTE&&(ut=r.R8)),E===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(ut=r.R8UI),q===r.UNSIGNED_SHORT&&(ut=r.R16UI),q===r.UNSIGNED_INT&&(ut=r.R32UI),q===r.BYTE&&(ut=r.R8I),q===r.SHORT&&(ut=r.R16I),q===r.INT&&(ut=r.R32I)),E===r.RG&&(q===r.FLOAT&&(ut=r.RG32F),q===r.HALF_FLOAT&&(ut=r.RG16F),q===r.UNSIGNED_BYTE&&(ut=r.RG8)),E===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(ut=r.RG8UI),q===r.UNSIGNED_SHORT&&(ut=r.RG16UI),q===r.UNSIGNED_INT&&(ut=r.RG32UI),q===r.BYTE&&(ut=r.RG8I),q===r.SHORT&&(ut=r.RG16I),q===r.INT&&(ut=r.RG32I)),E===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),q===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),q===r.UNSIGNED_INT&&(ut=r.RGB32UI),q===r.BYTE&&(ut=r.RGB8I),q===r.SHORT&&(ut=r.RGB16I),q===r.INT&&(ut=r.RGB32I)),E===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),q===r.UNSIGNED_INT&&(ut=r.RGBA32UI),q===r.BYTE&&(ut=r.RGBA8I),q===r.SHORT&&(ut=r.RGBA16I),q===r.INT&&(ut=r.RGBA32I)),E===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ut=r.R11F_G11F_B10F)),E===r.RGBA){const kt=xt?lu:Re.getTransfer(dt);q===r.FLOAT&&(ut=r.RGBA32F),q===r.HALF_FLOAT&&(ut=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ut=kt===Ie?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function N(U,E){let q;return U?E===null||E===Ki||E===rl?q=r.DEPTH24_STENCIL8:E===ki?q=r.DEPTH32F_STENCIL8:E===sl&&(q=r.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ki||E===rl?q=r.DEPTH_COMPONENT24:E===ki?q=r.DEPTH_COMPONENT32F:E===sl&&(q=r.DEPTH_COMPONENT16),q}function k(U,E){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Rn&&U.minFilter!==Ln?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function I(U){const E=U.target;E.removeEventListener("dispose",I),T(E),E.isVideoTexture&&v.delete(E)}function F(U){const E=U.target;E.removeEventListener("dispose",F),pt(E)}function T(U){const E=s.get(U);if(E.__webglInit===void 0)return;const q=U.source,dt=g.get(q);if(dt){const xt=dt[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&D(U),Object.keys(dt).length===0&&g.delete(q)}s.remove(U)}function D(U){const E=s.get(U);r.deleteTexture(E.__webglTexture);const q=U.source,dt=g.get(q);delete dt[E.__cacheKey],h.memory.textures--}function pt(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(E.__webglFramebuffer[dt]))for(let xt=0;xt<E.__webglFramebuffer[dt].length;xt++)r.deleteFramebuffer(E.__webglFramebuffer[dt][xt]);else r.deleteFramebuffer(E.__webglFramebuffer[dt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[dt])}else{if(Array.isArray(E.__webglFramebuffer))for(let dt=0;dt<E.__webglFramebuffer.length;dt++)r.deleteFramebuffer(E.__webglFramebuffer[dt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let dt=0;dt<E.__webglColorRenderbuffer.length;dt++)E.__webglColorRenderbuffer[dt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[dt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=U.textures;for(let dt=0,xt=q.length;dt<xt;dt++){const ut=s.get(q[dt]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),h.memory.textures--),s.remove(q[dt])}s.remove(U)}let H=0;function tt(){H=0}function at(){const U=H;return U>=l.maxTextures&&ee("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),H+=1,U}function lt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function $(U,E){const q=s.get(U);if(U.isVideoTexture&&be(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&q.__version!==U.version){const dt=U.image;if(dt===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(q,U,E);return}}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+E)}function O(U,E){const q=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){nt(q,U,E);return}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+E)}function B(U,E){const q=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){nt(q,U,E);return}i.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+E)}function ot(U,E){const q=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&q.__version!==U.version){vt(q,U,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+E)}const ht={[Ad]:r.REPEAT,[Ea]:r.CLAMP_TO_EDGE,[Rd]:r.MIRRORED_REPEAT},Et={[Rn]:r.NEAREST,[tE]:r.NEAREST_MIPMAP_NEAREST,[Ac]:r.NEAREST_MIPMAP_LINEAR,[Ln]:r.LINEAR,[Oh]:r.LINEAR_MIPMAP_NEAREST,[Fs]:r.LINEAR_MIPMAP_LINEAR},P={[iE]:r.NEVER,[lE]:r.ALWAYS,[aE]:r.LESS,[Mp]:r.LEQUAL,[sE]:r.EQUAL,[Ep]:r.GEQUAL,[rE]:r.GREATER,[oE]:r.NOTEQUAL};function Y(U,E){if(E.type===ki&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ln||E.magFilter===Oh||E.magFilter===Ac||E.magFilter===Fs||E.minFilter===Ln||E.minFilter===Oh||E.minFilter===Ac||E.minFilter===Fs)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,ht[E.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,ht[E.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,ht[E.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,Et[E.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,Et[E.minFilter]),E.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Rn||E.minFilter!==Ac&&E.minFilter!==Fs||E.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function _t(U,E){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",I));const dt=E.source;let xt=g.get(dt);xt===void 0&&(xt={},g.set(dt,xt));const ut=lt(E);if(ut!==U.__cacheKey){xt[ut]===void 0&&(xt[ut]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,q=!0),xt[ut].usedTimes++;const kt=xt[U.__cacheKey];kt!==void 0&&(xt[U.__cacheKey].usedTimes--,kt.usedTimes===0&&D(E)),U.__cacheKey=ut,U.__webglTexture=xt[ut].texture}return q}function At(U,E,q){return Math.floor(Math.floor(U/q)/E)}function Bt(U,E,q,dt){const ut=U.updateRanges;if(ut.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,q,dt,E.data);else{ut.sort((Mt,St)=>Mt.start-St.start);let kt=0;for(let Mt=1;Mt<ut.length;Mt++){const St=ut[kt],Nt=ut[Mt],Lt=St.start+St.count,Ot=At(Nt.start,E.width,4),ce=At(St.start,E.width,4);Nt.start<=Lt+1&&Ot===ce&&At(Nt.start+Nt.count-1,E.width,4)===Ot?St.count=Math.max(St.count,Nt.start+Nt.count-St.start):(++kt,ut[kt]=Nt)}ut.length=kt+1;const Ct=r.getParameter(r.UNPACK_ROW_LENGTH),Zt=r.getParameter(r.UNPACK_SKIP_PIXELS),te=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,St=ut.length;Mt<St;Mt++){const Nt=ut[Mt],Lt=Math.floor(Nt.start/4),Ot=Math.ceil(Nt.count/4),ce=Lt%E.width,W=Math.floor(Lt/E.width),Rt=Ot,Tt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ce),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,ce,W,Rt,Tt,q,dt,E.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ct),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Zt),r.pixelStorei(r.UNPACK_SKIP_ROWS,te)}}function nt(U,E,q){let dt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(dt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(dt=r.TEXTURE_3D);const xt=_t(U,E),ut=E.source;i.bindTexture(dt,U.__webglTexture,r.TEXTURE0+q);const kt=s.get(ut);if(ut.version!==kt.__version||xt===!0){i.activeTexture(r.TEXTURE0+q);const Ct=Re.getPrimaries(Re.workingColorSpace),Zt=E.colorSpace===os?null:Re.getPrimaries(E.colorSpace),te=E.colorSpace===os||Ct===Zt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Mt=C(E.image,!1,l.maxTextureSize);Mt=Oe(E,Mt);const St=c.convert(E.format,E.colorSpace),Nt=c.convert(E.type);let Lt=L(E.internalFormat,St,Nt,E.colorSpace,E.isVideoTexture);Y(dt,E);let Ot;const ce=E.mipmaps,W=E.isVideoTexture!==!0,Rt=kt.__version===void 0||xt===!0,Tt=ut.dataReady,Pt=k(E,Mt);if(E.isDepthTexture)Lt=N(E.format===Is,E.type),Rt&&(W?i.texStorage2D(r.TEXTURE_2D,1,Lt,Mt.width,Mt.height):i.texImage2D(r.TEXTURE_2D,0,Lt,Mt.width,Mt.height,0,St,Nt,null));else if(E.isDataTexture)if(ce.length>0){W&&Rt&&i.texStorage2D(r.TEXTURE_2D,Pt,Lt,ce[0].width,ce[0].height);for(let yt=0,ct=ce.length;yt<ct;yt++)Ot=ce[yt],W?Tt&&i.texSubImage2D(r.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,St,Nt,Ot.data):i.texImage2D(r.TEXTURE_2D,yt,Lt,Ot.width,Ot.height,0,St,Nt,Ot.data);E.generateMipmaps=!1}else W?(Rt&&i.texStorage2D(r.TEXTURE_2D,Pt,Lt,Mt.width,Mt.height),Tt&&Bt(E,Mt,St,Nt)):i.texImage2D(r.TEXTURE_2D,0,Lt,Mt.width,Mt.height,0,St,Nt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Rt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Pt,Lt,ce[0].width,ce[0].height,Mt.depth);for(let yt=0,ct=ce.length;yt<ct;yt++)if(Ot=ce[yt],E.format!==Li)if(St!==null)if(W){if(Tt)if(E.layerUpdates.size>0){const Ft=sv(Ot.width,Ot.height,E.format,E.type);for(const ie of E.layerUpdates){const Be=Ot.data.subarray(ie*Ft/Ot.data.BYTES_PER_ELEMENT,(ie+1)*Ft/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,yt,0,0,ie,Ot.width,Ot.height,1,St,Be)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,yt,0,0,0,Ot.width,Ot.height,Mt.depth,St,Ot.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,yt,Lt,Ot.width,Ot.height,Mt.depth,0,Ot.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Tt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,yt,0,0,0,Ot.width,Ot.height,Mt.depth,St,Nt,Ot.data):i.texImage3D(r.TEXTURE_2D_ARRAY,yt,Lt,Ot.width,Ot.height,Mt.depth,0,St,Nt,Ot.data)}else{W&&Rt&&i.texStorage2D(r.TEXTURE_2D,Pt,Lt,ce[0].width,ce[0].height);for(let yt=0,ct=ce.length;yt<ct;yt++)Ot=ce[yt],E.format!==Li?St!==null?W?Tt&&i.compressedTexSubImage2D(r.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,St,Ot.data):i.compressedTexImage2D(r.TEXTURE_2D,yt,Lt,Ot.width,Ot.height,0,Ot.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Tt&&i.texSubImage2D(r.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,St,Nt,Ot.data):i.texImage2D(r.TEXTURE_2D,yt,Lt,Ot.width,Ot.height,0,St,Nt,Ot.data)}else if(E.isDataArrayTexture)if(W){if(Rt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Pt,Lt,Mt.width,Mt.height,Mt.depth),Tt)if(E.layerUpdates.size>0){const yt=sv(Mt.width,Mt.height,E.format,E.type);for(const ct of E.layerUpdates){const Ft=Mt.data.subarray(ct*yt/Mt.data.BYTES_PER_ELEMENT,(ct+1)*yt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ct,Mt.width,Mt.height,1,St,Nt,Ft)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,St,Nt,Mt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,Mt.width,Mt.height,Mt.depth,0,St,Nt,Mt.data);else if(E.isData3DTexture)W?(Rt&&i.texStorage3D(r.TEXTURE_3D,Pt,Lt,Mt.width,Mt.height,Mt.depth),Tt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,St,Nt,Mt.data)):i.texImage3D(r.TEXTURE_3D,0,Lt,Mt.width,Mt.height,Mt.depth,0,St,Nt,Mt.data);else if(E.isFramebufferTexture){if(Rt)if(W)i.texStorage2D(r.TEXTURE_2D,Pt,Lt,Mt.width,Mt.height);else{let yt=Mt.width,ct=Mt.height;for(let Ft=0;Ft<Pt;Ft++)i.texImage2D(r.TEXTURE_2D,Ft,Lt,yt,ct,0,St,Nt,null),yt>>=1,ct>>=1}}else if(ce.length>0){if(W&&Rt){const yt=Wt(ce[0]);i.texStorage2D(r.TEXTURE_2D,Pt,Lt,yt.width,yt.height)}for(let yt=0,ct=ce.length;yt<ct;yt++)Ot=ce[yt],W?Tt&&i.texSubImage2D(r.TEXTURE_2D,yt,0,0,St,Nt,Ot):i.texImage2D(r.TEXTURE_2D,yt,Lt,St,Nt,Ot);E.generateMipmaps=!1}else if(W){if(Rt){const yt=Wt(Mt);i.texStorage2D(r.TEXTURE_2D,Pt,Lt,yt.width,yt.height)}Tt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,St,Nt,Mt)}else i.texImage2D(r.TEXTURE_2D,0,Lt,St,Nt,Mt);y(E)&&S(dt),kt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function vt(U,E,q){if(E.image.length!==6)return;const dt=_t(U,E),xt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+q);const ut=s.get(xt);if(xt.version!==ut.__version||dt===!0){i.activeTexture(r.TEXTURE0+q);const kt=Re.getPrimaries(Re.workingColorSpace),Ct=E.colorSpace===os?null:Re.getPrimaries(E.colorSpace),Zt=E.colorSpace===os||kt===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const te=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,St=[];for(let ct=0;ct<6;ct++)!te&&!Mt?St[ct]=C(E.image[ct],!0,l.maxCubemapSize):St[ct]=Mt?E.image[ct].image:E.image[ct],St[ct]=Oe(E,St[ct]);const Nt=St[0],Lt=c.convert(E.format,E.colorSpace),Ot=c.convert(E.type),ce=L(E.internalFormat,Lt,Ot,E.colorSpace),W=E.isVideoTexture!==!0,Rt=ut.__version===void 0||dt===!0,Tt=xt.dataReady;let Pt=k(E,Nt);Y(r.TEXTURE_CUBE_MAP,E);let yt;if(te){W&&Rt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Pt,ce,Nt.width,Nt.height);for(let ct=0;ct<6;ct++){yt=St[ct].mipmaps;for(let Ft=0;Ft<yt.length;Ft++){const ie=yt[Ft];E.format!==Li?Lt!==null?W?Tt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ft,0,0,ie.width,ie.height,Lt,ie.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ft,ce,ie.width,ie.height,0,ie.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ft,0,0,ie.width,ie.height,Lt,Ot,ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ft,ce,ie.width,ie.height,0,Lt,Ot,ie.data)}}}else{if(yt=E.mipmaps,W&&Rt){yt.length>0&&Pt++;const ct=Wt(St[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Pt,ce,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Mt){W?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,St[ct].width,St[ct].height,Lt,Ot,St[ct].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ce,St[ct].width,St[ct].height,0,Lt,Ot,St[ct].data);for(let Ft=0;Ft<yt.length;Ft++){const Be=yt[Ft].image[ct].image;W?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ft+1,0,0,Be.width,Be.height,Lt,Ot,Be.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ft+1,ce,Be.width,Be.height,0,Lt,Ot,Be.data)}}else{W?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Lt,Ot,St[ct]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ce,Lt,Ot,St[ct]);for(let Ft=0;Ft<yt.length;Ft++){const ie=yt[Ft];W?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ft+1,0,0,Lt,Ot,ie.image[ct]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ft+1,ce,Lt,Ot,ie.image[ct])}}}y(E)&&S(r.TEXTURE_CUBE_MAP),ut.__version=xt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function bt(U,E,q,dt,xt,ut){const kt=c.convert(q.format,q.colorSpace),Ct=c.convert(q.type),Zt=L(q.internalFormat,kt,Ct,q.colorSpace),te=s.get(E),Mt=s.get(q);if(Mt.__renderTarget=E,!te.__hasExternalTextures){const St=Math.max(1,E.width>>ut),Nt=Math.max(1,E.height>>ut);xt===r.TEXTURE_3D||xt===r.TEXTURE_2D_ARRAY?i.texImage3D(xt,ut,Zt,St,Nt,E.depth,0,kt,Ct,null):i.texImage2D(xt,ut,Zt,St,Nt,0,kt,Ct,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),qe(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,xt,Mt.__webglTexture,0,G(E)):(xt===r.TEXTURE_2D||xt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,dt,xt,Mt.__webglTexture,ut),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(U,E,q){if(r.bindRenderbuffer(r.RENDERBUFFER,U),E.depthBuffer){const dt=E.depthTexture,xt=dt&&dt.isDepthTexture?dt.type:null,ut=N(E.stencilBuffer,xt),kt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;qe(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(E),ut,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(E),ut,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ut,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,kt,r.RENDERBUFFER,U)}else{const dt=E.textures;for(let xt=0;xt<dt.length;xt++){const ut=dt[xt],kt=c.convert(ut.format,ut.colorSpace),Ct=c.convert(ut.type),Zt=L(ut.internalFormat,kt,Ct,ut.colorSpace);qe(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(E),Zt,E.width,E.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(E),Zt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Zt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Kt(U,E,q){const dt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(E.depthTexture);if(xt.__renderTarget=E,(!xt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),dt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),xt.__webglTexture===void 0){xt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,xt.__webglTexture),Y(r.TEXTURE_CUBE_MAP,E.depthTexture);const te=c.convert(E.depthTexture.format),Mt=c.convert(E.depthTexture.type);let St;E.depthTexture.format===Ca?St=r.DEPTH_COMPONENT24:E.depthTexture.format===Is&&(St=r.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,St,E.width,E.height,0,te,Mt,null)}}else $(E.depthTexture,0);const ut=xt.__webglTexture,kt=G(E),Ct=dt?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,Zt=E.depthTexture.format===Is?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ca)qe(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Zt,Ct,ut,0,kt):r.framebufferTexture2D(r.FRAMEBUFFER,Zt,Ct,ut,0);else if(E.depthTexture.format===Is)qe(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Zt,Ct,ut,0,kt):r.framebufferTexture2D(r.FRAMEBUFFER,Zt,Ct,ut,0);else throw new Error("Unknown depthTexture format")}function $t(U){const E=s.get(U),q=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),dt){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,dt.removeEventListener("dispose",xt)};dt.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=dt}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let dt=0;dt<6;dt++)Kt(E.__webglFramebuffer[dt],U,dt);else{const dt=U.texture.mipmaps;dt&&dt.length>0?Kt(E.__webglFramebuffer[0],U,0):Kt(E.__webglFramebuffer,U,0)}else if(q){E.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[dt]),E.__webglDepthbuffer[dt]===void 0)E.__webglDepthbuffer[dt]=r.createRenderbuffer(),Vt(E.__webglDepthbuffer[dt],U,!1);else{const xt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[dt];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,ut)}}else{const dt=U.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Vt(E.__webglDepthbuffer,U,!1);else{const xt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,ut)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(U,E,q){const dt=s.get(U);E!==void 0&&bt(dt.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&$t(U)}function _e(U){const E=U.texture,q=s.get(U),dt=s.get(E);U.addEventListener("dispose",F);const xt=U.textures,ut=U.isWebGLCubeRenderTarget===!0,kt=xt.length>1;if(kt||(dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture()),dt.__version=E.version,h.memory.textures++),ut){q.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Ct]=[];for(let Zt=0;Zt<E.mipmaps.length;Zt++)q.__webglFramebuffer[Ct][Zt]=r.createFramebuffer()}else q.__webglFramebuffer[Ct]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)q.__webglFramebuffer[Ct]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(kt)for(let Ct=0,Zt=xt.length;Ct<Zt;Ct++){const te=s.get(xt[Ct]);te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture(),h.memory.textures++)}if(U.samples>0&&qe(U)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const Zt=xt[Ct];q.__webglColorRenderbuffer[Ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[Ct]);const te=c.convert(Zt.format,Zt.colorSpace),Mt=c.convert(Zt.type),St=L(Zt.internalFormat,te,Mt,Zt.colorSpace,U.isXRRenderTarget===!0),Nt=G(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt,St,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,q.__webglColorRenderbuffer[Ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Vt(q.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){i.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),Y(r.TEXTURE_CUBE_MAP,E);for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let Zt=0;Zt<E.mipmaps.length;Zt++)bt(q.__webglFramebuffer[Ct][Zt],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Zt);else bt(q.__webglFramebuffer[Ct],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(E)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(kt){for(let Ct=0,Zt=xt.length;Ct<Zt;Ct++){const te=xt[Ct],Mt=s.get(te);let St=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(St=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(St,Mt.__webglTexture),Y(St,te),bt(q.__webglFramebuffer,U,te,r.COLOR_ATTACHMENT0+Ct,St,0),y(te)&&S(St)}i.unbindTexture()}else{let Ct=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ct,dt.__webglTexture),Y(Ct,E),E.mipmaps&&E.mipmaps.length>0)for(let Zt=0;Zt<E.mipmaps.length;Zt++)bt(q.__webglFramebuffer[Zt],U,E,r.COLOR_ATTACHMENT0,Ct,Zt);else bt(q.__webglFramebuffer,U,E,r.COLOR_ATTACHMENT0,Ct,0);y(E)&&S(Ct),i.unbindTexture()}U.depthBuffer&&$t(U)}function pe(U){const E=U.textures;for(let q=0,dt=E.length;q<dt;q++){const xt=E[q];if(y(xt)){const ut=w(U),kt=s.get(xt).__webglTexture;i.bindTexture(ut,kt),S(ut),i.unbindTexture()}}}const Le=[],oe=[];function Qe(U){if(U.samples>0){if(qe(U)===!1){const E=U.textures,q=U.width,dt=U.height;let xt=r.COLOR_BUFFER_BIT;const ut=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,kt=s.get(U),Ct=E.length>1;if(Ct)for(let te=0;te<E.length;te++)i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const Zt=U.texture.mipmaps;Zt&&Zt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let te=0;te<E.length;te++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xt|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xt|=r.STENCIL_BUFFER_BIT)),Ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,kt.__webglColorRenderbuffer[te]);const Mt=s.get(E[te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Mt,0)}r.blitFramebuffer(0,0,q,dt,0,0,q,dt,xt,r.NEAREST),m===!0&&(Le.length=0,oe.length=0,Le.push(r.COLOR_ATTACHMENT0+te),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Le.push(ut),oe.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,oe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Le))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ct)for(let te=0;te<E.length;te++){i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,kt.__webglColorRenderbuffer[te]);const Mt=s.get(E[te]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,Mt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function G(U){return Math.min(l.maxSamples,U.samples)}function qe(U){const E=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function be(U){const E=h.render.frame;v.get(U)!==E&&(v.set(U,E),U.update())}function Oe(U,E){const q=U.colorSpace,dt=U.format,xt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==qr&&q!==os&&(Re.getTransfer(q)===Ie?(dt!==Li||xt!==ri)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",q)),E}function Wt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=tt,this.setTexture2D=$,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=ot,this.rebindTextures=Je,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function iC(r,t){function i(s,l=os){let c;const h=Re.getTransfer(l);if(s===ri)return r.UNSIGNED_BYTE;if(s===_p)return r.UNSIGNED_SHORT_4_4_4_4;if(s===vp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ex)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===nx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===$v)return r.BYTE;if(s===tx)return r.SHORT;if(s===sl)return r.UNSIGNED_SHORT;if(s===gp)return r.INT;if(s===Ki)return r.UNSIGNED_INT;if(s===ki)return r.FLOAT;if(s===Ra)return r.HALF_FLOAT;if(s===ix)return r.ALPHA;if(s===ax)return r.RGB;if(s===Li)return r.RGBA;if(s===Ca)return r.DEPTH_COMPONENT;if(s===Is)return r.DEPTH_STENCIL;if(s===sx)return r.RED;if(s===xp)return r.RED_INTEGER;if(s===Wr)return r.RG;if(s===Sp)return r.RG_INTEGER;if(s===yp)return r.RGBA_INTEGER;if(s===iu||s===au||s===su||s===ru)if(h===Ie)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===iu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===iu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===su)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ru)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cd||s===wd||s===Dd||s===Ud)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Cd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Dd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ud)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ld||s===Nd||s===Od||s===Pd||s===Bd||s===zd||s===Fd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ld||s===Nd)return h===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Od)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Pd)return c.COMPRESSED_R11_EAC;if(s===Bd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===zd)return c.COMPRESSED_RG11_EAC;if(s===Fd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Id||s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===Wd||s===qd||s===Yd||s===jd||s===Zd||s===Kd||s===Qd||s===Jd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Id)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$d||s===tp||s===ep)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===$d)return h===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===tp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ep)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===np||s===ip||s===ap||s===sp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===np)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ip)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ap)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===rl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const aC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new mx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Qi({vertexShader:aC,fragmentShader:sC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new An(new ul(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oC extends Gs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,v=null,x=null,g=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",y=new rC,S={},w=i.getContextAttributes();let L=null,N=null;const k=[],I=[],F=new Ue;let T=null;const D=new si;D.viewport=new en;const pt=new si;pt.viewport=new en;const H=[D,pt],tt=new mb;let at=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let vt=k[nt];return vt===void 0&&(vt=new Hh,k[nt]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(nt){let vt=k[nt];return vt===void 0&&(vt=new Hh,k[nt]=vt),vt.getGripSpace()},this.getHand=function(nt){let vt=k[nt];return vt===void 0&&(vt=new Hh,k[nt]=vt),vt.getHandSpace()};function $(nt){const vt=I.indexOf(nt.inputSource);if(vt===-1)return;const bt=k[vt];bt!==void 0&&(bt.update(nt.inputSource,nt.frame,p||h),bt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function O(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",B);for(let nt=0;nt<k.length;nt++){const vt=I[nt];vt!==null&&(I[nt]=null,k[nt].disconnect(vt))}at=null,lt=null,y.reset();for(const nt in S)delete S[nt];t.setRenderTarget(L),M=null,g=null,x=null,l=null,N=null,Bt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,s.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,s.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",O),l.addEventListener("inputsourceschange",B),w.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Vt=null,Kt=null;w.depth&&(Kt=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=w.stencil?Is:Ca,Vt=w.stencil?rl:Ki);const $t={colorFormat:i.RGBA8,depthFormat:Kt,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer($t),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),N=new Yi(g.textureWidth,g.textureHeight,{format:Li,type:ri,depthTexture:new ll(g.textureWidth,g.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const bt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Yi(M.framebufferWidth,M.framebufferHeight,{format:Li,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Bt.setContext(l),Bt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function B(nt){for(let vt=0;vt<nt.removed.length;vt++){const bt=nt.removed[vt],Vt=I.indexOf(bt);Vt>=0&&(I[Vt]=null,k[Vt].disconnect(bt))}for(let vt=0;vt<nt.added.length;vt++){const bt=nt.added[vt];let Vt=I.indexOf(bt);if(Vt===-1){for(let $t=0;$t<k.length;$t++)if($t>=I.length){I.push(bt),Vt=$t;break}else if(I[$t]===null){I[$t]=bt,Vt=$t;break}if(Vt===-1)break}const Kt=k[Vt];Kt&&Kt.connect(bt)}}const ot=new Q,ht=new Q;function Et(nt,vt,bt){ot.setFromMatrixPosition(vt.matrixWorld),ht.setFromMatrixPosition(bt.matrixWorld);const Vt=ot.distanceTo(ht),Kt=vt.projectionMatrix.elements,$t=bt.projectionMatrix.elements,Je=Kt[14]/(Kt[10]-1),_e=Kt[14]/(Kt[10]+1),pe=(Kt[9]+1)/Kt[5],Le=(Kt[9]-1)/Kt[5],oe=(Kt[8]-1)/Kt[0],Qe=($t[8]+1)/$t[0],G=Je*oe,qe=Je*Qe,be=Vt/(-oe+Qe),Oe=be*-oe;if(vt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Oe),nt.translateZ(be),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Kt[10]===-1)nt.projectionMatrix.copy(vt.projectionMatrix),nt.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Wt=Je+be,U=_e+be,E=G-Oe,q=qe+(Vt-Oe),dt=pe*_e/U*Wt,xt=Le*_e/U*Wt;nt.projectionMatrix.makePerspective(E,q,dt,xt,Wt,U),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function P(nt,vt){vt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(vt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let vt=nt.near,bt=nt.far;y.texture!==null&&(y.depthNear>0&&(vt=y.depthNear),y.depthFar>0&&(bt=y.depthFar)),tt.near=pt.near=D.near=vt,tt.far=pt.far=D.far=bt,(at!==tt.near||lt!==tt.far)&&(l.updateRenderState({depthNear:tt.near,depthFar:tt.far}),at=tt.near,lt=tt.far),tt.layers.mask=nt.layers.mask|6,D.layers.mask=tt.layers.mask&-5,pt.layers.mask=tt.layers.mask&-3;const Vt=nt.parent,Kt=tt.cameras;P(tt,Vt);for(let $t=0;$t<Kt.length;$t++)P(Kt[$t],Vt);Kt.length===2?Et(tt,D,pt):tt.projectionMatrix.copy(D.projectionMatrix),Y(nt,tt,Vt)};function Y(nt,vt,bt){bt===null?nt.matrix.copy(vt.matrixWorld):(nt.matrix.copy(bt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(vt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(vt.projectionMatrix),nt.projectionMatrixInverse.copy(vt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Yr*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(nt){m=nt,g!==null&&(g.fixedFoveation=nt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=nt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(tt)},this.getCameraTexture=function(nt){return S[nt]};let _t=null;function At(nt,vt){if(v=vt.getViewerPose(p||h),b=vt,v!==null){const bt=v.views;M!==null&&(t.setRenderTargetFramebuffer(N,M.framebuffer),t.setRenderTarget(N));let Vt=!1;bt.length!==tt.cameras.length&&(tt.cameras.length=0,Vt=!0);for(let _e=0;_e<bt.length;_e++){const pe=bt[_e];let Le=null;if(M!==null)Le=M.getViewport(pe);else{const Qe=x.getViewSubImage(g,pe);Le=Qe.viewport,_e===0&&(t.setRenderTargetTextures(N,Qe.colorTexture,Qe.depthStencilTexture),t.setRenderTarget(N))}let oe=H[_e];oe===void 0&&(oe=new si,oe.layers.enable(_e),oe.viewport=new en,H[_e]=oe),oe.matrix.fromArray(pe.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(pe.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Le.x,Le.y,Le.width,Le.height),_e===0&&(tt.matrix.copy(oe.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),Vt===!0&&tt.cameras.push(oe)}const Kt=l.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){x=s.getBinding();const _e=x.getDepthInformation(bt[0]);_e&&_e.isValid&&_e.texture&&y.init(_e,l.renderState)}if(Kt&&Kt.includes("camera-access")&&C){t.state.unbindTexture(),x=s.getBinding();for(let _e=0;_e<bt.length;_e++){const pe=bt[_e].camera;if(pe){let Le=S[pe];Le||(Le=new mx,S[pe]=Le);const oe=x.getCameraImage(pe);Le.sourceTexture=oe}}}}for(let bt=0;bt<k.length;bt++){const Vt=I[bt],Kt=k[bt];Vt!==null&&Kt!==void 0&&Kt.update(Vt,vt,p||h)}_t&&_t(nt,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),b=null}const Bt=new xx;Bt.setAnimationLoop(At),this.setAnimationLoop=function(nt){_t=nt},this.dispose=function(){}}}const Os=new Ni,lC=new Ke;function cC(r,t){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,gx(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,w,L,N){S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),x(y,S)):S.isMeshPhongMaterial?(c(y,S),v(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),g(y,S),S.isMeshPhysicalMaterial&&M(y,S,N)):S.isMeshMatcapMaterial?(c(y,S),b(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),C(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(h(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?m(y,S,w,L):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Yn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Yn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const w=t.get(S),L=w.envMap,N=w.envMapRotation;L&&(y.envMap.value=L,Os.copy(N),Os.x*=-1,Os.y*=-1,Os.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),y.envMapRotation.value.setFromMatrix4(lC.makeRotationFromEuler(Os)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,w,L){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*w,y.scale.value=L*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,w){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Yn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const w=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function uC(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,L){const N=L.program;s.uniformBlockBinding(w,N)}function p(w,L){let N=l[w.id];N===void 0&&(b(w),N=v(w),l[w.id]=N,w.addEventListener("dispose",y));const k=L.program;s.updateUBOMapping(w,k);const I=t.render.frame;c[w.id]!==I&&(g(w),c[w.id]=I)}function v(w){const L=x();w.__bindingPointIndex=L;const N=r.createBuffer(),k=w.__size,I=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,k,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,N),N}function x(){for(let w=0;w<d;w++)if(h.indexOf(w)===-1)return h.push(w),w;return Ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const L=l[w.id],N=w.uniforms,k=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let I=0,F=N.length;I<F;I++){const T=Array.isArray(N[I])?N[I]:[N[I]];for(let D=0,pt=T.length;D<pt;D++){const H=T[D];if(M(H,I,D,k)===!0){const tt=H.__offset,at=Array.isArray(H.value)?H.value:[H.value];let lt=0;for(let $=0;$<at.length;$++){const O=at[$],B=C(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,tt+lt,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,lt),lt+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,tt,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(w,L,N,k){const I=w.value,F=L+"_"+N;if(k[F]===void 0)return typeof I=="number"||typeof I=="boolean"?k[F]=I:k[F]=I.clone(),!0;{const T=k[F];if(typeof I=="number"||typeof I=="boolean"){if(T!==I)return k[F]=I,!0}else if(T.equals(I)===!1)return T.copy(I),!0}return!1}function b(w){const L=w.uniforms;let N=0;const k=16;for(let F=0,T=L.length;F<T;F++){const D=Array.isArray(L[F])?L[F]:[L[F]];for(let pt=0,H=D.length;pt<H;pt++){const tt=D[pt],at=Array.isArray(tt.value)?tt.value:[tt.value];for(let lt=0,$=at.length;lt<$;lt++){const O=at[lt],B=C(O),ot=N%k,ht=ot%B.boundary,Et=ot+ht;N+=ht,Et!==0&&k-Et<B.storage&&(N+=k-Et),tt.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=N,N+=B.storage}}}const I=N%k;return I>0&&(N+=k-I),w.__size=N,w.__cache={},this}function C(w){const L={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(L.boundary=4,L.storage=4):w.isVector2?(L.boundary=8,L.storage=8):w.isVector3||w.isColor?(L.boundary=16,L.storage=12):w.isVector4?(L.boundary=16,L.storage=16):w.isMatrix3?(L.boundary=48,L.storage=48):w.isMatrix4?(L.boundary=64,L.storage=64):w.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ee("WebGLRenderer: Unsupported uniform value type.",w),L}function y(w){const L=w.target;L.removeEventListener("dispose",y);const N=h.indexOf(L.__bindingPointIndex);h.splice(N,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function S(){for(const w in l)r.deleteBuffer(l[w]);h=[],l={},c={}}return{bind:m,update:p,dispose:S}}const fC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function hC(){return Gi===null&&(Gi=new ZE(fC,16,16,Wr,Ra),Gi.name="DFG_LUT",Gi.minFilter=Ln,Gi.magFilter=Ln,Gi.wrapS=Ea,Gi.wrapT=Ea,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class dC{constructor(t={}){const{canvas:i=uE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:M=ri}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const C=M,y=new Set([yp,Sp,xp]),S=new Set([ri,Ki,sl,rl,_p,vp]),w=new Uint32Array(4),L=new Int32Array(4);let N=null,k=null;const I=[],F=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let pt=!1;this._outputColorSpace=vi;let H=0,tt=0,at=null,lt=-1,$=null;const O=new en,B=new en;let ot=null;const ht=new ye(0);let Et=0,P=i.width,Y=i.height,_t=1,At=null,Bt=null;const nt=new en(0,0,P,Y),vt=new en(0,0,P,Y);let bt=!1;const Vt=new wp;let Kt=!1,$t=!1;const Je=new Ke,_e=new Q,pe=new en,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Qe(){return at===null?_t:1}let G=s;function qe(R,X){return i.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${mp}`),i.addEventListener("webglcontextlost",Ft,!1),i.addEventListener("webglcontextrestored",ie,!1),i.addEventListener("webglcontextcreationerror",Be,!1),G===null){const X="webgl2";if(G=qe(X,R),G===null)throw qe(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ae("WebGLRenderer: "+R.message),R}let be,Oe,Wt,U,E,q,dt,xt,ut,kt,Ct,Zt,te,Mt,St,Nt,Lt,Ot,ce,W,Rt,Tt,Pt;function yt(){be=new d1(G),be.init(),Rt=new iC(G,be),Oe=new s1(G,be,t,Rt),Wt=new eC(G,be),Oe.reversedDepthBuffer&&g&&Wt.buffers.depth.setReversed(!0),U=new g1(G),E=new GR,q=new nC(G,be,Wt,E,Oe,Rt,U),dt=new h1(D),xt=new yb(G),Tt=new i1(G,xt),ut=new p1(G,xt,U,Tt),kt=new v1(G,ut,xt,Tt,U),Ot=new _1(G,Oe,q),St=new r1(E),Ct=new HR(D,dt,be,Oe,Tt,St),Zt=new cC(D,E),te=new kR,Mt=new ZR(be),Lt=new n1(D,dt,Wt,kt,b,m),Nt=new tC(D,kt,Oe),Pt=new uC(G,U,Oe,Wt),ce=new a1(G,be,U),W=new m1(G,be,U),U.programs=Ct.programs,D.capabilities=Oe,D.extensions=be,D.properties=E,D.renderLists=te,D.shadowMap=Nt,D.state=Wt,D.info=U}yt(),C!==ri&&(T=new S1(C,i.width,i.height,l,c));const ct=new oC(D,G);this.xr=ct,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=be.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=be.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(R){R!==void 0&&(_t=R,this.setSize(P,Y,!1))},this.getSize=function(R){return R.set(P,Y)},this.setSize=function(R,X,st=!0){if(ct.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,Y=X,i.width=Math.floor(R*_t),i.height=Math.floor(X*_t),st===!0&&(i.style.width=R+"px",i.style.height=X+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(P*_t,Y*_t).floor()},this.setDrawingBufferSize=function(R,X,st){P=R,Y=X,_t=st,i.width=Math.floor(R*st),i.height=Math.floor(X*st),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(C===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,X,st,et){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,X,st,et),Wt.viewport(O.copy(nt).multiplyScalar(_t).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,X,st,et){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,X,st,et),Wt.scissor(B.copy(vt).multiplyScalar(_t).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(R){Wt.setScissorTest(bt=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){Bt=R},this.getClearColor=function(R){return R.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,st=!0){let et=0;if(R){let Z=!1;if(at!==null){const wt=at.texture.format;Z=y.has(wt)}if(Z){const wt=at.texture.type,zt=S.has(wt),Dt=Lt.getClearColor(),Xt=Lt.getClearAlpha(),Yt=Dt.r,ne=Dt.g,se=Dt.b;zt?(w[0]=Yt,w[1]=ne,w[2]=se,w[3]=Xt,G.clearBufferuiv(G.COLOR,0,w)):(L[0]=Yt,L[1]=ne,L[2]=se,L[3]=Xt,G.clearBufferiv(G.COLOR,0,L))}else et|=G.COLOR_BUFFER_BIT}X&&(et|=G.DEPTH_BUFFER_BIT),st&&(et|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&G.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ft,!1),i.removeEventListener("webglcontextrestored",ie,!1),i.removeEventListener("webglcontextcreationerror",Be,!1),Lt.dispose(),te.dispose(),Mt.dispose(),E.dispose(),dt.dispose(),kt.dispose(),Tt.dispose(),Pt.dispose(),Ct.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",ks),ct.removeEventListener("sessionend",Xs),Pi.stop()};function Ft(R){R.preventDefault(),N_("WebGLRenderer: Context Lost."),pt=!0}function ie(){N_("WebGLRenderer: Context Restored."),pt=!1;const R=U.autoReset,X=Nt.enabled,st=Nt.autoUpdate,et=Nt.needsUpdate,Z=Nt.type;yt(),U.autoReset=R,Nt.enabled=X,Nt.autoUpdate=st,Nt.needsUpdate=et,Nt.type=Z}function Be(R){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Te(R){const X=R.target;X.removeEventListener("dispose",Te),Nn(X)}function Nn(R){Si(R),E.remove(R)}function Si(R){const X=E.get(R).programs;X!==void 0&&(X.forEach(function(st){Ct.releaseProgram(st)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,st,et,Z,wt){X===null&&(X=Le);const zt=Z.isMesh&&Z.matrixWorld.determinant()<0,Dt=pl(R,X,st,et,Z);Wt.setMaterial(et,zt);let Xt=st.index,Yt=1;if(et.wireframe===!0){if(Xt=ut.getWireframeAttribute(st),Xt===void 0)return;Yt=2}const ne=st.drawRange,se=st.attributes.position;let It=ne.start*Yt,ue=(ne.start+ne.count)*Yt;wt!==null&&(It=Math.max(It,wt.start*Yt),ue=Math.min(ue,(wt.start+wt.count)*Yt)),Xt!==null?(It=Math.max(It,0),ue=Math.min(ue,Xt.count)):se!=null&&(It=Math.max(It,0),ue=Math.min(ue,se.count));const Ye=ue-It;if(Ye<0||Ye===1/0)return;Tt.setup(Z,et,Dt,st,Xt);let je,Ce=ce;if(Xt!==null&&(je=xt.get(Xt),Ce=W,Ce.setIndex(je)),Z.isMesh)et.wireframe===!0?(Wt.setLineWidth(et.wireframeLinewidth*Qe()),Ce.setMode(G.LINES)):Ce.setMode(G.TRIANGLES);else if(Z.isLine){let mn=et.linewidth;mn===void 0&&(mn=1),Wt.setLineWidth(mn*Qe()),Z.isLineSegments?Ce.setMode(G.LINES):Z.isLineLoop?Ce.setMode(G.LINE_LOOP):Ce.setMode(G.LINE_STRIP)}else Z.isPoints?Ce.setMode(G.POINTS):Z.isSprite&&Ce.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)uu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))Ce.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const mn=Z._multiDrawStarts,Gt=Z._multiDrawCounts,On=Z._multiDrawCount,ae=Xt?xt.get(Xt).bytesPerElement:1,Pn=E.get(et).currentProgram.getUniforms();for(let jn=0;jn<On;jn++)Pn.setValue(G,"_gl_DrawID",jn),Ce.render(mn[jn]/ae,Gt[jn])}else if(Z.isInstancedMesh)Ce.renderInstances(It,Ye,Z.count);else if(st.isInstancedBufferGeometry){const mn=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Gt=Math.min(st.instanceCount,mn);Ce.renderInstances(It,Ye,Gt)}else Ce.render(It,Ye)};function to(R,X,st){R.transparent===!0&&R.side===Ma&&R.forceSinglePass===!1?(R.side=Yn,R.needsUpdate=!0,wa(R,X,st),R.side=us,R.needsUpdate=!0,wa(R,X,st),R.side=Ma):wa(R,X,st)}this.compile=function(R,X,st=null){st===null&&(st=R),k=Mt.get(st),k.init(X),F.push(k),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(k.pushLight(Z),Z.castShadow&&k.pushShadow(Z))}),R!==st&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(k.pushLight(Z),Z.castShadow&&k.pushShadow(Z))}),k.setupLights();const et=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const wt=Z.material;if(wt)if(Array.isArray(wt))for(let zt=0;zt<wt.length;zt++){const Dt=wt[zt];to(Dt,st,Z),et.add(Dt)}else to(wt,st,Z),et.add(wt)}),k=F.pop(),et},this.compileAsync=function(R,X,st=null){const et=this.compile(R,X,st);return new Promise(Z=>{function wt(){if(et.forEach(function(zt){E.get(zt).currentProgram.isReady()&&et.delete(zt)}),et.size===0){Z(R);return}setTimeout(wt,10)}be.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Vs=null;function fl(R){Vs&&Vs(R)}function ks(){Pi.stop()}function Xs(){Pi.start()}const Pi=new xx;Pi.setAnimationLoop(fl),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(R){Vs=R,ct.setAnimationLoop(R),R===null?Pi.stop():Pi.start()},ct.addEventListener("sessionstart",ks),ct.addEventListener("sessionend",Xs),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(pt===!0)return;const st=ct.enabled===!0&&ct.isPresenting===!0,et=T!==null&&(at===null||st)&&T.begin(D,at);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(X),X=ct.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,X,at),k=Mt.get(R,F.length),k.init(X),F.push(k),Je.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Vt.setFromProjectionMatrix(Je,Xi,X.reversedDepth),$t=this.localClippingEnabled,Kt=St.init(this.clippingPlanes,$t),N=te.get(R,I.length),N.init(),I.push(N),ct.enabled===!0&&ct.isPresenting===!0){const zt=D.xr.getDepthSensingMesh();zt!==null&&Ws(zt,X,-1/0,D.sortObjects)}Ws(R,X,0,D.sortObjects),N.finish(),D.sortObjects===!0&&N.sort(At,Bt),oe=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,oe&&Lt.addToRenderList(N,R),this.info.render.frame++,Kt===!0&&St.beginShadows();const Z=k.state.shadowsArray;if(Nt.render(Z,R,X),Kt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&T.hasRenderPass())===!1){const zt=N.opaque,Dt=N.transmissive;if(k.setupLights(),X.isArrayCamera){const Xt=X.cameras;if(Dt.length>0)for(let Yt=0,ne=Xt.length;Yt<ne;Yt++){const se=Xt[Yt];sn(zt,Dt,R,se)}oe&&Lt.render(R);for(let Yt=0,ne=Xt.length;Yt<ne;Yt++){const se=Xt[Yt];yi(N,R,se,se.viewport)}}else Dt.length>0&&sn(zt,Dt,R,X),oe&&Lt.render(R),yi(N,R,X)}at!==null&&tt===0&&(q.updateMultisampleRenderTarget(at),q.updateRenderTargetMipmap(at)),et&&T.end(D),R.isScene===!0&&R.onAfterRender(D,R,X),Tt.resetDefaultState(),lt=-1,$=null,F.pop(),F.length>0?(k=F[F.length-1],Kt===!0&&St.setGlobalState(D.clippingPlanes,k.state.camera)):k=null,I.pop(),I.length>0?N=I[I.length-1]:N=null};function Ws(R,X,st,et){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)k.pushLight(R),R.castShadow&&k.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Vt.intersectsSprite(R)){et&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Je);const zt=kt.update(R),Dt=R.material;Dt.visible&&N.push(R,zt,Dt,st,pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Vt.intersectsObject(R))){const zt=kt.update(R),Dt=R.material;if(et&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pe.copy(R.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),pe.copy(zt.boundingSphere.center)),pe.applyMatrix4(R.matrixWorld).applyMatrix4(Je)),Array.isArray(Dt)){const Xt=zt.groups;for(let Yt=0,ne=Xt.length;Yt<ne;Yt++){const se=Xt[Yt],It=Dt[se.materialIndex];It&&It.visible&&N.push(R,zt,It,st,pe.z,se)}}else Dt.visible&&N.push(R,zt,Dt,st,pe.z,null)}}const wt=R.children;for(let zt=0,Dt=wt.length;zt<Dt;zt++)Ws(wt[zt],X,st,et)}function yi(R,X,st,et){const{opaque:Z,transmissive:wt,transparent:zt}=R;k.setupLightsView(st),Kt===!0&&St.setGlobalState(D.clippingPlanes,st),et&&Wt.viewport(O.copy(et)),Z.length>0&&pn(Z,X,st),wt.length>0&&pn(wt,X,st),zt.length>0&&pn(zt,X,st),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function sn(R,X,st,et){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[et.id]===void 0){const It=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");k.state.transmissionRenderTarget[et.id]=new Yi(1,1,{generateMipmaps:!0,type:It?Ra:ri,minFilter:Fs,samples:Math.max(4,Oe.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace})}const wt=k.state.transmissionRenderTarget[et.id],zt=et.viewport||O;wt.setSize(zt.z*D.transmissionResolutionScale,zt.w*D.transmissionResolutionScale);const Dt=D.getRenderTarget(),Xt=D.getActiveCubeFace(),Yt=D.getActiveMipmapLevel();D.setRenderTarget(wt),D.getClearColor(ht),Et=D.getClearAlpha(),Et<1&&D.setClearColor(16777215,.5),D.clear(),oe&&Lt.render(st);const ne=D.toneMapping;D.toneMapping=qi;const se=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),k.setupLightsView(et),Kt===!0&&St.setGlobalState(D.clippingPlanes,et),pn(R,st,et),q.updateMultisampleRenderTarget(wt),q.updateRenderTargetMipmap(wt),be.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let ue=0,Ye=X.length;ue<Ye;ue++){const je=X[ue],{object:Ce,geometry:mn,material:Gt,group:On}=je;if(Gt.side===Ma&&Ce.layers.test(et.layers)){const ae=Gt.side;Gt.side=Yn,Gt.needsUpdate=!0,Ji(Ce,st,et,mn,Gt,On),Gt.side=ae,Gt.needsUpdate=!0,It=!0}}It===!0&&(q.updateMultisampleRenderTarget(wt),q.updateRenderTargetMipmap(wt))}D.setRenderTarget(Dt,Xt,Yt),D.setClearColor(ht,Et),se!==void 0&&(et.viewport=se),D.toneMapping=ne}function pn(R,X,st){const et=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,wt=R.length;Z<wt;Z++){const zt=R[Z],{object:Dt,geometry:Xt,group:Yt}=zt;let ne=zt.material;ne.allowOverride===!0&&et!==null&&(ne=et),Dt.layers.test(st.layers)&&Ji(Dt,X,st,Xt,ne,Yt)}}function Ji(R,X,st,et,Z,wt){R.onBeforeRender(D,X,st,et,Z,wt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(D,X,st,et,R,wt),Z.transparent===!0&&Z.side===Ma&&Z.forceSinglePass===!1?(Z.side=Yn,Z.needsUpdate=!0,D.renderBufferDirect(st,X,et,Z,R,wt),Z.side=us,Z.needsUpdate=!0,D.renderBufferDirect(st,X,et,Z,R,wt),Z.side=Ma):D.renderBufferDirect(st,X,et,Z,R,wt),R.onAfterRender(D,X,st,et,Z,wt)}function wa(R,X,st){X.isScene!==!0&&(X=Le);const et=E.get(R),Z=k.state.lights,wt=k.state.shadowsArray,zt=Z.state.version,Dt=Ct.getParameters(R,Z.state,wt,X,st),Xt=Ct.getProgramCacheKey(Dt);let Yt=et.programs;et.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,et.fog=X.fog;const ne=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;et.envMap=dt.get(R.envMap||et.environment,ne),et.envMapRotation=et.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,Yt===void 0&&(R.addEventListener("dispose",Te),Yt=new Map,et.programs=Yt);let se=Yt.get(Xt);if(se!==void 0){if(et.currentProgram===se&&et.lightsStateVersion===zt)return dl(R,Dt),se}else Dt.uniforms=Ct.getUniforms(R),R.onBeforeCompile(Dt,D),se=Ct.acquireProgram(Dt,Xt),Yt.set(Xt,se),et.uniforms=Dt.uniforms;const It=et.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(It.clippingPlanes=St.uniform),dl(R,Dt),et.needsLights=eo(R),et.lightsStateVersion=zt,et.needsLights&&(It.ambientLightColor.value=Z.state.ambient,It.lightProbe.value=Z.state.probe,It.directionalLights.value=Z.state.directional,It.directionalLightShadows.value=Z.state.directionalShadow,It.spotLights.value=Z.state.spot,It.spotLightShadows.value=Z.state.spotShadow,It.rectAreaLights.value=Z.state.rectArea,It.ltc_1.value=Z.state.rectAreaLTC1,It.ltc_2.value=Z.state.rectAreaLTC2,It.pointLights.value=Z.state.point,It.pointLightShadows.value=Z.state.pointShadow,It.hemisphereLights.value=Z.state.hemi,It.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,It.spotLightMatrix.value=Z.state.spotLightMatrix,It.spotLightMap.value=Z.state.spotLightMap,It.pointShadowMatrix.value=Z.state.pointShadowMatrix),et.currentProgram=se,et.uniformsList=null,se}function hl(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=ou.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function dl(R,X){const st=E.get(R);st.outputColorSpace=X.outputColorSpace,st.batching=X.batching,st.batchingColor=X.batchingColor,st.instancing=X.instancing,st.instancingColor=X.instancingColor,st.instancingMorph=X.instancingMorph,st.skinning=X.skinning,st.morphTargets=X.morphTargets,st.morphNormals=X.morphNormals,st.morphColors=X.morphColors,st.morphTargetsCount=X.morphTargetsCount,st.numClippingPlanes=X.numClippingPlanes,st.numIntersection=X.numClipIntersection,st.vertexAlphas=X.vertexAlphas,st.vertexTangents=X.vertexTangents,st.toneMapping=X.toneMapping}function pl(R,X,st,et,Z){X.isScene!==!0&&(X=Le),q.resetTextureUnits();const wt=X.fog,zt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?X.environment:null,Dt=at===null?D.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:qr,Xt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Yt=dt.get(et.envMap||zt,Xt),ne=et.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,se=!!st.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),It=!!st.morphAttributes.position,ue=!!st.morphAttributes.normal,Ye=!!st.morphAttributes.color;let je=qi;et.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(je=D.toneMapping);const Ce=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,mn=Ce!==void 0?Ce.length:0,Gt=E.get(et),On=k.state.lights;if(Kt===!0&&($t===!0||R!==$)){const on=R===$&&et.id===lt;St.setState(et,R,on)}let ae=!1;et.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==On.state.version||Gt.outputColorSpace!==Dt||Z.isBatchedMesh&&Gt.batching===!1||!Z.isBatchedMesh&&Gt.batching===!0||Z.isBatchedMesh&&Gt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Gt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Gt.instancing===!1||!Z.isInstancedMesh&&Gt.instancing===!0||Z.isSkinnedMesh&&Gt.skinning===!1||!Z.isSkinnedMesh&&Gt.skinning===!0||Z.isInstancedMesh&&Gt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Gt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Gt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Gt.instancingMorph===!1&&Z.morphTexture!==null||Gt.envMap!==Yt||et.fog===!0&&Gt.fog!==wt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==St.numPlanes||Gt.numIntersection!==St.numIntersection)||Gt.vertexAlphas!==ne||Gt.vertexTangents!==se||Gt.morphTargets!==It||Gt.morphNormals!==ue||Gt.morphColors!==Ye||Gt.toneMapping!==je||Gt.morphTargetsCount!==mn)&&(ae=!0):(ae=!0,Gt.__version=et.version);let Pn=Gt.currentProgram;ae===!0&&(Pn=wa(et,X,Z));let jn=!1,Mi=!1,Zn=!1;const Pe=Pn.getUniforms(),rn=Gt.uniforms;if(Wt.useProgram(Pn.program)&&(jn=!0,Mi=!0,Zn=!0),et.id!==lt&&(lt=et.id,Mi=!0),jn||$!==R){Wt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Pe.setValue(G,"projectionMatrix",R.projectionMatrix),Pe.setValue(G,"viewMatrix",R.matrixWorldInverse);const Ei=Pe.map.cameraPosition;Ei!==void 0&&Ei.setValue(G,_e.setFromMatrixPosition(R.matrixWorld)),Oe.logarithmicDepthBuffer&&Pe.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Pe.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),$!==R&&($=R,Mi=!0,Zn=!0)}if(Gt.needsLights&&(On.state.directionalShadowMap.length>0&&Pe.setValue(G,"directionalShadowMap",On.state.directionalShadowMap,q),On.state.spotShadowMap.length>0&&Pe.setValue(G,"spotShadowMap",On.state.spotShadowMap,q),On.state.pointShadowMap.length>0&&Pe.setValue(G,"pointShadowMap",On.state.pointShadowMap,q)),Z.isSkinnedMesh){Pe.setOptional(G,Z,"bindMatrix"),Pe.setOptional(G,Z,"bindMatrixInverse");const on=Z.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Pe.setValue(G,"boneTexture",on.boneTexture,q))}Z.isBatchedMesh&&(Pe.setOptional(G,Z,"batchingTexture"),Pe.setValue(G,"batchingTexture",Z._matricesTexture,q),Pe.setOptional(G,Z,"batchingIdTexture"),Pe.setValue(G,"batchingIdTexture",Z._indirectTexture,q),Pe.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Pe.setValue(G,"batchingColorTexture",Z._colorsTexture,q));const Bn=st.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Ot.update(Z,st,Pn),(Mi||Gt.receiveShadow!==Z.receiveShadow)&&(Gt.receiveShadow=Z.receiveShadow,Pe.setValue(G,"receiveShadow",Z.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&X.environment!==null&&(rn.envMapIntensity.value=X.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=hC()),Mi&&(Pe.setValue(G,"toneMappingExposure",D.toneMappingExposure),Gt.needsLights&&fs(rn,Zn),wt&&et.fog===!0&&Zt.refreshFogUniforms(rn,wt),Zt.refreshMaterialUniforms(rn,et,_t,Y,k.state.transmissionRenderTarget[R.id]),ou.upload(G,hl(Gt),rn,q)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(ou.upload(G,hl(Gt),rn,q),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Pe.setValue(G,"center",Z.center),Pe.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Pe.setValue(G,"normalMatrix",Z.normalMatrix),Pe.setValue(G,"modelMatrix",Z.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const on=et.uniformsGroups;for(let Ei=0,$i=on.length;Ei<$i;Ei++){const qs=on[Ei];Pt.update(qs,Pn),Pt.bind(qs,Pn)}}return Pn}function fs(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function eo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(R,X,st){const et=E.get(R);et.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=X,E.get(R.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:st,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const st=E.get(R);st.__webglFramebuffer=X,st.__useDefaultFramebuffer=X===void 0};const Da=G.createFramebuffer();this.setRenderTarget=function(R,X=0,st=0){at=R,H=X,tt=st;let et=null,Z=!1,wt=!1;if(R){const Dt=E.get(R);if(Dt.__useDefaultFramebuffer!==void 0){Wt.bindFramebuffer(G.FRAMEBUFFER,Dt.__webglFramebuffer),O.copy(R.viewport),B.copy(R.scissor),ot=R.scissorTest,Wt.viewport(O),Wt.scissor(B),Wt.setScissorTest(ot),lt=-1;return}else if(Dt.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Dt.__hasExternalTextures)q.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ne=R.depthTexture;if(Dt.__boundDepthTexture!==ne){if(ne!==null&&E.has(ne)&&(R.width!==ne.image.width||R.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const Xt=R.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(wt=!0);const Yt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Yt[X])?et=Yt[X][st]:et=Yt[X],Z=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?et=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Yt)?et=Yt[st]:et=Yt,O.copy(R.viewport),B.copy(R.scissor),ot=R.scissorTest}else O.copy(nt).multiplyScalar(_t).floor(),B.copy(vt).multiplyScalar(_t).floor(),ot=bt;if(st!==0&&(et=Da),Wt.bindFramebuffer(G.FRAMEBUFFER,et)&&Wt.drawBuffers(R,et),Wt.viewport(O),Wt.scissor(B),Wt.setScissorTest(ot),Z){const Dt=E.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,Dt.__webglTexture,st)}else if(wt){const Dt=X;for(let Xt=0;Xt<R.textures.length;Xt++){const Yt=E.get(R.textures[Xt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Xt,Yt.__webglTexture,st,Dt)}}else if(R!==null&&st!==0){const Dt=E.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Dt.__webglTexture,st)}lt=-1},this.readRenderTargetPixels=function(R,X,st,et,Z,wt,zt,Dt=0){if(!(R&&R.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Xt=Xt[zt]),Xt){Wt.bindFramebuffer(G.FRAMEBUFFER,Xt);try{const Yt=R.textures[Dt],ne=Yt.format,se=Yt.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Dt),!Oe.textureFormatReadable(ne)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(se)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-et&&st>=0&&st<=R.height-Z&&G.readPixels(X,st,et,Z,Rt.convert(ne),Rt.convert(se),wt)}finally{const Yt=at!==null?E.get(at).__webglFramebuffer:null;Wt.bindFramebuffer(G.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(R,X,st,et,Z,wt,zt,Dt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Xt=Xt[zt]),Xt)if(X>=0&&X<=R.width-et&&st>=0&&st<=R.height-Z){Wt.bindFramebuffer(G.FRAMEBUFFER,Xt);const Yt=R.textures[Dt],ne=Yt.format,se=Yt.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Dt),!Oe.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const It=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,It),G.bufferData(G.PIXEL_PACK_BUFFER,wt.byteLength,G.STREAM_READ),G.readPixels(X,st,et,Z,Rt.convert(ne),Rt.convert(se),0);const ue=at!==null?E.get(at).__webglFramebuffer:null;Wt.bindFramebuffer(G.FRAMEBUFFER,ue);const Ye=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await fE(G,Ye,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,It),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,wt),G.deleteBuffer(It),G.deleteSync(Ye),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,st=0){const et=Math.pow(2,-st),Z=Math.floor(R.image.width*et),wt=Math.floor(R.image.height*et),zt=X!==null?X.x:0,Dt=X!==null?X.y:0;q.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,zt,Dt,Z,wt),Wt.unbindTexture()};const Ua=G.createFramebuffer(),hs=G.createFramebuffer();this.copyTextureToTexture=function(R,X,st=null,et=null,Z=0,wt=0){let zt,Dt,Xt,Yt,ne,se,It,ue,Ye;const je=R.isCompressedTexture?R.mipmaps[wt]:R.image;if(st!==null)zt=st.max.x-st.min.x,Dt=st.max.y-st.min.y,Xt=st.isBox3?st.max.z-st.min.z:1,Yt=st.min.x,ne=st.min.y,se=st.isBox3?st.min.z:0;else{const rn=Math.pow(2,-Z);zt=Math.floor(je.width*rn),Dt=Math.floor(je.height*rn),R.isDataArrayTexture?Xt=je.depth:R.isData3DTexture?Xt=Math.floor(je.depth*rn):Xt=1,Yt=0,ne=0,se=0}et!==null?(It=et.x,ue=et.y,Ye=et.z):(It=0,ue=0,Ye=0);const Ce=Rt.convert(X.format),mn=Rt.convert(X.type);let Gt;X.isData3DTexture?(q.setTexture3D(X,0),Gt=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(q.setTexture2DArray(X,0),Gt=G.TEXTURE_2D_ARRAY):(q.setTexture2D(X,0),Gt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const On=G.getParameter(G.UNPACK_ROW_LENGTH),ae=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Pn=G.getParameter(G.UNPACK_SKIP_PIXELS),jn=G.getParameter(G.UNPACK_SKIP_ROWS),Mi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,je.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,je.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Yt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ne),G.pixelStorei(G.UNPACK_SKIP_IMAGES,se);const Zn=R.isDataArrayTexture||R.isData3DTexture,Pe=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const rn=E.get(R),Bn=E.get(X),on=E.get(rn.__renderTarget),Ei=E.get(Bn.__renderTarget);Wt.bindFramebuffer(G.READ_FRAMEBUFFER,on.__webglFramebuffer),Wt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let $i=0;$i<Xt;$i++)Zn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(R).__webglTexture,Z,se+$i),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(X).__webglTexture,wt,Ye+$i)),G.blitFramebuffer(Yt,ne,zt,Dt,It,ue,zt,Dt,G.DEPTH_BUFFER_BIT,G.NEAREST);Wt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||E.has(R)){const rn=E.get(R),Bn=E.get(X);Wt.bindFramebuffer(G.READ_FRAMEBUFFER,Ua),Wt.bindFramebuffer(G.DRAW_FRAMEBUFFER,hs);for(let on=0;on<Xt;on++)Zn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,rn.__webglTexture,Z,se+on):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,rn.__webglTexture,Z),Pe?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Bn.__webglTexture,wt,Ye+on):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Bn.__webglTexture,wt),Z!==0?G.blitFramebuffer(Yt,ne,zt,Dt,It,ue,zt,Dt,G.COLOR_BUFFER_BIT,G.NEAREST):Pe?G.copyTexSubImage3D(Gt,wt,It,ue,Ye+on,Yt,ne,zt,Dt):G.copyTexSubImage2D(Gt,wt,It,ue,Yt,ne,zt,Dt);Wt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Pe?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Gt,wt,It,ue,Ye,zt,Dt,Xt,Ce,mn,je.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(Gt,wt,It,ue,Ye,zt,Dt,Xt,Ce,je.data):G.texSubImage3D(Gt,wt,It,ue,Ye,zt,Dt,Xt,Ce,mn,je):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,wt,It,ue,zt,Dt,Ce,mn,je.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,wt,It,ue,je.width,je.height,Ce,je.data):G.texSubImage2D(G.TEXTURE_2D,wt,It,ue,zt,Dt,Ce,mn,je);G.pixelStorei(G.UNPACK_ROW_LENGTH,On),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ae),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Pn),G.pixelStorei(G.UNPACK_SKIP_ROWS,jn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Mi),wt===0&&X.generateMipmaps&&G.generateMipmap(Gt),Wt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),Wt.unbindTexture()},this.resetState=function(){H=0,tt=0,at=null,Wt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}const Fr=new Ni(0,0,0,"YXZ"),Ir=new Q,pC={type:"change"},mC={type:"lock"},gC={type:"unlock"},wv=.002,Dv=Math.PI/2;class _C extends xb{constructor(t,i=null){super(t,i),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=vC.bind(this),this._onPointerlockChange=xC.bind(this),this._onPointerlockError=SC.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(t){super.connect(t),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(t){if(this.enabled===!1)return;const i=this.object;Ir.setFromMatrixColumn(i.matrix,0),Ir.crossVectors(i.up,Ir),i.position.addScaledVector(Ir,t)}moveRight(t){if(this.enabled===!1)return;const i=this.object;Ir.setFromMatrixColumn(i.matrix,0),i.position.addScaledVector(Ir,t)}lock(t=!1){this.domElement.requestPointerLock({unadjustedMovement:t})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function vC(r){if(this.enabled===!1||this.isLocked===!1)return;const t=this.object;Fr.setFromQuaternion(t.quaternion),Fr.y-=r.movementX*wv*this.pointerSpeed,Fr.x-=r.movementY*wv*this.pointerSpeed,Fr.x=Math.max(Dv-this.maxPolarAngle,Math.min(Dv-this.minPolarAngle,Fr.x)),t.quaternion.setFromEuler(Fr),this.dispatchEvent(pC)}function xC(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(mC),this.isLocked=!0):(this.dispatchEvent(gC),this.isLocked=!1)}function SC(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}class yC{constructor(t,i,s){this.players={},this.zombies={},this.bullets=[],this.animationId=0,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.canJump=!1,this.velocity=new Q,this.direction=new Q,this.ammo=30,this.lastShotTime=0,this.lastNetworkUpdate=0,this.container=t,this.socket=i,this.setHudState=s,this.scene=new kE,this.scene.background=new ye(1118481),this.scene.fog=new Rp(1118481,0,50),this.camera=new si(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.y=1.6,this.renderer=new dC({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,t.appendChild(this.renderer.domElement);const l=new db(4210752);this.scene.add(l);const c=new hb(16777215,.5);c.position.set(10,20,10),c.castShadow=!0,c.shadow.camera.top=30,c.shadow.camera.bottom=-30,c.shadow.camera.left=-30,c.shadow.camera.right=30,this.scene.add(c);const h=new ub(16711680,5,20,Math.PI/4,.5,1);h.position.set(0,10,0),h.target.position.set(0,0,0),this.scene.add(h),this.scene.add(h.target),this.createEnvironment(),this.controls=new _C(this.camera,document.body),this.clock=new _b,this.onWindowResize=this.onWindowResize.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onMouseDown=this.onMouseDown.bind(this),window.addEventListener("resize",this.onWindowResize),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.onKeyUp),document.addEventListener("mousedown",this.onMouseDown),t.addEventListener("click",()=>{this.controls.lock()}),this.socket.on("game_tick",d=>this.handleGameTick(d)),this.socket.on("player_hit",d=>{d.playerId===this.socket.id&&(this.camera.rotation.z+=.1,setTimeout(()=>this.camera.rotation.z-=.1,100))}),this.socket.on("wave_start",d=>{})}createEnvironment(){const t=new ul(100,100),i=new Yc({color:2236962,roughness:.8,metalness:.2}),s=new An(t,i);s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s);const l=new vb(100,50,4473924,2236962);this.scene.add(l);const c=new Yc({color:3355443}),h=new ba(100,5,1),d=new An(h,c);d.position.z=-50,d.position.y=2.5,this.scene.add(d);const m=new An(h,c);m.position.z=50,m.position.y=2.5,this.scene.add(m);const p=new An(h,c);p.rotation.y=Math.PI/2,p.position.x=-50,p.position.y=2.5,this.scene.add(p);const v=new An(h,c);v.rotation.y=Math.PI/2,v.position.x=50,v.position.y=2.5,this.scene.add(v);const x=new ba(2,2,2);for(let g=0;g<10;g++){const M=new An(x,c);M.position.x=(Math.random()-.5)*60,M.position.z=(Math.random()-.5)*60,M.position.y=1,M.castShadow=!0,M.receiveShadow=!0,this.scene.add(M)}}init(){this.animate()}dispose(){cancelAnimationFrame(this.animationId),window.removeEventListener("resize",this.onWindowResize),document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("keyup",this.onKeyUp),document.removeEventListener("mousedown",this.onMouseDown),this.controls.unlock(),this.container.innerHTML="",this.socket.off("game_tick"),this.socket.off("player_hit"),this.socket.off("wave_start")}handleGameTick(t){const i=t.players[this.socket.id];i&&this.setHudState(l=>({...l,health:i.health,score:i.score,zombiesRemaining:t.zombiesRemaining})),Object.keys(t.players).forEach(l=>{if(l===this.socket.id)return;const c=t.players[l];if(!this.players[l]){const h=new ba(1,1.8,1),d=new Yc({color:255}),m=new An(h,d);m.castShadow=!0,this.scene.add(m),this.players[l]=m}this.players[l].position.lerp(new Q(c.x,c.y,c.z),.3),this.players[l].rotation.y=c.rotation,c.isDead?this.players[l].visible=!1:this.players[l].visible=!0}),Object.keys(this.players).forEach(l=>{t.players[l]||(this.scene.remove(this.players[l]),delete this.players[l])});const s=t.zombies||{};Object.keys(s).forEach(l=>{const c=s[l];if(!this.zombies[l]){const h=new ba(1,c.type==="tank"?2.5:1.8,1),d=c.type==="fast"?16755200:c.type==="tank"?5570560:65280,m=new Yc({color:d}),p=new An(h,m);p.castShadow=!0,this.scene.add(p),this.zombies[l]=p}this.zombies[l].position.lerp(new Q(c.x,c.y,c.z),.3),this.zombies[l].lookAt(this.camera.position.x,1,this.camera.position.z)}),Object.keys(this.zombies).forEach(l=>{s[l]||(this.scene.remove(this.zombies[l]),delete this.zombies[l])})}onKeyDown(t){switch(t.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"Space":this.canJump===!0&&(this.velocity.y+=15),this.canJump=!1;break;case"KeyR":this.reload();break}}onKeyUp(t){switch(t.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break}}onMouseDown(t){this.controls.isLocked&&this.shoot()}reload(){this.ammo=30,this.setHudState(t=>({...t,ammo:30}))}shoot(){if(this.ammo<=0)return;const t=Date.now();if(t-this.lastShotTime<100)return;this.lastShotTime=t,this.ammo--,this.setHudState(c=>({...c,ammo:this.ammo}));const i=new gb;i.setFromCamera(new Ue(0,0),this.camera);const s=Object.values(this.zombies),l=i.intersectObjects(s);if(l.length>0){const c=l[0].object,h=Object.keys(this.zombies).find(d=>this.zombies[d]===c);if(h){this.socket.emit("zombie_hit",{zombieId:h,damage:25});const d=c.material.color.getHex();c.material.color.setHex(16777215),setTimeout(()=>{this.zombies[h]&&c.material.color.setHex(d)},50)}}this.camera.rotation.x+=.02}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){this.animationId=requestAnimationFrame(()=>this.animate());const t=this.clock.getDelta();if(this.controls.isLocked){this.velocity.x-=this.velocity.x*10*t,this.velocity.z-=this.velocity.z*10*t,this.velocity.y-=9.8*20*t,this.direction.z=Number(this.moveForward)-Number(this.moveBackward),this.direction.x=Number(this.moveRight)-Number(this.moveLeft),this.direction.normalize(),(this.moveForward||this.moveBackward)&&(this.velocity.z-=this.direction.z*400*t),(this.moveLeft||this.moveRight)&&(this.velocity.x-=this.direction.x*400*t),this.controls.moveRight(-this.velocity.x*t),this.controls.moveForward(-this.velocity.z*t),this.controls.getObject().position.y+=this.velocity.y*t,this.controls.getObject().position.y<1.6&&(this.velocity.y=0,this.controls.getObject().position.y=1.6,this.canJump=!0),this.camera.rotation.x=wE.lerp(this.camera.rotation.x,0,.1);const i=Date.now();if(i-this.lastNetworkUpdate>50){this.lastNetworkUpdate=i;const s=new Q;this.camera.getWorldDirection(s);const l=Math.atan2(s.x,s.z);this.socket.emit("player_input",{x:this.controls.getObject().position.x,z:this.controls.getObject().position.z,y:this.controls.getObject().position.y-1.6,rotation:l})}}this.renderer.render(this.scene,this.camera)}}const Un=eu();function MC(){const[r,t]=_i.useState("menu"),[i,s]=_i.useState(""),[l,c]=_i.useState(""),[h,d]=_i.useState([]),[m,p]=_i.useState(!1),[v,x]=_i.useState(""),[g,M]=_i.useState({health:100,wave:1,zombiesRemaining:0,ammo:30,score:0}),b=_i.useRef(null),C=_i.useRef(null);_i.useEffect(()=>(Un.on("room_created",L=>{s(L),p(!0),t("lobby")}),Un.on("room_joined",L=>{s(L),p(!1),t("lobby")}),Un.on("room_update",L=>{d(Object.values(L.players)),L.gameActive&&t("game")}),Un.on("game_started",()=>{t("game")}),Un.on("game_over",L=>{alert(`GAME OVER! You survived ${L.wave} waves.`),t("lobby")}),Un.on("error",L=>{x(L),setTimeout(()=>x(""),3e3)}),()=>{Un.off("room_created"),Un.off("room_joined"),Un.off("room_update"),Un.off("game_started"),Un.off("error")}),[]),_i.useEffect(()=>(r==="game"&&b.current&&!C.current&&(C.current=new yC(b.current,Un,M),C.current.init()),()=>{r!=="game"&&C.current&&(C.current.dispose(),C.current=null)}),[r]);const y=()=>{Un.emit("create_room")},S=()=>{l.length===6?Un.emit("join_room",l):x("Invalid code length")},w=()=>{Un.emit("start_game")};return jt.jsxs("div",{className:"w-full h-screen bg-zinc-900 text-white overflow-hidden select-none font-sans",children:[v&&jt.jsx("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 bg-red-500 px-4 py-2 rounded shadow-lg z-50",children:v}),r==="menu"&&jt.jsx("div",{className:"flex flex-col items-center justify-center h-full space-y-8 bg-[url('https://picsum.photos/seed/zombie/1920/1080?blur=4')] bg-cover bg-center",children:jt.jsxs("div",{className:"bg-black/80 p-12 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl text-center",children:[jt.jsx("h1",{className:"text-6xl font-bold mb-2 text-red-500 tracking-tighter uppercase",children:"Zombie Arena 3D"}),jt.jsx("p",{className:"text-zinc-400 mb-8",children:"Survive together. Die together."}),jt.jsxs("div",{className:"space-y-4 w-64 mx-auto",children:[jt.jsx("button",{onClick:y,className:"w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold transition-all transform hover:scale-105",children:"CREATE ROOM"}),jt.jsxs("div",{className:"flex space-x-2",children:[jt.jsx("input",{type:"text",placeholder:"CODE",value:l,onChange:L=>c(L.target.value.toUpperCase()),className:"w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:border-red-500 outline-none text-center tracking-widest font-mono",maxLength:6}),jt.jsx("button",{onClick:S,className:"px-6 py-3 bg-zinc-700 hover:bg-zinc-600 rounded-lg font-bold transition-colors",children:"JOIN"})]})]})]})}),r==="lobby"&&jt.jsx("div",{className:"flex flex-col items-center justify-center h-full bg-zinc-900",children:jt.jsxs("div",{className:"w-full max-w-2xl bg-zinc-800 p-8 rounded-2xl border border-zinc-700 shadow-2xl",children:[jt.jsxs("div",{className:"flex justify-between items-center mb-8 border-b border-zinc-700 pb-4",children:[jt.jsx("h2",{className:"text-2xl font-bold",children:"LOBBY"}),jt.jsxs("div",{className:"flex items-center space-x-4",children:[jt.jsx("span",{className:"text-zinc-400",children:"INVITE CODE:"}),jt.jsx("span",{className:"font-mono text-xl bg-black px-3 py-1 rounded text-red-400 select-all cursor-pointer",onClick:()=>navigator.clipboard.writeText(i),children:i})]})]}),jt.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8",children:[h.map((L,N)=>jt.jsxs("div",{className:"flex items-center space-x-3 bg-zinc-700/50 p-3 rounded-lg border border-zinc-600",children:[jt.jsx("div",{className:"w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center font-bold",children:N+1}),jt.jsxs("span",{children:["Player ",L.id.substring(0,4)]}),L.id===Un.id&&jt.jsx("span",{className:"text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded",children:"YOU"})]},L.id)),[...Array(6-h.length)].map((L,N)=>jt.jsx("div",{className:"flex items-center justify-center bg-zinc-800/50 p-3 rounded-lg border border-zinc-700/50 border-dashed text-zinc-600",children:"Waiting..."},N))]}),m?jt.jsx("button",{onClick:w,className:"w-full py-4 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-red-900/20",children:"START GAME"}):jt.jsx("div",{className:"text-center text-zinc-500 animate-pulse",children:"Waiting for host to start..."})]})}),jt.jsx("div",{ref:b,className:`absolute inset-0 z-0 ${r==="game"?"block":"hidden"}`}),r==="game"&&jt.jsxs("div",{className:"absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-8",children:[jt.jsxs("div",{className:"flex justify-between items-start",children:[jt.jsxs("div",{className:"bg-black/50 backdrop-blur px-6 py-3 rounded-xl border border-white/10",children:[jt.jsx("div",{className:"text-sm text-zinc-400 uppercase tracking-widest",children:"Wave"}),jt.jsx("div",{className:"text-4xl font-bold text-red-500",children:g.wave})]}),jt.jsxs("div",{className:"bg-black/50 backdrop-blur px-6 py-3 rounded-xl border border-white/10 text-right",children:[jt.jsx("div",{className:"text-sm text-zinc-400 uppercase tracking-widest",children:"Zombies"}),jt.jsx("div",{className:"text-4xl font-bold text-white",children:g.zombiesRemaining})]})]}),jt.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",children:[jt.jsx("div",{className:"w-1 h-1 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"}),jt.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-white/30 rounded-full"})]}),jt.jsxs("div",{className:"flex justify-between items-end",children:[jt.jsxs("div",{className:"flex items-end space-x-8",children:[jt.jsxs("div",{className:"bg-black/50 backdrop-blur p-6 rounded-xl border border-white/10 min-w-[200px]",children:[jt.jsx("div",{className:"text-sm text-zinc-400 uppercase tracking-widest mb-1",children:"Health"}),jt.jsx("div",{className:"h-4 w-full bg-zinc-800 rounded-full overflow-hidden",children:jt.jsx("div",{className:"h-full bg-red-500 transition-all duration-300",style:{width:`${g.health}%`}})}),jt.jsx("div",{className:"mt-2 text-2xl font-bold",children:Math.max(0,Math.round(g.health))})]}),jt.jsxs("div",{className:"bg-black/50 backdrop-blur p-4 rounded-xl border border-white/10",children:[jt.jsx("div",{className:"text-sm text-zinc-400 uppercase tracking-widest",children:"Score"}),jt.jsx("div",{className:"text-xl font-mono text-yellow-400",children:g.score})]})]}),jt.jsxs("div",{className:"bg-black/50 backdrop-blur p-6 rounded-xl border border-white/10 text-right",children:[jt.jsx("div",{className:"text-sm text-zinc-400 uppercase tracking-widest",children:"Ammo"}),jt.jsxs("div",{className:"text-5xl font-bold font-mono",children:[g.ammo,jt.jsx("span",{className:"text-2xl text-zinc-500",children:"/∞"})]})]})]}),g.health<=0&&jt.jsx("div",{className:"absolute inset-0 bg-red-900/40 backdrop-blur-sm flex items-center justify-center",children:jt.jsxs("div",{className:"text-center",children:[jt.jsx("h1",{className:"text-8xl font-black text-white mb-4 drop-shadow-xl",children:"YOU DIED"}),jt.jsx("p",{className:"text-2xl text-white/80",children:"Spectating teammates..."})]})})]})]})}Fy.createRoot(document.getElementById("root")).render(jt.jsx(_i.StrictMode,{children:jt.jsx(MC,{})}));
