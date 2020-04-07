import { rgba, darken } from 'polished';
import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 60px;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => darken(0.05, theme.colors.secundary)};
  background: ${({ theme }) => rgba(theme.colors.secundary, 0.8)};
  border-radius: 8px;
  padding: 0 24px;
`;
