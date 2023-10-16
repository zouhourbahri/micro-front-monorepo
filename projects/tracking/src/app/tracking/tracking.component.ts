import { Component } from '@angular/core';
import { CounterService } from 'shared-lib';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss'],
})
export class TrackingComponent {
  constructor(public counterService: CounterService) {}
}
