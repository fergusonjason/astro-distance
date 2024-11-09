import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DistanceCalculationRequest, isDistanceCalculationRequest } from '../../../core/models/distance-calculation-request.interface';
import { DistanceCalculationResponse } from '../../../core/models/distance-calculation-response.interface';
import { DistanceService } from '../../../core/services/distance.service';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'manual-calculation',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './manual-calculation.component.html',
  styleUrl: './manual-calculation.component.css'
})
export class ManualCalculationComponent {

  inputForm : FormGroup = new FormGroup({
    dist1: new FormControl<number | null>(null, {nonNullable: true}),
    ra1: new FormControl(),
    dec1: new FormControl(),
    dist2: new FormControl(),
    ra2: new FormControl(),
    dec2: new FormControl()
  });

  showResult$ : Subject<boolean> = new Subject<boolean>();
  distance$ : Subject<number | null> = new Subject<number | null>();

  constructor(private distanceService : DistanceService) {}

  calculate() : number {

    const rawValue : any = this.inputForm.getRawValue();
    if (isDistanceCalculationRequest(rawValue)) {
      const request : DistanceCalculationRequest = rawValue as DistanceCalculationRequest;
      const result : DistanceCalculationResponse = this.distanceService.queryDistance(request);
      this.showResult$.next(true);
      this.distance$.next(result.distance);
    }
    return NaN;
  }
}
