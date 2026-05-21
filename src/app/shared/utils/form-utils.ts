import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {
  /** Verifica si un campo es inválido y ha sido tocado */
  static isValidField(form: FormGroup, fieldName: string): boolean {
    const control = form.get(fieldName);
    return !!control?.errors && control.touched;
  }

  /** Obtiene el mensaje de error traducido */
  static getFieldError(form: FormGroup, fieldName: string): string | null {
    const control = form.get(fieldName);
    if (!control) return null;

    const errors = control.errors ?? {};
    return FormUtils.getTextError(errors);
  }

  /** Switch centralizado de mensajes de error */
  static getTextError(errors: ValidationErrors): string | null {
    for (const key of Object.keys(errors)) {
     switch (key) {
        case 'required': return 'Este campo es requerido';
        case 'requiredTrue': return 'Debe aceptar este campo para continuar'; // Subelo aquí
        case 'minlength': return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
        case 'min': return `Valor mínimo permitido: ${errors['min'].min}`;
        case 'email': return 'Formato de correo inválido';
        case 'emailTaken': return 'Este correo ya está registrado';
        case 'passwordMismatch': return 'Las contraseñas no coinciden';
        default: return 'Campo no válido'; // El default siempre al final
      }
    }
    return null;
  }
  static isValidFieldInArray(formArray: FormArray, index: number): boolean {
    const control = formArray.controls[index];
    return !!control?.errors && control.touched;
  }
  static getFieldErrorInArray(formArray: FormArray, index: number): string | null {
    if (formArray.controls.length === 0) return null;

    const errors = formArray.controls[index]?.errors ?? {};
    return FormUtils.getTextError(errors);
  }
}