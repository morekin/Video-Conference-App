import{f as s}from"../../../config-form.362d01c5.js";import{n as o}from"../../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../../vendor/vendor-core.3574f8d9.js";import"../../../vendor/vendor-others.c8ba1624.js";import"../../../app.a373aa59.js";import"../../../vendor/vendor-essential.91b5cfa2.js";import"../../../vendor/vendor-bootstrap-vue.17129278.js";import"../../../vendor/vendor-vue-gtag.f8884558.js";const i={extends:s,data(){return{now:moment(),formData:{system:{dateFormat:"",timeFormat:"",timezone:"",perPage:10,locale:""},chat:{enableAutoOpen:!1,enterToSubmit:!1,muteSoundNotification:!1},override:!0},preRequisite:{dateFormats:[],timeFormats:[],timezones:[],locales:[],paginations:[]},useUserPreference:!0}},methods:{afterSubmit(){location.reload()}},mounted(){this.getInitialData()}};var l=function(){var t=this,e=t._self._c;return e("base-container",{attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[e("form",{on:{submit:function(a){return a.preventDefault(),t.submit.apply(null,arguments)}}},[e("h4",{staticClass:"pb-2 mb-4 border-bottom"},[t._v(t._s(t.$t("config.system.system")))]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-select",{attrs:{options:t.preRequisite.dateFormats,label:t.$t("config.system.date_format"),"allow-empty":!1,simple:"",disabled:t.isLoading,required:""},scopedSlots:t._u([{key:"selectedOption",fn:function({option:a}){return[t._v(t._s(t._f("moment")(t.now,a.uuid))+" "),e("small",{staticClass:"bracketed text-muted"},[t._v(t._s(a.name))])]}},{key:"listOption",fn:function({option:a}){return[t._v(" "+t._s(t._f("moment")(t.now,a.uuid))+" "),e("small",{staticClass:"bracketed text-muted"},[t._v(t._s(a.name))])]}}]),model:{value:t.formData.system.dateFormat,callback:function(a){t.$set(t.formData.system,"dateFormat",a)},expression:"formData.system.dateFormat"}})],1),e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-select",{attrs:{options:t.preRequisite.timeFormats,label:t.$t("config.system.time_format"),"allow-empty":!1,simple:"",disabled:t.isLoading,required:""},scopedSlots:t._u([{key:"selectedOption",fn:function({option:a}){return[t._v(t._s(t._f("moment")(t.now,a.uuid))+" "),e("small",{staticClass:"bracketed text-muted"},[t._v(t._s(a.name))])]}},{key:"listOption",fn:function({option:a}){return[t._v(" "+t._s(t._f("moment")(t.now,a.uuid))+" "),e("small",{staticClass:"bracketed text-muted"},[t._v(t._s(a.name))])]}}]),model:{value:t.formData.system.timeFormat,callback:function(a){t.$set(t.formData.system,"timeFormat",a)},expression:"formData.system.timeFormat"}})],1),e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-select",{attrs:{options:t.preRequisite.timezones,label:t.$t("config.system.timezone"),"allow-empty":!1,simple:"",disabled:t.isLoading,required:""},model:{value:t.formData.system.timezone,callback:function(a){t.$set(t.formData.system,"timezone",a)},expression:"formData.system.timezone"}})],1),t.configs&&t.configs.system&&t.configs.system.enableMultilingual?e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-select",{attrs:{options:t.preRequisite.locales,label:t.$t("config.system.locale"),"allow-empty":!1,simple:"",disabled:t.isLoading,required:""},model:{value:t.formData.system.locale,callback:function(a){t.$set(t.formData.system,"locale",a)},expression:"formData.system.locale"}})],1):t._e()]),e("h4",{staticClass:"pb-2 mb-4 mt-4 border-bottom"},[t._v(t._s(t.$t("config.chat.chat")))]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("switch-wrapper",{attrs:{label:t.$t("config.chat.enable_auto_open")}},[e("base-switch",{model:{value:t.formData.chat.enableAutoOpen,callback:function(a){t.$set(t.formData.chat,"enableAutoOpen",a)},expression:"formData.chat.enableAutoOpen"}})],1)],1),e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("switch-wrapper",{attrs:{label:t.$t("config.chat.enter_to_submit")}},[e("base-switch",{model:{value:t.formData.chat.enterToSubmit,callback:function(a){t.$set(t.formData.chat,"enterToSubmit",a)},expression:"formData.chat.enterToSubmit"}})],1)],1),e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("switch-wrapper",{attrs:{label:t.$t("config.chat.mute_sound_notification")}},[e("base-switch",{model:{value:t.formData.chat.muteSoundNotification,callback:function(a){t.$set(t.formData.chat,"muteSoundNotification",a)},expression:"formData.chat.muteSoundNotification"}})],1)],1)]),e("div",{staticClass:"text-right mt-5"},[e("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),e("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("general.save")))])],1)])])},m=[],n=o(i,l,m,!1,null,"4ff92d7c",null,null);const y=n.exports;export{y as default};
