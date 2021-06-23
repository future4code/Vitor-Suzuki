import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: linear-gradient(#ff4500, #e3e9f0bd);
    z-index: -1000;
  }
`

export const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  gap: 100px;
  width: 100%;
  height: auto;
`

export const ErrorImage = styled.img`

  width: 64vw;
  max-width: 450px;
`