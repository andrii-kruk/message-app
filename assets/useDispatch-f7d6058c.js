import{j as u,I as d,B as f,r as R,R as o}from"./index-dd92cbcd.js";const S=({type:t="text",value:e="",name:n,min:s,max:a,placeholder:x,required:i=!0,onChange:p})=>u.jsx(d,{type:t,value:e,name:n,placeholder:x,minLength:s,maxLength:a,required:i,onChange:p}),j=({type:t,variant:e,content:n,disabled:s=!1})=>u.jsx(f,{type:t,className:e,disabled:s,children:n});function r(t=o){return function(){return R.useContext(t)}}const h=r();function c(t=o){const e=t===o?h:r(t);return function(){const{store:s}=e();return s}}const l=c();function m(t=o){const e=t===o?l:c(t);return function(){return e().dispatch}}const B=m();export{j as B,S as I,B as u};