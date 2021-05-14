
import { makeAutoObservable, autorun, runInAction, action } from "mobx"
import {observable} from "mobx"
import { createContext } from "react"


export class MoviesStore {
    @observable movies = []


    constructor() {
    }

    getMovies() {return this.movies}

    @action
    loadMovies(movies : any) {
        this.movies = movies
    }
}

export const MovieStoreContext = createContext(new MoviesStore())