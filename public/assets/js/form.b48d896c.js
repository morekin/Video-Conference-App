import{f as a}from"./form.90751a24.js";import{n}from"./_plugin-vue2_normalizer.7b9a2fe2.js";const r={extends:a,data(){return{formData:{uuid:null,name:"",description:""},formLabels:{name:$t("contact.segment.props.name"),description:$t("contact.segment.props.description")},initUrl:"segments"}},mounted(){this.isLoading=!1}};var o=function(){var e=this,t=e._self._c;return t("form",{on:{submit:function(s){return s.preventDefault(),e.submit.apply(null,arguments)}}},[t("animated-loader",{attrs:{"is-loading":e.isLoading||e.isFetching,"loader-color":e.vars.loaderColor}}),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-md-6 mb-3"},[t("base-input",{staticClass:"mb-5",attrs:{"auto-focus":"",label:e.formLabels.name,type:"text",error:e.formErrors.name,required:""},on:{"update:error":function(s){return e.$set(e.formErrors,"name",s)}},model:{value:e.formData.name,callback:function(s){e.$set(e.formData,"name",s)},expression:"formData.name"}})],1),t("div",{staticClass:"col-12 col-md-6 mb-3"},[t("base-input",{staticClass:"mb-5",attrs:{label:e.formLabels.description,type:"text",error:e.formErrors.description},on:{"update:error":function(s){return e.$set(e.formErrors,"description",s)}},model:{value:e.formData.description,callback:function(s){e.$set(e.formData,"description",s)},expression:"formData.description"}})],1)]),e.formHasErrors?t("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t("h6",{staticClass:"m-0"},[e._v(e._s(e.$t("general.form_has_errors")))])]):e._e(),t("div",{staticClass:"form-footer mt-3"},[t("div",{staticClass:"left-side"},[t("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(s){return e.$router.back()}}},[t("i",{staticClass:"fas fa-chevron-left"}),e._v(" "+e._s(e.$t("general.cancel")))]),e.showKeepAdding?t("base-checkbox",{staticClass:"ml-3 mt-2",model:{value:e.keepAdding,callback:function(s){e.keepAdding=s},expression:"keepAdding"}},[e._v(" "+e._s(e.$t("general.keep_adding"))+" ")]):e._e()],1),t("div",{staticClass:"right-side"},[t("base-button",{attrs:{type:"button",design:"light"},on:{click:e.reset}},[e._v(e._s(e.$t("general.reset")))]),t("base-button",{attrs:{type:"submit",design:"primary"}},[t("i",{staticClass:"fas fa-save"}),e._v(" "+e._s(e.$t("global.save",{attribute:e.$t("contact.segment.segment")})))])],1)]),e.showKeepAdding&&e.keepAdding?[t("keep-adding-form",{attrs:{"keep-adding-fields":e.keepAddingFields,"keep-adding-option":e.keepAddingOption,"keep-adding-selected-fields":e.keepAddingSelectedFields,"is-loading":e.isLoading},on:{optionUpdated:function(s){e.keepAddingOption=s},fieldsUpdated:function(s){e.keepAddingSelectedFields=s}}})]:e._e()],2)},i=[],d=n(r,o,i,!1,null,null,null,null);const p=d.exports;export{p as C};