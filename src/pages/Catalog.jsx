import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectLoading } from "../redux/selectors";
import { useEffect } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Loader } from "../components/Loader/Loadeer";
import { CarsList } from "../components/carsList/carsList";
import { fetchCars } from "../redux/operations";
import { TextButton } from "../components/carsList/carsList.styled";

export const Catalog = () => {
  const loading = useSelector(selectLoading);
  const rentalCars = useSelector(selectCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <>
      <SearchBar />
      {loading && <Loader />}
      <CarsList rentalCars={rentalCars} />
      <TextButton type="button">Load more</TextButton>
    </>
  );
};

export default Catalog;
