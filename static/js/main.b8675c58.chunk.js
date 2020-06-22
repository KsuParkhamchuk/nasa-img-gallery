(this.webpackJsonptypescriptapp=this.webpackJsonptypescriptapp||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),s=(a(74),a(21)),l=a(11),i=a(26),m=a(25),u=(a(75),a(31)),d=(a(76),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:"img/nasa.png",className:"nasaLogo",alt:""}),r.a.createElement("nav",{className:"header__navigation"},r.a.createElement(u.b,{to:"/",className:"header__navigation--link"},"CURRENT IMAGE"),r.a.createElement(u.b,{to:"/catalog",className:"header__navigation--link"},"CATALOG")))}}]),a}(r.a.Component)),p=(a(81),a(32)),g=function(e){return void 0===e.images.selectedImgObj.url?"undefined":e.images.selectedImgObj},h=function(e){return e.images.imgObjects},f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).changeCurrentImg=function(e){n.setState({selectedDate:e.target.value},n.setNewImg)},n.setNewImg=function(){n.props.getSelectedDateImg(n.state.selectedDate)},n.state={selectedDate:"",latestSelectedDate:"",currentDate:""},n}return Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=new Date;this.setState({currentDate:e.getFullYear()+"-0"+(e.getMonth()+1)+"-"+e.getDate(),latestSelectedDate:localStorage.getItem("latestSelectedDate")})}},{key:"componentDidMount",value:function(){this.props.getSelectedDateImg(this.state.latestSelectedDate)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"dateImg"},r.a.createElement("input",{className:"calendar",id:"outlined-basic",type:"date",max:this.state.currentDate,onChange:function(t){return e.changeCurrentImg(t)}}),"image"===this.props.dateImg.mediaType?r.a.createElement("div",{className:"dateImg__wrapper",style:{backgroundImage:"url(".concat(this.props.dateImg.url,")")}}):r.a.createElement("div",{className:"dateVideo__wrapper"},r.a.createElement("iframe",{width:"570",height:"415",src:this.props.dateImg.url})),r.a.createElement("div",{className:"dateImg__description"},r.a.createElement("div",{className:"dateImg__description--title"},this.props.dateImg.title),r.a.createElement("div",{className:"dateImg__description--text"},this.props.dateImg.explanation)))}}]),a}(r.a.Component),E={getSelectedDateImg:function(e){return function(t,a){return t({type:"GET_SELECTED_DATE_IMG",callAPI:"https://api.nasa.gov/planetary/apod?api_key=s0Bgn85OLjsXTfgCmhRgAAiu5fjVJrh2KJ5lqeZ7&date="+e})}}},v=Object(p.b)((function(e){return{dateImg:g(e)}}),E)(f),b=(a(83),a(138)),I=a(137),j=a(134),O=a(135),_=a(136),y=a(111),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).openModal=function(e){var t=e.target.dataset.id;n.setState({open:!0,modalImgInfo:n.props.monthImages[t]})},n.handleClose=function(){n.setState({open:!1})},n.state={open:!1,modalImgInfo:{}},n}return Object(l.a)(a,[{key:"componentWillMount",value:function(){for(var e=new Date,t=e.getDate();-1!==t;)this.props.getImgs(e.getFullYear()+"-0"+(e.getMonth()+1)+"-"+t),t--}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"catalog"},r.a.createElement("div",{className:"catalog__header"},r.a.createElement("div",{className:"catalog__header--img",style:{backgroundImage:"url('logo192.png')"}},r.a.createElement("img",{src:"img/nasa.png",alt:""})),r.a.createElement("div",{className:"catalog__header--text"},"Nasa Image Gallery")),r.a.createElement("div",{className:"catalog__gallery"},this.props.monthImages.map((function(t,a){return r.a.createElement("div",{className:"catalog__gallery--item"},"image"===t.mediaType?r.a.createElement("div",{className:"content",onClick:function(t){return e.openModal(t)},style:{backgroundImage:"url(".concat(t.url,")")},"data-id":a}):r.a.createElement("div",{className:"content","data-id":a},r.a.createElement("iframe",{width:"100%",height:"100%",src:t.url})),r.a.createElement("div",{className:"itemOppositeSide"},r.a.createElement("span",null,t.title)),r.a.createElement("button",{className:"learnMoreBtn","data-id":a,onClick:function(t){return e.openModal(t)}},"Read explanation"))})),r.a.createElement(I.a,{onClose:this.handleClose,"aria-labelledby":"customized-dialog-title",open:this.state.open},r.a.createElement(j.a,{id:"customized-dialog-title"},this.state.modalImgInfo.title),r.a.createElement(O.a,{dividers:!0},r.a.createElement(y.a,{gutterBottom:!0},r.a.createElement("span",{className:"bold"},"Date: "),this.state.modalImgInfo.date),r.a.createElement(y.a,{gutterBottom:!0,className:"modalExplanation"},r.a.createElement("span",{className:"bold"},"Explanation: "),this.state.modalImgInfo.explanation)),r.a.createElement(_.a,null,r.a.createElement(b.a,{autoFocus:!0,onClick:this.handleClose,className:"closeModalBtn"},"Close")))))}}]),a}(r.a.Component),S={getImgs:function(e){return function(t,a){return t({type:"GET_ALL_MONTH_IMG",callAPI:"https://api.nasa.gov/planetary/apod?api_key=s0Bgn85OLjsXTfgCmhRgAAiu5fjVJrh2KJ5lqeZ7&date="+e})}}},C=Object(p.b)((function(e){return{monthImages:h(e)}}),S)(N),T=a(6),D=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={parentName:"App"},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(T.c,null,r.a.createElement(T.a,{exact:!0,path:"/nasa-img-gallery",component:v}),r.a.createElement(T.a,{exact:!0,path:"/nasa-img-gallery/catalog",component:C})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(24),k=a(61),A=a(10),M=a(46),G=a.n(M),x=a(101),R=a(102);G.a.interceptors.response.use((function(e){return e}),(function(e){throw 401===e.response.status&&(window.location.href="/"),403===e.response.status&&(window.location.href="#/forbidden"),e}));var L=function(e){return e.url=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e.startsWith("http")||e.startsWith("data:image"))return e;var t=e.startsWith("/")?e.substring(1):e;return""+t}(e.url),G()(e).then((function(e){var t,a=e.data;return a?"object"===typeof a?Promise.resolve("object"===typeof(t=a)?x(R(t)):"string"===typeof t?x(R(JSON.parse(t))):t):Promise.resolve(a):Promise.resolve({status:e.status,statusText:e.statusText})}))},P=function(e){return function(t){return function(a){var n=a.callAPI,r=a.type;if("undefined"===typeof n)return t(a);var c={withCredentials:!1};if("string"===typeof n)c.url=n;else if("function"===typeof n)c.url=n(e.getState());else{if("object"!==typeof n)throw new Error("Unsupported type of callAPI parameter, typeof callAPI is '".concat(typeof n,"'"));c=Object(A.a)(Object(A.a)({},c),n)}var o=function(e){var t=Object(A.a)(Object(A.a)({},a),e);return delete t.callAPI,t};return t(o({type:r+"_START"})),L(c).then((function(e){return t(o({type:r+"_SUCCESS",response:e})),Promise.resolve(e)})).catch((function(e){return t(o({type:r+"_ERROR",error:e})),Promise.reject(e)}))}}},B=a(62),W=a(63),J=a.n(W)()({basename:"",hashType:"slash"}),U=a(22),F={selectedImgObj:{},imgObjects:[]};var V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload,r=t.response;switch(void 0!==r&&localStorage.setItem("latestSelectedDate",r.date),a){case"GET_SELECTED_DATE_IMG_START":return Object(A.a)(Object(A.a)({},e),{},{load:!0},n);case"GET_SELECTED_DATE_IMG_SUCCESS":return Object(A.a)(Object(A.a)({},e),{},{selectedImgObj:r});case"GET_SELECTED_DATE_IMG_ERROR":return Object(A.a)(Object(A.a)(Object(A.a)({},e),n),{},{error:!0});case"GET_ALL_MONTH_IMG_SUCCESS":return Object(A.a)(Object(A.a)({},e),{},{imgObjects:[].concat(Object(U.a)(e.imgObjects),[r])})}return e},q=Object(w.combineReducers)({images:V}),z=a(64),H=Object(z.composeWithDevTools)({features:{pause:!0,lock:!0,jump:!0,skip:!0,dispatch:!0,test:!1,reorder:!1,persist:!1,export:!1}});var K=Object(w.createStore)(q,H(Object(w.applyMiddleware)(k.a,P,Object(B.routerMiddleware)(J))));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:K},r.a.createElement(u.a,null,r.a.createElement(D,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,a){e.exports=a(110)},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.b8675c58.chunk.js.map