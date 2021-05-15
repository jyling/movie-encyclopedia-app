import { gql } from '@apollo/client';
import { SearchMovieInput } from '../types/query';
export const FETCH_MOVIES = gql`
query {
    movie {
      id
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

export const SEARCH_MOVIES = () => {
  return gql`
query getMovies($searchMovieInput : SearchMovieInput, $limit: Int, $page: Int){
  movies (searchMovieInput: $searchMovieInput , limit: $limit, page: $page) {
      Movie { 
        id
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