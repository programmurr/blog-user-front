import styled from "styled-components";

export const StyledNav = styled.nav`
  background: black;
  height: 7%;
  min-height: 60px;
  display: flex;
  justify-content: center;
`;

export const NavContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 958px;
  display: grid;
  grid-template-columns: repeat(3, minmax(20px, 1fr));
`;

export const Header1 = styled.h1`
  color: white;
  grid-column: 2 / 3;
  place-self: center;
`;

export const AuthPanel = styled.div`
  grid-column: 3 / 4;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
