import { Injectable } from '@angular/core';
import { GameModel } from './../models/rsp.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  getCurrentGame(): GameModel {
    const currentGame = localStorage.getItem('currentGame');
    return currentGame && JSON.parse(currentGame);
  }

  setCurrentGame(currentGame: GameModel) {
    if (currentGame) {
      localStorage.setItem('currentGame', JSON.stringify(currentGame));
    } else {
      localStorage.removeItem('currentGame');
    }
  }
}
