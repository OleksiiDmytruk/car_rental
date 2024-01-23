import { useEffect } from "react";
import {
  Backdrop,
  Img,
  ModalStyle,
  Title,
  AkcentTitle,
  Descriptions,
  SubTitle,
} from "./Modal.styled";
import { InfoWrap, Text } from "../CarCard/CarCard.styled";

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
        <Img src={car.img} alt={car.make} />
        <Title>
          {car.make} <AkcentTitle>{car.model}</AkcentTitle>, {car.year}
        </Title>
        <div>
          <InfoWrap>
            <Text>{car.address.split(",")[1]}</Text>
            <Text>{car.address.split(",").pop()}</Text>
            <Text>Id: {car.id}</Text>
            <Text>Year: {car.year}</Text>
            <Text>Type: {car.type}</Text>
          </InfoWrap>
          <InfoWrap>
            <Text>Fuel Consumption: {car.fuelConsumption}</Text>
            <Text>Engine Size: {car.engineSize}</Text>
          </InfoWrap>
          <Descriptions>{car.description}</Descriptions>
          <SubTitle>Accessories and functionalities:</SubTitle>
          <InfoWrap>
            {car.accessories.map((el, idx) => (
              <Text key={idx}>{el}</Text>
            ))}
          </InfoWrap>
          <InfoWrap>
            {car.functionalities.map((el, idx) => (
              <Text key={idx}>{el}</Text>
            ))}
          </InfoWrap>
          <SubTitle>Rental Conditions:</SubTitle>
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
