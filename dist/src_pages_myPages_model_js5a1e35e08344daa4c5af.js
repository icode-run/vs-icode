"use strict";
(self["webpackChunkmy_web"] = self["webpackChunkmy_web"] || []).push([["src_pages_myPages_model_js"],{

/***/ 81511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92910);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90056);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({namespace:'myPagesModel',state:{myPageList:[],allPageList:[],list:[],currentPage:{}},effects:{queryPage:/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function queryPage(_ref,_ref2){var payload,put,call,res,list;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function queryPage$(_context){while(1){switch(_context.prev=_context.next){case 0:payload=_ref.payload;put=_ref2.put,call=_ref2.call;_context.next=4;return (0,_service__WEBPACK_IMPORTED_MODULE_1__/* .queryPage */ .L)();case 4:res=_context.sent;if(!(res.result==='success')){_context.next=9;break;}list=res.data||[];_context.next=9;return put({type:'setState',payload:{list:list,currentPage:list[0]}});case 9:return _context.abrupt("return",res);case 10:case"end":return _context.stop();}}},queryPage);})},reducers:{setState:function setState(state,_ref3){var payload=_ref3.payload;return _objectSpread(_objectSpread({},state),payload);}},subscriptions:{setup:function setup(_ref4){var history=_ref4.history,dispatch=_ref4.dispatch;dispatch({type:'queryPage'});// return history.listen(({ pathname }) => {
//   // if (pathname === '/') {
//   //   dispatch({ type: 'load' });
//   // }
// });
}}});

/***/ }),

/***/ 90056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ queryPage)
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96648);
/**
 * Service
 * @author
 */// 保存页面
var queryPage=function queryPage(options){return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({method:'POST',url:'/lowcodeApi/auth/page/query',type:'json',body:options}).then(function(res){return res;});};

/***/ })

}]);