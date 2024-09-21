import React, { useEffect } from "react";
import { sortingOrder } from "../../const";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/action";
import { getFilter } from "../../store/app-data/app-data-selectors";
import { useSelector } from "react-redux";

const Filter = ({ item, filter, onFilterClick }) => {
  const dispatch = useDispatch()

  const filterClickHandler = () => {
    dispatch(setFilter(item))
    onFilterClick(item)
  }

  return (
    <li className={`filters__item ${filter === item && 'filters__item--scrolled'}`} onClick={filterClickHandler}>
      <a className="filters__item__text">{item}</a>
    </li>
  )
}


export const Filters = () => {
  const filter = useSelector(getFilter)

  let placesTitle;
  let placesTitlesArray;

  const onFilterClick = (filter) => {
    const titleToScroll = placesTitlesArray.find((item) => item.textContent === filter)

    if (titleToScroll) {
      titleToScroll.scrollIntoView({ behavior: 'smooth' })
      window.scrollBy({ top: titleToScroll.getBoundingClientRect().y - 127, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    placesTitle = document.querySelectorAll('.places-title')
    placesTitlesArray = Array.from(placesTitle)
  })

  return (
    <ul className="filters">
      {sortingOrder.map((item, index) => <Filter item={item} filter={filter} onFilterClick={onFilterClick} key={index} />)}
    </ul>
  )
}
