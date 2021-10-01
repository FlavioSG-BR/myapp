import api from '@shared/config/api'
import { GenresListDTO ,GenreListParamsDTO} from '@modules/movies/dtos/genres'

  
class MoviesRepository {
  public async findGenresByParams(params: GenreListParamsDTO): Promise<GenresListDTO> {
    const {data} = await api.get('/genre/movie/list', {
        params
    });
    
    return data;
    }
}

export default MoviesRepository;
  