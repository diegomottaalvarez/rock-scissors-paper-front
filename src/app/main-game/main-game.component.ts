import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameModel } from '../models/rsp.model';
import { GameService } from './../services/game.service';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss'],
})
export class MainGameComponent implements OnInit {
  currentGame$: Observable<GameModel>;
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.currentGame$ = this.gameService.getCurrentGame();
  }
}
