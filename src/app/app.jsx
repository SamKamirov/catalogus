import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "../pages/main-page/main";
import { NotFoundPage } from "../pages/not-found/not-found-page";
import { PlacePage } from "../pages/place-page/place-page";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/place/:id' element={<PlacePage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
