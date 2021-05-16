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
        public setMovies(data: any) {
                this.movies = data.movies.Movie
        }

        @action
        public pushMovie(data: any) {
                this.movies = [...this.movies, data];
        }

        @action
        public updateMovie(id, data: any) {
                this.movies = this.movies.map(movie => {
                        if (movie.id == id) {
                                return data;
                        }
                        return movie
                })
        }


}

export const MovieStoreContext = createContext(new MoviesStore())