import AbstractView from "./abstract-view";

function createHeaderTemplate() {
  return `<header class="main-header"></header>`;
}

export default class HeaderView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createHeaderTemplate();
  }
}
