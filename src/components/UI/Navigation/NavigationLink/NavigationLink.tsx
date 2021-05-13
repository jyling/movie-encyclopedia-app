import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import {useState} from 'react'
import {
    Text,
    View,
    StyleSheet,
  } from 'react-native';
import tailwind from "tailwind-rn";
export const NavigationLink  = (props) =>{

  return (
    <Link to={props.to}  underlayColor="#f0f4f7" style={tailwind("p-3")} >
      {props.children}
    </Link>
  );
}
