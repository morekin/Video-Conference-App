import{f as r}from"../../../../config-form.362d01c5.js";import{C as s}from"../../../../vendor/vendor-core.3574f8d9.js";import{S as l}from"../../../../app.a373aa59.js";import{n}from"../../../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../../../vendor/vendor-essential.91b5cfa2.js";import"../../../../vendor/vendor-others.c8ba1624.js";import"../../../../vendor/vendor-bootstrap-vue.17129278.js";import"../../../../vendor/vendor-vue-gtag.f8884558.js";const c={extends:r,components:{CollapseTransition:s},data(){return{formData:{sessionLifetime:"",resetPasswordTokenLifetime:"",resetPassword:!1,twoFactorSecurity:!1,registration:!1,lockScreen:!1,lockScreenTimeout:"",loginThrottle:!1,loginThrottleAttempt:"",loginThrottleTimeout:"",emailVerification:!1,accountApproval:!1,emailOtpLogin:!1,smsOtpLogin:!1,socialLogin:!1,google:!1,facebook:!1,twitter:!1,github:!1,googleClientId:"",googleClientSecret:"",facebookClientId:"",facebookClientSecret:"",twitterClientId:"",twitterClientSecret:"",githubClientId:"",githubClientSecret:"",guestLayoutDesign:"",guestLayoutStyle:"",enableThirdPartyAuth:!1,authKey:"",authSecret:"",type:"auth"},preRequisite:{socialLoginProviders:[],guestLayoutDesigns:[{uuid:"default",name:"Default"},{uuid:"boxed-left",name:"Boxed Left "},{uuid:"boxed-right",name:"Boxed Right "}],guestLayoutStyles:[{uuid:"default",name:"Default"},{uuid:"light",name:"Light"},{uuid:"dark",name:"Dark"},{uuid:"image",name:"Image"}]},systemVariables:{},thirdPartyAuth:{authKey:"",authSecret:""}}},methods:{generateAuthKeySecret(){formUtil.confirmAction().then(i=>{i.value?(this.isLoading=!0,this.Custom({url:"config/auth",method:"post"}).then(t=>{t&&t.authKey&&(this.thirdPartyAuth.authKey=t.authKey,this.thirdPartyAuth.authSecret=t.authSecret),this.isLoading=!1}).catch(t=>{this.isLoading=!1,formUtil.handleErrors(t)})):(i.dismiss,l.DismissReason.cancel)})}},mounted(){this.getInitialData()}};var u=function(){var t=this,e=t._self._c;return e("base-container",{attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[e("form",{on:{submit:function(a){return a.preventDefault(),t.submit.apply(null,arguments)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-4"},[e("switch-wrapper",{attrs:{label:t.$t("config.auth.reset_password"),description:t.$t("config.auth.reset_password_info")}},[e("base-switch",{model:{value:t.formData.resetPassword,callback:function(a){t.$set(t.formData,"resetPassword",a)},expression:"formData.resetPassword"}})],1)],1),e("div",{staticClass:"col-12 col-md-4"},[e("switch-wrapper",{attrs:{label:t.$t("config.auth.two_factor_security"),description:t.$t("config.auth.two_factor_security_info")}},[e("base-switch",{model:{value:t.formData.twoFactorSecurity,callback:function(a){t.$set(t.formData,"twoFactorSecurity",a)},expression:"formData.twoFactorSecurity"}})],1)],1),e("div",{staticClass:"col-12 col-md-4"},[e("switch-wrapper",{attrs:{label:t.$t("config.auth.lock_screen"),description:t.$t("config.auth.lock_screen_info")}},[e("base-switch",{model:{value:t.formData.lockScreen,callback:function(a){t.$set(t.formData,"lockScreen",a)},expression:"formData.lockScreen"}})],1)],1),e("div",{staticClass:"col-12 col-md-4"},[e("switch-wrapper",{attrs:{label:t.$t("config.auth.login_throttle"),description:t.$t("config.auth.login_throttle_info")}},[e("base-switch",{model:{value:t.formData.loginThrottle,callback:function(a){t.$set(t.formData,"loginThrottle",a)},expression:"formData.loginThrottle"}})],1)],1),e("div",{staticClass:"col-12 col-md-4"},[e("switch-wrapper",{attrs:{label:t.$t("config.auth.social_login"),description:t.$t("config.auth.social_login_info")}},[e("base-switch",{model:{value:t.formData.socialLogin,callback:function(a){t.$set(t.formData,"socialLogin",a)},expression:"formData.socialLogin"}})],1)],1),e("div",{staticClass:"col-12 col-md-4"},[e("switch-wrapper",{attrs:{label:t.$t("config.auth.email_otp_login"),description:t.$t("config.auth.email_otp_login_info")}},[e("base-switch",{model:{value:t.formData.emailOtpLogin,callback:function(a){t.$set(t.formData,"emailOtpLogin",a)},expression:"formData.emailOtpLogin"}})],1)],1),e("div",{staticClass:"col-12 col-md-4"},[e("switch-wrapper",{attrs:{label:t.$t("config.auth.registration"),description:t.$t("config.auth.registration_info")}},[e("base-switch",{model:{value:t.formData.registration,callback:function(a){t.$set(t.formData,"registration",a)},expression:"formData.registration"}})],1)],1),t.formData.registration?[e("div",{staticClass:"col-12 col-md-4"},[e("switch-wrapper",{attrs:{label:t.$t("config.auth.email_verification"),description:t.$t("config.auth.email_verification_info")}},[e("base-switch",{model:{value:t.formData.emailVerification,callback:function(a){t.$set(t.formData,"emailVerification",a)},expression:"formData.emailVerification"}})],1)],1),e("div",{staticClass:"col-12 col-md-4"},[e("switch-wrapper",{attrs:{label:t.$t("config.auth.account_approval"),description:t.$t("config.auth.account_approval_info")}},[e("base-switch",{model:{value:t.formData.accountApproval,callback:function(a){t.$set(t.formData,"accountApproval",a)},expression:"formData.accountApproval"}})],1)],1),e("div",{staticClass:"col-12 col-md-4"},[e("switch-wrapper",{attrs:{label:t.$t("config.auth.registration_terms"),description:t.$t("config.auth.registration_terms_info")}},[e("base-switch",{model:{value:t.formData.registrationTerms,callback:function(a){t.$set(t.formData,"registrationTerms",a)},expression:"formData.registrationTerms"}})],1)],1)]:t._e()],2),e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-select",{attrs:{options:t.preRequisite.guestLayoutDesigns,label:t.$t("config.auth.guest_layout_design"),"allow-empty":!1,simple:"",disabled:t.isLoading},model:{value:t.formData.guestLayoutDesign,callback:function(a){t.$set(t.formData,"guestLayoutDesign",a)},expression:"formData.guestLayoutDesign"}})],1),e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-select",{attrs:{options:t.preRequisite.guestLayoutStyles,label:t.$t("config.auth.guest_layout_style"),"allow-empty":!1,simple:"",disabled:t.isLoading},model:{value:t.formData.guestLayoutStyle,callback:function(a){t.$set(t.formData,"guestLayoutStyle",a)},expression:"formData.guestLayoutStyle"}})],1),e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-input",{attrs:{label:t.$t("config.auth.session_lifetime")+" ("+t.$t("list.general.durations.m")+")",type:"text",error:t.formErrors.sessionLifetime},on:{"update:error":function(a){return t.$set(t.formErrors,"sessionLifetime",a)}},model:{value:t.formData.sessionLifetime,callback:function(a){t.$set(t.formData,"sessionLifetime",a)},expression:"formData.sessionLifetime"}})],1),e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-input",{attrs:{label:t.$t("config.auth.reset_password_token_lifetime")+" ("+t.$t("list.general.durations.m")+")",type:"text",error:t.formErrors.resetPasswordTokenLifetime},on:{"update:error":function(a){return t.$set(t.formErrors,"resetPasswordTokenLifetime",a)}},model:{value:t.formData.resetPasswordTokenLifetime,callback:function(a){t.$set(t.formData,"resetPasswordTokenLifetime",a)},expression:"formData.resetPasswordTokenLifetime"}})],1),e("collapse-transition",[t.formData.lockScreen?e("div",{staticClass:"col-12 col-md-4 mb-4"},[e("base-input",{attrs:{label:t.$t("config.auth.lock_screen_timeout")+" ("+t.$t("list.general.durations.m")+")",type:"text",error:t.formErrors.lockScreenTimeout},on:{"update:error":function(a){return t.$set(t.formErrors,"lockScreenTimeout",a)}},model:{value:t.formData.lockScreenTimeout,callback:function(a){t.$set(t.formData,"lockScreenTimeout",a)},expression:"formData.lockScreenTimeout"}})],1):t._e()]),e("collapse-transition",[t.formData.loginThrottle?e("div",{key:"login_throttle_attempt",staticClass:"col-12 col-md-4 mb-4"},[e("base-input",{attrs:{label:t.$t("config.auth.login_throttle_attempt"),type:"text",error:t.formErrors.loginThrottleAttempt},on:{"update:error":function(a){return t.$set(t.formErrors,"loginThrottleAttempt",a)}},model:{value:t.formData.loginThrottleAttempt,callback:function(a){t.$set(t.formData,"loginThrottleAttempt",a)},expression:"formData.loginThrottleAttempt"}})],1):t._e()]),e("collapse-transition",[t.formData.loginThrottle?e("div",{key:"login_throttle_timeout",staticClass:"col-12 col-md-4 mb-4"},[e("base-input",{attrs:{label:t.$t("config.auth.login_throttle_timeout"),type:"text",error:t.formErrors.loginThrottleTimeout},on:{"update:error":function(a){return t.$set(t.formErrors,"loginThrottleTimeout",a)}},model:{value:t.formData.loginThrottleTimeout,callback:function(a){t.$set(t.formData,"loginThrottleTimeout",a)},expression:"formData.loginThrottleTimeout"}})],1):t._e()]),e("collapse-transition",[t.formData.socialLogin?e("table",{staticClass:"table table-striped"},t._l(t.preRequisite.socialLoginProviders,function(a){return e("tr",{key:a.uuid},[e("td",{staticClass:"va-bottom"},[e("switch-wrapper",{attrs:{label:`${t.$t("config.auth.login_with")} ${a.name}`}},[e("base-switch",{model:{value:t.formData[a.uuid],callback:function(o){t.$set(t.formData,a.uuid,o)},expression:"formData[method.uuid]"}})],1)],1),e("td",[e("base-input",{attrs:{disabled:!t.formData[a.uuid],label:t.$t("config.auth.client_id"),type:"text",error:t.formErrors[`${a.uuid}ClientId`]},on:{"update:error":function(o){return t.$set(t.formErrors,`${a.uuid}ClientId`,o)}},model:{value:t.formData[`${a.uuid}ClientId`],callback:function(o){t.$set(t.formData,`${a.uuid}ClientId`,o)},expression:"formData[`${method.uuid}ClientId`]"}})],1),e("td",[e("base-input",{attrs:{disabled:!t.formData[a.uuid],label:t.$t("config.auth.client_secret"),type:"text",error:t.formErrors[`${a.uuid}ClientSecret`]},on:{"update:error":function(o){return t.$set(t.formErrors,`${a.uuid}ClientSecret`,o)}},model:{value:t.formData[`${a.uuid}ClientSecret`],callback:function(o){t.$set(t.formData,`${a.uuid}ClientSecret`,o)},expression:"formData[`${method.uuid}ClientSecret`]"}})],1)])}),0):t._e()])],1),e("fieldset",{staticClass:"fieldset mt-5 pt-4"},[e("legend",[t._v(" "+t._s(t.$t("config.auth.enable_third_party_auth"))+" "),e("div",{staticClass:"d-inline-flex align-items-center"},[e("base-checkbox",{staticClass:"ml-3 mt-1 mb-1",attrs:{inline:""},model:{value:t.formData.enableThirdPartyAuth,callback:function(a){t.$set(t.formData,"enableThirdPartyAuth",a)},expression:"formData.enableThirdPartyAuth"}},[t._v(" "+t._s(t.$t("general.enabled"))+" ")])],1)]),t.formData.enableThirdPartyAuth?[t.thirdPartyAuth.authKey?e("div",[e("div",{staticClass:"mb-4 text-muted"},[t._v(" "+t._s(t.$t("config.auth.third_party_auth_info"))+" ")]),e("div",{staticClass:"mb-4"},[e("view-single",{attrs:{label:t.$t("config.auth.auth_key"),value:t.thirdPartyAuth.authKey,tag:"h5"}})],1),e("div",{staticClass:"mb-4"},[e("view-single",{attrs:{label:t.$t("config.auth.auth_secret"),value:t.thirdPartyAuth.authSecret,tag:"h5"}})],1)]):e("div",{staticClass:"d-flex justify-content-center align-items-center p-5 p-t-50 p-b-50"},[e("base-button",{attrs:{type:"button",design:"primary"},on:{click:t.generateAuthKeySecret}},[t._v(t._s(t.$t("config.auth.generate")))])],1)]:e("h5",{staticClass:"text-muted"},[t._v(t._s(t.$t("config.auth.third_party_auth_disabled")))])],2),e("div",{staticClass:"text-right mt-5"},[e("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),e("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("general.save")))])],1)])])},m=[],f=n(c,u,m,!1,null,null,null,null);const v=f.exports;export{v as default};
