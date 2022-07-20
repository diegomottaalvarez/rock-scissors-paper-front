import { Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Subscription, switchMap } from 'rxjs';
import { GameModel, RSPLSGAME_RESULT_OPTIONS } from '../models/rsp.model';
import { CustomConnectionService } from './../services/connection.service';
import { GameService } from './../services/game.service';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss'],
})
export class MainGameComponent implements OnInit, OnDestroy {
  currentGame: GameModel;
  subscriptions: Subscription = new Subscription();
  result: RSPLSGAME_RESULT_OPTIONS;

  constructor(
    private gameService: GameService,
    private customConnectionService: CustomConnectionService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.gameService.getCurrentGame().subscribe((res) => {
        this.currentGame = res;
      })
    );
    this.subscriptions.add(
      this.customConnectionService.hasConnection$
        .pipe(
          switchMap((res) => {
            return res && this.currentGame
              ? this.gameService.persistDataInMongo(this.currentGame)
              : EMPTY;
          })
        )
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  playRound(playersChoice): void {
    this.subscriptions.add(
      this.gameService
        .playRound(playersChoice, this.currentGame)
        .subscribe((res) => {
          this.result = res.result;
        })
    );
  }
}
