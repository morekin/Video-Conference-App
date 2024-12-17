import"./app.a373aa59.js";const l=function({label:t,icon:n,tooltip:e,design:o={color:"white",size:"md"}}){return{label:t,icon:n,tooltip:e,design:o&&o.color||"white",size:o&&o.size||"md"}},m=function(t,n,e,o=null,r=null,i={},s={}){return{...l({label:t,icon:n,tooltip:o,design:r}),action:function(f){f.push({name:e,params:i,query:s})}}},c=function(t,n,e,o,r=null,i=null,s={},f={}){return{...m(t,n,e,r,i,s,f),permissions:[o]}},g=function(t,n,e,o=null,r=null){return{...l({label:t,icon:n,tooltip:o,design:r}),action:e}},v=function(t,n,e,o=null,r=null){return g(t,n,(i,s)=>{s.$emit(e.event,e.options)},o,r)},O=function(t,n){return c($t("general.add_new"),"fas fa-plus",t,n)},R=function(t,n){return c($t("general.edit"),"fas fa-edit",t,n)},$=function(){return v("","fas fa-filter",{event:"TOGGLE_FILTER"},$t("general.filter"))},T=function(t,n){return c("","fas fa-cog",t,n,$t("general.config"))},h={storeName:"common",design:"white"},x=function(t={},n=[]){return{...h,...t,options:[{label:$t("general.default"),dispatch:{sortBy:""}},...n]}},p=function({label:t,icon:n}){return{label:t,icon:n}},y=function(t,n,e,o={},r={}){return{...p({label:t,icon:n}),to:{name:e,params:o,query:r}}},d=function(t,n,e,o,r={},i={}){return{...y(t,n,e,r,i),permissions:[o]}},_=function(t,n,e){return{...p({label:t,icon:n}),action:e}},a=function(t,n,e){return _(t,n,(o,r)=>{r.$emit(e.event,e.options)})},B=function(t,n){return d($t("general.import"),"fas fa-file-import",t,n)},k=function(t,n){return d($t("general.config"),"fas fa-cog",t,n)},L=function(){return a($t("general.save_draft"),"fas fa-file-upload",{event:"SAVE_DRAFT"})},A=function(){return a($t("general.fetch_saved_draft"),"fas fa-file-download",{event:"FETCH_SAVED_DRAFT"})},P=function(){return a($t("general.clear_saved_draft"),"far fa-minus-square",{event:"CLEAR_SAVED_DRAFT"})},D=function(){return a($t("general.print"),"fas fa-print",{event:"EXPORT",options:{type:"print"}})},S=function(){return a($t("general.export_pdf"),"fas fa-file-pdf",{event:"EXPORT",options:{type:"pdf"}})},X=function(){return a($t("general.export_xls"),"fas fa-file-excel",{event:"EXPORT",options:{type:"xls"}})},w=function(){return a($t("general.export_csv"),"fas fa-file-csv",{event:"EXPORT",options:{type:"csv"}})},u={filter:{key_f:{type:"event",emit:"TOGGLE_FILTER"}},print:{key_p:{type:"event",emit:"EXPORT",payload:{type:"print"}}},export:{key_e:{type:"event",emit:"EXPORT",payload:{type:"pdf"}}}},F={...u.filter,...u.print,...u.export};export{F as a,O as b,P as c,T as d,R as e,A as f,S as g,v as h,$ as i,B as j,k,w as l,X as m,x as n,c as o,D as p,g as q,m as r,L as s,y as t};
