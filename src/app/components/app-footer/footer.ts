import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para los pipes

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class AppFooterComponent {
  // Datos para los pipes
  readonly author = signal('Josué Valdez');
  readonly today = signal(new Date());
  readonly projectCost = signal(1250.50);
  readonly completionRate = signal(0.85);
  readonly techStack = signal({ framework: 'Angular', version: 21 });
}