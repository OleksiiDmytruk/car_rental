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
        <div>
          <p>{car.address}</p>
          <div></div>
          <p>{car.address}</p>
          <div></div>
          <p>{car.rentalCompany}</p>
        </div>
        <div>
          <p>{car.type}</p>
          <div></div>
          <p>{car.model}</p>
          <div></div>
          <p>{car.mileage}</p>
          <div></div>
          <p>{car.accessories[0]}</p>
        </div>
      </div>
      <button>Learn more</button>
    </div>
  );
};
