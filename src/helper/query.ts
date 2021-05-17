import { gql } from '@apollo/client';
import { SearchMovieInput } from '../types/query';
export const FETCH_MOVIES = gql`
query {
    movie {
      id
      imageURL
      name
      description
      releasedDate
      
      MovieGenre {
        Genre {
          name
          description
        }
      }
      
      MovieCharacter {
        Character {
          name
        }
      }
      
      MovieWriter {
        People {
          name
        }
      }
      
      MovieDirector {
        People {
          name
        }
      }
      
    }
  }

`

export const FETCH_CHARACTER = gql`
query {
  character {
    id
    name,
    MovieCharacter {
      Movie {
        id
        name
      }
    }
  }
}

`

export const FETCH_GENRE = gql`
query {
  genre {
    id
    name,
     MovieGenre {
      Movie {
        id
        name
      }
    }
  }
}

`

export const FETCH_PEOPLE = gql`
query{
  people {
    id
    name
    MovieDirector {
      People {
        name
      }
    }
      MovieWriter {
        People {
          name
        }
      }
  }
}

`

export const FETCH_CHARACTER_PEOPLE_GENRE = gql`
query {
  people {
    id
    name
    MovieDirector {
      People {
        name
      }
    }
      MovieWriter {
        People {
          name
        }
      }
  }
  genre {
    id
    name,
     MovieGenre {
      Movie {
        id
        name
      }
    }
  }
  character {
    id
    name,
    MovieCharacter {
      Movie {
        id
        name
      }
    }
  }
}
`

export const SEARCH_MOVIES = () => {
  return gql`
query getMovies($searchMovieInput : SearchMovieInput, $limit: Int, $page: Int){
  movies (searchMovieInput: $searchMovieInput , limit: $limit, page: $page) {
      Movie { 
      id
      imageURL
      name
      description
      releasedDate
      
      MovieGenre {
        Genre {
          name
          description
        }
      }
      
      MovieCharacter {
        Character {
          name
        }
      }
      
      MovieWriter {
        People {
          name
        }
      }
      
      MovieDirector {
        People {
          name
        }
      }
      }
      pagination {
      page
      totalPage
    }
      
    }
}

`
}

export const INSERT_MOVIE = gql`
mutation createMovie($createMovieInput : CreateMovieInput){
  createMovie(
    createMovieInput: $createMovieInput
  ) { 
      id
      imageURL
      name
      description
      releasedDate
      
      MovieGenre {
        Genre {
          name
          description
        }
      }
      
      MovieCharacter {
        Character {
          name
        }
      }
      
      MovieWriter {
        People {
          name
        }
      }
      
      MovieDirector {
        People {
          name
        }
      }
    }
}
`

export const UPDATE_MOVIE = gql`
mutation updateMovie($updateMovieInput : UpdateMovieInput!){
  updateMovie(
    updateMovieInput: $updateMovieInput
  ) { 
      id
      imageURL
      name
      description
      releasedDate
      
      MovieGenre {
        id,
        Genre {
          name
          description
        }
      }
      
      MovieCharacter {
        id,
        Character {
          name
        }
      }
      
      MovieWriter {
        id,
        People {
          name
        }
      }
      
      MovieDirector {
        id,
        People {
          name
        }
      }
    }
}
`

export const FIND_MOVIE = gql`
query movie_find($id : Int!) {
  movie_find(id: $id) {
    name
    description
    MovieCharacter {
      Character {
        name
      }
    }
    MovieGenre {
      Genre {
        name
      }
    }
    MovieWriter {
      People {
        name
      }
    }
  }
}
`

export const DELETE_MOVIE = gql`
mutation deleteMovie($id : Int!) {
  removeMovie(id: $id) {
    id
  }
}`