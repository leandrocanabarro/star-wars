import React from 'react';

import { ThemeProvider } from 'styled-components';

import Dark from '~/styles/themes/dark';
import Light from '~/styles/themes/light';

import Header from './components/Header';
import Routes from './routes';
import GlobalStyle from './styles/global';
import usePersistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState('theme', Light);

  const toggleTheme = () => {
    setTheme(theme.title === 'Dark' ? Light : Dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
