import React from "react"
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import tailwind from 'tailwind-rn';
import { Card } from '../../UI/Card';
export function Create() {
    return (
        <Card>
            <Text style={tailwind("text-3xl font-light text-center text-black")}>Create New</Text>
        </Card>
    )
}