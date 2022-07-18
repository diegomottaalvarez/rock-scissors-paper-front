import { Component, Input, OnInit } from '@angular/core';
import { GameModel } from './../../models/rsp.model';

@Component({
  selector: 'app-game-scores',
  templateUrl: './game-scores.component.html',
  styleUrls: ['./game-scores.component.scss'],
})
export class GameScoresComponent implements OnInit {
  @Input() game: GameModel;

  constructor() {}

  ngOnInit(): void {}
}
