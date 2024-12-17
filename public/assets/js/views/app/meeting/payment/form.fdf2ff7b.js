import{f as n}from"../../../../form.90751a24.js";import{m as o,i as l}from"../../../../vendor/vendor-core.3574f8d9.js";import{S as d}from"../../../../index.4c16d3b9.js";import{n as u}from"../../../../_plugin-vue2_normalizer.7b9a2fe2.js";import{h as p,i as m,j as c}from"../../../../vendor/vendor-bootstrap-vue.17129278.js";import"../../../../header.43f859fb.js";import"../../../../app.a373aa59.js";import"../../../../vendor/vendor-others.c8ba1624.js";import"../../../../vendor/vendor-essential.91b5cfa2.js";import"../../../../vendor/vendor-vue-gtag.f8884558.js";import"../../../../FileUploader.78ddb8c0.js";import"../../../../uploader.da0c2632.js";import"../../../../event-bus.6a5776a8.js";import"../../../../momentz.ae4aeebe.js";const h={extends:n,components:{StripeElementCard:d,BCard:p,BTabs:m,BTab:c},data(){return{formData:{currency:null,amount:0,payableAmount:0,source:null,token:null,charge:null,userName:"",addressLine1:"",addressLine2:"",city:"",state:"",country:"",zipcode:"",meta:{}},formLabels:{currency:$t("config.system.currency"),amount:$t("meeting.payment.amount"),payableAmount:$t("meeting.payment.payable_amount"),userName:$t("meeting.payment.user_name"),addressLine1:$t("meeting.payment.address_line_1"),addressLine2:$t("meeting.payment.address_line_2"),city:$t("meeting.payment.city"),state:$t("meeting.payment.state"),country:$t("meeting.payment.country"),zipcode:$t("meeting.payment.zipcode")},showPaymentOptions:!0,initialSetupCompleted:!1,paypalConfig:{loaded:!1},paypalButtons:null,paypalButtonsHasRendered:!1,paddleConfig:{loaded:!1},flutterwaveConfig:{loaded:!1},activePGTab:0,loading:!1,initUrl:"meetings",initSubUrl:"payment",preRequisite:{selectedCurrency:null,currencies:[],paymentGateways:[]}}},computed:{...o("common",["entity"]),...o("user",{userUuid:"uuid"}),...o("user",["hasActiveMembership","hasLifetimeMembership","email","name"]),isBusy(){return!!(!this.entity||this.isLoading)},computedCurrency:{get(){return this.formData.currency?this.formData.currency.name:null},set(i){this.formData.currency=this.preRequisite.currencies.find(a=>a.name===i),this.getCalculatedAmount();const e=this.preRequisite.paymentGateways,t=e[this.computedActiveTab];e.length&&(t.name==="paypal"?this.paypalConfig.loaded===!0?this.paypalScriptLoaded():this.loadPaypal():t.name==="paddle"?this.paddleConfig.loaded===!0?this.paddleScriptLoaded():this.loadPaddle():t.name==="flutterwave"&&(this.flutterwaveConfig.loaded===!0?this.flutterwaveScriptLoaded():this.loadFlutterwave()))}},stripeFactor(){return this.computedCurrency&&this.computedCurrency.stripeFactor?this.computedCurrency.stripeFactor:100},computedPricingForPaddle(){return[this.computedCurrency?`${this.computedCurrency}:${this.payableAmount}`:`USD:${this.payableAmount}`]},stripeConfig(){return this.preRequisite&&this.preRequisite.paymentGateways.length?this.preRequisite.paymentGateways[0]:{}},stripeStyle(){return{empty:{"::placeholder":{color:"#adb5c0"},":focus":{"::placeholder":{color:"#ced4dd"}}}}},payableAmount(){return this.formData.amount},computedActiveTab:{get(){return this.activePGTab===-1?0:this.activePGTab},set(i){if(this.activePGTab=i===-1?0:i,i!==-1){const e=this.preRequisite.paymentGateways,t=e[i];e.length&&t.name==="paypal"?this.paypalConfig.loaded===!1?this.loadPaypal():this.paypalScriptLoaded():(this.paypalConfig.loaded&&this.paypalButtons&&this.paypalButtons.close&&(this.paypalButtons.close(),this.paypalButtonsHasRendered=!1),e.length&&(t.name==="paddle"?this.paddleConfig.loaded===!1?this.loadPaddle():this.paddleScriptLoaded():t.name==="flutterwave"&&(this.flutterwaveConfig.loaded===!1?this.loadFlutterwave():this.flutterwaveScriptLoaded())))}}},computedActiveTabName(){return this.preRequisite&&this.preRequisite.paymentGateways&&this.preRequisite.paymentGateways[this.computedActiveTab]?this.preRequisite.paymentGateways[this.computedActiveTab].name:null}},methods:{...l("user",["GetUser"]),getCalculatedAmount(i){!this.initialSetupCompleted||(this.isLoading=!0,this.formData.method=this.preRequisite&&this.preRequisite.paymentGateways&&this.preRequisite.paymentGateways.length?this.preRequisite.paymentGateways[this.computedActiveTab].name:null,this.Custom({url:`/${this.initUrl}/${this.entity.uuid}/payment/calculate`,method:"post",data:this.formData}).then(e=>{this.formData.amount=e.amount||0,this.formData.paddleUrl=e.paddleUrl,this.isLoading=!1,i&&_.isFunction(i)?i():this.preRequisite&&this.preRequisite.paymentGateways.length&&(this.preRequisite.paymentGateways[this.computedActiveTab].name==="paddle"?this.paddleConfig.loaded===!0?this.paddleScriptLoaded():this.loadPaddle():this.preRequisite.paymentGateways[this.computedActiveTab].name==="flutterwave"&&(this.flutterwaveConfig.loaded===!0?this.flutterwaveScriptLoaded():this.loadFlutterwave()))}).catch(e=>{this.isLoading=!1,formUtil.handleErrors(e)}))},updateMeeting(){this.isLoading=!0,this.Custom({url:`/${this.initUrl}/${this.entity.uuid}/payment`,method:"post",data:this.formData}).then(i=>{this.$toasted.success(i.message,this.$toastConfig),this.$route.query&&this.$route.query.hasOwnProperty("join")?this.$router.push({name:"liveMeeting",params:{uuid:this.entity.uuid}}):this.$router.push({name:"appMeetingPaymentReceipt",params:{uuid:this.entity.uuid}})}).catch(i=>{this.isLoading=!1,formUtil.handleErrors(i)})},proceed(){this.formData.amount?(this.isLoading=!0,this.$refs&&this.preRequisite.paymentGateways.length?this.$refs.stripeRef&&this.preRequisite.paymentGateways[this.computedActiveTab].name==="stripe"?this.$refs.stripeRef[0].submit():this.$refs.flutterwaveRef&&this.preRequisite.paymentGateways[this.computedActiveTab].name==="flutterwave"?this.payWithFlutterwave():this.isLoading=!1:this.isLoading=!1):this.updateMeeting()},stripeTokenCreated(i){this.formData.token=i,this.formData.method=this.preRequisite.paymentGateways.length&&this.preRequisite.paymentGateways[this.computedActiveTab].name,this.formData.charge={source:i.id,amount:this.payableAmount*this.stripeFactor},this.formData.payableAmount=this.formData.charge.amount,this.updateMeeting()},paypalScriptLoaded(){this.loading=!0,this.isLoading=!0,this.paypalButtons&&this.paypalButtons.close&&this.paypalButtonsHasRendered&&(this.paypalButtons.close(),this.paypalButtonsHasRendered=!1),this.paypalButtons=window.paypal.Buttons({createOrder:(i,e)=>{this.isLoading=!0;const t={purchase_units:[{description:`${window.kmenv.name} - ${this.computedFrequency.name} ${$t("meeting.meeting")}`,amount:{currency_code:this.computedCurrency,value:this.payableAmount}}]};return e.order.create(t)},onApprove:async(i,e)=>{const t=await e.order.capture();this.formData.token=t,this.formData.method=this.preRequisite.paymentGateways.length?this.preRequisite.paymentGateways[this.computedActiveTab].name:null,this.formData.charge={source:t.id,amount:this.payableAmount},this.formData.payableAmount=this.formData.charge.amount,this.isLoading=!1,this.updateMeeting()},onError:i=>{this.isLoading=!1,this.$toasted.error(this.$t("meeting.paypal_create_order_error"),this.$toastConfig.error)}}),this.paypalButtons.render(this.$refs.paypalRef[0]).then(()=>{this.paypalButtonsHasRendered=!0}).catch(i=>{let e=this.$refs.paypalRef[0];if(e&&e.children.length>0)throw new Error(i);this.$toasted.info($t("general.kindly_reload_page"),this.$toastConfig.info)}),this.paypalConfig.loaded=!0,this.loading=!1,this.isLoading=!1},paddleScriptLoaded(){Paddle&&(this.paddleConfig.mode||Paddle.Environment.set("sandbox"),Paddle.Setup({vendor:this.paddleConfig.key}),this.getCalculatedAmount(()=>{Paddle.Checkout.open({method:"inline",email:this.email,country:this.formData.country,postcode:this.formData.zipcode,allowQuantity:!1,disableLogout:!0,frameTarget:"paddle-container",frameInitialHeight:416,frameStyle:"width:100%; min-width:312px; background-color: transparent; border: none;",override:this.formData.paddleUrl,successCallback:i=>{this.formData.token=i.checkout,this.formData.method=this.preRequisite.paymentGateways.length&&this.preRequisite.paymentGateways[this.computedActiveTab].name,this.formData.charge={source:i.checkout.id,amount:this.payableAmount},this.formData.payableAmount=this.formData.charge.amount,this.updateMeeting()}}),this.paddleConfig.loaded=!0}))},flutterwaveScriptLoaded(){this.isLoading=!1,FlutterwaveCheckout&&(this.flutterwaveConfig.loaded=!0)},payWithFlutterwave(){if(FlutterwaveCheckout){const i=this;this.getCalculatedAmount(()=>{var t,a,r;const e=FlutterwaveCheckout({public_key:this.flutterwaveConfig.key,tx_ref:`${$t("meeting.meeting")}-${this.generateReference()}`,amount:this.payableAmount,currency:this.computedCurrency,payment_options:"card, account, mpesa, mobilemoneyghana, ussd, credit",meta:{meeting_uuid:this.entity.uuid,user_uuid:this.userUuid},customer:{email:this.email,name:this.formData.userName},customizations:{title:(t=this.configs.basic)==null?void 0:t.appName,logo:location.origin+((a=this.configs.assets)==null?void 0:a.icon),description:(r=this.configs.basic)==null?void 0:r.desc},callback(s){i.formData.token=s.tx_ref,Object.assign(i.formData.meta,s),i.formData.method=i.preRequisite.paymentGateways.length&&i.preRequisite.paymentGateways[i.computedActiveTab].name,i.formData.charge={source:s.transaction_id,amount:i.payableAmount},i.formData.payableAmount=i.formData.charge.amount,i.updateMeeting(),e.close()},onclose(s){s===!0&&(this.isLoading=!1)}})})}},generateReference(){return new Date().getTime().toString()},loadJsFile(i,e,t){const a=document.createElement("script");a.src=i,a.addEventListener("load",e),t?t.appendChild(a):document.body.appendChild(a)},loadPaypal(){this.loadJsFile("https://www.paypal.com/sdk/js?client-id="+this.paypalConfig.key+"&currency="+this.computedCurrency,this.paypalScriptLoaded)},loadPaddle(){this.loadJsFile("https://cdn.paddle.com/paddle/paddle.js",this.paddleScriptLoaded)},loadFlutterwave(){this.loadJsFile("https://checkout.flutterwave.com/v3.js",this.flutterwaveScriptLoaded)},getPreRequisite(i){this.isLoading=!0,this.entity||setTimeout(()=>{this.getPreRequisite(i)},500),this.Custom({url:`/${this.initUrl}/${this.entity.uuid}/payment/pre-requisite`,method:"get"}).then(e=>(this.fillPreRequisite(e),i(e),this.isLoading=!1,e)).catch(e=>{this.isLoading=!1,formUtil.handleErrors(e)})},initialSetup(){if(this.formData.currency=this.configs.system.currency,this.formData.userName=this.name,this.preRequisite){if(this.formData.currency=this.preRequisite.selectedCurrency?this.preRequisite.selectedCurrency:this.preRequisite.currencies?this.preRequisite.currencies[0]:null,this.preRequisite.paymentGateways.length){const i=this.preRequisite.paymentGateways.find(a=>a.name==="paypal");i&&(Object.assign(this.paypalConfig,i),this.paypalConfig.loaded=!1,this.preRequisite.paymentGateways[this.computedActiveTab].name==="paypal"&&this.loadPaypal());const e=this.preRequisite.paymentGateways.find(a=>a.name==="paddle");e&&(Object.assign(this.paddleConfig,e),this.paddleConfig.loaded=!1,this.preRequisite.paymentGateways[this.computedActiveTab].name==="paddle"&&this.loadPaddle());const t=this.preRequisite.paymentGateways.find(a=>a.name==="flutterwave");t&&(Object.assign(this.flutterwaveConfig,t),this.flutterwaveConfig.loaded=!1,this.preRequisite.paymentGateways[this.computedActiveTab].name==="flutterwave"&&this.loadFlutterwave())}this.initialSetupCompleted=!0,window.setTimeout(()=>{this.getCalculatedAmount()},1e3)}else this.initialSetupCompleted=!0}},mounted(){this.getPreRequisite(this.initialSetup)}};var f=function(){var e=this,t=e._self._c;return t("base-container",{attrs:{boxed:"","min-height":"full","has-form":"","has-footer":""}},[t("form",{on:{submit:function(a){return a.preventDefault(),e.proceed.apply(null,arguments)}}},[t("animated-loader",{attrs:{"is-loading":e.isBusy,"loader-color":e.vars.loaderColor}}),e.entity?[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-md-6 mb-4"},[t("label",{staticClass:"d-block text-muted"},[e._v(e._s(e.formLabels.currency))]),t("div",[e._v(" "+e._s(e.computedCurrency)+" ")])]),t("div",{staticClass:"col-12 col-md-6 mb-4"},[t("view-currency",{staticClass:"text-right",attrs:{label:e.formLabels.payableAmount,value:e.payableAmount,currency:e.formData.currency,tag:"h2","data-classes":"text-success font-weight-600 text-right"}})],1)]),t("h5",{staticClass:"mb-2 mt-1 pb-2 border-bottom"},[e._v(e._s(e.$t("meeting.props.billing_address")))]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("base-input",{attrs:{label:e.formLabels.userName,type:"text",error:e.formErrors.userName},on:{"update:error":function(a){return e.$set(e.formErrors,"userName",a)}},model:{value:e.formData.userName,callback:function(a){e.$set(e.formData,"userName",a)},expression:"formData.userName"}})],1),t("div",{staticClass:"col-12 col-md-4"},[t("base-input",{attrs:{label:e.formLabels.addressLine1,type:"text",error:e.formErrors.addressLine1},on:{"update:error":function(a){return e.$set(e.formErrors,"addressLine1",a)}},model:{value:e.formData.addressLine1,callback:function(a){e.$set(e.formData,"addressLine1",a)},expression:"formData.addressLine1"}})],1),t("div",{staticClass:"col-12 col-md-4"},[t("base-input",{attrs:{label:e.formLabels.addressLine2,type:"text",error:e.formErrors.addressLine2},on:{"update:error":function(a){return e.$set(e.formErrors,"addressLine2",a)}},model:{value:e.formData.addressLine2,callback:function(a){e.$set(e.formData,"addressLine2",a)},expression:"formData.addressLine2"}})],1),t("div",{staticClass:"col-12 col-md-4"},[t("base-input",{attrs:{label:e.formLabels.city,type:"text",error:e.formErrors.city},on:{"update:error":function(a){return e.$set(e.formErrors,"city",a)}},model:{value:e.formData.city,callback:function(a){e.$set(e.formData,"city",a)},expression:"formData.city"}})],1),t("div",{staticClass:"col-12 col-md-4"},[t("base-input",{attrs:{label:e.formLabels.state,type:"text",error:e.formErrors.state},on:{"update:error":function(a){return e.$set(e.formErrors,"state",a)}},model:{value:e.formData.state,callback:function(a){e.$set(e.formData,"state",a)},expression:"formData.state"}})],1),t("div",{staticClass:"col-12 col-md-4"},[t("base-input",{attrs:{label:e.formLabels.country,type:"text",error:e.formErrors.country},on:{"update:error":function(a){return e.$set(e.formErrors,"country",a)}},model:{value:e.formData.country,callback:function(a){e.$set(e.formData,"country",a)},expression:"formData.country"}})],1),t("div",{staticClass:"col-12 col-md-4"},[t("base-input",{attrs:{label:e.formLabels.zipcode,type:"text",error:e.formErrors.zipcode},on:{"update:error":function(a){return e.$set(e.formErrors,"zipcode",a)}},model:{value:e.formData.zipcode,callback:function(a){e.$set(e.formData,"zipcode",a)},expression:"formData.zipcode"}})],1)]),t("br"),e.showPaymentOptions?t("div",[t("b-card",{attrs:{"no-body":""}},[t("b-tabs",{attrs:{pills:"",card:"",vertical:"",lazy:"","active-nav-item-class":"font-weight-bold py-2","nav-wrapper-class":"col-12 col-md-4 col-lg-3 border-right"},model:{value:e.computedActiveTab,callback:function(a){e.computedActiveTab=a},expression:"computedActiveTab"}},e._l(e.preRequisite.paymentGateways,function(a){return t("b-tab",{key:a.name,attrs:{title:a.label,"title-item-class":"p-0"}},[a.name==="stripe"?t("stripe-element-card",{ref:"stripeRef",refInFor:!0,attrs:{pk:e.stripeConfig.key,amount:e.payableAmount*e.stripeFactor,locale:e.configs.system.locale,"style-object":e.stripeStyle},on:{token:e.stripeTokenCreated,loading:function(r){e.loading=r}}}):e._e(),a.name==="paypal"?t("div",{ref:"paypalRef",refInFor:!0},[t("animated-loader",{attrs:{"is-loading":!e.paypalConfig.loaded&&!e.isBusy,"loader-color":e.vars.loaderColor}})],1):e._e(),a.name==="paddle"?t("div",{staticClass:"paddle-container"},[t("animated-loader",{attrs:{"is-loading":!e.paddleConfig.loaded&&!e.isBusy,"loader-color":e.vars.loaderColor}})],1):e._e(),a.name==="flutterwave"?t("div",{ref:"flutterwaveRef",refInFor:!0,staticClass:"flutterwave-container"},[t("animated-loader",{attrs:{"is-loading":!e.flutterwaveConfig.loaded&&!e.isBusy,"loader-color":e.vars.loaderColor}}),t("h4",{staticClass:"text-muted text-center py-4 my-4"},[e._v(e._s(e.$t("global.click_on",{attribute:e.$t("general.proceed")})))])],1):e._e()],1)}),1)],1)],1):e._e()]:e._e(),t("div",{staticClass:"form-footer mt-3"},[t("div",{staticClass:"left-side"},[t("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(a){return e.$router.back()}}},[t("i",{staticClass:"fas fa-chevron-left"}),e._v(" "+e._s(e.$t("general.cancel")))])],1),t("div",{staticClass:"right-side"},[e.payableAmount&&(e.computedActiveTabName==="stripe"||e.computedActiveTabName==="flutterwave")?t("base-button",{attrs:{type:"submit",design:"primary"}},[e._v(e._s(e.$t("general.proceed"))+" "),t("i",{staticClass:"fas fa-chevron-right"})]):e._e()],1)])],2)])},y=[],g=u(h,f,y,!1,null,null,null,null);const P=g.exports;export{P as default};