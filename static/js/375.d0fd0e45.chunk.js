"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[375],{2066:function(e,n,t){var r=t(1413),a=(t(72791),t(3466)),c=t.n(a),s=t(74569),o=t.n(s),i=t(59434),u=t(75594),l=t(67734),p=t(80184);n.Z=function(e){var n=e.values,t=e.setValues,a=e.setLoading,s=(0,i.v9)((function(e){return(0,r.Z)({},e)})).user;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"row",children:n.images&&n.images.map((function(e){return(0,p.jsx)(u.Z,{count:"X",onClick:function(){return c=e.public_id,a(!0),void o().post("".concat("https://nice-mole-39.a276.dcdg.xyz/api","/removeimages"),{public_id:c},{headers:{authtoken:s?s.token:""}}).then((function(e){a(!1);var s=n.images.filter((function(e){return e.public_id!==c}));t((0,r.Z)((0,r.Z)({},n),{},{images:s}))})).catch((function(e){console.log(e),a(!1)}));var c},style:{cursor:"pointer"},children:(0,p.jsx)(l.C,{src:e.url,size:100,shape:"square",className:"ml-3"})},e.public_id)}))}),(0,p.jsx)("div",{className:"row",children:(0,p.jsxs)("label",{className:"btn btn-primary btn-raised mt-3",children:["Choose File",(0,p.jsx)("input",{type:"file",multiple:!0,hidden:!0,accept:"images/*",onChange:function(e){var i=e.target.files,u=n.images;if(i){a(!0);for(var l=0;l<i.length;l++)c().imageFileResizer(i[l],720,720,"JPEG",100,0,(function(e){o().post("".concat("https://nice-mole-39.a276.dcdg.xyz/api","/uploadimages"),{image:e},{headers:{authtoken:s?s.token:""}}).then((function(e){a(!1),u.push(e.data),t((0,r.Z)((0,r.Z)({},n),{},{images:u}))})).catch((function(e){a(!1),console.log("CLOUDINARY UPLOAD ERR",e)}))}),"base64")}}})]})})]})}},77834:function(e,n,t){t(72791);var r=t(91523),a=t(80184);n.Z=function(){return(0,a.jsx)("nav",{children:(0,a.jsxs)("ul",{className:"nav flex-column",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/dashboard",className:"nav-link",children:"Dashboard"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/product",className:"nav-link",children:"Product"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/products",className:"nav-link",children:"Products"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/category",className:"nav-link",children:"Category"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/sub",className:"nav-link",children:"Sub Category"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/admin/coupon",className:"nav-link",children:"Coupon"})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.rU,{to:"/user/password",className:"nav-link",children:"Password"})})]})})}},86729:function(e,n,t){t.d(n,{CP:function(){return o},Gu:function(){return d},k4:function(){return p},n3:function(){return i},sT:function(){return u},yr:function(){return l}});var r=t(74165),a=t(15861),c=t(74569),s=t.n(c),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://nice-mole-39.a276.dcdg.xyz/api","/categories"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://nice-mole-39.a276.dcdg.xyz/api","/category/").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s().delete("".concat("https://nice-mole-39.a276.dcdg.xyz/api","/category/").concat(n),{headers:{authtoken:t}}));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s().put("".concat("https://nice-mole-39.a276.dcdg.xyz/api","/category/").concat(n),t,{headers:{authtoken:a}}));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().post("".concat("https://nice-mole-39.a276.dcdg.xyz/api","/category"),n,{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://nice-mole-39.a276.dcdg.xyz/api","/category/subs/").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},57027:function(e,n,t){t.d(n,{Ej:function(){return f},RB:function(){return x},Xp:function(){return d},Y2:function(){return h},cE:function(){return m},kh:function(){return u},nM:function(){return p},ry:function(){return o},su:function(){return i},wv:function(){return l}});var r=t(74165),a=t(15861),c=t(74569),s=t.n(c),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().post("".concat("https://nice-mole-39.a276.dcdg.xyz/api","/product"),n,{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://nice-mole-39.a276.dcdg.xyz/api","/products/").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().delete("".concat("https://nice-mole-39.a276.dcdg.xyz/api","/product/").concat(n),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://nice-mole-39.a276.dcdg.xyz/api","/product/").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().put("".concat("https://nice-mole-39.a276.dcdg.xyz/api","/product/").concat(n),t,{headers:{authtoken:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().post("".concat("https://nice-mole-39.a276.dcdg.xyz/api","/products"),{sort:n,order:t,page:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://nice-mole-39.a276.dcdg.xyz/api","/products/total"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().put("".concat("https://nice-mole-39.a276.dcdg.xyz/api","/product/star/").concat(n),{star:t},{headers:{authtoken:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat("https://nice-mole-39.a276.dcdg.xyz/api","/product/related/").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().post("".concat("https://nice-mole-39.a276.dcdg.xyz/api","/search/filters"),n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},97375:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r=t(4942),a=t(1413),c=t(29439),s=t(72791),o=t(59434),i=t(77834),u=t(9085),l=t(57027),p=t(42220),d=t(80184),h=p.Z.Option,f=function(e){var n=e.handleSubmit,t=e.handleChange,r=e.values,c=e.handleCategoryChange,s=e.subOptions,o=e.showSub,i=e.setValues,u=r.title,l=r.description,f=r.price,m=r.categories,x=(r.category,r.subs),v=(r.shipping,r.quantity),g=(r.images,r.colors),j=r.brands;r.color,r.brand;return(0,d.jsxs)("form",{onSubmit:n,children:[(0,d.jsxs)("div",{className:"form-group",children:[(0,d.jsx)("label",{children:"Title"}),(0,d.jsx)("input",{type:"text",name:"title",className:"form-control",value:u,onChange:t})]}),(0,d.jsxs)("div",{className:"form-group",children:[(0,d.jsx)("label",{children:"Description"}),(0,d.jsx)("textarea",{name:"description",type:"textarea",className:"form-control",value:l,onChange:t,cols:10,rows:10})]}),(0,d.jsxs)("div",{className:"form-group",children:[(0,d.jsx)("label",{children:"Price"}),(0,d.jsx)("input",{type:"text",name:"price",className:"form-control",value:f,onChange:t})]}),(0,d.jsxs)("div",{className:"form-group",children:[(0,d.jsx)("label",{children:"Shipping"}),(0,d.jsxs)("select",{name:"shipping",className:"form-control",onChange:t,children:[(0,d.jsx)("option",{children:"Please select"}),(0,d.jsx)("option",{value:"No",children:"No"}),(0,d.jsx)("option",{value:"Yes",children:"Yes"})]})]}),(0,d.jsxs)("div",{className:"form-group",children:[(0,d.jsx)("label",{children:"Quantity"}),(0,d.jsx)("input",{type:"number",name:"quantity",className:"form-control",value:v,onChange:t})]}),(0,d.jsxs)("div",{className:"form-group",children:[(0,d.jsx)("label",{children:"Color"}),(0,d.jsxs)("select",{name:"color",className:"form-control",onChange:t,children:[(0,d.jsx)("option",{children:"Please select"}),g.map((function(e){return(0,d.jsx)("option",{value:e,children:e},e)}))]})]}),(0,d.jsxs)("div",{className:"form-group",children:[(0,d.jsx)("label",{children:"Brand"}),(0,d.jsxs)("select",{name:"brand",className:"form-control",onChange:t,children:[(0,d.jsx)("option",{children:"Please select"}),j.map((function(e){return(0,d.jsx)("option",{value:e,children:e},e)}))]})]}),(0,d.jsxs)("div",{className:"form-group",children:[(0,d.jsx)("label",{children:"Category"}),(0,d.jsxs)("select",{name:"category",className:"form-control",onChange:c,children:[(0,d.jsx)("option",{children:"Please select"}),m.length>0&&m.map((function(e){return(0,d.jsx)("option",{value:e._id,children:e.name},e._id)}))]})]}),o&&(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{children:"Sub Categories"}),(0,d.jsx)(p.Z,{mode:"multiple",style:{width:"100%"},placeholder:"Please select",value:x,onChange:function(e){return i((0,a.Z)((0,a.Z)({},r),{},{subs:e}))},children:s.length>0&&s.map((function(e){return(0,d.jsx)(h,{value:e._id,children:e.name},e._id)}))})]}),(0,d.jsx)("br",{}),(0,d.jsx)("button",{className:"btn btn-outline-info",children:"Save"})]})},m=t(86729),x=t(2066),v=t(77106),g=t(28931),j={title:"",description:"",price:"",categories:[],category:"",subs:[],shipping:"",quantity:"",images:[],colors:["Black","Brown","Silver","White","Blue"],brands:["Apple","Samsung","Microsoft","Lenovo","ASUS"],color:"",brand:""},Z=function(){var e=(0,s.useState)(j),n=(0,c.Z)(e,2),t=n[0],p=n[1],h=(0,s.useState)([]),Z=(0,c.Z)(h,2),b=Z[0],y=Z[1],w=(0,s.useState)(!1),N=(0,c.Z)(w,2),k=N[0],C=N[1],z=(0,s.useState)(!1),S=(0,c.Z)(z,2),P=S[0],U=S[1],_=(0,g.k6)(),D=(0,o.v9)((function(e){return(0,a.Z)({},e)})).user;(0,s.useEffect)((function(){A()}),[]);var A=function(){return(0,m.CP)().then((function(e){return p((0,a.Z)((0,a.Z)({},t),{},{categories:e.data}))}))};return(0,d.jsx)("div",{className:"container-fluid",children:(0,d.jsxs)("div",{className:"row mt-3",children:[(0,d.jsx)("div",{className:"col-md-2",children:(0,d.jsx)(i.Z,{})}),(0,d.jsxs)("div",{className:"col-md-10",children:[P?(0,d.jsx)(v.Z,{className:"text-danger h1 pb-2 text-center"}):(0,d.jsx)("h4",{className:"pb-2 text-center",children:"Create product page"}),(0,d.jsx)("hr",{}),(0,d.jsx)("div",{className:"p-3",children:(0,d.jsx)(x.Z,{values:t,setValues:p,setLoading:U})}),(0,d.jsx)(f,{handleChange:function(e){p((0,a.Z)((0,a.Z)({},t),{},(0,r.Z)({},e.target.name,e.target.value)))},handleSubmit:function(e){e.preventDefault(),(0,l.ry)(t,D.token).then((function(e){console.log(e),window.alert('"'.concat(e.data.title,'" is created ?')),_.push("/admin/products")})).catch((function(e){console.log(e),u.Am.error(e.response.data.err)}))},setValues:p,values:t,handleCategoryChange:function(e){e.preventDefault(),p((0,a.Z)((0,a.Z)({},t),{},{subs:[],category:e.target.value})),(0,m.Gu)(e.target.value).then((function(e){y(e.data)})),C(!0)},subOptions:b,showSub:k})]})]})})}}}]);
//# sourceMappingURL=375.d0fd0e45.chunk.js.map