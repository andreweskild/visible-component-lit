import { LitElement, customElement, html, css, property } from 'lit-element';

@customElement('radio-button')
class RadioButton extends LitElement {
  @property({type : Boolean }) disabled = false;
  @property({type : Boolean }) checked = false;
  @property({type : String }) name = '';
  @property({type : String }) value = '';

  static get styles() {
    return css`
      :host {
        display: block;
      }

      * {
        box-sizing: border-box;
      }

      .radio-box input {
        margin: 0px;
        height: var(--small-control-height);
        width: var(--small-control-height);
        opacity: 0;
      }

      /* Unchecked Checkbox Styles */
      .radio-box .radio-custom {
        transition-property: background-color, color, box-shadow, border;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        position: absolute;
        top: 0px;
        left: 0px;
        height: var(--small-control-height);
        width: var(--small-control-height);
        background-color: white;
        border-radius: 50%;
        border: 1px solid #636363;
        box-shadow: var(--shadow);
      }
      .radio-box input:focus .radio-custom {
        background-color: white;
        border: 1px solid var(--control-accent-hover);
      }
      .radio-box:hover .radio-custom {
        background-color: var(--control-surface-hover);
        border: 1px solid var(--control-accent-hover);
      }
      .radio-box:active .radio-custom {
        background-color: var(--control-surface-active);
        border: 1px solid var(--control-accent-active);
        box-shadow: none;
      }
      .radio-box input:disabled ~ .radio-custom {
        background-color: var(--control-surface-disabled);
        border: 1px solid var(--control-accent-disabled);
        box-shadow: none;
      }

      /* Checkmark hidden styles */
      .radio-box .radio-custom::after {
        transition-property: background-color, color, box-shadow, border;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        position: absolute;
        content: "";
        left: 10px;
        top: 10px;
        height: 0px;
        width: 0px;
        border-radius: 50%;
        opacity: 1;
      }

      /* Checked Checkbox Styles */
      .radio-box input:checked ~ .radio-custom {
        background-color: white;
        border-radius: 50%;
        transform: rotate(0deg) scale(1);
        opacity: 1;
        border: 1px solid black;
      }
      .radio-box input:checked:focus ~ .radio-custom {
        background-color: white;
        border: 1px solid var(--control-accent-hover);
      }
      .radio-box:hover input:checked ~ .radio-custom {
        background-color: var(--control-surface-hover);
        border: 1px solid var(--control-accent-hover);
      }
      .radio-box:active input:checked ~ .radio-custom {
        background-color: var(--control-surface-active);
        border: 1px solid var(--control-accent-active);
        box-shadow: none;
      }
      .radio-box input:checked:disabled ~ .radio-custom {
        background-color: var(--control-surface-disabled);
        border: 1px solid var(--control-accent-disabled);
        box-shadow: none;
      }

      /* Checkmark Styles */
      .radio-box input:checked ~ .radio-custom::after {
        opacity: 1;
        left: 6px;
        top: 6px;
        width: 8px;
        height: 8px;
        background-color: #636363;
        border-radius: 50%;
      }
      .radio-box input:checked:focus ~ .radio-custom::after {
        background-color: var(--control-accent-hover);
      }
      .radio-box:hover input:checked ~ .radio-custom::after {
        background-color: var(--control-accent-hover);
      }
      .radio-box:active input:checked ~ .radio-custom::after {
        background-color: var(--control-accent-active);
      }
      .radio-box input:checked:disabled ~ .radio-custom::after {
        background-color: var(--control-accent-disabled);
      }

      #container {
        position: relative;
        display: inline-block;
        height: auto;
      }

      #splash-box {
        position: absolute;
        width: var(--small-control-height);
        height: var(--small-control-height);
        border-radius: 50%;
        box-sizing: content-box;
      }

      .splash-animation {
        background-color: var(--focus-splash);
        transition: 0.2s;
        transition-timing-function: ease;
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

  render(){
    return html`
      <div id="container">
        <div id="splash-box"></div>
        <label class="radio-box"
          @mousedown="${this.splashOn}"
          @mouseup="${this.splashOff}">
          <input type="radio" 
            ?disabled="${this.disabled}" 
            ?checked=${this.checked}
            .name="${this.name}"
            .value="${this.value}">
          <span class="radio-custom"></span>
        </label>
      </div>
    `;
  }
}
