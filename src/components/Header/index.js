import React from 'react';

import PropTypes from 'prop-types';

import { ReactComponent as Bb8 } from '~/assets/bb8.svg';
import { ReactComponent as StarWars } from '~/assets/logo.svg';
import Theme from '~/components/Theme';

import { Container, Header, Logo } from './styles';

export default function HeaderComponents({ toggleTheme }) {
  return (
    <Container>
      <Header>
        <Logo>
          <StarWars className="logo" />
          <Bb8 className="bb8" />
        </Logo>
        <Theme setTheme={toggleTheme} />
      </Header>
    </Container>
  );
}

HeaderComponents.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
