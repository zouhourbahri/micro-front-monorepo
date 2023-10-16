import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  currentValue: number = 0;
  constructor() {}
  increment(): void {
    this.currentValue++;
  }
}
