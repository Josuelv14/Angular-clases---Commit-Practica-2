import { Injectable, inject } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { toSignal } from '@angular/core/rxjs-interop';
import { from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);

  // Emite null cuando no hay sesión, o el objeto User cuando hay sesión.
  // toSignal convierte el Observable en un signal reactivo para usar en templates.
  currentUser = toSignal(authState(this.auth));

  // Convierte la Promise en Observable para poder usar con rxResource o subscribe.
  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  // Igual que login, se convierte la Promise a Observable.
  register(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  logout() {
    return from(signOut(this.auth));
  }

  // Acceso rápido al uid del usuario actual (null si no está autenticado).
  get uid(): string | null {
    return this.currentUser()?.uid ?? null;
  }
}
