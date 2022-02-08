import{r as u,e as m,n as f,p as t,i as e,x as a,y as s,R as w,m as _}from"./vendor.87ee42be.js";import{_ as d,I as i,a as n}from"./Input.1b91c253.js";import{_ as h}from"./Button.063ae3c3.js";import{r as c}from"./LockClosedIcon.c5dd1ca8.js";import{r as v}from"./MailIcon.95d52a80.js";import"./plugin-vue_export-helper.21dcd24c.js";const V=["onSubmit"],b={class:"grid gap-4"},y={class:"space-y-2"},I={class:"space-y-2"},k={class:"space-y-2"},g=_("Reset Password"),E={props:{email:String,token:String},setup(j){const o=u({token:"",email:"",password:"",password_confirmation:"",processing:!1}),p=()=>{};return(x,r)=>(m(),f("form",{onSubmit:w(p,["prevent"])},[t("div",b,[t("div",y,[e(d,{for:"email",value:"Email"}),e(i,null,{icon:a(()=>[e(s(v),{"aria-hidden":"true",class:"w-5 h-5"})]),default:a(()=>[e(n,{withIcon:"",id:"email",type:"email",placeholder:"Email",class:"block w-full",modelValue:s(o).email,"onUpdate:modelValue":r[0]||(r[0]=l=>s(o).email=l),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"])]),_:1})]),t("div",I,[e(d,{for:"password",value:"Password"}),e(i,null,{icon:a(()=>[e(s(c),{"aria-hidden":"true",class:"w-5 h-5"})]),default:a(()=>[e(n,{withIcon:"",id:"password",type:"password",placeholder:"Password",class:"block w-full",modelValue:s(o).password,"onUpdate:modelValue":r[1]||(r[1]=l=>s(o).password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),_:1})]),t("div",k,[e(d,{for:"password_confirmation",value:"Confirm Password"}),e(i,null,{icon:a(()=>[e(s(c),{"aria-hidden":"true",class:"w-5 h-5"})]),default:a(()=>[e(n,{withIcon:"",id:"password_confirmation",type:"password",placeholder:"Confirm Password",class:"block w-full",modelValue:s(o).password_confirmation,"onUpdate:modelValue":r[2]||(r[2]=l=>s(o).password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),_:1})]),t("div",null,[e(h,{type:"submit",class:"justify-center w-full",disabled:s(o).processing},{default:a(()=>[g]),_:1},8,["disabled"])])])],40,V))}};export{E as default};