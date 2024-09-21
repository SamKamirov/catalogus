import React, { useEffect } from "react";
import { getPlaces } from "../../vendor/places";
import { groupPlaces } from "./lib";
import { PlacesGroupView } from "../places-group/places-group-view";
import { useSelector } from "react-redux";
import { getFilter } from "../../store/app-data/app-data-selectors";


export const PlacesListView = () => {
  const filter = useSelector(getFilter)

  const places = getPlaces()

  const groupedPlaces = groupPlaces(places)

  useEffect(() => {
    if (!filter) return
  }, [])


  return (
    <article className="places">
      {groupedPlaces.map((item, index) => <PlacesGroupView placeGroup={item} key={index} />)}
    </article>
  )
}
