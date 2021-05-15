import React from 'react';
import { View } from 'react-native';
import tailwind from 'tailwind-rn';
export const Divider = () => {
    return (<View style={tailwind("border-b border-gray-100 my-2")}></View>)
}
