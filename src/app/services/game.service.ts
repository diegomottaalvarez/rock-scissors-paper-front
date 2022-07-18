import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { GameModel, RSP_VALUES } from './../models/rsp.model';
import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(
    private localStorageService: LocalStorageService,
    private apiService: ApiService
  ) {
    const currentGame = this.localStorageService.getCurrentGame();
    currentGame && this.setCurrentGame(currentGame);
  }
  private currentGameSubject: BehaviorSubject<GameModel> =
    new BehaviorSubject<GameModel>(null);

  private currentGame$: Observable<GameModel> =
    this.currentGameSubject.asObservable();

  public setCurrentGame(game: GameModel): void {
    this.currentGameSubject.next(game);
  }

  public getCurrentGame(): Observable<GameModel> {
    return this.currentGame$;
  }

  public deleteCurrentGame(): void {
    this.setCurrentGame(null);
    this.localStorageService.setCurrentGame(null);
  }

  public sendChoice(playersChoice: RSP_VALUES): Observable<any> {
    return of(playersChoice);
    return this.apiService.post('/sendChoice', { playersChoice });
  }

  public getRanking(amount: number) {
    return of(amount);
    return this.apiService.get(`/ranking?amount=${amount}`);
  }
}
