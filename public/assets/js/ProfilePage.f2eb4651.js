import{m as o}from"./vendor/vendor-core.3574f8d9.js";import{n as r}from"./_plugin-vue2_normalizer.7b9a2fe2.js";const t={name:"profile-page-sidebox",props:{isLoading:{type:Boolean,default:!1},minHeight:{type:Boolean,default:!0},overflowHidden:{type:Boolean,default:!0},loaderColor:{type:String,default:"#000000"}}};var s=function(){var e=this,a=e._self._c;return a("base-container",{class:["profile-sidebar-wrapper",{"overflow-hidden":e.overflowHidden}],attrs:{boxed:"","min-height":e.minHeight}},[a("animated-loader",{attrs:{"is-loading":e.isLoading,"loader-color":e.loaderColor,"overlay-color":"dark"}}),e._t("default")],2)},i=[],l=r(t,s,i,!1,null,null,null,null);const d=l.exports,p={components:{ProfilePageSidebox:d},props:{isLoading:{type:Boolean,default:!1},loaderColor:{type:String,default:"#000000"},innerSidebarBoxClasses:{type:String,default:"p-0"}},computed:{...o("config",["vars"])}};var c=function(){var e=this,a=e._self._c;return a("div",{staticClass:"inner-sidebar-layout-wrapper",attrs:{id:"printable"}},[a("div",{staticClass:"inner-sidebar-layout"},[a("div",{staticClass:"inner-sidebar"},[a("profile-page-sidebox",{class:["p-0",e.innerSidebarBoxClasses],attrs:{"is-loading":e.isLoading,"loader-color":e.vars.colors.white}},[e._t("sidebarMainContent")],2),e._t("sidebarSubContent")],2),a("div",{staticClass:"inner-content-wrapper"},[e._t("mainContent")],2)]),e._t("subContent")],2)},f=[],_=r(p,c,f,!1,null,null,null,null);const v=_.exports;export{v as P,d as a};
