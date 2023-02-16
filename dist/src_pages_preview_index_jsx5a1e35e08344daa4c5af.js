"use strict";
(self["webpackChunkmy_web"] = self["webpackChunkmy_web"] || []).push([["src_pages_preview_index_jsx"],{

/***/ 90279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ preview)
});

// EXTERNAL MODULE: ../my-cli/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(92910);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: consume shared module (default) react@^16.14.0 (singleton) (fallback: ../my-cli/node_modules/react/index.js)
var index_js_ = __webpack_require__(93121);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__(96648);
;// CONCATENATED MODULE: ./src/pages/preview/service.js
/**
 * Service
 * @author
 */// 保存页面
var getPageStatus=function getPageStatus(options){return (0,request/* default */.Z)({method:'POST',url:'/lowcodeApi/getPreviewBuildStatus',type:'json',body:options}).then(function(res){return res;});};
;// CONCATENATED MODULE: ./src/pages/preview/index.jsx
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}/**
 * preview
 * @author tianyanrong
 * @date 2022/6/16 上午11:24:30
 */var BuildPage=/*#__PURE__*/function(_Component){_inherits(BuildPage,_Component);var _super=_createSuper(BuildPage);function BuildPage(){var _this;_classCallCheck(this,BuildPage);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.fetchPageStatus=/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/regenerator_default().mark(function _callee(){var history,params,path,res;return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:history=_this.props.history;params=history.location.params;path=decodeURIComponent(params.path);_context.next=5;return getPageStatus({path:path});case 5:res=_context.sent;if(_this.timeValue){clearTimeout(_this.timeValue);_this.timeValue=null;}if(res.result==='success'){window.open(path);}else{_this.timeValue=setTimeout(function(){_this.fetchPageStatus();clearTimeout(_this.timeValue);_this.timeValue=null;},500);}case 8:case"end":return _context.stop();}}},_callee);}));_this.createLoading=function(){var imgData='/staticImages/1656482452891-platform.png';var bg='/staticImages/1656482294750-platform.png';var $body=document.body;if($body){var $style=document.createElement('style');$style.innerHTML='@keyframes pageLoadingRound {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}';var $img=document.createElement('img');$img.src=imgData;$img.style.width='80px';$img.style.position='absolute';$img.style.top='50%';$img.style.left='50%';$img.style.transform='translate(-50%, -50%)';var $imgBg=document.createElement('img');$imgBg.style.width='230px';$imgBg.style.height='230px';$imgBg.style.margin='-15px';$imgBg.src=bg;$imgBg.style.opacity='0.3';$imgBg.style.animation='pageLoadingRound 20s linear infinite';var $imgBox=document.createElement('div');$imgBox.style.width='200px';$imgBox.style.height='200px';$imgBox.style.overflow='hidden';$imgBox.style.position='relative';$imgBox.style.left='50%';$imgBox.style.top='50%';$imgBox.style.transform='translate(-50%, -50%)';$imgBox.style.borderRadius='200px';$imgBox.style.background='#fff';$imgBox.appendChild($img);$imgBox.appendChild($imgBg);$imgBox.style.border='4px solid #3c1b81';var $box=document.createElement('div');$box.style.position='fixed';$box.style.top='0px';$box.style.left='0px';$box.style.width='100%';$box.style.height='100%';$box.style.background='#fff2ed';//'rgba(255, 212, 195,0.3)';
$box.style.opacity='1';$box.style.transition='opacity 1s';$box.style.zIndex=9999999999;$box.appendChild($imgBox);$body.appendChild($box);$body.appendChild($style);}};return _this;}_createClass(BuildPage,[{key:"componentDidMount",value:function componentDidMount(){this.createLoading();this.fetchPageStatus();}},{key:"render",value:function render(){return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null);}}]);return BuildPage;}(index_js_.Component);/* harmony default export */ const preview = (BuildPage);

/***/ })

}]);