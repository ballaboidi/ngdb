(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1e80":function(e,t,n){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"Logo",(function(){return H.a}));n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,s,i,o,c=n("2b0e"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("Header"),n("random-text"),n("router-view",{attrs:{name:"nav"}}),n("router-view",{key:e.$route.fullPath,attrs:{name:"content"}})],1)},u=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-img mx-auto my-5"},[n("router-link",{attrs:{to:{path:"/"}}},[n("app-image",{staticClass:"img-fluid",attrs:{name:"Logo",alt:"Logo ngdb"}})],1)],1)},f=[],m={name:"Header"},p=m,b=(n("9691"),n("2877")),j=Object(b["a"])(p,d,f,!1,null,null,null),v=j.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"random-text-wrapper col-12 text-center mb-5"},[n("h1",{staticClass:"font-weight-light"},[e._v(e._s(e.message))])])},g=[],w={name:"RandomText",data:function(){return{message:void 0}},mounted:function(){var e=["Noch son Spruch, Rohrbruch","Komisch, dieser Text ändert sich dauernd","Deine Freunde sind Gangster, ticken Drogen im Park, ich kenn nur Leute mit festen Job und Bausparvertrag","Die Hundeleine unter den Sexspielzeugen","Gruepochenbildunv","drei Ecken, ein Elfer","Objektiv betrachtet ist Kräuterhofweg 50 nicht das Ende der Welt","Kein Mensch, kein Tier, die Nummer Vier!",'Uh lala, wir haben hier einen Gast auf "Fronkreich"'],t=e[Math.floor(Math.random()*e.length)];this.message=t}},y=w,_=Object(b["a"])(y,h,g,!1,null,null,null),k=_.exports,x={name:"App",components:{Header:v,RandomText:k}},O=x,D=(n("5c0b"),Object(b["a"])(O,l,u,!1,null,null,null)),S=D.exports,z=n("522d"),C=n("8c4f"),E=n("eb7e"),P=n("478e"),$=n("2bf2"),T=Object(P["a"])({uri:"http://localhost:1337/graphql"}),q=new $["a"],M=new E["a"]({link:T,cache:q}),N=M,Y=n("5530"),A=n("6469"),H=n.n(A),I={name:"AppImage",functional:!0,props:{name:{type:String,default:void 0,required:!0},alt:{type:String,default:void 0,required:!0}},render:function(e,t){var n=t.props,r=n.name,s=n.alt,i=t.data;return i.class=["img-fluid",i.class],i.attrs=Object(Y["a"])({src:a[r],alt:s,title:s},i.attrs),e("img",i)}},J=I,K=Object(b["a"])(J,r,s,!1,null,null,null),L=K.exports,U=(n("cb29"),n("a9e3"),n("b75f")),B={name:"AppIcon",functional:!0,props:{name:{type:String,default:void 0,required:!0},fill:{type:String,default:"currentColor"},size:{type:[Number,String],default:24}},render:function(e,t){var n=t.props,a=n.name,r=n.fill,s=n.size,i=t.data;return i.attrs=Object(Y["a"])({fill:r,width:s,height:s,version:"1.1",viewBox:"0 0 24 24","aria-hidden":"true"},i.attrs),e(U[a],i)}},F=B,G=Object(b["a"])(F,i,o,!1,null,null,null),R=G.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("swiper",{ref:"mySwiper",attrs:{options:e.swiperOptions}},e._l(e.events,(function(t){return n("swiper-slide",{key:t.id,staticClass:"card shadow px-0"},[n("router-link",{key:t.id,attrs:{to:{path:"/events/"+t.id}}},[n("img",{staticClass:"card-img-top image-fluid",attrs:{src:e.api_url+t.Eventbild.url}}),n("div",{staticClass:"card-body "},[n("h3",{staticClass:"card-title mt-1 mb-1"},[e._v(" "+e._s(t.Title)+" ")]),t.Datum?n("div",{staticClass:"card-date"},[n("app-icon",{attrs:{name:"Date",size:"15"}}),e._v(" "+e._s(e._f("formatDate")(t.Datum))+" ")],1):n("div",{staticClass:"card-date-dec"},[n("span",[e._v("Datum wird noch entschieden")])])])])],1)})),1)},W=[],Q=n("8785"),X=n("9530"),Z=n.n(X),ee=n("7212"),te=n("c1df"),ne=n.n(te);function ae(){var e=Object(Q["a"])(["\n    query Events{\n        events{\n            id\n            Title\n            Description\n            Datum\n            Eventbild{\n              url\n              alternativeText\n            }\n        }\n    }\n    "]);return ae=function(){return e},e}var re={name:"EventNav",components:{Swiper:ee["Swiper"],SwiperSlide:ee["SwiperSlide"]},data:function(){return{api_url:"http://localhost:1337",events:[],swiperOptions:{slidesPerView:3.1,spaceBetween:30}}},apollo:{events:Z()(ae())},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},filters:{formatDate:function(e){if(e)return ne()(String(e)).format("DD.MM.YYYY")}}},se=re,ie=(n("d2d0"),Object(b["a"])(se,V,W,!1,null,null,null)),oe=ie.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"event-details my-5"},[n("h2",[e._v("Hallo "+e._s(this.username))]),e._m(0)])},le=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("hier werden Dir Details für unsere Events angezeigt."),n("br"),e._v(" Wähle einfach oben eine Veranstaltung aus und schon ändert sich der Text."),n("br"),e._v(" Fast magisch ")])}],ue={name:"defaultDetails",data:function(){return{username:void 0}},created:function(){var e=JSON.parse(window.localStorage.getItem("user"));this.username=e.username}},de=ue,fe=Object(b["a"])(de,ce,le,!1,null,null,null),me=fe.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"event-details text-container my-5"},[n("h2",{staticClass:"mb-0"},[e._v(e._s(e.event.Title))]),n("div",{staticClass:"event-date"},[e._v(" "+e._s(e._f("formatDate")(e.event.Datum))+" ")]),n("p",[e._v(e._s(e.event.Description))])])},be=[];function je(){var e=Object(Q["a"])(["\n        query Events($id: ID!) {\n            event(id: $id){\n                id\n                Title\n                Description\n                Datum\n                Eventbild{\n                  url\n                  alternativeText\n                }\n            }\n        }"]);return je=function(){return e},e}var ve={name:"EventDetails",data:function(){return{event:{},routeParam:this.$route.params.id}},apollo:{event:{query:Z()(je()),variables:function(){return{id:this.routeParam}}}},filters:{formatDate:function(e){if(e)return ne()(String(e)).format("DD.MM.YYYY")}}},he=ve,ge=Object(b["a"])(he,pe,be,!1,null,null,null),we=ge.exports,ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"text-center",attrs:{id:"login"}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"email"}},[e._v("Username")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control mx-auto my-2",class:{error:e.error},attrs:{type:"email",id:"email",placeholder:"Username eingeben"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"password"}},[e._v("Passwort")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control mx-auto my-2",class:{error:e.error},attrs:{type:"password",id:"password",placeholder:"Passwort eingeben"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),this.error?n("div",{staticClass:"error text-danger font-weight-bold mb-3"},[e._v(" Bitte überprüfe Deine Eingaben ")]):e._e(),n("button",{staticClass:"btn btn-primary mx-auto",attrs:{type:"submit"},on:{click:e.loginHandler}},[e._v(" Anmelden ")])])},_e=[],ke=n("bc3a"),xe=n.n(ke),Oe={name:"Signin",data:function(){return{username:"",password:"",apiKey:"http://localhost:1337/auth/local",error:!1}},methods:{loginHandler:function(e){e.preventDefault(),""!=this.username&&""!=this.password?this.onlogin(this.username,this.password):this.error=!0},onlogin:function(e,t){var n=this;xe.a.post(this.apiKey,{identifier:e,password:t}).then((function(e){localStorage.setItem("user",JSON.stringify(e.data.user)),localStorage.setItem("jwt",JSON.stringify(e.data.jwt)),n.$router.push("/")})).catch((function(e){e&&(n.error=!0)}))}}},De=Oe,Se=(n("8df2"),Object(b["a"])(De,ye,_e,!1,null,null,null)),ze=Se.exports;c["default"].component(L.name,L),c["default"].component(R.name,R),c["default"].config.productionTip=!1,c["default"].use(z["a"]),c["default"].use(C["a"]);var Ce=new z["a"]({defaultClient:N}),Ee=new C["a"]({mode:"history",routes:[{path:"/",components:{nav:oe,content:me},meta:{requiresAuth:!0}},{path:"/login",components:{content:ze},meta:{requiresAuth:!1}},{path:"/events/:id",components:{nav:oe,content:we},meta:{requiresAuth:!0}}]});Ee.beforeEach((function(e,t,n){var a=localStorage.getItem("jwt");a||"/login"==e.path?n():n("/login")})),new c["default"]({apolloProvider:Ce,router:Ee,render:function(e){return e(S)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},6469:function(e,t,n){e.exports=n.p+"img/ngdb_logo.c9f85fee.png"},"6f8e":function(e,t,n){},"7d58":function(e,t,n){},"8df2":function(e,t,n){"use strict";var a=n("7d58"),r=n.n(a);r.a},9691:function(e,t,n){"use strict";var a=n("1e80"),r=n.n(a);r.a},"9c0c":function(e,t,n){},b75f:function(e,t){},d2d0:function(e,t,n){"use strict";var a=n("6f8e"),r=n.n(a);r.a}});
//# sourceMappingURL=app.52cff3c5.js.map