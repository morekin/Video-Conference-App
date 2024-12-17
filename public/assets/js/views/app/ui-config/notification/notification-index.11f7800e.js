import{f as a}from"../../../../ui-config-form.0a938dcf.js";import{n as s}from"../../../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../../../app.a373aa59.js";import"../../../../vendor/vendor-core.3574f8d9.js";import"../../../../vendor/vendor-others.c8ba1624.js";import"../../../../vendor/vendor-essential.91b5cfa2.js";import"../../../../vendor/vendor-bootstrap-vue.17129278.js";import"../../../../vendor/vendor-vue-gtag.f8884558.js";const e="/./assets/images/config/notification_position_top_left.jpg",c="/./assets/images/config/notification_position_top_center.jpg",r="/./assets/images/config/notification_position_top_right.jpg",f="/./assets/images/config/notification_position_bottom_left.jpg",m="/./assets/images/config/notification_position_bottom_center.jpg",l="/./assets/images/config/notification_position_bottom_right.jpg";const u={extends:a,data(){return{notificationPositionTopLeft:e,notificationPositionTopCenter:c,notificationPositionTopRight:r,notificationPositionBottomLeft:f,notificationPositionBottomCenter:m,notificationPositionBottomRight:l}},methods:{showNotification(n){this.$toasted.clear(),this.$toasted.show(this.$t("config.ui.notification_demo"),{...this.$toastConfig.normal,position:n})}}};var g=function(){var t=this,i=t._self._c;return i("base-container",{attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[i("form",{on:{submit:function(o){return o.preventDefault(),t.submit.apply(null,arguments)}}},[i("h4",[t._v(t._s(t.$t("config.ui.notification")))]),i("hr",{staticClass:"mt-3 mb-4"}),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 mb-5"},[i("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.position")))]),i("div",{staticClass:"d-flex align-items-center"},[i("base-radio",{attrs:{value:"top-left",inline:"","has-image":""},on:{change:function(o){return t.showNotification("top-left")}},model:{value:t.formData.notificationPosition,callback:function(o){t.$set(t.formData,"notificationPosition",o)},expression:"formData.notificationPosition"}},[i("img",{attrs:{src:t.notificationPositionTopLeft}}),i("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.top_left")))])]),i("base-radio",{attrs:{value:"top-center",inline:"","has-image":""},on:{change:function(o){return t.showNotification("top-center")}},model:{value:t.formData.notificationPosition,callback:function(o){t.$set(t.formData,"notificationPosition",o)},expression:"formData.notificationPosition"}},[i("img",{attrs:{src:t.notificationPositionTopCenter}}),i("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.top_center")))])]),i("base-radio",{attrs:{value:"top-right",inline:"","has-image":""},on:{change:function(o){return t.showNotification("top-right")}},model:{value:t.formData.notificationPosition,callback:function(o){t.$set(t.formData,"notificationPosition",o)},expression:"formData.notificationPosition"}},[i("img",{attrs:{src:t.notificationPositionTopRight}}),i("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.top_right")))])])],1),i("div",{staticClass:"d-flex align-items-center"},[i("base-radio",{attrs:{value:"bottom-left",inline:"","has-image":""},on:{change:function(o){return t.showNotification("bottom-left")}},model:{value:t.formData.notificationPosition,callback:function(o){t.$set(t.formData,"notificationPosition",o)},expression:"formData.notificationPosition"}},[i("img",{attrs:{src:t.notificationPositionBottomLeft}}),i("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.bottom_left")))])]),i("base-radio",{attrs:{value:"bottom-center",inline:"","has-image":""},on:{change:function(o){return t.showNotification("bottom-center")}},model:{value:t.formData.notificationPosition,callback:function(o){t.$set(t.formData,"notificationPosition",o)},expression:"formData.notificationPosition"}},[i("img",{attrs:{src:t.notificationPositionBottomCenter}}),i("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.bottom_center")))])]),i("base-radio",{attrs:{value:"bottom-right",inline:"","has-image":""},on:{change:function(o){return t.showNotification("bottom-right")}},model:{value:t.formData.notificationPosition,callback:function(o){t.$set(t.formData,"notificationPosition",o)},expression:"formData.notificationPosition"}},[i("img",{attrs:{src:t.notificationPositionBottomRight}}),i("div",{staticClass:"mt-2 text-center text-muted"},[t._v(t._s(t.$t("config.ui.bottom_right")))])])],1)]),i("div",{staticClass:"col-12 col-md-6 mb-5"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 mb-5"},[i("h6",{staticClass:"font-weight-700"},[t._v(t._s(t.$t("config.ui.duration")))]),i("base-input",{attrs:{type:"number",error:t.formErrors.notificationDuration,min:"0",step:"500","select-on-focus":"","addon-right-text":t.$t("config.ui.seconds")},on:{"update:error":function(o){return t.$set(t.formErrors,"notificationDuration",o)},wheel:function(o){o.stopPropagation(),o.preventDefault()}},model:{value:t.formData.notificationDuration,callback:function(o){t.$set(t.formData,"notificationDuration",o)},expression:"formData.notificationDuration"}})],1)])])]),i("div",{staticClass:"text-right mt-5"},[i("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),i("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("general.save")))])],1)])])},_=[],d=s(u,g,_,!1,null,"b6dd579c",null,null);const C=d.exports;export{C as default};