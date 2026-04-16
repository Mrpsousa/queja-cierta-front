import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { SignupTypeModalComponent } from '../../layout/components/header/signup-type-modal/signup-type-modal';
import { MainContentComponent } from './components/main-content/main-content';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { CreateUserRequest, UserService } from '../../services/user/user';
import { AddComponent } from '../../layout/components/add/add';
import { BestDiscountsSectionComponent } from './components/best-discounts-section/best-discounts-section';
import { CustomerReviewsSectionComponent } from './components/customer-reviews-section/customer-reviews-section';
import { BusinessSolutionsSectionComponent } from './components/business-solutions-section/business-solutions-section';
import { FooterComponent } from '../../layout/components/footer/footer';

type FeedbackType = 'success' | 'error' | null;

@Component({
  selector: 'app-home',
  imports: [
    SignupTypeModalComponent,
    HeroSectionComponent,
    MainContentComponent,
    AddComponent,
    BestDiscountsSectionComponent,
    CustomerReviewsSectionComponent,
    BusinessSolutionsSectionComponent,
    FooterComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  showModal = false;
  feedbackMessage = '';
  feedbackType: FeedbackType = null;

  private readonly userService = inject(UserService);

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSearchSubmit(event: Event): void {
    event.preventDefault();
  }

  onCreateUser(data: CreateUserRequest): void {
    this.userService.createConsumidor(data).subscribe({
      next: (response) => {
        this.feedbackType = 'success';
        this.feedbackMessage = `Cuenta creada correctamente. ID de usuario: ${response.user_id}.`;
        this.closeModal();
      },
      error: (err: Error) => {
        this.feedbackType = 'error';
        this.feedbackMessage = `No se pudo crear la cuenta: ${err.message || 'intenta nuevamente.'}`;
      },
    });
  }
}
