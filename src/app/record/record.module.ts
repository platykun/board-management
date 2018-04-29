import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordComponent } from './record.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { ResultComponent } from './result/result.component';
import { CheckinComponent } from './checkin/checkin.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RecordComponent,
    CreateRoomComponent,
    JoinRoomComponent,
    ResultComponent,
    CheckinComponent
  ]
})
export class RecordModule { }
