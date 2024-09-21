import { getPlaces } from "../vendor/places";

export default class PlacesModel {
  #places = getPlaces();

  get places() {
    return this.#places;
  }
}
