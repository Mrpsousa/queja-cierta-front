import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CreateUserRequest } from '../../../../services/user/user';

@Component({
  selector: 'app-signup-type-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './signup-type-modal.html',
  styleUrl: './signup-type-modal.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupTypeModalComponent {
  close = output<void>();
  submit = output<CreateUserRequest>();

  private readonly fb = inject(FormBuilder);

  step: 'choose' | 'consumer' = 'choose';
  consumerForm: FormGroup;

  mensagem = '';
  erro = '';

  constructor() {
    this.consumerForm = this.fb.group({
      document_id: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      full_name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  iniciarCadastro() {
    this.step = 'choose';
    this.mensagem = '';
    this.erro = '';
    this.consumerForm.reset();
  }

  cadastrarconsumer() {
    this.step = 'consumer';
    this.consumerForm.reset();
    this.mensagem = '';
    this.erro = '';
  }

  cadastrarEmpresa() {
    alert('Funcionalidade de cadastro como empresa ainda não está disponível.');
  }

  onSubmitconsumer(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    if (this.consumerForm.invalid) {
      this.erro = 'Preencha todos os campos corretamente.';
      return;
    }

    this.submit.emit(this.consumerForm.value);
    this.mensagem = '';
    this.erro = '';
  }

  onClose() {
    this.close.emit();
  }
}