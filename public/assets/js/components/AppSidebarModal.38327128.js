import{A as e}from"../AppSidebar.43e19366.js";import{m as i,i as s}from"../vendor/vendor-core.3574f8d9.js";import"../event-bus.6a5776a8.js";import{n as o}from"../_plugin-vue2_normalizer.7b9a2fe2.js";import"../vendor/vendor-others.c8ba1624.js";const r={components:{AppSidebar:e},data(){return{}},computed:{...i("config",["uiConfigs"])},methods:{...s("config",["SetUiConfig"]),toggleSidebar(){this.SetUiConfig({modalSidebarShow:!this.uiConfigs.modalSidebarShow})}}};var n=function(){var a=this,t=a._self._c;return t("app-sidebar",{staticClass:"modal-sidebar"},[t("div",{staticClass:"modal-sidebar-inner"},[t("div",{staticClass:"modal-sidebar-content"},[a._t("heading"),t("vue-scroll",{ref:"vuescrollSidebarRight",attrs:{id:"vuescrollSidebarRight"}},[t("div",{staticClass:"content-wrapper p-4"},[a._t("default")],2)])],2)])])},d=[],l=o(r,n,d,!1,null,null,null,null);const v=l.exports;export{v as default};