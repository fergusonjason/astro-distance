import { Injectable } from '@angular/core';
import * as mathjs from 'mathjs';

import { Candidate } from '../models/candidate.interface';
import { DistanceCalculationRequest, isDistanceCalculationRequest } from '../models/distance-calculation-request.interface';
import { DistanceCalculationResponse } from '../models/distance-calculation-response.interface';

@Injectable({
  providedIn: 'root'
})
export class DistanceService {

  constructor() { }

  queryDistance(request : DistanceCalculationRequest) : DistanceCalculationResponse {

    if (isDistanceCalculationRequest(request)) {
      const dec1 : number = request.dec1 as number;
      const dec2 : number = request.dec2 as number;
      const ra1 : number = request.ra1 as number;
      const ra2 : number = request.ra2 as number;
      const dist1 : number = request.dist1 as number;
      const dist2 : number = request.dist2 as number;
      
      // cos(C)=sin(da)sin(db)+cos(da)cos(db)cos(ra−rb)
      let cosC = mathjs.sin(dec1) * mathjs.sin(dec2);
      cosC = cosC + (mathjs.cos(dec1) * mathjs.cos(dec2) * mathjs.cos(ra1 - ra2));

      // c² = a² + b² - 2ab cos(C)
      let c2 : number = mathjs.square(dist1) + mathjs.square(dist2);
      c2 = c2 - ((2 * dist1 * dist2) * cosC);

      // don't need that woke "complex" crap
      let c : number | mathjs.Complex = mathjs.sqrt(c2);
      if (mathjs.isComplex(c)) {
        c = NaN;
      }

      const result : DistanceCalculationResponse = {
        distance: c
      }

      return result;
    }

    return {
      distance: NaN
    };
  }

}
