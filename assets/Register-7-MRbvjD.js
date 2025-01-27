import{O as c,r as p,o as f,c as _,b as a,a as s,w as t,p as i,P as w}from"./index-Bl2R4E9n.js";import{_ as n,a as r,b as d}from"./Input-C2JLwf9r.js";import{_ as b}from"./Checkbox-oQ6-Dh2G.js";import{_ as v}from"./Button-DcfQaTgA.js";const g={class:"grid gap-6"},k={class:"space-y-2"},x={class:"space-y-2"},y={class:"space-y-2"},V={class:"space-y-2"},h={class:"flex items-center"},P={class:"text-sm text-gray-600 dark:text-gray-400"},B={__name:"Register",setup(I){const o=c({name:"",email:"",password:"",password_confirmation:"",terms:!1,processing:!1}),m=()=>{};return(N,e)=>{const u=p("router-link");return f(),_("form",{onSubmit:w(m,["prevent"])},[a("div",g,[a("div",k,[s(r,{for:"name",value:"Name"}),s(n,{icon:"tabler--user-plus"},{default:t(()=>[s(d,{withIcon:"",id:"name",type:"text",placeholder:"Name",class:"block w-full",modelValue:o.name,"onUpdate:modelValue":e[0]||(e[0]=l=>o.name=l),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),_:1})]),a("div",x,[s(r,{for:"email",value:"Email"}),s(n,{icon:"tabler--mail"},{default:t(()=>[s(d,{withIcon:"",id:"email",type:"email",class:"block w-full",placeholder:"Email",modelValue:o.email,"onUpdate:modelValue":e[1]||(e[1]=l=>o.email=l),required:"",autocomplete:"username"},null,8,["modelValue"])]),_:1})]),a("div",y,[s(r,{for:"password",value:"Password"}),s(n,{icon:"tabler--lock"},{default:t(()=>[s(d,{withIcon:"",id:"password",type:"password",class:"block w-full",placeholder:"Password",modelValue:o.password,"onUpdate:modelValue":e[2]||(e[2]=l=>o.password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),_:1})]),a("div",V,[s(r,{for:"password_confirmation",value:"Confirm Password"}),s(n,{icon:"tabler--lock"},{default:t(()=>[s(d,{withIcon:"",id:"password_confirmation",type:"password",class:"block w-full",placeholder:"Confirm Password",modelValue:o.password_confirmation,"onUpdate:modelValue":e[3]||(e[3]=l=>o.password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),_:1})]),a("div",null,[s(r,{for:"terms"},{default:t(()=>[a("div",h,[s(b,{name:"terms",id:"terms",checked:o.terms,"onUpdate:checked":e[4]||(e[4]=l=>o.terms=l)},null,8,["checked"]),e[5]||(e[5]=a("div",{class:"ml-2"},[i(" I agree to the "),a("a",{target:"_blank",href:"#",class:"text-sm text-blue-600 underline hover:text-blue-900"}," Terms of Service "),i(" and "),a("a",{target:"_blank",href:"#",class:"text-sm text-blue-600 underline hover:text-blue-900"}," Privacy Policy ")],-1))])]),_:1})]),a("div",null,[s(v,{type:"submit",class:"w-full justify-center gap-2",disabled:o.processing,"start-icon":"tabler--user-plus"},{default:t(()=>e[6]||(e[6]=[a("span",null,"Register",-1)])),_:1},8,["disabled"])]),a("p",P,[e[8]||(e[8]=i(" Already have an account? ")),s(u,{to:{name:"Login"},class:"text-blue-500 hover:underline"},{default:t(()=>e[7]||(e[7]=[i(" Login ")])),_:1})])])],32)}}};export{B as default};
