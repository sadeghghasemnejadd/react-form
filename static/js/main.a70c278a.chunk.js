(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),a=(n(13),n(1)),s=n(4),i={value:"",isTouch:!1},l=function(e,t){return"CHANGE"===t.type?{value:t.value,isTouch:e.isTouch}:"BLUR"===t.type?{value:e.value,isTouch:!0}:(t.type,i)},o=function(e){var t=Object(a.useReducer)(l,i),n=Object(s.a)(t,2),r=n[0],c=n[1],o=e(r.value),u=!o&&r.isTouch;return{name:r.value,isValid:o,hasError:u,change:function(e){c({type:"CHANGE",value:e.target.value})},blur:function(){c({type:"BLUR"})},reset:function(){c({type:"RESET"})}}},u=n(0),m=function(e){var t=o((function(e){return""!==e.trim()})),n=t.name,r=t.isValid,c=t.hasError,a=t.change,s=t.blur,i=t.reset,l=o((function(e){return""!==e.trim()})),m=l.name,d=l.isValid,j=l.hasError,b=l.change,h=l.blur,p=l.reset,v=o((function(e){return""!==e.trim()&&e.includes("@")&&e.includes(".")})),x=v.name,O=v.isValid,f=v.hasError,N=v.change,g=v.blur,y=v.reset,E=!1;O&&d&&r&&(E=!0);return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),E&&(i(),p(),y())},children:[Object(u.jsxs)("div",{className:"control-group",children:[Object(u.jsxs)("div",{className:"form-control ".concat(c&&"invalid"),children:[Object(u.jsx)("label",{htmlFor:"name",children:"First Name"}),Object(u.jsx)("input",{type:"text",id:"name",value:n,onChange:a,onBlur:s}),c&&Object(u.jsx)("p",{className:"error-text ",children:"name must not be empty"})]}),Object(u.jsxs)("div",{className:"form-control ".concat(j&&"invalid"),children:[Object(u.jsx)("label",{htmlFor:"name",children:"Last Name"}),Object(u.jsx)("input",{type:"text",id:"name",value:m,onChange:b,onBlur:h}),j&&Object(u.jsx)("p",{className:"error-text ",children:"lastName must not be empty"})]})]}),Object(u.jsxs)("div",{className:"form-control ".concat(f&&"invalid"),children:[Object(u.jsx)("label",{htmlFor:"name",children:"E-Mail Address"}),Object(u.jsx)("input",{type:"text",id:"name",value:x,onChange:N,onBlur:g}),f&&Object(u.jsx)("p",{className:"error-text ",children:"email should be correct"})]}),Object(u.jsx)("div",{className:"form-actions",children:Object(u.jsx)("button",{className:"".concat(!E&&"disabled"),children:"Submit"})})]})};var d=function(){return Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(m,{})})};c.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(d,{}))}},[[15,1,2]]]);
//# sourceMappingURL=main.a70c278a.chunk.js.map