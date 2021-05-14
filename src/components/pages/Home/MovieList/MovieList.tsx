import { inject, observer, useObserver } from "mobx-react";
import React, { useEffect, useState } from "react"
import {
    Text,
    View,
    StyleSheet,
    ScrollView ,
    Button,
    Image
} from 'react-native';
import { useLocation } from "react-router";
import tailwind from 'tailwind-rn';
import { Movie } from "./Movie";

export const MovieList = inject("store")((props : any) => {
    return (
        <View style={tailwind("flex-1")}>
            <ScrollView style={tailwind("h-80 mb-20")} >
                {props.movies.map((data : any) => (
                    <View  key={data.id}>
                        <Movie id={data.id} name={data.name} description={data.description} characters={data.MovieCharacter}></Movie>
                    </View>
                ))}
            </ScrollView >
        </View>
    )
})