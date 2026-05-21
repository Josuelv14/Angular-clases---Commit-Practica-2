import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../shared/utils/form-utils';

@Component({
  selector: 'app-project-config-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './project-config-page.html',
})
export class ProjectConfigPage {
  private fb = inject(FormBuilder);
  public formUtils = FormUtils;

  // 1. Definición del Formulario
  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    lenguajes: this.fb.array(
      [
        this.fb.control('JavaScript', [Validators.required, Validators.minLength(3)]),
        this.fb.control('TypeScript', [Validators.required, Validators.minLength(3)]),
      ],
      [Validators.minLength(2)]
    ),
    tipo: ['fullstack', Validators.required],
    notificaciones: [true],
    terminosAceptados: [false, Validators.requiredTrue],
  });

  // 2. Control para el input de "Agregar" (fuera del FormArray)
  newLenguaje: FormControl = this.fb.control('', [Validators.required, Validators.minLength(3)]);

  // 3. Getters
  get lenguajes() {
    return this.myForm.get('lenguajes') as FormArray;
  }

  // 4. Métodos de Acción
  onAddLenguaje() {
    if (this.newLenguaje.invalid) return;
    this.lenguajes.push(this.fb.control(this.newLenguaje.value, [Validators.required, Validators.minLength(3)]));
    this.newLenguaje.reset();
  }

  onDeleteLenguaje(index: number) {
    this.lenguajes.removeAt(index);
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log('Configuración de Proyecto:', this.myForm.value);
  }
}