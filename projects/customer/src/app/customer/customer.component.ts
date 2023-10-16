import { Component } from '@angular/core';
import { CounterService } from 'shared-lib';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent {
  constructor(public counterService: CounterService) {}
}
