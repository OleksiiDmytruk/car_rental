import { useEffect } from "react";
import { Backdrop, ModalStyle } from "./Modal.styled";

export const Modal = ({ car, onClose }) => {
  useEffect(() => {
    window.addEventListener("keydown", onEscape);
    return () => {
      window.removeEventListener("keydown", onEscape);
    };
  });
  const onEscape = (evt) => {
    if (evt.code === "Escape") {
      onClose();
    }
  };

  const closeOnBaackdropClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };
  return (
    <Backdrop onClick={closeOnBaackdropClick}>
      <ModalStyle>
        <img src={car.img} alt={car.make} />
        <div>
          <p>
            {car.make} <span>{car.model}</span>, {car.year}
          </p>
        </div>
        <div>
          <div>
            <p>{car.address.split(",")[1]}</p>
            <div></div>
            <p>{car.address.split(",").pop()}</p>
            <div></div>
            <p>Id: {car.id}</p>
            <div></div>
            <p>Year: {car.year}</p>
            <div></div>
            <p>Type: {car.type}</p>
          </div>
          <div>
            <p>Fuel Consumption: {car.fuelConsumption}</p>
            <div></div>
            <p>Engine Size: {car.engineSize}</p>
          </div>
          <p>{car.description}</p>
          <p>Accessories and functionalities:</p>
          <div>
            {car.accessories.map((el, idx) => (
              <p key={idx}>{el}</p>
            ))}
          </div>
          <div>
            {car.functionalities.map((el, idx) => (
              <p key={idx}>{el}</p>
            ))}
          </div>
          <p>Rental Conditions:</p>
          <div>
            {car.rentalConditions.split("\n").map((el, idx) => (
              <div key={idx}>
                <p>{el}</p>
              </div>
            ))}
            <div>
              <p>Mileage: {car.mileage}</p>
            </div>
            <div>
              <p>Price: {car.rentalPrice}</p>
            </div>
          </div>
        </div>
        <button type="button">Rental car</button>
      </ModalStyle>
    </Backdrop>
  );
};
