import { sortByObjectOrder } from "../const";
import { updateState } from "../history-api";
import PlacesModel from "../model/places-model";
import { render } from "../render";
import HeaderView from "../view/header-view";
import NoPlacesView from "../view/no-places-view";
import PlaceView from "../view/place-view";
import ReturnButtonView from "../view/return-button-view";
import SearchView from "../view/search-view";
import PlacesPresenter from "./places-presenter";

export default class AppPresenter {
  siteMainElement = null;
  siteBodyElement = null;

  #searchView = null;
  #returnButtonView = null;

  #placesPresenter = null;

  #headerComponent = null;
  #placeComponent = null;
  #noPlacesComponent = null;

  #placesModel = new PlacesModel();
  #places = null;

  constructor(appContainer, body) {
    this.siteMainElement = appContainer;
    this.siteBodyElement = body;

    this.#searchView = new SearchView({
      onSearchChange: this.#handleSearchInputChange,
    });

    this.#headerComponent = new HeaderView();
  }

  get places() {
    const places = [...this.#placesModel.places];
    return places;
  }

  #groupPlaces(places) {
    let groupedPlaces = Object.groupBy(places, ({ category }) => category);

    groupedPlaces = Array.from(Object.entries(groupedPlaces), (el) => {
      return { category: el[0], places: el[1] };
    });

    const sortedPlaces = groupedPlaces.sort(
      (a, b) => sortByObjectOrder[a.category] - sortByObjectOrder[b.category],
    );

    return sortedPlaces;
  }

  #popstateEventHandler = (evt) => {
    // console.log(evt.state);
    // if (evt.state.page) {
    //   console.log("to the place");
    //   this.#renderSinglePlace(evt.state.page);
    //   return;
    // }
    //
    // this.init();
  };

  #onHeaderScroll = () => {
    if (window.scrollY > 238) {
      this.#addScrollStyles();
      return;
    }

    this.#removeScrollStyles();
  };

  #addScrollStyles() {
    this.siteMainElement
      .querySelector(".search > .search__info")
      .classList.add("search__info--hidden");
    this.siteMainElement
      .querySelector(".places")
      .classList.add("places--scrolled");
    this.siteMainElement
      .querySelector(".search")
      .classList.add("search--scrolled");
    this.siteMainElement.classList.add("main--scrolled");
  }

  #removeScrollStyles() {
    this.siteMainElement
      .querySelector(".search > .search__info")
      .classList.remove("search__info--hidden");
    this.siteMainElement
      .querySelector(".places")
      .classList.remove("places--scrolled");
    this.siteMainElement
      .querySelector(".search")
      .classList.remove("search--scrolled");
    this.siteMainElement.classList.remove("main--scrolled");
  }

  #onWindowLoad = (evt) => {
    if (history.state && history.state.page != {}) {
      console.log(history.state.page);
      this.#renderSinglePlace(history.state.page);
      return;
    }

    this.init();
  };

  init = () => {
    this.#clearHeaderContainer();
    this.#clearMainContainer();

    window.addEventListener("popstate", this.#popstateEventHandler);
    window.addEventListener("load", (evt) => this.#onWindowLoad(evt));
    window.addEventListener("scroll", this.#onHeaderScroll);

    render(this.#headerComponent, this.siteMainElement, "beforebegin");
    render(this.#searchView, this.siteMainElement);

    this.#places = this.places;

    if (!this.#places.length) {
      this.#renderNoPlaces();
      return;
    }

    const groupedPlaces = this.#groupPlaces(this.#places);

    this.#placesPresenter = new PlacesPresenter({
      mainComponent: this.siteMainElement,
      places: groupedPlaces,
      onClick: this.#renderSinglePlace,
    });

    this.#placesPresenter.init();

    document.addEventListener("DOMContentLoaded", () => {
      this.#removeScrollStyles();
    });
  };

  #renderNoPlaces() {
    this.#noPlacesComponent = new NoPlacesView();
    render(this.#noPlacesComponent, this.siteMainElement);
  }

  #clearPlacesList() {
    this.siteMainElement.querySelector(".places").remove();
  }

  #clearMainContainer() {
    this.siteMainElement.innerHTML = "";
  }

  #clearHeaderContainer() {
    this.#headerComponent.element.innerHTML = "";
  }

  #handleSearchInputChange = (input) => {
    this.#places = this.#searchPlaces(input);
    this.#clearPlacesList();

    this.#placesPresenter = new PlacesPresenter({
      mainComponent: this.siteMainElement,
      places: this.#places,
      onClick: this.#renderSinglePlace,
    });

    this.#placesPresenter.init();
  };

  #searchPlaces = (query) => {
    const results = [];
    const defaultPlaces = this.places;

    if (!query) return this.#groupPlaces(defaultPlaces);
    const categoryResult = defaultPlaces.filter((place) => {
      if (results.includes(place)) return;
      return place.category.toLowerCase().includes(query);
    });

    if (categoryResult) results.push(...categoryResult);

    const nameResult = defaultPlaces.filter((place) => {
      if (results.includes(place)) return;
      return place.name.toLowerCase().includes(query);
    });

    if (nameResult) results.push(...nameResult);

    const addressResult = defaultPlaces.filter((place) => {
      if (results.includes(place)) return;
      return place.address.toString().toLowerCase().includes(query);
    });

    if (addressResult) results.push(...addressResult);

    if (!results) return this.#groupPlaces(defaultPlaces);

    return this.#groupPlaces(results);
  };

  #removeHeaderScrollListeners() {
    window.removeEventListener("scroll", this.#onHeaderScroll);
  }

  #onReturnButtonClick = () => {
    this.init();
    this.#removeScrollStyles();
  };

  #renderSinglePlace = (place) => {
    this.#clearHeaderContainer();
    this.#removeHeaderScrollListeners();

    window.removeEventListener("popstate", this.#popstateEventHandler);

    this.#returnButtonView = new ReturnButtonView({
      onClick: this.#onReturnButtonClick,
      placeID: place.id,
    });
    this.#placeComponent = new PlaceView({ place: place });

    // updateState({ page: place }, `/places/${place.id}`);
    this.#clearMainContainer();

    render(this.#placeComponent, this.siteMainElement);
    render(this.#returnButtonView, this.#headerComponent.element);
  };
}
