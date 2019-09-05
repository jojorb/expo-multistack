import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { AppContainer } from './app/navigation/SwitchNav';
import { GRAPHQLBACKEND, GRAPHQLTOKEN } from './config';

const clientgraphql = new ApolloClient({
  uri: GRAPHQLBACKEND,
  request: async operation => {
    // operation.setContext({
    //   fetchOptions: {
    //     credentials: 'include',
    //   },
    //   headers,
    // });
    const token = GRAPHQLTOKEN;
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
});

const App = () => (
  // console.log('app home screen')
  <ApolloProvider client={clientgraphql}>
    <AppContainer />
  </ApolloProvider>
);
export default App;
