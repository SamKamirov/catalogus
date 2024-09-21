import { getPlaces } from "../vendor/places.js";

export default class PlacesModel {
  #places = getPlaces();

  get places() {
    return this.#places;
  }
}
