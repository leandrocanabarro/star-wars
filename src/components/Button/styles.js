import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: 0;
  font-size: 16px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;
