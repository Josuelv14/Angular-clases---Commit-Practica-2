import { Component } from '@angular/core';
import { AppHeaderComponent } from './components/app-header/app-header';
import { RouterOutlet } from "@angular/router";
import { AppFooterComponent } from './components/app-footer/footer';

@Component({
  selector: 'aplicacion',
  standalone: true,
  imports: [AppHeaderComponent, AppFooterComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'ppw-angular-21';
}