import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectLoading } from "../redux/selectors";
import { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Loader } from "../components/Loader/Loadeer";
import { CarsList } from "../components/carsList/carsList";
import { fetchCars, getMoreCars } from "../redux/operations";
import { TextButton } from "../components/carsList/carsList.styled";

export const Catalog = () => {
  const loading = useSelector(selectLoading);
  const rentalCars = useSelector(selectCars);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const loadMore = () => {
    setPage(page + 1);
    dispatch(getMoreCars(page));
  };
  return (
    <>
      <SearchBar />
      {loading && <Loader />}
      <CarsList rentalCars={rentalCars} />
      <TextButton type="button" onClick={loadMore}>
        Load more
      </TextButton>
    </>
  );
};

export default Catalog;
