import dayjs from "dayjs";
import AbstractView from "./abstract-view";

const renderAddresses = (addresses) => {
  if (Array.isArray(addresses)) {
    return addresses
      .map((item) => {
        return `<p class="place__address">${item}</p>`;
      })
      .join("");
  }

  return `<p class="place__address">${addresses}</p>`;
};

function createPlaceTemplate(place) {
  const { category, name, address, id, photo } = place;

  return `<li class="place place__card">
        <a class="place__link">
          <span class="place-card__image--wrapper">
          <img src="${photo}" alt="image" class="place__image" />
          </span>
          <h3 class="place__title">${name}</h3>
          ${renderAddresses(address)}
        </a>
      </li>`;
}

export default class PlaceCardView extends AbstractView {
  #place = null;

  constructor({ place }) {
    super();
    this.#place = place;
    this.#renderPlaceStatus();
  }

  get template() {
    return createPlaceTemplate(this.#place);
  }

  #renderPlaceStatus() {
    const today = dayjs().format("ddd");
    const placeWeekTime = this.#place.weekTime[today];
    const currentHour = dayjs().format("HH");
    const placeCardImageWrapper = this.element.querySelector(
      ".place-card__image--wrapper",
    );

    if (placeWeekTime?.startWork) {
      const placeEndWorkHour =
        placeWeekTime.endWork[0] !== 0
          ? placeWeekTime.endWork.slice(0, 2)
          : placeWeekTime.endWork[1];

      if (Number(placeEndWorkHour) < 12 && Number(currentHour) <= 24) {
        placeCardImageWrapper.setAttribute("data-before", "Открыто");
        this.element.classList.add("place__card--closed");
        return;
      }

      if (Number(currentHour) >= Number(placeEndWorkHour)) {
        placeCardImageWrapper.setAttribute("data-before", "Закрыто");
        this.element.classList.add("place__card--closed");
        return;
      }

      placeCardImageWrapper.setAttribute(
        "data-before",
        `Открыто до ${placeWeekTime.endWork}`,
      );
      this.element.classList.add("place__card--opened");
      return;
    }

    if (placeWeekTime?.length > 0) {
      if (placeWeekTime.includes("Закрыто")) {
        placeCardImageWrapper.setAttribute("data-before", "Закрыто");
        this.element.classList.add("place__card--closed");
        return;
      }

      if (placeWeekTime.includes("Круглосуточно")) {
        placeCardImageWrapper.setAttribute("data-before", "Открыто");
        this.element.classList.add("place__card--opened");
        return;
      }
    }
  }
}
