import{D as n,w as d,S as c,e as p,n as i,y as k}from"./vendor.87ee42be.js";const f=["value"],b={props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(o,{emit:v}){const t=o,{value:s,checked:l}=t,r=n(l);return(u,e)=>d((p(),i("input",{type:"checkbox",value:k(s),"onUpdate:modelValue":e[0]||(e[0]=a=>r.value=a),class:"text-purple-500 border-gray-300 rounded focus:border-purple-300 focus:ring focus:ring-purple-500 dark:border-gray-600 dark:bg-dark-eval-1 dark:focus:ring-offset-dark-eval-1",onChange:e[1]||(e[1]=a=>u.$emit("update:checked",r.value))},null,40,f)),[[c,r.value]])}};export{b as _};