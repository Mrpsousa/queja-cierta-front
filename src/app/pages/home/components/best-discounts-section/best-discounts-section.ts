import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

interface DiscountCard {
  logo: string;
  companyName: string;
  statusLabel: string;
  statusClass: 'great' | 'good' | 'regular' | 'bad';
  availableDeals: string;
}

@Component({
  selector: 'app-best-discounts-section',
  standalone: true,
  templateUrl: './best-discounts-section.html',
  styleUrl: './best-discounts-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BestDiscountsSectionComponent implements AfterViewInit {
  @ViewChild('carouselTrack') private carouselTrack?: ElementRef<HTMLDivElement>;

  canScrollLeft = false;
  canScrollRight = true;

  readonly cards: DiscountCard[] = [
    {
      logo: 'PB',
      companyName: 'PagBank',
      statusLabel: 'Excelente',
      statusClass: 'great',
      availableDeals: '1 descuento disponible',
    },
    {
      logo: 'GC',
      companyName: 'Gran Cursos',
      statusLabel: 'Buena',
      statusClass: 'good',
      availableDeals: '2 descuentos disponibles',
    },
    {
      logo: 'SP',
      companyName: 'Shopee',
      statusLabel: 'Regular',
      statusClass: 'regular',
      availableDeals: '1 descuento disponible',
    },
    {
      logo: 'NS',
      companyName: 'Netshoes',
      statusLabel: 'Excelente',
      statusClass: 'great',
      availableDeals: '5 descuentos disponibles',
    },
    {
      logo: 'NK',
      companyName: 'Nike',
      statusLabel: 'Buena',
      statusClass: 'good',
      availableDeals: '1 descuento disponible',
    },
    {
      logo: 'PR',
      companyName: 'Probel',
      statusLabel: 'Mala',
      statusClass: 'bad',
      availableDeals: '4 descuentos disponibles',
    },
  ];

  ngAfterViewInit(): void {
    setTimeout(() => this.updateCarouselState());
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.updateCarouselState();
  }

  onTrackScroll(): void {
    this.updateCarouselState();
  }

  scrollCarousel(direction: -1 | 1): void {
    const track = this.carouselTrack?.nativeElement;
    if (!track) {
      return;
    }

    const card = track.querySelector<HTMLElement>('.discount-card');
    if (!card) {
      return;
    }

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || '0');
    const step = card.getBoundingClientRect().width + gap;
    if (step <= 0) {
      return;
    }

    const currentIndex = Math.round(track.scrollLeft / step);
    const maxIndex = this.getMaxIndex(track, step, gap);
    const nextIndex = Math.min(Math.max(currentIndex + direction, 0), maxIndex);

    track.scrollTo({
      left: Math.round(nextIndex * step),
      behavior: 'smooth',
    });

    setTimeout(() => this.updateCarouselState(), 260);
  }

  private updateCarouselState(): void {
    const track = this.carouselTrack?.nativeElement;
    if (!track) {
      return;
    }

    const card = track.querySelector<HTMLElement>('.discount-card');
    if (!card) {
      this.canScrollLeft = false;
      this.canScrollRight = false;
      return;
    }

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || '0');
    const step = card.getBoundingClientRect().width + gap;
    if (step <= 0) {
      this.canScrollLeft = false;
      this.canScrollRight = false;
      return;
    }

    const currentIndex = Math.round(track.scrollLeft / step);
    const maxIndex = this.getMaxIndex(track, step, gap);

    this.canScrollLeft = currentIndex > 0;
    this.canScrollRight = currentIndex < maxIndex;
  }

  private getMaxIndex(track: HTMLDivElement, step: number, gap: number): number {
    const totalCards = track.querySelectorAll('.discount-card').length;
    const visibleCards = Math.max(1, Math.floor((track.clientWidth + gap) / step));
    return Math.max(0, totalCards - visibleCards);
  }
}
