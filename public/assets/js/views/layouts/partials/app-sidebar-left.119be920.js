import{A as r}from"../../../AppSidebar.43e19366.js";import{A as a}from"../../../AppLogo.91541531.js";import{m as s,j as l,i as o}from"../../../vendor/vendor-core.3574f8d9.js";import{n}from"../../../_plugin-vue2_normalizer.7b9a2fe2.js";import{k as f}from"../../../vendor/vendor-bootstrap-vue.17129278.js";import"../../../vendor/vendor-others.c8ba1624.js";const d={components:{AppSidebar:r,AppLogo:a,BCollapse:f},data(){return{lastStyle:"",currentScrollPosition:{x:0,y:0},lastScrollPosition:{x:0,y:0},isCollapseOpen:!1}},computed:{...s("config",["configs","uiConfigs"]),...s("user",{profile:"profile"}),...l("config",{showPin:t=>t.ui.leftSidebarHeight==="full"&&(t.ui.leftSidebarStyle==="over"||t.ui.leftSidebarStyle==="folded"),showUnpin:t=>t.ui.leftSidebarHeight==="full"&&t.ui.leftSidebarStyle==="push-content",thumbRight:t=>t.ui.leftSidebarStyle==="folded"||t.ui.navMenuThumbOnRight}),sidebarStyle(){if(this.uiConfigs.leftSidebarColor==="wallpaper"){if(this.uiConfigs.wallpaper)return{"--bg-image":`url(${this.uiConfigs.wallpaper.urls.regular})`};this.$store.dispatch("config/getWallpaper")}return{"--bg-image":""}},sidebarOpen(){return this.uiConfigs.leftSidebarShow}},watch:{sidebarOpen(t){setTimeout(()=>{this.isCollapseOpen=t},150)}},methods:{...o("config",["SetUiConfig"]),pinSidebar(){this.lastStyle=this.uiConfigs.leftSidebarStyle,this.SetUiConfig({leftSidebarStyle:"push-content"}),this.SetUiConfig({leftSidebarBackdrop:!1}),this.SetUiConfig({leftSidebarShadow:!1})},unpinSidebar(){this.SetUiConfig({leftSidebarStyle:this.lastStyle||"folded"}),this.SetUiConfig({leftSidebarBackdrop:!0}),this.SetUiConfig({leftSidebarShadow:!0})},showSidebar(){this.SetUiConfig({leftSidebarShow:!0}),setTimeout(()=>{this.$refs.vuescrollSidebarLeft&&this.$refs.vuescrollSidebarLeft.scrollTo(this.lastScrollPosition,{speed:100,easing:"easeInOutCubic"})},100)},handleScroll(t,e,i){this.currentScrollPosition.x=e,this.currentScrollPosition.y=t},hideSidebar(){this.SetUiConfig({leftSidebarShow:!1}),setTimeout(()=>{this.lastScrollPosition.x=this.currentScrollPosition.x.scrollLeft,this.lastScrollPosition.y=this.currentScrollPosition.y.scrollTop,this.$refs.vuescrollSidebarLeft&&this.$refs.vuescrollSidebarLeft.scrollTo({x:0,y:0},{speed:100,easing:"easeInOutCubic"})},100)}}};var c=function(){var e=this,i=e._self._c;return i("app-sidebar",{staticClass:"left-sidebar",style:e.sidebarStyle,attrs:{"data-v-step":"menu-sidebar"}},[i("div",e._g({staticClass:"wrapper"},e.uiConfigs.leftSidebarStyle==="folded"?{mouseenter:e.showSidebar,mouseleave:e.hideSidebar}:{}),[i("div",{staticClass:"content"},[i("div",{staticClass:"logo-wrapper"},[i("app-logo",{attrs:{place:"sidebar"}}),i("div",{staticClass:"seperator"}),i("div",{staticClass:"sidebar-switches"},[e.showPin?i("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"unpinned",attrs:{title:e.$t("config.ui.pin_sidebar")},on:{click:e.pinSidebar}},[i("i",{staticClass:"far fa-circle"})]):e.showUnpin?i("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pinned",attrs:{title:e.$t("config.ui.pin_sidebar")},on:{click:e.unpinSidebar}},[i("i",{staticClass:"fas fa-dot-circle"})]):e._e()])],1),i("vue-scroll",{ref:"vuescrollSidebarLeft",class:["vue-scroll-sidebar-left",{"menu-after-widgets":e.configs.sidebar.showMenuAfterWidgets},{"has-widgets":e.configs.sidebar.enableWidgets}],attrs:{id:"vuescrollSidebarLeft"},on:{"handle-scroll":e.handleScroll}},[e.configs.sidebar.showMenuAfterWidgets?[e._t("widgets"),e._t("menu")]:[e._t("menu"),e._t("widgets")]],2),e.uiConfigs.leftSidebarColor==="wallpaper"&&e.uiConfigs.wallpaper?i("div",{staticClass:"unsplash-credit"},[e._v(" Photo by "),i("a",{attrs:{href:e.uiConfigs.wallpaper.user.links.html}},[e._v(e._s(e.uiConfigs.wallpaper.user.name))]),e._v(" on "),i("a",{attrs:{href:"https://unsplash.com"}},[e._v("Unsplash")])]):e._e(),e._t("default")],2)])])},p=[],u=n(d,c,p,!1,null,null,null,null);const C=u.exports;export{C as default};
