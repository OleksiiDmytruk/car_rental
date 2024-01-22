import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1400px;
  margin: 0 auto;
  padding: 12px 60px;
`;
export const StyledLink = styled(NavLink)`
  color: #3470ff;
  text-transform: capitalize;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;

  &.active,
  :hover {
    color: #0b44cd;
    transform: scale(1.2);
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: start;
  width: 100%;
  height: 48px;
  border-bottom: 4px solid blue;
`;
export const Nav = styled.nav`
  margin-left: 24px;
  display: flex;
  gap: 48px;
`;
