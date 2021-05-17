import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { inject } from 'mobx-react';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useHistory } from 'react-router';
import tailwind from 'tailwind-rn';
import { DELETE_MOVIE, FIND_MOVIE } from '../../../helper/query';
import { BackButton } from '../../UI/BackButton';
import { Card } from '../../UI/Card';
import { ChipList } from '../../UI/ChipList/ChipList';
import { Divider } from '../../UI/Divider';
import { ChipListMovie } from './ChipListMovie';

export const MovieView = inject("store")((props: any) => {
    let { match: { params: { id } } } = props
    const history = useHistory();
    const movie = props.store.movieStore.movies.find((movie: any) => movie.id == id)
    const characters = movie.MovieCharacter.map((characterData: any) => characterData.Character.name)
    const genres = movie.MovieGenre.map((genreData: any) => genreData.Genre.name)
    const writers = movie.MovieWriter.map((writerData: any) => writerData.People.name)
    const directors = movie.MovieDirector.map((directorData: any) => directorData.People.name)
    const formatedDate = moment(movie.releasedDate).format("MMMM Do YYYY");

    let [deleteMovie] = useMutation(DELETE_MOVIE, {
        onCompleted: (result) => {
            Alert.alert("The Movie had been deleted", `The movie ${movie.name} has been deleted`);
            history.push("/")
        }
    })

    console.log(movie)
    const editHandler = () => {
        history.push(`/edit/movie/${movie.id}`)
    }

    const deleteHandler = () => {
        Alert.alert(
            'Are you sure want to delete this ?',
            `By pressing Yes, the movie "${movie.name}" will be deleted from the database
            
Are you sure you want to PROCEED ?
            `,
            [
              {text: 'NO', onPress: () => {}, style: "destructive"},
              {text: 'YES', onPress: () => {
                deleteMovie({
                    variables: {
                        id: movie.id
                    }
                })
              }},
            ]
        );
    }

    return (
        <ScrollView style={tailwind("mb-20")}>
            <View style={tailwind("p-2")}>
                <View style={tailwind("flex flex-row justify-between items-end px-3 mb-3")}>
                    <BackButton to={"/"}></BackButton>
                </View>
                <Card>
                    <View style={tailwind("flex justify-center items-end mb-3")}>
                        <View style={tailwind("flex flex-row")}>
                            <Button onPress={editHandler} title="Edit" buttonStyle={
                                tailwind("bg-yellow-500 px-5 mr-2")
                            }></Button>
                            <Button onPress={deleteHandler} title="Delete" buttonStyle={
                                tailwind("bg-red-500 px-5")
                            }></Button>
                        </View>
                    </View>
                    <View style={tailwind("flex justify-center items-center mb-3")}>
                        <Image
                            style={[{ width: 154, height: 236, resizeMode: "cover" },
                            tailwind("bg-gray-400")
                            ]
                            }
                            source={{ uri: movie.imageURL || null }}
                        />
                    </View>
                    <Text style={tailwind("text-3xl")}>{movie.name}</Text>
                    <Divider></Divider>
                    <Text>Released on {formatedDate}</Text>
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

