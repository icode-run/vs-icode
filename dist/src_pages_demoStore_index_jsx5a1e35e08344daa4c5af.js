"use strict";
(self["webpackChunkmy_web"] = self["webpackChunkmy_web"] || []).push([["src_pages_demoStore_index_jsx"],{

/***/ 41313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ create)
});

// EXTERNAL MODULE: ../my-cli/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(54922);
// EXTERNAL MODULE: ../my-cli/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5263);
// EXTERNAL MODULE: consume shared module (default) react@>=16.0.0 (singleton) (fallback: ../my-cli/node_modules/react/index.js)
var index_js_ = __webpack_require__(89669);
// EXTERNAL MODULE: ../my-cli/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(17595);
// EXTERNAL MODULE: ../my-cli/node_modules/classnames/index.js
var classnames = __webpack_require__(10339);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../my-cli/node_modules/@ant-design/icons/es/components/Context.js
var Context = __webpack_require__(39011);
// EXTERNAL MODULE: ../my-cli/node_modules/@ant-design/icons/es/utils.js
var utils = __webpack_require__(19556);
;// CONCATENATED MODULE: ../my-cli/node_modules/@ant-design/icons/es/components/Icon.js
var _excluded=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"];var Icon=/*#__PURE__*/index_js_.forwardRef(function(props,ref){var className=props.className,Component=props.component,viewBox=props.viewBox,spin=props.spin,rotate=props.rotate,tabIndex=props.tabIndex,onClick=props.onClick,children=props.children,restProps=(0,objectWithoutProperties/* default */.Z)(props,_excluded);(0,utils/* warning */.Kp)(Boolean(Component||children),'Should have `component` prop or `children`.');(0,utils/* useInsertStyles */.C3)();var _React$useContext=index_js_.useContext(Context/* default */.Z),_React$useContext$pre=_React$useContext.prefixCls,prefixCls=_React$useContext$pre===void 0?'anticon':_React$useContext$pre;var classString=classnames_default()(prefixCls,className);var svgClassString=classnames_default()((0,defineProperty/* default */.Z)({},"".concat(prefixCls,"-spin"),!!spin));var svgStyle=rotate?{msTransform:"rotate(".concat(rotate,"deg)"),transform:"rotate(".concat(rotate,"deg)")}:undefined;var innerSvgProps=(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},utils/* svgBaseProps */.vD),{},{className:svgClassString,style:svgStyle,viewBox:viewBox});if(!viewBox){delete innerSvgProps.viewBox;}// component > children
var renderInnerNode=function renderInnerNode(){if(Component){return/*#__PURE__*/index_js_.createElement(Component,(0,objectSpread2/* default */.Z)({},innerSvgProps),children);}if(children){(0,utils/* warning */.Kp)(Boolean(viewBox)||index_js_.Children.count(children)===1&&/*#__PURE__*/index_js_.isValidElement(children)&&index_js_.Children.only(children).type==='use','Make sure that you provide correct `viewBox`'+' prop (default `0 0 1024 1024`) to the icon.');return/*#__PURE__*/index_js_.createElement("svg",(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},innerSvgProps),{},{viewBox:viewBox}),children);}return null;};var iconTabIndex=tabIndex;if(iconTabIndex===undefined&&onClick){iconTabIndex=-1;}return/*#__PURE__*/index_js_.createElement("span",(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({role:"img"},restProps),{},{ref:ref,tabIndex:iconTabIndex,onClick:onClick,className:classString}),renderInnerNode());});Icon.displayName='AntdIcon';/* harmony default export */ const components_Icon = (Icon);
;// CONCATENATED MODULE: ../my-cli/node_modules/@ant-design/icons/es/components/IconFont.js
var IconFont_excluded=["type","children"];var customCache=new Set();function isValidCustomScriptUrl(scriptUrl){return Boolean(typeof scriptUrl==='string'&&scriptUrl.length&&!customCache.has(scriptUrl));}function createScriptUrlElements(scriptUrls){var index=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var currentScriptUrl=scriptUrls[index];if(isValidCustomScriptUrl(currentScriptUrl)){var script=document.createElement('script');script.setAttribute('src',currentScriptUrl);script.setAttribute('data-namespace',currentScriptUrl);if(scriptUrls.length>index+1){script.onload=function(){createScriptUrlElements(scriptUrls,index+1);};script.onerror=function(){createScriptUrlElements(scriptUrls,index+1);};}customCache.add(currentScriptUrl);document.body.appendChild(script);}}function create(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var scriptUrl=options.scriptUrl,_options$extraCommonP=options.extraCommonProps,extraCommonProps=_options$extraCommonP===void 0?{}:_options$extraCommonP;/**
   * DOM API required.
   * Make sure in browser environment.
   * The Custom Icon will create a <script/>
   * that loads SVG symbols and insert the SVG Element into the document body.
   */if(scriptUrl&&typeof document!=='undefined'&&typeof window!=='undefined'&&typeof document.createElement==='function'){if(Array.isArray(scriptUrl)){// 因为iconfont资源会把svg插入before，所以前加载相同type会覆盖后加载，为了数组覆盖顺序，倒叙插入
createScriptUrlElements(scriptUrl.reverse());}else{createScriptUrlElements([scriptUrl]);}}var Iconfont=/*#__PURE__*/index_js_.forwardRef(function(props,ref){var type=props.type,children=props.children,restProps=(0,objectWithoutProperties/* default */.Z)(props,IconFont_excluded);// children > type
var content=null;if(props.type){content=/*#__PURE__*/index_js_.createElement("use",{xlinkHref:"#".concat(type)});}if(children){content=children;}return/*#__PURE__*/index_js_.createElement(components_Icon,(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},extraCommonProps),restProps),{},{ref:ref}),content);});Iconfont.displayName='Iconfont';return Iconfont;}

/***/ }),

/***/ 34044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41313);
var IconFont=(0,_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({scriptUrl:'//at.alicdn.com/t/font_2794738_afib2c2vxmh.js'});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconFont);

/***/ }),

/***/ 58882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ demoStore)
});

// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/button/style/index.js + 1 modules
var style = __webpack_require__(85793);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/button/index.js
var es_button = __webpack_require__(31481);
// EXTERNAL MODULE: ../my-cli/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(92910);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: consume shared module (default) react@^16.14.0 (singleton) (fallback: ../my-cli/node_modules/react/index.js)
var index_js_ = __webpack_require__(93121);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/pages/demoStore/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"anliBox":"src-pages-demoStore-index-module__anliBox","img":"src-pages-demoStore-index-module__img","tools":"src-pages-demoStore-index-module__tools","priceText":"src-pages-demoStore-index-module__priceText","buttons":"src-pages-demoStore-index-module__buttons"});
// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__(96648);
;// CONCATENATED MODULE: ./src/pages/demoStore/service.js
/**
 * Service
 * @author
 */// 保存页面
var getTemplates=function getTemplates(options){return (0,request/* default */.Z)({method:'POST',url:'/lowcodeApi/pages/getTemplates',type:'json',body:options}).then(function(res){return res;});};
// EXTERNAL MODULE: ./node_modules/@icode-run/icon-font/src/index.jsx
var src = __webpack_require__(34044);
;// CONCATENATED MODULE: ./src/pages/demoStore/index.jsx
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}/**
 * myPages
 * @author tianyanrong
 * @date 2021/6/16 上午11:24:30
 */var BuildPage=/*#__PURE__*/function(_Component){_inherits(BuildPage,_Component);var _super=_createSuper(BuildPage);function BuildPage(){var _this;_classCallCheck(this,BuildPage);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.state={list:[]};_this.fetchData=/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee(){var res;return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return getTemplates();case 2:res=_context.sent;if(res.result==='success'){_this.setState({list:res.data||[],isLogin:res.isLogin});}case 4:case"end":return _context.stop();}}},_callee);}));return _this;}_createClass(BuildPage,[{key:"componentDidMount",value:function componentDidMount(){this.fetchData();}},{key:"render",value:function render(){var _this$props=this.props,model=_this$props.model,dispatch=_this$props.dispatch,history=_this$props.history,basename=_this$props.basename;var _this$state=this.state,list=_this$state.list,isLogin=_this$state.isLogin;return/*#__PURE__*/index_js_default().createElement("div",{className:index_module.anliBox},/*#__PURE__*/index_js_default().createElement("div",{className:index_module.mainBoxTitle}),/*#__PURE__*/index_js_default().createElement("div",{className:index_module.mainBoxBody},/*#__PURE__*/index_js_default().createElement("ul",null,list.map(function(item){return/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("div",{className:index_module.img},/*#__PURE__*/index_js_default().createElement("img",{src:item.thumbnail})),/*#__PURE__*/index_js_default().createElement("div",{className:index_module.tools},/*#__PURE__*/index_js_default().createElement("div",{className:index_module.priceText},/*#__PURE__*/index_js_default().createElement("span",null,"VIP")),/*#__PURE__*/index_js_default().createElement("div",{className:index_module.buttons},/*#__PURE__*/index_js_default().createElement(es_button/* default */.Z,{size:"small",type:"primary",ghost:true,onClick:function onClick(){window.open("/workSpace/icode/".concat(item.fileName));}},/*#__PURE__*/index_js_default().createElement(src/* default */.Z,{type:'iconyulan1'}),"\u9884\u89C8"),isLogin?/*#__PURE__*/index_js_default().createElement(es_button/* default */.Z,{style:{marginLeft:'5px'},size:"small",type:"primary",onClick:function onClick(){window.open("/web/pages/build?id=".concat(item.fileName,"&isTemplate=1"));}},"\u4F7F\u7528"):null,parseFloat(item.price,10)?/*#__PURE__*/index_js_default().createElement(es_button/* default */.Z,{size:"small",type:"primary",style:{marginLeft:'5px'}},"\u8D2D\u4E70"):null))));}))));}}]);return BuildPage;}(index_js_.Component);/* harmony default export */ const demoStore = (BuildPage);

/***/ })

}]);