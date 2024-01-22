import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 50px;
  column-gap: 29px;
  margin-bottom: 100px;
`;

export const Item = styled.li`
  width: 275px;
  flex-direction: column;
  align-items: flex-start;
`;

export const TextButton = styled.button`
  border: none;
  background: transparent;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  padding: 4px 12px;
  text-decoration-line: underline;
  margin-bottom: 150px;

  &:hover,
  :focus {
    color: #0b44cd;
  }
`;
