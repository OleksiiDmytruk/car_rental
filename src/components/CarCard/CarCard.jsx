export const CarCard = ({ car }) => {
  return (
    <div>
      <img src={car.img} alt={car.make} />
      <div>
        <p>
          {car.make} <span>{car.model}</span>, {car.year}
        </p>
        <p>{car.rentalPrice}</p>
      </div>
      <div>
        <p></p>
      </div>
      <button>Learn more</button>
    </div>
  );
};
