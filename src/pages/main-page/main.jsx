import React, { Fragment, useEffect, useState } from "react";
import { Search } from "../../components/search-view";
import { PlacesListView } from "../../components/places-list/places-list-view";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/action";

const checkIsSearchScrolled = (setSearchIsScrolled) => window.scrollY >= 238 ? setSearchIsScrolled(true) : setSearchIsScrolled(false);

export const Main = () => {
  const dispatch = useDispatch()
  const [searchIsScrolled, setSearchIsScrolled] = useState(false);

  const setFilterOnScroll = (placesTitle) => {
    const headersValues = Object.values(placesTitle)
    const scrolledHeader = headersValues.filter((item) => item.getBoundingClientRect().y <= 130).pop()

    if (window.scrollY < 238 && !searchIsScrolled) {
      dispatch(setFilter(null))
      return
    }

    if (!scrolledHeader) return

    dispatch(setFilter(scrolledHeader.textContent))
    return
  }

  const onBodyScroll = (evt, placesTitle) => {
    checkIsSearchScrolled(setSearchIsScrolled)
    setFilterOnScroll(placesTitle)
  }

  useEffect(() => {
    checkIsSearchScrolled(setSearchIsScrolled)

    const placesTitle = document.querySelectorAll('.places-title')
    window.addEventListener('scroll', (evt) => onBodyScroll(evt, placesTitle))
  }, [])

  return (
    <Fragment >
      <Search isSearchScrolled={searchIsScrolled} />
      <PlacesListView />
    </Fragment>
  )
};
