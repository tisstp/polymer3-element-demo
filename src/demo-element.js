import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons.js';
import './icon-toggle.js';

class DemoElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          font-family: sans-serif;
          --icon-toggle-color: lightgrey;
          --icon-toggle-outline-color: black;
          --icon-toggle-pressed-color: red;
        }
      </style>

      <h3>Statically-configured icon-toggles</h3>
      <icon-toggle toggle-icon="star"></icon-toggle>
      <icon-toggle toggle-icon="star" pressed></icon-toggle>

      <h3>Data-bound icon-toggle</h3>
      <!-- use a computed binding to generate the message -->
      <div><span>[[_message(isFav)]]</span></div>
      <!-- curly brackets ({{}}} allow two-way binding -->
      <icon-toggle toggle-icon="favorite" pressed="{{isFav}}"></icon-toggle>

      <h3>Experiment</h3>
      <icon-toggle toggle-icon="add"></icon-toggle>
      <icon-toggle toggle-icon="menu"></icon-toggle>
      <icon-toggle toggle-icon="settings"></icon-toggle>
    `;
  }

  _message(fav) {
    if (fav) {
      return 'You really like me!';
    } else {
      return 'Do you like me?';
    }
  }
}

customElements.define('demo-element', DemoElement);
