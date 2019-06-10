import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-componente-toast',
  templateUrl: './componente-toast.page.html',
  styleUrls: ['./componente-toast.page.scss'],
})
export class ComponenteToastPage implements OnInit {

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async exibirSimples() {
    let toast = await this.toastCtrl.create({
      message: 'Cadastrado com sucesso', 
      duration: 3000
    }); 

    toast.present(); 
  }

  async exibirToast() {
    let toast = await this.toastCtrl.create({
      message: 'Cadastrado com sucesso', 
      duration: 3000, 
      color: 'light', 
      position : 'middle'
    }); 

    toast.present(); 
  }

  async exibirToastButtom() {
    let toast = await this.toastCtrl.create({
      message: 'Cadastrado com sucesso', 
      duration: 3000, 
      showCloseButton: true
    }); 

    toast.present();
  }

  async exibirToastButtomText() {
    let toast = await this.toastCtrl.create({
      message: 'Cadastrado com sucesso', 
      showCloseButton: true, 
      closeButtonText: 'Ok'
    }); 

    toast.present();
  }

}
