function n0(n,i){for(var s=0;s<i.length;s++){const o=i[s];if(typeof o!="string"&&!Array.isArray(o)){for(const c in o)if(c!=="default"&&!(c in n)){const h=Object.getOwnPropertyDescriptor(o,c);h&&Object.defineProperty(n,c,h.get?h:{enumerable:!0,get:()=>o[c]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(c){if(c.ep)return;c.ep=!0;const h=s(c);fetch(c.href,h)}})();function i0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var hl={exports:{}},hr={},ml={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh;function r0(){if(Nh)return ae;Nh=1;var n=Symbol.for("react.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function k(A){return A===null||typeof A!="object"?null:(A=w&&A[w]||A["@@iterator"],typeof A=="function"?A:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,M={};function N(A,W,re){this.props=A,this.context=W,this.refs=M,this.updater=re||j}N.prototype.isReactComponent={},N.prototype.setState=function(A,W){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,W,"setState")},N.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function L(){}L.prototype=N.prototype;function R(A,W,re){this.props=A,this.context=W,this.refs=M,this.updater=re||j}var O=R.prototype=new L;O.constructor=R,I(O,N.prototype),O.isPureReactComponent=!0;var Q=Array.isArray,H=Object.prototype.hasOwnProperty,te={current:null},le={key:!0,ref:!0,__self:!0,__source:!0};function X(A,W,re){var oe,de={},he=null,ge=null;if(W!=null)for(oe in W.ref!==void 0&&(ge=W.ref),W.key!==void 0&&(he=""+W.key),W)H.call(W,oe)&&!le.hasOwnProperty(oe)&&(de[oe]=W[oe]);var fe=arguments.length-2;if(fe===1)de.children=re;else if(1<fe){for(var be=Array(fe),lt=0;lt<fe;lt++)be[lt]=arguments[lt+2];de.children=be}if(A&&A.defaultProps)for(oe in fe=A.defaultProps,fe)de[oe]===void 0&&(de[oe]=fe[oe]);return{$$typeof:n,type:A,key:he,ref:ge,props:de,_owner:te.current}}function ve(A,W){return{$$typeof:n,type:A.type,key:W,ref:A.ref,props:A.props,_owner:A._owner}}function Pe(A){return typeof A=="object"&&A!==null&&A.$$typeof===n}function Je(A){var W={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(re){return W[re]})}var ot=/\/+/g;function Ye(A,W){return typeof A=="object"&&A!==null&&A.key!=null?Je(""+A.key):W.toString(36)}function et(A,W,re,oe,de){var he=typeof A;(he==="undefined"||he==="boolean")&&(A=null);var ge=!1;if(A===null)ge=!0;else switch(he){case"string":case"number":ge=!0;break;case"object":switch(A.$$typeof){case n:case i:ge=!0}}if(ge)return ge=A,de=de(ge),A=oe===""?"."+Ye(ge,0):oe,Q(de)?(re="",A!=null&&(re=A.replace(ot,"$&/")+"/"),et(de,W,re,"",function(lt){return lt})):de!=null&&(Pe(de)&&(de=ve(de,re+(!de.key||ge&&ge.key===de.key?"":(""+de.key).replace(ot,"$&/")+"/")+A)),W.push(de)),1;if(ge=0,oe=oe===""?".":oe+":",Q(A))for(var fe=0;fe<A.length;fe++){he=A[fe];var be=oe+Ye(he,fe);ge+=et(he,W,re,be,de)}else if(be=k(A),typeof be=="function")for(A=be.call(A),fe=0;!(he=A.next()).done;)he=he.value,be=oe+Ye(he,fe++),ge+=et(he,W,re,be,de);else if(he==="object")throw W=String(A),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return ge}function St(A,W,re){if(A==null)return A;var oe=[],de=0;return et(A,oe,"","",function(he){return W.call(re,he,de++)}),oe}function Ke(A){if(A._status===-1){var W=A._result;W=W(),W.then(function(re){(A._status===0||A._status===-1)&&(A._status=1,A._result=re)},function(re){(A._status===0||A._status===-1)&&(A._status=2,A._result=re)}),A._status===-1&&(A._status=0,A._result=W)}if(A._status===1)return A._result.default;throw A._result}var se={current:null},V={transition:null},Z={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:V,ReactCurrentOwner:te};function q(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:St,forEach:function(A,W,re){St(A,function(){W.apply(this,arguments)},re)},count:function(A){var W=0;return St(A,function(){W++}),W},toArray:function(A){return St(A,function(W){return W})||[]},only:function(A){if(!Pe(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},ae.Component=N,ae.Fragment=s,ae.Profiler=c,ae.PureComponent=R,ae.StrictMode=o,ae.Suspense=p,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,ae.act=q,ae.cloneElement=function(A,W,re){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var oe=I({},A.props),de=A.key,he=A.ref,ge=A._owner;if(W!=null){if(W.ref!==void 0&&(he=W.ref,ge=te.current),W.key!==void 0&&(de=""+W.key),A.type&&A.type.defaultProps)var fe=A.type.defaultProps;for(be in W)H.call(W,be)&&!le.hasOwnProperty(be)&&(oe[be]=W[be]===void 0&&fe!==void 0?fe[be]:W[be])}var be=arguments.length-2;if(be===1)oe.children=re;else if(1<be){fe=Array(be);for(var lt=0;lt<be;lt++)fe[lt]=arguments[lt+2];oe.children=fe}return{$$typeof:n,type:A.type,key:de,ref:he,props:oe,_owner:ge}},ae.createContext=function(A){return A={$$typeof:d,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:h,_context:A},A.Consumer=A},ae.createElement=X,ae.createFactory=function(A){var W=X.bind(null,A);return W.type=A,W},ae.createRef=function(){return{current:null}},ae.forwardRef=function(A){return{$$typeof:f,render:A}},ae.isValidElement=Pe,ae.lazy=function(A){return{$$typeof:v,_payload:{_status:-1,_result:A},_init:Ke}},ae.memo=function(A,W){return{$$typeof:y,type:A,compare:W===void 0?null:W}},ae.startTransition=function(A){var W=V.transition;V.transition={};try{A()}finally{V.transition=W}},ae.unstable_act=q,ae.useCallback=function(A,W){return se.current.useCallback(A,W)},ae.useContext=function(A){return se.current.useContext(A)},ae.useDebugValue=function(){},ae.useDeferredValue=function(A){return se.current.useDeferredValue(A)},ae.useEffect=function(A,W){return se.current.useEffect(A,W)},ae.useId=function(){return se.current.useId()},ae.useImperativeHandle=function(A,W,re){return se.current.useImperativeHandle(A,W,re)},ae.useInsertionEffect=function(A,W){return se.current.useInsertionEffect(A,W)},ae.useLayoutEffect=function(A,W){return se.current.useLayoutEffect(A,W)},ae.useMemo=function(A,W){return se.current.useMemo(A,W)},ae.useReducer=function(A,W,re){return se.current.useReducer(A,W,re)},ae.useRef=function(A){return se.current.useRef(A)},ae.useState=function(A){return se.current.useState(A)},ae.useSyncExternalStore=function(A,W,re){return se.current.useSyncExternalStore(A,W,re)},ae.useTransition=function(){return se.current.useTransition()},ae.version="18.3.1",ae}var Mh;function Zl(){return Mh||(Mh=1,ml.exports=r0()),ml.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rh;function s0(){if(Rh)return hr;Rh=1;var n=Zl(),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,y){var v,w={},k=null,j=null;y!==void 0&&(k=""+y),p.key!==void 0&&(k=""+p.key),p.ref!==void 0&&(j=p.ref);for(v in p)o.call(p,v)&&!h.hasOwnProperty(v)&&(w[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)w[v]===void 0&&(w[v]=p[v]);return{$$typeof:i,type:f,key:k,ref:j,props:w,_owner:c.current}}return hr.Fragment=s,hr.jsx=d,hr.jsxs=d,hr}var Ih;function a0(){return Ih||(Ih=1,hl.exports=s0()),hl.exports}var m=a0(),P=Zl();const o0=i0(P),l0=n0({__proto__:null,default:o0},[P]);var Hs={},fl={exports:{}},at={},pl={exports:{}},gl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh;function c0(){return Dh||(Dh=1,(function(n){function i(V,Z){var q=V.length;V.push(Z);e:for(;0<q;){var A=q-1>>>1,W=V[A];if(0<c(W,Z))V[A]=Z,V[q]=W,q=A;else break e}}function s(V){return V.length===0?null:V[0]}function o(V){if(V.length===0)return null;var Z=V[0],q=V.pop();if(q!==Z){V[0]=q;e:for(var A=0,W=V.length,re=W>>>1;A<re;){var oe=2*(A+1)-1,de=V[oe],he=oe+1,ge=V[he];if(0>c(de,q))he<W&&0>c(ge,de)?(V[A]=ge,V[he]=q,A=he):(V[A]=de,V[oe]=q,A=oe);else if(he<W&&0>c(ge,q))V[A]=ge,V[he]=q,A=he;else break e}}return Z}function c(V,Z){var q=V.sortIndex-Z.sortIndex;return q!==0?q:V.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;n.unstable_now=function(){return h.now()}}else{var d=Date,f=d.now();n.unstable_now=function(){return d.now()-f}}var p=[],y=[],v=1,w=null,k=3,j=!1,I=!1,M=!1,N=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(V){for(var Z=s(y);Z!==null;){if(Z.callback===null)o(y);else if(Z.startTime<=V)o(y),Z.sortIndex=Z.expirationTime,i(p,Z);else break;Z=s(y)}}function Q(V){if(M=!1,O(V),!I)if(s(p)!==null)I=!0,Ke(H);else{var Z=s(y);Z!==null&&se(Q,Z.startTime-V)}}function H(V,Z){I=!1,M&&(M=!1,L(X),X=-1),j=!0;var q=k;try{for(O(Z),w=s(p);w!==null&&(!(w.expirationTime>Z)||V&&!Je());){var A=w.callback;if(typeof A=="function"){w.callback=null,k=w.priorityLevel;var W=A(w.expirationTime<=Z);Z=n.unstable_now(),typeof W=="function"?w.callback=W:w===s(p)&&o(p),O(Z)}else o(p);w=s(p)}if(w!==null)var re=!0;else{var oe=s(y);oe!==null&&se(Q,oe.startTime-Z),re=!1}return re}finally{w=null,k=q,j=!1}}var te=!1,le=null,X=-1,ve=5,Pe=-1;function Je(){return!(n.unstable_now()-Pe<ve)}function ot(){if(le!==null){var V=n.unstable_now();Pe=V;var Z=!0;try{Z=le(!0,V)}finally{Z?Ye():(te=!1,le=null)}}else te=!1}var Ye;if(typeof R=="function")Ye=function(){R(ot)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,St=et.port2;et.port1.onmessage=ot,Ye=function(){St.postMessage(null)}}else Ye=function(){N(ot,0)};function Ke(V){le=V,te||(te=!0,Ye())}function se(V,Z){X=N(function(){V(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(V){V.callback=null},n.unstable_continueExecution=function(){I||j||(I=!0,Ke(H))},n.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<V?Math.floor(1e3/V):5},n.unstable_getCurrentPriorityLevel=function(){return k},n.unstable_getFirstCallbackNode=function(){return s(p)},n.unstable_next=function(V){switch(k){case 1:case 2:case 3:var Z=3;break;default:Z=k}var q=k;k=Z;try{return V()}finally{k=q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(V,Z){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var q=k;k=V;try{return Z()}finally{k=q}},n.unstable_scheduleCallback=function(V,Z,q){var A=n.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?A+q:A):q=A,V){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=q+W,V={id:v++,callback:Z,priorityLevel:V,startTime:q,expirationTime:W,sortIndex:-1},q>A?(V.sortIndex=q,i(y,V),s(p)===null&&V===s(y)&&(M?(L(X),X=-1):M=!0,se(Q,q-A))):(V.sortIndex=W,i(p,V),I||j||(I=!0,Ke(H))),V},n.unstable_shouldYield=Je,n.unstable_wrapCallback=function(V){var Z=k;return function(){var q=k;k=Z;try{return V.apply(this,arguments)}finally{k=q}}}})(gl)),gl}var Lh;function u0(){return Lh||(Lh=1,pl.exports=c0()),pl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function d0(){if(Wh)return at;Wh=1;var n=Zl(),i=u0();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,c={};function h(e,t){d(e,t),d(e+"Capture",t)}function d(e,t){for(c[e]=t,e=0;e<t.length;e++)o.add(t[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},w={};function k(e){return p.call(w,e)?!0:p.call(v,e)?!1:y.test(e)?w[e]=!0:(v[e]=!0,!1)}function j(e,t,r,a){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,t,r,a){if(t===null||typeof t>"u"||j(e,t,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function M(e,t,r,a,l,u,g){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=g}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){N[e]=new M(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];N[t]=new M(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){N[e]=new M(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){N[e]=new M(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){N[e]=new M(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){N[e]=new M(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){N[e]=new M(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){N[e]=new M(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){N[e]=new M(e,5,!1,e.toLowerCase(),null,!1,!1)});var L=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(L,R);N[t]=new M(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(L,R);N[t]=new M(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(L,R);N[t]=new M(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){N[e]=new M(e,1,!1,e.toLowerCase(),null,!1,!1)}),N.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){N[e]=new M(e,1,!1,e.toLowerCase(),null,!0,!0)});function O(e,t,r,a){var l=N.hasOwnProperty(t)?N[t]:null;(l!==null?l.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I(t,r,l,a)&&(r=null),a||l===null?k(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,a=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,a?e.setAttributeNS(a,t,r):e.setAttribute(t,r))))}var Q=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),te=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),Pe=Symbol.for("react.provider"),Je=Symbol.for("react.context"),ot=Symbol.for("react.forward_ref"),Ye=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),St=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),V=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,A;function W(e){if(A===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||""}return`
`+A+e}var re=!1;function oe(e,t){if(!e||re)return"";re=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(E){var a=E}Reflect.construct(e,[],t)}else{try{t.call()}catch(E){a=E}e.call(t.prototype)}else{try{throw Error()}catch(E){a=E}e()}}catch(E){if(E&&a&&typeof E.stack=="string"){for(var l=E.stack.split(`
`),u=a.stack.split(`
`),g=l.length-1,x=u.length-1;1<=g&&0<=x&&l[g]!==u[x];)x--;for(;1<=g&&0<=x;g--,x--)if(l[g]!==u[x]){if(g!==1||x!==1)do if(g--,x--,0>x||l[g]!==u[x]){var b=`
`+l[g].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=g&&0<=x);break}}}finally{re=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?W(e):""}function de(e){switch(e.tag){case 5:return W(e.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return e=oe(e.type,!1),e;case 11:return e=oe(e.type.render,!1),e;case 1:return e=oe(e.type,!0),e;default:return""}}function he(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case le:return"Fragment";case te:return"Portal";case ve:return"Profiler";case X:return"StrictMode";case Ye:return"Suspense";case et:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Je:return(e.displayName||"Context")+".Consumer";case Pe:return(e._context.displayName||"Context")+".Provider";case ot:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case St:return t=e.displayName||null,t!==null?t:he(e.type)||"Memo";case Ke:t=e._payload,e=e._init;try{return he(e(t))}catch{}}return null}function ge(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(t);case 8:return t===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function be(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lt(e){var t=be(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,u=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(g){a=""+g,u.call(this,g)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ir(e){e._valueTracker||(e._valueTracker=lt(e))}function Wc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),a="";return e&&(a=be(e)?e.checked?"true":"false":e.value),e=a,e!==r?(t.setValue(e),!0):!1}function Dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function va(e,t){var r=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Fc(e,t){var r=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;r=fe(t.value!=null?t.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zc(e,t){t=t.checked,t!=null&&O(e,"checked",t,!1)}function wa(e,t){zc(e,t);var r=fe(t.value),a=t.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xa(e,t.type,r):t.hasOwnProperty("defaultValue")&&xa(e,t.type,fe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function xa(e,t,r){(t!=="number"||Dr(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Pi=Array.isArray;function Vn(e,t,r,a){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&a&&(e[r].defaultSelected=!0)}else{for(r=""+fe(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ka(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _c(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(s(92));if(Pi(r)){if(1<r.length)throw Error(s(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:fe(r)}}function Bc(e,t){var r=fe(t.value),a=fe(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function Vc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ba(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lr,Uc=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,a,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,a,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ji(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ag=["Webkit","ms","Moz","O"];Object.keys(Ei).forEach(function(e){ag.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ei[t]=Ei[e]})});function qc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ei.hasOwnProperty(e)&&Ei[e]?(""+t).trim():t+"px"}function Qc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=r.indexOf("--")===0,l=qc(r,t[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,l):e[r]=l}}var og=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sa(e,t){if(t){if(og[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function Aa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ca=null;function Ta(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pa=null,Hn=null,Un=null;function $c(e){if(e=Xi(e)){if(typeof Pa!="function")throw Error(s(280));var t=e.stateNode;t&&(t=rs(t),Pa(e.stateNode,e.type,t))}}function Gc(e){Hn?Un?Un.push(e):Un=[e]:Hn=e}function Yc(){if(Hn){var e=Hn,t=Un;if(Un=Hn=null,$c(e),t)for(e=0;e<t.length;e++)$c(t[e])}}function Kc(e,t){return e(t)}function Xc(){}var ja=!1;function Zc(e,t,r){if(ja)return e(t,r);ja=!0;try{return Kc(e,t,r)}finally{ja=!1,(Hn!==null||Un!==null)&&(Xc(),Yc())}}function Ni(e,t){var r=e.stateNode;if(r===null)return null;var a=rs(r);if(a===null)return null;r=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,t,typeof r));return r}var Ea=!1;if(f)try{var Mi={};Object.defineProperty(Mi,"passive",{get:function(){Ea=!0}}),window.addEventListener("test",Mi,Mi),window.removeEventListener("test",Mi,Mi)}catch{Ea=!1}function lg(e,t,r,a,l,u,g,x,b){var E=Array.prototype.slice.call(arguments,3);try{t.apply(r,E)}catch(F){this.onError(F)}}var Ri=!1,Wr=null,Fr=!1,Na=null,cg={onError:function(e){Ri=!0,Wr=e}};function ug(e,t,r,a,l,u,g,x,b){Ri=!1,Wr=null,lg.apply(cg,arguments)}function dg(e,t,r,a,l,u,g,x,b){if(ug.apply(this,arguments),Ri){if(Ri){var E=Wr;Ri=!1,Wr=null}else throw Error(s(198));Fr||(Fr=!0,Na=E)}}function bn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Jc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function eu(e){if(bn(e)!==e)throw Error(s(188))}function hg(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var r=e,a=t;;){var l=r.return;if(l===null)break;var u=l.alternate;if(u===null){if(a=l.return,a!==null){r=a;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===r)return eu(l),e;if(u===a)return eu(l),t;u=u.sibling}throw Error(s(188))}if(r.return!==a.return)r=l,a=u;else{for(var g=!1,x=l.child;x;){if(x===r){g=!0,r=l,a=u;break}if(x===a){g=!0,a=l,r=u;break}x=x.sibling}if(!g){for(x=u.child;x;){if(x===r){g=!0,r=u,a=l;break}if(x===a){g=!0,a=u,r=l;break}x=x.sibling}if(!g)throw Error(s(189))}}if(r.alternate!==a)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:t}function tu(e){return e=hg(e),e!==null?nu(e):null}function nu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nu(e);if(t!==null)return t;e=e.sibling}return null}var iu=i.unstable_scheduleCallback,ru=i.unstable_cancelCallback,mg=i.unstable_shouldYield,fg=i.unstable_requestPaint,Ne=i.unstable_now,pg=i.unstable_getCurrentPriorityLevel,Ma=i.unstable_ImmediatePriority,su=i.unstable_UserBlockingPriority,zr=i.unstable_NormalPriority,gg=i.unstable_LowPriority,au=i.unstable_IdlePriority,Or=null,Rt=null;function yg(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Or,e,void 0,(e.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:xg,vg=Math.log,wg=Math.LN2;function xg(e){return e>>>=0,e===0?32:31-(vg(e)/wg|0)|0}var _r=64,Br=4194304;function Ii(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vr(e,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,l=e.suspendedLanes,u=e.pingedLanes,g=r&268435455;if(g!==0){var x=g&~l;x!==0?a=Ii(x):(u&=g,u!==0&&(a=Ii(u)))}else g=r&~l,g!==0?a=Ii(g):u!==0&&(a=Ii(u));if(a===0)return 0;if(t!==0&&t!==a&&(t&l)===0&&(l=a&-a,u=t&-t,l>=u||l===16&&(u&4194240)!==0))return t;if((a&4)!==0&&(a|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)r=31-At(t),l=1<<r,a|=e[r],t&=~l;return a}function kg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bg(e,t){for(var r=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes;0<u;){var g=31-At(u),x=1<<g,b=l[g];b===-1?((x&r)===0||(x&a)!==0)&&(l[g]=kg(x,t)):b<=t&&(e.expiredLanes|=x),u&=~x}}function Ra(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ou(){var e=_r;return _r<<=1,(_r&4194240)===0&&(_r=64),e}function Ia(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Di(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-At(t),e[t]=r}function Sg(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-At(r),u=1<<l;t[l]=0,a[l]=-1,e[l]=-1,r&=~u}}function Da(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var a=31-At(r),l=1<<a;l&t|e[a]&t&&(e[a]|=t),r&=~l}}var pe=0;function lu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var cu,La,uu,du,hu,Wa=!1,Hr=[],Kt=null,Xt=null,Zt=null,Li=new Map,Wi=new Map,Jt=[],Ag="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mu(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Li.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wi.delete(t.pointerId)}}function Fi(e,t,r,a,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:r,eventSystemFlags:a,nativeEvent:u,targetContainers:[l]},t!==null&&(t=Xi(t),t!==null&&La(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Cg(e,t,r,a,l){switch(t){case"focusin":return Kt=Fi(Kt,e,t,r,a,l),!0;case"dragenter":return Xt=Fi(Xt,e,t,r,a,l),!0;case"mouseover":return Zt=Fi(Zt,e,t,r,a,l),!0;case"pointerover":var u=l.pointerId;return Li.set(u,Fi(Li.get(u)||null,e,t,r,a,l)),!0;case"gotpointercapture":return u=l.pointerId,Wi.set(u,Fi(Wi.get(u)||null,e,t,r,a,l)),!0}return!1}function fu(e){var t=Sn(e.target);if(t!==null){var r=bn(t);if(r!==null){if(t=r.tag,t===13){if(t=Jc(r),t!==null){e.blockedOn=t,hu(e.priority,function(){uu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=za(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);Ca=a,r.target.dispatchEvent(a),Ca=null}else return t=Xi(r),t!==null&&La(t),e.blockedOn=r,!1;t.shift()}return!0}function pu(e,t,r){Ur(e)&&r.delete(t)}function Tg(){Wa=!1,Kt!==null&&Ur(Kt)&&(Kt=null),Xt!==null&&Ur(Xt)&&(Xt=null),Zt!==null&&Ur(Zt)&&(Zt=null),Li.forEach(pu),Wi.forEach(pu)}function zi(e,t){e.blockedOn===t&&(e.blockedOn=null,Wa||(Wa=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Tg)))}function Oi(e){function t(l){return zi(l,e)}if(0<Hr.length){zi(Hr[0],e);for(var r=1;r<Hr.length;r++){var a=Hr[r];a.blockedOn===e&&(a.blockedOn=null)}}for(Kt!==null&&zi(Kt,e),Xt!==null&&zi(Xt,e),Zt!==null&&zi(Zt,e),Li.forEach(t),Wi.forEach(t),r=0;r<Jt.length;r++)a=Jt[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<Jt.length&&(r=Jt[0],r.blockedOn===null);)fu(r),r.blockedOn===null&&Jt.shift()}var qn=Q.ReactCurrentBatchConfig,qr=!0;function Pg(e,t,r,a){var l=pe,u=qn.transition;qn.transition=null;try{pe=1,Fa(e,t,r,a)}finally{pe=l,qn.transition=u}}function jg(e,t,r,a){var l=pe,u=qn.transition;qn.transition=null;try{pe=4,Fa(e,t,r,a)}finally{pe=l,qn.transition=u}}function Fa(e,t,r,a){if(qr){var l=za(e,t,r,a);if(l===null)to(e,t,a,Qr,r),mu(e,a);else if(Cg(l,e,t,r,a))a.stopPropagation();else if(mu(e,a),t&4&&-1<Ag.indexOf(e)){for(;l!==null;){var u=Xi(l);if(u!==null&&cu(u),u=za(e,t,r,a),u===null&&to(e,t,a,Qr,r),u===l)break;l=u}l!==null&&a.stopPropagation()}else to(e,t,a,null,r)}}var Qr=null;function za(e,t,r,a){if(Qr=null,e=Ta(a),e=Sn(e),e!==null)if(t=bn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Jc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qr=e,null}function gu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pg()){case Ma:return 1;case su:return 4;case zr:case gg:return 16;case au:return 536870912;default:return 16}default:return 16}}var en=null,Oa=null,$r=null;function yu(){if($r)return $r;var e,t=Oa,r=t.length,a,l="value"in en?en.value:en.textContent,u=l.length;for(e=0;e<r&&t[e]===l[e];e++);var g=r-e;for(a=1;a<=g&&t[r-a]===l[u-a];a++);return $r=l.slice(e,1<a?1-a:void 0)}function Gr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yr(){return!0}function vu(){return!1}function ct(e){function t(r,a,l,u,g){this._reactName=r,this._targetInst=l,this.type=a,this.nativeEvent=u,this.target=g,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(r=e[x],this[x]=r?r(u):u[x]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Yr:vu,this.isPropagationStopped=vu,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Yr)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Yr)},persist:function(){},isPersistent:Yr}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_a=ct(Qn),_i=q({},Qn,{view:0,detail:0}),Eg=ct(_i),Ba,Va,Bi,Kr=q({},_i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ua,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bi&&(Bi&&e.type==="mousemove"?(Ba=e.screenX-Bi.screenX,Va=e.screenY-Bi.screenY):Va=Ba=0,Bi=e),Ba)},movementY:function(e){return"movementY"in e?e.movementY:Va}}),wu=ct(Kr),Ng=q({},Kr,{dataTransfer:0}),Mg=ct(Ng),Rg=q({},_i,{relatedTarget:0}),Ha=ct(Rg),Ig=q({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Dg=ct(Ig),Lg=q({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wg=ct(Lg),Fg=q({},Qn,{data:0}),xu=ct(Fg),zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_g={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_g[e])?!!t[e]:!1}function Ua(){return Bg}var Vg=q({},_i,{key:function(e){if(e.key){var t=zg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Og[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ua,charCode:function(e){return e.type==="keypress"?Gr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hg=ct(Vg),Ug=q({},Kr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ku=ct(Ug),qg=q({},_i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ua}),Qg=ct(qg),$g=q({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gg=ct($g),Yg=q({},Kr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kg=ct(Yg),Xg=[9,13,27,32],qa=f&&"CompositionEvent"in window,Vi=null;f&&"documentMode"in document&&(Vi=document.documentMode);var Zg=f&&"TextEvent"in window&&!Vi,bu=f&&(!qa||Vi&&8<Vi&&11>=Vi),Su=" ",Au=!1;function Cu(e,t){switch(e){case"keyup":return Xg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function Jg(e,t){switch(e){case"compositionend":return Tu(t);case"keypress":return t.which!==32?null:(Au=!0,Su);case"textInput":return e=t.data,e===Su&&Au?null:e;default:return null}}function ey(e,t){if($n)return e==="compositionend"||!qa&&Cu(e,t)?(e=yu(),$r=Oa=en=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bu&&t.locale!=="ko"?null:t.data;default:return null}}var ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ty[e.type]:t==="textarea"}function ju(e,t,r,a){Gc(a),t=ts(t,"onChange"),0<t.length&&(r=new _a("onChange","change",null,r,a),e.push({event:r,listeners:t}))}var Hi=null,Ui=null;function ny(e){Qu(e,0)}function Xr(e){var t=Zn(e);if(Wc(t))return e}function iy(e,t){if(e==="change")return t}var Eu=!1;if(f){var Qa;if(f){var $a="oninput"in document;if(!$a){var Nu=document.createElement("div");Nu.setAttribute("oninput","return;"),$a=typeof Nu.oninput=="function"}Qa=$a}else Qa=!1;Eu=Qa&&(!document.documentMode||9<document.documentMode)}function Mu(){Hi&&(Hi.detachEvent("onpropertychange",Ru),Ui=Hi=null)}function Ru(e){if(e.propertyName==="value"&&Xr(Ui)){var t=[];ju(t,Ui,e,Ta(e)),Zc(ny,t)}}function ry(e,t,r){e==="focusin"?(Mu(),Hi=t,Ui=r,Hi.attachEvent("onpropertychange",Ru)):e==="focusout"&&Mu()}function sy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xr(Ui)}function ay(e,t){if(e==="click")return Xr(t)}function oy(e,t){if(e==="input"||e==="change")return Xr(t)}function ly(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:ly;function qi(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var l=r[a];if(!p.call(t,l)||!Ct(e[l],t[l]))return!1}return!0}function Iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Du(e,t){var r=Iu(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=t&&a>=t)return{node:r,offset:t-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Iu(r)}}function Lu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wu(){for(var e=window,t=Dr();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Dr(e.document)}return t}function Ga(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cy(e){var t=Wu(),r=e.focusedElem,a=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Lu(r.ownerDocument.documentElement,r)){if(a!==null&&Ga(r)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,u=Math.min(a.start,l);a=a.end===void 0?u:Math.min(a.end,l),!e.extend&&u>a&&(l=a,a=u,u=l),l=Du(r,u);var g=Du(r,a);l&&g&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),u>a?(e.addRange(t),e.extend(g.node,g.offset)):(t.setEnd(g.node,g.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uy=f&&"documentMode"in document&&11>=document.documentMode,Gn=null,Ya=null,Qi=null,Ka=!1;function Fu(e,t,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ka||Gn==null||Gn!==Dr(a)||(a=Gn,"selectionStart"in a&&Ga(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Qi&&qi(Qi,a)||(Qi=a,a=ts(Ya,"onSelect"),0<a.length&&(t=new _a("onSelect","select",null,t,r),e.push({event:t,listeners:a}),t.target=Gn)))}function Zr(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Yn={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionend:Zr("Transition","TransitionEnd")},Xa={},zu={};f&&(zu=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function Jr(e){if(Xa[e])return Xa[e];if(!Yn[e])return e;var t=Yn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in zu)return Xa[e]=t[r];return e}var Ou=Jr("animationend"),_u=Jr("animationiteration"),Bu=Jr("animationstart"),Vu=Jr("transitionend"),Hu=new Map,Uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){Hu.set(e,t),h(t,[e])}for(var Za=0;Za<Uu.length;Za++){var Ja=Uu[Za],dy=Ja.toLowerCase(),hy=Ja[0].toUpperCase()+Ja.slice(1);tn(dy,"on"+hy)}tn(Ou,"onAnimationEnd"),tn(_u,"onAnimationIteration"),tn(Bu,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(Vu,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),my=new Set("cancel close invalid load scroll toggle".split(" ").concat($i));function qu(e,t,r){var a=e.type||"unknown-event";e.currentTarget=r,dg(a,t,void 0,e),e.currentTarget=null}function Qu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],l=a.event;a=a.listeners;e:{var u=void 0;if(t)for(var g=a.length-1;0<=g;g--){var x=a[g],b=x.instance,E=x.currentTarget;if(x=x.listener,b!==u&&l.isPropagationStopped())break e;qu(l,x,E),u=b}else for(g=0;g<a.length;g++){if(x=a[g],b=x.instance,E=x.currentTarget,x=x.listener,b!==u&&l.isPropagationStopped())break e;qu(l,x,E),u=b}}}if(Fr)throw e=Na,Fr=!1,Na=null,e}function we(e,t){var r=t[oo];r===void 0&&(r=t[oo]=new Set);var a=e+"__bubble";r.has(a)||($u(t,e,2,!1),r.add(a))}function eo(e,t,r){var a=0;t&&(a|=4),$u(r,e,a,t)}var es="_reactListening"+Math.random().toString(36).slice(2);function Gi(e){if(!e[es]){e[es]=!0,o.forEach(function(r){r!=="selectionchange"&&(my.has(r)||eo(r,!1,e),eo(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[es]||(t[es]=!0,eo("selectionchange",!1,t))}}function $u(e,t,r,a){switch(gu(t)){case 1:var l=Pg;break;case 4:l=jg;break;default:l=Fa}r=l.bind(null,t,r,e),l=void 0,!Ea||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function to(e,t,r,a,l){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var g=a.tag;if(g===3||g===4){var x=a.stateNode.containerInfo;if(x===l||x.nodeType===8&&x.parentNode===l)break;if(g===4)for(g=a.return;g!==null;){var b=g.tag;if((b===3||b===4)&&(b=g.stateNode.containerInfo,b===l||b.nodeType===8&&b.parentNode===l))return;g=g.return}for(;x!==null;){if(g=Sn(x),g===null)return;if(b=g.tag,b===5||b===6){a=u=g;continue e}x=x.parentNode}}a=a.return}Zc(function(){var E=u,F=Ta(r),z=[];e:{var D=Hu.get(e);if(D!==void 0){var U=_a,G=e;switch(e){case"keypress":if(Gr(r)===0)break e;case"keydown":case"keyup":U=Hg;break;case"focusin":G="focus",U=Ha;break;case"focusout":G="blur",U=Ha;break;case"beforeblur":case"afterblur":U=Ha;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Mg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=Qg;break;case Ou:case _u:case Bu:U=Dg;break;case Vu:U=Gg;break;case"scroll":U=Eg;break;case"wheel":U=Kg;break;case"copy":case"cut":case"paste":U=Wg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=ku}var Y=(t&4)!==0,Me=!Y&&e==="scroll",C=Y?D!==null?D+"Capture":null:D;Y=[];for(var S=E,T;S!==null;){T=S;var _=T.stateNode;if(T.tag===5&&_!==null&&(T=_,C!==null&&(_=Ni(S,C),_!=null&&Y.push(Yi(S,_,T)))),Me)break;S=S.return}0<Y.length&&(D=new U(D,G,null,r,F),z.push({event:D,listeners:Y}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",D&&r!==Ca&&(G=r.relatedTarget||r.fromElement)&&(Sn(G)||G[Ot]))break e;if((U||D)&&(D=F.window===F?F:(D=F.ownerDocument)?D.defaultView||D.parentWindow:window,U?(G=r.relatedTarget||r.toElement,U=E,G=G?Sn(G):null,G!==null&&(Me=bn(G),G!==Me||G.tag!==5&&G.tag!==6)&&(G=null)):(U=null,G=E),U!==G)){if(Y=wu,_="onMouseLeave",C="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(Y=ku,_="onPointerLeave",C="onPointerEnter",S="pointer"),Me=U==null?D:Zn(U),T=G==null?D:Zn(G),D=new Y(_,S+"leave",U,r,F),D.target=Me,D.relatedTarget=T,_=null,Sn(F)===E&&(Y=new Y(C,S+"enter",G,r,F),Y.target=T,Y.relatedTarget=Me,_=Y),Me=_,U&&G)t:{for(Y=U,C=G,S=0,T=Y;T;T=Kn(T))S++;for(T=0,_=C;_;_=Kn(_))T++;for(;0<S-T;)Y=Kn(Y),S--;for(;0<T-S;)C=Kn(C),T--;for(;S--;){if(Y===C||C!==null&&Y===C.alternate)break t;Y=Kn(Y),C=Kn(C)}Y=null}else Y=null;U!==null&&Gu(z,D,U,Y,!1),G!==null&&Me!==null&&Gu(z,Me,G,Y,!0)}}e:{if(D=E?Zn(E):window,U=D.nodeName&&D.nodeName.toLowerCase(),U==="select"||U==="input"&&D.type==="file")var K=iy;else if(Pu(D))if(Eu)K=oy;else{K=sy;var J=ry}else(U=D.nodeName)&&U.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(K=ay);if(K&&(K=K(e,E))){ju(z,K,r,F);break e}J&&J(e,D,E),e==="focusout"&&(J=D._wrapperState)&&J.controlled&&D.type==="number"&&xa(D,"number",D.value)}switch(J=E?Zn(E):window,e){case"focusin":(Pu(J)||J.contentEditable==="true")&&(Gn=J,Ya=E,Qi=null);break;case"focusout":Qi=Ya=Gn=null;break;case"mousedown":Ka=!0;break;case"contextmenu":case"mouseup":case"dragend":Ka=!1,Fu(z,r,F);break;case"selectionchange":if(uy)break;case"keydown":case"keyup":Fu(z,r,F)}var ee;if(qa)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else $n?Cu(e,r)&&(ie="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ie="onCompositionStart");ie&&(bu&&r.locale!=="ko"&&($n||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&$n&&(ee=yu()):(en=F,Oa="value"in en?en.value:en.textContent,$n=!0)),J=ts(E,ie),0<J.length&&(ie=new xu(ie,e,null,r,F),z.push({event:ie,listeners:J}),ee?ie.data=ee:(ee=Tu(r),ee!==null&&(ie.data=ee)))),(ee=Zg?Jg(e,r):ey(e,r))&&(E=ts(E,"onBeforeInput"),0<E.length&&(F=new xu("onBeforeInput","beforeinput",null,r,F),z.push({event:F,listeners:E}),F.data=ee))}Qu(z,t)})}function Yi(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ts(e,t){for(var r=t+"Capture",a=[];e!==null;){var l=e,u=l.stateNode;l.tag===5&&u!==null&&(l=u,u=Ni(e,r),u!=null&&a.unshift(Yi(e,u,l)),u=Ni(e,t),u!=null&&a.push(Yi(e,u,l))),e=e.return}return a}function Kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gu(e,t,r,a,l){for(var u=t._reactName,g=[];r!==null&&r!==a;){var x=r,b=x.alternate,E=x.stateNode;if(b!==null&&b===a)break;x.tag===5&&E!==null&&(x=E,l?(b=Ni(r,u),b!=null&&g.unshift(Yi(r,b,x))):l||(b=Ni(r,u),b!=null&&g.push(Yi(r,b,x)))),r=r.return}g.length!==0&&e.push({event:t,listeners:g})}var fy=/\r\n?/g,py=/\u0000|\uFFFD/g;function Yu(e){return(typeof e=="string"?e:""+e).replace(fy,`
`).replace(py,"")}function ns(e,t,r){if(t=Yu(t),Yu(e)!==t&&r)throw Error(s(425))}function is(){}var no=null,io=null;function ro(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var so=typeof setTimeout=="function"?setTimeout:void 0,gy=typeof clearTimeout=="function"?clearTimeout:void 0,Ku=typeof Promise=="function"?Promise:void 0,yy=typeof queueMicrotask=="function"?queueMicrotask:typeof Ku<"u"?function(e){return Ku.resolve(null).then(e).catch(vy)}:so;function vy(e){setTimeout(function(){throw e})}function ao(e,t){var r=t,a=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(a===0){e.removeChild(l),Oi(t);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=l}while(r);Oi(t)}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),It="__reactFiber$"+Xn,Ki="__reactProps$"+Xn,Ot="__reactContainer$"+Xn,oo="__reactEvents$"+Xn,wy="__reactListeners$"+Xn,xy="__reactHandles$"+Xn;function Sn(e){var t=e[It];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ot]||r[It]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Xu(e);e!==null;){if(r=e[It])return r;e=Xu(e)}return t}e=r,r=e.parentNode}return null}function Xi(e){return e=e[It]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function rs(e){return e[Ki]||null}var lo=[],Jn=-1;function rn(e){return{current:e}}function xe(e){0>Jn||(e.current=lo[Jn],lo[Jn]=null,Jn--)}function ye(e,t){Jn++,lo[Jn]=e.current,e.current=t}var sn={},He=rn(sn),tt=rn(!1),An=sn;function ei(e,t){var r=e.type.contextTypes;if(!r)return sn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var l={},u;for(u in r)l[u]=t[u];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function nt(e){return e=e.childContextTypes,e!=null}function ss(){xe(tt),xe(He)}function Zu(e,t,r){if(He.current!==sn)throw Error(s(168));ye(He,t),ye(tt,r)}function Ju(e,t,r){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var l in a)if(!(l in t))throw Error(s(108,ge(e)||"Unknown",l));return q({},r,a)}function as(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,An=He.current,ye(He,e),ye(tt,tt.current),!0}function ed(e,t,r){var a=e.stateNode;if(!a)throw Error(s(169));r?(e=Ju(e,t,An),a.__reactInternalMemoizedMergedChildContext=e,xe(tt),xe(He),ye(He,e)):xe(tt),ye(tt,r)}var _t=null,os=!1,co=!1;function td(e){_t===null?_t=[e]:_t.push(e)}function ky(e){os=!0,td(e)}function an(){if(!co&&_t!==null){co=!0;var e=0,t=pe;try{var r=_t;for(pe=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}_t=null,os=!1}catch(l){throw _t!==null&&(_t=_t.slice(e+1)),iu(Ma,an),l}finally{pe=t,co=!1}}return null}var ti=[],ni=0,ls=null,cs=0,pt=[],gt=0,Cn=null,Bt=1,Vt="";function Tn(e,t){ti[ni++]=cs,ti[ni++]=ls,ls=e,cs=t}function nd(e,t,r){pt[gt++]=Bt,pt[gt++]=Vt,pt[gt++]=Cn,Cn=e;var a=Bt;e=Vt;var l=32-At(a)-1;a&=~(1<<l),r+=1;var u=32-At(t)+l;if(30<u){var g=l-l%5;u=(a&(1<<g)-1).toString(32),a>>=g,l-=g,Bt=1<<32-At(t)+l|r<<l|a,Vt=u+e}else Bt=1<<u|r<<l|a,Vt=e}function uo(e){e.return!==null&&(Tn(e,1),nd(e,1,0))}function ho(e){for(;e===ls;)ls=ti[--ni],ti[ni]=null,cs=ti[--ni],ti[ni]=null;for(;e===Cn;)Cn=pt[--gt],pt[gt]=null,Vt=pt[--gt],pt[gt]=null,Bt=pt[--gt],pt[gt]=null}var ut=null,dt=null,Se=!1,Tt=null;function id(e,t){var r=xt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function rd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,dt=nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Cn!==null?{id:Bt,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=xt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ut=e,dt=null,!0):!1;default:return!1}}function mo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fo(e){if(Se){var t=dt;if(t){var r=t;if(!rd(e,t)){if(mo(e))throw Error(s(418));t=nn(r.nextSibling);var a=ut;t&&rd(e,t)?id(a,r):(e.flags=e.flags&-4097|2,Se=!1,ut=e)}}else{if(mo(e))throw Error(s(418));e.flags=e.flags&-4097|2,Se=!1,ut=e}}}function sd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function us(e){if(e!==ut)return!1;if(!Se)return sd(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ro(e.type,e.memoizedProps)),t&&(t=dt)){if(mo(e))throw ad(),Error(s(418));for(;t;)id(e,t),t=nn(t.nextSibling)}if(sd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){dt=nn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ut?nn(e.stateNode.nextSibling):null;return!0}function ad(){for(var e=dt;e;)e=nn(e.nextSibling)}function ii(){dt=ut=null,Se=!1}function po(e){Tt===null?Tt=[e]:Tt.push(e)}var by=Q.ReactCurrentBatchConfig;function Zi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(s(309));var a=r.stateNode}if(!a)throw Error(s(147,e));var l=a,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(g){var x=l.refs;g===null?delete x[u]:x[u]=g},t._stringRef=u,t)}if(typeof e!="string")throw Error(s(284));if(!r._owner)throw Error(s(290,e))}return e}function ds(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function od(e){var t=e._init;return t(e._payload)}function ld(e){function t(C,S){if(e){var T=C.deletions;T===null?(C.deletions=[S],C.flags|=16):T.push(S)}}function r(C,S){if(!e)return null;for(;S!==null;)t(C,S),S=S.sibling;return null}function a(C,S){for(C=new Map;S!==null;)S.key!==null?C.set(S.key,S):C.set(S.index,S),S=S.sibling;return C}function l(C,S){return C=fn(C,S),C.index=0,C.sibling=null,C}function u(C,S,T){return C.index=T,e?(T=C.alternate,T!==null?(T=T.index,T<S?(C.flags|=2,S):T):(C.flags|=2,S)):(C.flags|=1048576,S)}function g(C){return e&&C.alternate===null&&(C.flags|=2),C}function x(C,S,T,_){return S===null||S.tag!==6?(S=al(T,C.mode,_),S.return=C,S):(S=l(S,T),S.return=C,S)}function b(C,S,T,_){var K=T.type;return K===le?F(C,S,T.props.children,_,T.key):S!==null&&(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ke&&od(K)===S.type)?(_=l(S,T.props),_.ref=Zi(C,S,T),_.return=C,_):(_=Ls(T.type,T.key,T.props,null,C.mode,_),_.ref=Zi(C,S,T),_.return=C,_)}function E(C,S,T,_){return S===null||S.tag!==4||S.stateNode.containerInfo!==T.containerInfo||S.stateNode.implementation!==T.implementation?(S=ol(T,C.mode,_),S.return=C,S):(S=l(S,T.children||[]),S.return=C,S)}function F(C,S,T,_,K){return S===null||S.tag!==7?(S=Dn(T,C.mode,_,K),S.return=C,S):(S=l(S,T),S.return=C,S)}function z(C,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return S=al(""+S,C.mode,T),S.return=C,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case H:return T=Ls(S.type,S.key,S.props,null,C.mode,T),T.ref=Zi(C,null,S),T.return=C,T;case te:return S=ol(S,C.mode,T),S.return=C,S;case Ke:var _=S._init;return z(C,_(S._payload),T)}if(Pi(S)||Z(S))return S=Dn(S,C.mode,T,null),S.return=C,S;ds(C,S)}return null}function D(C,S,T,_){var K=S!==null?S.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return K!==null?null:x(C,S,""+T,_);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case H:return T.key===K?b(C,S,T,_):null;case te:return T.key===K?E(C,S,T,_):null;case Ke:return K=T._init,D(C,S,K(T._payload),_)}if(Pi(T)||Z(T))return K!==null?null:F(C,S,T,_,null);ds(C,T)}return null}function U(C,S,T,_,K){if(typeof _=="string"&&_!==""||typeof _=="number")return C=C.get(T)||null,x(S,C,""+_,K);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case H:return C=C.get(_.key===null?T:_.key)||null,b(S,C,_,K);case te:return C=C.get(_.key===null?T:_.key)||null,E(S,C,_,K);case Ke:var J=_._init;return U(C,S,T,J(_._payload),K)}if(Pi(_)||Z(_))return C=C.get(T)||null,F(S,C,_,K,null);ds(S,_)}return null}function G(C,S,T,_){for(var K=null,J=null,ee=S,ie=S=0,Oe=null;ee!==null&&ie<T.length;ie++){ee.index>ie?(Oe=ee,ee=null):Oe=ee.sibling;var me=D(C,ee,T[ie],_);if(me===null){ee===null&&(ee=Oe);break}e&&ee&&me.alternate===null&&t(C,ee),S=u(me,S,ie),J===null?K=me:J.sibling=me,J=me,ee=Oe}if(ie===T.length)return r(C,ee),Se&&Tn(C,ie),K;if(ee===null){for(;ie<T.length;ie++)ee=z(C,T[ie],_),ee!==null&&(S=u(ee,S,ie),J===null?K=ee:J.sibling=ee,J=ee);return Se&&Tn(C,ie),K}for(ee=a(C,ee);ie<T.length;ie++)Oe=U(ee,C,ie,T[ie],_),Oe!==null&&(e&&Oe.alternate!==null&&ee.delete(Oe.key===null?ie:Oe.key),S=u(Oe,S,ie),J===null?K=Oe:J.sibling=Oe,J=Oe);return e&&ee.forEach(function(pn){return t(C,pn)}),Se&&Tn(C,ie),K}function Y(C,S,T,_){var K=Z(T);if(typeof K!="function")throw Error(s(150));if(T=K.call(T),T==null)throw Error(s(151));for(var J=K=null,ee=S,ie=S=0,Oe=null,me=T.next();ee!==null&&!me.done;ie++,me=T.next()){ee.index>ie?(Oe=ee,ee=null):Oe=ee.sibling;var pn=D(C,ee,me.value,_);if(pn===null){ee===null&&(ee=Oe);break}e&&ee&&pn.alternate===null&&t(C,ee),S=u(pn,S,ie),J===null?K=pn:J.sibling=pn,J=pn,ee=Oe}if(me.done)return r(C,ee),Se&&Tn(C,ie),K;if(ee===null){for(;!me.done;ie++,me=T.next())me=z(C,me.value,_),me!==null&&(S=u(me,S,ie),J===null?K=me:J.sibling=me,J=me);return Se&&Tn(C,ie),K}for(ee=a(C,ee);!me.done;ie++,me=T.next())me=U(ee,C,ie,me.value,_),me!==null&&(e&&me.alternate!==null&&ee.delete(me.key===null?ie:me.key),S=u(me,S,ie),J===null?K=me:J.sibling=me,J=me);return e&&ee.forEach(function(t0){return t(C,t0)}),Se&&Tn(C,ie),K}function Me(C,S,T,_){if(typeof T=="object"&&T!==null&&T.type===le&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case H:e:{for(var K=T.key,J=S;J!==null;){if(J.key===K){if(K=T.type,K===le){if(J.tag===7){r(C,J.sibling),S=l(J,T.props.children),S.return=C,C=S;break e}}else if(J.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ke&&od(K)===J.type){r(C,J.sibling),S=l(J,T.props),S.ref=Zi(C,J,T),S.return=C,C=S;break e}r(C,J);break}else t(C,J);J=J.sibling}T.type===le?(S=Dn(T.props.children,C.mode,_,T.key),S.return=C,C=S):(_=Ls(T.type,T.key,T.props,null,C.mode,_),_.ref=Zi(C,S,T),_.return=C,C=_)}return g(C);case te:e:{for(J=T.key;S!==null;){if(S.key===J)if(S.tag===4&&S.stateNode.containerInfo===T.containerInfo&&S.stateNode.implementation===T.implementation){r(C,S.sibling),S=l(S,T.children||[]),S.return=C,C=S;break e}else{r(C,S);break}else t(C,S);S=S.sibling}S=ol(T,C.mode,_),S.return=C,C=S}return g(C);case Ke:return J=T._init,Me(C,S,J(T._payload),_)}if(Pi(T))return G(C,S,T,_);if(Z(T))return Y(C,S,T,_);ds(C,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,S!==null&&S.tag===6?(r(C,S.sibling),S=l(S,T),S.return=C,C=S):(r(C,S),S=al(T,C.mode,_),S.return=C,C=S),g(C)):r(C,S)}return Me}var ri=ld(!0),cd=ld(!1),hs=rn(null),ms=null,si=null,go=null;function yo(){go=si=ms=null}function vo(e){var t=hs.current;xe(hs),e._currentValue=t}function wo(e,t,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===r)break;e=e.return}}function ai(e,t){ms=e,go=si=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(it=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(go!==e)if(e={context:e,memoizedValue:t,next:null},si===null){if(ms===null)throw Error(s(308));si=e,ms.dependencies={lanes:0,firstContext:e}}else si=si.next=e;return t}var Pn=null;function xo(e){Pn===null?Pn=[e]:Pn.push(e)}function ud(e,t,r,a){var l=t.interleaved;return l===null?(r.next=r,xo(t)):(r.next=l.next,l.next=r),t.interleaved=r,Ht(e,a)}function Ht(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var on=!1;function ko(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ln(e,t,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ue&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,Ht(e,r)}return l=a.interleaved,l===null?(t.next=t,xo(a)):(t.next=l.next,l.next=t),a.interleaved=t,Ht(e,r)}function fs(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,Da(e,r)}}function hd(e,t){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var l=null,u=null;if(r=r.firstBaseUpdate,r!==null){do{var g={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};u===null?l=u=g:u=u.next=g,r=r.next}while(r!==null);u===null?l=u=t:u=u.next=t}else l=u=t;r={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ps(e,t,r,a){var l=e.updateQueue;on=!1;var u=l.firstBaseUpdate,g=l.lastBaseUpdate,x=l.shared.pending;if(x!==null){l.shared.pending=null;var b=x,E=b.next;b.next=null,g===null?u=E:g.next=E,g=b;var F=e.alternate;F!==null&&(F=F.updateQueue,x=F.lastBaseUpdate,x!==g&&(x===null?F.firstBaseUpdate=E:x.next=E,F.lastBaseUpdate=b))}if(u!==null){var z=l.baseState;g=0,F=E=b=null,x=u;do{var D=x.lane,U=x.eventTime;if((a&D)===D){F!==null&&(F=F.next={eventTime:U,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var G=e,Y=x;switch(D=t,U=r,Y.tag){case 1:if(G=Y.payload,typeof G=="function"){z=G.call(U,z,D);break e}z=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=Y.payload,D=typeof G=="function"?G.call(U,z,D):G,D==null)break e;z=q({},z,D);break e;case 2:on=!0}}x.callback!==null&&x.lane!==0&&(e.flags|=64,D=l.effects,D===null?l.effects=[x]:D.push(x))}else U={eventTime:U,lane:D,tag:x.tag,payload:x.payload,callback:x.callback,next:null},F===null?(E=F=U,b=z):F=F.next=U,g|=D;if(x=x.next,x===null){if(x=l.shared.pending,x===null)break;D=x,x=D.next,D.next=null,l.lastBaseUpdate=D,l.shared.pending=null}}while(!0);if(F===null&&(b=z),l.baseState=b,l.firstBaseUpdate=E,l.lastBaseUpdate=F,t=l.shared.interleaved,t!==null){l=t;do g|=l.lane,l=l.next;while(l!==t)}else u===null&&(l.shared.lanes=0);Nn|=g,e.lanes=g,e.memoizedState=z}}function md(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],l=a.callback;if(l!==null){if(a.callback=null,a=r,typeof l!="function")throw Error(s(191,l));l.call(a)}}}var Ji={},Dt=rn(Ji),er=rn(Ji),tr=rn(Ji);function jn(e){if(e===Ji)throw Error(s(174));return e}function bo(e,t){switch(ye(tr,t),ye(er,e),ye(Dt,Ji),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ba(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ba(t,e)}xe(Dt),ye(Dt,t)}function oi(){xe(Dt),xe(er),xe(tr)}function fd(e){jn(tr.current);var t=jn(Dt.current),r=ba(t,e.type);t!==r&&(ye(er,e),ye(Dt,r))}function So(e){er.current===e&&(xe(Dt),xe(er))}var Ae=rn(0);function gs(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ao=[];function Co(){for(var e=0;e<Ao.length;e++)Ao[e]._workInProgressVersionPrimary=null;Ao.length=0}var ys=Q.ReactCurrentDispatcher,To=Q.ReactCurrentBatchConfig,En=0,Ce=null,De=null,Fe=null,vs=!1,nr=!1,ir=0,Sy=0;function Ue(){throw Error(s(321))}function Po(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ct(e[r],t[r]))return!1;return!0}function jo(e,t,r,a,l,u){if(En=u,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ys.current=e===null||e.memoizedState===null?Py:jy,e=r(a,l),nr){u=0;do{if(nr=!1,ir=0,25<=u)throw Error(s(301));u+=1,Fe=De=null,t.updateQueue=null,ys.current=Ey,e=r(a,l)}while(nr)}if(ys.current=ks,t=De!==null&&De.next!==null,En=0,Fe=De=Ce=null,vs=!1,t)throw Error(s(300));return e}function Eo(){var e=ir!==0;return ir=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Ce.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function vt(){if(De===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Fe===null?Ce.memoizedState:Fe.next;if(t!==null)Fe=t,De=e;else{if(e===null)throw Error(s(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Fe===null?Ce.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function rr(e,t){return typeof t=="function"?t(e):t}function No(e){var t=vt(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var a=De,l=a.baseQueue,u=r.pending;if(u!==null){if(l!==null){var g=l.next;l.next=u.next,u.next=g}a.baseQueue=l=u,r.pending=null}if(l!==null){u=l.next,a=a.baseState;var x=g=null,b=null,E=u;do{var F=E.lane;if((En&F)===F)b!==null&&(b=b.next={lane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),a=E.hasEagerState?E.eagerState:e(a,E.action);else{var z={lane:F,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null};b===null?(x=b=z,g=a):b=b.next=z,Ce.lanes|=F,Nn|=F}E=E.next}while(E!==null&&E!==u);b===null?g=a:b.next=x,Ct(a,t.memoizedState)||(it=!0),t.memoizedState=a,t.baseState=g,t.baseQueue=b,r.lastRenderedState=a}if(e=r.interleaved,e!==null){l=e;do u=l.lane,Ce.lanes|=u,Nn|=u,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Mo(e){var t=vt(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var a=r.dispatch,l=r.pending,u=t.memoizedState;if(l!==null){r.pending=null;var g=l=l.next;do u=e(u,g.action),g=g.next;while(g!==l);Ct(u,t.memoizedState)||(it=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),r.lastRenderedState=u}return[u,a]}function pd(){}function gd(e,t){var r=Ce,a=vt(),l=t(),u=!Ct(a.memoizedState,l);if(u&&(a.memoizedState=l,it=!0),a=a.queue,Ro(wd.bind(null,r,a,e),[e]),a.getSnapshot!==t||u||Fe!==null&&Fe.memoizedState.tag&1){if(r.flags|=2048,sr(9,vd.bind(null,r,a,l,t),void 0,null),ze===null)throw Error(s(349));(En&30)!==0||yd(r,t,l)}return l}function yd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function vd(e,t,r,a){t.value=r,t.getSnapshot=a,xd(t)&&kd(e)}function wd(e,t,r){return r(function(){xd(t)&&kd(e)})}function xd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ct(e,r)}catch{return!0}}function kd(e){var t=Ht(e,1);t!==null&&Nt(t,e,1,-1)}function bd(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},t.queue=e,e=e.dispatch=Ty.bind(null,Ce,e),[t.memoizedState,e]}function sr(e,t,r,a){return e={tag:e,create:t,destroy:r,deps:a,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,t.lastEffect=e)),e}function Sd(){return vt().memoizedState}function ws(e,t,r,a){var l=Lt();Ce.flags|=e,l.memoizedState=sr(1|t,r,void 0,a===void 0?null:a)}function xs(e,t,r,a){var l=vt();a=a===void 0?null:a;var u=void 0;if(De!==null){var g=De.memoizedState;if(u=g.destroy,a!==null&&Po(a,g.deps)){l.memoizedState=sr(t,r,u,a);return}}Ce.flags|=e,l.memoizedState=sr(1|t,r,u,a)}function Ad(e,t){return ws(8390656,8,e,t)}function Ro(e,t){return xs(2048,8,e,t)}function Cd(e,t){return xs(4,2,e,t)}function Td(e,t){return xs(4,4,e,t)}function Pd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jd(e,t,r){return r=r!=null?r.concat([e]):null,xs(4,4,Pd.bind(null,t,e),r)}function Io(){}function Ed(e,t){var r=vt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&Po(t,a[1])?a[0]:(r.memoizedState=[e,t],e)}function Nd(e,t){var r=vt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&Po(t,a[1])?a[0]:(e=e(),r.memoizedState=[e,t],e)}function Md(e,t,r){return(En&21)===0?(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=r):(Ct(r,t)||(r=ou(),Ce.lanes|=r,Nn|=r,e.baseState=!0),t)}function Ay(e,t){var r=pe;pe=r!==0&&4>r?r:4,e(!0);var a=To.transition;To.transition={};try{e(!1),t()}finally{pe=r,To.transition=a}}function Rd(){return vt().memoizedState}function Cy(e,t,r){var a=hn(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},Id(e))Dd(t,r);else if(r=ud(e,t,r,a),r!==null){var l=Ze();Nt(r,e,a,l),Ld(r,t,a)}}function Ty(e,t,r){var a=hn(e),l={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(Id(e))Dd(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var g=t.lastRenderedState,x=u(g,r);if(l.hasEagerState=!0,l.eagerState=x,Ct(x,g)){var b=t.interleaved;b===null?(l.next=l,xo(t)):(l.next=b.next,b.next=l),t.interleaved=l;return}}catch{}finally{}r=ud(e,t,l,a),r!==null&&(l=Ze(),Nt(r,e,a,l),Ld(r,t,a))}}function Id(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function Dd(e,t){nr=vs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Ld(e,t,r){if((r&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,Da(e,r)}}var ks={readContext:yt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},Py={readContext:yt,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:Ad,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ws(4194308,4,Pd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ws(4194308,4,e,t)},useInsertionEffect:function(e,t){return ws(4,2,e,t)},useMemo:function(e,t){var r=Lt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var a=Lt();return t=r!==void 0?r(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Cy.bind(null,Ce,e),[a.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:bd,useDebugValue:Io,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=bd(!1),t=e[0];return e=Ay.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var a=Ce,l=Lt();if(Se){if(r===void 0)throw Error(s(407));r=r()}else{if(r=t(),ze===null)throw Error(s(349));(En&30)!==0||yd(a,t,r)}l.memoizedState=r;var u={value:r,getSnapshot:t};return l.queue=u,Ad(wd.bind(null,a,u,e),[e]),a.flags|=2048,sr(9,vd.bind(null,a,u,r,t),void 0,null),r},useId:function(){var e=Lt(),t=ze.identifierPrefix;if(Se){var r=Vt,a=Bt;r=(a&~(1<<32-At(a)-1)).toString(32)+r,t=":"+t+"R"+r,r=ir++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Sy++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jy={readContext:yt,useCallback:Ed,useContext:yt,useEffect:Ro,useImperativeHandle:jd,useInsertionEffect:Cd,useLayoutEffect:Td,useMemo:Nd,useReducer:No,useRef:Sd,useState:function(){return No(rr)},useDebugValue:Io,useDeferredValue:function(e){var t=vt();return Md(t,De.memoizedState,e)},useTransition:function(){var e=No(rr)[0],t=vt().memoizedState;return[e,t]},useMutableSource:pd,useSyncExternalStore:gd,useId:Rd,unstable_isNewReconciler:!1},Ey={readContext:yt,useCallback:Ed,useContext:yt,useEffect:Ro,useImperativeHandle:jd,useInsertionEffect:Cd,useLayoutEffect:Td,useMemo:Nd,useReducer:Mo,useRef:Sd,useState:function(){return Mo(rr)},useDebugValue:Io,useDeferredValue:function(e){var t=vt();return De===null?t.memoizedState=e:Md(t,De.memoizedState,e)},useTransition:function(){var e=Mo(rr)[0],t=vt().memoizedState;return[e,t]},useMutableSource:pd,useSyncExternalStore:gd,useId:Rd,unstable_isNewReconciler:!1};function Pt(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Do(e,t,r,a){t=e.memoizedState,r=r(a,t),r=r==null?t:q({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var bs={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var a=Ze(),l=hn(e),u=Ut(a,l);u.payload=t,r!=null&&(u.callback=r),t=ln(e,u,l),t!==null&&(Nt(t,e,l,a),fs(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var a=Ze(),l=hn(e),u=Ut(a,l);u.tag=1,u.payload=t,r!=null&&(u.callback=r),t=ln(e,u,l),t!==null&&(Nt(t,e,l,a),fs(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ze(),a=hn(e),l=Ut(r,a);l.tag=2,t!=null&&(l.callback=t),t=ln(e,l,a),t!==null&&(Nt(t,e,a,r),fs(t,e,a))}};function Wd(e,t,r,a,l,u,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,g):t.prototype&&t.prototype.isPureReactComponent?!qi(r,a)||!qi(l,u):!0}function Fd(e,t,r){var a=!1,l=sn,u=t.contextType;return typeof u=="object"&&u!==null?u=yt(u):(l=nt(t)?An:He.current,a=t.contextTypes,u=(a=a!=null)?ei(e,l):sn),t=new t(r,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bs,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=u),t}function zd(e,t,r,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,a),t.state!==e&&bs.enqueueReplaceState(t,t.state,null)}function Lo(e,t,r,a){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},ko(e);var u=t.contextType;typeof u=="object"&&u!==null?l.context=yt(u):(u=nt(t)?An:He.current,l.context=ei(e,u)),l.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Do(e,t,u,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&bs.enqueueReplaceState(l,l.state,null),ps(e,r,l,a),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function li(e,t){try{var r="",a=t;do r+=de(a),a=a.return;while(a);var l=r}catch(u){l=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:l,digest:null}}function Wo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Fo(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Ny=typeof WeakMap=="function"?WeakMap:Map;function Od(e,t,r){r=Ut(-1,r),r.tag=3,r.payload={element:null};var a=t.value;return r.callback=function(){Es||(Es=!0,Zo=a),Fo(e,t)},r}function _d(e,t,r){r=Ut(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var l=t.value;r.payload=function(){return a(l)},r.callback=function(){Fo(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(r.callback=function(){Fo(e,t),typeof a!="function"&&(un===null?un=new Set([this]):un.add(this));var g=t.stack;this.componentDidCatch(t.value,{componentStack:g!==null?g:""})}),r}function Bd(e,t,r){var a=e.pingCache;if(a===null){a=e.pingCache=new Ny;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(r)||(l.add(r),e=Uy.bind(null,e,t,r),t.then(e,e))}function Vd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hd(e,t,r,a,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ut(-1,1),t.tag=2,ln(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var My=Q.ReactCurrentOwner,it=!1;function Xe(e,t,r,a){t.child=e===null?cd(t,null,r,a):ri(t,e.child,r,a)}function Ud(e,t,r,a,l){r=r.render;var u=t.ref;return ai(t,l),a=jo(e,t,r,a,u,l),r=Eo(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,qt(e,t,l)):(Se&&r&&uo(t),t.flags|=1,Xe(e,t,a,l),t.child)}function qd(e,t,r,a,l){if(e===null){var u=r.type;return typeof u=="function"&&!sl(u)&&u.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=u,Qd(e,t,u,a,l)):(e=Ls(r.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,(e.lanes&l)===0){var g=u.memoizedProps;if(r=r.compare,r=r!==null?r:qi,r(g,a)&&e.ref===t.ref)return qt(e,t,l)}return t.flags|=1,e=fn(u,a),e.ref=t.ref,e.return=t,t.child=e}function Qd(e,t,r,a,l){if(e!==null){var u=e.memoizedProps;if(qi(u,a)&&e.ref===t.ref)if(it=!1,t.pendingProps=a=u,(e.lanes&l)!==0)(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,qt(e,t,l)}return zo(e,t,r,a,l)}function $d(e,t,r){var a=t.pendingProps,l=a.children,u=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(ui,ht),ht|=r;else{if((r&1073741824)===0)return e=u!==null?u.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ye(ui,ht),ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=u!==null?u.baseLanes:r,ye(ui,ht),ht|=a}else u!==null?(a=u.baseLanes|r,t.memoizedState=null):a=r,ye(ui,ht),ht|=a;return Xe(e,t,l,r),t.child}function Gd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function zo(e,t,r,a,l){var u=nt(r)?An:He.current;return u=ei(t,u),ai(t,l),r=jo(e,t,r,a,u,l),a=Eo(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,qt(e,t,l)):(Se&&a&&uo(t),t.flags|=1,Xe(e,t,r,l),t.child)}function Yd(e,t,r,a,l){if(nt(r)){var u=!0;as(t)}else u=!1;if(ai(t,l),t.stateNode===null)As(e,t),Fd(t,r,a),Lo(t,r,a,l),a=!0;else if(e===null){var g=t.stateNode,x=t.memoizedProps;g.props=x;var b=g.context,E=r.contextType;typeof E=="object"&&E!==null?E=yt(E):(E=nt(r)?An:He.current,E=ei(t,E));var F=r.getDerivedStateFromProps,z=typeof F=="function"||typeof g.getSnapshotBeforeUpdate=="function";z||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(x!==a||b!==E)&&zd(t,g,a,E),on=!1;var D=t.memoizedState;g.state=D,ps(t,a,g,l),b=t.memoizedState,x!==a||D!==b||tt.current||on?(typeof F=="function"&&(Do(t,r,F,a),b=t.memoizedState),(x=on||Wd(t,r,x,a,D,b,E))?(z||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(t.flags|=4194308)):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=b),g.props=a,g.state=b,g.context=E,a=x):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{g=t.stateNode,dd(e,t),x=t.memoizedProps,E=t.type===t.elementType?x:Pt(t.type,x),g.props=E,z=t.pendingProps,D=g.context,b=r.contextType,typeof b=="object"&&b!==null?b=yt(b):(b=nt(r)?An:He.current,b=ei(t,b));var U=r.getDerivedStateFromProps;(F=typeof U=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(x!==z||D!==b)&&zd(t,g,a,b),on=!1,D=t.memoizedState,g.state=D,ps(t,a,g,l);var G=t.memoizedState;x!==z||D!==G||tt.current||on?(typeof U=="function"&&(Do(t,r,U,a),G=t.memoizedState),(E=on||Wd(t,r,E,a,D,G,b)||!1)?(F||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(a,G,b),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(a,G,b)),typeof g.componentDidUpdate=="function"&&(t.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof g.componentDidUpdate!="function"||x===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=G),g.props=a,g.state=G,g.context=b,a=E):(typeof g.componentDidUpdate!="function"||x===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),a=!1)}return Oo(e,t,r,a,u,l)}function Oo(e,t,r,a,l,u){Gd(e,t);var g=(t.flags&128)!==0;if(!a&&!g)return l&&ed(t,r,!1),qt(e,t,u);a=t.stateNode,My.current=t;var x=g&&typeof r.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&g?(t.child=ri(t,e.child,null,u),t.child=ri(t,null,x,u)):Xe(e,t,x,u),t.memoizedState=a.state,l&&ed(t,r,!0),t.child}function Kd(e){var t=e.stateNode;t.pendingContext?Zu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zu(e,t.context,!1),bo(e,t.containerInfo)}function Xd(e,t,r,a,l){return ii(),po(l),t.flags|=256,Xe(e,t,r,a),t.child}var _o={dehydrated:null,treeContext:null,retryLane:0};function Bo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zd(e,t,r){var a=t.pendingProps,l=Ae.current,u=!1,g=(t.flags&128)!==0,x;if((x=g)||(x=e!==null&&e.memoizedState===null?!1:(l&2)!==0),x?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ye(Ae,l&1),e===null)return fo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(g=a.children,e=a.fallback,u?(a=t.mode,u=t.child,g={mode:"hidden",children:g},(a&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=g):u=Ws(g,a,0,null),e=Dn(e,a,r,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=Bo(r),t.memoizedState=_o,e):Vo(t,g));if(l=e.memoizedState,l!==null&&(x=l.dehydrated,x!==null))return Ry(e,t,g,a,x,l,r);if(u){u=a.fallback,g=t.mode,l=e.child,x=l.sibling;var b={mode:"hidden",children:a.children};return(g&1)===0&&t.child!==l?(a=t.child,a.childLanes=0,a.pendingProps=b,t.deletions=null):(a=fn(l,b),a.subtreeFlags=l.subtreeFlags&14680064),x!==null?u=fn(x,u):(u=Dn(u,g,r,null),u.flags|=2),u.return=t,a.return=t,a.sibling=u,t.child=a,a=u,u=t.child,g=e.child.memoizedState,g=g===null?Bo(r):{baseLanes:g.baseLanes|r,cachePool:null,transitions:g.transitions},u.memoizedState=g,u.childLanes=e.childLanes&~r,t.memoizedState=_o,a}return u=e.child,e=u.sibling,a=fn(u,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=r),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function Vo(e,t){return t=Ws({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ss(e,t,r,a){return a!==null&&po(a),ri(t,e.child,null,r),e=Vo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ry(e,t,r,a,l,u,g){if(r)return t.flags&256?(t.flags&=-257,a=Wo(Error(s(422))),Ss(e,t,g,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=a.fallback,l=t.mode,a=Ws({mode:"visible",children:a.children},l,0,null),u=Dn(u,l,g,null),u.flags|=2,a.return=t,u.return=t,a.sibling=u,t.child=a,(t.mode&1)!==0&&ri(t,e.child,null,g),t.child.memoizedState=Bo(g),t.memoizedState=_o,u);if((t.mode&1)===0)return Ss(e,t,g,null);if(l.data==="$!"){if(a=l.nextSibling&&l.nextSibling.dataset,a)var x=a.dgst;return a=x,u=Error(s(419)),a=Wo(u,a,void 0),Ss(e,t,g,a)}if(x=(g&e.childLanes)!==0,it||x){if(a=ze,a!==null){switch(g&-g){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(a.suspendedLanes|g))!==0?0:l,l!==0&&l!==u.retryLane&&(u.retryLane=l,Ht(e,l),Nt(a,e,l,-1))}return rl(),a=Wo(Error(s(421))),Ss(e,t,g,a)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=qy.bind(null,e),l._reactRetry=t,null):(e=u.treeContext,dt=nn(l.nextSibling),ut=t,Se=!0,Tt=null,e!==null&&(pt[gt++]=Bt,pt[gt++]=Vt,pt[gt++]=Cn,Bt=e.id,Vt=e.overflow,Cn=t),t=Vo(t,a.children),t.flags|=4096,t)}function Jd(e,t,r){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),wo(e.return,t,r)}function Ho(e,t,r,a,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:l}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=r,u.tailMode=l)}function eh(e,t,r){var a=t.pendingProps,l=a.revealOrder,u=a.tail;if(Xe(e,t,a.children,r),a=Ae.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jd(e,r,t);else if(e.tag===19)Jd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ye(Ae,a),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&gs(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),Ho(t,!1,l,r,u);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&gs(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}Ho(t,!0,r,null,u);break;case"together":Ho(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function As(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,r=fn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=fn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Iy(e,t,r){switch(t.tag){case 3:Kd(t),ii();break;case 5:fd(t);break;case 1:nt(t.type)&&as(t);break;case 4:bo(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,l=t.memoizedProps.value;ye(hs,a._currentValue),a._currentValue=l;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(ye(Ae,Ae.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Zd(e,t,r):(ye(Ae,Ae.current&1),e=qt(e,t,r),e!==null?e.sibling:null);ye(Ae,Ae.current&1);break;case 19:if(a=(r&t.childLanes)!==0,(e.flags&128)!==0){if(a)return eh(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ye(Ae,Ae.current),a)break;return null;case 22:case 23:return t.lanes=0,$d(e,t,r)}return qt(e,t,r)}var th,Uo,nh,ih;th=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Uo=function(){},nh=function(e,t,r,a){var l=e.memoizedProps;if(l!==a){e=t.stateNode,jn(Dt.current);var u=null;switch(r){case"input":l=va(e,l),a=va(e,a),u=[];break;case"select":l=q({},l,{value:void 0}),a=q({},a,{value:void 0}),u=[];break;case"textarea":l=ka(e,l),a=ka(e,a),u=[];break;default:typeof l.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=is)}Sa(r,a);var g;r=null;for(E in l)if(!a.hasOwnProperty(E)&&l.hasOwnProperty(E)&&l[E]!=null)if(E==="style"){var x=l[E];for(g in x)x.hasOwnProperty(g)&&(r||(r={}),r[g]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(c.hasOwnProperty(E)?u||(u=[]):(u=u||[]).push(E,null));for(E in a){var b=a[E];if(x=l?.[E],a.hasOwnProperty(E)&&b!==x&&(b!=null||x!=null))if(E==="style")if(x){for(g in x)!x.hasOwnProperty(g)||b&&b.hasOwnProperty(g)||(r||(r={}),r[g]="");for(g in b)b.hasOwnProperty(g)&&x[g]!==b[g]&&(r||(r={}),r[g]=b[g])}else r||(u||(u=[]),u.push(E,r)),r=b;else E==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,x=x?x.__html:void 0,b!=null&&x!==b&&(u=u||[]).push(E,b)):E==="children"?typeof b!="string"&&typeof b!="number"||(u=u||[]).push(E,""+b):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(c.hasOwnProperty(E)?(b!=null&&E==="onScroll"&&we("scroll",e),u||x===b||(u=[])):(u=u||[]).push(E,b))}r&&(u=u||[]).push("style",r);var E=u;(t.updateQueue=E)&&(t.flags|=4)}},ih=function(e,t,r,a){r!==a&&(t.flags|=4)};function ar(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,a|=l.subtreeFlags&14680064,a|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=r,t}function Dy(e,t,r){var a=t.pendingProps;switch(ho(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return nt(t.type)&&ss(),qe(t),null;case 3:return a=t.stateNode,oi(),xe(tt),xe(He),Co(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(us(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Tt!==null&&(tl(Tt),Tt=null))),Uo(e,t),qe(t),null;case 5:So(t);var l=jn(tr.current);if(r=t.type,e!==null&&t.stateNode!=null)nh(e,t,r,a,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(s(166));return qe(t),null}if(e=jn(Dt.current),us(t)){a=t.stateNode,r=t.type;var u=t.memoizedProps;switch(a[It]=t,a[Ki]=u,e=(t.mode&1)!==0,r){case"dialog":we("cancel",a),we("close",a);break;case"iframe":case"object":case"embed":we("load",a);break;case"video":case"audio":for(l=0;l<$i.length;l++)we($i[l],a);break;case"source":we("error",a);break;case"img":case"image":case"link":we("error",a),we("load",a);break;case"details":we("toggle",a);break;case"input":Fc(a,u),we("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!u.multiple},we("invalid",a);break;case"textarea":_c(a,u),we("invalid",a)}Sa(r,u),l=null;for(var g in u)if(u.hasOwnProperty(g)){var x=u[g];g==="children"?typeof x=="string"?a.textContent!==x&&(u.suppressHydrationWarning!==!0&&ns(a.textContent,x,e),l=["children",x]):typeof x=="number"&&a.textContent!==""+x&&(u.suppressHydrationWarning!==!0&&ns(a.textContent,x,e),l=["children",""+x]):c.hasOwnProperty(g)&&x!=null&&g==="onScroll"&&we("scroll",a)}switch(r){case"input":Ir(a),Oc(a,u,!0);break;case"textarea":Ir(a),Vc(a);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(a.onclick=is)}a=l,t.updateQueue=a,a!==null&&(t.flags|=4)}else{g=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=g.createElement(r,{is:a.is}):(e=g.createElement(r),r==="select"&&(g=e,a.multiple?g.multiple=!0:a.size&&(g.size=a.size))):e=g.createElementNS(e,r),e[It]=t,e[Ki]=a,th(e,t,!1,!1),t.stateNode=e;e:{switch(g=Aa(r,a),r){case"dialog":we("cancel",e),we("close",e),l=a;break;case"iframe":case"object":case"embed":we("load",e),l=a;break;case"video":case"audio":for(l=0;l<$i.length;l++)we($i[l],e);l=a;break;case"source":we("error",e),l=a;break;case"img":case"image":case"link":we("error",e),we("load",e),l=a;break;case"details":we("toggle",e),l=a;break;case"input":Fc(e,a),l=va(e,a),we("invalid",e);break;case"option":l=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},l=q({},a,{value:void 0}),we("invalid",e);break;case"textarea":_c(e,a),l=ka(e,a),we("invalid",e);break;default:l=a}Sa(r,l),x=l;for(u in x)if(x.hasOwnProperty(u)){var b=x[u];u==="style"?Qc(e,b):u==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&Uc(e,b)):u==="children"?typeof b=="string"?(r!=="textarea"||b!=="")&&ji(e,b):typeof b=="number"&&ji(e,""+b):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?b!=null&&u==="onScroll"&&we("scroll",e):b!=null&&O(e,u,b,g))}switch(r){case"input":Ir(e),Oc(e,a,!1);break;case"textarea":Ir(e),Vc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+fe(a.value));break;case"select":e.multiple=!!a.multiple,u=a.value,u!=null?Vn(e,!!a.multiple,u,!1):a.defaultValue!=null&&Vn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=is)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)ih(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(r=jn(tr.current),jn(Dt.current),us(t)){if(a=t.stateNode,r=t.memoizedProps,a[It]=t,(u=a.nodeValue!==r)&&(e=ut,e!==null))switch(e.tag){case 3:ns(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ns(a.nodeValue,r,(e.mode&1)!==0)}u&&(t.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[It]=t,t.stateNode=a}return qe(t),null;case 13:if(xe(Ae),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&dt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ad(),ii(),t.flags|=98560,u=!1;else if(u=us(t),a!==null&&a.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[It]=t}else ii(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),u=!1}else Tt!==null&&(tl(Tt),Tt=null),u=!0;if(!u)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ae.current&1)!==0?Le===0&&(Le=3):rl())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return oi(),Uo(e,t),e===null&&Gi(t.stateNode.containerInfo),qe(t),null;case 10:return vo(t.type._context),qe(t),null;case 17:return nt(t.type)&&ss(),qe(t),null;case 19:if(xe(Ae),u=t.memoizedState,u===null)return qe(t),null;if(a=(t.flags&128)!==0,g=u.rendering,g===null)if(a)ar(u,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(g=gs(e),g!==null){for(t.flags|=128,ar(u,!1),a=g.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;r!==null;)u=r,e=a,u.flags&=14680066,g=u.alternate,g===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=g.childLanes,u.lanes=g.lanes,u.child=g.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=g.memoizedProps,u.memoizedState=g.memoizedState,u.updateQueue=g.updateQueue,u.type=g.type,e=g.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ye(Ae,Ae.current&1|2),t.child}e=e.sibling}u.tail!==null&&Ne()>di&&(t.flags|=128,a=!0,ar(u,!1),t.lanes=4194304)}else{if(!a)if(e=gs(g),e!==null){if(t.flags|=128,a=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ar(u,!0),u.tail===null&&u.tailMode==="hidden"&&!g.alternate&&!Se)return qe(t),null}else 2*Ne()-u.renderingStartTime>di&&r!==1073741824&&(t.flags|=128,a=!0,ar(u,!1),t.lanes=4194304);u.isBackwards?(g.sibling=t.child,t.child=g):(r=u.last,r!==null?r.sibling=g:t.child=g,u.last=g)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=Ne(),t.sibling=null,r=Ae.current,ye(Ae,a?r&1|2:r&1),t):(qe(t),null);case 22:case 23:return il(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(ht&1073741824)!==0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Ly(e,t){switch(ho(t),t.tag){case 1:return nt(t.type)&&ss(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return oi(),xe(tt),xe(He),Co(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return So(t),null;case 13:if(xe(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));ii()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(Ae),null;case 4:return oi(),null;case 10:return vo(t.type._context),null;case 22:case 23:return il(),null;case 24:return null;default:return null}}var Cs=!1,Qe=!1,Wy=typeof WeakSet=="function"?WeakSet:Set,$=null;function ci(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){je(e,t,a)}else r.current=null}function qo(e,t,r){try{r()}catch(a){je(e,t,a)}}var rh=!1;function Fy(e,t){if(no=qr,e=Wu(),Ga(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var l=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{r.nodeType,u.nodeType}catch{r=null;break e}var g=0,x=-1,b=-1,E=0,F=0,z=e,D=null;t:for(;;){for(var U;z!==r||l!==0&&z.nodeType!==3||(x=g+l),z!==u||a!==0&&z.nodeType!==3||(b=g+a),z.nodeType===3&&(g+=z.nodeValue.length),(U=z.firstChild)!==null;)D=z,z=U;for(;;){if(z===e)break t;if(D===r&&++E===l&&(x=g),D===u&&++F===a&&(b=g),(U=z.nextSibling)!==null)break;z=D,D=z.parentNode}z=U}r=x===-1||b===-1?null:{start:x,end:b}}else r=null}r=r||{start:0,end:0}}else r=null;for(io={focusedElem:e,selectionRange:r},qr=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var G=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(G!==null){var Y=G.memoizedProps,Me=G.memoizedState,C=t.stateNode,S=C.getSnapshotBeforeUpdate(t.elementType===t.type?Y:Pt(t.type,Y),Me);C.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var T=t.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(_){je(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return G=rh,rh=!1,G}function or(e,t,r){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&e)===e){var u=l.destroy;l.destroy=void 0,u!==void 0&&qo(t,r,u)}l=l.next}while(l!==a)}}function Ts(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==t)}}function Qo(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function sh(e){var t=e.alternate;t!==null&&(e.alternate=null,sh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[Ki],delete t[oo],delete t[wy],delete t[xy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ah(e){return e.tag===5||e.tag===3||e.tag===4}function oh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ah(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $o(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=is));else if(a!==4&&(e=e.child,e!==null))for($o(e,t,r),e=e.sibling;e!==null;)$o(e,t,r),e=e.sibling}function Go(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Go(e,t,r),e=e.sibling;e!==null;)Go(e,t,r),e=e.sibling}var _e=null,jt=!1;function cn(e,t,r){for(r=r.child;r!==null;)lh(e,t,r),r=r.sibling}function lh(e,t,r){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Or,r)}catch{}switch(r.tag){case 5:Qe||ci(r,t);case 6:var a=_e,l=jt;_e=null,cn(e,t,r),_e=a,jt=l,_e!==null&&(jt?(e=_e,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):_e.removeChild(r.stateNode));break;case 18:_e!==null&&(jt?(e=_e,r=r.stateNode,e.nodeType===8?ao(e.parentNode,r):e.nodeType===1&&ao(e,r),Oi(e)):ao(_e,r.stateNode));break;case 4:a=_e,l=jt,_e=r.stateNode.containerInfo,jt=!0,cn(e,t,r),_e=a,jt=l;break;case 0:case 11:case 14:case 15:if(!Qe&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var u=l,g=u.destroy;u=u.tag,g!==void 0&&((u&2)!==0||(u&4)!==0)&&qo(r,t,g),l=l.next}while(l!==a)}cn(e,t,r);break;case 1:if(!Qe&&(ci(r,t),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(x){je(r,t,x)}cn(e,t,r);break;case 21:cn(e,t,r);break;case 22:r.mode&1?(Qe=(a=Qe)||r.memoizedState!==null,cn(e,t,r),Qe=a):cn(e,t,r);break;default:cn(e,t,r)}}function ch(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Wy),t.forEach(function(a){var l=Qy.bind(null,e,a);r.has(a)||(r.add(a),a.then(l,l))})}}function Et(e,t){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];try{var u=e,g=t,x=g;e:for(;x!==null;){switch(x.tag){case 5:_e=x.stateNode,jt=!1;break e;case 3:_e=x.stateNode.containerInfo,jt=!0;break e;case 4:_e=x.stateNode.containerInfo,jt=!0;break e}x=x.return}if(_e===null)throw Error(s(160));lh(u,g,l),_e=null,jt=!1;var b=l.alternate;b!==null&&(b.return=null),l.return=null}catch(E){je(l,t,E)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)uh(t,e),t=t.sibling}function uh(e,t){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),Wt(e),a&4){try{or(3,e,e.return),Ts(3,e)}catch(Y){je(e,e.return,Y)}try{or(5,e,e.return)}catch(Y){je(e,e.return,Y)}}break;case 1:Et(t,e),Wt(e),a&512&&r!==null&&ci(r,r.return);break;case 5:if(Et(t,e),Wt(e),a&512&&r!==null&&ci(r,r.return),e.flags&32){var l=e.stateNode;try{ji(l,"")}catch(Y){je(e,e.return,Y)}}if(a&4&&(l=e.stateNode,l!=null)){var u=e.memoizedProps,g=r!==null?r.memoizedProps:u,x=e.type,b=e.updateQueue;if(e.updateQueue=null,b!==null)try{x==="input"&&u.type==="radio"&&u.name!=null&&zc(l,u),Aa(x,g);var E=Aa(x,u);for(g=0;g<b.length;g+=2){var F=b[g],z=b[g+1];F==="style"?Qc(l,z):F==="dangerouslySetInnerHTML"?Uc(l,z):F==="children"?ji(l,z):O(l,F,z,E)}switch(x){case"input":wa(l,u);break;case"textarea":Bc(l,u);break;case"select":var D=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!u.multiple;var U=u.value;U!=null?Vn(l,!!u.multiple,U,!1):D!==!!u.multiple&&(u.defaultValue!=null?Vn(l,!!u.multiple,u.defaultValue,!0):Vn(l,!!u.multiple,u.multiple?[]:"",!1))}l[Ki]=u}catch(Y){je(e,e.return,Y)}}break;case 6:if(Et(t,e),Wt(e),a&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,u=e.memoizedProps;try{l.nodeValue=u}catch(Y){je(e,e.return,Y)}}break;case 3:if(Et(t,e),Wt(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Oi(t.containerInfo)}catch(Y){je(e,e.return,Y)}break;case 4:Et(t,e),Wt(e);break;case 13:Et(t,e),Wt(e),l=e.child,l.flags&8192&&(u=l.memoizedState!==null,l.stateNode.isHidden=u,!u||l.alternate!==null&&l.alternate.memoizedState!==null||(Xo=Ne())),a&4&&ch(e);break;case 22:if(F=r!==null&&r.memoizedState!==null,e.mode&1?(Qe=(E=Qe)||F,Et(t,e),Qe=E):Et(t,e),Wt(e),a&8192){if(E=e.memoizedState!==null,(e.stateNode.isHidden=E)&&!F&&(e.mode&1)!==0)for($=e,F=e.child;F!==null;){for(z=$=F;$!==null;){switch(D=$,U=D.child,D.tag){case 0:case 11:case 14:case 15:or(4,D,D.return);break;case 1:ci(D,D.return);var G=D.stateNode;if(typeof G.componentWillUnmount=="function"){a=D,r=D.return;try{t=a,G.props=t.memoizedProps,G.state=t.memoizedState,G.componentWillUnmount()}catch(Y){je(a,r,Y)}}break;case 5:ci(D,D.return);break;case 22:if(D.memoizedState!==null){mh(z);continue}}U!==null?(U.return=D,$=U):mh(z)}F=F.sibling}e:for(F=null,z=e;;){if(z.tag===5){if(F===null){F=z;try{l=z.stateNode,E?(u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(x=z.stateNode,b=z.memoizedProps.style,g=b!=null&&b.hasOwnProperty("display")?b.display:null,x.style.display=qc("display",g))}catch(Y){je(e,e.return,Y)}}}else if(z.tag===6){if(F===null)try{z.stateNode.nodeValue=E?"":z.memoizedProps}catch(Y){je(e,e.return,Y)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;F===z&&(F=null),z=z.return}F===z&&(F=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:Et(t,e),Wt(e),a&4&&ch(e);break;case 21:break;default:Et(t,e),Wt(e)}}function Wt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(ah(r)){var a=r;break e}r=r.return}throw Error(s(160))}switch(a.tag){case 5:var l=a.stateNode;a.flags&32&&(ji(l,""),a.flags&=-33);var u=oh(e);Go(e,u,l);break;case 3:case 4:var g=a.stateNode.containerInfo,x=oh(e);$o(e,x,g);break;default:throw Error(s(161))}}catch(b){je(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zy(e,t,r){$=e,dh(e)}function dh(e,t,r){for(var a=(e.mode&1)!==0;$!==null;){var l=$,u=l.child;if(l.tag===22&&a){var g=l.memoizedState!==null||Cs;if(!g){var x=l.alternate,b=x!==null&&x.memoizedState!==null||Qe;x=Cs;var E=Qe;if(Cs=g,(Qe=b)&&!E)for($=l;$!==null;)g=$,b=g.child,g.tag===22&&g.memoizedState!==null?fh(l):b!==null?(b.return=g,$=b):fh(l);for(;u!==null;)$=u,dh(u),u=u.sibling;$=l,Cs=x,Qe=E}hh(e)}else(l.subtreeFlags&8772)!==0&&u!==null?(u.return=l,$=u):hh(e)}}function hh(e){for(;$!==null;){var t=$;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Qe||Ts(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Qe)if(r===null)a.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:Pt(t.type,r.memoizedProps);a.componentDidUpdate(l,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&md(t,u,a);break;case 3:var g=t.updateQueue;if(g!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}md(t,g,r)}break;case 5:var x=t.stateNode;if(r===null&&t.flags&4){r=x;var b=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&r.focus();break;case"img":b.src&&(r.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var E=t.alternate;if(E!==null){var F=E.memoizedState;if(F!==null){var z=F.dehydrated;z!==null&&Oi(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Qe||t.flags&512&&Qo(t)}catch(D){je(t,t.return,D)}}if(t===e){$=null;break}if(r=t.sibling,r!==null){r.return=t.return,$=r;break}$=t.return}}function mh(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var r=t.sibling;if(r!==null){r.return=t.return,$=r;break}$=t.return}}function fh(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ts(4,t)}catch(b){je(t,r,b)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var l=t.return;try{a.componentDidMount()}catch(b){je(t,l,b)}}var u=t.return;try{Qo(t)}catch(b){je(t,u,b)}break;case 5:var g=t.return;try{Qo(t)}catch(b){je(t,g,b)}}}catch(b){je(t,t.return,b)}if(t===e){$=null;break}var x=t.sibling;if(x!==null){x.return=t.return,$=x;break}$=t.return}}var Oy=Math.ceil,Ps=Q.ReactCurrentDispatcher,Yo=Q.ReactCurrentOwner,wt=Q.ReactCurrentBatchConfig,ue=0,ze=null,Ie=null,Be=0,ht=0,ui=rn(0),Le=0,lr=null,Nn=0,js=0,Ko=0,cr=null,rt=null,Xo=0,di=1/0,Qt=null,Es=!1,Zo=null,un=null,Ns=!1,dn=null,Ms=0,ur=0,Jo=null,Rs=-1,Is=0;function Ze(){return(ue&6)!==0?Ne():Rs!==-1?Rs:Rs=Ne()}function hn(e){return(e.mode&1)===0?1:(ue&2)!==0&&Be!==0?Be&-Be:by.transition!==null?(Is===0&&(Is=ou()),Is):(e=pe,e!==0||(e=window.event,e=e===void 0?16:gu(e.type)),e)}function Nt(e,t,r,a){if(50<ur)throw ur=0,Jo=null,Error(s(185));Di(e,r,a),((ue&2)===0||e!==ze)&&(e===ze&&((ue&2)===0&&(js|=r),Le===4&&mn(e,Be)),st(e,a),r===1&&ue===0&&(t.mode&1)===0&&(di=Ne()+500,os&&an()))}function st(e,t){var r=e.callbackNode;bg(e,t);var a=Vr(e,e===ze?Be:0);if(a===0)r!==null&&ru(r),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(r!=null&&ru(r),t===1)e.tag===0?ky(gh.bind(null,e)):td(gh.bind(null,e)),yy(function(){(ue&6)===0&&an()}),r=null;else{switch(lu(a)){case 1:r=Ma;break;case 4:r=su;break;case 16:r=zr;break;case 536870912:r=au;break;default:r=zr}r=Ah(r,ph.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ph(e,t){if(Rs=-1,Is=0,(ue&6)!==0)throw Error(s(327));var r=e.callbackNode;if(hi()&&e.callbackNode!==r)return null;var a=Vr(e,e===ze?Be:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=Ds(e,a);else{t=a;var l=ue;ue|=2;var u=vh();(ze!==e||Be!==t)&&(Qt=null,di=Ne()+500,Rn(e,t));do try{Vy();break}catch(x){yh(e,x)}while(!0);yo(),Ps.current=u,ue=l,Ie!==null?t=0:(ze=null,Be=0,t=Le)}if(t!==0){if(t===2&&(l=Ra(e),l!==0&&(a=l,t=el(e,l))),t===1)throw r=lr,Rn(e,0),mn(e,a),st(e,Ne()),r;if(t===6)mn(e,a);else{if(l=e.current.alternate,(a&30)===0&&!_y(l)&&(t=Ds(e,a),t===2&&(u=Ra(e),u!==0&&(a=u,t=el(e,u))),t===1))throw r=lr,Rn(e,0),mn(e,a),st(e,Ne()),r;switch(e.finishedWork=l,e.finishedLanes=a,t){case 0:case 1:throw Error(s(345));case 2:In(e,rt,Qt);break;case 3:if(mn(e,a),(a&130023424)===a&&(t=Xo+500-Ne(),10<t)){if(Vr(e,0)!==0)break;if(l=e.suspendedLanes,(l&a)!==a){Ze(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=so(In.bind(null,e,rt,Qt),t);break}In(e,rt,Qt);break;case 4:if(mn(e,a),(a&4194240)===a)break;for(t=e.eventTimes,l=-1;0<a;){var g=31-At(a);u=1<<g,g=t[g],g>l&&(l=g),a&=~u}if(a=l,a=Ne()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Oy(a/1960))-a,10<a){e.timeoutHandle=so(In.bind(null,e,rt,Qt),a);break}In(e,rt,Qt);break;case 5:In(e,rt,Qt);break;default:throw Error(s(329))}}}return st(e,Ne()),e.callbackNode===r?ph.bind(null,e):null}function el(e,t){var r=cr;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=Ds(e,t),e!==2&&(t=rt,rt=r,t!==null&&tl(t)),e}function tl(e){rt===null?rt=e:rt.push.apply(rt,e)}function _y(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var l=r[a],u=l.getSnapshot;l=l.value;try{if(!Ct(u(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mn(e,t){for(t&=~Ko,t&=~js,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-At(t),a=1<<r;e[r]=-1,t&=~a}}function gh(e){if((ue&6)!==0)throw Error(s(327));hi();var t=Vr(e,0);if((t&1)===0)return st(e,Ne()),null;var r=Ds(e,t);if(e.tag!==0&&r===2){var a=Ra(e);a!==0&&(t=a,r=el(e,a))}if(r===1)throw r=lr,Rn(e,0),mn(e,t),st(e,Ne()),r;if(r===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,In(e,rt,Qt),st(e,Ne()),null}function nl(e,t){var r=ue;ue|=1;try{return e(t)}finally{ue=r,ue===0&&(di=Ne()+500,os&&an())}}function Mn(e){dn!==null&&dn.tag===0&&(ue&6)===0&&hi();var t=ue;ue|=1;var r=wt.transition,a=pe;try{if(wt.transition=null,pe=1,e)return e()}finally{pe=a,wt.transition=r,ue=t,(ue&6)===0&&an()}}function il(){ht=ui.current,xe(ui)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,gy(r)),Ie!==null)for(r=Ie.return;r!==null;){var a=r;switch(ho(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&ss();break;case 3:oi(),xe(tt),xe(He),Co();break;case 5:So(a);break;case 4:oi();break;case 13:xe(Ae);break;case 19:xe(Ae);break;case 10:vo(a.type._context);break;case 22:case 23:il()}r=r.return}if(ze=e,Ie=e=fn(e.current,null),Be=ht=t,Le=0,lr=null,Ko=js=Nn=0,rt=cr=null,Pn!==null){for(t=0;t<Pn.length;t++)if(r=Pn[t],a=r.interleaved,a!==null){r.interleaved=null;var l=a.next,u=r.pending;if(u!==null){var g=u.next;u.next=l,a.next=g}r.pending=a}Pn=null}return e}function yh(e,t){do{var r=Ie;try{if(yo(),ys.current=ks,vs){for(var a=Ce.memoizedState;a!==null;){var l=a.queue;l!==null&&(l.pending=null),a=a.next}vs=!1}if(En=0,Fe=De=Ce=null,nr=!1,ir=0,Yo.current=null,r===null||r.return===null){Le=1,lr=t,Ie=null;break}e:{var u=e,g=r.return,x=r,b=t;if(t=Be,x.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var E=b,F=x,z=F.tag;if((F.mode&1)===0&&(z===0||z===11||z===15)){var D=F.alternate;D?(F.updateQueue=D.updateQueue,F.memoizedState=D.memoizedState,F.lanes=D.lanes):(F.updateQueue=null,F.memoizedState=null)}var U=Vd(g);if(U!==null){U.flags&=-257,Hd(U,g,x,u,t),U.mode&1&&Bd(u,E,t),t=U,b=E;var G=t.updateQueue;if(G===null){var Y=new Set;Y.add(b),t.updateQueue=Y}else G.add(b);break e}else{if((t&1)===0){Bd(u,E,t),rl();break e}b=Error(s(426))}}else if(Se&&x.mode&1){var Me=Vd(g);if(Me!==null){(Me.flags&65536)===0&&(Me.flags|=256),Hd(Me,g,x,u,t),po(li(b,x));break e}}u=b=li(b,x),Le!==4&&(Le=2),cr===null?cr=[u]:cr.push(u),u=g;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var C=Od(u,b,t);hd(u,C);break e;case 1:x=b;var S=u.type,T=u.stateNode;if((u.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(un===null||!un.has(T)))){u.flags|=65536,t&=-t,u.lanes|=t;var _=_d(u,x,t);hd(u,_);break e}}u=u.return}while(u!==null)}xh(r)}catch(K){t=K,Ie===r&&r!==null&&(Ie=r=r.return);continue}break}while(!0)}function vh(){var e=Ps.current;return Ps.current=ks,e===null?ks:e}function rl(){(Le===0||Le===3||Le===2)&&(Le=4),ze===null||(Nn&268435455)===0&&(js&268435455)===0||mn(ze,Be)}function Ds(e,t){var r=ue;ue|=2;var a=vh();(ze!==e||Be!==t)&&(Qt=null,Rn(e,t));do try{By();break}catch(l){yh(e,l)}while(!0);if(yo(),ue=r,Ps.current=a,Ie!==null)throw Error(s(261));return ze=null,Be=0,Le}function By(){for(;Ie!==null;)wh(Ie)}function Vy(){for(;Ie!==null&&!mg();)wh(Ie)}function wh(e){var t=Sh(e.alternate,e,ht);e.memoizedProps=e.pendingProps,t===null?xh(e):Ie=t,Yo.current=null}function xh(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Dy(r,t,ht),r!==null){Ie=r;return}}else{if(r=Ly(r,t),r!==null){r.flags&=32767,Ie=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Ie=null;return}}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Le===0&&(Le=5)}function In(e,t,r){var a=pe,l=wt.transition;try{wt.transition=null,pe=1,Hy(e,t,r,a)}finally{wt.transition=l,pe=a}return null}function Hy(e,t,r,a){do hi();while(dn!==null);if((ue&6)!==0)throw Error(s(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var u=r.lanes|r.childLanes;if(Sg(e,u),e===ze&&(Ie=ze=null,Be=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Ns||(Ns=!0,Ah(zr,function(){return hi(),null})),u=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||u){u=wt.transition,wt.transition=null;var g=pe;pe=1;var x=ue;ue|=4,Yo.current=null,Fy(e,r),uh(r,e),cy(io),qr=!!no,io=no=null,e.current=r,zy(r),fg(),ue=x,pe=g,wt.transition=u}else e.current=r;if(Ns&&(Ns=!1,dn=e,Ms=l),u=e.pendingLanes,u===0&&(un=null),yg(r.stateNode),st(e,Ne()),t!==null)for(a=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],a(l.value,{componentStack:l.stack,digest:l.digest});if(Es)throw Es=!1,e=Zo,Zo=null,e;return(Ms&1)!==0&&e.tag!==0&&hi(),u=e.pendingLanes,(u&1)!==0?e===Jo?ur++:(ur=0,Jo=e):ur=0,an(),null}function hi(){if(dn!==null){var e=lu(Ms),t=wt.transition,r=pe;try{if(wt.transition=null,pe=16>e?16:e,dn===null)var a=!1;else{if(e=dn,dn=null,Ms=0,(ue&6)!==0)throw Error(s(331));var l=ue;for(ue|=4,$=e.current;$!==null;){var u=$,g=u.child;if(($.flags&16)!==0){var x=u.deletions;if(x!==null){for(var b=0;b<x.length;b++){var E=x[b];for($=E;$!==null;){var F=$;switch(F.tag){case 0:case 11:case 15:or(8,F,u)}var z=F.child;if(z!==null)z.return=F,$=z;else for(;$!==null;){F=$;var D=F.sibling,U=F.return;if(sh(F),F===E){$=null;break}if(D!==null){D.return=U,$=D;break}$=U}}}var G=u.alternate;if(G!==null){var Y=G.child;if(Y!==null){G.child=null;do{var Me=Y.sibling;Y.sibling=null,Y=Me}while(Y!==null)}}$=u}}if((u.subtreeFlags&2064)!==0&&g!==null)g.return=u,$=g;else e:for(;$!==null;){if(u=$,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:or(9,u,u.return)}var C=u.sibling;if(C!==null){C.return=u.return,$=C;break e}$=u.return}}var S=e.current;for($=S;$!==null;){g=$;var T=g.child;if((g.subtreeFlags&2064)!==0&&T!==null)T.return=g,$=T;else e:for(g=S;$!==null;){if(x=$,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:Ts(9,x)}}catch(K){je(x,x.return,K)}if(x===g){$=null;break e}var _=x.sibling;if(_!==null){_.return=x.return,$=_;break e}$=x.return}}if(ue=l,an(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Or,e)}catch{}a=!0}return a}finally{pe=r,wt.transition=t}}return!1}function kh(e,t,r){t=li(r,t),t=Od(e,t,1),e=ln(e,t,1),t=Ze(),e!==null&&(Di(e,1,t),st(e,t))}function je(e,t,r){if(e.tag===3)kh(e,e,r);else for(;t!==null;){if(t.tag===3){kh(t,e,r);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(un===null||!un.has(a))){e=li(r,e),e=_d(t,e,1),t=ln(t,e,1),e=Ze(),t!==null&&(Di(t,1,e),st(t,e));break}}t=t.return}}function Uy(e,t,r){var a=e.pingCache;a!==null&&a.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&r,ze===e&&(Be&r)===r&&(Le===4||Le===3&&(Be&130023424)===Be&&500>Ne()-Xo?Rn(e,0):Ko|=r),st(e,t)}function bh(e,t){t===0&&((e.mode&1)===0?t=1:(t=Br,Br<<=1,(Br&130023424)===0&&(Br=4194304)));var r=Ze();e=Ht(e,t),e!==null&&(Di(e,t,r),st(e,r))}function qy(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),bh(e,r)}function Qy(e,t){var r=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(s(314))}a!==null&&a.delete(t),bh(e,r)}var Sh;Sh=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)it=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return it=!1,Iy(e,t,r);it=(e.flags&131072)!==0}else it=!1,Se&&(t.flags&1048576)!==0&&nd(t,cs,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;As(e,t),e=t.pendingProps;var l=ei(t,He.current);ai(t,r),l=jo(null,t,a,e,l,r);var u=Eo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(a)?(u=!0,as(t)):u=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ko(t),l.updater=bs,t.stateNode=l,l._reactInternals=t,Lo(t,a,e,r),t=Oo(null,t,a,!0,u,r)):(t.tag=0,Se&&u&&uo(t),Xe(null,t,l,r),t=t.child),t;case 16:a=t.elementType;e:{switch(As(e,t),e=t.pendingProps,l=a._init,a=l(a._payload),t.type=a,l=t.tag=Gy(a),e=Pt(a,e),l){case 0:t=zo(null,t,a,e,r);break e;case 1:t=Yd(null,t,a,e,r);break e;case 11:t=Ud(null,t,a,e,r);break e;case 14:t=qd(null,t,a,Pt(a.type,e),r);break e}throw Error(s(306,a,""))}return t;case 0:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Pt(a,l),zo(e,t,a,l,r);case 1:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Pt(a,l),Yd(e,t,a,l,r);case 3:e:{if(Kd(t),e===null)throw Error(s(387));a=t.pendingProps,u=t.memoizedState,l=u.element,dd(e,t),ps(t,a,null,r);var g=t.memoizedState;if(a=g.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){l=li(Error(s(423)),t),t=Xd(e,t,a,r,l);break e}else if(a!==l){l=li(Error(s(424)),t),t=Xd(e,t,a,r,l);break e}else for(dt=nn(t.stateNode.containerInfo.firstChild),ut=t,Se=!0,Tt=null,r=cd(t,null,a,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ii(),a===l){t=qt(e,t,r);break e}Xe(e,t,a,r)}t=t.child}return t;case 5:return fd(t),e===null&&fo(t),a=t.type,l=t.pendingProps,u=e!==null?e.memoizedProps:null,g=l.children,ro(a,l)?g=null:u!==null&&ro(a,u)&&(t.flags|=32),Gd(e,t),Xe(e,t,g,r),t.child;case 6:return e===null&&fo(t),null;case 13:return Zd(e,t,r);case 4:return bo(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ri(t,null,a,r):Xe(e,t,a,r),t.child;case 11:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Pt(a,l),Ud(e,t,a,l,r);case 7:return Xe(e,t,t.pendingProps,r),t.child;case 8:return Xe(e,t,t.pendingProps.children,r),t.child;case 12:return Xe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(a=t.type._context,l=t.pendingProps,u=t.memoizedProps,g=l.value,ye(hs,a._currentValue),a._currentValue=g,u!==null)if(Ct(u.value,g)){if(u.children===l.children&&!tt.current){t=qt(e,t,r);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var x=u.dependencies;if(x!==null){g=u.child;for(var b=x.firstContext;b!==null;){if(b.context===a){if(u.tag===1){b=Ut(-1,r&-r),b.tag=2;var E=u.updateQueue;if(E!==null){E=E.shared;var F=E.pending;F===null?b.next=b:(b.next=F.next,F.next=b),E.pending=b}}u.lanes|=r,b=u.alternate,b!==null&&(b.lanes|=r),wo(u.return,r,t),x.lanes|=r;break}b=b.next}}else if(u.tag===10)g=u.type===t.type?null:u.child;else if(u.tag===18){if(g=u.return,g===null)throw Error(s(341));g.lanes|=r,x=g.alternate,x!==null&&(x.lanes|=r),wo(g,r,t),g=u.sibling}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}Xe(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,a=t.pendingProps.children,ai(t,r),l=yt(l),a=a(l),t.flags|=1,Xe(e,t,a,r),t.child;case 14:return a=t.type,l=Pt(a,t.pendingProps),l=Pt(a.type,l),qd(e,t,a,l,r);case 15:return Qd(e,t,t.type,t.pendingProps,r);case 17:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:Pt(a,l),As(e,t),t.tag=1,nt(a)?(e=!0,as(t)):e=!1,ai(t,r),Fd(t,a,l),Lo(t,a,l,r),Oo(null,t,a,!0,e,r);case 19:return eh(e,t,r);case 22:return $d(e,t,r)}throw Error(s(156,t.tag))};function Ah(e,t){return iu(e,t)}function $y(e,t,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,r,a){return new $y(e,t,r,a)}function sl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gy(e){if(typeof e=="function")return sl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ot)return 11;if(e===St)return 14}return 2}function fn(e,t){var r=e.alternate;return r===null?(r=xt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ls(e,t,r,a,l,u){var g=2;if(a=e,typeof e=="function")sl(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case le:return Dn(r.children,l,u,t);case X:g=8,l|=8;break;case ve:return e=xt(12,r,t,l|2),e.elementType=ve,e.lanes=u,e;case Ye:return e=xt(13,r,t,l),e.elementType=Ye,e.lanes=u,e;case et:return e=xt(19,r,t,l),e.elementType=et,e.lanes=u,e;case se:return Ws(r,l,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pe:g=10;break e;case Je:g=9;break e;case ot:g=11;break e;case St:g=14;break e;case Ke:g=16,a=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=xt(g,r,t,l),t.elementType=e,t.type=a,t.lanes=u,t}function Dn(e,t,r,a){return e=xt(7,e,a,t),e.lanes=r,e}function Ws(e,t,r,a){return e=xt(22,e,a,t),e.elementType=se,e.lanes=r,e.stateNode={isHidden:!1},e}function al(e,t,r){return e=xt(6,e,null,t),e.lanes=r,e}function ol(e,t,r){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yy(e,t,r,a,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ia(0),this.expirationTimes=Ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ia(0),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ll(e,t,r,a,l,u,g,x,b){return e=new Yy(e,t,r,x,b),t===1?(t=1,u===!0&&(t|=8)):t=0,u=xt(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ko(u),e}function Ky(e,t,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:te,key:a==null?null:""+a,children:e,containerInfo:t,implementation:r}}function Ch(e){if(!e)return sn;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var r=e.type;if(nt(r))return Ju(e,r,t)}return t}function Th(e,t,r,a,l,u,g,x,b){return e=ll(r,a,!0,e,l,u,g,x,b),e.context=Ch(null),r=e.current,a=Ze(),l=hn(r),u=Ut(a,l),u.callback=t??null,ln(r,u,l),e.current.lanes=l,Di(e,l,a),st(e,a),e}function Fs(e,t,r,a){var l=t.current,u=Ze(),g=hn(l);return r=Ch(r),t.context===null?t.context=r:t.pendingContext=r,t=Ut(u,g),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=ln(l,t,g),e!==null&&(Nt(e,l,g,u),fs(e,l,g)),g}function zs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ph(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function cl(e,t){Ph(e,t),(e=e.alternate)&&Ph(e,t)}function Xy(){return null}var jh=typeof reportError=="function"?reportError:function(e){console.error(e)};function ul(e){this._internalRoot=e}Os.prototype.render=ul.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Fs(e,t,null,null)},Os.prototype.unmount=ul.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mn(function(){Fs(null,e,null,null)}),t[Ot]=null}};function Os(e){this._internalRoot=e}Os.prototype.unstable_scheduleHydration=function(e){if(e){var t=du();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Jt.length&&t!==0&&t<Jt[r].priority;r++);Jt.splice(r,0,e),r===0&&fu(e)}};function dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Eh(){}function Zy(e,t,r,a,l){if(l){if(typeof a=="function"){var u=a;a=function(){var E=zs(g);u.call(E)}}var g=Th(t,a,e,0,null,!1,!1,"",Eh);return e._reactRootContainer=g,e[Ot]=g.current,Gi(e.nodeType===8?e.parentNode:e),Mn(),g}for(;l=e.lastChild;)e.removeChild(l);if(typeof a=="function"){var x=a;a=function(){var E=zs(b);x.call(E)}}var b=ll(e,0,!1,null,null,!1,!1,"",Eh);return e._reactRootContainer=b,e[Ot]=b.current,Gi(e.nodeType===8?e.parentNode:e),Mn(function(){Fs(t,b,r,a)}),b}function Bs(e,t,r,a,l){var u=r._reactRootContainer;if(u){var g=u;if(typeof l=="function"){var x=l;l=function(){var b=zs(g);x.call(b)}}Fs(t,g,e,l)}else g=Zy(r,t,e,l,a);return zs(g)}cu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Ii(t.pendingLanes);r!==0&&(Da(t,r|1),st(t,Ne()),(ue&6)===0&&(di=Ne()+500,an()))}break;case 13:Mn(function(){var a=Ht(e,1);if(a!==null){var l=Ze();Nt(a,e,1,l)}}),cl(e,1)}},La=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var r=Ze();Nt(t,e,134217728,r)}cl(e,134217728)}},uu=function(e){if(e.tag===13){var t=hn(e),r=Ht(e,t);if(r!==null){var a=Ze();Nt(r,e,t,a)}cl(e,t)}},du=function(){return pe},hu=function(e,t){var r=pe;try{return pe=e,t()}finally{pe=r}},Pa=function(e,t,r){switch(t){case"input":if(wa(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var a=r[t];if(a!==e&&a.form===e.form){var l=rs(a);if(!l)throw Error(s(90));Wc(a),wa(a,l)}}}break;case"textarea":Bc(e,r);break;case"select":t=r.value,t!=null&&Vn(e,!!r.multiple,t,!1)}},Kc=nl,Xc=Mn;var Jy={usingClientEntryPoint:!1,Events:[Xi,Zn,rs,Gc,Yc,nl]},dr={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e0={bundleType:dr.bundleType,version:dr.version,rendererPackageName:dr.rendererPackageName,rendererConfig:dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Q.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tu(e),e===null?null:e.stateNode},findFiberByHostInstance:dr.findFiberByHostInstance||Xy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vs.isDisabled&&Vs.supportsFiber)try{Or=Vs.inject(e0),Rt=Vs}catch{}}return at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jy,at.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dl(t))throw Error(s(200));return Ky(e,t,null,r)},at.createRoot=function(e,t){if(!dl(e))throw Error(s(299));var r=!1,a="",l=jh;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ll(e,1,!1,null,null,r,!1,a,l),e[Ot]=t.current,Gi(e.nodeType===8?e.parentNode:e),new ul(t)},at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=tu(t),e=e===null?null:e.stateNode,e},at.flushSync=function(e){return Mn(e)},at.hydrate=function(e,t,r){if(!_s(t))throw Error(s(200));return Bs(null,e,t,!0,r)},at.hydrateRoot=function(e,t,r){if(!dl(e))throw Error(s(405));var a=r!=null&&r.hydratedSources||null,l=!1,u="",g=jh;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(g=r.onRecoverableError)),t=Th(t,null,e,1,r??null,l,!1,u,g),e[Ot]=t.current,Gi(e),a)for(e=0;e<a.length;e++)r=a[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new Os(t)},at.render=function(e,t,r){if(!_s(t))throw Error(s(200));return Bs(null,e,t,!1,r)},at.unmountComponentAtNode=function(e){if(!_s(e))throw Error(s(40));return e._reactRootContainer?(Mn(function(){Bs(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1},at.unstable_batchedUpdates=nl,at.unstable_renderSubtreeIntoContainer=function(e,t,r,a){if(!_s(r))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Bs(e,t,r,!1,a)},at.version="18.3.1-next-f1338f8080-20240426",at}var Fh;function mf(){if(Fh)return fl.exports;Fh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),fl.exports=d0(),fl.exports}var zh;function h0(){if(zh)return Hs;zh=1;var n=mf();return Hs.createRoot=n.createRoot,Hs.hydrateRoot=n.hydrateRoot,Hs}var m0=h0();mf();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kr(){return kr=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(n[o]=s[o])}return n},kr.apply(this,arguments)}var yn;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(yn||(yn={}));const Oh="popstate";function f0(n){n===void 0&&(n={});function i(o,c){let{pathname:h,search:d,hash:f}=o.location;return Rl("",{pathname:h,search:d,hash:f},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function s(o,c){return typeof c=="string"?c:pf(c)}return g0(i,s,null,n)}function We(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function ff(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function p0(){return Math.random().toString(36).substr(2,8)}function _h(n,i){return{usr:n.state,key:n.key,idx:i}}function Rl(n,i,s,o){return s===void 0&&(s=null),kr({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof i=="string"?Si(i):i,{state:s,key:i&&i.key||o||p0()})}function pf(n){let{pathname:i="/",search:s="",hash:o=""}=n;return s&&s!=="?"&&(i+=s.charAt(0)==="?"?s:"?"+s),o&&o!=="#"&&(i+=o.charAt(0)==="#"?o:"#"+o),i}function Si(n){let i={};if(n){let s=n.indexOf("#");s>=0&&(i.hash=n.substr(s),n=n.substr(0,s));let o=n.indexOf("?");o>=0&&(i.search=n.substr(o),n=n.substr(0,o)),n&&(i.pathname=n)}return i}function g0(n,i,s,o){o===void 0&&(o={});let{window:c=document.defaultView,v5Compat:h=!1}=o,d=c.history,f=yn.Pop,p=null,y=v();y==null&&(y=0,d.replaceState(kr({},d.state,{idx:y}),""));function v(){return(d.state||{idx:null}).idx}function w(){f=yn.Pop;let N=v(),L=N==null?null:N-y;y=N,p&&p({action:f,location:M.location,delta:L})}function k(N,L){f=yn.Push;let R=Rl(M.location,N,L);y=v()+1;let O=_h(R,y),Q=M.createHref(R);try{d.pushState(O,"",Q)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;c.location.assign(Q)}h&&p&&p({action:f,location:M.location,delta:1})}function j(N,L){f=yn.Replace;let R=Rl(M.location,N,L);y=v();let O=_h(R,y),Q=M.createHref(R);d.replaceState(O,"",Q),h&&p&&p({action:f,location:M.location,delta:0})}function I(N){let L=c.location.origin!=="null"?c.location.origin:c.location.href,R=typeof N=="string"?N:pf(N);return R=R.replace(/ $/,"%20"),We(L,"No window.location.(origin|href) available to create URL for href: "+R),new URL(R,L)}let M={get action(){return f},get location(){return n(c,d)},listen(N){if(p)throw new Error("A history only accepts one active listener");return c.addEventListener(Oh,w),p=N,()=>{c.removeEventListener(Oh,w),p=null}},createHref(N){return i(c,N)},createURL:I,encodeLocation(N){let L=I(N);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:k,replace:j,go(N){return d.go(N)}};return M}var Bh;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Bh||(Bh={}));function y0(n,i,s){return s===void 0&&(s="/"),v0(n,i,s)}function v0(n,i,s,o){let c=typeof i=="string"?Si(i):i,h=vf(c.pathname||"/",s);if(h==null)return null;let d=gf(n);w0(d);let f=null;for(let p=0;f==null&&p<d.length;++p){let y=M0(h);f=j0(d[p],y)}return f}function gf(n,i,s,o){i===void 0&&(i=[]),s===void 0&&(s=[]),o===void 0&&(o="");let c=(h,d,f)=>{let p={relativePath:f===void 0?h.path||"":f,caseSensitive:h.caseSensitive===!0,childrenIndex:d,route:h};p.relativePath.startsWith("/")&&(We(p.relativePath.startsWith(o),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(o.length));let y=On([o,p.relativePath]),v=s.concat(p);h.children&&h.children.length>0&&(We(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),gf(h.children,i,v,y)),!(h.path==null&&!h.index)&&i.push({path:y,score:T0(y,h.index),routesMeta:v})};return n.forEach((h,d)=>{var f;if(h.path===""||!((f=h.path)!=null&&f.includes("?")))c(h,d);else for(let p of yf(h.path))c(h,d,p)}),i}function yf(n){let i=n.split("/");if(i.length===0)return[];let[s,...o]=i,c=s.endsWith("?"),h=s.replace(/\?$/,"");if(o.length===0)return c?[h,""]:[h];let d=yf(o.join("/")),f=[];return f.push(...d.map(p=>p===""?h:[h,p].join("/"))),c&&f.push(...d),f.map(p=>n.startsWith("/")&&p===""?"/":p)}function w0(n){n.sort((i,s)=>i.score!==s.score?s.score-i.score:P0(i.routesMeta.map(o=>o.childrenIndex),s.routesMeta.map(o=>o.childrenIndex)))}const x0=/^:[\w-]+$/,k0=3,b0=2,S0=1,A0=10,C0=-2,Vh=n=>n==="*";function T0(n,i){let s=n.split("/"),o=s.length;return s.some(Vh)&&(o+=C0),i&&(o+=b0),s.filter(c=>!Vh(c)).reduce((c,h)=>c+(x0.test(h)?k0:h===""?S0:A0),o)}function P0(n,i){return n.length===i.length&&n.slice(0,-1).every((o,c)=>o===i[c])?n[n.length-1]-i[i.length-1]:0}function j0(n,i,s){let{routesMeta:o}=n,c={},h="/",d=[];for(let f=0;f<o.length;++f){let p=o[f],y=f===o.length-1,v=h==="/"?i:i.slice(h.length)||"/",w=E0({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},v),k=p.route;if(!w)return null;Object.assign(c,w.params),d.push({params:c,pathname:On([h,w.pathname]),pathnameBase:F0(On([h,w.pathnameBase])),route:k}),w.pathnameBase!=="/"&&(h=On([h,w.pathnameBase]))}return d}function E0(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[s,o]=N0(n.path,n.caseSensitive,n.end),c=i.match(s);if(!c)return null;let h=c[0],d=h.replace(/(.)\/+$/,"$1"),f=c.slice(1);return{params:o.reduce((y,v,w)=>{let{paramName:k,isOptional:j}=v;if(k==="*"){let M=f[w]||"";d=h.slice(0,h.length-M.length).replace(/(.)\/+$/,"$1")}const I=f[w];return j&&!I?y[k]=void 0:y[k]=(I||"").replace(/%2F/g,"/"),y},{}),pathname:h,pathnameBase:d,pattern:n}}function N0(n,i,s){i===void 0&&(i=!1),s===void 0&&(s=!0),ff(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let o=[],c="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,f,p)=>(o.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(o.push({paramName:"*"}),c+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?c+="\\/*$":n!==""&&n!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,i?void 0:"i"),o]}function M0(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return ff(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),n}}function vf(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let s=i.endsWith("/")?i.length-1:i.length,o=n.charAt(s);return o&&o!=="/"?null:n.slice(s)||"/"}function R0(n,i){i===void 0&&(i="/");let{pathname:s,search:o="",hash:c=""}=typeof n=="string"?Si(n):n;return{pathname:s?s.startsWith("/")?s:I0(s,i):i,search:z0(o),hash:O0(c)}}function I0(n,i){let s=i.replace(/\/+$/,"").split("/");return n.split("/").forEach(c=>{c===".."?s.length>1&&s.pop():c!=="."&&s.push(c)}),s.length>1?s.join("/"):"/"}function yl(n,i,s,o){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function D0(n){return n.filter((i,s)=>s===0||i.route.path&&i.route.path.length>0)}function L0(n,i){let s=D0(n);return i?s.map((o,c)=>c===s.length-1?o.pathname:o.pathnameBase):s.map(o=>o.pathnameBase)}function W0(n,i,s,o){o===void 0&&(o=!1);let c;typeof n=="string"?c=Si(n):(c=kr({},n),We(!c.pathname||!c.pathname.includes("?"),yl("?","pathname","search",c)),We(!c.pathname||!c.pathname.includes("#"),yl("#","pathname","hash",c)),We(!c.search||!c.search.includes("#"),yl("#","search","hash",c)));let h=n===""||c.pathname==="",d=h?"/":c.pathname,f;if(d==null)f=s;else{let w=i.length-1;if(!o&&d.startsWith("..")){let k=d.split("/");for(;k[0]==="..";)k.shift(),w-=1;c.pathname=k.join("/")}f=w>=0?i[w]:"/"}let p=R0(c,f),y=d&&d!=="/"&&d.endsWith("/"),v=(h||d===".")&&s.endsWith("/");return!p.pathname.endsWith("/")&&(y||v)&&(p.pathname+="/"),p}const On=n=>n.join("/").replace(/\/\/+/g,"/"),F0=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),z0=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,O0=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function _0(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const wf=["post","put","patch","delete"];new Set(wf);const B0=["get",...wf];new Set(B0);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function br(){return br=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(n[o]=s[o])}return n},br.apply(this,arguments)}const Jl=P.createContext(null),V0=P.createContext(null),la=P.createContext(null),ca=P.createContext(null),Ai=P.createContext({outlet:null,matches:[],isDataRoute:!1}),xf=P.createContext(null);function ua(){return P.useContext(ca)!=null}function ec(){return ua()||We(!1),P.useContext(ca).location}function kf(n){P.useContext(la).static||P.useLayoutEffect(n)}function bf(){let{isDataRoute:n}=P.useContext(Ai);return n?tv():H0()}function H0(){ua()||We(!1);let n=P.useContext(Jl),{basename:i,future:s,navigator:o}=P.useContext(la),{matches:c}=P.useContext(Ai),{pathname:h}=ec(),d=JSON.stringify(L0(c,s.v7_relativeSplatPath)),f=P.useRef(!1);return kf(()=>{f.current=!0}),P.useCallback(function(y,v){if(v===void 0&&(v={}),!f.current)return;if(typeof y=="number"){o.go(y);return}let w=W0(y,JSON.parse(d),h,v.relative==="path");n==null&&i!=="/"&&(w.pathname=w.pathname==="/"?i:On([i,w.pathname])),(v.replace?o.replace:o.push)(w,v.state,v)},[i,o,d,h,n])}function U0(n,i){return q0(n,i)}function q0(n,i,s,o){ua()||We(!1);let{navigator:c}=P.useContext(la),{matches:h}=P.useContext(Ai),d=h[h.length-1],f=d?d.params:{};d&&d.pathname;let p=d?d.pathnameBase:"/";d&&d.route;let y=ec(),v;if(i){var w;let N=typeof i=="string"?Si(i):i;p==="/"||(w=N.pathname)!=null&&w.startsWith(p)||We(!1),v=N}else v=y;let k=v.pathname||"/",j=k;if(p!=="/"){let N=p.replace(/^\//,"").split("/");j="/"+k.replace(/^\//,"").split("/").slice(N.length).join("/")}let I=y0(n,{pathname:j}),M=K0(I&&I.map(N=>Object.assign({},N,{params:Object.assign({},f,N.params),pathname:On([p,c.encodeLocation?c.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?p:On([p,c.encodeLocation?c.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),h,s,o);return i&&M?P.createElement(ca.Provider,{value:{location:br({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:yn.Pop}},M):M}function Q0(){let n=ev(),i=_0(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),s=n instanceof Error?n.stack:null,c={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},i),s?P.createElement("pre",{style:c},s):null,null)}const $0=P.createElement(Q0,null);class G0 extends P.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,s){return s.location!==i.location||s.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:s.error,location:s.location,revalidation:i.revalidation||s.revalidation}}componentDidCatch(i,s){console.error("React Router caught the following error during render",i,s)}render(){return this.state.error!==void 0?P.createElement(Ai.Provider,{value:this.props.routeContext},P.createElement(xf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y0(n){let{routeContext:i,match:s,children:o}=n,c=P.useContext(Jl);return c&&c.static&&c.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=s.route.id),P.createElement(Ai.Provider,{value:i},o)}function K0(n,i,s,o){var c;if(i===void 0&&(i=[]),s===void 0&&(s=null),o===void 0&&(o=null),n==null){var h;if(!s)return null;if(s.errors)n=s.matches;else if((h=o)!=null&&h.v7_partialHydration&&i.length===0&&!s.initialized&&s.matches.length>0)n=s.matches;else return null}let d=n,f=(c=s)==null?void 0:c.errors;if(f!=null){let v=d.findIndex(w=>w.route.id&&f?.[w.route.id]!==void 0);v>=0||We(!1),d=d.slice(0,Math.min(d.length,v+1))}let p=!1,y=-1;if(s&&o&&o.v7_partialHydration)for(let v=0;v<d.length;v++){let w=d[v];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(y=v),w.route.id){let{loaderData:k,errors:j}=s,I=w.route.loader&&k[w.route.id]===void 0&&(!j||j[w.route.id]===void 0);if(w.route.lazy||I){p=!0,y>=0?d=d.slice(0,y+1):d=[d[0]];break}}}return d.reduceRight((v,w,k)=>{let j,I=!1,M=null,N=null;s&&(j=f&&w.route.id?f[w.route.id]:void 0,M=w.route.errorElement||$0,p&&(y<0&&k===0?(nv("route-fallback"),I=!0,N=null):y===k&&(I=!0,N=w.route.hydrateFallbackElement||null)));let L=i.concat(d.slice(0,k+1)),R=()=>{let O;return j?O=M:I?O=N:w.route.Component?O=P.createElement(w.route.Component,null):w.route.element?O=w.route.element:O=v,P.createElement(Y0,{match:w,routeContext:{outlet:v,matches:L,isDataRoute:s!=null},children:O})};return s&&(w.route.ErrorBoundary||w.route.errorElement||k===0)?P.createElement(G0,{location:s.location,revalidation:s.revalidation,component:M,error:j,children:R(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):R()},null)}var Sf=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(Sf||{}),Af=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(Af||{});function X0(n){let i=P.useContext(Jl);return i||We(!1),i}function Z0(n){let i=P.useContext(V0);return i||We(!1),i}function J0(n){let i=P.useContext(Ai);return i||We(!1),i}function Cf(n){let i=J0(),s=i.matches[i.matches.length-1];return s.route.id||We(!1),s.route.id}function ev(){var n;let i=P.useContext(xf),s=Z0(),o=Cf();return i!==void 0?i:(n=s.errors)==null?void 0:n[o]}function tv(){let{router:n}=X0(Sf.UseNavigateStable),i=Cf(Af.UseNavigateStable),s=P.useRef(!1);return kf(()=>{s.current=!0}),P.useCallback(function(c,h){h===void 0&&(h={}),s.current&&(typeof c=="number"?n.navigate(c):n.navigate(c,br({fromRouteId:i},h)))},[n,i])}const Hh={};function nv(n,i,s){Hh[n]||(Hh[n]=!0)}function iv(n,i){n?.v7_startTransition,n?.v7_relativeSplatPath}function Gs(n){We(!1)}function rv(n){let{basename:i="/",children:s=null,location:o,navigationType:c=yn.Pop,navigator:h,static:d=!1,future:f}=n;ua()&&We(!1);let p=i.replace(/^\/*/,"/"),y=P.useMemo(()=>({basename:p,navigator:h,static:d,future:br({v7_relativeSplatPath:!1},f)}),[p,f,h,d]);typeof o=="string"&&(o=Si(o));let{pathname:v="/",search:w="",hash:k="",state:j=null,key:I="default"}=o,M=P.useMemo(()=>{let N=vf(v,p);return N==null?null:{location:{pathname:N,search:w,hash:k,state:j,key:I},navigationType:c}},[p,v,w,k,j,I,c]);return M==null?null:P.createElement(la.Provider,{value:y},P.createElement(ca.Provider,{children:s,value:M}))}function sv(n){let{children:i,location:s}=n;return U0(Il(i),s)}new Promise(()=>{});function Il(n,i){i===void 0&&(i=[]);let s=[];return P.Children.forEach(n,(o,c)=>{if(!P.isValidElement(o))return;let h=[...i,c];if(o.type===P.Fragment){s.push.apply(s,Il(o.props.children,h));return}o.type!==Gs&&We(!1),!o.props.index||!o.props.children||We(!1);let d={id:o.props.id||h.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(d.children=Il(o.props.children,h)),s.push(d)}),s}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const av="6";try{window.__reactRouterVersion=av}catch{}const ov="startTransition",Uh=l0[ov];function lv(n){let{basename:i,children:s,future:o,window:c}=n,h=P.useRef();h.current==null&&(h.current=f0({window:c,v5Compat:!0}));let d=h.current,[f,p]=P.useState({action:d.action,location:d.location}),{v7_startTransition:y}=o||{},v=P.useCallback(w=>{y&&Uh?Uh(()=>p(w)):p(w)},[p,y]);return P.useLayoutEffect(()=>d.listen(v),[d,v]),P.useEffect(()=>iv(o),[o]),P.createElement(rv,{basename:i,children:s,location:f.location,navigationType:f.action,navigator:d,future:o})}var qh;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(qh||(qh={}));var Qh;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Qh||(Qh={}));const tc=P.createContext({});function nc(n){const i=P.useRef(null);return i.current===null&&(i.current=n()),i.current}const da=P.createContext(null),ic=P.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class cv extends P.Component{getSnapshotBeforeUpdate(i){const s=this.props.childRef.current;if(s&&i.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=s.offsetHeight||0,o.width=s.offsetWidth||0,o.top=s.offsetTop,o.left=s.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function uv({children:n,isPresent:i}){const s=P.useId(),o=P.useRef(null),c=P.useRef({width:0,height:0,top:0,left:0}),{nonce:h}=P.useContext(ic);return P.useInsertionEffect(()=>{const{width:d,height:f,top:p,left:y}=c.current;if(i||!o.current||!d||!f)return;o.current.dataset.motionPopId=s;const v=document.createElement("style");return h&&(v.nonce=h),document.head.appendChild(v),v.sheet&&v.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${f}px !important;
            top: ${p}px !important;
            left: ${y}px !important;
          }
        `),()=>{document.head.removeChild(v)}},[i]),m.jsx(cv,{isPresent:i,childRef:o,sizeRef:c,children:P.cloneElement(n,{ref:o})})}const dv=({children:n,initial:i,isPresent:s,onExitComplete:o,custom:c,presenceAffectsLayout:h,mode:d})=>{const f=nc(hv),p=P.useId(),y=P.useCallback(w=>{f.set(w,!0);for(const k of f.values())if(!k)return;o&&o()},[f,o]),v=P.useMemo(()=>({id:p,initial:i,isPresent:s,custom:c,onExitComplete:y,register:w=>(f.set(w,!1),()=>f.delete(w))}),h?[Math.random(),y]:[s,y]);return P.useMemo(()=>{f.forEach((w,k)=>f.set(k,!1))},[s]),P.useEffect(()=>{!s&&!f.size&&o&&o()},[s]),d==="popLayout"&&(n=m.jsx(uv,{isPresent:s,children:n})),m.jsx(da.Provider,{value:v,children:n})};function hv(){return new Map}function Tf(n=!0){const i=P.useContext(da);if(i===null)return[!0,null];const{isPresent:s,onExitComplete:o,register:c}=i,h=P.useId();P.useEffect(()=>{n&&c(h)},[n]);const d=P.useCallback(()=>n&&o&&o(h),[h,o,n]);return!s&&o?[!1,d]:[!0]}const Us=n=>n.key||"";function $h(n){const i=[];return P.Children.forEach(n,s=>{P.isValidElement(s)&&i.push(s)}),i}const rc=typeof window<"u",Pf=rc?P.useLayoutEffect:P.useEffect,Js=({children:n,custom:i,initial:s=!0,onExitComplete:o,presenceAffectsLayout:c=!0,mode:h="sync",propagate:d=!1})=>{const[f,p]=Tf(d),y=P.useMemo(()=>$h(n),[n]),v=d&&!f?[]:y.map(Us),w=P.useRef(!0),k=P.useRef(y),j=nc(()=>new Map),[I,M]=P.useState(y),[N,L]=P.useState(y);Pf(()=>{w.current=!1,k.current=y;for(let Q=0;Q<N.length;Q++){const H=Us(N[Q]);v.includes(H)?j.delete(H):j.get(H)!==!0&&j.set(H,!1)}},[N,v.length,v.join("-")]);const R=[];if(y!==I){let Q=[...y];for(let H=0;H<N.length;H++){const te=N[H],le=Us(te);v.includes(le)||(Q.splice(H,0,te),R.push(te))}h==="wait"&&R.length&&(Q=R),L($h(Q)),M(y);return}const{forceRender:O}=P.useContext(tc);return m.jsx(m.Fragment,{children:N.map(Q=>{const H=Us(Q),te=d&&!f?!1:y===N||v.includes(H),le=()=>{if(j.has(H))j.set(H,!0);else return;let X=!0;j.forEach(ve=>{ve||(X=!1)}),X&&(O?.(),L(k.current),d&&p?.(),o&&o())};return m.jsx(dv,{isPresent:te,initial:!w.current||s?void 0:!1,custom:te?void 0:i,presenceAffectsLayout:c,mode:h,onExitComplete:te?void 0:le,children:Q},H)})})},mt=n=>n;let jf=mt;function sc(n){let i;return()=>(i===void 0&&(i=n()),i)}const xi=(n,i,s)=>{const o=i-n;return o===0?1:(s-n)/o},$t=n=>n*1e3,Gt=n=>n/1e3,mv={useManualTiming:!1};function fv(n){let i=new Set,s=new Set,o=!1,c=!1;const h=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function f(y){h.has(y)&&(p.schedule(y),n()),y(d)}const p={schedule:(y,v=!1,w=!1)=>{const j=w&&o?i:s;return v&&h.add(y),j.has(y)||j.add(y),y},cancel:y=>{s.delete(y),h.delete(y)},process:y=>{if(d=y,o){c=!0;return}o=!0,[i,s]=[s,i],i.forEach(f),i.clear(),o=!1,c&&(c=!1,p.process(y))}};return p}const qs=["read","resolveKeyframes","update","preRender","render","postRender"],pv=40;function Ef(n,i){let s=!1,o=!0;const c={delta:0,timestamp:0,isProcessing:!1},h=()=>s=!0,d=qs.reduce((L,R)=>(L[R]=fv(h),L),{}),{read:f,resolveKeyframes:p,update:y,preRender:v,render:w,postRender:k}=d,j=()=>{const L=performance.now();s=!1,c.delta=o?1e3/60:Math.max(Math.min(L-c.timestamp,pv),1),c.timestamp=L,c.isProcessing=!0,f.process(c),p.process(c),y.process(c),v.process(c),w.process(c),k.process(c),c.isProcessing=!1,s&&i&&(o=!1,n(j))},I=()=>{s=!0,o=!0,c.isProcessing||n(j)};return{schedule:qs.reduce((L,R)=>{const O=d[R];return L[R]=(Q,H=!1,te=!1)=>(s||I(),O.schedule(Q,H,te)),L},{}),cancel:L=>{for(let R=0;R<qs.length;R++)d[qs[R]].cancel(L)},state:c,steps:d}}const{schedule:ke,cancel:wn,state:Ve,steps:vl}=Ef(typeof requestAnimationFrame<"u"?requestAnimationFrame:mt,!0),Nf=P.createContext({strict:!1}),Gh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ki={};for(const n in Gh)ki[n]={isEnabled:i=>Gh[n].some(s=>!!i[s])};function gv(n){for(const i in n)ki[i]={...ki[i],...n[i]}}const yv=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ea(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||yv.has(n)}let Mf=n=>!ea(n);function vv(n){n&&(Mf=i=>i.startsWith("on")?!ea(i):n(i))}try{vv(require("@emotion/is-prop-valid").default)}catch{}function wv(n,i,s){const o={};for(const c in n)c==="values"&&typeof n.values=="object"||(Mf(c)||s===!0&&ea(c)||!i&&!ea(c)||n.draggable&&c.startsWith("onDrag"))&&(o[c]=n[c]);return o}function xv(n){if(typeof Proxy>"u")return n;const i=new Map,s=(...o)=>n(...o);return new Proxy(s,{get:(o,c)=>c==="create"?n:(i.has(c)||i.set(c,n(c)),i.get(c))})}const ha=P.createContext({});function Sr(n){return typeof n=="string"||Array.isArray(n)}function ma(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const ac=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],oc=["initial",...ac];function fa(n){return ma(n.animate)||oc.some(i=>Sr(n[i]))}function Rf(n){return!!(fa(n)||n.variants)}function kv(n,i){if(fa(n)){const{initial:s,animate:o}=n;return{initial:s===!1||Sr(s)?s:void 0,animate:Sr(o)?o:void 0}}return n.inherit!==!1?i:{}}function bv(n){const{initial:i,animate:s}=kv(n,P.useContext(ha));return P.useMemo(()=>({initial:i,animate:s}),[Yh(i),Yh(s)])}function Yh(n){return Array.isArray(n)?n.join(" "):n}const Sv=Symbol.for("motionComponentSymbol");function mi(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function Av(n,i,s){return P.useCallback(o=>{o&&n.onMount&&n.onMount(o),i&&(o?i.mount(o):i.unmount()),s&&(typeof s=="function"?s(o):mi(s)&&(s.current=o))},[i])}const lc=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Cv="framerAppearId",If="data-"+lc(Cv),{schedule:cc}=Ef(queueMicrotask,!1),Df=P.createContext({});function Tv(n,i,s,o,c){var h,d;const{visualElement:f}=P.useContext(ha),p=P.useContext(Nf),y=P.useContext(da),v=P.useContext(ic).reducedMotion,w=P.useRef(null);o=o||p.renderer,!w.current&&o&&(w.current=o(n,{visualState:i,parent:f,props:s,presenceContext:y,blockInitialAnimation:y?y.initial===!1:!1,reducedMotionConfig:v}));const k=w.current,j=P.useContext(Df);k&&!k.projection&&c&&(k.type==="html"||k.type==="svg")&&Pv(w.current,s,c,j);const I=P.useRef(!1);P.useInsertionEffect(()=>{k&&I.current&&k.update(s,y)});const M=s[If],N=P.useRef(!!M&&!(!((h=window.MotionHandoffIsComplete)===null||h===void 0)&&h.call(window,M))&&((d=window.MotionHasOptimisedAnimation)===null||d===void 0?void 0:d.call(window,M)));return Pf(()=>{k&&(I.current=!0,window.MotionIsMounted=!0,k.updateFeatures(),cc.render(k.render),N.current&&k.animationState&&k.animationState.animateChanges())}),P.useEffect(()=>{k&&(!N.current&&k.animationState&&k.animationState.animateChanges(),N.current&&(queueMicrotask(()=>{var L;(L=window.MotionHandoffMarkAsComplete)===null||L===void 0||L.call(window,M)}),N.current=!1))}),k}function Pv(n,i,s,o){const{layoutId:c,layout:h,drag:d,dragConstraints:f,layoutScroll:p,layoutRoot:y}=i;n.projection=new s(n.latestValues,i["data-framer-portal-id"]?void 0:Lf(n.parent)),n.projection.setOptions({layoutId:c,layout:h,alwaysMeasureLayout:!!d||f&&mi(f),visualElement:n,animationType:typeof h=="string"?h:"both",initialPromotionConfig:o,layoutScroll:p,layoutRoot:y})}function Lf(n){if(n)return n.options.allowProjection!==!1?n.projection:Lf(n.parent)}function jv({preloadedFeatures:n,createVisualElement:i,useRender:s,useVisualState:o,Component:c}){var h,d;n&&gv(n);function f(y,v){let w;const k={...P.useContext(ic),...y,layoutId:Ev(y)},{isStatic:j}=k,I=bv(y),M=o(y,j);if(!j&&rc){Nv();const N=Mv(k);w=N.MeasureLayout,I.visualElement=Tv(c,M,k,i,N.ProjectionNode)}return m.jsxs(ha.Provider,{value:I,children:[w&&I.visualElement?m.jsx(w,{visualElement:I.visualElement,...k}):null,s(c,y,Av(M,I.visualElement,v),M,j,I.visualElement)]})}f.displayName=`motion.${typeof c=="string"?c:`create(${(d=(h=c.displayName)!==null&&h!==void 0?h:c.name)!==null&&d!==void 0?d:""})`}`;const p=P.forwardRef(f);return p[Sv]=c,p}function Ev({layoutId:n}){const i=P.useContext(tc).id;return i&&n!==void 0?i+"-"+n:n}function Nv(n,i){P.useContext(Nf).strict}function Mv(n){const{drag:i,layout:s}=ki;if(!i&&!s)return{};const o={...i,...s};return{MeasureLayout:i?.isEnabled(n)||s?.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}const Rv=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function uc(n){return typeof n!="string"||n.includes("-")?!1:!!(Rv.indexOf(n)>-1||/[A-Z]/u.test(n))}function Kh(n){const i=[{},{}];return n?.values.forEach((s,o)=>{i[0][o]=s.get(),i[1][o]=s.getVelocity()}),i}function dc(n,i,s,o){if(typeof i=="function"){const[c,h]=Kh(o);i=i(s!==void 0?s:n.custom,c,h)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[c,h]=Kh(o);i=i(s!==void 0?s:n.custom,c,h)}return i}const Dl=n=>Array.isArray(n),Iv=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),Dv=n=>Dl(n)?n[n.length-1]||0:n,Ge=n=>!!(n&&n.getVelocity);function Ys(n){const i=Ge(n)?n.get():n;return Iv(i)?i.toValue():i}function Lv({scrapeMotionValuesFromProps:n,createRenderState:i,onUpdate:s},o,c,h){const d={latestValues:Wv(o,c,h,n),renderState:i()};return s&&(d.onMount=f=>s({props:o,current:f,...d}),d.onUpdate=f=>s(f)),d}const Wf=n=>(i,s)=>{const o=P.useContext(ha),c=P.useContext(da),h=()=>Lv(n,i,o,c);return s?h():nc(h)};function Wv(n,i,s,o){const c={},h=o(n,{});for(const k in h)c[k]=Ys(h[k]);let{initial:d,animate:f}=n;const p=fa(n),y=Rf(n);i&&y&&!p&&n.inherit!==!1&&(d===void 0&&(d=i.initial),f===void 0&&(f=i.animate));let v=s?s.initial===!1:!1;v=v||d===!1;const w=v?f:d;if(w&&typeof w!="boolean"&&!ma(w)){const k=Array.isArray(w)?w:[w];for(let j=0;j<k.length;j++){const I=dc(n,k[j]);if(I){const{transitionEnd:M,transition:N,...L}=I;for(const R in L){let O=L[R];if(Array.isArray(O)){const Q=v?O.length-1:0;O=O[Q]}O!==null&&(c[R]=O)}for(const R in M)c[R]=M[R]}}}return c}const Ci=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Bn=new Set(Ci),Ff=n=>i=>typeof i=="string"&&i.startsWith(n),zf=Ff("--"),Fv=Ff("var(--"),hc=n=>Fv(n)?zv.test(n.split("/*")[0].trim()):!1,zv=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Of=(n,i)=>i&&typeof n=="number"?i.transform(n):n,Yt=(n,i,s)=>s>i?i:s<n?n:s,Ti={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ar={...Ti,transform:n=>Yt(0,1,n)},Qs={...Ti,default:1},jr=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),gn=jr("deg"),Ft=jr("%"),ne=jr("px"),Ov=jr("vh"),_v=jr("vw"),Xh={...Ft,parse:n=>Ft.parse(n)/100,transform:n=>Ft.transform(n*100)},Bv={borderWidth:ne,borderTopWidth:ne,borderRightWidth:ne,borderBottomWidth:ne,borderLeftWidth:ne,borderRadius:ne,radius:ne,borderTopLeftRadius:ne,borderTopRightRadius:ne,borderBottomRightRadius:ne,borderBottomLeftRadius:ne,width:ne,maxWidth:ne,height:ne,maxHeight:ne,top:ne,right:ne,bottom:ne,left:ne,padding:ne,paddingTop:ne,paddingRight:ne,paddingBottom:ne,paddingLeft:ne,margin:ne,marginTop:ne,marginRight:ne,marginBottom:ne,marginLeft:ne,backgroundPositionX:ne,backgroundPositionY:ne},Vv={rotate:gn,rotateX:gn,rotateY:gn,rotateZ:gn,scale:Qs,scaleX:Qs,scaleY:Qs,scaleZ:Qs,skew:gn,skewX:gn,skewY:gn,distance:ne,translateX:ne,translateY:ne,translateZ:ne,x:ne,y:ne,z:ne,perspective:ne,transformPerspective:ne,opacity:Ar,originX:Xh,originY:Xh,originZ:ne},Zh={...Ti,transform:Math.round},mc={...Bv,...Vv,zIndex:Zh,size:ne,fillOpacity:Ar,strokeOpacity:Ar,numOctaves:Zh},Hv={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Uv=Ci.length;function qv(n,i,s){let o="",c=!0;for(let h=0;h<Uv;h++){const d=Ci[h],f=n[d];if(f===void 0)continue;let p=!0;if(typeof f=="number"?p=f===(d.startsWith("scale")?1:0):p=parseFloat(f)===0,!p||s){const y=Of(f,mc[d]);if(!p){c=!1;const v=Hv[d]||d;o+=`${v}(${y}) `}s&&(i[d]=y)}}return o=o.trim(),s?o=s(i,c?"":o):c&&(o="none"),o}function fc(n,i,s){const{style:o,vars:c,transformOrigin:h}=n;let d=!1,f=!1;for(const p in i){const y=i[p];if(Bn.has(p)){d=!0;continue}else if(zf(p)){c[p]=y;continue}else{const v=Of(y,mc[p]);p.startsWith("origin")?(f=!0,h[p]=v):o[p]=v}}if(i.transform||(d||s?o.transform=qv(i,n.transform,s):o.transform&&(o.transform="none")),f){const{originX:p="50%",originY:y="50%",originZ:v=0}=h;o.transformOrigin=`${p} ${y} ${v}`}}const Qv={offset:"stroke-dashoffset",array:"stroke-dasharray"},$v={offset:"strokeDashoffset",array:"strokeDasharray"};function Gv(n,i,s=1,o=0,c=!0){n.pathLength=1;const h=c?Qv:$v;n[h.offset]=ne.transform(-o);const d=ne.transform(i),f=ne.transform(s);n[h.array]=`${d} ${f}`}function Jh(n,i,s){return typeof n=="string"?n:ne.transform(i+s*n)}function Yv(n,i,s){const o=Jh(i,n.x,n.width),c=Jh(s,n.y,n.height);return`${o} ${c}`}function pc(n,{attrX:i,attrY:s,attrScale:o,originX:c,originY:h,pathLength:d,pathSpacing:f=1,pathOffset:p=0,...y},v,w){if(fc(n,y,w),v){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:k,style:j,dimensions:I}=n;k.transform&&(I&&(j.transform=k.transform),delete k.transform),I&&(c!==void 0||h!==void 0||j.transform)&&(j.transformOrigin=Yv(I,c!==void 0?c:.5,h!==void 0?h:.5)),i!==void 0&&(k.x=i),s!==void 0&&(k.y=s),o!==void 0&&(k.scale=o),d!==void 0&&Gv(k,d,f,p,!1)}const gc=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),_f=()=>({...gc(),attrs:{}}),yc=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Bf(n,{style:i,vars:s},o,c){Object.assign(n.style,i,c&&c.getProjectionStyles(o));for(const h in s)n.style.setProperty(h,s[h])}const Vf=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Hf(n,i,s,o){Bf(n,i,void 0,o);for(const c in i.attrs)n.setAttribute(Vf.has(c)?c:lc(c),i.attrs[c])}const ta={};function Kv(n){Object.assign(ta,n)}function Uf(n,{layout:i,layoutId:s}){return Bn.has(n)||n.startsWith("origin")||(i||s!==void 0)&&(!!ta[n]||n==="opacity")}function vc(n,i,s){var o;const{style:c}=n,h={};for(const d in c)(Ge(c[d])||i.style&&Ge(i.style[d])||Uf(d,n)||((o=s?.getValue(d))===null||o===void 0?void 0:o.liveStyle)!==void 0)&&(h[d]=c[d]);return h}function qf(n,i,s){const o=vc(n,i,s);for(const c in n)if(Ge(n[c])||Ge(i[c])){const h=Ci.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;o[h]=n[c]}return o}function Xv(n,i){try{i.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{i.dimensions={x:0,y:0,width:0,height:0}}}const em=["x","y","width","height","cx","cy","r"],Zv={useVisualState:Wf({scrapeMotionValuesFromProps:qf,createRenderState:_f,onUpdate:({props:n,prevProps:i,current:s,renderState:o,latestValues:c})=>{if(!s)return;let h=!!n.drag;if(!h){for(const f in c)if(Bn.has(f)){h=!0;break}}if(!h)return;let d=!i;if(i)for(let f=0;f<em.length;f++){const p=em[f];n[p]!==i[p]&&(d=!0)}d&&ke.read(()=>{Xv(s,o),ke.render(()=>{pc(o,c,yc(s.tagName),n.transformTemplate),Hf(s,o)})})}})},Jv={useVisualState:Wf({scrapeMotionValuesFromProps:vc,createRenderState:gc})};function Qf(n,i,s){for(const o in i)!Ge(i[o])&&!Uf(o,s)&&(n[o]=i[o])}function ew({transformTemplate:n},i){return P.useMemo(()=>{const s=gc();return fc(s,i,n),Object.assign({},s.vars,s.style)},[i])}function tw(n,i){const s=n.style||{},o={};return Qf(o,s,n),Object.assign(o,ew(n,i)),o}function nw(n,i){const s={},o=tw(n,i);return n.drag&&n.dragListener!==!1&&(s.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(s.tabIndex=0),s.style=o,s}function iw(n,i,s,o){const c=P.useMemo(()=>{const h=_f();return pc(h,i,yc(o),n.transformTemplate),{...h.attrs,style:{...h.style}}},[i]);if(n.style){const h={};Qf(h,n.style,n),c.style={...h,...c.style}}return c}function rw(n=!1){return(s,o,c,{latestValues:h},d)=>{const p=(uc(s)?iw:nw)(o,h,d,s),y=wv(o,typeof s=="string",n),v=s!==P.Fragment?{...y,...p,ref:c}:{},{children:w}=o,k=P.useMemo(()=>Ge(w)?w.get():w,[w]);return P.createElement(s,{...v,children:k})}}function sw(n,i){return function(o,{forwardMotionProps:c}={forwardMotionProps:!1}){const d={...uc(o)?Zv:Jv,preloadedFeatures:n,useRender:rw(c),createVisualElement:i,Component:o};return jv(d)}}function $f(n,i){if(!Array.isArray(i))return!1;const s=i.length;if(s!==n.length)return!1;for(let o=0;o<s;o++)if(i[o]!==n[o])return!1;return!0}function pa(n,i,s){const o=n.getProps();return dc(o,i,s!==void 0?s:o.custom,n)}const aw=sc(()=>window.ScrollTimeline!==void 0);class ow{constructor(i){this.stop=()=>this.runAll("stop"),this.animations=i.filter(Boolean)}get finished(){return Promise.all(this.animations.map(i=>"finished"in i?i.finished:i))}getAll(i){return this.animations[0][i]}setAll(i,s){for(let o=0;o<this.animations.length;o++)this.animations[o][i]=s}attachTimeline(i,s){const o=this.animations.map(c=>{if(aw()&&c.attachTimeline)return c.attachTimeline(i);if(typeof s=="function")return s(c)});return()=>{o.forEach((c,h)=>{c&&c(),this.animations[h].stop()})}}get time(){return this.getAll("time")}set time(i){this.setAll("time",i)}get speed(){return this.getAll("speed")}set speed(i){this.setAll("speed",i)}get startTime(){return this.getAll("startTime")}get duration(){let i=0;for(let s=0;s<this.animations.length;s++)i=Math.max(i,this.animations[s].duration);return i}runAll(i){this.animations.forEach(s=>s[i]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class lw extends ow{then(i,s){return Promise.all(this.animations).then(i).catch(s)}}function wc(n,i){return n?n[i]||n.default||n:void 0}const Ll=2e4;function Gf(n){let i=0;const s=50;let o=n.next(i);for(;!o.done&&i<Ll;)i+=s,o=n.next(i);return i>=Ll?1/0:i}function xc(n){return typeof n=="function"}function tm(n,i){n.timeline=i,n.onfinish=null}const kc=n=>Array.isArray(n)&&typeof n[0]=="number",cw={linearEasing:void 0};function uw(n,i){const s=sc(n);return()=>{var o;return(o=cw[i])!==null&&o!==void 0?o:s()}}const na=uw(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Yf=(n,i,s=10)=>{let o="";const c=Math.max(Math.round(i/s),2);for(let h=0;h<c;h++)o+=n(xi(0,c-1,h))+", ";return`linear(${o.substring(0,o.length-2)})`};function Kf(n){return!!(typeof n=="function"&&na()||!n||typeof n=="string"&&(n in Wl||na())||kc(n)||Array.isArray(n)&&n.every(Kf))}const fr=([n,i,s,o])=>`cubic-bezier(${n}, ${i}, ${s}, ${o})`,Wl={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:fr([0,.65,.55,1]),circOut:fr([.55,0,1,.45]),backIn:fr([.31,.01,.66,-.59]),backOut:fr([.33,1.53,.69,.99])};function Xf(n,i){if(n)return typeof n=="function"&&na()?Yf(n,i):kc(n)?fr(n):Array.isArray(n)?n.map(s=>Xf(s,i)||Wl.easeOut):Wl[n]}const Mt={x:!1,y:!1};function Zf(){return Mt.x||Mt.y}function Jf(n,i,s){var o;if(n instanceof Element)return[n];if(typeof n=="string"){let c=document;const h=(o=void 0)!==null&&o!==void 0?o:c.querySelectorAll(n);return h?Array.from(h):[]}return Array.from(n)}function ep(n,i){const s=Jf(n),o=new AbortController,c={passive:!0,...i,signal:o.signal};return[s,c,()=>o.abort()]}function nm(n){return i=>{i.pointerType==="touch"||Zf()||n(i)}}function dw(n,i,s={}){const[o,c,h]=ep(n,s),d=nm(f=>{const{target:p}=f,y=i(f);if(typeof y!="function"||!p)return;const v=nm(w=>{y(w),p.removeEventListener("pointerleave",v)});p.addEventListener("pointerleave",v,c)});return o.forEach(f=>{f.addEventListener("pointerenter",d,c)}),h}const tp=(n,i)=>i?n===i?!0:tp(n,i.parentElement):!1,bc=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,hw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function mw(n){return hw.has(n.tagName)||n.tabIndex!==-1}const pr=new WeakSet;function im(n){return i=>{i.key==="Enter"&&n(i)}}function wl(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const fw=(n,i)=>{const s=n.currentTarget;if(!s)return;const o=im(()=>{if(pr.has(s))return;wl(s,"down");const c=im(()=>{wl(s,"up")}),h=()=>wl(s,"cancel");s.addEventListener("keyup",c,i),s.addEventListener("blur",h,i)});s.addEventListener("keydown",o,i),s.addEventListener("blur",()=>s.removeEventListener("keydown",o),i)};function rm(n){return bc(n)&&!Zf()}function pw(n,i,s={}){const[o,c,h]=ep(n,s),d=f=>{const p=f.currentTarget;if(!rm(f)||pr.has(p))return;pr.add(p);const y=i(f),v=(j,I)=>{window.removeEventListener("pointerup",w),window.removeEventListener("pointercancel",k),!(!rm(j)||!pr.has(p))&&(pr.delete(p),typeof y=="function"&&y(j,{success:I}))},w=j=>{v(j,s.useGlobalTarget||tp(p,j.target))},k=j=>{v(j,!1)};window.addEventListener("pointerup",w,c),window.addEventListener("pointercancel",k,c)};return o.forEach(f=>{!mw(f)&&f.getAttribute("tabindex")===null&&(f.tabIndex=0),(s.useGlobalTarget?window:f).addEventListener("pointerdown",d,c),f.addEventListener("focus",y=>fw(y,c),c)}),h}function gw(n){return n==="x"||n==="y"?Mt[n]?null:(Mt[n]=!0,()=>{Mt[n]=!1}):Mt.x||Mt.y?null:(Mt.x=Mt.y=!0,()=>{Mt.x=Mt.y=!1})}const np=new Set(["width","height","top","left","right","bottom",...Ci]);let Ks;function yw(){Ks=void 0}const zt={now:()=>(Ks===void 0&&zt.set(Ve.isProcessing||mv.useManualTiming?Ve.timestamp:performance.now()),Ks),set:n=>{Ks=n,queueMicrotask(yw)}};function Sc(n,i){n.indexOf(i)===-1&&n.push(i)}function Ac(n,i){const s=n.indexOf(i);s>-1&&n.splice(s,1)}class Cc{constructor(){this.subscriptions=[]}add(i){return Sc(this.subscriptions,i),()=>Ac(this.subscriptions,i)}notify(i,s,o){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,s,o);else for(let h=0;h<c;h++){const d=this.subscriptions[h];d&&d(i,s,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function ip(n,i){return i?n*(1e3/i):0}const sm=30,vw=n=>!isNaN(parseFloat(n));class ww{constructor(i,s={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(o,c=!0)=>{const h=zt.now();this.updatedAt!==h&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),c&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=s.owner}setCurrent(i){this.current=i,this.updatedAt=zt.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=vw(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,s){this.events[i]||(this.events[i]=new Cc);const o=this.events[i].add(s);return i==="change"?()=>{o(),ke.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,s){this.passiveEffect=i,this.stopPassiveEffect=s}set(i,s=!0){!s||!this.passiveEffect?this.updateAndNotify(i,s):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,s,o){this.set(s),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-o}jump(i,s=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=zt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>sm)return 0;const s=Math.min(this.updatedAt-this.prevUpdatedAt,sm);return ip(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)}start(i){return this.stop(),new Promise(s=>{this.hasAnimated=!0,this.animation=i(s),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Cr(n,i){return new ww(n,i)}function xw(n,i,s){n.hasValue(i)?n.getValue(i).set(s):n.addValue(i,Cr(s))}function kw(n,i){const s=pa(n,i);let{transitionEnd:o={},transition:c={},...h}=s||{};h={...h,...o};for(const d in h){const f=Dv(h[d]);xw(n,d,f)}}function bw(n){return!!(Ge(n)&&n.add)}function Fl(n,i){const s=n.getValue("willChange");if(bw(s))return s.add(i)}function rp(n){return n.props[If]}const sp=(n,i,s)=>(((1-3*s+3*i)*n+(3*s-6*i))*n+3*i)*n,Sw=1e-7,Aw=12;function Cw(n,i,s,o,c){let h,d,f=0;do d=i+(s-i)/2,h=sp(d,o,c)-n,h>0?s=d:i=d;while(Math.abs(h)>Sw&&++f<Aw);return d}function Er(n,i,s,o){if(n===i&&s===o)return mt;const c=h=>Cw(h,0,1,n,s);return h=>h===0||h===1?h:sp(c(h),i,o)}const ap=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,op=n=>i=>1-n(1-i),lp=Er(.33,1.53,.69,.99),Tc=op(lp),cp=ap(Tc),up=n=>(n*=2)<1?.5*Tc(n):.5*(2-Math.pow(2,-10*(n-1))),Pc=n=>1-Math.sin(Math.acos(n)),dp=op(Pc),hp=ap(Pc),mp=n=>/^0[^.\s]+$/u.test(n);function Tw(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||mp(n):!0}const yr=n=>Math.round(n*1e5)/1e5,jc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Pw(n){return n==null}const jw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ec=(n,i)=>s=>!!(typeof s=="string"&&jw.test(s)&&s.startsWith(n)||i&&!Pw(s)&&Object.prototype.hasOwnProperty.call(s,i)),fp=(n,i,s)=>o=>{if(typeof o!="string")return o;const[c,h,d,f]=o.match(jc);return{[n]:parseFloat(c),[i]:parseFloat(h),[s]:parseFloat(d),alpha:f!==void 0?parseFloat(f):1}},Ew=n=>Yt(0,255,n),xl={...Ti,transform:n=>Math.round(Ew(n))},zn={test:Ec("rgb","red"),parse:fp("red","green","blue"),transform:({red:n,green:i,blue:s,alpha:o=1})=>"rgba("+xl.transform(n)+", "+xl.transform(i)+", "+xl.transform(s)+", "+yr(Ar.transform(o))+")"};function Nw(n){let i="",s="",o="",c="";return n.length>5?(i=n.substring(1,3),s=n.substring(3,5),o=n.substring(5,7),c=n.substring(7,9)):(i=n.substring(1,2),s=n.substring(2,3),o=n.substring(3,4),c=n.substring(4,5),i+=i,s+=s,o+=o,c+=c),{red:parseInt(i,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:c?parseInt(c,16)/255:1}}const zl={test:Ec("#"),parse:Nw,transform:zn.transform},fi={test:Ec("hsl","hue"),parse:fp("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:s,alpha:o=1})=>"hsla("+Math.round(n)+", "+Ft.transform(yr(i))+", "+Ft.transform(yr(s))+", "+yr(Ar.transform(o))+")"},$e={test:n=>zn.test(n)||zl.test(n)||fi.test(n),parse:n=>zn.test(n)?zn.parse(n):fi.test(n)?fi.parse(n):zl.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?zn.transform(n):fi.transform(n)},Mw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Rw(n){var i,s;return isNaN(n)&&typeof n=="string"&&(((i=n.match(jc))===null||i===void 0?void 0:i.length)||0)+(((s=n.match(Mw))===null||s===void 0?void 0:s.length)||0)>0}const pp="number",gp="color",Iw="var",Dw="var(",am="${}",Lw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Tr(n){const i=n.toString(),s=[],o={color:[],number:[],var:[]},c=[];let h=0;const f=i.replace(Lw,p=>($e.test(p)?(o.color.push(h),c.push(gp),s.push($e.parse(p))):p.startsWith(Dw)?(o.var.push(h),c.push(Iw),s.push(p)):(o.number.push(h),c.push(pp),s.push(parseFloat(p))),++h,am)).split(am);return{values:s,split:f,indexes:o,types:c}}function yp(n){return Tr(n).values}function vp(n){const{split:i,types:s}=Tr(n),o=i.length;return c=>{let h="";for(let d=0;d<o;d++)if(h+=i[d],c[d]!==void 0){const f=s[d];f===pp?h+=yr(c[d]):f===gp?h+=$e.transform(c[d]):h+=c[d]}return h}}const Ww=n=>typeof n=="number"?0:n;function Fw(n){const i=yp(n);return vp(n)(i.map(Ww))}const xn={test:Rw,parse:yp,createTransformer:vp,getAnimatableNone:Fw},zw=new Set(["brightness","contrast","saturate","opacity"]);function Ow(n){const[i,s]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[o]=s.match(jc)||[];if(!o)return n;const c=s.replace(o,"");let h=zw.has(i)?1:0;return o!==s&&(h*=100),i+"("+h+c+")"}const _w=/\b([a-z-]*)\(.*?\)/gu,Ol={...xn,getAnimatableNone:n=>{const i=n.match(_w);return i?i.map(Ow).join(" "):n}},Bw={...mc,color:$e,backgroundColor:$e,outlineColor:$e,fill:$e,stroke:$e,borderColor:$e,borderTopColor:$e,borderRightColor:$e,borderBottomColor:$e,borderLeftColor:$e,filter:Ol,WebkitFilter:Ol},Nc=n=>Bw[n];function wp(n,i){let s=Nc(n);return s!==Ol&&(s=xn),s.getAnimatableNone?s.getAnimatableNone(i):void 0}const Vw=new Set(["auto","none","0"]);function Hw(n,i,s){let o=0,c;for(;o<n.length&&!c;){const h=n[o];typeof h=="string"&&!Vw.has(h)&&Tr(h).values.length&&(c=n[o]),o++}if(c&&s)for(const h of i)n[h]=wp(s,c)}const om=n=>n===Ti||n===ne,lm=(n,i)=>parseFloat(n.split(", ")[i]),cm=(n,i)=>(s,{transform:o})=>{if(o==="none"||!o)return 0;const c=o.match(/^matrix3d\((.+)\)$/u);if(c)return lm(c[1],i);{const h=o.match(/^matrix\((.+)\)$/u);return h?lm(h[1],n):0}},Uw=new Set(["x","y","z"]),qw=Ci.filter(n=>!Uw.has(n));function Qw(n){const i=[];return qw.forEach(s=>{const o=n.getValue(s);o!==void 0&&(i.push([s,o.get()]),o.set(s.startsWith("scale")?1:0))}),i}const bi={width:({x:n},{paddingLeft:i="0",paddingRight:s="0"})=>n.max-n.min-parseFloat(i)-parseFloat(s),height:({y:n},{paddingTop:i="0",paddingBottom:s="0"})=>n.max-n.min-parseFloat(i)-parseFloat(s),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:cm(4,13),y:cm(5,14)};bi.translateX=bi.x;bi.translateY=bi.y;const _n=new Set;let _l=!1,Bl=!1;function xp(){if(Bl){const n=Array.from(_n).filter(o=>o.needsMeasurement),i=new Set(n.map(o=>o.element)),s=new Map;i.forEach(o=>{const c=Qw(o);c.length&&(s.set(o,c),o.render())}),n.forEach(o=>o.measureInitialState()),i.forEach(o=>{o.render();const c=s.get(o);c&&c.forEach(([h,d])=>{var f;(f=o.getValue(h))===null||f===void 0||f.set(d)})}),n.forEach(o=>o.measureEndState()),n.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Bl=!1,_l=!1,_n.forEach(n=>n.complete()),_n.clear()}function kp(){_n.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Bl=!0)})}function $w(){kp(),xp()}class Mc{constructor(i,s,o,c,h,d=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...i],this.onComplete=s,this.name=o,this.motionValue=c,this.element=h,this.isAsync=d}scheduleResolve(){this.isScheduled=!0,this.isAsync?(_n.add(this),_l||(_l=!0,ke.read(kp),ke.resolveKeyframes(xp))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:s,element:o,motionValue:c}=this;for(let h=0;h<i.length;h++)if(i[h]===null)if(h===0){const d=c?.get(),f=i[i.length-1];if(d!==void 0)i[0]=d;else if(o&&s){const p=o.readValue(s,f);p!=null&&(i[0]=p)}i[0]===void 0&&(i[0]=f),c&&d===void 0&&c.set(i[0])}else i[h]=i[h-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),_n.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,_n.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const bp=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),Gw=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Yw(n){const i=Gw.exec(n);if(!i)return[,];const[,s,o,c]=i;return[`--${s??o}`,c]}function Sp(n,i,s=1){const[o,c]=Yw(n);if(!o)return;const h=window.getComputedStyle(i).getPropertyValue(o);if(h){const d=h.trim();return bp(d)?parseFloat(d):d}return hc(c)?Sp(c,i,s+1):c}const Ap=n=>i=>i.test(n),Kw={test:n=>n==="auto",parse:n=>n},Cp=[Ti,ne,Ft,gn,_v,Ov,Kw],um=n=>Cp.find(Ap(n));class Tp extends Mc{constructor(i,s,o,c,h){super(i,s,o,c,h,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:s,name:o}=this;if(!s||!s.current)return;super.readKeyframes();for(let p=0;p<i.length;p++){let y=i[p];if(typeof y=="string"&&(y=y.trim(),hc(y))){const v=Sp(y,s.current);v!==void 0&&(i[p]=v),p===i.length-1&&(this.finalKeyframe=y)}}if(this.resolveNoneKeyframes(),!np.has(o)||i.length!==2)return;const[c,h]=i,d=um(c),f=um(h);if(d!==f)if(om(d)&&om(f))for(let p=0;p<i.length;p++){const y=i[p];typeof y=="string"&&(i[p]=parseFloat(y))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:s}=this,o=[];for(let c=0;c<i.length;c++)Tw(i[c])&&o.push(c);o.length&&Hw(i,o,s)}measureInitialState(){const{element:i,unresolvedKeyframes:s,name:o}=this;if(!i||!i.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=bi[o](i.measureViewportBox(),window.getComputedStyle(i.current)),s[0]=this.measuredOrigin;const c=s[s.length-1];c!==void 0&&i.getValue(o,c).jump(c,!1)}measureEndState(){var i;const{element:s,name:o,unresolvedKeyframes:c}=this;if(!s||!s.current)return;const h=s.getValue(o);h&&h.jump(this.measuredOrigin,!1);const d=c.length-1,f=c[d];c[d]=bi[o](s.measureViewportBox(),window.getComputedStyle(s.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),!((i=this.removedTransforms)===null||i===void 0)&&i.length&&this.removedTransforms.forEach(([p,y])=>{s.getValue(p).set(y)}),this.resolveNoneKeyframes()}}const dm=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(xn.test(n)||n==="0")&&!n.startsWith("url("));function Xw(n){const i=n[0];if(n.length===1)return!0;for(let s=0;s<n.length;s++)if(n[s]!==i)return!0}function Zw(n,i,s,o){const c=n[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const h=n[n.length-1],d=dm(c,i),f=dm(h,i);return!d||!f?!1:Xw(n)||(s==="spring"||xc(s))&&o}const Jw=n=>n!==null;function ga(n,{repeat:i,repeatType:s="loop"},o){const c=n.filter(Jw),h=i&&s!=="loop"&&i%2===1?0:c.length-1;return!h||o===void 0?c[h]:o}const ex=40;class Pp{constructor({autoplay:i=!0,delay:s=0,type:o="keyframes",repeat:c=0,repeatDelay:h=0,repeatType:d="loop",...f}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=zt.now(),this.options={autoplay:i,delay:s,type:o,repeat:c,repeatDelay:h,repeatType:d,...f},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>ex?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&$w(),this._resolved}onKeyframesResolved(i,s){this.resolvedAt=zt.now(),this.hasAttemptedResolve=!0;const{name:o,type:c,velocity:h,delay:d,onComplete:f,onUpdate:p,isGenerator:y}=this.options;if(!y&&!Zw(i,o,c,h))if(d)this.options.duration=0;else{p&&p(ga(i,this.options,s)),f&&f(),this.resolveFinishedPromise();return}const v=this.initPlayback(i,s);v!==!1&&(this._resolved={keyframes:i,finalKeyframe:s,...v},this.onPostResolved())}onPostResolved(){}then(i,s){return this.currentFinishedPromise.then(i,s)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(i=>{this.resolveFinishedPromise=i})}}const Te=(n,i,s)=>n+(i-n)*s;function kl(n,i,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?n+(i-n)*6*s:s<1/2?i:s<2/3?n+(i-n)*(2/3-s)*6:n}function tx({hue:n,saturation:i,lightness:s,alpha:o}){n/=360,i/=100,s/=100;let c=0,h=0,d=0;if(!i)c=h=d=s;else{const f=s<.5?s*(1+i):s+i-s*i,p=2*s-f;c=kl(p,f,n+1/3),h=kl(p,f,n),d=kl(p,f,n-1/3)}return{red:Math.round(c*255),green:Math.round(h*255),blue:Math.round(d*255),alpha:o}}function ia(n,i){return s=>s>0?i:n}const bl=(n,i,s)=>{const o=n*n,c=s*(i*i-o)+o;return c<0?0:Math.sqrt(c)},nx=[zl,zn,fi],ix=n=>nx.find(i=>i.test(n));function hm(n){const i=ix(n);if(!i)return!1;let s=i.parse(n);return i===fi&&(s=tx(s)),s}const mm=(n,i)=>{const s=hm(n),o=hm(i);if(!s||!o)return ia(n,i);const c={...s};return h=>(c.red=bl(s.red,o.red,h),c.green=bl(s.green,o.green,h),c.blue=bl(s.blue,o.blue,h),c.alpha=Te(s.alpha,o.alpha,h),zn.transform(c))},rx=(n,i)=>s=>i(n(s)),Nr=(...n)=>n.reduce(rx),Vl=new Set(["none","hidden"]);function sx(n,i){return Vl.has(n)?s=>s<=0?n:i:s=>s>=1?i:n}function ax(n,i){return s=>Te(n,i,s)}function Rc(n){return typeof n=="number"?ax:typeof n=="string"?hc(n)?ia:$e.test(n)?mm:cx:Array.isArray(n)?jp:typeof n=="object"?$e.test(n)?mm:ox:ia}function jp(n,i){const s=[...n],o=s.length,c=n.map((h,d)=>Rc(h)(h,i[d]));return h=>{for(let d=0;d<o;d++)s[d]=c[d](h);return s}}function ox(n,i){const s={...n,...i},o={};for(const c in s)n[c]!==void 0&&i[c]!==void 0&&(o[c]=Rc(n[c])(n[c],i[c]));return c=>{for(const h in o)s[h]=o[h](c);return s}}function lx(n,i){var s;const o=[],c={color:0,var:0,number:0};for(let h=0;h<i.values.length;h++){const d=i.types[h],f=n.indexes[d][c[d]],p=(s=n.values[f])!==null&&s!==void 0?s:0;o[h]=p,c[d]++}return o}const cx=(n,i)=>{const s=xn.createTransformer(i),o=Tr(n),c=Tr(i);return o.indexes.var.length===c.indexes.var.length&&o.indexes.color.length===c.indexes.color.length&&o.indexes.number.length>=c.indexes.number.length?Vl.has(n)&&!c.values.length||Vl.has(i)&&!o.values.length?sx(n,i):Nr(jp(lx(o,c),c.values),s):ia(n,i)};function Ep(n,i,s){return typeof n=="number"&&typeof i=="number"&&typeof s=="number"?Te(n,i,s):Rc(n)(n,i)}const ux=5;function Np(n,i,s){const o=Math.max(i-ux,0);return ip(s-n(o),i-o)}const Ee={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Sl=.001;function dx({duration:n=Ee.duration,bounce:i=Ee.bounce,velocity:s=Ee.velocity,mass:o=Ee.mass}){let c,h,d=1-i;d=Yt(Ee.minDamping,Ee.maxDamping,d),n=Yt(Ee.minDuration,Ee.maxDuration,Gt(n)),d<1?(c=y=>{const v=y*d,w=v*n,k=v-s,j=Hl(y,d),I=Math.exp(-w);return Sl-k/j*I},h=y=>{const w=y*d*n,k=w*s+s,j=Math.pow(d,2)*Math.pow(y,2)*n,I=Math.exp(-w),M=Hl(Math.pow(y,2),d);return(-c(y)+Sl>0?-1:1)*((k-j)*I)/M}):(c=y=>{const v=Math.exp(-y*n),w=(y-s)*n+1;return-Sl+v*w},h=y=>{const v=Math.exp(-y*n),w=(s-y)*(n*n);return v*w});const f=5/n,p=mx(c,h,f);if(n=$t(n),isNaN(p))return{stiffness:Ee.stiffness,damping:Ee.damping,duration:n};{const y=Math.pow(p,2)*o;return{stiffness:y,damping:d*2*Math.sqrt(o*y),duration:n}}}const hx=12;function mx(n,i,s){let o=s;for(let c=1;c<hx;c++)o=o-n(o)/i(o);return o}function Hl(n,i){return n*Math.sqrt(1-i*i)}const fx=["duration","bounce"],px=["stiffness","damping","mass"];function fm(n,i){return i.some(s=>n[s]!==void 0)}function gx(n){let i={velocity:Ee.velocity,stiffness:Ee.stiffness,damping:Ee.damping,mass:Ee.mass,isResolvedFromDuration:!1,...n};if(!fm(n,px)&&fm(n,fx))if(n.visualDuration){const s=n.visualDuration,o=2*Math.PI/(s*1.2),c=o*o,h=2*Yt(.05,1,1-(n.bounce||0))*Math.sqrt(c);i={...i,mass:Ee.mass,stiffness:c,damping:h}}else{const s=dx(n);i={...i,...s,mass:Ee.mass},i.isResolvedFromDuration=!0}return i}function Mp(n=Ee.visualDuration,i=Ee.bounce){const s=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:o,restDelta:c}=s;const h=s.keyframes[0],d=s.keyframes[s.keyframes.length-1],f={done:!1,value:h},{stiffness:p,damping:y,mass:v,duration:w,velocity:k,isResolvedFromDuration:j}=gx({...s,velocity:-Gt(s.velocity||0)}),I=k||0,M=y/(2*Math.sqrt(p*v)),N=d-h,L=Gt(Math.sqrt(p/v)),R=Math.abs(N)<5;o||(o=R?Ee.restSpeed.granular:Ee.restSpeed.default),c||(c=R?Ee.restDelta.granular:Ee.restDelta.default);let O;if(M<1){const H=Hl(L,M);O=te=>{const le=Math.exp(-M*L*te);return d-le*((I+M*L*N)/H*Math.sin(H*te)+N*Math.cos(H*te))}}else if(M===1)O=H=>d-Math.exp(-L*H)*(N+(I+L*N)*H);else{const H=L*Math.sqrt(M*M-1);O=te=>{const le=Math.exp(-M*L*te),X=Math.min(H*te,300);return d-le*((I+M*L*N)*Math.sinh(X)+H*N*Math.cosh(X))/H}}const Q={calculatedDuration:j&&w||null,next:H=>{const te=O(H);if(j)f.done=H>=w;else{let le=0;M<1&&(le=H===0?$t(I):Np(O,H,te));const X=Math.abs(le)<=o,ve=Math.abs(d-te)<=c;f.done=X&&ve}return f.value=f.done?d:te,f},toString:()=>{const H=Math.min(Gf(Q),Ll),te=Yf(le=>Q.next(H*le).value,H,30);return H+"ms "+te}};return Q}function pm({keyframes:n,velocity:i=0,power:s=.8,timeConstant:o=325,bounceDamping:c=10,bounceStiffness:h=500,modifyTarget:d,min:f,max:p,restDelta:y=.5,restSpeed:v}){const w=n[0],k={done:!1,value:w},j=X=>f!==void 0&&X<f||p!==void 0&&X>p,I=X=>f===void 0?p:p===void 0||Math.abs(f-X)<Math.abs(p-X)?f:p;let M=s*i;const N=w+M,L=d===void 0?N:d(N);L!==N&&(M=L-w);const R=X=>-M*Math.exp(-X/o),O=X=>L+R(X),Q=X=>{const ve=R(X),Pe=O(X);k.done=Math.abs(ve)<=y,k.value=k.done?L:Pe};let H,te;const le=X=>{j(k.value)&&(H=X,te=Mp({keyframes:[k.value,I(k.value)],velocity:Np(O,X,k.value),damping:c,stiffness:h,restDelta:y,restSpeed:v}))};return le(0),{calculatedDuration:null,next:X=>{let ve=!1;return!te&&H===void 0&&(ve=!0,Q(X),le(X)),H!==void 0&&X>=H?te.next(X-H):(!ve&&Q(X),k)}}}const yx=Er(.42,0,1,1),vx=Er(0,0,.58,1),Rp=Er(.42,0,.58,1),wx=n=>Array.isArray(n)&&typeof n[0]!="number",xx={linear:mt,easeIn:yx,easeInOut:Rp,easeOut:vx,circIn:Pc,circInOut:hp,circOut:dp,backIn:Tc,backInOut:cp,backOut:lp,anticipate:up},gm=n=>{if(kc(n)){jf(n.length===4);const[i,s,o,c]=n;return Er(i,s,o,c)}else if(typeof n=="string")return xx[n];return n};function kx(n,i,s){const o=[],c=s||Ep,h=n.length-1;for(let d=0;d<h;d++){let f=c(n[d],n[d+1]);if(i){const p=Array.isArray(i)?i[d]||mt:i;f=Nr(p,f)}o.push(f)}return o}function bx(n,i,{clamp:s=!0,ease:o,mixer:c}={}){const h=n.length;if(jf(h===i.length),h===1)return()=>i[0];if(h===2&&i[0]===i[1])return()=>i[1];const d=n[0]===n[1];n[0]>n[h-1]&&(n=[...n].reverse(),i=[...i].reverse());const f=kx(i,o,c),p=f.length,y=v=>{if(d&&v<n[0])return i[0];let w=0;if(p>1)for(;w<n.length-2&&!(v<n[w+1]);w++);const k=xi(n[w],n[w+1],v);return f[w](k)};return s?v=>y(Yt(n[0],n[h-1],v)):y}function Sx(n,i){const s=n[n.length-1];for(let o=1;o<=i;o++){const c=xi(0,i,o);n.push(Te(s,1,c))}}function Ax(n){const i=[0];return Sx(i,n.length-1),i}function Cx(n,i){return n.map(s=>s*i)}function Tx(n,i){return n.map(()=>i||Rp).splice(0,n.length-1)}function ra({duration:n=300,keyframes:i,times:s,ease:o="easeInOut"}){const c=wx(o)?o.map(gm):gm(o),h={done:!1,value:i[0]},d=Cx(s&&s.length===i.length?s:Ax(i),n),f=bx(d,i,{ease:Array.isArray(c)?c:Tx(i,c)});return{calculatedDuration:n,next:p=>(h.value=f(p),h.done=p>=n,h)}}const Px=n=>{const i=({timestamp:s})=>n(s);return{start:()=>ke.update(i,!0),stop:()=>wn(i),now:()=>Ve.isProcessing?Ve.timestamp:zt.now()}},jx={decay:pm,inertia:pm,tween:ra,keyframes:ra,spring:Mp},Ex=n=>n/100;class Ic extends Pp{constructor(i){super(i),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:p}=this.options;p&&p()};const{name:s,motionValue:o,element:c,keyframes:h}=this.options,d=c?.KeyframeResolver||Mc,f=(p,y)=>this.onKeyframesResolved(p,y);this.resolver=new d(h,f,s,o,c),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(i){const{type:s="keyframes",repeat:o=0,repeatDelay:c=0,repeatType:h,velocity:d=0}=this.options,f=xc(s)?s:jx[s]||ra;let p,y;f!==ra&&typeof i[0]!="number"&&(p=Nr(Ex,Ep(i[0],i[1])),i=[0,100]);const v=f({...this.options,keyframes:i});h==="mirror"&&(y=f({...this.options,keyframes:[...i].reverse(),velocity:-d})),v.calculatedDuration===null&&(v.calculatedDuration=Gf(v));const{calculatedDuration:w}=v,k=w+c,j=k*(o+1)-c;return{generator:v,mirroredGenerator:y,mapPercentToKeyframes:p,calculatedDuration:w,resolvedDuration:k,totalDuration:j}}onPostResolved(){const{autoplay:i=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!i?this.pause():this.state=this.pendingPlayState}tick(i,s=!1){const{resolved:o}=this;if(!o){const{keyframes:X}=this.options;return{done:!0,value:X[X.length-1]}}const{finalKeyframe:c,generator:h,mirroredGenerator:d,mapPercentToKeyframes:f,keyframes:p,calculatedDuration:y,totalDuration:v,resolvedDuration:w}=o;if(this.startTime===null)return h.next(0);const{delay:k,repeat:j,repeatType:I,repeatDelay:M,onUpdate:N}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-v/this.speed,this.startTime)),s?this.currentTime=i:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(i-this.startTime)*this.speed;const L=this.currentTime-k*(this.speed>=0?1:-1),R=this.speed>=0?L<0:L>v;this.currentTime=Math.max(L,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=v);let O=this.currentTime,Q=h;if(j){const X=Math.min(this.currentTime,v)/w;let ve=Math.floor(X),Pe=X%1;!Pe&&X>=1&&(Pe=1),Pe===1&&ve--,ve=Math.min(ve,j+1),!!(ve%2)&&(I==="reverse"?(Pe=1-Pe,M&&(Pe-=M/w)):I==="mirror"&&(Q=d)),O=Yt(0,1,Pe)*w}const H=R?{done:!1,value:p[0]}:Q.next(O);f&&(H.value=f(H.value));let{done:te}=H;!R&&y!==null&&(te=this.speed>=0?this.currentTime>=v:this.currentTime<=0);const le=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&te);return le&&c!==void 0&&(H.value=ga(p,this.options,c)),N&&N(H.value),le&&this.finish(),H}get duration(){const{resolved:i}=this;return i?Gt(i.calculatedDuration):0}get time(){return Gt(this.currentTime)}set time(i){i=$t(i),this.currentTime=i,this.holdTime!==null||this.speed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.speed)}get speed(){return this.playbackSpeed}set speed(i){const s=this.playbackSpeed!==i;this.playbackSpeed=i,s&&(this.time=Gt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:i=Px,onPlay:s,startTime:o}=this.options;this.driver||(this.driver=i(h=>this.tick(h))),s&&s();const c=this.driver.now();this.holdTime!==null?this.startTime=c-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=c):this.startTime=o??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var i;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(i=this.currentTime)!==null&&i!==void 0?i:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:i}=this.options;i&&i()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}}const Nx=new Set(["opacity","clipPath","filter","transform"]);function Mx(n,i,s,{delay:o=0,duration:c=300,repeat:h=0,repeatType:d="loop",ease:f="easeInOut",times:p}={}){const y={[i]:s};p&&(y.offset=p);const v=Xf(f,c);return Array.isArray(v)&&(y.easing=v),n.animate(y,{delay:o,duration:c,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:h+1,direction:d==="reverse"?"alternate":"normal"})}const Rx=sc(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),sa=10,Ix=2e4;function Dx(n){return xc(n.type)||n.type==="spring"||!Kf(n.ease)}function Lx(n,i){const s=new Ic({...i,keyframes:n,repeat:0,delay:0,isGenerator:!0});let o={done:!1,value:n[0]};const c=[];let h=0;for(;!o.done&&h<Ix;)o=s.sample(h),c.push(o.value),h+=sa;return{times:void 0,keyframes:c,duration:h-sa,ease:"linear"}}const Ip={anticipate:up,backInOut:cp,circInOut:hp};function Wx(n){return n in Ip}class ym extends Pp{constructor(i){super(i);const{name:s,motionValue:o,element:c,keyframes:h}=this.options;this.resolver=new Tp(h,(d,f)=>this.onKeyframesResolved(d,f),s,o,c),this.resolver.scheduleResolve()}initPlayback(i,s){let{duration:o=300,times:c,ease:h,type:d,motionValue:f,name:p,startTime:y}=this.options;if(!f.owner||!f.owner.current)return!1;if(typeof h=="string"&&na()&&Wx(h)&&(h=Ip[h]),Dx(this.options)){const{onComplete:w,onUpdate:k,motionValue:j,element:I,...M}=this.options,N=Lx(i,M);i=N.keyframes,i.length===1&&(i[1]=i[0]),o=N.duration,c=N.times,h=N.ease,d="keyframes"}const v=Mx(f.owner.current,p,i,{...this.options,duration:o,times:c,ease:h});return v.startTime=y??this.calcStartTime(),this.pendingTimeline?(tm(v,this.pendingTimeline),this.pendingTimeline=void 0):v.onfinish=()=>{const{onComplete:w}=this.options;f.set(ga(i,this.options,s)),w&&w(),this.cancel(),this.resolveFinishedPromise()},{animation:v,duration:o,times:c,type:d,ease:h,keyframes:i}}get duration(){const{resolved:i}=this;if(!i)return 0;const{duration:s}=i;return Gt(s)}get time(){const{resolved:i}=this;if(!i)return 0;const{animation:s}=i;return Gt(s.currentTime||0)}set time(i){const{resolved:s}=this;if(!s)return;const{animation:o}=s;o.currentTime=$t(i)}get speed(){const{resolved:i}=this;if(!i)return 1;const{animation:s}=i;return s.playbackRate}set speed(i){const{resolved:s}=this;if(!s)return;const{animation:o}=s;o.playbackRate=i}get state(){const{resolved:i}=this;if(!i)return"idle";const{animation:s}=i;return s.playState}get startTime(){const{resolved:i}=this;if(!i)return null;const{animation:s}=i;return s.startTime}attachTimeline(i){if(!this._resolved)this.pendingTimeline=i;else{const{resolved:s}=this;if(!s)return mt;const{animation:o}=s;tm(o,i)}return mt}play(){if(this.isStopped)return;const{resolved:i}=this;if(!i)return;const{animation:s}=i;s.playState==="finished"&&this.updateFinishedPromise(),s.play()}pause(){const{resolved:i}=this;if(!i)return;const{animation:s}=i;s.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:i}=this;if(!i)return;const{animation:s,keyframes:o,duration:c,type:h,ease:d,times:f}=i;if(s.playState==="idle"||s.playState==="finished")return;if(this.time){const{motionValue:y,onUpdate:v,onComplete:w,element:k,...j}=this.options,I=new Ic({...j,keyframes:o,duration:c,type:h,ease:d,times:f,isGenerator:!0}),M=$t(this.time);y.setWithVelocity(I.sample(M-sa).value,I.sample(M).value,sa)}const{onStop:p}=this.options;p&&p(),this.cancel()}complete(){const{resolved:i}=this;i&&i.animation.finish()}cancel(){const{resolved:i}=this;i&&i.animation.cancel()}static supports(i){const{motionValue:s,name:o,repeatDelay:c,repeatType:h,damping:d,type:f}=i;if(!s||!s.owner||!(s.owner.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:y}=s.owner.getProps();return Rx()&&o&&Nx.has(o)&&!p&&!y&&!c&&h!=="mirror"&&d!==0&&f!=="inertia"}}const Fx={type:"spring",stiffness:500,damping:25,restSpeed:10},zx=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Ox={type:"keyframes",duration:.8},_x={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Bx=(n,{keyframes:i})=>i.length>2?Ox:Bn.has(n)?n.startsWith("scale")?zx(i[1]):Fx:_x;function Vx({when:n,delay:i,delayChildren:s,staggerChildren:o,staggerDirection:c,repeat:h,repeatType:d,repeatDelay:f,from:p,elapsed:y,...v}){return!!Object.keys(v).length}const Dc=(n,i,s,o={},c,h)=>d=>{const f=wc(o,n)||{},p=f.delay||o.delay||0;let{elapsed:y=0}=o;y=y-$t(p);let v={keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:i.getVelocity(),...f,delay:-y,onUpdate:k=>{i.set(k),f.onUpdate&&f.onUpdate(k)},onComplete:()=>{d(),f.onComplete&&f.onComplete()},name:n,motionValue:i,element:h?void 0:c};Vx(f)||(v={...v,...Bx(n,v)}),v.duration&&(v.duration=$t(v.duration)),v.repeatDelay&&(v.repeatDelay=$t(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let w=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(v.duration=0,v.delay===0&&(w=!0)),w&&!h&&i.get()!==void 0){const k=ga(v.keyframes,f);if(k!==void 0)return ke.update(()=>{v.onUpdate(k),v.onComplete()}),new lw([])}return!h&&ym.supports(v)?new ym(v):new Ic(v)};function Hx({protectedKeys:n,needsAnimating:i},s){const o=n.hasOwnProperty(s)&&i[s]!==!0;return i[s]=!1,o}function Dp(n,i,{delay:s=0,transitionOverride:o,type:c}={}){var h;let{transition:d=n.getDefaultTransition(),transitionEnd:f,...p}=i;o&&(d=o);const y=[],v=c&&n.animationState&&n.animationState.getState()[c];for(const w in p){const k=n.getValue(w,(h=n.latestValues[w])!==null&&h!==void 0?h:null),j=p[w];if(j===void 0||v&&Hx(v,w))continue;const I={delay:s,...wc(d||{},w)};let M=!1;if(window.MotionHandoffAnimation){const L=rp(n);if(L){const R=window.MotionHandoffAnimation(L,w,ke);R!==null&&(I.startTime=R,M=!0)}}Fl(n,w),k.start(Dc(w,k,j,n.shouldReduceMotion&&np.has(w)?{type:!1}:I,n,M));const N=k.animation;N&&y.push(N)}return f&&Promise.all(y).then(()=>{ke.update(()=>{f&&kw(n,f)})}),y}function Ul(n,i,s={}){var o;const c=pa(n,i,s.type==="exit"?(o=n.presenceContext)===null||o===void 0?void 0:o.custom:void 0);let{transition:h=n.getDefaultTransition()||{}}=c||{};s.transitionOverride&&(h=s.transitionOverride);const d=c?()=>Promise.all(Dp(n,c,s)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(y=0)=>{const{delayChildren:v=0,staggerChildren:w,staggerDirection:k}=h;return Ux(n,i,v+y,w,k,s)}:()=>Promise.resolve(),{when:p}=h;if(p){const[y,v]=p==="beforeChildren"?[d,f]:[f,d];return y().then(()=>v())}else return Promise.all([d(),f(s.delay)])}function Ux(n,i,s=0,o=0,c=1,h){const d=[],f=(n.variantChildren.size-1)*o,p=c===1?(y=0)=>y*o:(y=0)=>f-y*o;return Array.from(n.variantChildren).sort(qx).forEach((y,v)=>{y.notify("AnimationStart",i),d.push(Ul(y,i,{...h,delay:s+p(v)}).then(()=>y.notify("AnimationComplete",i)))}),Promise.all(d)}function qx(n,i){return n.sortNodePosition(i)}function Qx(n,i,s={}){n.notify("AnimationStart",i);let o;if(Array.isArray(i)){const c=i.map(h=>Ul(n,h,s));o=Promise.all(c)}else if(typeof i=="string")o=Ul(n,i,s);else{const c=typeof i=="function"?pa(n,i,s.custom):i;o=Promise.all(Dp(n,c,s))}return o.then(()=>{n.notify("AnimationComplete",i)})}const $x=oc.length;function Lp(n){if(!n)return;if(!n.isControllingVariants){const s=n.parent?Lp(n.parent)||{}:{};return n.props.initial!==void 0&&(s.initial=n.props.initial),s}const i={};for(let s=0;s<$x;s++){const o=oc[s],c=n.props[o];(Sr(c)||c===!1)&&(i[o]=c)}return i}const Gx=[...ac].reverse(),Yx=ac.length;function Kx(n){return i=>Promise.all(i.map(({animation:s,options:o})=>Qx(n,s,o)))}function Xx(n){let i=Kx(n),s=vm(),o=!0;const c=p=>(y,v)=>{var w;const k=pa(n,v,p==="exit"?(w=n.presenceContext)===null||w===void 0?void 0:w.custom:void 0);if(k){const{transition:j,transitionEnd:I,...M}=k;y={...y,...M,...I}}return y};function h(p){i=p(n)}function d(p){const{props:y}=n,v=Lp(n.parent)||{},w=[],k=new Set;let j={},I=1/0;for(let N=0;N<Yx;N++){const L=Gx[N],R=s[L],O=y[L]!==void 0?y[L]:v[L],Q=Sr(O),H=L===p?R.isActive:null;H===!1&&(I=N);let te=O===v[L]&&O!==y[L]&&Q;if(te&&o&&n.manuallyAnimateOnMount&&(te=!1),R.protectedKeys={...j},!R.isActive&&H===null||!O&&!R.prevProp||ma(O)||typeof O=="boolean")continue;const le=Zx(R.prevProp,O);let X=le||L===p&&R.isActive&&!te&&Q||N>I&&Q,ve=!1;const Pe=Array.isArray(O)?O:[O];let Je=Pe.reduce(c(L),{});H===!1&&(Je={});const{prevResolvedValues:ot={}}=R,Ye={...ot,...Je},et=se=>{X=!0,k.has(se)&&(ve=!0,k.delete(se)),R.needsAnimating[se]=!0;const V=n.getValue(se);V&&(V.liveStyle=!1)};for(const se in Ye){const V=Je[se],Z=ot[se];if(j.hasOwnProperty(se))continue;let q=!1;Dl(V)&&Dl(Z)?q=!$f(V,Z):q=V!==Z,q?V!=null?et(se):k.add(se):V!==void 0&&k.has(se)?et(se):R.protectedKeys[se]=!0}R.prevProp=O,R.prevResolvedValues=Je,R.isActive&&(j={...j,...Je}),o&&n.blockInitialAnimation&&(X=!1),X&&(!(te&&le)||ve)&&w.push(...Pe.map(se=>({animation:se,options:{type:L}})))}if(k.size){const N={};k.forEach(L=>{const R=n.getBaseTarget(L),O=n.getValue(L);O&&(O.liveStyle=!0),N[L]=R??null}),w.push({animation:N})}let M=!!w.length;return o&&(y.initial===!1||y.initial===y.animate)&&!n.manuallyAnimateOnMount&&(M=!1),o=!1,M?i(w):Promise.resolve()}function f(p,y){var v;if(s[p].isActive===y)return Promise.resolve();(v=n.variantChildren)===null||v===void 0||v.forEach(k=>{var j;return(j=k.animationState)===null||j===void 0?void 0:j.setActive(p,y)}),s[p].isActive=y;const w=d(p);for(const k in s)s[k].protectedKeys={};return w}return{animateChanges:d,setActive:f,setAnimateFunction:h,getState:()=>s,reset:()=>{s=vm(),o=!0}}}function Zx(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!$f(i,n):!1}function Ln(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function vm(){return{animate:Ln(!0),whileInView:Ln(),whileHover:Ln(),whileTap:Ln(),whileDrag:Ln(),whileFocus:Ln(),exit:Ln()}}class kn{constructor(i){this.isMounted=!1,this.node=i}update(){}}class Jx extends kn{constructor(i){super(i),i.animationState||(i.animationState=Xx(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();ma(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:s}=this.node.prevProps||{};i!==s&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)===null||i===void 0||i.call(this)}}let e1=0;class t1 extends kn{constructor(){super(...arguments),this.id=e1++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:s}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===o)return;const c=this.node.animationState.setActive("exit",!i);s&&!i&&c.then(()=>s(this.id))}mount(){const{register:i}=this.node.presenceContext||{};i&&(this.unmount=i(this.id))}unmount(){}}const n1={animation:{Feature:Jx},exit:{Feature:t1}};function Pr(n,i,s,o={passive:!0}){return n.addEventListener(i,s,o),()=>n.removeEventListener(i,s)}function Mr(n){return{point:{x:n.pageX,y:n.pageY}}}const i1=n=>i=>bc(i)&&n(i,Mr(i));function vr(n,i,s,o){return Pr(n,i,i1(s),o)}const wm=(n,i)=>Math.abs(n-i);function r1(n,i){const s=wm(n.x,i.x),o=wm(n.y,i.y);return Math.sqrt(s**2+o**2)}class Wp{constructor(i,s,{transformPagePoint:o,contextWindow:c,dragSnapToOrigin:h=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Cl(this.lastMoveEventInfo,this.history),k=this.startEvent!==null,j=r1(w.offset,{x:0,y:0})>=3;if(!k&&!j)return;const{point:I}=w,{timestamp:M}=Ve;this.history.push({...I,timestamp:M});const{onStart:N,onMove:L}=this.handlers;k||(N&&N(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),L&&L(this.lastMoveEvent,w)},this.handlePointerMove=(w,k)=>{this.lastMoveEvent=w,this.lastMoveEventInfo=Al(k,this.transformPagePoint),ke.update(this.updatePoint,!0)},this.handlePointerUp=(w,k)=>{this.end();const{onEnd:j,onSessionEnd:I,resumeAnimation:M}=this.handlers;if(this.dragSnapToOrigin&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const N=Cl(w.type==="pointercancel"?this.lastMoveEventInfo:Al(k,this.transformPagePoint),this.history);this.startEvent&&j&&j(w,N),I&&I(w,N)},!bc(i))return;this.dragSnapToOrigin=h,this.handlers=s,this.transformPagePoint=o,this.contextWindow=c||window;const d=Mr(i),f=Al(d,this.transformPagePoint),{point:p}=f,{timestamp:y}=Ve;this.history=[{...p,timestamp:y}];const{onSessionStart:v}=s;v&&v(i,Cl(f,this.history)),this.removeListeners=Nr(vr(this.contextWindow,"pointermove",this.handlePointerMove),vr(this.contextWindow,"pointerup",this.handlePointerUp),vr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),wn(this.updatePoint)}}function Al(n,i){return i?{point:i(n.point)}:n}function xm(n,i){return{x:n.x-i.x,y:n.y-i.y}}function Cl({point:n},i){return{point:n,delta:xm(n,Fp(i)),offset:xm(n,s1(i)),velocity:a1(i,.1)}}function s1(n){return n[0]}function Fp(n){return n[n.length-1]}function a1(n,i){if(n.length<2)return{x:0,y:0};let s=n.length-1,o=null;const c=Fp(n);for(;s>=0&&(o=n[s],!(c.timestamp-o.timestamp>$t(i)));)s--;if(!o)return{x:0,y:0};const h=Gt(c.timestamp-o.timestamp);if(h===0)return{x:0,y:0};const d={x:(c.x-o.x)/h,y:(c.y-o.y)/h};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}const zp=1e-4,o1=1-zp,l1=1+zp,Op=.01,c1=0-Op,u1=0+Op;function ft(n){return n.max-n.min}function d1(n,i,s){return Math.abs(n-i)<=s}function km(n,i,s,o=.5){n.origin=o,n.originPoint=Te(i.min,i.max,n.origin),n.scale=ft(s)/ft(i),n.translate=Te(s.min,s.max,n.origin)-n.originPoint,(n.scale>=o1&&n.scale<=l1||isNaN(n.scale))&&(n.scale=1),(n.translate>=c1&&n.translate<=u1||isNaN(n.translate))&&(n.translate=0)}function wr(n,i,s,o){km(n.x,i.x,s.x,o?o.originX:void 0),km(n.y,i.y,s.y,o?o.originY:void 0)}function bm(n,i,s){n.min=s.min+i.min,n.max=n.min+ft(i)}function h1(n,i,s){bm(n.x,i.x,s.x),bm(n.y,i.y,s.y)}function Sm(n,i,s){n.min=i.min-s.min,n.max=n.min+ft(i)}function xr(n,i,s){Sm(n.x,i.x,s.x),Sm(n.y,i.y,s.y)}function m1(n,{min:i,max:s},o){return i!==void 0&&n<i?n=o?Te(i,n,o.min):Math.max(n,i):s!==void 0&&n>s&&(n=o?Te(s,n,o.max):Math.min(n,s)),n}function Am(n,i,s){return{min:i!==void 0?n.min+i:void 0,max:s!==void 0?n.max+s-(n.max-n.min):void 0}}function f1(n,{top:i,left:s,bottom:o,right:c}){return{x:Am(n.x,s,c),y:Am(n.y,i,o)}}function Cm(n,i){let s=i.min-n.min,o=i.max-n.max;return i.max-i.min<n.max-n.min&&([s,o]=[o,s]),{min:s,max:o}}function p1(n,i){return{x:Cm(n.x,i.x),y:Cm(n.y,i.y)}}function g1(n,i){let s=.5;const o=ft(n),c=ft(i);return c>o?s=xi(i.min,i.max-o,n.min):o>c&&(s=xi(n.min,n.max-c,i.min)),Yt(0,1,s)}function y1(n,i){const s={};return i.min!==void 0&&(s.min=i.min-n.min),i.max!==void 0&&(s.max=i.max-n.min),s}const ql=.35;function v1(n=ql){return n===!1?n=0:n===!0&&(n=ql),{x:Tm(n,"left","right"),y:Tm(n,"top","bottom")}}function Tm(n,i,s){return{min:Pm(n,i),max:Pm(n,s)}}function Pm(n,i){return typeof n=="number"?n:n[i]||0}const jm=()=>({translate:0,scale:1,origin:0,originPoint:0}),pi=()=>({x:jm(),y:jm()}),Em=()=>({min:0,max:0}),Re=()=>({x:Em(),y:Em()});function bt(n){return[n("x"),n("y")]}function _p({top:n,left:i,right:s,bottom:o}){return{x:{min:i,max:s},y:{min:n,max:o}}}function w1({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function x1(n,i){if(!i)return n;const s=i({x:n.left,y:n.top}),o=i({x:n.right,y:n.bottom});return{top:s.y,left:s.x,bottom:o.y,right:o.x}}function Tl(n){return n===void 0||n===1}function Ql({scale:n,scaleX:i,scaleY:s}){return!Tl(n)||!Tl(i)||!Tl(s)}function Wn(n){return Ql(n)||Bp(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Bp(n){return Nm(n.x)||Nm(n.y)}function Nm(n){return n&&n!=="0%"}function aa(n,i,s){const o=n-s,c=i*o;return s+c}function Mm(n,i,s,o,c){return c!==void 0&&(n=aa(n,c,o)),aa(n,s,o)+i}function $l(n,i=0,s=1,o,c){n.min=Mm(n.min,i,s,o,c),n.max=Mm(n.max,i,s,o,c)}function Vp(n,{x:i,y:s}){$l(n.x,i.translate,i.scale,i.originPoint),$l(n.y,s.translate,s.scale,s.originPoint)}const Rm=.999999999999,Im=1.0000000000001;function k1(n,i,s,o=!1){const c=s.length;if(!c)return;i.x=i.y=1;let h,d;for(let f=0;f<c;f++){h=s[f],d=h.projectionDelta;const{visualElement:p}=h.options;p&&p.props.style&&p.props.style.display==="contents"||(o&&h.options.layoutScroll&&h.scroll&&h!==h.root&&yi(n,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,Vp(n,d)),o&&Wn(h.latestValues)&&yi(n,h.latestValues))}i.x<Im&&i.x>Rm&&(i.x=1),i.y<Im&&i.y>Rm&&(i.y=1)}function gi(n,i){n.min=n.min+i,n.max=n.max+i}function Dm(n,i,s,o,c=.5){const h=Te(n.min,n.max,c);$l(n,i,s,h,o)}function yi(n,i){Dm(n.x,i.x,i.scaleX,i.scale,i.originX),Dm(n.y,i.y,i.scaleY,i.scale,i.originY)}function Hp(n,i){return _p(x1(n.getBoundingClientRect(),i))}function b1(n,i,s){const o=Hp(n,s),{scroll:c}=i;return c&&(gi(o.x,c.offset.x),gi(o.y,c.offset.y)),o}const Up=({current:n})=>n?n.ownerDocument.defaultView:null,S1=new WeakMap;class A1{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Re(),this.visualElement=i}start(i,{snapToCursor:s=!1}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const c=v=>{const{dragSnapToOrigin:w}=this.getProps();w?this.pauseAnimation():this.stopAnimation(),s&&this.snapToCursor(Mr(v).point)},h=(v,w)=>{const{drag:k,dragPropagation:j,onDragStart:I}=this.getProps();if(k&&!j&&(this.openDragLock&&this.openDragLock(),this.openDragLock=gw(k),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),bt(N=>{let L=this.getAxisMotionValue(N).get()||0;if(Ft.test(L)){const{projection:R}=this.visualElement;if(R&&R.layout){const O=R.layout.layoutBox[N];O&&(L=ft(O)*(parseFloat(L)/100))}}this.originPoint[N]=L}),I&&ke.postRender(()=>I(v,w)),Fl(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},d=(v,w)=>{const{dragPropagation:k,dragDirectionLock:j,onDirectionLock:I,onDrag:M}=this.getProps();if(!k&&!this.openDragLock)return;const{offset:N}=w;if(j&&this.currentDirection===null){this.currentDirection=C1(N),this.currentDirection!==null&&I&&I(this.currentDirection);return}this.updateAxis("x",w.point,N),this.updateAxis("y",w.point,N),this.visualElement.render(),M&&M(v,w)},f=(v,w)=>this.stop(v,w),p=()=>bt(v=>{var w;return this.getAnimationState(v)==="paused"&&((w=this.getAxisMotionValue(v).animation)===null||w===void 0?void 0:w.play())}),{dragSnapToOrigin:y}=this.getProps();this.panSession=new Wp(i,{onSessionStart:c,onStart:h,onMove:d,onSessionEnd:f,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,contextWindow:Up(this.visualElement)})}stop(i,s){const o=this.isDragging;if(this.cancel(),!o)return;const{velocity:c}=s;this.startAnimation(c);const{onDragEnd:h}=this.getProps();h&&ke.postRender(()=>h(i,s))}cancel(){this.isDragging=!1;const{projection:i,animationState:s}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),s&&s.setActive("whileDrag",!1)}updateAxis(i,s,o){const{drag:c}=this.getProps();if(!o||!$s(i,c,this.currentDirection))return;const h=this.getAxisMotionValue(i);let d=this.originPoint[i]+o[i];this.constraints&&this.constraints[i]&&(d=m1(d,this.constraints[i],this.elastic[i])),h.set(d)}resolveConstraints(){var i;const{dragConstraints:s,dragElastic:o}=this.getProps(),c=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)===null||i===void 0?void 0:i.layout,h=this.constraints;s&&mi(s)?this.constraints||(this.constraints=this.resolveRefConstraints()):s&&c?this.constraints=f1(c.layoutBox,s):this.constraints=!1,this.elastic=v1(o),h!==this.constraints&&c&&this.constraints&&!this.hasMutatedConstraints&&bt(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=y1(c.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:s}=this.getProps();if(!i||!mi(i))return!1;const o=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const h=b1(o,c.root,this.visualElement.getTransformPagePoint());let d=p1(c.layout.layoutBox,h);if(s){const f=s(w1(d));this.hasMutatedConstraints=!!f,f&&(d=_p(f))}return d}startAnimation(i){const{drag:s,dragMomentum:o,dragElastic:c,dragTransition:h,dragSnapToOrigin:d,onDragTransitionEnd:f}=this.getProps(),p=this.constraints||{},y=bt(v=>{if(!$s(v,s,this.currentDirection))return;let w=p&&p[v]||{};d&&(w={min:0,max:0});const k=c?200:1e6,j=c?40:1e7,I={type:"inertia",velocity:o?i[v]:0,bounceStiffness:k,bounceDamping:j,timeConstant:750,restDelta:1,restSpeed:10,...h,...w};return this.startAxisValueAnimation(v,I)});return Promise.all(y).then(f)}startAxisValueAnimation(i,s){const o=this.getAxisMotionValue(i);return Fl(this.visualElement,i),o.start(Dc(i,o,0,s,this.visualElement,!1))}stopAnimation(){bt(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){bt(i=>{var s;return(s=this.getAxisMotionValue(i).animation)===null||s===void 0?void 0:s.pause()})}getAnimationState(i){var s;return(s=this.getAxisMotionValue(i).animation)===null||s===void 0?void 0:s.state}getAxisMotionValue(i){const s=`_drag${i.toUpperCase()}`,o=this.visualElement.getProps(),c=o[s];return c||this.visualElement.getValue(i,(o.initial?o.initial[i]:void 0)||0)}snapToCursor(i){bt(s=>{const{drag:o}=this.getProps();if(!$s(s,o,this.currentDirection))return;const{projection:c}=this.visualElement,h=this.getAxisMotionValue(s);if(c&&c.layout){const{min:d,max:f}=c.layout.layoutBox[s];h.set(i[s]-Te(d,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:s}=this.getProps(),{projection:o}=this.visualElement;if(!mi(s)||!o||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};bt(d=>{const f=this.getAxisMotionValue(d);if(f&&this.constraints!==!1){const p=f.get();c[d]=g1({min:p,max:p},this.constraints[d])}});const{transformTemplate:h}=this.visualElement.getProps();this.visualElement.current.style.transform=h?h({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),bt(d=>{if(!$s(d,i,null))return;const f=this.getAxisMotionValue(d),{min:p,max:y}=this.constraints[d];f.set(Te(p,y,c[d]))})}addListeners(){if(!this.visualElement.current)return;S1.set(this.visualElement,this);const i=this.visualElement.current,s=vr(i,"pointerdown",p=>{const{drag:y,dragListener:v=!0}=this.getProps();y&&v&&this.start(p)}),o=()=>{const{dragConstraints:p}=this.getProps();mi(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,h=c.addEventListener("measure",o);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),ke.read(o);const d=Pr(window,"resize",()=>this.scalePositionWithinConstraints()),f=c.addEventListener("didUpdate",(({delta:p,hasLayoutChanged:y})=>{this.isDragging&&y&&(bt(v=>{const w=this.getAxisMotionValue(v);w&&(this.originPoint[v]+=p[v].translate,w.set(w.get()+p[v].translate))}),this.visualElement.render())}));return()=>{d(),s(),h(),f&&f()}}getProps(){const i=this.visualElement.getProps(),{drag:s=!1,dragDirectionLock:o=!1,dragPropagation:c=!1,dragConstraints:h=!1,dragElastic:d=ql,dragMomentum:f=!0}=i;return{...i,drag:s,dragDirectionLock:o,dragPropagation:c,dragConstraints:h,dragElastic:d,dragMomentum:f}}}function $s(n,i,s){return(i===!0||i===n)&&(s===null||s===n)}function C1(n,i=10){let s=null;return Math.abs(n.y)>i?s="y":Math.abs(n.x)>i&&(s="x"),s}class T1 extends kn{constructor(i){super(i),this.removeGroupControls=mt,this.removeListeners=mt,this.controls=new A1(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||mt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Lm=n=>(i,s)=>{n&&ke.postRender(()=>n(i,s))};class P1 extends kn{constructor(){super(...arguments),this.removePointerDownListener=mt}onPointerDown(i){this.session=new Wp(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Up(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:s,onPan:o,onPanEnd:c}=this.node.getProps();return{onSessionStart:Lm(i),onStart:Lm(s),onMove:o,onEnd:(h,d)=>{delete this.session,c&&ke.postRender(()=>c(h,d))}}}mount(){this.removePointerDownListener=vr(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Xs={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Wm(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const mr={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(ne.test(n))n=parseFloat(n);else return n;const s=Wm(n,i.target.x),o=Wm(n,i.target.y);return`${s}% ${o}%`}},j1={correct:(n,{treeScale:i,projectionDelta:s})=>{const o=n,c=xn.parse(n);if(c.length>5)return o;const h=xn.createTransformer(n),d=typeof c[0]!="number"?1:0,f=s.x.scale*i.x,p=s.y.scale*i.y;c[0+d]/=f,c[1+d]/=p;const y=Te(f,p,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),h(c)}};class E1 extends P.Component{componentDidMount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:o,layoutId:c}=this.props,{projection:h}=i;Kv(N1),h&&(s.group&&s.group.add(h),o&&o.register&&c&&o.register(h),h.root.didUpdate(),h.addEventListener("animationComplete",()=>{this.safeToRemove()}),h.setOptions({...h.options,onExitComplete:()=>this.safeToRemove()})),Xs.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:s,visualElement:o,drag:c,isPresent:h}=this.props,d=o.projection;return d&&(d.isPresent=h,c||i.layoutDependency!==s||s===void 0?d.willUpdate():this.safeToRemove(),i.isPresent!==h&&(h?d.promote():d.relegate()||ke.postRender(()=>{const f=d.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),cc.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:o}=this.props,{projection:c}=i;c&&(c.scheduleCheckAfterUnmount(),s&&s.group&&s.group.remove(c),o&&o.deregister&&o.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function qp(n){const[i,s]=Tf(),o=P.useContext(tc);return m.jsx(E1,{...n,layoutGroup:o,switchLayoutGroup:P.useContext(Df),isPresent:i,safeToRemove:s})}const N1={borderRadius:{...mr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:mr,borderTopRightRadius:mr,borderBottomLeftRadius:mr,borderBottomRightRadius:mr,boxShadow:j1};function M1(n,i,s){const o=Ge(n)?n:Cr(n);return o.start(Dc("",o,i,s)),o.animation}function R1(n){return n instanceof SVGElement&&n.tagName!=="svg"}const I1=(n,i)=>n.depth-i.depth;class D1{constructor(){this.children=[],this.isDirty=!1}add(i){Sc(this.children,i),this.isDirty=!0}remove(i){Ac(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(I1),this.isDirty=!1,this.children.forEach(i)}}function L1(n,i){const s=zt.now(),o=({timestamp:c})=>{const h=c-s;h>=i&&(wn(o),n(h-i))};return ke.read(o,!0),()=>wn(o)}const Qp=["TopLeft","TopRight","BottomLeft","BottomRight"],W1=Qp.length,Fm=n=>typeof n=="string"?parseFloat(n):n,zm=n=>typeof n=="number"||ne.test(n);function F1(n,i,s,o,c,h){c?(n.opacity=Te(0,s.opacity!==void 0?s.opacity:1,z1(o)),n.opacityExit=Te(i.opacity!==void 0?i.opacity:1,0,O1(o))):h&&(n.opacity=Te(i.opacity!==void 0?i.opacity:1,s.opacity!==void 0?s.opacity:1,o));for(let d=0;d<W1;d++){const f=`border${Qp[d]}Radius`;let p=Om(i,f),y=Om(s,f);if(p===void 0&&y===void 0)continue;p||(p=0),y||(y=0),p===0||y===0||zm(p)===zm(y)?(n[f]=Math.max(Te(Fm(p),Fm(y),o),0),(Ft.test(y)||Ft.test(p))&&(n[f]+="%")):n[f]=y}(i.rotate||s.rotate)&&(n.rotate=Te(i.rotate||0,s.rotate||0,o))}function Om(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const z1=$p(0,.5,dp),O1=$p(.5,.95,mt);function $p(n,i,s){return o=>o<n?0:o>i?1:s(xi(n,i,o))}function _m(n,i){n.min=i.min,n.max=i.max}function kt(n,i){_m(n.x,i.x),_m(n.y,i.y)}function Bm(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}function Vm(n,i,s,o,c){return n-=i,n=aa(n,1/s,o),c!==void 0&&(n=aa(n,1/c,o)),n}function _1(n,i=0,s=1,o=.5,c,h=n,d=n){if(Ft.test(i)&&(i=parseFloat(i),i=Te(d.min,d.max,i/100)-d.min),typeof i!="number")return;let f=Te(h.min,h.max,o);n===h&&(f-=i),n.min=Vm(n.min,i,s,f,c),n.max=Vm(n.max,i,s,f,c)}function Hm(n,i,[s,o,c],h,d){_1(n,i[s],i[o],i[c],i.scale,h,d)}const B1=["x","scaleX","originX"],V1=["y","scaleY","originY"];function Um(n,i,s,o){Hm(n.x,i,B1,s?s.x:void 0,o?o.x:void 0),Hm(n.y,i,V1,s?s.y:void 0,o?o.y:void 0)}function qm(n){return n.translate===0&&n.scale===1}function Gp(n){return qm(n.x)&&qm(n.y)}function Qm(n,i){return n.min===i.min&&n.max===i.max}function H1(n,i){return Qm(n.x,i.x)&&Qm(n.y,i.y)}function $m(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function Yp(n,i){return $m(n.x,i.x)&&$m(n.y,i.y)}function Gm(n){return ft(n.x)/ft(n.y)}function Ym(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}class U1{constructor(){this.members=[]}add(i){Sc(this.members,i),i.scheduleRender()}remove(i){if(Ac(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const s=this.members[this.members.length-1];s&&this.promote(s)}}relegate(i){const s=this.members.findIndex(c=>i===c);if(s===0)return!1;let o;for(let c=s;c>=0;c--){const h=this.members[c];if(h.isPresent!==!1){o=h;break}}return o?(this.promote(o),!0):!1}promote(i,s){const o=this.lead;if(i!==o&&(this.prevLead=o,this.lead=i,i.show(),o)){o.instance&&o.scheduleRender(),i.scheduleRender(),i.resumeFrom=o,s&&(i.resumeFrom.preserveOpacity=!0),o.snapshot&&(i.snapshot=o.snapshot,i.snapshot.latestValues=o.animationValues||o.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:c}=i.options;c===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:s,resumingFrom:o}=i;s.onExitComplete&&s.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function q1(n,i,s){let o="";const c=n.x.translate/i.x,h=n.y.translate/i.y,d=s?.z||0;if((c||h||d)&&(o=`translate3d(${c}px, ${h}px, ${d}px) `),(i.x!==1||i.y!==1)&&(o+=`scale(${1/i.x}, ${1/i.y}) `),s){const{transformPerspective:y,rotate:v,rotateX:w,rotateY:k,skewX:j,skewY:I}=s;y&&(o=`perspective(${y}px) ${o}`),v&&(o+=`rotate(${v}deg) `),w&&(o+=`rotateX(${w}deg) `),k&&(o+=`rotateY(${k}deg) `),j&&(o+=`skewX(${j}deg) `),I&&(o+=`skewY(${I}deg) `)}const f=n.x.scale*i.x,p=n.y.scale*i.y;return(f!==1||p!==1)&&(o+=`scale(${f}, ${p})`),o||"none"}const Fn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},gr=typeof window<"u"&&window.MotionDebug!==void 0,Pl=["","X","Y","Z"],Q1={visibility:"hidden"},Km=1e3;let $1=0;function jl(n,i,s,o){const{latestValues:c}=i;c[n]&&(s[n]=c[n],i.setStaticValue(n,0),o&&(o[n]=0))}function Kp(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const s=rp(i);if(window.MotionHasOptimisedAnimation(s,"transform")){const{layout:c,layoutId:h}=n.options;window.MotionCancelOptimisedAnimation(s,"transform",ke,!(c||h))}const{parent:o}=n;o&&!o.hasCheckedOptimisedAppear&&Kp(o)}function Xp({attachResizeListener:n,defaultParent:i,measureScroll:s,checkIsScrollRoot:o,resetTransform:c}){return class{constructor(d={},f=i?.()){this.id=$1++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,gr&&(Fn.totalNodes=Fn.resolvedTargetDeltas=Fn.recalculatedProjection=0),this.nodes.forEach(K1),this.nodes.forEach(tk),this.nodes.forEach(nk),this.nodes.forEach(X1),gr&&window.MotionDebug.record(Fn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new D1)}addEventListener(d,f){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Cc),this.eventHandlers.get(d).add(f)}notifyListeners(d,...f){const p=this.eventHandlers.get(d);p&&p.notify(...f)}hasListeners(d){return this.eventHandlers.has(d)}mount(d,f=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=R1(d),this.instance=d;const{layoutId:p,layout:y,visualElement:v}=this.options;if(v&&!v.current&&v.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),f&&(y||p)&&(this.isLayoutDirty=!0),n){let w;const k=()=>this.root.updateBlockedByResize=!1;n(d,()=>{this.root.updateBlockedByResize=!0,w&&w(),w=L1(k,250),Xs.hasAnimatedSinceResize&&(Xs.hasAnimatedSinceResize=!1,this.nodes.forEach(Zm))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&v&&(p||y)&&this.addEventListener("didUpdate",({delta:w,hasLayoutChanged:k,hasRelativeTargetChanged:j,layout:I})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||v.getDefaultTransition()||ok,{onLayoutAnimationStart:N,onLayoutAnimationComplete:L}=v.getProps(),R=!this.targetLayout||!Yp(this.targetLayout,I)||j,O=!k&&j;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||O||k&&(R||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(w,O);const Q={...wc(M,"layout"),onPlay:N,onComplete:L};(v.shouldReduceMotion||this.options.layoutRoot)&&(Q.delay=0,Q.type=!1),this.startAnimation(Q)}else k||Zm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=I})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,wn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ik),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Kp(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const w=this.path[v];w.shouldResetTransform=!0,w.updateScroll("snapshot"),w.options.layoutRoot&&w.willUpdate(!1)}const{layoutId:f,layout:p}=this.options;if(f===void 0&&!p)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Xm);return}this.isUpdating||this.nodes.forEach(J1),this.isUpdating=!1,this.nodes.forEach(ek),this.nodes.forEach(G1),this.nodes.forEach(Y1),this.clearAllSnapshots();const f=zt.now();Ve.delta=Yt(0,1e3/60,f-Ve.timestamp),Ve.timestamp=f,Ve.isProcessing=!0,vl.update.process(Ve),vl.preRender.process(Ve),vl.render.process(Ve),Ve.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,cc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Z1),this.sharedNodes.forEach(rk)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ke.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ke.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Re(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(f=!1),f){const p=o(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:s(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!Gp(this.projectionDelta),p=this.getTransformTemplate(),y=p?p(this.latestValues,""):void 0,v=y!==this.prevTransformTemplateValue;d&&(f||Wn(this.latestValues)||v)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const f=this.measurePageBox();let p=this.removeElementScroll(f);return d&&(p=this.removeTransform(p)),lk(p),{animationId:this.root.animationId,measuredBox:f,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:f}=this.options;if(!f)return Re();const p=f.measureViewportBox();if(!(((d=this.scroll)===null||d===void 0?void 0:d.wasRoot)||this.path.some(ck))){const{scroll:v}=this.root;v&&(gi(p.x,v.offset.x),gi(p.y,v.offset.y))}return p}removeElementScroll(d){var f;const p=Re();if(kt(p,d),!((f=this.scroll)===null||f===void 0)&&f.wasRoot)return p;for(let y=0;y<this.path.length;y++){const v=this.path[y],{scroll:w,options:k}=v;v!==this.root&&w&&k.layoutScroll&&(w.wasRoot&&kt(p,d),gi(p.x,w.offset.x),gi(p.y,w.offset.y))}return p}applyTransform(d,f=!1){const p=Re();kt(p,d);for(let y=0;y<this.path.length;y++){const v=this.path[y];!f&&v.options.layoutScroll&&v.scroll&&v!==v.root&&yi(p,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),Wn(v.latestValues)&&yi(p,v.latestValues)}return Wn(this.latestValues)&&yi(p,this.latestValues),p}removeTransform(d){const f=Re();kt(f,d);for(let p=0;p<this.path.length;p++){const y=this.path[p];if(!y.instance||!Wn(y.latestValues))continue;Ql(y.latestValues)&&y.updateSnapshot();const v=Re(),w=y.measurePageBox();kt(v,w),Um(f,y.latestValues,y.snapshot?y.snapshot.layoutBox:void 0,v)}return Wn(this.latestValues)&&Um(f,this.latestValues),f}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ve.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var f;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const y=!!this.resumingFrom||this!==p;if(!(d||y&&this.isSharedProjectionDirty||this.isProjectionDirty||!((f=this.parent)===null||f===void 0)&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:w,layoutId:k}=this.options;if(!(!this.layout||!(w||k))){if(this.resolvedRelativeTargetAt=Ve.timestamp,!this.targetDelta&&!this.relativeTarget){const j=this.getClosestProjectingParent();j&&j.layout&&this.animationProgress!==1?(this.relativeParent=j,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Re(),this.relativeTargetOrigin=Re(),xr(this.relativeTargetOrigin,this.layout.layoutBox,j.layout.layoutBox),kt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Re(),this.targetWithTransforms=Re()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),h1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):kt(this.target,this.layout.layoutBox),Vp(this.target,this.targetDelta)):kt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const j=this.getClosestProjectingParent();j&&!!j.resumingFrom==!!this.resumingFrom&&!j.options.layoutScroll&&j.target&&this.animationProgress!==1?(this.relativeParent=j,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Re(),this.relativeTargetOrigin=Re(),xr(this.relativeTargetOrigin,this.target,j.target),kt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}gr&&Fn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ql(this.parent.latestValues)||Bp(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var d;const f=this.getLead(),p=!!this.resumingFrom||this!==f;let y=!0;if((this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty)&&(y=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(y=!1),this.resolvedRelativeTargetAt===Ve.timestamp&&(y=!1),y)return;const{layout:v,layoutId:w}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(v||w))return;kt(this.layoutCorrected,this.layout.layoutBox);const k=this.treeScale.x,j=this.treeScale.y;k1(this.layoutCorrected,this.treeScale,this.path,p),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Re());const{target:I}=f;if(!I){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Bm(this.prevProjectionDelta.x,this.projectionDelta.x),Bm(this.prevProjectionDelta.y,this.projectionDelta.y)),wr(this.projectionDelta,this.layoutCorrected,I,this.latestValues),(this.treeScale.x!==k||this.treeScale.y!==j||!Ym(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ym(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",I)),gr&&Fn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var f;if((f=this.options.visualElement)===null||f===void 0||f.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=pi(),this.projectionDelta=pi(),this.projectionDeltaWithTransform=pi()}setAnimationOrigin(d,f=!1){const p=this.snapshot,y=p?p.latestValues:{},v={...this.latestValues},w=pi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const k=Re(),j=p?p.source:void 0,I=this.layout?this.layout.source:void 0,M=j!==I,N=this.getStack(),L=!N||N.members.length<=1,R=!!(M&&!L&&this.options.crossfade===!0&&!this.path.some(ak));this.animationProgress=0;let O;this.mixTargetDelta=Q=>{const H=Q/1e3;Jm(w.x,d.x,H),Jm(w.y,d.y,H),this.setTargetDelta(w),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(xr(k,this.layout.layoutBox,this.relativeParent.layout.layoutBox),sk(this.relativeTarget,this.relativeTargetOrigin,k,H),O&&H1(this.relativeTarget,O)&&(this.isProjectionDirty=!1),O||(O=Re()),kt(O,this.relativeTarget)),M&&(this.animationValues=v,F1(v,y,this.latestValues,H,R,L)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=H},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(wn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ke.update(()=>{Xs.hasAnimatedSinceResize=!0,this.currentAnimation=M1(0,Km,{...d,onUpdate:f=>{this.mixTargetDelta(f),d.onUpdate&&d.onUpdate(f)},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Km),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:f,target:p,layout:y,latestValues:v}=d;if(!(!f||!p||!y)){if(this!==d&&this.layout&&y&&Zp(this.options.animationType,this.layout.layoutBox,y.layoutBox)){p=this.target||Re();const w=ft(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+w;const k=ft(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+k}kt(f,p),yi(f,v),wr(this.projectionDeltaWithTransform,this.layoutCorrected,f,v)}}registerSharedNode(d,f){this.sharedNodes.has(d)||this.sharedNodes.set(d,new U1),this.sharedNodes.get(d).add(f);const y=f.options.initialPromotionConfig;f.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(f):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var d;const{layoutId:f}=this.options;return f?((d=this.getStack())===null||d===void 0?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:f}=this.options;return f?(d=this.getStack())===null||d===void 0?void 0:d.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:f,preserveFollowOpacity:p}={}){const y=this.getStack();y&&y.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let f=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(f=!0),!f)return;const y={};p.z&&jl("z",d,y,this.animationValues);for(let v=0;v<Pl.length;v++)jl(`rotate${Pl[v]}`,d,y,this.animationValues),jl(`skew${Pl[v]}`,d,y,this.animationValues);d.render();for(const v in y)d.setStaticValue(v,y[v]),this.animationValues&&(this.animationValues[v]=y[v]);d.scheduleRender()}getProjectionStyles(d){var f,p;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Q1;const y={visibility:""},v=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,y.opacity="",y.pointerEvents=Ys(d?.pointerEvents)||"",y.transform=v?v(this.latestValues,""):"none",y;const w=this.getLead();if(!this.projectionDelta||!this.layout||!w.target){const M={};return this.options.layoutId&&(M.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,M.pointerEvents=Ys(d?.pointerEvents)||""),this.hasProjected&&!Wn(this.latestValues)&&(M.transform=v?v({},""):"none",this.hasProjected=!1),M}const k=w.animationValues||w.latestValues;this.applyTransformsToTarget(),y.transform=q1(this.projectionDeltaWithTransform,this.treeScale,k),v&&(y.transform=v(k,y.transform));const{x:j,y:I}=this.projectionDelta;y.transformOrigin=`${j.origin*100}% ${I.origin*100}% 0`,w.animationValues?y.opacity=w===this?(p=(f=k.opacity)!==null&&f!==void 0?f:this.latestValues.opacity)!==null&&p!==void 0?p:1:this.preserveOpacity?this.latestValues.opacity:k.opacityExit:y.opacity=w===this?k.opacity!==void 0?k.opacity:"":k.opacityExit!==void 0?k.opacityExit:0;for(const M in ta){if(k[M]===void 0)continue;const{correct:N,applyTo:L}=ta[M],R=y.transform==="none"?k[M]:N(k[M],w);if(L){const O=L.length;for(let Q=0;Q<O;Q++)y[L[Q]]=R}else y[M]=R}return this.options.layoutId&&(y.pointerEvents=w===this?Ys(d?.pointerEvents)||"":"none"),y}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var f;return(f=d.currentAnimation)===null||f===void 0?void 0:f.stop()}),this.root.nodes.forEach(Xm),this.root.sharedNodes.clear()}}}function G1(n){n.updateLayout()}function Y1(n){var i;const s=((i=n.resumeFrom)===null||i===void 0?void 0:i.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&s&&n.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:c}=n.layout,{animationType:h}=n.options,d=s.source!==n.layout.source;h==="size"?bt(w=>{const k=d?s.measuredBox[w]:s.layoutBox[w],j=ft(k);k.min=o[w].min,k.max=k.min+j}):Zp(h,s.layoutBox,o)&&bt(w=>{const k=d?s.measuredBox[w]:s.layoutBox[w],j=ft(o[w]);k.max=k.min+j,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[w].max=n.relativeTarget[w].min+j)});const f=pi();wr(f,o,s.layoutBox);const p=pi();d?wr(p,n.applyTransform(c,!0),s.measuredBox):wr(p,o,s.layoutBox);const y=!Gp(f);let v=!1;if(!n.resumeFrom){const w=n.getClosestProjectingParent();if(w&&!w.resumeFrom){const{snapshot:k,layout:j}=w;if(k&&j){const I=Re();xr(I,s.layoutBox,k.layoutBox);const M=Re();xr(M,o,j.layoutBox),Yp(I,M)||(v=!0),w.options.layoutRoot&&(n.relativeTarget=M,n.relativeTargetOrigin=I,n.relativeParent=w)}}}n.notifyListeners("didUpdate",{layout:o,snapshot:s,delta:p,layoutDelta:f,hasLayoutChanged:y,hasRelativeTargetChanged:v})}else if(n.isLead()){const{onExitComplete:o}=n.options;o&&o()}n.options.transition=void 0}function K1(n){gr&&Fn.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function X1(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function Z1(n){n.clearSnapshot()}function Xm(n){n.clearMeasurements()}function J1(n){n.isLayoutDirty=!1}function ek(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function Zm(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function tk(n){n.resolveTargetDelta()}function nk(n){n.calcProjection()}function ik(n){n.resetSkewAndRotation()}function rk(n){n.removeLeadSnapshot()}function Jm(n,i,s){n.translate=Te(i.translate,0,s),n.scale=Te(i.scale,1,s),n.origin=i.origin,n.originPoint=i.originPoint}function ef(n,i,s,o){n.min=Te(i.min,s.min,o),n.max=Te(i.max,s.max,o)}function sk(n,i,s,o){ef(n.x,i.x,s.x,o),ef(n.y,i.y,s.y,o)}function ak(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const ok={duration:.45,ease:[.4,0,.1,1]},tf=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),nf=tf("applewebkit/")&&!tf("chrome/")?Math.round:mt;function rf(n){n.min=nf(n.min),n.max=nf(n.max)}function lk(n){rf(n.x),rf(n.y)}function Zp(n,i,s){return n==="position"||n==="preserve-aspect"&&!d1(Gm(i),Gm(s),.2)}function ck(n){var i;return n!==n.root&&((i=n.scroll)===null||i===void 0?void 0:i.wasRoot)}const uk=Xp({attachResizeListener:(n,i)=>Pr(n,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),El={current:void 0},Jp=Xp({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!El.current){const n=new uk({});n.mount(window),n.setOptions({layoutScroll:!0}),El.current=n}return El.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),dk={pan:{Feature:P1},drag:{Feature:T1,ProjectionNode:Jp,MeasureLayout:qp}};function sf(n,i,s){const{props:o}=n;n.animationState&&o.whileHover&&n.animationState.setActive("whileHover",s==="Start");const c="onHover"+s,h=o[c];h&&ke.postRender(()=>h(i,Mr(i)))}class hk extends kn{mount(){const{current:i}=this.node;i&&(this.unmount=dw(i,s=>(sf(this.node,s,"Start"),o=>sf(this.node,o,"End"))))}unmount(){}}class mk extends kn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Nr(Pr(this.node.current,"focus",()=>this.onFocus()),Pr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function af(n,i,s){const{props:o}=n;n.animationState&&o.whileTap&&n.animationState.setActive("whileTap",s==="Start");const c="onTap"+(s==="End"?"":s),h=o[c];h&&ke.postRender(()=>h(i,Mr(i)))}class fk extends kn{mount(){const{current:i}=this.node;i&&(this.unmount=pw(i,s=>(af(this.node,s,"Start"),(o,{success:c})=>af(this.node,o,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Gl=new WeakMap,Nl=new WeakMap,pk=n=>{const i=Gl.get(n.target);i&&i(n)},gk=n=>{n.forEach(pk)};function yk({root:n,...i}){const s=n||document;Nl.has(s)||Nl.set(s,{});const o=Nl.get(s),c=JSON.stringify(i);return o[c]||(o[c]=new IntersectionObserver(gk,{root:n,...i})),o[c]}function vk(n,i,s){const o=yk(i);return Gl.set(n,s),o.observe(n),()=>{Gl.delete(n),o.unobserve(n)}}const wk={some:0,all:1};class xk extends kn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:s,margin:o,amount:c="some",once:h}=i,d={root:s?s.current:void 0,rootMargin:o,threshold:typeof c=="number"?c:wk[c]},f=p=>{const{isIntersecting:y}=p;if(this.isInView===y||(this.isInView=y,h&&!y&&this.hasEnteredView))return;y&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",y);const{onViewportEnter:v,onViewportLeave:w}=this.node.getProps(),k=y?v:w;k&&k(p)};return vk(this.node.current,d,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:s}=this.node;["amount","margin","root"].some(kk(i,s))&&this.startObserver()}unmount(){}}function kk({viewport:n={}},{viewport:i={}}={}){return s=>n[s]!==i[s]}const bk={inView:{Feature:xk},tap:{Feature:fk},focus:{Feature:mk},hover:{Feature:hk}},Sk={layout:{ProjectionNode:Jp,MeasureLayout:qp}},Yl={current:null},eg={current:!1};function Ak(){if(eg.current=!0,!!rc)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>Yl.current=n.matches;n.addListener(i),i()}else Yl.current=!1}const Ck=[...Cp,$e,xn],Tk=n=>Ck.find(Ap(n)),of=new WeakMap;function Pk(n,i,s){for(const o in i){const c=i[o],h=s[o];if(Ge(c))n.addValue(o,c);else if(Ge(h))n.addValue(o,Cr(c,{owner:n}));else if(h!==c)if(n.hasValue(o)){const d=n.getValue(o);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=n.getStaticValue(o);n.addValue(o,Cr(d!==void 0?d:c,{owner:n}))}}for(const o in s)i[o]===void 0&&n.removeValue(o);return i}const lf=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class jk{scrapeMotionValuesFromProps(i,s,o){return{}}constructor({parent:i,props:s,presenceContext:o,reducedMotionConfig:c,blockInitialAnimation:h,visualState:d},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Mc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const j=zt.now();this.renderScheduledAt<j&&(this.renderScheduledAt=j,ke.render(this.render,!1,!0))};const{latestValues:p,renderState:y,onUpdate:v}=d;this.onUpdate=v,this.latestValues=p,this.baseTarget={...p},this.initialValues=s.initial?{...p}:{},this.renderState=y,this.parent=i,this.props=s,this.presenceContext=o,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.options=f,this.blockInitialAnimation=!!h,this.isControllingVariants=fa(s),this.isVariantNode=Rf(s),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:w,...k}=this.scrapeMotionValuesFromProps(s,{},this);for(const j in k){const I=k[j];p[j]!==void 0&&Ge(I)&&I.set(p[j],!1)}}mount(i){this.current=i,of.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((s,o)=>this.bindToMotionValue(o,s)),eg.current||Ak(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Yl.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){of.delete(this.current),this.projection&&this.projection.unmount(),wn(this.notifyUpdate),wn(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const s=this.features[i];s&&(s.unmount(),s.isMounted=!1)}this.current=null}bindToMotionValue(i,s){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const o=Bn.has(i),c=s.on("change",f=>{this.latestValues[i]=f,this.props.onUpdate&&ke.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0)}),h=s.on("renderRequest",this.scheduleRender);let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,i,s)),this.valueSubscriptions.set(i,()=>{c(),h(),d&&d(),s.owner&&s.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in ki){const s=ki[i];if(!s)continue;const{isEnabled:o,Feature:c}=s;if(!this.features[i]&&c&&o(this.props)&&(this.features[i]=new c(this)),this.features[i]){const h=this.features[i];h.isMounted?h.update():(h.mount(),h.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Re()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,s){this.latestValues[i]=s}update(i,s){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=s;for(let o=0;o<lf.length;o++){const c=lf[o];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const h="on"+c,d=i[h];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=Pk(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const s=this.getClosestVariantNode();if(s)return s.variantChildren&&s.variantChildren.add(i),()=>s.variantChildren.delete(i)}addValue(i,s){const o=this.values.get(i);s!==o&&(o&&this.removeValue(i),this.bindToMotionValue(i,s),this.values.set(i,s),this.latestValues[i]=s.get())}removeValue(i){this.values.delete(i);const s=this.valueSubscriptions.get(i);s&&(s(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,s){if(this.props.values&&this.props.values[i])return this.props.values[i];let o=this.values.get(i);return o===void 0&&s!==void 0&&(o=Cr(s===null?void 0:s,{owner:this}),this.addValue(i,o)),o}readValue(i,s){var o;let c=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:(o=this.getBaseTargetFromProps(this.props,i))!==null&&o!==void 0?o:this.readValueFromInstance(this.current,i,this.options);return c!=null&&(typeof c=="string"&&(bp(c)||mp(c))?c=parseFloat(c):!Tk(c)&&xn.test(s)&&(c=wp(i,s)),this.setBaseTarget(i,Ge(c)?c.get():c)),Ge(c)?c.get():c}setBaseTarget(i,s){this.baseTarget[i]=s}getBaseTarget(i){var s;const{initial:o}=this.props;let c;if(typeof o=="string"||typeof o=="object"){const d=dc(this.props,o,(s=this.presenceContext)===null||s===void 0?void 0:s.custom);d&&(c=d[i])}if(o&&c!==void 0)return c;const h=this.getBaseTargetFromProps(this.props,i);return h!==void 0&&!Ge(h)?h:this.initialValues[i]!==void 0&&c===void 0?void 0:this.baseTarget[i]}on(i,s){return this.events[i]||(this.events[i]=new Cc),this.events[i].add(s)}notify(i,...s){this.events[i]&&this.events[i].notify(...s)}}class tg extends jk{constructor(){super(...arguments),this.KeyframeResolver=Tp}sortInstanceNodePosition(i,s){return i.compareDocumentPosition(s)&2?1:-1}getBaseTargetFromProps(i,s){return i.style?i.style[s]:void 0}removeValueFromRenderState(i,{vars:s,style:o}){delete s[i],delete o[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;Ge(i)&&(this.childSubscription=i.on("change",s=>{this.current&&(this.current.textContent=`${s}`)}))}}function Ek(n){return window.getComputedStyle(n)}class Nk extends tg{constructor(){super(...arguments),this.type="html",this.renderInstance=Bf}readValueFromInstance(i,s){if(Bn.has(s)){const o=Nc(s);return o&&o.default||0}else{const o=Ek(i),c=(zf(s)?o.getPropertyValue(s):o[s])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(i,{transformPagePoint:s}){return Hp(i,s)}build(i,s,o){fc(i,s,o.transformTemplate)}scrapeMotionValuesFromProps(i,s,o){return vc(i,s,o)}}class Mk extends tg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Re}getBaseTargetFromProps(i,s){return i[s]}readValueFromInstance(i,s){if(Bn.has(s)){const o=Nc(s);return o&&o.default||0}return s=Vf.has(s)?s:lc(s),i.getAttribute(s)}scrapeMotionValuesFromProps(i,s,o){return qf(i,s,o)}build(i,s,o){pc(i,s,this.isSVGTag,o.transformTemplate)}renderInstance(i,s,o,c){Hf(i,s,o,c)}mount(i){this.isSVGTag=yc(i.tagName),super.mount(i)}}const Rk=(n,i)=>uc(n)?new Mk(i):new Nk(i,{allowProjection:n!==P.Fragment}),Ik=sw({...n1,...bk,...dk,...Sk},Rk),B=xv(Ik),Dk={some:0,all:1};function Lk(n,i,{root:s,margin:o,amount:c="some"}={}){const h=Jf(n),d=new WeakMap,f=y=>{y.forEach(v=>{const w=d.get(v.target);if(v.isIntersecting!==!!w)if(v.isIntersecting){const k=i(v);typeof k=="function"?d.set(v.target,k):p.unobserve(v.target)}else typeof w=="function"&&(w(v),d.delete(v.target))})},p=new IntersectionObserver(f,{root:s,rootMargin:o,threshold:typeof c=="number"?c:Dk[c]});return h.forEach(y=>p.observe(y)),()=>p.disconnect()}function Rr(n,{root:i,margin:s,amount:o,once:c=!1}={}){const[h,d]=P.useState(!1);return P.useEffect(()=>{if(!n.current||c&&h)return;const f=()=>(d(!0),c?void 0:()=>d(!1)),p={root:i&&i.current||void 0,margin:s,amount:o};return Lk(n.current,f,p)},[i,n,s,c,o]),h}/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fk=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,s,o)=>o?o.toUpperCase():s.toLowerCase()),cf=n=>{const i=Fk(n);return i.charAt(0).toUpperCase()+i.slice(1)},ng=(...n)=>n.filter((i,s,o)=>!!i&&i.trim()!==""&&o.indexOf(i)===s).join(" ").trim(),zk=n=>{for(const i in n)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ok={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=P.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:c="",children:h,iconNode:d,...f},p)=>P.createElement("svg",{ref:p,...Ok,width:i,height:i,stroke:n,strokeWidth:o?Number(s)*24/Number(i):s,className:ng("lucide",c),...!h&&!zk(f)&&{"aria-hidden":"true"},...f},[...d.map(([y,v])=>P.createElement(y,v)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=(n,i)=>{const s=P.forwardRef(({className:o,...c},h)=>P.createElement(_k,{ref:h,iconNode:i,className:ng(`lucide-${Wk(cf(n))}`,`lucide-${n}`,o),...c}));return s.displayName=cf(n),s};/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Vk=ce("activity",Bk);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],vi=ce("arrow-right",Hk);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],qk=ce("atom",Uk);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],wi=ce("book-open",Qk);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],Ml=ce("bot",$k);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Yk=ce("briefcase",Gk);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Xk=ce("calculator",Kk);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Jk=ce("calendar",Zk);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],tb=ce("chevron-down",eb);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],ig=ce("circle-check-big",nb);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],rb=ce("clipboard-list",ib);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],oa=ce("clock",sb);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],ob=ce("code",ab);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],cb=ce("dollar-sign",lb);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Kl=ce("file-text",ub);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],hb=ce("globe",db);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Xl=ce("graduation-cap",mb);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Lc=ce("mail",fb);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],gb=ce("menu",pb);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],vn=ce("message-circle",yb);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],wb=ce("paperclip",vb);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],kb=ce("pen-tool",xb);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],Sb=ce("plane",bb);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]],Cb=ce("presentation",Ab);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],uf=ce("quote",Tb);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],jb=ce("scale",Pb);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Nb=ce("search",Eb);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],rg=ce("send",Mb);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],sg=ce("shield",Rb);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Db=ce("star",Ib);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Wb=ce("trending-up",Lb);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],zb=ce("user",Fb);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Zs=ce("users",Ob);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ya=ce("x",_b),Bb=[{patterns:[/price|cost|how much|rate|charge|fee|pricing/i],reply:`Our pricing depends on the word count, subject, and deadline. We keep rates student-friendly! 💰

For an exact quote, please reach out:
📱 WhatsApp: +8801577128417
📧 academiahelp0@gmail.com

We'll get back to you within minutes!`},{patterns:[/order|place|start|get started|submit/i],reply:`Placing an order is super easy! Here's how:

1️⃣ Fill in the order form on this page (scroll down to 'Place Your Order')
2️⃣ Tell us your subject, word count & deadline
3️⃣ Upload your assignment brief
4️⃣ We'll confirm and get started!

Or message us directly on WhatsApp: +8801577128417 for instant help.`},{patterns:[/deadline|urgent|fast|quick|rush|hours|days/i],reply:`We handle tight deadlines! ⚡ Whether you need it in 24 hours or a few days, our team works around the clock.

Share your deadline on WhatsApp (+8801577128417) and we'll confirm availability right away.`},{patterns:[/plagiarism|original|copied|turnitin|similarity/i],reply:`Every assignment we deliver is 100% original and written from scratch. ✅

• Less than 10% similarity guaranteed
• Turnitin-safe content
• No copy-paste, no reused work

You can request a plagiarism report with your order!`},{patterns:[/ai|chatgpt|ai.?generat|ai.?written|ai.?detect/i],reply:`We guarantee 0% AI-generated content. 🙅‍♂️

All assignments are written by human academic experts — no ChatGPT, no AI tools. Your work will pass any AI detector confidently.`},{patterns:[/revision|edit|change|update|redo|rewrite/i],reply:`We offer unlimited free revisions! 🔄

If anything doesn't meet your requirements, just let us know and we'll fix it — no extra charge, no questions asked.`},{patterns:[/subject|topic|type|what.*(do|can|offer|cover)|business|finance|tourism|marketing|accounting|hrm|case study|powerpoint|presentation/i],reply:`We cover a wide range of subjects! 📚

• Business Essays
• Finance Assignments
• Tourism Reports
• Marketing Analysis
• Accounting Reports
• HRM Essays
• Case Studies
• PowerPoint Presentations

Don't see yours? Message us — we likely cover it!`},{patterns:[/citation|reference|apa|harvard|mla|chicago|referencing|cite/i],reply:`We follow any citation style you need! 📖

• APA 7th Edition
• Harvard Referencing
• MLA Format
• Chicago Style
• OSCOLA (for law)

Just mention your preferred style when placing your order and we'll handle it perfectly.`},{patterns:[/essay|structure|how to write|introduction|conclusion|body|paragraph/i],reply:`A strong essay structure typically looks like this: 📝

1. Introduction — Hook + background + thesis statement
2. Body paragraphs — One main idea per paragraph (PEEL method works great)
3. Conclusion — Summarise key points + restate thesis

Need it written professionally? We're here to help — just place an order!`},{patterns:[/word count|words|length|how long/i],reply:`We handle any word count — from short 500-word essays to 5,000+ word dissertations. 📄

Just specify your required word count in the order form or on WhatsApp (+8801577128417) and we'll quote accordingly.`},{patterns:[/payment|pay|method|bkash|card|bank|transfer/i],reply:`For payment details and methods, please contact us directly so we can guide you:

📱 WhatsApp: +8801577128417
📧 academiahelp0@gmail.com

We'll walk you through the process step by step!`},{patterns:[/confidential|private|secret|safe|secure|trust/i],reply:`Your privacy is our top priority. 🔒

• Your personal details are never shared
• All orders are handled confidentially
• We don't store or reuse your work

You can trust us completely — hundreds of students already do!`},{patterns:[/guarantee|quality|satisfaction|good|standard/i],reply:`We stand behind every assignment with these guarantees: ✅

• 0% AI-generated content
• Less than 10% plagiarism
• On-time delivery — always
• Unlimited free revisions
• Written by subject-matter experts

Your satisfaction is our priority!`},{patterns:[/contact|reach|whatsapp|email|phone|talk|speak/i],reply:`You can reach us anytime! 📞

📱 WhatsApp: +8801577128417 (fastest response)
📧 Email: academiahelp0@gmail.com

We typically respond within minutes on WhatsApp!`},{patterns:[/hello|hi|hey|good morning|good evening|howdy|greet/i],reply:`Hello! 👋 Great to hear from you!

I'm Alex, your academic assistant at Academia Helper. Whether you need help with an essay, report, or case study — we've got you covered.

What can I help you with today?`},{patterns:[/thank|thanks|appreciate|helpful/i],reply:`You're very welcome! 😊 Happy to help anytime.

If you're ready to get started with your assignment, just fill in the order form on this page or ping us on WhatsApp: +8801577128417. Good luck with your studies! 🎓`},{patterns:[/who are you|what are you|about you|about academia/i],reply:`I'm Alex, the virtual assistant for Academia Helper! 🤖

Academia Helper is a trusted academic writing service specialising in business, finance, tourism, marketing, accounting, HRM, and more.

We help students get high-quality, plagiarism-free assignments delivered on time. How can I assist you today?`}],df=[`That's a great question! For the most accurate answer, our team is ready to help directly:

📱 WhatsApp: +8801577128417
📧 academiahelp0@gmail.com

We respond within minutes!`,`I want to make sure you get the right answer! Please reach out to our team directly:

📱 WhatsApp: +8801577128417

They'll sort you out right away. 😊`,`I'm not 100% sure about that one, but our expert team will know! Drop them a message:

📱 WhatsApp: +8801577128417
📧 academiahelp0@gmail.com`];let hf=0;function Vb(n){const i=n.trim();for(const o of Bb)if(o.patterns.some(c=>c.test(i)))return o.reply;const s=df[hf%df.length];return hf++,s}const Hb=({isOpen:n,onClose:i})=>{const[s,o]=P.useState([{id:"1",role:"assistant",content:`Hi there! 👋 I'm Alex, your academic writing assistant from Academia Helper.

I can help you with:
• Assignment types & subjects
• Pricing & deadlines
• Citation styles
• Essay structure tips
• Placing an order

What can I help you with today?`,timestamp:new Date}]),[c,h]=P.useState(""),[d,f]=P.useState(!1),p=P.useRef(null);P.useEffect(()=>{p.current?.scrollIntoView({behavior:"smooth"})},[s]);const y=()=>{if(!c.trim()||d)return;const k=c.trim(),j={id:Date.now().toString(),role:"user",content:k,timestamp:new Date};o(M=>[...M,j]),h(""),f(!0);const I=800+Math.random()*600;setTimeout(()=>{const M=Vb(k);o(N=>[...N,{id:(Date.now()+1).toString(),role:"assistant",content:M,timestamp:new Date}]),f(!1)},I)},v=k=>{k.key==="Enter"&&!k.shiftKey&&(k.preventDefault(),y())},w=["How much does it cost?","What subjects do you cover?","Can I get it urgently?","How do I place an order?"];return m.jsx(Js,{children:n&&m.jsx(B.div,{className:"fixed bottom-20 right-4 w-80 max-w-[calc(100vw-2rem)] z-50",initial:{opacity:0,scale:.85,y:16},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.85,y:16},transition:{duration:.25,ease:"easeOut"},children:m.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col",style:{maxHeight:"75vh"},children:[m.jsxs("div",{className:"bg-gradient-to-r from-stone-900 via-slate-800 to-stone-900 text-white px-4 py-3 flex items-center justify-between shrink-0",children:[m.jsxs("div",{className:"flex items-center gap-2.5",children:[m.jsx("div",{className:"p-1.5 bg-white/20 rounded-lg",children:m.jsx(Ml,{className:"w-4 h-4"})}),m.jsxs("div",{children:[m.jsx("p",{className:"font-semibold text-sm leading-tight",children:"Alex — Academic Assistant"}),m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsx("span",{className:"w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"}),m.jsx("p",{className:"text-stone-300 text-xs font-light",children:"Online now"})]})]})]}),m.jsx("button",{onClick:i,className:"p-1.5 hover:bg-white/10 rounded-lg transition-colors",children:m.jsx(ya,{className:"w-4 h-4"})})]}),m.jsxs("div",{className:"flex-1 overflow-y-auto p-3 space-y-3 min-h-0",children:[s.map(k=>m.jsx(B.div,{className:`flex ${k.role==="user"?"justify-end":"justify-start"}`,initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.2},children:m.jsx("div",{className:`max-w-[85%] rounded-2xl px-3 py-2.5 ${k.role==="user"?"bg-stone-900 text-white rounded-br-sm":"bg-stone-100 text-stone-900 rounded-bl-sm"}`,children:m.jsxs("div",{className:"flex items-start gap-1.5",children:[k.role==="assistant"&&m.jsx(Ml,{className:"w-3.5 h-3.5 mt-0.5 text-stone-500 shrink-0"}),k.role==="user"&&m.jsx(zb,{className:"w-3.5 h-3.5 mt-0.5 text-stone-300 shrink-0"}),m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsx("p",{className:"text-xs leading-relaxed whitespace-pre-wrap",children:k.content}),m.jsx("p",{className:"text-[10px] mt-1 text-stone-400",children:k.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})]})})},k.id)),d&&m.jsx(B.div,{className:"flex justify-start",initial:{opacity:0},animate:{opacity:1},children:m.jsxs("div",{className:"bg-stone-100 rounded-2xl rounded-bl-sm px-3 py-2.5 flex items-center gap-2",children:[m.jsx(Ml,{className:"w-3.5 h-3.5 text-stone-500"}),m.jsx("div",{className:"flex gap-1",children:[0,1,2].map(k=>m.jsx(B.span,{className:"w-1.5 h-1.5 bg-stone-400 rounded-full block",animate:{y:[0,-4,0]},transition:{duration:.6,repeat:1/0,delay:k*.15}},k))})]})}),m.jsx("div",{ref:p})]}),m.jsxs("div",{className:"border-t border-stone-100 px-3 py-2 shrink-0",children:[m.jsx("p",{className:"text-[10px] text-stone-400 mb-1.5",children:"Quick questions:"}),m.jsx("div",{className:"flex flex-wrap gap-1.5",children:w.map((k,j)=>m.jsx("button",{onClick:()=>{h(k)},disabled:d,className:"text-[10px] px-2 py-1 bg-stone-100 hover:bg-amber-50 hover:text-amber-700 text-stone-600 rounded-full transition-colors duration-150 disabled:opacity-50",children:k},j))})]}),m.jsxs("div",{className:"border-t border-stone-200 px-3 py-2.5 shrink-0",children:[m.jsxs("div",{className:"flex items-end gap-2",children:[m.jsx("textarea",{value:c,onChange:k=>h(k.target.value),onKeyPress:v,placeholder:"Ask me anything...",className:"flex-1 resize-none border border-stone-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent leading-relaxed",rows:1,disabled:d}),m.jsx("button",{onClick:y,disabled:!c.trim()||d,className:"p-2 bg-stone-900 text-white rounded-xl hover:bg-amber-600 disabled:bg-stone-300 disabled:cursor-not-allowed transition-colors duration-200 shrink-0",children:m.jsx(rg,{className:"w-3.5 h-3.5"})})]}),m.jsx("p",{className:"text-[10px] text-stone-400 text-center mt-1.5",children:"WhatsApp +8801577128417 · academiahelp0@gmail.com"})]})]})})})},Ub=()=>{const[n,i]=P.useState(0);return P.useEffect(()=>{const s=()=>{const o=window.scrollY,c=document.body.scrollHeight-window.innerHeight;c&&i(o/c*100)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),m.jsx(B.div,{className:"fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-stone-500 to-emerald-400 z-50 origin-left",style:{scaleX:n/100},initial:{scaleX:0},animate:{scaleX:n/100},transition:{duration:.3,ease:"easeOut"}})},qb=()=>{const[n,i]=P.useState(!1),[s,o]=P.useState(!1),[c,h]=P.useState(!1);return P.useEffect(()=>{const d=()=>{window.scrollY>300?i(!0):i(!1)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]),m.jsxs(m.Fragment,{children:[m.jsx(Js,{children:n&&m.jsxs(B.button,{onClick:()=>o(!0),className:"fixed bottom-6 right-6 group p-4 bg-gradient-to-r from-stone-900 via-slate-800 to-stone-900 text-white rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 z-40",initial:{opacity:0,scale:.8,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.8,y:20},whileHover:{scale:1.1},whileTap:{scale:.9},children:[m.jsx(vn,{className:"w-6 h-6 group-hover:scale-110 transition-transform duration-200"}),m.jsx("div",{className:"absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center",children:m.jsx("div",{className:"w-2 h-2 bg-white rounded-full animate-pulse"})})]})}),m.jsx(Js,{children:s&&m.jsx(B.div,{className:"fixed bottom-24 right-6 w-80 max-w-[calc(100vw-3rem)] z-50",initial:{opacity:0,scale:.8,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.8,y:20},transition:{duration:.3,ease:"easeOut"},children:m.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden",children:[m.jsx("div",{className:"bg-gradient-to-r from-stone-900 via-slate-800 to-stone-900 text-white p-4",children:m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsx("div",{className:"p-2 bg-white/20 rounded-xl",children:m.jsx(vn,{className:"w-5 h-5"})}),m.jsxs("div",{children:[m.jsx("h3",{className:"font-bold text-lg",children:"Need Help? 👋"}),m.jsx("p",{className:"text-stone-200 text-sm mt-1 font-light",children:"We're here to assist you with your assignment!"})]})]}),m.jsx("button",{onClick:()=>o(!1),className:"p-2 hover:bg-white/10 rounded-xl transition-colors duration-200",children:m.jsx(ya,{className:"w-5 h-5"})})]})}),m.jsxs("div",{className:"p-6 space-y-4",children:[m.jsx("div",{className:"text-stone-700 font-medium",children:"Hi there! 🌟 How can we help you excel in your studies today?"}),m.jsxs("div",{className:"space-y-3",children:[m.jsx(B.button,{onClick:()=>{o(!1),h(!0)},className:"group w-full text-left p-4 bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-2xl border border-blue-200/50 hover:border-blue-300/70 transition-all duration-300 hover:shadow-lg",whileHover:{scale:1.02},whileTap:{scale:.98},children:m.jsxs("div",{className:"flex items-center",children:[m.jsx("div",{className:"p-2 bg-blue-500 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-200",children:m.jsx(vn,{className:"w-5 h-5 text-white"})}),m.jsxs("div",{children:[m.jsx("div",{className:"font-bold text-stone-800",children:"Chat with Alex AI"}),m.jsx("div",{className:"text-stone-600 text-sm font-medium",children:"Academic writing assistant 🤖"})]})]})}),m.jsx(B.button,{onClick:()=>{window.open("https://wa.me/8801577128417","_blank"),o(!1)},className:"group w-full text-left p-4 bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-2xl border border-green-200/50 hover:border-green-300/70 transition-all duration-300 hover:shadow-lg",whileHover:{scale:1.02},whileTap:{scale:.98},children:m.jsxs("div",{className:"flex items-center",children:[m.jsx("div",{className:"p-2 bg-green-500 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-200",children:m.jsx(vn,{className:"w-5 h-5 text-white"})}),m.jsxs("div",{children:[m.jsx("div",{className:"font-bold text-stone-800",children:"WhatsApp Chat"}),m.jsx("div",{className:"text-stone-600 text-sm font-medium",children:"+8801577128417 📱"})]})]})}),m.jsx(B.a,{href:"mailto:academiahelp0@gmail.com",className:"group block w-full text-left p-4 bg-gradient-to-br from-stone-50 to-slate-50 hover:from-stone-100 hover:to-slate-100 rounded-2xl border border-stone-200/50 hover:border-stone-300/70 transition-all duration-300 hover:shadow-lg",onClick:()=>o(!1),whileHover:{scale:1.02},whileTap:{scale:.98},children:m.jsxs("div",{className:"flex items-center",children:[m.jsx("div",{className:"p-2 bg-stone-700 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-200",children:m.jsx(Lc,{className:"w-5 h-5 text-white"})}),m.jsxs("div",{children:[m.jsx("div",{className:"font-bold text-stone-800",children:"Send Email"}),m.jsx("div",{className:"text-stone-600 text-sm font-medium",children:"academiahelp0@gmail.com 📧"})]})]})})]}),m.jsx("div",{className:"pt-4 border-t border-stone-200",children:m.jsxs("div",{className:"text-xs text-stone-500 text-center",children:["🎯 Expert help with essays, reports, and assignments",m.jsx("br",{}),"🌟 UK & USA academic standards",m.jsx("br",{}),"⚡ Quick response guaranteed"]})})]})]})})}),m.jsx(Hb,{isOpen:c,onClose:()=>h(!1)})]})},Qb=()=>{const[n,i]=P.useState(!1),[s,o]=P.useState(!1);P.useEffect(()=>{const p=()=>{o(window.scrollY>50)};return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]);const c=()=>{i(!n)},h=bf();ec();const d=[{name:"Home",href:"/"},{name:"Services",href:"/#services"},{name:"Blog",href:"/blog"},{name:"Contact",href:"/#contact"}],f=p=>{p.startsWith("#")?(h("/"),setTimeout(()=>{document.querySelector(p)?.scrollIntoView({behavior:"smooth"})},100)):p.startsWith("/#")?(h("/"),setTimeout(()=>{document.querySelector(p.substring(1))?.scrollIntoView({behavior:"smooth"})},100)):h(p),i(!1)};return m.jsx(B.header,{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${s?"bg-white/95 backdrop-blur-xl shadow-2xl border-b border-stone-200/50":"bg-neutral-800"}`,initial:{y:-100},animate:{y:0},transition:{duration:.8,ease:"easeOut"},children:m.jsxs("div",{className:"container mx-auto px-6 py-4",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs(B.button,{onClick:()=>f("/"),className:"flex items-center space-x-3 cursor-pointer",whileHover:{scale:1.05},transition:{type:"spring",stiffness:400,damping:10},children:[m.jsx("div",{className:`p-3 rounded-2xl transition-all duration-300 ${s?"bg-gradient-to-br from-stone-700 to-slate-800 shadow-lg":"bg-white backdrop-blur-sm border border-white/30 shadow-xl"}`,children:m.jsx(wi,{className:`w-6 h-6 ${s?"text-white":"text-black"}`})}),m.jsxs("div",{className:"text-left",children:[m.jsx("span",{className:`text-xl font-bold transition-colors duration-300 ${s?"text-stone-900":"text-white"}`,children:"Academia Helper"}),m.jsx("div",{className:`text-xs font-medium transition-colors duration-300 ${s?"text-stone-600":"text-stone-200"}`,children:"Expert Writing Services"})]})]}),m.jsxs("nav",{className:"hidden md:flex items-center space-x-8",children:[d.map(p=>m.jsxs(B.button,{onClick:()=>f(p.href),className:`relative font-semibold transition-all duration-300 group ${s?"text-stone-700 hover:text-stone-900":"text-white hover:text-stone-200"}`,whileHover:{y:-2},transition:{type:"spring",stiffness:400,damping:10},children:[m.jsx("span",{className:"relative z-10",children:p.name}),m.jsx("div",{className:`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${s?"bg-stone-900":"bg-white"}`})]},p.name)),m.jsxs(B.a,{href:"https://wa.me/8801577128417",target:"_blank",rel:"noopener noreferrer",className:"group relative px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden",whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},children:[m.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),m.jsxs("div",{className:"relative flex items-center",children:[m.jsx(vn,{className:"w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200"}),m.jsx("span",{children:"Chat Now"})]})]})]}),m.jsx(B.button,{onClick:c,className:`md:hidden relative p-3 rounded-2xl transition-all duration-300 ${s?"bg-stone-100 text-stone-900 hover:bg-stone-200":"bg-white/20 backdrop-blur-sm text-white border border-white/30"}`,whileTap:{scale:.95},children:m.jsx("div",{className:"w-6 h-6 flex items-center justify-center",children:n?m.jsx(ya,{className:"w-5 h-5"}):m.jsx(gb,{className:"w-5 h-5"})})})]}),m.jsx(B.nav,{className:`md:hidden overflow-hidden transition-all duration-500 ${n?"max-h-96 opacity-100":"max-h-0 opacity-0"}`,children:m.jsxs("div",{className:`pt-6 pb-4 space-y-2 ${s?"border-t border-stone-200 mt-4":"border-t border-white/20 mt-4"}`,children:[d.map((p,y)=>m.jsx(B.button,{onClick:()=>f(p.href),className:`block w-full text-left py-3 px-4 rounded-2xl font-semibold transition-all duration-300 ${s?"text-stone-700 hover:bg-stone-100 hover:text-stone-900":"text-white hover:bg-white/10"}`,initial:{opacity:0,x:-20},animate:n?{opacity:1,x:0}:{opacity:0,x:-20},transition:{duration:.3,delay:y*.1},whileHover:{x:8},children:p.name},p.name)),m.jsxs(B.a,{href:"https://wa.me/8801577128417",target:"_blank",rel:"noopener noreferrer",onClick:()=>i(!1),className:"group flex items-center justify-center mt-4 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300",initial:{opacity:0,y:20},animate:n?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.3,delay:d.length*.1},whileHover:{scale:1.02},whileTap:{scale:.98},children:[m.jsx(vn,{className:"w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200"}),m.jsx("span",{children:"Contact via WhatsApp"})]})]})})]})})},$b=()=>{const n=P.useRef(null),i=Rr(n,{once:!0});return m.jsxs("section",{ref:n,className:"relative min-h-screen flex items-center px-6 py-20 overflow-hidden",style:{backgroundImage:"linear-gradient(135deg, rgba(248,250,252,0.95) 0%, rgba(241,245,249,0.9) 100%), url('https://images.unsplash.com/photo-1633396520324-5f03ca27ebce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080')",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:[m.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-stone-50/80 via-slate-100/70 to-stone-200/60"}),m.jsx("div",{className:"container mx-auto max-w-7xl relative z-10",children:m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[m.jsxs(B.div,{className:"lg:col-span-7 space-y-8",initial:{opacity:0,x:-60},animate:i?{opacity:1,x:0}:{},transition:{duration:1,ease:"easeOut"},children:[m.jsxs(B.div,{className:"space-y-6",initial:{opacity:0,y:40},animate:i?{opacity:1,y:0}:{},transition:{duration:.8,delay:.2},children:[m.jsx(B.div,{className:"inline-flex items-center px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-sm font-medium text-amber-800",initial:{opacity:0,scale:.8},animate:i?{opacity:1,scale:1}:{},transition:{duration:.6,delay:.4},children:"✨ Expert Academic Writing Services"}),m.jsxs(B.h1,{className:"text-4xl md:text-6xl lg:text-7xl font-bold leading-tight",initial:{opacity:0,y:30},animate:i?{opacity:1,y:0}:{},transition:{duration:.8,delay:.6},children:[m.jsx("span",{className:"bg-gradient-to-r from-stone-900 via-slate-800 to-stone-900 bg-clip-text text-transparent",children:"Excellence in"}),m.jsx("br",{}),m.jsx("span",{className:"text-stone-700 font-light",children:"Academic Writing"})]}),m.jsx(B.p,{className:"text-xl md:text-2xl text-stone-600 max-w-2xl leading-relaxed font-light",initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{},transition:{duration:.6,delay:.8},children:"Our Expert Assignment Help Service provides essays, dissertations, coursework, case studies, reports, and PowerPoint presentations across computer science, business, management, finance, accounting, HRM, psychology, and more. Work is plagiarism-free, affordable, on time, and written by MA & PhD-qualified writers."})]}),m.jsxs(B.div,{className:"flex flex-col sm:flex-row gap-4 pt-4",initial:{opacity:0,y:30},animate:i?{opacity:1,y:0}:{},transition:{duration:.6,delay:1},children:[m.jsxs(B.a,{href:"#contact",className:"group relative px-8 py-4 bg-stone-900 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden",whileHover:{scale:1.02},whileTap:{scale:.98},children:[m.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-stone-800 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),m.jsxs("div",{className:"relative flex items-center justify-center",children:[m.jsx("span",{className:"mr-2 font-medium",children:"Place Your Order"}),m.jsx(vi,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"})]})]}),m.jsx(B.a,{href:"https://wa.me/8801577128417",target:"_blank",rel:"noopener noreferrer",className:"group px-8 py-4 bg-white border-2 border-stone-200 text-stone-700 rounded-2xl shadow-lg hover:shadow-xl hover:border-stone-300 transition-all duration-300",whileHover:{scale:1.02,y:-2},whileTap:{scale:.98},children:m.jsx("span",{className:"font-medium",children:"WhatsApp Chat"})})]})]}),m.jsx(B.div,{className:"lg:col-span-5 space-y-6",initial:{opacity:0,x:60},animate:i?{opacity:1,x:0}:{},transition:{duration:1,delay:.4,ease:"easeOut"},children:m.jsx("div",{className:"grid grid-cols-1 gap-6",children:[{number:"500+",label:"Completed Projects",icon:m.jsx(wi,{className:"w-7 h-7"}),gradient:"from-amber-400 to-orange-500"},{number:"0%",label:"AI Content",icon:m.jsx(Xl,{className:"w-7 h-7"}),gradient:"from-emerald-400 to-teal-500"},{number:"24/7",label:"Expert Support",icon:m.jsx(Zs,{className:"w-7 h-7"}),gradient:"from-blue-400 to-indigo-500"}].map((s,o)=>m.jsxs(B.div,{className:"group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500",initial:{opacity:0,y:20,scale:.9},animate:i?{opacity:1,y:0,scale:1}:{},transition:{duration:.6,delay:1.2+o*.2},whileHover:{y:-8,scale:1.02},children:[m.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-stone-50/50 to-slate-100/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),m.jsxs("div",{className:"relative",children:[m.jsx("div",{className:`inline-flex p-3 rounded-2xl bg-gradient-to-br ${s.gradient} text-white mb-4 shadow-lg`,children:s.icon}),m.jsx("div",{className:"text-4xl font-bold text-stone-900 mb-2",children:s.number}),m.jsx("div",{className:"text-stone-600 font-medium",children:s.label})]})]},s.label))})})]})}),m.jsx(B.div,{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2",animate:{y:[0,12,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},children:m.jsx("div",{className:"w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center",children:m.jsx("div",{className:"w-1 h-3 bg-stone-500 rounded-full mt-2 animate-pulse"})})})]})},Gb=()=>{const n=P.useRef(null),i=Rr(n,{once:!0,margin:"-100px 0px -100px 0px"}),s="We provide expert support across all major academic assignment types used in UK, USA, and Australian universities.",o=[{icon:m.jsx(Kl,{className:"w-7 h-7"}),title:"Essays",description:"Argumentative, analytical, and descriptive essays crafted with academic rigor.",color:"from-amber-100 to-orange-100",iconColor:"from-amber-500 to-orange-600"},{icon:m.jsx(rb,{className:"w-7 h-7"}),title:"Reports",description:"Business, lab, and technical reports following structured academic formats.",color:"from-emerald-100 to-teal-100",iconColor:"from-emerald-500 to-teal-600"},{icon:m.jsx(Zs,{className:"w-7 h-7"}),title:"Case Studies",description:"In-depth real-world scenario analysis across business, law, and healthcare.",color:"from-blue-100 to-indigo-100",iconColor:"from-blue-500 to-indigo-600"},{icon:m.jsx(kb,{className:"w-7 h-7"}),title:"Reflective Journals",description:"Personal reflection tasks linking academic theory to practice.",color:"from-purple-100 to-pink-100",iconColor:"from-purple-500 to-pink-600"},{icon:m.jsx(wi,{className:"w-7 h-7"}),title:"Literature Reviews",description:"Critical analysis of academic sources, highlighting debates and research gaps.",color:"from-rose-100 to-red-100",iconColor:"from-rose-500 to-red-600"},{icon:m.jsx(Cb,{className:"w-7 h-7"}),title:"Presentations",description:"Professional PowerPoint and oral presentation content for academic settings.",color:"from-slate-100 to-stone-100",iconColor:"from-slate-500 to-stone-600"},{icon:m.jsx(Xk,{className:"w-7 h-7"}),title:"Problem Sets",description:"Accurate solutions for quantitative subjects including math, economics, and physics.",color:"from-cyan-100 to-sky-100",iconColor:"from-cyan-500 to-sky-600"},{icon:m.jsx(Xl,{className:"w-7 h-7"}),title:"Dissertations & Theses",description:"Comprehensive research projects at undergraduate, masters, and doctoral levels.",color:"from-green-100 to-lime-100",iconColor:"from-green-500 to-lime-600"},{icon:m.jsx(Kl,{className:"w-7 h-7"}),title:"Annotated Bibliographies",description:"Annotated lists of sources with concise summaries and evaluations for research preparation.",color:"from-indigo-100 to-violet-100",iconColor:"from-indigo-500 to-violet-600"},{icon:m.jsx(Zs,{className:"w-7 h-7"}),title:"Group Work / Group Projects",description:"Collaborative projects, peer assessments, and team presentations with role distribution.",color:"from-yellow-100 to-amber-100",iconColor:"from-yellow-500 to-amber-600"},{icon:m.jsx(wi,{className:"w-7 h-7"}),title:"Portfolio / ePortfolio",description:"Curated collections showcasing learning artefacts, reflections, and professional development.",color:"from-pink-100 to-rose-100",iconColor:"from-pink-500 to-rose-600"}],c=[{icon:m.jsx(Yk,{className:"w-6 h-6"}),title:"Business & Management",description:"MBA assignments, strategic management, business analysis, case studies, and organizational behavior papers.",gradient:"rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.15)",iconBg:"from-amber-500 to-orange-600"},{icon:m.jsx(cb,{className:"w-6 h-6"}),title:"Finance & Accounting",description:"Financial analysis, accounting principles, investment reports, corporate finance, and economic theory assignments.",gradient:"rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.15)",iconBg:"from-emerald-500 to-teal-600"},{icon:m.jsx(ob,{className:"w-6 h-6"}),title:"Computer Science & IT",description:"Programming projects, software engineering, database design, networking, and cybersecurity assignments.",gradient:"rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.15)",iconBg:"from-blue-500 to-indigo-600"},{icon:m.jsx(Wb,{className:"w-6 h-6"}),title:"Marketing & Communications",description:"Digital marketing strategies, consumer behavior, brand management, market research, and advertising campaigns.",gradient:"rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.15)",iconBg:"from-purple-500 to-pink-600"},{icon:m.jsx(Zs,{className:"w-6 h-6"}),title:"Human Resources & Psychology",description:"HR management, organizational psychology, talent acquisition, employee relations, and workplace behavior studies.",gradient:"rgba(244, 63, 94, 0.1), rgba(239, 68, 68, 0.15)",iconBg:"from-rose-500 to-red-600"},{icon:m.jsx(wi,{className:"w-6 h-6"}),title:"Literature & Humanities",description:"Literary analysis, critical essays, philosophy papers, history research, and cultural studies assignments.",gradient:"rgba(139, 92, 246, 0.1), rgba(124, 58, 237, 0.15)",iconBg:"from-violet-500 to-purple-600"},{icon:m.jsx(Vk,{className:"w-6 h-6"}),title:"Healthcare & Nursing",description:"Medical case studies, nursing care plans, healthcare management, public health research, and clinical papers.",gradient:"rgba(34, 197, 94, 0.1), rgba(22, 163, 74, 0.15)",iconBg:"from-green-500 to-emerald-600"},{icon:m.jsx(Xl,{className:"w-6 h-6"}),title:"Education & Teaching",description:"Curriculum development, educational psychology, lesson planning, pedagogy research, and teaching methodology.",gradient:"rgba(249, 115, 22, 0.1), rgba(234, 88, 12, 0.15)",iconBg:"from-orange-500 to-amber-600"},{icon:m.jsx(hb,{className:"w-6 h-6"}),title:"Social Sciences",description:"Sociology papers, political science research, anthropology studies, international relations, and public policy analysis.",gradient:"rgba(6, 182, 212, 0.1), rgba(14, 165, 233, 0.15)",iconBg:"from-cyan-500 to-sky-600"},{icon:m.jsx(Sb,{className:"w-6 h-6"}),title:"Tourism & Hospitality",description:"Hotel management, tourism development, event planning, hospitality operations, and travel industry analysis.",gradient:"rgba(59, 130, 246, 0.1), rgba(79, 70, 229, 0.15)",iconBg:"from-blue-500 to-indigo-600"},{icon:m.jsx(jb,{className:"w-6 h-6"}),title:"Law & Legal Studies",description:"Legal research, case law analysis, contract law, constitutional studies, and legal essay writing.",gradient:"rgba(100, 116, 139, 0.1), rgba(71, 85, 105, 0.15)",iconBg:"from-slate-500 to-gray-600"},{icon:m.jsx(qk,{className:"w-6 h-6"}),title:"Engineering & Sciences",description:"Technical reports, lab experiments, research papers, mathematical analysis, and scientific methodology studies.",gradient:"rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.15)",iconBg:"from-teal-500 to-cyan-600"}],h=[{title:"0% AI Content",description:"Human-written papers only",icon:"🤖"},{title:"<10% Plagiarism",description:"Original work guaranteed",icon:"✅"},{title:"Unlimited Revisions",description:"Until you are satisfied",icon:"🔄"},{title:"On-Time Delivery",description:"Never miss your deadline",icon:"⏰"}];return m.jsxs("section",{ref:n,id:"services",className:"py-24 px-6 bg-gradient-to-br from-stone-50 via-slate-50 to-stone-100 relative overflow-hidden",children:[m.jsx("div",{className:"absolute inset-0 opacity-30",children:m.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`radial-gradient(circle at 20% 50%, rgba(120,119,198,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255,183,77,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(168,162,158,0.1) 0%, transparent 50%)`}})}),m.jsxs("div",{className:"container mx-auto max-w-7xl relative z-10",children:[m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20",children:[m.jsx(B.div,{className:"lg:col-span-8",initial:{opacity:0,x:-40},animate:i?{opacity:1,x:0}:{},transition:{duration:.8,delay:.2},children:m.jsxs(B.h2,{className:"text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-8 leading-tight",initial:{opacity:0,y:30},animate:i?{opacity:1,y:0}:{},transition:{duration:.8,delay:.4},children:[m.jsx("span",{className:"block",children:"Our"}),m.jsx("span",{className:"bg-gradient-to-r from-stone-700 to-slate-600 bg-clip-text text-transparent font-light",children:"Assignment Expertise"})]})}),m.jsx(B.div,{className:"lg:col-span-4 flex items-end",initial:{opacity:0,x:40},animate:i?{opacity:1,x:0}:{},transition:{duration:.8,delay:.6},children:m.jsx("p",{className:"text-xl text-stone-600 leading-relaxed font-light",children:s})})]}),m.jsx(B.div,{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20",initial:{opacity:0,y:60},animate:i?{opacity:1,y:0}:{},transition:{duration:1,delay:.8},children:o.map((d,f)=>m.jsxs(B.div,{className:`group relative bg-gradient-to-br ${d.color} p-8 rounded-3xl border border-white/50 hover:border-white/70 transition-all duration-500 backdrop-blur-sm ${f===1?"md:translate-y-8":""} ${f===4?"lg:translate-y-12":""}`,initial:{opacity:0,y:40,scale:.9},animate:i?{opacity:1,y:f===1?32:f===4?48:0,scale:1}:{},transition:{duration:.7,delay:1+f*.15},whileHover:{y:(f===1?32:f===4?48:0)-12,scale:1.02},children:[m.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),m.jsxs("div",{className:"relative",children:[m.jsx("div",{className:`inline-flex p-4 rounded-2xl bg-gradient-to-br ${d.iconColor} text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`,children:d.icon}),m.jsx("h3",{className:"text-2xl font-bold text-stone-900 mb-4 group-hover:text-stone-800 transition-colors duration-300",children:d.title}),m.jsx("p",{className:"text-stone-700 leading-relaxed font-medium",children:d.description})]})]},f))}),m.jsx(B.div,{className:"relative mb-20",initial:{opacity:0,y:40},animate:i?{opacity:1,y:0}:{},transition:{duration:.8,delay:1.7},children:m.jsxs("div",{className:"bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/50 shadow-2xl",children:[m.jsxs("div",{className:"text-center mb-10",children:[m.jsx(B.h3,{className:"text-3xl md:text-4xl font-bold text-stone-900 mb-4",initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{},transition:{duration:.6,delay:1.9},children:"Expert Assignment Help Across All Academic Disciplines"}),m.jsx(B.p,{className:"text-stone-600 text-lg font-light max-w-3xl mx-auto",initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{},transition:{duration:.6,delay:2.1},children:"Professional writing assistance from qualified experts in your field of study"})]}),m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:c.map((d,f)=>m.jsx(B.div,{className:"group relative overflow-hidden p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-stone-200/50",style:{background:`linear-gradient(135deg, ${d.gradient})`},initial:{opacity:0,y:20,scale:.95},animate:i?{opacity:1,y:0,scale:1}:{},transition:{duration:.5,delay:2.2+f*.1},whileHover:{y:-4,scale:1.02},children:m.jsxs("div",{className:"flex items-start gap-4",children:[m.jsx("div",{className:`p-3 rounded-xl bg-gradient-to-br ${d.iconBg} shadow-md group-hover:scale-110 transition-transform duration-300`,children:m.jsx("div",{className:"text-white",children:d.icon})}),m.jsxs("div",{className:"flex-1",children:[m.jsx("h4",{className:"text-lg font-bold text-stone-800 mb-2 group-hover:text-stone-900 transition-colors",children:d.title}),m.jsx("p",{className:"text-sm text-stone-600 leading-relaxed",children:d.description})]})]})},f))})]})}),m.jsx(B.div,{className:"relative",initial:{opacity:0,y:40},animate:i?{opacity:1,y:0}:{},transition:{duration:.8,delay:1.5},children:m.jsxs("div",{className:"bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/50 shadow-2xl",children:[m.jsxs("div",{className:"text-center mb-10",children:[m.jsx(B.h3,{className:"text-3xl md:text-4xl font-bold text-stone-900 mb-4",initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{},transition:{duration:.6,delay:1.7},children:"Our Quality Guarantees"}),m.jsx(B.p,{className:"text-stone-600 text-lg font-light",initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{},transition:{duration:.6,delay:1.9},children:"Committed to excellence in every assignment"})]}),m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:h.map((d,f)=>m.jsxs(B.div,{className:"group text-center p-6 rounded-2xl bg-gradient-to-br from-stone-50/80 to-slate-100/60 hover:from-stone-100/90 hover:to-slate-200/70 transition-all duration-300 border border-stone-200/50",initial:{opacity:0,y:20,scale:.9},animate:i?{opacity:1,y:0,scale:1}:{},transition:{duration:.5,delay:2+f*.1},whileHover:{y:-4,scale:1.02},children:[m.jsx("div",{className:"text-3xl mb-3 group-hover:scale-110 transition-transform duration-200",children:d.icon}),m.jsx("div",{className:"text-lg font-bold text-stone-800 mb-2",children:d.title}),m.jsx("div",{className:"text-sm text-stone-600 font-medium",children:d.description})]},f))})]})})]})]})},Yb=()=>{const[n,i]=P.useState(!1),s=[{id:1,name:"Emma Thompson",role:"Business Student",content:"Excellent work on my business strategy assignment! The analysis was thorough and the writing quality exceptional. Delivered on time with zero plagiarism.",rating:5,subject:"Business Strategy",avatar:"ET",gradient:"from-amber-400 to-orange-500"},{id:2,name:"James Wilson",role:"Finance Masters",content:"Outstanding financial modeling work. The calculations were accurate and the report was professionally structured. Highly recommend for finance assignments.",rating:5,subject:"Financial Analysis",avatar:"JW",gradient:"from-blue-400 to-indigo-500"},{id:3,name:"Sarah Mitchell",role:"Tourism Student",content:"Amazing tourism management essay! The writer clearly understood the industry and provided excellent insights. Will definitely use this service again.",rating:5,subject:"Tourism Management",avatar:"SM",gradient:"from-emerald-400 to-teal-500"},{id:4,name:"David Chen",role:"MBA Student",content:"Perfect case study analysis for my MBA program. The depth of research and quality of writing exceeded my expectations. Truly professional service.",rating:5,subject:"Case Study",avatar:"DC",gradient:"from-purple-400 to-pink-500"},{id:5,name:"Lisa Rodriguez",role:"Accounting Student",content:"Comprehensive accounting report with perfect calculations. The explanations were clear and helped me understand complex concepts better.",rating:5,subject:"Management Accounting",avatar:"LR",gradient:"from-rose-400 to-red-500"},{id:6,name:"Michael Brown",role:"Marketing Student",content:"Brilliant marketing research paper! The market analysis was spot-on and the recommendations were practical and well-justified.",rating:5,subject:"Marketing Research",avatar:"MB",gradient:"from-cyan-400 to-blue-500"},{id:7,name:"Rachel Green",role:"HR Management Student",content:"Fantastic work on my human resource management dissertation! The research was comprehensive and the writing was clear and professional. Exceeded all my expectations.",rating:5,subject:"HR Management",avatar:"RG",gradient:"from-violet-400 to-purple-500"},{id:8,name:"Alex Johnson",role:"Economics Student",content:"Outstanding economic analysis paper! The data interpretation was spot-on and the conclusions were well-supported. Will definitely recommend to fellow students.",rating:5,subject:"Economics",avatar:"AJ",gradient:"from-green-400 to-emerald-500"},{id:9,name:"Sophie Turner",role:"International Business",content:"Brilliant international business case study! The cross-cultural analysis was insightful and the recommendations were practical. Top-quality work delivered on time.",rating:5,subject:"International Business",avatar:"ST",gradient:"from-pink-400 to-rose-500"},{id:10,name:"Daniel Kim",role:"Finance Student",content:"Perfect financial statement analysis! The calculations were accurate and the explanations helped me understand complex financial concepts better. Highly professional service.",rating:5,subject:"Financial Analysis",avatar:"DK",gradient:"from-indigo-400 to-blue-500"},{id:11,name:"Maya Patel",role:"Hospitality Management",content:"Excellent hospitality management research paper! The industry insights were valuable and the writing quality was exceptional. Will use this service again for sure.",rating:5,subject:"Hospitality Management",avatar:"MP",gradient:"from-orange-400 to-red-500"},{id:12,name:"Oliver Smith",role:"Business Analytics",content:"Amazing data analysis project! The statistical analysis was thorough and the visualizations were professional. Perfect work that helped me achieve top grades.",rating:5,subject:"Business Analytics",avatar:"OS",gradient:"from-teal-400 to-cyan-500"},{id:13,name:"Isabella Martinez",role:"Marketing Student",content:"Superb digital marketing strategy report! The market research was detailed and the campaign recommendations were creative and feasible. Truly impressed!",rating:5,subject:"Digital Marketing",avatar:"IM",gradient:"from-yellow-400 to-orange-500"},{id:14,name:"Thomas Anderson",role:"Operations Management",content:"Outstanding operations management case study! The process analysis was thorough and the improvement suggestions were practical. High-quality academic writing.",rating:5,subject:"Operations Management",avatar:"TA",gradient:"from-gray-400 to-slate-500"},{id:15,name:"Chloe Williams",role:"Event Management",content:"Brilliant event planning dissertation! The project management framework was well-structured and the research was comprehensive. Delivered exactly what I needed.",rating:5,subject:"Event Management",avatar:"CW",gradient:"from-lime-400 to-green-500"},{id:16,name:"Ryan Cooper",role:"Supply Chain Student",content:"Exceptional supply chain analysis! The logistics evaluation was detailed and the optimization strategies were innovative. Professional work that impressed my professors.",rating:5,subject:"Supply Chain",avatar:"RC",gradient:"from-sky-400 to-blue-500"},{id:17,name:"Zara Ahmed",role:"Public Administration",content:"Excellent public policy analysis! The research methodology was sound and the policy recommendations were well-justified. Top-notch academic writing service.",rating:5,subject:"Public Policy",avatar:"ZA",gradient:"from-fuchsia-400 to-pink-500"},{id:18,name:"Jake Thompson",role:"Project Management",content:"Outstanding project management case study! The risk analysis was comprehensive and the project timeline was realistic. Professional quality work delivered on schedule.",rating:5,subject:"Project Management",avatar:"JT",gradient:"from-emerald-400 to-teal-500"},{id:19,name:"Natalie Davis",role:"Organizational Behavior",content:"Fantastic organizational psychology research! The behavioral analysis was insightful and the theoretical framework was well-applied. Exceeded my expectations completely.",rating:5,subject:"Organizational Behavior",avatar:"ND",gradient:"from-rose-400 to-pink-500"},{id:20,name:"Marcus Johnson",role:"Strategic Management",content:"Perfect strategic analysis report! The SWOT analysis was thorough and the strategic recommendations were actionable. High-quality work that helped me secure top marks.",rating:5,subject:"Strategic Management",avatar:"MJ",gradient:"from-amber-400 to-yellow-500"}],o=P.useRef(null),c=Rr(o,{once:!0}),h=d=>Array.from({length:5},(f,p)=>m.jsx(Db,{className:`w-4 h-4 ${p<d?"text-amber-400 fill-amber-400":"text-stone-300"}`},p));return m.jsxs("section",{ref:o,className:"py-24 px-6 bg-gradient-to-br from-slate-50 via-stone-50 to-slate-100 relative overflow-hidden",children:[m.jsxs("div",{className:"absolute inset-0 opacity-40",children:[m.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-orange-300/20 rounded-full blur-3xl"}),m.jsx("div",{className:"absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-full blur-3xl"})]}),m.jsxs("div",{className:"container mx-auto max-w-7xl relative z-10",children:[m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16",children:[m.jsx(B.div,{className:"lg:col-span-7",initial:{opacity:0,x:-60},animate:c?{opacity:1,x:0}:{},transition:{duration:.8},children:m.jsxs(B.h2,{className:"text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6",initial:{opacity:0,y:30},animate:c?{opacity:1,y:0}:{},transition:{duration:.8,delay:.2},children:[m.jsx("span",{className:"text-stone-900",children:"What Our"}),m.jsx("br",{}),m.jsx("span",{className:"bg-gradient-to-r from-stone-700 to-slate-600 bg-clip-text text-transparent font-light",children:"Students Say"})]})}),m.jsx(B.div,{className:"lg:col-span-5 flex items-end",initial:{opacity:0,x:60},animate:c?{opacity:1,x:0}:{},transition:{duration:.8,delay:.4},children:m.jsxs("div",{className:"space-y-6",children:[m.jsx("p",{className:"text-xl text-stone-600 leading-relaxed font-light",children:"Join hundreds of satisfied students who achieved academic excellence with our expert writing services"}),m.jsxs("div",{className:"flex gap-6",children:[m.jsxs("div",{className:"text-center",children:[m.jsx("div",{className:"text-2xl font-bold text-stone-900",children:"4.9/5"}),m.jsx("div",{className:"text-sm text-stone-600",children:"Average Rating"})]}),m.jsxs("div",{className:"text-center",children:[m.jsx("div",{className:"text-2xl font-bold text-stone-900",children:"500+"}),m.jsx("div",{className:"text-sm text-stone-600",children:"Happy Students"})]})]})]})})]}),m.jsx(B.div,{className:"relative",initial:{opacity:0,y:40},animate:c?{opacity:1,y:0}:{},transition:{duration:.8,delay:.6},children:m.jsx("div",{className:"overflow-hidden",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),style:{maskImage:"linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)"},children:m.jsxs(B.div,{className:"flex gap-8",animate:n?{}:{x:[0,-100*s.length]},transition:n?{}:{x:{repeat:1/0,repeatType:"loop",duration:60,ease:"linear"}},style:{width:`${120*s.length}%`},children:[s.map(d=>m.jsxs(B.div,{className:"group flex-shrink-0 w-96 bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500",whileHover:{y:-12,scale:1.02},children:[m.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/60 to-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),m.jsxs("div",{className:"relative",children:[m.jsxs("div",{className:"flex items-center justify-between mb-6",children:[m.jsxs("div",{className:"flex items-center",children:[m.jsx(uf,{className:"w-6 h-6 text-stone-400 mr-3"}),m.jsx("div",{className:"flex",children:h(d.rating)})]}),m.jsx("div",{className:"text-xs font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full",children:d.subject})]}),m.jsxs("blockquote",{className:"text-stone-800 leading-relaxed mb-6 font-medium",children:['"',d.content,'"']}),m.jsxs("div",{className:"flex items-center",children:[m.jsx("div",{className:`w-12 h-12 bg-gradient-to-br ${d.gradient} text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 shadow-lg`,children:d.avatar}),m.jsxs("div",{children:[m.jsx("div",{className:"font-bold text-stone-900",children:d.name}),m.jsx("div",{className:"text-stone-600 text-sm",children:d.role})]})]})]})]},d.id)),s.map(d=>m.jsxs(B.div,{className:"group flex-shrink-0 w-96 bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500",whileHover:{y:-12,scale:1.02},children:[m.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/60 to-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),m.jsxs("div",{className:"relative",children:[m.jsxs("div",{className:"flex items-center justify-between mb-6",children:[m.jsxs("div",{className:"flex items-center",children:[m.jsx(uf,{className:"w-6 h-6 text-stone-400 mr-3"}),m.jsx("div",{className:"flex",children:h(d.rating)})]}),m.jsx("div",{className:"text-xs font-medium text-stone-500 bg-stone-100 px-3 py-1 rounded-full",children:d.subject})]}),m.jsxs("blockquote",{className:"text-stone-800 leading-relaxed mb-6 font-medium",children:['"',d.content,'"']}),m.jsxs("div",{className:"flex items-center",children:[m.jsx("div",{className:`w-12 h-12 bg-gradient-to-br ${d.gradient} text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 shadow-lg`,children:d.avatar}),m.jsxs("div",{children:[m.jsx("div",{className:"font-bold text-stone-900",children:d.name}),m.jsx("div",{className:"text-stone-600 text-sm",children:d.role})]})]})]})]},`duplicate-${d.id}`))]})})}),m.jsx(B.div,{className:"mt-20",initial:{opacity:0,y:40},animate:c?{opacity:1,y:0}:{},transition:{duration:.8,delay:1},children:m.jsx("div",{className:"bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/50 shadow-2xl",children:m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[{number:"500+",label:"Satisfied Students",icon:"👥"},{number:"100%",label:"On-Time Delivery",icon:"⏰"},{number:"4.9/5",label:"Average Rating",icon:"⭐"}].map((d,f)=>m.jsxs(B.div,{className:"text-center group",initial:{opacity:0,y:20,scale:.9},animate:c?{opacity:1,y:0,scale:1}:{},transition:{duration:.6,delay:1.2+f*.1},children:[m.jsx("div",{className:"text-4xl mb-3 group-hover:scale-110 transition-transform duration-200",children:d.icon}),m.jsx("div",{className:"text-4xl font-bold text-stone-900 mb-2",children:d.number}),m.jsx("div",{className:"text-stone-600 font-medium",children:d.label})]},f))})})})]})]})},Kb=()=>{const n="Frequently Asked Questions",i="Common questions about our platform.",s=[{question:"How do I get started?",answer:"Sign up for a free account, choose your plan, and start building immediately. Our onboarding guide will walk you through the process step by step."},{question:"What payment methods do you accept?",answer:"We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers. All payments are processed securely."},{question:"Can I cancel my subscription anytime?",answer:"Yes! You can cancel your subscription at any time from your account settings. You will continue to have access until the end of your current billing period."},{question:"Is my data secure?",answer:"Absolutely. We use enterprise-grade encryption, regular security audits, and comply with GDPR and SOC 2 standards to ensure your data is protected."},{question:"Do you offer customer support?",answer:"Yes! We provide 24/7 support via chat and email for all paid plans. Enterprise customers also get dedicated phone support."}],[o,c]=P.useState([]),h=P.useRef(null),d=Rr(h,{once:!0}),f=p=>{const y=p.toString();c(v=>v.includes(y)?v.filter(w=>w!==y):[...v,y])};return m.jsx("section",{ref:h,className:"py-20 px-6 bg-white",children:m.jsxs("div",{className:"container mx-auto max-w-3xl",children:[m.jsxs(B.div,{className:"text-center mb-16",initial:{opacity:0,y:30},animate:d?{opacity:1,y:0}:{},transition:{duration:.8},children:[m.jsx(B.h2,{className:"text-4xl md:text-5xl font-bold text-zinc-900 mb-6",initial:{opacity:0,y:20},animate:d?{opacity:1,y:0}:{},transition:{duration:.6,delay:.2},children:n}),m.jsx(B.p,{className:"text-xl text-zinc-600 max-w-2xl mx-auto",initial:{opacity:0,y:20},animate:d?{opacity:1,y:0}:{},transition:{duration:.6,delay:.4},children:i})]}),m.jsx(B.div,{className:"space-y-4",initial:{opacity:0,y:40},animate:d?{opacity:1,y:0}:{},transition:{duration:.8,delay:.6},children:s.map((p,y)=>{const v=o.includes(y.toString());return m.jsxs(B.div,{className:"group border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300",initial:{opacity:0,y:20},animate:d?{opacity:1,y:0}:{},transition:{duration:.5,delay:.7+y*.1},children:[m.jsxs(B.button,{onClick:()=>f(y),className:"w-full p-6 text-left flex items-center justify-between transition-colors duration-200",children:[m.jsx("h3",{className:"text-lg font-semibold text-zinc-900 pr-4",children:p.question}),m.jsx(B.div,{animate:{rotate:v?180:0,backgroundColor:v?"#27272a":"#f4f4f5"},transition:{duration:.3,ease:"easeInOut"},className:"flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",children:m.jsx(tb,{className:`w-4 h-4 transition-colors duration-300 ${v?"text-white":"text-zinc-600"}`})})]}),m.jsx(Js,{children:v&&m.jsx(B.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.4,ease:"easeInOut"},className:"overflow-hidden",children:m.jsx(B.div,{className:"px-6 pb-6",initial:{y:-10,opacity:0},animate:{y:0,opacity:1},exit:{y:-10,opacity:0},transition:{duration:.3,delay:.1},children:m.jsx("p",{className:"text-zinc-800 leading-relaxed",children:p.answer})})})})]},y)})})]})})},Xb=()=>{const n=P.useRef(null),i=Rr(n,{once:!0}),s=P.useRef(null),[o,c]=P.useState({name:"",email:"",subject:"",wordCount:"",deadline:"",message:""}),[h,d]=P.useState([]),[f,p]=P.useState(!1),y=R=>{c({...o,[R.target.name]:R.target.value})},v=R=>{if(R.target.files){const O=Array.from(R.target.files);d(Q=>[...Q,...O])}},w=R=>{R.preventDefault(),p(!1);const O=Array.from(R.dataTransfer.files);d(Q=>[...Q,...O])},k=R=>{R.preventDefault(),p(!0)},j=()=>p(!1),I=R=>{d(O=>O.filter((Q,H)=>H!==R))},M=R=>R<1024?`${R} B`:R<1024*1024?`${(R/1024).toFixed(1)} KB`:`${(R/(1024*1024)).toFixed(1)} MB`,N=R=>{R.preventDefault();const O=h.length>0?`
Attached Files: ${h.map(H=>H.name).join(", ")}`:"",Q=`
Name: ${o.name}
Email: ${o.email}
Subject: ${o.subject}
Word Count: ${o.wordCount}
Deadline: ${o.deadline}
Message: ${o.message}${O}

Note: Please attach the assignment brief file(s) manually to this email if not auto-attached.
    `;window.location.href=`mailto:academiahelp0@gmail.com?subject=Assignment Order: ${o.subject}&body=${encodeURIComponent(Q)}`},L=["Business Essay","Finance Assignment","Tourism Report","Marketing Analysis","Accounting Report","HRM Essay","Case Study","PowerPoint Presentation","Other"];return m.jsxs("section",{ref:n,id:"contact",className:"py-24 px-6 bg-gradient-to-br from-stone-900 via-slate-800 to-stone-900 relative overflow-hidden",children:[m.jsxs("div",{className:"absolute inset-0 opacity-10",children:[m.jsx("div",{className:"absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl"}),m.jsx("div",{className:"absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl"})]}),m.jsxs("div",{className:"container mx-auto max-w-7xl relative z-10",children:[m.jsxs(B.div,{className:"text-center mb-20",initial:{opacity:0,y:40},animate:i?{opacity:1,y:0}:{},transition:{duration:.8},children:[m.jsxs(B.h2,{className:"text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight",initial:{opacity:0,y:30},animate:i?{opacity:1,y:0}:{},transition:{duration:.8,delay:.2},children:[m.jsx("span",{className:"block",children:"Ready to"}),m.jsx("span",{className:"bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent font-light",children:"Excel?"})]}),m.jsx(B.p,{className:"text-xl text-stone-300 max-w-3xl mx-auto font-light",initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{},transition:{duration:.6,delay:.4},children:"Get your high-quality assignment written by experts. Fast turnaround, original content, and guaranteed satisfaction."})]}),m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12",children:[m.jsx(B.div,{className:"lg:col-span-7",initial:{opacity:0,x:-60},animate:i?{opacity:1,x:0}:{},transition:{duration:.8,delay:.6},children:m.jsxs("div",{className:"bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl",children:[m.jsxs("div",{className:"mb-8",children:[m.jsx("h3",{className:"text-3xl font-bold text-white mb-2",children:"Place Your Order"}),m.jsx("p",{className:"text-stone-300 font-light",children:"Fill out the form below and we'll get started on your assignment"})]}),m.jsxs("form",{onSubmit:N,className:"space-y-6",children:[m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[m.jsxs(B.div,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{},transition:{duration:.6,delay:.8},children:[m.jsx("label",{className:"block text-sm font-medium text-stone-200 mb-3",children:"Your Name *"}),m.jsx("input",{type:"text",name:"name",value:o.name,onChange:y,required:!0,className:"w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-stone-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-sm transition-all duration-200",placeholder:"Enter your full name"})]}),m.jsxs(B.div,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{},transition:{duration:.6,delay:.9},children:[m.jsx("label",{className:"block text-sm font-medium text-stone-200 mb-3",children:"Email Address *"}),m.jsx("input",{type:"email",name:"email",value:o.email,onChange:y,required:!0,className:"w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-stone-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-sm transition-all duration-200",placeholder:"your.email@example.com"})]})]}),m.jsxs(B.div,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{},transition:{duration:.6,delay:1},children:[m.jsx("label",{className:"block text-sm font-medium text-stone-200 mb-3",children:"Assignment Type *"}),m.jsxs("select",{name:"subject",value:o.subject,onChange:y,required:!0,className:"w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-sm transition-all duration-200",children:[m.jsx("option",{value:"",className:"text-stone-900",children:"Select assignment type"}),L.map(R=>m.jsx("option",{value:R,className:"text-stone-900",children:R},R))]})]}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[m.jsxs(B.div,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{},transition:{duration:.6,delay:1.1},children:[m.jsx("label",{className:"block text-sm font-medium text-stone-200 mb-3",children:"Word Count"}),m.jsx("input",{type:"text",name:"wordCount",value:o.wordCount,onChange:y,className:"w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-stone-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-sm transition-all duration-200",placeholder:"e.g., 2000 words"})]}),m.jsxs(B.div,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{},transition:{duration:.6,delay:1.2},children:[m.jsx("label",{className:"block text-sm font-medium text-stone-200 mb-3",children:"Deadline"}),m.jsx("input",{type:"date",name:"deadline",value:o.deadline,onChange:y,className:"w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-sm transition-all duration-200"})]})]}),m.jsxs(B.div,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{},transition:{duration:.6,delay:1.25},children:[m.jsxs("label",{className:"block text-sm font-medium text-stone-200 mb-3",children:["Assignment Brief / Files",m.jsx("span",{className:"ml-2 text-xs text-stone-400 font-light",children:"(PDF, DOC, DOCX, JPG, PNG — max 10 MB each)"})]}),m.jsxs("div",{onClick:()=>s.current?.click(),onDrop:w,onDragOver:k,onDragLeave:j,className:`
                      w-full cursor-pointer rounded-2xl border-2 border-dashed px-6 py-8 text-center
                      transition-all duration-200 select-none
                      ${f?"border-amber-400 bg-amber-400/10 scale-[1.01]":"border-white/25 bg-white/5 hover:border-amber-400/60 hover:bg-white/10"}
                    `,children:[m.jsx(wb,{className:"w-7 h-7 mx-auto mb-3 text-amber-400 opacity-80"}),m.jsxs("p",{className:"text-stone-300 text-sm font-medium",children:["Drag & drop files here, or ",m.jsx("span",{className:"text-amber-400 underline underline-offset-2",children:"browse"})]}),m.jsx("p",{className:"text-stone-500 text-xs mt-1",children:"Upload your assignment brief, marking rubric, or any reference files"}),m.jsx("input",{ref:s,type:"file",multiple:!0,accept:".pdf,.doc,.docx,.jpg,.jpeg,.png,.ppt,.pptx,.txt",onChange:v,className:"hidden"})]}),h.length>0&&m.jsx("ul",{className:"mt-3 space-y-2",children:h.map((R,O)=>m.jsxs(B.li,{initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.2},className:"flex items-center justify-between bg-white/10 border border-white/15 rounded-xl px-4 py-3",children:[m.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[m.jsx(Kl,{className:"w-4 h-4 text-amber-400 shrink-0"}),m.jsx("span",{className:"text-sm text-white truncate",children:R.name}),m.jsx("span",{className:"text-xs text-stone-400 shrink-0",children:M(R.size)})]}),m.jsx("button",{type:"button",onClick:()=>I(O),className:"ml-3 text-stone-400 hover:text-red-400 transition-colors duration-150 shrink-0","aria-label":"Remove file",children:m.jsx(ya,{className:"w-4 h-4"})})]},O))})]}),m.jsxs(B.div,{initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{},transition:{duration:.6,delay:1.3},children:[m.jsx("label",{className:"block text-sm font-medium text-stone-200 mb-3",children:"Assignment Details"}),m.jsx("textarea",{name:"message",value:o.message,onChange:y,rows:5,className:"w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-stone-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent backdrop-blur-sm resize-none transition-all duration-200",placeholder:"Please provide detailed requirements, citation style, and any specific instructions..."})]}),m.jsx(B.button,{type:"submit",className:"group w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl",initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{},transition:{duration:.6,delay:1.4},whileHover:{scale:1.02},whileTap:{scale:.98},children:m.jsxs("span",{className:"flex items-center justify-center",children:[m.jsx(rg,{className:"w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200"}),"Submit Your Order"]})})]})]})}),m.jsxs(B.div,{className:"lg:col-span-5 space-y-8",initial:{opacity:0,x:60},animate:i?{opacity:1,x:0}:{},transition:{duration:.8,delay:.8},children:[m.jsxs(B.div,{className:"bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20",initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{},transition:{duration:.6,delay:1},children:[m.jsx("h3",{className:"text-2xl font-bold text-white mb-6",children:"Get Instant Help"}),m.jsxs("div",{className:"space-y-4",children:[m.jsxs(B.a,{href:"https://wa.me/8801577128417",target:"_blank",rel:"noopener noreferrer",className:"group flex items-center p-4 bg-green-500 text-white rounded-2xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl",whileHover:{scale:1.02,x:4},whileTap:{scale:.98},children:[m.jsx(vn,{className:"w-6 h-6 mr-4 group-hover:scale-110 transition-transform duration-200"}),m.jsxs("div",{children:[m.jsx("div",{className:"font-bold",children:"WhatsApp Chat"}),m.jsx("div",{className:"text-sm opacity-90",children:"Instant response guaranteed"})]})]}),m.jsxs(B.a,{href:"mailto:academiahelp0@gmail.com",className:"group flex items-center p-4 bg-white/20 text-white rounded-2xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm",whileHover:{scale:1.02,x:4},whileTap:{scale:.98},children:[m.jsx(Lc,{className:"w-6 h-6 mr-4 group-hover:scale-110 transition-transform duration-200"}),m.jsxs("div",{children:[m.jsx("div",{className:"font-bold",children:"Email Support"}),m.jsx("div",{className:"text-sm opacity-90",children:"academiahelp0@gmail.com"})]})]})]})]}),m.jsxs(B.div,{className:"bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20",initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{},transition:{duration:.6,delay:1.2},children:[m.jsx("h3",{className:"text-xl font-bold text-white mb-6",children:"Why Choose Our Service?"}),m.jsx("div",{className:"space-y-4",children:[{icon:m.jsx(sg,{className:"w-5 h-5"}),text:"0% AI content guarantee",color:"text-emerald-400"},{icon:m.jsx(ig,{className:"w-5 h-5"}),text:"Less than 10% plagiarism",color:"text-blue-400"},{icon:m.jsx(oa,{className:"w-5 h-5"}),text:"Timely delivery always",color:"text-amber-400"},{icon:m.jsx(vi,{className:"w-5 h-5"}),text:"Unlimited revisions",color:"text-purple-400"}].map((R,O)=>m.jsxs(B.div,{className:"flex items-center text-white group",initial:{opacity:0,x:-20},animate:i?{opacity:1,x:0}:{},transition:{duration:.5,delay:1.4+O*.1},children:[m.jsx("div",{className:`${R.color} mr-3 group-hover:scale-110 transition-transform duration-200`,children:R.icon}),m.jsx("span",{className:"font-medium",children:R.text})]},O))})]}),m.jsxs(B.div,{className:"bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20",initial:{opacity:0,y:20},animate:i?{opacity:1,y:0}:{},transition:{duration:.6,delay:1.4},children:[m.jsx("h3",{className:"text-xl font-bold text-white mb-6",children:"Simple 3-Step Process"}),m.jsx("div",{className:"space-y-6",children:[{step:"1",title:"Submit Requirements",desc:"Tell us about your assignment"},{step:"2",title:"Expert Writing",desc:"Our specialists work on your paper"},{step:"3",title:"Receive & Review",desc:"Get your completed assignment"}].map((R,O)=>m.jsxs(B.div,{className:"flex items-start text-white group",initial:{opacity:0,x:-20},animate:i?{opacity:1,x:0}:{},transition:{duration:.5,delay:1.6+O*.1},children:[m.jsx("div",{className:"bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-200 shadow-lg",children:R.step}),m.jsxs("div",{children:[m.jsx("div",{className:"font-bold mb-1",children:R.title}),m.jsx("div",{className:"text-sm opacity-90 font-light",children:R.desc})]})]},O))})]})]})]})]})]})},Zb=()=>{const n=new Date().getFullYear();return m.jsxs("footer",{className:"bg-gradient-to-br from-stone-900 via-slate-800 to-stone-900 text-white relative overflow-hidden",children:[m.jsxs("div",{className:"absolute inset-0 opacity-5",children:[m.jsx("div",{className:"absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl"}),m.jsx("div",{className:"absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl"})]}),m.jsxs("div",{className:"container mx-auto px-6 py-20 relative z-10",children:[m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16",children:[m.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[m.jsxs("div",{className:"flex items-center space-x-3 mb-6",children:[m.jsx("div",{className:"p-3 bg-gradient-to-br from-stone-700 to-slate-800 rounded-2xl shadow-lg",children:m.jsx(wi,{className:"w-7 h-7 text-white"})}),m.jsxs("div",{children:[m.jsx("span",{className:"text-2xl font-bold",children:"Academia Helper"}),m.jsx("div",{className:"text-sm text-stone-400 font-medium",children:"Expert Writing Services"})]})]}),m.jsx("p",{className:"text-stone-300 leading-relaxed font-light text-lg max-w-md",children:"Expert academic writing services for UK and USA students. Professional, original, and timely delivery guaranteed with 0% AI content."}),m.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 pt-4",children:[m.jsxs("a",{href:"https://wa.me/8801577128417",target:"_blank",rel:"noopener noreferrer",className:"group inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300",children:[m.jsx(vn,{className:"w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200"}),"WhatsApp"]}),m.jsxs("a",{href:"mailto:academiahelp0@gmail.com",className:"group inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300",children:[m.jsx(Lc,{className:"w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200"}),"Email"]})]})]}),m.jsxs("div",{className:"space-y-6",children:[m.jsx("h3",{className:"text-xl font-bold mb-6 text-white",children:"Our Services"}),m.jsx("ul",{className:"space-y-4",children:["Business Essays","Finance & Accounting","Tourism Reports","Marketing Analysis","HRM Papers","Case Studies","Computer Science","Programming Languages","Database Management","Web Design & Development","Networking","Social Science","Psychology","Statistics"].map((i,s)=>m.jsx("li",{children:m.jsxs("a",{href:"#services",className:"group flex items-center text-stone-300 hover:text-white transition-all duration-300 font-medium",children:[m.jsx(vi,{className:"w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"}),m.jsx("span",{className:"group-hover:translate-x-1 transition-transform duration-300",children:i})]})},s))})]}),m.jsxs("div",{className:"space-y-8",children:[m.jsxs("div",{children:[m.jsx("h3",{className:"text-xl font-bold mb-6 text-white",children:"Quick Links"}),m.jsx("ul",{className:"space-y-4",children:[{name:"Home",href:"#home"},{name:"Services",href:"#services"},{name:"Testimonials",href:"#testimonials"},{name:"Contact",href:"#contact"}].map((i,s)=>m.jsx("li",{children:m.jsxs("a",{href:i.href,className:"group flex items-center text-stone-300 hover:text-white transition-all duration-300 font-medium",children:[m.jsx(vi,{className:"w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"}),m.jsx("span",{className:"group-hover:translate-x-1 transition-transform duration-300",children:i.name})]})},s))})]}),m.jsxs("div",{children:[m.jsx("h3",{className:"text-xl font-bold mb-6 text-white",children:"Our Guarantees"}),m.jsx("div",{className:"space-y-4",children:[{icon:sg,text:"0% AI Content",color:"text-emerald-400"},{icon:ig,text:"<10% Plagiarism",color:"text-blue-400"},{icon:oa,text:"On-Time Delivery",color:"text-amber-400"},{icon:vi,text:"Unlimited Revisions",color:"text-purple-400"}].map((i,s)=>m.jsxs("div",{className:"flex items-center group",children:[m.jsx(i.icon,{className:`w-5 h-5 mr-3 ${i.color} group-hover:scale-110 transition-transform duration-200`}),m.jsx("span",{className:"text-stone-300 group-hover:text-white transition-colors duration-200 font-medium",children:i.text})]},s))})]})]})]}),m.jsx("div",{className:"bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/30 mb-12",children:m.jsxs("div",{className:"text-center",children:[m.jsxs("div",{className:"inline-flex items-center px-4 py-2 bg-amber-500/20 rounded-full mb-4",children:[m.jsx(oa,{className:"w-5 h-5 text-amber-400 mr-2"}),m.jsx("span",{className:"text-amber-200 font-semibold",children:"Need Urgent Help?"})]}),m.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:"24/7 Expert Support Available"}),m.jsx("p",{className:"text-stone-300 font-light",children:"Get immediate assistance with your assignments anytime, anywhere"})]})}),m.jsx("div",{className:"border-t border-stone-700/50 pt-8",children:m.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-6",children:[m.jsxs("div",{className:"text-stone-400 text-sm font-light",children:["© ",n," Academia Helper. All rights reserved. Professional academic writing services for students worldwide."]}),m.jsx("div",{className:"flex flex-wrap gap-6 text-sm",children:["Privacy Policy","Terms of Service","Refund Policy","Quality Guarantee"].map((i,s)=>m.jsx("a",{href:"#",className:"text-stone-400 hover:text-white transition-colors duration-300 font-medium hover:underline",children:i},s))})]})})]})]})},Jb=[{id:"1",slug:"free-tools-accurate-citations",title:"Free Tools and Tricks for Quick and Accurate Citations",excerpt:"Discover the best free tools and expert tricks to create accurate citations quickly in APA, MLA, Harvard, and other academic styles.",content:`
Creating accurate citations is a crucial part of academic writing, yet it can often be time-consuming and confusing. Whether you are writing essays, dissertations, or research papers, proper referencing ensures academic integrity, avoids plagiarism, and strengthens the credibility of your work. Fortunately, there are many **free tools and tricks** available to make citations faster, easier, and more accurate.

## Why Accurate Citations Matter

Accurate citations are essential for:

- **Avoiding plagiarism**: Giving proper credit to the original authors.  
- **Enhancing credibility**: Demonstrating that your research is supported by reliable sources.  
- **Supporting further research**: Allowing readers to trace and explore your sources.  

Even small mistakes in referencing styles like APA 7, Harvard, MLA, or Chicago can affect your grades or professional reputation.

## Free Tools for Quick Citations

### 1. Zotero
Zotero is a powerful, free reference manager that allows you to:

- Collect sources from websites, journals, and PDFs
- Organize references by folders and tags
- Generate citations in APA, MLA, Harvard, Chicago, and more
- Export bibliographies directly to Word or Google Docs  

Website: [https://www.zotero.org](https://www.zotero.org)

### 2. Mendeley
Mendeley is another free tool for academic referencing:

- Automatically imports research papers and metadata
- Generates citations and bibliographies
- Integrates with Microsoft Word and LibreOffice
- Offers cloud storage for your library  

Website: [https://www.mendeley.com](https://www.mendeley.com)

### 3. BibMe
BibMe is a simple online citation generator:

- Supports APA 7, MLA 9, Chicago, and more
- Allows manual input or automatic lookup of sources
- Free bibliography creation for essays and research papers  

Website: [https://www.bibme.org](https://www.bibme.org)

### 4. Cite This For Me
A user-friendly online citation generator:

- Automatically formats citations for multiple styles
- Generates in-text citations and reference lists
- Free basic features with optional premium upgrades  

Website: [https://www.citethisforme.com](https://www.citethisforme.com)

### 5. Google Scholar Citation Feature
Google Scholar helps in generating quick citations:

- Search for articles or books
- Click on the quotation mark icon to get citations in APA, MLA, or Chicago
- Copy directly into your document for fast referencing  

Website: [https://scholar.google.com](https://scholar.google.com)

## Tricks to Make Citation Easier

1. **Start citing while researching**: Add sources to your reference manager as you find them.  
2. **Use citation templates**: Keep a checklist for each style (APA, MLA, Harvard).  
3. **Double-check automatically generated citations**: Tools are helpful but may have formatting errors.  
4. **Organize references by topic or chapter**: This saves time when writing long papers.  
5. **Learn basic formatting rules**: Knowing author-date vs. notes-bibliography differences helps you spot mistakes.  

## FAQs

**Q: Are free citation tools reliable?**  
A: Most free tools are reliable, but always cross-check with official style guides to avoid minor formatting errors.  

**Q: Can these tools handle unusual sources like websites or interviews?**  
A: Yes, most citation tools support a wide range of sources, but you may need to enter some details manually.  

**Q: Which is the easiest tool for beginners?**  
A: BibMe and Cite This For Me are simple for quick citations, while Zotero and Mendeley are better for long-term research management.  

**Q: Do these tools work offline?**  
A: Zotero and Mendeley have offline functionality; online generators like BibMe require internet access.  

## Conclusion

Using free citation tools and applying simple tricks can save time, reduce errors, and improve your academic writing. Combining tools like **Zotero, Mendeley, BibMe, and Google Scholar** with best practices such as starting citations early, organizing sources, and double-checking formatting ensures that your essays and research papers are professional, credible, and plagiarism-free. Mastering citations has never been easier.

`,author:"Academia Helper",date:"2025-09-28",readTime:"9 min read",category:"Academic Tips",tags:["Citations","APA 7","Harvard","MLA","Academic Writing","Referencing Tools","Plagiarism Prevention","Research Tips"],image:"https://images.unsplash.com/photo-1560452913-f6d6c26668c6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:"2",slug:"why-referencing-important-academic-writing",title:"Why Referencing is Important in Academic Writing",excerpt:"Learn why proper referencing is crucial in academic writing, how it supports credibility, avoids plagiarism, and strengthens your research work.",content:`
Referencing is one of the fundamental aspects of academic writing. Whether you are writing essays, research papers, dissertations, or reports, citing your sources properly demonstrates credibility, respect for intellectual property, and scholarly integrity. Understanding the importance of referencing is essential for every student and academic professional.

## What is Academic Referencing?

Academic referencing is the practice of acknowledging the sources of information, ideas, and research that you include in your work. This includes books, journal articles, websites, reports, interviews, and other types of media. Common referencing styles include **APA 7, Harvard, MLA, Chicago**, and **IEEE**, each with specific rules for formatting citations and bibliographies.

## Key Reasons Why Referencing is Important

### 1. Avoids Plagiarism
Plagiarism occurs when you present someone else's work or ideas as your own. Referencing gives proper credit to the original authors and ensures your work remains ethical and academically honest. Most universities and institutions consider plagiarism a serious offense that can affect grades and reputation.

### 2. Enhances Credibility
Proper referencing shows that your arguments and findings are supported by reliable, credible sources. It demonstrates that you have conducted thorough research and that your conclusions are backed by evidence. This builds trust with your readers, professors, and peers.

### 3. Supports Academic Research
References allow readers to trace the origin of ideas, explore further reading, and verify your sources. By providing accurate citations, you contribute to the broader academic conversation and help others locate and use the same resources.

### 4. Demonstrates Knowledge and Scholarship
Referencing shows that you are aware of existing research in your field and understand how your work fits into the larger academic context. Citing authoritative sources strengthens your arguments and highlights your critical thinking skills.

### 5. Maintains Consistency and Professionalism
Consistent referencing improves the readability and structure of your paper. Using recognized referencing styles like APA, Harvard, or MLA ensures your work follows academic standards and maintains professional quality.

## Best Practices for Referencing

- **Start early**: Record your sources as you research to avoid missing citations later.  
- **Choose the correct style**: Follow the referencing style required by your institution or publication.  
- **Use citation tools**: Free tools like Zotero, Mendeley, BibMe, and Google Scholar can simplify citation management.  
- **Double-check details**: Verify author names, publication dates, and page numbers for accuracy.  
- **Include in-text citations and bibliography**: Both are essential for complete referencing.

## FAQs About Academic Referencing

**Q: What is the difference between in-text citations and bibliography?**  
A: In-text citations briefly acknowledge the source within your content, while the bibliography lists all sources in detail at the end of your paper.  

**Q: Can I reference websites or online articles?**  
A: Yes. Most referencing styles allow websites, blogs, and online articles, but ensure you include author, title, URL, and access date.  

**Q: What happens if I forget to reference a source?**  
A: Omitting citations can be considered plagiarism, which can lead to penalties, reduced grades, or academic misconduct.  

**Q: How do I choose a referencing style?**  
A: Follow your institution’s guidelines. Common choices are APA 7 for social sciences, Harvard for general academic papers, and MLA for humanities.

## Conclusion

Referencing is not just a formality; it is a critical part of academic writing that enhances credibility, prevents plagiarism, and strengthens your research. By citing sources accurately and consistently, students and researchers can communicate their ideas professionally, contribute to scholarly discussions, and maintain ethical standards. Mastering referencing is a key skill for academic success and lifelong learning.

`,date:"2025-09-28",readTime:"8 min read",category:"Academic Tips",tags:["Referencing","Academic Writing","APA 7","Harvard","MLA","Plagiarism Prevention","Citations","Research Skills"],image:"https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",author:"Academia Helper"},{id:"3",slug:"dissertation-writing-tips",title:"Dissertation Writing Tips: How to Plan, Research, and Write Effectively",excerpt:"Master dissertation writing with practical tips on planning, researching, structuring, and presenting your academic work efficiently.",content:`
Writing a dissertation is one of the most challenging and rewarding academic tasks. It requires careful planning, deep research, critical analysis, and clear presentation. Whether you are pursuing a bachelor’s, master’s, or PhD, following effective dissertation writing strategies can save time, reduce stress, and improve your grades.

## Why Dissertation Writing is Important

A dissertation demonstrates your ability to conduct independent research, analyze data, and contribute to academic knowledge. It tests your critical thinking, organization, and communication skills. Strong dissertations often become a foundation for future publications or professional projects.

## Step 1: Planning Your Dissertation

### Define Your Topic and Research Question
Choose a topic that is relevant, manageable, and interesting. Formulate a clear research question that guides your study and narrows the scope.

### Create a Timeline
Break your work into stages: research, literature review, methodology, data collection, analysis, and writing. Allocate realistic deadlines to each stage to stay organized.

### Gather Resources
Identify key academic journals, books, and databases. Keep a record of references for easy citation later.

## Step 2: Conducting Research

### Literature Review
Analyze previous studies to understand the current state of knowledge. Identify gaps and opportunities for your research. Ensure proper referencing in APA, Harvard, or MLA style.

### Methodology
Decide on the research design: qualitative, quantitative, or mixed-method. Clearly explain how data will be collected and analyzed.

### Data Collection and Analysis
Collect data ethically and systematically. Use appropriate tools or software to organize and analyze your results. Present findings clearly using tables, graphs, or charts.

## Step 3: Writing Your Dissertation

### Structure
- **Introduction**: Present the research question, objectives, and significance.  
- **Literature Review**: Discuss previous studies and highlight research gaps.  
- **Methodology**: Explain your approach, tools, and procedures.  
- **Results**: Present data objectively with visual aids.  
- **Discussion**: Interpret findings, link back to literature, and explain implications.  
- **Conclusion and Recommendations**: Summarize key points and suggest future research directions.

### Writing Tips
- Write clearly and concisely  
- Avoid jargon unless necessary  
- Use active voice where possible  
- Maintain consistency in formatting and referencing  
- Proofread and revise multiple times

## Step 4: Finalizing Your Dissertation

- Check for plagiarism using reliable tools  
- Ensure all citations and references are correctly formatted  
- Follow university-specific submission guidelines  
- Seek feedback from supervisors or peers  

## FAQs About Dissertation Writing

**Q: How long does a dissertation usually take?**  
A: It depends on the level of study, topic complexity, and research methods, typically several months to a year.  

**Q: Can I use previous assignments for my dissertation?**  
A: You can reference them, but your dissertation must be original work. Avoid self-plagiarism.  

**Q: What is the best way to manage writing stress?**  
A: Create a structured plan, take regular breaks, and seek guidance from supervisors or academic support centers.

## Conclusion

Dissertation writing is a rigorous process, but with proper planning, research, and writing strategies, it can be manageable and rewarding. Focus on clear objectives, thorough research, structured writing, and meticulous referencing. By following these dissertation writing tips, you can produce a high-quality academic document that showcases your expertise and contributes to your field.

`,date:"2025-09-29",readTime:"10 min read",category:"Academic Tips",tags:["Dissertation Writing","Academic Research","Thesis Tips","Student Success","Research Methods","Writing Skills"],image:"https://i0.wp.com/thereadywriters.trwconsult.com/wp-content/uploads/2019/09/tips-to-writing-a-good-dissertation-1.jpg?resize=770%2C428&ssl=1",author:"Academia Helper"},{id:"4",slug:"overtourism-sustainable-travel-solutions",title:"Overtourism: Causes, Impacts, and Sustainable Travel Solutions",excerpt:"Learn about overtourism, its environmental and social impacts, and practical ways to travel responsibly for a sustainable future.",content:`Overtourism is one of the most pressing challenges facing global travel today. It happens when popular destinations attract more visitors than they can sustainably handle, leading to environmental damage, cultural erosion, and negative social impacts.

## What is Overtourism?

Overtourism occurs when tourism exceeds a location's capacity to maintain its environmental, cultural, and social integrity. This phenomenon is particularly visible in iconic cities, historic landmarks, and natural attractions.

## Causes of Overtourism

Several factors contribute to the rapid increase in tourist numbers worldwide:

- Rise of low-cost airlines and affordable travel options
- Social media and travel influencers promoting specific destinations
- Lack of proper tourism management policies
- Inadequate infrastructure and limited community involvement
- Seasonal travel patterns concentrating tourists in short periods

## Environmental Impacts

Overtourism can severely harm the natural environment:

- **Pollution** from litter and increased greenhouse gas emissions
- **Degradation** of local ecosystems and fragile habitats
- **Water shortages** and deforestation
- **Loss of biodiversity** threatening wildlife and communities

## Cultural and Social Consequences

The social impact includes:

- Higher living costs for local residents
- Crowded streets and decline in public services
- Commercialization of traditional practices
- Social tension between residents and visitors

## Solutions for Sustainable Tourism

### Government and Tourism Board Actions
- Implement visitor caps and timed entry systems
- Encourage travel during off-peak seasons
- Promote lesser-known destinations
- Support community-based tourism initiatives

### Traveler Responsibilities
- Visit destinations during off-peak times
- Explore alternative locations beyond mainstream spots
- Support local businesses and artisans
- Reduce waste and conserve resources
- Respect local customs and traditions

## Frequently Asked Questions

**Q: What destinations are most affected by overtourism?**
A: Cities like Venice, Barcelona, and Amsterdam, as well as natural wonders like Bali's beaches and Machu Picchu.

**Q: How does overtourism affect local communities?**
A: It leads to higher living costs, overcrowded spaces, commercialization of culture, and social tensions.

**Q: Can overtourism be completely prevented?**
A: While not entirely preventable, sustainable tourism practices and responsible travel can significantly reduce its impact.

## Conclusion

Overtourism requires cooperation among governments, businesses, communities, and travelers. Sustainable tourism practices and responsible travel behavior are essential to preserve destinations for future generations.`,author:"Emma Thompson",date:"2025-09-25",readTime:"10 min read",category:"Travel",tags:["Overtourism","Sustainable Travel","Responsible Tourism","Travel Tips","Eco-Friendly Travel","Tourism Management","Travel Guide"],image:"https://wildlandtrekking.com/content/uploads/2021/10/levi-van-leeuwen-HmwyUWpVGNk-unsplash-1200x901.jpg"},{id:"5",slug:"academic-presentation-impactful-professional",title:"How to Make Any Academic Presentation Impactful and Professional",excerpt:"Discover step-by-step strategies to create academic presentations that are clear, engaging, and memorable for students and professionals alike.",content:`Creating an effective academic presentation is more than just putting together slides. It's about delivering your ideas with clarity, confidence, and impact.

## Why Academic Presentations Matter

Academic presentations are a crucial way to communicate research, share knowledge, and demonstrate understanding. Unlike essays or reports, presentations require both strong content and engaging delivery.

## Step 1: Understand Your Audience

The foundation of any successful academic presentation is knowing your audience. Are you presenting to professors, classmates, or a mixed audience? Adjust the tone, complexity, and examples accordingly.

## Step 2: Structure Your Presentation

A clear structure ensures your message is easy to follow:

- **Introduction**: Outline the purpose, research question, or topic focus
- **Main Body**: Present key arguments, data, evidence, or case studies
- **Conclusion**: Summarize findings and highlight implications

## Step 3: Design Impactful Slides

Slides should support your speech, not replace it:

- Use minimal text (bullet points or short sentences)
- Highlight keywords and important data
- Include charts, graphs, and visuals for complex ideas
- Use consistent fonts, colors, and styles

## Step 4: Practice Effective Delivery

Even the best slides cannot compensate for weak delivery. Practice your presentation multiple times to refine:

- Speaking pace and tone
- Eye contact with the audience
- Avoiding reading directly from slides
- Using pauses effectively

## Step 5: Engage Your Audience

Academic presentations should be interactive when possible:

- Ask questions
- Use real-life examples
- Include short polls if the format allows
- Create two-way learning experiences

## Common Mistakes to Avoid

- Overloading slides with text or irrelevant information
- Speaking too fast or too softly
- Reading directly from notes or slides
- Ignoring time limits
- Neglecting audience interaction

## Frequently Asked Questions

**Q: How many slides should an academic presentation have?**
A: On average, a 10-minute presentation should have around 8–12 slides. Quality over quantity is key.

**Q: Should I memorize the entire presentation?**
A: No. Memorize key points and transitions, but focus on understanding your material for natural delivery.

**Q: How do I reduce nervousness before presenting?**
A: Practice thoroughly, breathe deeply, and visualize success. Familiarity with content reduces anxiety.

## Conclusion

Making a strong academic presentation requires preparation, structure, and practice. By understanding your audience, designing impactful slides, and delivering with confidence, you can transform any academic topic into a compelling presentation.`,author:"Academia Helper",date:"2025-09-28",readTime:"9 min read",category:"Education",tags:["Academic Presentation","Presentation Skills","Public Speaking","Student Success","Slide Design","Communication Skills","Education Tips"],image:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800"},{id:"6",slug:"understand-referencing-systems-apa-harvard-mla",title:"How to Easily Understand Referencing Systems: APA 7, Harvard, MLA and More",excerpt:"Learn how to quickly master academic referencing styles such as APA 7, Harvard, and MLA with simple explanations, examples, and tips for students.",content:`
Referencing is one of the most important skills in academic writing. Whether you are preparing essays, dissertations, or research papers, proper referencing not only gives credit to original authors but also strengthens your work with credibility and professionalism. Yet, for many students, referencing styles like **APA 7, Harvard, and MLA** can feel confusing. The good news is that with a clear explanation and practice, understanding them becomes much easier.

## Why Referencing Matters in Academic Work

- **Avoids plagiarism**: Correct referencing ensures you are not accused of copying someone else’s work.  
- **Gives credibility**: It shows your ideas are supported by reliable research.  
- **Provides clarity**: Readers can trace the sources you used for further study.  

Every academic institution requires referencing, but the style may differ depending on the subject, department, or professor’s preference.

## The Most Common Referencing Styles

### 1. APA 7th Edition (American Psychological Association)
- **Field of use**: Psychology, education, social sciences.  
- **Key format**: Author’s last name, year, page number (if direct quote).  
- **Example (in-text)**: (Smith, 2020, p. 45)  
- **Example (reference list)**: Smith, J. (2020). *Understanding human behavior*. New York: Academic Press.  

APA focuses heavily on **author-date citations** and is widely used in research-heavy disciplines.

### 2. Harvard Referencing
- **Field of use**: Widely applied across many disciplines, especially in the UK.  
- **Key format**: Similar to APA, but formatting of reference lists can vary slightly.  
- **Example (in-text)**: (Johnson, 2018)  
- **Example (reference list)**: Johnson, P. (2018) *Modern economics*. London: Routledge.  

Harvard is considered one of the simplest systems and is highly favored in academic institutions worldwide.

### 3. MLA (Modern Language Association)
- **Field of use**: Humanities, literature, cultural studies.  
- **Key format**: Author’s last name and page number without a comma.  
- **Example (in-text)**: (Brown 112)  
- **Example (Works Cited)**: Brown, T. *The Art of Storytelling*. Oxford UP, 2019.  

MLA emphasizes the **page number** to help readers locate exact references, which is especially useful in literary works.

### 4. Chicago/Turabian Style
- **Field of use**: History, arts, and some social sciences.  
- **Unique feature**: Offers two systems – **Notes and Bibliography** (footnotes/endnotes) or **Author-Date** citations.  
- **Example (footnote)**: 1. Maria Lopez, *History of Architecture* (Boston: MIT Press, 2020), 77.  

Chicago is flexible and often used in advanced research projects.

### 5. IEEE (Institute of Electrical and Electronics Engineers)
- **Field of use**: Engineering, computer science, technology.  
- **Key format**: Uses **numbers in brackets** linked to a reference list.  
- **Example (in-text)**: [1]  
- **Example (reference list)**: [1] R. Kumar, *Machine Learning Basics*. Springer, 2019.  

IEEE is very concise and efficient for technical writing.

## Tips to Master Referencing Styles Easily

1. **Use referencing software** like Zotero, Mendeley, or EndNote to organize sources.  
2. **Check university guidelines**, as formats may have small differences.  
3. **Practice with examples** – the more you write references, the easier it becomes.  
4. **Always double-check** with official manuals (APA 7, MLA Handbook, Harvard guides, etc.).  

## FAQs

**Q: What happens if I don’t reference properly?**  
A: You risk plagiarism, which can lead to grade penalties or even academic misconduct cases.  

**Q: Is APA the same as Harvard?**  
A: They are similar in the author-date system, but they differ in formatting details such as punctuation, capitalization, and reference list structure.  

**Q: Which referencing style is easiest for beginners?**  
A: Harvard is often considered the simplest because of its straightforward format.  

**Q: Can I mix different referencing styles in one paper?**  
A: No. Always use one style consistently throughout your assignment.  

## Conclusion

Mastering referencing styles like **APA 7, Harvard, MLA, Chicago, and IEEE** may seem challenging at first, but with practice and consistency, it becomes second nature. Each style serves different disciplines, but all aim to maintain academic honesty and clarity. By understanding the rules, using referencing tools, and following official guidelines, students can easily apply the correct system and improve the quality of their academic writing.

`,date:"2025-09-28",readTime:"10 min read",category:"Academic Tips",tags:["Referencing","APA 7","Harvard","MLA","Chicago Style","IEEE Referencing","Academic Writing"],image:"https://images.unsplash.com/photo-1521587760476-6c12a4b040da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",author:"Academia Helper"},{id:"7",slug:"common-academic-writing-mistakes",title:"Common Mistakes in Academic Writing (and How to Avoid Them)",excerpt:"Discover the most frequent academic writing mistakes students make and learn proven strategies to avoid them for higher grades and professional writing.",content:`
Academic writing plays a crucial role in student success. Essays, dissertations, research papers, and reports all demand clarity, accuracy, and strong communication. However, many students make avoidable mistakes that reduce the quality of their work and lead to lower grades. The good news is that once you understand these common errors, you can easily fix them and improve your writing.

## Why Academic Writing Mistakes Matter

Even small mistakes can weaken your academic credibility. Poor grammar, weak structure, or incorrect referencing make it difficult for professors and readers to take your arguments seriously. Academic writing is not only about ideas but also about presentation, professionalism, and accuracy.

## Common Academic Writing Mistakes and How to Avoid Them

### 1. Weak Thesis Statement
A thesis statement should clearly present the main argument of your paper. Many students write vague or overly broad statements.  
**How to Avoid**: Make your thesis specific, arguable, and connected to your essay’s purpose. Example: Instead of *“Technology is important,”* write *“Artificial intelligence is reshaping healthcare by improving diagnosis and patient care.”*

### 2. Poor Structure and Organization
Disorganized essays confuse readers. Jumping between points without transitions makes your writing hard to follow.  
**How to Avoid**: Use a clear outline. Structure your work into introduction, body paragraphs (with topic sentences), and a strong conclusion.

### 3. Overuse of Informal Language
Academic writing requires a formal tone. Phrases like *“a lot of”* or *“stuff”* lower the quality of your work.  
**How to Avoid**: Use precise, academic vocabulary. Replace *“a lot of research”* with *“extensive research.”*

### 4. Plagiarism and Poor Referencing
Copying text without crediting sources is one of the most serious mistakes. Many students also misuse referencing styles.  
**How to Avoid**: Always cite your sources using the required style (APA 7, Harvard, MLA, etc.). Use plagiarism checkers and referencing tools like Zotero or Mendeley.

### 5. Overloading Sentences
Long, complex sentences with multiple ideas confuse readers.  
**How to Avoid**: Keep sentences concise. Aim for one main idea per sentence and connect them logically.

### 6. Lack of Critical Analysis
Summarizing without analyzing shows weak academic skills.  
**How to Avoid**: Go beyond description. Compare, critique, and interpret research findings to show depth of understanding.

### 7. Ignoring Proofreading and Editing
Many students submit work without checking grammar, spelling, or flow.  
**How to Avoid**: Proofread carefully. Read your essay aloud, use grammar tools like Grammarly, and ask peers for feedback.

### 8. Weak Conclusion
Some students end their essays abruptly without restating arguments or implications.  
**How to Avoid**: Summarize key points, restate your thesis, and highlight the importance of your findings.

## FAQs About Academic Writing Mistakes

**Q: What is the most common mistake in academic essays?**  
A: Weak thesis statements and poor referencing are among the most common errors.  

**Q: How do I improve my academic writing style quickly?**  
A: Focus on clarity, use academic vocabulary, proofread carefully, and review examples of well-written papers.  

**Q: Is grammar more important than content?**  
A: Both matter. Strong ideas with poor grammar lose impact, while perfect grammar without depth weakens credibility.  

**Q: Can I use “I” in academic writing?**  
A: Some styles allow first-person pronouns (e.g., reflective writing), but in most formal papers, it is better to use objective and formal expressions.  

## Conclusion

Avoiding common mistakes in academic writing is not difficult—it simply requires awareness and practice. By focusing on thesis clarity, organization, proper referencing, formal tone, and proofreading, students can dramatically improve their writing. Strong academic writing demonstrates not only your knowledge but also your professionalism and dedication, which ultimately leads to better grades and long-term academic success.

`,date:"2025-09-28",readTime:"9 min read",category:"Academic Tips",tags:["Academic Writing","Writing Mistakes","Essay Tips","Proofreading","Referencing","Thesis Statement","Grammar"],image:"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",author:"Academia Helper"},{id:"8",slug:"how-to-write-cover-letter",title:"How to Write a Cover Letter",excerpt:"Learn how to write an effective cover letter that stands out to employers. From structure to tone, this guide covers everything you need to know.",content:`A cover letter is often the first impression a potential employer has of you. Unlike a resume, which lists your skills and experiences, a cover letter allows you to showcase your personality, enthusiasm, and motivation for the role. Writing a strong cover letter is crucial for securing job interviews and making your application stand out.

## Why a Cover Letter Matters

A cover letter gives context to your resume. It explains why you’re applying for the position, how your skills align with the job, and what makes you a good cultural fit. Employers often use it to assess your communication skills, professionalism, and attention to detail.

## Structure of a Cover Letter

An impactful cover letter usually follows a clear structure:

**1. Header**
Include your name, contact information, date, and the employer’s details.

**2. Greeting**
Address the hiring manager directly. If you don’t know their name, use “Dear Hiring Manager.”

**3. Introduction**
Briefly state the role you are applying for and where you found the job listing. Add a sentence that shows enthusiasm.

**4. Body Paragraphs**
Highlight relevant achievements and skills. Use specific examples to demonstrate how your experience matches the job requirements.

**5. Closing Paragraph**
Reaffirm your interest, thank the employer for their time, and express eagerness to discuss your application further.

**6. Signature**
End with a professional closing such as “Sincerely” or “Best regards,” followed by your full name.

## Tips for Writing an Impactful Cover Letter

* **Customize each letter**: Tailor your cover letter to the specific job and company. Avoid sending a generic one.
* **Keep it concise**: Aim for 3–4 paragraphs, ideally no longer than one page.
* **Show, don’t just tell**: Instead of saying “I am hardworking,” demonstrate it with an example.
* **Match the tone**: Research the company culture and reflect it in your tone — professional, friendly, or innovative.
* **Proofread carefully**: Spelling or grammar errors can harm your credibility.

## Common Mistakes to Avoid

* Copying your resume word-for-word
* Using vague, overused phrases like “team player” without evidence
* Failing to personalize the letter
* Writing too much or too little
* Forgetting to include contact details

## FAQs on Writing a Cover Letter

**Q: Do I always need a cover letter?**
A: Not always, but many employers expect one. It shows initiative and effort, which can give you an advantage.

**Q: How long should a cover letter be?**
A: One page or less. Short, impactful paragraphs work best.

**Q: Can I use the same cover letter for multiple jobs?**
A: It’s better to customize. Employers can spot a generic cover letter easily.

## Final Thoughts

A well-written cover letter is your opportunity to connect with the employer on a personal level. It bridges the gap between your resume and the job description, helping you stand out in a competitive job market. By tailoring your letter, highlighting your achievements, and avoiding common mistakes, you can significantly increase your chances of landing an interview.`,date:"2025-09-29",readTime:"8 min read",category:"Career Tips",tags:["Cover Letter Writing","Job Application Tips","Career Growth","Resume and Cover Letter"],image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",author:"Academia Helper"},{id:"9",slug:"annotated-bibliography-student-guide",title:"What is an Annotated Bibliography? A Complete Student Guide",excerpt:"Understand the purpose, structure, and benefits of annotated bibliographies. Learn how to write them in APA, MLA, and Harvard styles.",content:`
An annotated bibliography is more than just a list of sources. It is a critical academic tool that combines references with concise explanations. Students often encounter annotated bibliographies in research projects, essays, and dissertations, but many find the concept confusing at first. This guide explains what an annotated bibliography is, why it matters, and how to write one effectively.

## What is an Annotated Bibliography?

An annotated bibliography is a list of citations to books, articles, and other academic sources, each followed by a short descriptive and evaluative paragraph (the annotation). Unlike a regular bibliography, it provides insight into the relevance, accuracy, and quality of the sources you’ve used.

Simply put:  
- **Bibliography** = List of sources  
- **Annotated Bibliography** = List of sources + notes explaining their significance

## Purpose of an Annotated Bibliography

The main goals of an annotated bibliography are:  
- To demonstrate your understanding of the topic  
- To evaluate the credibility and usefulness of each source  
- To show how each source contributes to your research project  
- To help future researchers quickly identify key literature  

## Structure of an Annotated Bibliography

Each entry typically includes:  
1. **Citation**: Properly formatted according to a style guide (APA, MLA, Harvard, etc.)  
2. **Annotation**: A short paragraph (usually 150–200 words) that:  
   - Summarizes the source’s content  
   - Evaluates the author’s credibility and arguments  
   - Explains how the source fits into your research  

### Example (APA 7th Edition)

**Citation**:  
Smith, J. (2022). *Climate Change and Urban Planning*. Oxford University Press.  

**Annotation**:  
This book explores the relationship between climate change and city development strategies. Smith, an environmental studies professor, provides detailed case studies of urban planning in Europe. The source is highly relevant to my research on sustainable development, offering strong evidence for policy-making approaches.  

## Types of Annotations

1. **Descriptive Annotations**: Summarize the content without much evaluation.  
2. **Evaluative Annotations**: Assess the quality, strengths, and weaknesses of the source.  
3. **Reflective Annotations**: Explain how the source contributes to your own research.  

## Writing Style for Annotations

- Be concise and objective  
- Use academic tone  
- Focus on the value of the source  
- Avoid unnecessary detail  

## Common Referencing Styles for Annotated Bibliographies

- **APA (7th Edition)**: Includes author, year, title, and publication details.  
- **MLA (9th Edition)**: Focuses on author, title, and publication details with hanging indentation.  
- **Harvard Style**: Similar to APA but with slight formatting differences in dates and page numbers.  

Always check your institution’s requirements, as formatting rules may vary.

## FAQs About Annotated Bibliographies

**Q: How long should each annotation be?**  
A: Typically 150–200 words, but it depends on your professor’s instructions.  

**Q: Do I need to include every source I read?**  
A: No, only include the sources you used and found relevant for your research.  

**Q: Is an annotated bibliography the same as a literature review?**  
A: No. A literature review synthesizes and compares multiple sources, while an annotated bibliography describes and evaluates each source individually.  

## Conclusion

An annotated bibliography is a valuable academic tool that strengthens your research by showing that you’ve read, understood, and evaluated your sources. By combining correct citation with thoughtful commentary, you not only demonstrate academic integrity but also provide readers with a clear guide to the key works in your field. Mastering annotated bibliographies will make your essays, dissertations, and research papers more credible and professional.

`,date:"2025-09-30",readTime:"9 min read",category:"Academic Tips",tags:["Annotated Bibliography","Referencing","Research Skills","Academic Writing","APA Style","MLA Style","Harvard Referencing"],image:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",author:"Academia Helper"},{id:"10",slug:"how-to-write-introduction",title:"How to Write an Introduction Properly",excerpt:"Learn how to write a strong academic introduction that grabs attention, provides context, and sets the tone for your essay or research paper.",content:`
Writing an introduction is one of the most important parts of any academic essay, research paper, or dissertation. A well-written introduction not only engages the reader but also sets the stage for the entire assignment. Many students struggle with writing introductions because they try to include too much or too little information. This guide will show you how to write an introduction properly, step by step.

## Why Introductions Matter

Your introduction is the first thing your reader sees. It creates the first impression and determines whether the reader will stay engaged. A strong introduction should:  
- Capture attention  
- Provide background information  
- Clearly state the research question, thesis, or purpose of the paper  

## Key Elements of a Proper Introduction

### 1. Hook the Reader
Start with something engaging such as a thought-provoking question, surprising fact, short story, or relevant quote. This draws the reader in and sparks curiosity.

### 2. Provide Background Context
Give a brief overview of the topic so the reader understands the context. Avoid going into too much detail—save that for the body of your paper.

### 3. Define the Purpose or Problem
Explain why the topic is important. What problem does your paper aim to solve? What gap in knowledge does it address?

### 4. Present the Thesis Statement
This is the most important part of your introduction. A thesis statement is a clear, concise sentence that summarizes the main argument or purpose of your paper.

### 5. Outline the Structure
Briefly mention how your paper is organized. This helps guide the reader through your argument step by step.

## Example of a Strong Introduction (APA Style)

*"Climate change is one of the most pressing issues of our time. Rising global temperatures, extreme weather events, and sea-level rise threaten human life and ecosystems. While governments worldwide have introduced climate policies, there is still debate about their effectiveness. This essay examines the impact of renewable energy adoption on reducing carbon emissions, arguing that greater investment in clean energy is crucial for achieving sustainable growth."*

This example includes a hook, background, problem statement, and a clear thesis.

## Common Mistakes to Avoid

- Writing introductions that are too long or too short  
- Starting with vague or irrelevant statements  
- Failing to include a clear thesis statement  
- Using overly complex language that confuses the reader  
- Repeating information from the body of the essay  

## Tips for Writing Introductions Effectively

- Write the introduction after drafting the body—it’s easier to summarize once you know your arguments.  
- Keep it concise—usually 10–15% of the total word count.  
- Use transition words to smoothly lead into the main essay.  
- Revise multiple times to ensure clarity and precision.  

## FAQs About Introductions

**Q: How long should an introduction be?**  
A: For essays, it should be about 10% of the total length. For dissertations or research papers, it can be longer but must remain focused.  

**Q: Should I include citations in the introduction?**  
A: Only if you are referring to specific data, studies, or theories. Otherwise, save references for the body.  

**Q: Can I start with a quote?**  
A: Yes, but make sure it’s relevant and directly connected to your thesis.  

## Conclusion

A proper introduction is essential for setting the tone and direction of your academic work. By including a hook, context, problem statement, thesis, and structure outline, you can create a powerful introduction that engages your reader and provides a clear roadmap for the rest of your paper. Remember—your introduction is your first impression, so make it strong and compelling.

`,date:"2025-09-30",readTime:"8 min read",category:"Academic Writing",tags:["Essay Writing","Academic Tips","Introductions","Thesis Statement","Writing Skills"],image:"https://www.onlineassignmentshelp.com/blog/wp-content/uploads/2019/09/Introduction.png",author:"Academia Helper"},{id:"11",slug:"how-to-write-conclusion",title:"How to Write a Conclusion Properly",excerpt:"Learn how to write a strong academic conclusion that summarizes key points, reinforces your thesis, and leaves a lasting impression on readers.",content:`
Writing a conclusion is often the final challenge in academic writing. A strong conclusion ties together your arguments, reinforces your thesis, and leaves the reader with a clear understanding of your message. Unfortunately, many students either repeat the introduction or end abruptly, missing the chance to make a strong impact. This guide explains how to write a conclusion properly for essays, research papers, and dissertations.

## Why Conclusions Matter

The conclusion is your last opportunity to convince your reader. It shows that your argument is complete, your research is meaningful, and your ideas are worth remembering. A proper conclusion should:
- Restate the main thesis in a new way  
- Summarize key findings or arguments  
- Highlight the significance of your work  
- Suggest future research or recommendations (if applicable)  

## Key Elements of a Proper Conclusion

### 1. Restate the Thesis
Begin by rephrasing your thesis statement. Avoid copying it word-for-word from the introduction. Instead, present it with slightly different wording to show growth in your argument.

### 2. Summarize Main Points
Briefly recap the most important arguments or findings without adding new information. Focus on the points that directly support your thesis.

### 3. Show Significance
Explain why your research or essay matters. What contribution does it make to the field or to real-world issues?

### 4. Call to Action or Future Research
For research papers or dissertations, suggest directions for future studies. For essays, you might provide a thought-provoking statement or recommendation.

### 5. End Strongly
Your final sentence should leave a lasting impression—something memorable, reflective, or inspiring.

## Example of a Strong Conclusion

*"In conclusion, the rapid rise of renewable energy is not only an environmental necessity but also an economic opportunity. By investing in clean energy, governments and businesses can reduce carbon emissions while driving sustainable growth. Although challenges remain, the evidence suggests that renewable technologies are vital to a resilient future. Continued innovation and global cooperation will be essential in shaping the path ahead."*

This example restates the thesis, summarizes findings, and ends with a forward-looking perspective.

## Common Mistakes to Avoid

- Simply repeating the introduction or thesis word-for-word  
- Adding new arguments or unrelated information  
- Using generic phrases like "In summary" without depth  
- Ending too abruptly without a strong closing line  

## Tips for Writing Conclusions Effectively

- Keep it concise: usually 10–15% of the total word count  
- Link back to the introduction for a sense of closure  
- Maintain a confident and formal tone  
- Revise to remove unnecessary repetition  

## FAQs About Conclusions

**Q: How long should a conclusion be?**  
A: About 10% of the total essay length. For longer dissertations, it can be a few pages.  

**Q: Should I introduce new references in the conclusion?**  
A: Generally, no. Conclusions should summarize and interpret existing evidence, not add new sources.  

**Q: Can I give personal opinions in a conclusion?**  
A: Only if the assignment allows it. For academic essays, keep it formal and research-based.  

## Conclusion

A well-crafted conclusion strengthens your academic writing by providing closure, reinforcing your arguments, and leaving readers with a final, impactful message. By restating your thesis, summarizing main points, and emphasizing significance, you ensure your work ends with clarity and confidence. Remember—the conclusion is your last word, so make it count.

`,date:"2025-09-30",readTime:"9 min read",category:"Academic Writing",tags:["Essay Writing","Academic Tips","Conclusions","Thesis Statement","Writing Skills"],image:"https://www.shutterstock.com/image-vector/conclusion-text-on-white-background-600nw-2511645971.jpg",author:"Academia Helper"},{id:"12",slug:"mastering-literature-review",title:"Mastering the Literature Review: Structure, Steps, and Writing Tips",excerpt:"Learn how to write an engaging and well-structured literature review. Discover the key steps, structure, and strategies to make your academic writing stronger.",content:`
A literature review is a crucial section of academic writing that evaluates, analyzes, and synthesizes existing research on a specific topic. Whether you’re writing an essay, dissertation, or research paper, mastering the literature review will help you demonstrate your understanding of the subject and highlight research gaps your study will address.

## What is a Literature Review?

A literature review is not just a summary of existing sources. It critically examines published research, compares different viewpoints, and shows how your study connects with existing scholarship. It helps to:
- Identify what has already been researched  
- Highlight gaps, debates, or trends in the field  
- Provide a foundation for your own research  

## Why a Literature Review Matters

- **Demonstrates expertise**: Shows you understand the existing body of knowledge.  
- **Builds credibility**: Proves that your research is well-grounded.  
- **Identifies gaps**: Helps you find areas where your research adds value.  
- **Prevents duplication**: Ensures you are not repeating what has already been done.  

## Structure of a Literature Review

A well-written literature review usually follows a clear academic structure:

### 1. Introduction
- Define the scope of your review (topic, timeframe, and type of sources).  
- Explain the purpose: Why are you reviewing this literature?  
- State how your review is organized (themes, chronology, or methodology).  

### 2. Body (Organized Review)
This is the core of your literature review. Organize it in one of the following ways:  

**a. Thematic Structure**  
Group studies by themes or concepts. For example, in education research, you might group sources under “Technology in Learning,” “Student Motivation,” and “Assessment Methods.”  

**b. Chronological Structure**  
Organize studies in the order they were published to show the development of ideas over time.  

**c. Methodological Structure**  
Discuss sources based on research methods—qualitative, quantitative, or mixed methods.  

Each section should critically analyze the sources, compare findings, and highlight agreements, disagreements, and research gaps.  

### 3. Conclusion
- Summarize key findings and trends from the literature.  
- Identify gaps or unresolved questions.  
- Show how your research connects to or builds upon the existing body of work.  

## Steps to Write a Literature Review

1. **Define your topic**: Narrow it down to a specific research area.  
2. **Search for sources**: Use academic databases like Google Scholar, JSTOR, or Scopus.  
3. **Evaluate sources**: Assess credibility, relevance, and quality.  
4. **Organize findings**: Group them thematically, chronologically, or methodologically.  
5. **Write critically**: Don’t just summarize—analyze and synthesize.  
6. **Maintain proper referencing**: Use APA, MLA, Harvard, or your institution’s required style.  

## Common Mistakes to Avoid

- Writing a long list of summaries without analysis  
- Using irrelevant or outdated sources  
- Failing to show connections between studies  
- Ignoring opposing viewpoints  
- Forgetting proper citation and referencing  

## FAQs About Literature Reviews

**Q: How long should a literature review be?**  
A: It depends on the assignment. Essays may require 800–1,000 words, while dissertations may need several thousand.  

**Q: Should I include every study I find?**  
A: No, only include the most relevant, credible, and up-to-date sources.  

**Q: Can I include my own opinions?**  
A: Avoid personal opinions. Focus on critical analysis of existing research.  

## Final Thoughts

A literature review is much more than a summary—it is a critical evaluation of what has already been published. By structuring it clearly, analyzing sources, and identifying research gaps, you can create a strong foundation for your essay, dissertation, or thesis. Remember: a good literature review tells the story of what has been studied and sets the stage for what you aim to contribute.

`,date:"2025-09-30",readTime:"10 min read",category:"Academic Writing",tags:["Literature Review","Academic Research","Writing Tips","Dissertation Help","Essay Writing"],image:"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",author:"Academia Helper"},{id:"13",slug:"how-to-concentrate-on-study",title:"How to Concentrate on Study in Today’s Distracted World",excerpt:"Learn effective strategies to improve focus, beat distractions, and build study habits that work in the digital age.",content:`In today’s fast-paced digital world, concentrating on studies has become more difficult than ever. With social media notifications, constant online distractions, and overwhelming workloads, many students struggle to stay focused. However, with the right techniques and mindset, it is possible to sharpen concentration and study effectively.

### Why Concentration is Hard Nowadays

Modern life is filled with distractions—smartphones, social platforms, streaming services, and multitasking pressures. Our brains are bombarded with information daily, which reduces attention span and makes focusing on academic work harder. Understanding these challenges is the first step to overcoming them.

### Practical Strategies to Improve Concentration

**1. Create a Distraction-Free Environment**
Choose a quiet study spot with minimal interruptions. Turn off unnecessary notifications and keep your phone out of reach.

**2. Use the Pomodoro Technique**
Break your study time into 25-minute sessions with 5-minute breaks. This method keeps your brain fresh and prevents burnout.

**3. Set Clear Study Goals**
Instead of vague intentions like “I will study biology today,” set specific goals such as “I will review Chapter 3 and solve 10 practice questions.”

**4. Stay Organized**
Use planners, to-do lists, or digital apps to keep track of assignments and deadlines. An organized plan reduces stress and improves focus.

**5. Practice Mindfulness and Meditation**
Even 10 minutes of daily meditation can improve concentration and mental clarity, making studying easier.

**6. Limit Multitasking**
Focus on one subject or task at a time. Multitasking divides attention and lowers productivity.

### Healthy Habits That Support Focus

* Get enough sleep (7–8 hours per night) to keep your mind sharp.
* Eat brain-boosting foods like nuts, fish, and fruits.
* Exercise regularly to improve memory and reduce stress.
* Stay hydrated; even mild dehydration can affect concentration.

### FAQs About Concentration and Study

**Q: How many hours should I study in a day?**
A: Quality matters more than quantity. Even 3–4 hours of focused study can be more effective than 8 hours of distracted learning.

**Q: Can music help me concentrate?**
A: Soft instrumental or classical music can improve focus, but avoid songs with lyrics that may distract you.

**Q: How do I avoid procrastination?**
A: Break tasks into smaller steps, reward yourself after completing them, and remind yourself of long-term goals.

### Final Thoughts

Concentration is a skill that can be developed with consistent effort. By building good study habits, managing distractions, and practicing mindfulness, students can overcome modern challenges and achieve better academic success.

---

**Keywords:** how to concentrate on study, improve focus, study tips for students, beat distractions, student productivity, concentration techniques
**Tags:** Study Tips, Student Success, Focus, Productivity, Academic Writing, Learning Strategies`,date:"2025-09-30",readTime:"8 min read",category:"Study Skills",tags:["Study Tips","Concentration","Focus","Productivity","Student Success"],image:"https://idreamcareer.com/wp-content/uploads/2024/01/how-to-concentrate-on-studies.webp",author:"Academia Helper"},{id:"14",slug:"assignment-writing-services",title:"Expert Assignment Writing Services with Academia Helper",excerpt:"Get affordable, high-quality, and timely assignment help in all subjects with Academia Helper. From computer science to business, psychology, and more, our experts are here to support your academic success.",content:`### Welcome to Academia Helper: Your Trusted Assignment Partner

Academic success can be challenging, especially when students face tight deadlines, complex subjects, and endless coursework. At **Academia Helper**, we are here to make your journey easier by providing professional, reliable, and affordable assignment writing services tailored to your needs.

Our team consists of **MA and PhD-qualified writers** who specialize across a wide range of academic disciplines. Whether you’re a college student struggling with programming or a postgraduate working on business research, we have experts to guide you.

---

### Why Choose Academia Helper?

**1. Expertise Across All Subjects**
We cover almost every academic area, ensuring that no matter your course, you can rely on us:

* **Computer Science & Programming**: Java, Python, C, C++, SQL, Database Management, HTML, CSS, JavaScript, and more.
* **Business & Management**: Marketing, Finance, Accounting, Human Resource Management (HRM), Tourism, and Strategy.
* **Psychology & Social Sciences**: Research papers, case studies, reflective essays, and critical analysis.
* **Other Disciplines**: Education, Law, Nursing, Literature, Engineering, and beyond.

**2. Affordable and Student-Friendly Prices**
We understand the financial struggles of students, which is why we offer **cheap yet high-quality assignment help**. Our goal is to deliver the best without burdening your pocket.

**3. Quality You Can Trust**
Every assignment is written from scratch, 100% plagiarism-free, and checked for grammar and structure. We follow your university’s referencing styles (APA, Harvard, MLA, Chicago, etc.) to ensure academic compliance.

**4. On-Time Delivery, Always**
Deadlines matter. With our **timely delivery guarantee**, you will never miss a submission deadline again.

**5. Personalized Support**
From one-page essays to complex dissertations, we provide custom solutions designed to match your requirements.

---

### How Academia Helper Works

1. **Share Your Requirements** – Submit details about your assignment, including subject, deadline, and guidelines.
2. **Get Matched with an Expert** – We assign your work to the most suitable writer for your field.
3. **Receive Your Paper on Time** – Get your completed assignment before the deadline.
4. **Request Revisions If Needed** – We offer free revisions until you are satisfied.

---

### Benefits of Our Assignment Writing Service

* 24/7 customer support for all queries.
* 100% confidentiality and secure payments.
* Guidance from highly qualified academic experts.
* Help with essays, dissertations, coursework, case studies, research papers, coding projects, and more.

---

### FAQs

**Q: Is your service affordable for students?**
A: Yes! We provide **cheap assignment writing services** without compromising quality.

**Q: Can you help with technical subjects like programming?**
A: Absolutely. Our experts can handle coding in **Java, Python, C, SQL, HTML, CSS, JavaScript, and more**.

**Q: How do I know my assignment will be plagiarism-free?**
A: We deliver 100% original work and use plagiarism checkers to ensure authenticity.

**Q: What if I need urgent assignment help?**
A: No worries! We provide **last-minute assignment help** while still maintaining quality.

---

### Final Thoughts

With **Academia Helper**, you are never alone in your academic journey. We provide expert support in all fields, ensuring you achieve the grades you deserve. Whether it’s a coding project, a business case study, or a psychology essay, our writers are ready to deliver **affordable, high-quality, and timely solutions**.

Let Academia Helper be your trusted academic partner—because your success is our priority.

---

**Keywords:** assignment writing service, affordable assignment help, academic writing services, programming assignment help, business assignment help, psychology assignment help, cheap assignment writing, professional essay help, dissertation writing services
**Tags:** Assignment Help, Academic Writing, Programming Help, Business Studies, Psychology, Student Success`,date:"2025-09-30",readTime:"9 min read",category:"Academic Services",tags:["Assignment Help","Academic Writing","Programming Help","Business Help","Affordable Services"],image:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",author:"Academia Helper"},{id:"15",slug:"expert-assignment-help-all-subjects",title:"Academia Helper: Expert Assignment Writing Services for Every Subject",excerpt:"Get high-quality, affordable, and timely assignment help from Academia Helper. We cover all academic subjects including Computer Science, Business, Psychology, and more.",content:`
Finding reliable assignment writing help can be stressful for students who are balancing multiple deadlines, complex topics, and high academic expectations. At **Academia Helper**, we provide expert writing services across all subjects and academic levels. With a team of MA & PhD-qualified writers, we guarantee affordable, plagiarism-free, and timely delivery of your assignments.

## Why Choose Academia Helper?

We understand that students need more than just words on a page—they need assignments that demonstrate strong research, critical thinking, and clear presentation. That’s why our services are designed to provide the **best quality academic writing at affordable prices** without compromising on deadlines.

### Our Key Features
- **Expert Writers**: Subject specialists with advanced academic qualifications.  
- **Affordable Pricing**: Cheap and student-friendly packages.  
- **On-Time Delivery**: Never miss a deadline.  
- **Plagiarism-Free Work**: 100% original writing with proper referencing.  
- **All Subjects Covered**: From technical programming tasks to business essays and psychology case studies.  

## Subjects We Cover

### Computer Science & Programming
Our experts can help with:  
- Java, Python, C, C++, SQL  
- Database design and management  
- HTML, CSS, JavaScript, React  
- Software engineering, algorithms, and data structures  

### Business & Management
We provide tailored assignments in:  
- Management and Leadership  
- Finance and Accounting  
- Human Resource Management (HRM)  
- Marketing, Tourism, and Strategic Business Planning  

### Psychology & Social Sciences
Our writers cover topics such as:  
- Cognitive psychology  
- Developmental psychology  
- Behavioral studies  
- Social and educational psychology  

### Other Academic Subjects
Whether it’s law, nursing, history, literature, or economics—Academia Helper has the right expert for every discipline.  

## Affordable Prices Without Compromising Quality

We know students are often on a budget. That’s why we offer **cheap assignment help** that is still high in quality. Our focus is on delivering work that meets academic standards while remaining accessible to all students.

## Timely Delivery for Stress-Free Submissions

Deadlines are one of the biggest challenges students face. At Academia Helper, we prioritize **timely delivery** so you can review the work before submission and request any changes if needed.

## How Academia Helper Works

1. **Place Your Order**: Share your assignment details and requirements.  
2. **Get Matched With an Expert**: We assign a subject specialist to handle your task.  
3. **Receive Your Assignment**: Delivered on time, formatted, and referenced properly.  
4. **Request Revisions (if needed)**: We offer revisions to ensure your complete satisfaction.  

## FAQs About Our Assignment Writing Services

**Q: Is using Academia Helper legal?**  
A: Yes, our services are designed to provide academic assistance, research guidance, and model answers that help students learn better.  

**Q: Can I trust the quality of work?**  
A: Absolutely. Every assignment is written by an expert in the subject and goes through strict quality checks.  

**Q: How affordable are your services?**  
A: We offer competitive student-friendly pricing without hidden fees. Discounts and packages are available for bulk orders.  

**Q: Do you handle urgent deadlines?**  
A: Yes, we specialize in meeting even short deadlines without compromising on quality.  

## Conclusion

At **Academia Helper**, we believe every student deserves the right support to succeed academically. From **computer science programming** to **business management, psychology, and more**, our expert writers provide top-quality, affordable, and plagiarism-free assignments—always delivered on time. With us, you can study stress-free while securing the grades you deserve.  

Start your journey to academic success with Academia Helper today!
`,date:"2025-09-30",readTime:"8 min read",category:"Services",tags:["Assignment Writing Service","Academic Help","Computer Science Assignments","Business Assignments","Psychology Help","Affordable Assignment Help"],image:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",author:"Academia Helper"},{id:"16",slug:"plagiarism-academic-career-risk",title:"Why Plagiarism Can Put Your Academic Career at Risk",excerpt:"Learn why plagiarism is a serious academic offense, how it can impact your studies, and how to avoid it with proper referencing and originality.",content:`
Many students grow up copying from friends’ notes or taking content from Google and submitting assignments without originality. Often, teachers don’t strictly check this, leading students to believe that **copy-paste is “normal.”**  

**But in universities abroad, even one act of plagiarism can destroy your academic career.** A single instance of copying can result in failing the course, losing scholarships, or even expulsion.

### Real Experience
Imagine working hard on research or writing, and someone else copies your idea without giving credit. Frustrating, right? This is exactly what plagiarism is.  

**In simple terms: Copy-Paste without Credit = Plagiarism.**

### How Universities Detect Plagiarism
Most universities use plagiarism detection software like **Turnitin**. If your assignment has even **20–30% copied content**, it raises a red flag. The consequences are serious:
- Academic failure  
- Cancellation of scholarships  
- Permanent damage to reputation  

### Social Media Copying is Also Risky
Many students think copying content from Facebook, Instagram, or other social media is harmless. **Even social media content has copyright rules.** Using someone else’s words without permission is plagiarism and a copyright violation.

### Common Problems Among Students
- Lack of a culture of citation and referencing in schools or colleges  
- Copy-paste becoming a “normal” practice in assignments and lab reports  
- Lack of awareness about acknowledging sources  

When studying in formal academic environments, what was considered “normal” can become **an academic crime**.

### Why Plagiarism is Dangerous
Plagiarism is not just unethical—it can **kill your academic career**. Understanding academic ethics, practicing proper referencing, and maintaining originality are the first steps toward **building a successful academic career**.

### How to Avoid Plagiarism
- Always **cite and reference** your sources properly (APA, Harvard, MLA, etc.)  
- Paraphrase ideas in your own words instead of copying directly  
- Use plagiarism-check tools before submission  
- Develop a habit of maintaining original notes and research  

Remember, academic honesty is a foundation for success. Respecting intellectual property protects your grades, reputation, and future opportunities.

`,date:"2025-09-30",readTime:"7 min read",category:"Academic Writing",tags:["Plagiarism","Academic Ethics","Referencing","Turnitin","Originality","Student Success","Avoid Copy-Paste"],image:"https://s47434.pcdn.co/wp-content/uploads/2024/06/Plagiarism-Consequences.png.webp",author:"Academia Helper"},{id:"17",slug:"time-management-tips-students",title:"Time Management Tips for Students to Succeed in University",excerpt:"Master your schedule and boost productivity with effective time management strategies for university students.",content:`
Time management is one of the most important skills for university students. Balancing lectures, assignments, exams, and personal life can be challenging. Without proper planning, students may face stress, missed deadlines, and lower grades. This guide provides practical tips to help you manage your time effectively and succeed academically.

## Why Time Management Matters

Effective time management allows students to:
- Complete assignments and projects on time  
- Prepare adequately for exams  
- Reduce stress and avoid last-minute cramming  
- Maintain a healthy work-life balance  
- Develop skills that are valuable for future careers  

## Key Time Management Tips

### 1. Create a Daily and Weekly Schedule
Planning is essential. Use planners, digital calendars, or apps to organize tasks. Break your week into study sessions, classes, assignments, and personal time. Allocate specific hours for each task to stay focused.

### 2. Prioritize Tasks
Use the **Eisenhower Matrix** or simple to-do lists to prioritize tasks:
- **Urgent and Important**: Do these first  
- **Important but Not Urgent**: Schedule for later  
- **Urgent but Not Important**: Delegate if possible  
- **Neither Urgent nor Important**: Limit these activities  

### 3. Avoid Procrastination
Procrastination wastes valuable time. Break large tasks into smaller, manageable parts. Set short deadlines for each part and reward yourself for completing them.

### 4. Use Study Techniques
Effective study methods improve efficiency:
- **Pomodoro Technique**: Study for 25 minutes, take a 5-minute break  
- **Active Recall**: Test yourself on key concepts  
- **Time Blocking**: Dedicate specific blocks for lectures, reading, and assignments  

### 5. Minimize Distractions
Turn off notifications, limit social media, and create a dedicated study space. A focused environment helps you complete tasks faster.

### 6. Balance Academics and Personal Life
Time management isn’t just about studying. Schedule exercise, hobbies, and relaxation to maintain mental and physical health.

### 7. Review and Adjust
Regularly review your schedule. Identify areas where you waste time and make adjustments. Flexibility is key to adapting to unexpected tasks or deadlines.

## Common Mistakes to Avoid
- Overloading your day with too many tasks  
- Ignoring deadlines until the last minute  
- Multitasking excessively, which reduces efficiency  
- Not taking breaks, leading to burnout  

## FAQs About Time Management

**Q: How can I improve focus while studying?**  
A: Use techniques like Pomodoro, eliminate distractions, and set clear goals for each session.  

**Q: How much time should I dedicate to assignments each week?**  
A: Allocate at least 2–3 hours per credit hour for independent study and assignments, adjusting as needed for workload.  

**Q: Can digital tools help with time management?**  
A: Absolutely. Tools like Google Calendar, Trello, Notion, and Microsoft To-Do can help track tasks and deadlines efficiently.  

## Conclusion

Mastering time management is essential for university success. By planning your schedule, prioritizing tasks, avoiding procrastination, and maintaining balance, you can improve academic performance and reduce stress. Remember, good time management is not just about working harder—it’s about working smarter and staying consistent.  

`,date:"2025-09-30",readTime:"8 min read",category:"Student Success",tags:["Time Management","Study Tips","University Success","Student Productivity","Academic Tips","Avoid Procrastination","Effective Study Techniques"],image:"https://www.road2college.com/wp-content/uploads/2019/09/Untitled-design-2020-10-28T142936.436.png.webp",author:"Academia Helper"},{id:"18",slug:"critical-thinking-university-assignments",title:"The Importance of Critical Thinking in University Assignments",excerpt:"Learn why critical thinking is essential for academic success and how it can help you produce high-quality university assignments.",content:`
Critical thinking is a vital skill for university students. It involves analyzing information, evaluating evidence, and forming well-reasoned conclusions rather than accepting information at face value. Assignments that demonstrate critical thinking are often higher in quality, more persuasive, and academically respected.

## Why Critical Thinking Matters

Critical thinking helps students:
- Develop independent and analytical thinking  
- Assess the credibility and relevance of sources  
- Construct logical arguments and solutions  
- Avoid bias and unsupported claims  
- Prepare for professional and real-world problem solving  

## How Critical Thinking Improves Assignments

### 1. Analyzing Information
Rather than summarizing existing material, critical thinking encourages students to examine the evidence, identify patterns, and question assumptions. This depth of analysis demonstrates academic maturity.

### 2. Evaluating Sources
Students must distinguish between reliable and unreliable sources. Critical thinkers evaluate the authority, purpose, and evidence provided in journals, books, and online publications.

### 3. Developing Arguments
Assignments with strong critical thinking skills present coherent arguments, supported by evidence. Each claim is justified, and counterarguments are considered, enhancing the credibility of your work.

### 4. Problem Solving
Many assignments require proposing solutions or recommendations. Critical thinking enables students to assess multiple perspectives, foresee potential challenges, and suggest effective, evidence-based solutions.

## Tips to Enhance Critical Thinking in Assignments

- Ask questions: Who, What, Why, How, and What if?  
- Compare multiple sources and viewpoints  
- Reflect on your assumptions and biases  
- Support arguments with evidence, not opinions  
- Revise your work critically before submission  

## Common Mistakes to Avoid

- Accepting information without questioning  
- Relying on a single source  
- Making unsupported claims  
- Ignoring counterarguments or alternative perspectives  

## FAQs About Critical Thinking

**Q: Can critical thinking be learned?**  
A: Yes, with practice and conscious effort, students can improve their critical thinking skills through reading, discussion, and structured assignments.

**Q: How do I demonstrate critical thinking in essays?**  
A: Analyze evidence, question assumptions, compare perspectives, and present reasoned conclusions supported by credible sources.

**Q: Does critical thinking help in exams too?**  
A: Absolutely. It enables you to evaluate questions carefully, form logical answers, and tackle complex problems effectively.  

## Conclusion

Critical thinking is not just an academic requirement—it is a skill that underpins all successful learning and professional decision-making. By applying critical thinking in assignments, students can produce high-quality, well-reasoned work, develop independent judgment, and achieve academic excellence. Start questioning, analyzing, and reasoning today to elevate your university performance and prepare for future success.
`,date:"2025-09-30",readTime:"7 min read",category:"Academic Skills",tags:["Critical Thinking","University Assignments","Academic Success","Study Skills","Analytical Skills","Problem Solving","Evidence-Based Learning"],image:"https://media.istockphoto.com/id/1137923596/photo/serious-mixed-race-male-student-with-serious-face-sitting-at-the-deck-in-library-and-using.jpg?s=612x612&w=0&k=20&c=2hWToVwMUW56qA3Mj-nCZ-X0pY0RyZs08Kp9Wo2D9D4=",author:"Academia Helper"},{id:"19",slug:"effective-note-taking-techniques",title:"Effective Note-Taking Techniques for Better Grades",excerpt:"Discover the best note-taking strategies that help university students retain information, stay organized, and improve academic performance.",content:`
Taking effective notes is a critical skill for university students. Good notes help you retain information, prepare for exams, and organize ideas for assignments. Without proper note-taking techniques, students often struggle with understanding lectures and revising efficiently.

## Why Note-Taking Matters

Effective note-taking allows students to:
- Capture key points from lectures and readings  
- Understand complex concepts more clearly  
- Organize information for assignments and exam preparation  
- Reduce study time by focusing on essential material  
- Improve memory retention and academic performance  

## Popular Note-Taking Techniques

### 1. The Cornell Method
The Cornell Method divides your page into three sections: notes, cues, and summary. During lectures, jot down key points in the main section. Later, add questions or keywords in the cue column and summarize the lecture at the bottom. This method helps with reviewing and self-testing.

### 2. Mind Mapping
Mind maps visually connect ideas around a central topic. They are ideal for understanding relationships between concepts, brainstorming, and remembering complex information. Use colors, symbols, and arrows to enhance memory retention.

### 3. Outline Method
The Outline Method organizes notes hierarchically with headings, subheadings, and bullet points. It works well for structured lectures and subjects with clear frameworks, such as history or business studies.

### 4. Charting Method
For courses with data, statistics, or comparisons, the Charting Method is effective. Create tables or charts to organize information for quick reference and easier understanding.

### 5. Digital Note-Taking
Tools like **Notion, OneNote, Evernote, and Google Docs** allow students to type, organize, and access notes on multiple devices. Digital notes can include links, images, and searchable text, making study sessions more efficient.

## Tips for Better Note-Taking

- Review and revise notes shortly after lectures  
- Highlight key points and use abbreviations for speed  
- Avoid writing everything word-for-word; focus on main ideas  
- Combine different methods depending on the subject  
- Regularly organize notes to create a study-friendly system  

## Common Mistakes to Avoid

- Writing too much without understanding  
- Relying solely on memory instead of taking notes  
- Not reviewing notes regularly  
- Using disorganized or messy formats  
- Ignoring visual aids and diagrams that enhance understanding  

## FAQs About Note-Taking

**Q: Can I take notes on a laptop instead of paper?**  
A: Yes, digital note-taking can be faster and more organized, but avoid distractions from social media and notifications.  

**Q: How often should I review my notes?**  
A: Ideally, review notes within 24 hours after class, then weekly for reinforcement and long-term retention.  

**Q: Which method is best for exam preparation?**  
A: Use a combination of Cornell Method for lecture review and Mind Maps for connecting complex ideas.  

## Conclusion

Effective note-taking is not just a study habit—it is a powerful tool to improve grades and enhance learning. By applying the right techniques, staying organized, and reviewing notes consistently, students can retain information better, excel in exams, and produce high-quality assignments. Start practicing these note-taking methods today to see a noticeable difference in your academic performance.
`,date:"2025-09-30",readTime:"8 min read",category:"Study Skills",tags:["Note-Taking","Study Tips","Academic Success","University Skills","Memory Retention","Exam Preparation","Effective Learning"],image:"https://www.shutterstock.com/image-photo/closeup-writing-hands-students-school-600nw-115746919.jpg",author:"Academia Helper"},{id:"20",slug:"reading-research-papers-improve-work",title:"How Reading Research Papers Can Improve Your Academic Work",excerpt:"Discover why reading research papers is essential for university students and how it enhances your assignments, essays, and critical thinking.",content:`
Reading research papers is a crucial habit for students who want to excel academically. It exposes you to advanced ideas, evidence-based knowledge, and academic writing styles that can significantly enhance your own work.

## Why Reading Research Papers Matters

Research papers offer students:
- In-depth understanding of specific topics  
- Exposure to current trends and discoveries in a field  
- Insights into proper research methodology and analysis  
- Examples of academic writing structure and referencing  
- Inspiration for developing unique arguments and ideas  

## Benefits for Academic Work

### 1. Enhances Knowledge and Understanding
Reading research papers helps students understand the depth and complexity of a topic. It moves you beyond basic textbook knowledge and provides evidence-backed insights that strengthen your assignments.

### 2. Improves Critical Thinking
By evaluating arguments, methodologies, and conclusions in research papers, students develop critical thinking skills. You learn to question assumptions, analyze evidence, and assess the credibility of sources, which is essential for high-quality academic work.

### 3. Guides Your Research and Writing
Research papers demonstrate how to structure arguments, present data, and cite sources correctly. By studying them, you can model your essays, reports, or dissertations on professional academic standards.

### 4. Supports Evidence-Based Arguments
Assignments that cite and discuss research papers are more persuasive and credible. Using up-to-date studies shows professors that your work is informed, thorough, and academically rigorous.

### 5. Helps Identify Gaps and Opportunities
Reading multiple papers allows you to spot gaps in current research. This helps you choose unique topics, ask relevant questions, and produce original work that stands out academically.

## Tips for Reading Research Papers Effectively

- Skim abstracts and conclusions first to determine relevance  
- Focus on methodology and results for practical insights  
- Take notes highlighting key arguments and evidence  
- Compare multiple papers to understand different perspectives  
- Organize citations and references for easy use in your assignments  

## Common Challenges Students Face

- Difficulty understanding complex terminology or data  
- Feeling overwhelmed by the volume of papers  
- Struggling to identify relevant papers quickly  
- Not connecting findings to your own assignments  

## FAQs About Reading Research Papers

**Q: How often should I read research papers?**  
A: Regular reading—weekly or bi-weekly—helps build familiarity with your subject area and improves academic writing skills over time.  

**Q: Can I use research papers for any type of assignment?**  
A: Yes. Essays, reports, dissertations, and presentations all benefit from evidence-based insights drawn from research papers.  

**Q: Where can I find credible research papers?**  
A: Use academic databases like Google Scholar, JSTOR, PubMed, Scopus, and your university library resources.  

## Conclusion

Reading research papers is more than an academic exercise—it is a key to improving your assignments, essays, and overall understanding of your field. By incorporating research papers into your study routine, you develop critical thinking, enhance your writing, and produce evidence-based, high-quality academic work. Start exploring research papers today to take your academic performance to the next level.
`,date:"2025-09-30",readTime:"7 min read",category:"Academic Skills",tags:["Research Papers","Academic Writing","Critical Thinking","Study Skills","University Assignments","Evidence-Based Learning","Academic Success"],image:"https://live.stemfellowship.org/wp-content/uploads/2021/03/cc_careers_highlighting-lines-16x9-1.jpg",author:"Academia Helper"},{id:"21",slug:"common-assignment-mistakes-avoid",title:"Common Assignment Mistakes and How to Avoid Them",excerpt:"Learn about the most frequent mistakes students make in assignments and practical tips to avoid them for better grades.",content:`
Completing assignments is a crucial part of university life, but many students make common mistakes that can lower their grades or affect academic performance. Understanding these pitfalls and learning how to avoid them can significantly improve your work.

## Why Avoiding Assignment Mistakes Matters

Assignments are not just tasks; they reflect your understanding, research skills, and academic integrity. Avoiding errors ensures:
- Higher grades and better academic performance  
- Clear communication of your ideas  
- Proper use of evidence and sources  
- Stronger critical thinking and analytical skills  
- Adherence to academic standards and guidelines  

## Common Assignment Mistakes

### 1. Misunderstanding the Assignment Question
One of the most frequent mistakes is failing to fully understand the assignment prompt. Students may overlook keywords like “analyze,” “compare,” or “evaluate,” leading to irrelevant or incomplete answers. Always read the question carefully and clarify any doubts with your instructor.

### 2. Poor Research and Evidence
Assignments lacking credible sources or proper evidence appear weak. Relying solely on Wikipedia or general websites can undermine your credibility. Use academic journals, books, and trusted databases for reliable information.

### 3. Plagiarism
Copying content without proper citation is a serious academic offense. Plagiarism can result in failing grades, loss of scholarships, or even expulsion. Always reference your sources using the required citation style, such as APA 7, Harvard, or MLA.

### 4. Weak Structure and Organization
Disorganized assignments confuse readers and reduce clarity. Common issues include missing introductions, jumbled paragraphs, and unclear conclusions. Use a clear structure: Introduction → Main Body → Conclusion.

### 5. Ignoring Formatting and Guidelines
Each assignment comes with formatting instructions (font size, spacing, margins, referencing style). Ignoring these details can cost marks even if the content is strong.

### 6. Last-Minute Submission
Procrastination leads to rushed work, poor quality, and mistakes. Managing your time effectively ensures thorough research, proper proofreading, and high-quality submissions.

### 7. Lack of Proofreading
Typos, grammatical errors, and inconsistent formatting make assignments look unprofessional. Always review your work or use tools like Grammarly to polish your text.

## Tips to Avoid Assignment Mistakes

- **Understand the prompt** before starting  
- **Plan your work** and create a timeline  
- **Conduct thorough research** using credible sources  
- **Follow academic guidelines** and citation rules  
- **Organize content** with headings, subheadings, and clear paragraphs  
- **Proofread and edit** multiple times  
- **Seek feedback** from peers or instructors if possible  

## FAQs About Assignment Mistakes

**Q: How can I avoid plagiarism in assignments?**  
A: Always cite sources, use quotation marks for direct quotes, and paraphrase information properly. Use plagiarism checkers like Turnitin before submission.  

**Q: What if I don’t understand the assignment?**  
A: Reach out to your instructor or academic advisor for clarification. Breaking the task into smaller steps can also help.  

**Q: Are there tools to improve assignment structure?**  
A: Yes. Tools like Microsoft Word’s outline feature, Notion, or Mind Maps can help organize ideas logically.

## Conclusion

Avoiding common assignment mistakes is essential for academic success. By understanding the task, conducting proper research, maintaining originality, organizing your work, and proofreading carefully, you can submit high-quality assignments and improve your grades. Start applying these strategies today to avoid common pitfalls and enhance your academic performance.
`,date:"2025-09-30",readTime:"8 min read",category:"Study Skills",tags:["Assignment Tips","Academic Success","Avoid Mistakes","University Skills","Time Management","Research Skills","Study Tips"],image:"https://www.studioenglish.com/wp-content/uploads/2024/03/mistakes-in-learning-English.jpg",author:"Academia Helper"},{id:"22",slug:"improve-presentation-skills",title:"How to Improve Presentation Skills, Making Projects More Impactful",excerpt:"Learn practical strategies to enhance your presentation skills and make your academic or professional projects more engaging and impactful.",content:`
Effective presentation skills are essential for students and professionals alike. The ability to communicate ideas clearly and persuasively can significantly enhance the impact of your projects, reports, and research.

## Why Presentation Skills Matter

Strong presentation skills help you:
- Deliver ideas confidently and clearly  
- Engage and persuade your audience  
- Demonstrate professionalism and credibility  
- Enhance understanding of complex concepts  
- Improve academic or project grades through impactful delivery  

## Key Strategies to Improve Presentation Skills

### 1. Know Your Audience
Understanding your audience is the first step. Consider their knowledge level, interests, and expectations. Tailoring your content accordingly makes it more relatable and engaging.

### 2. Structure Your Presentation
A clear and logical structure ensures your audience can follow your message easily:
- **Introduction**: State the purpose, objectives, or research question  
- **Main Body**: Present key points, data, examples, and case studies  
- **Conclusion**: Summarize insights, provide recommendations, and highlight takeaways  

### 3. Design Engaging Visuals
Visual aids complement your speech and make your message memorable:
- Use slides with minimal text and impactful visuals  
- Incorporate charts, graphs, and infographics for data  
- Maintain consistency in fonts, colors, and layout  

### 4. Practice Delivery
Confident delivery is as important as content:
- Maintain eye contact and engage with your audience  
- Vary your tone and pace to emphasize key points  
- Avoid reading directly from slides; use notes or cue cards  
- Rehearse multiple times to refine timing and clarity  

### 5. Handle Questions and Feedback
Engage with your audience through Q&A sessions:
- Prepare for common questions in advance  
- Listen carefully before answering  
- Admit when unsure and offer to follow up  
- Use feedback to improve future presentations  

### 6. Manage Nervousness
Even experienced presenters get nervous. Strategies include:
- Deep breathing and relaxation exercises  
- Visualizing a successful presentation  
- Starting with small presentations to build confidence  
- Focusing on delivering value rather than perfection  

## Common Mistakes to Avoid
- Overloading slides with text  
- Speaking too fast or monotonously  
- Ignoring audience interaction  
- Neglecting preparation or rehearsal  
- Reading directly from notes without engagement  

## FAQs About Improving Presentation Skills

**Q: How long should a student presentation be?**  
A: Keep it concise; usually 10–15 minutes is ideal for class presentations. Quality and clarity matter more than length.  

**Q: Can I use tools like PowerPoint or Canva?**  
A: Absolutely. Tools like PowerPoint, Canva, Google Slides, or Prezi can enhance visual appeal and organization.  

**Q: How can I become a more confident speaker?**  
A: Practice regularly, receive constructive feedback, and gradually take on larger audiences to build confidence.  

## Conclusion

Improving presentation skills is a vital step toward making your projects more impactful. By understanding your audience, structuring your content, designing engaging visuals, practicing delivery, and managing feedback, you can transform any academic or professional project into a compelling and memorable presentation. Start implementing these strategies today to impress your audience and boost your confidence in public speaking.
`,date:"2025-09-30",readTime:"8 min read",category:"Academic Skills",tags:["Presentation Skills","Public Speaking","Academic Success","Project Presentation","Communication Skills","Student Tips","Impactful Presentations"],image:"https://mpf.com/wp-content/uploads/2023/04/033023-Presenting-Blog-Image-scaled.jpg",author:"Academia Helper"},{id:"23",slug:"research-techniques-use-sources-properly",title:"Effective Research Techniques for Assignments: How to Use Sources Properly",excerpt:"Learn proven research techniques to gather credible information and properly use sources for high-quality academic assignments.",content:`
Conducting effective research is a cornerstone of academic success. Using credible sources correctly not only strengthens your arguments but also ensures your work is ethical, original, and professional.

## Why Effective Research Matters

Good research allows students to:
- Gather accurate and relevant information  
- Support arguments with credible evidence  
- Avoid plagiarism by citing sources correctly  
- Demonstrate critical thinking and analytical skills  
- Improve the overall quality of assignments  

## Steps for Effective Research

### 1. Understand Your Assignment
Before starting research, clearly define your topic, scope, and objectives. Identify key questions, themes, or problems that your assignment addresses. Understanding the assignment ensures you focus on relevant sources and avoid wasting time.

### 2. Use Credible Sources
Not all information online is reliable. Prioritize:
- **Academic journals and books** for in-depth knowledge  
- **Government or institutional reports** for official data  
- **Reputable websites and databases** like JSTOR, Google Scholar, or PubMed  
- **Primary sources** such as interviews, surveys, and experiments  

### 3. Take Organized Notes
Keep track of all references, quotes, and ideas. Summarize information in your own words, highlight key points, and note page numbers. Tools like Notion, Evernote, or Zotero can help manage sources efficiently.

### 4. Analyze and Synthesize Information
Don’t just collect data—critically evaluate it:
- Compare multiple sources for consistency  
- Identify gaps or biases  
- Combine information from different sources to develop unique insights  

### 5. Properly Cite and Reference
Using sources without attribution is plagiarism. Always follow the required citation style (APA 7, Harvard, MLA, etc.):
- **Direct quotes** should be in quotation marks with proper citation  
- **Paraphrased content** must also cite the source  
- Include a **reference list** or bibliography at the end of your assignment  

### 6. Avoid Common Research Mistakes
- Relying solely on Wikipedia or general websites  
- Copying text without paraphrasing or citing  
- Using outdated or irrelevant sources  
- Ignoring assignment guidelines for formatting and referencing  

## FAQs About Research and Source Usage

**Q: How many sources should I include in my assignment?**  
A: It depends on the assignment length and requirements, but a mix of 5–15 credible sources is usually sufficient for most undergraduate papers.  

**Q: Can I use online articles or blogs?**  
A: Only if they are reputable and reliable. Always verify the author and publication credibility. Academic databases are preferred.  

**Q: What if I cannot find enough sources?**  
A: Broaden your search terms, check library databases, or consult your instructor for guidance. Quality matters more than quantity.  

## Conclusion

Mastering research techniques and proper source usage is essential for academic success. By understanding your assignment, using credible sources, organizing notes, analyzing information critically, and citing correctly, you can produce assignments that are original, well-supported, and impactful. Start applying these strategies today to improve your research skills and achieve better academic outcomes.
`,date:"2025-09-30",readTime:"9 min read",category:"Study Skills",tags:["Research Techniques","Academic Writing","Assignment Tips","Critical Thinking","Source Usage","Referencing","Study Skills"],image:"https://www.avu.education/images/easyblog_articles/30/way-clipart-research-paper-139132-3850968-1.jpg",author:"Academia Helper"},{id:"24",slug:"analyze-data-present-results",title:"How to Analyze Data for Assignments and Present Results Effectively",excerpt:"Learn step-by-step strategies for analyzing data accurately and presenting assignment results in a clear and impactful way.",content:`
Analyzing data effectively is essential for producing high-quality assignments and research projects. Clear interpretation and presentation of data not only strengthens your arguments but also demonstrates analytical and critical thinking skills.

## Why Data Analysis is Important

Proper data analysis helps students:
- Extract meaningful insights from raw information  
- Support conclusions with evidence  
- Avoid misinterpretation or bias in results  
- Improve clarity and professionalism in assignments  
- Achieve better grades through accurate presentation  

## Step 1: Understand Your Data

Before analyzing, review your dataset carefully:
- Identify variables, units, and data types  
- Understand the source and reliability of data  
- Determine whether the data is qualitative, quantitative, or mixed  

## Step 2: Organize and Clean Data

Clean, structured data ensures accurate analysis:
- Remove duplicates, errors, or irrelevant entries  
- Categorize and label variables clearly  
- Use software tools like Excel, SPSS, R, Python, or Google Sheets for organization  

## Step 3: Choose the Right Analysis Method

Different data types require different approaches:
- **Descriptive Analysis**: Mean, median, mode, frequency, percentage  
- **Inferential Analysis**: Hypothesis testing, regression, correlation  
- **Qualitative Analysis**: Thematic coding, categorization, content analysis  

## Step 4: Interpret the Results

Once analysis is complete, focus on interpretation:
- Highlight key trends, patterns, or anomalies  
- Relate findings to your research question or objectives  
- Avoid making unsupported conclusions  

## Step 5: Present Data Effectively

Presentation is crucial for making results understandable:
- Use **tables** for precise numbers and comparisons  
- Use **charts and graphs** (bar, line, pie, scatter) for visual clarity  
- Add clear titles, labels, and legends  
- Summarize key points in text alongside visuals for better comprehension  

## Step 6: Avoid Common Mistakes

- Presenting raw data without analysis or interpretation  
- Using inappropriate graph types for data  
- Overloading charts with too much information  
- Ignoring inconsistencies or errors in data  
- Failing to link results to research objectives  

## FAQs About Data Analysis in Assignments

**Q: Which software is best for analyzing assignment data?**  
A: Excel and Google Sheets are great for beginners; SPSS, R, and Python are ideal for advanced statistical analysis.  

**Q: How can I make my data presentation more impactful?**  
A: Use clear visuals, highlight key findings, provide context, and summarize insights in simple language.  

**Q: Do I need to include all raw data in my assignment?**  
A: No. Only include processed, relevant, and summarized data. Raw datasets can be added in appendices if required.  

## Conclusion

Effective data analysis and presentation are key to producing high-quality assignments. By understanding your data, cleaning and organizing it, choosing the right analysis method, interpreting findings carefully, and presenting results clearly, you can make your academic work both credible and impactful. Applying these strategies will not only enhance your grades but also improve your analytical and communication skills.
`,date:"2025-09-30",readTime:"9 min read",category:"Study Skills",tags:["Data Analysis","Assignment Tips","Academic Research","Presentation Skills","Charts and Graphs","Study Skills","Critical Thinking"],image:"https://learn.g2.com/hubfs/Imported%20sitepage%20images/1ZB5giUShe0gw9a6L69qAgsd7wKTQ60ZRoJC5Xq3BIXS517sL6i6mnkAN9khqnaIGzE6FASAusRr7w=w1439-h786.png",author:"Academia Helper"},{id:"25",slug:"planning-writing-assignments-stay-organized",title:"The Benefits of Planning Before Writing Assignments and How to Stay Organized",excerpt:"Discover why planning is essential before writing assignments and learn practical strategies to stay organized for academic success.",content:`
Planning before writing assignments is a critical step that many students overlook. By preparing in advance, you can save time, reduce stress, and produce high-quality work that meets academic standards.

## Why Planning is Essential

Proper planning allows you to:
- Understand the assignment requirements clearly  
- Set achievable goals and deadlines  
- Organize research materials effectively  
- Structure your ideas logically  
- Avoid last-minute stress and rushed work  

Without planning, students often face disorganization, incomplete research, and poor-quality writing, which can negatively impact grades.

## Steps to Plan Assignments Effectively

### 1. Analyze the Assignment Prompt
Start by carefully reading the assignment instructions. Identify:
- The topic or research question  
- Required word count or page limit  
- Submission format and referencing style  
- Key objectives and evaluation criteria  

### 2. Create a Timeline
Break the assignment into manageable tasks:
- Research and data collection  
- Outline creation  
- Writing draft sections  
- Editing and proofreading  
Set deadlines for each task to ensure steady progress.

### 3. Gather and Organize Resources
Collect all necessary sources, such as books, journals, and credible online materials. Organize them by topic or assignment section to make referencing easier.

### 4. Draft an Outline
An outline serves as a roadmap for your assignment:
- Introduction: Define the purpose and scope  
- Main body: Divide into key arguments or points  
- Conclusion: Summarize findings and provide insights  
Include subheadings and bullet points to maintain clarity.

### 5. Prioritize Tasks
Focus on high-priority sections first or areas requiring more research. Use tools like Trello, Notion, or simple checklists to track progress and stay accountable.

## Tips to Stay Organized While Writing

- Keep all notes and references in one place  
- Use digital tools for citation management (Zotero, Mendeley, EndNote)  
- Regularly review and adjust your timeline  
- Avoid multitasking to maintain focus and efficiency  
- Take short breaks to stay productive and prevent burnout  

## FAQs About Planning Assignments

**Q: How much time should I spend planning before writing?**  
A: Depending on assignment length, 15–25% of total time should be dedicated to planning and outlining.  

**Q: Can planning improve the quality of my writing?**  
A: Absolutely. Organized planning helps structure arguments logically, ensures evidence is included, and reduces errors.  

**Q: What if I procrastinate and have little time left?**  
A: Even brief planning—like drafting a quick outline and listing key sources—can significantly improve focus and quality.

## Conclusion

Planning before writing is not just a preparatory step—it is the foundation of successful assignments. By analyzing prompts, creating timelines, organizing resources, drafting outlines, and prioritizing tasks, you can stay organized and produce high-quality work. Implementing these strategies reduces stress, improves efficiency, and enhances your academic performance.
`,date:"2025-09-30",readTime:"8 min read",category:"Study Skills",tags:["Assignment Planning","Time Management","Study Skills","Academic Success","Organizational Tips","Student Productivity"],image:"https://web-static.wrike.com/blog/content/uploads/2022/01/iStock-1224089927-e1641818884847.jpg?av=d4b207c90f9f4996167ec11bd32c5d41",author:"Academia Helper"},{id:"26",slug:"proofreading-assignments-spot-correct-mistakes",title:"The Role of Proofreading in Assignments: How to Spot and Correct Mistakes",excerpt:"Learn why proofreading is essential for high-quality assignments and discover practical strategies to identify and correct errors effectively.",content:`
Proofreading is the final step in the assignment-writing process, but it is often underestimated. Carefully reviewing your work ensures clarity, accuracy, and professionalism, significantly improving your grades.

## Why Proofreading is Crucial

Proofreading helps students:
- Identify and correct spelling, grammar, and punctuation errors  
- Ensure clarity and coherence of ideas  
- Improve sentence structure and flow  
- Verify proper formatting and referencing  
- Avoid common mistakes that can lower marks  

Even small errors can distract the reader and weaken the credibility of your work, so thorough proofreading is essential.

## Step 1: Take a Break Before Proofreading

After completing your draft, step away for a few hours or even a day. Fresh eyes can catch errors that were overlooked during writing and improve overall objectivity.

## Step 2: Focus on Different Types of Errors

### Spelling and Grammar
Use tools like Grammarly, Microsoft Word, or Hemingway Editor, but also manually check for:
- Homophones (e.g., their/there/they’re)  
- Commonly confused words  
- Subject-verb agreement  

### Punctuation
Check for correct use of commas, semicolons, colons, and periods. Misplaced punctuation can change the meaning of sentences.

### Sentence Structure and Clarity
- Ensure sentences are concise and clear  
- Avoid overly long or complex sentences  
- Use active voice where possible  

### Formatting and Referencing
- Follow the required academic style (APA, Harvard, MLA, etc.)  
- Check headings, subheadings, margins, and spacing  
- Verify that citations and references are complete and accurate  

## Step 3: Read Aloud

Reading your assignment aloud helps identify awkward phrasing, missing words, and flow issues. It engages both visual and auditory senses, making errors easier to spot.

## Step 4: Use Peer Review

If possible, ask a classmate or friend to review your work. A fresh perspective often catches mistakes you may have missed and provides constructive feedback.

## Step 5: Final Checklist

Before submission, ensure:
- All instructions and criteria are followed  
- Data, tables, and figures are correctly labeled  
- Your work is consistent in style and tone  
- No plagiarism or formatting errors remain  

## FAQs About Proofreading Assignments

**Q: How long should I spend proofreading?**  
A: Dedicate at least 20–30% of your total assignment time to reviewing and editing.  

**Q: Can software completely replace manual proofreading?**  
A: No. Tools are helpful but cannot catch context errors, logical inconsistencies, or subtle stylistic issues.  

**Q: How often should I proofread during the writing process?**  
A: Proofread at least twice: once after completing the first draft and once before final submission.

## Conclusion

Proofreading is an essential skill for academic success. By carefully reviewing spelling, grammar, punctuation, sentence structure, formatting, and referencing, you can produce polished assignments that communicate your ideas clearly and professionally. Incorporating breaks, reading aloud, using peer feedback, and applying a final checklist will ensure your work is error-free and high-quality.
`,date:"2025-09-30",readTime:"8 min read",category:"Study Skills",tags:["Proofreading","Assignment Tips","Academic Writing","Editing Skills","Study Skills","Error Correction","Student Success"],image:"https://www.enago.com/academy/wp-content/uploads/2023/06/Proofreading_FI_new.png",author:"Academia Helper"},{id:"27",slug:"using-visuals-charts-assignments",title:"Using Visuals and Charts in Assignments: Making Reports More Engaging",excerpt:"Discover how using visuals and charts can make your assignments clearer, more engaging, and professional, helping you communicate ideas effectively.",content:`
Visuals and charts are essential tools in modern academic assignments. They not only make your work look professional but also help readers quickly grasp complex ideas. Whether it is numerical data, research results, or process explanations, visuals simplify information and make it easier to understand.

## Why Visuals and Charts Are Important

Adding visuals to your assignments offers several benefits. They help to:

- **Clarify complex information**: A well-designed chart can summarize data that would take paragraphs to explain.  
- **Highlight trends and patterns**: Graphs can show growth, decline, or comparisons over time.  
- **Make your report visually appealing**: Structured visuals break the monotony of text and keep the reader engaged.  
- **Support arguments with evidence**: Tables, charts, and graphs provide proof for your claims.  
- **Increase retention**: Readers remember visual information better than text-only explanations.  

For example, if you are writing a business report showing sales performance over a year, a line graph quickly communicates trends that would be tedious to describe in words.

## Types of Visuals You Can Use

### Charts and Graphs
Charts are perfect for displaying numerical data. Each type has a specific purpose:

- **Bar Charts**: Compare different categories side by side, like revenue from different regions.  
- **Line Graphs**: Show trends over time, for example, monthly sales or student performance.  
- **Pie Charts**: Represent proportions or percentages, like market share distribution.  
- **Scatter Plots**: Reveal relationships between two variables, for instance, hours studied versus exam scores.  

### Tables
Tables are excellent for organizing information clearly. They allow the reader to compare data easily. Use tables to present:

- Survey results  
- Experimental data  
- Timelines or schedules  

### Infographics and Illustrations
Infographics combine visuals and text to explain a concept quickly. Use them to:

- Show step-by-step processes  
- Visualize hierarchies or classifications  
- Highlight important findings or summaries  

## Tips for Using Visuals Effectively

1. **Keep it simple**: Avoid clutter and focus only on essential information.  
2. **Label everything clearly**: Titles, axes, units, and captions help the reader understand the visual.  
3. **Use consistent style and colors**: Uniform visuals make your report look polished.  
4. **Integrate visuals into your text**: Explain what the chart or table shows and why it matters.  
5. **Avoid overuse**: Only use visuals that support your points; too many can overwhelm the reader.  

## Common Mistakes Students Make

- Using visuals without explanation, leaving the reader confused.  
- Selecting the wrong type of chart for the data, which can misrepresent information.  
- Overloading visuals with too much information, making them hard to read.  
- Ignoring proper labeling, leading to unclear communication.  

## Frequently Asked Questions

**Q: Can I use online tools to create visuals?**  
A: Absolutely! Tools like Microsoft Excel, Google Sheets, Canva, Piktochart, and PowerPoint make it easy to design professional charts, graphs, and infographics.

**Q: How many visuals should I include in a report?**  
A: Include only what is necessary to explain or support your arguments. Quality and clarity matter more than quantity.

**Q: Should I explain every visual?**  
A: Yes, always describe what the visual shows and how it relates to your analysis. This ensures clarity and demonstrates understanding.

## Conclusion

Using visuals and charts in assignments transforms your reports from plain text into engaging, easy-to-read documents. They clarify complex data, highlight key points, and make your work more professional. By carefully selecting the right type of visual, labeling it properly, and integrating it into your text, you can make your assignments not only informative but also visually appealing. Remember, visuals are not just decorative—they are a vital tool for effective academic communication.
`,date:"2025-09-30",readTime:"9 min read",category:"Study Skills",tags:["Visuals in Assignments","Charts and Graphs","Academic Writing","Report Writing","Data Presentation","Study Tips","Student Success","Assignment Help"],image:"https://ninjatables.com/wp-content/uploads/2022/10/Marketing-tips-to-Increase-Sales.png",author:"Academia Helper"},{id:"29",slug:"perfect-university-assignment-guide",title:"How to Write a Perfect University Assignment: Step-by-Step Guide for Beginners",excerpt:"Learn how to write a flawless university assignment with this step-by-step guide. Tips, examples, and strategies for beginners to achieve top grades.",content:`
Writing a perfect university assignment can feel overwhelming for beginners, but with a clear plan and structured approach, it becomes manageable. This guide will walk you through every step, from understanding the question to submitting a polished assignment.

## Step 1: Understand the Assignment

Before you start writing, carefully read the assignment instructions. Identify:

- The **topic or question** you need to answer  
- The **type of assignment** (essay, report, case study, lab report)  
- Word count, formatting style, and submission guidelines  

Understanding the requirements ensures you focus on relevant content and avoid unnecessary work.

## Step 2: Plan and Research

Effective planning saves time and improves the quality of your assignment. Start by:

- Creating an **outline** with main headings and subheadings  
- Conducting thorough **research** from reliable sources: academic journals, books, and credible websites  
- **Organizing your notes** and marking references for easy citation  

### Discussion: Importance of Research

Research is the backbone of any academic assignment. Using credible sources not only strengthens your arguments but also helps avoid plagiarism. Proper research also shows your understanding of the topic and critical thinking skills.

## Step 3: Structure Your Assignment

A well-structured assignment is easier to read and more persuasive. Typical structure includes:

- **Introduction**: Introduce the topic, provide context, and state your thesis  
- **Main Body**: Divide into sections or headings; each section should have clear arguments supported by evidence  
- **Conclusion**: Summarize findings, highlight key points, and provide recommendations if applicable  

### Q&A

**Q: How long should each section be?**  
A: The length depends on total word count. Introduction and conclusion are usually shorter, while the main body contains detailed analysis.

**Q: Can I include subheadings?**  
A: Yes, subheadings improve readability and help organize ideas logically.

## Step 4: Write Clearly and Concisely

- Use **simple, academic language**  
- Avoid long, confusing sentences  
- Stick to **relevant information** and avoid unnecessary filler  
- Use **examples, case studies, and data** to support arguments  

### Discussion: Common Writing Mistakes

Many beginners make the mistake of writing too broadly or including irrelevant information. Focus on addressing the assignment question directly. Clarity and focus are more important than word count.

## Step 5: Cite Sources Properly

- Use the required **referencing style** (APA, Harvard, MLA, etc.)  
- Include **in-text citations** and a **reference list**  
- Avoid plagiarism by crediting original authors  

### Q&A

**Q: What if I forget to cite a source?**  
A: Omitting citations is considered plagiarism. Always double-check references before submission.

**Q: Can I use citation tools?**  
A: Yes, tools like Zotero, Mendeley, and CiteThisForMe help create accurate references quickly.

## Step 6: Proofread and Edit

Proofreading ensures your assignment is error-free and professional. Check for:

- Grammar, spelling, and punctuation errors  
- Proper formatting and referencing  
- Flow of ideas and clarity  
- Redundant or unclear sentences  

### Discussion: The Role of Editing

Editing refines your work and ensures your ideas are communicated effectively. Multiple revisions often result in higher-quality assignments and better grades.

## Step 7: Submit on Time

- Always **plan submission** ahead to avoid last-minute stress  
- Double-check file format and submission portal  
- Keep a **backup copy** of your assignment  

## Frequently Asked Questions

**Q: How long does it take to write a university assignment?**  
A: It depends on the topic and word count, but planning and early research can significantly reduce last-minute pressure.

**Q: Can beginners achieve top grades?**  
A: Absolutely! Following a structured approach, researching properly, and proofreading carefully can help beginners write excellent assignments.

**Q: Is it okay to ask for help?**  
A: Yes, discussing ideas with peers or seeking guidance from tutors is encouraged, but ensure the work you submit is original.

## Conclusion

Writing a perfect university assignment is a step-by-step process that combines planning, research, writing, and proofreading. Beginners should focus on understanding the assignment, organizing ideas clearly, using credible sources, and presenting work professionally. By following these steps, you can submit assignments that are not only complete but also impactful, improving your chances of achieving top grades.
`,date:"2025-10-01",readTime:"10 min read",category:"Study Skills",tags:["University Assignments","Academic Writing","Assignment Tips","Student Success","Study Skills","Research Techniques","Citing Sources","Time Management for Students"],image:"https://images.theconversation.com/files/350748/original/file-20200803-22-19446k1.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1000&fit=clip",author:"Academia Helper"},{id:"30",slug:"academic-writing-tips-structure-clarity",title:"Academic Writing Tips for Students: How to Improve Structure and Clarity",excerpt:"Learn effective academic writing strategies to improve structure, clarity, and coherence in your essays, reports, and assignments.",content:`
Academic writing is a critical skill for students to succeed in university. Clear structure and well-organized ideas not only make your work easier to read but also demonstrate your understanding of the subject.

## Why Structure and Clarity Matter

A well-structured assignment ensures that your arguments flow logically and your ideas are easy to follow. Clarity helps readers understand your points without confusion, making your work more persuasive and professional. Poor structure or unclear writing can lead to lower grades, even if the research is excellent.

## Step 1: Plan Before You Write

Before starting your draft:

- Outline the main points and sections of your assignment.  
- Decide the order of your arguments to ensure logical progression.  
- Identify key sources and examples to support each point.  

Planning creates a roadmap for your writing, reducing the risk of rambling or missing critical information.

## Step 2: Use a Clear Structure

Most academic assignments follow a standard structure:

- **Introduction**: Introduce the topic, provide context, and state your thesis.  
- **Body**: Develop each argument or point in separate paragraphs. Start with a topic sentence, provide evidence, and conclude the paragraph clearly.  
- **Conclusion**: Summarize key findings, restate your thesis, and provide recommendations or insights if applicable.  

### Q&A

**Q: How many paragraphs should an essay have?**  
A: It depends on the word count, but generally 3–5 paragraphs for the body section works well for shorter essays. Longer essays may have more sections.

**Q: Should I include headings?**  
A: Yes, headings improve readability and help structure longer assignments, especially reports or case studies.

## Step 3: Write Clearly and Concisely

- Use **simple and precise language** to communicate your ideas.  
- Avoid jargon unless necessary and explain technical terms.  
- Make sentences concise and avoid unnecessary filler words.  
- Focus on **one idea per paragraph** for clarity.  

### Discussion: Common Writing Issues

Students often lose marks due to vague arguments, repetitive sentences, or disorganized ideas. Concentrating on clear, structured writing improves both comprehension and academic performance.

## Step 4: Use Transitions and Linking Words

Smooth transitions guide the reader from one idea to another. Words like *however, therefore, in addition,* and *for example* create a logical flow. Linking sentences between paragraphs helps maintain coherence and strengthens your argument.

## Step 5: Cite Sources Properly

Accurate referencing enhances clarity and credibility:

- Use APA, Harvard, MLA, or the required referencing style.  
- Include in-text citations for all data, quotes, and ideas from sources.  
- Provide a reference list at the end of your assignment.  

Proper citation avoids plagiarism and supports your arguments effectively.

## Step 6: Edit and Proofread

Editing ensures your work is polished and readable:

- Check grammar, punctuation, and spelling errors.  
- Confirm that arguments are coherent and logically ordered.  
- Remove redundant words or sentences.  
- Read your work aloud to identify unclear phrasing.  

### Q&A

**Q: How many times should I proofread?**  
A: At least twice—once for content and structure, and once for grammar and clarity.

**Q: Can peer feedback help?**  
A: Yes, peers can provide insights on unclear points and help improve your writing flow.

## Tips for Improving Academic Writing

- Practice writing regularly to strengthen clarity and structure.  
- Read academic articles in your field to understand professional writing style.  
- Break longer assignments into smaller sections to manage workload efficiently.  
- Use tools like Grammarly or Hemingway Editor to identify readability issues.  

## Conclusion

Improving academic writing is about combining clear structure, logical flow, and precise language. Planning, organizing ideas, proper referencing, and thorough proofreading are essential steps to produce high-quality assignments. By following these tips, students can enhance clarity, coherence, and overall academic performance, making their writing professional and impactful.
`,date:"2025-10-01",readTime:"9 min read",category:"Study Skills",tags:["Academic Writing","Writing Tips","Essay Structure","Clarity in Writing","Study Skills","Assignment Help","Student Success","Research Writing"],image:"https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d3JpdGluZyUyMGElMjBib29rfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",author:"Academia Helper"},{id:"31",slug:"common-referencing-mistakes-academic-writing",title:"Common Referencing Mistakes in Academic Writing and How to Avoid Them",excerpt:"Learn about common referencing mistakes students make in academic writing and how to avoid them to ensure credibility and avoid plagiarism.",content:`
Proper referencing is a cornerstone of academic writing. It shows that you have researched your topic thoroughly, gives credit to original authors, and helps avoid plagiarism. However, many students make common mistakes that can reduce the credibility of their assignments.

## Why Correct Referencing Matters

Accurate referencing demonstrates your academic integrity and professionalism. It allows readers to verify sources, follow up on research, and trust your arguments. Incorrect referencing, on the other hand, can lead to:

- Loss of marks  
- Accusations of plagiarism  
- Reduced credibility of your work  

## Common Referencing Mistakes

### 1. Forgetting to Cite Sources
One of the most common mistakes is failing to cite sources for quotes, data, or ideas. Even paraphrasing requires proper citation.  

**Tip:** Keep a running list of sources as you research and write to ensure nothing is missed.

### 2. Inconsistent Referencing Style
Mixing APA, Harvard, MLA, or other styles in the same assignment can confuse readers and reduce professionalism.  

**Tip:** Stick to the referencing style required by your institution and check guidelines carefully.

### 3. Incorrect In-Text Citations
Students often make mistakes in author names, publication years, page numbers, or formatting. This can make citations invalid.  

**Tip:** Double-check each in-text citation against the reference list.

### 4. Missing Reference List or Bibliography
Even if in-text citations are correct, failing to include a reference list at the end is a major oversight.  

**Tip:** Ensure every in-text citation has a corresponding entry in your reference list.

### 5. Copying References Incorrectly
Copying references from the internet without verifying accuracy can result in errors.  

**Tip:** Always cross-check details like author names, publication year, and titles from reliable sources.

### 6. Over-Reliance on a Few Sources
Using the same sources repeatedly limits the breadth of research and can weaken arguments.  

**Tip:** Diversify sources and include a mix of books, journal articles, and credible websites.

### Discussion: How to Avoid These Mistakes

- **Use Reference Management Tools:** Tools like Zotero, Mendeley, EndNote, and RefWorks help manage citations and automatically format them.  
- **Understand the Referencing Style:** Familiarize yourself with rules for APA 7, Harvard, MLA, or your required style.  
- **Proofread References:** Review both in-text citations and reference lists to catch inconsistencies.  
- **Paraphrase Properly:** When rewording someone else’s ideas, make sure you still credit the original author.  

## FAQs About Referencing

**Q: What is the difference between a bibliography and a reference list?**  
A: A reference list includes only sources cited in your text, while a bibliography can include additional readings consulted.

**Q: Can I cite websites or social media posts?**  
A: Yes, credible sources like academic websites, official reports, and verified social media posts can be cited, but check your referencing style for correct formatting.

**Q: How do I handle multiple authors?**  
A: Different styles have specific rules. For example, APA uses “et al.” for more than two authors, while Harvard may list all authors or use “et al.” depending on guidelines.

**Q: Is plagiarism only copying text?**  
A: No. Using someone’s ideas, data, or graphics without proper credit is also plagiarism.

## Conclusion

Avoiding referencing mistakes is essential for producing credible, professional, and plagiarism-free academic work. By understanding the rules of your chosen referencing style, using management tools, and reviewing your work carefully, you can improve your academic writing quality and protect your integrity as a student.
`,date:"2025-10-02",readTime:"8 min read",category:"Study Skills",tags:["Referencing Tips","Academic Writing","Avoid Plagiarism","Citation Mistakes","APA 7","Harvard Style","MLA Style","Student Success","Assignment Help"],image:"https://media.licdn.com/dms/image/v2/D5612AQEVwukncXi0QQ/article-cover_image-shrink_720_1280/B56ZhU9dcSH0AM-/0/1753772074660?e=2147483647&v=beta&t=1nlgW9WSTew4EBjF6Ui6PQYbEdB5104dPPpItPGf27Y",author:"Academia Helper"},{id:"32",slug:"how-to-structure-university-assignment-effectively",title:"How to Structure a University Assignment Effectively for Higher Grades",excerpt:"Struggling with assignment structure? Learn how to organize your university assignments clearly to improve readability and boost your grades.",content:`
A well-structured assignment is key to achieving high grades in university. Many students lose marks not because of poor ideas, but because their work lacks clarity and organization.

## Why Assignment Structure Matters

A clear structure helps your reader understand your arguments easily. It also shows your logical thinking and academic skills.

Poor structure can lead to:
- Confusing arguments  
- Loss of marks  
- Weak presentation  

## Standard Assignment Structure

### 1. Introduction
Your introduction should explain:
- The topic  
- The purpose of the assignment  
- A brief overview of what will be discussed  

**Tip:** Keep it concise but informative.

### 2. Main Body Paragraphs
Each paragraph should focus on one idea:
- Start with a topic sentence  
- Provide evidence or examples  
- Add analysis  

**Tip:** Use headings if allowed.

### 3. Conclusion
Summarize key points and restate your main argument without adding new information.

## Common Structuring Mistakes

- Writing long, unorganized paragraphs  
- Lack of clear introduction or conclusion  
- Jumping between ideas without transitions  

## Tips to Improve Structure

- Use outlines before writing  
- Follow a logical flow  
- Use linking words (however, therefore, etc.)  

## FAQs

**Q: How long should an introduction be?**  
A: Around 10% of the total word count.

**Q: Can I use bullet points in assignments?**  
A: Yes, if allowed by your instructor.

**Q: What is a topic sentence?**  
A: The main idea of a paragraph, usually the first sentence.

## Conclusion

A strong structure improves clarity, readability, and grades. Planning your assignment before writing can make a huge difference in your academic success.
`,date:"2025-10-05",readTime:"7 min read",category:"Assignment Help",tags:["Assignment Structure","Academic Writing Tips","University Assignments","Student Guide","Improve Grades"],image:"",author:"Academia Helper"},{id:"33",slug:"how-to-avoid-procrastination-studying",title:"How to Avoid Procrastination While Studying and Meet Deadlines Easily",excerpt:"Learn practical strategies to overcome procrastination and stay productive while studying or completing assignments.",content:`
Procrastination is one of the biggest challenges students face. Delaying work can lead to stress, missed deadlines, and poor academic performance.

## Why Students Procrastinate

Common reasons include:
- Fear of failure  
- Lack of motivation  
- Poor time management  

## Practical Ways to Stop Procrastination

### 1. Break Tasks into Smaller Steps
Large tasks feel overwhelming. Divide them into smaller parts.

### 2. Use the Pomodoro Technique
Study for 25 minutes, then take a 5-minute break.

### 3. Set Clear Deadlines
Even if your deadline is far away, set personal deadlines.

### 4. Remove Distractions
Turn off notifications and create a focused study environment.

## Common Mistakes

- Waiting for motivation  
- Studying without a plan  
- Multitasking  

## Tips for Better Focus

- Create a daily schedule  
- Use productivity apps  
- Reward yourself after completing tasks  

## FAQs

**Q: Why do I procrastinate even when I know it’s important?**  
A: It’s often due to fear, lack of clarity, or feeling overwhelmed.

**Q: How can I stay consistent?**  
A: Build small daily habits and stick to a routine.

**Q: Does taking breaks help?**  
A: Yes, short breaks improve focus and productivity.

## Conclusion

Overcoming procrastination is about building discipline and using the right strategies. Start small, stay consistent, and you will see improvement.
`,date:"2025-10-07",readTime:"6 min read",category:"Study Skills",tags:["Procrastination Tips","Student Productivity","Time Management","Study Habits","Focus Techniques"],image:"",author:"Academia Helper"},{id:"34",slug:"how-to-write-strong-thesis-statement",title:"How to Write a Strong Thesis Statement for Academic Essays",excerpt:"Learn how to create a clear and strong thesis statement that improves your essay quality and academic writing.",content:`
A thesis statement is the backbone of your academic essay. It tells the reader your main argument and guides the entire paper.

## Why a Thesis Statement is Important

A strong thesis:
- Provides direction  
- Keeps your writing focused  
- Helps readers understand your argument  

## Characteristics of a Strong Thesis

### 1. Clear and Specific
Avoid vague statements. Be direct about your argument.

### 2. Debatable
Your thesis should present an argument, not a fact.

### 3. Concise
Keep it short and to the point.

## Examples

Weak: Social media is popular.  
Strong: Social media negatively impacts student productivity by increasing distractions and reducing focus.

## Common Mistakes

- Writing too broad statements  
- Making it too complicated  
- Not aligning with the essay content  

## Tips to Improve Your Thesis

- Write it after outlining your essay  
- Revise it as your ideas develop  
- Get feedback from peers or teachers  

## FAQs

**Q: Where should I place my thesis statement?**  
A: Usually at the end of the introduction.

**Q: Can I change my thesis later?**  
A: Yes, it can evolve as your essay develops.

**Q: How long should a thesis statement be?**  
A: Typically 1–2 sentences.

## Conclusion

A strong thesis statement improves the clarity and quality of your essay. Spend time crafting it carefully to strengthen your academic writing.
`,date:"2025-10-09",readTime:"6 min read",category:"Academic Writing",tags:["Thesis Statement","Essay Writing","Academic Skills","Writing Tips","Student Guide"],image:"",author:"Academia Helper"},{id:"35",slug:"how-to-read-research-papers-easily",title:"How to Read Research Papers Easily for Assignments and Projects",excerpt:"Learn simple and effective strategies to read and understand research papers quickly for assignments, projects, and academic success.",content:`
Reading research papers can feel overwhelming for many students, especially beginners. Complex language, unfamiliar terms, and long sections often make it difficult to understand the main idea. However, with the right strategy, you can read research papers easily and use them effectively in your assignments and projects.

## Why Research Papers Feel Difficult

Research papers are written for academic audiences, which means they often use technical language, structured formats, and detailed analysis. Students usually struggle because:

- The content includes advanced vocabulary and concepts  
- Papers are long and filled with data, graphs, and references  
- The structure is unfamiliar to beginners  
- There is too much information to process at once  

Understanding that research papers are not meant to be read like textbooks is the first step toward improving your reading approach.

## Structure of a Research Paper Explained

Most research papers follow a standard structure. Knowing this helps you navigate them more efficiently:

- **Abstract:** A short summary of the entire paper  
- **Introduction:** Background information and research purpose  
- **Methodology:** How the research was conducted  
- **Results:** Findings of the study (often includes charts or data)  
- **Discussion:** Interpretation of results  
- **Conclusion:** Final thoughts and implications  
- **References:** Sources used in the research  

You don’t need to read every section in detail at first. Focus on understanding the key parts.

## Smart Reading Strategy (Skimming + Deep Reading)

Instead of reading line by line, use a two-step approach:

### Step 1: Skimming
Quickly go through the paper to get the main idea:
- Read the title, abstract, and conclusion  
- Look at headings and subheadings  
- Check graphs, tables, and highlighted points  

This gives you a general understanding without spending too much time.

### Step 2: Deep Reading
After skimming, go back and read important sections carefully:
- Focus on the introduction and discussion  
- Highlight key arguments and findings  
- Note any important terms or concepts  

This method saves time and improves comprehension.

## How to Take Notes from Research Papers

Taking effective notes helps you use research papers in assignments:

- Write summaries in your own words  
- Note key arguments and supporting evidence  
- Record important quotes with proper references  
- Highlight keywords and concepts  
- Organize notes by topic or theme  

### Discussion: Why Note-Taking Matters

Good notes make it easier to write assignments later. Instead of rereading the entire paper, you can quickly review your notes and extract relevant information.

## Common Mistakes Students Make

- Trying to read the entire paper word by word  
- Ignoring the structure of the paper  
- Not taking notes while reading  
- Spending too much time on one paper  
- Copying content instead of understanding it  

Avoiding these mistakes will make your research process faster and more effective.

## FAQs

**Q: How do beginners read research papers?**  
A: Beginners should start with skimming (title, abstract, conclusion) before reading important sections in detail. This helps build understanding gradually.

**Q: How much time should I spend on one paper?**  
A: Typically 20–40 minutes is enough for most papers. Spend more time only if the paper is highly relevant to your assignment.

**Q: What is the easiest way to understand research articles?**  
A: Break the paper into sections, use skimming first, take notes, and focus on key ideas instead of reading every word.

## Conclusion

Reading research papers does not have to be difficult. By understanding the structure, using smart reading strategies, and taking effective notes, you can quickly extract useful information for your assignments and projects. With practice, you will become faster and more confident in handling academic research papers.
`,date:"2025-10-03",readTime:"8 min read",category:"Study Skills",tags:["Research Papers","Academic Research Tips","Study Skills","Assignment Help","Student Success","Reading Techniques","Research Methods","University Tips"],image:"https://images.unsplash.com/photo-1455885661740-29cbf08a42fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",author:"Academia Helper"},{id:"36",slug:"how-to-reduce-ai-detection-academic-writing",title:"How to Reduce AI Detection in Academic Writing (Without Breaking Rules)",excerpt:"Learn how to reduce AI detection in academic writing using ethical techniques, humanizing strategies, and smart editing methods for better assignments.",content:`
AI tools are now widely used by students for writing assignments, essays, and research summaries. However, many universities use AI detection systems to ensure academic integrity. This has led students to search for ways to **reduce AI detection in academic writing** while still following ethical guidelines.

The key is not to “cheat the system,” but to **humanize AI-generated content properly**, improve originality, and make your writing sound natural and student-like.

---

## What Is AI Detection in Academic Writing?

AI detection refers to the use of software tools that analyze text and determine whether it was written by a human or generated by artificial intelligence.

Common AI detection tools include:
- Turnitin AI detection
- GPTZero
- Originality.ai

These tools look for patterns such as sentence structure, predictability, repetition, and lack of personal writing style.

---

## Why AI Content Gets Flagged by Detection Tools

AI-generated content is often flagged because it tends to:

- Use very structured and predictable sentence patterns  
- Lack personal opinion or experience  
- Avoid small grammar imperfections that humans naturally make  
- Use repetitive phrasing and neutral tone  

Detection tools are trained to identify these patterns, not just copied content.

---

## Common Mistakes Students Make When Using AI

Many students unintentionally increase AI detection risk by:

- Submitting raw AI-generated text without editing  
- Copying content directly from AI tools  
- Not adding personal analysis or examples  
- Using overly formal or robotic language  
- Ignoring referencing and citation rules  

Avoiding these mistakes is the first step toward safer academic writing.

---

## How to Rewrite AI Content in Your Own Words

One of the most effective ways to **reduce AI detection** is rewriting.

### Simple rewriting method:
- Read the AI-generated text  
- Close the tool  
- Rewrite the idea in your own understanding  
- Change sentence structure completely  
- Add your own examples or explanation  

### Example:
Instead of copying:
> “AI improves efficiency in academic writing.”

Rewrite:
> “Students often use AI tools to save time and organize their ideas more efficiently when writing assignments.”

This makes the content more natural and personal.

---

## Techniques to Make Writing More Human and Natural

To make academic writing sound human:

- Use a mix of short and long sentences  
- Add personal interpretation or explanation  
- Avoid overly perfect grammar patterns  
- Include transitions like *however, for example, in my opinion*  
- Use subject-specific vocabulary naturally  

### Discussion: Why Human Writing Matters

Human writing is not just about avoiding detection—it improves clarity, readability, and academic quality. Professors value critical thinking, not just structured sentences.

---

## Tools That Help You Edit and Improve AI Content

Some tools can help you improve writing quality (not bypass rules):

- Grammarly (grammar and clarity improvement)  
- QuillBot (paraphrasing and rewriting assistance)  
- Hemingway Editor (readability improvement)  
- Wordtune (sentence restructuring suggestions)  

These tools help refine your writing rather than replace your thinking.

---

## Ethical Use of AI in Academic Work

AI should be used as a **learning assistant**, not a shortcut.

### Ethical guidelines:
- Use AI to understand topics, not to submit raw text  
- Always rewrite and personalize content  
- Properly cite sources when required  
- Follow your university’s academic integrity policy  

Using AI responsibly helps you learn faster without violating academic rules.

---

## FAQs

**Q: How can I reduce AI detection in my assignment?**  
A: Rewrite AI-generated content in your own words, add personal explanations, vary sentence structure, and include original ideas instead of copying directly.

**Q: Can AI-generated content be made undetectable?**  
A: No method guarantees full undetectability. However, properly rewriting and humanizing content significantly reduces AI detection signals.

**Q: Is it safe to use AI for academic writing?**  
A: Yes, if used ethically. AI should support brainstorming, learning, and editing—not replace your own academic work.

---

## Conclusion

Reducing AI detection in academic writing is not about bypassing systems, but about improving the quality and originality of your work. By rewriting content, adding personal insight, and using AI responsibly, students can create high-quality academic assignments that are both natural and authentic.

Remember: the goal is not just to avoid detection, but to **become a better academic writer** through proper understanding and practice.
`,date:"2025-10-04",readTime:"9 min read",category:"Study Skills",tags:["reduce AI detection","humanize AI text","AI detection tools","AI writing tips for students","academic writing","assignment help","study skills","student success"],image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",author:"Academia Helper"},{id:"37",slug:"how-to-reduce-plagiarism-in-assignments",title:"How to Reduce Plagiarism in Assignments: A Complete Guide for Students",excerpt:"Learn how to reduce plagiarism in assignments using proper paraphrasing, citation techniques, and plagiarism-checking tools to ensure originality in academic writing.",content:`
Plagiarism is one of the most serious issues in academic writing. It can affect your grades, academic reputation, and even your future career. Understanding how to **reduce plagiarism in assignments** is essential for every student who wants to succeed in university-level writing.

This guide explains what plagiarism is, why it happens, and how you can avoid it using simple and effective strategies.

---

## What Is Plagiarism and Why It Matters

Plagiarism means using someone else’s ideas, words, or work without giving proper credit. It can include:

- Copying text directly from websites or books  
- Paraphrasing without citation  
- Submitting someone else’s work as your own  
- Using AI-generated content without editing or referencing  

### Why it matters:
Plagiarism is considered academic misconduct. It can lead to:
- Low or zero marks  
- Assignment rejection  
- Course failure  
- Serious academic penalties  

Universities value originality, critical thinking, and proper referencing.

---

## Common Causes of Plagiarism Among Students

Many students do not intend to plagiarize, but it happens due to:

- Lack of understanding about referencing rules  
- Poor time management leading to last-minute copying  
- Difficulty in paraphrasing academic content  
- Over-reliance on online sources  
- Not knowing how to cite properly  

Understanding these causes helps you avoid them in future assignments.

---

## How to Paraphrase Properly Without Copying

Paraphrasing is one of the most important skills to **avoid plagiarism in assignments**.

### Correct paraphrasing method:
1. Read the original text carefully  
2. Close it and try to understand the meaning  
3. Rewrite it in your own words  
4. Change sentence structure and vocabulary  
5. Keep the original meaning intact  
6. Add citation after paraphrasing  

### Example:

Original:
> “Time management improves student performance in academic settings.”

Paraphrased:
> “Students who manage their time effectively often achieve better results in their academic work.”

---

## Importance of Citation and Referencing

Even if you paraphrase correctly, you must always give credit to the original source.

### Why citation is important:
- Shows academic honesty  
- Strengthens your arguments  
- Helps readers verify information  
- Prevents unintentional plagiarism  

Common citation styles include:
- APA 7  
- Harvard  
- MLA  

Always follow your university’s required format.

---

## Tools to Check Plagiarism Before Submission

Before submitting your assignment, use plagiarism detection tools:

- Turnitin (most widely used in universities)  
- Grammarly Plagiarism Checker  
- Quetext  
- SmallSEOTools Plagiarism Checker  
- Copyscape (for web content)  

### Tip:
Always check your work after final editing, not before rewriting.

---

## Best Practices for Original Academic Writing

To ensure your work is 100% original:

- Take notes in your own words while researching  
- Avoid copy-pasting from sources  
- Use multiple references instead of one  
- Add your own analysis and opinions  
- Plan your assignment before writing  
- Proofread and edit carefully  

### Discussion: Why originality matters

Original writing shows your understanding of the topic. Universities value students who can analyze, explain, and apply knowledge—not just repeat information.

---

## FAQs

**Q: How can I reduce plagiarism in my assignment?**  
A: You can reduce plagiarism by properly paraphrasing, using citations for all sources, writing in your own words, and checking your work using plagiarism detection tools before submission.

**Q: What percentage of plagiarism is acceptable?**  
A: Most universities allow 10%–20% similarity, but this varies depending on institution guidelines. Always aim for as low as possible.

**Q: How do I paraphrase without copying?**  
A: Read the original content, understand it fully, then rewrite it using different sentence structures and vocabulary while keeping the meaning the same. Always include a citation.

---

## Conclusion

Reducing plagiarism is essential for academic success. By learning proper paraphrasing techniques, using correct citations, and relying on plagiarism-checking tools, you can ensure your assignments are original and credible.

Remember, academic writing is not about copying information—it’s about understanding, analyzing, and expressing ideas in your own words.
`,date:"2025-10-05",readTime:"9 min read",category:"Study Skills",tags:["reduce plagiarism","avoid plagiarism in assignments","plagiarism tips","academic writing","citation guide","paraphrasing skills","student success","assignment help"],image:"https://images.unsplash.com/photo-1455390582262-044cdead277a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",author:"Academia Helper"},{id:"38",slug:"professional-assignment-writing-service-deadlines",title:"Struggling with Deadlines? Try a Professional Assignment Writing Service Today",excerpt:"Discover how professional assignment writing services help students meet deadlines, improve grades, and reduce academic stress with expert support.",content:`
Managing academic deadlines has become one of the biggest challenges for modern students. With multiple assignments, exams, part-time jobs, and personal responsibilities, it is easy to feel overwhelmed. If you are constantly struggling to submit your work on time, a **professional assignment writing service** can provide the academic support you need.

---

## Why Students Struggle with Assignment Deadlines

Meeting deadlines is not always about effort—it is often about time and workload pressure. Students commonly face challenges such as:

- Multiple assignments due at the same time  
- Poor time management and planning skills  
- Difficulty understanding complex topics  
- Procrastination and distractions  
- Part-time jobs or family responsibilities  

When these issues combine, even hardworking students can fall behind on submissions.

---

## What Is a Professional Assignment Writing Service?

A **professional assignment writing service** is an academic support system where students receive help from expert writers. These professionals assist in writing essays, reports, case studies, research papers, and more.

Instead of rushing your assignment at the last minute, you can get structured, well-researched, and properly formatted academic work delivered on time.

These services are designed to support learning, reduce pressure, and improve academic performance when used responsibly.

---

## Key Benefits of Using Assignment Writing Services

### 1. Meet Tight Deadlines
Professional writers are experienced in handling urgent deadlines and can complete assignments within strict time limits.

### 2. High-Quality Academic Work
Assignments are written with proper structure, research, and academic formatting to meet university standards.

### 3. Reduced Academic Stress
Getting expert help allows students to focus on exams, revision, and personal responsibilities without overload.

### 4. Better Academic Performance
Well-written assignments often lead to improved grades and better subject understanding.

### 5. 24/7 Academic Support
Most services provide round-the-clock assistance, making help available whenever needed.

---

## Things to Consider Before Choosing a Service

Not all assignment writing services are trustworthy. Before selecting one, students should check:

- Verified reviews and student feedback  
- Plagiarism-free guarantees  
- Qualified academic writers  
- Transparent pricing system  
- Data privacy and confidentiality policies  

Choosing a reliable service is important for ensuring quality and academic safety.

---

## AI Tools vs Professional Writers

Many students rely on AI tools for academic writing. While AI can help with ideas and structure, it has limitations:

- Lacks deep subject understanding  
- Limited critical thinking ability  
- May produce generic or repetitive content  
- Often misses academic tone requirements  

Professional writers, on the other hand, provide:

- Human analysis and interpretation  
- Subject expertise  
- Proper academic tone and structure  
- Original, well-researched content  

A combination of learning, AI support, and expert guidance is often the most effective approach.

---

## When Should You Use an Assignment Writing Service?

You should consider using academic writing support if:

- You have multiple deadlines at the same time  
- You are struggling to understand the topic  
- You are running out of time  
- You want to improve your academic performance  

It is not about avoiding learning—it is about getting support when needed to manage academic pressure effectively.

---

## Frequently Asked Questions (FAQs)

**Q: Is it safe to use a professional assignment writing service?**  
A: Yes, it is safe if you choose a reputable service that guarantees confidentiality, originality, and secure data handling.

**Q: Can assignment writing services meet urgent deadlines?**  
A: Yes, many professional services offer urgent delivery options depending on assignment complexity.

**Q: Will my assignment be plagiarism-free?**  
A: Reliable services provide 100% original content and often include plagiarism reports for verification.

**Q: Do assignment writing services help improve grades?**  
A: Yes, well-structured and high-quality assignments can significantly improve academic performance.

**Q: Are assignment writing services available for all subjects?**  
A: Most services cover a wide range of subjects including business, IT, engineering, healthcare, and humanities.

**Q: How do I choose the best assignment writing service?**  
A: Look for experienced writers, positive reviews, transparent pricing, and guarantees like originality and on-time delivery.

---

## Conclusion

Struggling with deadlines does not mean you are incapable—it simply means you need better support and planning strategies. A **professional assignment writing service** can help you manage your workload, reduce stress, and improve academic outcomes.

When used responsibly, these services can become a powerful academic support tool that helps you stay on track and achieve your educational goals.
`,date:"2025-10-06",readTime:"8 min read",category:"Assignment Help",tags:["professional assignment writing service","assignment writing help","assignment help UK","academic writer","expert writing help","assignment done for you","writing services for students","online assignment help","university assignment support"],image:"https://images.unsplash.com/photo-1455390582262-044cdead277a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",author:"Academia Helper"},{id:"39",slug:"why-resume-professionals-boost-job-success",title:"Why Resume Professionals Can Boost Your Job Success Faster",excerpt:"Learn how resume professionals and professional resume writers improve your job opportunities by creating ATS-friendly, high-impact resumes that get noticed by employers.",content:`
In today's competitive job market, having a strong resume is no longer optional—it is essential. Many candidates struggle to get interview calls not because they lack skills, but because their resume fails to communicate their value effectively. This is where **resume professionals** play a crucial role in improving your job success faster.

---

## What Do Resume Professionals Actually Do?

**Resume professionals** or **professional resume writers** are experts who specialize in creating high-quality, job-ready resumes tailored to specific industries and roles.

Their work includes:

- Analyzing your skills, experience, and career goals  
- Structuring your resume according to industry standards  
- Writing clear, impactful professional summaries  
- Highlighting achievements instead of just responsibilities  
- Optimizing resumes for Applicant Tracking Systems (ATS)  

They do not just "write" resumes—they strategically design documents that help you get noticed by recruiters.

---

## Why DIY Resumes Often Fail

Many job seekers try to create resumes on their own, but these often fail to generate interview calls. Common reasons include:

- Lack of professional formatting and structure  
- Overuse of generic statements  
- Poor keyword optimization for ATS systems  
- Focus on duties instead of measurable achievements  
- Unclear career positioning  

Even highly skilled candidates can be rejected if their resume does not pass the first screening stage.

---

## How Resume Experts Improve Your Chances

Hiring **professional resume writers** significantly improves your chances of landing interviews because they understand what employers look for.

They help by:

- Using industry-specific keywords that match job descriptions  
- Highlighting achievements with measurable results  
- Creating clean, modern, and readable layouts  
- Tailoring resumes for each job application  
- Ensuring compatibility with ATS screening software  

A professionally written resume can instantly make you appear more qualified and credible.

---

## Key Features of a Professionally Written Resume

A high-quality resume created by experts usually includes:

- A strong professional summary that grabs attention  
- Well-organized sections (skills, experience, education)  
- Action-oriented bullet points with results  
- ATS-friendly formatting and keyword optimization  
- Consistent design and professional layout  
- Clear career progression highlighting growth  

These features help recruiters quickly understand your value within seconds.

---

## When You Should Hire a Resume Professional

You should consider hiring a **resume writing service** if:

- You are not getting interview calls despite applying  
- You are switching careers or industries  
- You are a fresh graduate with limited experience  
- You are applying for competitive job roles  
- You want to improve your professional image quickly  

In these situations, expert help can significantly speed up your job search success.

---

## Frequently Asked Questions (FAQs)

**Q: Are resume professionals worth it?**  
A: Yes, resume professionals are worth it because they improve your chances of getting interviews by creating structured, ATS-optimized, and achievement-focused resumes.

**Q: How much do professional resume writers charge?**  
A: The cost varies depending on experience and service level. It can range from budget-friendly packages to premium executive-level resume writing services.

**Q: Can a professional resume guarantee a job?**  
A: No resume can guarantee a job, but a professionally written resume significantly increases your chances of getting shortlisted and invited for interviews.

---

## Conclusion

In a competitive job market, your resume is your first impression. **Resume professionals** help you turn a simple document into a powerful career tool that highlights your strengths and attracts employers.

Investing in a **professional resume writing service** is not just about improving your CV—it is about accelerating your entire job search journey and increasing your chances of success.
`,date:"2025-10-07",readTime:"8 min read",category:"Career Success",tags:["resume professionals","professional resume writers","resume writing service","ATS resume optimization","job application tips","career success resume","CV writing help","professional CV writing","resume help online"],image:"https://images.unsplash.com/photo-1455390582262-044cdead277a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",author:"Academia Helper"},{id:"40",slug:"resume-professionals-vs-diy-resume-interviews",title:"Resume Professionals vs DIY Resume: Which One Gets More Interviews?",excerpt:"Compare DIY resumes and professional resume writing services to understand which option gets more interviews and improves your chances of landing a job.",content:`
When applying for jobs, your resume is the first impression you make on recruiters. Many candidates struggle with one major question: should they write their resume themselves or hire **resume professionals**? Understanding the difference between a DIY resume and a professionally written one can directly impact your chances of getting interviews.

---

## Differences Between DIY and Professional Resumes

A **DIY resume** is created by the candidate without expert guidance, while a **professional resume** is written or optimized by **resume professionals** who understand hiring standards and industry expectations.

### DIY Resume:
- Written based on personal understanding  
- Often lacks structure and clarity  
- May not follow ATS guidelines  
- Focuses on job duties instead of achievements  

### Professional Resume:
- Designed by experienced resume writers  
- Follows modern hiring and industry standards  
- Optimized for ATS (Applicant Tracking Systems)  
- Highlights achievements and measurable impact  

The difference often determines whether your application gets noticed or ignored.

---

## Common Mistakes in Self-Written Resumes

Many job seekers unknowingly reduce their chances of getting interviews due to avoidable errors:

- Using generic job descriptions instead of achievements  
- Poor formatting and inconsistent structure  
- Missing important keywords from job descriptions  
- Overcrowded or difficult-to-read layouts  
- Lack of professional summary or branding  

These mistakes make it harder for recruiters to quickly understand your value.

---

## How Professionals Optimize for ATS (Applicant Tracking Systems)

Most companies today use **ATS software** to filter resumes before a human even sees them. If your resume is not optimized, it may get rejected automatically.

**Resume professionals** improve ATS performance by:

- Including relevant keywords from job descriptions  
- Using clean, ATS-friendly formatting  
- Avoiding complex designs that confuse software  
- Structuring content with proper headings  
- Ensuring correct file formats and readability  

This optimization significantly increases your chances of reaching the interview stage.

---

## Cost vs Value Comparison

Many candidates hesitate to hire a **resume writing service** due to cost. However, it is important to compare cost with long-term value.

### DIY Resume:
- Free to create  
- May result in fewer interview calls  
- Requires multiple revisions and trial-and-error  

### Professional Resume:
- Requires upfront investment  
- Higher chance of interview selection  
- Saves time and improves job search efficiency  

In most cases, a professionally written resume pays off quickly by reducing job search time.

---

## Real Outcomes: Which Works Better?

Studies and real-world hiring trends show that professionally written resumes perform better in competitive job markets.

### DIY Resume Results:
- Lower interview conversion rate  
- High rejection due to formatting or keyword issues  
- Inconsistent presentation across applications  

### Professional Resume Results:
- Higher interview callback rate  
- Stronger first impression  
- Better alignment with job requirements  

In competitive industries, even small improvements in resume quality can make a big difference.

---

## Frequently Asked Questions (FAQs)

**Q: Is it better to hire a resume writer?**  
A: Yes, hiring a resume writer is often better because **resume professionals** know how to structure, optimize, and tailor your resume to increase interview chances.

**Q: What is ATS and why does it matter?**  
A: ATS (Applicant Tracking System) is software used by companies to filter resumes. If your resume is not ATS-friendly, it may never reach a human recruiter.

**Q: Do recruiters prefer professionally written resumes?**  
A: Recruiters prefer clear, well-structured resumes that highlight achievements. Professionally written resumes often meet these standards better than DIY versions.

---

## Conclusion

The difference between a DIY resume and a professionally written one is often the difference between rejection and opportunity. While DIY resumes may save money, **resume professionals** help you create a powerful first impression that increases your chances of landing interviews faster.

If your goal is to stand out in a competitive job market, investing in **expert resume writing help** can be one of the smartest career decisions you make.
`,date:"2025-10-08",readTime:"9 min read",category:"Career Success",tags:["resume professionals vs DIY resume","resume writing help","expert resume","professional CV writing","ATS resume optimization","job interview tips","resume writing service comparison","career success tips"],image:"https://images.unsplash.com/photo-1455390582262-044cdead277a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",author:"Academia Helper"},{id:"41",slug:"best-resume-writing-services-and-professional-writing-help",title:"Best Resume Writing Services and Professional Writing Help: From Resume Writers to Essay and Content Experts",excerpt:"Explore the best resume writing services, professional resume writers, essay help, ghostwriting, AI resume tools, and content writing services for academic and career success.",content:`
In today's competitive academic and job market, strong writing is essential. Many people now rely on **resume writing services** and professional writing support to improve career and academic success.

---

## What Are Resume Writing Services?

Resume writing services help job seekers create ATS-optimized resumes that improve interview chances. Many resumes get rejected by ATS systems before a human ever reviews them. Candidates often struggle with structure, clarity, and keyword optimization—areas where professional services provide the most value.

---

## How Resume Writers Help

Professional resume writers support job seekers by:

- Writing impactful professional summaries  
- Highlighting achievements over generic duties  
- Optimizing content for ATS compatibility  
- Tailoring resumes to specific roles and industries  

---

## What to Look For in a Resume Service

When choosing a resume writing service, consider:

- Experienced, industry-specialist writers  
- ATS-friendly formatting and keyword strategies  
- Revision policies and turnaround time  
- Fast, reliable delivery with quality guarantees  

---

## Executive Resume Services

Executive-level resume services focus on:

- Showcasing leadership experience and vision  
- Building a strong personal brand  
- Communicating strategic achievements and impact  

These are ideal for senior professionals applying for director, VP, or C-suite roles.

---

## AI Tools vs Human Writers

### AI Resume Tools:
- Fast and affordable  
- Good for basic drafts and structure  

### Human Resume Writers:
- Personalized and strategic  
- Better understanding of industry tone  
- Consistently stronger real-world results  

For competitive roles, human writers remain the preferred choice.

---

## Ghostwriting and Content Writing Services

Beyond resumes, professional writing services cover a wide range of content needs:

- Blog posts and articles  
- Books and eBooks  
- Website and landing page content  
- Marketing copy and brand messaging  

---

## Essay and Academic Writing Help

Academic writing services assist students with:

- Essays and reports  
- Research papers and dissertations  
- Assignment writing and editing  

---

## Personal Statement Writing

Personal statements are critical for:

- University and college applications  
- Scholarship and grant submissions  

A professionally written personal statement can significantly improve your admission chances.

---

## Professional Email Writing

Clear, well-structured professional emails are important for:

- Job applications and follow-ups  
- Academic correspondence  
- Business communication  

---

## Frequently Asked Questions (FAQs)

**Q: What is the best resume writing service?**  
A: The best services offer experienced writers, ATS-friendly formatting, industry customization, and strong revision policies.

**Q: Should I use AI or a human writer for my resume?**  
A: Human writers perform better for real job applications as they provide personalized, strategic content that AI tools often miss.

**Q: What do executive resume services focus on?**  
A: They focus on leadership, personal branding, and communicating strategic impact for senior-level roles.

---

## Conclusion

Professional writing services—whether for resumes, academic assignments, or content—help individuals improve their career and academic outcomes when used responsibly. Choosing the right service based on your needs, budget, and goals is the key to getting the most value from expert writing support.
`,date:"2025-10-09",readTime:"7 min read",category:"Career Success",tags:["resume writing services","ghostwriting","AI resume writer","content writing services","personal statement writing service","professional resume writers","essay help","academic writing","executive resume"],image:"https://images.unsplash.com/photo-1455390582262-044cdead277a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",author:"Academia Helper"},{id:"seo-1",slug:"best-study-lamp-for-students-usa",title:"Best Study Lamp for Students in the USA: Top LED Desk Lamps for Focus and Comfort",excerpt:"Explore the best study lamps for students in the USA that improve focus, reduce eye strain, and enhance productivity with adjustable LED lighting options.",content:`
In today's study environment, lighting plays a crucial role in focus, comfort, and productivity. A good study lamp reduces eye strain and creates an ideal atmosphere for long reading or study sessions. In the USA, LED desk lamps with adjustable brightness and color temperature are the most preferred choice for students.

---

## What Makes a Good Study Lamp?

A high-quality study lamp should provide:

- Adjustable brightness levels  
- Eye-friendly LED lighting  
- Natural or cool white light options  
- Flexible design for positioning  
- Energy-efficient performance  

These features help reduce fatigue and improve concentration during study hours.

---

## Best Study Lamps for Students in the USA

### 🥇 BenQ e-Reading LED Desk Lamp
One of the most premium study lamps available in the USA, designed for reading and focused work.

- Wide and even light coverage  
- Auto-dimming brightness control  
- Anti-glare eye-care technology  
- Adjustable color temperature  

---

### 🥈 TaoTronics LED Desk Lamp (TT-DL16 / TT-DL13)
A popular and budget-friendly option widely used by students.

- Multiple brightness levels  
- 5 color temperature modes  
- USB charging port  
- Foldable and compact design  

---

### 🥉 Phive LED Architect Desk Lamp
A powerful lamp suitable for long study hours and heavy desk work.

- Large lighting surface  
- Adjustable arm and head  
- Flicker-free illumination  
- Strong build quality  

---

### Globe Electric LED Desk Lamp
A modern and stylish option for everyday student use.

- Sleek and compact design  
- Soft eye-friendly light  
- Adjustable neck  
- Ideal for small desks  

---

### LEPOWER Metal Desk Lamp
A simple and affordable lamp with durable design.

- Industrial metal build  
- Wide light distribution  
- Works with LED bulbs  
- Budget-friendly option  

---

## Tips for Choosing the Best Study Lamp

- Choose LED lighting for eye protection  
- Prefer adjustable brightness settings  
- Use neutral white light (4000K–5000K)  
- Pick flexible and adjustable designs  
- Avoid harsh or flickering lights  

---

## Frequently Asked Questions (FAQs)

**Q: What type of lamp is best for studying?**  
A: LED desk lamps with adjustable brightness and color temperature are best because they reduce eye strain and improve focus.

**Q: What is the best light for studying?**  
A: Neutral white light (4000K–5000K) is ideal as it keeps the mind alert and reduces fatigue.

**Q: How much is a 3D light in USA?**  
A: A 3D illusion lamp typically costs between $15 and $40 depending on design and quality.

**Q: What color lamp is best for studying?**  
A: Cool white or natural white light is best for studying because it improves concentration and reduces sleepiness.

---

## Conclusion

The best study lamps for students in the USA combine eye comfort, adjustable lighting, and modern design. Options like BenQ, TaoTronics, and Phive stand out for performance and usability.

Choosing the right lamp can significantly improve focus, reduce eye strain, and enhance overall study efficiency.
`,date:"2025-10-10",readTime:"6 min read",category:"Study Tools",tags:["best study lamp USA","LED desk lamp for students","study light for reading","eye care lamp","desk lamp for studying","reading lamp USA","student study tools"],image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",author:"Academia Helper"}],eS=()=>{const n=bf(),[i,s]=P.useState(""),[o,c]=P.useState("All");P.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[]);const h=["All","Business Writing","Finance","Tourism","Academic Tips"],d=Jb.filter(f=>{const p=f.title.toLowerCase().includes(i.toLowerCase())||f.excerpt.toLowerCase().includes(i.toLowerCase()),y=o==="All"||f.category===o;return p&&y});return m.jsx("div",{className:"min-h-screen bg-gradient-to-br from-stone-50 via-slate-50 to-stone-100 pt-20",children:m.jsxs("div",{className:"container mx-auto px-6 py-12",children:[m.jsxs(B.div,{className:"text-center mb-12",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[m.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-stone-900 mb-4",children:"Academia Helper Blog"}),m.jsx("p",{className:"text-xl text-stone-600 max-w-3xl mx-auto",children:"Expert insights, writing tips, and academic guidance to help you excel in your studies"})]}),m.jsxs(B.div,{className:"mb-12 space-y-6",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[m.jsxs("div",{className:"relative max-w-md mx-auto",children:[m.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:m.jsx(Nb,{className:"h-5 w-5 text-stone-400"})}),m.jsx("input",{type:"text",placeholder:"Search articles...",value:i,onChange:f=>s(f.target.value),className:"block w-full pl-10 pr-3 py-3 border border-stone-200 rounded-2xl leading-5 bg-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent"})]}),m.jsx("div",{className:"flex flex-wrap justify-center gap-3",children:h.map(f=>m.jsx("button",{onClick:()=>c(f),className:`px-4 py-2 rounded-full font-medium transition-all duration-200 ${o===f?"bg-stone-900 text-white shadow-lg":"bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"}`,children:f},f))})]}),m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:d.map((f,p)=>m.jsxs(B.article,{className:"group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:p*.1},whileHover:{y:-8,scale:1.02},onClick:()=>n(`/blog/${f.slug}`),children:[m.jsxs("div",{className:"relative h-48 overflow-hidden",children:[m.jsx("img",{src:f.image,alt:f.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"}),m.jsx("div",{className:"absolute top-4 left-4",children:m.jsx("span",{className:"px-3 py-1 bg-white/90 backdrop-blur-sm text-stone-800 rounded-full text-xs font-medium",children:f.category})})]}),m.jsxs("div",{className:"p-6",children:[m.jsxs("div",{className:"flex items-center gap-4 mb-3 text-sm text-stone-500",children:[m.jsxs("div",{className:"flex items-center",children:[m.jsx(Jk,{className:"w-4 h-4 mr-1"}),new Date(f.date).toLocaleDateString()]}),m.jsxs("div",{className:"flex items-center",children:[m.jsx(oa,{className:"w-4 h-4 mr-1"}),f.readTime]})]}),m.jsx("h3",{className:"text-xl font-bold text-stone-900 mb-3 group-hover:text-stone-700 transition-colors duration-200",children:f.title}),m.jsx("p",{className:"text-stone-600 mb-4 line-clamp-3",children:f.excerpt}),m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:"text-sm text-stone-500",children:f.author}),m.jsxs("div",{className:"flex items-center text-stone-400 group-hover:text-stone-600 transition-colors duration-200",children:[m.jsx("span",{className:"text-sm mr-2",children:"Read more"}),m.jsx(vi,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"})]})]})]})]},f.id))}),d.length===0&&m.jsxs(B.div,{className:"text-center py-12",initial:{opacity:0},animate:{opacity:1},transition:{duration:.6},children:[m.jsx("h3",{className:"text-2xl font-semibold text-stone-900 mb-2",children:"No articles found"}),m.jsx("p",{className:"text-stone-600",children:"Try adjusting your search or filter criteria"})]})]})})},tS=()=>m.jsx("main",{className:"min-h-screen bg-white text-black overflow-x-hidden relative",children:m.jsxs("div",{className:"relative z-10",children:[m.jsx("section",{id:"home",children:m.jsx($b,{})}),m.jsx("section",{id:"services",children:m.jsx(Gb,{})}),m.jsx("section",{id:"testimonials",children:m.jsx(Yb,{})}),m.jsx(Kb,{}),m.jsx(Xb,{})]})});function nS(){return m.jsx(lv,{children:m.jsxs("div",{className:"min-h-screen bg-white text-black overflow-x-hidden relative",children:[m.jsx(Ub,{}),m.jsx(Qb,{}),m.jsxs(sv,{children:[m.jsx(Gs,{path:"/",element:m.jsx(tS,{})}),m.jsx(Gs,{path:"/blog",element:m.jsx(eS,{})}),m.jsx(Gs,{path:"/blog/:slug",element:m.jsx(BlogPostPage,{})})]}),m.jsx(Zb,{}),m.jsx(qb,{})]})})}m0.createRoot(document.getElementById("root")).render(m.jsx(P.StrictMode,{children:m.jsx(nS,{})}));
