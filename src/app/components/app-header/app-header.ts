import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UpperCasePipe, RouterLink, RouterLinkActive],
  templateUrl: './app-header.html',
  styleUrls: ['./app-header.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppHeaderComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  readonly brand = signal('PPW Angular 21');
  readonly showInfo = signal(false);
  readonly toggleLabel = computed(() => (this.showInfo() ? 'Ocultar info' : 'Mostrar info'));

  // Expone el estado del usuario actual
  currentUser = this.authService.currentUser;

  toggleInfo() {
    this.showInfo.update((value) => !value);
  }

  changeBrand(): void {
    this.brand.update((valor) => valor + '!');
  }

  resetBrand(): void {
    this.brand.set('PPW Angular 21');
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/auth']);
    });
  }
}