import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { CreateUserRequest } from '../../../../services/user/user';

type SignupStep = 'choose' | 'consumer';

@Component({
  selector: 'app-signup-type-modal',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './signup-type-modal.html',
  styleUrl: './signup-type-modal.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupTypeModalComponent {
  close = output<void>();
  submit = output<CreateUserRequest>();

  private readonly fb = inject(FormBuilder);

  step: SignupStep = 'choose';
  message = '';
  errorMessage = '';

  readonly consumerForm = this.fb.nonNullable.group({
    document_id: ['', Validators.required],
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    full_name: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  selectConsumerSignup(): void {
    this.step = 'consumer';
    this.message = '';
    this.errorMessage = '';
    this.consumerForm.reset();
  }

  selectCompanySignup(): void {
    this.message = '';
    this.errorMessage = 'El registro como empresa aun no esta disponible.';
  }

  goBackToChoose(): void {
    this.step = 'choose';
    this.message = '';
    this.errorMessage = '';
    this.consumerForm.reset();
  }

  submitConsumer(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.consumerForm.invalid) {
      this.consumerForm.markAllAsTouched();
      this.message = '';
      this.errorMessage = 'Completa todos los campos correctamente.';
      return;
    }

    this.message = '';
    this.errorMessage = '';
    this.submit.emit(this.consumerForm.getRawValue());
  }

  onClose(): void {
    this.close.emit();
  }
}
