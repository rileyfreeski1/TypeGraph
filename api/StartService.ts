import './modAlias';

import { InitServer } from './InitServer';

const API_NAME = 'Graph API';
const PORT = 4000;
const VERSION = '0.1.0';

const server = new InitServer(API_NAME, PORT, VERSION);

try {
  server.startService();
} catch (err) {
  console.log(err);
  process.exit(2);
}