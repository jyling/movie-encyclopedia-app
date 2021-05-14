import { useQuery } from "@apollo/client";
import { inject, observer } from "mobx-react";
import React, { useContext, useState } from "react"
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
import { FETCH_MOVIES } from "../../../../helper/query";
import { MovieStoreContext } from "../../../../store/MovieStore/MovieStore";
import { ChipList } from "./ChipList/ChipList";
import { Movie } from "./Movie";

export const MovieList = inject("store")(observer((props : any) => {
    const location = useLocation();
    const { loading, error, data } = useQuery(FETCH_MOVIES)
    console.log({ loading, error, data });
    if (loading == false && !error) {
        props.store.movieStore.loadMovies(data.movie)
    }

    console.log(props.store.movieStore)

       
    return (
        <View style={tailwind("flex-1")}>
            <ScrollView style={tailwind("h-full mb-20")} >
                {props.store.movieStore.movies.map((data : any) => (
                    <Movie id={data.id} name={data.name} description={data.description} characters={data.MovieCharacter}></Movie>
                ))}
            </ScrollView >
        </View>
    )
}))