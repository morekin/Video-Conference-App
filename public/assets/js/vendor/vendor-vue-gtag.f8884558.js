import{V as y}from"./vendor-core.3574f8d9.js";function p(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?p=function(e){return typeof e}:p=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(n)}function d(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function O(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),r.push.apply(r,t)}return r}function m(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?O(Object(r),!0).forEach(function(t){d(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}var F=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise(function(t,a){if(!(typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");if(o.async=!0,o.src=e,o.defer=r.defer,r.preconnectOrigin){var u=document.createElement("link");u.href=r.preconnectOrigin,u.rel="preconnect",i.appendChild(u)}i.appendChild(o),o.onload=t,o.onerror=a}})},v=function(e){return typeof e=="function"},g=function(e){return e&&p(e)==="object"&&!Array.isArray(e)},M=function n(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),a=1;a<r;a++)t[a-1]=arguments[a];if(!t.length)return e;var i=t.shift();if(!(!g(e)||!g(i))){for(var o in i)g(i[o])?(e[o]||Object.assign(e,d({},o,{})),n(e[o],i[o])):Object.assign(e,d({},o,i[o]));return n.apply(void 0,[e].concat(t))}},l=function(){return!(typeof window>"u"||typeof document>"u")},P=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;l()},C=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return P('Missing "appName" property inside the plugin options.',e.app_name==null),P('Missing "name" property in the route.',e.screen_name==null),e};function q(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=n.split("/"),t=e.split("/");return r[0]===""&&e[e.length-1]==="/"&&r.shift(),t.join("/")+r.join("/")}var I=function(){return{bootstrap:!0,onReady:null,onError:null,onBeforeTrack:null,onAfterTrack:null,pageTrackerTemplate:null,customResourceURL:"https://www.googletagmanager.com/gtag/js",customPreconnectOrigin:"https://www.googletagmanager.com",deferScriptLoad:!1,pageTrackerExcludedRoutes:[],pageTrackerEnabled:!0,enabled:!0,disableScriptLoad:!1,pageTrackerScreenviewEnabled:!1,appName:null,pageTrackerUseFullPath:!1,pageTrackerPrependBase:!0,pageTrackerSkipSamePath:!0,globalDataLayerName:"dataLayer",globalObjectName:"gtag",defaultGroupName:"default",includes:null,config:{id:null,params:{send_page_view:!1}}}},_={},$=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=I();_=M(r,e)},c=function(){return _},s=function(){var n,e=c(),r=e.globalObjectName;!l()||typeof window[r]>"u"||(n=window)[r].apply(n,arguments)},h=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];var t=c(),a=t.config,i=t.includes;s.apply(void 0,["config",a.id].concat(e)),Array.isArray(i)&&i.forEach(function(o){s.apply(void 0,["config",o.id].concat(e))})},T=function(e,r){!l()||(window["ga-disable-".concat(e)]=r)},E=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,e=c(),r=e.config,t=e.includes;T(r.id,n),Array.isArray(t)&&t.forEach(function(a){return T(a.id,n)})},N=function(){E(!0)},z=function(){E(!1)},R,K=function(e){R=e},w=function(){return R},f=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=c(),t=r.includes,a=r.defaultGroupName;e.send_to==null&&Array.isArray(t)&&t.length&&(e.send_to=t.map(function(i){return i.id}).concat(a)),s("event",n,e)},D=function(n){if(!!l()){var e;if(typeof n=="string")e={page_path:n};else if(n.path||n.fullPath){var r=c(),t=r.pageTrackerUseFullPath,a=r.pageTrackerPrependBase,i=w(),o=i&&i.options.base,u=t?n.fullPath:n.path;e=m(m({},n.name&&{page_title:n.name}),{},{page_path:a?q(u,o):u})}else e=n;e.page_location==null&&(e.page_location=window.location.href),e.send_page_view==null&&(e.send_page_view=!0),f("page_view",e)}},L=function(n){var e=c(),r=e.appName;if(!!n){var t;typeof n=="string"?t={screen_name:n}:t=n,t.app_name=t.app_name||r,f("screen_view",t)}},V=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];f.apply(void 0,["exception"].concat(e))},W=function(n){h("linker",n)},H=function(n){f("timing_complete",n)},J=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];s.apply(void 0,["set"].concat(e))},Q=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];f.apply(void 0,["refund"].concat(e))},X=function(n){f("purchase",n)},Y=function(n){h({custom_map:n})},Z=Object.freeze({__proto__:null,query:s,config:h,optOut:N,optIn:z,pageview:D,screenview:L,exception:V,linker:W,time:H,set:J,refund:Q,purchase:X,customMap:Y,event:f}),ee=function(e){return e.$gtag=e.prototype.$gtag=Z},ne=function(){if(!!l()){var n=c(),e=n.enabled,r=n.globalObjectName,t=n.globalDataLayerName;return window[r]==null&&(window[t]=window[t]||[],window[r]=function(){window[t].push(arguments)}),window[r]("js",new Date),e||N(),window[r]}},S=function(e){return m({send_page_view:!1},e)},x=function(){var n=c(),e=n.config,r=n.includes;s("config",e.id,S(e.params)),Array.isArray(r)&&r.forEach(function(t){s("config",t.id,S(t.params))})},A=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=c(),t=r.appName,a=r.pageTrackerTemplate,i=r.pageTrackerScreenviewEnabled,o=r.pageTrackerSkipSamePath;if(!(o&&n.path===e.path)){var u=n;if(v(a)?u=a(n,e):i&&(u=C({app_name:t,screen_name:n.name})),i){L(u);return}D(u)}},j=function(e){var r=c(),t=r.pageTrackerExcludedRoutes;return t.includes(e.path)||t.includes(e.name)},re=function(){var n=c(),e=n.onBeforeTrack,r=n.onAfterTrack,t=w();t.onReady(function(){y.nextTick().then(function(){var a=t.currentRoute;x(),!j(a)&&A(a)}),t.afterEach(function(a,i){y.nextTick().then(function(){j(a)||(v(e)&&e(a,i),A(a,i),v(r)&&r(a,i))})})})},te=function(){var n=c(),e=n.onReady,r=n.onError,t=n.globalObjectName,a=n.globalDataLayerName,i=n.config,o=n.customResourceURL,u=n.customPreconnectOrigin,B=n.deferScriptLoad,k=n.pageTrackerEnabled,G=n.disableScriptLoad,U=Boolean(k&&w());if(ne(),U?re():x(),!G)return F("".concat(o,"?id=").concat(i.id,"&l=").concat(a),{preconnectOrigin:u,defer:B}).then(function(){e&&e(window[t])}).catch(function(b){return r&&r(b),b})},ie=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;ee(e),$(r),K(t),c().bootstrap&&te()};export{ie as i};