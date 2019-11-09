import { LitElement, customElement, html, css, property } from 'lit-element';

@customElement('switch-button')
class SwitchButton extends LitElement {
  @property({type : Boolean }) checked = false;
  @property({type : Boolean }) disabled = false;
  @property({type : String }) name = '';
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

      .switch-box {
        margin: 0px;
        height: var(--small-control-height);
        width: var(--small-control-height);
        position: absolute;
        top: 0px;
      }

      /* Unchecked switch Styles */
      #background-decoration input ~ .switch-box {
        transition-property: background-color, color, box-shadow, border, left;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        position: absolute;
        left: -1px;
        top: -1px;
        height: var(--small-control-height);
        width: var(--small-control-height);
        background-color: white;
        border-radius: 5px;
        border: 1px solid #636363;
        box-shadow: var(--shadow);
      }
      #background-decoration input:focus ~ .switch-box {
        background-color: white;
        border: 1px solid var(--control-accent-hover);
      }
      #background-decoration:hover .switch-box {
        background-color: var(--control-surface-hover);
        border: 1px solid var(--control-accent-hover);
      }
      #background-decoration:active .switch-box {
        background-color: var(--control-surface-active);
        border: 1px solid var(--control-accent-active);
        box-shadow: none;
      }
      #background-decoration input:disabled ~ .switch-box {
        background-color: var(--control-surface-disabled);
        border: 1px solid var(--control-accent-disabled);
        box-shadow: none;
      }

      /* Checked switch Styles */
      #background-decoration input:checked ~ .switch-box {
        transition-property: background-color, color, box-shadow, border, left;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        position: absolute;
        left: 19px;
      }
      #background-decoration input:checked:focus ~ .switch-box {
        background-color: white;
        border: 1px solid var(--control-accent-hover);
      }
      #background-decoration:hover input:checked ~ .switch-box {
        background-color: var(--control-surface-hover);
        border: 1px solid var(--control-accent-hover);
      }
      #background-decoration:active input:checked ~ .switch-box {
        background-color: var(--control-surface-active);
        border: 1px solid var(--control-accent-active);
        box-shadow: none;
      }
      #background-decoration input:checked:disabled ~ .switch-box {
        background-color: var(--control-surface-disabled);
        border: 1px solid var(--control-accent-disabled);
        box-shadow: none;
      }
      
      input {
        margin: 0px;
        height: 0px;
        width: 0px;
        opacity: 0;
      }

      #background-decoration {
        position: relative;
        width: 42px;
        height: var(--small-control-height);
        background-color: var(--control-surface-disabled);
        border-radius: 5px;
        border: 1px solid var(--control-accent-disabled);
      }

      #splash-box {
        transition-property: left;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        position: absolute;
        top: -1px; left: -1px;
        width: var(--small-control-height);
        height: var(--small-control-height);
        border-radius: var(--splash-border-radius);
        box-sizing: content-box;
      }

      input:checked ~ #splash-box {
        left: 19px;
      }

      #background-decoration:active .splash-animation {
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

  toggleChecked() {
    let checkbox = this.shadowRoot.getElementById('checkbox') as HTMLInputElement;
    checkbox.checked = !checkbox.checked;
    let input = new Event('input');
    this.dispatchEvent(input);
  }

  render(){
    return html`
      <div id="background-decoration"
        @click="${this.toggleChecked}"
        @mousedown="${this.splashOn}"
        @mouseup="${this.splashOff}">
        <input id="checkbox" type="checkbox" 
          ?disabled="${this.disabled}" 
          ?checked="${this.checked}"
          .name="${this.name}"
          .value="${this.value}">
        <div id="splash-box"></div>
        <div class="switch-box">
          <span class="switch-custom"></span>
        </div>
      </div>
    `;
  }
}
