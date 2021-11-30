import BadRequest from '@shared/errors/BadRequest';

import GenreRepository from '@modules/movies/infra/db/repositories/GenreRepository';

class HomePageService {
  constructor(
    private genresRepository = new GenreRepository()
  ) {}

  public async run(): Promise<String> {
    const data =  'Front-end page'
    
    return data
  }
}

export default HomePageService;
