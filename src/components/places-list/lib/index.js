import { sortingOrder } from "../../../const";

export const sortByObjectOrder = sortingOrder.reduce((obj, item, index) => {
  return {
    ...obj,
    [item]: index,
  };
}, {});

export const groupPlaces = (places) => {
  let groupedPlaces = Object.groupBy(places, ({ category }) => category);

  groupedPlaces = Array.from(Object.entries(groupedPlaces), (el) => {
    return { category: el[0], places: el[1] };
  });

  const sortedPlaces = groupedPlaces.sort(
    (a, b) => sortByObjectOrder[a.category] - sortByObjectOrder[b.category],
  );

  return sortedPlaces;
}
