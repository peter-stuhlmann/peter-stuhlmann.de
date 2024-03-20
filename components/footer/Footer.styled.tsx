'use client';

import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  div {
    padding: 10px 20px;

    a {
      text-decoration: none;
      color: inherit;
      padding: 10px 20px;
    }
  }

  ul {
    margin: 15px 0;
    padding: 0;
    list-style-type: none;
    display: flex;

    a {
      text-decoration: none;
      color: inherit;
      padding: 10px 20px;
    }
  }
`;
