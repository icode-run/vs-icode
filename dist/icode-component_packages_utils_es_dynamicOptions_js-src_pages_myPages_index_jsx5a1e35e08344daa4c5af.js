"use strict";
(self["webpackChunkmy_web"] = self["webpackChunkmy_web"] || []).push([["icode-component_packages_utils_es_dynamicOptions_js-src_pages_myPages_index_jsx"],{

/***/ 40880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18231);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{title:"当天",value:'today',getValue:function getValue(format){var start=moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD 00:00:00');var end=moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD 23:59:59');return[start.valueOf(),end.valueOf()];}},{title:"当前月",value:'currMonth',getValue:function getValue(format){var start=moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-01 00:00:00');var end=moment__WEBPACK_IMPORTED_MODULE_0___default()();end=end.format("YYYY-MM-".concat(end.daysInMonth()," 23:59:59"));return[start.valueOf(),end.valueOf()];}},{title:"当前季度",value:'currQuarter',getValue:function getValue(format){var start=moment__WEBPACK_IMPORTED_MODULE_0___default()();start=start.add(-(start.month()%3),'month');start=start.format("YYYY-MM-01 00:00:00");var end=moment__WEBPACK_IMPORTED_MODULE_0___default()();end=end.add(2-end.month()%3,'month');end=end.format("YYYY-MM-".concat(end.daysInMonth()," 23:59:59"));return[start.valueOf(),end.valueOf()];}},{title:"当前年",value:'currYear',getValue:function getValue(format){var start=moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-01-01 00:00:00');var end=moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-12-31 23:59:59');return[start.valueOf(),end.valueOf()];}},{title:"近7天",value:'7days',getValue:function getValue(format){var start=moment__WEBPACK_IMPORTED_MODULE_0___default()().add(-7,'day').format('YYYY-MM-DD 00:00:00');var end=moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD 23:59:59');return[start.valueOf(),end.valueOf()];}},{title:"近1个月",value:'1month',getValue:function getValue(format){var start=moment__WEBPACK_IMPORTED_MODULE_0___default()().add(-1,'month').format('YYYY-MM-DD 00:00:00');var end=moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD 23:59:59');return[start.valueOf(),end.valueOf()];}},{title:"近3个月",value:'3month',getValue:function getValue(format){var start=moment__WEBPACK_IMPORTED_MODULE_0___default()().add(-3,'month').format('YYYY-MM-DD 00:00:00');var end=moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD 23:59:59');return[start.valueOf(),end.valueOf()];}},{title:"近1年",value:'1year',getValue:function getValue(format){var start=moment__WEBPACK_IMPORTED_MODULE_0___default()().add(-1,'year').format('YYYY-MM-DD 00:00:00');var end=moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD 23:59:59');return[start.valueOf(),end.valueOf()];}}]);// export default [
//   {
//     title: "当天",
//     value: 'today',
//     getValue: function(format) {
//       const start = moment().format('YYYY-MM-DD 00:00:00');
//       const end = moment().format('YYYY-MM-DD 23:59:59');
//       return [start, end];
//     }
//   },
//   {
//     title: "当月",
//     value: 'today',
//     getValue: function(format) {
//       return moment().format(format || _format);
//     }
//   },
//   {
//     title: "当季度",
//     value: 'today',
//     getValue: function(format) {
//       return moment().format(format || _format);
//     }
//   },
//   {
//     title: "当年",
//     value: 'today',
//     getValue: function(format) {
//       return moment().format(format || _format);
//     }
//   },
//   {
//     title: "近7天",
//     value: '7days',
//     getValue: function(format) {
//       return moment().add(-7, 'day').format(format || _format);
//     }
//   },
//   {
//     title: "近1个月",
//     value: '1month',
//     getValue: function(format) {
//       return moment().add(-1, 'month').format(format || _format);
//     }
//   },
//   {
//     title: "近3个月",
//     value: '3month',
//     getValue: function(format) {
//       return moment().add(-3, 'month').format(format || _format);
//     }
//   },
//   {
//     title: "近1年",
//     value: '1year',
//     getValue: function(format) {
//       return moment().add(-1, 'year').format(format || _format);
//     }
//   }
// ]

/***/ }),

/***/ 34044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41313);
var IconFont=(0,_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({scriptUrl:'//at.alicdn.com/t/font_2794738_afib2c2vxmh.js'});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconFont);

/***/ }),

/***/ 34727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$x": () => (/* binding */ savePages),
/* harmony export */   "BY": () => (/* binding */ queryComponents),
/* harmony export */   "C6": () => (/* binding */ buildRelease),
/* harmony export */   "UQ": () => (/* binding */ getPages),
/* harmony export */   "Z1": () => (/* binding */ copyView),
/* harmony export */   "kC": () => (/* binding */ buildPreview),
/* harmony export */   "pt": () => (/* binding */ queryPages)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92910);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96648);
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}/**
 * Service
 * @author
 */// 保存页面
var queryComponents=function queryComponents(options){return (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({method:'POST',url:'/lowcodeApi/auth/component/query',type:'json',body:options}).then(function(res){return res;});};// 保存页面
var savePages=function savePages(options){return (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({method:'POST',url:'/lowcodeApi/auth/page/save',type:'json',body:options}).then(function(res){return res;});};// 获取页面详情
var getPages=function getPages(options){return (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({method:'POST',url:'/lowcodeApi/auth/page/get',type:'json',body:options}).then(function(res){return res;});};function buildPreview(_x){return _buildPreview.apply(this,arguments);}function _buildPreview(){_buildPreview=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(params){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt("return",(0,_utils_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({url:'/lowcodeApi/auth/buildPreview',method:'POST',body:params}));case 1:case"end":return _context.stop();}}},_callee);}));return _buildPreview.apply(this,arguments);}function buildRelease(_x2){return _buildRelease.apply(this,arguments);}function _buildRelease(){_buildRelease=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(params){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:return _context2.abrupt("return",(0,_utils_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({url:'/lowcodeApi/auth/buildRelease',method:'POST',body:params}));case 1:case"end":return _context2.stop();}}},_callee2);}));return _buildRelease.apply(this,arguments);}function queryPages(_x3){return _queryPages.apply(this,arguments);}function _queryPages(){_queryPages=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(params){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:return _context3.abrupt("return",(0,_utils_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({url:'/lowcodeApi/auth/page/query',method:'POST',body:params}));case 1:case"end":return _context3.stop();}}},_callee3);}));return _queryPages.apply(this,arguments);}function copyView(_x4){return _copyView.apply(this,arguments);}function _copyView(){_copyView=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(params){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:return _context4.abrupt("return",(0,_utils_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({method:'POST',url:'/lowcodeApi/auth/pages/copy',type:'json',body:params}));case 1:case"end":return _context4.stop();}}},_callee4);}));return _copyView.apply(this,arguments);}

/***/ }),

/***/ 1401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HD": () => (/* binding */ saveComponentElements),
/* harmony export */   "JA": () => (/* binding */ queryRemoteEntryPath),
/* harmony export */   "_y": () => (/* binding */ queryComponent),
/* harmony export */   "aT": () => (/* binding */ removeComponent),
/* harmony export */   "dY": () => (/* binding */ queryComponentCategory),
/* harmony export */   "kZ": () => (/* binding */ queryRemoteComponentByEntryPath),
/* harmony export */   "nq": () => (/* binding */ saveComponentCategory)
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96648);
/**
 * Service
 * @author
 */var queryComponent=function queryComponent(options){return new Promise(function(resolve,reject){(0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({method:'POST',url:'/lowcodeApi/auth/component/query',type:'json',body:options}).then(function(res){resolve(res);});});};var removeComponent=function removeComponent(options){return new Promise(function(resolve,reject){(0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({method:'POST',url:'/lowcodeApi/auth/component/remove',type:'json',body:options}).then(function(res){resolve(res);});});};var saveComponentCategory=function saveComponentCategory(options){return new Promise(function(resolve,reject){(0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({method:'POST',url:'/lowcodeApi/auth/componentCategory/save',type:'json',body:options}).then(function(res){resolve(res);});});};var queryComponentCategory=function queryComponentCategory(options){return new Promise(function(resolve,reject){(0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({method:'POST',url:'/lowcodeApi/auth/componentCategory/query',type:'json',body:options}).then(function(res){resolve(res);});});};var saveComponentElements=function saveComponentElements(options){return new Promise(function(resolve,reject){(0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({method:'POST',url:'/lowcodeApi/auth/component/save/elements',type:'json',body:options}).then(function(res){resolve(res);});});};var queryRemoteEntryPath=function queryRemoteEntryPath(options){return new Promise(function(resolve,reject){(0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({method:'POST',url:'/lowcodeApi/auth/component/query/remoteEntryPath',type:'json',body:options}).then(function(res){resolve(res);});});};var queryRemoteComponentByEntryPath=function queryRemoteComponentByEntryPath(options){return new Promise(function(resolve,reject){(0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({method:'POST',url:'/lowcodeApi/auth/component/query/remoteComponentByEntryPath',type:'json',body:options}).then(function(res){resolve(res);});});};

/***/ }),

/***/ 10407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ myPages)
});

// EXTERNAL MODULE: consume shared module (default) react@^16.14.0 (singleton) (fallback: ../my-cli/node_modules/react/index.js)
var index_js_ = __webpack_require__(93121);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/pages/myPages/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"appsPages":"src-pages-myPages-index-module__appsPages","appsContent":"src-pages-myPages-index-module__appsContent","content":"src-pages-myPages-index-module__content"});
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/button/style/index.js + 1 modules
var style = __webpack_require__(85793);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/button/index.js
var es_button = __webpack_require__(31481);
;// CONCATENATED MODULE: ./src/pages/myPages/components/PageListBar/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ const PageListBar_index_module = ({"componentBar":"src-pages-myPages-components-PageListBar-index-module__componentBar","hideBtn":"src-pages-myPages-components-PageListBar-index-module__hideBtn","tabBarExtraContent":"src-pages-myPages-components-PageListBar-index-module__tabBarExtraContent","listBox":"src-pages-myPages-components-PageListBar-index-module__listBox","searchBox":"src-pages-myPages-components-PageListBar-index-module__searchBox","active":"src-pages-myPages-components-PageListBar-index-module__active","pageName":"src-pages-myPages-components-PageListBar-index-module__pageName"});
// EXTERNAL MODULE: ../my-cli/node_modules/react-redux/es/index.js + 14 modules
var es = __webpack_require__(52440);
// EXTERNAL MODULE: ../my-cli/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(54922);
// EXTERNAL MODULE: consume shared module (default) react@>=16.0.0 (singleton) (fallback: ../my-cli/node_modules/react/index.js)
var react_index_js_ = __webpack_require__(89669);
;// CONCATENATED MODULE: ../my-cli/node_modules/@ant-design/icons-svg/es/asn/HomeOutlined.js
// This icon file is generated automatically.
var HomeOutlined={"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},"name":"home","theme":"outlined"};/* harmony default export */ const asn_HomeOutlined = (HomeOutlined);
// EXTERNAL MODULE: ../my-cli/node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(79866);
;// CONCATENATED MODULE: ../my-cli/node_modules/@ant-design/icons/es/icons/HomeOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var HomeOutlined_HomeOutlined=function HomeOutlined(props,ref){return/*#__PURE__*/react_index_js_.createElement(AntdIcon/* default */.Z,(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},props),{},{ref:ref,icon:asn_HomeOutlined}));};HomeOutlined_HomeOutlined.displayName='HomeOutlined';/* harmony default export */ const icons_HomeOutlined = (/*#__PURE__*/react_index_js_.forwardRef(HomeOutlined_HomeOutlined));
;// CONCATENATED MODULE: ./src/pages/myPages/components/PageListBar/PageList.jsx
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}var PageList=/*#__PURE__*/function(_Component){_inherits(PageList,_Component);var _super=_createSuper(PageList);function PageList(){var _this;_classCallCheck(this,PageList);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.bindClickPage=function(id,index){var _this$props=_this.props,model=_this$props.model,dispatch=_this$props.dispatch,dataKey=_this$props.dataKey;var list=model[dataKey];dispatch({type:'myPagesModel/setState',payload:{currentPage:list[index]}});};return _this;}_createClass(PageList,[{key:"render",value:function render(){var _this2=this;var _this$props2=this.props,model=_this$props2.model,dataKey=_this$props2.dataKey;var list=model[dataKey];var currentPage=model.currentPage||{};return/*#__PURE__*/index_js_default().createElement("div",{className:PageListBar_index_module.listBox},/*#__PURE__*/index_js_default().createElement("ul",null,(list||[]).map(function(item,index){return/*#__PURE__*/index_js_default().createElement("li",{key:index,className:currentPage.pageId===item.pageId?PageListBar_index_module.active:'',onClick:function onClick(){_this2.bindClickPage(item.pageId,index);}},/*#__PURE__*/index_js_default().createElement("div",{className:PageListBar_index_module.pageName},item.isHome?/*#__PURE__*/index_js_default().createElement(icons_HomeOutlined,{style:{marginRight:'5px'}}):null,item.pageName));})));}}]);return PageList;}(index_js_.Component);/* harmony default export */ const PageListBar_PageList = ((0,es/* connect */.$j)(function(_ref){var myPagesModel=_ref.myPagesModel;return{model:myPagesModel};})(PageList));
// EXTERNAL MODULE: ./node_modules/@icode-run/icon-font/src/index.jsx
var src = __webpack_require__(34044);
;// CONCATENATED MODULE: ./src/pages/myPages/components/PageListBar/index.jsx
function PageListBar_typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){PageListBar_typeof=function _typeof(obj){return typeof obj;};}else{PageListBar_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return PageListBar_typeof(obj);}function PageListBar_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function PageListBar_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function PageListBar_createClass(Constructor,protoProps,staticProps){if(protoProps)PageListBar_defineProperties(Constructor.prototype,protoProps);if(staticProps)PageListBar_defineProperties(Constructor,staticProps);return Constructor;}function PageListBar_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)PageListBar_setPrototypeOf(subClass,superClass);}function PageListBar_setPrototypeOf(o,p){PageListBar_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return PageListBar_setPrototypeOf(o,p);}function PageListBar_createSuper(Derived){var hasNativeReflectConstruct=PageListBar_isNativeReflectConstruct();return function _createSuperInternal(){var Super=PageListBar_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=PageListBar_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return PageListBar_possibleConstructorReturn(this,result);};}function PageListBar_possibleConstructorReturn(self,call){if(call&&(PageListBar_typeof(call)==="object"||typeof call==="function")){return call;}return PageListBar_assertThisInitialized(self);}function PageListBar_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function PageListBar_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function PageListBar_getPrototypeOf(o){PageListBar_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return PageListBar_getPrototypeOf(o);}/**
 * PageListBar
 * @author tianyanrong
 * @date 2021/6/15 下午3:18:20
 */var PageListBar=/*#__PURE__*/function(_Component){PageListBar_inherits(PageListBar,_Component);var _super=PageListBar_createSuper(PageListBar);function PageListBar(){PageListBar_classCallCheck(this,PageListBar);return _super.apply(this,arguments);}PageListBar_createClass(PageListBar,[{key:"render",value:// onDragStart = ({ event, node }) => {
//   const { model, dispatch } = this.props;
//   dispatch({
//     type: 'buildPageModel/setState',
//     payload: {
//       dragComponentName: node.props.title,
//     },
//   });
// };
function render(){var _this$props=this.props,model=_this$props.model,history=_this$props.history;return/*#__PURE__*/index_js_default().createElement("div",{className:PageListBar_index_module.componentBar,type:"left"},/*#__PURE__*/index_js_default().createElement("div",{style:{margin:'10px 15px 5px 15px'}},/*#__PURE__*/index_js_default().createElement(es_button/* default */.Z,{type:"primary",ghost:true,block:true,onClick:function onClick(){history.push('/pages/build');}},/*#__PURE__*/index_js_default().createElement(src/* default */.Z,{type:"iconadd"}),"\u65B0\u5EFA\u9875\u9762")),/*#__PURE__*/index_js_default().createElement(PageListBar_PageList,{dataKey:"list"}));}}]);return PageListBar;}(index_js_.Component);/* harmony default export */ const components_PageListBar = ((0,es/* connect */.$j)(function(_ref){var myPagesModel=_ref.myPagesModel;return{model:myPagesModel};})(PageListBar));
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/message/style/index.js + 1 modules
var message_style = __webpack_require__(35735);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/message/index.js + 3 modules
var message = __webpack_require__(96213);
// EXTERNAL MODULE: ../my-cli/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(92910);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ../my-cli/node_modules/import-remote-module/index.js
var import_remote_module = __webpack_require__(89056);
// EXTERNAL MODULE: ../my-designer/src/index.js + 93 modules
var my_designer_src = __webpack_require__(83815);
// EXTERNAL MODULE: ./src/pages/myAppsComponentSetting/service.js
var service = __webpack_require__(1401);
// EXTERNAL MODULE: ./src/pages/designer/service.js
var designer_service = __webpack_require__(34727);
;// CONCATENATED MODULE: ./src/pages/myPages/components/ViewContent/index.jsx
function ViewContent_typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){ViewContent_typeof=function _typeof(obj){return typeof obj;};}else{ViewContent_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return ViewContent_typeof(obj);}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function ViewContent_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function ViewContent_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function ViewContent_createClass(Constructor,protoProps,staticProps){if(protoProps)ViewContent_defineProperties(Constructor.prototype,protoProps);if(staticProps)ViewContent_defineProperties(Constructor,staticProps);return Constructor;}function ViewContent_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)ViewContent_setPrototypeOf(subClass,superClass);}function ViewContent_setPrototypeOf(o,p){ViewContent_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return ViewContent_setPrototypeOf(o,p);}function ViewContent_createSuper(Derived){var hasNativeReflectConstruct=ViewContent_isNativeReflectConstruct();return function _createSuperInternal(){var Super=ViewContent_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=ViewContent_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return ViewContent_possibleConstructorReturn(this,result);};}function ViewContent_possibleConstructorReturn(self,call){if(call&&(ViewContent_typeof(call)==="object"||typeof call==="function")){return call;}return ViewContent_assertThisInitialized(self);}function ViewContent_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function ViewContent_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function ViewContent_getPrototypeOf(o){ViewContent_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return ViewContent_getPrototypeOf(o);}/**
 * myPages
 * @author tianyanrong
 * @date 2021/6/16 上午11:24:30
 */var ViewContent=/*#__PURE__*/function(_Component){ViewContent_inherits(ViewContent,_Component);var _super=ViewContent_createSuper(ViewContent);function ViewContent(){var _this;ViewContent_classCallCheck(this,ViewContent);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.state={propsConfigs:null};_this.getData=/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee(){var res,data;return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return (0,service/* queryComponentCategory */.dY)();case 2:res=_context.sent;if(res&&res.result==='success'){data=res.data||{};_this.setState({propsConfigs:data.propsConfigs,componentList:data.category});}case 4:case"end":return _context.stop();}}},_callee);}));return _this;}ViewContent_createClass(ViewContent,[{key:"componentDidMount",value:function componentDidMount(){this.getData();}},{key:"render",value:function render(){var _this$props=this.props,model=_this$props.model,dispatch=_this$props.dispatch,history=_this$props.history,_this$props$globalMod=_this$props.globalModel,globalModel=_this$props$globalMod===void 0?{}:_this$props$globalMod;var propsConfigs=this.state.propsConfigs;if(!propsConfigs){return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null);}var currentPage=model.currentPage||{};var content={};try{content=JSON.parse(currentPage.content);}catch(e){//
}var userInfo=globalModel.userInfo||{};return/*#__PURE__*/index_js_default().createElement(my_designer_src["default"],{type:'view',connect:es/* connect */.$j,app:this.props.app,token:globalModel.token//isStaticData={true}
,importComponents:{},componentDefaultConfigs:propsConfigs,componentList:[],key:currentPage.pageId,designer:"designer1",style:{height:'calc(100vh - 50px)'},dataModels:content.dataModels,globalState:content.globalState,relations:content.relations,componentConfig:content.componentConfig,userInfo:{accountCode:userInfo.accountCode,role:userInfo.role},pageInfo:{pageName:currentPage.pageName,pageId:currentPage.pageId,fileName:currentPage.fileName,type:currentPage.type,author:currentPage.editAuthor},handleBuildPreview:/*#__PURE__*/function(){var _ref2=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee2(data){var res;return regenerator_default().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return (0,designer_service/* buildPreview */.kC)(data);case 2:res=_context2.sent;if(res.data&&res.data.url){window.open("/lowcodeApi/handlePreview?path=".concat(encodeURIComponent(res.data.url)));}case 4:case"end":return _context2.stop();}}},_callee2);}));return function(_x){return _ref2.apply(this,arguments);};}(),handleBuildRelease:/*#__PURE__*/function(){var _ref3=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee3(data){var res;return regenerator_default().wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return (0,designer_service/* buildRelease */.C6)(data);case 2:res=_context3.sent;if(res.data&&res.data.url){window.open("/lowcodeApi/handlePreview?path=".concat(encodeURIComponent(res.data.url),"&isRelease=1"));}case 4:case"end":return _context3.stop();}}},_callee3);}));return function(_x2){return _ref3.apply(this,arguments);};}(),handleCopyPage:/*#__PURE__*/function(){var _ref4=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee4(options){var res;return regenerator_default().wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return (0,designer_service/* copyView */.Z1)(options);case 2:res=_context4.sent;if(res.result==='success'){message/* default.success */.ZP.success(res.msg);dispatch({type:'myPagesModel/queryPage'});}else{message/* default.error */.ZP.error(res.msg);}return _context4.abrupt("return",res);case 5:case"end":return _context4.stop();}}},_callee4);}));return function(_x3){return _ref4.apply(this,arguments);};}(),editCallback:function editCallback(){history.push({pathname:'/pages/build',search:"id=".concat(currentPage.fileName)});}});}}]);return ViewContent;}(index_js_.Component);/* harmony default export */ const components_ViewContent = ((0,es/* connect */.$j)(function(_ref5){var globalModel=_ref5.globalModel;return{globalModel:globalModel};})(ViewContent));
// EXTERNAL MODULE: ./node_modules/@icode-run/container/src/index.jsx + 2 modules
var container_src = __webpack_require__(47908);
;// CONCATENATED MODULE: ./src/pages/myPages/index.jsx
function myPages_typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){myPages_typeof=function _typeof(obj){return typeof obj;};}else{myPages_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return myPages_typeof(obj);}function myPages_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function myPages_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function myPages_createClass(Constructor,protoProps,staticProps){if(protoProps)myPages_defineProperties(Constructor.prototype,protoProps);if(staticProps)myPages_defineProperties(Constructor,staticProps);return Constructor;}function myPages_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)myPages_setPrototypeOf(subClass,superClass);}function myPages_setPrototypeOf(o,p){myPages_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return myPages_setPrototypeOf(o,p);}function myPages_createSuper(Derived){var hasNativeReflectConstruct=myPages_isNativeReflectConstruct();return function _createSuperInternal(){var Super=myPages_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=myPages_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return myPages_possibleConstructorReturn(this,result);};}function myPages_possibleConstructorReturn(self,call){if(call&&(myPages_typeof(call)==="object"||typeof call==="function")){return call;}return myPages_assertThisInitialized(self);}function myPages_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function myPages_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function myPages_getPrototypeOf(o){myPages_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return myPages_getPrototypeOf(o);}/**
 * myPages
 * @author tianyanrong
 * @date 2021/6/16 上午11:24:30
 */var BuildPage=/*#__PURE__*/function(_Component){myPages_inherits(BuildPage,_Component);var _super=myPages_createSuper(BuildPage);function BuildPage(){myPages_classCallCheck(this,BuildPage);return _super.apply(this,arguments);}myPages_createClass(BuildPage,[{key:"render",value:function render(){var _this$props=this.props,model=_this$props.model,dispatch=_this$props.dispatch;return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(container_src/* default */.Z,{direction:"row",className:index_module.appsPages},/*#__PURE__*/index_js_default().createElement(components_PageListBar,this.props),/*#__PURE__*/index_js_default().createElement("div",{className:index_module.content},/*#__PURE__*/index_js_default().createElement(components_ViewContent,this.props))));}}]);return BuildPage;}(index_js_.Component);/* harmony default export */ const myPages = (BuildPage);

/***/ })

}]);