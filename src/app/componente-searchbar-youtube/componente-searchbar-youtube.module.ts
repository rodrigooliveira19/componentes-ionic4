import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteSearchbarYoutubePage } from './componente-searchbar-youtube.page';
import { PipesModule } from '../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: ComponenteSearchbarYoutubePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule, 
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteSearchbarYoutubePage]
})
export class ComponenteSearchbarYoutubePageModule {}
