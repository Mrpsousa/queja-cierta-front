import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccCreateComponent } from '../acc-create/acc-create';
import { UserService, CreateUserRequest } from '../../services/user/user'; 

@Component({
  selector: 'app-home',
  imports: [CommonModule, AccCreateComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
  showModal = false;

  constructor(private userService: UserService) {}
  
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

 onCreateUser(data: CreateUserRequest) {
  console.log('[CALL] Iniciando criação de usuário', data);

  this.userService.createUser(data).subscribe({
    next: (text) => {
      console.log('Resposta texto:', text);
      alert('Conta criada com sucesso!');
      this.closeModal();
    },
    error: (err) => {
      console.error('Erro:', err);
      alert('Erro: ' + (err.error || 'Tente novamente'));
    },
    complete: () => {
      console.log('[COMPLETE] Requisição terminou');
    }
  });
}
}