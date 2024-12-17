import{a as I,c as k}from"./vendor-core.3574f8d9.js";import{h as M}from"./vendor-others.c8ba1624.js";function B(p,b){for(var c=0;c<b.length;c++){const l=b[c];if(typeof l!="string"&&!Array.isArray(l)){for(const u in l)if(u!=="default"&&!(u in p)){const i=Object.getOwnPropertyDescriptor(l,u);i&&Object.defineProperty(p,u,i.get?i:{enumerable:!0,get:()=>l[u]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var m={exports:{}};(function(p,b){(function(l,u){p.exports=u(M)})(k,c=>(()=>{var l={311:a=>{a.exports=c}},u={};function i(a){var o=u[a];if(o!==void 0)return o.exports;var s=u[a]={exports:{}};return l[a](s,s.exports,i),s.exports}i.n=a=>{var o=a&&a.__esModule?()=>a.default:()=>a;return i.d(o,{a:o}),o},i.d=(a,o)=>{for(var s in o)i.o(o,s)&&!i.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:o[s]})},i.o=(a,o)=>Object.prototype.hasOwnProperty.call(a,o);var d={};return(()=>{i.d(d,{default:()=>P});var a=i(311),o=i.n(a),s=["onChange","onClose","onDestroy","onMonthChange","onOpen","onYearChange"],x=["onValueUpdate","onDayCreate","onParseConfig","onReady","onPreCalendarPosition","onKeyDown"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var D=function(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},O=function(t){return t instanceof Array?t:[t]},h=function(t){return t&&t.length?t:null},y=function(t){return g({},t)},$=s.concat(x),j=["locale","showMonths"];const _={name:"flat-pickr",render:function(t){return t("input",{attrs:{type:"text","data-input":!0},props:{disabled:this.disabled},on:{input:this.onInput}})},props:{value:{default:null,required:!0,validator:function(t){return t===null||t instanceof Date||typeof t=="string"||t instanceof String||t instanceof Array||typeof t=="number"}},config:{type:Object,default:function(){return{wrap:!1,defaultDate:null}}},events:{type:Array,default:function(){return s}},disabled:{type:Boolean,default:!1}},data:function(){return{fp:null}},mounted:function(){var t=this;if(!this.fp){var n=y(this.config);this.events.forEach(function(r){var f=o().defaultConfig[r]||[],A=function(){for(var C=arguments.length,w=new Array(C),v=0;v<C;v++)w[v]=arguments[v];t.$emit.apply(t,[D(r)].concat(w))};n[r]=O(n[r]||[]).concat(f,A)}),n.defaultDate=this.value||n.defaultDate,this.fp=new(o())(this.getElem(),n),this.fpInput().addEventListener("blur",this.onBlur),this.$on("on-close",this.onClose),this.$watch("disabled",this.watchDisabled,{immediate:!0})}},methods:{getElem:function(){return this.config.wrap?this.$el.parentNode:this.$el},onInput:function(t){var n=this,r=t.target;this.$nextTick(function(){n.$emit("input",h(r.value))})},fpInput:function(){return this.fp.altInput||this.fp.input},onBlur:function(t){this.$emit("blur",h(t.target.value))},onClose:function(t,n){this.$emit("input",h(n))},watchDisabled:function(t){t?this.fpInput().setAttribute("disabled",t):this.fpInput().removeAttribute("disabled")}},watch:{config:{deep:!0,handler:function(t){var n=this,r=y(t);$.forEach(function(f){delete r[f]}),this.fp.set(r),j.forEach(function(f){typeof r[f]<"u"&&n.fp.set(f,r[f])})}},value:function(t){t!==h(this.$el.value)&&this.fp&&this.fp.setDate(t,!0)}},beforeDestroy:function(){this.fp&&(this.fpInput().removeEventListener("blur",this.onBlur),this.fp.destroy(),this.fp=null)}};var E=function(t,n){var r="flat-pickr";typeof n=="string"&&(r=n),t.component(r,_)};_.install=E;const P=_})(),d=d.default,d})())})(m);const F=I(m.exports),L=B({__proto__:null,default:F},[m.exports]);export{L as v};
