import React from 'react';
import { Text, View } from 'react-native';
import { BackButton } from 'react-router-native';

export const MovieView = (props : any) => {
    let { match : {params: {id}}} = props
    console.log({props})
    return (
        <View>
            <Text>Hi ${id}</Text>
            <BackButton ></BackButton>
        </View>
    )
}