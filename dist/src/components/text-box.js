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

var TextBox = /** @class */ (function (_super) {

    __extends(TextBox, _super);

    function TextBox() {

        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.autocomplete = 'on';

        _this.autofocus = false;

        _this.defaultValue = '';

        _this.disabled = false;

        _this.maxLength = 50;

        _this.name = '';

        _this.pattern = '.{0,}';

        _this.placeholder = '';

        _this.readOnly = false;

        _this.required = false;

        _this.size = 20;

        _this.value = '';

        return _this;

    }

    Object.defineProperty(TextBox, "styles", {

        get: function () {

            return lit_element_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      :host {\n        display: block;\n      }\n      * {\n        box-sizing: border-box;\n      }\n      input {\n        height: var(--tall-control-height);\n        width: 100%;\n        position: relative;\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-normal);\n        border: var(--border-width) solid var(--control-accent-normal);\n        border-radius: var(--border-radius);\n        padding: 0px 8px 0px 8px;\n        outline: none;\n        font-family: 'IBM Plex Sans', sans-serif;\n        caret-color: var(--control-accent-hover);\n      }\n      input:hover {\n        background-color: var(--control-surface-hover);\n        color: var(--control-accent-hover);\n        border: var(--border-width) solid var(--control-accent-hover);\n      }\n      input:focus {\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-normal);\n        border: var(--border-width) solid var(--control-accent-hover);\n      }\n      input:invalid {\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-danger);\n        border: var(--border-width) solid var(--control-accent-danger);\n        caret-color: var(--control-accent-danger);\n      }\n      input:hover:invalid {\n        background-color: var(--control-surface-danger);\n        color: var(--control-accent-danger);\n        border: var(--border-width) solid var(--control-accent-danger);\n      }\n      input:focus:invalid {\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-danger);\n        border: var(--border-width) solid var(--control-accent-danger);\n      }\n      input:active:invalid {\n        background-color: var(--control-surface-active);\n        color: var(--control-accent-active);\n        border: var(--border-width) solid var(--control-accent-active);\n      }\n      input:active {\n        background-color: var(--control-surface-active);\n        color: var(--control-accent-active);\n        border: var(--border-width) solid var(--control-accent-active);\n        caret-color: var(--control-accent-active);\n      }\n      input:disabled {\n        background-color: var(--control-surface-disabled);\n        color: var(--control-accent-disabled);\n        border: var(--border-width) solid var(--control-accent-disabled);\n      }\n\n      input::placeholder {\n        transition-property: color;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        color: var(--control-accent-disabled)\n      }\n\n      input:hover::placeholder {\n        color: var(--control-accent-hover)\n      }\n      \n      input:focus::placeholder {\n        color: var(--control-accent-disabled)\n      }\n\n      input:invalid::placeholder {\n        color: var(--control-accent-danger)\n      }\n      \n      input:active:invalid::placeholder {\n        color: var(--control-accent-active)\n      }\n\n      input:disabled::placeholder {\n        color: var(--control-accent-disabled)\n      }\n\n      #container {\n        position: relative;\n        height: auto;\n        width: 100%;\n      }\n\n      input ~ .underline {\n          position: absolute;\n          left: 8px;\n          right: 8px;\n          bottom: 6px;\n          height: 1px;\n          background-color: var(--control-accent-normal);\n      }\n\n      input:hover ~ .underline {\n          background-color: var(--control-accent-hover);\n      }\n      \n      input:focus ~ .underline {\n          background-color: var(--control-accent-hover);\n      }\n      \n      input:invalid ~ .underline {\n          background-color: var(--control-accent-danger);\n      }\n\n      input:active ~ .underline {\n          background-color: var(--control-accent-active);\n      }\n\n      input:disabled ~ .underline {\n          background-color: var(--control-accent-disabled);\n      }\n\n    "], ["\n      :host {\n        display: block;\n      }\n      * {\n        box-sizing: border-box;\n      }\n      input {\n        height: var(--tall-control-height);\n        width: 100%;\n        position: relative;\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-normal);\n        border: var(--border-width) solid var(--control-accent-normal);\n        border-radius: var(--border-radius);\n        padding: 0px 8px 0px 8px;\n        outline: none;\n        font-family: 'IBM Plex Sans', sans-serif;\n        caret-color: var(--control-accent-hover);\n      }\n      input:hover {\n        background-color: var(--control-surface-hover);\n        color: var(--control-accent-hover);\n        border: var(--border-width) solid var(--control-accent-hover);\n      }\n      input:focus {\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-normal);\n        border: var(--border-width) solid var(--control-accent-hover);\n      }\n      input:invalid {\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-danger);\n        border: var(--border-width) solid var(--control-accent-danger);\n        caret-color: var(--control-accent-danger);\n      }\n      input:hover:invalid {\n        background-color: var(--control-surface-danger);\n        color: var(--control-accent-danger);\n        border: var(--border-width) solid var(--control-accent-danger);\n      }\n      input:focus:invalid {\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-danger);\n        border: var(--border-width) solid var(--control-accent-danger);\n      }\n      input:active:invalid {\n        background-color: var(--control-surface-active);\n        color: var(--control-accent-active);\n        border: var(--border-width) solid var(--control-accent-active);\n      }\n      input:active {\n        background-color: var(--control-surface-active);\n        color: var(--control-accent-active);\n        border: var(--border-width) solid var(--control-accent-active);\n        caret-color: var(--control-accent-active);\n      }\n      input:disabled {\n        background-color: var(--control-surface-disabled);\n        color: var(--control-accent-disabled);\n        border: var(--border-width) solid var(--control-accent-disabled);\n      }\n\n      input::placeholder {\n        transition-property: color;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        color: var(--control-accent-disabled)\n      }\n\n      input:hover::placeholder {\n        color: var(--control-accent-hover)\n      }\n      \n      input:focus::placeholder {\n        color: var(--control-accent-disabled)\n      }\n\n      input:invalid::placeholder {\n        color: var(--control-accent-danger)\n      }\n      \n      input:active:invalid::placeholder {\n        color: var(--control-accent-active)\n      }\n\n      input:disabled::placeholder {\n        color: var(--control-accent-disabled)\n      }\n\n      #container {\n        position: relative;\n        height: auto;\n        width: 100%;\n      }\n\n      input ~ .underline {\n          position: absolute;\n          left: 8px;\n          right: 8px;\n          bottom: 6px;\n          height: 1px;\n          background-color: var(--control-accent-normal);\n      }\n\n      input:hover ~ .underline {\n          background-color: var(--control-accent-hover);\n      }\n      \n      input:focus ~ .underline {\n          background-color: var(--control-accent-hover);\n      }\n      \n      input:invalid ~ .underline {\n          background-color: var(--control-accent-danger);\n      }\n\n      input:active ~ .underline {\n          background-color: var(--control-accent-active);\n      }\n\n      input:disabled ~ .underline {\n          background-color: var(--control-accent-disabled);\n      }\n\n    "])));

        },

        enumerable: true,

        configurable: true

    });

    TextBox.prototype.render = function () {

        return lit_element_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <div id=\"container\">\n        <input id=\"control\" type=\"text\"\n            .autocomplete=\"", "\"\n            ?autofocus=\"", "\"\n            .defaultValue=\"", "\"\n            ?disabled=\"", "\"\n            .maxLength=\"", "\"\n            .name=\"", "\"\n            .pattern=\"", "\"\n            .placeholder=\"", "\"\n            .readOnly=\"", "\"\n            ?required=\"", "\"\n            .size=\"", "\"\n            .value=\"", "\">\n        <div class=\"underline\"></div>\n      </div>\n    "], ["\n      <div id=\"container\">\n        <input id=\"control\" type=\"text\"\n            .autocomplete=\"", "\"\n            ?autofocus=\"", "\"\n            .defaultValue=\"", "\"\n            ?disabled=\"", "\"\n            .maxLength=\"", "\"\n            .name=\"", "\"\n            .pattern=\"", "\"\n            .placeholder=\"", "\"\n            .readOnly=\"", "\"\n            ?required=\"", "\"\n            .size=\"", "\"\n            .value=\"", "\">\n        <div class=\"underline\"></div>\n      </div>\n    "])), this.autocomplete, this.autofocus, this.defaultValue, this.disabled, this.maxLength, this.name, this.pattern, this.placeholder, this.readOnly, this.required, this.size, this.value);

    };

    __decorate([

        lit_element_1.property({ type: String })

    ], TextBox.prototype, "autocomplete", void 0);

    __decorate([

        lit_element_1.property({ type: Boolean })

    ], TextBox.prototype, "autofocus", void 0);

    __decorate([

        lit_element_1.property({ type: String })

    ], TextBox.prototype, "defaultValue", void 0);

    __decorate([

        lit_element_1.property({ type: Boolean })

    ], TextBox.prototype, "disabled", void 0);

    __decorate([

        lit_element_1.property({ type: Number })

    ], TextBox.prototype, "maxLength", void 0);

    __decorate([

        lit_element_1.property({ type: String })

    ], TextBox.prototype, "name", void 0);

    __decorate([

        lit_element_1.property({ type: String })

    ], TextBox.prototype, "pattern", void 0);

    __decorate([

        lit_element_1.property({ type: String })

    ], TextBox.prototype, "placeholder", void 0);

    __decorate([

        lit_element_1.property({ type: Boolean })

    ], TextBox.prototype, "readOnly", void 0);

    __decorate([

        lit_element_1.property({ type: Boolean })

    ], TextBox.prototype, "required", void 0);

    __decorate([

        lit_element_1.property({ type: Number })

    ], TextBox.prototype, "size", void 0);

    __decorate([

        lit_element_1.property({ type: String })

    ], TextBox.prototype, "value", void 0);

    TextBox = __decorate([

        lit_element_1.customElement('text-box')

    ], TextBox);

    return TextBox;

}(lit_element_1.LitElement));

var templateObject_1, templateObject_2;

//# sourceMappingURL=text-box.js.map

//# sourceMappingURL={"version":3,"file":"text-box.js","sourceRoot":"","sources":["text-box.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;AAAA,2CAA6E;AAG7E;IAAsB,2BAAU;IADhC;QAAA,qEAwKC;QAtK4B,kBAAY,GAAG,IAAI,CAAC;QACnB,eAAS,GAAG,KAAK,CAAC;QACnB,kBAAY,GAAG,EAAE,CAAC;QACjB,cAAQ,GAAG,KAAK,CAAC;QAClB,eAAS,GAAG,EAAE,CAAC;QACf,UAAI,GAAG,EAAE,CAAC;QACV,aAAO,GAAG,OAAO,CAAC;QAClB,iBAAW,GAAG,EAAE,CAAC;QAChB,cAAQ,GAAG,KAAK,CAAC;QACjB,cAAQ,GAAG,KAAK,CAAC;QAClB,UAAI,GAAG,EAAE,CAAC;QACV,WAAK,GAAG,EAAE,CAAC;;IA2JxC,CAAC;IAzJC,sBAAW,iBAAM;aAAjB;YACE,OAAO,iBAAG,kqIAAA,+lIAgIT,KAAC;QACJ,CAAC;;;OAAA;IAGD,wBAAM,GAAN;QACE,OAAO,kBAAI,+kBAAA,2GAGc,EAAiB,+BACpB,EAAc,kCACX,EAAiB,8BACrB,EAAa,+BACZ,EAAc,0BACnB,EAAS,6BACN,EAAY,iCACR,EAAgB,8BACnB,EAAa,8BACb,EAAa,0BACjB,EAAS,2BACR,EAAU,kEAG3B,KAdwB,IAAI,CAAC,YAAY,EACpB,IAAI,CAAC,SAAS,EACX,IAAI,CAAC,YAAY,EACrB,IAAI,CAAC,QAAQ,EACZ,IAAI,CAAC,SAAS,EACnB,IAAI,CAAC,IAAI,EACN,IAAI,CAAC,OAAO,EACR,IAAI,CAAC,WAAW,EACnB,IAAI,CAAC,QAAQ,EACb,IAAI,CAAC,QAAQ,EACjB,IAAI,CAAC,IAAI,EACR,IAAI,CAAC,KAAK,EAG1B;IACJ,CAAC;IArK0B;QAA1B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAC,CAAC;iDAAqB;IACnB;QAA3B,sBAAQ,CAAC,EAAC,IAAI,EAAG,OAAO,EAAC,CAAC;8CAAmB;IACnB;QAA1B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAC,CAAC;iDAAmB;IACjB;QAA3B,sBAAQ,CAAC,EAAC,IAAI,EAAG,OAAO,EAAC,CAAC;6CAAkB;IAClB;QAA1B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAC,CAAC;8CAAgB;IACf;QAA1B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAC,CAAC;yCAAW;IACV;QAA1B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAC,CAAC;4CAAmB;IAClB;QAA1B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAC,CAAC;gDAAkB;IAChB;QAA3B,sBAAQ,CAAC,EAAC,IAAI,EAAG,OAAO,EAAC,CAAC;6CAAkB;IACjB;QAA3B,sBAAQ,CAAC,EAAC,IAAI,EAAG,OAAO,EAAC,CAAC;6CAAkB;IAClB;QAA1B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAC,CAAC;yCAAW;IACV;QAA1B,sBAAQ,CAAC,EAAC,IAAI,EAAG,MAAM,EAAC,CAAC;0CAAY;IAZlC,OAAO;QADZ,2BAAa,CAAC,UAAU,CAAC;OACpB,OAAO,CAuKZ;IAAD,cAAC;CAAA,AAvKD,CAAsB,wBAAU,GAuK/B"}