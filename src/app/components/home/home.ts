// home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // ← certifique-se de importar
import { UserService, CreateUserRequest } from '../../services/user/user'; 
import { CommonModule } from '@angular/common';
import { AccCreateComponent } from '../acc-create/acc-create';
import { SecondBar } from '../second-bar/second-bar';
import { MainContent } from "../main-content/main-content";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AccCreateComponent, SecondBar, MainContent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  showModal = false;

  constructor(
    private userService: UserService,
    private router: Router // ← injete o Router
  ) {}

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
        
        // Fecha o modal imediatamente
        this.closeModal();

        // Redireciona após um pequeno delay (para o usuário ver o alert)
        // ou remova o setTimeout se quiser redirecionar instantaneamente
        setTimeout(() => {
          this.router.navigate(['/']); // ← redireciona para a rota principal (home)
          // Ou use: this.router.navigate(['/dashboard']); / ['/perfil']; etc.
        }, 1500); // 1.5 segundos de delay (opcional)
      },
      error: (err) => {
        alert('Erro: ' + (err.message || 'Tente novamente'));
      }
    });
  }
}