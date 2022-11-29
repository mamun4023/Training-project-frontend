import React, {createContext} from 'react';
import ReactDom from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {DarkModeContextProvider} from './contextAPI/darkMode';
import { styled, ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles'

const Client = new ApolloClient({ 
  uri: 'http://localhost:4000',
});

const theme = createTheme()

ReactDom.render(
  
  <DarkModeContextProvider>
    <ApolloProvider client={Client}>
      <ThemeProvider theme={theme}>
        <App /> 
      </ThemeProvider>
    </ApolloProvider>
  </DarkModeContextProvider>
  ,
  document.getElementById('root')
);
