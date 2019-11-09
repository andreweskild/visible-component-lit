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

var RaisedDangerButton = /** @class */ (function (_super) {

    __extends(RaisedDangerButton, _super);

    function RaisedDangerButton() {

        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.autofocus = false;

        _this.disabled = false;

        _this.name = '';

        _this.value = '';

        return _this;

    }

    Object.defineProperty(RaisedDangerButton, "styles", {

        get: function () {

            return lit_element_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      :host {\n        display: block;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n      \n      * {\n        box-sizing: border-box;\n      }\n\n      button {\n        height: var(--normal-control-height);\n        position: relative;\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-normal);\n        border: var(--border-width) solid var(--control-accent-normal);\n        border-radius: var(--border-radius);\n        padding: 0 20px 0 20px;\n        outline: none;\n        font-family: 'IBM Plex Sans', sans-serif;\n        box-shadow: var(--shadow);\n      }\n      button:focus {\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-danger);\n        border: var(--border-width) solid var(--control-accent-danger);\n      }\n      button:hover {\n        background-color: var(--control-surface-danger);\n        color: var(--control-accent-danger);\n        border: var(--border-width) solid var(--control-accent-danger);\n      }\n      button:active {\n        background-color: var(--control-surface-active);\n        color: var(--control-accent-active);\n        border: var(--border-width) solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      button:disabled {\n        background-color: var(--control-surface-disabled);\n        color: var(--control-accent-disabled);\n        border: var(--border-width) solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n\n      #container {\n        position: relative;\n        display: inline-block;\n        height: auto;\n      }\n\n      #splash-box {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: var(--splash-border-radius);\n      }\n\n      .splash-animation {\n        background-color: var(--focus-splash);\n        transition: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        padding: 4px;\n        margin: -4px;\n      }\n    "], ["\n      :host {\n        display: block;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n      \n      * {\n        box-sizing: border-box;\n      }\n\n      button {\n        height: var(--normal-control-height);\n        position: relative;\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-normal);\n        border: var(--border-width) solid var(--control-accent-normal);\n        border-radius: var(--border-radius);\n        padding: 0 20px 0 20px;\n        outline: none;\n        font-family: 'IBM Plex Sans', sans-serif;\n        box-shadow: var(--shadow);\n      }\n      button:focus {\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-danger);\n        border: var(--border-width) solid var(--control-accent-danger);\n      }\n      button:hover {\n        background-color: var(--control-surface-danger);\n        color: var(--control-accent-danger);\n        border: var(--border-width) solid var(--control-accent-danger);\n      }\n      button:active {\n        background-color: var(--control-surface-active);\n        color: var(--control-accent-active);\n        border: var(--border-width) solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      button:disabled {\n        background-color: var(--control-surface-disabled);\n        color: var(--control-accent-disabled);\n        border: var(--border-width) solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n\n      #container {\n        position: relative;\n        display: inline-block;\n        height: auto;\n      }\n\n      #splash-box {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: var(--splash-border-radius);\n      }\n\n      .splash-animation {\n        background-color: var(--focus-splash);\n        transition: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        padding: 4px;\n        margin: -4px;\n      }\n    "])));

        },

        enumerable: true,

        configurable: true

    });

    RaisedDangerButton.prototype.splashOn = function () {

        var splsh = this.shadowRoot.getElementById('splash-box');

        if (!splsh.classList.contains('splash-animation')) {

            splsh.classList.add('splash-animation');

        }

    };

    RaisedDangerButton.prototype.splashOff = function () {

        var splsh = this.shadowRoot.getElementById('splash-box');

        if (splsh.classList.contains('splash-animation')) {

            splsh.classList.remove('splash-animation');

        }

    };

    RaisedDangerButton.prototype.render = function () {

        return lit_element_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <div id=\"container\">\n        <div id=\"splash-box\"></div>\n        <button id=\"control\" \n          @mousedown=\"", "\"\n          @mouseup=\"", "\"\n          ?autofocus=\"", "\"\n          ?disabled=\"", "\"\n          .name=\"", "\"\n          .value=\"", "\">\n          <slot></slot>\n        </button>\n      </div>\n    "], ["\n      <div id=\"container\">\n        <div id=\"splash-box\"></div>\n        <button id=\"control\" \n          @mousedown=\"", "\"\n          @mouseup=\"", "\"\n          ?autofocus=\"", "\"\n          ?disabled=\"", "\"\n          .name=\"", "\"\n          .value=\"", "\">\n          <slot></slot>\n        </button>\n      </div>\n    "])), this.splashOn, this.splashOff, this.autofocus, this.disabled, this.name, this.value);

    };

    __decorate([

        lit_element_1.property({ type: Boolean })

    ], RaisedDangerButton.prototype, "autofocus", void 0);

    __decorate([

        lit_element_1.property({ type: Boolean })

    ], RaisedDangerButton.prototype, "disabled", void 0);

    __decorate([

        lit_element_1.property({ type: String })

    ], RaisedDangerButton.prototype, "name", void 0);

    __decorate([

        lit_element_1.property({ type: String })

    ], RaisedDangerButton.prototype, "value", void 0);

    RaisedDangerButton = __decorate([

        lit_element_1.customElement('raised-danger-button')

    ], RaisedDangerButton);

    return RaisedDangerButton;

}(lit_element_1.LitElement));

var templateObject_1, templateObject_2;

//# sourceMappingURL=raised-danger-button.js.map

//# sourceMappingURL={"version":3,"file":"raised-danger-button.js","sourceRoot":"","sources":["raised-danger-button.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;AAAA,2CAA6E;AAG7E;IAAiC,sCAAU;IAD3C;QAAA,qEAgHC;QA9G6B,eAAS,GAAG,KAAK,CAAC;QAClB,cAAQ,GAAG,KAAK,CAAC;QAClB,UAAI,GAAG,EAAE,CAAC;QACV,WAAK,GAAG,EAAE,CAAC;;IA2GxC,CAAC;IAzGC,sBAAW,4BAAM;aAAjB;YACE,OAAO,iBAAG,mxEAAA,gtEAuET,KAAC;QACJ,CAAC;;;OAAA;IAED,qCAAQ,GAAR;QACE,IAAI,KAAK,GAAG,IAAI,CAAC,UAAU,CAAC,cAAc,CAAC,YAAY,CAAC,CAAC;QACzD,IAAI,CAAC,KAAK,CAAC,SAAS,CAAC,QAAQ,CAAC,kBAAkB,CAAC,EAAE;YACjD,KAAK,CAAC,SAAS,CAAC,GAAG,CAAC,kBAAkB,CAAC,CAAC;SACzC;IACH,CAAC;IAED,sCAAS,GAAT;QACE,IAAI,KAAK,GAAG,IAAI,CAAC,UAAU,CAAC,cAAc,CAAC,YAAY,CAAC,CAAC;QACzD,IAAI,KAAK,CAAC,SAAS,CAAC,QAAQ,CAAC,kBAAkB,CAAC,EAAE;YAChD,KAAK,CAAC,SAAS,CAAC,MAAM,CAAC,kBAAkB,CAAC,CAAC;SAC5C;IACH,CAAC;IAED,mCAAM,GAAN;QACE,OAAO,kBAAI,0ZAAA,iIAIS,EAAa,2BACf,EAAc,6BACZ,EAAc,4BACf,EAAa,wBACjB,EAAS,yBACR,EAAU,qEAIzB,KATmB,IAAI,CAAC,QAAQ,EACf,IAAI,CAAC,SAAS,EACZ,IAAI,CAAC,SAAS,EACf,IAAI,CAAC,QAAQ,EACjB,IAAI,CAAC,IAAI,EACR,IAAI,CAAC,KAAK,EAIxB;IACJ,CAAC;IA7G2B;QAA3B,sBAAQ,CAAC,EAAC,IAAI,EAAG,OAAO,EAAC,CAAC;yDAAmB;IAClB;QAA3B,sBAAQ,CAAC,EAAC,IAAI,EAAG,OAAO,EAAC,CAAC;wDAAkB;IAClB;QAA1B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAC,CAAC;oDAAW;IACV;QAA1B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAC,CAAC;qDAAY;IAJlC,kBAAkB;QADvB,2BAAa,CAAC,sBAAsB,CAAC;OAChC,kBAAkB,CA+GvB;IAAD,yBAAC;CAAA,AA/GD,CAAiC,wBAAU,GA+G1C"}