import { LitElement, html, customElement, css, property } from 'lit-element';

@customElement('text-box')
class TextBox extends LitElement {
  @property({type : String}) autocomplete = 'on';
  @property({type : Boolean}) autofocus = false;
  @property({type : String}) defaultValue = '';
  @property({type : Boolean}) disabled = false;
  @property({type : Number}) maxLength = 50;
  @property({type : String}) name = '';
  @property({type : String}) pattern = '.{0,}';
  @property({type : String}) placeholder = '';
  @property({type : Boolean}) readOnly = false;
  @property({type : Boolean}) required = false;
  @property({type : Number}) size = 20;
  @property({type : String}) value = '';

  static get styles() {
    return css`
      :host {
        display: block;
      }
      * {
        box-sizing: border-box;
      }
      input {
        height: var(--tall-control-height);
        width: 100%;
        position: relative;
        transition-property: background-color, color, box-shadow, border;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        background-color: white;
        color: #636363;
        border: var(--border-width) solid #636363;
        border-radius: var(--border-radius);
        padding: 0px 8px 0px 8px;
        outline: none;
        font-family: 'IBM Plex Sans', sans-serif;
        caret-color: var(--control-accent-hover);
      }
      input:hover {
        background-color: var(--control-surface-hover);
        color: var(--control-accent-hover);
        border: var(--border-width) solid var(--control-accent-hover);
      }
      input:focus {
        background-color: white;
        color: #636363;
        border: var(--border-width) solid var(--control-accent-hover);
      }
      input:invalid {
        background-color: white;
        color: var(--control-accent-danger);
        border: var(--border-width) solid var(--control-accent-danger);
        caret-color: var(--control-accent-danger);
      }
      input:hover:invalid {
        background-color: var(--control-surface-danger);
        color: var(--control-accent-danger);
        border: var(--border-width) solid var(--control-accent-danger);
      }
      input:focus:invalid {
        background-color: white;
        color: var(--control-accent-danger);
        border: var(--border-width) solid var(--control-accent-danger);
      }
      input:active:invalid {
        background-color: var(--control-surface-active);
        color: var(--control-accent-active);
        border: var(--border-width) solid var(--control-accent-active);
      }
      input:active {
        background-color: var(--control-surface-active);
        color: var(--control-accent-active);
        border: var(--border-width) solid var(--control-accent-active);
        caret-color: var(--control-accent-active);
      }
      input:disabled {
        background-color: var(--control-surface-disabled);
        color: var(--control-accent-disabled);
        border: var(--border-width) solid var(--control-accent-disabled);
      }

      input::placeholder {
        transition-property: color;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        color: var(--control-accent-disabled)
      }

      input:hover::placeholder {
        color: var(--control-accent-hover)
      }
      
      input:focus::placeholder {
        color: var(--control-accent-disabled)
      }

      input:invalid::placeholder {
        color: var(--control-accent-danger)
      }
      
      input:active:invalid::placeholder {
        color: var(--control-accent-active)
      }

      input:disabled::placeholder {
        color: var(--control-accent-disabled)
      }

      #container {
        position: relative;
        height: auto;
        width: 100%;
      }

      input ~ .underline {
          position: absolute;
          left: 8px;
          right: 8px;
          bottom: 6px;
          height: 1px;
          background-color: #636363;
      }

      input:hover ~ .underline {
          background-color: var(--control-accent-hover);
      }
      
      input:focus ~ .underline {
          background-color: var(--control-accent-hover);
      }
      
      input:invalid ~ .underline {
          background-color: var(--control-accent-danger);
      }

      input:active ~ .underline {
          background-color: var(--control-accent-active);
      }

      input:disabled ~ .underline {
          background-color: var(--control-accent-disabled);
      }

    `;
  }


  render(){
    return html`
      <div id="container">
        <input id="control" type="text"
            .autocomplete="${this.autocomplete}"
            ?autofocus="${this.autofocus}"
            .defaultValue="${this.defaultValue}"
            ?disabled="${this.disabled}"
            .maxLength="${this.maxLength}"
            .name="${this.name}"
            .pattern="${this.pattern}"
            .placeholder="${this.placeholder}"
            .readOnly="${this.readOnly}"
            ?required="${this.required}"
            .size="${this.size}"
            .value="${this.value}">
        <div class="underline"></div>
      </div>
    `;
  }
}