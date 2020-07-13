import React from 'react';
import ReduxProvider from './ReduxProvider';
import MuiProvider from './MuiProvider';
import RouterProvider from './RouterProvider';
import ApolloProvider from './ApolloProvider';

const providers = [
  RouterProvider, 
  MuiProvider, 
  ReduxProvider, 
  ApolloProvider, 
];

const Providers = ({
  children, 
}) => {
  return providers.reduce((children, Provider) => (
    <Provider>
      {children}
    </Provider>
  ), children);
}

export default Providers
