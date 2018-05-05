import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { RecordComponent } from './record.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { ResultComponent } from './result/result.component';
import { CheckinComponent } from './checkin/checkin.component';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatOptionModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpClientService} from '../service/component/http-client.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: '', component: RecordComponent},
  { path: 'create-room', component: CreateRoomComponent},
  { path: 'join-room', component: JoinRoomComponent},
  { path: 'result', component: ResultComponent},
  { path: 'checkin', component: CheckinComponent},
  { path: '**', component: RecordComponent}
];

@NgModule({
  imports: [
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule,

    FormsModule,
    ReactiveFormsModule,

    FlexLayoutModule,

    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RecordComponent,
    CreateRoomComponent,
    JoinRoomComponent,
    ResultComponent,
    CheckinComponent
  ],
  providers: [
    HttpClient,
    HttpClientService
  ]

})
export class RecordModule { }
