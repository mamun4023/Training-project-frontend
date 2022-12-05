import React, {createContext} from 'react';
import ReactDom from 'react-dom';
import App from './App.jsx';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {DarkModeContextProvider} from './contextAPI/darkMode';
import { styled, ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles'
import 'material-react-toastify/dist/ReactToastify.css';

const Client = new ApolloClient({ 
  uri: 'http://localhost:4000',
  cache : new InMemoryCache(),
  fetchOptions : {
    credentials : "include"
  },
  request : operation =>{
    const token = localStorage.getItem('token')|| ""
    operation.setContext({
      headers : {
        authorization : token
      }
    })
  }
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
