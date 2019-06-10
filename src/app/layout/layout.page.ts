
import { Component, OnInit } from '@angular/core';
import { NavController } from '../../../node_modules/@ionic/angular'; 



@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  openPage(namePage : string) {
    this.navCtrl.navigateForward(namePage); 
  }

}
