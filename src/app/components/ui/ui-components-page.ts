import { Component } from '@angular/core';
import { GlassStatCardComponent } from './glass-stat-card/glass-stat-card';
import { GradientCtaBannerComponent } from './gradient-cta-banner/gradient-cta-banner';
import { FeatureChipListComponent } from './feature-chip-list/feature-chip-list';

@Component({
  selector: 'app-ui-components-page',
  standalone: true,
  imports: [GlassStatCardComponent, GradientCtaBannerComponent, FeatureChipListComponent],
  templateUrl: './ui-components-page.html',
})
export class UiComponentsPage {
  readonly quickChips = [
    'Glass Surface', 'Gradient CTA', 'Responsive Grid',
    'Standalone Components', 'Tailwind + DaisyUI', 'Angular 21'
  ];
}