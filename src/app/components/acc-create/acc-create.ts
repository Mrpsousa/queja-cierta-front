// acc-create.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Importe o tipo do service (ajuste o caminho se necessário)
import { CreateUserRequest } from '../../services/user/user'; // ou o caminho correto no seu projeto

@Component({
  selector: 'app-acc-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './acc-create.html',
  styleUrl: './acc-create.css'
})
export class AccCreateComponent {
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<CreateUserRequest>(); // Emite os dados para o componente pai

  // Controle de telas
  step: 'choose' | 'consumer' = 'choose';

  // Formulário de cadastro como consumidor
  consumerForm: FormGroup;

  // Feedback visual
  mensagem: string = '';
  erro: string = '';

  constructor(private fb: FormBuilder) {
    this.consumerForm = this.fb.group({
      document_id: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      full_name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Método chamado pelo pai quando abre o modal (opcional, mas útil)
  iniciarCadastro() {
    this.step = 'choose';
    this.mensagem = '';
    this.erro = '';
    this.consumerForm.reset();
  }

  // Escolheu "Consumidor" → mostra formulário
  cadastrarconsumer() {
    this.step = 'consumer';
    this.consumerForm.reset();
    this.mensagem = '';
    this.erro = '';
  }

  // Escolheu "Empresa" → mostra alerta
  cadastrarEmpresa() {
    alert('Funcionalidade de cadastro como empresa ainda não está disponível.');
  }

  // Submete o formulário de consumidor
  onSubmitconsumer(event: Event) {
    event.preventDefault();   // Impede submit nativo do form
    event.stopPropagation();  // Impede bubble do evento

    if (this.consumerForm.invalid) {
      this.erro = 'Preencha todos os campos corretamente.';
      return;
    }

    // Emite os dados do form para o componente pai (HomeComponent) tratar a requisição
    this.submit.emit(this.consumerForm.value);

    // Limpa mensagens (opcional: pode mostrar loading aqui)
    this.mensagem = '';
    this.erro = '';
  }

  // Fecha o modal/componente
  onClose() {
    this.close.emit();
  }
}