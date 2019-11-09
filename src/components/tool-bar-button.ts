import { LitElement, customElement, html, css, property } from 'lit-element';
import '../styles/global';


@customElement('tool-bar-button')
class ToolBarButton extends LitElement {
  @property({type : Boolean}) autofocus = false;
  @property({type : Boolean}) disabled = false;
  @property({type : String}) name = '';
  @property({type : String}) value = '';

  static get styles() {
    return css`
      :host {
        display: block;
        height: 100%;
      }

      :host([hidden]) {
        display: none;
      }
      
      button {
        height: 100%;
        position: relative;
        transition-property: background-color, color, box-shadow;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        background-color: transparent;
        color: #636363;
        border: none;
        padding: 0 20px 0 20px;
        outline: none;
        font-family: 'IBM Plex Sans', sans-serif;
      }
      button:focus {
        color: var(--control-accent-hover);
      }
      button:hover {
        color: var(--control-accent-hover);
      }
      button:active {
        background-color: var(--control-surface-active);
        border: solid var(--control-accent-active);
        border-width: 0 1px 0 1px;
        color: var(--control-accent-active);
        margin-left: -1px;
        margin-right: -1px;
      }
      button:disabled {
        color: var(--control-accent-disabled);
      }

      #container {
        position: relative;
        height: 100%;
        width: 100%;
      }
      

      /* #splash-box {
        position: absolute;
        height: 80%;
        width: 80%;
        background-color: red;
        box-sizing: content-box;
      }
      
      #splash-box.splash-animation {
        background-color: var(--soft-divider);
        transition-property: background-color, width, height;
        transition: 0.2s;
        transition-timing-function: ease;
        height: 100%;
        width: 100%;
      } */

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
