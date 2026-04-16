import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-hero-action-card',
  templateUrl: './hero-action-card.html',
  styleUrl: './hero-action-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroActionCardComponent {
  icon = input('campaign');
  text = input('');
  ariaLabel = input('');
  cardClick = output<void>();

  onClick(): void {
    this.cardClick.emit();
  }
}
