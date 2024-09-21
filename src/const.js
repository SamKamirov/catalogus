const sortingOrder = [
  "Ресторан",
  "Кафе",
  "Кофейня",
  "Пекарня",
  "Готовая еда",
  "Фастфуд",
  "Столовая",
  "Бар",
];

const sortByObjectOrder = sortingOrder.reduce((obj, item, index) => {
  return {
    ...obj,
    [item]: index,
  };
}, {});

export { sortByObjectOrder, sortingOrder };
