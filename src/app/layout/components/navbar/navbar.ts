import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  createAccountRequested = output<void>();

  readonly quickLinks = [
    'Para ti',
    'Mejores empresas',
    'Detector de Sitio Confiable',
    'Comparar',
    'Descuentos',
    'Para empresas',
  ];

  onSearchSubmit(event: Event): void {
    event.preventDefault();
  }

  onQuickLinkClick(event: Event): void {
    event.preventDefault();
  }

  onCreateAccountClick(): void {
    this.createAccountRequested.emit();
  }
}