import { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "../Modal/Modal";

export const CarCard = ({ car }) => {
  const [showModal, setShowModal] = useState(false);
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
      <button type="button" onClick={() => setShowModal(true)}>
        Learn more
      </button>
      {showModal &&
        createPortal(
          <Modal car={car} onClose={() => setShowModal(false)} />,
          document.body
        )}
    </div>
  );
};
