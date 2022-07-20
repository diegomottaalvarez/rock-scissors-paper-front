import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, switchMap, EMPTY } from 'rxjs';
import { GameModel } from '../models/rsp.model';
import { GameService } from './../services/game.service';
import { CustomConnectionService } from './../services/connection.service';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss'],
})
export class MainGameComponent implements OnInit, OnDestroy {
  currentGame: GameModel;
  subscriptions: Subscription = new Subscription();
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
          console.log(res);
        })
    );
  }
}
