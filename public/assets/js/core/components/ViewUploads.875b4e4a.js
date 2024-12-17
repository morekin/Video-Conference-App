import{n as l}from"../../_plugin-vue2_normalizer.7b9a2fe2.js";const o={name:"view-uploads",props:{valid:{type:Boolean,description:"Whether is valid",default:void 0},label:{type:String,description:"Upload label (text before input)"},nameLabel:{type:String,default:"upload.file"},namesLabel:{type:String,default:"upload.files"},error:{type:String,description:"Upload error (below input)"},labelClasses:{type:[String,Array],description:"Upload label css classes"},dataClasses:{type:[String,Array],description:"Upload css classes"},downloadButtonClasses:{type:[String,Array],default:"text-primary"},value:{type:Array,description:"Upload value"},urlPrefix:{type:String,required:!0}},data(){return{icons:{"application/json":"fa-file-code","application/msword":"fa-file-word","application/vnd.openxmlformats-officedocument.presentationml.presentation":"fa-file-powerpoint","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":"fa-file-excel","application/vnd.openxmlformats-officedocument.wordprocessingml.document":"fa-file-word","application/vnd.ms-excel":"fa-file-excel","application/vnd.ms-powerpoint":"fa-file-powerpoint","application/xml":"fa-file-code","application/&":"fa-file-pdf","application/pdf":"fa-file-pdf","image/jpeg":"fa-file-image","image/svg+xml":"fa-file-image","image/vnd.adobe.photoshop":"fa-file-image","image/vnd.microsoft.icon":"fa-file-image","image/png":"fa-file-image","image/&":"fa-file-image","text/plain":"fa-file-alt","video/mp4":"fa-file-video","video/ogg":"fa-file-video","video/quicktime":"fa-file-video","video/&":"fa-file-video","video/x-&":"fa-file-video"},mimeTypes:{"application/json":"json","application/msword":"doc / dot","application/vnd.openxmlformats-officedocument.presentationml.presentation":"pptx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":"xlsx","application/vnd.openxmlformats-officedocument.wordprocessingml.document":"docx","application/vnd.ms-excel":"xla / xls / xlt","application/vnd.ms-powerpoint":"pot / ppa / pps / ppt","application/x-shockwave-flash":"swf","application/xml":"atom / rdf / rss / xml","application/&":"pdf / rtf / zip","application/pdf":"pdf","image/jpeg":"jpe / jpeg / jpg","image/svg+xml":"svg / svgz","image/vnd.adobe.photoshop":"psd","image/vnd.microsoft.icon":"ico","image/png":"png","image/&":"bmp / ief / gif / png / tif / tiff / webp","text/cache-manifest":"appcache / manifest","text/plain":"txt","text/x-component":"htc","text/x-vcard":"vcf","text/&":"css / html / php / vtt","text/x-&":"markdown / md","video/mp4":"mp4 / m4v / f4v / f4p","video/ogg":"ogv","video/quicktime":"mov / qt","video/&":"avi / mpg / vdo / viv / vivo / webm","video/x-&":"flv"}}},methods:{getFileIcon(t){return this.icons[t]||"fa-file-alt"},getFileNameIcon(t){return this.icons[t]||"fa-file-alt"}},filters:{decimal(t,e=2){return Number(t).toFixed(e)}}};var s=function(){var e=this,a=e._self._c;return e.value.length?a("div",{staticClass:"base-view view-uploads"},[a("div",{staticClass:"view-group",class:[{"has-label":e.label||e.$slots.label},{"has-success":e.valid===!0},{"has-danger":e.error||e.valid===!1},{"not-empty":e.value||e.value===0}]},[e._t("label",function(){return[e.label?a("label",{class:e.labelClasses},[e._v(" "+e._s(e.label)+" ")]):e._e()]}),e._t("default",function(){return[a("div",{staticClass:"files-list-wrapper"},[a("ul",{staticClass:"files-list"},e._l(e.value,function(i,r){return a("li",{staticClass:"file-details-row"},[a("div",{staticClass:"file-icon"},[a("span",[a("i",{class:["far",e.getFileIcon(i.mime)]})])]),a("div",{staticClass:"file-details"},[a("h6",[e._v(e._s(i.filename))]),i.error?a("p",{staticClass:"text-danger"},[e._v(" "+e._s(i.error)+" ")]):a("p",[a("span",[a("span",{staticClass:"font-weight-700"},[e._v(e._s(e.$t("upload.type")))]),e._v(": "+e._s(e.mimeTypes[i.mime]||"Unknown"))]),a("span",{staticClass:"ml-1"},[a("span",{staticClass:"font-weight-700"},[e._v(e._s(e.$t("upload.size")))]),e._v(": "+e._s(e._f("decimal")(i.size/1024,0))+" KB")])])]),a("div",{class:["actions-wrapper"]},[a("div",{staticClass:"actions-buttons"},[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],class:["action-btn download-btn",e.downloadButtonClasses],attrs:{href:`${e.urlPrefix}/${i.uuid}?file=${i.filename}`,target:"_blank",title:e.$t("global.download",{attribute:e.nameLabel})}},[a("i",{staticClass:"fas fa-download"})])])])])}),0)])]})],2),e._t("infoBlock"),e._t("errorBlock",function(){return[e.error?a("div",{staticClass:"text-danger invalid-feedback error-block mt-1"},[e._v(" "+e._s(e.error)+" ")]):e._e()]})],2):e._e()},n=[],p=l(o,s,n,!1,null,"96906eae",null,null);const f=p.exports;export{f as default};
