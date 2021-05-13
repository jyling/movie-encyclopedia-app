
import React, { useState } from "react"
import {
    Text,
    View,
    StyleSheet,
    FlatList ,
    Button,
    Image
} from 'react-native';
import tailwind from 'tailwind-rn';
import {Chip} from './Chip'
export const ChipList = (props) => {
    return (
        <View style={[
            tailwind("flex flex-row flex-wrap"),
            {
                width: 300
            }
        ]}>
            {props.items.map((item, index) => <Chip key={index}>{item}</Chip>)}
        </View >
    )
}