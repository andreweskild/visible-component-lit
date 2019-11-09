"use strict";

var __extends = (this && this.__extends) || (function () {

    var extendStatics = function (d, b) {

        extendStatics = Object.setPrototypeOf ||

            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||

            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

        return extendStatics(d, b);

    };

    return function (d, b) {

        extendStatics(d, b);

        function __() { this.constructor = d; }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());

    };

})();

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {

    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }

    return cooked;

};

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

Object.defineProperty(exports, "__esModule", { value: true });

var lit_element_1 = require("lit-element");

require("../styles/global");

var RaisedButton = /** @class */ (function (_super) {

    __extends(RaisedButton, _super);

    function RaisedButton() {

        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.autofocus = false;

        _this.disabled = false;

        _this.name = '';

        _this.value = '';

        return _this;

    }

    Object.defineProperty(RaisedButton, "styles", {

        get: function () {

            return lit_element_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      :host {\n        display: block;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n\n      * {\n        box-sizing: border-box;\n      }\n\n      button {\n        height: var(--normal-control-height);\n        position: relative;\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-normal);\n        border: var(--border-width) solid var(--control-accent-normal);\n        border-radius: var(--border-radius);\n        padding: 0px 20px 0px 20px;\n        outline: none;\n        font-family: 'IBM Plex Sans', sans-serif;\n        box-shadow: var(--shadow);\n      }\n      button:focus {\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-hover);\n        border: var(--border-width) solid var(--control-accent-hover);\n      }\n      button:hover {\n        background-color: var(--control-surface-hover);\n        color: var(--control-accent-hover);\n        border: var(--border-width) solid var(--control-accent-hover);\n      }\n      button:active {\n        background-color: var(--control-surface-active);\n        color: var(--control-accent-active);\n        border: var(--border-width) solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      button:disabled {\n        background-color: var(--control-surface-disabled);\n        color: var(--control-accent-disabled);\n        border: var(--border-width) solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n\n      #container {\n        position: relative;\n        display: inline-block;\n        height: auto;\n      }\n\n      #splash-box {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: var(--splash-border-radius);\n        box-sizing: content-box;\n      }\n\n      .splash-animation {\n        background-color: var(--focus-splash);\n        transition: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        padding: 4px;\n        margin: -4px;\n      }\n    "], ["\n      :host {\n        display: block;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n\n      * {\n        box-sizing: border-box;\n      }\n\n      button {\n        height: var(--normal-control-height);\n        position: relative;\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-normal);\n        border: var(--border-width) solid var(--control-accent-normal);\n        border-radius: var(--border-radius);\n        padding: 0px 20px 0px 20px;\n        outline: none;\n        font-family: 'IBM Plex Sans', sans-serif;\n        box-shadow: var(--shadow);\n      }\n      button:focus {\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-hover);\n        border: var(--border-width) solid var(--control-accent-hover);\n      }\n      button:hover {\n        background-color: var(--control-surface-hover);\n        color: var(--control-accent-hover);\n        border: var(--border-width) solid var(--control-accent-hover);\n      }\n      button:active {\n        background-color: var(--control-surface-active);\n        color: var(--control-accent-active);\n        border: var(--border-width) solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      button:disabled {\n        background-color: var(--control-surface-disabled);\n        color: var(--control-accent-disabled);\n        border: var(--border-width) solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n\n      #container {\n        position: relative;\n        display: inline-block;\n        height: auto;\n      }\n\n      #splash-box {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: var(--splash-border-radius);\n        box-sizing: content-box;\n      }\n\n      .splash-animation {\n        background-color: var(--focus-splash);\n        transition: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        padding: 4px;\n        margin: -4px;\n      }\n    "])));

        },

        enumerable: true,

        configurable: true

    });

    RaisedButton.prototype.splashOn = function () {

        var splsh = this.shadowRoot.getElementById('splash-box');

        if (!splsh.classList.contains('splash-animation')) {

            splsh.classList.add('splash-animation');

        }

    };

    RaisedButton.prototype.splashOff = function () {

        var splsh = this.shadowRoot.getElementById('splash-box');

        if (splsh.classList.contains('splash-animation')) {

            splsh.classList.remove('splash-animation');

        }

    };

    RaisedButton.prototype.render = function () {

        return lit_element_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <div id=\"container\">\n        <div id=\"splash-box\"></div>\n        <button id=\"control\" \n          @mousedown=\"", "\"\n          @mouseup=\"", "\"\n          ?autofocus=\"", "\"\n          ?disabled=\"", "\"\n          .name=\"", "\"\n          .value=\"", "\">\n          <slot></slot>\n        </button>\n      </div>\n    "], ["\n      <div id=\"container\">\n        <div id=\"splash-box\"></div>\n        <button id=\"control\" \n          @mousedown=\"", "\"\n          @mouseup=\"", "\"\n          ?autofocus=\"", "\"\n          ?disabled=\"", "\"\n          .name=\"", "\"\n          .value=\"", "\">\n          <slot></slot>\n        </button>\n      </div>\n    "])), this.splashOn, this.splashOff, this.autofocus, this.disabled, this.name, this.value);

    };

    __decorate([

        lit_element_1.property({ type: Boolean })

    ], RaisedButton.prototype, "autofocus", void 0);

    __decorate([

        lit_element_1.property({ type: Boolean })

    ], RaisedButton.prototype, "disabled", void 0);

    __decorate([

        lit_element_1.property({ type: String })

    ], RaisedButton.prototype, "name", void 0);

    __decorate([

        lit_element_1.property({ type: String })

    ], RaisedButton.prototype, "value", void 0);

    RaisedButton = __decorate([

        lit_element_1.customElement('raised-button')

    ], RaisedButton);

    return RaisedButton;

}(lit_element_1.LitElement));

var templateObject_1, templateObject_2;

//# sourceMappingURL=raised-button.js.map

//# sourceMappingURL={"version":3,"file":"raised-button.js","sourceRoot":"","sources":["raised-button.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;AAAA,2CAA6E;AAC7E,4BAA0B;AAG1B;IAA2B,gCAAU;IADrC;QAAA,qEAiHC;QA/G6B,eAAS,GAAG,KAAK,CAAC;QAClB,cAAQ,GAAG,KAAK,CAAC;QAClB,UAAI,GAAG,EAAE,CAAC;QACV,WAAK,GAAG,EAAE,CAAC;;IA4GxC,CAAC;IA1GC,sBAAW,sBAAM;aAAjB;YACE,OAAO,iBAAG,8yEAAA,2uEAwET,KAAC;QACJ,CAAC;;;OAAA;IAED,+BAAQ,GAAR;QACE,IAAI,KAAK,GAAG,IAAI,CAAC,UAAU,CAAC,cAAc,CAAC,YAAY,CAAC,CAAC;QACzD,IAAI,CAAC,KAAK,CAAC,SAAS,CAAC,QAAQ,CAAC,kBAAkB,CAAC,EAAE;YACjD,KAAK,CAAC,SAAS,CAAC,GAAG,CAAC,kBAAkB,CAAC,CAAC;SACzC;IACH,CAAC;IAED,gCAAS,GAAT;QACE,IAAI,KAAK,GAAG,IAAI,CAAC,UAAU,CAAC,cAAc,CAAC,YAAY,CAAC,CAAC;QACzD,IAAI,KAAK,CAAC,SAAS,CAAC,QAAQ,CAAC,kBAAkB,CAAC,EAAE;YAChD,KAAK,CAAC,SAAS,CAAC,MAAM,CAAC,kBAAkB,CAAC,CAAC;SAC5C;IACH,CAAC;IAED,6BAAM,GAAN;QACE,OAAO,kBAAI,0ZAAA,iIAIS,EAAa,2BACf,EAAc,6BACZ,EAAc,4BACf,EAAa,wBACjB,EAAS,yBACR,EAAU,qEAIzB,KATmB,IAAI,CAAC,QAAQ,EACf,IAAI,CAAC,SAAS,EACZ,IAAI,CAAC,SAAS,EACf,IAAI,CAAC,QAAQ,EACjB,IAAI,CAAC,IAAI,EACR,IAAI,CAAC,KAAK,EAIxB;IACJ,CAAC;IA9G2B;QAA3B,sBAAQ,CAAC,EAAC,IAAI,EAAG,OAAO,EAAC,CAAC;mDAAmB;IAClB;QAA3B,sBAAQ,CAAC,EAAC,IAAI,EAAG,OAAO,EAAC,CAAC;kDAAkB;IAClB;QAA1B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAC,CAAC;8CAAW;IACV;QAA1B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAC,CAAC;+CAAY;IAJlC,YAAY;QADjB,2BAAa,CAAC,eAAe,CAAC;OACzB,YAAY,CAgHjB;IAAD,mBAAC;CAAA,AAhHD,CAA2B,wBAAU,GAgHpC"}