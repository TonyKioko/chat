!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var t={},r={},n={},u={}.hasOwnProperty,i=/^\.\.?(\/|$)/,a=function(e,t){for(var r,n=[],u=(i.test(t)?e+"/"+t:t).split("/"),a=0,s=u.length;a<s;a++)r=u[a],".."===r?n.pop():"."!==r&&""!==r&&n.push(r);return n.join("/")},s=function(e){return e.split("/").slice(0,-1).join("/")},l=function(t){return function(r){var n=a(s(t),r);return e.require(n,t)}},c=function(e,t){var n=null;n=h&&h.createHot(e);var u={id:e,exports:{},hot:n};return r[e]=u,t(u.exports,l(e),u),u.exports},o=function(e){return n[e]?o(n[e]):e},f=function(e,t){return o(a(s(e),t))},d=function(e,n){null==n&&(n="/");var i=o(e);if(u.call(r,i))return r[i].exports;if(u.call(t,i))return c(i,t[i]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};d.alias=function(e,t){n[t]=e};var p=/\.[^.\/]+$/,_=/\/index(\.[^\/]+)?$/,v=function(e){if(p.test(e)){var t=e.replace(p,"");u.call(n,t)&&n[t].replace(p,"")!==t+"/index"||(n[t]=e)}if(_.test(e)){var r=e.replace(_,"");u.call(n,r)||(n[r]=e)}};d.register=d.define=function(e,n){if("object"==typeof e)for(var i in e)u.call(e,i)&&d.register(i,e[i]);else t[e]=n,delete r[e],v(e)},d.list=function(){var e=[];for(var r in t)u.call(t,r)&&e.push(r);return e};var h=e._hmr&&new e._hmr(f,d,t,r);d._cache=r,d.hmr=h&&h.wrap,d.brunch=!0,e.require=d}}(),function(){var e;window;require.register("actions.js",function(e,t,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.initialFetchUsers=void 0;var n=t("utils/apiCalls");e.initialFetchUsers=function(){return function(e){(0,n.getAllUsers)().then(function(t){e({type:"ADD_USERS",users:t})})}}}),require.register("container/App.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var u=t("react"),i=n(u),a=t("./ChatsList"),s=n(a),l=t("./ChatWindow"),c=n(l),o=t("./UsersList"),f=n(o);e["default"]=function(){return i["default"].createElement("div",{className:"container"},i["default"].createElement(s["default"],null),i["default"].createElement(c["default"],null),i["default"].createElement(f["default"],null))}}),require.register("container/ChatWindow.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var u=t("react"),i=n(u);e["default"]=function(){return i["default"].createElement("div",{className:"chat-window"})}}),require.register("container/ChatsList.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var u=t("react"),i=n(u);e["default"]=function(){return i["default"].createElement("div",{className:"chats-list"})}}),require.register("container/UsersList.jsx",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var u=t("react"),i=n(u);e["default"]=function(){return i["default"].createElement("div",{className:"users-list"})}}),require.register("initialize.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var u=t("react-dom"),i=n(u),a=t("react"),s=n(a),l=t("redux"),c=t("redux-thunk"),o=n(c),f=t("react-redux");t("whatwg-fetch");var d=t("reducer"),p=n(d),_=t("container/App"),v=n(_),h=t("actions");t("es6-promise").polyfill(),t("whatwg-fetch");var m=(0,l.createStore)(p["default"],(0,l.applyMiddleware)(o["default"]));m.dispatch((0,h.initialFetchUsers)()),document.addEventListener("DOMContentLoaded",function(){var e=document.createElement("div");e.id="app",document.body.appendChild(e),i["default"].render(s["default"].createElement(f.Provider,{store:m},s["default"].createElement(v["default"],null)),e)})}),require.register("reducer.js",function(e,t,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(){var e=arguments.length<=0||void 0===arguments[0]?n:arguments[0],t=arguments[1];switch(t.type){case"ADD_USERS":return alert(t.users),Object.assign({},e,{users:t.users});default:return e}};var n={users:[]}}),require.register("utils/apiCalls.js",function(e,t,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getAllUsers=function(){return new Promise(function(e,t){fetch("http://127.0.0.1:8000/chat/get_all_users",{method:"get"}).then(function(t){t.json().then(function(t){return e(t)})})})}}),require.alias("process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,t,r){})}(),require("___globals___");