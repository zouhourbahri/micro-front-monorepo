import { Component } from '@angular/core';
import { CounterService } from 'shared-lib';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  constructor(public counterService: CounterService) {}
}
