"use strict";
(self["webpackChunkmy_web"] = self["webpackChunkmy_web"] || []).push([["src_pages_inviteJoin_index_jsx"],{

/***/ 68489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_inviteJoin)
});

// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/tag/style/index.js + 1 modules
var style = __webpack_require__(18431);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/tag/index.js + 1 modules
var tag = __webpack_require__(55207);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/form/style/index.js + 3 modules
var form_style = __webpack_require__(44036);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/form/index.js + 19 modules
var es_form = __webpack_require__(16575);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/input/style/index.js + 1 modules
var input_style = __webpack_require__(60418);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/input/index.js + 29 modules
var input = __webpack_require__(40704);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/button/style/index.js + 1 modules
var button_style = __webpack_require__(85793);
// EXTERNAL MODULE: ../my-cli/node_modules/antd/es/button/index.js
var es_button = __webpack_require__(31481);
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
;// CONCATENATED MODULE: ./src/pages/inviteJoin/index.module.less
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"page":"src-pages-inviteJoin-index-module__page","box":"src-pages-inviteJoin-index-module__box"});
// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__(96648);
;// CONCATENATED MODULE: ./src/pages/inviteJoin/service.js
/**
 * Service
 * @author
 */var getInviteInfo=function getInviteInfo(options){return new Promise(function(resolve,reject){(0,request/* default */.Z)({method:'POST',url:'/lowcodeApi/auth/appAccount/getInviteInfo',type:'json',body:options}).then(function(res){resolve(res);});});};var inviteJoin=function inviteJoin(options){return new Promise(function(resolve,reject){(0,request/* default */.Z)({method:'POST',url:'/lowcodeApi/auth/appAccount/inviteJoin',type:'json',body:options}).then(function(res){resolve(res);});});};
;// CONCATENATED MODULE: ./src/pages/inviteJoin/index.jsx
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}/**
 * index
 * @author tianyanrong
 * @date 2022/6/11 上午9:45:26
 */var InviteJoin=/*#__PURE__*/function(_Component){_inherits(InviteJoin,_Component);var _super=_createSuper(InviteJoin);function InviteJoin(){var _this;_classCallCheck(this,InviteJoin);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.state={};_this.getInviteInfo=/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee(){var history,inviteCode,res;return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:history=_this.props.history;inviteCode=history.location.params&&history.location.params.c;_context.next=4;return getInviteInfo({c:inviteCode});case 4:res=_context.sent;if(res.result==='success'){_this.setState({info:res.data||{}});}else{_this.setState({error:res.message||'邀请连接失效',info:null});}case 6:case"end":return _context.stop();}}},_callee);}));_this.join=/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee2(){var values,history,inviteCode,res,_args2=arguments;return regenerator_default().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:values=_args2.length>0&&_args2[0]!==undefined?_args2[0]:{};history=_this.props.history;inviteCode=history.location.params&&history.location.params.c;_context2.next=5;return inviteJoin(_objectSpread({c:inviteCode},values.accountCode?{a:values.accountCode}:{}));case 5:res=_context2.sent;if(res.result==='success'){history.push('/');}else{message/* default.error */.ZP.error(res.msg||'操作失败');}case 7:case"end":return _context2.stop();}}},_callee2);}));return _this;}_createClass(InviteJoin,[{key:"componentDidMount",value:function componentDidMount(){this.getInviteInfo();}},{key:"render",value:function render(){var _this2=this;var _this$state=this.state,info=_this$state.info,error=_this$state.error;return/*#__PURE__*/index_js_default().createElement("div",{className:index_module.page},/*#__PURE__*/index_js_default().createElement("div",{className:index_module.box},error?/*#__PURE__*/index_js_default().createElement("div",null,error):null,info?/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("h2",null,"\u201C",info.inviter,"\u201D \u9080\u8BF7\u60A8\u52A0\u5165 \u201C",info.appName,"\u201D \u5E94\u7528"),info.isInApp?/*#__PURE__*/index_js_default().createElement("div",{style:{textAlign:'center'}},/*#__PURE__*/index_js_default().createElement(es_button/* default */.Z,{onClick:this.join,type:'primary',size:"large"},"\u4F60\u5DF2\u662F\u6B64\u5E94\u7528\u6210\u5458\uFF0C\u53BB\u8BBF\u95EE\u6B64\u5E94\u7528")):/*#__PURE__*/index_js_default().createElement(es_form/* default */.Z,{name:"newApp",labelCol:{span:6},wrapperCol:{span:16},initialValues:{remember:true},onFinish:function onFinish(values){_this2.join(values);}},info.accountCode?null:/*#__PURE__*/index_js_default().createElement("h6",null,"\u60A8\u7684\u8D26\u53F7\u4E3A\u65B0\u6CE8\u518C\u7684\u8D26\u53F7\uFF0C\u8BF7\u8BBE\u7F6E\u201C\u8D26\u53F7ID\u201D, \u201C\u8D26\u53F7ID\u201D\u4E0D\u53EF\u4FEE\u6539\uFF0C\u7528\u4E8E\u8DEF\u5F84\u7B49\u573A\u666F\u3002"),info.accountCode?null:/*#__PURE__*/index_js_default().createElement(es_form/* default.Item */.Z.Item,{label:"\u8D26\u53F7ID",name:"accountCode",rules:[{required:true,message:'请输入账户ID'},{min:2},{max:15},{pattern:'^[A-Za-z0-9]+$'}],help:"\u82F1\u6587\u5B57\u6BCD\u3001\u6570\u5B57\u7EC4\u6210\uFF0C\u96502-15\u4E2A\u5B57\u7B26"},/*#__PURE__*/index_js_default().createElement(input/* default */.Z,null)),/*#__PURE__*/index_js_default().createElement("div",{style:{textAlign:'center',paddingTop:'20px'}},/*#__PURE__*/index_js_default().createElement(es_button/* default */.Z,{htmlType:'submit',type:'primary',size:"large",style:{width:'70%'}},"\u7533\u8BF7\u52A0\u5165\u6B64\u5E94\u7528"),/*#__PURE__*/index_js_default().createElement(tag/* default */.Z,{color:"gold",style:{marginTop:'30px'}},"\u201C\u7533\u8BF7\u52A0\u5165\u6B64\u5E94\u7528\u201D\u540E\uFF0C\u9700\u7B49\u5F85\u9080\u8BF7\u4EBA\u786E\u8BA4, \u624D\u80FD\u8FDB\u5165\u6B64\u5E94\u7528\u3002")))):null));}}]);return InviteJoin;}(index_js_.Component);/* harmony default export */ const pages_inviteJoin = (InviteJoin);

/***/ })

}]);