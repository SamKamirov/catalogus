import AbstractView from "./view/abstract-view";

function createElement(template) {
  const newElement = document.createElement("div"); // 1
  newElement.innerHTML = template; // 2

  return newElement.firstElementChild; // 3
}

function render(component, container, place = "beforeend") {
  if (!(component instanceof AbstractView)) {
    throw new Error("Can render only components");
  }

  if (container === null) {
    throw new Error("Container element doesn't exist");
  }

  container.insertAdjacentElement(place, component.element);
}

export { createElement, render };
