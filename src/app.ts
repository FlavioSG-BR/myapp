/* eslint-disable no-console */

import express from 'express';

import routes from '@shared/infra/http/routes';

class App {
  public server: express.Application;

  public constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(express.json());
  }

  public async run(): Promise<void> {
    this.server.listen(3333, () => console.log('[✨] Server listening on port 3333'));
  }

  private routes(): void {
    this.server.use(routes);
  }

  
}

export default new App();
