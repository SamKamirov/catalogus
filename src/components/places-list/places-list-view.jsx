import React, { useEffect } from 'react';
import { getPlaces } from '../../vendor/places';
import { groupPlaces } from './lib';
import { PlacesGroupView } from '../places-group/places-group-view';
import { useSelector } from 'react-redux';
import { getFilter } from '../../store/app-data/app-data-selectors';

const searchPlaces = ({ places, query }) => {
  const results = [];
  const lowerCaseQuery = query && query.toLowerCase();

  if (!lowerCaseQuery) return groupPlaces(places);

  const categoryResult = [...places].filter((place) => {
    if (results.includes(place)) return;
    return place.category.toLowerCase().includes(lowerCaseQuery);
  });

  if (categoryResult) results.push(...categoryResult);

  const nameResult = [...places].filter((place) => {
    if (results.includes(place)) return;
    return place.name.toLowerCase().includes(lowerCaseQuery);
  });

  if (nameResult) results.push(...nameResult);

  const addressResult = [...places].filter((place) => {
    if (results.includes(place)) return;
    return place.address.toString().toLowerCase().includes(lowerCaseQuery);
  });

  if (addressResult) results.push(...addressResult);

  if (!results) return groupPlaces(places);

  return groupPlaces(results);
};

export const PlacesListView = ({ searchQuery }) => {
  const filter = useSelector(getFilter);

  const places = getPlaces();
  const searchedPlaces = searchPlaces({ places: places, query: searchQuery });

  useEffect(() => {
    if (!filter) return;
  }, []);

  return (
    <article className="places">
      {searchedPlaces.map((item, index) => (
        <PlacesGroupView placeGroup={item} key={index} />
      ))}
    </article>
  );
};
