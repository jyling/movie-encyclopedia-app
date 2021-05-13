/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { NativeRouter, Route, Link } from "react-router-native";
import React from 'react';
import type { Node } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import tailwind from 'tailwind-rn';
import { Navigation } from './src/components/UI/Navigation/Navigation';
import { Home } from "./src/components/pages/Home/Home";
import { Create } from "./src/components/pages/Create/Create";


const App: () => Node = () => {

  return (
    <NativeRouter>
      <View style={tailwind("min-w-full bg-white")}>
        <Navigation></Navigation>
        <View style={tailwind("min-h-full bg-gray-500")}>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
        </View>
      </View>
    </NativeRouter>
  )
};

const style = StyleSheet.create({
  NavigationContainer: {
    backgroundColor: '#FFFFFF'
  }
})

export default App;
