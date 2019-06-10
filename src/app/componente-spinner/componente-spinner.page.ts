import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-spinner',
  templateUrl: './componente-spinner.page.html',
  styleUrls: ['./componente-spinner.page.scss'],
})
export class ComponenteSpinnerPage implements OnInit {

  private go : boolean; 
  

  constructor() { }

  ngOnInit() {
    this.go = true
  }

  goo() {
    if(this.go){
      this.go = false; 
    }else if(this.go == false){
      this.go = true; 
    }

  }


}
