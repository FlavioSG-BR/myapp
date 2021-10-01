import { Router } from 'express';

import {MoviesControllers,GernesControllers } from '../controllers';

const routes = Router();

routes.get('/movies', MoviesControllers.index)
routes.get('/search', MoviesControllers.show)
routes.get('/genres', GernesControllers.index)

export default routes