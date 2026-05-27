import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { SimpsonsService } from '../../services/simpsons.service';
import { PaginationService } from '../../../../shared/services/pagination.service';

@Component({
  selector: 'app-simpsons-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './simpsons-page.html',
})
export class SimpsonsPage {
  private simpsonsService = inject(SimpsonsService);
  paginationService = inject(PaginationService);

  readonly charactersPerPage = signal(10);

  simpsonsResource = rxResource({
    params: () => ({
      page: this.paginationService.currentPage(),
      limit: this.charactersPerPage(),
    }),
    stream: ({ params }) =>
      this.simpsonsService.getCharactersOptions({
        page: params.page,
        limit: params.limit,
      }),
  });
}
