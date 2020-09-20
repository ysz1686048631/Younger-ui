(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["younger-ui"] = factory();
	else
		root["younger-ui"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "6143":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8222":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f691bafa_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6143");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f691bafa_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f691bafa_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f691bafa_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"82f691a2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=f691bafa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_vm._v(" "+_vm._s(this.$store.state.age)+" "+_vm._s(this.$store.getters.getAge)+" "+_vm._s(this.$store.getters.getAge)+" "),_c('button',{on:{"click":function($event){return _vm.$store.commit('changeAge',2)}}},[_vm._v("加")]),_c('button',{on:{"click":function($event){return _vm.$store.dispatch('changeAge',2)}}},[_vm._v("减")]),_c('Y-button',{attrs:{"type":"primary","plain":"","round":""}},[_vm._v("点击")]),_c('Y-button',{attrs:{"type":"danger","plain":"","round":""}},[_vm._v("点击")]),_c('Y-button',{attrs:{"type":"warning","plain":"","round":""}},[_vm._v("点击")]),_c('Y-button',{attrs:{"type":"info","icon":"sousuo","iconPos":"left"}},[_vm._v("点击")]),_c('Y-button',{attrs:{"type":"success","icon":"loading","iconPos":"right"}},[_vm._v("点击")]),_c('Y-icon',{attrs:{"icon":"wrong","size":"50"}}),_c('Y-button',{attrs:{"type":"primary","plain":"","icon":"wrong","circle":""}}),_c('Y-input',{attrs:{"placeholder":"请输入内容","search":""},model:{value:(_vm.input1),callback:function ($$v) {_vm.input1=$$v},expression:"input1"}}),_c('Y-input',{attrs:{"placeholder":"请输入内容","search":""},on:{"search":_vm.handSearch},model:{value:(_vm.input1),callback:function ($$v) {_vm.input1=$$v},expression:"input1"}}),_c('Y-button',{attrs:{"type":"info","plain":"","round":""},on:{"click":_vm.onHaldefun}},[_vm._v("提交")]),_c('Y-link',{attrs:{"type":"success","disabled":""}},[_vm._v("链接")]),_c('Y-link',{attrs:{"type":"danger","disabled":""}},[_vm._v("链接")]),_c('Y-link',{attrs:{"type":"warning","disabled":""}},[_vm._v("链接")]),_c('Y-link',{attrs:{"type":"primary","underline":""},on:{"click":_vm.funlink}},[_vm._v("链接")]),_c('Y-link',{attrs:{"href":"www.baidu.com","type":"info","disabled":""}},[_vm._v("链接")]),_c('Y-menu',{attrs:{"activeIndex":"2"},on:{"selectIndex":_vm.handleClick}},[_c('Y-menu-item',{attrs:{"index":"1","disabled":""}},[_vm._v("菜单1")]),_c('Y-menu-item',{attrs:{"index":"2"}},[_c('Y-icon',{attrs:{"icon":"sousuo"}}),_vm._v("菜单2 ")],1),_c('Y-menu-item',{attrs:{"index":"3"}},[_c('Y-icon',{attrs:{"icon":"sousuo"}}),_vm._v("菜单3 ")],1),_c('Y-menu-item',[_c('Y-input',{attrs:{"placeholder":"请输入内容","closeable":""},model:{value:(_vm.input1),callback:function ($$v) {_vm.input1=$$v},expression:"input1"}})],1),_c('template',{slot:"actions"},[_c('Y-avatar',{attrs:{"url":"https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2156833431,1671740038&fm=26&gp=0.jpg","size":"medium","corner":"square"},on:{"click":_vm.funca}}),_c('Y-icon',{attrs:{"icon":"Loading"}})],1)],2),_c('Y-avatar',{attrs:{"url":"https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2156833431,1671740038&fm=26&gp=0.jpg","size":"small","corner":"circle"}}),_c('Y-avatar',{attrs:{"url":"https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2156833431,1671740038&fm=26&gp=0.jpg","size":"medium","corner":"square","border":""}}),_c('Y-avatar',{attrs:{"url":"https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2156833431,1671740038&fm=26&gp=0.jpg","size":"large","corner":"circle","border":""},on:{"click":_vm.funca}}),_c('Y-button',{on:{"click":_vm.opennotic}},[_vm._v("消息")]),_c('Y-button',{attrs:{"type":"success"},on:{"click":_vm.opennotic1}},[_vm._v("成功")]),_c('Y-button',{attrs:{"type":"danger"},on:{"click":_vm.opennotic2}},[_vm._v("错误")]),_c('Y-button',{attrs:{"type":"warning"},on:{"click":_vm.opennotic3}},[_vm._v("警告")]),_c('div',{staticStyle:{"text-align":"center","margin":"20px 0"}},[_c('Y-title',{attrs:{"url":"https://www.typora.io/"}},[_vm._v("Young-UI")])],1),_c('div',{staticClass:"time"},[_c('Y-timeline',{attrs:{"endText":"完结"}},_vm._l((_vm.times),function(item,index){return _c('Y-timeline-item',{key:index,attrs:{"time":item.time,"barIcon":item.icon,"barColor":"#008c8c"}},[_vm._v(" "+_vm._s(item.msg)+" ")])}),1)],1),_c('div',{staticStyle:{"text-align":"center","margin":"20px 0"}},[_c('Y-title',{attrs:{"url":"https://www.typora.io/"}},[_vm._v("布局1")])],1),_c('Y-container',{staticClass:"container"},[_c('Y-header',{staticClass:"header"},[_vm._v("header")]),_c('Y-container',[_c('Y-aside',{staticClass:"aside",attrs:{"width":"200"}},[_vm._v("aside")]),_c('Y-content',{staticClass:"content"},[_vm._v("content")])],1),_c('Y-footer',{staticClass:"footer"},[_vm._v("footer")])],1),_c('div',{staticStyle:{"text-align":"center","margin":"20px 0"}},[_c('Y-title',[_vm._v("布局2")])],1),_c('Y-container',{staticClass:"container",attrs:{"pop":"1"}},[_c('Y-header',{staticClass:"header"},[_vm._v("header")]),_c('Y-container',{staticClass:"container",attrs:{"pop":"2"}},[_c('Y-aside',{staticClass:"aside",attrs:{"width":"200"}},[_vm._v("aside")]),_c('Y-container',{staticClass:"container",attrs:{"pop":"3"}},[_c('Y-content',{staticClass:"content"},[_vm._v("content")]),_c('Y-footer',{staticClass:"footer"},[_vm._v("footer")])],1)],1)],1),_c('div',{staticStyle:{"text-align":"center","margin":"20px 0"}},[_c('Y-title',{attrs:{"url":"https://www.typora.io/"}},[_vm._v("布局3")])],1),_c('Y-container',{staticClass:"container"},[_c('Y-container',{staticClass:"container"},[_c('Y-aside',{staticClass:"aside",attrs:{"width":"200"}},[_vm._v("aside")]),_c('Y-container',{staticClass:"container",attrs:{"pop":"3"}},[_c('Y-header',{staticClass:"header"},[_vm._v("header")]),_c('Y-content',{staticClass:"content"},[_vm._v("content")]),_c('Y-footer',{staticClass:"footer"},[_vm._v("footer")])],1)],1)],1),_c('Y-card',{attrs:{"url":"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"}},[_c('div',{staticClass:"content"},[_vm._v(" 蜜汁小汉堡，吃了就管饱 蜜汁小汉堡，吃了就管饱 蜜汁小汉堡，吃了就管饱 蜜汁小汉堡，吃了就管饱 ")]),_c('div',{staticClass:"cardbar"},[_c('span',{staticClass:"trade"},[_c('Y-icon',{attrs:{"icon":"trade"}}),_c('p',[_vm._v("200")])],1),_c('Y-button',{attrs:{"plain":"","type":"success"}},[_vm._v("购买")])],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=f691bafa&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App',
  data: function data() {
    return {
      input1: 'aa',
      count: 0,
      times: [{
        msg: 'asdasd',
        time: '2020/9/17',
        icon: 'wrong'
      }, {
        msg: 'asdasd阿松大阿松大SAd',
        time: '2020/9/18'
      }, {
        msg: 'asda阿松大松大松大sdasd asd',
        time: '2020/9/19'
      }]
    };
  },
  mounted: function mounted() {
    console.log(this.$store);
  },
  methods: {
    handSearch: function handSearch(data) {
      console.log(data);
    },
    onHaldefun: function onHaldefun() {
      console.log(this.input1);
    },
    getvalue: function getvalue(data) {
      console.log(data);
    },
    funlink: function funlink() {
      console.log('aa');
    },
    handleClick: function handleClick(data) {
      console.log(data);
    },
    funca: function funca() {
      console.log('ss');
    },
    opennotic: function opennotic() {
      this.$notify({
        title: '提示1',
        message: "\u8FD9\u662F\u4E00\u6761\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED\u7684\u6D88\u606F",
        type: 'info'
      });
    },
    opennotic1: function opennotic1() {
      this.$notify({
        title: '提示2',
        message: "\u8FD9\u662F\u4E00\u6761\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED\u7684\u6D88\u606F",
        type: 'success'
      });
    },
    opennotic2: function opennotic2() {
      this.$notify({
        title: '提示3',
        message: "\u8FD9\u662F\u4E00\u6761\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED\u7684\u6D88\u606F",
        type: 'error'
      });
    },
    opennotic3: function opennotic3() {
      this.$notify({
        title: '提示',
        message: "\u8FD9\u662F\u4E00\u6761\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED\u7684\u6D88\u606F",
        type: 'warning'
      });
    }
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&id=f691bafa&lang=less&scoped=true&
var Appvue_type_style_index_0_id_f691bafa_lang_less_scoped_true_ = __webpack_require__("8222");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var component = normalizeComponent(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "f691bafa",
  null
  
)

/* harmony default export */ var App = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (App);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=younger-ui.umd.js.map