import { inject, observer } from 'mobx-react';
import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    Button,
    Image
} from 'react-native';
import tailwind from 'tailwind-rn';
import { Card } from '../../../UI/Card';
import { ChipList } from "./ChipList/ChipList";
export const Movie = (props : any) => {
    const clickedHandler = () => {
        props.onClick(props.id)
    }
    const characters = props.characters.map((CharacterData : any) => CharacterData.Character.name)

    return (
        <TouchableHighlight underlayColor="#f0f4f7" onPress={() => console.log("clicked")}>
        <Card>
        <View style={tailwind("flex flex-row overflow-hidden")}>
            <Image
                style={ [{ width: 94, height: 166, resizeMode: "contain" },
                    tailwind("bg-gray-400")
                ]
                }
                source={{ uri: props.image }}
            />
            <View style={tailwind("ml-3")}>
                <Text style={tailwind("text-2xl")}>{props.name}</Text>
                <Text style={tailwind("w-60")}>
                   {props.description}
                </Text>
                <View
                    style={tailwind("border-b border-gray-100 my-2")}
                />
                <View>
                    <Text style={tailwind("mb-1")}>Characters</Text>
                    <ChipList items={characters || ["No Charactersr"]}></ChipList>
                </View>
            </View>
        </View>
        </Card>
        </TouchableHighlight>
    )
}