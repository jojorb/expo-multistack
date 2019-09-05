import React from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from 'react-apollo';
import { AppContainer } from './app/navigation/SwitchNav';
import { GRAPHQLBACKEND, GRAPHQLTOKEN } from './config';

const httpLink = createHttpLink({
  uri: GRAPHQLBACKEND,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  // const getToken = async () => {
  //   const token = await AsyncStorage.getItem('auth.token')
  //   return token
  // }
  // const token = getToken()
  const token = GRAPHQLTOKEN;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <AppContainer />
  </ApolloProvider>
);
export default App;
