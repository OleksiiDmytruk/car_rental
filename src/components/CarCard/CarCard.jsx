import { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "../Modal/Modal";
import {
  Img,
  TitleWrap,
  Title,
  AkcentTitle,
  InfoWrap,
  Text,
  Btn,
} from "./CarCard.styled";

export const CarCard = ({ car }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Img src={car.img || car.photoLink} alt={car.make} />
      <TitleWrap>
        <Title>
          {car.make} <AkcentTitle>{car.model},</AkcentTitle> {car.year}
        </Title>
        <Title>{car.rentalPrice}</Title>
      </TitleWrap>
      <InfoWrap>
        <Text>{car.address.split(",")[1]}</Text>
        <Text>{car.address.split(",").pop()}</Text>
        <Text>{car.rentalCompany}</Text>
      </InfoWrap>
      <InfoWrap>
        <Text>{car.type}</Text>
        <Text>{car.model}</Text>
        <Text>{car.mileage}</Text>
        <Text>{car.accessories[0]}</Text>
      </InfoWrap>
      <Btn type="button" onClick={() => setShowModal(true)}>
        Learn more
      </Btn>
      {showModal &&
        createPortal(
          <Modal car={car} onClose={() => setShowModal(false)} />,
          document.body
        )}
    </div>
  );
};
