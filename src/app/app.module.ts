import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatTableModule
} from '@angular/material';
import { PersonService } from './person.service';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule
  ],
  // exports: [
  //   MatButtonModule,
  //   MatCheckboxModule,
  //   MatToolbarModule,
  //   MatCardModule,
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatDatepickerModule,
  //   MatNativeDateModule,
  //   MatRadioModule,
  //   MatSelectModule,
  //   MatSlideToggleModule,
  //   MatTableModule
  // ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
