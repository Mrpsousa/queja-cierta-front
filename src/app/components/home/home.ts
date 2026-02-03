import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccCreateComponent } from '../acc-create/acc-create';
import { UserService, CreateUserRequest } from '../../services/user/user'; 
import { SecondBar } from '../second-bar/second-bar';

@Component({
  selector: 'app-home',
  imports: [CommonModule, AccCreateComponent, SecondBar],
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
  // console.log('[CALL] creating user ... ', data);

  this.userService.createUser(data).subscribe({
    next: (text) => {
      // console.log('Resposta texto:', text); // use in tests
      alert('Cuenta creada exitosamente!');
      this.closeModal();
    },
    error: (err) => {
      console.error('Error:', err);
      alert('Error: ' + (err.error || 'Intentar otra vez'));
    },
    complete: () => {
      // console.log('[COMPLETE] Requisição terminou'); // use in tests
    }
  });
}
}