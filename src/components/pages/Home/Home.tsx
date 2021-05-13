import React from "react"
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import tailwind from 'tailwind-rn';
import { Card } from '../../UI/Card';
import {Search} from './Search/Search'
import {MovieList} from './MovieList/MovieList'
export function Home() {
    return (
        <>
        <Card>
            <Text style={tailwind("text-3xl font-light text-center text-black")}>Movie Encyclopedia</Text>
        </Card>
        <Search></Search>

            <MovieList></MovieList>
        </>
    )
}