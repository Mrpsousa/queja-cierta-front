import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeroActionCardComponent } from './hero-action-card/hero-action-card';

@Component({
  selector: 'app-hero-section',
  imports: [HeroActionCardComponent],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  buttons = [
    {
      icon: 'campaign',
      text: 'Haz una reclamación',
      action: () => this.fazerReclamacao(),
    },
    {
      icon: 'folder_open',
      text: 'Mis Reclamaciones',
      action: () => this.minhasReclamacoes(),
    },
    {
      icon: 'computer',
      text: 'Reclame Aquí para empresas',
      action: () => this.reclameAquiEmpresas(),
    },
  ];

  fazerReclamacao() {
    alert('Funcionalidade de "Fazer uma reclamação" será implementada em breve!');
  }

  minhasReclamacoes() {
    alert('Funcionalidade de "Minhas Reclamações" será implementada em breve!');
  }

  reclameAquiEmpresas() {
    alert('Funcionalidade de "Reclame Aqui para empresas" será implementada em breve!');
  }
}