import react from "react";
import {
  StyledNav,
  Header1,
  AuthPanel,
  NavContainer,
} from "../styled-components/StyledNav";
import { SignupButton, LoginButton } from "../styled-components/Buttons";

export default function Navbar() {
  return (
    <StyledNav>
      <NavContainer>
        <Header1 to="/">MurrBlog</Header1>
        <AuthPanel>
          <SignupButton>Sign up</SignupButton>
          <LoginButton>Log in</LoginButton>
        </AuthPanel>
      </NavContainer>
    </StyledNav>
  );
}
