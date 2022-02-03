import styled from "styled-components";

const Button = styled.button`
  background: #7dfc71;
  border-radius: 5px;
  color: black;
  height: 35px;
  width: 128px;
  font-size: 16px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const SignupButton = styled(Button)`
  height: 50%;
  width: 40%;
  max-width: 128px;
`;

export const LoginButton = styled(SignupButton)`
  background: #8db7fc;
`;
