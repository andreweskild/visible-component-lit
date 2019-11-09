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

var Checkbox =
/** @class */
function (_super) {
  __extends(Checkbox, _super);

  function Checkbox() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.checked = false;
    _this.disabled = false;
    _this.name = '';
    _this.value = '';
    return _this;
  }

  Object.defineProperty(Checkbox, "styles", {
    get: function get() {
      return lit_element_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      :host {\n        position: relative;\n        display: inline-block;\n      }\n      \n      * {\n        box-sizing: border-box;\n      }\n\n      .checkbox-label input {\n        margin: 0px;\n        height: var(--small-control-height);\n        width: var(--small-control-height);\n        opacity: 0;\n      }\n\n      /* Unchecked Checkbox Styles */\n      .checkbox-label .checkbox-custom {\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        height: var(--small-control-height);\n        width: var(--small-control-height);\n        background-color: var(--control-surface-normal);\n        border-radius: 5px;\n        border: 1px solid var(--control-accent-normal);\n        box-shadow: var(--shadow);\n      }\n      .checkbox-label:hover .checkbox-custom {\n        background-color: var(--control-surface-hover);\n        border: 1px solid var(--control-accent-hover);\n      }\n      .checkbox-label:active .checkbox-custom {\n        background-color: var(--control-surface-active);\n        border: 1px solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      .checkbox-label input:disabled ~ .checkbox-custom {\n        background-color: var(--control-surface-disabled);\n        border: 1px solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n\n      /* Checkmark hidden styles */\n      .checkbox-label .checkbox-custom::after {\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        position: absolute;\n        content: \"\";\n        left: 10px;\n        top: 10px;\n        height: 0px;\n        width: 0px;\n        border-radius: 5px;\n        border: solid grey;\n        border-width: 0 3px 3px 0;\n        transform: rotate(0deg) scale(0);\n        opacity: 1;\n      }\n\n      /* Checked Checkbox Styles */\n      .checkbox-label input:checked ~ .checkbox-custom {\n        background-color: white;\n        border-radius: 5px;\n        transform: rotate(0deg) scale(1);\n        opacity: 1;\n        border: 1px solid black;\n      }\n      .checkbox-label:hover input:checked ~ .checkbox-custom {\n        background-color: var(--control-surface-hover);\n        border: 1px solid var(--control-accent-hover);\n      }\n      .checkbox-label:active input:checked ~ .checkbox-custom {\n        background-color: var(--control-surface-active);\n        border: 1px solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      .checkbox-label input:checked:disabled ~ .checkbox-custom {\n        background-color: var(--control-surface-disabled);\n        border: 1px solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n      \n\n      /* Checkmark Styles */\n      .checkbox-label input:checked ~ .checkbox-custom::after {\n        transform: rotate(45deg) scale(1);\n        opacity: 1;\n        left: 6px;\n        top: 2px;\n        width: 5px;\n        height: 10px;\n        border: solid grey;\n        border-width: 0 2px 2px 0;\n        background-color: transparent;\n        border-radius: 0;\n      }\n      .checkbox-label:hover input:checked ~ .checkbox-custom::after {\n        border: solid var(--control-accent-hover);\n        border-width: 0 2px 2px 0;\n      }\n      .checkbox-label:active input:checked ~ .checkbox-custom::after {\n        border: solid var(--control-accent-active);\n        border-width: 0 2px 2px 0;\n      }\n      .checkbox-label input:checked:disabled ~ .checkbox-custom::after {\n        border: solid var(--control-accent-disabled);\n        border-width: 0 2px 2px 0;\n      }\n\n      #container {\n        position: relative;\n        display: inline-block;\n        height: auto;\n      }\n\n      #splash-box {\n        position: absolute;\n        width: var(--small-control-height);\n        height: var(--small-control-height);\n        border-radius: var(--splash-border-radius);\n        box-sizing: content-box;\n      }\n\n      #container:active .splash-animation {\n        background-color: var(--focus-splash);\n        transition: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        padding: 4px;\n        margin: -4px;\n      }\n    "], ["\n      :host {\n        position: relative;\n        display: inline-block;\n      }\n      \n      * {\n        box-sizing: border-box;\n      }\n\n      .checkbox-label input {\n        margin: 0px;\n        height: var(--small-control-height);\n        width: var(--small-control-height);\n        opacity: 0;\n      }\n\n      /* Unchecked Checkbox Styles */\n      .checkbox-label .checkbox-custom {\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        height: var(--small-control-height);\n        width: var(--small-control-height);\n        background-color: var(--control-surface-normal);\n        border-radius: 5px;\n        border: 1px solid var(--control-accent-normal);\n        box-shadow: var(--shadow);\n      }\n      .checkbox-label:hover .checkbox-custom {\n        background-color: var(--control-surface-hover);\n        border: 1px solid var(--control-accent-hover);\n      }\n      .checkbox-label:active .checkbox-custom {\n        background-color: var(--control-surface-active);\n        border: 1px solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      .checkbox-label input:disabled ~ .checkbox-custom {\n        background-color: var(--control-surface-disabled);\n        border: 1px solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n\n      /* Checkmark hidden styles */\n      .checkbox-label .checkbox-custom::after {\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        position: absolute;\n        content: \"\";\n        left: 10px;\n        top: 10px;\n        height: 0px;\n        width: 0px;\n        border-radius: 5px;\n        border: solid grey;\n        border-width: 0 3px 3px 0;\n        transform: rotate(0deg) scale(0);\n        opacity: 1;\n      }\n\n      /* Checked Checkbox Styles */\n      .checkbox-label input:checked ~ .checkbox-custom {\n        background-color: white;\n        border-radius: 5px;\n        transform: rotate(0deg) scale(1);\n        opacity: 1;\n        border: 1px solid black;\n      }\n      .checkbox-label:hover input:checked ~ .checkbox-custom {\n        background-color: var(--control-surface-hover);\n        border: 1px solid var(--control-accent-hover);\n      }\n      .checkbox-label:active input:checked ~ .checkbox-custom {\n        background-color: var(--control-surface-active);\n        border: 1px solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      .checkbox-label input:checked:disabled ~ .checkbox-custom {\n        background-color: var(--control-surface-disabled);\n        border: 1px solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n      \n\n      /* Checkmark Styles */\n      .checkbox-label input:checked ~ .checkbox-custom::after {\n        transform: rotate(45deg) scale(1);\n        opacity: 1;\n        left: 6px;\n        top: 2px;\n        width: 5px;\n        height: 10px;\n        border: solid grey;\n        border-width: 0 2px 2px 0;\n        background-color: transparent;\n        border-radius: 0;\n      }\n      .checkbox-label:hover input:checked ~ .checkbox-custom::after {\n        border: solid var(--control-accent-hover);\n        border-width: 0 2px 2px 0;\n      }\n      .checkbox-label:active input:checked ~ .checkbox-custom::after {\n        border: solid var(--control-accent-active);\n        border-width: 0 2px 2px 0;\n      }\n      .checkbox-label input:checked:disabled ~ .checkbox-custom::after {\n        border: solid var(--control-accent-disabled);\n        border-width: 0 2px 2px 0;\n      }\n\n      #container {\n        position: relative;\n        display: inline-block;\n        height: auto;\n      }\n\n      #splash-box {\n        position: absolute;\n        width: var(--small-control-height);\n        height: var(--small-control-height);\n        border-radius: var(--splash-border-radius);\n        box-sizing: content-box;\n      }\n\n      #container:active .splash-animation {\n        background-color: var(--focus-splash);\n        transition: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        padding: 4px;\n        margin: -4px;\n      }\n    "])));
    },
    enumerable: true,
    configurable: true
  });

  Checkbox.prototype.splashOn = function () {
    var splsh = this.shadowRoot.getElementById('splash-box');

    if (!splsh.classList.contains('splash-animation')) {
      splsh.classList.add('splash-animation');
    }
  };

  Checkbox.prototype.splashOff = function () {
    var splsh = this.shadowRoot.getElementById('splash-box');

    if (splsh.classList.contains('splash-animation')) {
      splsh.classList.remove('splash-animation');
    }
  };

  Checkbox.prototype.render = function () {
    return lit_element_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        <div id=\"splash-box\"></div>\n        <label class=\"checkbox-label\"\n        @mousedown=\"", "\"\n        @mouseup=\"", "\">\n          <input type=\"checkbox\" \n            ?disabled=\"", "\" \n            ?checked=\"", "\"\n            .name=\"", "\"\n            .value=\"", "\">\n          <span class=\"checkbox-custom\"></span>\n        </label>\n    "], ["\n        <div id=\"splash-box\"></div>\n        <label class=\"checkbox-label\"\n        @mousedown=\"", "\"\n        @mouseup=\"", "\">\n          <input type=\"checkbox\" \n            ?disabled=\"", "\" \n            ?checked=\"", "\"\n            .name=\"", "\"\n            .value=\"", "\">\n          <span class=\"checkbox-custom\"></span>\n        </label>\n    "])), this.splashOn, this.splashOff, this.disabled, this.checked, this.name, this.value);
  };

  __decorate([lit_element_1.property({
    type: Boolean,
    reflect: true
  })], Checkbox.prototype, "checked", void 0);

  __decorate([lit_element_1.property({
    type: Boolean
  })], Checkbox.prototype, "disabled", void 0);

  __decorate([lit_element_1.property({
    type: String
  })], Checkbox.prototype, "name", void 0);

  __decorate([lit_element_1.property({
    type: String
  })], Checkbox.prototype, "value", void 0);

  Checkbox = __decorate([lit_element_1.customElement('check-box')], Checkbox);
  return Checkbox;
}(lit_element_1.LitElement);

var templateObject_1, templateObject_2; //# sourceMappingURL={"version":3,"file":"check-box.js","sourceRoot":"","sources":["check-box.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;AAAA,2CAA6E;AAG7E;IAAuB,4BAAU;IADjC;QAAA,qEAgLC;QA9K8C,aAAO,GAAG,KAAK,CAAC;QAChC,cAAQ,GAAG,KAAK,CAAC;QAClB,UAAI,GAAG,EAAE,CAAC;QACV,WAAK,GAAG,EAAE,CAAC;;IA2KzC,CAAC;IAzKC,sBAAW,kBAAM;aAAjB;YACE,OAAO,iBAAG,8/IAAA,27IAwIT,KAAC;QACJ,CAAC;;;OAAA;IAED,2BAAQ,GAAR;QACE,IAAI,KAAK,GAAG,IAAI,CAAC,UAAU,CAAC,cAAc,CAAC,YAAY,CAAC,CAAC;QACzD,IAAI,CAAC,KAAK,CAAC,SAAS,CAAC,QAAQ,CAAC,kBAAkB,CAAC,EAAE;YACjD,KAAK,CAAC,SAAS,CAAC,GAAG,CAAC,kBAAkB,CAAC,CAAC;SACzC;IACH,CAAC;IAED,4BAAS,GAAT;QACE,IAAI,KAAK,GAAG,IAAI,CAAC,UAAU,CAAC,cAAc,CAAC,YAAY,CAAC,CAAC;QACzD,IAAI,KAAK,CAAC,SAAS,CAAC,QAAQ,CAAC,kBAAkB,CAAC,EAAE;YAChD,KAAK,CAAC,SAAS,CAAC,MAAM,CAAC,kBAAkB,CAAC,CAAC;SAC5C;IACH,CAAC;IAED,yBAAM,GAAN;QACE,OAAO,kBAAI,wbAAA,yGAGO,EAAa,yBACf,EAAc,oEAET,EAAa,8BACd,EAAY,0BACf,EAAS,2BACR,EAAU,gFAG3B,KATiB,IAAI,CAAC,QAAQ,EACf,IAAI,CAAC,SAAS,EAET,IAAI,CAAC,QAAQ,EACd,IAAI,CAAC,OAAO,EACf,IAAI,CAAC,IAAI,EACR,IAAI,CAAC,KAAK,EAG1B;IACJ,CAAC;IA7K4C;QAA5C,sBAAQ,CAAC,EAAC,IAAI,EAAG,OAAO,EAAE,OAAO,EAAG,IAAI,EAAE,CAAC;6CAAiB;IAChC;QAA5B,sBAAQ,CAAC,EAAC,IAAI,EAAG,OAAO,EAAE,CAAC;8CAAkB;IAClB;QAA3B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAE,CAAC;0CAAW;IACV;QAA3B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAE,CAAC;2CAAY;IAJnC,QAAQ;QADb,2BAAa,CAAC,WAAW,CAAC;OACrB,QAAQ,CA+Kb;IAAD,eAAC;CAAA,AA/KD,CAAuB,wBAAU,GA+KhC"}

//# sourceMappingURL=check-box.js.map