import React, { useState } from "react"
import {
    Text,
    View,
    StyleSheet,
    ScrollView ,
    Button,
    Image
} from 'react-native';
import tailwind from 'tailwind-rn';
import { ChipList } from "./ChipList/ChipList";
import { Movie } from "./Movie";
export const MovieList = () => {
    return (
        <View style={tailwind("flex-1")}>
            <ScrollView style={tailwind("h-full mb-20")} >
                {[1,2,3].map(e => <Movie></Movie>)}
            </ScrollView >
        </View>
    )
}