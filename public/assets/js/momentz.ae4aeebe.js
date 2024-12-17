import{s as u}from"./app.a373aa59.js";const c=u.getters["config/configs"],a=u.getters["config/vars"],T=()=>{var e,r;return{timezone:(r=(e=c==null?void 0:c.system)==null?void 0:e.timezone)!=null?r:moment.tz.guess(!0),browserTimezone:moment.tz.guess(!0),defaultDateFormat:a.defaultDateFormat,defaultDateTimeFormat:a.defaultDateTimeFormat,serverDateFormat:a.serverDateFormat,serverDateTimeFormat:a.serverDateTimeFormat,calendarLocale:{lastDay:a.defaultDateFormat,sameDay:a.defaultTimeFormat,lastWeek:a.defaultDateFormat,sameElse:a.defaultDateFormat}}},F=e=>{const r=T();return e+" "+r.timezone},I=(e=null,r=null)=>{var t,D;const m=T();let s=moment.utc().tz(r!=null?r:m.timezone);return e&&e.hasOwnProperty("moment")&&e.moment?e.hasOwnProperty("format")&&e.format?moment.utc(s.format((t=e.format)!=null?t:m.defaultDateTimeFormat),(D=e.format)!=null?D:m.defaultDateTimeFormat):s:s.format(e!=null?e:m.defaultDateTimeFormat)},y=(e,r=null)=>{const m=T();let s=moment(e,m.serverDateFormat);return e?(Array.isArray(e)&&(s=moment(e[0],e[1])),r&&r.hasOwnProperty("moment")&&r.moment?s:s.format(r!=null?r:m.defaultDateFormat)):"INVALID DATE STRING"},l=(e,r=null)=>{const m=T();let s=moment(e,m.serverTimeFormat);return e?(Array.isArray(e)&&(s=moment(e[0],e[1])),r&&r.hasOwnProperty("moment")&&r.moment?s:s.format(r!=null?r:m.defaultTimeFormat)):"INVALID TIME STRING"},f=(e,r=null)=>{const m=T();let s=moment(e,m.serverDateTimeFormat);return e?(Array.isArray(e)&&(s=moment(e[0],e[1])),r&&r.hasOwnProperty("moment")&&r.moment?s:s.format(r!=null?r:m.defaultDateTimeFormat)):"INVALID DATE TIME STRING"},g=(e,r=null)=>{const m=T();let s=moment(e,m.serverDateTimeFormat);return e?(Array.isArray(e)&&(s=moment(e[0],e[1])),r&&r.hasOwnProperty("moment")&&r.moment?s:s.calendar(r!=null?r:m.calendarLocale)):"INVALID DATE TIME STRING"},n=(e,r=null,m=null)=>{const s=T();if(!e)return"INVALID DATE STRING";let t=moment.utc(e,s.serverDateFormat);return e==="NOW"&&(t=moment.utc()),Array.isArray(e)&&(t=moment.utc(e[0],e[1])),r&&r.hasOwnProperty("moment")&&r.moment?t.tz(m!=null?m:s.timezone):t.tz(m!=null?m:s.timezone).format(r!=null?r:s.defaultDateFormat)},N=(e,r=null,m=null)=>{const s=T();let t=moment.utc(`${moment().format(s.serverDateFormat)} ${e}`,s.serverTimeFormat);return e?(Array.isArray(e)&&(t=moment.utc(e[0],e[1])),r&&r.hasOwnProperty("moment")&&r.moment?t.tz(m!=null?m:s.timezone):t.tz(m!=null?m:s.timezone).format(r!=null?r:s.defaultTimeFormat)):"INVALID TIME STRING"},w=(e,r=null,m=null)=>{const s=T();if(!e)return"INVALID DATE TIME STRING";let t;return e==="NOW"?t=moment.utc():Array.isArray(e)?t=moment.utc(e[0],e[1]):t=moment.utc(e,s.serverDateTimeFormat),r&&r.hasOwnProperty("moment")&&r.moment?t.tz(m!=null?m:s.timezone):(t=t.tz(m!=null?m:s.timezone),t.format(r!=null?r:s.defaultDateTimeFormat))},C=(e,r=null,m=null)=>{const s=T();let t=moment.utc(e,s.serverDateTimeFormat);if(!e)return"INVALID DATE TIME STRING";Array.isArray(e)&&(t=moment.utc(e[0],e[1]));let D=t.tz(m!=null?m:s.timezone);return r&&r.hasOwnProperty("moment")&&r.moment||(D=D.calendar(r!=null?r:s.calendarLocale)),D};export{l as a,f as b,N as c,w as d,g as e,C as f,n as g,y as m,I as n,F as w};
