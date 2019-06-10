import { LayoutNossaGeladaPageModule } from './../layout-nossa-gelada/layout-nossa-gelada.module';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPageInternoPage } from '../modal-page-interno/modal-page-interno.page';


@Component({
  selector: 'app-componente-modal',
  templateUrl: './componente-modal.page.html',
  styleUrls: ['./componente-modal.page.scss'],
})
export class ComponenteModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  /*O Modal abre uma pagina, no exemplo é 
  ModalPage. 
  */
  async showModal() {
    let modal = await this.modalCtrl.create({
      component: ModalPageInternoPage, 
      componentProps: {nome: "Rodrigo", idade: 25}
    }); 

    
    await modal.present(); 
    let data = await modal.onDidDismiss(); 
    console.log(data);

    

   // return await modal.present(); 
    
  }

}
