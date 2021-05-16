import { useMutation, useQuery } from "@apollo/client";
import { inject } from "mobx-react";
import moment from "moment";
import React, { useEffect, useState } from "react"
import {
    ScrollView,
    Text,
    View,
} from 'react-native';
import { Button } from "react-native-elements/dist/buttons/Button";
import { Input } from "react-native-elements/dist/input/Input";
import { useHistory } from "react-router";
import tailwind from 'tailwind-rn';
import {  FETCH_CHARACTER_PEOPLE_GENRE, INSERT_MOVIE} from "../../../helper/query";
import { CreateMovieInput } from "../../../types/query";
import { BackButton } from "../../UI/BackButton";
import { Card } from '../../UI/Card';
import { Divider } from "../../UI/Divider";
import { ImageInput } from "../../UI/ImageInput";
import { DatePickerModal } from "../../UI/DatePickerModal";
import { SmartDropdownWrapper } from "../../UI/SmartDropdown/SmartDropdownWrapper";


const initialForm = {
    name: "",
    image: "",
    description: "",
    characters: [],
    releasedDate: new Date(),
    genres: [],
    writers: [],
    directors: []
}

const initialErrorForm = {
    name: "",
    image: "",
    description: "",
    characters: "",
    releasedDate: "",
    genres: "",
    writers: "",
    directors: "",
}

export const Create = inject("store")((props) => {

    const { data, loading, error } = useQuery(FETCH_CHARACTER_PEOPLE_GENRE);
    console.log({data,loading, error})
    const [formError, setFormError] = useState(initialErrorForm);
    const [formData, setFormData] = useState(initialForm);

    const  [ addMovie , { data: insertMovieData, data: insertError } ] = useMutation(INSERT_MOVIE, {
        onError: (e) => {
            console.log(e);
            setFormError(Object.assign.apply(Object, e.graphQLErrors[0].extensions.exception.response.message))
        },
        onCompleted: (data) => {
            if (data) {
                console.log({data})
                props.store.movieStore.pushMovie(data.createMovie)
                history.push(`/movie/${data.createMovie.id}`)
            }
        }
    })
    const history = useHistory();

    const SelectedCharacterHandler = (characters) => {
        setFormData(state => {
            return {
                ...state,
                characters,
            }
        })
    }

    const SelectedGenreHandler = (genres) => {
        setFormData(state => {
            return {
                ...state,
                genres,
            }
        })
    }

    const SelectedWriterHandler = (writers) => {
        setFormData(state => {
            return {
                ...state,
                writers,
            }
        })
    }
    const SelectedDirectorHandler = (directors) => {
        setFormData(state => {
            return {
                ...state,
                directors,
            }
        })
    }

    const DescriptionContentHandler = (description) => {
        setFormData(state => {
            return {
                ...state,
                description,
            }
        })
    }

    const DateHandler = (releasedDate) => {
        setFormData(state => {
            return {
                ...state,
                releasedDate : new Date(releasedDate),
            }
        })
    }

    const NameContentHandler = (name) => {
        setFormData(state => {
            return {
                ...state,
                name,
            }
        })
    }

    const ImageHandler = (image) => {
        setFormData(state => {
            return {
                ...state,
                image: image
            }
        })
    }   

    const onSubmitHandler = () => {
        const insertData : CreateMovieInput = {
            name: formData.name,
            image: formData.image,
            description: formData.description,
            releasedDate: formData.releasedDate,
            characters: formData.characters,
            genres: formData.genres,
            writers: formData.writers,
            directors: formData.directors
        }
            
            addMovie({
                variables : {
                    createMovieInput : insertData
                }
            })
        // setFormData(initialForm) later uncomment
    }
    const formatedDate = moment(formData.releasedDate).format("MMMM Do YYYY");
    return (
        <>
            <ScrollView >
                {loading && <Text> Loading</Text>}

                {!loading && <View style={{marginBottom: 300}}>
                    <Card>
                        <Text>{!JSON.stringify(formData)}</Text>
                        <Text style={tailwind("text-3xl font-light text-center text-black")}>Create New</Text>
                    </Card>
                    <Card style={tailwind("p-2")}>
                        <View style={tailwind("flex flex-row justify-between items-end px-3 mb-3")}>
                            <BackButton to={"/"}></BackButton>
                        </View>
                        <ImageInput onImageChange={ImageHandler} style={tailwind("mb-3")}></ImageInput>
                        <Text>Movie Name :</Text>
                        <Input
                            onChangeText={NameContentHandler}
                            style={tailwind("text-black")}
                            errorStyle={tailwind("text-red-500 text-sm m-0")}
                            errorMessage={formError.name}
                        ></Input>
                        <Divider></Divider>
                        <Text>Date</Text>
                        <Text style={tailwind("text-3xl text-center mb-2")}>{formatedDate}</Text>
                        <DatePickerModal 
                            onDateSelected={DateHandler}
                        ></DatePickerModal>
                        <Divider></Divider>
                        <Text>Description :</Text>
                        <Input
                            multiline={true}
                            style={tailwind("text-black")}
                            onChangeText={DescriptionContentHandler}
                            errorStyle={tailwind("text-red-500 text-sm m-0")}
                            errorMessage={formError.description}
                        ></Input>
                        <Divider></Divider>


                        <SmartDropdownWrapper
                            name="Character"
                            value={formData.characters}
                            items={data.character}
                            onValueChange={SelectedCharacterHandler}
                            error={formError.characters}
                        ></SmartDropdownWrapper>

                        <SmartDropdownWrapper
                            name="Genre"
                            value={formData.genres}
                            items={data.genre}
                            onValueChange={SelectedGenreHandler}
                            error={formError.genres}
                        ></SmartDropdownWrapper>


                        <SmartDropdownWrapper
                            name="Writer"
                            value={formData.writers}
                            items={data.people}
                            onValueChange={SelectedWriterHandler}
                            error={formError.writers}
                        ></SmartDropdownWrapper>

                        <SmartDropdownWrapper
                            name="Director"
                            value={formData.directors}
                            items={data.people}
                            onValueChange={SelectedDirectorHandler}
                            error={formError.directors}
                        ></SmartDropdownWrapper>

                        <Divider></Divider>

                        <Button onPress={onSubmitHandler} buttonStyle={tailwind("bg-blue-400 mt-3")} title="Insert Movie"></Button>
                    </Card>
                </View>
                }


            </ScrollView>
        </>
    )
})