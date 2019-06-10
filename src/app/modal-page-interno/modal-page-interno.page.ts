import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-page-interno',
  templateUrl: './modal-page-interno.page.html',
  styleUrls: ['./modal-page-interno.page.scss'],
})
export class ModalPageInternoPage implements OnInit {

  private nome: string; 
  private idade: number; 

  constructor(private navParam: NavParams, 
              private modalCtrl: ModalController) { }

  ngOnInit() { 
    //PEGA OS PARÂMENTROS PASSADOS NO MODAL. 
    this.nome = this.navParam.get('nome'); 
    this.idade = this.navParam.get('idade'); 
    this.closeModal(); 

  }

  async closeModal() {
    let data = {nome:this.nome,idade: this.idade}; 
    data.idade += data.idade+10; 
    //PASSA O PARÂMENTRO DE RESPOSTA.
    this.modalCtrl.dismiss(data); 

  }

}
