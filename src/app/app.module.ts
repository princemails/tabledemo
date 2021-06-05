import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchfilterPipe,
    StudentdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
