import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-componente-nativo-camera',
  templateUrl: './componente-nativo-camera.page.html',
  styleUrls: ['./componente-nativo-camera.page.scss'],
})
export class ComponenteNativoCameraPage implements OnInit {

  private foto: any; 

  constructor(private camera: Camera) { }

  ngOnInit() {
  }

  tirarFoto() {
    const options : CameraOptions ={
      quality: 100, //qualidade da foto.
      destinationType: this.camera.DestinationType.DATA_URL, 
      encodingType: this.camera.EncodingType.JPEG, 
      mediaType: this.camera.MediaType.PICTURE
    }; 

    //imageData contém o valor da imagem em string. 
    this.camera.getPicture(options).then((imageData)=>{
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.foto = base64Image; 
    })
    .catch((err)=>{
      console.log('Erro ao tirar foto. '+err); 
    }); 
  }

}
