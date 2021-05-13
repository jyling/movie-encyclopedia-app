import React from 'react';

import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { NavigationLink } from "./NavigationLink/NavigationLink"
import tailwind from "tailwind-rn";
import { Home } from '../../pages/Home/Home';
export const Navigation = () => {
    return (
                <View style={tailwind("flex flex-row")}>
                    <NavigationLink to="/">
                        <Text>Home</Text>
                    </NavigationLink>
                    <NavigationLink to="/create">
                        <Text>Add New Movie</Text>
                    </NavigationLink>
                </View>

    )
}


const About = () => <Text>About</Text>;
