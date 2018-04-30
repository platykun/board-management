import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TopComponent} from './top/top.component';
import { HomeComponent} from './top/home/home.component';
import {
  MatMenuModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatExpansionModule,
  MatIconModule
} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {appRoutes} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,

    MatMenuModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,

    FlexLayoutModule,

    BrowserAnimationsModule,

    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,

    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,

    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    TopComponent,
    HomeComponent
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
