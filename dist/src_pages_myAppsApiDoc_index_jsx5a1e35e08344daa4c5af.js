"use strict";
(self["webpackChunkmy_web"] = self["webpackChunkmy_web"] || []).push([["src_pages_myAppsApiDoc_index_jsx"],{

/***/ 74757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ popconfirm)
});

// EXTERNAL MODULE: ../my-cli/node_modules/antd/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(26141);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(73185);
// EXTERNAL MODULE: ../my-cli/node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js + 1 modules
var ExclamationCircleFilled = __webpack_require__(88640);
// EXTERNAL MODULE: ../my-cli/node_modules/classnames/index.js
var classnames = __webpack_require__(10339);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../my-cli/node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(53250);
// EXTERNAL MODULE: ../my-cli/node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(89292);
// EXTERNAL MODULE: consume shared module (default) react@>=16.9.0 (singleton) (fallback: ../my-cli/node_modules/react/index.js)
var index_js_ = __webpack_require__(84251);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(68354);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__(16606);
;// CONCATENATED MODULE: ../my-cli/node_modules/antd/es/_util/getRenderPropValue.js
var getRenderPropValue=function getRenderPropValue(propValue){if(!propValue){return null;}if(typeof propValue==='function'){return propValue();}return propValue;};
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(64606);
;// CONCATENATED MODULE: ../my-cli/node_modules/antd/es/popover/index.js
var __rest=undefined&&undefined.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var Overlay=function Overlay(_ref){var title=_ref.title,content=_ref.content,prefixCls=_ref.prefixCls;if(!title&&!content){return null;}return/*#__PURE__*/index_js_.createElement(index_js_.Fragment,null,title&&/*#__PURE__*/index_js_.createElement("div",{className:"".concat(prefixCls,"-title")},getRenderPropValue(title)),/*#__PURE__*/index_js_.createElement("div",{className:"".concat(prefixCls,"-inner-content")},getRenderPropValue(content)));};var Popover=/*#__PURE__*/index_js_.forwardRef(function(props,ref){var customizePrefixCls=props.prefixCls,title=props.title,content=props.content,_overlay=props._overlay,_props$placement=props.placement,placement=_props$placement===void 0?'top':_props$placement,_props$trigger=props.trigger,trigger=_props$trigger===void 0?'hover':_props$trigger,_props$mouseEnterDela=props.mouseEnterDelay,mouseEnterDelay=_props$mouseEnterDela===void 0?0.1:_props$mouseEnterDela,_props$mouseLeaveDela=props.mouseLeaveDelay,mouseLeaveDelay=_props$mouseLeaveDela===void 0?0.1:_props$mouseLeaveDela,_props$overlayStyle=props.overlayStyle,overlayStyle=_props$overlayStyle===void 0?{}:_props$overlayStyle,otherProps=__rest(props,["prefixCls","title","content","_overlay","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]);var _React$useContext=index_js_.useContext(context/* ConfigContext */.E_),getPrefixCls=_React$useContext.getPrefixCls;var prefixCls=getPrefixCls('popover',customizePrefixCls);var rootPrefixCls=getPrefixCls();return/*#__PURE__*/index_js_.createElement(tooltip/* default */.Z,(0,esm_extends/* default */.Z)({placement:placement,trigger:trigger,mouseEnterDelay:mouseEnterDelay,mouseLeaveDelay:mouseLeaveDelay,overlayStyle:overlayStyle},otherProps,{prefixCls:prefixCls,ref:ref,overlay:_overlay||/*#__PURE__*/index_js_.createElement(Overlay,{prefixCls:prefixCls,title:title,content:content}),transitionName:(0,motion/* getTransitionName */.mL)(rootPrefixCls,'zoom-big',otherProps.transitionName)}));});if(false){}/* harmony default export */ const popover = (Popover);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(26805);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/button/index.js
var es_button = __webpack_require__(31481);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/button/button.js + 2 modules
var button_button = __webpack_require__(28389);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/_util/ActionButton.js
var ActionButton = __webpack_require__(38938);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/locale-provider/LocaleReceiver.js + 1 modules
var LocaleReceiver = __webpack_require__(79341);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/locale/default.js + 1 modules
var locale_default = __webpack_require__(263);
;// CONCATENATED MODULE: ../my-cli/node_modules/antd/es/popconfirm/PurePanel.js
var PurePanel_Overlay=function Overlay(props){var prefixCls=props.prefixCls,okButtonProps=props.okButtonProps,cancelButtonProps=props.cancelButtonProps,title=props.title,cancelText=props.cancelText,okText=props.okText,okType=props.okType,icon=props.icon,_props$showCancel=props.showCancel,showCancel=_props$showCancel===void 0?true:_props$showCancel,close=props.close,onConfirm=props.onConfirm,onCancel=props.onCancel;var _React$useContext=index_js_.useContext(context/* ConfigContext */.E_),getPrefixCls=_React$useContext.getPrefixCls;return/*#__PURE__*/index_js_.createElement(LocaleReceiver/* default */.Z,{componentName:"Popconfirm",defaultLocale:locale_default/* default.Popconfirm */.Z.Popconfirm},function(contextLocale){return/*#__PURE__*/index_js_.createElement("div",{className:"".concat(prefixCls,"-inner-content")},/*#__PURE__*/index_js_.createElement("div",{className:"".concat(prefixCls,"-message")},icon&&/*#__PURE__*/index_js_.createElement("span",{className:"".concat(prefixCls,"-message-icon")},icon),/*#__PURE__*/index_js_.createElement("div",{className:"".concat(prefixCls,"-message-title")},getRenderPropValue(title))),/*#__PURE__*/index_js_.createElement("div",{className:"".concat(prefixCls,"-buttons")},showCancel&&/*#__PURE__*/index_js_.createElement(es_button/* default */.Z,(0,esm_extends/* default */.Z)({onClick:onCancel,size:"small"},cancelButtonProps),cancelText!==null&&cancelText!==void 0?cancelText:contextLocale.cancelText),/*#__PURE__*/index_js_.createElement(ActionButton/* default */.Z,{buttonProps:(0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({size:'small'},(0,button_button/* convertLegacyProps */.n)(okType)),okButtonProps),actionFn:onConfirm,close:close,prefixCls:getPrefixCls('btn'),quitOnNullishReturnValue:true,emitEvent:true},okText!==null&&okText!==void 0?okText:contextLocale.okText)));});};
;// CONCATENATED MODULE: ../my-cli/node_modules/antd/es/popconfirm/index.js
var _this=undefined;var popconfirm_rest=undefined&&undefined.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var Popconfirm=/*#__PURE__*/index_js_.forwardRef(function(props,ref){var _React$useContext=index_js_.useContext(context/* ConfigContext */.E_),getPrefixCls=_React$useContext.getPrefixCls;var _useMergedState=(0,useMergedState/* default */.Z)(false,{value:props.open!==undefined?props.open:props.visible,defaultValue:props.defaultOpen!==undefined?props.defaultOpen:props.defaultVisible}),_useMergedState2=(0,slicedToArray/* default */.Z)(_useMergedState,2),open=_useMergedState2[0],setOpen=_useMergedState2[1];// const isDestroyed = useDestroyed();
var settingOpen=function settingOpen(value,e){var _a,_b;setOpen(value,true);(_a=props.onVisibleChange)===null||_a===void 0?void 0:_a.call(props,value,e);(_b=props.onOpenChange)===null||_b===void 0?void 0:_b.call(props,value,e);};var close=function close(e){settingOpen(false,e);};var onConfirm=function onConfirm(e){var _a;return(_a=props.onConfirm)===null||_a===void 0?void 0:_a.call(_this,e);};var onCancel=function onCancel(e){var _a;settingOpen(false,e);(_a=props.onCancel)===null||_a===void 0?void 0:_a.call(_this,e);};var _onKeyDown=function onKeyDown(e){if(e.keyCode===KeyCode/* default.ESC */.Z.ESC&&open){settingOpen(false,e);}};var onOpenChange=function onOpenChange(value){var _props$disabled=props.disabled,disabled=_props$disabled===void 0?false:_props$disabled;if(disabled){return;}settingOpen(value);};var customizePrefixCls=props.prefixCls,_props$placement=props.placement,placement=_props$placement===void 0?'top':_props$placement,_props$trigger=props.trigger,trigger=_props$trigger===void 0?'click':_props$trigger,_props$okType=props.okType,okType=_props$okType===void 0?'primary':_props$okType,_props$icon=props.icon,icon=_props$icon===void 0?/*#__PURE__*/index_js_.createElement(ExclamationCircleFilled/* default */.Z,null):_props$icon,children=props.children,overlayClassName=props.overlayClassName,restProps=popconfirm_rest(props,["prefixCls","placement","trigger","okType","icon","children","overlayClassName"]);var prefixCls=getPrefixCls('popover',customizePrefixCls);var prefixClsConfirm=getPrefixCls('popconfirm',customizePrefixCls);var overlayClassNames=classnames_default()(prefixClsConfirm,overlayClassName);return/*#__PURE__*/index_js_.createElement(popover,(0,esm_extends/* default */.Z)({},restProps,{trigger:trigger,prefixCls:prefixCls,placement:placement,onOpenChange:onOpenChange,open:open,ref:ref,overlayClassName:overlayClassNames,_overlay:/*#__PURE__*/index_js_.createElement(PurePanel_Overlay,(0,esm_extends/* default */.Z)({okType:okType,icon:icon},props,{prefixCls:prefixCls,close:close,onConfirm:onConfirm,onCancel:onCancel}))}),(0,reactNode/* cloneElement */.Tm)(children,{onKeyDown:function onKeyDown(e){var _a,_b;if(/*#__PURE__*/index_js_.isValidElement(children)){(_b=children===null||children===void 0?void 0:(_a=children.props).onKeyDown)===null||_b===void 0?void 0:_b.call(_a,e);}_onKeyDown(e);}}));});/* harmony default export */ const popconfirm = (Popconfirm);

/***/ }),

/***/ 15165:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/style/default.less
var style_default = __webpack_require__(36638);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/button/style/index.js + 1 modules
var style = __webpack_require__(85793);
;// CONCATENATED MODULE: ../my-cli/node_modules/antd/es/popover/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../my-cli/node_modules/antd/es/popover/style/index.js
// style dependencies
// deps-lint-skip: tooltip
;// CONCATENATED MODULE: ../my-cli/node_modules/antd/es/popconfirm/style/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../my-cli/node_modules/antd/es/popconfirm/style/index.js
// style dependencies
// deps-lint-skip: tooltip, popover


/***/ }),

/***/ 13733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_SelectMember)
});

// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/modal/style/index.js + 1 modules
var style = __webpack_require__(84389);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/modal/index.js + 16 modules
var modal = __webpack_require__(88217);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/select/style/index.js + 1 modules
var select_style = __webpack_require__(94289);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/select/index.js
var es_select = __webpack_require__(4213);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/message/style/index.js + 1 modules
var message_style = __webpack_require__(35735);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/message/index.js + 3 modules
var message = __webpack_require__(96213);
// EXTERNAL MODULE: ../my-cli/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(92910);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: consume shared module (default) react@^16.14.0 (singleton) (fallback: ../my-cli/node_modules/react/index.js)
var index_js_ = __webpack_require__(93121);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__(96648);
;// CONCATENATED MODULE: ./src/components/SelectMember/service.js
/**
 * Service
 * @author
 */var getData=function getData(options){return new Promise(function(resolve,reject){(0,request/* default */.Z)({method:'POST',url:'/lowcodeApi/auth/appAccount/query',type:'json',body:options}).then(function(res){resolve(res);});});};
;// CONCATENATED MODULE: ./src/components/SelectMember/index.jsx
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}/**
 * 发起邀请
 * @author tianyanrong
 * @date 2022/6/11 上午9:45:26
 */var SelectMember=/*#__PURE__*/function(_Component){_inherits(SelectMember,_Component);var _super=_createSuper(SelectMember);function SelectMember(){var _this;_classCallCheck(this,SelectMember);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.state={members:[]};_this.preVisible='';_this.getData=/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee(){var visible,res;return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:visible=_this.props.visible;if(visible!==_this.preVisible&&visible){_context.next=4;break;}_this.preVisible=visible;return _context.abrupt("return");case 4:_this.preVisible=visible;_context.next=7;return getData();case 7:res=_context.sent;if(res.result==='success'){_this.setState({members:res.data||[]});}else{message/* default.error */.ZP.error(res.msg||'生成邀请连接失败，请重试！');}case 9:case"end":return _context.stop();}}},_callee);}));return _this;}_createClass(SelectMember,[{key:"componentDidMount",value:function componentDidMount(){this.getData();}},{key:"componentDidUpdate",value:function componentDidUpdate(){this.getData();}},{key:"render",value:function render(){var _this2=this;var _this$props=this.props,visible=_this$props.visible,_onCancel=_this$props.onCancel,title=_this$props.title,_onOk=_this$props.onOk;var value=this.state.value;var _this$state$members=this.state.members,members=_this$state$members===void 0?[]:_this$state$members;return/*#__PURE__*/index_js_default().createElement(modal/* default */.Z,{title:title||'转派',visible:visible,onCancel:function onCancel(){_this2.setState({value:''});_onCancel();},onOk:function onOk(){if(!value||value===_this2.props.value){message/* default.error */.ZP.error("\u8BF7\u8F6C\u6D3E\u7ED9\u5176\u5B83\u4EBA\u5458\uFF0C\u6B64\u4EBA\u5458\u5DF2\u4E3A\u62E5\u6709\u8005\uFF01");return;}_onOk(value);_this2.setState({value:''});}},/*#__PURE__*/index_js_default().createElement(es_select/* default */.Z,{style:{width:'100%'},value:value||this.props.value||'',onChange:function onChange(value){_this2.setState({value:value});}},members.map(function(item){return/*#__PURE__*/index_js_default().createElement(es_select/* default.Option */.Z.Option,{value:item.accountCode},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("img",{src:item.headimgurl,width:"20"}),/*#__PURE__*/index_js_default().createElement("span",{style:{verticalAlign:'middle',display:'inline-block',marginLeft:'10px'}},item.userName," (",item.accountCode,")")));})));}}]);return SelectMember;}(index_js_.Component);/* harmony default export */ const components_SelectMember = (SelectMember);

/***/ }),

/***/ 9870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ myAppsApiDoc)
});

// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/table/style/index.js + 3 modules
var style = __webpack_require__(13686);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/table/index.js + 77 modules
var table = __webpack_require__(53026);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/message/style/index.js + 1 modules
var message_style = __webpack_require__(35735);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/message/index.js + 3 modules
var message = __webpack_require__(96213);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/popconfirm/style/index.js + 3 modules
var popconfirm_style = __webpack_require__(15165);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/popconfirm/index.js + 3 modules
var popconfirm = __webpack_require__(74757);
// EXTERNAL MODULE: ../my-cli/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(92910);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: consume shared module (default) react@^16.14.0 (singleton) (fallback: ../my-cli/node_modules/react/index.js)
var index_js_ = __webpack_require__(93121);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/pages/myAppsApiDoc/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"page":"src-pages-myAppsApiDoc-index-module__page","tools":"src-pages-myAppsApiDoc-index-module__tools","info":"src-pages-myAppsApiDoc-index-module__info"});
// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__(96648);
;// CONCATENATED MODULE: ./src/pages/myAppsApiDoc/service.js
/**
 * Service
 * @author
 */var queryAipDoc=function queryAipDoc(options){return new Promise(function(resolve,reject){(0,request/* default */.Z)({method:'POST',url:'/lowcodeApi/auth/apiDoc/query',type:'json',body:options}).then(function(res){resolve(res);});});};var removeAipDoc=function removeAipDoc(options){return new Promise(function(resolve,reject){(0,request/* default */.Z)({method:'POST',url:'/lowcodeApi/auth/apiDoc/remove',type:'json',body:options}).then(function(res){resolve(res);});});};var changeAuthor=function changeAuthor(options){return new Promise(function(resolve,reject){(0,request/* default */.Z)({method:'POST',url:'/lowcodeApi/auth/apiDoc/changeAuthor',type:'json',body:options}).then(function(res){resolve(res);});});};
// EXTERNAL MODULE: ../my-cli/node_modules/react-redux/es/index.js + 14 modules
var es = __webpack_require__(52440);
// EXTERNAL MODULE: ./src/components/SelectMember/index.jsx + 1 modules
var SelectMember = __webpack_require__(13733);
;// CONCATENATED MODULE: ./src/pages/myAppsApiDoc/index.jsx
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}/**
 * apps
 * @author tianyanrong
 * @date 2021/6/15 下午3:22:25
 */var Page=/*#__PURE__*/function(_Component){_inherits(Page,_Component);var _super=_createSuper(Page);function Page(){var _this;_classCallCheck(this,Page);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.state={};_this.getColumns=function(){_this.setState({columns:[{title:'接口地址',dataIndex:'url',key:'url'},{title:'接口名称',dataIndex:'title',key:'title'},{title:'Method',dataIndex:'method',key:'method'},{title:'创建者',dataIndex:'author',key:'author'},{title:'创建时间',dataIndex:'createdAt',key:'createdAt'},{title:'操作',key:'caozuo',render:function render(record){var globalModel=_this.props.globalModel;var userInfo=globalModel.userInfo||{};var isCanAuth=userInfo.role==='owner'||userInfo.role==='manager'||userInfo.accountCode===record.author;return/*#__PURE__*/index_js_default().createElement("div",null,isCanAuth?/*#__PURE__*/index_js_default().createElement("a",{style:{marginRight:'15px'},onClick:function onClick(){_this.setState({currentSelect:{author:record.author,url:record.url},selectMemberVisible:true});}},"\u8F6C\u6D3E"):null,isCanAuth?/*#__PURE__*/index_js_default().createElement(popconfirm/* default */.Z,{title:"\u786E\u5B9A\u5220\u9664\u6B64\u9875\u9762\uFF1F",onConfirm:function onConfirm(){_this.remove(record.url);},onCancel:function onCancel(){}},/*#__PURE__*/index_js_default().createElement("a",null,"\u5220\u9664")):null);}}]});};_this.changeAuthor=/*#__PURE__*/function(){var _ref=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee(options){var res;return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return changeAuthor(options);case 2:res=_context.sent;if(res.result==='success'){message/* default.success */.ZP.success('转派成功！');_this.setState({selectMemberVisible:false,currentSelect:{}});_this.getData();}else{message/* default.error */.ZP.error(res&&res.message||'转派失败！');}case 4:case"end":return _context.stop();}}},_callee);}));return function(_x){return _ref.apply(this,arguments);};}();_this.remove=/*#__PURE__*/function(){var _ref2=_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee2(url){var res;return regenerator_default().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return removeAipDoc({url:url});case 2:res=_context2.sent;if(res.result==='success'){message/* default.success */.ZP.success('删除成功！');_this.getData();}else{message/* default.error */.ZP.error(res&&res.message||'删除失败！');}case 4:case"end":return _context2.stop();}}},_callee2);}));return function(_x2){return _ref2.apply(this,arguments);};}();_this.getData=/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee3(){var res;return regenerator_default().wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_this.setState({loading:true});_context3.next=3;return queryAipDoc();case 3:res=_context3.sent;if(res.result==='success'){_this.setState({data:res.data||[]});}_this.setState({loading:false});case 6:case"end":return _context3.stop();}}},_callee3);}));return _this;}_createClass(Page,[{key:"componentDidMount",value:function componentDidMount(){this.getColumns();this.getData();}},{key:"render",value:function render(){var _this2=this;var _this$state=this.state,_this$state$columns=_this$state.columns,columns=_this$state$columns===void 0?[]:_this$state$columns,_this$state$data=_this$state.data,data=_this$state$data===void 0?[]:_this$state$data,_this$state$loading=_this$state.loading,loading=_this$state$loading===void 0?false:_this$state$loading,selectMemberVisible=_this$state.selectMemberVisible,_this$state$currentSe=_this$state.currentSelect,currentSelect=_this$state$currentSe===void 0?{}:_this$state$currentSe;return/*#__PURE__*/index_js_default().createElement("div",{className:index_module.page},/*#__PURE__*/index_js_default().createElement("div",{className:index_module.tools}),/*#__PURE__*/index_js_default().createElement(table/* default */.Z,{loading:loading,columns:columns,dataSource:data,pagination:false,rowKey:function rowKey(record){return record.appLogId;}}),/*#__PURE__*/index_js_default().createElement(SelectMember/* default */.Z,{visible:selectMemberVisible,value:currentSelect.author,onCancel:function onCancel(){_this2.setState({selectMemberVisible:false,currentSelect:{}});},onOk:function onOk(value){_this2.changeAuthor({url:currentSelect.url,author:value});}}));}}]);return Page;}(index_js_.Component);/* harmony default export */ const myAppsApiDoc = ((0,es/* connect */.$j)(function(_ref4){var globalModel=_ref4.globalModel;return{globalModel:globalModel};})(Page));

/***/ })

}]);