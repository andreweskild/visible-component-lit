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

var ToolBarButton =
/** @class */
function (_super) {
  __extends(ToolBarButton, _super);

  function ToolBarButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.autofocus = false;
    _this.disabled = false;
    _this.name = '';
    _this.value = '';
    return _this;
  }

  Object.defineProperty(ToolBarButton, "styles", {
    get: function get() {
      return lit_element_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      :host {\n        display: block;\n        height: 100%;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n      \n      button {\n        height: 100%;\n        position: relative;\n        transition-property: background-color, color, box-shadow;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        background-color: transparent;\n        color: var(--control-accent-normal);\n        border: none;\n        padding: 0 20px 0 20px;\n        outline: none;\n        font-family: 'IBM Plex Sans', sans-serif;\n      }\n      button:focus {\n        color: var(--control-accent-hover);\n      }\n      button:hover {\n        color: var(--control-accent-hover);\n      }\n      button:active {\n        background-color: var(--control-surface-active);\n        border: solid var(--control-accent-active);\n        border-width: 0 1px 0 1px;\n        color: var(--control-accent-active);\n        margin-left: -1px;\n        margin-right: -1px;\n      }\n      button:disabled {\n        color: var(--control-accent-disabled);\n      }\n\n      #container {\n        position: relative;\n        height: 100%;\n        width: 100%;\n      }\n      \n\n      /* #splash-box {\n        position: absolute;\n        height: 80%;\n        width: 80%;\n        background-color: red;\n        box-sizing: content-box;\n      }\n      \n      #splash-box.splash-animation {\n        background-color: var(--soft-divider);\n        transition-property: background-color, width, height;\n        transition: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        height: 100%;\n        width: 100%;\n      } */\n\n    "], ["\n      :host {\n        display: block;\n        height: 100%;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n      \n      button {\n        height: 100%;\n        position: relative;\n        transition-property: background-color, color, box-shadow;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        background-color: transparent;\n        color: var(--control-accent-normal);\n        border: none;\n        padding: 0 20px 0 20px;\n        outline: none;\n        font-family: 'IBM Plex Sans', sans-serif;\n      }\n      button:focus {\n        color: var(--control-accent-hover);\n      }\n      button:hover {\n        color: var(--control-accent-hover);\n      }\n      button:active {\n        background-color: var(--control-surface-active);\n        border: solid var(--control-accent-active);\n        border-width: 0 1px 0 1px;\n        color: var(--control-accent-active);\n        margin-left: -1px;\n        margin-right: -1px;\n      }\n      button:disabled {\n        color: var(--control-accent-disabled);\n      }\n\n      #container {\n        position: relative;\n        height: 100%;\n        width: 100%;\n      }\n      \n\n      /* #splash-box {\n        position: absolute;\n        height: 80%;\n        width: 80%;\n        background-color: red;\n        box-sizing: content-box;\n      }\n      \n      #splash-box.splash-animation {\n        background-color: var(--soft-divider);\n        transition-property: background-color, width, height;\n        transition: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        height: 100%;\n        width: 100%;\n      } */\n\n    "])));
    },
    enumerable: true,
    configurable: true
  });

  ToolBarButton.prototype.splashOn = function () {
    var splsh = this.shadowRoot.getElementById('splash-box');

    if (!splsh.classList.contains('splash-animation')) {
      splsh.classList.add('splash-animation');
    }
  };

  ToolBarButton.prototype.splashOff = function () {
    var splsh = this.shadowRoot.getElementById('splash-box');

    if (splsh.classList.contains('splash-animation')) {
      splsh.classList.remove('splash-animation');
    }
  };

  ToolBarButton.prototype.render = function () {
    return lit_element_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <div id=\"container\">\n            <div id=\"splash-box\"></div>\n            <button id=\"control\" \n                @mousedown=\"", "\"\n                @mouseup=\"", "\"\n                ?autofocus=\"", "\"\n                ?disabled=\"", "\"\n                .name=\"", "\"\n                .value=\"", "\">\n                <slot></slot>\n            </button>\n        </div>\n    "], ["\n        <div id=\"container\">\n            <div id=\"splash-box\"></div>\n            <button id=\"control\" \n                @mousedown=\"", "\"\n                @mouseup=\"", "\"\n                ?autofocus=\"", "\"\n                ?disabled=\"", "\"\n                .name=\"", "\"\n                .value=\"", "\">\n                <slot></slot>\n            </button>\n        </div>\n    "])), this.splashOn, this.splashOff, this.autofocus, this.disabled, this.name, this.value);
  };

  __decorate([lit_element_1.property({
    type: Boolean
  })], ToolBarButton.prototype, "autofocus", void 0);

  __decorate([lit_element_1.property({
    type: Boolean
  })], ToolBarButton.prototype, "disabled", void 0);

  __decorate([lit_element_1.property({
    type: String
  })], ToolBarButton.prototype, "name", void 0);

  __decorate([lit_element_1.property({
    type: String
  })], ToolBarButton.prototype, "value", void 0);

  ToolBarButton = __decorate([lit_element_1.customElement('tool-bar-button')], ToolBarButton);
  return ToolBarButton;
}(lit_element_1.LitElement);

var templateObject_1, templateObject_2; //# sourceMappingURL={"version":3,"file":"tool-bar-button.js","sourceRoot":"","sources":["tool-bar-button.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;AAAA,2CAA6E;AAC7E,4BAA0B;AAI1B;IAA4B,iCAAU;IADtC;QAAA,qEA0GC;QAxG6B,eAAS,GAAG,KAAK,CAAC;QAClB,cAAQ,GAAG,KAAK,CAAC;QAClB,UAAI,GAAG,EAAE,CAAC;QACV,WAAK,GAAG,EAAE,CAAC;;IAqGxC,CAAC;IAnGC,sBAAW,uBAAM;aAAjB;YACE,OAAO,iBAAG,iyDAAA,8tDAiET,KAAC;QACJ,CAAC;;;OAAA;IAED,gCAAQ,GAAR;QACE,IAAI,KAAK,GAAG,IAAI,CAAC,UAAU,CAAC,cAAc,CAAC,YAAY,CAAC,CAAC;QACzD,IAAI,CAAC,KAAK,CAAC,SAAS,CAAC,QAAQ,CAAC,kBAAkB,CAAC,EAAE;YACjD,KAAK,CAAC,SAAS,CAAC,GAAG,CAAC,kBAAkB,CAAC,CAAC;SACzC;IACH,CAAC;IAED,iCAAS,GAAT;QACE,IAAI,KAAK,GAAG,IAAI,CAAC,UAAU,CAAC,cAAc,CAAC,YAAY,CAAC,CAAC;QACzD,IAAI,KAAK,CAAC,SAAS,CAAC,QAAQ,CAAC,kBAAkB,CAAC,EAAE;YAChD,KAAK,CAAC,SAAS,CAAC,MAAM,CAAC,kBAAkB,CAAC,CAAC;SAC5C;IACH,CAAC;IAED,8BAAM,GAAN;QACE,OAAO,kBAAI,odAAA,iJAIe,EAAa,iCACf,EAAc,mCACZ,EAAc,kCACf,EAAa,8BACjB,EAAS,+BACR,EAAU,iFAI/B,KATyB,IAAI,CAAC,QAAQ,EACf,IAAI,CAAC,SAAS,EACZ,IAAI,CAAC,SAAS,EACf,IAAI,CAAC,QAAQ,EACjB,IAAI,CAAC,IAAI,EACR,IAAI,CAAC,KAAK,EAI9B;IACJ,CAAC;IAvG2B;QAA3B,sBAAQ,CAAC,EAAC,IAAI,EAAG,OAAO,EAAC,CAAC;oDAAmB;IAClB;QAA3B,sBAAQ,CAAC,EAAC,IAAI,EAAG,OAAO,EAAC,CAAC;mDAAkB;IAClB;QAA1B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAC,CAAC;+CAAW;IACV;QAA1B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAC,CAAC;gDAAY;IAJlC,aAAa;QADlB,2BAAa,CAAC,iBAAiB,CAAC;OAC3B,aAAa,CAyGlB;IAAD,oBAAC;CAAA,AAzGD,CAA4B,wBAAU,GAyGrC"}

//# sourceMappingURL=tool-bar-button.js.map