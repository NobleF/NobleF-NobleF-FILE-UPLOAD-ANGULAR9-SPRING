import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OtherComponent } from './other/other.component';
import { UploadComponent } from './upload/upload.component';
import { SingleFileUploadComponent } from './single-file-upload/single-file-upload.component';
import { MultiFileUploadComponent } from './multi-file-upload/multi-file-upload.component';
import { DownloadComponent } from './download/download.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'other', component: OtherComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'single-upload', component: SingleFileUploadComponent },
  { path: 'multi-upload', component: MultiFileUploadComponent },
  { path: 'download', component: DownloadComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
