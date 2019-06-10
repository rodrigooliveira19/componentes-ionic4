import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.page.html',
  styleUrls: ['./componentes.page.scss'],
})
export class ComponentesPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  openPage(namePage: string) {
    this.navCtrl.navigateForward(namePage); 

  }

  openActionSheet(namePage: string) {
    this.navCtrl.navigateForward(namePage); 
  }

  openPageAlert(namePage: string) {
    this.navCtrl.navigateForward(namePage); 
  }
  
}
