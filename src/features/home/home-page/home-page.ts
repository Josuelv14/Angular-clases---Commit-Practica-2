import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppHeroComponent } from "../../../app/components/app-hero/app-hero";
import { Router } from '@angular/router';
import { StudentPage } from '../../students/pages/student-page/student-page';

@Component({
  selector: 'app-home-page',
  imports: [AppHeroComponent],
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomePage {

  private router = inject(Router);

  goToStudentsPage() {
    this.router.navigate(['/students']);
  }

}
