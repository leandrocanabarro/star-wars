import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 32px auto;
  z-index: 1;

  @media only screen and (max-width: 1200px) {
    padding: 0 15px;
  }

  /* @media only screen and (max-width: 900px) {
    padding: 0 15px;
  }

  @media only screen and (max-width: 1200px) {
    padding: 0 15px;
  } */

  @media only screen and (min-width: 1800px) {
    padding: 0;
  }

  .loading {
    position: fixed;
    top: 50%;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .query {
    margin-bottom: 20px;
  }

  .not_found {
    position: fixed;
    top: 50%;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const BoldText = styled.strong`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  li {
    background: ${({ theme }) => lighten(0.1, theme.colors.secundary)};
    padding: 24px;
    border-radius: 4px;
    position: relative;
  }

  li h2 {
    color: ${({ theme }) => lighten(0.1, theme.colors.primary)};
  }

  li p {
    margin-top: 2px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.li`
  background: ${({ theme }) => lighten(0.1, theme.colors.secundary)};
  padding: 24px;
  border-radius: 4px;
  position: relative;

  h2 {
    color: ${({ theme }) => lighten(0.1, theme.colors.primary)};
  }

  p {
    margin-top: 2px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Line = styled.hr`
  margin: 20px 0;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    ${({ theme }) => theme.colors.primary},
    rgba(0, 0, 0, 0)
  );
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;

    &:disabled {
      cursor: default;
      opacity: 0.6;
      filter: grayscale(0.1);
    }
  }
`;
