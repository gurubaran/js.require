/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 1.0.4 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
/*
 RequireJS 1.0.4 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(){function J(b){return"[object Function]"===M.call(b)}function E(b){return"[object Array]"===M.call(b)}function Z(b,c,k){for(var i in c)if(!(i in K)&&(!(i in b)||k))b[i]=c[i];return d}function N(b,c,d){b=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);if(d)b.originalError=d;return b}function $(b,c,d){var i,j,q;for(i=0;q=c[i];i++){q="string"===typeof q?{name:q}:q;j=q.location;if(d&&(!j||0!==j.indexOf("/")&&-1===j.indexOf(":")))j=d+"/"+(j||q.name);b[q.name]={name:q.name,location:j||
q.name,main:(q.main||"main").replace(ea,"").replace(aa,"")}}}function W(b,c){b.holdReady?b.holdReady(c):c?b.readyWait+=1:b.ready(!0)}function fa(b){function c(a,h){var e,r;if(a&&"."===a.charAt(0))if(h){p.pkgs[h]?h=[h]:(h=h.split("/"),h=h.slice(0,h.length-1));e=a=h.concat(a.split("/"));var b;for(r=0;b=e[r];r++)if("."===b)e.splice(r,1),r-=1;else if(".."===b)if(1===r&&(".."===e[2]||".."===e[0]))break;else 0<r&&(e.splice(r-1,2),r-=2);r=p.pkgs[e=a[0]];a=a.join("/");r&&a===e+"/"+r.main&&(a=e)}else 0===
a.indexOf("./")&&(a=a.substring(2));return a}function k(a,h){var e=a?a.indexOf("!"):-1,b=null,d=h?h.name:null,l=a,g,k;-1!==e&&(b=a.substring(0,e),a=a.substring(e+1,a.length));b&&(b=c(b,d));a&&(b?g=(e=m[b])&&e.normalize?e.normalize(a,function(a){return c(a,d)}):c(a,d):(g=c(a,d),k=E[g],k||(k=f.nameToUrl(a,null,h),E[g]=k)));return{prefix:b,name:g,parentMap:h,url:k,originalName:l,fullName:b?b+"!"+(g||""):g}}function i(){var a=!0,h=p.priorityWait,e,b;if(h){for(b=0;e=h[b];b++)if(!t[e]){a=!1;break}a&&delete p.priorityWait}return a}
function j(a,h,e){return function(){var b=ga.call(arguments,0),c;if(e&&J(c=b[b.length-1]))c.__requireJsBuild=!0;b.push(h);return a.apply(null,b)}}function q(a,h){var e=j(f.require,a,h);Z(e,{nameToUrl:j(f.nameToUrl,a),toUrl:j(f.toUrl,a),defined:j(f.requireDefined,a),specified:j(f.requireSpecified,a),isBrowser:d.isBrowser});return e}function o(a){var h,e,b,c=a.callback,l=a.map,g=l.fullName,ba=a.deps;b=a.listeners;if(c&&J(c)){if(p.catchError.define)try{e=d.execCb(g,a.callback,ba,m[g])}catch(i){h=i}else e=
d.execCb(g,a.callback,ba,m[g]);if(g)(c=a.cjsModule)&&void 0!==c.exports&&c.exports!==m[g]?e=m[g]=a.cjsModule.exports:void 0===e&&a.usingExports?e=m[g]:(m[g]=e,F[g]&&(S[g]=!0))}else g&&(e=m[g]=c,F[g]&&(S[g]=!0));if(C[a.id])delete C[a.id],a.isDone=!0,f.waitCount-=1,0===f.waitCount&&(I=[]);delete T[g];if(d.onResourceLoad&&!a.placeholder)d.onResourceLoad(f,l,a.depArray);if(h)return e=(g?k(g).url:"")||h.fileName||h.sourceURL,b=h.moduleTree,h=N("defineerror",'Error evaluating module "'+g+'" at location "'+
e+'":\n'+h+"\nfileName:"+e+"\nlineNumber: "+(h.lineNumber||h.line),h),h.moduleName=g,h.moduleTree=b,d.onError(h);for(h=0;c=b[h];h++)c(e)}function s(a,h){return function(e){a.depDone[h]||(a.depDone[h]=!0,a.deps[h]=e,a.depCount-=1,a.depCount||o(a))}}function v(a,h){var e=h.map,b=e.fullName,c=e.name,l=L[a]||(L[a]=m[a]),g;if(!h.loading)h.loading=!0,g=function(a){h.callback=function(){return a};o(h);t[h.id]=!0;x()},g.fromText=function(a,h){var b=O;t[a]=!1;f.scriptCount+=1;f.fake[a]=!0;b&&(O=!1);d.exec(h);
b&&(O=!0);f.completeLoad(a)},b in m?g(m[b]):l.load(c,q(e.parentMap,!0),g,p)}function w(a){C[a.id]||(C[a.id]=a,I.push(a),f.waitCount+=1)}function D(a){this.listeners.push(a)}function u(a,h){var b=a.fullName,c=a.prefix,d=c?L[c]||(L[c]=m[c]):null,l,g;b&&(l=T[b]);if(!l&&(g=!0,l={id:(c&&!d?M++ +"__p@:":"")+(b||"__r@"+M++),map:a,depCount:0,depDone:[],depCallbacks:[],deps:[],listeners:[],add:D},y[l.id]=!0,b&&(!c||L[c])))T[b]=l;c&&!d?(b=k(c),c in m&&!m[c]&&(delete m[c],delete P[b.url]),c=u(b,!0),c.add(function(){var b=
k(a.originalName,a.parentMap),b=u(b,!0);l.placeholder=!0;b.add(function(a){l.callback=function(){return a};o(l)})})):g&&h&&(t[l.id]=!1,f.paused.push(l),w(l));return l}function B(a,b,e,c){var a=k(a,c),d=a.name,l=a.fullName,g=u(a),i=g.id,j=g.deps,n;if(l){if(l in m||!0===t[i]||"jquery"===l&&p.jQuery&&p.jQuery!==e().fn.jquery)return;y[i]=!0;t[i]=!0;"jquery"===l&&e&&X(e())}g.depArray=b;g.callback=e;for(e=0;e<b.length;e++)if(i=b[e])i=k(i,d?a:c),n=i.fullName,b[e]=n,"require"===n?j[e]=q(a):"exports"===n?
(j[e]=m[l]={},g.usingExports=!0):"module"===n?g.cjsModule=j[e]={id:d,uri:d?f.nameToUrl(d,null,c):void 0,exports:m[l]}:n in m&&!(n in C)&&(!(l in F)||l in F&&S[n])?j[e]=m[n]:(l in F&&(F[n]=!0,delete m[n],P[i.url]=!1),g.depCount+=1,g.depCallbacks[e]=s(g,e),u(i,!0).add(g.depCallbacks[e]));g.depCount?w(g):o(g)}function n(a){B.apply(null,a)}function z(a,b){if(!a.isDone){var e=a.map.fullName,c=a.depArray,d,f,g,i;if(e){if(b[e])return m[e];b[e]=!0}if(c)for(d=0;d<c.length;d++)if(f=c[d])if((g=k(f).prefix)&&
(i=C[g])&&z(i,b),(g=C[f])&&!g.isDone&&t[f])f=z(g,b),a.depCallbacks[d](f);return e?m[e]:void 0}}function A(){var a=1E3*p.waitSeconds,b=a&&f.startTime+a<(new Date).getTime(),a="",c=!1,k=!1,j;if(!(0<f.pausedCount)){if(p.priorityWait)if(i())x();else return;for(j in t)if(!(j in K)&&(c=!0,!t[j]))if(b)a+=j+" ";else{k=!0;break}if(c||f.waitCount){if(b&&a)return j=N("timeout","Load timeout for modules: "+a),j.requireType="timeout",j.requireModules=a,d.onError(j);if(k||f.scriptCount){if((G||ca)&&!Y)Y=setTimeout(function(){Y=
0;A()},50)}else{if(f.waitCount){for(H=0;a=I[H];H++)z(a,{});f.paused.length&&x();5>U&&(U+=1,A())}U=0;d.checkReadyState()}}}}var f,x,p={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},catchError:{}},Q=[],y={require:!0,exports:!0,module:!0},E={},m={},t={},C={},I=[],P={},M=0,T={},L={},F={},S={},R=0;X=function(a){if(!f.jQuery&&(a=a||("undefined"!==typeof jQuery?jQuery:null))&&!(p.jQuery&&a.fn.jquery!==p.jQuery)&&("holdReady"in a||"readyWait"in a))if(f.jQuery=a,n(["jquery",[],function(){return jQuery}]),f.scriptCount)W(a,
!0),f.jQueryIncremented=!0};x=function(){var a,b,c,k,j,l;R+=1;if(0>=f.scriptCount)f.scriptCount=0;for(;Q.length;){a=Q.shift();if(null===a[0])return d.onError(N("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));n(a)}if(!p.priorityWait||i())for(;f.paused.length;){j=f.paused;f.pausedCount+=j.length;f.paused=[];for(k=0;a=j[k];k++)b=a.map,c=b.url,l=b.fullName,b.prefix?v(b.prefix,a):!P[c]&&!t[l]&&(d.load(f,l,c),0!==c.indexOf("empty:")&&(P[c]=!0));f.startTime=(new Date).getTime();f.pausedCount-=
j.length}1===R&&A();R-=1};f={contextName:b,config:p,defQueue:Q,waiting:C,waitCount:0,specified:y,loaded:t,urlMap:E,urlFetched:P,scriptCount:0,defined:m,paused:[],pausedCount:0,plugins:L,needFullExec:F,fake:{},fullExec:S,managerCallbacks:T,makeModuleMap:k,normalize:c,configure:function(a){var b,c,d;a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");b=p.paths;d=p.pkgs;Z(p,a,!0);if(a.paths){for(c in a.paths)c in K||(b[c]=a.paths[c]);p.paths=b}if((b=a.packagePaths)||a.packages){if(b)for(c in b)c in
K||$(d,b[c],c);a.packages&&$(d,a.packages);p.pkgs=d}if(a.priority)c=f.requireWait,f.requireWait=!1,f.takeGlobalQueue(),x(),f.require(a.priority),x(),f.requireWait=c,p.priorityWait=a.priority;if(a.deps||a.callback)f.require(a.deps||[],a.callback)},requireDefined:function(a,b){return k(a,b).fullName in m},requireSpecified:function(a,b){return k(a,b).fullName in y},require:function(a,c,e){if("string"===typeof a){if(J(c))return d.onError(N("requireargs","Invalid require call"));if(d.get)return d.get(f,
a,c);c=k(a,c);a=c.fullName;return!(a in m)?d.onError(N("notloaded","Module name '"+c.fullName+"' has not been loaded yet for context: "+b)):m[a]}(a&&a.length||c)&&B(null,a,c,e);if(!f.requireWait)for(;!f.scriptCount&&f.paused.length;)f.takeGlobalQueue(),x();return f.require},takeGlobalQueue:function(){V.length&&(ha.apply(f.defQueue,[f.defQueue.length-1,0].concat(V)),V=[])},completeLoad:function(a){var b;for(f.takeGlobalQueue();Q.length;)if(b=Q.shift(),null===b[0]){b[0]=a;break}else if(b[0]===a)break;
else n(b),b=null;b?n(b):n([a,[],"jquery"===a&&"undefined"!==typeof jQuery?function(){return jQuery}:null]);d.isAsync&&(f.scriptCount-=1);x();d.isAsync||(f.scriptCount-=1)},toUrl:function(a,b){var c=a.lastIndexOf("."),d=null;-1!==c&&(d=a.substring(c,a.length),a=a.substring(0,c));return f.nameToUrl(a,d,b)},nameToUrl:function(a,b,e){var k,j,i,g,m=f.config,a=c(a,e&&e.fullName);if(d.jsExtRegExp.test(a))b=a+(b?b:"");else{k=m.paths;j=m.pkgs;e=a.split("/");for(g=e.length;0<g;g--)if(i=e.slice(0,g).join("/"),
k[i]){e.splice(0,g,k[i]);break}else if(i=j[i]){a=a===i.name?i.location+"/"+i.main:i.location;e.splice(0,g,a);break}b=e.join("/")+(b||".js");b=("/"===b.charAt(0)||b.match(/^\w+:/)?"":m.baseUrl)+b}return m.urlArgs?b+((-1===b.indexOf("?")?"?":"&")+m.urlArgs):b}};f.jQueryCheck=X;f.resume=x;return f}function ia(){var b,c,d;if(n&&"interactive"===n.readyState)return n;b=document.getElementsByTagName("script");for(c=b.length-1;-1<c&&(d=b[c]);c--)if("interactive"===d.readyState)return n=d;return null}var ja=
/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,ka=/require\(\s*["']([^'"\s]+)["']\s*\)/g,ea=/^\.\//,aa=/\.js$/,M=Object.prototype.toString,s=Array.prototype,ga=s.slice,ha=s.splice,G=!!("undefined"!==typeof window&&navigator&&document),ca=!G&&"undefined"!==typeof importScripts,la=G&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,da="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),K={},D={},V=[],n=null,U=0,O=!1,d,s={},I,w,u,y,v,z,A,H,B,X,Y;if("undefined"===typeof define){if("undefined"!==
typeof requirejs){if(J(requirejs))return;s=requirejs;requirejs=void 0}"undefined"!==typeof require&&!J(require)&&(s=require,require=void 0);d=requirejs=function(b,c,d){var i="_",j;!E(b)&&"string"!==typeof b&&(j=b,E(c)?(b=c,c=d):b=[]);if(j&&j.context)i=j.context;d=D[i]||(D[i]=fa(i));j&&d.configure(j);return d.require(b,c)};d.config=function(b){return d(b)};require||(require=d);d.toUrl=function(b){return D._.toUrl(b)};d.version="1.0.4";d.jsExtRegExp=/^\/|:|\?|\.js$/;w=d.s={contexts:D,skipAsync:{}};
if(d.isAsync=d.isBrowser=G)if(u=w.head=document.getElementsByTagName("head")[0],y=document.getElementsByTagName("base")[0])u=w.head=y.parentNode;d.onError=function(b){throw b;};d.load=function(b,c,k){d.resourcesReady(!1);b.scriptCount+=1;d.attach(k,b,c);if(b.jQuery&&!b.jQueryIncremented)W(b.jQuery,!0),b.jQueryIncremented=!0};define=function(b,c,d){var i,j;"string"!==typeof b&&(d=c,c=b,b=null);E(c)||(d=c,c=[]);!c.length&&J(d)&&d.length&&(d.toString().replace(ja,"").replace(ka,function(b,d){c.push(d)}),
c=(1===d.length?["require"]:["require","exports","module"]).concat(c));if(O&&(i=I||ia()))b||(b=i.getAttribute("data-requiremodule")),j=D[i.getAttribute("data-requirecontext")];(j?j.defQueue:V).push([b,c,d])};define.amd={multiversion:!0,plugins:!0,jQuery:!0};d.exec=function(b){return eval(b)};d.execCb=function(b,c,d,i){return c.apply(i,d)};d.addScriptToDom=function(b){I=b;y?u.insertBefore(b,y):u.appendChild(b);I=null};d.onScriptLoad=function(b){var c=b.currentTarget||b.srcElement,k;if("load"===b.type||
c&&la.test(c.readyState))n=null,b=c.getAttribute("data-requirecontext"),k=c.getAttribute("data-requiremodule"),D[b].completeLoad(k),c.detachEvent&&!da?c.detachEvent("onreadystatechange",d.onScriptLoad):c.removeEventListener("load",d.onScriptLoad,!1)};d.attach=function(b,c,k,i,j,n){var o;if(G)return i=i||d.onScriptLoad,o=c&&c.config&&c.config.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),o.type=j||c&&c.config.scriptType||"text/javascript",
o.charset="utf-8",o.async=!w.skipAsync[b],c&&o.setAttribute("data-requirecontext",c.contextName),o.setAttribute("data-requiremodule",k),o.attachEvent&&!da?(O=!0,n?o.onreadystatechange=function(){if("loaded"===o.readyState)o.onreadystatechange=null,o.attachEvent("onreadystatechange",i),n(o)}:o.attachEvent("onreadystatechange",i)):o.addEventListener("load",i,!1),o.src=b,n||d.addScriptToDom(o),o;ca&&(importScripts(b),c.completeLoad(k));return null};if(G){v=document.getElementsByTagName("script");for(H=
v.length-1;-1<H&&(z=v[H]);H--){if(!u)u=z.parentNode;if(A=z.getAttribute("data-main")){if(!s.baseUrl)v=A.split("/"),z=v.pop(),v=v.length?v.join("/")+"/":"./",s.baseUrl=v,A=z.replace(aa,"");s.deps=s.deps?s.deps.concat(A):[A];break}}}d.checkReadyState=function(){var b=w.contexts,c;for(c in b)if(!(c in K)&&b[c].waitCount)return;d.resourcesReady(!0)};d.resourcesReady=function(b){var c,k;d.resourcesDone=b;if(d.resourcesDone)for(k in b=w.contexts,b)if(!(k in K)&&(c=b[k],c.jQueryIncremented))W(c.jQuery,!1),
c.jQueryIncremented=!1};d.pageLoaded=function(){if("complete"!==document.readyState)document.readyState="complete"};if(G&&document.addEventListener&&!document.readyState)document.readyState="loading",window.addEventListener("load",d.pageLoaded,!1);d(s);if(d.isAsync&&"undefined"!==typeof setTimeout)B=w.contexts[s.context||"_"],B.requireWait=!0,setTimeout(function(){B.requireWait=!1;B.takeGlobalQueue();B.scriptCount||B.resume();d.checkReadyState()},0)}})();