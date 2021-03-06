import { serializeFetchParameter } from "@apollo/client";
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

export function InputWithButton(props : any) {
    const contentHandler = (value : any) => {
        if (props.onContentChange) {
            props.onContentChange(value);
        }
    }

    const buttonClickHandler = (value : any) => {
        if (props.onButtonClick) {
            props.onButtonClick();
        }
        if (props.deleteContentOnButtonClick) {
            props.onContentChange("");
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View
            style={tailwind("flex flex-row justify-between items-end mb-2")}
        >
                <View  style={{ flex: 1 }}>
                <TextInput
                    style={tailwind("flex-1 border-b-2 border-gray-300 text-black")}
                    onChangeText={contentHandler}
                    value={props.value}
                    placeholder={props.placeholder}
                />
                </View>
            <View style={tailwind("pl-1")}>
                <Button onPress={buttonClickHandler} buttonStyle={tailwind("bg-blue-400")} title={props.button}></Button>
            </View>
        </View>
                    </TouchableWithoutFeedback>
    )
}
