(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{182:function(e,t,r){var content=r(186);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("4fe74830",content,!0,{sourceMap:!1})},185:function(e,t,r){"use strict";var n=r(182);r.n(n).a},186:function(e,t,r){(t=r(35)(!1)).push([e.i,".personCard__header{display:flex;justify-content:center;height:131px;border-bottom:1px solid rgba(0,0,0,.15);background-color:#f9f9f9}.personCard__header_img{border-radius:50%;overflow:hidden;width:150px;height:150px}.personCard__header_img_wrap{margin-top:20px;border:1px solid rgba(0,0,0,.25);width:160px;height:160px;background-color:#fff;border-radius:50%;display:flex;justify-content:center;align-items:center}.test12{position:relative;top:50px}",""]),e.exports=t},188:function(e,t,r){"use strict";r.r(t);r(21),r(34);var n=r(5),_={asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,data,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,n=e.params,t.next=3,r.$get("https://randomuser.me/api/?page=1&results=10&seed=abc");case 3:return data=t.sent,_=data.results.filter((function(e){return e.name.title+e.name.first+e.name.last===n.id})),t.abrupt("return",{user:_});case 6:case"end":return t.stop()}}),t)})))()}},l=(r(185),r(13)),component=Object(l.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("p",[e._v("Route params - "+e._s(e.$route.params))]),e._v(" "),r("p",[e._v("Route params.id - "+e._s(e.$route.params.id))]),e._v(" "),r("hr"),e._v(" "),r("h1",[e._v(e._s(e.user[0].name.first))]),e._v(" "),r("h1",[e._v(e._s(e.user[0].name.last))]),e._v(" "),r("div",{staticClass:"personCard"},[r("header",{staticClass:"personCard__header"},[r("div",{staticClass:"personCard__header_img_wrap"},[r("img",{staticClass:"personCard__header_img",attrs:{src:e.user[0].picture.large,alt:""}})])]),e._v(" "),r("section",{attrs:{personCard__details:""}},[r("p",{staticClass:"personCard__details_greeting"},[e._v("Hi, my name is")]),e._v(" "),r("h2",{staticClass:"personCard__details_name"},[e._v(e._s(e.user[0].name.first+" "+e.user[0].name.last))])]),e._v(" "),e._m(0)])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"personCard__nav"},[r("ul",{staticClass:"personCard__nav_list nl"},[r("li",{staticClass:"nl_item"},[e._v("1")]),e._v(" "),r("li",{staticClass:"nl_item"},[e._v("2")]),e._v(" "),r("li",{staticClass:"nl_item"},[e._v("3")]),e._v(" "),r("li",{staticClass:"nl_item"},[e._v("4")]),e._v(" "),r("li",{staticClass:"nl_item"},[e._v("5")]),e._v(" "),r("li",{staticClass:"nl_item"},[e._v("6")])])])}],!1,null,null,null);t.default=component.exports}}]);