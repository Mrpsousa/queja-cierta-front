import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../layout/components/navbar";
import { FooterComponent } from "../../../layout/components/footer/footer";

type CompanyRatingLabel = 'Ótimo' | 'Bom' | 'Regular' | 'Ruim';

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

@Component({
  selector: 'app-subsegments',
  imports: [NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './subsegments.html',
  styleUrl: './subsegments.css',
})
export class Subsegments {
  readonly pageSize = 10;

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
  ];

  currentPage = 1;

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.companies.length / this.pageSize));
  }

  get pagedCompanies(): CompanyCardModel[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.companies.slice(start, start + this.pageSize);
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
