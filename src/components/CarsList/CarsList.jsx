import { CarCard } from "../CarCard/CarCard";

export const CarsList = ({ rentalCars }) => {
  return (
    <ul>
      {rentalCars.map((car) => (
        <li key={car.id}>
          <CarCard car={car} />
        </li>
      ))}
    </ul>
  );
};
