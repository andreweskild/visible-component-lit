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

var FlatDangerButton =
/** @class */
function (_super) {
  __extends(FlatDangerButton, _super);

  function FlatDangerButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.autofocus = false;
    _this.disabled = false;
    _this.name = '';
    _this.value = '';
    return _this;
  }

  Object.defineProperty(FlatDangerButton, "styles", {
    get: function get() {
      return lit_element_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      :host {\n        display: block;\n      }\n      button {\n        height: var(--normal-control-height);\n        position: relative;\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        background-color: transparent;\n        color: var(--control-accent-normal);\n        padding: 0 20px 0 20px;\n        outline: none;\n        border: none;\n        font-family: 'IBM Plex Sans', sans-serif;\n      }\n      button:hover {\n        color: var(--control-accent-danger);\n      }\n      button:active {\n        color: var(--control-accent-active);\n      }\n      button:disabled {\n        color: var(--control-accent-disabled);\n      }\n\n      #container {\n        position: relative;\n        display: inline-block;\n        height: auto;\n      }\n\n      #splash-box {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: var(--splash-border-radius);\n      }\n\n      .splash-animation {\n        background-color: var(--focus-splash);\n        transition: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        padding: 4px;\n        margin: -4px;\n      }\n    "], ["\n      :host {\n        display: block;\n      }\n      button {\n        height: var(--normal-control-height);\n        position: relative;\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        background-color: transparent;\n        color: var(--control-accent-normal);\n        padding: 0 20px 0 20px;\n        outline: none;\n        border: none;\n        font-family: 'IBM Plex Sans', sans-serif;\n      }\n      button:hover {\n        color: var(--control-accent-danger);\n      }\n      button:active {\n        color: var(--control-accent-active);\n      }\n      button:disabled {\n        color: var(--control-accent-disabled);\n      }\n\n      #container {\n        position: relative;\n        display: inline-block;\n        height: auto;\n      }\n\n      #splash-box {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: var(--splash-border-radius);\n      }\n\n      .splash-animation {\n        background-color: var(--focus-splash);\n        transition: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        padding: 4px;\n        margin: -4px;\n      }\n    "])));
    },
    enumerable: true,
    configurable: true
  });

  FlatDangerButton.prototype.splashOn = function () {
    var splsh = this.shadowRoot.getElementById('splash-box');

    if (!splsh.classList.contains('splash-animation')) {
      splsh.classList.add('splash-animation');
    }
  };

  FlatDangerButton.prototype.splashOff = function () {
    var splsh = this.shadowRoot.getElementById('splash-box');

    if (splsh.classList.contains('splash-animation')) {
      splsh.classList.remove('splash-animation');
    }
  };

  FlatDangerButton.prototype.render = function () {
    return lit_element_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <div id=\"container\">\n        <div id=\"splash-box\"></div>\n        <button id=\"control\" \n          @mousedown=\"", "\"\n          @mouseup=\"", "\"\n          ?autofocus=\"", "\"\n          ?disabled=\"", "\"\n          .name=\"", "\"\n          .value=\"", "\">\n          <slot></slot>\n        </button>\n      </div>\n    "], ["\n      <div id=\"container\">\n        <div id=\"splash-box\"></div>\n        <button id=\"control\" \n          @mousedown=\"", "\"\n          @mouseup=\"", "\"\n          ?autofocus=\"", "\"\n          ?disabled=\"", "\"\n          .name=\"", "\"\n          .value=\"", "\">\n          <slot></slot>\n        </button>\n      </div>\n    "])), this.splashOn, this.splashOff, this.autofocus, this.disabled, this.name, this.value);
  };

  __decorate([lit_element_1.property({
    type: Boolean
  })], FlatDangerButton.prototype, "autofocus", void 0);

  __decorate([lit_element_1.property({
    type: Boolean
  })], FlatDangerButton.prototype, "disabled", void 0);

  __decorate([lit_element_1.property({
    type: String
  })], FlatDangerButton.prototype, "name", void 0);

  __decorate([lit_element_1.property({
    type: String
  })], FlatDangerButton.prototype, "value", void 0);

  FlatDangerButton = __decorate([lit_element_1.customElement('flat-danger-button')], FlatDangerButton);
  return FlatDangerButton;
}(lit_element_1.LitElement);

var templateObject_1, templateObject_2; //# sourceMappingURL={"version":3,"file":"flat-danger-button.js","sourceRoot":"","sources":["flat-danger-button.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;AAAA,2CAA6E;AAG7E;IAA+B,oCAAU;IADzC;QAAA,qEAwFC;QAtF6B,eAAS,GAAG,KAAK,CAAC;QAClB,cAAQ,GAAG,KAAK,CAAC;QAClB,UAAI,GAAG,EAAE,CAAC;QACV,WAAK,GAAG,EAAE,CAAC;;IAmFxC,CAAC;IAjFC,sBAAW,0BAAM;aAAjB;YACE,OAAO,iBAAG,+2CAAA,4yCA+CT,KAAC;QACJ,CAAC;;;OAAA;IAED,mCAAQ,GAAR;QACE,IAAI,KAAK,GAAG,IAAI,CAAC,UAAU,CAAC,cAAc,CAAC,YAAY,CAAC,CAAC;QACzD,IAAI,CAAC,KAAK,CAAC,SAAS,CAAC,QAAQ,CAAC,kBAAkB,CAAC,EAAE;YACjD,KAAK,CAAC,SAAS,CAAC,GAAG,CAAC,kBAAkB,CAAC,CAAC;SACzC;IACH,CAAC;IAED,oCAAS,GAAT;QACE,IAAI,KAAK,GAAG,IAAI,CAAC,UAAU,CAAC,cAAc,CAAC,YAAY,CAAC,CAAC;QACzD,IAAI,KAAK,CAAC,SAAS,CAAC,QAAQ,CAAC,kBAAkB,CAAC,EAAE;YAChD,KAAK,CAAC,SAAS,CAAC,MAAM,CAAC,kBAAkB,CAAC,CAAC;SAC5C;IACH,CAAC;IAED,iCAAM,GAAN;QACE,OAAO,kBAAI,0ZAAA,iIAIS,EAAa,2BACf,EAAc,6BACZ,EAAc,4BACf,EAAa,wBACjB,EAAS,yBACR,EAAU,qEAIzB,KATmB,IAAI,CAAC,QAAQ,EACf,IAAI,CAAC,SAAS,EACZ,IAAI,CAAC,SAAS,EACf,IAAI,CAAC,QAAQ,EACjB,IAAI,CAAC,IAAI,EACR,IAAI,CAAC,KAAK,EAIxB;IACJ,CAAC;IArF2B;QAA3B,sBAAQ,CAAC,EAAC,IAAI,EAAG,OAAO,EAAC,CAAC;uDAAmB;IAClB;QAA3B,sBAAQ,CAAC,EAAC,IAAI,EAAG,OAAO,EAAC,CAAC;sDAAkB;IAClB;QAA1B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAC,CAAC;kDAAW;IACV;QAA1B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAC,CAAC;mDAAY;IAJlC,gBAAgB;QADrB,2BAAa,CAAC,oBAAoB,CAAC;OAC9B,gBAAgB,CAuFrB;IAAD,uBAAC;CAAA,AAvFD,CAA+B,wBAAU,GAuFxC"}

//# sourceMappingURL=flat-danger-button.js.map