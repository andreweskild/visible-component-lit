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

var InputSlider = /** @class */ (function (_super) {

    __extends(InputSlider, _super);

    function InputSlider() {

        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.disabled = false;

        _this.max = '100';

        _this.min = '0';

        _this.name = '';

        _this.step = '1';

        _this.value = '';

        return _this;

    }

    Object.defineProperty(InputSlider, "styles", {

        get: function () {

            return lit_element_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      :host {\n        display: block;\n      }\n      \n      :host([hidden]) {\n        display: none;\n      }\n\n      * {\n        box-sizing: border-box;\n      }\n\n      .slidercontainer {\n        position: relative;\n        height: var(--small-round-control-height);\n        width: 100%;\n      }\n\n      /* The slider itself */\n      .slider {\n        -webkit-appearance: none;\n        appearance: none;\n        width: 100%;\n        height: 6px;\n        margin: 0px;\n        background-color: transparent;\n        outline: none;\n        -webkit-transition: .2s;\n        transition: opacity .2s;\n      }\n\n      .slider::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        width: var(--small-round-control-height);\n        height: var(--small-round-control-height);\n        opacity: 0;\n      }\n\n      .slider::-moz-range-thumb {\n        width: var(--small-round-control-height);\n        height: var(--small-round-control-height);\n        opacity: 0;\n      }\n\n      .slider-thumb {\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        background-color: var(--control-surface-normal);\n        border: var(--border-width) solid var(--control-accent-normal);\n        border-radius: 50%;\n        height: 100%;\n        width: 100%;\n        box-shadow: var(--shadow);\n      }\n\n      .slider:not(:disabled):hover ~ #splash-box .slider-thumb {\n        background-color: var(--control-surface-hover);\n        border: var(--border-width) solid var(--control-accent-hover);\n      }\n      .slider:not(:disabled):hover::-moz-range-thumb {\n        background-color: var(--control-surface-hover);\n        border: var(--border-width) solid var(--control-accent-hover);\n      }\n\n      .slider:not(:disabled):active ~ #splash-box .slider-thumb  {\n        background-color: var(--control-surface-active);\n        border: var(--border-width) solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      .slider:not(:disabled):active::-moz-range-thumb {\n        background-color: var(--control-surface-active);\n        border: var(--border-width) solid var(--control-accent-active);\n        box-shadow: none;\n      }\n\n      input:disabled ~ #splash-box .slider-thumb  {\n        background-color: var(--control-surface-disabled);\n        border: var(--border-width) solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n      input:disabled::-moz-range-thumb {\n        background-color: var(--control-surface-disabled);\n        border: var(--border-width) solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n\n      #slider-background {\n        background-color: var(--control-surface-disabled);\n        border: var(--border-width) solid var(--control-accent-disabled);\n        border-radius: 8px;\n        height: 8px;\n        position: absolute;\n        width: 100%;\n        top: 8px;\n        z-index: -1;\n      }\n\n      #slider-active {\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        background-color: var(--control-surface-normal);\n        border: var(--border-width) solid var(--control-accent-normal);\n        border-radius: 8px;\n        height: 8px;\n        position: absolute;\n        top: 8px;\n        z-index: -1;\n      }\n\n      .slidercontainer:hover #slider-active {\n        background-color: var(--control-surface-hover);\n        border: var(--border-width) solid var(--control-accent-hover);\n      }\n\n      .slidercontainer:active #slider-active {\n        background-color: var(--control-surface-normal);\n        border: var(--border-width) solid var(--control-accent-normal);\n      }\n\n      input:disabled ~ #slider-active {\n        opacity: 0.0;\n      }\n\n      button {\n        position: relative;\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-normal);\n        border: var(--border-width) solid var(--control-accent-normal);\n        border-radius: var(--border-radius);\n        padding: 6px 20px;\n        outline: none;\n        font-family: 'IBM Plex Sans', sans-serif;\n        box-shadow: var(--shadow);\n      }\n      button:hover {\n        background-color: var(--control-surface-hover);\n        color: var(--control-accent-hover);\n        border: var(--border-width) solid var(--control-accent-hover);\n      }\n      button:active {\n        background-color: var(--control-surface-active);\n        color: var(--control-accent-active);\n        border: var(--border-width) solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      button:disabled {\n        background-color: var(--control-surface-disabled);\n        color: var(--control-accent-disabled);\n        border: var(--border-width) solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n\n      #container {\n        position: relative;\n        display: inline-block;\n        height: auto;\n      }\n\n      #splash-box {\n        position: absolute;\n        width: 24px;\n        height: 24px;\n        border-radius: 50%;\n        pointer-events: none;\n        top: 0;\n        box-sizing: content-box;\n      }\n\n      .splash-animation {\n        background-color: var(--focus-splash);\n        padding: 4px;\n        margin: -4px;\n      }\n    "], ["\n      :host {\n        display: block;\n      }\n      \n      :host([hidden]) {\n        display: none;\n      }\n\n      * {\n        box-sizing: border-box;\n      }\n\n      .slidercontainer {\n        position: relative;\n        height: var(--small-round-control-height);\n        width: 100%;\n      }\n\n      /* The slider itself */\n      .slider {\n        -webkit-appearance: none;\n        appearance: none;\n        width: 100%;\n        height: 6px;\n        margin: 0px;\n        background-color: transparent;\n        outline: none;\n        -webkit-transition: .2s;\n        transition: opacity .2s;\n      }\n\n      .slider::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        width: var(--small-round-control-height);\n        height: var(--small-round-control-height);\n        opacity: 0;\n      }\n\n      .slider::-moz-range-thumb {\n        width: var(--small-round-control-height);\n        height: var(--small-round-control-height);\n        opacity: 0;\n      }\n\n      .slider-thumb {\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        background-color: var(--control-surface-normal);\n        border: var(--border-width) solid var(--control-accent-normal);\n        border-radius: 50%;\n        height: 100%;\n        width: 100%;\n        box-shadow: var(--shadow);\n      }\n\n      .slider:not(:disabled):hover ~ #splash-box .slider-thumb {\n        background-color: var(--control-surface-hover);\n        border: var(--border-width) solid var(--control-accent-hover);\n      }\n      .slider:not(:disabled):hover::-moz-range-thumb {\n        background-color: var(--control-surface-hover);\n        border: var(--border-width) solid var(--control-accent-hover);\n      }\n\n      .slider:not(:disabled):active ~ #splash-box .slider-thumb  {\n        background-color: var(--control-surface-active);\n        border: var(--border-width) solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      .slider:not(:disabled):active::-moz-range-thumb {\n        background-color: var(--control-surface-active);\n        border: var(--border-width) solid var(--control-accent-active);\n        box-shadow: none;\n      }\n\n      input:disabled ~ #splash-box .slider-thumb  {\n        background-color: var(--control-surface-disabled);\n        border: var(--border-width) solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n      input:disabled::-moz-range-thumb {\n        background-color: var(--control-surface-disabled);\n        border: var(--border-width) solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n\n      #slider-background {\n        background-color: var(--control-surface-disabled);\n        border: var(--border-width) solid var(--control-accent-disabled);\n        border-radius: 8px;\n        height: 8px;\n        position: absolute;\n        width: 100%;\n        top: 8px;\n        z-index: -1;\n      }\n\n      #slider-active {\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        background-color: var(--control-surface-normal);\n        border: var(--border-width) solid var(--control-accent-normal);\n        border-radius: 8px;\n        height: 8px;\n        position: absolute;\n        top: 8px;\n        z-index: -1;\n      }\n\n      .slidercontainer:hover #slider-active {\n        background-color: var(--control-surface-hover);\n        border: var(--border-width) solid var(--control-accent-hover);\n      }\n\n      .slidercontainer:active #slider-active {\n        background-color: var(--control-surface-normal);\n        border: var(--border-width) solid var(--control-accent-normal);\n      }\n\n      input:disabled ~ #slider-active {\n        opacity: 0.0;\n      }\n\n      button {\n        position: relative;\n        transition-property: background-color, color, box-shadow, border;\n        transition-duration: var(--transition-duration);\n        transition-timing-function: var(--transition-curve);\n        background-color: var(--control-surface-normal);\n        color: var(--control-accent-normal);\n        border: var(--border-width) solid var(--control-accent-normal);\n        border-radius: var(--border-radius);\n        padding: 6px 20px;\n        outline: none;\n        font-family: 'IBM Plex Sans', sans-serif;\n        box-shadow: var(--shadow);\n      }\n      button:hover {\n        background-color: var(--control-surface-hover);\n        color: var(--control-accent-hover);\n        border: var(--border-width) solid var(--control-accent-hover);\n      }\n      button:active {\n        background-color: var(--control-surface-active);\n        color: var(--control-accent-active);\n        border: var(--border-width) solid var(--control-accent-active);\n        box-shadow: none;\n      }\n      button:disabled {\n        background-color: var(--control-surface-disabled);\n        color: var(--control-accent-disabled);\n        border: var(--border-width) solid var(--control-accent-disabled);\n        box-shadow: none;\n      }\n\n      #container {\n        position: relative;\n        display: inline-block;\n        height: auto;\n      }\n\n      #splash-box {\n        position: absolute;\n        width: 24px;\n        height: 24px;\n        border-radius: 50%;\n        pointer-events: none;\n        top: 0;\n        box-sizing: content-box;\n      }\n\n      .splash-animation {\n        background-color: var(--focus-splash);\n        padding: 4px;\n        margin: -4px;\n      }\n    "])));

        },

        enumerable: true,

        configurable: true

    });

    InputSlider.prototype.splashOn = function () {

        var splsh = this.shadowRoot.getElementById('splash-box');

        if (!splsh.classList.contains('splash-animation')) {

            splsh.classList.add('splash-animation');

        }

    };

    InputSlider.prototype.splashOff = function () {

        var splsh = this.shadowRoot.getElementById('splash-box');

        if (splsh.classList.contains('splash-animation')) {

            splsh.classList.remove('splash-animation');

        }

    };

    InputSlider.prototype.updateThumbPos = function () {

        var rangeInput = this.shadowRoot.getElementById('range-input');

        var min = parseInt(rangeInput.min);

        var max = parseInt(rangeInput.max);

        var val = rangeInput.valueAsNumber;

        var ratio = (val - min) / (max - min);

        var valPos = ratio * 100;

        var sliderActive = this.shadowRoot.getElementById('slider-active');

        sliderActive.style.width = "calc(12px + " + valPos + "% - " + ratio + " * 24px)";

        var splashBox = this.shadowRoot.getElementById('splash-box');

        splashBox.style.left = "calc(" + valPos + "% - " + ratio + " * 24px)";

    };

    InputSlider.prototype.firstUpdated = function () {

        this.updateThumbPos();

    };

    InputSlider.prototype.render = function () {

        return lit_element_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <div class=\"slidercontainer\">\n        <input type=\"range\" class=\"slider\" id=\"range-input\" \n          .min=\"", "\" \n          .max=\"", "\" \n          .step=\"", "\"\n          .value=\"", "\" \n          @mousedown=\"", "\"\n          @mouseup=\"", "\"\n          @input=\"", "\" >\n        <div id=\"slider-background\"></div>\n        <div id=\"slider-active\"></div>\n        <div id=\"splash-box\">\n          <div class=\"slider-thumb\"></div>\n        </div>\n      </div>\n    "], ["\n      <div class=\"slidercontainer\">\n        <input type=\"range\" class=\"slider\" id=\"range-input\" \n          .min=\"", "\" \n          .max=\"", "\" \n          .step=\"", "\"\n          .value=\"", "\" \n          @mousedown=\"", "\"\n          @mouseup=\"", "\"\n          @input=\"", "\" >\n        <div id=\"slider-background\"></div>\n        <div id=\"slider-active\"></div>\n        <div id=\"splash-box\">\n          <div class=\"slider-thumb\"></div>\n        </div>\n      </div>\n    "])), this.min, this.max, this.step, this.value, this.splashOn, this.splashOff, this.updateThumbPos);

    };

    __decorate([

        lit_element_1.property({ type: Boolean })

    ], InputSlider.prototype, "disabled", void 0);

    __decorate([

        lit_element_1.property({ type: String })

    ], InputSlider.prototype, "max", void 0);

    __decorate([

        lit_element_1.property({ type: String })

    ], InputSlider.prototype, "min", void 0);

    __decorate([

        lit_element_1.property({ type: String })

    ], InputSlider.prototype, "name", void 0);

    __decorate([

        lit_element_1.property({ type: String })

    ], InputSlider.prototype, "step", void 0);

    __decorate([

        lit_element_1.property({ type: String })

    ], InputSlider.prototype, "value", void 0);

    InputSlider = __decorate([

        lit_element_1.customElement('input-slider')

    ], InputSlider);

    return InputSlider;

}(lit_element_1.LitElement));

var templateObject_1, templateObject_2;

//# sourceMappingURL=input-slider.js.map

//# sourceMappingURL={"version":3,"file":"input-slider.js","sourceRoot":"","sources":["input-slider.ts"],"names":[],"mappings":"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"}