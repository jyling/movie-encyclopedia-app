export interface SearchMovieInput {

    id?: number;
  
    name?: string;
  
    releasedDate?: Date;
  
    description?: string;
  
    characters?: string[]
    genres?: string[]
  
    directors?: string[]
  
    writers?: string[]
  }


  export interface CreateMovieInput {
    name: string,
    image: string,
    description: string,
    releasedDate: Date
    characters: string[]
    genres: string[],
    writers: string[],
    directors: string[] 
  }
  

  export interface UpdateMovieInput extends CreateMovieInput {
    id: number
  }