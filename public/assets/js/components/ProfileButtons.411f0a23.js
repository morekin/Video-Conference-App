import{m as i,i as r}from"../vendor/vendor-core.3574f8d9.js";import{b as o}from"../media.60d422e2.js";import{c as l,S as n}from"../app.a373aa59.js";import{E as a}from"../event-bus.6a5776a8.js";import{n as u}from"../_plugin-vue2_normalizer.7b9a2fe2.js";import"../vendor/vendor-others.c8ba1624.js";import"../vendor/vendor-essential.91b5cfa2.js";import"../vendor/vendor-bootstrap-vue.17129278.js";import"../vendor/vendor-vue-gtag.f8884558.js";const h={name:"profile-buttons",props:{link:{type:Object,default:null},showCallButtonsIfOnline:{type:Boolean,default:!0},user:{type:Object,required:!0}},data(){return{subscriptions:{},callId:null}},computed:{...i("user",["uuid","username","profile","loggedInUser","liveLoggedInUser","loggedInUserBusy","liveUsers","hasPermission"]),...i("config",["configs"]),...i("chat",["chatBoxLoaded"]),liveUser(){return this.user&&this.liveUsers.find(e=>e.uuid===this.user.uuid)},isOnline(){return!!this.liveUser},isUserBusy(){return this.isOnline&&!!this.liveUser.busy},isLoggedIn(){return this.user&&this.liveLoggedInUser&&this.user.uuid===this.liveLoggedInUser.uuid},callUuid(){return this.callId?this.callId:this.callId=uuid()},toUser(){return{uuid:this.user.uuid,username:this.user.username,profile:this.user.profile}},fromUser(){return{uuid:this.loggedInUser.uuid,username:this.loggedInUser.username,profile:this.loggedInUser.profile}}},methods:{...r("user",["UpdateLiveUser"]),...r("chat",["SetActiveChatUser"]),setUserStatus(e=!1,s=null){this.UpdateLiveUser({...this.fromUser,busy:e,timerToFalse:s}),this.subscriptions.users.whisper("SetUserStatus",{...this.fromUser,busy:e})},showCallingNotification(e){window.callPlaying=o();const s={title:$t("chat.calling",{attribute:e.profile.name}),cancelButtonText:$t("chat.cancel"),showConfirmButton:!1,showCancelButton:!0,position:this.$toastConfig&&this.$toastConfig.position?this.$toastConfig.position.replace("-center","").replace("start","left").replace("end","right"):"bottom-end"};this.$toasted.clear(),this.setUserStatus("CALLING"),window.callTo=e,l.fire(s).then(t=>{window.callPlaying.pause(),window.callTo=null,t.value?this.setUserStatus("ON_CALL"):t.dismiss===n.DismissReason.cancel?(this.setUserStatus(!1),this.subscriptions.users.whisper("CallCancelled",{to:this.toUser,from:this.fromUser,id:this.callUuid}),this.$toasted.info($t("chat.call_cancelled"),this.$toastConfig.info)):t.dismiss===n.DismissReason.timer&&(this.setUserStatus(!1),this.$toasted.info($t("chat.call_not_answered",{attribute:e.profile.name}),this.$toastConfig.info))})},startCalling(){this.$gaEvent("engagement","startCalling","ProfileButtons"),this.$emit("buttonClicked"),this.showCallingNotification(this.toUser),this.callId=uuid(),window.callUuid=this.callUuid,this.subscriptions.users.whisper("IncomingCall",{to:this.toUser,from:this.fromUser,id:this.callUuid})},endCall(){this.subscriptions.users.whisper("EndCalling",{to:this.toUser,from:this.fromUser,id:this.callUuid}),this.setUserStatus(!1),window.callUuid=null},startChat(){this.$gaEvent("engagement","startChat","ProfileButtons"),this.SetActiveChatUser(this.user),a.$emit("START_CHAT_WITH",this.user)}},mounted(){},created(){window.Echo&&window.EchoOpts&&(this.subscriptions={users:window.EchoOpts.subscriptions.users})},beforeDestroy(){},destroyed(){}};var c=function(){var s=this,t=s._self._c;return t("div",{staticClass:"buttons-container"},[t("div",{staticClass:"buttons-wrapper"},[t("div",{staticClass:"btn-group buttons",attrs:{role:"group"}},[s.link?t("router-link",{staticClass:"btn btn-sm btn-light flex-grow-2",attrs:{to:s.link}},[s._v(" "+s._s(s.$t("user.profile"))+" ")]):s._e(),!s.isLoggedIn&&(!s.showCallButtonsIfOnline||s.showCallButtonsIfOnline&&s.isOnline)&&s.hasPermission("create-meeting")?[t("button",{staticClass:"btn btn-sm btn-light",attrs:{disabled:s.isUserBusy||s.loggedInUserBusy},on:{click:s.startCalling}},[t("i",{staticClass:"fas fa-phone-alt"})])]:s._e(),s.configs.chat&&s.configs.chat.enabled&&s.chatBoxLoaded&&s.uuid!==s.user.uuid?[t("button",{staticClass:"btn btn-sm btn-light",on:{click:s.startChat}},[t("i",{staticClass:"fas fa-comment"})])]:s._e()],2)])])},d=[],f=u(h,c,d,!1,null,null,null,null);const I=f.exports;export{I as default};
