import AbstractView from "./abstract-view";

const createPlacesTemplate = () => {
  return `<article class="places"></article>`;
};

export default class PlacesView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createPlacesTemplate();
  }
}
