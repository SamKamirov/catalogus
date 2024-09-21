import { createElement } from "../render";

export default class AbstractView {
  #element = null;

  constructor() {
    if (new.target === AbstractView) {
      throw new Error("Cant create another abstract view");
    }
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    throw new Error("Abstract method not implemented");
  }

  #removeElement() {
    this.#element = null;
  }
}
