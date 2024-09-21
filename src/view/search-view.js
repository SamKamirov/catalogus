import { sortingOrder } from "../const.js";
import AbstractView from "./abstract-view.js";

const renderFilters = () => {
  return sortingOrder
    .map((item) => {
      return `<li class="filters__item" data-name='${item}'>
          <a class="filters__item__text" data-name='${item}'>${item}</a>
        </li>`;
    })
    .join("");
};

function getSearchTemplate() {
  return `<article class="search background-wrapper">
      <div class="search__info">
        <h1 class="search__title">Где поесть?</h1>
        <p class="search__text">
          Заботливо собрали данные для вас<br>и актуализируем их каждый месяц
        </p>
      </div>
      <span class="search__input--wrapper">
        <input
          type="text"
          name="search__input"
          class="search__input"
          placeholder="Введи, что ищешь"
        />
      </span>
      <ul class="filters">
        ${renderFilters()}
      </ul>
    </article>`;
}

export default class SearchView extends AbstractView {
  #handleSearchInputChange = null;

  constructor({ onSearchChange }) {
    super();
    this.#handleSearchInputChange = onSearchChange;
    this.#addListeners();
  }

  get template() {
    return getSearchTemplate();
  }

  #searchInputChangeHandler(evt) {
    evt.preventDefault();
    this.#handleSearchInputChange(evt.target.value.toLowerCase());
  }

  #onFilterClick(evt) {
    const selectedFilter = evt.target;

    const sectionToScroll = Object.values(
      document.querySelectorAll(".places-title"),
    ).filter((item) => item.id === selectedFilter.textContent)[0];

    sectionToScroll.scrollIntoView({ behavior: "instant" });
  }

  #addFilterClickListener() {
    const filters = this.element.querySelectorAll(".filters__item");
    filters.forEach((filter) =>
      filter.addEventListener("click", this.#onFilterClick),
    );
  }

  #addListeners() {
    this.element
      .querySelector(".search__input")
      .addEventListener("input", (e) => this.#searchInputChangeHandler(e));
    this.#addFilterClickListener();
  }
}
