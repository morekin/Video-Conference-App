import{m as i,i as l}from"../../../vendor/vendor-core.3574f8d9.js";import{g as c}from"../../../momentz.ae4aeebe.js";import{n as o}from"../../../_plugin-vue2_normalizer.7b9a2fe2.js";import{B as u,L as m}from"../../../vendor/vendor-vue-chartjs.d6364371.js";import{A as g}from"../../../app-dashboard-header.a5a0f4f1.js";import{M as p}from"../../../meeting-card.e07a6991.js";import"../../../vendor/vendor-others.c8ba1624.js";import"../../../app.a373aa59.js";import"../../../vendor/vendor-essential.91b5cfa2.js";import"../../../vendor/vendor-bootstrap-vue.17129278.js";import"../../../vendor/vendor-vue-gtag.f8884558.js";import"../../../app-page-header-wrapper.7c301931.js";const f={name:"greeting-widget",props:{background:{type:String,default:null},border:{type:String},shadow:{type:Boolean,default:!1},showGreeting:{type:Boolean,default:!0}},data(){return{isLoading:!0,date:c("NOW","dddd, Do"),month:c("NOW","MMMM"),year:c("NOW","YYYY"),meetingIcons:{scheduled:"far fa-calendar-alt",live:"fas fa-video",ended:"far fa-calendar-check",cancelled:"far fa-calendar-times"},meetingIconColors:{scheduled:"bg-primary text-white no-border",live:"bg-warning text-white no-border",ended:"bg-success text-white no-border",cancelled:"bg-danger text-white no-border"}}},computed:{...i("config",["vars"]),...i("user",["profile"]),...i("common",["others"]),heightShouldBeFixed(){let a=0;return a=a+(this.others.meetings?this.others.meetings.length:0),a>4}},methods:{...l("common",["Custom","SetOthers"]),moment(a){return moment(a)},resetVueScroll(){setTimeout(()=>{this.$refs.vuescrollMeetings&&this.$refs.vuescrollMeetings.scrollTo({x:0,y:0},!0)},100)},getInitialData(){this.isLoading=!0,this.Custom({url:"dashboard",method:"get"}).then(a=>{this.SetOthers({meetings:a.meetings,upcomingMeetings:a.upcomingMeetings||[],recentMeetings:a.recentMeetings||[],alerts:a.alerts}),this.resetVueScroll(),this.isLoading=!1}).catch(a=>{this.isLoading=!1,formUtil.handleErrors(a)})},validDate(a){return moment(a,this.vars.serverDateTimeFormat).isValid()}},mounted(){this.getInitialData()}};var v=function(){var t=this,e=t._self._c;return e("card",{staticClass:"greeting-widget min-height-250px",attrs:{shadow:t.shadow,type:t.background,border:t.border,"body-classes":"d-flex flex-column"}},[t._t("greeting",function(){return[t.showGreeting&&t.profile?e("div",{staticClass:"greeting-details"},[e("h5",{staticClass:"text-muted mb-1"},[t._v(t._s(t.$t("dashboard.hello"))+", "+t._s(t.profile.name)+"!")]),e("div",{staticClass:"today-date"},[e("h2",{staticClass:"mb-1"},[t._v(t._s(t.date))]),e("h5",{staticClass:"text-muted m-0"},[t._v(t._s(t.month)+", "+t._s(t.year))])])]):t._e()]}),t.showGreeting&&t.profile?e("div",[e("hr",{staticClass:"mt-4 mb-3"})]):t._e(),e("div",{staticClass:"item-list-wrapper flex-grow",class:{"fixed-height":t.heightShouldBeFixed}},[e("vue-scroll",{ref:"vuescrollMeetings",attrs:{id:"vuescrollMeetings"}},[e("div",{staticClass:"min-height-200px"},[e("animated-loader",{attrs:{"is-loading":t.isLoading,"loader-color":t.vars.loaderColor}}),t.others.meetings&&t.others.meetings.length?e("ul",{staticClass:"item-list"},t._l(t.others.meetings,function(s){return e("li",{key:s.uuid,staticClass:"item-item"},[e("router-link",{attrs:{to:{name:"appMeetingView",params:{uuid:s.uuid}}}},[e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.d500",modifiers:{hover:!0,d500:!0}}],class:["item-type",t.meetingIconColors[s.status]],attrs:{title:s.status.capitalize()}},[e("i",{class:t.meetingIcons[s.status]})]),e("div",{staticClass:"item-details"},[e("h6",{staticClass:"item-title"},[t._v(t._s(s.title))]),e("div",{staticClass:"item-schedule text-muted"},[s.startedAt!==null&&t.validDate(s.startedAt)?[t._v(t._s(t._f("momentCalendarTz")(s.startedAt,{sameElse:t.vars.defaultDateTimeFormat})))]:[t._v(t._s(t._f("momentCalendarTz")(s.startDateTime,{sameElse:t.vars.defaultDateTimeFormat})))]],2)])])],1)}),0):t.isLoading?t._e():e("div",{staticClass:"d-flex align-items-center justify-content-center min-height-200px"},[e("h5",{staticClass:"text-muted"},[t._v(" "+t._s(t.$t("dashboard.nothing_to_show"))+" ")])])],1)])],1)],2)},b=[],C=o(f,v,b,!1,null,"3a2a3798",null,null);const d=C.exports,w={extends:u,props:{chartData:{type:Object,required:!0},chartOptions:{type:Object,default(){return{}}}},data:()=>({options:{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{}}]}}}),watch:{chartData(a,t){a&&a!==t&&this.renderChart(_.cloneDeep(a),{...this.options,...this.chartOptions})},chartOptions(a,t){a&&a!==t&&this.renderChart(_.cloneDeep(this.chartData),{...this.options,...a})}},mounted(){this.chartData&&this.renderChart(_.cloneDeep(this.chartData),{...this.options,...this.chartOptions})}},y=null,x=null;var $=o(w,y,x,!1,null,null,null,null);const D=$.exports,M={extends:m,props:["chartData"],data:()=>({options:{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{}}]}}}),watch:{chartData(a,t){a&&a!==t&&this.renderChart(_.cloneDeep(a),this.options)}},mounted(){this.chartData&&this.renderChart(_.cloneDeep(this.chartData),this.options)}},k=null,L=null;var S=o(M,k,L,!1,null,null,null,null);const F=S.exports;const T={name:"chart-widget",components:{BarChart:D,LineChart:F},props:{},data(){return{isLoading:!1}},computed:{...i("config",["vars"]),...i("common",["others"]),customStyles(){return{minHeight:"465px",position:"relative"}},selectedFilter(){return this.others.chart.actions.options.filter(a=>a.active)}},methods:{...l("common",["Custom","SetOthers"]),toggleFilter(a){this.others.chart.actions.multiple?a.active=!a.active:this.others.chart.actions.options.forEach(t=>{t.active=t.label===a.label}),this.getInitialData()},getInitialData(){this.isLoading=!0;let a={};this.others&&this.others.chart&&this.others.chart.actions&&this.others.chart.actions.options.forEach(t=>{t.active&&(a[t.param]=t.value)}),this.Custom({url:"dashboard/chart",method:"get",params:a}).then(t=>{this.SetOthers({chart:t}),this.isLoading=!1}).catch(t=>{this.isLoading=!1,formUtil.handleErrors(t)})}},mounted(){this.getInitialData()}};var O=function(){var t=this,e=t._self._c;return e("card",{staticClass:"chart-widget min-height-150px",attrs:{shadow:""},scopedSlots:t._u([!t.isLoading&&t.others&&t.others.chart?{key:"title",fn:function(){return[e("h5",[t._v(t._s(t.others.chart.title))])]},proxy:!0}:null,!t.isLoading&&t.others&&t.others.chart?{key:"actions",fn:function(){return[t.others.chart.actions?e("base-dropdown",{attrs:{tag:"div","dropdown-menu-tag":"ul",position:"right"}},[t.selectedFilter?e("a",{staticClass:"dropdown-toggle no-caret",attrs:{"data-toggle":"dropdown",role:"button"}},[t.selectedFilter.length===1?e("span",[t._v(t._s(t.selectedFilter[0].label))]):e("span",[t._v(t._s(t.$t("general.filtered")))]),t._v(" "),e("i",{staticClass:"fas fa-angle-down ml-2"})]):t._e(),t._l(t.others.chart.actions.options,function(s){return e("li",{key:s.label,staticClass:"dropdown-item pointer",on:{click:function(r){return t.toggleFilter(s)}}},[t._v(" "+t._s(s.label)+" "),s.active?e("span",{staticClass:"pull-right"},[e("i",{staticClass:"fas fa-check"})]):t._e()])})],2):t._e(),e("button",{staticClass:"btn action",attrs:{type:"button"},on:{click:t.getInitialData}},[e("i",{class:["fas fa-sync-alt",{"fa-spin":t.isLoading}]})])]},proxy:!0}:null],null,!0)},[e("animated-loader",{attrs:{"is-loading":t.isLoading||!(t.others&&t.others.chart),"loader-color":t.vars.loaderColor}}),!t.isLoading&&t.others&&t.others.chart?[t.others.chart.type==="bar"?e("bar-chart",{attrs:{"chart-data":t.others.chart.chartData,styles:t.customStyles}}):t.others.chart.type==="line"?e("line-chart",{attrs:{"chart-data":t.others.chart.chartData,styles:t.customStyles}}):t.others.chart.type==="pie"?e("pie-chart",{attrs:{"chart-data":t.others.chart.chartData,styles:t.customStyles}}):t._e()]:t._e()],2)},P=[],R=o(T,O,P,!1,null,"24a171f5",null,null);const W=R.exports,I={name:"meeting-feed-widget",components:{MeetingCard:p},props:{meetings:{type:Array,required:!0}},data(){return{isLoading:!0}},computed:{...i("config",["configs","vars"]),...i("user",["hasPermission"])}};var E=function(){var t=this,e=t._self._c;return e("card",{class:["min-height-150px overflow-visible meetings-feed-wrapper",`card-layout-design-${t.configs.meeting.cardLayoutDesign}`],attrs:{type:"transparent",border:"transparent","shadow-size":"none","header-classes":"px-0","body-classes":"px-0 overflow-visible"},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"d-flex justify-content-between align-items-center flex-grow"},[t._t("heading",function(){return[e("h4",{staticClass:"mb-0"},[t._v(t._s(t.$t("meeting.meetings")))])]}),t._t("actions",function(){return[e("router-link",{staticClass:"btn btn-sm btn-dark ml-3",attrs:{to:{name:"appMeetingList"}}},[t._v(t._s(t.$t("general.view_more")))])]})],2)]},proxy:!0}],null,!0)},[t.meetings.length?e("div",{staticClass:"row meetings-feed"},[t._l(t.meetings,function(s){return[e("div",{key:s.uuid,staticClass:"col-12 col-md-6 col-lg-4 mb-4"},[e("meeting-card",{attrs:{meeting:s,flex:!1,raise:!0},scopedSlots:t._u([{key:"actions",fn:function(){return[e("base-dropdown",{staticClass:"actions-menu",attrs:{tag:"div",direction:"down","menu-classes":"show-dropdown-up",position:"right"}},[e("div",{staticClass:"h-100 d-flex align-items-center justify-content-center mr-1",attrs:{slot:"title"},slot:"title"},[e("base-button",{staticClass:"no-shadow",attrs:{type:"button","data-toggle":"dropdown",role:"button",size:"md",design:"white",rounded:"",iconOnly:"",icon:"fas fa-ellipsis-v"}})],1),e("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appMeetingView",params:{uuid:s.uuid}}}},[e("i",{staticClass:"fas fa-arrow-circle-right"}),t._v(" "+t._s(t.$t("global.view",{attribute:t.$t("meeting.meeting")})))]),s.hasSnapshots&&t.configs.meeting&&t.configs.meeting.canTakeSnapshot?e("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appMeetingSnapshots",params:{uuid:s.uuid}}}},[e("i",{staticClass:"fas fa-image"}),t._v(" "+t._s(t.$t("global.view",{attribute:t.$t("meeting.snapshots")})))]):t._e(),(s.hasChunkRecordings||s.hasRecordings)&&t.configs.meeting&&t.configs.meeting.canRecord?e("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appMeetingRecordings",params:{uuid:s.uuid}}}},[e("i",{staticClass:"fas fa-photo-video"}),t._v(" "+t._s(t.$t("global.view",{attribute:t.$t("meeting.recordings")})))]):t._e(),s.status==="scheduled"||s.status==="live"?e("router-link",{staticClass:"dropdown-item bg-primary text-white",attrs:{to:{name:"liveMeeting",params:{uuid:s.uuid}}}},[e("i",{staticClass:"fas fa-sign-in-alt"}),t._v(" "+t._s(t.$t("meeting.join_meeting")))]):t._e(),s.status==="scheduled"||s.status==="live"?e("a",{staticClass:"dropdown-item",on:{click:function(r){return r.stopPropagation(),t.shareURL(s)}}},[e("i",{staticClass:"fas fa-share-alt"}),t._v(" "+t._s(t.$t("general.share_url")))]):t._e(),s.status==="scheduled"&&(t.hasPermission("create-meeting")||s.canModerate)?e("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appMeetingEdit",params:{uuid:s.uuid}}}},[e("i",{staticClass:"fas fa-edit"}),t._v(" "+t._s(t.$t("global.edit",{attribute:t.$t("meeting.meeting")})))]):t._e(),t.hasPermission("create-meeting")?e("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appMeetingDuplicate",params:{uuid:s.uuid}}}},[e("i",{staticClass:"fas fa-copy"}),t._v(" "+t._s(t.$t("global.duplicate",{attribute:t.$t("meeting.meeting")})))]):t._e(),s.status==="scheduled"&&t.hasPermission("list-meeting")&&s.canModerate?e("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appMeetingSingleConfig",params:{subUuid:s.uuid}}}},[e("i",{staticClass:"fas fa-cog"}),t._v(" "+t._s(t.$t("global.config",{attribute:t.$t("meeting.meeting")})))]):t._e(),t.hasPermission("delete-meeting")&&(s.status==="scheduled"||s.status==="cancelled"&&t.configs.meeting&&t.configs.meeting.allowDeletingCancelledMeetings||s.status==="ended"&&t.configs.meeting&&t.configs.meeting.allowDeletingEndedMeetings)?e("a",{staticClass:"dropdown-item",on:{click:function(r){return r.stopPropagation(),t.deleteEntity(s)}}},[e("i",{staticClass:"fas fa-trash"}),t._v(" "+t._s(t.$t("global.delete",{attribute:t.$t("meeting.meeting")})))]):t._e()],1)]},proxy:!0}],null,!0)})],1)]})],2):e("div",{staticClass:"text-center"},[e("h4",{staticClass:"text-muted text-center my-5"},[t._v(t._s(t.$t("global.could_not_find_any",{attribute:t.$t("meeting.upcoming_meetings")})))])])])},A=[],G=o(I,E,A,!1,null,null,null,null);const j=G.exports;const z={name:"design1-page",components:{AppDashboardHeader:g,GreetingWidget:d,MeetingFeedWidget:j},props:{},data(){return{isLoading:!0}},computed:{...i("config",["configs","vars"]),...i("common",["others"]),...i("user",["hasPermission"]),rooms(){return this.others&&this.others.rooms?this.others.rooms.rooms:[]}},methods:{...l("common",["Custom","SetOthers"]),getInitialData(){let a={};this.others&&this.others.rooms&&this.others.rooms.actions&&this.others.rooms.actions.options.forEach(t=>{t.active&&(a[t.param]=t.value)}),this.Custom({url:"dashboard/rooms",method:"get",params:a,silent:!0}).then(t=>{const e=t.rooms.map(s=>{let r=t.roomUsers.find(n=>n.uuid===s.uuid);return s.users=r.users,s.users.forEach(n=>{n.online=r.liveUsers.includes(n.uuid)}),s.users.sort((n,h)=>n.online-h.online),s});this.SetOthers({rooms:{title:t.title,rooms:e,options:t.options}}),this.isLoading=!1,this.startRoomPolling()}).catch(t=>{this.isLoading=!1,formUtil.handleErrors(t)})},startRoomPolling(){window.roomPollingTimer&&clearTimeout(window.roomPollingTimer),window.roomPollingTimer=window.setTimeout(()=>{this.getInitialData()},1e4)}},mounted(){this.getInitialData()},beforeDestroy(){window.roomPollingTimer&&clearTimeout(window.roomPollingTimer)}};var B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"design1-page min-height-80vh"},[e("animated-loader",{attrs:{"is-loading":t.isLoading,"loader-color":t.vars.loaderColor,"overlay-color":"transparent"}}),e("app-dashboard-header",{staticClass:"min-height-300px"}),e("div",{staticClass:"row overlap-header-280px"},[e("div",{staticClass:"col-12 col-lg-4 d-flex mb-element"},[e("greeting-widget",{staticClass:"flex-grow",attrs:{shadow:""}})],1),e("div",{staticClass:"col-12 col-lg-8 d-flex mb-element"})]),t.others&&t.others.upcomingMeetings&&t.others.upcomingMeetings.length?e("meeting-feed-widget",{attrs:{meetings:t.others.upcomingMeetings},scopedSlots:t._u([{key:"heading",fn:function(){return[e("h4",{staticClass:"mb-0"},[t._v(t._s(t.$t("meeting.upcoming_meetings")))])]},proxy:!0}],null,!1,3005281840)}):t._e(),t.others&&t.others.recentMeetings&&t.others.recentMeetings.length?e("meeting-feed-widget",{attrs:{meetings:t.others.recentMeetings},scopedSlots:t._u([{key:"heading",fn:function(){return[e("h4",{staticClass:"mb-0"},[t._v(t._s(t.$t("meeting.recent_meetings")))])]},proxy:!0}],null,!1,3117350335)}):t._e()],1)},U=[],N=o(z,B,U,!1,null,"d80b3251",null,null);const Y=N.exports,q={components:{GreetingWidget:d,ChartWidget:W,Design1Page:Y},data(){return{isLoading:!1}},computed:{...i("config",["configs","vars","dashboardLayout"]),...i("common",["others"])},methods:{...l("common",["Custom","SetOthers"])},mounted(){}};var H=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-wrapper"},[e("animated-loader",{attrs:{"is-loading":t.isLoading&&!t.others.dashboard,"loader-color":t.vars.loaderColor}}),t.dashboardLayout==="design1"?e("design1-page",{staticClass:"flex-grow",attrs:{shadow:""}}):e("div",{staticClass:"row overlap-header"},[t.configs.dashboard.enableWidgetGreeting?e("div",{class:["col-12",{"col-lg-4":t.configs.dashboard.enableWidgetChart},"d-flex mb-element"]},[e("greeting-widget",{staticClass:"flex-grow",attrs:{shadow:""}})],1):t._e(),t.configs.dashboard.enableWidgetChart?e("div",{class:["col-12",{"col-lg-8":t.configs.dashboard.enableWidgetGreeting},"d-flex mb-element"]},[e("chart-widget",{staticClass:"flex-grow",attrs:{shadow:""}})],1):t._e(),t.configs.dashboard.enableWidgetStats||t.configs.dashboard.enableWidgetGreeting||t.configs.dashboard.enableWidgetChart?t._e():e("div",{staticClass:"col-12 d-flex justify-content-center mb-element"},[e("h3",{staticClass:"text-muted text-center"},[t._v(" "+t._s(t.$t("dashboard.nothing_to_show"))+" ")])])])],1)},J=[],K=o(q,H,J,!1,null,null,null,null);const lt=K.exports;export{lt as default};