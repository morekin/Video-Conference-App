import{g as o}from"../../../meeting-configs.8da2e942.js";import{f as r}from"../../../form.90751a24.js";import{E as a}from"../../../event-bus.6a5776a8.js";import{E as s}from"../../../edit-config.6bf5b017.js";import{n as m}from"../../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../../header.43f859fb.js";import"../../../app.a373aa59.js";import"../../../vendor/vendor-core.3574f8d9.js";import"../../../vendor/vendor-others.c8ba1624.js";import"../../../vendor/vendor-essential.91b5cfa2.js";import"../../../vendor/vendor-bootstrap-vue.17129278.js";import"../../../vendor/vendor-vue-gtag.f8884558.js";import"../../../FileUploader.78ddb8c0.js";import"../../../uploader.da0c2632.js";import"../../../momentz.ae4aeebe.js";const g={extends:r,components:{EditConfig:s},data(){return{formData:o(),preRequisite:{rtcLibraries:[{uuid:"rtcmc",label:"RTCMC"}],visibilityOptions:[{uuid:"everyone",label:$t("meeting.config.everyone")},{uuid:"meeting_group_and_participants",label:$t("meeting.config.meeting_group_and_participants")},{uuid:"meeting_group",label:$t("meeting.config.meeting_group")}]},initUrl:"meetings",initSubUrl:"config",meeting:null}},methods:{getMeeting(){this.isLoading=!0,this.doInit(),this.Get(this.subUuid).then(e=>{this.doInitSub(),this.meeting=e,e.config&&this.formData.objForEach((t,i)=>{this.formData[i]=e.config.hasOwnProperty(i)?e.config[i]:this.formData[i]}),this.initialFormData=_.cloneDeep(this.formData),this.isLoading=!1}).catch(e=>{this.isLoading=!1,formUtil.handleErrors(e)})},changeMeetingConfigsFormData(e={}){Object.assign(this.formData,e)},beforeSubmit(){return!(this.formData.autoUploadRecording&&this.formData.autoUploadRecorded)}},mounted(){this.getMeeting()},beforeRouteLeave(e,t,i){a.$emit("ROUTE_LEAVING",i)}};var l=function(){var t=this,i=t._self._c;return i("base-container",{attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor,id:"printable"}},[i("form",{on:{submit:function(n){return n.preventDefault(),t.submit.apply(null,arguments)}}},[i("edit-config",{attrs:{configs:t.configs,meeting:t.meeting,"meeting-config":t.formData,formErrors:t.formErrors,preRequisite:t.preRequisite},on:{changed:t.changeMeetingConfigsFormData}}),i("div",{staticClass:"form-footer mt-5"},[i("div",{staticClass:"left-side"},[i("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(n){return t.$router.back()}}},[i("i",{staticClass:"fas fa-chevron-left"}),t._v(" "+t._s(t.$t("general.cancel")))]),t.meeting?i("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(n){return t.$router.push({name:"appMeetingView",params:{uuid:t.meeting.uuid}})}}},[i("i",{staticClass:"fas fa-arrow-circle-right"}),t._v(" "+t._s(t.$t("global.view",{attribute:t.$t("meeting.meeting")})))]):t._e()],1),i("div",{staticClass:"right-side"},[i("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),i("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("global.save",{attribute:t.$t("config.config")})))])],1)])],1)])},u=[],f=m(g,l,u,!1,null,null,null,null);const x=f.exports;export{x as default};