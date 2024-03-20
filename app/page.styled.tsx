'use client';

import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  gap: 20px;

  @media (min-width: 1024px) {
    flex-direction: column-reverse;
    gap: 50px;
  }
`;
