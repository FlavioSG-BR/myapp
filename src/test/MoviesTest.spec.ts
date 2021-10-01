import BadRequest from '@shared/errors/BadRequest';

import { Movie } from "@modules/movies/infra/db/entities";
import {ListMoviesService} from '@modules/movies/services'

test('it should be ok', () => {
    const movie = new Movie();

    movie.original_title = 'Clube da Luta';

    expect(movie.original_title).toBe('Clube da Luta')
})

test('should not list movies whitout a API key', async () => {
    const listMoviesService = new ListMoviesService()
    const params = {
        api_key: '',
        with_genres: [],
        sort_by: ''
    }
    await expect(listMoviesService.run(params)).rejects.toThrow(BadRequest)
})