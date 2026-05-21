import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../validators/password-match.validator';
import { Router } from '@angular/router';
import { emailUniqueValidator } from '../validators/email-unique.validator';

@Component({
  selector: 'app-singnup-page',
  imports: [ReactiveFormsModule],
  templateUrl: './signup-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPage {
  private fb = inject(FormBuilder);

  form = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email], [emailUniqueValidator()]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    },
    { validators: passwordMatchValidator },
  );

  private router = inject(Router);

  onSubmit() {
    if (this.form.invalid) {
      // Marcar todos los campos como touched para mostrar errores
      this.form.markAllAsTouched();

      return;
    }

    console.log('Datos del formulario:', this.form.value);

    // Por ahora, navegar a home
    this.router.navigate(['/']);
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}