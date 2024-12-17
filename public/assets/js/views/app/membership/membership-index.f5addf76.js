import{f as s}from"../../../form.90751a24.js";import{m as a,i as r}from"../../../vendor/vendor-core.3574f8d9.js";import{n as o}from"../../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../../header.43f859fb.js";import"../../../app.a373aa59.js";import"../../../vendor/vendor-others.c8ba1624.js";import"../../../vendor/vendor-essential.91b5cfa2.js";import"../../../vendor/vendor-bootstrap-vue.17129278.js";import"../../../vendor/vendor-vue-gtag.f8884558.js";import"../../../FileUploader.78ddb8c0.js";import"../../../uploader.da0c2632.js";import"../../../event-bus.6a5776a8.js";import"../../../momentz.ae4aeebe.js";const n={extends:s,data(){return{initUrl:"membership",hideFilterButton:!0}},computed:{...a("common",["entity"]),...a("user",["profile","username","email"])},watch:{$route(){this.$route.query.hasOwnProperty("reload")&&(this.isLoading=!0,this.ResetEntity(),this.getInitialData())}},methods:{...r("common",["ResetEntity","SetEntity"]),afterGetInitialData(i){this.SetEntity(i)}},mounted(){this.ResetEntity(),this.getInitialData()}};var l=function(){var e=this,t=e._self._c;return t("div",[e.hasRole("admin")?e._e():t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-md-4"},[t("base-container",{attrs:{boxed:"","with-loader":"","min-height":"full","is-loading":e.isLoading,"loader-color":e.vars.loaderColor,id:"printable"}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 mb-3"},[t("view-single",{attrs:{label:e.$t("user.props.name"),value:e.profile.name,tag:"h5","data-classes":"font-weight-600"}})],1),t("div",{staticClass:"col-12 mb-3"},[t("view-single",{attrs:{label:e.$t("user.props.email"),value:e.email}})],1),t("div",{staticClass:"col-12 mb-3"},[t("view-single",{attrs:{label:e.$t("user.props.username"),value:e.username}})],1)])])],1),t("div",{staticClass:"col-12 col-md-8"},[t("transition-page",[t("router-view",{attrs:{name:"plan"}})],1)],1)]),e.entity&&(!e.entity.newMembership||e.hasRole("admin"))?t("div",{class:{"mt-element":!e.hasRole("admin")}},[t("transition-page",[t("router-view",{attrs:{name:"history"}})],1)],1):e._e()])},m=[],d=o(n,l,m,!1,null,null,null,null);const x=d.exports;export{x as default};