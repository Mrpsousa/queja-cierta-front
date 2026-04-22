import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../layout/components/navbar";
import { FooterComponent } from "../../../layout/components/footer/footer";
import { AddComponent } from "../../../layout/components/add/add";

type CompanyRatingLabel = 'Ótimo' | 'Bom' | 'Regular' | 'Ruim';
type RankingFilter = 'all' | 'verified' | 'best' | 'worst';

interface CompanyCardModel {
  id: string;
  rank: number;
  name: string;
  verified: boolean;
  ratingLabel: CompanyRatingLabel;
  ratingValue: number;
  solvedPercent: number;
  totalComplaints: number;
  logoUrl?: string;
}

interface RankedCompanyCardModel extends CompanyCardModel {
  displayRank: number;
}

@Component({
  selector: 'app-subsegments',
  imports: [NavbarComponent, FooterComponent, RouterLink, AddComponent],
  templateUrl: './subsegments.html',
  styleUrl: './subsegments.css',
})
export class Subsegments {
  readonly pageSize = 10;
  readonly filters: Array<{ id: RankingFilter; label: string }> = [
    { id: 'verified', label: 'Verificadas' },
    { id: 'best', label: 'Melhores' },
    { id: 'worst', label: 'Piores' },
  ];

  companies: CompanyCardModel[] = [
    {
      id: 'meet-call',
      rank: 1,
      name: 'Meet Call',
      verified: true,
      ratingLabel: 'Ótimo',
      ratingValue: 8.5,
      solvedPercent: 93.3,
      totalComplaints: 32,
    },
    {
      id: 'madm-brasil',
      rank: 2,
      name: 'MADM BRASIL',
      verified: true,
      ratingLabel: 'Ótimo',
      ratingValue: 8.4,
      solvedPercent: 90.5,
      totalComplaints: 28,
    },
    {
      id: 'forum-model',
      rank: 3,
      name: 'Forum Model - São Paulo Agency',
      verified: true,
      ratingLabel: 'Ótimo',
      ratingValue: 8.4,
      solvedPercent: 85.0,
      totalComplaints: 20,
    },
    {
      id: 'nova-talent',
      rank: 4,
      name: 'Nova Talent',
      verified: false,
      ratingLabel: 'Bom',
      ratingValue: 7.6,
      solvedPercent: 78.2,
      totalComplaints: 41,
    },
    {
      id: 'prime-agencia',
      rank: 5,
      name: 'Prime Agência',
      verified: true,
      ratingLabel: 'Bom',
      ratingValue: 7.4,
      solvedPercent: 72.0,
      totalComplaints: 50,
    },
    {
      id: 'studio-models',
      rank: 6,
      name: 'Studio Models',
      verified: true,
      ratingLabel: 'Ótimo',
      ratingValue: 8.1,
      solvedPercent: 88.9,
      totalComplaints: 27,
    },
    {
      id: 'bella-agency',
      rank: 7,
      name: 'Bella Agency',
      verified: false,
      ratingLabel: 'Regular',
      ratingValue: 6.5,
      solvedPercent: 61.4,
      totalComplaints: 57,
    },
    {
      id: 'elite-scout',
      rank: 8,
      name: 'Elite Scout',
      verified: true,
      ratingLabel: 'Bom',
      ratingValue: 7.8,
      solvedPercent: 80.0,
      totalComplaints: 35,
    },
    {
      id: 'viva-model',
      rank: 9,
      name: 'Viva Model',
      verified: true,
      ratingLabel: 'Ótimo',
      ratingValue: 8.7,
      solvedPercent: 92.1,
      totalComplaints: 38,
    },
    {
      id: 'urban-casting',
      rank: 10,
      name: 'Urban Casting',
      verified: false,
      ratingLabel: 'Regular',
      ratingValue: 6.9,
      solvedPercent: 66.0,
      totalComplaints: 25,
    },
    {
      id: 'golden-face',
      rank: 11,
      name: 'Golden Face',
      verified: true,
      ratingLabel: 'Bom',
      ratingValue: 7.2,
      solvedPercent: 70.4,
      totalComplaints: 54,
    },
    {
      id: 'next-gen-models',
      rank: 12,
      name: 'Next Gen Models',
      verified: false,
      ratingLabel: 'Ruim',
      ratingValue: 4.8,
      solvedPercent: 42.0,
      totalComplaints: 63,
    },
    {
      id: 'topline-casting',
      rank: 13,
      name: 'Topline Casting',
      verified: true,
      ratingLabel: 'Ótimo',
      ratingValue: 8.9,
      solvedPercent: 95.1,
      totalComplaints: 19,
    },
    {
      id: 'north-star-models',
      rank: 14,
      name: 'North Star Models',
      verified: false,
      ratingLabel: 'Bom',
      ratingValue: 7.1,
      solvedPercent: 69.3,
      totalComplaints: 44,
    },
    {
      id: 'atelier-face',
      rank: 15,
      name: 'Atelier Face',
      verified: true,
      ratingLabel: 'Ótimo',
      ratingValue: 8.2,
      solvedPercent: 89.7,
      totalComplaints: 22,
    },
    {
      id: 'pulse-agency',
      rank: 16,
      name: 'Pulse Agency',
      verified: false,
      ratingLabel: 'Regular',
      ratingValue: 6.1,
      solvedPercent: 58.4,
      totalComplaints: 48,
    },
    {
      id: 'premier-casting',
      rank: 17,
      name: 'Premier Casting',
      verified: true,
      ratingLabel: 'Bom',
      ratingValue: 7.9,
      solvedPercent: 83.6,
      totalComplaints: 31,
    },
    {
      id: 'orbit-models',
      rank: 18,
      name: 'Orbit Models',
      verified: false,
      ratingLabel: 'Ruim',
      ratingValue: 5.2,
      solvedPercent: 47.8,
      totalComplaints: 59,
    },
  ];

  currentPage = 1;
  currentFilter: RankingFilter = 'best';
  searchQuery = '';

  get rankedCompanies(): RankedCompanyCardModel[] {
    const query = this.searchQuery.trim().toLowerCase();
    let list = [...this.companies];

    if (this.currentFilter === 'verified') {
      list = list.filter((company) => company.verified);
    } else if (this.currentFilter === 'best') {
      list = list.sort((a, b) => b.ratingValue - a.ratingValue || a.rank - b.rank);
    } else if (this.currentFilter === 'worst') {
      list = list.sort((a, b) => a.ratingValue - b.ratingValue || a.rank - b.rank);
    }

    if (query) {
      list = list.filter((company) => company.name.toLowerCase().includes(query));
    }

    if (this.currentFilter === 'all' || this.currentFilter === 'verified') {
      list = list.sort((a, b) => a.rank - b.rank);
    }

    return list.map((company, index) => ({
      ...company,
      displayRank:
        this.currentFilter === 'worst' ? index + 1 : company.rank,
    }));
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.rankedCompanies.length / this.pageSize));
  }

  get pagedCompanies(): RankedCompanyCardModel[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.rankedCompanies.slice(start, start + this.pageSize);
  }

  get visibleCount(): number {
    return this.rankedCompanies.length;
  }

  getCompanyInitials(name: string): string {
    const words = name.trim().split(/\s+/).slice(0, 2);
    const initials = words.map((w) => w[0]).join('');
    return initials.toUpperCase();
  }

  private scrollToTop(): void {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  private setPage(page: number): void {
    const nextPage = Math.min(Math.max(1, page), this.totalPages);
    if (nextPage === this.currentPage) return;
    this.currentPage = nextPage;
    this.scrollToTop();
  }

  setFilter(filter: RankingFilter): void {
    this.currentFilter = filter;
    this.currentPage = 1;
    this.scrollToTop();
  }

  setSearchQuery(value: string): void {
    this.searchQuery = value;
    this.currentPage = 1;
  }

  goFirst(): void {
    this.setPage(1);
  }

  goPrev(): void {
    this.setPage(this.currentPage - 1);
  }

  goNext(): void {
    this.setPage(this.currentPage + 1);
  }

  goLast(): void {
    this.setPage(this.totalPages);
  }
}
