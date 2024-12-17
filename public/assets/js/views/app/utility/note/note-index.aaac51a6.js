import{t as l}from"../../../../table.beb39f38.js";import{f as o}from"../../../../filter-form.45f778d7.js";import{n as i}from"../../../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../../../app.a373aa59.js";import"../../../../vendor/vendor-core.3574f8d9.js";import"../../../../vendor/vendor-others.c8ba1624.js";import"../../../../vendor/vendor-essential.91b5cfa2.js";import"../../../../vendor/vendor-bootstrap-vue.17129278.js";import"../../../../vendor/vendor-vue-gtag.f8884558.js";import"../../../../header.43f859fb.js";import"../../../../event-bus.6a5776a8.js";const n={extends:o,mounted(){this.filters.status=this.filters.status===!0||this.filters.status==="true"}};var d=function(){var t=this,e=t._self._c;return e("filter-wrapper",{attrs:{boxed:t.boxed,"is-loading":t.isLoading},on:{close:function(s){return t.$emit("close")}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-4 mb-3"},[e("base-input",{attrs:{"auto-focus":"",label:t.$t("utility.note.props.title"),type:"text",disabled:t.isLoading},model:{value:t.filters.title,callback:function(s){t.$set(t.filters,"title",s)},expression:"filters.title"}})],1),e("div",{staticClass:"col-12 col-md-4 mb-3"},[e("base-input",{attrs:{label:t.$t("utility.note.props.code"),type:"text",disabled:t.isLoading},model:{value:t.filters.code,callback:function(s){t.$set(t.filters,"code",s)},expression:"filters.code"}})],1),e("div",{staticClass:"col-12 col-md-4 mb-3 d-flex justify-content-start align-items-end"},[e("base-checkbox",{staticClass:"ml-3 mb-3",model:{value:t.filters.status,callback:function(s){t.$set(t.filters,"status",s)},expression:"filters.status"}},[t._v(" "+t._s(t.$t("utility.note.props.is_published"))+" ")])],1)])])},u=[],c=i(n,d,u,!1,null,null,null,null);const p=c.exports,m={components:{FilterForm:p},extends:l,data(){return{fields:[{key:"title",label:$t("utility.note.props.title"),sort:"title"},{key:"uploads",label:$t("upload.attachments"),cantExport:!0},{key:"createdAt",label:$t("general.created_at"),sort:"created_at",transformer:"date"},{key:"visibility",label:$t("utility.note.props.visibility"),sort:"visibility"},{key:"status",label:$t("utility.note.props.status"),sort:"status",transformer:"badgeStatusYesNo"},{key:"user",label:$t("user.user"),transformer:"user"},{key:"updatedAt",label:$t("general.updated_at"),sort:"updated_at",transformer:"date",thClass:"d-none",tdClass:"d-none"},{key:"actions",label:"",cantHide:!0,tdClass:"actions-dropdown-wrapper"}],filtersOptions:{title:"",code:"",status:""},permissionsRequired:{add:"manage-note",config:"manage-note-config"},routesRequired:{add:"appUtilityNoteAdd",config:"appUtilityNoteConfig"},initUrl:"utility/notes",dataType:"note"}},mounted(){this.updatePageMeta()}};var f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"entity-list-container"},[e("collapse-transition",{attrs:{group:!0,duration:300,tag:"div"}},[t.showFilters?e("filter-form",{key:"filters",attrs:{boxed:!0,"pre-requisite":t.preRequisite,"is-loading":t.isLoading},on:{close:t.toggleFilter}}):t._e(),e("base-container",{key:"list",staticClass:"p-0",attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[t.isInitialized?e("table-wrapper",{attrs:{meta:t.entities.meta,filtered:t.isFiltered,"add-button-route":"appUtilityNoteAdd","add-button-permissions":["manage-note"],"entity-title":"utility.note.note","entities-title":"utility.note.notes","entity-description":"utility.note.module_description"}},[e("b-table",{directives:[{name:"show",rawName:"v-show",value:t.entities.meta.total,expression:"entities.meta.total"}],ref:"btable",attrs:{items:t.itemsProvider,fields:t.fields,busy:t.isLoading,hover:"",striped:"",stacked:"sm","per-page":t.entities.meta.perPage,"current-page":t.entities.meta.currentPage,filters:null},on:{"update:busy":function(s){t.isLoading=s}},scopedSlots:t._u([{key:"cell(createdAt)",fn:function(s){return[e("view-date",{staticClass:"mb-0",attrs:{value:s.item.createdAt,"to-format":t.vars.defaultDateTimeFormat,tag:"span"}})]}},{key:"cell(uploads)",fn:function(s){return[e("badge",{attrs:{rounded:"",type:"primary"}},[e("i",{staticClass:"fas fa-paperclip"}),t._v(" "+t._s(s.item.uploads.length))])]}},{key:"cell(status)",fn:function(s){return[s.item.status?e("badge",{attrs:{rounded:"",type:"primary"}},[e("i",{staticClass:"far fa-check-circle"}),t._v(" "+t._s(t.$t("general.yes")))]):e("badge",{attrs:{rounded:"",type:"dark"}},[e("i",{staticClass:"far fa-circle"}),t._v(" "+t._s(t.$t("general.no")))])]}},{key:"cell(user)",fn:function(s){return[e("view-user",{staticClass:"m-0",attrs:{value:s.item.user,"show-sub":!1,"inline-sub":"","show-image":!1,"data-classes":"m-0"}})]}},{key:"cell(actions)",fn:function(s){return[e("table-row-actions",[e("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appUtilityNoteView",params:{uuid:s.item.uuid}}}},[e("i",{staticClass:"fas fa-arrow-circle-right"}),t._v(" "+t._s(t.$t("global.view",{attribute:t.$t("utility.note.note")})))]),e("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appUtilityNoteEdit",params:{uuid:s.item.uuid}}}},[e("i",{staticClass:"fas fa-edit"}),t._v(" "+t._s(t.$t("global.edit",{attribute:t.$t("utility.note.note")})))]),e("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appUtilityNoteDuplicate",params:{uuid:s.item.uuid}}}},[e("i",{staticClass:"fas fa-copy"}),t._v(" "+t._s(t.$t("global.duplicate",{attribute:t.$t("utility.note.note")})))]),e("a",{staticClass:"dropdown-item",on:{click:function(r){return r.stopPropagation(),t.deleteEntity(s.item)}}},[e("i",{staticClass:"fas fa-trash"}),t._v(" "+t._s(t.$t("global.delete",{attribute:t.$t("utility.note.note")})))])],1)]}}],null,!1,3631460111)})],1):t._e()],1)],1)],1)},b=[],y=i(m,f,b,!1,null,null,null,null);const L=y.exports;export{L as default};
