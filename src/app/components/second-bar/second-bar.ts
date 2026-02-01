import { Component } from '@angular/core';

@Component({
  selector: 'app-second-bar',
  imports: [],
  templateUrl: './second-bar.html',
  styleUrl: './second-bar.css',
})
export class SecondBar {
  fazerReclamacao() {
    alert('Funcionalidade de "Fazer uma reclamação" será implementada em breve!');
    // Aqui você pode chamar um serviço, abrir modal, redirecionar, etc.
  }

  minhasReclamacoes() {
    alert('Funcionalidade de "Minhas Reclamações" será implementada em breve!');
    // Exemplo: redirecionar para /minhas-reclamacoes
  }
}