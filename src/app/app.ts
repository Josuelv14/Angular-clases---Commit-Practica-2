import { Component } from '@angular/core';
import { AppHeaderComponent } from './components/app-header/header';
import { AppHeroComponent } from './components/app-hero/hero';

@Component({
  selector: 'app-root',
  imports: [AppHeaderComponent, AppHeroComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'ppw-angular-21';
}