import { render } from "../render";
import PlaceTitleView from "../view/place-title-view";
import PlacesListView from "../view/places-list-view";
import PlacesView from "../view/places-view";
import PlaceCardPresenter from "./place-card-presenter";

const DATA_ATTRIBUTE = "data-name";

export default class PlacesPresenter {
  #places = null;

  #mainComponent = null;
  #placesListComponent = null;
  #placesView = null;
  #categoryComponent = null;
  #filtersElement = null;

  #handlePlaceClick = null;

  constructor({ mainComponent, places, onClick }) {
    this.#placesView = new PlacesView();
    this.#mainComponent = mainComponent;
    this.#places = places;
    this.#handlePlaceClick = onClick;
    this.#filtersElement = document.querySelector(".filters");
  }

  init() {
    render(this.#placesView, this.#mainComponent);
    this.#renderPlacesGroups(this.#places);

    const categoryHeaders = document.querySelectorAll(".places-title");
    const categoryFiltersElements = document.querySelectorAll(".filters__item");

    window.addEventListener("scroll", () =>
      this.#onBodyScroll(categoryHeaders, categoryFiltersElements),
    );
  }

  #removeFilterStyles() {
    document
      .querySelectorAll(".filters__item")
      .forEach((item) => item.classList.remove("filters__item--scrolled"));
  }

  #onBodyScroll(headers, filtersElements) {
    this.#removeFilterStyles();

    if (!headers) return;

    const headersValues = Object.values(headers).filter(
      (item) => item.getBoundingClientRect().y <= 100 && item,
    );

    if (headersValues.length === 8) return;

    if (
      Object.values(filtersElements).some(
        (item) => !item.hasAttribute(DATA_ATTRIBUTE),
      )
    )
      return;

    if (!headersValues[headersValues.length - 1]) return;

    const currentScrolledCategory =
      headersValues[headersValues.length - 1].getAttribute(DATA_ATTRIBUTE);
    const filtersElementsValues = Object.values(filtersElements);
    const currentFilter = filtersElementsValues.find(
      (item) => item.getAttribute(DATA_ATTRIBUTE) === currentScrolledCategory,
    );

    if (!currentFilter) return;

    currentFilter.classList.add("filters__item--scrolled");

    this.#scrollToFilter(currentFilter);
  }

  #scrollToFilter(filter, filtersValues) {
    if (!filter) return;
    filter.scrollIntoView();
  }

  #renderPlacesGroups(places) {
    places.map((place) => this.#renderPlaceGroup(place));
  }

  #renderPlaceGroup(place) {
    this.#categoryComponent = new PlaceTitleView({ place: place });
    this.#placesListComponent = new PlacesListView();

    render(this.#categoryComponent, this.#placesView.element);
    render(this.#placesListComponent, this.#placesView.element);

    this.#renderPlacesCards(place.places);
  }

  #renderPlacesCards(places) {
    places.map((place) => this.#renderPlaceCard(place));
  }

  #renderPlaceCard(place) {
    const placePresenter = new PlaceCardPresenter({
      placeListContainer: this.#placesListComponent.element,
      onClick: this.#handlePlaceClick,
    });

    placePresenter.init(place);

    window.removeEventListener("scroll", this.#onBodyScroll());
  }
}
