(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),u=n(1),o=n(8),l=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(u.a)(n,2),i=c[0],l=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(o.a)(e))})),l(""))}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){l(e.target.value)}}))},m=n(4),s=n.n(m),f=n(7),p=function(){var e=Object(f.a)(s.a.mark((function e(t){var n,a,r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t){e.next=11;break}return n="https://api.giphy.com/v1/gifs/search?api_key=syIIPWyYNfsw59c4yWBlOcl97LnfpLCe&q=".concat(encodeURI(t),"&limit=10"),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,c=r.data,i=c.map((function(e){return{id:e.id,title:e.title,image:e.images.downsized.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.id,n=e.title,a=e.image;return console.log(t,a,n),r.a.createElement("div",{className:"card animate__animated animate__zoomInDown"},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("p",null,n))},g=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){setTimeout((function(){p(e).then((function(e){c({data:e,loading:!1})}))}),1500)}),[e]),r}(t),c=n.data,i=n.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,t),i&&r.a.createElement("p",{className:"animate__animated animate__slideInLeft"},"Cargando..."),r.a.createElement("div",{className:"card-grid animate__animated animate__bounceInDown"},c.map((function(e){return r.a.createElement(d,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(a.useState)(["Rick and Morty"]),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(l,{setCategories:c}),r.a.createElement("hr",null),n.map((function(e){return r.a.createElement(g,{key:e,category:e})})))};n(15);i.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.dd9f1337.chunk.js.map