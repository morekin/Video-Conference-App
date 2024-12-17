import{m as R,i as S}from"../vendor/vendor-core.3574f8d9.js";import{c as b}from"../auth.4cd43863.js";import{L as D}from"../logger.45fb8d96.js";import{E as h}from"../event-bus.6a5776a8.js";import{n as N}from"../_plugin-vue2_normalizer.7b9a2fe2.js";import"../vendor/vendor-others.c8ba1624.js";import"../vendor/vendor-essential.91b5cfa2.js";import"../app.a373aa59.js";import"../vendor/vendor-bootstrap-vue.17129278.js";import"../vendor/vendor-vue-gtag.f8884558.js";let M=/\n\n/g,K=/\n/g;const v=r=>r.replace(M,"<p></p>").replace(K,"<br>");let V=/\S/;const U=r=>r.replace(V,function(e){return e.toUpperCase()}),z=/\s*\((.*?)\)\s*/g,q=/(\(\?:[^)]+\))\?/g,W=/(\(\?)?:\w+/g,B=/\*/g,Y=/[-{}[\]+?.,\\^$|#]/g,G=r=>r instanceof RegExp?new RegExp(r.source,"i"):(r=r.replace(Y,"\\$&").replace(z,"(?:$1)?").replace(W,(e,t)=>t?e:"([^\\s]+)").replace(B,"(.*?)").replace(q,"\\s*$1?\\s*"),new RegExp("^(.*?)"+r+"$","i")),O=(r,e)=>{if(r=r.replace(/\s+/g,"").toLowerCase(),e=e.replace(/\s+/g,"").toLowerCase(),!r.length&&!e.length)return 1;if(!r.length||!e.length)return 0;if(r===e)return 1;if(r.length===1&&e.length===1||r.length<2||e.length<2)return 0;const t=new Map;for(let i=0;i<r.length-1;i++){const n=r.substring(i,i+2),u=t.has(n)?t.get(n)+1:1;t.set(n,u)}let s=0;for(let i=0;i<e.length-1;i++){const n=e.substring(i,i+2),u=t.has(n)?t.get(n):0;u>0&&(t.set(n,u-1),s++)}return 2*s/(r.length+e.length-2)},j=(r,e,t)=>{const i=(typeof r=="object"?r.toString():r).replace(/[&/\\#,+()!$~%.'":*?<>{}]/g,"").replace(/  +/g," ").trim(),n=O(i,e);return n>=t?{command:r,commandWithoutSpecials:i,howSimilar:n,isFuzzyMatch:!0}:null},$=(r,e)=>{const s=G(r).exec(e);return s?{command:r,parameters:s.slice(2)}:null},J=(r,e)=>{let t=[];return r.forEach(s=>{e.forEach(i=>{t.push(i+" *"),t.push(s+i+" *"),t.push(s+" "+i+" *")})}),t},d=new D,y=window.SpeechRecognition||window.webkitSpeechRecognition,Q="SpeechRecognition"in window||"webkitSpeechRecognition"in window,X=(r={})=>{if(!y)throw"Speech Recognition API Not Available";const t=Object.assign({},{aiNames:["mint","ment","minto","mento","mintoo","mentoo","mintu","mentu"],wakeCommands:["hello","hey","hay","hi"],debug:!1,continuous:!0,preventTimeout:!1,interimResults:!0,lang:"en-US",maxAlternatives:1,formatting:!0,commaTimer:500,fullStopTimer:1e3,clearTimer:2e3,onstart(){},onend(){},onerror(){},onresult(){},onspeechstart(){},onspeechend(){},onaudiostart(){},onaudioend(){},onnomatch(){},onTranscript(){}},r);d.setDebug(t.debug);let s="",i=new y,n=!1;i.continuous=t.continuous,i.interimResults=t.interimResults,i.lang=t.lang,i.maxAlternatives=t.maxAlternatives,t.grammars&&t.grammars.length,i.addEventListener("start",a=>{d.log("Speech Recognition API Started",a),n=!0,t.onstart(a)}),i.addEventListener("end",a=>{if(t.preventTimeout){window.setTimeout(()=>{i.start()},2e3);return}d.log("Speech Recognition API Ended",a),n=!1,t.onend(a)}),i.addEventListener("error",a=>{a.error==="aborted"?d.warn("Speech Recognition API was aborted",a):a.error==="no-speech"?d.warn("Speech Recognition API - No speech received",a):d.error("Error With Speech Recognition API",a),t.onerror(a)}),i.addEventListener("result",a=>{let c="";if(typeof a.results>"u")throw i.onend=null,i.stop(),"Speech Recognition API Not Available";window.stoppedForComma&&(clearTimeout(window.stoppedForComma),window.stoppedForComma=null),window.stoppedForFullStop&&(clearTimeout(window.stoppedForFullStop),window.stoppedForFullStop=null),window.clearTranscripts&&(clearTimeout(window.clearTranscripts),window.clearTranscripts=null);for(let o=a.resultIndex;o<a.results.length;++o)a.results[o].isFinal?s+=a.results[o][0].transcript:c+=a.results[o][0].transcript;if(t.onresult(a),t.commands&&t.commands.length){const o=s?s.trim():c.trim();if(L(o)&&P(c,s)){c="",s="";return}}if(s=v(U(s)),t.onTranscript({interim:v(c),final:s}),s){if(!t.formatting){window.clearTranscripts=window.setTimeout(()=>{c="",s="",t.onTranscript({interim:"",final:""})},t.clearTimer);return}window.stoppedForComma=window.setTimeout(()=>{/\.\.\.\s$/.test(s)?s=s.replace(/\.\.\.\s$/,", "):/,\s$/.test(s)||(s=s+", "),t.onTranscript({interim:v(c),final:s}),window.stoppedForFullStop=window.setTimeout(()=>{/,\s$/.test(s)&&(s=s.replace(/,\s$/,"... ")),t.onTranscript({interim:v(c),final:s}),window.clearTranscripts=window.setTimeout(()=>{c="",s="",t.onTranscript({interim:"",final:""})},t.clearTimer)},t.fullStopTimer)},t.commaTimer)}}),i.addEventListener("speechstart",a=>{n=!0,t.onspeechstart(a)}),i.addEventListener("speechend",a=>{t.onspeechend(a)}),i.addEventListener("audiostart",a=>{t.onaudiostart(a)}),i.addEventListener("audioend",a=>{d.log("Speech Recognition API - Audio Ended",a),t.onaudioend(a)}),i.addEventListener("nomatch",a=>{d.warn("Speech Recognition API - No Match",a),t.onnomatch(a)});const u=()=>{if(s="",!n)return i.start()},k=()=>(t.preventTimeout=!1,i.stop()),x=()=>n,L=a=>{const c=J(t.wakeCommands,t.aiNames);let o=!1,m=0;do o=$(c[m],a),m++;while(!o&&m<c.length);return o},P=(a,c)=>{let o=!1;return t.commands.forEach(({command:m,callback:f,matchInterim:A=!1,isFuzzyMatch:E=!1,fuzzyMatchingThreshold:H=.8,bestMatchOnly:I=!1})=>{const g=!c&&A?a.trim():c.trim(),w=(Array.isArray(m)?m:[m]).map(l=>E?j(l,g,H):$(l,g)).filter(l=>l);if(E&&I&&w.length>=2){w.sort((C,F)=>F.howSimilar-C.howSimilar);const{command:l,commandWithoutSpecials:T,howSimilar:p}=w[0];o=!0,f(T,g,p)}else w.forEach(l=>{if(l.isFuzzyMatch){const{command:T,commandWithoutSpecials:p,howSimilar:C}=l;o=!0,f(p,g,C)}else{const{command:T,parameters:p}=l;o=!0,f(...p)}})}),o};return{speechRecognition:i,start:u,stop:k,isActive:x}};const Z={components:{},data(){return{shown:!1,searchTerm:"",foundHotTerm:null,searchResults:null,isLoading:!1,meetingIcons:{scheduled:"far fa-calendar-alt",live:"fas fa-video",ended:"far fa-calendar-check",cancelled:"far fa-calendar-times"},meetingIconColors:{scheduled:"bg-primary text-white no-border",live:"bg-warning text-white no-border",ended:"bg-success text-white no-border",cancelled:"bg-danger text-white no-border"},transcripts:{interim:"",final:""},voiceSearch:!1,speechRecognitionHandle:null}},computed:{...R("config",["uiConfigs","vars"]),...R("search",["hotTerms","results","suggestions"]),searchScreenShow(){return this.uiConfigs.searchScreenShow},gotResults(){return this.results&&(this.results.contacts&&this.results.contacts.length||this.results.users&&this.results.users.length||this.results.meetings&&this.results.meetings.length)}},updated(){this.$refs.searchTermElement&&this.$refs.searchTermElement.focus()},watch:{searchScreenShow(r,e){r!==e&&(r?(h.$off("KEY_PRESSED",this.handleKeyPressed),h.$on("ESCAPE_PRESSED",this.close),this.resetVueScroll(),this.ResetResults(),this.ResetSuggestions(),this.searchTermChanged(),this.toggleVoiceSearch(),this.shown=!0,document.removeEventListener("keyup",this.keyPressed,!0),document.addEventListener("keyup",this.keyPressed,!0)):(document.removeEventListener("keyup",this.keyPressed,!0),this.searchTerm="",h.$off("ESCAPE_PRESSED",this.close),h.$off("KEY_PRESSED",this.handleKeyPressed),h.$on("KEY_PRESSED",this.handleKeyPressed),this.shown=!1))},$route(r){this.close()}},methods:{...S("config",["SetUiConfig"]),...S("search",["FilterRoutesByTerm","SearchRoutes","Search","ResetResults","ResetSuggestions"]),...S("user",["Lock","Logout"]),...S("navigation",["Generate"]),searchTermChanged:_.debounce(function(){this.searchTerm===""&&(this.searchResults=null,this.ResetResults(),this.ResetSuggestions()),this.findHotTerm()},500),findHotTerm(){this.foundHotTerm=null,this.hotTerms.forEach(r=>{if(!this.foundHotTerm){const e=new RegExp(r.code,"i");e.test(this.searchTerm)&&(this.foundHotTerm=_.cloneDeep(r),this.foundHotTerm.term=this.searchTerm.replace(e,""))}}),this.processSubmit()},submit:_.debounce(function(){this.isLoading=!0,this.resetVueScroll(),this.findHotTerm(),this.processSubmit()},500),processSubmit:_.debounce(function(){this.isLoading=!0,this.resetVueScroll();const r=this.foundHotTerm;r?r.type==="command"?(RegExp("logout","i").test(r.term)?this.logout():RegExp("lock","i").test(r.term)?this.lock():RegExp("menu","i").test(r.term)?this.regenerateNavigation():RegExp("clear","i").test(r.term)?this.clearStoreAndReload():RegExp("reload","i").test(r.term)?window.location.reload():RegExp("freload","i").test(r.term)&&window.location.reload(!0),this.isLoading=!1):r.type==="redirect"?(this.ResetResults(),this.ResetSuggestions(),r.term?this.SearchRoutes(r.term).then(e=>{this.isLoading=!1}):this.isLoading=!1):this.search():this.search()},500),resetVueScroll(){setTimeout(()=>{this.$refs.vuescrollSearch&&this.$refs.vuescrollSearch.scrollTo({x:0,y:0},!0)},100)},search(){this.ResetResults(),this.ResetSuggestions(),this.searchTerm.length<3?this.isLoading=!1:this.Search(this.searchTerm).then(r=>{this.searchResults=r,this.isLoading=!1}).catch(r=>{this.isLoading=!1,formUtil.handleErrors(r)})},logout(){this.Logout().then(r=>{this.$toasted.success(r.message,this.$toastConfig),this.$router.push({name:"login",query:{logout:"true"}})})},lock(){this.Lock()},close(){this.SetUiConfig({searchScreenShow:!1}),this.voiceSearch&&this.toggleVoiceSearch()},handleKeyPressed(r){let e=r.which||r.keyCode,t=r.key||String.fromCharCode(e);this.searchScreenShow||this.SetUiConfig({searchScreenShow:!0}),this.searchTerm=t},regenerateNavigation(){this.Generate().then(()=>{this.isLoading=!1,this.searchTerm="",this.close()})},clearStoreAndReload(){this.isLoading=!0,"serviceWorker"in navigator?caches.keys().then(r=>{this.isLoading=!0,r.forEach(e=>{caches.delete(e)}),b(!0)}):b(!0)},keyPressed(r){const e=r.which||r.keyCode;if(e===37||e===38||e===39||e===40){const t=document.getElementsByClassName("focusable"),s=document.activeElement;let i=0;t&&t.length&&(t.forEach((n,u)=>{s===n&&(i=u)}),i==-1?i=0:(e===37||e===38?i-=1:i+=1,i<0&&i>=t.length&&(i=0)),t[i].focus())}return!1},toggleVoiceSearch(r,e=!1){if(!Q){this.$toasted.error($t("general.browser_does_not_support_feature"),this.$toastConfig.error);return}this.voiceSearch&&!e?(this.voiceSearch=!1,this.speechRecognitionHandle&&(this.speechRecognitionHandle.stop(),this.speechRecognitionHandle=null),window.clearLocalTranscripts&&(clearTimeout(window.clearLocalTranscripts),window.clearLocalTranscripts=null),this.transcripts.final="",this.transcripts.interim=$t("general.voice_search_inactive"),window.clearLocalTranscripts=window.setTimeout(()=>{this.transcripts.interim="",window.clearLocalTranscripts=null},3e3)):(this.speechRecognitionHandle||(this.speechRecognitionHandle=X({formatting:!1,commands:[{command:["clear what i said","clear search"],callback:()=>{this.transcripts.interim="",this.transcripts.final="",this.searchTerm="",this.searchTermChanged()}},{command:"logout",callback:()=>{this.logout()}},{command:["lockscreen","lock screen","lock my screen","lock app","lock app screen"],callback:()=>{this.lock()}},{command:["go to *","goto *","open *"],callback:s=>{this.FilterRoutesByTerm(s).then(i=>{const n=i[0];if(n){if(this.$route.name===n.name){this.$toasted.info($t("general.already_on_page"),this.$toastConfig.info);return}this.$router.push({name:n.name})}else this.$toasted.info($t("general.could_not_complete_request"),this.$toastConfig.info)})}},{command:["start a meeting","create a meeting","start a meet","create a meet","start meeting","create meeting","start meet","create meet"],callback:s=>{if(this.$route.name==="appInstantMeetingStart"){this.$toasted.info($t("general.already_on_page"),this.$toastConfig.info);return}this.$router.push({name:"appInstantMeetingStart"})}},{command:["start a *"],callback:s=>{console.log(`Creating ${s} type of meeting.`),s=s.snakeCase();const i=["audio_conference","live_class","podcast","video_conference","webinar"];if(s==="meeting"){if(this.$route.name==="appMeetingStart"){this.$toasted.info($t("general.already_on_page"),this.$toastConfig.info);return}this.$router.push({name:"appMeetingStart"})}else if(i.includes(s)){if(this.$route.name==="appInstantMeetingStart"&&this.$route.query&&this.$route.query.type===s){location.reload();return}this.$router.push({name:"appInstantMeetingStart",query:{type:s}});return}else this.$toasted.info($t("general.could_not_complete_request"),this.$toastConfig.info)}}],onTranscript:({interim:s,final:i})=>{this.transcripts.interim=s,this.transcripts.final=i,i&&(this.searchTerm=this.transcripts.final,this.searchTermChanged(),window.clearLocalTranscripts&&(clearTimeout(window.clearLocalTranscripts),window.clearLocalTranscripts=null),window.clearLocalTranscripts=window.setTimeout(()=>{this.transcripts.final="",window.clearLocalTranscripts=null},3e3))},onend:()=>{this.voiceSearch=!1}})),this.$nextTick(()=>{this.voiceSearch=!0}),this.speechRecognitionHandle.isActive()||this.speechRecognitionHandle.start())}},created(){this.close(),h.$off("ESCAPE_PRESSED",this.close),h.$off("KEY_PRESSED",this.handleKeyPressed),h.$on("ESCAPE_PRESSED",this.close),h.$on("KEY_PRESSED",this.handleKeyPressed)},beforeDestroy(){document.removeEventListener("keyup",this.keyPressed,!0)}};var ee=function(){var e=this,t=e._self._c;return e.searchScreenShow?t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("div",{staticClass:"app-search-screen"},[t("close-button",{attrs:{title:e.$t("general.close"),"parent-class":""},on:{click:e.close}}),t("div",{staticClass:"app-search-wrapper"},[t("div",{staticClass:"search-input-wrapper"},[t("form",{on:{submit:function(s){return s.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"search-input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],ref:"searchTermElement",staticClass:"form-control pause-keyuplistener focusable",attrs:{type:"text",placeholder:"Search...",spellcheck:"false",autocomplete:"false"},domProps:{value:e.searchTerm},on:{input:[function(s){s.target.composing||(e.searchTerm=s.target.value)},e.searchTermChanged]}})]),t("button",{staticClass:"d-none",attrs:{type:"submit"}},[e._v("Search")])]),t("div",{staticClass:"helper-message text-muted"},[e.foundHotTerm?t("span",[e._v(e._s(e.foundHotTerm.message)+" "+e._s(e.foundHotTerm.term))]):t("span",[e._v(e._s(e.$t("general.search_helper_default_text")))])])]),e.searchTerm&&e.suggestions.length?t("div",{staticClass:"search-suggestions"},[t("span",{staticClass:"font-weight-700 title"},[e._v("suggestions: ")]),t("ul",{staticClass:"suggestions-list list-inline"},e._l(e.suggestions,function(s){return t("li",{key:s},[e._v(e._s(s))])}),0)]):e._e(),t("div",{directives:[{name:"scroll-lock",rawName:"v-scroll-lock",value:e.searchScreenShow,expression:"searchScreenShow"}],staticClass:"search-results-wrapper"},[t("vue-scroll",{ref:"vuescrollSearch",attrs:{id:"vuescrollSearch"}},[t("animated-loader",{attrs:{"is-loading":e.isLoading,"loader-color":e.vars.loaderColor,"overlay-color":"transparent"}}),t("div",{staticClass:"search-results-sections"},[e.foundHotTerm&&e.results.routes.length?t("div",{staticClass:"search-results-section"},[t("h4",{staticClass:"section-title text-muted font-weight-600 text-center border-bottom mb-0 pb-2"},[e._v("Navigate to")]),t("ul",{staticClass:"search-results-list"},e._l(e.results.routes,function(s,i){return t("li",{key:s.name,staticClass:"search-result-item"},[t("router-link",{attrs:{to:{name:s.name}}},[e._v(" "+e._s(s.meta.trans?e.$t(s.meta.trans,{attribute:e.$t(s.meta.midTitle)+" "+e.$t(s.meta.title)}):e.$t(s.meta.midTitle)+" "+e.$t(s.meta.title))+" ")])],1)}),0)]):e.gotResults?[e.results.users&&e.results.users.length?t("div",{staticClass:"search-results-section"},[t("h4",{staticClass:"section-title text-muted font-weight-600 text-center border-bottom mb-2 pb-2"},[e._v(e._s(e.$t("user.users")))]),t("ul",{staticClass:"search-results-list"},e._l(e.results.users,function(s,i){return t("li",{key:s.uuid,staticClass:"search-result-item"},[t("view-user",{staticClass:"m-0",attrs:{value:s,focusable:"","hide-popover":"","show-buttons":"","data-classes":"m-0"}})],1)}),0)]):e._e(),e.results.meetings&&e.results.meetings.length?t("div",{staticClass:"search-results-section"},[t("h4",{staticClass:"section-title text-muted font-weight-600 text-center border-bottom mb-2 pb-2"},[e._v(e._s(e.$t("meeting.meetings")))]),t("ul",{staticClass:"search-results-list"},e._l(e.results.meetings,function(s,i){return t("li",{key:s.uuid,staticClass:"search-result-item"},[t("view-single",{staticClass:"m-0",attrs:{value:s,"show-if-exists":"title",description:e._f("moment")([s.startedAt?s.startedAt:s.startDateTime,e.vars.serverDateTimeFormat],"calendar",null,{sameElse:e.vars.defaultDateTimeFormat}),"show-icon":"",icon:e.meetingIcons[s.status],"icon-classes":e.meetingIconColors[s.status],focusable:"","is-entity":"",link:{name:"appMeetingView",params:{uuid:s.uuid}},"data-classes":"m-0"}})],1)}),0)]):e._e(),e.results.contacts&&e.results.contacts.length?t("div",{staticClass:"search-results-section"},[t("h4",{staticClass:"section-title text-muted font-weight-600 text-center border-bottom mb-2 pb-2"},[e._v(e._s(e.$t("contact.contacts")))]),t("ul",{staticClass:"search-results-list"},e._l(e.results.contacts,function(s,i){return t("li",{key:s.uuid,staticClass:"search-result-item"},[t("view-single",{staticClass:"m-0",attrs:{value:s,"show-if-exists":"name","show-icon":"",icon:"fas fa-user",focusable:"","is-entity":"","data-classes":"m-0"}})],1)}),0)]):e._e()]:[e.searchTerm&&e.searchResults&&!e.isLoading?t("div",{staticClass:"search-results-section"},[t("h2",{staticClass:"text-muted",domProps:{textContent:e._s(e.$t("general.no_search_result_found"))}})]):e._e()]],2)],1)],1)]),t("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],class:["voice-search-indicator",{"active pulse-mic":e.voiceSearch}],attrs:{title:e.voiceSearch?e.$t("general.voice_search_active"):e.$t("general.voice_search_inactive")},on:{click:e.toggleVoiceSearch}},[t("i",{staticClass:"far fa-circle-dot"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.transcripts.final||e.transcripts.interim,expression:"transcripts.final || transcripts.interim"}],staticClass:"voice-search-transcripts"},[t("div",{staticClass:"transcripts"},[t("span",{staticClass:"final-transcripts mr-1",domProps:{innerHTML:e._s(e.transcripts.final)}}),t("span",{staticClass:"interim-transcripts",domProps:{innerHTML:e._s(e.transcripts.interim)}})])])],1)]):e._e()},te=[],se=N(Z,ee,te,!1,null,"31356b09",null,null);const pe=se.exports;export{pe as default};
