import React, { useEffect, useState } from "react"
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import tailwind from 'tailwind-rn';
import { Card } from '../../UI/Card';
import {Search} from './Search/Search'
import {MovieList} from './MovieList/MovieList'
import { inject, observer } from "mobx-react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { FETCH_MOVIES, SEARCH_MOVIES } from "../../../helper/query";
import { inputParser } from "../../../helper/inputParser";
import { loadPartialConfig } from "@babel/core";
export const Home = inject("store")(observer((props : any) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [queryTerm, setQueryTerm] = useState({})
    
    const result = useQuery(SEARCH_MOVIES(queryTerm))

    let {loading, data, error} = result;
        console.log({error})
        if (!loading && !error) {
            props.store.movieStore.setMovies(data)
        }
    const searchButtonClickHandler =  () => {
        // const [loadQueryMovies, queryInfo] = useLazyQuery(SEARCH_MOVIES(searchTermArray))
        const searchTermArray = inputParser(searchTerm);
        setQueryTerm(searchTermArray);
    }
    return (
        <>
        <Search setError={error} onButtonClick={searchButtonClickHandler} onSearchTermChange={setSearchTerm}></Search>
            {!loading && <MovieList movies={props.store.movieStore.movies}></MovieList>}
            {loading && <Text>Loading</Text>}
        </>
    )
}))