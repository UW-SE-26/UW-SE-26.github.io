(this["webpackJsonpclass-profile"]=this["webpackJsonpclass-profile"]||[]).push([[0],{55:function(e,t,c){},56:function(e,t,c){},78:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(45),j=c.n(s),r=(c(55),c.p,c(56),c(47)),i=c(4),x=c(6),b=c(3),u=c(2);var d=function(e){var t=Object(n.useState)([]),c=Object(x.a)(t,2),a=c[0],s=c[1];return Object(u.jsx)("div",{children:Object(u.jsxs)(b.k,{height:300,width:300,onMouseLeave:function(){return s([])},children:[Object(u.jsx)(b.h,{}),Object(u.jsx)(b.c,{}),Object(u.jsx)(b.j,{}),Object(u.jsx)(b.l,{}),Object(u.jsx)(b.e,{data:e.data,onNearestX:function(t,c){var n=c.index;return s([{x:e.data.map((function(e){return e.x}))[n],y:e.data.map((function(e){return e.y}))[n]}])}}),Object(u.jsx)(b.a,{values:a})]})})};var o=function(e){var t=Object(n.useState)([]),c=Object(x.a)(t,2),a=c[0],s=c[1];return Object(u.jsx)("div",{children:Object(u.jsxs)(b.k,{height:300,width:300,xType:"ordinal",onMouseLeave:function(){return s([])},children:[Object(u.jsx)(b.c,{}),Object(u.jsx)(b.h,{}),Object(u.jsx)(b.j,{}),Object(u.jsx)(b.l,{}),Object(u.jsx)(b.g,{data:e.data,onNearestX:function(t,c){var n=c.index;return s([{x:e.data.map((function(e){return e.x}))[n],y:e.data.map((function(e){return e.y}))[n]}])}}),Object(u.jsx)(b.a,{values:a})]})})};var O=function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)(b.k,{height:300,width:300,yType:"ordinal",children:[Object(u.jsx)(b.h,{}),Object(u.jsx)(b.c,{}),Object(u.jsx)(b.j,{}),Object(u.jsx)(b.l,{}),Object(u.jsx)(b.b,{data:e.data})]})})};var l=function(e){var t=Object(n.useState)([]),c=Object(x.a)(t,2),a=c[0],s=c[1];return Object(u.jsx)("div",{children:Object(u.jsxs)(b.k,{width:300,height:300,stackBy:"y",xType:"ordinal",children:[Object(u.jsx)(b.h,{}),Object(u.jsx)(b.c,{}),Object(u.jsx)(b.j,{}),Object(u.jsx)(b.l,{}),Object(u.jsx)(b.g,{data:e.data[0],onNearestX:function(t,c){var n=c.index;return s(e.data.map((function(e){return e[n]})))}}),Object(u.jsx)(b.g,{data:e.data[1]}),Object(u.jsx)(b.a,{values:a})]})})};var h=function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)(b.k,{width:300,height:300,stackBy:"x",yType:"ordinal",children:[Object(u.jsx)(b.h,{}),Object(u.jsx)(b.c,{}),Object(u.jsx)(b.j,{}),Object(u.jsx)(b.l,{}),Object(u.jsx)(b.b,{data:e.data[0]}),Object(u.jsx)(b.b,{data:e.data[1]})]})})};var y=function(e){var t=Object(n.useState)([]),c=Object(x.a)(t,2),a=c[0],s=c[1];return Object(u.jsx)("div",{children:Object(u.jsxs)(b.k,{width:300,height:300,children:[Object(u.jsx)(b.h,{}),Object(u.jsx)(b.c,{}),Object(u.jsx)(b.j,{}),Object(u.jsx)(b.l,{}),Object(u.jsx)(b.f,{className:"weighted-scatterplot",opacity:"0.6",sizeRange:[5,15],data:e.data,onNearestX:function(t,c){var n=c.index;return s([{x:e.data.map((function(e){return e.x}))[n],y:e.data.map((function(e){return e.y}))[n]}])}}),Object(u.jsx)(b.a,{values:a})]})})};var v=function(e){for(var t=Object(n.useState)([]),c=Object(x.a)(t,2),a=c[0],s=c[1],j=e.data,r=j.length,i=0,d=0;d<r;d++)i+=j[d].y;for(var o=i/50,O=[],l=[],h=0,y=0;y<r;y++){var v=h+j[y].y;O.push({x0:h,x:v,y0:0,y:10}),l.push({x:(h+v)/2,y:-2,label:j[y].x,style:{fontSize:10}}),h=v+o}var f=O;return Object(u.jsx)("div",{children:Object(u.jsxs)(b.k,{height:150,width:450,onMouseLeave:function(){return s([])},children:[Object(u.jsx)(b.d,{data:l}),Object(u.jsx)(b.i,{data:f,onNearestX:function(e,t){var c=t.index;return s([{x:l.map((function(e){return e.label}))[c],y:j.map((function(e){return e.y}))[c]}])}}),Object(u.jsx)(b.a,{values:a})]})})},f=[{x:0,y:8},{x:1,y:5},{x:2,y:4},{x:3,y:9},{x:4,y:1},{x:5,y:7},{x:6,y:6},{x:7,y:3},{x:8,y:2},{x:9,y:0}],g=[{x:1,y:10,size:15},{x:1.7,y:12,size:10},{x:2,y:5,size:1},{x:3,y:15,size:12},{x:2.5,y:10,size:2},{x:3.5,y:7,size:4},{x:4.5,y:8,size:25},{x:5.5,y:7,size:23}],p=[{x:1,y:10},{x:2,y:5},{x:3,y:15}],m=[{y:1,x:3},{y:2,x:7},{y:3,x:10},{y:4,x:9},{y:5,x:15}],S=[[{x:1,y:10},{x:2,y:5},{x:3,y:15}],[{x:1,y:12},{x:2,y:2},{x:3,y:11}]],k=[[{y:1,x:10},{y:2,x:5},{y:3,x:15}],[{y:1,x:12},{y:2,x:2},{y:3,x:11}]],N=[{x:"Blue",y:10},{x:"Grey",y:20},{x:"Red",y:30}];var _=function(){return Object(u.jsxs)("div",{children:["About Page",Object(u.jsx)("p",{children:"UW SE 26 Class Profile"}),Object(u.jsx)(d,{data:f}),Object(u.jsx)(o,{data:p}),Object(u.jsx)(O,{data:m}),Object(u.jsx)(l,{data:S}),Object(u.jsx)(h,{data:k}),Object(u.jsx)(y,{data:g}),Object(u.jsx)(v,{data:N})]})};var D=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:"Academics Page"})})};var w=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:"Demographics Page"})})};var A=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:"Sex/Drugs Page"})})};var z=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:"Housing Page"})})};var C=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Miscellaneous Page"}),"Data that doesn't really fit into the other categories will go here."]})};c(78);var M=function(e){var t=function(){e.setAbout(!1),e.setAcademics(!1),e.setDemographics(!1),e.setSexDrugs(!1),e.setHousing(!1),e.setMisc(!1)};return Object(u.jsx)("div",{children:Object(u.jsxs)("header",{className:"main_header",children:[Object(u.jsx)("button",{onClick:function(){return t(),void e.setAbout(!0)},className:"main_header_button",children:"About"}),Object(u.jsx)("button",{onClick:function(){return t(),void e.setMisc(!0)},className:"main_header_button",children:" Misc"}),Object(u.jsx)("button",{onClick:function(){return t(),void e.setSexDrugs(!0)},className:"main_header_button",children:"Sex/Drugs"}),Object(u.jsx)("button",{onClick:function(){return t(),void e.setHousing(!0)},className:"main_header_button",children:"Housing"}),Object(u.jsx)("button",{onClick:function(){return t(),void e.setAcademics(!0)},className:"main_header_button",children:"Academics"}),Object(u.jsx)("button",{onClick:function(){return t(),void e.setDemographics(!0)},className:"main_header_button",children:"Demographics"})]})})};var P=function(){var e=Object(n.useState)(!0),t=Object(x.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),j=Object(x.a)(s,2),r=j[0],i=j[1],b=Object(n.useState)(!1),d=Object(x.a)(b,2),o=d[0],O=d[1],l=Object(n.useState)(!1),h=Object(x.a)(l,2),y=h[0],v=h[1],f=Object(n.useState)(!1),g=Object(x.a)(f,2),p=g[0],m=g[1],S=Object(n.useState)(!1),k=Object(x.a)(S,2),N=k[0],P=k[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(M,{setAbout:a,setAcademics:i,setDemographics:O,setSexDrugs:v,setHousing:m,setMisc:P}),c&&Object(u.jsx)(_,{}),r&&Object(u.jsx)(D,{}),o&&Object(u.jsx)(w,{}),y&&Object(u.jsx)(A,{}),p&&Object(u.jsx)(z,{}),N&&Object(u.jsx)(C,{})]})};var T=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(r.a,{children:Object(u.jsx)(i.c,{children:Object(u.jsx)(i.a,{exact:!0,path:"/class-profile",children:Object(u.jsx)(P,{})})})})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,j=t.getTTFB;c(e),n(e),a(e),s(e),j(e)}))};j.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root")),B()}},[[81,1,2]]]);
//# sourceMappingURL=main.e78443e4.chunk.js.map