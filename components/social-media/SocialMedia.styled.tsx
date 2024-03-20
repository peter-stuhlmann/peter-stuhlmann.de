'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  a {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }

    svg {
      width: 30px;
      fill: rgba(0, 0, 0, 0.7);
    }
  }
`;
