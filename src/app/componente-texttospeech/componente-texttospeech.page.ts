import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx'; 


@Component({
  selector: 'app-componente-texttospeech',
  templateUrl: './componente-texttospeech.page.html',
  styleUrls: ['./componente-texttospeech.page.scss'],
})
export class ComponenteTexttospeechPage implements OnInit {

  textoFalado : string = 'Ola, Mundo'; 

  constructor(private tts: TextToSpeech) { }

  ngOnInit() {
  }

  falar() {
    this.tts.speak('Hello')
    .then(()=> {
      console.log('Sucesso'); 
    })
    .catch((reason: any)=>{
      console.log(reason); 
    }); 
  }

  falarPortugues() {
    this.tts.speak({
      text: this.textoFalado, 
      rate: 0.75, 
      locale: 'pt-BR'
    })
    .then(()=>{
      alert("Sucesso"); 
    })
    .catch(()=>{
      alert("Erro"); 
    }); 
  }

}
