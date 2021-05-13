import React, { useState } from "react"
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button,
    Alert
} from 'react-native';
import tailwind from 'tailwind-rn';

export function InputWithButton(props) {
    const [content, setContent] = useState(props.value)
    const contentHandler= (value) =>{
        setContent(value)
        props.onContentChange(value);
    }

    const buttonClickHandler= (value) =>{
        props.onButtonClicked();
    }
    return (
        <View
            style={tailwind("flex flex-row justify-between items-end mb-2")}
        >

            <TextInput
                style={tailwind("flex-1 border-b-2 border-gray-100 text-black")}
                onChangeText={contentHandler}
                value={content}
                placeholder={props.placeholder}
            />
            <View style={tailwind("pl-1")}>
                <Button
                onTap={buttonClickHandler}
                title={props.button}></Button>
                </View>
        </View>
    )
}
