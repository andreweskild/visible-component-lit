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

var DropDownButton =
/** @class */
function (_super) {
  __extends(DropDownButton, _super);

  function DropDownButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.autofocus = false;
    _this.disabled = false;
    _this.name = '';
    _this.value = '';
    return _this;
  }

  Object.defineProperty(DropDownButton, "styles", {
    get: function get() {
      return lit_element_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      :host {\n        display: block;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n\n      * {\n        box-sizing: border-box;\n      }\n\n      button {\n        height: var(--normal-control-height);\n        position: relative;\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-normal);\n        border: var(--border-width) solid var(--control-accent-normal);\n        border-radius: var(--border-radius);\n        padding: 0px 20px 0px 20px;\n        outline: none;\n        font-family: 'IBM Plex Sans', sans-serif;\n        box-shadow: var(--shadow);\n      }\n      button:focus {\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-hover);\n        border: var(--border-width) solid var(--control-accent-hover);\n      }\n      button:hover {\n        background-color: var(--control-surface-hover);\n        color: var(--control-accent-hover);\n        border: var(--border-width) solid var(--control-accent-hover);\n      }\n      button:active {\n        background-color: var(--control-surface-active);\n        color: var(--control-accent-active);\n        border: var(--border-width) solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      button:disabled {\n        background-color: var(--control-surface-disabled);\n        color: var(--control-accent-disabled);\n        border: var(--border-width) solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n\n      #container {\n        position: relative;\n        display: inline-block;\n        height: auto;\n      }\n\n      #splash-box {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: var(--splash-border-radius);\n        box-sizing: content-box;\n      }\n\n      .splash-animation {\n        background-color: var(--focus-splash);\n        transition: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        padding: 4px;\n        margin: -4px;\n      }\n    "], ["\n      :host {\n        display: block;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n\n      * {\n        box-sizing: border-box;\n      }\n\n      button {\n        height: var(--normal-control-height);\n        position: relative;\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-normal);\n        border: var(--border-width) solid var(--control-accent-normal);\n        border-radius: var(--border-radius);\n        padding: 0px 20px 0px 20px;\n        outline: none;\n        font-family: 'IBM Plex Sans', sans-serif;\n        box-shadow: var(--shadow);\n      }\n      button:focus {\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-hover);\n        border: var(--border-width) solid var(--control-accent-hover);\n      }\n      button:hover {\n        background-color: var(--control-surface-hover);\n        color: var(--control-accent-hover);\n        border: var(--border-width) solid var(--control-accent-hover);\n      }\n      button:active {\n        background-color: var(--control-surface-active);\n        color: var(--control-accent-active);\n        border: var(--border-width) solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      button:disabled {\n        background-color: var(--control-surface-disabled);\n        color: var(--control-accent-disabled);\n        border: var(--border-width) solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n\n      #container {\n        position: relative;\n        display: inline-block;\n        height: auto;\n      }\n\n      #splash-box {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: var(--splash-border-radius);\n        box-sizing: content-box;\n      }\n\n      .splash-animation {\n        background-color: var(--focus-splash);\n        transition: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        padding: 4px;\n        margin: -4px;\n      }\n    "])));
    },
    enumerable: true,
    configurable: true
  });

  DropDownButton.prototype.splashOn = function () {
    var splsh = this.shadowRoot.getElementById('splash-box');

    if (!splsh.classList.contains('splash-animation')) {
      splsh.classList.add('splash-animation');
    }
  };

  DropDownButton.prototype.splashOff = function () {
    var splsh = this.shadowRoot.getElementById('splash-box');

    if (splsh.classList.contains('splash-animation')) {
      splsh.classList.remove('splash-animation');
    }
  };

  DropDownButton.prototype.render = function () {
    return lit_element_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <div id=\"container\">\n        <div id=\"splash-box\"></div>\n        <button id=\"control\" \n            @mousedown=\"", "\"\n            @mouseup=\"", "\"\n            ?autofocus=\"", "\"\n            ?disabled=\"", "\"\n            .name=\"", "\"\n            .value=\"", "\">\n            <slot></slot>\n            <span class=\"material-icons\">face</span>\n        </button>\n      </div>\n    "], ["\n      <div id=\"container\">\n        <div id=\"splash-box\"></div>\n        <button id=\"control\" \n            @mousedown=\"", "\"\n            @mouseup=\"", "\"\n            ?autofocus=\"", "\"\n            ?disabled=\"", "\"\n            .name=\"", "\"\n            .value=\"", "\">\n            <slot></slot>\n            <span class=\"material-icons\">face</span>\n        </button>\n      </div>\n    "])), this.splashOn, this.splashOff, this.autofocus, this.disabled, this.name, this.value);
  };

  __decorate([lit_element_1.property({
    type: Boolean
  })], DropDownButton.prototype, "autofocus", void 0);

  __decorate([lit_element_1.property({
    type: Boolean
  })], DropDownButton.prototype, "disabled", void 0);

  __decorate([lit_element_1.property({
    type: String
  })], DropDownButton.prototype, "name", void 0);

  __decorate([lit_element_1.property({
    type: String
  })], DropDownButton.prototype, "value", void 0);

  DropDownButton = __decorate([lit_element_1.customElement('drop-down-button')], DropDownButton);
  return DropDownButton;
}(lit_element_1.LitElement);

var templateObject_1, templateObject_2; //# sourceMappingURL={"version":3,"file":"drop-down-button.js","sourceRoot":"","sources":["drop-down-button.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;AAAA,2CAA6E;AAG7E;IAA6B,kCAAU;IADvC;QAAA,qEAkHC;QAhH6B,eAAS,GAAG,KAAK,CAAC;QAClB,cAAQ,GAAG,KAAK,CAAC;QAClB,UAAI,GAAG,EAAE,CAAC;QACV,WAAK,GAAG,EAAE,CAAC;;IA6GxC,CAAC;IA3GC,sBAAW,wBAAM;aAAjB;YACE,OAAO,iBAAG,8yEAAA,2uEAwET,KAAC;QACJ,CAAC;;;OAAA;IAED,iCAAQ,GAAR;QACE,IAAI,KAAK,GAAG,IAAI,CAAC,UAAU,CAAC,cAAc,CAAC,YAAY,CAAC,CAAC;QACzD,IAAI,CAAC,KAAK,CAAC,SAAS,CAAC,QAAQ,CAAC,kBAAkB,CAAC,EAAE;YACjD,KAAK,CAAC,SAAS,CAAC,GAAG,CAAC,kBAAkB,CAAC,CAAC;SACzC;IACH,CAAC;IAED,kCAAS,GAAT;QACE,IAAI,KAAK,GAAG,IAAI,CAAC,UAAU,CAAC,cAAc,CAAC,YAAY,CAAC,CAAC;QACzD,IAAI,KAAK,CAAC,SAAS,CAAC,QAAQ,CAAC,kBAAkB,CAAC,EAAE;YAChD,KAAK,CAAC,SAAS,CAAC,MAAM,CAAC,kBAAkB,CAAC,CAAC;SAC5C;IACH,CAAC;IAED,+BAAM,GAAN;QACE,OAAO,kBAAI,geAAA,mIAIW,EAAa,6BACf,EAAc,+BACZ,EAAc,8BACf,EAAa,0BACjB,EAAS,2BACR,EAAU,+HAK3B,KAVqB,IAAI,CAAC,QAAQ,EACf,IAAI,CAAC,SAAS,EACZ,IAAI,CAAC,SAAS,EACf,IAAI,CAAC,QAAQ,EACjB,IAAI,CAAC,IAAI,EACR,IAAI,CAAC,KAAK,EAK1B;IACJ,CAAC;IA/G2B;QAA3B,sBAAQ,CAAC,EAAC,IAAI,EAAG,OAAO,EAAC,CAAC;qDAAmB;IAClB;QAA3B,sBAAQ,CAAC,EAAC,IAAI,EAAG,OAAO,EAAC,CAAC;oDAAkB;IAClB;QAA1B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAC,CAAC;gDAAW;IACV;QAA1B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAC,CAAC;iDAAY;IAJlC,cAAc;QADnB,2BAAa,CAAC,kBAAkB,CAAC;OAC5B,cAAc,CAiHnB;IAAD,qBAAC;CAAA,AAjHD,CAA6B,wBAAU,GAiHtC"}

//# sourceMappingURL=drop-down-button.js.map