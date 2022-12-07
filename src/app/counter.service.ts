import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactiveCounter() {
    this.activeToInactiveCounter++;
    console.log(this.activeToInactiveCounter);
  }

  incrementInactiveToActiveCounter() {
    this.inactiveToActiveCounter++;
    console.log(this.inactiveToActiveCounter);
  }

  constructor() { }
}
