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

var SwitchButton = /** @class */ (function (_super) {

    __extends(SwitchButton, _super);

    function SwitchButton() {

        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.checked = false;

        _this.disabled = false;

        _this.name = '';

        _this.value = '';

        return _this;

    }

    Object.defineProperty(SwitchButton, "styles", {

        get: function () {

            return lit_element_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      :host {\n        display: block;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n\n      * {\n        box-sizing: border-box;\n      }\n\n      .switch-box {\n        margin: 0px;\n        height: var(--small-control-height);\n        width: var(--small-control-height);\n        position: absolute;\n        top: 0px;\n      }\n\n      /* Unchecked switch Styles */\n      #background-decoration input ~ .switch-box {\n        transition-property: background-color, color, box-shadow, border, left;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        position: absolute;\n        left: -1px;\n        top: -1px;\n        height: var(--small-control-height);\n        width: var(--small-control-height);\n        background-color: var(--control-surface-normal);\n        border-radius: 5px;\n        border: 1px solid var(--control-accent-normal);\n        box-shadow: var(--shadow);\n      }\n      #background-decoration input:focus ~ .switch-box {\n        background-color: var(--control-surface-normal);\n        border: 1px solid var(--control-accent-hover);\n      }\n      #background-decoration:hover .switch-box {\n        background-color: var(--control-surface-hover);\n        border: 1px solid var(--control-accent-hover);\n      }\n      #background-decoration:active .switch-box {\n        background-color: var(--control-surface-active);\n        border: 1px solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      #background-decoration input:disabled ~ .switch-box {\n        background-color: var(--control-surface-disabled);\n        border: 1px solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n\n      /* Checked switch Styles */\n      #background-decoration input:checked ~ .switch-box {\n        transition-property: background-color, color, box-shadow, border, left;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        position: absolute;\n        left: 19px;\n      }\n      #background-decoration input:checked:focus ~ .switch-box {\n        background-color: var(--control-surface-normal);\n        border: 1px solid var(--control-accent-hover);\n      }\n      #background-decoration:hover input:checked ~ .switch-box {\n        background-color: var(--control-surface-hover);\n        border: 1px solid var(--control-accent-hover);\n      }\n      #background-decoration:active input:checked ~ .switch-box {\n        background-color: var(--control-surface-active);\n        border: 1px solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      #background-decoration input:checked:disabled ~ .switch-box {\n        background-color: var(--control-surface-disabled);\n        border: 1px solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n      \n      input {\n        margin: 0px;\n        height: 0px;\n        width: 0px;\n        opacity: 0;\n      }\n\n      #background-decoration {\n        position: relative;\n        width: 42px;\n        height: var(--small-control-height);\n        background-color: var(--control-surface-disabled);\n        border-radius: 5px;\n        border: 1px solid var(--control-accent-disabled);\n      }\n\n      #splash-box {\n        transition-property: left;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        position: absolute;\n        top: -1px; left: -1px;\n        width: var(--small-control-height);\n        height: var(--small-control-height);\n        border-radius: var(--splash-border-radius);\n        box-sizing: content-box;\n      }\n\n      input:checked ~ #splash-box {\n        left: 19px;\n      }\n\n      #background-decoration:active .splash-animation {\n        background-color: var(--focus-splash);\n        transition: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        padding: 4px;\n        margin: -4px;\n      }\n    "], ["\n      :host {\n        display: block;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n\n      * {\n        box-sizing: border-box;\n      }\n\n      .switch-box {\n        margin: 0px;\n        height: var(--small-control-height);\n        width: var(--small-control-height);\n        position: absolute;\n        top: 0px;\n      }\n\n      /* Unchecked switch Styles */\n      #background-decoration input ~ .switch-box {\n        transition-property: background-color, color, box-shadow, border, left;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        position: absolute;\n        left: -1px;\n        top: -1px;\n        height: var(--small-control-height);\n        width: var(--small-control-height);\n        background-color: var(--control-surface-normal);\n        border-radius: 5px;\n        border: 1px solid var(--control-accent-normal);\n        box-shadow: var(--shadow);\n      }\n      #background-decoration input:focus ~ .switch-box {\n        background-color: var(--control-surface-normal);\n        border: 1px solid var(--control-accent-hover);\n      }\n      #background-decoration:hover .switch-box {\n        background-color: var(--control-surface-hover);\n        border: 1px solid var(--control-accent-hover);\n      }\n      #background-decoration:active .switch-box {\n        background-color: var(--control-surface-active);\n        border: 1px solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      #background-decoration input:disabled ~ .switch-box {\n        background-color: var(--control-surface-disabled);\n        border: 1px solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n\n      /* Checked switch Styles */\n      #background-decoration input:checked ~ .switch-box {\n        transition-property: background-color, color, box-shadow, border, left;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        position: absolute;\n        left: 19px;\n      }\n      #background-decoration input:checked:focus ~ .switch-box {\n        background-color: var(--control-surface-normal);\n        border: 1px solid var(--control-accent-hover);\n      }\n      #background-decoration:hover input:checked ~ .switch-box {\n        background-color: var(--control-surface-hover);\n        border: 1px solid var(--control-accent-hover);\n      }\n      #background-decoration:active input:checked ~ .switch-box {\n        background-color: var(--control-surface-active);\n        border: 1px solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      #background-decoration input:checked:disabled ~ .switch-box {\n        background-color: var(--control-surface-disabled);\n        border: 1px solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n      \n      input {\n        margin: 0px;\n        height: 0px;\n        width: 0px;\n        opacity: 0;\n      }\n\n      #background-decoration {\n        position: relative;\n        width: 42px;\n        height: var(--small-control-height);\n        background-color: var(--control-surface-disabled);\n        border-radius: 5px;\n        border: 1px solid var(--control-accent-disabled);\n      }\n\n      #splash-box {\n        transition-property: left;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        position: absolute;\n        top: -1px; left: -1px;\n        width: var(--small-control-height);\n        height: var(--small-control-height);\n        border-radius: var(--splash-border-radius);\n        box-sizing: content-box;\n      }\n\n      input:checked ~ #splash-box {\n        left: 19px;\n      }\n\n      #background-decoration:active .splash-animation {\n        background-color: var(--focus-splash);\n        transition: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        padding: 4px;\n        margin: -4px;\n      }\n    "])));

        },

        enumerable: true,

        configurable: true

    });

    SwitchButton.prototype.splashOn = function () {

        var splsh = this.shadowRoot.getElementById('splash-box');

        if (!splsh.classList.contains('splash-animation')) {

            splsh.classList.add('splash-animation');

        }

    };

    SwitchButton.prototype.splashOff = function () {

        var splsh = this.shadowRoot.getElementById('splash-box');

        if (splsh.classList.contains('splash-animation')) {

            splsh.classList.remove('splash-animation');

        }

    };

    SwitchButton.prototype.toggleChecked = function () {

        var checkbox = this.shadowRoot.getElementById('checkbox');

        checkbox.checked = !checkbox.checked;

        var input = new Event('input');

        this.dispatchEvent(input);

    };

    SwitchButton.prototype.render = function () {

        return lit_element_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <div id=\"background-decoration\"\n        @click=\"", "\"\n        @mousedown=\"", "\"\n        @mouseup=\"", "\">\n        <input id=\"checkbox\" type=\"checkbox\" \n          ?disabled=\"", "\" \n          ?checked=\"", "\"\n          .name=\"", "\"\n          .value=\"", "\">\n        <div id=\"splash-box\"></div>\n        <div class=\"switch-box\">\n          <span class=\"switch-custom\"></span>\n        </div>\n      </div>\n    "], ["\n      <div id=\"background-decoration\"\n        @click=\"", "\"\n        @mousedown=\"", "\"\n        @mouseup=\"", "\">\n        <input id=\"checkbox\" type=\"checkbox\" \n          ?disabled=\"", "\" \n          ?checked=\"", "\"\n          .name=\"", "\"\n          .value=\"", "\">\n        <div id=\"splash-box\"></div>\n        <div class=\"switch-box\">\n          <span class=\"switch-custom\"></span>\n        </div>\n      </div>\n    "])), this.toggleChecked, this.splashOn, this.splashOff, this.disabled, this.checked, this.name, this.value);

    };

    __decorate([

        lit_element_1.property({ type: Boolean })

    ], SwitchButton.prototype, "checked", void 0);

    __decorate([

        lit_element_1.property({ type: Boolean })

    ], SwitchButton.prototype, "disabled", void 0);

    __decorate([

        lit_element_1.property({ type: String })

    ], SwitchButton.prototype, "name", void 0);

    __decorate([

        lit_element_1.property({ type: String })

    ], SwitchButton.prototype, "value", void 0);

    SwitchButton = __decorate([

        lit_element_1.customElement('switch-button')

    ], SwitchButton);

    return SwitchButton;

}(lit_element_1.LitElement));

var templateObject_1, templateObject_2;

//# sourceMappingURL=switch-button.js.map

//# sourceMappingURL={"version":3,"file":"switch-button.js","sourceRoot":"","sources":["switch-button.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;AAAA,2CAA6E;AAG7E;IAA2B,gCAAU;IADrC;QAAA,qEA2KC;QAzK8B,aAAO,GAAG,KAAK,CAAC;QAChB,cAAQ,GAAG,KAAK,CAAC;QAClB,UAAI,GAAG,EAAE,CAAC;QACV,WAAK,GAAG,EAAE,CAAC;;IAsKzC,CAAC;IApKC,sBAAW,sBAAM;aAAjB;YACE,OAAO,iBAAG,omIAAA,iiIAyHT,KAAC;QACJ,CAAC;;;OAAA;IAED,+BAAQ,GAAR;QACE,IAAI,KAAK,GAAG,IAAI,CAAC,UAAU,CAAC,cAAc,CAAC,YAAY,CAAC,CAAC;QACzD,IAAI,CAAC,KAAK,CAAC,SAAS,CAAC,QAAQ,CAAC,kBAAkB,CAAC,EAAE;YACjD,KAAK,CAAC,SAAS,CAAC,GAAG,CAAC,kBAAkB,CAAC,CAAC;SACzC;IACH,CAAC;IAED,gCAAS,GAAT;QACE,IAAI,KAAK,GAAG,IAAI,CAAC,UAAU,CAAC,cAAc,CAAC,YAAY,CAAC,CAAC;QACzD,IAAI,KAAK,CAAC,SAAS,CAAC,QAAQ,CAAC,kBAAkB,CAAC,EAAE;YAChD,KAAK,CAAC,SAAS,CAAC,MAAM,CAAC,kBAAkB,CAAC,CAAC;SAC5C;IACH,CAAC;IAED,oCAAa,GAAb;QACE,IAAI,QAAQ,GAAG,IAAI,CAAC,UAAU,CAAC,cAAc,CAAC,UAAU,CAAqB,CAAC;QAC9E,QAAQ,CAAC,OAAO,GAAG,CAAC,QAAQ,CAAC,OAAO,CAAC;QACrC,IAAI,KAAK,GAAG,IAAI,KAAK,CAAC,OAAO,CAAC,CAAC;QAC/B,IAAI,CAAC,aAAa,CAAC,KAAK,CAAC,CAAC;IAC5B,CAAC;IAED,6BAAM,GAAN;QACE,OAAO,kBAAI,qgBAAA,8DAEG,EAAkB,2BACd,EAAa,yBACf,EAAc,gFAEX,EAAa,4BACd,EAAY,wBACf,EAAS,yBACR,EAAU,qKAMzB,KAba,IAAI,CAAC,aAAa,EACd,IAAI,CAAC,QAAQ,EACf,IAAI,CAAC,SAAS,EAEX,IAAI,CAAC,QAAQ,EACd,IAAI,CAAC,OAAO,EACf,IAAI,CAAC,IAAI,EACR,IAAI,CAAC,KAAK,EAMxB;IACJ,CAAC;IAxK4B;QAA5B,sBAAQ,CAAC,EAAC,IAAI,EAAG,OAAO,EAAE,CAAC;iDAAiB;IAChB;QAA5B,sBAAQ,CAAC,EAAC,IAAI,EAAG,OAAO,EAAE,CAAC;kDAAkB;IAClB;QAA3B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAE,CAAC;8CAAW;IACV;QAA3B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAE,CAAC;+CAAY;IAJnC,YAAY;QADjB,2BAAa,CAAC,eAAe,CAAC;OACzB,YAAY,CA0KjB;IAAD,mBAAC;CAAA,AA1KD,CAA2B,wBAAU,GA0KpC"}