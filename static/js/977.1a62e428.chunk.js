"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[977],{368:function(e,t,r){var n=r(689),a=r(87),u=r(184);t.Z=function(e){var t=e.movies,r=(0,n.TH)();return(0,u.jsx)("ul",{children:t.map((function(e){var t=e.title,n=e.original_title,c=e.id;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(c),state:{from:r},children:t||n})},c)}))})}},977:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(87),i=r(791),o="Searchbar_Searchbar__5WKzV",l="Searchbar_SearchForm__XuPyK",h="Searchbar_SearchFormInput__FT6Bx",f="Searchbar_SearchFormButton__dksRa",p=r(184),d=function(e){var t=e.onSubmit,r=(0,i.useState)(""),n=(0,a.Z)(r,2),u=n[0],c=n[1],s=(0,i.useState)(""),d=(0,a.Z)(s,2),m=d[0],v=d[1];return(0,p.jsx)("div",{className:o,children:(0,p.jsxs)("form",{className:l,onSubmit:function(e){if(e.preventDefault(),""!==u.trim()){if(u===m)return alert("Same request"),void c("");v(u),t(u),c("")}else alert("Please, fill in the input field")},children:[(0,p.jsx)("input",{className:h,name:"search",value:u,onChange:function(e){c(e.currentTarget.value.toLowerCase())},type:"text",autoComplete:"on",autoFocus:!0}),(0,p.jsx)("button",{type:"submit",className:f,children:"Search"})]})})},m=r(243),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Z.get("".concat("https://api.themoviedb.org/3","/search/movie"),{params:{api_key:"a4c701b3a41d7d3c7de995b9f81d852d",language:"en-US",query:t,page:1,include_adult:!1}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),x=v,b=r(368),S=r(691),_=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],o=(0,s.lr)(),l=(0,a.Z)(o,2),h=l[0],f=l[1],m=(0,i.useState)(!1),v=(0,a.Z)(m,2),_=v[0],j=v[1],g=(0,i.useState)(null),k=(0,a.Z)(g,2),w=k[0],y=k[1],Z=h.get("query")||"";(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,x(Z);case 4:if(0!==(t=e.sent).length){e.next=7;break}return e.abrupt("return",alert("No movies by your query"));case 7:u(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),y(e.t0);case 13:return e.prev=13,j(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();""!==Z&&e()}),[Z]);return(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{children:(0,p.jsx)(d,{onSubmit:function(e){f({query:e})}})}),_?(0,p.jsx)("div",{className:"loader",children:(0,p.jsx)(S.Nx,{width:"200",color:"#4fa94d"})}):(0,p.jsx)(b.Z,{movies:r}),w&&(0,p.jsx)("p",{children:"Something went wrong..."})]})}}}]);
//# sourceMappingURL=977.1a62e428.chunk.js.map