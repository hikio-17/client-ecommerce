"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[799],{78664:function(s,e,n){n(72791);var r=n(91523),a=n(80184);e.Z=function(){return(0,a.jsx)("nav",{children:(0,a.jsxs)("ul",{className:"nav flex-column",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/user/history",className:"nav-link",children:"History"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/user/password",className:"nav-link",children:"Password"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/user/whislist",className:"nav-link",children:"Whislist"})})]})})}},36799:function(s,e,n){n.r(e);var r=n(74165),a=n(15861),t=n(29439),c=n(72791),l=n(9085),i=n(78664),d=n(16429),o=n(80184);e.default=function(){var s=(0,c.useState)(""),e=(0,t.Z)(s,2),n=e[0],u=e[1],h=(0,c.useState)(!1),m=(0,t.Z)(h,2),x=m[0],p=m[1],f=function(){var s=(0,a.Z)((0,r.Z)().mark((function s(e){return(0,r.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return e.preventDefault(),p(!0),s.next=4,d.I.currentUser.updatePassword(n).then((function(){p(!1),l.Am.success("Password updated successfully")})).catch((function(s){p(!1),console.log("PASSWORD UPDATED",s),l.Am.error(s.message)}));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}();return(0,o.jsx)("div",{className:"container-fluid",children:(0,o.jsxs)("div",{className:"row mt-3",children:[(0,o.jsx)("div",{className:"col-md-2",children:(0,o.jsx)(i.Z,{})}),(0,o.jsxs)("div",{className:"col-md-10",children:[x?(0,o.jsx)("h4",{className:"text-danger pb text-center",children:"Loading..."}):(0,o.jsx)("h4",{className:"pb-2 text-center",children:"Password Update"}),(0,o.jsx)("form",{onSubmit:f,children:(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsx)("label",{children:"Your password"}),(0,o.jsx)("input",{type:"password",className:"form-control",onChange:function(s){return u(s.target.value)},placeholder:"Enter new password",disabled:x,value:n}),(0,o.jsx)("button",{className:"btn btn-primary",disabled:!n||n.length<6||x,children:"Submit"})]})})]})]})})}}}]);
//# sourceMappingURL=799.f3f45b06.chunk.js.map