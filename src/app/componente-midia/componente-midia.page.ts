import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Media, MediaObject} from '@ionic-native/media/ngx'; 
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-componente-midia',
  templateUrl: './componente-midia.page.html',
  styleUrls: ['./componente-midia.page.scss'],
})
export class ComponenteMidiaPage implements OnInit {

  private stopGravacao :boolean = false; 
  private file : MediaObject; 
  private cont: number = 0; 
  private auxCont: number; 
  private name: string; 

  constructor(private media: Media, 
              private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async gravar() {
    if (!this.stopGravacao) {
      this.file = this.media.create(this.name+".mp3"); 
      let toast = await this.toastCtrl.create({
        message: 'Iniciando Gravação '+this.name, 
        duration: 2000
      }); 
  
      toast.present(); 

      this.file.startRecord(); 
      
      this.stopGravacao = true;  

    } else {
      let toast = await this.toastCtrl.create({
        message: 'Finalizando gravação '+this.name, 
        duration: 2000
      }); 
  
      toast.present(); 

      this.file.stopRecord(); 
      
    }
  }

  async lerAudio() {

    if (this.stopGravacao) {
      this.file = this.media.create(this.name+".mp3"); 
      let toast = await this.toastCtrl.create({
        message: 'Iniciando Leitura de audio '+this.name, 
        duration: 2000
      }); 
  
      toast.present(); 

      this.file.play(); 
      this.stopGravacao = false; 


    }else {
      let toast = await this.toastCtrl.create({
        message: 'Finalizando Leitura de audio '+this.name, 
        duration: 2000
      }); 
  
      toast.present(); 

      this.file.stop(); 
      this.stopGravacao = true; 
    }
  }

}
