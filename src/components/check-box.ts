import { LitElement, customElement, html, css, property } from 'lit-element';

@customElement('check-box')
class Checkbox extends LitElement {
  @property({type : Boolean, reflect : true }) checked = false;
  @property({type : Boolean }) disabled = false;
  @property({type : String }) name = '';
  @property({type : String }) value = '';

  static get styles() {
    return css`
      :host {
        position: relative;
        display: inline-block;
      }
      
      * {
        box-sizing: border-box;
      }

      .checkbox-label input {
        margin: 0px;
        height: var(--small-control-height);
        width: var(--small-control-height);
        opacity: 0;
      }

      /* Unchecked Checkbox Styles */
      .checkbox-label .checkbox-custom {
        transition-property: background-color, color, box-shadow, border;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        position: absolute;
        top: 0px;
        left: 0px;
        height: var(--small-control-height);
        width: var(--small-control-height);
        background-color: white;
        border-radius: 5px;
        border: 1px solid #636363;
        box-shadow: var(--shadow);
      }
      .checkbox-label:hover .checkbox-custom {
        background-color: var(--control-surface-hover);
        border: 1px solid var(--control-accent-hover);
      }
      .checkbox-label:active .checkbox-custom {
        background-color: var(--control-surface-active);
        border: 1px solid var(--control-accent-active);
        box-shadow: none;
      }
      .checkbox-label input:disabled ~ .checkbox-custom {
        background-color: var(--control-surface-disabled);
        border: 1px solid var(--control-accent-disabled);
        box-shadow: none;
      }

      /* Checkmark hidden styles */
      .checkbox-label .checkbox-custom::after {
        transition-property: background-color, color, box-shadow, border;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        position: absolute;
        content: "";
        left: 10px;
        top: 10px;
        height: 0px;
        width: 0px;
        border-radius: 5px;
        border: solid grey;
        border-width: 0 3px 3px 0;
        transform: rotate(0deg) scale(0);
        opacity: 1;
      }

      /* Checked Checkbox Styles */
      .checkbox-label input:checked ~ .checkbox-custom {
        background-color: white;
        border-radius: 5px;
        transform: rotate(0deg) scale(1);
        opacity: 1;
        border: 1px solid black;
      }
      .checkbox-label:hover input:checked ~ .checkbox-custom {
        background-color: var(--control-surface-hover);
        border: 1px solid var(--control-accent-hover);
      }
      .checkbox-label:active input:checked ~ .checkbox-custom {
        background-color: var(--control-surface-active);
        border: 1px solid var(--control-accent-active);
        box-shadow: none;
      }
      .checkbox-label input:checked:disabled ~ .checkbox-custom {
        background-color: var(--control-surface-disabled);
        border: 1px solid var(--control-accent-disabled);
        box-shadow: none;
      }
      

      /* Checkmark Styles */
      .checkbox-label input:checked ~ .checkbox-custom::after {
        transform: rotate(45deg) scale(1);
        opacity: 1;
        left: 6px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid grey;
        border-width: 0 2px 2px 0;
        background-color: transparent;
        border-radius: 0;
      }
      .checkbox-label:hover input:checked ~ .checkbox-custom::after {
        border: solid var(--control-accent-hover);
        border-width: 0 2px 2px 0;
      }
      .checkbox-label:active input:checked ~ .checkbox-custom::after {
        border: solid var(--control-accent-active);
        border-width: 0 2px 2px 0;
      }
      .checkbox-label input:checked:disabled ~ .checkbox-custom::after {
        border: solid var(--control-accent-disabled);
        border-width: 0 2px 2px 0;
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
        border-radius: var(--splash-border-radius);
        box-sizing: content-box;
      }

      #container:active .splash-animation {
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
        <div id="splash-box"></div>
        <label class="checkbox-label"
        @mousedown="${this.splashOn}"
        @mouseup="${this.splashOff}">
          <input type="checkbox" 
            ?disabled="${this.disabled}" 
            ?checked="${this.checked}"
            .name="${this.name}"
            .value="${this.value}">
          <span class="checkbox-custom"></span>
        </label>
    `;
  }
}