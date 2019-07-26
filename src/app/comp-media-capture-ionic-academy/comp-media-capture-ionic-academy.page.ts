import { Media, MediaObject } from '@ionic-native/media/ngx';
import { MediaCapture, CaptureVideoOptions, MediaFile } from '@ionic-native/media-capture/ngx';
import { Component, OnInit, ViewChild } from '@angular/core';
import { File } from '@ionic-native/File/ngx';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


const MEDIA_FILES_KEY = 'mediaFiles';

@Component({
  selector: 'app-comp-media-capture-ionic-academy',
  templateUrl: './comp-media-capture-ionic-academy.page.html',
  styleUrls: ['./comp-media-capture-ionic-academy.page.scss'],
})
export class CompMediaCaptureIonicAcademyPage implements OnInit {

  private mediaFiles = []; 
  @ViewChild('myvideo') myVideo: any; 

  constructor(private mediaCapture: MediaCapture, 
              private media: Media, 
              private file: File, 
              private navCtrl: NavController, 
              private storage: Storage) { }

  ngOnInit() {
   this.storage.get(MEDIA_FILES_KEY)
   .then(res=>{
     this.mediaFiles = JSON.parse(res) || []; 
   }); 
  }

  captureAudio() {
    this.mediaCapture.captureAudio()
    .then(res =>{
      this.storeMediaFiles(res); 
    })
    .catch(()=>{
      console.log('Erro ao capturar audio'); 
    }); 
  }

  captureVideo() {
    let options : CaptureVideoOptions = {
      limit : 1, 
      duration : 30
    }

    this.mediaCapture.captureVideo(options).then((res : MediaFile[]) => {
      let capturedFile = res[0];
      let fileName = capturedFile.name;
      let dir = capturedFile['localURL'].split('/');
      dir.pop();
      let fromDirectory = dir.join('/');      
      var toDirectory = this.file.dataDirectory;
      

      this.file.copyFile(fromDirectory,fileName,toDirectory,fileName).then(res =>{
        this.storeMediaFiles([{name: fileName, size: capturedFile.size}]);
      })
      .catch(()=>{
        console.log('Erro ao trocar o caminho'); 
      }); 

    }).catch(()=>{
      console.log('Erro ao gravar video'); 
    }); 
  }

  play(myFile) {

    /*
    if (myFile.name.indexOf('.3gpp') > -1) {
      const audioFile: MediaObject = this.media.create(myFile.localURL);
      audioFile.play();
    } else {
      let path = this.file.dataDirectory + myFile.name;
      let url = path.replace(/^file:\/\//, '');
      let video = this.myVideo.nativeElement;
      video.src = url;
      video.play();
    }*/
  }

  storeMediaFiles(files : any) {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      if (res) {
        let arr = JSON.parse(res);
        arr = arr.concat(files);
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
      } else {
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files))
      }
      this.mediaFiles = this.mediaFiles.concat(files);
    })
  }

}
