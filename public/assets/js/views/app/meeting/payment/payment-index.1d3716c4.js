import{v as s}from"../../../../view.a2d30644.js";import{i as a}from"../../../../vendor/vendor-core.3574f8d9.js";import{n as l}from"../../../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../../../header.43f859fb.js";import"../../../../app.a373aa59.js";import"../../../../vendor/vendor-others.c8ba1624.js";import"../../../../vendor/vendor-essential.91b5cfa2.js";import"../../../../vendor/vendor-bootstrap-vue.17129278.js";import"../../../../vendor/vendor-vue-gtag.f8884558.js";import"../../../../helpers/transformers.20070e00.js";import"../../../../event-bus.6a5776a8.js";const r={extends:s,data(){return{initUrl:"meetings",fallBackRoute:"appMeetingList",hideFilterButton:!0}},watch:{$route(){this.$route.query.hasOwnProperty("reload")&&(this.isLoading=!0,this.ResetEntity(),this.getInitialData())}},methods:{...a("common",["ResetEntity","SetEntity"]),afterGetInitialData(i){i.status==="cancelled"?this.$toasted.error(this.$t("meeting.meeting_cancelled"),this.$toastConfig.error):i.status==="ended"&&this.$toasted.error(this.$t("meeting.meeting_ended"),this.$toastConfig.error),i&&(i.status==="scheduled"||i.status==="live")&&i.isPaid&&!i.hasPaid||this.$router.push({name:"appMeetingView",params:{uuid:i.uuid}}),this.SetEntity(i)}},mounted(){}};var n=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-4"},[e("base-container",{attrs:{boxed:"","with-loader":"","min-height":"full","is-loading":t.isLoading,"loader-color":t.vars.loaderColor,id:"printable"}},[t.entity?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.props.title"),value:t.entity.title,tag:"h5","data-classes":"font-weight-600"}})],1),e("div",{staticClass:"col-12 col-lg-6 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.props.type")},scopedSlots:t._u([{key:"main",fn:function(){return[t.entity.type?e("badge",{staticClass:"mb-0",attrs:{type:"default"}},[t._v(t._s(t.entity.type.name))]):t._e()]},proxy:!0}],null,!1,380638162)})],1),e("div",{staticClass:"col-12 col-lg-6 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.meeting_category.category")},scopedSlots:t._u([{key:"main",fn:function(){return[t.entity.category?e("badge",{staticClass:"mb-0",attrs:{type:"dark"}},[t._v(t._s(t.entity.category.name))]):t._e()]},proxy:!0}],null,!1,52913093)})],1),e("div",{staticClass:"col-12 col-lg-6 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.props.status")},scopedSlots:t._u([{key:"main",fn:function(){return[e("badge",{attrs:{rounded:"",type:t.vars.colorsForStatus["meeting-"+t.entity.status]}},[t._v(t._s(t.entity.status))])]},proxy:!0}],null,!1,582220808)})],1),e("div",{staticClass:"col-12 col-lg-6 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.props.is_paid")},scopedSlots:t._u([{key:"main",fn:function(){return[t.entity.isPaid?e("badge",{attrs:{rounded:"",type:"success"}},[e("i",{staticClass:"far fa-check-circle"}),t._v(" "+t._s(t.$t("general.yes")))]):e("badge",{attrs:{rounded:"",type:"dark"}},[e("i",{staticClass:"far fa-circle"}),t._v(" "+t._s(t.$t("general.no")))])]},proxy:!0}],null,!1,139926035)})],1),e("div",{staticClass:"col-12 col-lg-6 mb-3"},[e("view-currency",{attrs:{label:t.$t("meeting.props.fee"),value:t.entity.fee}})],1),e("div",{staticClass:"col-12 col-md-6 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.props.identifier"),value:t.entity.identifier}})],1),e("div",{staticClass:"col-12 col-md-6 mb-3"},[e("view-single",{attrs:{label:t.$t("meeting.props.estimated_period"),value:t.entity.period,suffix:t.$t("list.general.durations.minutes")}})],1),e("div",{staticClass:"col-12 mb-3"},[e("view-date",{attrs:{label:t.$t("meeting.props.start_date_time"),value:t.entity.startDateTime,"with-tz":""}})],1)]):t._e()])],1),e("div",{staticClass:"col-12 col-md-8"},[e("transition-page",[e("router-view",{attrs:{name:"form"}})],1)],1)])])},o=[],c=l(r,n,o,!1,null,null,null,null);const C=c.exports;export{C as default};
