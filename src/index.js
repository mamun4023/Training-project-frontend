import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


const Client = new ApolloClient({ 
  uri: 'http://localhost:4000',
  connectToDevTools: true


});

ReactDom.render(
  <ApolloProvider client={Client}> 
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
