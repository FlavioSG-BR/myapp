import { Router } from 'express';

import MoviesRoutes from '@modules/movies/infra/http/routes/'

const routes = Router();

routes.use(MoviesRoutes)

export default routes;