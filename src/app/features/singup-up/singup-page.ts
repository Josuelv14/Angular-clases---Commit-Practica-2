import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './singup-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingupPage {
onSubmit() {
throw new Error('Method not implemented.');
}
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  private fb = inject(FormBuilder);
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
  });
  get email(){return this.form.get('email') as FormControl;}
  get password(){return this.form.get('password') as FormControl;}
  get confirmPassword(){return this.form.get('confirmPassword') as FormControl;}
 
}
