(function(e){function t(t){for(var a,s,o=t[0],l=t[1],c=t[2],f=0,d=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"2fd9":function(e,t,n){},"344a":function(e,t,n){"use strict";var a=n("2fd9"),i=n.n(a);i.a},"3c6e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Base")],1)},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"base-box"},[n("el-container",[n("el-aside",{ref:"leftnav",attrs:{width:"230px"}},[n("NavMenu",{attrs:{show:e.showNav}})],1),n("el-container",[n("el-header",[n("TopMenu",{on:{changenav:e.changeNav}}),n("TagsView")],1),n("el-main",[n("router-view")],1)],1)],1)],1)},o=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-box"},[n("div",{ref:"logo",staticClass:"admin-logo"},[e._v(" Yuan Lu ")]),n("transition",{staticClass:"navanmi",attrs:{name:"navanmi",type:"animation"}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-1",collapse:e.show,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},e._l(e.menuList,(function(t,a){return n("el-submenu",{key:a,attrs:{index:a.toString()}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.meta.title))])]),n("el-menu-item-group",e._l(t.children,(function(t,i){return n("router-link",{key:i,attrs:{to:t.path}},[n("el-menu-item",{attrs:{index:a.toString()+"-"+i.toString()}},[e._v(e._s(t.meta.title))])],1)})),1)],2)})),1)],1)],1)},c=[],u={name:"NavMenu",props:["show"],data:function(){return{menuList:[]}},created:function(){this.reviewRoute()},watch:{},mounted:function(){var e=this.$refs["logo"];e.addEventListener("resize",(function(){e.style.width}))},methods:{reviewRoute:function(){this.menuList=this.$router["options"]["routes"],window.console.log(this.menuList)},handleOpen:function(){},handleClose:function(){}}},f=u,d=(n("344a"),n("2877")),p=Object(d["a"])(f,l,c,!1,null,"7f68952f",null),h=p.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top-menu-box"},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[n("el-menu-item",[n("i",{ref:"cns",staticClass:"el-icon-s-unfold",on:{click:e.changenav}})]),n("el-menu-item",[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"el-icon-s-platform"})])],1),n("el-menu-item",[n("i",{staticClass:"el-icon-refresh",on:{click:e.refresh}})])],1)],1)},m=[],w=(n("5319"),{name:"TopMenu",data:function(){return{activeIndex:"1",activeIndex2:"1",showNav:!1}},methods:{changenav:function(){var e=this.$refs["cns"];1==this.showNav?e.classList.replace("el-icon-s-fold","el-icon-s-unfold"):e.classList.replace("el-icon-s-unfold","el-icon-s-fold"),this.showNav=!this.showNav,this.$emit("changenav",this.showNav)},handleSelect:function(){},refresh:function(){this.$router.go(0)}}}),b=w,g=(n("9195"),Object(d["a"])(b,v,m,!1,null,"fe8f89c0",null)),_=g.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tags-view-container"},[n("ScrollPane",{staticClass:"tags-view-wrap"},e._l(Array.from(e.visitedViews),(function(t){return n("router-link",{key:t.path,staticClass:"tags-view-item",class:e.isActive(t)?"active":"",attrs:{to:t.path}},[e._v(" "+e._s(t.title)+" "),n("span",{staticClass:"el-icon-close",on:{click:function(n){return n.preventDefault(),n.stopPropagation(),e.delSelectTag(t)}}})])})),1)],1)},$=[],y=(n("fb6a"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-scrollbar",{ref:"scrollContainer",staticClass:"scroll-container",attrs:{vertical:!1},nativeOn:{wheel:function(t){return t.preventDefault(),e.handleScroll(t)}}},[n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},[e._t("default")],2)])])}),S=[],T=(n("c740"),n("b619")),O=4,C={name:"ScrollPane",data:function(){return{left:0}},mounted:function(){this.$nextTick((function(){new T["a"](".swiper-container",{direction:"horizontal",loop:!0,pagination:".swiper-pagination",autoplay:3e3})}))},computed:{scrollWrapper:function(){return this.$refs.scrollContainer.$refs.wrap}},methods:{handleScroll:function(e){var t=e.wheelDelta||40*-e.deltaY,n=this.scrollWrapper;n.scrollLeft=n.scrollLeft+t/4},moveToTarget:function(e){var t=this.$refs.scrollContainer.$el,n=t.offsetWidth,a=this.scrollWrapper,i=this.$parent.$refs.tag,r=null,s=null;if(i.length>0&&(r=i[0],s=i[i.length-1]),r===e)a.scrollLeft=0;else if(s===e)a.scrollLeft=a.scrollWidth-n;else{var o=i.findIndex((function(t){return t===e})),l=i[o-1],c=i[o+1],u=c.$el.offsetLeft+c.$el.offsetWidth+O,f=l.$el.offsetLeft-O;u>a.scrollLeft+n?a.scrollLeft=u-n:f<a.scrollLeft&&(a.scrollLeft=f)}}}},E=C,V=(n("f3f8"),Object(d["a"])(E,y,S,!1,null,null,null)),j=V.exports,L={name:"TagsView",components:{ScrollPane:j},computed:{visitedViews:function(){return this.$store.state.tagsview.visitedviews}},watch:{$route:function(){this.addViewTags()}},methods:{isActive:function(e){return e.path==this.$route.path},addViewTags:function(){if(this.$route.name){var e=this.$route;this.$store.dispatch("addVisitedViews",e)}},delSelectTag:function(e){var t=this;this.$store.dispatch("delVisitedViews",e).then((function(n){if(t.isActive(e)){var a=n.slice(-1)[0];a?t.$router.push(a):t.$router.push("/")}}))}}},I=L,k=Object(d["a"])(I,x,$,!1,null,"1c4f3bd8",null),D=k.exports,N={name:"Base",components:{NavMenu:h,TopMenu:_,TagsView:D},data:function(){return{showNav:!1}},computed:{},methods:{changeNav:function(e){this.showNav=e;var t=this.$refs["leftnav"].$el;t.style=1==e?"width:64px;":"width:230px"}}},P=N,M=(n("71bb"),Object(d["a"])(P,s,o,!1,null,"26e59b36",null)),W=M.exports,A=(n("0fae"),n("323e")),B=n.n(A),z={name:"app",components:{Base:W},mounted:function(){}};B.a.start(),window.onload=function(){B.a.done()};var Y=z,J=(n("034f"),Object(d["a"])(Y,i,r,!1,null,null,null)),R=J.exports,q=n("5c96"),F=n.n(q),G=(n("a5d8"),n("2f62")),H=(n("54ba"),n("8c4f")),K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" 这里是首页 ")])},Q=[],U={name:"Index"},X=U,Z=Object(d["a"])(X,K,Q,!1,null,"507866e0",null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("Tab")])},ne=[],ae={name:"Tab"},ie=ae,re=Object(d["a"])(ie,te,ne,!1,null,"2ee26f54",null),se=re.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("后台index")])},le=[],ce={name:"Index"},ue=ce,fe=Object(d["a"])(ue,oe,le,!1,null,"072fa610",null),de=fe.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("后台 Tab")])},he=[],ve={name:"Tab"},me=ve,we=Object(d["a"])(me,pe,he,!1,null,"0b5052fe",null),be=we.exports;a["default"].use(H["a"]);var ge=new H["a"]({routes:[{path:"/admin/",name:"admin",meta:{title:"后台"},children:[{path:"/admin/index",meta:{title:"首页"},name:"adminindex",component:de},{path:"/admin/tab",meta:{title:"TAB"},name:"admintab",component:be}]},{path:"/index",name:"index",meta:{title:"后台"},children:[{path:"/index",meta:{title:"首页s"},name:"adminindexs",component:ee},{path:"/tab",meta:{title:"TABs"},name:"admintabs",component:se}]},{path:"/tab",name:"tab",meta:{title:"后台"},children:[{path:"/admin/index",meta:{title:"首页"},name:"adminindexss",component:de},{path:"/admin/tab",meta:{title:"TAB"},name:"admintabss",component:be}]}]}),_e=(n("a4d3"),n("e01a"),n("d28b"),n("a434"),n("d3b7"),n("3ca3"),n("ddb0"),n("2909")),xe=n("3835"),$e={state:{visitedviews:[{name:"首页",path:"/",title:"首页"}]},mutations:{ADD_VISITED_VIEWS:function(e,t){e.visitedviews.some((function(e){return e.path==t.path}))||e.visitedviews.push({name:t.name,path:t.path,title:t.meta.title||"no-title"})},DEL_VISITED_VIEWS:function(e,t){var n=!0,a=!1,i=void 0;try{for(var r,s=e.visitedviews.entries()[Symbol.iterator]();!(n=(r=s.next()).done);n=!0){var o=Object(xe["a"])(r.value,2),l=o[0],c=o[1];if(c.path==t.path&&"首页"!=t.name){e.visitedviews.splice(l,1);break}}}catch(u){a=!0,i=u}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}}},actions:{addVisitedViews:function(e,t){var n=e.commit;n("ADD_VISITED_VIEWS",t)},delVisitedViews:function(e,t){var n=e.commit,a=e.state;return new Promise((function(e){n("DEL_VISITED_VIEWS",t),e(Object(_e["a"])(a.visitedviews))}))}}},ye=$e,Se={visitedviews:function(e){return e.tagsview.visitedviews}},Te=Se;a["default"].use(G["a"]);var Oe=new G["a"].Store({state:{name:"YuanLu"},modules:{tagsview:ye},getters:Te}),Ce=Oe;a["default"].use(G["a"]),a["default"].use(F.a),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(R)},router:ge,store:Ce}).$mount("#app"),ge.beforeEach((function(e,t,n){B.a.start(),n()})),ge.afterEach((function(e){B.a.done(),window.console.log(e)}))},"71bb":function(e,t,n){"use strict";var a=n("3c6e"),i=n.n(a);i.a},"85ec":function(e,t,n){},9195:function(e,t,n){"use strict";var a=n("c6db"),i=n.n(a);i.a},c6db:function(e,t,n){},f0ee:function(e,t,n){},f3f8:function(e,t,n){"use strict";var a=n("f0ee"),i=n.n(a);i.a}});
//# sourceMappingURL=app.4e839c63.js.map