import { LitElement, customElement, html, css, property } from 'lit-element';

@customElement('drop-down-button')
class DropDownButton extends LitElement {
  @property({type : Boolean}) autofocus = false;
  @property({type : Boolean}) disabled = false;
  @property({type : String}) name = '';
  @property({type : String}) value = '';

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

      button {
        height: 30px;
        position: relative;
        transition-property: background-color, color, box-shadow, border;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        background-color: white;
        color: #636363;
        border: var(--border-width) solid #636363;
        border-radius: var(--border-radius);
        padding: 0px 20px 0px 20px;
        outline: none;
        font-family: 'IBM Plex Sans', sans-serif;
        box-shadow: var(--shadow);
      }
      button:focus {
        background-color: white;
        color: var(--control-accent-hover);
        border: var(--border-width) solid var(--control-accent-hover);
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
        width: 100%;
        height: 100%;
        border-radius: var(--splash-border-radius);
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
        <button id="control" 
            @mousedown="${this.splashOn}"
            @mouseup="${this.splashOff}"
            ?autofocus="${this.autofocus}"
            ?disabled="${this.disabled}"
            .name="${this.name}"
            .value="${this.value}">
            <slot></slot>
            <span class="material-icons">face</span>
        </button>
      </div>
    `;
  }
}