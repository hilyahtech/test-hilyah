(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{247:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(30),r(25),r(36),{layout:"blog",head:function(){return{title:this.data.title,titleTemplate:"%s - Hilyahtech",meta:[{hid:"description",name:"description",content:this.data.description},{hid:"og:title",property:"og:title",content:this.data.title},{hid:"og:description",property:"og:description",content:this.data.description},{hid:"og:type",property:"og:type",content:"article"},{hid:"twitter:title",name:"twitter:title",content:this.data.title},{hid:"twitter:description",name:"twitter:description",content:this.data.description}]}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,o=t.error,e.prev=1,e.next=4,r("blog",n.slug).fetch();case 4:return data=e.sent,e.abrupt("return",{data:data});case 8:e.prev=8,e.t0=e.catch(1),o({statusCode:404});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},computed:{doLink:function(){return"https://github.com/hilyahtech/hilyahtech.com/tree/main/content/blog/".concat(this.data.slug,".md")}}}),c=r(11),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"title"},[t._v(t._s(t.data.title))]),t._v(" "),r("hr"),t._v(" "),r("article",{staticClass:"content"},[r("nuxt-content",{attrs:{document:t.data}}),t._v(" "),r("p",{staticClass:"my-4"},[r("a",{staticClass:"button is-primary",attrs:{href:t.data.repository,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                Pergi Ke Repositori Saya\n            ")])]),t._v(" "),r("div",{staticClass:"tags mt-4"},t._l(t.data.tags,(function(e){return r("span",{key:e,staticClass:"tag"},[t._v(t._s(e))])})),0)],1),t._v(" "),r("div",{staticClass:"level"},[r("div",{staticClass:"level-left"},[r("a",{attrs:{href:t.doLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("Edit halaman ini di Github")])]),t._v(" "),r("div",{staticClass:"level-rigth"},[t._v("\n            Perbarui "+t._s(new Date(t.data.updatedAt).toLocaleDateString())+"\n        ")])]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"media"},[r("div",{staticClass:"media-left"},[r("figure",{staticClass:"image is-96x96"},[r("img",{staticClass:"is-rounded",attrs:{src:t.data.author.avatar,alt:"avatar"}})])]),t._v(" "),r("div",{staticClass:"media-content"},[r("p",[t._v("DITULIS OLEH:")]),t._v(" "),r("strong",[t._v(t._s(t.data.author.name))]),t._v(" "),r("br"),t._v(" "),r("small",[t._v(t._s(t.data.author.work))])])])])}),[],!1,null,null,null);e.default=component.exports}}]);