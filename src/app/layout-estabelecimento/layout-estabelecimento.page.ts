
import { LoadingController } from '@ionic/angular';
import { ApiNossaGeladaService } from './../api-nossa-gelada.service';
import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from '../model/estabelecimento';


@Component({
  selector: 'app-layout-estabelecimento',
  templateUrl: './layout-estabelecimento.page.html',
  styleUrls: ['./layout-estabelecimento.page.scss'],
})
export class LayoutEstabelecimentoPage implements OnInit {

  private resultado : any;
  

  constructor(private apiService: ApiNossaGeladaService,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async getEstabelecimentos() {
    //Chamar a tela de aguarde
    let loading = await this.loadingCtrl.create({
      message: 'Processando', 
      duration: 5000, 
      spinner: 'bubbles'
    }); 
    await loading.present(); 
    this.apiService.getEstabelecimentos().
    then((response)=>{
      this.resultado = JSON.stringify(response); 
      //fecha a tela de aguarde
      loading.dismiss(); 
    })
    .catch((response)=>{
      this.resultado = JSON.stringify(response); 
      //fecha a tela de aguarde
      loading.dismiss(); 
    }); 
  }

  saveEstabelecimento() {
    //let estabelecimento = {descricao:'Estabelecimento Ionic 4'}

    let estabelecimento = new Estabelecimento();  
    estabelecimento.descricao = "Mdel estabelecimento";
    
    this.apiService.saveEstabelecimento(estabelecimento)
    .then((response)=>{
      this.resultado = JSON.stringify(response); 
    })
    .catch((response)=>{
      this.resultado = JSON.stringify(response); 
    }); 
  }

  updateEstabelecimento() {
    let estabelecimento = {id:14, descricao:'Estabelecimento Mais Cerva'}
    
    this.apiService.updateEstabelecimento(estabelecimento)
    .then((response)=>{
      this.resultado = JSON.stringify(response); 
    })
    .catch((response)=>{
      this.resultado = JSON.stringify(response); 
    }); 
  }

  deleteEstabelecimento() {
    let estabelecimento = {id:15}
    
    this.apiService.deleteEstabelecimento(estabelecimento)
    .then((response)=>{
      this.resultado = JSON.stringify(response); 
    })
    .catch((response)=>{
      this.resultado = JSON.stringify(response); 
    }); 
  }

}
