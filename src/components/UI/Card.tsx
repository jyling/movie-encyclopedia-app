import { View } from "react-native";
import React from 'react';
import tailwind from "tailwind-rn";
export const Card = (props) => { 
    return (
        <View style={tailwind("bg-white m-3 rounded p-4")}>
            {props.children}
        </View>
    )
}