import api from '@shared/config/api'
import { MoviesListDTO, SearchMoviesParamsDTO,MoviesListParamsDTO } from '@modules/movies/dtos/movies'

  
class MoviesRepository {

  public async findMovieByParams(params: MoviesListParamsDTO): Promise<MoviesListDTO | undefined> {
    const {data} = await api.get('/discover/movie/', {
      params
    });
    
    return data;
  }

  public async findMovieByName(params: SearchMoviesParamsDTO): Promise<MoviesListDTO | undefined> {
    const {data} = await api.get('/search/movie/', {
      params
    });
    return data;
  }
}

export default MoviesRepository;
  