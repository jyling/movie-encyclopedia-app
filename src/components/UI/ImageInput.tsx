import React, { useState } from 'react';
import { Image, Pressable, Text } from 'react-native';
import tailwind from 'tailwind-rn';

export const ImageInput = (props) => {
    // if (props.onValueChanged) {
    //     props.onValueChanged();
    // }
    const initialStyle = tailwind("flex justify-center items-center mb-3")
    const isPressedStyle = tailwind("bg-gray-300");
    return (
        <Pressable  style={
            ({ pressed }) => {
                var finalStyle = [initialStyle]
                if (pressed) finalStyle.push(isPressedStyle)
                return finalStyle
            }
        }>
            <Image
                style={[{ width: 154, height: 236, resizeMode: "contain" },
                tailwind("bg-gray-400")
                ]
                }
                source={{ uri: props.image }}
            />
            <Text style={tailwind("text-4xl absolute text-gray-600")}>+</Text>
        </Pressable>
    )
}