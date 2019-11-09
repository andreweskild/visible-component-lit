import { LitElement, customElement, html, css, property } from 'lit-element';

@customElement('input-slider')
class InputSlider extends LitElement {
  @property({type : Boolean }) disabled = false;
  @property({type : String }) max = '100';
  @property({type : String }) min = '0';
  @property({type : String }) name = '';
  @property({type : String }) step ='1';
  @property({type : String }) value = '';

  static get styles() {
    return css`
      :host {
        display: block;
      }
      
      :host([hidden]) {
        display: none;
      }

      * {
        box-sizing: border-box;
      }

      .slidercontainer {
        position: relative;
        height: var(--small-round-control-height);
        width: 100%;
      }

      /* The slider itself */
      .slider {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 6px;
        margin: 0px;
        background-color: transparent;
        outline: none;
        -webkit-transition: .2s;
        transition: opacity .2s;
      }

      .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: var(--small-round-control-height);
        height: var(--small-round-control-height);
        opacity: 0;
      }

      .slider::-moz-range-thumb {
        width: var(--small-round-control-height);
        height: var(--small-round-control-height);
        opacity: 0;
      }

      .slider-thumb {
        transition-property: background-color, color, box-shadow, border;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        background-color: white;
        border: var(--border-width) solid #636363;
        border-radius: 50%;
        height: 100%;
        width: 100%;
        box-shadow: var(--shadow);
      }

      .slider:not(:disabled):hover ~ #splash-box .slider-thumb {
        background-color: var(--control-surface-hover);
        border: var(--border-width) solid var(--control-accent-hover);
      }
      .slider:not(:disabled):hover::-moz-range-thumb {
        background-color: var(--control-surface-hover);
        border: var(--border-width) solid var(--control-accent-hover);
      }

      .slider:not(:disabled):active ~ #splash-box .slider-thumb  {
        background-color: var(--control-surface-active);
        border: var(--border-width) solid var(--control-accent-active);
        box-shadow: none;
      }
      .slider:not(:disabled):active::-moz-range-thumb {
        background-color: var(--control-surface-active);
        border: var(--border-width) solid var(--control-accent-active);
        box-shadow: none;
      }

      input:disabled ~ #splash-box .slider-thumb  {
        background-color: var(--control-surface-disabled);
        border: var(--border-width) solid var(--control-accent-disabled);
        box-shadow: none;
      }
      input:disabled::-moz-range-thumb {
        background-color: var(--control-surface-disabled);
        border: var(--border-width) solid var(--control-accent-disabled);
        box-shadow: none;
      }

      #slider-background {
        background-color: var(--control-surface-disabled);
        border: var(--border-width) solid var(--control-accent-disabled);
        border-radius: 8px;
        height: 8px;
        position: absolute;
        width: 100%;
        top: 8px;
        z-index: -1;
      }

      #slider-active {
        transition-property: background-color, color, box-shadow, border;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        background-color: white;
        border: var(--border-width) solid #636363;
        border-radius: 8px;
        height: 8px;
        position: absolute;
        top: 8px;
        z-index: -1;
      }

      .slidercontainer:hover #slider-active {
        background-color: var(--control-surface-hover);
        border: var(--border-width) solid var(--control-accent-hover);
      }

      .slidercontainer:active #slider-active {
        background-color: white;
        border: var(--border-width) solid #636363;
      }

      input:disabled ~ #slider-active {
        opacity: 0.0;
      }

      button {
        position: relative;
        transition-property: background-color, color, box-shadow, border;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        background-color: white;
        color: #636363;
        border: var(--border-width) solid #636363;
        border-radius: var(--border-radius);
        padding: 6px 20px;
        outline: none;
        font-family: 'IBM Plex Sans', sans-serif;
        box-shadow: var(--shadow);
      }
      button:hover {
        background-color: var(--control-surface-hover);
        color: var(--control-accent-hover);
        border: var(--border-width) solid var(--control-accent-hover);
      }
      button:active {
        background-color: var(--control-surface-active);
        color: var(--control-accent-active);
        border: var(--border-width) solid var(--control-accent-active);
        box-shadow: none;
      }
      button:disabled {
        background-color: var(--control-surface-disabled);
        color: var(--control-accent-disabled);
        border: var(--border-width) solid var(--control-accent-disabled);
        box-shadow: none;
      }

      #container {
        position: relative;
        display: inline-block;
        height: auto;
      }

      #splash-box {
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        pointer-events: none;
        top: 0;
        box-sizing: content-box;
      }

      .splash-animation {
        background-color: var(--focus-splash);
        padding: 4px;
        margin: -4px;
      }
    `;
  }
  
  splashOn(){
    let splsh = this.shadowRoot.getElementById('splash-box');
    if (!splsh.classList.contains('splash-animation')) {
      splsh.classList.add('splash-animation');
    }
  }

  splashOff(){
    let splsh = this.shadowRoot.getElementById('splash-box');
    if (splsh.classList.contains('splash-animation')) {
      splsh.classList.remove('splash-animation');
    }
  }

  updateThumbPos(){
    let rangeInput = this.shadowRoot.getElementById('range-input') as HTMLInputElement;
    let min = parseInt(rangeInput.min);
    let max = parseInt(rangeInput.max);
    let val = rangeInput.valueAsNumber;

    
    let ratio = (val - min) / (max - min);

    let valPos = ratio * 100;


    let sliderActive = this.shadowRoot.getElementById('slider-active');
    sliderActive.style.width = `calc(12px + ${valPos}% - ${ratio} * 24px)`;

    let splashBox = this.shadowRoot.getElementById('splash-box');
    splashBox.style.left = `calc(${valPos}% - ${ratio} * 24px)`;
  }

  firstUpdated() {
    this.updateThumbPos();
  }

  render(){
    return html`
      <div class="slidercontainer">
        <input type="range" class="slider" id="range-input" 
          .min="${this.min}" 
          .max="${this.max}" 
          .step="${this.step}"
          .value="${this.value}" 
          @mousedown="${this.splashOn}"
          @mouseup="${this.splashOff}"
          @input="${this.updateThumbPos}" >
        <div id="slider-background"></div>
        <div id="slider-active"></div>
        <div id="splash-box">
          <div class="slider-thumb"></div>
        </div>
      </div>
    `;
  }
}