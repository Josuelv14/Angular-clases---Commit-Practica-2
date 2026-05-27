import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { of, tap } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { SimpsonsCacheService } from '../../services/simpsons-cache.service';
import { SimpsonsService } from '../../services/simpsons.service';
import { AuthService } from '../../../../core/services/auth.service';
import { FavoritesService } from '../../../../core/services/favorites.service';

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
  private favoritesService = inject(FavoritesService);

  authService = inject(AuthService);

  private characterId = Number(this.route.snapshot.paramMap.get('id'));

  // Signal local: refleja inmediatamente si el personaje es favorito.
  isFavorite = signal(false);

  private isFavoriteEffect = effect(() => {
    const user = this.authService.currentUser();
    if (!user) {
      this.isFavorite.set(false);
      return;
    }

    this.favoritesService.isFavorite(user.uid, this.characterId)
      .then((exists) => this.isFavorite.set(exists))
      .catch(() => this.isFavorite.set(false));
  });

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

  // Alterna entre guardar y eliminar favorito según el estado actual.
  toggleFavorite() {
    const uid = this.authService.uid;
    if (!uid) return;

    if (this.isFavorite()) {
      this.favoritesService.removeFavorite(uid, this.characterId).then(() => {
        this.isFavorite.set(false);
      });
    } else {
      this.favoritesService.addFavorite(uid, this.characterId).then(() => {
        this.isFavorite.set(true);
      });
    }
  }
}
