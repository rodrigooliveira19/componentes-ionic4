import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CompMediaCaptureIonicAcademyPage } from './comp-media-capture-ionic-academy.page';
import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/File/ngx'; 

const routes: Routes = [
  {
    path: '',
    component: CompMediaCaptureIonicAcademyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],

  providers : [
    MediaCapture, 
    Media, 
    File
  ], 
  declarations: [CompMediaCaptureIonicAcademyPage]
})
export class CompMediaCaptureIonicAcademyPageModule {}
