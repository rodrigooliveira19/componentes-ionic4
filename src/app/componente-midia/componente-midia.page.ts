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

  constructor(private media: Media, 
              private toastCtrl: ToastController) { }

  ngOnInit() {
    this.file  = this.media.create("file.mp3"); 
  }

  async gravar() {
    if (!this.stopGravacao) {
      let toast = await this.toastCtrl.create({
        message: 'Iniciando Gravação', 
        duration: 3000
      }); 
  
      toast.present(); 

      this.file.startRecord(); 
      this.file.onStatusUpdate.subscribe(status => console.log(status));
      this.file.onSuccess.subscribe(() => console.log('Action is successful'));
      this.stopGravacao = true;  

    } else {
      let toast = await this.toastCtrl.create({
        message: 'Finalizando gracação', 
        duration: 3000
      }); 
  
      toast.present(); 

      this.file.stopRecord(); 
      this.file.onStatusUpdate.subscribe(status => console.log(status));
      this.file.onSuccess.subscribe(() => console.log('Action is successful'));
      console.log(this.file); 
      
    }
  }

  async lerAudio() {
    if (this.stopGravacao) {
      let toast = await this.toastCtrl.create({
        message: 'Iniciando Leitura de audio', 
        duration: 3000
      }); 
  
      toast.present(); 

      this.file.play(); 
      this.stopGravacao = false; 


    }else {
      let toast = await this.toastCtrl.create({
        message: 'Finalizando Leitura de audio', 
        duration: 3000
      }); 
  
      toast.present(); 

      this.file.stop(); 
    }
  }

}
