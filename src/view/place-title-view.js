import AbstractView from "./abstract-view";

function createPlaceCategoryTitleTemplate(place) {
  return `<h2 class="places-title" id="${place.category}" data-name="${place.category}">${place.category}</h2>`;
}

export default class PlaceTitleView extends AbstractView {
  #place = null;

  constructor({ place }) {
    super();
    this.#place = place;
  }

  get template() {
    return createPlaceCategoryTitleTemplate(this.#place);
  }
}
