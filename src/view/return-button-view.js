import { updateState } from "../history-api";
import AbstractView from "./abstract-view";

function createReturnButtonTemplate() {
  return `<span class="return-button__wrapper">
    <button type="button" class="return-button">
      <img src="./images/back-button.png" class="return-button__icon">
    </button>
  </span>`;
}

export default class ReturnButtonView extends AbstractView {
  #handleReturnBtnClick = null;
  #placeID = null;

  constructor({ onClick, placeID }) {
    super();
    this.#handleReturnBtnClick = onClick;
    this.#placeID = placeID;

    this.element.querySelector("button").addEventListener("click", () => {
      this.#returnBtnClickHandler();
      // history.back();
      // updateState(0, "/");
    });
  }

  get template() {
    return createReturnButtonTemplate();
  }

  #returnBtnClickHandler() {
    this.#handleReturnBtnClick();
    document.querySelector(".search__input").value = "";
  }
}
