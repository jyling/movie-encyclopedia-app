import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { Button } from 'react-native-elements';


export const ImageInput = (props) => {
    const [imageData, setImageData] = useState(props.value || undefined);
    
    const imageSelectHandler = async() => {
        launchImageLibrary({
            mediaType : 'photo',
            includeBase64: true,
        }, result => {
            if (result.didCancel) {
                console.log("canceled")
                return;
            }
            if (result.errorMessage) {
                console.log(result.errorMessage)
            }
            console.log(result)
            setImageData({
                uri: result.uri,
                base64: result.base64,
            })
            if (props.onImageChange) {
                props.onImageChange({
                    uri: result.uri,
                    base64: result.base64,
                })
            }
        })
    }
    
    const removeImageHandler = async () => {
        setImageData(null)
        props.onImageChange({
            uri: "",
            base64: "",
        })
    }
    
    
    const initialStyle = tailwind("flex justify-center items-center mb-3")
    const isPressedStyle = tailwind("bg-gray-300");
    const showableData = imageData? imageData.uri : null;
    return (
        <View style={props.style}>
            <Pressable onPress={imageSelectHandler} style={
            ({ pressed }) => {
                var finalStyle = [initialStyle]
                if (pressed) finalStyle.push(isPressedStyle)
                return finalStyle
            }
        }>
            <Image
                style={[{ width: 154, height: 236, resizeMode: "cover" },
                tailwind("bg-gray-400")
                ]
                }
                source={{ uri: showableData }}
            />
            {!imageData && <Text style={tailwind("text-4xl absolute text-gray-600")}>+</Text>}
        </Pressable>
        {imageData && <Button onPress={removeImageHandler} buttonStyle={tailwind("bg-red-500")} title={"remove image"}></Button>}
        </View>
    )
}