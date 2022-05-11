const express = require('express');
const path = require('path');

import { config } from 'dotenv';

import createError from 'http-errors';
import * as e from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import helmet from 'helmet';

config({ path: '.env' });

export class Server {
  name: string;
  private app: e.Application;
  private routes: any[];

  constructor(
    name: string,
    private port: number,
    private version: string
  ) { this.name = name; }

  setRoutes(routes: any[]) {
    this.routes = routes;
  }

  async run() {
    try {
      this.app = express();

      this.initApp();
      this.initRoutes();
      this.setUpServer();
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  }

  private initApp() {
    this.app.set('port', this.port)

    this.app.use(e.json())
    this.app.use(e.urlencoded({ extended: false }))
    this.app.use(cookieParser())
    this.app.use(e.static(path.join(__dirname, 'public')))
    this.app.use(compression())
    this.app.use(helmet())
  }

  private initRoutes() {
    for (const route of this.routes) {
      this.app.use(route.rootpath, route.router)
      console.log(`Route: ${route.name} initialized on Worker ${process.pid}.`, this.name)
    }

    this.app.use( (req, res, next) => {
      next(createError(404))
    })

    this.app.use( (err, req, res, next) => {
      res.locals.message = err.message
      res.locals.error = req.this.app.get('env') === 'development' ? err : {}
      
      res.status(err.status || 500).json({ error: err.message })
    })
  }

  private setUpServer() {
    this.app.listen(this.port, () => {
      console.log(`Server ${process.pid} listening on port ${this.port}...`, this.name)
    })
  }
}