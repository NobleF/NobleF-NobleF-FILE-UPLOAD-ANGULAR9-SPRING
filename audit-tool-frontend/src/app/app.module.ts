import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { OtherComponent } from './other/other.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UploadComponent } from './upload/upload.component';
import { SingleFileUploadComponent } from './single-file-upload/single-file-upload.component';
import { MultiFileUploadComponent } from './multi-file-upload/multi-file-upload.component';
import { DownloadComponent } from './download/download.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OtherComponent,
    UploadComponent,
    SingleFileUploadComponent,
    MultiFileUploadComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
