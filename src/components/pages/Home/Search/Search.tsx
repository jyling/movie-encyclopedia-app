import React, { useState } from "react"
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button,
    Alert, 
    Pressable
} from 'react-native';
import tailwind from 'tailwind-rn';
import { Card } from '../../../UI/Card';
import {InputWithButton} from '../../../UI/InputWithButton'
export const Search = (props : any) => {
    const searchTermHandler = (e :any) => {
        props.onSearchTermChange(e)
    }
    const searchButtonHandler = (e : any) => {
        props.onButtonClick(e)
    }

    const advanceTipsHandler = () => {
        Alert.alert("Tips", `
This Search engine supports advanced search!!

you can use them by typing "type:search_term"

there's few supported searching type right now
id, description, characters, genres, directors and writers

replace spaces with '_' (eg. characters:tony_stark)

Note: invalid type will be ignored
        `)
    }

    return (
        <Card>
        <InputWithButton
            onContentChange={searchTermHandler}
            onButtonClick={searchButtonHandler}
            value={props.value}
            button="Search"
        ></InputWithButton>

        <Text>Tips : this search engine supports    

        <Pressable onPress={advanceTipsHandler}>
            <Text style={tailwind("text-blue-500")}>advanced searching and filtering</Text>
        </Pressable>
        </Text>
        </Card>
    )
}
