import{f as i}from"../../../../ui-config-form.0a938dcf.js";import{n as s}from"../../../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../../../app.a373aa59.js";import"../../../../vendor/vendor-core.3574f8d9.js";import"../../../../vendor/vendor-others.c8ba1624.js";import"../../../../vendor/vendor-essential.91b5cfa2.js";import"../../../../vendor/vendor-bootstrap-vue.17129278.js";import"../../../../vendor/vendor-vue-gtag.f8884558.js";const r={extends:i};var l=function(){var a=this,t=a._self._c;return t("base-container",{attrs:{boxed:"","with-loader":"","is-loading":a.isLoading,"loader-color":a.vars.loaderColor}},[t("form",{on:{submit:function(o){return o.preventDefault(),a.submit.apply(null,arguments)}}},[t("h4",[a._v(a._s(a.$t("config.ui.top_navbar")))]),t("hr",{staticClass:"mt-3 mb-4"}),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-md-6 mb-5"},[t("h6",{staticClass:"font-weight-700"},[a._v(a._s(a.$t("config.ui.color")))]),t("div",{staticClass:"color-list mt-3"},a._l(a.colors,function(o){return t("base-radio",{key:o.key,staticClass:"color-item mb-2",attrs:{value:o.key,type:o.key},model:{value:a.formData.topNavbarColor,callback:function(e){a.$set(a.formData,"topNavbarColor",e)},expression:"formData.topNavbarColor"}},[a._v(" "+a._s(o.title)+" ")])}),1)]),t("div",{staticClass:"col-12 col-md-6 mb-5"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 mb-5"},[t("h6",{staticClass:"font-weight-700"},[a._v(a._s(a.$t("config.ui.fixed_on_top")))]),t("div",{staticClass:"d-flex align-items-center mt-3"},[t("base-radio",{attrs:{value:!1,inline:""},model:{value:a.formData.topNavbarFixed,callback:function(o){a.$set(a.formData,"topNavbarFixed",o)},expression:"formData.topNavbarFixed"}},[a._v(" "+a._s(a.$t("config.ui.disable"))+" ")]),t("base-radio",{attrs:{value:!0,inline:""},model:{value:a.formData.topNavbarFixed,callback:function(o){a.$set(a.formData,"topNavbarFixed",o)},expression:"formData.topNavbarFixed"}},[a._v(" "+a._s(a.$t("config.ui.enable"))+" ")])],1)]),t("div",{staticClass:"col-12 mb-5"},[t("h6",{staticClass:"font-weight-700"},[a._v(a._s(a.$t("config.ui.light_logo")))]),t("div",{staticClass:"d-flex align-items-center mt-3"},[t("base-radio",{attrs:{value:!1,inline:""},model:{value:a.formData.topNavbarLogoLight,callback:function(o){a.$set(a.formData,"topNavbarLogoLight",o)},expression:"formData.topNavbarLogoLight"}},[a._v(" "+a._s(a.$t("config.ui.disable"))+" ")]),t("base-radio",{attrs:{value:!0,inline:""},model:{value:a.formData.topNavbarLogoLight,callback:function(o){a.$set(a.formData,"topNavbarLogoLight",o)},expression:"formData.topNavbarLogoLight"}},[a._v(" "+a._s(a.$t("config.ui.enable"))+" ")])],1)]),t("div",{staticClass:"col-12 mb-5"},[t("h6",{staticClass:"font-weight-700"},[a._v(a._s(a.$t("config.ui.hide_navbar")))]),t("div",{staticClass:"d-flex align-items-center mt-3"},[t("base-radio",{attrs:{value:!1,inline:""},model:{value:a.formData.topNavbarHide,callback:function(o){a.$set(a.formData,"topNavbarHide",o)},expression:"formData.topNavbarHide"}},[a._v(" "+a._s(a.$t("config.ui.disable"))+" ")]),t("base-radio",{attrs:{value:!0,inline:""},model:{value:a.formData.topNavbarHide,callback:function(o){a.$set(a.formData,"topNavbarHide",o)},expression:"formData.topNavbarHide"}},[a._v(" "+a._s(a.$t("config.ui.enable"))+" ")])],1)])])])]),t("div",{staticClass:"text-right mt-5"},[t("base-button",{attrs:{type:"button",design:"light"},on:{click:a.reset}},[a._v(a._s(a.$t("general.reset")))]),t("base-button",{attrs:{type:"submit",design:"primary"}},[a._v(a._s(a.$t("general.save")))])],1)])])},n=[],c=s(r,l,n,!1,null,"560dbf0f",null,null);const x=c.exports;export{x as default};
