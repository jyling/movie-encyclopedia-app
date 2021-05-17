import React, { useEffect, useState } from "react"
import {
    Text,
    View,
    StyleSheet,
    Button,
    Modal,
    Alert,
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
import { Loader } from "../../UI/Loader";
export const Home = inject("store")(observer((props : any) => {
    const [page, setPage] = useState({
        page: 1,
        totalPage: 1
    })
    const [searchTerm, setSearchTerm] = useState("")
    const [queryTerm, setQueryTerm] = useState({})
    const [calledSearch, result] = useLazyQuery(SEARCH_MOVIES(), {
        fetchPolicy: "no-cache",
        variables: {
          searchMovieInput:  queryTerm,
          page: page.page,
          limit: 3
        },
        onCompleted: (data) => {
            totalPageHandler(data.movies.pagination.totalPage)
            props.store.movieStore.setMovies(data)
        },
        onError: (e) => {
            setSearchTerm(prev => "")
            Alert.alert("We couldn't process your search", e.message)
        }
    })
    useEffect(() => {
        calledSearch();
    },[])
    
    let {loading, data, error} = result;

    const searchButtonClickHandler =  () => {
        // const [loadQueryMovies, queryInfo] = useLazyQuery(SEARCH_MOVIES(searchTermArray))
        const searchTermArray = inputParser(searchTerm);
        setQueryTerm(searchTermArray);
        pageHandler(1)
        calledSearch()
    }

    const pageHandler =  (e) => {
        const searchTermArray = inputParser(searchTerm);
        setQueryTerm(searchTermArray);
        setPage(prev => {
            return {
                ...prev,
                page: e
            }
        })
    }

    const totalPageHandler =  (e) => {
        setPage(prev => {
            return {
                ...prev,
                totalPage: e
            }
        })
    }
    return (
        <>
        <Loader loading={loading}></Loader>
        <Search value={searchTerm} onButtonClick={searchButtonClickHandler} onSearchTermChange={setSearchTerm}></Search>
        {!loading && <MovieList onPageChanged={pageHandler} page={page.page} totalPage={page.totalPage} movies={props.store.movieStore.movies}></MovieList>}
        
        </>
    )
}))