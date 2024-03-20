'use client';

import styled from 'styled-components';

export const Container = styled.header`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;
    font-size: 28px;
    text-align: center;

    @media (min-width: 480px) {
      font-size: 35px;
    }
  }

  div {
    font-size: 18px;
    text-align: center;

    @media (min-width: 480px) {
      font-size: 20px;
    }
  }
`;
