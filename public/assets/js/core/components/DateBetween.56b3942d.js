import{m as i}from"../../vendor/vendor-core.3574f8d9.js";import{n as l}from"../../_plugin-vue2_normalizer.7b9a2fe2.js";import"../../vendor/vendor-others.c8ba1624.js";const n={name:"date-between",props:{start:{type:String},end:{type:String},label:{type:String,default:"Date Between"},name:{type:String,default:"betweenDates"},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},inputClasses:{type:String,default:""}},data(){return{value:""}},computed:{...i("config",["vars"]),bdbValue:{get(){return this.start?(this.value=this.start,this.end&&(this.value=this.value+" to "+this.end)):this.value="",this.value},set(t){if(t){const e=t.split(" to ");e.length>1?(this.$emit("update:start",e[0]),this.$emit("update:end",e[1])):(this.$emit("update:start",t),this.$emit("update:end",""))}else this.value="",this.$emit("update:start",""),this.$emit("update:end","")}}}};var r=function(){var e=this,s=e._self._c;return s("base-input",{attrs:{label:e.label,"addon-right-icon":"far fa-calendar-alt",type:"text",name:e.name,"is-wrapper":!0,required:e.required},model:{value:e.bdbValue,callback:function(a){e.bdbValue=a},expression:"bdbValue"}},[s("date-picker",{class:["form-control datepicker",e.inputClasses],attrs:{config:e.vars.datepickerRangeConfig,disabled:e.disabled},model:{value:e.bdbValue,callback:function(a){e.bdbValue=a},expression:"bdbValue"}})],1)},d=[],u=l(n,r,d,!1,null,null,null,null);const c=u.exports;export{c as default};
