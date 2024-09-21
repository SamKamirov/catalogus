import AbstractView from "./abstract-view";

const getNoPlacesViewTemplate = () => {
  return `<div>Sorry, no task available</div>`;
};

export default class NoPlacesView extends AbstractView {
  get element() {
    return getNoPlacesViewTemplate();
  }
}
