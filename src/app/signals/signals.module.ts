import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { DataTransferService } from './data-transfer.service';
import { MainComponent } from './main/main.component';
import { SignalRoutingModule } from './signal-routing.module';



@NgModule({
  declarations: [
    SenderComponent,
    ReceiverComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    SignalRoutingModule
  ],
  providers: [
    DataTransferService
  ]
})
export class SignalsModule { }
