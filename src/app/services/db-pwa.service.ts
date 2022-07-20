import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { GameModel } from '../models/rsp.model';
@Injectable({
  providedIn: 'root',
})
export class DbPwaService extends Dexie {
  constructor() {
    super('DexieDB');

    this.version(1).stores({
      games:
        '&username, userWins, computerWins, lastPlayUser, lastPlayComputer',
    });

    this.open()
      .then((data) => {})
      .catch((err) => console.log(err.message));
  }

  addRecord(game: GameModel): void {
    this.table('games')
      .put(game, game.username)
      .then()
      .catch((err) => {
        console.log(err.message);
        // if (err.message.includes('Key already exists in the object store.')) {
        //   this.table('games').update(game.username, game);
        // }
      });
  }

  getRecord(username) {
    this.table('games')
      .get(username)
      .then()
      .catch((err) => {
        console.log(err.message);
      });
  }
}
