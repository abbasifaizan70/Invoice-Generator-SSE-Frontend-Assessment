// src/apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://sse-frontend-assessment-api-823449bb66ac.herokuapp.com/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default client;
