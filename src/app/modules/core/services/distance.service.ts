import { Injectable } from '@angular/core';
import { Candidate } from '../models/candidate.interface';

@Injectable({
  providedIn: 'root'
})
export class DistanceService {

  constructor() { }

  queryDistance(source1: Candidate, source2: Candidate) : number {

    return 0;
  }
}
