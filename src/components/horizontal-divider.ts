import { LitElement, customElement, html, css, property } from 'lit-element';

@customElement('horizontal-divider')
class HorizontalDivider extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
        height: 1px;
        margin-left: 6px;
        margin-right: 6px;
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
