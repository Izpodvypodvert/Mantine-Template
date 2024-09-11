import '@mantine/core/styles.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import ApplicationShell from './components/ApplicationShell/ApplicationShell';
import { AuthProvider } from './contexts/Auth.context';
import { UserProvider } from './contexts/User.context';
import Router from './Router';
import { theme } from './theme';

const queryClient = new QueryClient();

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <UserProvider>
            <Router />
          </UserProvider>
        </AuthProvider>
      </QueryClientProvider>
    </MantineProvider>
  );
};

export default App;
