import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-checkbox',
  templateUrl: './componente-checkbox.page.html',
  styleUrls: ['./componente-checkbox.page.scss'],
})
export class ComponenteCheckboxPage implements OnInit {

  meses : any = [
    {mes : "janeiro", numero: 1 , marcado: true},
    {mes : "fevereiro", numero: 2 , marcado: false},
    {mes : "março", numero: 3 , marcado: false},
    {mes : "abril", numero: 4 , marcado: true},
    {mes : "maio", numero: 5 , marcado: false},
    {mes : "junho", numero: 6 , marcado: true}
  ]; 

  constructor() { }

  ngOnInit() {
    console.log(this.meses); 
  }

  verificar() {
    console.table(this.meses); 
  }

}
