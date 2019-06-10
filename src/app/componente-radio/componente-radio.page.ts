import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-radio',
  templateUrl: './componente-radio.page.html',
  styleUrls: ['./componente-radio.page.scss'],
})
export class ComponenteRadioPage implements OnInit {

  //private biff: boolean = false; 
  //private griff: boolean = false; 
  //private bufford: boolean = false; 
  private opcao: string = "bufford"; 

  constructor() { }

  ngOnInit() {
  }

  verificar() {
    if (this.opcao =="biff") {
      console.log("biff"); 
    }
    else if(this.opcao =="griff") {
      console.log("griff"); 
    }else if (this.opcao =="bufford") {
      console.log("bufford");
    }
    
  }

}
