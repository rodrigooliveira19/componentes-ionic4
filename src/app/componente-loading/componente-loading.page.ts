import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-componente-loading',
  templateUrl: './componente-loading.page.html',
  styleUrls: ['./componente-loading.page.scss'],
})
export class ComponenteLoadingPage implements OnInit {

  constructor(private loadingCtrl : LoadingController) { }

  ngOnInit() {
  }


  async loadingDefault() {
    let loading = await this.loadingCtrl.create({
      message: 'Processando', 
      duration: 2000
    }); 
    
    return await loading.present(); 
  }

  async loadingCustomizado() {
    let loading = await this.loadingCtrl.create({
      spinner : 'lines-small', //bubbles , dots, crescent, circles
      message: 'Processando', 
      duration: 2000, 
      translucent: true
    }); 
    
    return await loading.present(); 
  }

}
