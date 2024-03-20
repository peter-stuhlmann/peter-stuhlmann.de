'use client';

import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  margin: 50px 0;

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  a {
    position: relative;
    display: flex;
    border-radius: 20px;
    overflow: hidden;
    transition: 0.3s;
    box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.5);
    text-decoration: none;
    color: inherit;

    &:hover {
      box-shadow: 0 0 6px 0px rgba(0, 0, 0, 0.5);
    }

    img {
      object-fit: cover;
      max-width: 100%;
      height: auto;
      aspect-ratio: 16 / 9;
    }

    div {
      position: absolute;
      bottom: 0;
      left: 0;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.75);
      padding: 10px 20px;
      box-sizing: border-box;
      font-size: 20px;
      width: 100%;
      text-align: center;
    }
  }
`;
