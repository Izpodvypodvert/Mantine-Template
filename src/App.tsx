import '@mantine/core/styles.css';

import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import ApplicationShell from './components/ApplicationShell/ApplicationShell';
import { UserProvider } from './contexts/User.context';
import Router from './Router';
import { theme } from './theme';
import { AuthProvider } from './contexts/Auth.context';

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <AuthProvider>
      <UserProvider>
        <Router />
      </UserProvider>
      </AuthProvider>
    </MantineProvider>
  );
};

export default App;
