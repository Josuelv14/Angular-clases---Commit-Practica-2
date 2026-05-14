import { Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UpperCasePipe], // 👈 agregar esto
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
})
export class AppHeaderComponent {
  readonly brand = signal('PPW Angular 21');
  readonly showInfo = signal(false);

  readonly toggleLabel = computed(() =>
    this.showInfo() ? 'Ocultar info' : 'Mostrar info'
  );

  toggleInfo(): void {
    this.showInfo.update((value) => !value);
  }

  changeBrand(): void {
    this.brand.update((b) => b + '!');
  }

  resetBrand(): void {
    this.brand.set('PPW Angular 21');
  }
}