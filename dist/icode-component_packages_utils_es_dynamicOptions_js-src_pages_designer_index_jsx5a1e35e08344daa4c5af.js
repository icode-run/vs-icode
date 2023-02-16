"use strict";
(self["webpackChunkmy_web"] = self["webpackChunkmy_web"] || []).push([["icode-component_packages_utils_es_dynamicOptions_js-src_pages_designer_index_jsx"],{

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

/***/ 96518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92910);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52440);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34727);
/* harmony import */ var my_designer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83815);
/* harmony import */ var _myAppsComponentSetting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1401);
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}/**
 * designer
 * @author tianyanrong
 * @date 2021/7/20 上午9:16:00
 */// import PageBar from './components/PageBar';
var DesignerPage=/*#__PURE__*/function(_Component){_inherits(DesignerPage,_Component);var _super=_createSuper(DesignerPage);function DesignerPage(){var _this;_classCallCheck(this,DesignerPage);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.state={componentList:[]};_this.getComponentList=/*#__PURE__*/function(){var _ref=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(componentListObj,componentObj){var res,data;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return (0,_service__WEBPACK_IMPORTED_MODULE_2__/* .queryComponents */ .BY)();case 2:res=_context.sent;if(res.code===200){data=res.data||[];data.forEach(function(item){componentObj[item.component]=_objectSpread(_objectSpread({},item),{},{config:JSON.parse(item.config)});var categorys=item.categorys||'';categorys=categorys.indexOf(',')>0?categorys.split(','):[categorys];categorys.forEach(function(category){componentListObj[category]=componentListObj[category]||{};componentListObj[category][item.component]=item;});});}case 4:case"end":return _context.stop();}}},_callee);}));return function(_x,_x2){return _ref.apply(this,arguments);};}();_this.getData=/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(){var res,data;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return (0,_myAppsComponentSetting_service__WEBPACK_IMPORTED_MODULE_4__/* .queryComponentCategory */ .dY)();case 2:res=_context2.sent;if(res&&res.result==='success'){data=res.data||{};_this.setState({propsConfigs:data.propsConfigs,componentList:data.category});}case 4:case"end":return _context2.stop();}}},_callee2);}));_this.fetchPageData=/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(){var history,id,isTemplate,res,currentPage;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:history=_this.props.history;id=history.location&&history.location.params&&history.location.params.id;isTemplate=history.location&&history.location.params&&history.location.params.isTemplate;_context3.next=5;return (0,_service__WEBPACK_IMPORTED_MODULE_2__/* .getPages */ .UQ)({id:id,isTemplate:isTemplate});case 5:res=_context3.sent;if(res.result==='success'){currentPage=res.data;if(currentPage.content){currentPage.content=new Function("return ".concat(currentPage.content))();}_this.setState({currentPage:res.data||{}});}case 7:case"end":return _context3.stop();}}},_callee3);}));return _this;}_createClass(DesignerPage,[{key:"componentDidMount",value:function componentDidMount(){this.getData();this.fetchPageData();}},{key:"render",value:function render(){var _this$props=this.props,globalModel=_this$props.globalModel,history=_this$props.history;var _this$state=this.state,componentList=_this$state.componentList,propsConfigs=_this$state.propsConfigs,_this$state$currentPa=_this$state.currentPage,currentPage=_this$state$currentPa===void 0?{}:_this$state$currentPa;if(!(componentList&&componentList.length)){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment),null);}var content=currentPage.content||{};var isTemplate=history.location&&history.location.params&&history.location.params.isTemplate;var isAdmin=true;//globalModel.userInfo && globalModel.userInfo.role === 'admin';
var userInfo=globalModel.userInfo||{};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(my_designer__WEBPACK_IMPORTED_MODULE_3__["default"],{connect:dva__WEBPACK_IMPORTED_MODULE_5__/* .connect */ .$j,app:this.props.app,token:globalModel.token//isStaticData={true}
// importComponents={null}
,componentDefaultConfigs:propsConfigs,componentList:componentList// componentObj={componentObj}
,key:+new Date(),designer:"designer1",style:{height:'calc(100vh - 50px)'},dataModels:content.dataModels,globalState:content.globalState,relations:content.relations,componentConfig:content.componentConfig,pageInfo:isTemplate?{}:_objectSpread(_objectSpread({},currentPage||{}),{},{content:''}),userInfo:{accountCode:userInfo.accountCode,role:userInfo.role},handleBuildPreview:/*#__PURE__*/function(){var _ref4=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(data){var res;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:console.log('---handleBuildPreview',data,JSON.parse(data.content||[]));_context4.next=3;return (0,_service__WEBPACK_IMPORTED_MODULE_2__/* .buildPreview */ .kC)(data);case 3:res=_context4.sent;if(res.data&&res.data.url){window.open("/lowcodeApi/handlePreview?path=".concat(encodeURIComponent(res.data.url)));}case 5:case"end":return _context4.stop();}}},_callee4);}));return function(_x3){return _ref4.apply(this,arguments);};}(),handleBuildRelease:/*#__PURE__*/function(){var _ref5=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(data){var res;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.next=2;return (0,_service__WEBPACK_IMPORTED_MODULE_2__/* .buildRelease */ .C6)(data);case 2:res=_context5.sent;if(res.data&&res.data.url){window.open("/lowcodeApi/handlePreview?path=".concat(encodeURIComponent(res.data.url),"&isRelease=1"));}case 4:case"end":return _context5.stop();}}},_callee5);}));return function(_x4){return _ref5.apply(this,arguments);};}(),queryPages:/*#__PURE__*/function(){var _ref6=_asyncToGenerator(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(data){var res;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_context6.next=2;return (0,_service__WEBPACK_IMPORTED_MODULE_2__/* .queryPages */ .pt)();case 2:res=_context6.sent;return _context6.abrupt("return",res.data||[]);case 4:case"end":return _context6.stop();}}},_callee6);}));return function(_x5){return _ref6.apply(this,arguments);};}(),promiseConfig:isAdmin?{isShowComponentList:true,isCanRemoveComponent:true,isShowDataModel:true}:{isShowComponentList:false,isCanRemoveComponent:false,isShowDataModel:false},saveCallback:function saveCallback(options){(0,_service__WEBPACK_IMPORTED_MODULE_2__/* .savePages */ .$x)(_objectSpread({},options));}}));}}]);return DesignerPage;}(react__WEBPACK_IMPORTED_MODULE_1__.Component);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,dva__WEBPACK_IMPORTED_MODULE_5__/* .connect */ .$j)(function(_ref7){var globalModel=_ref7.globalModel;return{globalModel:globalModel};})(DesignerPage));

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

/***/ })

}]);