import { Component, Inject } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent {
  constructor(private readonly transfer: DataTransferService) {}
  send() {
    this.transfer.increment();
  }
}
