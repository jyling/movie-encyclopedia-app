import React from 'react';
import { Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import { ChipList } from '../../UI/ChipList/ChipList';

export const ChipListMovie = (props : any) => {

    return (
        <View>
            <Text style={tailwind("mb-1")}>{props.name} :</Text>
            <ChipList items={props.items}></ChipList>
        </View>
    )
}