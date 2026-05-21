import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  FormBuilder, 
  ReactiveFormsModule, 
  Validators, 
  FormControl 
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { passwordMatchValidator } from '../validators/password-match.validator';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  // CORRECCIÓN AQUÍ:
  templateUrl: './signup-page.html', 
})
export class SignupPage {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  // Definimos el formulario con sus validaciones
  form = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    },
    { 
      validators: passwordMatchValidator 
    }
  );

  // Getters para facilitar el acceso en el HTML
  get email() { return this.form.get('email')!; }
  get password() { return this.form.get('password')!; }
  get confirmPassword() { return this.form.get('confirmPassword')!; }

  onSubmit() {
    if (this.form.valid) {
      console.log('Datos enviados:', this.form.value);
      // Navegamos al home tras el éxito
      this.router.navigate(['/']);
    } else {
      // Si hay errores, marcamos todo como tocado para que se vean en rojo
      this.form.markAllAsTouched();
    }
  }
}