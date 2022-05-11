import { Server } from '@core/Server';
import { DataAccessProvider } from '@providers/DataAccessProvider';
import { GraphDataRoute } from '@routes/GraphData';

export class InitServer extends Server {
  async startService() {
    try {
      this.setRoutes([ 
        new GraphDataRoute('/', new DataAccessProvider())
      ]);

      this.run();
    } catch (err) {
      throw err;
    }
  }
}