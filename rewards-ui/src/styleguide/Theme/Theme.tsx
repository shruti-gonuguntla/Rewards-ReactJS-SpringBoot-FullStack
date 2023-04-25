import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './config';

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
