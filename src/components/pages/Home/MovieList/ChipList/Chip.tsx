import React, { useState } from "react"
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Button,
    Image
} from 'react-native';
import tailwind from 'tailwind-rn';
export const Chip = (props) => {
    return (
        <View style={tailwind('bg-blue-200 px-2 py-1 rounded-full mr-1 mb-1')}>
            <Text style={tailwind('text-blue-800 font-semibold')}>
                {props.children}
			</Text>
        </View>
    )
}