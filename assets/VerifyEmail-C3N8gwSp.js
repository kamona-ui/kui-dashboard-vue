import{O as u,e as c,r as f,o as a,c as o,b as t,l as p,a as r,w as n,n as y,P as g,F as v,p as l}from"./index-Bl2R4E9n.js";import{_ as b}from"./Button-DcfQaTgA.js";const _={key:0,class:"mb-4 text-sm font-medium text-green-600"},x={class:"mt-4 flex items-center justify-between"},E={__name:"VerifyEmail",props:{status:String},setup(k){const s=u({processing:!1}),i=c(!1),m=()=>{i.value=!0};return(w,e)=>{const d=f("router-link");return a(),o(v,null,[e[2]||(e[2]=t("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1)),i.value?(a(),o("div",_," A new verification link has been sent to the email address you provided during registration. ")):p("",!0),t("form",{onSubmit:g(m,["prevent"])},[t("div",x,[r(b,{type:"submit",class:y({"opacity-25":s.processing}),disabled:s.processing},{default:n(()=>e[0]||(e[0]=[l(" Resend Verification Email ")])),_:1},8,["class","disabled"]),r(d,{to:{name:"VerifyEmail"},method:"post",as:"button",class:"text-sm text-blue-600 hover:underline dark:text-blue-400"},{default:n(()=>e[1]||(e[1]=[l(" Log Out ")])),_:1})])],32)],64)}}};export{E as default};
