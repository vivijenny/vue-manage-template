webpackJsonp([10,8],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=n(6),i=o(a),u=n(9),r=o(u),s=n(60),c=o(s),l=n(19),d=o(l),f=n(103),p=o(f);n(59),n(131);var h=n(21),m=o(h);n(45);var g=n(128);document.addEventListener("error",function(e){var t=e.target;t.className.indexOf("userface-hook")>-1&&(t.src=g.defaultUserFace)},!0),i.default.use(r.default),i.default.use(c.default),new i.default({template:"<App/>",components:{App:p.default},router:d.default,store:m.default}).$mount("#app"),Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e}},19:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),i=o(a),u=n(127),r=o(u),s=n(133),c=o(s),l=n(21),d=o(l);i.default.use(r.default);var f=new r.default({routes:c.default});f.beforeEach(function(e,t,n){d.default.commit("addLoading",{key:"view",text:"加载页面中..."}),setTimeout(n,50)}),f.afterEach(function(e){d.default.commit("removeLoading","view")}),t.default=f},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"",key:"myHome",text:"首页",jurisdiction:!0,icon:"el-icon-setting",component:function(e){n.e(1,function(t){var n=[t(108)];e.apply(null,n)}.bind(this))}},{path:"demo1",key:"myHome",text:"菜单1",jurisdiction:!0,icon:"el-icon-setting",component:function(e){n.e(7,function(t){var n=[t(107)];e.apply(null,n)}.bind(this))}},{path:"father",key:"myHome",text:"父菜单",jurisdiction:!0,icon:"el-icon-setting",component:function(e){n.e(2,function(t){var n=[t(111)];e.apply(null,n)}.bind(this))},children:[{path:"child1",key:"myHome",text:"大儿子",jurisdiction:!0,icon:"el-icon-setting",component:function(e){n.e(5,function(t){var n=[t(105)];e.apply(null,n)}.bind(this))}},{path:"child2",key:"myHome",text:"二儿子",jurisdiction:!0,icon:"el-icon-setting",component:function(e){n.e(4,function(t){var n=[t(106)];e.apply(null,n)}.bind(this))}}]},{path:"*",key:"404",text:"404",jurisdiction:!0,hide:!0,component:function(e){n.e(6,function(t){var n=[t(104)];e.apply(null,n)}.bind(this))}}]},21:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),i=o(a),u=n(126),r=o(u),s=n(135),c=o(s),l=n(136),d=o(l),f=n(134),p=o(f);i.default.use(r.default);var h=new r.default.Store({modules:{demo:c.default,loading:d.default,config:p.default}});t.default=h},30:function(e,t){"use strict";e.exports=function(e,t){var n=void 0;return e=parseInt(e),n=e?t?new Date(e).Format(t):new Date(e).Format("yyyy-MM-dd hh:mm:ss"):"-"}},45:function(e,t){},59:function(e,t){},103:function(e,t,n){var o=n(5)(n(141),n(118),null,null);e.exports=o.exports},118:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},128:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.teamId=t.defaultUserFace=t.errHandler=t.successHandler=t.rootPath=t.getRoot=void 0;var a=n(19),i=o(a),u=n(9),r={addHandler:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}};r.addHandler(window,"online",function(){u.Message.success("网络连接已恢复")}),r.addHandler(window,"offline",function(){u.MessageBox.alert("请确认网络是否连通，否则会造成当前工作丢失","掉线了？",{confirmButtonText:"好的，我知道了"})});var s=t.getRoot=function(){var e="";return e=window.CHANGE_ROOT?window.CHANGE_ROOT:"localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname?"//dev.demo.local":""};t.rootPath=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.root||s(),n=e.context_name||"teamwork";return t+"/"+n},t.successHandler=function(e){function t(){window.localStorage.clear()}var o=n(21),a=e.body.code,r=e.body.status,s=e.body.message;switch(a){case 10:403===r?(t(),o.default.commit("xhrGoLogin")):u.MessageBox.alert(s,"错误提示");break;case 11:403===r&&o.default.commit("xhrGoLogin");break;case 20:break;case 30:i.default.push("/manage");break;case 200:s&&u.Message.success(s);break;case 400:break;case 404:i.default.push("/404");break;case 500:i.default.push("/500")}window.clearLoginMsg=t},t.errHandler=function(e){},t.defaultUserFace="http://upyun.umu.netqq.net/static/userface.png",t.teamId=function(){return window.localStorage.getItem("team_id")}},129:function(e,t){"use strict";e.exports=function(e,t,n){var o=void 0;return t=t||"Yes",n=n||"No",o=null===e||void 0===e||""===e?"-":e?t:n}},130:function(e,t){"use strict";e.exports=function(e){var t=void 0;switch(!0){case null===e||""===e||isNaN(e):t="-";break;case e>=0&&e<1024:t=e+" B";break;case e>=1024&&e<Math.pow(1024,2):t=Math.round(e/1024*100)/100+" K";break;case e>=Math.pow(1024,2)&&e<Math.pow(1024,3):t=Math.round(e/Math.pow(1024,2)*100)/100+" M";break;case e>=Math.pow(1024,3)&&e<Math.pow(1024,4):t=Math.round(e/Math.pow(1024,3)*100)/100+" G";break;default:t=Math.round(e/Math.pow(1024,4)*100)/100+" T"}return t}},131:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=n(6),i=o(a);i.default.filter("booleanFormat",n(129)),i.default.filter("percentageFormat",n(132)),i.default.filter("byteFormat",n(130)),i.default.filter("timestampFormat",n(30)),i.default.filter("date",n(30))},132:function(e,t){"use strict";e.exports=function(e,t){var n=void 0;return null!==t&&void 0!==t||(t=2),t=parseInt(t),n=null===e||""===e||isNaN(e)?"-":Math.round(e*Math.pow(10,t)*100)/Math.pow(10,t)+"%"}},133:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(20),i=o(a),u=[{path:"/",component:function(e){n.e(3,function(t){var n=[t(109)];e.apply(null,n)}.bind(this))}},{path:"/main",component:function(e){n.e(0,function(t){var n=[t(110)];e.apply(null,n)}.bind(this))},children:i.default}];t.default=u},134:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),i=n(19),u=o(i),r={state:{needLoginDialog:!0,menuStatus:!0},mutations:{setUserInfo:function(e,t){try{t=JSON.parse(t)}catch(e){}e.needLoginDialog=!0},xhrGoLogin:function(e){e.needLoginDialog&&(e.needLoginDialog=!1,a.MessageBox.alert("您当前的会话已超时或未登录，请重新登录","错误提示",{confirmButtonText:"去登录",callback:function(){u.default.push("/")}}))},loginOut:function(e,t){e.needLoginDialog=!1,e.menuStatus=!0,window.localStorage.clear()},changeMenuStatus:function(e,t){e.menuStatus=t}},actions:{}};t.default=r},135:function(e,t){"use strict"},136:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(9),a=[];t.default={state:{loadingList:[]},mutations:{addLoading:function(e,t){a.push(o.Loading.service({fullscreen:!0,customClass:"full-loading-self loading-name-"+t.key,text:t.text})),e.loadingList.push(t.key)},removeLoading:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=[],o=!1,i=0;i<e.loadingList.length;i++){var u=e.loadingList[i];u!==t||o?n.push(u):o=!0}if(e.loadingList=n,!n.length)for(var r in a)a[r].close()}}}},141:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},methods:{}}},150:function(e,t){}});