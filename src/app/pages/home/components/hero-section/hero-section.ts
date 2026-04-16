import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeroActionCardComponent } from './hero-action-card/hero-action-card';

type HeroActionId = 'claim' | 'my-claims' | 'business';

interface HeroActionCard {
  id: HeroActionId;
  icon: string;
  text: string;
  ariaLabel: string;
}

@Component({
  selector: 'app-hero-section',
  imports: [HeroActionCardComponent],
  standalone: true,
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  readonly actionCards: HeroActionCard[] = [
    {
      id: 'claim',
      icon: 'campaign',
      text: 'Haz una reclamacion',
      ariaLabel: 'Iniciar una reclamacion',
    },
    {
      id: 'my-claims',
      icon: 'folder_open',
      text: 'Mis reclamaciones',
      ariaLabel: 'Ir a mis reclamaciones',
    },
    {
      id: 'business',
      icon: 'computer',
      text: 'Queja Cierta para empresas',
      ariaLabel: 'Conocer soluciones para empresas',
    },
  ];

  onActionClick(action: HeroActionId): void {
    if (action === 'claim') {
      window.alert('Funcionalidad de reclamacion disponible pronto.');
      return;
    }

    if (action === 'my-claims') {
      window.alert('Area de reclamaciones en desarrollo.');
      return;
    }

    window.alert('Portal para empresas disponible pronto.');
  }
}
