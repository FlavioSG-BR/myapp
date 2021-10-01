import BadRequest from '@shared/errors/BadRequest';
import { MoviesListDTO, MoviesListParamsDTO } from '../dtos/movies';

import MoviesRepository from '@modules/movies/infra/db/repositories/MoviesRepository';

class ListMoviesService {
  constructor(
    private moviesRepository = new MoviesRepository()
  ) {}

  public async run(params: MoviesListParamsDTO): Promise<MoviesListDTO> {
    const { api_key} = params; 
    if (!api_key) throw new BadRequest('Chave de acesso da API é obrigatória');
    const data =  await this.moviesRepository.findMovieByParams(params)
    return data
  }
}

export default ListMoviesService;
