import { ChangeDetectionStrategy, Component } from '@angular/core';

type RankingMode = 'best' | 'worst';

interface CategoryOption {
  value: string;
  label: string;
}

interface RankingCompany {
  name: string;
  score: string;
  logoText: string;
  logoClass: string;
  verified: boolean;
  status: string;
  link: string;
}

interface CategoryRanking {
  best: RankingCompany[];
  worst: RankingCompany[];
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.html',
  styleUrl: './main-content.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContentComponent {
  rankingMode: RankingMode = 'best';
  selectedCategory = 'ecommerce';

  readonly categories: CategoryOption[] = [
    { value: 'ecommerce', label: 'Ecommerce - Muebles y Decoración' },
    { value: 'telefonia', label: 'Telefonía' },
    { value: 'bancos', label: 'Bancos y Financieras' },
    { value: 'viajes', label: 'Viajes y Turismo' },
    { value: 'salud', label: 'Salud y Bienestar' },
  ];

  private readonly rankingsByCategory: Record<string, CategoryRanking> = {
    ecommerce: {
      best: [
        { name: 'NETSOFAS', score: '9.8', logoText: 'N', logoClass: 'ranking-logo--orange', verified: true, status: 'Reputación excelente', link: '#' },
        { name: 'Madesa Muebles', score: '9.3', logoText: 'M', logoClass: 'ranking-logo--red', verified: true, status: 'Muy buena reputación', link: '#' },
        { name: 'Imperio Muebles y Electro', score: '9.1', logoText: 'I', logoClass: 'ranking-logo--blue', verified: true, status: 'Muy buena reputación', link: '#' },
      ],
      worst: [
        { name: 'Decora Fácil', score: '3.1', logoText: 'D', logoClass: 'ranking-logo--orange', verified: false, status: 'Reputación crítica', link: '#' },
        { name: 'Hogar Directo', score: '2.7', logoText: 'H', logoClass: 'ranking-logo--red', verified: false, status: 'Alto índice de reclamos', link: '#' },
        { name: 'Muebles Rápidos', score: '2.2', logoText: 'R', logoClass: 'ranking-logo--blue', verified: false, status: 'Baja satisfacción', link: '#' },
      ],
    },
    telefonia: {
      best: [
        { name: 'Conecta Max', score: '9.6', logoText: 'C', logoClass: 'ranking-logo--blue', verified: true, status: 'Atención destacada', link: '#' },
        { name: 'Linea Viva', score: '9.1', logoText: 'L', logoClass: 'ranking-logo--orange', verified: true, status: 'Resolución rápida', link: '#' },
        { name: 'Nova Móvil', score: '8.9', logoText: 'N', logoClass: 'ranking-logo--red', verified: true, status: 'Muy buena reputación', link: '#' },
      ],
      worst: [
        { name: 'Más Señal', score: '3.4', logoText: 'S', logoClass: 'ranking-logo--blue', verified: false, status: 'Cobertura inestable', link: '#' },
        { name: 'TeleMundo Plus', score: '2.9', logoText: 'T', logoClass: 'ranking-logo--orange', verified: false, status: 'Retrasos frecuentes', link: '#' },
        { name: 'Móvil 24', score: '2.5', logoText: 'M', logoClass: 'ranking-logo--red', verified: false, status: 'Reclamos sin resolver', link: '#' },
      ],
    },
    bancos: {
      best: [
        { name: 'Banco Aurora', score: '9.4', logoText: 'A', logoClass: 'ranking-logo--blue', verified: true, status: 'Excelente soporte', link: '#' },
        { name: 'Capital Uno', score: '9.2', logoText: 'C', logoClass: 'ranking-logo--red', verified: true, status: 'Confiabilidad alta', link: '#' },
        { name: 'Financia Ya', score: '8.8', logoText: 'F', logoClass: 'ranking-logo--orange', verified: true, status: 'Muy buena reputación', link: '#' },
      ],
      worst: [
        { name: 'Cuenta Fácil', score: '3.0', logoText: 'C', logoClass: 'ranking-logo--orange', verified: false, status: 'Demoras en soporte', link: '#' },
        { name: 'Banco Centralis', score: '2.8', logoText: 'B', logoClass: 'ranking-logo--blue', verified: false, status: 'Altas quejas abiertas', link: '#' },
        { name: 'Ahorro Total', score: '2.1', logoText: 'A', logoClass: 'ranking-logo--red', verified: false, status: 'Satisfacción muy baja', link: '#' },
      ],
    },
    viajes: {
      best: [
        { name: 'Viaja Plus', score: '9.5', logoText: 'V', logoClass: 'ranking-logo--orange', verified: true, status: 'Atención destacada', link: '#' },
        { name: 'Destino Seguro', score: '9.2', logoText: 'D', logoClass: 'ranking-logo--blue', verified: true, status: 'Cambios ágiles', link: '#' },
        { name: 'Rumbo Fácil', score: '8.9', logoText: 'R', logoClass: 'ranking-logo--red', verified: true, status: 'Muy buena reputación', link: '#' },
      ],
      worst: [
        { name: 'Tour Flash', score: '3.2', logoText: 'T', logoClass: 'ranking-logo--red', verified: false, status: 'Cancelaciones frecuentes', link: '#' },
        { name: 'Vacaciones YA', score: '2.9', logoText: 'V', logoClass: 'ranking-logo--orange', verified: false, status: 'Reembolsos lentos', link: '#' },
        { name: 'Aerolink 360', score: '2.4', logoText: 'A', logoClass: 'ranking-logo--blue', verified: false, status: 'Baja satisfacción', link: '#' },
      ],
    },
    salud: {
      best: [
        { name: 'Vida Care', score: '9.7', logoText: 'V', logoClass: 'ranking-logo--blue', verified: true, status: 'Servicio excelente', link: '#' },
        { name: 'Clinimed', score: '9.3', logoText: 'C', logoClass: 'ranking-logo--red', verified: true, status: 'Respuesta rápida', link: '#' },
        { name: 'Salud Prime', score: '9.0', logoText: 'S', logoClass: 'ranking-logo--orange', verified: true, status: 'Muy buena reputación', link: '#' },
      ],
      worst: [
        { name: 'MedicHoy', score: '3.3', logoText: 'M', logoClass: 'ranking-logo--blue', verified: false, status: 'Largas esperas', link: '#' },
        { name: 'Plan Plus', score: '2.8', logoText: 'P', logoClass: 'ranking-logo--red', verified: false, status: 'Cobertura limitada', link: '#' },
        { name: 'CliniExpress', score: '2.3', logoText: 'C', logoClass: 'ranking-logo--orange', verified: false, status: 'Reclamos recurrentes', link: '#' },
      ],
    },
  };

  get displayedCompanies(): RankingCompany[] {
    return this.rankingsByCategory[this.selectedCategory]?.[this.rankingMode] ?? [];
  }

  setRankingMode(mode: RankingMode): void {
    this.rankingMode = mode;
  }

  onCategoryChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedCategory = target.value;
  }

  formatPosition(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}
