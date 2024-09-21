const updateState = (page, url) => {
  history.pushState(page, "", url);
  console.log(history, url);
};

export { updateState };
