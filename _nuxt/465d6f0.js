(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{250:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(30),n(25),n(36),{layout:"blog",head:function(){return{title:this.page.title,titleTemplate:"%s - Hilyahtech",meta:[{hid:"description",name:"description",content:this.page.description},{hid:"og:title",property:"og:title",content:this.page.title},{hid:"og:description",property:"og:description",content:this.page.description},{hid:"og:type",property:"og:type",content:"article"},{hid:"twitter:title",name:"twitter:title",content:this.page.title},{hid:"twitter:description",name:"twitter:description",content:this.page.description}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,c=t.error,e.prev=1,e.next=4,n("/page/".concat(r.slug)).fetch();case 4:return data=e.sent,e.abrupt("return",{page:data});case 8:e.prev=8,e.t0=e.catch(1),c({statusCode:404});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},computed:{doLink:function(){return"https://github.com/hilyahtech/hilyahtech.com/tree/main/content/karya/".concat(this.page.slug,".md")}}}),o=n(11),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"title"},[t._v(t._s(t.page.title))]),t._v(" "),n("hr"),t._v(" "),n("article",{staticClass:"content"},[n("nuxt-content",{attrs:{document:t.page}})],1),t._v(" "),n("div",{staticClass:"level"},[n("div",{staticClass:"level-left"},[n("a",{attrs:{href:t.doLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("Edit halaman ini di Github")])]),t._v(" "),n("div",{staticClass:"level-rigth"},[t._v("\n            Perbarui "+t._s(new Date(t.page.updatedAt).toLocaleDateString())+"\n        ")])])])}),[],!1,null,null,null);e.default=component.exports}}]);