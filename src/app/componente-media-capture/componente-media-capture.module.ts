import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';

import { ComponenteMediaCapturePage } from './componente-media-capture.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteMediaCapturePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteMediaCapturePage], 
  providers: [MediaCapture]
})
export class ComponenteMediaCapturePageModule {}
