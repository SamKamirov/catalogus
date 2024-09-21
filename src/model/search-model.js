export default class SearchModel {
  #searchQuery = null;

  get query() {
    return this.#searchQuery;
  }

  setQuery(textInput) {
    this.#searchQuery = textInput;
  }
}
