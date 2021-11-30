import { Request, Response } from 'express';

import { HomePageService, ListMoviesService, ShowMoviesByNameService } from '@modules/movies/services';

type IndexRequest = Request & {
  query: {
    api_key: string,
    with_genres: number[],
    sort_by: string,
  };
};

type ShowRequest = Request & {
  query: {
    api_key: string;
    query: string;
  };
};
class MoviesController {

  public async html(req: IndexRequest, res: Response): Promise<Response> {
    const homePageService = new HomePageService();
    const data = await homePageService.run()
    return res.json(data)
  }

  public async index(req: IndexRequest, res: Response): Promise<Response> {
    const listMoviesService = new ListMoviesService();
    const data = await listMoviesService.run(req.query)
    return res.json(data)
  }

  public async show(req: ShowRequest, res: Response): Promise<Response> {
    const showMoviesByNameService = new ShowMoviesByNameService();
    const data = await showMoviesByNameService.run(req.query)
    return res.json(data)
  }
}

export default new MoviesController