import{n as a}from"../../_plugin-vue2_normalizer.7b9a2fe2.js";const t={name:"base-container",props:{boxed:{type:[Boolean,String],default:!1},minHeight:{type:[Boolean,String],default:!1},withLoader:{type:Boolean,default:!1},hasForm:{type:Boolean,default:!1},hasFooter:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},loaderColor:{type:String,default:"#000000"},loaderSize:{type:String,default:"parent"},overlayColor:{type:String,default:"light"}}};var l=function(){var e=this,o=e._self._c;return o("div",{class:["base-container page-container",{boxed:e.boxed,"boxed-right":e.boxed==="right","boxed-left":e.boxed==="left","min-height":e.minHeight,"min-height-sm":e.minHeight==="sm","min-height-md":e.minHeight==="md","min-height-lg":e.minHeight==="lg","h-100":e.minHeight==="full","has-form":e.hasForm,"has-footer":e.hasFooter}]},[e.withLoader?o("animated-loader",{attrs:{"is-loading":e.isLoading,"loader-color":e.loaderColor,"overlay-color":e.overlayColor,size:e.loaderSize}}):e._e(),e._t("default")],2)},n=[],r=a(t,l,n,!1,null,null,null,null);const d=r.exports;export{d as default};
