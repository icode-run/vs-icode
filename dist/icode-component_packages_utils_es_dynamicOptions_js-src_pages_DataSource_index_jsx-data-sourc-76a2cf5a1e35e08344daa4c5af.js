"use strict";
(self["webpackChunkmy_web"] = self["webpackChunkmy_web"] || []).push([["icode-component_packages_utils_es_dynamicOptions_js-src_pages_DataSource_index_jsx-data-sourc-76a2cf"],{

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

/***/ 37744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93121);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20443);
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}/**
 * DataSource
 * @author tianyanrong
 * @date 2022/6/11 上午9:45:26
 */var Page=/*#__PURE__*/function(_Component){_inherits(Page,_Component);var _super=_createSuper(Page);function Page(){_classCallCheck(this,Page);return _super.apply(this,arguments);}_createClass(Page,[{key:"render",value:function render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(data_source__WEBPACK_IMPORTED_MODULE_1__["default"],{app:this.props.app,basename:this.props.basename,history:this.props.history});}}]);return Page;}(react__WEBPACK_IMPORTED_MODULE_0__.Component);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ })

}]);