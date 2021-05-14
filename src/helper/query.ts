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

export const SEARCH_MOVIES = (query : SearchMovieInput) => {
  const queryFormated = JSON.stringify(query).replace(/"([^"]+)":/g, '$1:')
  return gql`
query {
  movie(searchMovieInput: ${queryFormated}) {
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
}