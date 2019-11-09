import { LitElement, customElement, html, css, property } from 'lit-element';

@customElement('flat-danger-button')
class FlatDangerButton extends LitElement {
  @property({type : Boolean}) autofocus = false;
  @property({type : Boolean}) disabled = false;
  @property({type : String}) name = '';
  @property({type : String}) value = '';

  static get styles() {
    return css`
      :host {
        display: block;
      }
      button {
        height: 30px;
        position: relative;
        transition-property: background-color, color, box-shadow, border;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        background-color: transparent;
        color: #636363;
        padding: 0 20px 0 20px;
        outline: none;
        border: none;
        font-family: 'IBM Plex Sans', sans-serif;
      }
      button:hover {
        color: var(--control-accent-danger);
      }
      button:active {
        color: var(--control-accent-active);
      }
      button:disabled {
        color: var(--control-accent-disabled);
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
        </button>
      </div>
    `;
  }
}
