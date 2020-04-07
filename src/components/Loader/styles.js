import { FiLoader } from 'react-icons/fi';

import { lighten } from 'polished';
import styled from 'styled-components';

export const Loader = styled(FiLoader)`
  z-index: 20;
  animation: spin 1.5s infinite linear;
  color: ${({ theme }) => lighten(0.1, theme.colors.primary)};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
