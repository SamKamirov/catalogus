const openedPlaces = document.querySelectorAll(
  ".place__card--opened > .place__link > .place__image--wrapper",
);

const searchPlaces = document.querySelector(".search-places");

openedPlaces[0].setAttribute("data-before", "Открыто до 22:00");
openedPlaces[1].setAttribute("data-before", "Открыто до 21:00");

searchPlaces.addEventListener("mouseover", (e) => {
  console.log("hovered");
});
