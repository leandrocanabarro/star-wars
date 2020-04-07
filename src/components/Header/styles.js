import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 32px auto;
  z-index: 1;

  @media screen and (max-width: 1000px) {
    padding: 0 15px;
  }
`;

export const Header = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    display: inline-block;
    width: 10rem;
    fill: ${({ theme }) => theme.colors.primary};
  }

  .bb8 {
    display: inline-block;
    height: 6rem;
    fill: ${({ theme }) => theme.colors.primary};
  }
`;
