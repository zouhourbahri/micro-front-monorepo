import { Component } from '@angular/core';
import { CounterService } from 'shared-lib';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  constructor(public counterService: CounterService) {}
}
