import BadRequest from '@shared/errors/BadRequest';
import { GenresListDTO, GenreListParamsDTO } from '../dtos/genres';

import GenreRepository from '@modules/movies/infra/db/repositories/GenreRepository';

class ListGenresService {
  constructor(
    private genresRepository = new GenreRepository()
  ) {}

  public async run(params: GenreListParamsDTO): Promise<GenresListDTO> {
    const { api_key} = params; 
    if (!api_key) throw new BadRequest('Chave de acesso da API é obrigatória');
    const data =  await this.genresRepository.findGenresByParams(params)
    return data
  }
}

export default ListGenresService;
