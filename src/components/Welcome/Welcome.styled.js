import styled from "styled-components";
import backgraundImg from "../../assets/car.jpg";

export const Hero = styled.section`
  width: 1280px;
  height: 600px;
  position: relative;
  background: url(${backgraundImg}) center/cover no-repeat;
  margin-bottom: 24px;
`;
export const Title = styled.h1`
  position: absolute;
  top: 10%;
  left: 10%;
`;

export const TitleSpan = styled.span`
  display: block;
  color: #ff6b0a;
  text-transform: capitalize;
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  line-height: 1.5;
`;
export const SubTitle = styled.h2`
  margin-left: 60px;
  font-size: 42px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
  color: #0b44cd;
  margin-bottom: 24px;
`;
export const List = styled.ul`
  display: flex;
  gap: 20px;
`;
export const Item = styled.li`
  width: 240px;
  border: solid 2px #0b44cd;
  border-radius: 4px;
  background: #4c70c25d;
  padding: 6px;
`;
