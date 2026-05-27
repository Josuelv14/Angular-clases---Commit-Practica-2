import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { SimpsonsService } from '../../services/simpsons.service';

@Component({
  selector: 'app-simpsons-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './simpsons-page.html',
})
export class SimpsonsPage {
  private simpsonsService = inject(SimpsonsService);

  simpsonsResource = rxResource({
    stream: () => this.simpsonsService.getCharacters(1),
  });
}
