import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Media } from '@ionic-native/media/ngx'; 


import { IonicModule } from '@ionic/angular';

import { ComponenteMidiaPage } from './componente-midia.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteMidiaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteMidiaPage], 
  providers: [Media]
})
export class ComponenteMidiaPageModule {}
