import React from 'react';
import { Modal, Text, View } from "react-native";
import tailwind from 'tailwind-rn';



export const Loader = (props) => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.loading}
        >
            <View
                style={tailwind("flex-1 justify-center items-center p-3 bg-black bg-opacity-50")}
            >
                <Text style={tailwind("text-4xl text-white")}>{props.message || "Loading"}</Text>
            </View>
        </Modal>
    )
}