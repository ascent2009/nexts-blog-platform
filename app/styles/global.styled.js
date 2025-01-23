import styled from "styled-components";
// import { Inter } from 'next/font/google';

export const BodyContainer = styled.body`
  margin: 0 auto;
  background-color: ${props => props.mode ? "#000000" : "#e9edf5"};
  box-sizing: border-box;
  @font-face {
    font-family: 'Inter';
    font-weight: 300;
    font-style: normal;
  }
  font-family: Inter, sans-serif;
  --webkit-font-smoothing: antialiased;
  @media (max-width: 768px) {
    width: fit-content;
    margin: 0;
  };
  
`



