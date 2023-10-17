/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ArckFontFamilyMenu.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ArckFontFamilyMenu.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-click-outside */ "./node_modules/v-click-outside/dist/v-click-outside.umd.js");
/* harmony import */ var v_click_outside__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(v_click_outside__WEBPACK_IMPORTED_MODULE_0__);
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  directives: {
    clickOutside: (v_click_outside__WEBPACK_IMPORTED_MODULE_0___default().directive)
  },
  mixins: [BardToolbarButton],
  computed: {
    classTypes: function classTypes() {
      return {
        'alh-arial': {
          name: 'Arial'
        },
        'alh-brush-script-mt': {
          name: 'Brush Script MT'
        },
        'alh-courier-new': {
          name: 'Courier New'
        },
        'alh-garamond': {
          name: 'Garamond'
        },
        'alh-georgia': {
          name: 'Georgia'
        },
        'alh-helvetica': {
          name: 'Helvetica'
        },
        'alh-tahoma': {
          name: 'Tahoma'
        },
        'alh-times-new-roman': {
          name: 'Times New Roman'
        },
        'alh-trebuchet': {
          name: 'Trebuchet MS'
        },
        'alh-verdana': {
          name: 'Verdana'
        }
      };
    },
    currentKey: function currentKey() {
      return this.editor.getMarkAttrs('ArckFontFamily').key;
    }
  },
  data: function data() {
    return {
      showOptions: false
    };
  },
  methods: {
    closeClassTypeMenu: function closeClassTypeMenu() {
      // close the menu
      this.showOptions = false;
    },
    setClassType: function setClassType(classTypeKey) {
      // update the editor
      this.editor.commands.ArckFontFamily({
        key: classTypeKey == this.currentKey ? false : classTypeKey
      });
      // hide the menu
      this.showOptions = false;
    },
    getClass: function getClass(key) {
      var classes = {
        'class-type-label': true,
        'arck-font-family': true
      };
      classes[key] = true;
      return classes;
    }
  }
});

/***/ }),

/***/ "./resources/js/ArckFontFamily.js":
/*!****************************************!*\
  !*** ./resources/js/ArckFontFamily.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArckFontFamily: () => (/* binding */ ArckFontFamily)
/* harmony export */ });
var _Statamic$$bard$tipta = Statamic.$bard.tiptap.core,
  Mark = _Statamic$$bard$tipta.Mark,
  mergeAttributes = _Statamic$$bard$tipta.mergeAttributes;
var ArckFontFamily = Mark.create({
  name: 'arckFontFamily',
  parseHTML: function parseHTML() {
    return [{
      tag: "span.arck-font-family",
      getAttrs: function getAttrs(dom) {
        return {
          key: dom.getAttribute('data-class')
        };
      }
    }];
  },
  renderHTML: function renderHTML(_ref) {
    var mark = _ref.mark,
      HTMLAttributes = _ref.HTMLAttributes;
    var style = 'font-family: ';
    switch (mark.attrs.key) {
      case 'alh-arial':
        style += 'Arial, Helvetica, sans-serif;';
        break;
      case 'alh-brush-script-mt':
        style += '\'Brush Script MT\', cursive;';
        break;
      case 'alh-courier-new':
        style += '\'Courier New\', Courier, monospace;';
        break;
      case 'alh-garamond':
        style += 'Garamond, serif;';
        break;
      case 'alh-georgia':
        style += 'Georgia, \'Times New Roman\', Times, serif;';
        break;
      case 'alh-helvetica':
        style += 'Helvetica, Arial, sans-serif;';
        break;
      case 'alh-tahoma':
        style += 'Tahoma, Geneva, Verdana, sans-serif;';
        break;
      case 'alh-times-new-roman':
        style += '\'Times New Roman\', Times, serif;';
        break;
      case 'alh-trebuchet':
        style += '\'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif;';
        break;
      case 'alh-verdana':
        style += 'Verdana, Geneva, Tahoma, sans-serif;';
        break;
    }
    return ["span", mergeAttributes(HTMLAttributes, {
      'class': 'arck-font-family ',
      'data-class': mark.attrs.key,
      'style': style
    }), 0];
  },
  addCommands: function addCommands() {
    var _this = this;
    return {
      toggleArckFontFamily: function toggleArckFontFamily(attributes) {
        return function (_ref2) {
          var commands = _ref2.commands;
          return commands.toggleMark(_this.name, attributes);
        };
      }
    };
  },
  pasteRules: function pasteRules(_ref3) {
    var type = _ref3.type;
    return [];
  },
  plugins: function plugins() {
    return [];
  }
});

// export default class ArckFontFamily {
//     name() {
//         return "ArckFontFamily";
//     }

//     schema() {
//         return {
//             attrs: {
//                 key: '',
//             },
//             parseDOM: [
//                 {
//                     tag: "span.arck-font-family",
//                     getAttrs: (dom) => ({
//                         key: dom.getAttribute('data-class')
//                     })
//                 }
//             ],
//             toDOM: (mark) => {
//                 let style = 'font-family: ';
//                 switch (mark.attrs.key) {
//                     case 'alh-arial':
//                         style += 'Arial, Helvetica, sans-serif;';
//                     break;

//                     case 'alh-brush-script-mt':
//                         style += '\'Brush Script MT\', cursive;';
//                     break;

//                     case 'alh-courier-new':
//                         style += '\'Courier New\', Courier, monospace;';
//                     break;

//                     case 'alh-garamond':
//                         style += 'Garamond, serif;';
//                     break;

//                     case 'alh-georgia':
//                         style += 'Georgia, \'Times New Roman\', Times, serif;';
//                     break;

//                     case 'alh-helvetica':
//                         style += 'Helvetica, Arial, sans-serif;';
//                     break;

//                     case 'alh-tahoma':
//                         style += 'Tahoma, Geneva, Verdana, sans-serif;';
//                     break;

//                     case 'alh-times-new-roman':
//                         style += '\'Times New Roman\', Times, serif;';
//                     break;

//                     case 'alh-trebuchet':
//                         style += '\'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif;';
//                     break;

//                     case 'alh-verdana':
//                         style += 'Verdana, Geneva, Tahoma, sans-serif;';
//                     break;
//                 }

//                 return [
//                     "span",
//                     {
//                         'class': 'arck-font-family ',
//                         'data-class': mark.attrs.key,
//                         'style': style
//                     },
//                     0,
//                 ];
//             }
//         };
//     }

//     commands({type, updateMark, removeMark}) {
//         return attrs => {
//             if (attrs.key) {
//                 return updateMark(type, attrs)
//             }

//             return removeMark(type)
//         }
//     }

//     pasteRules({type}) {
//         return [];
//     }

//     plugins() {
//         return [];
//     }
// }

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-21.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ArckFontFamilyMenu.vue?vue&type=style&index=0&id=20fbd2e9&lang=postcss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-21.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ArckFontFamilyMenu.vue?vue&type=style&index=0&id=20fbd2e9&lang=postcss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
.class-type-wrapper {
    position: relative;
    display: inline-block
}
.class-type-container {
    position: absolute;
    z-index: 10
}
.class-type-container > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-y-reverse: 0;
    border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
    --tw-divide-opacity: 1;
    border-color: rgba(243, 244, 246, var(--tw-divide-opacity))
}
.class-type-container {
    border-radius: 0.125rem;
    border-width: 1px;
    --tw-border-opacity: 1;
    border-color: rgba(209, 213, 219, var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}
.class-type-button {
    display: flex;
    width: 100%;
    align-items: center;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: left
}
.class-type-button:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(243, 244, 246, var(--tw-bg-opacity))
}
.class-type-button.active {
    --tw-bg-opacity: 1;
    background-color: rgba(229, 231, 235, var(--tw-bg-opacity))
}
.class-type-label {
    display: block;
    white-space: nowrap;
    text-align: left
}

`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./node_modules/v-click-outside/dist/v-click-outside.umd.js":
/*!******************************************************************!*\
  !*** ./node_modules/v-click-outside/dist/v-click-outside.umd.js ***!
  \******************************************************************/
/***/ (function(module) {

!function(e,n){ true?module.exports=n():0}(this,function(){var e="__v-click-outside",n="undefined"!=typeof window,t="undefined"!=typeof navigator,r=n&&("ontouchstart"in window||t&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(e){var n=e.event,t=e.handler;(0,e.middleware)(n)&&t(n)}function a(n,t){var a=function(e){var n="function"==typeof e;if(!n&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:n?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||r,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe),capture:!!e.capture}}(t.value),d=a.handler,o=a.middleware,c=a.detectIframe,u=a.capture;if(a.isActive){if(n[e]=a.events.map(function(e){return{event:e,srcTarget:document.documentElement,handler:function(e){return function(e){var n=e.el,t=e.event,r=e.handler,a=e.middleware,d=t.composedPath&&t.composedPath()||t.path;(d?d.indexOf(n)<0:!n.contains(t.target))&&i({event:t,handler:r,middleware:a})}({el:n,event:e,handler:d,middleware:o})},capture:u}}),c){var l={event:"blur",srcTarget:window,handler:function(e){return function(e){var n=e.el,t=e.event,r=e.handler,a=e.middleware;setTimeout(function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!n.contains(e)&&i({event:t,handler:r,middleware:a})},0)}({el:n,event:e,handler:d,middleware:o})},capture:u};n[e]=[].concat(n[e],[l])}n[e].forEach(function(t){var r=t.event,i=t.srcTarget,a=t.handler;return setTimeout(function(){n[e]&&i.addEventListener(r,a,u)},0)})}}function d(n){(n[e]||[]).forEach(function(e){return e.srcTarget.removeEventListener(e.event,e.handler,e.capture)}),delete n[e]}var o=n?{bind:a,update:function(e,n){var t=n.value,r=n.oldValue;JSON.stringify(t)!==JSON.stringify(r)&&(d(e),a(e,{value:t}))},unbind:d}:{};return{install:function(e){e.directive("click-outside",o)},directive:o}});
//# sourceMappingURL=v-click-outside.umd.js.map


/***/ }),

/***/ "./resources/js/ArckFontFamilyMenu.vue":
/*!*********************************************!*\
  !*** ./resources/js/ArckFontFamilyMenu.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ArckFontFamilyMenu_vue_vue_type_template_id_20fbd2e9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArckFontFamilyMenu.vue?vue&type=template&id=20fbd2e9& */ "./resources/js/ArckFontFamilyMenu.vue?vue&type=template&id=20fbd2e9&");
/* harmony import */ var _ArckFontFamilyMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArckFontFamilyMenu.vue?vue&type=script&lang=js& */ "./resources/js/ArckFontFamilyMenu.vue?vue&type=script&lang=js&");
/* harmony import */ var _ArckFontFamilyMenu_vue_vue_type_style_index_0_id_20fbd2e9_lang_postcss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArckFontFamilyMenu.vue?vue&type=style&index=0&id=20fbd2e9&lang=postcss& */ "./resources/js/ArckFontFamilyMenu.vue?vue&type=style&index=0&id=20fbd2e9&lang=postcss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ArckFontFamilyMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArckFontFamilyMenu_vue_vue_type_template_id_20fbd2e9___WEBPACK_IMPORTED_MODULE_0__.render,
  _ArckFontFamilyMenu_vue_vue_type_template_id_20fbd2e9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/ArckFontFamilyMenu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/ArckFontFamilyMenu.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/ArckFontFamilyMenu.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArckFontFamilyMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ArckFontFamilyMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ArckFontFamilyMenu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArckFontFamilyMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/ArckFontFamilyMenu.vue?vue&type=template&id=20fbd2e9&":
/*!****************************************************************************!*\
  !*** ./resources/js/ArckFontFamilyMenu.vue?vue&type=template&id=20fbd2e9& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArckFontFamilyMenu_vue_vue_type_template_id_20fbd2e9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArckFontFamilyMenu_vue_vue_type_template_id_20fbd2e9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArckFontFamilyMenu_vue_vue_type_template_id_20fbd2e9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ArckFontFamilyMenu.vue?vue&type=template&id=20fbd2e9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ArckFontFamilyMenu.vue?vue&type=template&id=20fbd2e9&");


/***/ }),

/***/ "./resources/js/ArckFontFamilyMenu.vue?vue&type=style&index=0&id=20fbd2e9&lang=postcss&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/ArckFontFamilyMenu.vue?vue&type=style&index=0&id=20fbd2e9&lang=postcss& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_21_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ArckFontFamilyMenu_vue_vue_type_style_index_0_id_20fbd2e9_lang_postcss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-21.use[1]!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ArckFontFamilyMenu.vue?vue&type=style&index=0&id=20fbd2e9&lang=postcss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-21.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ArckFontFamilyMenu.vue?vue&type=style&index=0&id=20fbd2e9&lang=postcss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_21_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ArckFontFamilyMenu_vue_vue_type_style_index_0_id_20fbd2e9_lang_postcss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_21_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ArckFontFamilyMenu_vue_vue_type_style_index_0_id_20fbd2e9_lang_postcss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_21_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ArckFontFamilyMenu_vue_vue_type_style_index_0_id_20fbd2e9_lang_postcss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_21_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ArckFontFamilyMenu_vue_vue_type_style_index_0_id_20fbd2e9_lang_postcss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ArckFontFamilyMenu.vue?vue&type=template&id=20fbd2e9&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ArckFontFamilyMenu.vue?vue&type=template&id=20fbd2e9& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "class-type-wrapper" }, [
    _c("button", {
      directives: [
        {
          name: "tooltip",
          rawName: "v-tooltip",
          value: _vm.button.text,
          expression: "button.text",
        },
      ],
      staticClass: "bard-toolbar-button",
      class: { active: _vm.currentKey || _vm.showOptions },
      domProps: { innerHTML: _vm._s(_vm.button.html) },
      on: {
        click: function ($event) {
          _vm.showOptions = !_vm.showOptions
        },
      },
    }),
    _vm._v(" "),
    _vm.showOptions
      ? _c(
          "div",
          {
            directives: [
              {
                name: "click-outside",
                rawName: "v-click-outside",
                value: _vm.closeClassTypeMenu,
                expression: "closeClassTypeMenu",
              },
            ],
            staticClass: "class-type-container",
          },
          _vm._l(_vm.classTypes, function (type, key) {
            return _c(
              "button",
              {
                staticClass: "class-type-button",
                class: { active: key == _vm.currentKey },
                on: {
                  click: function ($event) {
                    return _vm.setClassType(key)
                  },
                },
              },
              [
                _c("span", { class: _vm.getClass(key) }, [
                  _vm._v(_vm._s(type.name)),
                ]),
              ]
            )
          }),
          0
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

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
  if (moduleIdentifier) {
    // server build
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
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-21.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ArckFontFamilyMenu.vue?vue&type=style&index=0&id=20fbd2e9&lang=postcss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-21.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ArckFontFamilyMenu.vue?vue&type=style&index=0&id=20fbd2e9&lang=postcss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-21.use[1]!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ArckFontFamilyMenu.vue?vue&type=style&index=0&id=20fbd2e9&lang=postcss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-21.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/ArckFontFamilyMenu.vue?vue&type=style&index=0&id=20fbd2e9&lang=postcss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("76b98454", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addStylesClient)
/* harmony export */ });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listToStyles)
/* harmony export */ });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./resources/js/bard.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArckFontFamily__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArckFontFamily */ "./resources/js/ArckFontFamily.js");
/* harmony import */ var _ArckFontFamilyMenu_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArckFontFamilyMenu.vue */ "./resources/js/ArckFontFamilyMenu.vue");


Statamic.$bard.addExtension(function () {
  return _ArckFontFamily__WEBPACK_IMPORTED_MODULE_0__.ArckFontFamily;
});
Statamic.$bard.buttons(function (buttons, button) {
  return button({
    name: 'ArckFontFamily',
    text: 'Font Family',
    command: function command(editor) {
      return editor.chain().focus().toggleArckFontFamily().run();
    },
    args: {
      key: ""
    },
    icon: 'arck-font-family',
    component: _ArckFontFamilyMenu_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  });
});
})();

/******/ })()
;