import './modAlias';

import { InitServer } from './InitServer';

const server = new InitServer('Graph API', 4000, '0.1.0');

try {
  server.startService();
} catch (err) {
  console.log(err);
  process.exit(1);
}