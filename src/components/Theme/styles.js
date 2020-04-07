import { FiSun, FiMoon } from 'react-icons/fi';

import styled from 'styled-components';

export const Sun = styled(FiSun)`
  cursor: pointer;
  z-index: 1;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Moon = styled(FiMoon)`
  cursor: pointer;
  z-index: 1;

  &:hover {
    filter: brightness(0.8);
  }
`;
