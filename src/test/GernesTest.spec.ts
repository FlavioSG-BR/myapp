import BadRequest from '@shared/errors/BadRequest';

import { Genre } from "@modules/movies/infra/db/entities";
import ListGenresService from '@modules/movies/services/ListGenresService'

test('it should be ok', () => {
    const genre = new Genre();

    genre.name = 'Aventura';

    expect(genre.name).toBe('Aventura')
})

test('should not list movies whitout a API key', async () => {
    const listGenresService = new ListGenresService()
    const params = {
        api_key: '',
        language: 'pt_BR',
    }
    await expect(listGenresService.run(params)).rejects.toThrow(BadRequest)
})