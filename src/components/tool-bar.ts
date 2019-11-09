import { LitElement, customElement, html, css, property } from 'lit-element';
import '../styles/global';


@customElement('tool-bar')
class ToolBar extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }

      * {
        box-sizing: border-box;
      }

      #tool-bar-element {
          height: 46px;
          width: 100%;
          background-color: white;
          border: 1px solid var(--hard-divider);
          border-width: 0 0 1px 0;
          box-shadow: var(--shadow);
          display: flex;
          align-items: center;
      }

    `;
  }
  

  render(){
    return html`
      <div id="tool-bar-element">
        <slot></slot>
      </div>
    `;
  }
}
