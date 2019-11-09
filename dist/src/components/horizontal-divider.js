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

var HorizontalDivider = /** @class */ (function (_super) {

    __extends(HorizontalDivider, _super);

    function HorizontalDivider() {

        return _super !== null && _super.apply(this, arguments) || this;

    }

    Object.defineProperty(HorizontalDivider, "styles", {

        get: function () {

            return lit_element_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      :host {\n        display: block;\n        width: 100%;\n        height: 1px;\n        margin-left: 6px;\n        margin-right: 6px;\n      }\n\n      * {\n        box-sizing: border-box;\n      }\n    \n      #divider {\n          width: 100%;\n          height: 100%;\n          background-color: var(--soft-divider);\n      }\n    "], ["\n      :host {\n        display: block;\n        width: 100%;\n        height: 1px;\n        margin-left: 6px;\n        margin-right: 6px;\n      }\n\n      * {\n        box-sizing: border-box;\n      }\n    \n      #divider {\n          width: 100%;\n          height: 100%;\n          background-color: var(--soft-divider);\n      }\n    "])));

        },

        enumerable: true,

        configurable: true

    });

    HorizontalDivider.prototype.render = function () {

        return lit_element_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <div id=\"divider\">\n      </div>\n    "], ["\n      <div id=\"divider\">\n      </div>\n    "])));

    };

    HorizontalDivider = __decorate([

        lit_element_1.customElement('horizontal-divider')

    ], HorizontalDivider);

    return HorizontalDivider;

}(lit_element_1.LitElement));

var templateObject_1, templateObject_2;

//# sourceMappingURL=horizontal-divider.js.map

//# sourceMappingURL={"version":3,"file":"horizontal-divider.js","sourceRoot":"","sources":["horizontal-divider.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;AAAA,2CAA6E;AAG7E;IAAgC,qCAAU;IAA1C;;IA8BA,CAAC;IA5BC,sBAAW,2BAAM;aAAjB;YACE,OAAO,iBAAG,0ZAAA,uVAkBT,KAAC;QACJ,CAAC;;;OAAA;IAED,kCAAM,GAAN;QACE,OAAO,kBAAI,qHAAA,kDAGV,KAAC;IACJ,CAAC;IA7BG,iBAAiB;QADtB,2BAAa,CAAC,oBAAoB,CAAC;OAC9B,iBAAiB,CA8BtB;IAAD,wBAAC;CAAA,AA9BD,CAAgC,wBAAU,GA8BzC"}