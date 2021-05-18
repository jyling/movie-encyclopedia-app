/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {graphqlServer} from "@env"

import { NativeRouter } from "react-router-native";
import React, { useContext } from 'react';
import type { Node } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { observer, Provider } from "mobx-react"
import { PageWrapper } from "./src/components/UI/PageWrapper";
import { MovieStoreContext } from "./src/store/MovieStore/MovieStore";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: graphqlServer,
  cache: new InMemoryCache()
});

const App: () => Node = observer(() => {
  const movies = useContext(MovieStoreContext);
  return (
    <ApolloProvider client={client}>
      <Provider store={{ 
        movieStore : movies
       }}>
        <NativeRouter>
          <PageWrapper></PageWrapper>
        </NativeRouter>
      </Provider>
    </ApolloProvider>
  )
});

const style = StyleSheet.create({
  NavigationContainer: {
    backgroundColor: '#FFFFFF'
  }
})

export default App;
