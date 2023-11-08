import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  count = signal<number>(0);
  constructor() {
    
  }

  increment() {
    this.count.update((val) => val + 1);
  }
}
