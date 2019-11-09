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

var VerticalDivider = /** @class */ (function (_super) {

    __extends(VerticalDivider, _super);

    function VerticalDivider() {

        return _super !== null && _super.apply(this, arguments) || this;

    }

    Object.defineProperty(VerticalDivider, "styles", {

        get: function () {

            return lit_element_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      :host {\n        display: block;\n        width: 1px;\n        height: 100%;\n      }\n\n      * {\n        box-sizing: border-box;\n      }\n    \n      #divider {\n          width: 100%;\n          height: 100%;\n          background-color: var(--soft-divider);\n      }\n    "], ["\n      :host {\n        display: block;\n        width: 1px;\n        height: 100%;\n      }\n\n      * {\n        box-sizing: border-box;\n      }\n    \n      #divider {\n          width: 100%;\n          height: 100%;\n          background-color: var(--soft-divider);\n      }\n    "])));

        },

        enumerable: true,

        configurable: true

    });

    VerticalDivider.prototype.render = function () {

        return lit_element_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <div id=\"divider\">\n      </div>\n    "], ["\n      <div id=\"divider\">\n      </div>\n    "])));

    };

    VerticalDivider = __decorate([

        lit_element_1.customElement('vertical-divider')

    ], VerticalDivider);

    return VerticalDivider;

}(lit_element_1.LitElement));

var templateObject_1, templateObject_2;

//# sourceMappingURL=vertical-divider.js.map

//# sourceMappingURL={"version":3,"file":"vertical-divider.js","sourceRoot":"","sources":["vertical-divider.ts"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;AAAA,2CAA6E;AAG7E;IAA8B,mCAAU;IAAxC;;IA4BA,CAAC;IA1BC,sBAAW,yBAAM;aAAjB;YACE,OAAO,iBAAG,mWAAA,gSAgBT,KAAC;QACJ,CAAC;;;OAAA;IAED,gCAAM,GAAN;QACE,OAAO,kBAAI,qHAAA,kDAGV,KAAC;IACJ,CAAC;IA3BG,eAAe;QADpB,2BAAa,CAAC,kBAAkB,CAAC;OAC5B,eAAe,CA4BpB;IAAD,sBAAC;CAAA,AA5BD,CAA8B,wBAAU,GA4BvC"}