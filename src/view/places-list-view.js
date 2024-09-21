import AbstractView from "./abstract-view";

function createPlacesListTemplate() {
  return `<ul class="places-list"></ul>`;
}

export default class PlacesListView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createPlacesListTemplate();
  }
}
