import React from 'react';
import { ApolloProvider as Provider } from '@apollo/react-hooks'
import { HttpLink } from 'apollo-link-http'; 
import { InMemoryCache } from 'apollo-cache-inmemory'; 
import { ApolloClient } from 'apollo-client'; 

const link = new HttpLink({
  uri: 'https://daiei-apollo.now.sh/', 
});

const cache = new InMemoryCache(); 

const client = new ApolloClient({
  link, 
  cache, 
})

const ApolloProvider = ({
  children, 
}) => {
  return (
    <Provider client={client}>
      {children}
    </Provider>
  )
}

export default ApolloProvider
