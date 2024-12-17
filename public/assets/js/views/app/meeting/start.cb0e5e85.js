import{i as a}from"../../../vendor/vendor-core.3574f8d9.js";import{f as n}from"../../../form.90751a24.js";import{n as r}from"../../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../../vendor/vendor-others.c8ba1624.js";import"../../../header.43f859fb.js";import"../../../app.a373aa59.js";import"../../../vendor/vendor-essential.91b5cfa2.js";import"../../../vendor/vendor-bootstrap-vue.17129278.js";import"../../../vendor/vendor-vue-gtag.f8884558.js";import"../../../FileUploader.78ddb8c0.js";import"../../../uploader.da0c2632.js";import"../../../event-bus.6a5776a8.js";import"../../../momentz.ae4aeebe.js";const o={extends:n,data(){return{type:null,identifier:"",maxParticipantCount:1e3,keepAlive:!1,isPam:!1,accessibleToMembers:!1,isPaid:!1,fee:0,showAdvance:!1,preRequisite:{types:[]},initUrl:"meetings"}},computed:{demoImage(){return this.configs.assets&&this.configs.assets.meetingDemoImage?this.configs.assets.meetingDemoImage:"/images/demo-screenshot.jpg"},maxParticipantAllowed(){return this.configs.meeting.maxParticipantCount?this.configs.meeting.maxParticipantCount:999999}},watch:{$route(s,e){this.$route.query.type&&s.query.type!==e.query.type&&this.processQueryParams()}},methods:{...a("config",["SetUiConfig"]),startInstantMeeting(s=null){this.isLoading=!0,s&&(this.type=s);let e=this.preRequisite.types[0];this.type&&(e=this.preRequisite.types.find(t=>t.uuid===this.type)),this.Store({instant:!0,type:e,maxParticipantCount:this.maxParticipantCount,accessibleToMembers:this.accessibleToMembers,identifier:this.identifier,keepAlive:this.keepAlive,isPam:this.isPam,isPaid:this.isPaid,fee:this.fee}).then(t=>{t.meeting&&this.$router.replace({name:"liveMeeting",params:{uuid:t.meeting.uuid}})}).catch(t=>{this.formErrors=formUtil.handleErrors(t),this.isLoading=!1})},isPamChanged(){this.isPam&&(this.accessibleToMembers=!1,this.isPaid=!1,this.fee=0)},accessibleToMembersChanged(){this.accessibleToMembers&&(this.isPam=!1,this.isPaid=!1,this.fee=0)},isPaidChanged(){this.isPaid&&(this.isPam=!1,this.accessibleToMembers=!1)},processQueryParams(){this.$route.params&&this.$route.params.type?this.type=this.$route.params.type:this.$route.query&&this.$route.query.type&&(this.type=this.$route.query.type),this.type&&this.preRequisite.types&&(this.preRequisite.types.find(s=>s.uuid===this.type)||this.preRequisite.types.includes(this.type))&&this.startInstantMeeting()}},mounted(){this.getInitialData(()=>{this.processQueryParams()}),this.$nextTick(()=>{this.SetUiConfig({pageHeaderShow:!1})})},destroyed(){this.SetUiConfig({pageHeaderShow:!0})}};var m=function(){var e=this,t=e._self._c;return t("base-container",{staticClass:"mt-element",attrs:{boxed:""}},[e.type&&e.isLoading?[t("div",{staticClass:"pt-150 pb-150 text-center min-height-70vh"},[t("animated-loader",{attrs:{"is-loading":e.isLoading,"loader-color":e.vars.loaderColor,size:"inline","with-overlay":!1}}),t("br"),t("br"),t("h5",[e._v(e._s(e.$t("meeting.creating_a_meeting")))])],1)]:[t("div",{staticClass:"d-flex align-items-center justify-content-center min-height-70vh"},[t("div",{},[t("fieldset",{staticClass:"fieldset mb-5"},[t("legend",[t("div",{staticClass:"d-inline-flex align-items-center"},[e._v(" "+e._s(e.$t("meeting.optional_advance_configurations"))+" ")])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-md-6 mb-4"},[t("base-input",{attrs:{label:e.$t("meeting.enter_meeting_code"),type:"text",error:e.formErrors.identifier},on:{"update:error":function(i){return e.$set(e.formErrors,"identifier",i)}},model:{value:e.identifier,callback:function(i){e.identifier=i},expression:"identifier"}})],1),t("div",{staticClass:"col-12 col-md-6 mb-4"},[t("base-input",{attrs:{label:e.$t("meeting.config.max_participant_count"),type:"number",error:e.formErrors.maxParticipantCount,min:2,max:e.maxParticipantAllowed,step:1},on:{"update:error":function(i){return e.$set(e.formErrors,"maxParticipantCount",i)}},model:{value:e.maxParticipantCount,callback:function(i){e.maxParticipantCount=i},expression:"maxParticipantCount"}})],1),t("div",{staticClass:"col-12 col-md-6 mb-4"},[t("base-checkbox",{staticClass:"ml-3",model:{value:e.keepAlive,callback:function(i){e.keepAlive=i},expression:"keepAlive"}},[e._v(" "+e._s(e.$t("meeting.keep_meeting_live"))+" ")]),t("p",{staticClass:"text-muted opacity-7 text-sm ml-3 mb-0"},[e._v(e._s(e.$t("meeting.keep_meeting_live_info")))])],1),e.configs.meeting&&e.configs.meeting.enablePam&&!e.accessibleToMembers&&!e.isPaid?t("div",{staticClass:"col-12 col-md-6 mb-4"},[t("base-checkbox",{staticClass:"ml-3",on:{change:e.isPamChanged},model:{value:e.isPam,callback:function(i){e.isPam=i},expression:"isPam"}},[e._v(" "+e._s(e.$t("meeting.props.is_pam"))+" ")]),t("p",{staticClass:"text-muted opacity-7 text-sm ml-3 mb-0"},[e._v(e._s(e.$t("meeting.props.is_pam_info")))])],1):e._e(),e.allowExtraInput&&!e.isPam?[e.isPaid?e._e():t("div",{staticClass:"col-12 col-md-6 mb-4"},[t("base-checkbox",{staticClass:"ml-3",on:{change:e.accessibleToMembersChanged},model:{value:e.accessibleToMembers,callback:function(i){e.accessibleToMembers=i},expression:"accessibleToMembers"}},[e._v(" "+e._s(e.$t("meeting.props.only_accessible_to_members"))+" ")]),t("p",{staticClass:"text-muted opacity-7 text-sm ml-3 mb-0"},[e._v(e._s(e.$t("meeting.props.only_accessible_to_members_info")))])],1),e.configs.meeting.enablePaidMeeting&&!e.accessibleToMembers?[t("div",{staticClass:"col-12 col-md-6 mb-4"},[t("base-checkbox",{staticClass:"ml-3",on:{change:e.isPaidChanged},model:{value:e.isPaid,callback:function(i){e.isPaid=i},expression:"isPaid"}},[e._v(" "+e._s(e.$t("meeting.props.is_paid"))+" ")]),t("p",{staticClass:"text-muted opacity-7 text-sm ml-3 mb-0"},[e._v(e._s(e.$t("meeting.props.is_paid_info")))])],1),e.isPaid?t("div",{staticClass:"col-12 col-md-6 mb-4"},[t("base-input",{attrs:{label:e.$t("meeting.props.fee"),type:"number",error:e.formErrors.fee,min:.01,step:.01,format:"currency"},on:{"update:error":function(i){return e.$set(e.formErrors,"fee",i)}},model:{value:e.fee,callback:function(i){e.fee=i},expression:"fee"}})],1):e._e()]:e._e()]:e._e()],2)]),t("h4",{staticClass:"mb-4 font-weight-bold text-center"},[e._v(e._s(e.$t("meeting.select_meeting_type")))]),t("div",{staticClass:"btn-group btn-group-vertical btn-group-lg",attrs:{role:"group"}},e._l(e.preRequisite.types,function(i){return t("button",{key:i.uuid,staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(p){return e.startInstantMeeting(i.uuid)}}},[e._v(e._s(i.name))])}),0)])])]],2)},l=[],c=r(o,m,l,!1,null,null,null,null);const k=c.exports;export{k as default};
