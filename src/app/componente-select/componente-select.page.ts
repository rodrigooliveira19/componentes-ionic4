import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-select',
  templateUrl: './componente-select.page.html',
  styleUrls: ['./componente-select.page.scss'],
})
export class ComponenteSelectPage implements OnInit {

  private sexo: string[] = ['Masculino','Feminino'];  
  private sexoSelecionado: string;
  private cor: string[]; 

  constructor() { }

  ngOnInit() {
  }

  customAlertOptions: any = {
    header: 'Pizza Toppings',
    subHeader: 'Select your toppings',
    message: '$1.00 per topping',
    translucent: true
  };

  valorSexo() {
    console.log(this.sexoSelecionado); 
  }

  valorCor() {
    console.log(this.cor); 
  }

}
