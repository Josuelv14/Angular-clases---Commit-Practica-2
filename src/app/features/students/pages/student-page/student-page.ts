import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-page',
  imports: [RouterLink],
  templateUrl: './student-page.html',
  styleUrls: ['./student-page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentPage {
  readonly students = signal([
    { id: 1, name: 'Jefferson' },
    { id: 2, name: 'Josue' },
    { id: 3, name: 'Milton' },
    { id: 4, name: 'Domenica' },
    { id: 5, name: 'Steven' },
  ]);
}
