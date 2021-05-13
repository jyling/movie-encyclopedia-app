import React, { useState } from "react"
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button,
    Alert 
} from 'react-native';
import tailwind from 'tailwind-rn';
import { Card } from '../../../UI/Card';
import {InputWithButton} from '../../../UI/InputWithButton'
export function Search() {

    const [searchTerm, setSearchTerm] = useState(null);
    const searchTermHandler = (e) => {
        setSearchTerm(e)
    }
    return (
        <Card>
        <InputWithButton 
            onContentChange={searchTermHandler}
            value={searchTerm}
            button="Search"
        ></InputWithButton>
        </Card>
    )
}
