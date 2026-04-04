import { ChangeDetectionStrategy, Component } from '@angular/core';

type ReputationLevel = 'excellent' | 'good' | 'regular' | 'undefined';

interface CompanyReview {
  name: string;
  logoText: string;
  logoClass: string;
  reputation: ReputationLevel;
  score: number;
  reviewsText: string;
  link: string;
}

@Component({
  selector: 'app-customer-reviews-section',
  templateUrl: './customer-reviews-section.html',
  styleUrl: './customer-reviews-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerReviewsSectionComponent {
  readonly companies: CompanyReview[] = [
    { name: 'Prosize Nutrition', logoText: 'P', logoClass: 'logo--red', reputation: 'undefined', score: 4.4, reviewsText: '87 opiniones', link: '#' },
    { name: 'Dermage', logoText: 'D', logoClass: 'logo--orange', reputation: 'good', score: 4.5, reviewsText: '460 opiniones', link: '#' },
    { name: 'Guanacos Pastas', logoText: 'G', logoClass: 'logo--magenta', reputation: 'undefined', score: 5, reviewsText: '22 opiniones', link: '#' },
    { name: 'Loja Santo Antonio - Confeitaria', logoText: 'SA', logoClass: 'logo--burgundy', reputation: 'good', score: 4.7, reviewsText: '1278 opiniones', link: '#' },
    { name: 'Don Luiz', logoText: 'DL', logoClass: 'logo--dark', reputation: 'undefined', score: 4.9, reviewsText: '268 opiniones', link: '#' },
    { name: 'Facil Persianas', logoText: 'FP', logoClass: 'logo--wine', reputation: 'excellent', score: 4.3, reviewsText: '200 opiniones', link: '#' },
    { name: 'Varotti', logoText: 'V', logoClass: 'logo--light', reputation: 'undefined', score: 4.6, reviewsText: '60 opiniones', link: '#' },
    { name: 'PDV Print', logoText: 'PDV', logoClass: 'logo--green', reputation: 'undefined', score: 4.6, reviewsText: '28 opiniones', link: '#' },
  ];

  getReputationLabel(reputation: ReputationLevel): string {
    if (reputation === 'excellent') {
      return 'Excelente';
    }

    if (reputation === 'good') {
      return 'Buena';
    }

    if (reputation === 'regular') {
      return 'Regular';
    }

    return 'Sin reputacion definida';
  }

  getReputationIcon(reputation: ReputationLevel): string {
    if (reputation === 'excellent') {
      return '🟢';
    }

    if (reputation === 'good') {
      return '🔵';
    }

    if (reputation === 'regular') {
      return '🟡';
    }

    return '❔';
  }

  getStars(score: number): string {
    if (score >= 4.8) {
      return '★★★★★';
    }

    if (score >= 4.0) {
      return '★★★★☆';
    }

    if (score >= 3.0) {
      return '★★★☆☆';
    }

    return '★★☆☆☆';
  }
}
