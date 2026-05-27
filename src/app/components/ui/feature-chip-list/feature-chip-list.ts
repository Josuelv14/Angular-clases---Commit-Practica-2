import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-chip-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rounded-2xl border border-base-200 bg-base-100 p-4 shadow-sm">
      <p class="text-sm font-bold text-slate-800">{{ title }}</p>
      <div class="mt-3 flex flex-wrap gap-2">
        <span *ngFor="let item of chips" class="badge badge-outline px-3 py-3 text-xs font-semibold">{{ item }}</span>
      </div>
    </div>
  `,
})
export class FeatureChipListComponent {
  @Input() title = 'Características';
  @Input() chips: string[] = [];
}
