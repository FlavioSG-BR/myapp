import BadRequest from '@shared/errors/BadRequest';
import { MoviesListDTO, SearchMoviesParamsDTO } from '../dtos/movies';

import MoviesRepository from '@modules/movies/infra/db/repositories/MoviesRepository';

class ShowMoviesByNameService {
  constructor(
    private moviesRepository = new MoviesRepository()
  ) {}

  public async run(params: SearchMoviesParamsDTO): Promise<MoviesListDTO> {
    const { api_key} = params; 
    if (!api_key) throw new BadRequest('Chave de acesso da API é obrigatória');
    const data =  await this.moviesRepository.findMovieByName(params)
    return data
  }
}

export default ShowMoviesByNameService;
