import React from "react";
import { PlaceCardView } from "../place-card/place-card-view";

export const PlacesGroupView = ({ placeGroup }) => {
  const { category, places } = placeGroup

  return (
    <>
      <h2 className="places-title" id={category} data-name={category}>{category}</h2>
      <ul className="places-list">
        {places.map((place, index) => <PlaceCardView place={place} key={index} />)}
      </ul>
    </>
  )
}
