import React from 'react';
import { NativeRouter, Route, useLocation , Link } from "react-router-native";
import {
  Text,
  View,
} from 'react-native';
import tailwind from 'tailwind-rn';
import { Navigation } from './Navigation/Navigation';
import { Home } from "../pages/Home/Home";
import { Create } from "../pages/Create/Create";
import { observer } from 'mobx-react';
import { MoviesStore } from '../../store/MovieStore/MovieStore';
import { gql, useQuery } from '@apollo/client';
import { FETCH_MOVIES } from '../../helper/query';

export const PageWrapper = observer((props : any) => {
  
  let location = useLocation();
    
     



  return (
      <View style={tailwind("min-w-full bg-white")}>
      <Navigation></Navigation>
      <View style={tailwind("min-h-full bg-gray-500")}>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={Create} />
      </View>
    </View>
  )
})