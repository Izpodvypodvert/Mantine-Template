import '@mantine/core/styles.css';

import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import ApplicationShell from './components/ApplicationShell/ApplicationShell';
import Router from './Router';
import { theme } from './theme';

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
};

export default App;
