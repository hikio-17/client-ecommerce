"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[109],{14109:function(e,t,n){n.r(t);var r=n(74165),s=n(15861),a=n(1413),o=n(29439),u=n(72791),c=n(16429),i=n(9085),l=n(59434),f=n(80184);t.default=function(e){var t=e.history,n=(0,u.useState)(""),d=(0,o.Z)(n,2),h=d[0],p=d[1],m=(0,u.useState)(!1),v=(0,o.Z)(m,2),x=v[0],b=v[1],g=(0,l.v9)((function(e){return(0,a.Z)({},e)})).user;(0,u.useEffect)((function(){g&&g.token&&t.push("/")}),[g]);var k=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),b(!0),n={url:"http://localhost:3000/login",handleCodeInApp:!0},e.next=5,c.I.sendPasswordResetEmail(h,n).then((function(){p(""),b(!1),i.Am.success("Check your email for password reset link")})).catch((function(e){b(!1),i.Am.error(e.message),console.log("ERROR MSG IN FORGOT PASSWORD",e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:"container col-md-6 offset-md-3 p-5",children:[x?(0,f.jsx)("h4",{className:"text-danger",children:"Loading"}):(0,f.jsx)("h4",{children:"Forgot Password"}),(0,f.jsxs)("form",{onSubmit:k,children:[(0,f.jsx)("input",{type:"email",className:"form-control",value:h,onChange:function(e){return p(e.target.value)},placeholder:"Type your email",autoFocus:!0}),(0,f.jsx)("br",{}),(0,f.jsx)("button",{className:"btn btn-raised",disabled:!h,children:"Submit"})]})]})}}}]);
//# sourceMappingURL=109.0402121e.chunk.js.map