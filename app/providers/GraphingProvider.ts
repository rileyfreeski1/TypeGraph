/*8
//import { dynamicImportLoader } from '@providers/DynamicImport';
//export { default as d3} from 'd3-selection';
import { JSDOM } from 'jsdom';
import { writeFile } from 'fs';
import { randomUUID } from 'crypto';
//import d3 from 'd3-selection';

import { DataAccessProvider } from '@providers/DataAccessProvider';
import { DataResponse } from '@models/DataModels';
++i+mport { OPTIONS } from '@vals/Constants';

export class GraphingProvider {
  private chartData: DataResponse[];
  
  constructor(private daProvider: DataAccessProvider) {}

  loadData(totalElements: number): boolean {
    this.chartData = this.daProvider.circArcLengths(totalElements);

    return true;
  }

  async drawGraph() {
    const chartVals = this.chartData.map( val => {
      return {
        key: val.x,
        value: val.y
      }
    });
    
    try {
      //const jsDom = new JSDOM()
      //const d3Node = await this.dynamicImport();
      const body = (await import('d3'))
        .select(OPTIONS.container)
        .select(OPTIONS.selector);
      
      const svg = body
        .append('svg')
        .attr('width', 1280)
        .attr('height', 1024);
      
      console.log(body.select('.container').html());
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async dynamicImport() {
    try {
      return await import('d3-selection');
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

*/