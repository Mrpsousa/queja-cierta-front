import { Component } from '@angular/core';
import { SecondBarCard } from './second-bar-card/second-bar-card';

@Component({
  selector: 'app-second-bar',
  imports: [SecondBarCard],
  templateUrl: './second-bar.html',
  styleUrl: './second-bar.css',
})
export class SecondBar {
  buttons = [
    {
      icon: 'campaign',
      text: 'Haz una reclamación',
      action: () => this.fazerReclamacao()
    },
    {
      icon: 'folder_open',
      text: 'Mis Reclamaciones',
      action: () => this.minhasReclamacoes()
    },
    {
      icon: 'computer',
      text: 'Reclame Aquí para empresas',
      action: () => this.reclameAquiEmpresas()
    }
  ];

  fazerReclamacao() {
    alert('Funcionalidade de "Fazer uma reclamação" será implementada em breve!');
    // Aqui você pode chamar um serviço, abrir modal, redirecionar, etc.
  }

  minhasReclamacoes() {
    alert('Funcionalidade de "Minhas Reclamações" será implementada em breve!');
    // Exemplo: redirecionar para /minhas-reclamacoes
  }

  reclameAquiEmpresas() {
    alert('Funcionalidade de "Reclame Aqui para empresas" será implementada em breve!');
    // Exemplo: redirecionar para /reclame-aqui
  }
}