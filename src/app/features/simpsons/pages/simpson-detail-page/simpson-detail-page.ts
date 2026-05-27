import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { of, tap } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { SimpsonsCacheService } from '../../services/simpsons-cache.service';
import { SimpsonsService } from '../../services/simpsons.service';

@Component({
  selector: 'app-simpson-detail-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './simpson-detail-page.html',
})
export class SimpsonDetailPage {
  private route = inject(ActivatedRoute);
  private simpsonsService = inject(SimpsonsService);
  private cacheService = inject(SimpsonsCacheService);

  private characterId = Number(this.route.snapshot.paramMap.get('id'));

  characterResource = rxResource({
    stream: () => {
      const cached = this.cacheService.getById(this.characterId);
      if (cached) {
        return of(cached);
      }

      return this.simpsonsService.getCharacterById(this.characterId).pipe(
        tap((character) => this.cacheService.save(character))
      );
    },
  });
}
