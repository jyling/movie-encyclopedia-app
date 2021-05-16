import { inject } from 'mobx-react';
import React from 'react';
import { Text } from 'react-native';

export const Edit = inject("store")((props) => {
    let { match : {params: {id}}} = props
    const movie = props.store.movieStore.movies.find((movie : any) => movie.id == id)

    console.log(movie)
    return (<Text>Hello There</Text>);
})