import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-layout-nossa-gelada',
  templateUrl: './layout-nossa-gelada.page.html',
  styleUrls: ['./layout-nossa-gelada.page.scss'],
})
export class LayoutNossaGeladaPage implements OnInit {

  constructor(private Ctrl: NavController) { }

  ngOnInit() {
  }

  openPage(namePage: string) {
    this.Ctrl.navigateForward(namePage); 
  }

}
