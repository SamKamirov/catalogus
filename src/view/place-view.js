import { render } from "../render";
import AbstractView from "./abstract-view";

const renderInfoTemplate = (info) => {
  return `<p class="info__item-text">${info}</p>`;
};

const renderWorkTime = (workTime) => {
  return workTime
    .map((item) => {
      if (Array.isArray(item) && item.length > 1) {
        return `<p class="info__item-text">${item[0]} ${item[1]}</p>`;
      }

      return `<p class="info__item-text">${item}</p>`;
    })
    .join("");
};

function createPlaceTemplate(place) {
  const { name, address, workTime, website, phone, menu, logo } = place;

  return `<article class="background-wrapper">
          <div class="place">
          <span class="place__image--wrapper">
          <img src="${logo}" class="place-image">
          </span>
          <h1 class="place-title">${name}</h1>
            <ul class="info">
              <li class="info__item">
                <span class="info__item-title-wrapper">
                <img src="./images/map-icon.png" alt="" class="info__item-icon">
                <h3 class="info__item-title">Адрес</h3>
                </span>
                <p class="info__item-text address">${address}</p>
              </li>
              <li class="info__item work-time">
                <span class="info__item-title-wrapper">
                <img src="./images/time.png" alt="" class="info__item-icon">
                <h3 class="info__item-title">Часы работы</h3>
                </span>
                ${renderWorkTime(workTime)}
              </li>
              <li class="info__item contacts">
                <span class="info__item-title-wrapper">
                <img src="./images/phone.png" alt="" class="info__item-icon">
                <h3 class="info__item-title">Контакты</h3>
                </span>
                <ul class="contacts-list"></ul>
                ${website !== null ? `<a class="info__item-text" href='${website}' target="_blank">${website}</a>` : ""}
              </li>
            </ul>
          </div>
        </article>`;
}

export default class PlaceView extends AbstractView {
  #place = null;

  constructor({ place }) {
    super();
    this.#place = place;
    this.#renderContacts();
  }

  get template() {
    return createPlaceTemplate(this.#place);
  }

  #renderContacts() {
    const parentElement = this.element.querySelector(
      ".info__item .contacts-list",
    );

    const contacts = this.#place.phone;

    contacts.forEach((contact) => {
      const contactLiElement = document.createElement("li");
      const contactElement = document.createElement("a");
      contactElement.className = "info__item-text contacts-list__item";
      contactElement.href = `tel: ${contact}`;
      contactElement.textContent = contact;

      contactLiElement.appendChild(contactElement);

      parentElement.appendChild(contactLiElement);
    });
  }
}
