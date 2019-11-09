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

var RadioButton =
/** @class */
function (_super) {
  __extends(RadioButton, _super);

  function RadioButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.disabled = false;
    _this.checked = false;
    _this.name = '';
    _this.value = '';
    return _this;
  }

  Object.defineProperty(RadioButton, "styles", {
    get: function get() {
      return lit_element_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      :host {\n        display: block;\n      }\n\n      * {\n        box-sizing: border-box;\n      }\n\n      .radio-box input {\n        margin: 0px;\n        height: var(--small-control-height);\n        width: var(--small-control-height);\n        opacity: 0;\n      }\n\n      /* Unchecked Checkbox Styles */\n      .radio-box .radio-custom {\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        height: var(--small-control-height);\n        width: var(--small-control-height);\n        background-color: var(--control-surface-normal);\n        border-radius: 50%;\n        border: 1px solid var(--control-accent-normal);\n        box-shadow: var(--shadow);\n      }\n      .radio-box input:focus .radio-custom {\n        background-color: var(--control-surface-normal);\n        border: 1px solid var(--control-accent-hover);\n      }\n      .radio-box:hover .radio-custom {\n        background-color: var(--control-surface-hover);\n        border: 1px solid var(--control-accent-hover);\n      }\n      .radio-box:active .radio-custom {\n        background-color: var(--control-surface-active);\n        border: 1px solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      .radio-box input:disabled ~ .radio-custom {\n        background-color: var(--control-surface-disabled);\n        border: 1px solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n\n      /* Checkmark hidden styles */\n      .radio-box .radio-custom::after {\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        position: absolute;\n        content: \"\";\n        left: 10px;\n        top: 10px;\n        height: 0px;\n        width: 0px;\n        border-radius: 50%;\n        opacity: 1;\n      }\n\n      /* Checked Checkbox Styles */\n      .radio-box input:checked ~ .radio-custom {\n        background-color: white;\n        border-radius: 50%;\n        transform: rotate(0deg) scale(1);\n        opacity: 1;\n        border: 1px solid black;\n      }\n      .radio-box input:checked:focus ~ .radio-custom {\n        background-color: var(--control-surface-normal);\n        border: 1px solid var(--control-accent-hover);\n      }\n      .radio-box:hover input:checked ~ .radio-custom {\n        background-color: var(--control-surface-hover);\n        border: 1px solid var(--control-accent-hover);\n      }\n      .radio-box:active input:checked ~ .radio-custom {\n        background-color: var(--control-surface-active);\n        border: 1px solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      .radio-box input:checked:disabled ~ .radio-custom {\n        background-color: var(--control-surface-disabled);\n        border: 1px solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n\n      /* Checkmark Styles */\n      .radio-box input:checked ~ .radio-custom::after {\n        opacity: 1;\n        left: 6px;\n        top: 6px;\n        width: 8px;\n        height: 8px;\n        background-color: var(--control-accent-normal);\n        border-radius: 50%;\n      }\n      .radio-box input:checked:focus ~ .radio-custom::after {\n        background-color: var(--control-accent-hover);\n      }\n      .radio-box:hover input:checked ~ .radio-custom::after {\n        background-color: var(--control-accent-hover);\n      }\n      .radio-box:active input:checked ~ .radio-custom::after {\n        background-color: var(--control-accent-active);\n      }\n      .radio-box input:checked:disabled ~ .radio-custom::after {\n        background-color: var(--control-accent-disabled);\n      }\n\n      #container {\n        position: relative;\n        display: inline-block;\n        height: auto;\n      }\n\n      #splash-box {\n        position: absolute;\n        width: var(--small-control-height);\n        height: var(--small-control-height);\n        border-radius: 50%;\n        box-sizing: content-box;\n      }\n\n      .splash-animation {\n        background-color: var(--focus-splash);\n        transition: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        padding: 4px;\n        margin: -4px;\n      }\n    "], ["\n      :host {\n        display: block;\n      }\n\n      * {\n        box-sizing: border-box;\n      }\n\n      .radio-box input {\n        margin: 0px;\n        height: var(--small-control-height);\n        width: var(--small-control-height);\n        opacity: 0;\n      }\n\n      /* Unchecked Checkbox Styles */\n      .radio-box .radio-custom {\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        height: var(--small-control-height);\n        width: var(--small-control-height);\n        background-color: var(--control-surface-normal);\n        border-radius: 50%;\n        border: 1px solid var(--control-accent-normal);\n        box-shadow: var(--shadow);\n      }\n      .radio-box input:focus .radio-custom {\n        background-color: var(--control-surface-normal);\n        border: 1px solid var(--control-accent-hover);\n      }\n      .radio-box:hover .radio-custom {\n        background-color: var(--control-surface-hover);\n        border: 1px solid var(--control-accent-hover);\n      }\n      .radio-box:active .radio-custom {\n        background-color: var(--control-surface-active);\n        border: 1px solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      .radio-box input:disabled ~ .radio-custom {\n        background-color: var(--control-surface-disabled);\n        border: 1px solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n\n      /* Checkmark hidden styles */\n      .radio-box .radio-custom::after {\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        position: absolute;\n        content: \"\";\n        left: 10px;\n        top: 10px;\n        height: 0px;\n        width: 0px;\n        border-radius: 50%;\n        opacity: 1;\n      }\n\n      /* Checked Checkbox Styles */\n      .radio-box input:checked ~ .radio-custom {\n        background-color: white;\n        border-radius: 50%;\n        transform: rotate(0deg) scale(1);\n        opacity: 1;\n        border: 1px solid black;\n      }\n      .radio-box input:checked:focus ~ .radio-custom {\n        background-color: var(--control-surface-normal);\n        border: 1px solid var(--control-accent-hover);\n      }\n      .radio-box:hover input:checked ~ .radio-custom {\n        background-color: var(--control-surface-hover);\n        border: 1px solid var(--control-accent-hover);\n      }\n      .radio-box:active input:checked ~ .radio-custom {\n        background-color: var(--control-surface-active);\n        border: 1px solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      .radio-box input:checked:disabled ~ .radio-custom {\n        background-color: var(--control-surface-disabled);\n        border: 1px solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n\n      /* Checkmark Styles */\n      .radio-box input:checked ~ .radio-custom::after {\n        opacity: 1;\n        left: 6px;\n        top: 6px;\n        width: 8px;\n        height: 8px;\n        background-color: var(--control-accent-normal);\n        border-radius: 50%;\n      }\n      .radio-box input:checked:focus ~ .radio-custom::after {\n        background-color: var(--control-accent-hover);\n      }\n      .radio-box:hover input:checked ~ .radio-custom::after {\n        background-color: var(--control-accent-hover);\n      }\n      .radio-box:active input:checked ~ .radio-custom::after {\n        background-color: var(--control-accent-active);\n      }\n      .radio-box input:checked:disabled ~ .radio-custom::after {\n        background-color: var(--control-accent-disabled);\n      }\n\n      #container {\n        position: relative;\n        display: inline-block;\n        height: auto;\n      }\n\n      #splash-box {\n        position: absolute;\n        width: var(--small-control-height);\n        height: var(--small-control-height);\n        border-radius: 50%;\n        box-sizing: content-box;\n      }\n\n      .splash-animation {\n        background-color: var(--focus-splash);\n        transition: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        padding: 4px;\n        margin: -4px;\n      }\n    "])));
    },
    enumerable: true,
    configurable: true
  });

  RadioButton.prototype.splashOn = function () {
    var splsh = this.shadowRoot.getElementById('splash-box');

    if (!splsh.classList.contains('splash-animation')) {
      splsh.classList.add('splash-animation');
    }
  };

  RadioButton.prototype.splashOff = function () {
    var splsh = this.shadowRoot.getElementById('splash-box');

    if (splsh.classList.contains('splash-animation')) {
      splsh.classList.remove('splash-animation');
    }
  };

  RadioButton.prototype.render = function () {
    return lit_element_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <div id=\"container\">\n        <div id=\"splash-box\"></div>\n        <label class=\"radio-box\"\n          @mousedown=\"", "\"\n          @mouseup=\"", "\">\n          <input type=\"radio\" \n            ?disabled=\"", "\" \n            ?checked=", "\n            .name=\"", "\"\n            .value=\"", "\">\n          <span class=\"radio-custom\"></span>\n        </label>\n      </div>\n    "], ["\n      <div id=\"container\">\n        <div id=\"splash-box\"></div>\n        <label class=\"radio-box\"\n          @mousedown=\"", "\"\n          @mouseup=\"", "\">\n          <input type=\"radio\" \n            ?disabled=\"", "\" \n            ?checked=", "\n            .name=\"", "\"\n            .value=\"", "\">\n          <span class=\"radio-custom\"></span>\n        </label>\n      </div>\n    "])), this.splashOn, this.splashOff, this.disabled, this.checked, this.name, this.value);
  };

  __decorate([lit_element_1.property({
    type: Boolean
  })], RadioButton.prototype, "disabled", void 0);

  __decorate([lit_element_1.property({
    type: Boolean
  })], RadioButton.prototype, "checked", void 0);

  __decorate([lit_element_1.property({
    type: String
  })], RadioButton.prototype, "name", void 0);

  __decorate([lit_element_1.property({
    type: String
  })], RadioButton.prototype, "value", void 0);

  RadioButton = __decorate([lit_element_1.customElement('radio-button')], RadioButton);
  return RadioButton;
}(lit_element_1.LitElement);

var templateObject_1, templateObject_2; //# sourceMappingURL={"version":3,"file":"radio-button.js","sourceRoot":"","sources":["radio-button.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;AAAA,2CAA6E;AAG7E;IAA0B,+BAAU;IADpC;QAAA,qEAkLC;QAhL8B,cAAQ,GAAG,KAAK,CAAC;QACjB,aAAO,GAAG,KAAK,CAAC;QACjB,UAAI,GAAG,EAAE,CAAC;QACV,WAAK,GAAG,EAAE,CAAC;;IA6KzC,CAAC;IA3KC,sBAAW,qBAAM;aAAjB;YACE,OAAO,iBAAG,0+IAAA,u6IAwIT,KAAC;QACJ,CAAC;;;OAAA;IAED,8BAAQ,GAAR;QACE,IAAI,KAAK,GAAG,IAAI,CAAC,UAAU,CAAC,cAAc,CAAC,YAAY,CAAC,CAAC;QACzD,IAAI,CAAC,KAAK,CAAC,SAAS,CAAC,QAAQ,CAAC,kBAAkB,CAAC,EAAE;YACjD,KAAK,CAAC,SAAS,CAAC,GAAG,CAAC,kBAAkB,CAAC,CAAC;SACzC;IACH,CAAC;IAED,+BAAS,GAAT;QACE,IAAI,KAAK,GAAG,IAAI,CAAC,UAAU,CAAC,cAAc,CAAC,YAAY,CAAC,CAAC;QACzD,IAAI,KAAK,CAAC,SAAS,CAAC,QAAQ,CAAC,kBAAkB,CAAC,EAAE;YAChD,KAAK,CAAC,SAAS,CAAC,MAAM,CAAC,kBAAkB,CAAC,CAAC;SAC5C;IACH,CAAC;IAED,4BAAM,GAAN;QACE,OAAO,kBAAI,ydAAA,oIAIS,EAAa,2BACf,EAAc,iEAEX,EAAa,4BACf,EAAY,wBACd,EAAS,2BACR,EAAU,2FAI3B,KAVmB,IAAI,CAAC,QAAQ,EACf,IAAI,CAAC,SAAS,EAEX,IAAI,CAAC,QAAQ,EACf,IAAI,CAAC,OAAO,EACd,IAAI,CAAC,IAAI,EACR,IAAI,CAAC,KAAK,EAI1B;IACJ,CAAC;IA/K4B;QAA5B,sBAAQ,CAAC,EAAC,IAAI,EAAG,OAAO,EAAE,CAAC;iDAAkB;IACjB;QAA5B,sBAAQ,CAAC,EAAC,IAAI,EAAG,OAAO,EAAE,CAAC;gDAAiB;IACjB;QAA3B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAE,CAAC;6CAAW;IACV;QAA3B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAE,CAAC;8CAAY;IAJnC,WAAW;QADhB,2BAAa,CAAC,cAAc,CAAC;OACxB,WAAW,CAiLhB;IAAD,kBAAC;CAAA,AAjLD,CAA0B,wBAAU,GAiLnC"}

//# sourceMappingURL=radio-button.js.map