import { Request, Response, NextFunction } from 'express';

import { BaseRoute } from '@core/BaseRoute';
import { DataAccessProvider } from '@providers/DataAccessProvider';
import { DataRequest } from '@models/DataRequest';

const NAME = 'Graph Data Route';

export class GraphDataRoute extends BaseRoute {
  name = NAME;
  constructor(rootpath: string, private dataP: DataAccessProvider) {
    super(rootpath);
    this.router.post('/graphdata', this.getData.bind(this));
  }

  getData(req: Request, res: Response, next: NextFunction) {
    const totalInterval: DataRequest = req.body;
    try {
      const payload = this.dataP.circArcLengths(totalInterval.totalCount);

      res
        .status(200)
        .send({ payload });
    } catch (err) {
      
      res
        .status(404)
        .send({ err: 'Error in returning graph data' })
    }
  }
}