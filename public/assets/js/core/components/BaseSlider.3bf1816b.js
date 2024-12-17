import{n as a}from"../../vendor/vendor-nouislider.dd78bf8e.js";import{n as l}from"../../_plugin-vue2_normalizer.7b9a2fe2.js";const d={name:"base-slider",props:{value:{type:[String,Array,Number],description:"Slider value"},disabled:{type:Boolean,description:"Whether slider is disabled"},range:{type:Object,default:()=>({min:0,max:100}),description:"Slider range (defaults to 0-100)"},type:{type:String,default:"",description:"Slider type (e.g primary, danger etc)"},options:{type:Object,default:()=>({}),description:"noUiSlider options"}},computed:{connect(){return Array.isArray(this.value)||[!0,!1]}},data(){return{slider:null}},methods:{createSlider(){a.create(this.$refs.slider,{start:this.value,connect:this.connect,range:this.range,...this.options});const e=this.$refs.slider.noUiSlider;e.on("slide",()=>{let r=e.get();r!==this.value&&this.$emit("input",r)})}},mounted(){this.createSlider()},watch:{value(e,r){const t=this.$refs.slider.noUiSlider,i=t.get();e!==r&&i!==e&&(Array.isArray(i)&&Array.isArray(e)?r.length===e.length&&r.every((s,n)=>s===e[n])&&t.set(e):t.set(e))}}};var o=function(){var r=this,t=r._self._c;return t("div",{staticClass:"input-slider-container"},[t("div",{ref:"slider",staticClass:"input-slider",class:[`slider-${r.type}`],attrs:{disabled:r.disabled}})])},c=[],p=l(d,o,c,!1,null,null,null,null);const h=p.exports;export{h as default};
