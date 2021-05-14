import { gql } from '@apollo/client';
export const FETCH_MOVIES = gql`
query {
    movie {
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