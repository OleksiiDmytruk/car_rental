import { Route, Routes, Navigate } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { Toaster } from "react-hot-toast";
import { Layout } from "./Layout/Layout";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Catalog = lazy(() => import("../pages/Catalog"));
const Favorites = lazy(() => import("../pages/Favorites"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <GlobalStyle />
      <Toaster />
    </>
  );
};
