import { LitElement, customElement, html, css, property } from 'lit-element';

@customElement('vertical-divider')
class VerticalDivider extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        width: 1px;
        height: 100%;
      }

      * {
        box-sizing: border-box;
      }
    
      #divider {
          width: 100%;
          height: 100%;
          background-color: var(--soft-divider);
      }
    `;
  }

  render(){
    return html`
      <div id="divider">
      </div>
    `;
  }
}
