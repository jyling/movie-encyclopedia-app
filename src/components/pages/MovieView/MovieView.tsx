import { inject } from 'mobx-react';
import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useHistory } from 'react-router';
import tailwind from 'tailwind-rn';
import { BackButton } from '../../UI/BackButton';
import { Card } from '../../UI/Card';
import { ChipList } from '../../UI/ChipList/ChipList';
import { Divider } from '../../UI/Divider';
import { ChipListMovie } from './ChipListMovie';

export const MovieView = inject("store")((props : any) => {
    let { match : {params: {id}}} = props
    const history = useHistory();
    const movie = props.store.movieStore.movies.find((movie : any) => movie.id == id)
    const characters= movie.MovieCharacter.map((characterData : any) => characterData.Character.name)
    const genres = movie.MovieGenre.map((genreData : any) => genreData.Genre.name)
    const writers = movie.MovieWriter.map((writerData : any) => writerData.People.name)
    const directors = movie.MovieDirector.map((directorData : any) => directorData.People.name)

    const editHandler = () => {
        history.push(`/edit/movie/${movie.id}`)
    }

    return (
        <ScrollView style={tailwind("mb-20")}>
            <View style={tailwind("p-2")}>
            <View style={tailwind("flex flex-row justify-between items-end px-3 mb-3")}>
            <BackButton></BackButton>
            </View>
            <Card>
            <View style={tailwind("flex justify-center items-end mb-3")}>
                <Button onPress={editHandler} title="Edit" color="orange"></Button>
            </View>
            <View style={tailwind("flex justify-center items-center mb-3")}>
            <Image
                style={ [{ width: 154, height: 236, resizeMode: "contain" },
                    tailwind("bg-gray-400")
                ]
                }
                source={{ uri: props.image }}
            />
            </View>
                <Text style={tailwind("text-3xl")}>{movie.name}</Text>
                <Divider></Divider>
                <Text>Description :</Text>
                <Text>{movie.description}</Text>
                <Divider></Divider>
                <ChipListMovie name={"Genre"} items={genres}></ChipListMovie>
                <ChipListMovie name={"Character"} items={characters}></ChipListMovie>
                <ChipListMovie name={"Writer"} items={writers}></ChipListMovie>
                <ChipListMovie name={"Director"} items={directors}></ChipListMovie>
                
            </Card>
        </View>
        </ScrollView>
    )
})

