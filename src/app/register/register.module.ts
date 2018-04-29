import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register.component';
import { AddBoardComponent } from './add-board/add-board.component';
import { AddPlaceComponent } from './add-place/add-place.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RegisterComponent,
    AddBoardComponent,
    AddPlaceComponent
  ]
})
export class RegisterModule { }
