import AppPresenter from "./presenter/app-presenter";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(".main");
  const body = document.querySelector(".body");

  const appPresenter = new AppPresenter(root, body);

  appPresenter.init();
});
