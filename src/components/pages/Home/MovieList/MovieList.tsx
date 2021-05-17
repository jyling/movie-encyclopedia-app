import { inject, observer, useObserver } from "mobx-react";
import React, { useEffect, useState } from "react"
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Button,
    Image
} from 'react-native';
import { useLocation } from "react-router";
import tailwind from 'tailwind-rn';
import { Card } from "../../../UI/Card";
import { Movie } from "./Movie";

export const MovieList = inject("store")((props: any) => {

    let currentPage = props.page;
    const pagePrevUpdateHandler = () => {
        if ((currentPage - 1) <= 0) {
            props.onPageChanged(currentPage)
            return;
        }
        props.onPageChanged(--currentPage)
    }

    const pageNextUpdateHandler = () => {
        if ((currentPage + 1) > props.totalPage) {
            props.onPageChanged(currentPage)
            return;
        }
        props.onPageChanged(++currentPage)
    }
    const containMovies = (props.movies.length == 0) ? false : true;
    return (
        <View style={tailwind("flex-1")}>
            {!containMovies &&
                <Card>
                    <Text style={tailwind("text-center text-black text-3xl")}>No Result</Text>
                    <Text style={tailwind("text-center text-black text-sm")}>We couldn't find any movies</Text>
                </Card>
            }
            {containMovies &&
                <ScrollView style={tailwind("h-80 mb-20")} >
                    {props.movies.map((data: any) => (
                        <View key={data.id}>
                            <Movie id={data.id} name={data.name} image={data.imageURL || null} description={data.description} characters={data.MovieCharacter}></Movie>
                        </View>
                    ))}

                    <Card style={tailwind("flex-1 flex-row justify-between items-center")}>
                        <Button disabled={((currentPage - 1) <= 0)} onPress={pagePrevUpdateHandler} title="Previous Page" ></Button>
                        <Text>{props.page || 1} out of {props.totalPage || 1} pages</Text>
                        <Button disabled={((currentPage + 1) > props.totalPage)} onPress={pageNextUpdateHandler} title="Next Page"> </Button>
                    </Card>
                </ScrollView >
            }
        </View>
    )
})