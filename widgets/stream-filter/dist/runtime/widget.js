System.register(["jimu-core","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__, __WEBPACK_EXTERNAL_MODULE_jimu_ui__;
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__ = module;
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui__ = module;
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./your-extensions/widgets/stream-filter/src/runtime/widget.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./your-extensions/widgets/stream-filter/src/runtime/translation/default.ts":
/*!**********************************************************************************!*\
  !*** ./your-extensions/widgets/stream-filter/src/runtime/translation/default.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = {\r\n    _widgetLabel: 'Stream Filter',\r\n    pleaseSelect: 'Please select:',\r\n    selectPolicy: 'Select stream temperature:',\r\n    typeCool: 'Cool',\r\n    typeCold: 'Cold',\r\n    typeWarm: 'Warm',\r\n    typeUnknown: 'Unknown'\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zdHJlYW0tZmlsdGVyL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9uL2RlZmF1bHQudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zdHJlYW0tZmlsdGVyL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9uL2RlZmF1bHQudHM/ZjQ1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgX3dpZGdldExhYmVsOiAnU3RyZWFtIEZpbHRlcicsXG4gICAgcGxlYXNlU2VsZWN0OiAnUGxlYXNlIHNlbGVjdDonLFxuICAgIHNlbGVjdFBvbGljeTogJ1NlbGVjdCBzdHJlYW0gdGVtcGVyYXR1cmU6JyxcbiAgICB0eXBlQ29vbDogJ0Nvb2wnLFxuICAgIHR5cGVDb2xkOiAnQ29sZCcsXG4gICAgdHlwZVdhcm06ICdXYXJtJyxcbiAgICB0eXBlVW5rbm93bjogJ1Vua25vd24nXG59Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./your-extensions/widgets/stream-filter/src/runtime/translation/default.ts\n");

/***/ }),

/***/ "./your-extensions/widgets/stream-filter/src/runtime/widget.tsx":
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/stream-filter/src/runtime/widget.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/** @jsx jsx */\r\nvar jimu_core_1 = __webpack_require__(/*! jimu-core */ \"jimu-core\");\r\nvar default_1 = __webpack_require__(/*! ./translation/default */ \"./your-extensions/widgets/stream-filter/src/runtime/translation/default.ts\");\r\nvar jimu_ui_1 = __webpack_require__(/*! jimu-ui */ \"jimu-ui\");\r\nvar StreamTemp;\r\n(function (StreamTemp) {\r\n    StreamTemp[\"Warm\"] = \"Warm\";\r\n    StreamTemp[\"Cool\"] = \"Cool\";\r\n    StreamTemp[\"Cold\"] = \"Cold\";\r\n    StreamTemp[\"Unknown\"] = \"Unknown\";\r\n    StreamTemp[\"None\"] = \"None\";\r\n})(StreamTemp || (StreamTemp = {}));\r\nvar Widget = /** @class */ (function (_super) {\r\n    __extends(Widget, _super);\r\n    function Widget(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.getQuery = function (streamTemp) {\r\n            return {\r\n                where: _this.getFilter(streamTemp)\r\n            };\r\n        };\r\n        _this.getFilter = function (streamTemp) {\r\n            if (streamTemp && streamTemp !== StreamTemp.None) {\r\n                return \"(REGIME = '\" + streamTemp + \"')\";\r\n            }\r\n            return '(1=1)';\r\n        };\r\n        _this.onRadioButtonChange = function (e) {\r\n            var _a, _b;\r\n            var streamTemp = e.target.value;\r\n            // Update radio button selected status\r\n            _this.setState({ streamTemp: streamTemp });\r\n            var dataSourceId = (_b = (_a = _this.props.useDataSources) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.dataSourceId;\r\n            var dataSource = dataSourceId && jimu_core_1.DataSourceManager.getInstance().getDataSource(dataSourceId);\r\n            if (dataSource) {\r\n                // Update query in data source\r\n                dataSource.updateQueryParams(_this.getQuery(streamTemp), _this.props.id);\r\n            }\r\n        };\r\n        _this.onDataSourceCreated = function (ds) {\r\n            if (_this.state.streamTemp && ds) {\r\n                var dataSource = ds;\r\n                // Update query in data source\r\n                dataSource.updateQueryParams(_this.getQuery(_this.state.streamTemp), _this.props.id);\r\n            }\r\n        };\r\n        _this.state = {\r\n            streamTemp: StreamTemp.None\r\n        };\r\n        return _this;\r\n    }\r\n    Widget.prototype.componentWillUnmount = function () {\r\n        var _a, _b;\r\n        var dataSourceId = (_b = (_a = this.props.useDataSources) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.dataSourceId;\r\n        var dataSource = dataSourceId && jimu_core_1.DataSourceManager.getInstance().getDataSource(dataSourceId);\r\n        if (dataSource) {\r\n            // Reset query in data source\r\n            dataSource.updateQueryParams(this.getQuery(StreamTemp.None), this.props.id);\r\n        }\r\n    };\r\n    Widget.prototype.render = function () {\r\n        var _a;\r\n        return (jimu_core_1.jsx(\"div\", { className: 'widget-demo jimu-widget m-2' },\r\n            jimu_core_1.jsx(jimu_core_1.DataSourceComponent // Create data source which is use by current widget\r\n            , { useDataSource: (_a = this.props.useDataSources) === null || _a === void 0 ? void 0 : _a[0], widgetId: this.props.id, onDataSourceCreated: this.onDataSourceCreated }),\r\n            jimu_core_1.jsx(\"div\", null,\r\n                jimu_core_1.jsx(\"b\", null, this.props.intl.formatMessage({ id: 'selectPolicy', defaultMessage: default_1.default.selectPolicy })),\r\n                jimu_core_1.jsx(\"br\", null),\r\n                jimu_core_1.jsx(jimu_ui_1.Label, { style: { cursor: 'pointer' } },\r\n                    jimu_core_1.jsx(jimu_ui_1.Radio, { style: { cursor: 'pointer' }, value: StreamTemp.None, checked: this.state.streamTemp === StreamTemp.None, onChange: this.onRadioButtonChange }),\r\n                    \" \",\r\n                    this.props.intl.formatMessage({ id: 'none', defaultMessage: jimu_ui_1.defaultMessages.none })),\r\n                ' ',\r\n                jimu_core_1.jsx(jimu_ui_1.Label, { style: { cursor: 'pointer' } },\r\n                    jimu_core_1.jsx(jimu_ui_1.Radio, { style: { cursor: 'pointer' }, value: StreamTemp.Warm, checked: this.state.streamTemp === StreamTemp.Warm, onChange: this.onRadioButtonChange }),\r\n                    \" \",\r\n                    this.props.intl.formatMessage({ id: 'typeWarm', defaultMessage: default_1.default.typeWarm })),\r\n                ' ',\r\n                jimu_core_1.jsx(jimu_ui_1.Label, { style: { cursor: 'pointer' } },\r\n                    jimu_core_1.jsx(jimu_ui_1.Radio, { style: { cursor: 'pointer' }, value: StreamTemp.Cool, checked: this.state.streamTemp === StreamTemp.Cool, onChange: this.onRadioButtonChange }),\r\n                    \" \",\r\n                    this.props.intl.formatMessage({ id: 'typeCool', defaultMessage: default_1.default.typeCool })),\r\n                ' ',\r\n                jimu_core_1.jsx(jimu_ui_1.Label, { style: { cursor: 'pointer' } },\r\n                    jimu_core_1.jsx(jimu_ui_1.Radio, { style: { cursor: 'pointer' }, value: StreamTemp.Cold, checked: this.state.streamTemp === StreamTemp.Cold, onChange: this.onRadioButtonChange }),\r\n                    \" \",\r\n                    this.props.intl.formatMessage({ id: 'typeCold', defaultMessage: default_1.default.typeCold })),\r\n                ' ',\r\n                jimu_core_1.jsx(jimu_ui_1.Label, { style: { cursor: 'pointer' } },\r\n                    jimu_core_1.jsx(jimu_ui_1.Radio, { style: { cursor: 'pointer' }, value: StreamTemp.Unknown, checked: this.state.streamTemp === StreamTemp.Unknown, onChange: this.onRadioButtonChange }),\r\n                    \" \",\r\n                    this.props.intl.formatMessage({ id: 'typeUnknown', defaultMessage: default_1.default.typeUnknown })),\r\n                jimu_core_1.jsx(\"p\", null))));\r\n    };\r\n    return Widget;\r\n}(jimu_core_1.React.PureComponent));\r\nexports.default = Widget;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zdHJlYW0tZmlsdGVyL3NyYy9ydW50aW1lL3dpZGdldC50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zdHJlYW0tZmlsdGVyL3NyYy9ydW50aW1lL3dpZGdldC50c3g/OTA3MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsgUmVhY3QsIEFsbFdpZGdldFByb3BzLCBqc3gsIERhdGFTb3VyY2VDb21wb25lbnQsIFNxbFF1ZXJ5UGFyYW1zLCBEYXRhU291cmNlTWFuYWdlciwgUXVlcmlhYmxlRGF0YVNvdXJjZSwgRGF0YVNvdXJjZSB9IGZyb20gJ2ppbXUtY29yZSc7XHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbi9kZWZhdWx0JztcclxuaW1wb3J0IHsgTGFiZWwsIFJhZGlvLCBkZWZhdWx0TWVzc2FnZXMgYXMgamltdVVJTWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJztcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgc3RyZWFtVGVtcDogU3RyZWFtVGVtcFxyXG5cclxufVxyXG5cclxuZW51bSBTdHJlYW1UZW1wIHtcclxuICBXYXJtID0gJ1dhcm0nLFxyXG4gIENvb2wgPSAnQ29vbCcsXHJcbiAgQ29sZCA9ICdDb2xkJyxcclxuICBVbmtub3duID0gJ1Vua25vd24nLFxyXG4gIE5vbmUgPSAnTm9uZSdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRQcm9wczx1bmtub3duPiwgU3RhdGU+IHtcclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHN0cmVhbVRlbXA6IFN0cmVhbVRlbXAuTm9uZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xyXG4gICAgY29uc3QgZGF0YVNvdXJjZUlkID0gdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcz8uWzBdPy5kYXRhU291cmNlSWRcclxuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBkYXRhU291cmNlSWQgJiYgRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGRhdGFTb3VyY2VJZCkgYXMgUXVlcmlhYmxlRGF0YVNvdXJjZVxyXG4gICAgaWYgKGRhdGFTb3VyY2UpIHtcclxuICAgICAgLy8gUmVzZXQgcXVlcnkgaW4gZGF0YSBzb3VyY2VcclxuICAgICAgZGF0YVNvdXJjZS51cGRhdGVRdWVyeVBhcmFtcyh0aGlzLmdldFF1ZXJ5KFN0cmVhbVRlbXAuTm9uZSksIHRoaXMucHJvcHMuaWQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRRdWVyeSA9IChzdHJlYW1UZW1wOiBTdHJlYW1UZW1wKTogU3FsUXVlcnlQYXJhbXMgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2hlcmU6IHRoaXMuZ2V0RmlsdGVyKHN0cmVhbVRlbXApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRGaWx0ZXIgPSAoc3RyZWFtVGVtcDogU3RyZWFtVGVtcCk6IHN0cmluZyA9PiB7XHJcbiAgICBpZiAoc3RyZWFtVGVtcCAmJiBzdHJlYW1UZW1wIT09IFN0cmVhbVRlbXAuTm9uZSkge1xyXG4gICAgICByZXR1cm4gYChSRUdJTUUgPSAnJHtzdHJlYW1UZW1wfScpYFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnKDE9MSknXHJcbiAgfVxyXG5cclxuICBvblJhZGlvQnV0dG9uQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBjb25zdCBzdHJlYW1UZW1wID0gZS50YXJnZXQudmFsdWVcclxuICAgIC8vIFVwZGF0ZSByYWRpbyBidXR0b24gc2VsZWN0ZWQgc3RhdHVzXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RyZWFtVGVtcCB9KVxyXG5cclxuICAgIGNvbnN0IGRhdGFTb3VyY2VJZCA9IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXM/LlswXT8uZGF0YVNvdXJjZUlkXHJcbiAgICBjb25zdCBkYXRhU291cmNlID0gZGF0YVNvdXJjZUlkICYmIERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShkYXRhU291cmNlSWQpIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2VcclxuICAgIGlmIChkYXRhU291cmNlKSB7XHJcbiAgICAgIC8vIFVwZGF0ZSBxdWVyeSBpbiBkYXRhIHNvdXJjZVxyXG4gICAgICBkYXRhU291cmNlLnVwZGF0ZVF1ZXJ5UGFyYW1zKHRoaXMuZ2V0UXVlcnkoc3RyZWFtVGVtcCksIHRoaXMucHJvcHMuaWQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkRhdGFTb3VyY2VDcmVhdGVkID0gKGRzOiBEYXRhU291cmNlKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5zdHJlYW1UZW1wICYmIGRzKSB7XHJcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBkcyBhcyBRdWVyaWFibGVEYXRhU291cmNlXHJcbiAgICAgIC8vIFVwZGF0ZSBxdWVyeSBpbiBkYXRhIHNvdXJjZVxyXG4gICAgICBkYXRhU291cmNlLnVwZGF0ZVF1ZXJ5UGFyYW1zKHRoaXMuZ2V0UXVlcnkodGhpcy5zdGF0ZS5zdHJlYW1UZW1wKSwgdGhpcy5wcm9wcy5pZClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nd2lkZ2V0LWRlbW8gamltdS13aWRnZXQgbS0yJz5cclxuICAgICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudCAvLyBDcmVhdGUgZGF0YSBzb3VyY2Ugd2hpY2ggaXMgdXNlIGJ5IGN1cnJlbnQgd2lkZ2V0XHJcbiAgICAgICAgICB1c2VEYXRhU291cmNlPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzPy5bMF19XHJcbiAgICAgICAgICB3aWRnZXRJZD17dGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e3RoaXMub25EYXRhU291cmNlQ3JlYXRlZH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Yj57dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ3NlbGVjdFBvbGljeScsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuc2VsZWN0UG9saWN5IH0pfTwvYj48YnIgLz5cclxuICAgICAgICAgIDxMYWJlbCBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gdmFsdWU9e1N0cmVhbVRlbXAuTm9uZX0gY2hlY2tlZD17dGhpcy5zdGF0ZS5zdHJlYW1UZW1wID09PSBTdHJlYW1UZW1wLk5vbmV9IG9uQ2hhbmdlPXt0aGlzLm9uUmFkaW9CdXR0b25DaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+IHt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbm9uZScsIGRlZmF1bHRNZXNzYWdlOiBqaW11VUlNZXNzYWdlcy5ub25lIH0pfVxyXG4gICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICA8TGFiZWwgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcbiAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IHZhbHVlPXtTdHJlYW1UZW1wLldhcm19IGNoZWNrZWQ9e3RoaXMuc3RhdGUuc3RyZWFtVGVtcCA9PT0gU3RyZWFtVGVtcC5XYXJtfSBvbkNoYW5nZT17dGhpcy5vblJhZGlvQnV0dG9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPiB7dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ3R5cGVXYXJtJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy50eXBlV2FybSB9KX1cclxuICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgPExhYmVsIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG4gICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSB2YWx1ZT17U3RyZWFtVGVtcC5Db29sfSBjaGVja2VkPXt0aGlzLnN0YXRlLnN0cmVhbVRlbXAgPT09IFN0cmVhbVRlbXAuQ29vbH0gb25DaGFuZ2U9e3RoaXMub25SYWRpb0J1dHRvbkNoYW5nZX1cclxuICAgICAgICAgICAgLz4ge3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICd0eXBlQ29vbCcsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMudHlwZUNvb2wgfSl9XHJcbiAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgeycgJ31cclxuICAgICAgICAgIDxMYWJlbCBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gdmFsdWU9e1N0cmVhbVRlbXAuQ29sZH0gY2hlY2tlZD17dGhpcy5zdGF0ZS5zdHJlYW1UZW1wID09PSBTdHJlYW1UZW1wLkNvbGR9IG9uQ2hhbmdlPXt0aGlzLm9uUmFkaW9CdXR0b25DaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+IHt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAndHlwZUNvbGQnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLnR5cGVDb2xkIH0pfVxyXG4gICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICA8TGFiZWwgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcbiAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IHZhbHVlPXtTdHJlYW1UZW1wLlVua25vd259IGNoZWNrZWQ9e3RoaXMuc3RhdGUuc3RyZWFtVGVtcCA9PT0gU3RyZWFtVGVtcC5Vbmtub3dufSBvbkNoYW5nZT17dGhpcy5vblJhZGlvQnV0dG9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPiB7dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ3R5cGVVbmtub3duJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy50eXBlVW5rbm93biB9KX1cclxuICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICA8cCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbiAgfVxyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9DQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFLQTtBQUNBO0FBQUE7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./your-extensions/widgets/stream-filter/src/runtime/widget.tsx\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS1jb3JlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiamltdS1jb3JlXCI/YzY5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-core\n");

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS11aS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImppbXUtdWlcIj8zNTQzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jimu-ui\n");

/***/ })

/******/ })
			);
		}
	};
});