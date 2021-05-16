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
import { useHistory } from 'react-router';
import tailwind from 'tailwind-rn';
import { Card } from '../../../UI/Card';
import { Divider } from '../../../UI/Divider';
import { ChipList } from "../../../UI/ChipList/ChipList";
export const Movie = (props : any) => {
    const history = useHistory();
    const clickedHandler = () => {
        history.push(`/movie/${props.id}`)
    }
    const characters = props.characters.map((CharacterData : any) => CharacterData.Character.name)

    return (
        <View key={props.key}>
            <TouchableHighlight  underlayColor="#f0f4f7" onPress={clickedHandler}>
        <Card>
        <View style={tailwind("flex flex-row overflow-hidden")}>
            <Image
                style={ [{ width: 94, height: 166, resizeMode: "cover" },
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
                    <Divider></Divider>
                    <View>
                    <Text style={tailwind("mb-1")}>Characters</Text>
                    <ChipList items={characters || ["No Charactersr"]}></ChipList>
                </View>
            </View>
        </View>
        </Card>
        </TouchableHighlight>
    
        </View>
        )
}