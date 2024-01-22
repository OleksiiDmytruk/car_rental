import { Outlet } from "react-router-dom";
import { Container, StyledLink, Nav, Header } from "./Layout.styled";
import { Suspense } from "react";
import { Loader } from "../Loader/Loadeer";

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <StyledLink to="/" end>
            OpenRoad
          </StyledLink>
          <StyledLink to="/catalog">Catalog</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
