import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GameModel } from '../models/rsp.model';
import { GameService } from './../services/game.service';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss'],
})
export class MainGameComponent implements OnInit, OnDestroy {
  currentGame: GameModel;
  subscriptions: Subscription = new Subscription();
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.gameService.getCurrentGame().subscribe((res) => {
        this.currentGame = res;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  playRound(playersChoice): void {
    this.gameService
      .playRound(playersChoice, this.currentGame.username)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
