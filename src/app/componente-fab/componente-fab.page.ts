import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-fab',
  templateUrl: './componente-fab.page.html',
  styleUrls: ['./componente-fab.page.scss'],
})
export class ComponenteFabPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fabEnd() {
    console.log("fabEnd"); 
  }

  fabApp() {
    console.log("fabApp"); 
  }

  fabCard() {
    console.log("fabCard"); 
  }

}
