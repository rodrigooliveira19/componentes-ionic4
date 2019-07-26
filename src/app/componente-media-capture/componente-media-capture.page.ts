import { Component, OnInit } from '@angular/core';
import { MediaCapture, CaptureImageOptions, MediaFile, CaptureError } from '@ionic-native/media-capture/ngx';

@Component({
  selector: 'app-componente-media-capture',
  templateUrl: './componente-media-capture.page.html',
  styleUrls: ['./componente-media-capture.page.scss'],
})
export class ComponenteMediaCapturePage implements OnInit {


  constructor(private mediaCapture: MediaCapture) { }

  ngOnInit() {
  }

  audio() {
    this.mediaCapture.captureAudio()
    .then((data: MediaFile[])=>{
      console.log(data)
    })
    .catch((err: CaptureError)=>{
      console.error(err); 
    }); 

  }

  image() {
    let options: CaptureImageOptions = { limit: 3 }
    this.mediaCapture.captureImage(options)
      .then(
        (data: MediaFile[]) => {
          console.log(data); 
        }
      );
  }

  video() {
    this.mediaCapture.captureVideo()
    .then((data: MediaFile[])=>{
      console.log(data)
    })
    .catch((err: CaptureError)=>{
      console.error(err); 
    }); 

  }

}
