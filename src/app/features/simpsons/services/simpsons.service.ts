import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, delay, map, tap, throwError, timeout } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SimpsonsCharacter, SimpsonsResponse } from '../models/simpsons.interface';

export interface Options {
  page?: number;
  limit?: number;
}

@Injectable({ providedIn: 'root' })
export class SimpsonsService {
  private http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  getCharacters(page: number = 1): Observable<SimpsonsResponse> {
    return this.http.get<SimpsonsResponse>(`${this.baseUrl}/characters?page=${page}`).pipe(
      tap((response) => console.log('Simpsons API response:', response)),
      map((response) => ({
        ...response,
        results: response.results.map((character) => ({
          ...character,
          portrait_path: this.normalizePortraitPath(character.portrait_path),
        })),
      })),
      catchError(() => throwError(() => new Error('No se pudieron cargar los personajes')))
    );
  }

  getCharactersOptions(options: Options = {}): Observable<SimpsonsResponse> {
    const { page = 1, limit = 10 } = options;
    return this.http
      .get<SimpsonsResponse>(`${this.baseUrl}/characters?page=${page}&limit=${limit}`)
      .pipe(
        tap((response) => console.log('Simpsons API response:', response)),
        map((response) => ({
          ...response,
          results: response.results.map((character) => ({
            ...character,
            portrait_path: this.normalizePortraitPath(character.portrait_path),
          })),
        })),
        catchError(() => throwError(() => new Error('No se pudieron cargar los personajes')))
      );
  }

  getCharacterById(id: number): Observable<SimpsonsCharacter> {
    return this.http.get<SimpsonsCharacter>(`${this.baseUrl}/characters/${id}`).pipe(
      delay(300),
      timeout(5000),
      tap((character) => console.log('Character loaded:', character.name)),
      map((character) => ({
        ...character,
        occupation: character.occupation || 'Sin ocupación registrada',
        portrait_path: this.normalizePortraitPath(character.portrait_path),
      })),
      catchError(() => throwError(() => new Error('No se pudo cargar el personaje')))
    );
  }

  private normalizePortraitPath(path: string): string {
    if (!path) {
      return path;
    }

    if (path.startsWith('http')) {
      return path;
    }

    return `https://cdn.thesimpsonsapi.com/500${path}`;
  }
}
