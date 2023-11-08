import { Component, effect, inject } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent {
  value!: number;

  constructor(private readonly transfer: DataTransferService) {
    effect(() => {
      this.value = this.transfer.count();
    })
  }

}
