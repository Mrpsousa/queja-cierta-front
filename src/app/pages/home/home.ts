import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { SignupTypeModalComponent } from '../../layout/components/header/signup-type-modal/signup-type-modal';
import { MainContentComponent } from './components/main-content/main-content';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { CreateUserRequest, UserService } from '../../services/user/user';

@Component({
  selector: 'app-home',
  imports: [SignupTypeModalComponent, HeroSectionComponent, MainContentComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  showModal = false;

  private readonly userService = inject(UserService);
  private readonly router = inject(Router);

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onCreateUser(data: CreateUserRequest) {
    this.userService.createConsumidor(data).subscribe({
      next: (response) => {
        alert(`Cadastro realizado com sucesso! ID: ${response.user_id}`);

        this.closeModal();

        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1500);
      },
      error: (err) => {
        alert('Erro: ' + (err.message || 'Tente novamente'));
      },
    });
  }
}