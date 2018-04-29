import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PasswordComponent } from './password/password.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EditProfileComponent,
    PasswordComponent
  ]
})
export class ManageModule { }
