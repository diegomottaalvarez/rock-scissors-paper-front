import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { GameService } from '../../services/game.service';
import { LocalStorageService } from './../../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private gameService: GameService,
    private localStorageService: LocalStorageService
  ) {}

  canActivate(): Observable<boolean> {
    return this.gameService.getCurrentGame().pipe(
      map((res) => {
        if (res) {
          return true;
        }
        this.router.navigate(['']);
        return false;
      })
    );
  }
}
