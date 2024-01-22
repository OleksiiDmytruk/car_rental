import { CarCard } from "../CarCard/CarCard";
import { List, Item } from "./carsList.styled";

export const CarsList = ({ rentalCars }) => {
  return (
    <List>
      {rentalCars.map((car) => (
        <Item key={car.id}>
          <CarCard car={car} />
        </Item>
      ))}
    </List>
  );
};
