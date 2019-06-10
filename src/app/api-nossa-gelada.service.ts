import { AppModule } from './app.module';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiNossaGeladaService {

  private url = 'https://rodrigooliveira19.pythonanywhere.com/api_rest/'; 

  constructor(private http: HttpClient) { }

  getEstabelecimentos() {
    this.url +='estabelecimentos/'; 
    
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.get('https://rodrigooliveira19.pythonanywhere.com/api_rest/estabelecimentos/',
      {headers: headers}).toPromise(); 
    //return this.http.get(this.url).toPromise(); 
    
  }

  saveEstabelecimento(estabelecimento : any) {
    this.url +='cadastrarEstabelecimento/'; 

    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.post('https://rodrigooliveira19.pythonanywhere.com/api_rest/cadastrarEstabelecimento/'
      ,estabelecimento,{headers: headers}).toPromise(); 
  }

  updateEstabelecimento(estabelecimento : any) {
    this.url +='atualizarEstabelecimento/'; 

    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.post('https://rodrigooliveira19.pythonanywhere.com/api_rest/atualizarEstabelecimento/',
      estabelecimento,{headers: headers}).toPromise(); 

  }

  deleteEstabelecimento(estabelecimento : any) {
    this.url +='excluirEstabelecimento/'; 

    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.post(this.url,estabelecimento,{headers: headers}).toPromise(); 

  }
}
