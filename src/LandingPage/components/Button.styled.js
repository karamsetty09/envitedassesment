import styled from "styled-components";

export const Button = styled.button`
  width: 320px;
  height: 55px;

  background: linear-gradient(90deg, #8456ec 3.25%, #e87bf8 100%);
  border-radius: 10px;
  color: ${({ color }) => color || "#333"};
`;
