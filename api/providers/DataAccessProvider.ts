import {
  LATERAL_OFFSET,
  VERTICAL_OFFSET,
  INTERVAL,
  RADIUS,
  THRESHOLD,
  MODULUS,
  squareFunc
} from '@configs/Constants'
import { DataResponse } from '@models/DataResponse';

export class DataAccessProvider {
  timeDomain: number[];
  
  constructor() {}

  circArcLengths(totalElements: number): DataResponse[]  {
    return Array(totalElements)
      .fill(0)
      .map( (_, idx) => {
        const timeDomain = idx * INTERVAL
        
        return {
          x: timeDomain,
          y: this.internalSqrt(timeDomain) + VERTICAL_OFFSET,
          hypo: Math.sqrt(squareFunc(timeDomain) + this.internalSqrt(timeDomain) + VERTICAL_OFFSET)
        }
      })
      .filter( val => { 
        if (val.hypo % MODULUS < THRESHOLD) return val; 
      })
      .map( val => { 
        return { x: val.x, y: val.y }
      })
      .splice(1);
  }

  internalSqrt(interval: number): number {
    return -Math.sqrt(Math.abs(squareFunc(RADIUS) - squareFunc(interval - LATERAL_OFFSET)));
  }
}