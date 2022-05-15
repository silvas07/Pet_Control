import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetNewComponent } from './pet/pet-new/pet-new.component';
import { PetPageComponent } from './pet/pet-page/pet-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PetNewComponent,
    PetPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
