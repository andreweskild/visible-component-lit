"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var lit_element_1 = require("lit-element");

require("../styles/global");

var ToolBar =
/** @class */
function (_super) {
  __extends(ToolBar, _super);

  function ToolBar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(ToolBar, "styles", {
    get: function get() {
      return lit_element_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      :host {\n        display: block;\n      }\n\n      * {\n        box-sizing: border-box;\n      }\n\n      #tool-bar-element {\n          height: 46px;\n          width: 100%;\n          background-color: var(--control-surface-normal);\n          border: 1px solid var(--hard-divider);\n          border-width: 0 0 1px 0;\n          box-shadow: var(--shadow);\n          display: flex;\n          align-items: center;\n      }\n\n    "], ["\n      :host {\n        display: block;\n      }\n\n      * {\n        box-sizing: border-box;\n      }\n\n      #tool-bar-element {\n          height: 46px;\n          width: 100%;\n          background-color: var(--control-surface-normal);\n          border: 1px solid var(--hard-divider);\n          border-width: 0 0 1px 0;\n          box-shadow: var(--shadow);\n          display: flex;\n          align-items: center;\n      }\n\n    "])));
    },
    enumerable: true,
    configurable: true
  });

  ToolBar.prototype.render = function () {
    return lit_element_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <div id=\"tool-bar-element\">\n        <slot></slot>\n      </div>\n    "], ["\n      <div id=\"tool-bar-element\">\n        <slot></slot>\n      </div>\n    "])));
  };

  ToolBar = __decorate([lit_element_1.customElement('tool-bar')], ToolBar);
  return ToolBar;
}(lit_element_1.LitElement);

var templateObject_1, templateObject_2; //# sourceMappingURL={"version":3,"file":"tool-bar.js","sourceRoot":"","sources":["tool-bar.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;AAAA,2CAA6E;AAC7E,4BAA0B;AAI1B;IAAsB,2BAAU;IAAhC;;IAkCA,CAAC;IAhCC,sBAAW,iBAAM;aAAjB;YACE,OAAO,iBAAG,8fAAA,2bAoBT,KAAC;QACJ,CAAC;;;OAAA;IAGD,wBAAM,GAAN;QACE,OAAO,kBAAI,qJAAA,kFAIV,KAAC;IACJ,CAAC;IAjCG,OAAO;QADZ,2BAAa,CAAC,UAAU,CAAC;OACpB,OAAO,CAkCZ;IAAD,cAAC;CAAA,AAlCD,CAAsB,wBAAU,GAkC/B"}

//# sourceMappingURL=tool-bar.js.map