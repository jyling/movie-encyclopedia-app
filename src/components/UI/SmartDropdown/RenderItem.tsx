import { Text, View } from "react-native";
import React from 'react';
import tailwind from "tailwind-rn";
import { TextWithButton } from "../TextWithButton";
import { InputWithButton } from "../InputWithButton";
export const RenderItem = (props) => { 
    const buttonClickHandler = () => {
        props.onButtonClicked(props.title)
    }
    return (
            <View style={tailwind("border rounded px-3 pt-2")}>
            <TextWithButton onButtonClick={buttonClickHandler} buttonStyle={props.buttonStyle} button={props.button || "Close"}>
                {props.title}
            </TextWithButton>
            </View>
    )
}