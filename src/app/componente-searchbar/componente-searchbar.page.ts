import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-searchbar',
  templateUrl: './componente-searchbar.page.html',
  styleUrls: ['./componente-searchbar.page.scss'],
})
export class ComponenteSearchbarPage implements OnInit {

  nome: string = '';
  pessoas: any;
  pessoasFiltradas: any;

  constructor() {
    this.pessoas = [
      { id: 1, nome: "Rodrigo Silva de Oliveira", idade: 25 },
      { id: 2, nome: "Marcos Silva de Maia", idade: 26 },
      { id: 3, nome: "Elem Silva de Martins", idade: 30 },
      { id: 4, nome: "Ester Santos de Oliveira", idade: 5 },
      { id: 1, nome: "Brisa Brandão de Oliveira", idade: 15 },
      { id: 1, nome: "Jamile Silva de Oliveira", idade: 26 },
      { id: 1, nome: "Tamara Silva de Neto", idade: 27 },
      { id: 1, nome: "Elias Papa de da Hora", idade: 32 },
    ];

    this.pessoasFiltradas = this.pessoas;
  }

  ngOnInit() {
  }

  filtarItens() {
    this.pessoasFiltradas = this.filtrarPessoas(this.nome);
  }

  filtrarPessoas(nome: string) {
    
    if (!nome) {
      return this.pessoas; 
    }
    return this.pessoasFiltradas.filter((item) => {
      return item.nome.toLowerCase().includes(nome.toLowerCase());
    });


  }

}
