import{m as t}from"../../../vendor/vendor-core.3574f8d9.js";import{F as e}from"../../../app.a373aa59.js";import{n}from"../../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../../vendor/vendor-others.c8ba1624.js";import"../../../vendor/vendor-essential.91b5cfa2.js";import"../../../vendor/vendor-bootstrap-vue.17129278.js";import"../../../vendor/vendor-vue-gtag.f8884558.js";const i={components:{},data(){return{formData:{currentPassword:"",newPassword:"",newPasswordConfirmation:""},formErrors:{},isLoading:!1}},computed:{...t("config",["vars"])},methods:{submit(){this.isLoading=!0,e(this.formData).then(a=>{this.isLoading=!1,this.formData=formUtil.clearForm(this.formData),this.$toasted.success(a.message,this.$toastConfig)}).catch(a=>{this.isLoading=!1,this.formErrors=formUtil.handleErrors(a)})}}};var m=function(){var r=this,o=r._self._c;return o("base-container",{attrs:{boxed:"","with-loader":"","is-loading":r.isLoading,"loader-color":r.vars.loaderColor}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-8 col-md-6 col-lg-4"},[o("form",{on:{submit:function(s){return s.preventDefault(),r.submit.apply(null,arguments)}}},[o("base-input",{staticClass:"mb-3",attrs:{"auto-focus":"",label:r.$t("auth.password.props.current_password"),type:"password",name:"currentPassword","addon-left-icon":"fas fa-key",error:r.formErrors.currentPassword,autocomplete:"current-password"},on:{"update:error":function(s){return r.$set(r.formErrors,"currentPassword",s)}},model:{value:r.formData.currentPassword,callback:function(s){r.$set(r.formData,"currentPassword",s)},expression:"formData.currentPassword"}}),o("base-input",{staticClass:"mb-3",attrs:{label:r.$t("auth.password.props.new_password"),type:"password",name:"newPassword","addon-left-icon":"fas fa-key",error:r.formErrors.newPassword,autocomplete:"new-password"},on:{"update:error":function(s){return r.$set(r.formErrors,"newPassword",s)}},model:{value:r.formData.newPassword,callback:function(s){r.$set(r.formData,"newPassword",s)},expression:"formData.newPassword"}}),o("base-input",{staticClass:"mb-3",attrs:{label:r.$t("auth.password.props.new_password_confirmation"),type:"password",name:"newPasswordConfirmation","addon-left-icon":"fas fa-key",error:r.formErrors.newPasswordConfirmation,autocomplete:"new-password"},on:{"update:error":function(s){return r.$set(r.formErrors,"newPasswordConfirmation",s)}},model:{value:r.formData.newPasswordConfirmation,callback:function(s){r.$set(r.formData,"newPasswordConfirmation",s)},expression:"formData.newPasswordConfirmation"}}),o("div",{staticClass:"text-center"},[o("base-button",{staticClass:"my-4",attrs:{type:"submit",design:"success",block:""}},[r._v(r._s(r.$t("auth.password.change_password")))])],1)],1)])])])},d=[],c=n(i,m,d,!1,null,null,null,null);const b=c.exports;export{b as default};
