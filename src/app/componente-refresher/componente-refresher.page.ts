import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-refresher',
  templateUrl: './componente-refresher.page.html',
  styleUrls: ['./componente-refresher.page.scss'],
})
export class ComponenteRefresherPage implements OnInit {

  message : string; 
  message1 : string ="Estamos estudando o framework ionic 4"; 
  newMessage: string ="Ionic é nota 10, esse framework é show de bola...."; 
  trocar : boolean = true; 

  constructor() { }

  ngOnInit() {
    this.message = this.message1; 
  }

  atualizarMessagem(ev : any) {
    setTimeout(() => {
      if(this.trocar) {
        this.message = this.newMessage; 
        this.trocar = false; 
      }else{
        this.message = this.message1; 
        this.trocar = true; 
      }
      ev.target.complete(); 
    }, 1500);

  }

}
