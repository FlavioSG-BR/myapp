import BadRequest from '@shared/errors/BadRequest';

import { Movie } from "@modules/movies/infra/db/entities";
import {ShowMoviesByNameService} from '@modules/movies/services'

test('it should be ok', () => {
    const movie = new Movie();

    movie.original_title = 'Clube da Luta';

    expect(movie.original_title).toBe('Clube da Luta')
})

test('should not list movies whitout a API key', async () => {
    const showMoviesByNameService = new ShowMoviesByNameService()
    const params = {
        api_key: '',
        query: ''
    }
    await expect(showMoviesByNameService.run(params)).rejects.toThrow(BadRequest)
})