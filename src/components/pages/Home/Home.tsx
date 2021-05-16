import React, { useEffect, useState } from "react"
import {
    Text,
    View,
    StyleSheet,
    Button,
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
    const [page, setPage] = useState(1)
    let totalPage = 1;
    const [searchTerm, setSearchTerm] = useState("")
    const [queryTerm, setQueryTerm] = useState({})
    const limit = 3;
    const result = useQuery(SEARCH_MOVIES(), {
        variables: {
          searchMovieInput:  queryTerm,
          page: page,
          limit: 3
        },
      })

    let {loading, data, error} = result;
        console.log({error})
        if (!loading && !error) {
            console.log(data.movies)
            totalPage = (data.movies.pagination.totalPage)
            props.store.movieStore.setMovies(data)
        }
    
    const searchButtonClickHandler =  () => {
        // const [loadQueryMovies, queryInfo] = useLazyQuery(SEARCH_MOVIES(searchTermArray))
        const searchTermArray = inputParser(searchTerm);
        setPage(1)
        setQueryTerm(searchTermArray);
    }

    useEffect(() => {
        setQueryTerm(queryTerm)
    }, [page])

    console.log({page, totalPage})

    return (
        <>
        <Search setError={error} onButtonClick={searchButtonClickHandler} onSearchTermChange={setSearchTerm}></Search>
            {!loading && <MovieList onPageChanged={setPage} page={page} totalPage={totalPage} movies={props.store.movieStore.movies}></MovieList>}
            {loading && <Text>Loading</Text>}
        
        </>
    )
}))