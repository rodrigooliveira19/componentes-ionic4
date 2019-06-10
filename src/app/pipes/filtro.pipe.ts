import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(pessoas: any[], texto: string): any[] {

    if (texto === '') {
      return pessoas; 
    }

    texto = texto.toLowerCase(); 
    
    return pessoas.filter(item=>{ 
      return item.nome.toLowerCase().includes(texto); 
    }); 
  }

}
