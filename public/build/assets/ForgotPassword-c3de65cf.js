import{T as u,o as l,c as d,w as m,a as t,u as s,Z as c,f,t as p,g as _,b as a,d as w,n as g,e as y}from"./app-e46c25f8.js";import{_ as b}from"./GuestLayout-d15d3ae0.js";import{_ as x}from"./InputError-e01db24f.js";import{_ as k}from"./InputLabel-d4f45a74.js";import{P as V}from"./PrimaryButton-2fcdfcde.js";import{_ as h}from"./TextInput-0099468b.js";import"./ApplicationLogo-d80572c8.js";import"./_plugin-vue_export-helper-c27b6911.js";const v=a("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),B={key:0,class:"mb-4 font-medium text-sm text-green-600"},N={class:"flex items-center justify-end mt-4"},z={__name:"ForgotPassword",props:{status:{type:String}},setup(o){const e=u({email:""}),i=()=>{e.post(route("password.email"))};return(P,r)=>(l(),d(b,null,{default:m(()=>[t(s(c),{title:"Forgot Password"}),v,o.status?(l(),f("div",B,p(o.status),1)):_("",!0),a("form",{onSubmit:y(i,["prevent"])},[a("div",null,[t(k,{for:"email",value:"Email"}),t(h,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":r[0]||(r[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(x,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),a("div",N,[t(V,{class:g({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:m(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{z as default};