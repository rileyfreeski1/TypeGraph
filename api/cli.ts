import './modAlias';

import { DataAccessProvider } from '@providers/DataAccessProvider';

export function cli(): boolean {
  const cliArgs = process.argv;

  if (cliArgs.length !== 3) {
    console.log('Incorrect number of args passed');
    process.exit(1);
  }

  const dataP = new DataAccessProvider();
  const resp = dataP.circArcLengths(parseInt(cliArgs[2]));

  return true;
}

console.log(cli());