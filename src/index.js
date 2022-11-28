import React, {createContext} from 'react';
import ReactDom from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {DarkModeContextProvider} from './contextAPI/darkMode';


const Client = new ApolloClient({ 
  uri: 'http://localhost:4000',
});

ReactDom.render(
  
  <DarkModeContextProvider>
    <ApolloProvider client={Client}>
        <App /> 
    </ApolloProvider>
  </DarkModeContextProvider>
  ,
  document.getElementById('root')
);
