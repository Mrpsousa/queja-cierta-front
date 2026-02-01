import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-bar',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './main-bar.html',
  styleUrl: './main-bar.css',
})

export class MainBarComponent {
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<{ full_name: string; email: string; username: string }>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      full_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();  // impede submit nativo do form
    event.stopPropagation(); // impede bubble

  if (this.form.valid) {
    this.submit.emit(this.form.value);
    this.close.emit();
  }
  }

  onClose() {
    this.close.emit();
  }
}