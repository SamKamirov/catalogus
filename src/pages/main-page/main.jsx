import React, { Fragment, useEffect, useState } from 'react';
import { Search } from '../../components/search-view';
import { PlacesListView } from '../../components/places-list/places-list-view';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/action';

const checkIsSearchScrolled = (setSearchIsScrolled) =>
  window.scrollY >= 238
    ? setSearchIsScrolled(true)
    : setSearchIsScrolled(false);

export const Main = () => {
  const dispatch = useDispatch();
  const [searchIsScrolled, setSearchIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState();
  const [selectedFilterToScoll, setSelectedFilter] = useState(null);

  const setFilterOnScroll = (placesTitle, filters) => {
    const headersValues = Object.values(placesTitle);
    const scrolledHeader = headersValues
      .filter((item) => item.getBoundingClientRect().y <= 130)
      .pop();

    const selectedFilter = Object.values(filters).find((item) =>
      item.classList.contains('filters__item--scrolled'),
    );

    if (window.scrollY < 238 && !searchIsScrolled) {
      dispatch(setFilter(null));
      return;
    }

    if (!scrolledHeader) return;

    dispatch(setFilter(scrolledHeader.textContent));

    setSelectedFilter(selectedFilter);

    if (!selectedFilter & !selectedFilterToScoll) return;

    if (selectedFilter === selectedFilterToScoll) return;

    selectedFilter.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  };

  const onBodyScroll = (placesTitle, filters) => {
    checkIsSearchScrolled(setSearchIsScrolled);
    setFilterOnScroll(placesTitle, filters);
  };

  useEffect(() => {
    checkIsSearchScrolled(setSearchIsScrolled);

    const placesTitle = document.querySelectorAll('.places-title');
    const filters = document.querySelectorAll('.filters__item');
    window.addEventListener('scroll', () => onBodyScroll(placesTitle, filters));
  }, []);

  return (
    <Fragment>
      <Search
        isSearchScrolled={searchIsScrolled}
        setSearchQuery={setSearchQuery}
      />
      <PlacesListView searchQuery={searchQuery} />
    </Fragment>
  );
};
