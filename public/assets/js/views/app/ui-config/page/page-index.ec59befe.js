import{f as s}from"../../../../ui-config-form.0a938dcf.js";import{n as r}from"../../../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../../../app.a373aa59.js";import"../../../../vendor/vendor-core.3574f8d9.js";import"../../../../vendor/vendor-others.c8ba1624.js";import"../../../../vendor/vendor-essential.91b5cfa2.js";import"../../../../vendor/vendor-bootstrap-vue.17129278.js";import"../../../../vendor/vendor-vue-gtag.f8884558.js";const i={extends:s,methods:{getWallpaper(){this.$store.dispatch("config/getWallpaper")}}};var l=function(){var a=this,t=a._self._c;return t("base-container",{attrs:{boxed:"","with-loader":"","is-loading":a.isLoading,"loader-color":a.vars.loaderColor}},[t("form",{on:{submit:function(e){return e.preventDefault(),a.submit.apply(null,arguments)}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-md-6 mb-5"},[t("h6",{staticClass:"font-weight-700"},[a._v(a._s(a.$t("config.ui.page_bg_color")))]),t("div",{staticClass:"color-list mt-3"},a._l(a.colors,function(e){return t("base-radio",{key:e.key,staticClass:"color-item mb-2",attrs:{value:e.key,type:e.key},model:{value:a.formData.pageBackgroundColor,callback:function(o){a.$set(a.formData,"pageBackgroundColor",o)},expression:"formData.pageBackgroundColor"}},[a._v(" "+a._s(e.title)+" ")])}),1)]),t("div",{staticClass:"col-12 col-md-6 mb-5"},[t("h6",{staticClass:"font-weight-700"},[a._v(a._s(a.$t("config.ui.page_container_bg_color")))]),t("div",{staticClass:"color-list mt-3"},a._l(a.colors,function(e){return t("base-radio",{key:e.key,staticClass:"color-item mb-2",attrs:{value:e.key,type:e.key},model:{value:a.formData.pageContainerBackgroundColor,callback:function(o){a.$set(a.formData,"pageContainerBackgroundColor",o)},expression:"formData.pageContainerBackgroundColor"}},[a._v(" "+a._s(e.title)+" ")])}),1)])]),t("h4",[a._v(a._s(a.$t("config.ui.page_header")))]),t("hr",{staticClass:"mt-3 mb-4"}),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-md-6 mb-5"},[t("h6",{staticClass:"font-weight-700"},[a._v(a._s(a.$t("config.ui.bg_color")))]),t("div",{staticClass:"color-list mt-3"},[t("base-radio",{staticClass:"color-item mb-2",attrs:{value:"transparent"},model:{value:a.formData.pageHeaderBackgroundColor,callback:function(e){a.$set(a.formData,"pageHeaderBackgroundColor",e)},expression:"formData.pageHeaderBackgroundColor"}},[a._v(" "+a._s(a.$t("config.ui.transparent"))+" ")]),a._l(a.colors,function(e){return t("base-radio",{key:e.key,staticClass:"color-item mb-2",attrs:{value:e.key,type:e.key},model:{value:a.formData.pageHeaderBackgroundColor,callback:function(o){a.$set(a.formData,"pageHeaderBackgroundColor",o)},expression:"formData.pageHeaderBackgroundColor"}},[a._v(" "+a._s(e.title)+" ")])})],2)]),t("div",{staticClass:"col-12 col-md-6"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 mb-5"},[t("h6",{staticClass:"font-weight-700"},[a._v(a._s(a.$t("config.ui.boxed")))]),t("div",{staticClass:"d-flex align-items-center mt-3"},[t("base-radio",{attrs:{value:!1,inline:""},model:{value:a.formData.pageHeaderIsBoxed,callback:function(e){a.$set(a.formData,"pageHeaderIsBoxed",e)},expression:"formData.pageHeaderIsBoxed"}},[a._v(" "+a._s(a.$t("config.ui.disable"))+" ")]),t("base-radio",{attrs:{value:!0,inline:""},model:{value:a.formData.pageHeaderIsBoxed,callback:function(e){a.$set(a.formData,"pageHeaderIsBoxed",e)},expression:"formData.pageHeaderIsBoxed"}},[a._v(" "+a._s(a.$t("config.ui.enable"))+" ")])],1)])])])]),t("div",{staticClass:"text-right mt-5"},[t("base-button",{attrs:{type:"button",design:"light"},on:{click:a.reset}},[a._v(a._s(a.$t("general.reset")))]),t("base-button",{attrs:{type:"submit",design:"primary"}},[a._v(a._s(a.$t("general.save")))])],1)])])},n=[],c=r(i,l,n,!1,null,"dd0232d8",null,null);const b=c.exports;export{b as default};
