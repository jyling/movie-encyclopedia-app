import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Button,
    Image
} from 'react-native';
import tailwind from 'tailwind-rn';
import { Card } from '../../../UI/Card';
import { ChipList } from "./ChipList/ChipList";
export const Movie = () => {
    return (
        <Card>
        <View style={tailwind("flex flex-row overflow-hidden")}>
            <Image
                style={
                    [{ width: 124, height: 186, resizeMode: "contain" },
                    tailwind("")
                    ]
                }
                source={{ uri: "https://picsum.photos/200/300" }}
            />
            <View style={tailwind("ml-3")}>
                <Text style={tailwind("text-2xl")}>Iron Man : 2</Text>
                <Text style={tailwind("w-60")}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quae repudiandae dolor neque id ratione modi libero ab exercitationem.
                    Ratione ab quas dolorem vero officiis aperiam nesciunt beatae quae dicta.
                </Text>
                <View
                    style={tailwind("border-b border-gray-100 my-2")}
                />
                <View>
                    <Text style={tailwind("mb-1")}>Characters</Text>
                    <ChipList items={["Luke Skywalker", "C-3PO", "Darth Vader"]}></ChipList>
                </View>
            </View>
        </View>
        </Card>
    )
}