import React, { useState } from "react"
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Alert,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { Button } from "react-native-elements/dist/buttons/Button";
import tailwind from 'tailwind-rn';

export function TextWithButton(props: any) {
    const buttonClickHandler = (value: any) => {
        props.onButtonClick();
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View
                style={tailwind("flex flex-row justify-between items-center mb-2")}
            >
                <View style={{ flex: 1 }}>
                    <Text>{props.children}</Text>
                </View>
                <View style={tailwind("pl-1")}>
                    <Button onPress={buttonClickHandler} buttonStyle={props.buttonStyle || tailwind("bg-blue-400")} title={props.button}></Button>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
