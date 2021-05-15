import { FETCH_MOVIES } from './../../helper/query';
import { ApolloClient, useQuery } from '@apollo/client';
import { inputParser } from './../../helper/inputParser';

import { makeAutoObservable, autorun, runInAction, action } from "mobx"
import { observable } from "mobx"
import { createContext } from "react"
import { observer } from 'mobx-react';
import { SEARCH_MOVIES } from '../../helper/query';


export class MoviesStore {
    @observable movies = []
    @observable loading = false

    @action
    public searchMovies(searchTerm: string) {
        console.log("search")

        const searchTermArray = inputParser(searchTerm);
        console.log(SEARCH_MOVIES(searchTermArray))
        const { loading, error, data } = useQuery(SEARCH_MOVIES(searchTermArray))

        this.loading = loading;
        // if (!loading) {
        //     this.movies = data.movie
        // }
        console.log({ loading, error, data })

    }

    @action
    public setMovies(data : any) {
            this.movies = data.movies.Movie
    }


}

export const MovieStoreContext = createContext(new MoviesStore())