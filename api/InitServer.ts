import { Server } from './core/Server';
import { DataAccessProvider } from '@providers/DataAccessProvider';
import { GraphDataRoute } from '@routes/GraphData';

export class InitServer extends Server {
  async startService() {
    try {
      const dataP = new DataAccessProvider();
      const graphDataRoute = new GraphDataRoute('/', dataP);

      this.setRoutes([ graphDataRoute ]);

      this.run();
    } catch (err) {
      throw err;
    }
  }
}