import React, { useContext } from 'react';

import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import Dark from '~/styles/themes/dark';
import Light from '~/styles/themes/light';

import { Sun, Moon } from './styles';

export default function SetTheme({ setTheme }) {
  const themeContext = useContext(ThemeContext);

  function handleTheme() {
    setTheme(themeContext.title === 'Light' ? Dark : Light);
  }

  return (
    <div>
      {themeContext.title === 'Light' ? (
        <div>
          <Moon
            size={30}
            color={themeContext.colors.primary}
            onClick={handleTheme}
          />
        </div>
      ) : (
        <div>
          <Sun
            size={30}
            color={themeContext.colors.primary}
            onClick={handleTheme}
          />
        </div>
      )}
    </div>
  );
}

SetTheme.propTypes = {
  setTheme: PropTypes.func.isRequired,
};
