import{l as xe}from"../../index.d951cdc8.js";import{R as Ae}from"../../hark.bundle.8af12079.js";import"../../vendor/vendor-webrtc-adapter.d803ee7d.js";import{h as Me}from"../../hark.esm.e78be4e6.js";import"../../vendor/vendor-others.c8ba1624.js";import{L as Pe}from"../../logger.45fb8d96.js";import"../../vendor/vendor-laravel-echo.aae8cf55.js";import"../../vendor/vendor-core.3574f8d9.js";import"../../vendor/vendor-pusher-js.7eab09ad.js";import"../../app.a373aa59.js";import"../../vendor/vendor-essential.91b5cfa2.js";import"../../vendor/vendor-bootstrap-vue.17129278.js";import"../../vendor/vendor-vue-gtag.f8884558.js";let B=document.createElement("script");B.setAttribute("src","/js/EBML.js");document.head.appendChild(B);window.io=xe;function Ke(){const M=window.atob("aHR0cHM6Ly9zaWduYWx2Mi5rb2RlbWludC5pbjo5MDAyLw==");let i=null,m=!1,h={},S={debug:!1,iceServers:[],mediaServers:[],signalServer:M,opaqueId:"KMConnect",maxParticipants:1e3},l={},d={},j={},P={},k={},O={},T=[],v=[];const R=new Pe;let g=null;async function W(e={}){if(!e.config)throw"RTC Library config not defined!";if(S=Object.assign(S,e.config),e.callbacks&&(l=Object.assign(l,e.callbacks)),R.setDebug(S.debug),!i&&e.options){const t={...e.options};F(t)}return{getInstance:N,getUserInfo:J,getInstanceUserId:q,initSession:F,setupFileSharing:z,startMeeting:G,joinMeeting:K,leaveMeeting:Y,publishFeed:x,updatePublishedFeed:Z,sendMessage:p,acceptJoiningRequest:Q,roomExists:C,close:V,shareFile:$,getAllStreams:ee,updateSessionOptions:X}}function N(){return i}function J(){var e;return(e=i.extra)==null?void 0:e.user}function q(){return i.userid}function F(e={}){const t=I(e);E(t)}function z(e={}){e.callbacks&&(l=Object.assign(l,e.callbacks)),i.enableFileSharing=!0,i.chunkSize=15*1e3,i.onFileStart=Ee,i.onFileProgress=Ce,i.onFileEnd=Ue}function G(e={}){const t=I(e),r=()=>{i.enableScalableBroadcast?(i.userid=t.room,i.connectSocket(a=>{a.emit("join-broadcast",{broadcastId:t.room,userid:i.userid,typeOfStreams:i.session})})):L(t)};i?r():(t.success=()=>{r()},E(t))}function K(e={}){const t=I(e),r=()=>{i.enableScalableBroadcast?i.connectSocket(a=>{a.emit("join-broadcast",{broadcastId:t.room,userid:i.userid,typeOfStreams:i.session})}):U(t)};i?r():(t.success=()=>{r()},E(t))}function Y(e={}){i.userid,V({...e,callback:()=>{s("leftMeeting",v)}})}function p({event:e,type:t,data:r={},timeout:a=0,callback:n}){var o;if(!!i){if(e&&i.socket){e==="liveTranscription"&&!r.interim&&!r.final&&r.lastFinal&&d.canModerate&&v.push({user:(o=i.extra)==null?void 0:o.user,createdAt:r.createdAt,transcript:r.lastFinal});try{window.setTimeout(()=>{i.socket.emit("Connect-Whisper-"+d.uuid,{event:e,data:{userId:i.userid,extra:i.extra,...r}}),n&&_.isFunction(n)&&n()},a)}catch{}return}try{window.setTimeout(()=>{i.send({type:t,data:r}),n&&_.isFunction(n)&&n()},a)}catch{}}}function Q({participantId:e,userId:t,userPreferences:r}){i.acceptParticipationRequest(e,r),k[t]=!0,u(),s("participantJoined",{participantId:e,userId:t,userPreferences:r})}function X(e={}){var r,a;const t=I(e);Object.assign(i.extra,{user:{username:t.userObject.username,uuid:t.userObject.uuid,name:t.userObject.name,avatar:(r=t.userObject.profile)==null?void 0:r.avatar,cover:(a=t.userObject.profile)==null?void 0:a.cover},isHost:t.meeting.isHost,canModerate:t.meeting.canModerate,canToggleAudio:t.meetingConfigs.canToggleAudio,canToggleVideo:t.meetingConfigs.canToggleVideo,canHaveStream:t.meetingRules.sendAudio||t.meetingRules.sendVideo}),y()}function s(e,t){e&&l.hasOwnProperty(e)&&_.isFunction(l[e])&&l[e](t)}function I(e={}){const t={...e};return _.isObject(t.user)&&(t.userObject={...t.user},t.user=JSON.stringify(t.user)),t.user,t.config=Object.assign({},S,t.config),d=t.meeting?t.meeting:d,j=t.meetingConfigs?t.meetingConfigs:j,P=t.meetingRules?t.meetingRules:P,t}async function w(e){return await i.getSocket(t=>{if(t)return t;throw"RTCMC - Socket not found!"})}function E(e={}){var t,r;i||(v=[],i=new Ae,i.socketURL=e.config.signalServer||M,i.iceServers=e.config.iceServers,i.autoCreateMediaElement=!1,i.enableLogs=e.config.debug,e.config.forceTurn&&(i.candidates={turn:!0,stun:!1,host:!1}),i.onopen=be,i.onmessage=he,i.onNewParticipant=Se,i.onNumberOfBroadcastViewersUpdated=ke,i.onstream=Oe,i.onstreamended=Te,i.onMediaError=ve,i.onerror=Re,i.onUserIdAlreadyTaken=Ie,i.onExtraDataUpdated=ye,i.onUserStatusChanged=je,i.onSocketDisconnect=we,i.socketMessageEvent="Connect-Message-"+d.uuid,i.setCustomSocketEvent("Connect-Whisper-"+d.uuid),k={},O={},i.maxParticipantsAllowed=e.config.maxParticipants,i.mediaConstraints={video:!1,audio:!1,screen:!1},i.dontCaptureUserMedia=!0,e.meetingRules?(i.session=e.meetingRules.session,i.sdpConstraints.mandatory={OfferToReceiveAudio:e.meetingRules.receiveAudio,OfferToReceiveVideo:e.meetingRules.receiveVideo},e.meetingRules.session.oneway&&(i.enableScalableBroadcast=!0,i.autoCloseEntireSession=!0,i.maxRelayLimitPerUser=1,i.socketMessageEvent="scalable-media-broadcast-demo",i.connectSocket(a=>{a.on("join-broadcaster",n=>{i.session=n.typeOfStreams,i.sdpConstraints.mandatory={OfferToReceiveVideo:!!i.session.video,OfferToReceiveAudio:!!i.session.audio},i.broadcastId=n.broadcastId,U({room:n.userid,force:!0})}),a.on("rejoin-broadcast",n=>{i.attachStreams=[],a.emit("check-broadcast-presence",n,o=>{o?a.emit("join-broadcast",{broadcastId:n,userid:i.userid,typeOfStreams:i.session}):e.meeting.canModerate?(i.userid=n,a.emit("join-broadcast",{broadcastId:n,userid:i.userid,typeOfStreams:i.session})):s("roomNotFound")})}),a.on("broadcast-stopped",n=>{s("broadcastStopped",n)}),a.on("start-broadcasting",n=>{d.canModerate?(i.sdpConstraints.mandatory={OfferToReceiveVideo:!1,OfferToReceiveAudio:!1},i.session=n,L({room:i.userid,force:!0})):s("roomNotFound")})}))):e.meetingRules={},e.userObject||(e.userObject={...e.user},e.user=JSON.stringify(e.user)),i.extra={user:{username:e.userObject.username,uuid:e.userObject.uuid,name:e.userObject.name,avatar:(t=e.userObject.profile)==null?void 0:t.avatar,cover:(r=e.userObject.profile)==null?void 0:r.cover},isInitiator:!1,isHost:e.meeting.isHost,canModerate:e.meeting.canModerate,canToggleAudio:e.meetingConfigs.canToggleAudio,canToggleVideo:e.meetingConfigs.canToggleVideo,canHaveStream:e.meetingRules.sendAudio||e.meetingRules.sendVideo,broadcastId:e.room,streamsInfo:{}},s("sessionCreated"),u(),_.isFunction(e.success)&&e.success())}function C(e={}){if(!i){_.isFunction(e.no)&&e.no();return}i.enableScalableBroadcast?w().then(t=>{t.emit("check-broadcast-presence",e.room,r=>{r===!0?_.isFunction(e.yes)&&e.yes(t):_.isFunction(e.no)&&e.no(t)})}).catch(t=>{R.error(t),_.isFunction(e.no)&&e.no(t)}):i.checkPresence(e.room,(t,r)=>{t===!0?_.isFunction(e.yes)&&e.yes():_.isFunction(e.no)&&e.no()})}function L(e={}){const t=()=>{m||(i.extra.isInitiator=!0,i.open(e.room,(r,a,n)=>{m=!1,n?s("createRoomError",n):r===!0&&(m=!0,s("roomCreated",a),D())}))};if(e.force){t();return}C({room:e.room,no(r){t()},yes(){U({...e,force:!0})}})}function U(e={}){const t=()=>{m||i.join(e.room,(r,a,n)=>{m=!1,r===!1||n?s(n==="Room full"?"roomFullError":"joinRoomError",n):(m=!0,u(),D(),s("roomJoined",a))})};if(e.force){t();return}C({room:e.room,no(){s("roomNotFound")},yes(r){t()}})}function y(){i.updateExtraData()}function x(e={}){if(!e.stream)return;const t={...e};if(t.info){i.extra.streamsInfo[t.stream.id]=t.info,y();let r=t.info.from;h[r]={info:t.info,streamId:t.stream.id,stream:t.stream},window.setTimeout(()=>{i.addStream(t.stream)},2e3),r==="cam"&&t.stream.getAudioTracks().length&&H(t)}else i.addStream(t.stream)}function Z(e={}){const t={...e};let r=null,a=null;if(t.info&&(a=t.info.from,r=h[a],r)){const o=r.streamId;r.stream&&(t.existingStream=i.attachStreams.find(c=>c&&c.id===o)),i.extra.streamsInfo[o].mirroredVideo=t.info.mirroredVideo,y(),h[a].info.mirroredVideo=t.info.mirroredVideo}const n=t.existingStream;if(t.stream)if(n){a==="cam"&&g&&g.stop();const o=t.stream.getAudioTracks(),c=t.stream.getVideoTracks(),A=n.getTracks();if(o.length||c.length){t.action!=="blur"&&t.action!=="unblur"&&A.forEach(b=>{b.enabled=!1,b.stop()}),p({event:"streamPaused",data:{id:n.id}}),t.action!=="blur"&&t.action!=="unblur"&&(n.paused=!0),x(t),o.length&&t.info&&t.info.from==="cam"&&H(t);return}else if(A.length){A.forEach(b=>{b.enabled=!1,b.stop()}),p({event:"streamTrackRemoved",data:{id:n.id},timeout:n.paused?2e3:0}),n.paused=!1;return}}else x(t);else a==="cam"&&g&&g.stop(),n&&(i.removeStream(n.id),n.getTracks().forEach(o=>{o.enabled=!1}),n.paused=!0,t.action==="remove"?p({event:"streamTrackRemoved",data:{id:n.id}}):p({event:"streamPaused",data:{id:n.id}}))}function V(e={}){i&&(e.feeds&&e.feeds.length&&e.feeds.forEach(t=>{i.removeStream(t.stream.id),typeof t.stopFn=="function"?t.stopFn(t.stream):typeof t.stream.getTracks=="function"?t.stream.getTracks().forEach(r=>r.stop()):typeof t.stream.stop=="function"&&t.stream.stop()}),i.removeStream({video:!0,audio:!0}),i.attachStreams.forEach(t=>{i.removeStream(t.id),t.getTracks().forEach(r=>r.stop())}),i.attachStreams=[]),window.setTimeout(()=>{i.getAllParticipants().forEach(t=>{i.disconnectWith(t)}),i&&(i.leave(),i.closeSocket()),i=null,m=!1,h={},k={},O={},T=[],typeof e.callback=="function"&&e.callback()},500)}function $(e={}){!e.file||!e.sendTo||i.shareFile(e.file,e.sendTo)}function ee(e={}){return i.streamEvents.selectAll()}function H({stream:e,info:t}){!j.speechDetection||({...t},e.id,window.setTimeout(()=>{g=Me(e,{}),g.on("speaking",()=>{p({event:"speaking",data:{userId:i.userid,from:"cam"}})}),g.on("stopped_speaking",()=>{p({event:"stoppedSpeaking",data:{userId:i.userid,from:"cam"}})})},1e3))}function D(){if(!i)return;const e={streamTrackRemoved:te,streamTrackUpdated:ie,streamPaused:re,remoteHandToggled:ne,speaking:se,stoppedSpeaking:ae,snapshotTaken:oe,meetingUpdated:ce,meetingEnded:ue,userBanned:de,participantLeft:fe,toggleRemoteAV:me,pollPublished:le,pollResultPublished:ge,liveTranscription:pe};w().then(t=>{t.on("Connect-Whisper-"+d.uuid,r=>{!i||r&&e.hasOwnProperty(r.event)&&e[r.event](r.data)})}).catch(t=>{R.error(t)})}function u(){if(!i)return;const e=i.getAllParticipants(),t=[];return e.forEach((r,a)=>{const n=i.peers[r];n&&t.push({userId:n.userid,...n.extra})}),s("participantsCountChecked",t),e.length}function f(e={}){if(!e)return;const t=e.extra?e.extra:{},r=e.id||e.streamid,a=e.userid||e.userId,n=t.user?t.user.uuid:null,o=r&&t.streamsInfo?t.streamsInfo[r]:{},c={userId:a,userUuid:n,...t};return r&&(c.id=r,c.key=n,c.isScreen=!1,c.isWhiteboard=!1,c.isTalking=!1),o&&(c.mirroredVideo=o.mirroredVideo||!1,c.info=o,o.from&&((o.from==="screen"||o.from==="whiteboard")&&(c.key=c.key+"-"+o.from),c.from=o.from,c.isScreen=o.from==="screen",c.isWhiteboard=o.from==="whiteboard",c.isTalking=o.from==="cam"&&o.talking)),e.stream&&(c.stream=e.stream),c}function te(e){const t=f(e);s("streamRemoved",{...t,kind:e.kind,info:e.info})}function ie(e){const t=f(e);s("streamUpdated",{...t,kind:e.kind,info:e.info})}function re(e){const t=f(e);s("streamUpdated",{...t,kind:e.kind,type:"paused",info:e.info})}function ne(e){const t=f(e);s("remoteHandToggled",{...t,isHandUp:e.isHandUp})}function se(e){const t=f(e);s("streamUpdated",{...t,from:e.from,type:"meta-updated",data:{key:"isTalking",value:!0}})}function ae(e){const t=f(e);s("streamUpdated",{...t,from:e.from,type:"meta-updated",data:{key:"isTalking",value:!1}})}function oe(e){s("snapshotTaken",e)}function ce(e){s("meetingUpdated",e)}function ue(e){s("meetingEnded",e)}function de(e){u(),s("userBanned",e)}function fe(e){if(!i)return;const t=f(e);!(t.userId||t.userUuid)||(s("participantLeft",t),window.setTimeout(u,1e3))}function me(e){(!e.userId||e.userId!==i.userid)&&s("toggleRemoteAV",e)}function le(e){s("pollPublished",e)}function ge(e){s("pollResultPublished",e)}function pe(e){var t,r,a;!e.interim&&!e.final&&e.lastFinal&&d.canModerate&&v.push({user:(t=e.event.extra)==null?void 0:t.user,createdAt:e.createdAt,transcript:e.lastFinal}),s("transcriptUpdated",{userId:e.event.userId,userUuid:e.event.extra.user.uuid,from:"cam",type:"transcript-updated",interim:(r=e.interim)!=null?r:"",final:(a=e.final)!=null?a:""})}function be(e){O[e.userid]||(O[e.userid]=!0,u(),s("dataChannelOpened",e))}function he({data:e,extra:t,userid:r}){if(!!e){if(e.type==="whiteboard"){s("whiteboardMessageReceived",{userId:r,user:t==null?void 0:t.user,data:e.data});return}else if(e.type==="file-sharing"){s("fileSharingMessageReceived",{userId:r,user:t==null?void 0:t.user,data:e.data});return}s("messageReceived",{userId:r,user:t==null?void 0:t.user,data:e.data})}}function Se(e,t){if(!i||u()>=i.maxParticipantsAllowed)return;const r=t.connectionDescription.remoteUserId;i.acceptParticipationRequest(e,t),k[r]=!0,u()}function ke(e){!i.isInitiator&&i.extra.isHost||s("numberOfBroadcastViewersUpdated",e.numberOfBroadcastViewers)}function Oe(e){if(!i)return;const t=f(e);if(!i.peers[t.userId]){s("participantLeft",t),u();return}let r={...e.extra};if(!!(r.user&&r.user.uuid)&&!(d.type.uuid==="live_class"&&!(i.isInitiator||i.extra.isHost)&&!(r.isInitiator||r.isHost)&&e.type==="remote")){if((d.type.uuid==="webinar"||d.type.uuid==="podcast")&&!(i.isInitiator||i.extra.isHost)&&!(r.isInitiator||r.isHost)&&e.type==="remote"){if(i.enableScalableBroadcast){if(r.broadcasterExtra){let a={...r.broadcasterExtra};delete r.broadcasterExtra,r={...r,...a}}}else if(!e.extra.isInitiator&&!e.extra.isHost)return}if(i.enableScalableBroadcast){if((i.isInitiator||i.extra.isHost)&&e.type==="remote")return;i.isUpperUserLeft=!1,(e.extra.isInitiator||e.extra.isHost)&&(i.extra.broadcasterExtra={...r},y())}s("streamAdded",t),i.enableScalableBroadcast&&!i.isInitiator&&!i.isHost&&e.type==="remote"&&(i.dontCaptureUserMedia=!0,i.attachStreams=[e.stream],i.sdpConstraints.mandatory={OfferToReceiveAudio:!1,OfferToReceiveVideo:!1},i.getSocket(a=>{i.DetectRTC.browser.name==="Chrome"&&i.getAllParticipants().forEach(n=>{if(n+""!=e.userid+""){let o=i.peers[n].peer;o.getLocalStreams().forEach(c=>{o.removeStream(c)}),e.stream.getTracks().forEach(c=>{o.addTrack(c,e.stream)}),i.dontAttachStream=!0,i.renegotiate(n),i.dontAttachStream=!1}}),i.DetectRTC.browser.name==="Firefox"&&i.getAllParticipants().forEach(n=>{n+""!=e.userid+""&&i.replaceTrack(e.stream,n)}),i.DetectRTC.browser.name})),u()}}function Te(e){if(!i)return;const t=f(e);if(!!(t.user&&t.user.uuid)){if(!i.peers[t.userId]){s("participantLeft",t),u();return}s("streamRemoved",t),u()}}function ve(e){}function Re(e){if(!i)return;const t=f(e);!(t.userId||t.userUuid)||(s("participantLeft",t),window.setTimeout(u,1e3))}function Ie(e,t){i.userid=t}function ye(e){if(!i)return;const t=f(e);if(!(t.userId||t.userUuid))return;if(!i.peers[t.userId]){s("participantLeft",t),u();return}const r=T.findIndex(a=>a.userid===t.userId);r!==-1?(T.splice(r,1),s("participantJoined",t)):s("userInfoUpdated",t),u()}function je(e){if(!i||!e.userid||!e.status)return;if(!(e.extra&&e.extra.user)){T.push(e);return}const t=f(e);!(t.userId||t.userUuid)||(e.status==="online"?s("participantJoined",t):s("participantLeft",t),window.setTimeout(u,1e3))}function we(e){w().then(t=>{}).catch(t=>{R.error(t)})}function Ee(e){s("fileReceivingStart",{file:e})}function Ce(e){s("fileReceivingProgress",{chunk:e})}function Ue(e){s("fileReceivingEnd",{file:e})}return{init:W}}export{Ke as default};