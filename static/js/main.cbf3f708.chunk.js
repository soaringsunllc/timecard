(this["webpackJsonptimecard-temp"]=this["webpackJsonptimecard-temp"]||[]).push([[0],{162:function(e,t,n){},226:function(e,t){},227:function(e,t){},240:function(e,t,n){},241:function(e,t,n){},242:function(e,t,n){},243:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(50),r=n.n(c),i=(n(162),n(163),n(41)),o=n(145),s=n(23),l=n(5),u=["children"],d=Object(a.createContext)(),j={auth:!1,refetch:0,punches:[{fields:{}}],user:null},h=function(e,t){switch(t.type){case"SET_USER":return Object(s.a)(Object(s.a)({},e),{},{user:t.payload});case"SET_AUTH":return Object(s.a)(Object(s.a)({},e),{},{auth:t.payload});case"SET_PUNCHES":return Object(s.a)(Object(s.a)({},e),{},{punches:t.payload});case"UPDATE_REFETCH":return Object(s.a)(Object(s.a)({},e),{},{refetch:++e.refetch});default:return Object(s.a)({},e)}},b=function(e){var t=e.children,n=Object(o.a)(e,u),c=Object(a.useReducer)(h,j),r=Object(i.a)(c,2),b=r[0],p=r[1];return Object(l.jsx)(d.Provider,{value:Object(s.a)(Object(s.a)({},b),{},{dispatch:p},n),children:t})},p=function(){return Object(a.useContext)(d)},O=n(258),f=n(257),m=n(256),g=n(244),v=n(55),x=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(l.jsx)("div",{className:"api_key_container",children:n?Object(l.jsx)(m.a,{type:"text",onChange:function(e){localStorage.api_key=e.target.value,c(!1)}}):Object(l.jsx)("a",{href:"#",onClick:function(){c(!0)},children:"Set API Key"})})},y=n(65),S=n.n(y);var E=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=p(),o=r.user,s=r.dispatch;return localStorage.auth_until&&+localStorage.auth_until<=Date.now()&&delete localStorage.user,!o&&localStorage.user&&s({type:"SET_USER",payload:localStorage.user}),localStorage.auth_until&&+localStorage.auth_until>Date.now()&&o?(s({type:"SET_AUTH",payload:!0}),Object(l.jsx)(l.Fragment,{children:"Loading"})):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O.a,{className:"Authentication",children:Object(l.jsxs)(f.a,{children:[Object(l.jsxs)(f.a.Field,{children:[Object(l.jsx)("label",{children:"Username"}),Object(l.jsx)(m.a,{placeholder:"Username",onChange:function(e){return s({type:"SET_USER",payload:e.target.value})}})]}),Object(l.jsxs)(f.a.Field,{children:[Object(l.jsx)("label",{children:"Password"}),Object(l.jsx)(m.a,{type:"password",placeholder:"Password",onChange:function(e){return c(e.target.value)}})]}),Object(l.jsxs)(g.a,{animated:!0,primary:!0,onClick:function(e){e.preventDefault(),new S.a({apiKey:localStorage.api_key}).base("app7hR5UDZ4st97XS")("Employees").select({maxRecords:1,view:"Grid view",fields:["Emp Username","Emp Password"],filterByFormula:"{Emp Username}='".concat(o,"'")}).eachPage((function(e){var t,a,c,r;(null===(t=e[0])||void 0===t||null===(a=t.fields)||void 0===a?void 0:a["Emp Password"])&&(null===(c=e[0])||void 0===c||null===(r=c.fields)||void 0===r?void 0:r["Emp Username"])&&e[0].fields["Emp Password"]===n&&(s({type:"SET_AUTH",payload:!0}),localStorage.auth_until=Date.now()+36e5,localStorage.user=o)}),(function(e){e&&console.error(e)}))},children:[Object(l.jsx)(g.a.Content,{visible:!0,children:"Submit"}),Object(l.jsx)(g.a.Content,{hidden:!0,children:Object(l.jsx)(v.a,{name:"arrow right"})})]})]})}),o,Object(l.jsx)(x,{})]})},P=function(e){var t=e.inOut,n=p(),a=n.user,c=n.dispatch;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(g.a,{primary:"In"===t,secondary:"Out"===t,onClick:function(){navigator.geolocation.getCurrentPosition((function(e){var n=e.coords,r=n.latitude,i=n.longitude,o=e.timestamp;new S.a({apiKey:localStorage.api_key}).base("app7hR5UDZ4st97XS")("Punch Times").create([{fields:{Username:a,"Punch Time":o,"Punch Latitude":r,"Punch Longitude":i,"Punch Type":t}}],(function(e,t){if(e)return alert(e);c({type:"UPDATE_REFETCH",payload:!0})}))}),(function(e){console.log(e),alert('Please "Allow" location services for this site.')}),{maximumAge:1e4,timeout:5e3,enableHighAccuracy:!0})}.bind(undefined,t),children:["Clock ",t]})})};n(240);var T=function(e){var t=e.inOutNext;return Object(l.jsx)("div",{className:"DayGroup",children:Object(l.jsx)(P,{inOut:t})})};n(241);var w=function(){var e,t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1],o=p(),s=o.punches,u=o.refetch,d=o.user,j=o.dispatch;return Object(a.useEffect)((function(){new S.a({apiKey:localStorage.api_key}).base("app7hR5UDZ4st97XS")("Punch Times").select({maxRecords:20,view:"Grid view",sort:[{field:"ID",direction:"desc"}],filterByFormula:'AND(Username = "'.concat(d,'")')}).eachPage((function(e,t){r(!0),j({type:"SET_PUNCHES",payload:e}),t()}),(function(e){e&&console.error(e)}))}),[u,d,j]),Object(l.jsxs)("div",{className:"TimeCard",children:[Object(l.jsxs)("h2",{children:["Hello, ",d]}),c?Object(l.jsx)(T,{inOutNext:"In"===(null===(e=s[0])||void 0===e?void 0:e.fields["Punch Type"])?"Out":"In"}):"Loading...",Object(l.jsx)("br",{}),null===s||void 0===s?void 0:s.map((function(e){return Object(l.jsx)("div",{children:"".concat(e.fields["Punch Time"]," (").concat(e.fields["Punch Type"],")")})}))]})},_=function(){var e=p().auth;return Object(l.jsx)(l.Fragment,{children:e?Object(l.jsx)(w,{}):Object(l.jsx)(E,{})})};n(242);var C=function(){return Object(l.jsx)(b,{children:Object(l.jsx)(_,{})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,260)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};r.a.render(Object(l.jsx)(C,{}),document.getElementById("root")),U()}},[[243,1,2]]]);
//# sourceMappingURL=main.cbf3f708.chunk.js.map