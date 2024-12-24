import { RouterProvider } from 'react-router-dom';
import { router } from './Utils/Routes'
import { ThemeProvider } from '@emotion/react';
import theme from './Utils/Theme';
import { CssBaseline } from '@mui/material';

import './App.css';
import './theme.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </ThemeProvider>
  );
}

export default App;
