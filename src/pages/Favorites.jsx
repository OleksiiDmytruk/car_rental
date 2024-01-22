import { useSelector } from "react-redux";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { CarsList } from "../components/carsList/carsList";
import { selectFavorites } from "../redux/selectors";

export const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <SearchBar />
      <CarsList rentalCars={favorites} />
    </>
  );
};

export default Favorites;
