import{O as m,o as p,c,b as l,a as s,w as r,P as u,p as w}from"./index-Bl2R4E9n.js";import{_ as t,a as i,b as d}from"./Input-C2JLwf9r.js";import{_ as f}from"./Button-DcfQaTgA.js";const _={class:"grid gap-4"},b={class:"space-y-2"},V={class:"space-y-2"},v={class:"space-y-2"},x={__name:"ResetPassword",props:{email:String,token:String},setup(k){const o=m({token:"",email:"",password:"",password_confirmation:"",processing:!1}),n=()=>{};return(y,e)=>(p(),c("form",{onSubmit:u(n,["prevent"])},[l("div",_,[l("div",b,[s(i,{for:"email",value:"Email"}),s(t,{icon:"tabler--mail"},{default:r(()=>[s(d,{withIcon:"",id:"email",type:"email",placeholder:"Email",class:"block w-full",modelValue:o.email,"onUpdate:modelValue":e[0]||(e[0]=a=>o.email=a),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"])]),_:1})]),l("div",V,[s(i,{for:"password",value:"Password"}),s(t,{icon:"tabler--lock"},{default:r(()=>[s(d,{withIcon:"",id:"password",type:"password",placeholder:"Password",class:"block w-full",modelValue:o.password,"onUpdate:modelValue":e[1]||(e[1]=a=>o.password=a),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),_:1})]),l("div",v,[s(i,{for:"password_confirmation",value:"Confirm Password"}),s(t,{icon:"tabler--lock"},{default:r(()=>[s(d,{withIcon:"",id:"password_confirmation",type:"password",placeholder:"Confirm Password",class:"block w-full",modelValue:o.password_confirmation,"onUpdate:modelValue":e[2]||(e[2]=a=>o.password_confirmation=a),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),_:1})]),l("div",null,[s(f,{type:"submit",class:"w-full justify-center",disabled:o.processing},{default:r(()=>e[3]||(e[3]=[w(" Reset Password ")])),_:1},8,["disabled"])])])],32))}};export{x as default};
