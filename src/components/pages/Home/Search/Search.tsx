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
export const Search = (props : any) => {

    const [searchTerm, setSearchTerm] = useState(null);
    const searchTermHandler = (e :any) => {
        setSearchTerm(e)
        props.onSearchTermChange(e)
    }
    const searchButtonHandler = (e : any) => {
        props.onButtonClick(e)
    }
    return (
        <Card>
        <InputWithButton 
            onContentChange={searchTermHandler}
            onButtonClick={searchButtonHandler}
            value={searchTerm}
            button="Search"
        ></InputWithButton>
        </Card>
    )
}
