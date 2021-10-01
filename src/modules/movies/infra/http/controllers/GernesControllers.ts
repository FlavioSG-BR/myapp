import { Request, Response } from 'express';

import ListGenresService from '@modules/movies/services/ListGenresService';

type IndexRequest = Request & {
  query: {
    api_key: string
    language: string;
  };
};
class GernesControllers {
  public async index(req: IndexRequest, res: Response): Promise<Response> {
    const { api_key, language} = req.query;
    const listGenresService = new ListGenresService();
    const data = await listGenresService.run({api_key,language})
    return res.json(data)
  }
}

export default new GernesControllers