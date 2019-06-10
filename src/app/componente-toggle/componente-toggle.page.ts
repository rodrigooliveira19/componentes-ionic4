import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-toggle',
  templateUrl: './componente-toggle.page.html',
  styleUrls: ['./componente-toggle.page.scss'],
})
export class ComponenteTogglePage implements OnInit {

  toggle : boolean = false;  
  marcado : boolean = true; 

  constructor() { }

  ngOnInit() {
  }

  conferirValor() {
    console.log(this.toggle); 
  }

}
