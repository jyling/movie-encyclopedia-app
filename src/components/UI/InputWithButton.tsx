import React, { useState } from "react"
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import tailwind from 'tailwind-rn';

export function InputWithButton(props : any) {
    const [content, setContent] = useState(props.value)
    const contentHandler = (value : any) => {
        setContent(value)
        props.onContentChange(value);
    }

    const buttonClickHandler = (value : any) => {
        console.log("clicked from input with button")
        props.onButtonClick();
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
                    value={content}
                    placeholder={props.placeholder}
                />
                </View>
            <View style={tailwind("pl-1")}>
                <Button
                    onPress={buttonClickHandler}
                    title={props.button}></Button>
            </View>
        </View>
                    </TouchableWithoutFeedback>
    )
}
