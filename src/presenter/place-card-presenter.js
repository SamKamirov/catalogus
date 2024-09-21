import { render } from "../render";
import PlaceCardView from "../view/place-card-view";

export default class PlaceCardPresenter {
  #placeComponent = null;
  #place = null;
  #placeListComponent = null;
  #handlePlaceCardClick = null;

  constructor({ placeListContainer, onClick }) {
    this.#placeListComponent = placeListContainer;
    this.#handlePlaceCardClick = onClick;
  }

  init(place) {
    this.#place = place;
    this.#placeComponent = new PlaceCardView({ place: this.#place });

    this.#placeComponent.element.addEventListener(
      "click",
      this.#onCardClickHandler,
    );

    render(this.#placeComponent, this.#placeListComponent);
  }

  #onCardClickHandler = () => {
    this.#handlePlaceCardClick(this.#place);
  };
}
