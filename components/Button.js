import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => props.theme.buttonColor};
  background-color: ${(props) => props.theme.buttonBgColor};
  font-size: 20px;
  border: none;
  padding: 4px 8px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  padding: 0.5rem 1rem;
`;
