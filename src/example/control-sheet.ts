import { LitElement, customElement, html, css } from 'lit-element';
import '../components/tool-bar.ts';
import '../components/vertical-divider.ts';
import '../components/tool-bar-button.ts';
import '../components/raised-button.ts';
import '../components/check-box.ts';
import '../components/drop-down-button.ts';
import '../styles/global';
import '@bit/andreweskild.visible-hybrids.button';

@customElement('control-sheet')
class ControlSheet extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        height: 100%;
        width: 100%;
      }
    `;
  }
  
  render(){
    return html`
      <vdc-button>Button</vdc-button>
      <raised-button disabled onclick="console.log('button')">Button</raised-button>
    `;
  }
}