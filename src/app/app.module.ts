import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmbUiModule } from 'projects/smb-ui/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SmbUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
