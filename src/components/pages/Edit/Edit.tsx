import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { inject } from 'mobx-react';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Input } from 'react-native-elements/dist/input/Input';
import { useHistory } from 'react-router';
import tailwind from 'tailwind-rn';
import { FETCH_CHARACTER_PEOPLE_GENRE, INSERT_MOVIE, UPDATE_MOVIE } from '../../../helper/query';
import { CreateMovieInput, UpdateMovieInput } from '../../../types/query';
import { BackButton } from '../../UI/BackButton';
import { Card } from '../../UI/Card';
import { DatePickerModal } from '../../UI/DatePickerModal';
import { ImageInput } from '../../UI/ImageInput';
import { SmartDropdownWrapper } from '../../UI/SmartDropdown/SmartDropdownWrapper';

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

export const Edit = inject("store")((props) => {
    let { match : {params: {id}}} = props

    const { data, loading, error } = useQuery(FETCH_CHARACTER_PEOPLE_GENRE);
    console.log({data,loading, error})
    const [formError, setFormError] = useState(initialErrorForm);
    const movie = props.store.movieStore.movies.find((movie : any) => movie.id == id)
    const [formData, setFormData] = useState({
        name: movie.name,
        image: movie.imageURL,
        description: movie.description,
        characters: movie.MovieCharacter.map(characterData => characterData.Character.name),
        releasedDate: movie.releasedDate,
        genres: movie.MovieGenre.map(genreData => genreData.Genre.name),
        writers: movie.MovieWriter.map(writerData => writerData.People.name),
        directors: movie.MovieDirector.map(directorData => directorData.People.name),
    });
    
    let [updateMovie] = useMutation(UPDATE_MOVIE, {
        onCompleted: (data => {
            if (data) {
                props.store.movieStore.updateMovie(data.updateMovie.id, data.updateMovie)
                history.push(`/movie/${data.updateMovie.id}`)
            }
        }),
        onError: (data => console.log(data))
    });

    const history = useHistory();
    // const  [ addMovie , { data: insertMovieData, data: insertError } ] = useMutation(INSERT_MOVIE, {
    //     onError: (e) => {
    //         setFormError(Object.assign.apply(Object, e.graphQLErrors[0].extensions.exception.response.message))
    //     },
    //     onCompleted: (data) => {
    //         if (data) {
    //             console.log({data})
    //             props.store.movieStore.pushMovie(data.createMovie)
    //             history.push(`/movie/${data.createMovie.id}`)
    //         }
    //     }
    // })

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
        console.log({imagefeqqefqefqef: image})
        setFormData(state => {
            return {
                ...state,
                image: image.base64
            }
        })
    }   

    const onSubmitHandler = () => {
        const updateData : UpdateMovieInput = {
            id: movie.id,
            image: formData.image,
            name: formData.name,
            description: formData.description,
            releasedDate: formData.releasedDate,
            characters: formData.characters,
            genres: formData.genres,
            writers: formData.writers,
            directors: formData.directors
        }
        updateMovie({
            variables : {
                updateMovieInput : updateData
            }
        })
        // setFormData(initialForm) later uncomment
    }
    
    const formatedDate = moment(formData.releasedDate).format("MMMM Do YYYY");
    const  imageData = formData.image? {
        uri: formData.image,
        base64: ""
    } : null
    return (
        <>
            <ScrollView>
                {loading && <Text> Loading</Text>}

                {!loading && <View style={{marginBottom: 300}}>
                    <Card>
                        <Text style={tailwind("text-3xl font-light text-center text-black")}>Editing {movie.name}</Text>
                    </Card>
                    <Card style={tailwind("p-2")}>
                        <View style={tailwind("flex flex-row justify-between items-end px-3 mb-3")}>
                        <BackButton to={`/movie/${id}`}></BackButton>
                        </View>
                        <ImageInput onImageChange={ImageHandler} value={imageData} style={tailwind("mb-3")}></ImageInput>
                        <Text >Movie Name :</Text>
                        <Input
                            onChangeText={NameContentHandler}
                            value={formData.name}
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
                            value={formData.description}
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

                        <Button onPress={onSubmitHandler} buttonStyle={tailwind("bg-yellow-500 mt-3")} title="Update Movie"></Button>
                    </Card>
                </View>
                }


            </ScrollView>
        </>
    )
})